import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react(), svelte(), mdx(), image(), compress()],
});
