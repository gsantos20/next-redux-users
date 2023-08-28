module.exports = {
  presets: ["next/babel",
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ["styled-components", { "ssr": true }],
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@services': './src/services',
      }
    }],
    "inline-react-svg"
  ]
};
