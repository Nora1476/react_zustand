import {create} from "zustand";

export const useThemeStore = create((setState) => ({
    themeMode: false,
    setToggleTheme: () => setState((state) => ({
        themeMode: !state.themeMode
    })),

}))