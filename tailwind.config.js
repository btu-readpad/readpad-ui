module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      full: { max: "320px" },
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    width: {
      64: "64px",
      100: "100px",
      200: "200px",
      400: "400px",
      full: "100%",
      fit: "fit-content"
    },
    height: {
      64: "64px",
      100: "100px",
      200: "200px",
      400: "400px",
      full: "100%",
      fit: "fit-content"
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      600: "600px",
      500: "500px",
      400: "400px",
      200: "200px",
      100: "100px",
      full: "100%",
      max: "max-content",
    },
    colors: {
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      shadow: "var(--shadow-color)",
      danger: "var(--danger-color)",
      warning: "var(--warning-color)",
      success: "var(--success-color)",
      info: "var(--info-color)",
      light: "var(--light-color)",
      gray: "var(--gray-color)",
      background: "var(--background-color)",
      white: "var(--white)",
      btnBacground: "var(--btn-bg)",
    },
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "8px",
      "3xl": "50px",
      full: "9999px",
    },
    spacing: {
      default: "0.375rem 0.75rem",
      small: "0.19rem 0.375rem",
      large: "0.75rem 1.5rem",
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      54: "54px",
      64: "64px",
      76: "76px",
      90: "90px",
      95: "95px",
      200: "200px",
      338: "338px",
      360: "360px",
      "1/2": "50%"
    },
    zIndex: {},
    fontFamily: {
      primary: ["IBM Plex Sans", "ui-sans-serif", "system-ui"],
      secondary: ["Roboto"],
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      none: "none",
    },
    fontSize: {
      14: "14px",
      16: "16px",
      18: "18px",
      24: "24px",
      32: "32px",
      36: "36px",
      h1: "72px",
      h2: "50px",
      h3: "46px",
      h4: "30px",
      h5: "12px",
      h6: "20px",
      ind: "35px",
    },
    inset: {
      3: "3px",
      20: "20px",
      10: "10px",
      "1/2": "50%",
    },
    letterSpacing: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "corporate",
  },
};
