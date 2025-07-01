import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      description: {
        component:
          "MarkdownRenderer 是一个功能丰富的 Markdown 渲染组件，支持语法高亮、数学公式、HTML 渲染等功能。",
      },
    },
    layout: "padded",
  },
};

export default preview;
