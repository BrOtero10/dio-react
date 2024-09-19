import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Desabilita a exigência de React no escopo para JSX a partir do React 17+
      'react/react-in-jsx-scope': 'off',
    },
    extends: [
      "eslint:recommended",
      "plugin:react",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ]
  }
];