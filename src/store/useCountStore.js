
import {create} from "zustand";

export const useCountStore = create((setState)=>({
    counter : 0,
    addCount: () => setState((state) =>({
        counter : state.counter + 1
    })),
    substractCount: () => setState((state) =>({
        counter : state.counter - 1
    }))
}))