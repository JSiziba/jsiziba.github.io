/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      colors: {
        'windrunner-blue-primary': '#0077b6',
        'windrunner-blue-secondary': '#8ed3f4',
        'stormlight-gold': '#f0d700',
        'kaladin-gray': '#404040',
        'highstorm-white': '#ffffff',
        'sylphrena-cyan': '#00c2a8',
        'windspren-green': '#00aa55',
        'bunting-blue': '#141C44',
      }
    },
  },
  plugins: [],
}

