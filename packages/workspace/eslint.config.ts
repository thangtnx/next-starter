import {
  createLanguageConfig,
  restrictedImportsConfigArray,
  sharedConfigArray,
} from "@repo/workspace/eslint"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

const tsconfigRootDir = dirname(fileURLToPath(import.meta.url))
const tsConfigPath = resolve(tsconfigRootDir, "tsconfig.json")

const languageConfig = createLanguageConfig(tsConfigPath, {
  languageOptions: {
    parserOptions: {
      tsconfigRootDir,
    },
  },
})

export default [
  languageConfig,
  ...sharedConfigArray,
  ...restrictedImportsConfigArray,
]
