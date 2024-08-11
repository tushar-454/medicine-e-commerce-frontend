import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
      colors: {
        'surfie-green': {
          '50': '#f2fbf9',
          '100': '#d4f3ee',
          '200': '#a8e7dd',
          '300': '#75d3c7',
          '400': '#48b9ae',
          '500': '#2f9d94',
          '600': '#217772',
          '700': '#206562',
          '800': '#1e5150',
          '900': '#1d4443',
          '950': '#0b2828',
        },
        'crimson-red': {
          '50': '#fff1f1',
          '100': '#ffe4e4',
          '200': '#fecdcf',
          '300': '#fda4a7',
          '400': '#fa7279',
          '500': '#f34050',
          '600': '#e11e38',
          '700': '#bd132d',
          '800': '#9e132d',
          '900': '#87142d',
          '950': '#4c0513',
        },
        'royal-blue': {
          '50': '#f1f6fd',
          '100': '#dfeafa',
          '200': '#c7daf6',
          '300': '#a0c3f0',
          '400': '#73a3e7',
          '500': '#5282df',
          '600': '#3963d2',
          '700': '#3454c1',
          '800': '#30459d',
          '900': '#2b3d7d',
          '950': '#1e274d',
        },
      },
    },
  },
  plugins: [],
};
export default config;
