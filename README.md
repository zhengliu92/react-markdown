# React Markdown Renderer

[![npm version](https://badge.fury.io/js/markdown-renderer-react.svg)](https://badge.fury.io/js/markdown-renderer-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-blue.svg)](https://zhengliu92.github.io/react-markdown)

A powerful, customizable React Markdown rendering component with syntax highlighting, math formulas, HTML rendering, and multiple theme styles.

English | [中文](README-zh.md)

## ✨ Features

- 🎨 **Multiple Theme Styles** - Built-in dark, academic, minimal, colorful themes
- 📝 **Complete Markdown Support** - Full GFM (GitHub Flavored Markdown) support
- 🎯 **Code Syntax Highlighting** - Prism.js-based syntax highlighting
- 🧮 **Math Formula Rendering** - LaTeX math formulas with KaTeX
- 🔧 **Flexible Configuration** - Customizable styles and component configuration
- 🛡️ **Safe HTML Filtering** - Built-in HTML sanitization with DOMPurify
- 📱 **Responsive Design** - Adapts to various screen sizes
- 🎪 **Storybook Documentation** - Complete component examples and documentation

## 📦 Installation

```bash
npm install markdown-renderer-react
# or
yarn add markdown-renderer-react
```

## 🚀 Quick Start

```tsx
import { MarkdownRenderer } from 'markdown-renderer-react';

function App() {
  const content = `
# Hello World

This is a **Markdown** rendering example.

\`\`\`javascript
console.log('Hello, World!');
\`\`\`

Math formula: $E = mc^2$
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

## 📚 API Documentation

### Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `content` | `string` | - | Markdown content |
| `enableHtml` | `boolean` | `true` | Enable HTML rendering |
| `enableMath` | `boolean` | `true` | Enable math formulas |
| `enableSyntaxHighlight` | `boolean` | `true` | Enable syntax highlighting |
| `enableGfm` | `boolean` | `true` | Enable GFM |
| `className` | `string` | - | Custom CSS class name |
| `sanitizeHtml` | `boolean` | `true` | Sanitize HTML content |
| `enableThinkSection` | `boolean` | `true` | Enable think section processing |
| `styleConfig` | `MarkdownStyleConfig` | - | Style configuration |

## 🎨 Theme Examples

### Dark Theme
```tsx
<MarkdownRenderer
  content={content}
  styleConfig={{
    backgroundColor: "#1a1a1a",
    color: "#e5e5e5",
    // ... more configuration
  }}
/>
```

### Academic Style
```tsx
<MarkdownRenderer
  content={content}
  styleConfig={{
    fontFamily: "'Times New Roman', serif",
    fontSize: "16px",
    lineHeight: "1.8",
    // ... more configuration
  }}
/>
```

### Modern Minimal
```tsx
<MarkdownRenderer
  content={content}
  styleConfig={{
    fontFamily: "'SF Pro Display', system-ui, sans-serif",
    backgroundColor: "#fefefe",
    maxWidth: "700px",
    // ... more configuration
  }}
/>
```

## 🎨 Built-in Themes

Import and use predefined themes:

```tsx
import { MarkdownRenderer } from 'markdown-renderer-react';
import { darkTheme, academicTheme, modernMinimalTheme } from 'markdown-renderer-react/examples';

<MarkdownRenderer content={content} styleConfig={darkTheme} />
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook

# Build
npm run build

# Type checking
npm run type-check
```

## 📖 Documentation

**🌐 Live Demo**: [https://zhengliu92.github.io/react-markdown](https://zhengliu92.github.io/react-markdown)

Run Storybook to view complete component documentation and examples:

```bash
npm run storybook
```

## 🎯 Advanced Usage

### Custom Components

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

### Math Formulas

Supports both inline and block math:

```markdown
Inline math: $E = mc^2$

Block math:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### Code Highlighting

Supports multiple programming languages:

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

## 🔧 Configuration

### Style Configuration Interface

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

## 🤝 Contributing

We welcome Pull Requests and Issues!

### Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development: `npm run dev`
4. Run Storybook: `npm run storybook`

### Guidelines

- Follow TypeScript best practices
- Add tests for new features
- Update documentation
- Follow the existing code style

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [react-markdown](https://github.com/remarkjs/react-markdown) - Core markdown processing
- [KaTeX](https://katex.org/) - Math rendering
- [Prism.js](https://prismjs.com/) - Syntax highlighting
- [DOMPurify](https://github.com/cure53/DOMPurify) - HTML sanitization 