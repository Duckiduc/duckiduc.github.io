// import { sveltekit } from '@sveltejs/kit/vite';

// /** @type {import('vite').UserConfig} */
// const config = {
//         plugins: [sveltekit()]
// };

// export default config;

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [
        svelte({
            /* plugin options */
        })
    ]
});