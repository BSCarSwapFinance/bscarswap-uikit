import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#00549e",
  primaryBright: "#00549e",
  primaryDark: "#00549e",
  secondary: "#00549e",
  success: "#3140d0",
  warning: "#00549e",
};

export const brandColors = {
  binance: "#00549e",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#e7f7ff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#2a467a",
  textDisabled: "#BDC2C4",
  textSubtle: "#154eb9",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#89a8ff",
  text: "#ffffff",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
