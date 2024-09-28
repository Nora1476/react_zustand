
import {create} from "zustand";

export const useBoolStore = create((setState)=>({
    bool : false,
    setBoolToggle : () => setState((state) => ({
        bool : !state.bool,
    })),
}))