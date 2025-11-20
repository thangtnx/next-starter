import type { Rule } from "eslint"
import { AST_NODE_TYPES } from "@typescript-eslint/utils"
import reactPlugin from "eslint-plugin-react"
import { sharedFiles } from "./shared"

const customReactPlugin = {
  rules: {
    "use-client-newline": {
      create(context: Rule.RuleContext) {
        return {
          ExpressionStatement(node: any) {
            if (
              node.expression.type === AST_NODE_TYPES.Literal &&
              node.expression.value === "use client"
            ) {
              const sourceCode = context.sourceCode
              const token = sourceCode.getTokenAfter(node)

              if (token && token.loc.start.line === node.loc.end.line + 1) {
                context.report({
                  fix(fixer) {
                    return fixer.insertTextAfter(node, "\n")
                  },
                  messageId: "missingNewline",
                  node,
                })
              }
            }
          },
        }
      },
      meta: {
        type: "layout",
        docs: { description: 'enforce newline after "use client"' },
        fixable: "whitespace",
        messages: {
          missingNewline: 'A newline is required after "use client".',
        },
        schema: [],
      },
    },
  },
}

export const reactConfig = {
  files: sharedFiles,
  name: "eslint/react",
  plugins: { "custom-react": customReactPlugin, react: reactPlugin },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    "custom-react/use-client-newline": "error",
    "react/forward-ref-uses-ref": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-fragments": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": "error",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
  },
  settings: { react: { version: "detect" } },
}
