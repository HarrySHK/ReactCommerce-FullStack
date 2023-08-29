const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDelay: {
        20: "20ms",
        30: "30ms",
        40: "40ms",
      },
      transitionDelay: {
        350: "350ms",
      },
    },
  },
  plugins: [require("daisyui")],
});
