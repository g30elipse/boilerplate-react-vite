import { createContext, useEffect, useState } from "react";
import {createPageContext, ViewModel } from "../../core/hoc";
import { TEntity } from "../../types";



function useHome(): HomeViewModelState {
   

    const state: HomeViewModelState = {
        text: 'hello world',
    }

    return state
}

export const HomeContext = createPageContext<HomeViewModelState>({
    text: '',
})

/**
 * This state will be available to the subtree via context api
 */
export interface HomeViewModelState {
    text: string
}


class HomeViewModel implements ViewModel<HomeViewModelState> {
    Hook = useHome;
    CtxProvider = HomeContext.Provider
}



export default HomeViewModel;