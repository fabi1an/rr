import { useNavigation, useRouteLoaderData } from "react-router";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const isValidTheme = (theme: any): theme is Theme =>
  theme && Object.values(Theme).includes(theme);

export const useTheme = (): Theme => {
  let theme = useNavigation().formData?.get("theme");
  theme ||= useRouteLoaderData<any>("root")?.theme;

  return isValidTheme(theme) ? theme : Theme.DARK;
};
