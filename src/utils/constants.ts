// gutterWidth, green, bannerHeight, blue

// export const appMaxWidth = 960;
export const navBarHeight = 36;
export const gutterWidth = 16;
export const bannerHeight = 48;
// export const green = '#02d386';
// export const blue = '#198FE3';
// export const purple = '#6702ff';
// export const orange = '#f79729';
// export const red = '#ff0000';
// export const bronze = '#cd7f32';
// export const gold = '#ffd700';
// export const black = '#000000';
// export const silver = '#C0C0C0';
// export const white = '#ffffff';
// export const lightblue = '#0277bd';
// export const darkgreen = '#006400';

type Colors = {
  [key: string]: string
}

export const colors: Colors = {
  green: '#02d386',
  blue: '#198FE3',
  purple: '#6702ff',
  orange: '#f79729',
  red: '#ff0000',
  bronze: '#cd7f32',
  gold: '#ffd700',
  black: '#000000',
  silver: '#C0C0C0',
  white: '#ffffff',
  lightblue: '#0277bd',
  darkgreen: '#006400',
};

export const getColor = ( fill: string): string => {
  return colors[fill];
};

export const GradeMap = {
  green: 5,
  blue: 10,
  red: 15,
  bronze: 5,
  silver: 10,
  gold: 15
};
