import { useLayoutEffect } from "react";
import { type Theme } from "./";

export const ThemeScript = ({
  nonce,
  theme,
}: {
  nonce?: string;
  theme: Theme;
}) => {
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <script
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.dataset.theme = ${JSON.stringify(theme)};`,
      }}
    />
  );
};
