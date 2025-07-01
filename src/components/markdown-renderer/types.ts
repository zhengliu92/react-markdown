/**
 * 样式配置接口
 */
export interface MarkdownStyleConfig {
  /**
   * 字体大小
   */
  fontSize?: string;
  /**
   * 字体族
   */
  fontFamily?: string;
  /**
   * 行高
   */
  lineHeight?: string | number;
  /**
   * 文字颜色
   */
  color?: string;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 内边距
   */
  padding?: string;
  /**
   * 外边距
   */
  margin?: string;
  /**
   * 最大宽度
   */
  maxWidth?: string;
  /**
   * 标题样式配置
   */
  headings?: {
    h1?: Partial<MarkdownStyleConfig>;
    h2?: Partial<MarkdownStyleConfig>;
    h3?: Partial<MarkdownStyleConfig>;
    h4?: Partial<MarkdownStyleConfig>;
    h5?: Partial<MarkdownStyleConfig>;
    h6?: Partial<MarkdownStyleConfig>;
  };
  /**
   * 代码块样式配置
   */
  codeBlock?: {
    backgroundColor?: string;
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    fontFamily?: string;
    margin?: string;
    border?: string;
    borderLeft?: string;
    borderRight?: string;
    borderTop?: string;
    borderBottom?: string;
    boxShadow?: string;
    lineHeight?: string | number;
    color?: string;
    width?: string;
    maxWidth?: string;
    overflow?: string;
    position?: string;
    backgroundImage?: string;
  };
  /**
   * 行内代码样式配置
   */
  inlineCode?: {
    backgroundColor?: string;
    color?: string;
    padding?: string;
    borderRadius?: string;
    fontSize?: string;
    fontFamily?: string;
    border?: string;
    boxShadow?: string;
    margin?: string;
    lineHeight?: string | number;
  };
  /**
   * 引用块样式配置
   */
  blockquote?: {
    borderLeft?: string;
    paddingLeft?: string;
    fontStyle?: string;
    backgroundColor?: string;
    margin?: string;
    padding?: string;
    borderRadius?: string;
    border?: string;
    boxShadow?: string;
    color?: string;
    fontSize?: string;
    fontFamily?: string;
    lineHeight?: string | number;
  };
}

export interface MarkdownRendererProps {
  /**
   * Markdown 内容
   */
  content: string;
  /**
   * 是否启用 HTML 渲染
   */
  enableHtml?: boolean;
  /**
   * 是否启用数学公式渲染
   */
  enableMath?: boolean;
  /**
   * 是否启用代码语法高亮
   */
  enableSyntaxHighlight?: boolean;
  /**
   * 是否启用 GFM（GitHub Flavored Markdown）
   */
  enableGfm?: boolean;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 是否清理 HTML（使用 DOMPurify）
   */
  sanitizeHtml?: boolean;
  /**
   * 是否启用思考模块处理
   */
  enableThinkSection?: boolean;
  /**
   * 样式配置
   */
  styleConfig?: MarkdownStyleConfig;
}
