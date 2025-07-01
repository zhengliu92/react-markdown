import { useMemo } from "react";
import classNames from "classnames";
import SyntaxHighlighter from "react-syntax-highlighter";

interface UseMarkdownComponentsOptions {
  enableSyntaxHighlight: boolean;
  getHeadingStyle: (level: 1 | 2 | 3 | 4 | 5 | 6) => Record<string, any>;
  blockquoteStyle: Record<string, any>;
  codeBlockStyle: Record<string, any>;
  inlineCodeStyle: Record<string, any>;
}

export const useMarkdownComponents = ({
  enableSyntaxHighlight,
  getHeadingStyle,
  blockquoteStyle,
  codeBlockStyle,
  inlineCodeStyle,
}: UseMarkdownComponentsOptions) => {
  return useMemo(() => {
    // 创建标题组件的工厂函数
    const createHeadingComponent = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
      return (props: any) => {
        const headingStyle = getHeadingStyle(level);
        const combinedStyle = { ...headingStyle, ...props.style };

        switch (level) {
          case 1:
            return <h1 {...props} style={combinedStyle} />;
          case 2:
            return <h2 {...props} style={combinedStyle} />;
          case 3:
            return <h3 {...props} style={combinedStyle} />;
          case 4:
            return <h4 {...props} style={combinedStyle} />;
          case 5:
            return <h5 {...props} style={combinedStyle} />;
          case 6:
            return <h6 {...props} style={combinedStyle} />;
          default:
            return <h1 {...props} style={combinedStyle} />;
        }
      };
    };

    return {
      "custom-text": ({ children }: { children: string }) => children,
      h1: createHeadingComponent(1),
      h2: createHeadingComponent(2),
      h3: createHeadingComponent(3),
      h4: createHeadingComponent(4),
      h5: createHeadingComponent(5),
      h6: createHeadingComponent(6),
      blockquote: (props: any) => (
        <blockquote {...props} style={{ ...blockquoteStyle, ...props.style }} />
      ),
      code(props: any) {
        const { children, className: codeClassName, node, ...rest } = props;
        const match = /language-(\w+)/.exec(codeClassName || "");

        if (enableSyntaxHighlight && match) {
          return (
            <div style={codeBlockStyle}>
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                language={match[1]}
                wrapLongLines
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </div>
          );
        }

        return (
          <code
            {...rest}
            className={classNames(codeClassName, "text-wrap")}
            style={{ ...inlineCodeStyle, ...rest.style }}
          >
            {children}
          </code>
        );
      },
    } as any;
  }, [
    enableSyntaxHighlight,
    getHeadingStyle,
    blockquoteStyle,
    codeBlockStyle,
    inlineCodeStyle,
  ]);
};
