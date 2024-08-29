module.exports = {
  root: true,
  extends: [
    '@react-native-community',  // React Native için varsayılan ESLint kuralları
    'plugin:@typescript-eslint/recommended',  // TypeScript için önerilen kurallar
    'prettier',  // Prettier ile çakışan kuralları devre dışı bırakır
    'prettier/@typescript-eslint',  // TypeScript kurallarını Prettier ile uyumlu hale getirir
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': ['error'],  // Prettier kurallarını enforce eder
      },
    },
  ],
};
