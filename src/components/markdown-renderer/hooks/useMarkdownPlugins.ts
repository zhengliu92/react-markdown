import { useMemo } from "react";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { visitParents } from "unist-util-visit-parents";

interface UseMarkdownPluginsOptions {
  enableMath: boolean;
  enableHtml: boolean;
  enableGfm: boolean;
}

export const useMarkdownPlugins = ({
  enableMath,
  enableHtml,
  enableGfm,
}: UseMarkdownPluginsOptions) => {
  // 自定义 rehype 插件：包装文本节点
  const rehypeWrapText = useMemo(() => {
    return () => {
      return function wrapTextTransform(tree: any) {
        visitParents(tree, "text", (node, ancestors) => {
          const latestAncestor = ancestors.at(-1);
          if (
            latestAncestor.tagName !== "custom-text" &&
            latestAncestor.tagName !== "code"
          ) {
            node.type = "element";
            node.tagName = "custom-text";
            node.properties = {};
            node.children = [{ type: "text", value: node.value }];
          }
        });
      };
    };
  }, []);

  // 构建 rehype 插件数组
  const rehypePlugins = useMemo(() => {
    const plugins: any[] = [rehypeWrapText];
    if (enableMath) plugins.push(rehypeKatex);
    if (enableHtml) plugins.push(rehypeRaw);
    return plugins;
  }, [enableMath, enableHtml, rehypeWrapText]);

  // 构建 remark 插件数组
  const remarkPlugins = useMemo(() => {
    const plugins: any[] = [];
    if (enableGfm) plugins.push(remarkGfm);
    if (enableMath) plugins.push(remarkMath);
    return plugins;
  }, [enableGfm, enableMath]);

  return {
    rehypePlugins,
    remarkPlugins,
  };
};
