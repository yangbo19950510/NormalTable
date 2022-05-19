module.exports = {
  "presets": [["@babel/preset-env", 
    { 
      modules: false,
      "useBuiltIns": "usage",
      "corejs": "3.22.5", 
      "targets": {
        "chrome": "58"
      // "browsers": [
      //   "last 2 versions",
      //   "not ie <= 9"
      // ],
      // node: 8
      }
    }], "@vue/babel-preset-jsx",],
  "plugins": [
    ["@babel/plugin-transform-runtime"],
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ]
}


