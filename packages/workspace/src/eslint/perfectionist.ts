import perfectionistPlugin from "eslint-plugin-perfectionist"
import { sharedFiles } from "./shared"

const type = "natural"

const sortObjectGroups = {
  customGroups: {
    callback: "^on.*",
    primary: ["^key$", "^ref$", "^id$", "^lang$"],
    props: ".+Props$",
    secondary: ["^as$", "^form$", "^type$", "^htmlFor$"],
  },
  groups: ["primary", "secondary", "props", "callback"],
}

export const perfectionistConfig = {
  files: sharedFiles,
  name: "eslint/perfectionist",
  plugins: {
    perfectionist: perfectionistPlugin as unknown,
  },
  rules: {
    "perfectionist/sort-exports": [
      "error",
      {
        type,
        customGroups: [
          {
            anyOf: [{ elementNamePattern: [".style(.js|.jsx|.ts|.tsx)?$"] }],
            groupName: "style",
          },
        ],
        groups: ["style"],
        partitionByNewLine: true,
      },
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        type,
        groups: [
          "type",
          ["external-type", "builtin-type", "internal-type"],
          ["parent-type", "sibling-type", "index-type"],
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
          "object",
          "unknown",
          ["side-effect", "side-effect-style"],
        ],
        newlinesBetween: "ignore",
        partitionByNewLine: true,
      },
    ],

    "perfectionist/sort-array-includes": ["warn", { type }],
    "perfectionist/sort-interfaces": [
      "warn",
      {
        type,
        groupKind: "required-first",
        partitionByNewLine: true,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-intersection-types": ["warn", { type }],
    "perfectionist/sort-jsx-props": [
      "warn",
      {
        type,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-maps": ["warn", { type }],
    "perfectionist/sort-named-exports": ["warn", { type }],
    "perfectionist/sort-named-imports": ["warn", { type }],
    "perfectionist/sort-object-types": [
      "warn",
      {
        type,
        groupKind: "required-first",
        partitionByNewLine: true,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-objects": [
      "warn",
      {
        type,
        partitionByNewLine: true,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-sets": ["warn", { type }],
    "perfectionist/sort-union-types": ["warn", { type }],
  },
}
