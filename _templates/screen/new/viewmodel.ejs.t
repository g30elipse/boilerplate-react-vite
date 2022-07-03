---
to: src/Screens/<%= name %>/<%= name %>ViewModel.ts
---
import { createContext, useState } from "react";
import ViewModel from "../../Core/@types";




/**
 * Business logic of the screen: <%= name %>
 */
function use<%= name %>(): <%= name %>ViewModelState {


    const state: <%= name %>ViewModelState  = {

    }    

    return state
}

export const <%= name %>Context = createContext<<%= name %>ViewModelState>({
    // Provide Default values
});


/**
 * This state will be available to the subtree via context api
 */
export interface <%= name %>ViewModelState {
    
}


class <%= name %>ViewModel implements ViewModel<<%= name %>ViewModelState> {
    Hook = use<%= name %>;
    CtxProvider = <%= name %>Context.Provider
}



export default <%= name %>ViewModel;