import { SVGProps } from "react";
import { ThemeMode } from "../contexts/theme-context";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

type ModeIconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  themeMode?: ThemeMode;
};

function ModeIcon(props: ModeIconProps) {
  const { themeMode, ...otherProps } = props;

  if (themeMode === "light") return <MoonIcon {...otherProps} />;

  return <SunIcon {...otherProps} />;
}

export default ModeIcon;
