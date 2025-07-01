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
    return styleConfig?.codeBlock
      ? {
          backgroundColor: styleConfig.codeBlock.backgroundColor,
          borderRadius: styleConfig.codeBlock.borderRadius,
          padding: styleConfig.codeBlock.padding,
          fontSize: styleConfig.codeBlock.fontSize,
          fontFamily: styleConfig.codeBlock.fontFamily,
        }
      : {};
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
