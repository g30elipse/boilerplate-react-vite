import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { request } from "../utils"


export interface ListingViewModel<H, E, M> {
    Hook: () => H
    CtxProvider: React.Provider<H & ContextValue<E, M>>
}

interface ContextValue<E, M> {
    response: {
        list: E[],
        meta?: M
    }
    loading: boolean
    search: string
    updateEntity: (entity: E) => void
}

export interface ListingViewModelConfig<R, E, M> {
    apiUrl: string
    responseToListTransformer?: (response: R) => E[]
    responseToMetaTransformer?: (response: R) => M
    /**
     * Transform the url param string to query string
     */
    onUrlParmChange?: (urlParam: string) => string
    equalityComparer?: (a: E, b: E) => boolean
}

export interface ListingViewModelState<E, M> extends ContextValue<E, M> {}

export function createListingPageContext<S, E, M>(s: S){
    return createContext<S & ListingViewModelState<E, M>>({
        ...s,
        response: {
            list: [],
            meta: undefined
        },
        loading: false,
        search: '',
        updateEntity: () => {}
    });
}

export function withListingViewModel<ReturnType, EntityType, Meta, ComponentProps, HookProps>(C: React.FC<ComponentProps>, vm: ListingViewModel<HookProps, EntityType, Meta>, config:ListingViewModelConfig<ReturnType, EntityType, Meta>) {


    return (props: ComponentProps) => {
        const state = vm.Hook();
        const {search} = useLocation();
        const [loading, setLoading] = useState(true);
        const [response, setResponse] = useState<ContextValue<EntityType, Meta>['response']>({list: [], meta: undefined});

        const updateEntity = (entity: EntityType) => {
            const index = response.list.findIndex(e => config.equalityComparer ? config.equalityComparer(e, entity) : JSON.stringify(e) === JSON.stringify(entity));
            if (index >= 0) {
                const newEntityList = [...response.list];
                newEntityList[index] = entity;
                setResponse(prev => ({...prev, list: newEntityList}));
            }
        }

        useEffect(() => {
            setLoading(true);
            const q = config.onUrlParmChange?.(search)
            request({
               url: `/${config.apiUrl}?${q}`
            })
            .then(r => r.data)
            .then(r => {
                setResponse({
                    list: config.responseToListTransformer ? config.responseToListTransformer(r) : r,
                    meta: config.responseToMetaTransformer ? config.responseToMetaTransformer(r) : undefined
                });
            })
            .finally(() => setLoading(false))
        },[search])

        

        return (
            <vm.CtxProvider value={{...state,response, search, loading, updateEntity}}>
                <C {...props} />
            </vm.CtxProvider>
        )
    }
}
