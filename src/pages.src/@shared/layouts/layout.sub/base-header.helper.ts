export const TOGGLE_THEME_BUTTON_ID = "toggle-theme";
type Theme = "light" | "dark";

const getCurrentTheme = (): Theme => {
  return document.documentElement.getAttribute("color-scheme") as Theme;
};

const setTheme = (theme: Theme) => {
  document.documentElement.setAttribute("color-scheme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const toggleTheme = () => {
  setTheme(getCurrentTheme() === "light" ? "dark" : "light");
};
