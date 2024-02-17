import { useThemeStore } from "@/store/useThemeStore";
import { GithubIcon, LinkedInIcon } from "../Icons";

const Social = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <a href="">
        <GithubIcon color={theme === "dark" ? "#fff" : "#000"} />
      </a>
      <a href="">
        <LinkedInIcon color={theme === "dark" ? "#fff" : "#000"} />
      </a>
    </div>
  );
};

export default Social;
