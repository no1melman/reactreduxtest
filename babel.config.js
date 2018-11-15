module.exports = function (api) {
    api.cache.never();
    
    const presets = [
        '@babel/preset-env',
        '@babel/preset-react'
    ];
    const plugins = [
        // Stage 1
        ['@babel/plugin-proposal-optional-chaining', { loose: false }],
        ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],

        // Stage 2

        // Stage 3
        ['@babel/plugin-proposal-class-properties', { loose: false }]
    ];

    return {
        presets,
        plugins
    };
};