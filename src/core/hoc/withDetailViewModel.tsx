import React, { createContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { request } from "../utils"


export interface DetailViewModel<H, E> {
    Hook: () => H
    CtxProvider: React.Provider<H & ContextValue<E>>
}


interface ContextValue<E> {
    entity: E | null
    loading: boolean
}



export interface DetailViewModelConfig<R, E> {
    apiUrl: string
    param: string
    transformer?: (response: R) => E
    /**
     * Transform the url param string to query string
     */
    onUrlParmChange?: (urlParam: string) => string
}

export interface DetailViewModelState<E> extends ContextValue<E> {}

export function createDetailPageContext<S, E>(s: S){
    return createContext<S & DetailViewModelState<E>>({
        ...s,
        entity: null,
        loading: false
    });
}

export function withDetailViewModel<R, E, P, H>(C: React.FC<P>, vm: DetailViewModel<H, E>, config:DetailViewModelConfig<R, E>) {


    return (props: P) => {
        const state = vm.Hook();
        const params = useParams();
        const {search} = useLocation();
        const [loading, setLoading] = useState(true);
        const [entity, setEntity] = useState<E | null>(null);

        useEffect(() => {
            setLoading(true);
            const q = config.onUrlParmChange?.(search)
            request({
               url: `/${config.apiUrl}/${params[config.param]}?${q}`
            })
            .then(r => r.data)
            .then(r => {
                setEntity(config.transformer ? config.transformer(r) : r);
            })
            .finally(() => setLoading(false))
        },[params, search])

        

        return (
            <vm.CtxProvider value={{...state,  entity, loading}}>
                <C {...props} />
            </vm.CtxProvider>
        )
    }
}
