const path = require("path");

module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    BASE_IMAGE: process.env.BASE_IMAGE,
  },
  variants: {
    extend: {
      pointerEvents: ["hover", "focus"],
    },
  },

  images: {
    domains: [process.env.BASE_IMAGE],
  },
};
