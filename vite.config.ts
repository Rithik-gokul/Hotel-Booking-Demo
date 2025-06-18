import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Hotel-Booking-Demo/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});