import { useLanguageStore } from "@/store";
import { ToggleItem } from "../UI/Common";

const LanguageToggle = () => {
  const { setLanguage, language } = useLanguageStore();
  const isSpanish = language === "ES";

  const handleToggle = () => {
    setLanguage(isSpanish ? "EN" : "ES");
  };

  return (
    <ToggleItem onToggle={handleToggle} titleES="Idioma" titleEN="Language" />
  );
};

export default LanguageToggle;
