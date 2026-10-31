import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const devServerPort = 5173

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: devServerPort,
    strictPort: true,
    hmr: {
      // The browser reaches Vite only through nginx, so HMR must use nginx's public port.
      clientPort: Number(process.env.HMR_CLIENT_PORT ?? devServerPort),
    },
  },
})
