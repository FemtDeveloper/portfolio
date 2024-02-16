import { GithubIcon, LinkedInIcon } from "../Icons";

const Social = () => {
  return (
    <div className="flex gap-4">
      <a href="">
        <GithubIcon color="#fff" />
      </a>
      <a href="">
        <LinkedInIcon color="#fff" />
      </a>
    </div>
  );
};

export default Social;
