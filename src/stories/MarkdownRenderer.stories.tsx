import type { Meta, StoryObj } from "@storybook/react";
import MarkdownRenderer from "../components/markdown-renderer/index";

const meta: Meta<typeof MarkdownRenderer> = {
  title: "Components/MarkdownRenderer",
  component: MarkdownRenderer,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "通用的 Markdown 渲染组件，支持语法高亮、数学公式、HTML 和 GFM 扩展。",
      },
    },
  },
  argTypes: {
    content: {
      control: "text",
      description: "Markdown 内容",
    },
    enableHtml: {
      control: "boolean",
      description: "是否启用 HTML 渲染",
    },
    enableMath: {
      control: "boolean",
      description: "是否启用数学公式渲染",
    },
    enableSyntaxHighlight: {
      control: "boolean",
      description: "是否启用代码语法高亮",
    },
    enableGfm: {
      control: "boolean",
      description: "是否启用 GFM（GitHub Flavored Markdown）",
    },
    className: {
      control: "text",
      description: "自定义类名",
    },
    sanitizeHtml: {
      control: "boolean",
      description: "是否清理 HTML（使用 DOMPurify）",
    },
    enableThinkSection: {
      control: "boolean",
      description: "是否启用思考模块处理",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础示例
export const Default: Story = {
  args: {
    content: `# 基础 Markdown 示例

这是一个 **基础的 Markdown 渲染** 示例。

## 特性

- 支持 **粗体** 和 *斜体*
- 支持 [链接](https://github.com)
- 支持 \`行内代码\`

### 引用

> 这是一个引用块
> 可以包含多行内容

---

这是一个分割线上面的内容。`,
    enableHtml: true,
    enableMath: true,
    enableSyntaxHighlight: true,
    enableGfm: true,
    sanitizeHtml: true,
    enableThinkSection: true,
  },
};

// 代码语法高亮示例
export const CodeHighlight: Story = {
  args: {
    content: `# 代码语法高亮示例

## JavaScript 代码

\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
\`\`\`

## Python 代码

\`\`\`python
def hello_world():
    print("Hello, World!")
    return "success"

if __name__ == "__main__":
    hello_world()
\`\`\`

## TypeScript 代码

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email?: string;
}

const user: User = {
  id: 1,
  name: "张三"
};
\`\`\`

## CSS 代码

\`\`\`css
.markdown-renderer {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
}

.markdown-renderer h1 {
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}
\`\`\``,
  },
};

// 数学公式示例
export const MathFormulas: Story = {
  args: {
    content: `# 数学公式示例

## 行内公式

这里有一个质能方程 $E = mc^2$ 和一个简单的代数式 $ax^2 + bx + c = 0$

## 块级公式

### 积分公式
$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

### 求和公式
$$
\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}
$$

### 矩阵
$$
\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}
\\begin{pmatrix}
x \\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
ax + by \\\\
cx + dy
\\end{pmatrix}
$$

### 分数和根式
$$
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$`,
  },
};

// 表格和列表示例
export const TablesAndLists: Story = {
  args: {
    content: `# 表格和列表示例

## 表格

| 语言 | 类型 | 年份 | 流行度 |
|------|------|------|--------|
| JavaScript | 动态 | 1995 | ⭐⭐⭐⭐⭐ |
| TypeScript | 静态 | 2012 | ⭐⭐⭐⭐ |
| Python | 动态 | 1991 | ⭐⭐⭐⭐⭐ |
| Rust | 静态 | 2010 | ⭐⭐⭐ |

## 有序列表

1. 第一步：分析需求
2. 第二步：设计方案
3. 第三步：编写代码
4. 第四步：测试验证
5. 第五步：部署上线

## 无序列表

- 前端技术
  - React
  - Vue
  - Angular
- 后端技术
  - Node.js
  - Python
  - Java
- 数据库
  - MySQL
  - PostgreSQL
  - MongoDB

## 任务列表

- [x] 完成组件设计
- [x] 实现基础功能
- [x] 添加语法高亮
- [ ] 编写测试用例
- [ ] 优化性能
- [ ] 添加更多主题`,
  },
};

// GFM 特性示例
export const GFMFeatures: Story = {
  args: {
    content: `# GitHub Flavored Markdown 特性

## 删除线

~~这是被删除的文本~~

正常的文本内容。

## 自动链接

访问 https://github.com 了解更多信息。

发送邮件到 example@email.com 联系我们。

## 表格对齐

| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:--------:|-------:|
| 内容1  |   内容2   |  内容3 |
| 较长的内容 | 内容 | 短内容 |

## Emoji

支持 GitHub 风格的 emoji :smile: :heart: :rocket: :+1:

## 脚注

这里有一个脚注引用[^1]。

这里有另一个脚注引用[^note]。

[^1]: 这是第一个脚注的内容。

[^note]: 这是命名脚注的内容。`,
  },
};

// 禁用功能示例
export const DisabledFeatures: Story = {
  args: {
    content: `# 禁用功能示例

## 这个示例中的代码不会有语法高亮

\`\`\`javascript
function example() {
  console.log("没有语法高亮");
}
\`\`\`

## 数学公式也被禁用了

这里的公式 $E = mc^2$ 不会被渲染。

$$
\\int_0^1 x^2 dx = \\frac{1}{3}
$$

## 但是其他功能仍然正常

- 列表功能正常
- **粗体** 和 *斜体* 正常
- [链接](https://example.com) 正常`,
    enableSyntaxHighlight: false,
    enableMath: false,
  },
};

// HTML 内容示例
export const HTMLContent: Story = {
  args: {
    content: `# HTML 内容示例

## 混合 Markdown 和 HTML

这是 **Markdown** 文本，下面是 HTML 内容：

<div style="background: #f0f8ff; padding: 16px; border-radius: 8px; border-left: 4px solid #0066cc;">
  <h4 style="margin-top: 0; color: #0066cc;">信息提示</h4>
  <p style="margin-bottom: 0;">这是一个使用 HTML 样式的提示框。</p>
</div>

## HTML 表格

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th style="border: 1px solid #ddd; padding: 8px;">项目</th>
      <th style="border: 1px solid #ddd; padding: 8px;">状态</th>
      <th style="border: 1px solid #ddd; padding: 8px;">进度</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">组件开发</td>
      <td style="border: 1px solid #ddd; padding: 8px; color: green;">✅ 完成</td>
      <td style="border: 1px solid #ddd; padding: 8px;">100%</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">测试编写</td>
      <td style="border: 1px solid #ddd; padding: 8px; color: orange;">🔄 进行中</td>
      <td style="border: 1px solid #ddd; padding: 8px;">60%</td>
    </tr>
  </tbody>
</table>

## 按钮和表单元素

<button style="background: #007bff; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
  点击按钮
</button>

<input type="text" placeholder="输入框示例" style="margin-left: 8px; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" />`,
    enableHtml: true,
  },
};

// 禁用 HTML 示例
export const NoHTML: Story = {
  args: {
    content: `# 禁用 HTML 示例

## HTML 标签会被显示为纯文本

<div style="background: red; color: white; padding: 16px;">
  这些 HTML 标签不会被渲染
</div>

<script>alert('这个脚本不会执行')</script>

<button onclick="alert('按钮无效')">这不是真正的按钮</button>

但是 **Markdown** 语法仍然有效！`,
    enableHtml: false,
  },
};

// 自定义样式示例
export const CustomStyles: Story = {
  args: {
    content: `# 自定义样式示例

这个示例使用了自定义的 CSS 类名。

## 标题

### 子标题

这是一段普通的文本内容，用于展示自定义样式的效果。

- 列表项 1
- 列表项 2
- 列表项 3

\`\`\`javascript
// 代码块示例
function customStyle() {
  return "自定义样式";
}
\`\`\``,
    className: "custom-markdown-style",
  },
  parameters: {
    docs: {
      description: {
        story: "这个示例展示了如何为组件添加自定义 CSS 类名。",
      },
    },
  },
};

// 复杂示例
export const ComplexExample: Story = {
  args: {
    content: `# 综合功能展示

这是一个展示 MarkdownRenderer 组件全部功能的综合示例。

## 1. 文本格式化

**粗体文本** 和 *斜体文本* 以及 ***粗斜体文本***

~~删除线文本~~

## 2. 代码示例

行内代码：\`console.log('Hello World')\`

代码块：
\`\`\`typescript
interface MarkdownRendererProps {
  content: string;
  enableMath?: boolean;
  enableSyntaxHighlight?: boolean;
}

const MyComponent: React.FC<MarkdownRendererProps> = (props) => {
  return <MarkdownRenderer {...props} />;
};
\`\`\`

## 3. 数学公式

行内公式：$f(x) = ax^2 + bx + c$

块级公式：
$$
\\frac{\\partial f}{\\partial x} = 2ax + b
$$

## 4. 列表和表格

### 待办事项
- [x] 设计组件 API
- [x] 实现基础功能
- [x] 添加 TypeScript 支持
- [ ] 编写文档
- [ ] 发布到 npm

### 技术对比
| 特性 | react-markdown | 自定义组件 | 评价 |
|------|----------------|------------|------|
| 语法高亮 | 需要插件 | ✅ 内置 | 更方便 |
| 数学公式 | 需要配置 | ✅ 内置 | 更简单 |
| 自定义渲染 | 复杂 | ✅ 简单 | 更灵活 |

## 5. 引用和链接

> 优秀的代码是自己的最好文档。当你考虑要添加一个注释时，问问自己，"如何能改进这段代码，以让它不需要注释？"
> 
> — Steve McConnell

访问 [React 官网](https://reactjs.org) 了解更多信息。

## 6. HTML 内容

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0;">
  <h3 style="margin: 0 0 10px 0;">特色功能</h3>
  <p style="margin: 0;">支持 HTML 和 Markdown 混合使用</p>
</div>

---

## 总结

这个 MarkdownRenderer 组件提供了：
1. 📝 完整的 Markdown 语法支持
2. 🎨 代码语法高亮
3. 🧮 数学公式渲染
4. 🔧 灵活的配置选项
5. 🎯 TypeScript 支持
6. 🛡️ HTML 安全过滤`,
  },
};

// 深色主题样式
export const DarkTheme: Story = {
  args: {
    content: `# 深色主题示例

这是一个使用深色主题的 Markdown 渲染示例。

## 特性展示

这里展示了 **粗体文本** 和 *斜体文本* 在深色主题下的效果。

### 代码示例

\`\`\`javascript
function darkThemeExample() {
  console.log("深色主题的代码高亮");
  return "beautiful";
}
\`\`\`

行内代码：\`const theme = 'dark'\`

### 引用块

> 在深色主题下，引用块有着优雅的视觉效果
> 提供了良好的阅读体验

### 数学公式

数学公式在深色背景下：$E = mc^2$

$$
\\int_0^1 x^2 dx = \\frac{1}{3}
$$`,
    styleConfig: {
      backgroundColor: "#1a1a1a",
      color: "#e5e5e5",
      padding: "24px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      headings: {
        h1: {
          color: "#ffffff",
          fontSize: "2rem",
          margin: "0 0 1rem 0",
        },
        h2: {
          color: "#f0f0f0",
          fontSize: "1.5rem",
          margin: "1.5rem 0 0.75rem 0",
        },
        h3: {
          color: "#e0e0e0",
          fontSize: "1.25rem",
          margin: "1rem 0 0.5rem 0",
        },
      },
      codeBlock: {
        backgroundColor: "#2d2d2d",
        borderRadius: "6px",
        padding: "16px",
        fontSize: "14px",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      },
      inlineCode: {
        backgroundColor: "#333333",
        color: "#ff6b6b",
        padding: "2px 6px",
        borderRadius: "4px",
        fontSize: "0.9em",
      },
      blockquote: {
        borderLeft: "4px solid #4dabf7",
        paddingLeft: "16px",
        backgroundColor: "#252525",
        margin: "16px 0",
        fontStyle: "italic",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "展示深色主题样式配置的效果",
      },
    },
  },
};

// 学术风格主题
export const AcademicTheme: Story = {
  args: {
    content: `# 学术论文样式

## 摘要

本文档展示了学术风格的 Markdown 渲染效果，适用于学术论文、研究报告等场景。

## 1. 引言

在学术写作中，良好的排版和视觉呈现对于 **传达研究成果** 至关重要。

### 1.1 研究背景

现有的文档渲染系统往往缺乏对学术写作的特殊需求支持。

## 2. 方法论

### 2.1 算法描述

我们提出了一种新的算法：

\`\`\`python
def academic_algorithm(data, parameters):
    """
    学术算法实现
    """
    result = process_data(data)
    return optimize(result, parameters)
\`\`\`

### 2.2 数学公式

核心公式如下：

$$
\\mathcal{L}(\\theta) = \\frac{1}{n} \\sum_{i=1}^{n} \\log p(y_i | x_i, \\theta)
$$

其中，内联公式 $\\theta$ 表示模型参数。

## 3. 实验结果

> **重要发现**：实验结果表明该方法在多个数据集上都取得了 SOTA 性能。

## 4. 结论

本研究为该领域提供了新的见解和方法。`,
    styleConfig: {
      backgroundColor: "#ffffff",
      color: "#2c3e50",
      padding: "40px",
      maxWidth: "800px",
      fontFamily: "'Times New Roman', 'Liberation Serif', serif",
      fontSize: "16px",
      lineHeight: "1.8",
      headings: {
        h1: {
          color: "#1a1a1a",
          fontSize: "24px",
          fontFamily: "'Times New Roman', serif",
          margin: "0 0 24px 0",
        },
        h2: {
          color: "#2c3e50",
          fontSize: "20px",
          margin: "32px 0 16px 0",
        },
        h3: {
          color: "#34495e",
          fontSize: "18px",
          margin: "24px 0 12px 0",
        },
      },
      codeBlock: {
        backgroundColor: "#f8f9fa",
        borderRadius: "4px",
        padding: "16px",
        fontSize: "14px",
        fontFamily: "'Courier New', monospace",
      },
      inlineCode: {
        backgroundColor: "#f1f3f4",
        color: "#d73a49",
        padding: "2px 4px",
        borderRadius: "3px",
        fontSize: "14px",
        fontFamily: "'Courier New', monospace",
      },
      blockquote: {
        borderLeft: "3px solid #34495e",
        paddingLeft: "20px",
        backgroundColor: "#f9f9f9",
        margin: "20px 0",
        fontStyle: "italic",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "展示适合学术论文的样式配置",
      },
    },
  },
};

// 现代简约主题
export const ModernMinimalTheme: Story = {
  args: {
    content: `# 现代简约设计

## 设计原则

现代简约风格强调 **简洁** 、**清晰** 和 **功能性**。

### 核心特征

- 大量留白
- 简洁的字体
- 柔和的色彩搭配

### 代码展示

\`\`\`typescript
interface ModernDesign {
  simplicity: boolean;
  clarity: boolean;
  functionality: boolean;
}

const createModernTheme = (): ModernDesign => ({
  simplicity: true,
  clarity: true,
  functionality: true,
});
\`\`\`

使用简洁的行内代码：\`theme.modern\`

### 引言

> 简约不是少，而是没有多余。
> ——Antoine de Saint-Exupéry

### 数学表达

简洁的数学表示：$f(x) = ax + b$

$$
\\text{Simplicity} = \\frac{\\text{Functionality}}{\\text{Complexity}}
$$`,
    styleConfig: {
      backgroundColor: "#fefefe",
      color: "#333333",
      padding: "32px",
      maxWidth: "700px",
      fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif",
      fontSize: "16px",
      lineHeight: "1.7",
      headings: {
        h1: {
          color: "#1a1a1a",
          fontSize: "28px",
          fontFamily: "'SF Pro Display', sans-serif",
          margin: "0 0 32px 0",
        },
        h2: {
          color: "#2d2d2d",
          fontSize: "22px",
          margin: "40px 0 20px 0",
        },
        h3: {
          color: "#404040",
          fontSize: "18px",
          margin: "28px 0 14px 0",
        },
      },
      codeBlock: {
        backgroundColor: "#f6f8fa",
        borderRadius: "8px",
        padding: "20px",
        fontSize: "14px",
        fontFamily: "'SF Mono', 'Monaco', monospace",
      },
      inlineCode: {
        backgroundColor: "#f3f4f6",
        color: "#6366f1",
        padding: "3px 6px",
        borderRadius: "6px",
        fontSize: "0.9em",
        fontFamily: "'SF Mono', monospace",
      },
      blockquote: {
        borderLeft: "3px solid #e5e7eb",
        paddingLeft: "24px",
        backgroundColor: "#f9fafb",
        margin: "24px 0",
        fontStyle: "normal",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "展示现代简约风格的样式配置",
      },
    },
  },
};

// 彩色主题
export const ColorfulTheme: Story = {
  args: {
    content: `# 🌈 彩色主题示例

## 🎨 设计理念

这个主题使用了丰富的色彩来增强视觉效果和用户体验。

### 🔧 技术实现

\`\`\`javascript
// 彩色主题的实现
function createColorfulTheme() {
  return {
    primary: '#ff6b6b',
    secondary: '#4ecdc4',
    accent: '#45b7d1',
    success: '#96ceb4',
  };
}
\`\`\`

彩色的行内代码：\`colorful.theme\`

### 📝 重要提示

> 🌟 颜色不仅仅是装饰，它们传达信息、创造情感并引导注意力。
> 合理的色彩搭配能够显著提升用户体验。

### 📊 数学表达

颜色理论中的关系：$\\text{Harmony} = f(\\text{Hue}, \\text{Saturation}, \\text{Brightness})$

$$
\\text{Visual Impact} = \\sum_{i=1}^{n} C_i \\cdot W_i
$$`,
    styleConfig: {
      backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#ffffff",
      padding: "28px",
      fontFamily: "'Poppins', -apple-system, sans-serif",
      fontSize: "16px",
      lineHeight: "1.6",
      headings: {
        h1: {
          color: "#fff200",
          fontSize: "26px",
          margin: "0 0 24px 0",
        },
        h2: {
          color: "#ff6b6b",
          fontSize: "20px",
          margin: "28px 0 16px 0",
        },
        h3: {
          color: "#4ecdc4",
          fontSize: "18px",
          margin: "20px 0 12px 0",
        },
      },
      codeBlock: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
        padding: "18px",
        fontSize: "14px",
        fontFamily: "'Fira Code', monospace",
      },
      inlineCode: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "#fff200",
        padding: "3px 8px",
        borderRadius: "6px",
        fontSize: "0.9em",
        fontFamily: "'Fira Code', monospace",
      },
      blockquote: {
        borderLeft: "4px solid #4ecdc4",
        paddingLeft: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        margin: "20px 0",
        fontStyle: "italic",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "展示使用丰富色彩的主题样式配置",
      },
    },
  },
};

// 扩展样式功能测试
export const ExtendedStylesTest: Story = {
  args: {
    content: `# 🎨 扩展样式功能测试

这个示例展示了新增的所有样式属性功能。

## 代码块样式测试

\`\`\`javascript
function advancedStyling() {
  console.log("这个代码块展示了扩展的样式功能");
  console.log("包括 boxShadow、border、margin 等");
  return "强大的样式控制！";
}

// 支持的新属性：
// - boxShadow: 阴影效果
// - border: 完整边框控制  
// - margin: 外边距
// - lineHeight: 行高
// - width/maxWidth: 宽度控制
// - overflow: 溢出处理
\`\`\`

## 行内代码样式

这里有一些 \`行内代码示例\` 和 \`更多测试代码\` 来展示新的样式功能。

## 引用块样式测试

> 🌟 这是一个引用块，现在支持更多样式属性
> 
> 包括 boxShadow、borderRadius、完整的 padding 控制等
> 
> 你可以创建更加精美的引用块样式！

## 多样化的样式组合

\`\`\`python
# Python 代码块也支持所有新样式
def create_beautiful_code_block():
    """
    现在可以设置：
    - 阴影效果 (boxShadow)
    - 多种边框样式 (border, borderLeft等)
    - 渐变背景 (backgroundImage)
    - 完整的间距控制 (margin, padding)
    """
    return "Amazing styling capabilities!"
\`\`\``,
    styleConfig: {
      backgroundColor: "#ffffff",
      color: "#333333",
      padding: "32px",
      fontFamily: "'Inter', -apple-system, sans-serif",
      codeBlock: {
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        padding: "20px",
        fontSize: "14px",
        fontFamily: "'JetBrains Mono', monospace",
        // 🎉 新增的样式属性
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e9ecef",
        borderLeft: "4px solid #007acc",
        margin: "16px 0",
        lineHeight: "1.6",
        overflow: "auto",
      },
      inlineCode: {
        backgroundColor: "#f1f3f4",
        color: "#d63384",
        padding: "3px 8px",
        borderRadius: "6px",
        fontSize: "0.9em",
        fontFamily: "'JetBrains Mono', monospace",
        // 🎉 新增的样式属性
        border: "1px solid #dee2e6",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        margin: "0 2px",
      },
      blockquote: {
        borderLeft: "4px solid #007acc",
        paddingLeft: "20px",
        backgroundColor: "#f8f9fa",
        margin: "20px 0",
        fontStyle: "italic",
        // 🎉 新增的样式属性
        padding: "16px 20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        border: "1px solid #e9ecef",
        color: "#495057",
        fontSize: "16px",
        lineHeight: "1.7",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "展示扩展的样式属性功能，包括 boxShadow、border、margin 等新增的CSS属性支持。",
      },
    },
  },
};

// 测试代码块背景色功能
export const CodeBlockBackgroundTest: Story = {
  args: {
    content: `# 代码块背景色测试

这个示例专门测试 \`codeBlock.backgroundColor\` 是否正常工作。

## 测试用例 1：JavaScript 代码

\`\`\`javascript
function testBackgroundColor() {
  console.log("这个代码块应该有 #f0f0f0 的背景色");
  return "如果您看到灰色背景，说明修复成功！";
}

// 测试更多代码
const config = {
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  padding: '16px'
};
\`\`\`

## 测试用例 2：Python 代码

\`\`\`python
def test_background():
    """这个Python代码块也应该有相同的背景色"""
    print("背景色应该是浅灰色 #f0f0f0")
    return True

# 如果背景色显示正确，说明问题已解决
if __name__ == "__main__":
    test_background()
\`\`\`

## 测试用例 3：CSS 代码

\`\`\`css
/* 这是CSS代码块测试 */
.code-block {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Courier New', monospace;
}

/* 如果这个代码块有正确的背景色，修复就成功了 */
\`\`\`

## 行内代码测试

这是行内代码：\`console.log("测试")\` 和 \`background-color: #f0f0f0\`

## 期望结果

- ✅ 代码块应该有浅灰色（#f0f0f0）背景
- ✅ 语法高亮应该正常工作  
- ✅ 内容应该清晰可读`,
    styleConfig: {
      backgroundColor: "#ffffff",
      color: "#333333",
      padding: "32px",
      fontFamily: "'Inter', -apple-system, sans-serif",
      codeBlock: {
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        padding: "16px",
        fontSize: "14px",
        fontFamily: "'Courier New', monospace",
      },
      inlineCode: {
        backgroundColor: "#e8e8e8",
        color: "#d63384",
        padding: "2px 6px",
        borderRadius: "4px",
        fontSize: "0.9em",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "这个故事专门用于测试 codeBlock.backgroundColor 配置是否正常工作。代码块应该显示 #f0f0f0 的浅灰色背景。",
      },
    },
  },
};

// 性能测试示例（大量内容）
export const PerformanceTest: Story = {
  args: {
    content: Array.from(
      { length: 50 },
      (_, i) => `## 第 ${i + 1} 个章节

这是第 ${i + 1} 个章节的内容。包含一些 **粗体文本** 和 *斜体文本*。

\`\`\`javascript
// 第 ${i + 1} 个代码示例
function example${i + 1}() {
  console.log("这是第 ${i + 1} 个示例");
  return ${i + 1};
}
\`\`\`

数学公式：$f_${i + 1}(x) = x^${i + 1}$

| 项目 | 值 |
|------|-----|
| 编号 | ${i + 1} |
| 状态 | 正常 |

---`
    ).join("\n\n"),
  },
  parameters: {
    docs: {
      description: {
        story: "这个示例用于测试组件在处理大量内容时的性能表现。",
      },
    },
  },
};
