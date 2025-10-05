import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import tailwindcss from '@tailwindcss/vite';


const version = require('./package.json').version;
const bannerContent = `/*!
* use-effect-skip-first v${version}
* (c) Hichem Taboukouyout
* Released under the MIT License.
* Github: github.com/HichemTab-tech/use-effect-skip-first
*/
   `;

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'), // Library entry point
            name: 'UseEffectSkipFirst',
            fileName: (format: string) => `main${format === 'es' ? '.esm' : '.min'}.js`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'], // Mark React, ReactDOM as external
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'jsxRuntime'
                }
            }
        }
    },
    plugins: [
        tailwindcss(),
        react(),
        banner(bannerContent),
        cssInjectedByJsPlugin(),
        dts({
            entryRoot: 'src', // Base folder for type generation
            outDir: 'dist', // Ensures types go into `dist/`
            insertTypesEntry: true, // Adds the `types` field in package.json
            exclude: ['node_modules', 'dist'], // Exclude unnecessary files
        })

    ]
});
