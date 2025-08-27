import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: 'src/index.js',
            name: 'CocoChat',
            fileName: 'cocochat',
            formats: ['es', 'umd'],
        }
    }
});
