import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '^/assets': {
  //       target: 'http://localhost:5173/',
  //     },
  //   },
  // },
});
