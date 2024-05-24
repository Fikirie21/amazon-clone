import { useReducer } from "react";
import { Type } from "./Action.type";

export const initialState={
    basket:[]
}


export const reducer=(state,action)=>{
    switch(action.type){
case Type.ADD_TO_BASKET:
    return{...state,
        basket:[...state.basket,action.item]
    }

    default:return state;
}
}

