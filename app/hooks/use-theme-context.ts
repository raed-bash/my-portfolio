import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

const useThemeContext = () => useContext(ThemeContext);
export default useThemeContext;
