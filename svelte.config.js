import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // ...
        vite: {
            define: {
                'process.env': process.env,
            },
        },
    }
};

export default config;

