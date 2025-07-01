# React Markdown Renderer

一个功能强大、可定制的 React Markdown 渲染组件，支持语法高亮、数学公式、HTML 渲染和多种主题样式。

[English](README.md) | 中文

## ✨ 特性

- 🎨 **多种主题样式** - 内置深色、学术、简约、彩色等多种主题
- 📝 **完整 Markdown 支持** - 支持 GFM (GitHub Flavored Markdown)
- 🎯 **代码语法高亮** - 基于 Prism.js 的语法高亮
- 🧮 **数学公式渲染** - 支持 LaTeX 数学公式 (KaTeX)
- 🔧 **灵活配置** - 支持自定义样式和组件配置
- 🛡️ **安全过滤** - 内置 HTML 安全过滤 (DOMPurify)
- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🎪 **Storybook 文档** - 完整的组件示例和文档

## 📦 安装

```bash
npm install markdown-renderer-react
# 或
yarn add markdown-renderer-react
```

## 🚀 快速开始

```tsx
import { MarkdownRenderer } from 'markdown-renderer-react';

function App() {
  const content = `
# Hello World

这是一个 **Markdown** 渲染示例。

\`\`\`javascript
console.log('Hello, World!');
\`\`\`

数学公式：$E = mc^2$
  `;

  return (
    <MarkdownRenderer
      content={content}
      enableSyntaxHighlight={true}
      enableMath={true}
    />
  );
}
```

## 📚 API 文档

### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `content` | `string` | - | Markdown 内容 |
| `enableHtml` | `boolean` | `true` | 是否启用 HTML 渲染 |
| `enableMath` | `boolean` | `true` | 是否启用数学公式 |
| `enableSyntaxHighlight` | `boolean` | `true` | 是否启用语法高亮 |
| `enableGfm` | `boolean` | `true` | 是否启用 GFM |
| `className` | `string` | - | 自定义类名 |
| `sanitizeHtml` | `boolean` | `true` | 是否清理 HTML |
| `enableThinkSection` | `boolean` | `true` | 是否启用思考模块 |
| `styleConfig` | `MarkdownStyleConfig` | - | 样式配置 |

## 🎨 主题示例

### 深色主题
```tsx
<MarkdownRenderer
  content={content}
  styleConfig={{
    backgroundColor: "#1a1a1a",
    color: "#e5e5e5",
    // ... 更多配置
  }}
/>
```

### 学术风格
```tsx
<MarkdownRenderer
  content={content}
  styleConfig={{
    fontFamily: "'Times New Roman', serif",
    fontSize: "16px",
    lineHeight: "1.8",
    // ... 更多配置
  }}
/>
```

### 现代简约
```tsx
<MarkdownRenderer
  content={content}
  styleConfig={{
    fontFamily: "'SF Pro Display', system-ui, sans-serif",
    backgroundColor: "#fefefe",
    maxWidth: "700px",
    // ... 更多配置
  }}
/>
```

## 🎨 内置主题

导入并使用预定义主题：

```tsx
import { MarkdownRenderer } from 'markdown-renderer-react';
import { darkTheme, academicTheme, modernMinimalTheme } from 'markdown-renderer-react/examples';

<MarkdownRenderer content={content} styleConfig={darkTheme} />
```

## 🛠️ 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 启动 Storybook
npm run storybook

# 构建
npm run build

# 类型检查
npm run type-check
```

## 📖 文档

运行 Storybook 查看完整的组件文档和示例：

```bash
npm run storybook
```

## 🎯 高级用法

### 自定义组件

```tsx
const customComponents = {
  h1: ({ children }) => <h1 className="custom-h1">{children}</h1>,
  code: ({ className, children }) => (
    <code className={`custom-code ${className}`}>{children}</code>
  ),
};

<MarkdownRenderer
  content={content}
  components={customComponents}
/>
```

### 数学公式

支持行内和块级数学公式：

```markdown
行内公式：$E = mc^2$

块级公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### 代码高亮

支持多种编程语言：

````markdown
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

```python
def hello_world():
    print("Hello, World!")
```
````

## 🔧 配置

### 样式配置接口

```typescript
interface MarkdownStyleConfig {
  fontSize?: string;
  fontFamily?: string;
  lineHeight?: string | number;
  color?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  maxWidth?: string;
  headings?: {
    h1?: Partial<MarkdownStyleConfig>;
    h2?: Partial<MarkdownStyleConfig>;
    // ... h3-h6
  };
  codeBlock?: {
    backgroundColor?: string;
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    fontFamily?: string;
  };
  inlineCode?: {
    backgroundColor?: string;
    color?: string;
    padding?: string;
    borderRadius?: string;
    fontSize?: string;
    fontFamily?: string;
  };
  blockquote?: {
    borderLeft?: string;
    paddingLeft?: string;
    fontStyle?: string;
    backgroundColor?: string;
    margin?: string;
  };
}
```

## 🤝 贡献

欢迎提交 Pull Request 和 Issue！

### 开发环境设置

1. 克隆仓库
2. 安装依赖：`npm install`
3. 启动开发：`npm run dev`
4. 运行 Storybook：`npm run storybook`

### 贡献指南

- 遵循 TypeScript 最佳实践
- 为新功能添加测试
- 更新文档
- 遵循现有的代码风格

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)。

## 🙏 致谢

- [react-markdown](https://github.com/remarkjs/react-markdown) - 核心 markdown 处理
- [KaTeX](https://katex.org/) - 数学公式渲染
- [Prism.js](https://prismjs.com/) - 语法高亮
- [DOMPurify](https://github.com/cure53/DOMPurify) - HTML 安全过滤 