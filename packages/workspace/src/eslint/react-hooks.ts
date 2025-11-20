import reactHooksPlugin from "eslint-plugin-react-hooks"
import { sharedFiles } from "./shared"

export const reactHooksConfig = {
  files: sharedFiles,
  name: "eslint/react-hooks",
  plugins: { "react-hooks": reactHooksPlugin },
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
}
