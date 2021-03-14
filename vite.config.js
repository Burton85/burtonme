import path from 'path';
module.exports = {
    rollupInputOptions: {
        preserveEntrySignatures: 'strict',
    },
    optimizeDeps: {
        allowNodeBuiltins: ['fs', 'os'],
    },
    rollupOutputOptions: {
        preserveModules: true,
    },
    alias: {
        '@': path.resolve(__dirname, './src'),
    },
};
