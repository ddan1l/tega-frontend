import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import next from '@next/eslint-plugin-next';
import prettier from 'eslint-plugin-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    {
        plugins: {
            '@next/next': next,
        },
        rules: {
            ...next.configs.recommended.rules,
            ...next.configs['core-web-vitals'].rules,
            '@next/next/no-html-link-for-pages': 'off',
        },
    },

    {
        plugins: {
            '@typescript-eslint': typescriptEslint,
        },
        rules: {
            ...typescriptEslint.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },

    {
        plugins: {
            prettier,
        },
        rules: {
            ...prettier.configs.recommended.rules,
            'prettier/prettier': 'warn',
        },
    },

    {
        rules: {
            'react/react-in-jsx-scope': 'off',
        },
    },
];
