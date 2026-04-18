module.exports = {
    extends: [
      "react-app",
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb",
      "airbnb/hooks",
      "plugin:prettier/recommended"
    ],
    env: {
      browser: true,
      jest: true
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "import/prefer-default-export": "off",
      "react/function-component-definition": "off"
    },
    plugins: ["prettier"],
    ignorePatterns: [".eslintrc.js"],
    settings: {
      "import/resolver": {
        node: {
          paths: ["src"]
        }
      }
    }
  };
  