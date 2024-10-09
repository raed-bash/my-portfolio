import { useThemeContext } from "../hooks";

function Header() {
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <div className="container w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px] text-black dark:text-white">
      <h3>Logo</h3>
      <h3 onClick={toggleTheme}>
        {themeMode === "light" ? "Dark Mode" : "Light Mode"}
      </h3>
    </div>
  );
}

export default Header;
