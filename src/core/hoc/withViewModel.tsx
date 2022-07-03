import React, { createContext } from "react";


export interface ViewModel<H> {
    Hook: () => H
    CtxProvider: React.Provider<H>
}



export function createPageContext<S>(s: S){
    return createContext<S>({
        ...s,
    });
}

export function withViewModel<ComponentProps, HookProps>(C: React.FC<ComponentProps>, vm: ViewModel<HookProps>) {


    return (props: ComponentProps) => {
        const state = vm.Hook();
        
        

        return (
            <vm.CtxProvider value={{...state}}>
                <C {...props} />
            </vm.CtxProvider>
        )
    }
}
