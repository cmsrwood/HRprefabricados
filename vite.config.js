import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    historyApiFallback: true, // Esto asegura que el servidor redirige las rutas al index.html
  },
});
