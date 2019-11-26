import { DefaultTheme } from "styled-components"

export const Default: DefaultTheme = {
  palette: {
    background: {
      primary: "#FFFFFF",
      secondary: "#F6F7FB",
    },
    text: {
      primary: "#757575",
      secondary: "#404040",
    },
    link: {
      primary: "#9487B7",
    },
    border: {
      primary: "#757575",
      secondary: "#F4F5F9",
    },
    brand: {
      facebook: "#3B5998",
      twitter: "#38A1F3",
      youtube: "#FF0000",
      instagram: "#C13584",
    },
    shadow: {
      passive: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      active: "0 4px 5px rgba(0, 0, 0, 0.2)",
    },
    white: "#FFFFFF",
    black: "#000000",
  },
  spacing: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "32px",
  },
  size: {
    xs: "12px",
    sm: "14px",
    md: "18px",
    lg: "24px",
    xl: "38px",
    logo: "28px",
  },
}

export const Dark: DefaultTheme = {
  ...Default,
  palette: {
    background: {
      primary: "#191919",
      secondary: "#1D1E1F",
    },
    text: {
      primary: "#F2F2F2",
      secondary: "#F2F2F2",
    },
    link: {
      primary: "#9487B7",
    },
    border: {
      primary: "#191919",
      secondary: "#1D1E1F",
    },
    shadow: Default.palette.shadow,
    brand: Default.palette.brand,
    white: "#FFFFFF",
    black: "#000000",
  },
}

export default Default
