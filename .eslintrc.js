
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  }
}