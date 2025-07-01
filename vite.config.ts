import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { fileURLToPath, URL } from "node:url";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react({
      // 确保使用新的JSX transform，但不要自动导入
      jsxRuntime: "automatic",
      jsxImportSource: undefined,
    }),
    cssInjectedByJsPlugin(),
    visualizer({
      filename: "dist/bundle-analysis.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MarkdownRendererReact",
      fileName: (format) => `markdown-renderer-react.${format}.js`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      // 将所有peerDependencies设为external
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "react-dom/client",
        "react-dom/server",
        // 所有peerDependencies
        "classnames",
        "dompurify",
        "katex",
        "lodash",
        "react-markdown",
        "react-syntax-highlighter",
        "rehype-katex",
        "rehype-raw",
        "remark-gfm",
        "remark-math",
        "unist-util-visit-parents",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
          "react/jsx-dev-runtime": "ReactJSXDevRuntime",
          classnames: "classNames",
          dompurify: "DOMPurify",
          katex: "katex",
          lodash: "_",
          "react-markdown": "ReactMarkdown",
          "react-syntax-highlighter": "ReactSyntaxHighlighter",
          "rehype-katex": "rehypeKatex",
          "rehype-raw": "rehypeRaw",
          "remark-gfm": "remarkGfm",
          "remark-math": "remarkMath",
          "unist-util-visit-parents": "unistUtilVisitParents",
        },
      },
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
});
