

import { useLanguageStore } from "../store";

export const useIsSpanish = () => {
    const language = useLanguageStore((state) => state.language);
    const isSpanish = language === "ES";
    return isSpanish;
}
