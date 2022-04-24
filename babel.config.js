module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        throwIfNamespace: false,
        runtime: 'automatic',
        importSource: 'atomico',
      },
    ],
  ],
};
