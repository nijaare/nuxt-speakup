/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgLogin': "url('~/assets/img/image_7-removebg-preview2.png')",
        'bgGames': "url('~/assets/img/image13.png')",
      },
    }
  },
  plugins: [],
}

