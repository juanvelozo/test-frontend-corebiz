module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        customsearchbar: "44rem",
      },
      colors: {
        "custom-gray-1": "#F2F2F2",
        "custom-gray-2": "#E6E8EA",
        "custom-gray-3": "#BDBDBD",
        "custom-gray-4": "#C0C0C0",
        "custom-gray-5": "#BFBFBF",
        "custom-gray-6": "#7A7A7A",
        "custom-gray-7": "#585858",
        "custom-gray-8": "#333333",
        "custom-red": "#F8475F",
      },
    },
    fontFamily: {
      lato: "'Lato', sans-serif",
      nunito: "'Nunito', sans-serif",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
