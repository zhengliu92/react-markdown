/**
 * 基础 Markdown 示例内容
 */
export const basicContent = `# 基础 Markdown 示例

这是一个 **基础的 Markdown 渲染** 示例。

## 特性

- 支持 **粗体** 和 *斜体*
- 支持 [链接](https://github.com)
- 支持 \`行内代码\`

### 引用

> 这是一个引用块
> 可以包含多行内容

---

这是一个分割线上面的内容。`;

/**
 * 代码示例内容
 */
export const codeContent = `# 代码语法高亮示例

## JavaScript 代码

\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
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
\`\`\``;

/**
 * 数学公式示例内容
 */
export const mathContent = `# 数学公式示例

## 行内公式

这里有一个质能方程 $E = mc^2$ 和一个简单的代数式 $ax^2 + bx + c = 0$

## 块级公式

### 积分公式
$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
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
$$`;

/**
 * 综合示例内容
 */
export const complexContent = `# 综合功能展示

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

访问 [React 官网](https://reactjs.org) 了解更多信息。`;
