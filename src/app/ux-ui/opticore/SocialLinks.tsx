import { FacebookIcon, InstagramIcon, XIcon } from "@/Icons";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex gap-10">
      <Link
        href="https://www.facebook.com"
        aria-label="link that redirectss to a social network"
        target="_blank"
        className="pointer-events-auto"
      >
        <FacebookIcon />
      </Link>
      <Link
        href="https://www.instagram.com"
        aria-label="link that redirectss to a social network"
        target="_blank"
        className="pointer-events-auto"
      >
        <InstagramIcon />
      </Link>
      <Link
        href="https://www.x.com"
        aria-label="link that redirectss to a social network"
        target="_blank"
        className="pointer-events-auto"
      >
        <XIcon />
      </Link>
    </div>
  );
};

export default SocialLinks;
