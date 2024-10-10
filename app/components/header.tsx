import { useThemeContext } from "../hooks";
import ModeIcon from "./mode-icon";

function Header() {
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <div className="container w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-4 lg:pt-[50px] text-black dark:text-white">
      <h3>Logo</h3>
      <span
        onClick={toggleTheme}
        className="cursor-pointer rounded-full size-10 hover:bg-main ease-in-out duration-300 flex justify-center items-center hover:scale-125 hover:rotate-[-90deg]"
      >
        <ModeIcon themeMode={themeMode} className="size-7" />
      </span>
    </div>
  );
}

export default Header;
