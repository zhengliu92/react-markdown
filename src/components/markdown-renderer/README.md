# MarkdownRenderer 组件

一个功能丰富的 React Markdown 渲染组件，支持语法高亮、数学公式、HTML 渲染等功能。

## 特性

- 📝 **完整的 Markdown 语法支持** - 支持标准 Markdown 语法
- 🎨 **代码语法高亮** - 使用 react-syntax-highlighter 提供多语言语法高亮
- 🧮 **数学公式渲染** - 支持 LaTeX 数学公式，包括行内和块级公式
- 🌐 **HTML 支持** - 可选择性地支持 HTML 标签渲染
- 📊 **GFM 扩展** - 支持 GitHub Flavored Markdown 特性（表格、任务列表等）
- 🛡️ **安全过滤** - 使用 DOMPurify 防止 XSS 攻击
- 🎯 **TypeScript 支持** - 完整的类型定义
- 🔧 **灵活配置** - 可以独立开启或关闭各项功能

## 安装

```bash
npm install react-markdown react-syntax-highlighter rehype-katex rehype-raw remark-gfm remark-math katex dompurify classnames lodash unist-util-visit-parents
```

## 基础用法

```tsx
import MarkdownRenderer from '@/components/markdown-renderer';

const App = () => {
  const markdownContent = `
# 标题

这是一段 **粗体** 和 *斜体* 文本。

\`\`\`javascript
console.log('Hello World');
\`\`\`

数学公式：$E = mc^2$
  `;

  return (
    <MarkdownRenderer content={markdownContent} />
  );
};
```

## Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `content` | `string` | **必需** | Markdown 内容 |
| `enableHtml` | `boolean` | `true` | 是否启用 HTML 渲染 |
| `enableMath` | `boolean` | `true` | 是否启用数学公式渲染 |
| `enableSyntaxHighlight` | `boolean` | `true` | 是否启用代码语法高亮 |
| `enableGfm` | `boolean` | `true` | 是否启用 GFM（GitHub Flavored Markdown） |
| `className` | `string` | - | 自定义类名 |
| `sanitizeHtml` | `boolean` | `true` | 是否清理 HTML（使用 DOMPurify） |
| `enableThinkSection` | `boolean` | `true` | 是否启用思考模块处理 |

## 示例

### 禁用语法高亮

```tsx
<MarkdownRenderer 
  content="```javascript\nconst x = 1;\n```" 
  enableSyntaxHighlight={false} 
/>
```

### 禁用数学公式

```tsx
<MarkdownRenderer 
  content="这里有公式：$E = mc^2$" 
  enableMath={false} 
/>
```

### 禁用 HTML

```tsx
<MarkdownRenderer 
  content="<div>这个HTML不会被渲染</div>" 
  enableHtml={false} 
/>
```

### 自定义样式

```tsx
<MarkdownRenderer 
  content="# 标题" 
  className="my-custom-style" 
/>
```

## Storybook

本组件提供了完整的 Storybook 文档和示例。运行以下命令来查看：

```bash
npm run storybook
```

Storybook 包含以下示例：

- **基础示例** - 展示基本的 Markdown 渲染功能
- **代码语法高亮** - 展示多种编程语言的语法高亮
- **数学公式** - 展示行内和块级数学公式
- **表格和列表** - 展示各种列表和表格格式
- **GFM 特性** - 展示 GitHub Flavored Markdown 特性
- **HTML 内容** - 展示 HTML 和 Markdown 混合使用
- **禁用功能** - 展示如何选择性禁用功能
- **自定义样式** - 展示如何应用自定义样式
- **复杂示例** - 综合展示所有功能
- **性能测试** - 大量内容的性能测试

## 开发

```bash
# 安装依赖
npm install

# 启动 Storybook
npm run storybook

# 构建 Storybook
npm run build-storybook
```

## 依赖

- `react` - React 框架
- `react-markdown` - Markdown 解析器
- `react-syntax-highlighter` - 语法高亮
- `rehype-katex` - 数学公式渲染
- `rehype-raw` - HTML 支持
- `remark-gfm` - GitHub Flavored Markdown
- `remark-math` - 数学公式解析
- `katex` - 数学公式渲染引擎
- `dompurify` - HTML 安全过滤
- `classnames` - CSS 类名工具
- `lodash` - 工具函数库
- `unist-util-visit-parents` - AST 遍历工具 