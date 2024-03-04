import { useThemeStore } from "@/store/useThemeStore";


export const useIsDark = () => {
    const theme = useThemeStore((state) => state.theme);
    return theme === 'dark'
}