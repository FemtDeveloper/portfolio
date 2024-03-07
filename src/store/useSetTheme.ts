import { useEffect } from "react"
import { useThemeStore } from "./useThemeStore";
import { useIsDark } from "@/hooks";

export const useSetTheme = () => {
    const isDark = useIsDark()
    useEffect(() => {
        const metaThemeColor = document.querySelector('meta[name=theme-color]');
        if (isDark && metaThemeColor) metaThemeColor.setAttribute('content', '#1e1e1e')





    }, [isDark])

}