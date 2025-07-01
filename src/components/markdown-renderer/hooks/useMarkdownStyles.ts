import { useMemo } from "react";
import { MarkdownStyleConfig } from "../types.js";

interface UseMarkdownStylesOptions {
  styleConfig?: MarkdownStyleConfig;
}

export const useMarkdownStyles = ({
  styleConfig,
}: UseMarkdownStylesOptions) => {
  // 生成容器内联样式
  const containerStyle = useMemo(() => {
    if (!styleConfig) return {};

    return {
      fontSize: styleConfig.fontSize,
      fontFamily: styleConfig.fontFamily,
      lineHeight: styleConfig.lineHeight,
      color: styleConfig.color,
      backgroundColor: styleConfig.backgroundColor,
      padding: styleConfig.padding,
      margin: styleConfig.margin,
      maxWidth: styleConfig.maxWidth,
    };
  }, [styleConfig]);

  // 生成标题样式
  const getHeadingStyle = useMemo(() => {
    return (level: 1 | 2 | 3 | 4 | 5 | 6) => {
      const headingConfig =
        styleConfig?.headings?.[
          `h${level}` as keyof typeof styleConfig.headings
        ];
      return headingConfig
        ? {
            fontSize: headingConfig.fontSize,
            fontFamily: headingConfig.fontFamily,
            lineHeight: headingConfig.lineHeight,
            color: headingConfig.color,
            margin: headingConfig.margin,
          }
        : {};
    };
  }, [styleConfig]);

  // 生成代码块样式
  const codeBlockStyle = useMemo(() => {
    const defaultCodeBlockStyle = {
      backgroundColor: "#f8f8f8",
      border: "1px solid #e1e1e1",
      borderRadius: "5px",
      padding: "10px",
      margin: "10px 0",
    };

    if (!styleConfig?.codeBlock) {
      return defaultCodeBlockStyle;
    }

    const userCodeBlock = styleConfig.codeBlock;
    const mergedStyle: any = { ...defaultCodeBlockStyle };

    // 只有当用户明确设置了属性时才覆盖默认值
    if (userCodeBlock.backgroundColor !== undefined)
      mergedStyle.backgroundColor = userCodeBlock.backgroundColor;
    if (userCodeBlock.borderRadius !== undefined)
      mergedStyle.borderRadius = userCodeBlock.borderRadius;
    if (userCodeBlock.padding !== undefined)
      mergedStyle.padding = userCodeBlock.padding;
    if (userCodeBlock.fontSize !== undefined)
      mergedStyle.fontSize = userCodeBlock.fontSize;
    if (userCodeBlock.fontFamily !== undefined)
      mergedStyle.fontFamily = userCodeBlock.fontFamily;
    if (userCodeBlock.margin !== undefined)
      mergedStyle.margin = userCodeBlock.margin;
    if (userCodeBlock.border !== undefined)
      mergedStyle.border = userCodeBlock.border;
    if (userCodeBlock.borderLeft !== undefined)
      mergedStyle.borderLeft = userCodeBlock.borderLeft;
    if (userCodeBlock.borderRight !== undefined)
      mergedStyle.borderRight = userCodeBlock.borderRight;
    if (userCodeBlock.borderTop !== undefined)
      mergedStyle.borderTop = userCodeBlock.borderTop;
    if (userCodeBlock.borderBottom !== undefined)
      mergedStyle.borderBottom = userCodeBlock.borderBottom;
    if (userCodeBlock.boxShadow !== undefined)
      mergedStyle.boxShadow = userCodeBlock.boxShadow;
    if (userCodeBlock.lineHeight !== undefined)
      mergedStyle.lineHeight = userCodeBlock.lineHeight;
    if (userCodeBlock.color !== undefined)
      mergedStyle.color = userCodeBlock.color;
    if (userCodeBlock.width !== undefined)
      mergedStyle.width = userCodeBlock.width;
    if (userCodeBlock.maxWidth !== undefined)
      mergedStyle.maxWidth = userCodeBlock.maxWidth;
    if (userCodeBlock.overflow !== undefined)
      mergedStyle.overflow = userCodeBlock.overflow;
    if (userCodeBlock.position !== undefined)
      mergedStyle.position = userCodeBlock.position;
    if (userCodeBlock.backgroundImage !== undefined)
      mergedStyle.backgroundImage = userCodeBlock.backgroundImage;

    return mergedStyle;
  }, [styleConfig]);

  // 生成行内代码样式
  const inlineCodeStyle = useMemo(() => {
    return styleConfig?.inlineCode
      ? {
          backgroundColor: styleConfig.inlineCode.backgroundColor,
          color: styleConfig.inlineCode.color,
          padding: styleConfig.inlineCode.padding,
          borderRadius: styleConfig.inlineCode.borderRadius,
          fontSize: styleConfig.inlineCode.fontSize,
          fontFamily: styleConfig.inlineCode.fontFamily,
          border: styleConfig.inlineCode.border,
          boxShadow: styleConfig.inlineCode.boxShadow,
          margin: styleConfig.inlineCode.margin,
          lineHeight: styleConfig.inlineCode.lineHeight,
        }
      : {};
  }, [styleConfig]);

  // 生成引用块样式
  const blockquoteStyle = useMemo(() => {
    return styleConfig?.blockquote
      ? {
          borderLeft: styleConfig.blockquote.borderLeft,
          paddingLeft: styleConfig.blockquote.paddingLeft,
          fontStyle: styleConfig.blockquote.fontStyle,
          backgroundColor: styleConfig.blockquote.backgroundColor,
          margin: styleConfig.blockquote.margin,
          padding: styleConfig.blockquote.padding,
          borderRadius: styleConfig.blockquote.borderRadius,
          border: styleConfig.blockquote.border,
          boxShadow: styleConfig.blockquote.boxShadow,
          color: styleConfig.blockquote.color,
          fontSize: styleConfig.blockquote.fontSize,
          fontFamily: styleConfig.blockquote.fontFamily,
          lineHeight: styleConfig.blockquote.lineHeight,
        }
      : {};
  }, [styleConfig]);

  return {
    containerStyle,
    getHeadingStyle,
    codeBlockStyle,
    inlineCodeStyle,
    blockquoteStyle,
  };
};
