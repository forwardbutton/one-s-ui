import { defineConfig } from 'vite';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import autoprefixer from 'autoprefixer';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'OneSUI',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:4]'
    },
    postcss: {
      plugins: [autoprefixer]
    }
  },
  plugins: [
    react(),
    dts({ include: ['lib'] }),
    cssInjectedByJsPlugin()
  ],
});

