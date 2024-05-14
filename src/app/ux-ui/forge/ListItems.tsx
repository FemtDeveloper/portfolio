import { links } from "./navbarLinks";

const ListItems = () => {
  return (
    <ul className="flex w-1/2 justify-between px-4 gap-4">
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={`#`}
            className="text-purpleText cursor-pointer relative flex flex-col justify-center items-center group"
            aria-label="link that redirects to other section"
            // onClick={() => lenis?.scrollTo(`#${urls[i]}`)}
          >
            <p className="b1 font-semibold relative group-hover:scale-105 transition duration-500  dark:hover:text-white">
              {link}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
