import {
  createLanguageConfig,
  sharedConfigArray,
  sharedFiles,
} from "@repo/workspace/eslint"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

const noConsoleConfig = {
  name: "eslint/no-console",
  files: sharedFiles,
  rules: {
    "no-console": "off",
  },
}

const tsconfigRootDir = dirname(fileURLToPath(import.meta.url))
const tsConfigPath = resolve(tsconfigRootDir, "tsconfig.json")

const languageConfig = createLanguageConfig(tsConfigPath, {
  languageOptions: {
    parserOptions: {
      tsconfigRootDir,
    },
  },
})

export default [languageConfig, ...sharedConfigArray, noConsoleConfig]
