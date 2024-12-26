import { useThemeStore } from "@/store/useThemeStore";
import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "../../../Icons";

const Social = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <Link
        href="https://github.com/FemtDeveloper"
        aria-label="Link that redirects to githup profile"
        target="_blank"
      >
        <GithubIcon color={theme === "dark" ? "#fff" : "#000"} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/fmirandat/"
        aria-label="Link that redirects to linkedin profile"
        target="_blank"
      >
        <LinkedInIcon color={theme === "dark" ? "#fff" : "#000"} />
      </Link>
    </div>
  );
};

export default Social;
