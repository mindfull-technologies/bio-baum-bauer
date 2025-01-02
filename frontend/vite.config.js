import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true, // Allows external access by exposing to 0.0.0.0
        port: 3000, // Ensure it listens on port 3000
    },
    plugins: [react()],
});
