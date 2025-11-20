import nextPlugin from "@next/eslint-plugin-next"
import {
  createLanguageConfig,
  sharedConfigArray,
  sharedFiles,
} from "@repo/workspace/eslint"
import { dirname } from "path"
import { fileURLToPath } from "url"

const noConsoleConfig = {
  files: ["scripts/**"],
  name: "eslint/no-console",
  rules: {
    "no-console": "off",
  },
}

const nextConfig = {
  name: "eslint/next",
  plugins: {
    "@next/next": nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
  },
}

const restrictedImportsConfigArray = [
  {
    files: sharedFiles,
    name: "eslint/restricted-imports/utils",
    rules: {
      "no-restricted-imports": ["error", { patterns: ["next/link"] }],
    },
  },
]

const languageConfig = createLanguageConfig(true, {
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
    },
  },
})

export default [
  languageConfig,
  ...sharedConfigArray,
  ...restrictedImportsConfigArray,
  noConsoleConfig,
  nextConfig,
]
