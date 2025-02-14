import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React_Jobs_App', // Change this to your actual GitHub repo name
  plugins: [react()],
});
