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
};
