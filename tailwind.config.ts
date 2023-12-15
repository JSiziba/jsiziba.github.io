/** @type {import('tailwindcss').Config} */
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts,md}',
    join(require.resolve(
        '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],

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
  plugins: [
    skeleton({
      themes: { preset: [ "skeleton" ] }
    })
  ],
}

