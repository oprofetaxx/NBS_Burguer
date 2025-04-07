import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        culture: ["CultureCarnival", "sans-serif"],
        groveric: ["GrovericRegular", "sans-serif"],
      },
      colors: {
        primary: "#f97316", // cor laranja que você usa


        yellow: {
            100: '#F1E9C9',
            500: '#DBAC2C',
            600: '#C47F17',
            700: '#BB7609',
          },
          purple: {
            100: '#EBE5F9',
            500: '#8047F8',
            700: '#4B2995',
            900: '#2A1852',
          },
        },
      }

      
    },
  
  plugins: [],
};

export default config;