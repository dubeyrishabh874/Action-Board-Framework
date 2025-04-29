export const BORDER_RADIUS = "7px";

export const BASE_COLORS = {
  white: "#ffffff",
  black: "#000000",
  green: "#008000",
  orange: "#ffb155",
  gray: "#848484",
  lightgrey: "#c5d3e0",
  violet: "#ee82ee",
  lightgreen: "#89dca0",
  pink: "#ffc0cb",
  blue: "#1F88FF",
  skyblue: "#35a0dc",
  red: "#dc0100",
  dustyGray: "#979797",
  downRiver: "#082241",
  transparent: "transparent",
  paleSky: "#707C86",
  denim: "#1580C6",
  alto: "#DDDDDD",
  altolight: "#D3D3D3",
  mineShaft: "#333333",
  curiousBlue: "#2280BE",
  cornflowerBlue: "#00000033",
  dustyGrayLight: "#979696",
  curiousBlueDark: "#309BE1",
  periwinkle: "#B5CEFF",
  gallery: "#EEEEEE",
  baseRedColor: "#2280BE",
  crimsonRedColor: "#db0000",
  silver: "#C0C0C0",
  lightSkyBlue: "#77a5f1",
  borderGrey: "#00000040",
};

export const LAYOUT = {
  mobile: {
    paddingVertical: "0.75rem",
    paddingHorizontal: "0.5rem",
    headerHeight: "4.25rem",
    headerPadding: "1rem",
  },
  desktop: {
    paddingVertical: ".5rem",
    paddingHorizontal: "1rem",
    headerHeight: "3.5rem",
    headerHeightEx: "5.5rem",
  },
};

export const FONT_FAMILY = {
  main: "Segoe UI",
  secondary: "Segoe UI",
};

export const TEXT_ALIGN = {
  left: "left",
  right: "right",
  center: "center",
  middle: "middle",
};

export const FONT_SIZE = {
  xxs: "0.75rem",
  xs: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  xxl: "1.5rem",
  xxxl: "1.625rem",
  xxxxl: "2rem",
};

export const FONT_SIZE_PX = {
  xxxxxs: "9px",
  xxxxs: "10px",
  xxxs: "11px",
  xxs: "12px",
  xs: "13px",
  md: "14px",
  lg: "15px",
  xl: "16px",
  xxl: "17px",
  xxxl: "18px",
  xxxxl: "19px",
  xxxxxl: "20px",
  FONT21: "21px",
  FONT22: "22px",
  FONT23: "23px",
  FONT24: "24px",
  FONT25: "25px",
  FONT26: "26px",
  FONT27: "27px",
  FONT28: "28px",
  FONT29: "29px",
  FONT30: "30px",
};

export const FONT_WEIGHT = {
  thin: "100",
  extraLight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extraBold: "800",
  black: "900",
  normal: "normal",
};

export const BREAKPOINTS = {
  xs: 360,
  sm: 568,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1920,
} as const;

const getMedia = <T extends number>(breakpoint: T): `(min-width: ${T}px)` =>
  `(min-width: ${breakpoint}px)`;

export const media = {
  xs: getMedia(BREAKPOINTS.xs),
  sm: getMedia(BREAKPOINTS.sm),
  md: getMedia(BREAKPOINTS.md),
  lg: getMedia(BREAKPOINTS.lg),
  xl: getMedia(BREAKPOINTS.xl),
  xxl: getMedia(BREAKPOINTS.xxl),
};
