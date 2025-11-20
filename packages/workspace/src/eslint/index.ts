import prettierConfig from "eslint-config-prettier"
import { baseConfigArray } from "./base"
import {
  createImportAliasConfig,
  importConfigArray,
  restrictedImportsConfigArray,
} from "./import"
import { createLanguageConfig } from "./language"
import { perfectionistConfig } from "./perfectionist"
import { reactConfig } from "./react"
import { reactHooksConfig } from "./react-hooks"
import { sharedFiles } from "./shared"
import { typescriptConfig } from "./typescript"

export {
  baseConfigArray,
  createImportAliasConfig,
  createLanguageConfig,
  importConfigArray,
  perfectionistConfig,
  prettierConfig,
  reactConfig,
  reactHooksConfig,
  restrictedImportsConfigArray,
  sharedFiles,
  typescriptConfig,
}

export const sharedConfigArray = [
  ...baseConfigArray,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  prettierConfig,
  reactConfig,
  reactHooksConfig,
]
