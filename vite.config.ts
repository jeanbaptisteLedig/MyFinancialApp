import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': '/src',
		},
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/setupTests.ts',
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
	},
})
