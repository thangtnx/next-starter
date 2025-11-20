import type { Linter } from "eslint"
import globals from "globals"
import { parser } from "typescript-eslint"
import { sharedFiles } from "./shared"

export const createLanguageConfig = (
  project: boolean | string | string[] = true,
  config: Partial<Linter.Config> = {},
): Linter.Config => {
  const { languageOptions, ...rest } = config
  return {
    files: sharedFiles,
    languageOptions: {
      parser,
      ...(languageOptions || {}),
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2015,
        ...(languageOptions?.globals || {}),
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ...(languageOptions?.parserOptions || {}),
        project: project === true ? undefined : project,
        projectService: project === true ? true : undefined,
      },
    },
    name: "eslint/language-options",
    ...rest,
  }
}

export const languageConfig = createLanguageConfig()
