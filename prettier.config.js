module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",
}
