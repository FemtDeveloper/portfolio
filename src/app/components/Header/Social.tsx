import { useThemeStore } from "@/store/useThemeStore";
import { GithubIcon, LinkedInIcon } from "../../../Icons";

const Social = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <a
        href="https://github.com/FemtDeveloper"
        aria-label="Link that redirects to githup profile"
      >
        <GithubIcon color={theme === "dark" ? "#fff" : "#000"} />
      </a>
      <a
        href="https://www.linkedin.com/in/fmirandat/"
        aria-label="Link that redirects to linkedin profile"
      >
        <LinkedInIcon color={theme === "dark" ? "#fff" : "#000"} />
      </a>
    </div>
  );
};

export default Social;
