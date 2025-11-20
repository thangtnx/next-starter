import { fixupPluginRules } from "@eslint/compat"
import importAliasPlugin from "@limegrass/eslint-plugin-import-alias"
import { flatConfigs } from "eslint-plugin-import"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import { sharedFiles } from "./shared"

export const importConfigArray = [
  {
    files: sharedFiles,
    name: "eslint/import/order",
    plugins: {
      import: fixupPluginRules(flatConfigs.recommended.plugins?.import ?? {}),
    },
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/no-duplicates": "error",
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [
          ".js",
          ".cjs",
          ".mjs",
          ".jsx",
          ".ts",
          ".cts",
          ".mts",
          ".tsx",
          ".d.ts",
        ],
      },
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
  {
    files: sharedFiles,
    name: "eslint/import/unused",
    plugins: {
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
    },
  },
]

export const createImportAliasConfig = (aliasConfigPath: string) => ({
  files: sharedFiles,
  name: "eslint/import/alias",
  plugins: { "import-alias": importAliasPlugin },
  rules: {
    "import-alias/import-alias": [
      "error",
      { aliasConfigPath, relativeImportOverrides: [{ depth: 0, path: "." }] },
    ],
  },
})

export const restrictedImportsConfigArray = [
  {
    files: sharedFiles.map((file) => `src/${file}`),
    name: "eslint/restricted-imports/workspace",
    rules: {
      "no-restricted-imports": ["error", { patterns: ["@repo/workspace/*"] }],
    },
  },
]
