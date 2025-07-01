import classNames from "classnames";
import Markdown from "react-markdown";

import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you

import {
  useProcessedContent,
  useMarkdownStyles,
  useMarkdownPlugins,
  useMarkdownComponents,
} from "./hooks";
import { MarkdownRendererProps } from "./types.js";
import styles from "./index.module.less";

// 重新导出类型定义，供外部使用
export type { MarkdownRendererProps, MarkdownStyleConfig } from "./types";

const MarkdownRenderer = ({
  content,
  enableHtml = true,
  enableMath = true,
  enableSyntaxHighlight = true,
  enableGfm = true,
  className,
  sanitizeHtml = true,
  enableThinkSection = true,
  styleConfig,
}: MarkdownRendererProps) => {
  // 处理内容
  const processedContent = useProcessedContent({
    content,
    sanitizeHtml,
    enableThinkSection,
    enableMath,
  });

  // 处理样式
  const {
    containerStyle,
    getHeadingStyle,
    codeBlockStyle,
    inlineCodeStyle,
    blockquoteStyle,
  } = useMarkdownStyles({ styleConfig });

  // 处理插件
  const { rehypePlugins, remarkPlugins } = useMarkdownPlugins({
    enableMath,
    enableHtml,
    enableGfm,
  });

  // 处理组件配置
  const components = useMarkdownComponents({
    enableSyntaxHighlight,
    getHeadingStyle,
    blockquoteStyle,
    codeBlockStyle,
    inlineCodeStyle,
  });

  return (
    <div
      className={classNames(styles.markdownRenderer, className)}
      style={containerStyle}
    >
      <Markdown
        rehypePlugins={rehypePlugins}
        remarkPlugins={remarkPlugins}
        components={components}
      >
        {processedContent}
      </Markdown>
    </div>
  );
};

export default MarkdownRenderer;
