import { useIsDark } from "@/hooks";

interface Props {
  url: string;
  title: string;
}

const ContactButton = ({ url, title }: Props) => {
  const isDark = useIsDark();
  return (
    <a
      href={url}
      target="_blank"
      className={`${
        isDark ? "contact-button-orange" : "contact-button-dark"
      } dark: py-6 px-8 h4 text-primary relative overflow-hidden border-b border-b-transparent`}
    >
      {title}
    </a>
  );
};

export default ContactButton;
