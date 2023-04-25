import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  root: './', // This points to your project root directory
  base: '/', // The base path for your application; typically, this is '/'
  publicDir: 'build/public', // This tells Vite to use the index.html inside the build/public folder
  build: {
    outDir: 'dist',
  },
  plugins: [reactRefresh()],
})
