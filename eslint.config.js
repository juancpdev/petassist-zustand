import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    'plugin:react/recommended' // Agrega soporte para reglas de React
  ],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ...globals.browser,
      // Agrega cualquier global adicional que necesites aquí
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true // Habilita soporte para JSX
      }
    }
  },
  plugins: {
    'react': react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Puedes agregar más reglas aquí si es necesario
  },
})
