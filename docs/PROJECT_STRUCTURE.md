# 项目结构说明

本文档描述了 React Markdown 组件库的目录结构和文件组织方式。

## 📁 目录结构

```
react-markdown/
├── .storybook/              # Storybook 配置
│   ├── main.ts             # 主配置文件
│   └── preview.ts          # 预览配置
├── dist/                   # 构建输出目录
├── scripts/                # 构建和工具脚本
│   └── clean-css-imports.js
├── src/                    # 源代码目录
│   ├── __tests__/          # 测试相关文件
│   │   ├── index.ts        # 测试工具导出
│   │   ├── mocks.ts        # 模拟数据
│   │   └── test-utils.ts   # 测试工具函数
│   ├── components/         # 组件目录
│   │   ├── index.ts        # 组件统一导出
│   │   └── markdown-renderer/  # Markdown 渲染器组件
│   │       ├── hooks/      # 自定义 Hooks
│   │       │   ├── index.ts
│   │       │   ├── useMarkdownComponents.tsx
│   │       │   ├── useMarkdownPlugins.ts
│   │       │   ├── useMarkdownStyles.ts
│   │       │   └── useProcessedContent.ts
│   │       ├── index.module.less  # 样式文件
│   │       ├── index.tsx   # 主组件文件
│   │       ├── README.md   # 组件文档
│   │       └── types.ts    # 类型定义
│   ├── examples/           # 示例配置和内容
│   │   ├── index.ts        # 示例导出
│   │   ├── content.ts      # 示例内容
│   │   └── themes.ts       # 主题配置
│   ├── stories/            # Storybook 故事
│   │   └── MarkdownRenderer.stories.tsx
│   ├── utils/              # 工具函数
│   │   └── index.ts        # 工具函数导出
│   ├── index.ts            # 主入口文件
│   └── vite-env.d.ts       # Vite 类型声明
├── .gitignore              # Git 忽略文件
├── .npmignore              # NPM 发布忽略文件
├── CHANGELOG.md            # 变更日志
├── package.json            # 项目配置
├── README.md               # 项目文档
├── tsconfig.build.json     # 构建 TypeScript 配置
├── tsconfig.json           # TypeScript 配置
└── vite.config.ts          # Vite 配置
```

## 🏗️ 架构设计

### 核心组件
- **MarkdownRenderer**: 主渲染组件，负责整合所有功能
- **Hooks**: 功能模块化的自定义 Hook 集合
- **Types**: 完整的 TypeScript 类型定义

### 功能模块
1. **内容处理** (`useProcessedContent`): LaTeX 预处理、HTML 清理
2. **样式管理** (`useMarkdownStyles`): 动态样式生成和主题支持
3. **插件系统** (`useMarkdownPlugins`): Remark/Rehype 插件管理
4. **组件配置** (`useMarkdownComponents`): 自定义组件渲染

### 工具函数
- **preprocessLaTeX**: LaTeX 语法预处理
- **replaceThinkToSection**: 思考模块标签转换

## 📦 构建和发布

### 构建配置
- 使用 Vite 作为构建工具
- 支持 ES Module 和 UMD 格式输出
- CSS 模块和样式注入支持
- TypeScript 声明文件生成

### 发布配置
- 主入口: `dist/react-markdown.umd.js`
- ES 模块: `dist/react-markdown.es.js`
- 类型声明: `dist/index.d.ts`
- 只发布 `dist` 目录内容

## 🧪 测试和开发

### Storybook
- 完整的组件示例和文档
- 多种主题样式展示
- 交互式属性配置

### 开发工具
- ESLint 代码检查
- TypeScript 类型检查
- Vite 热重载开发服务器

## 📚 文档和示例

### 内置示例
- **基础功能**: 基本 Markdown 语法
- **代码高亮**: 多语言语法高亮
- **数学公式**: KaTeX 数学公式渲染
- **主题样式**: 多种预设主题
- **复杂示例**: 综合功能展示

### 主题配置
- **深色主题**: 适合暗色界面
- **学术风格**: 适合论文和文档
- **现代简约**: 简洁的现代设计

## 🔧 扩展性

### 自定义主题
通过 `styleConfig` 属性可以完全自定义组件样式，包括：
- 容器样式
- 标题样式 (h1-h6)
- 代码块样式
- 行内代码样式
- 引用块样式

### 插件系统
支持标准的 Remark 和 Rehype 插件，可以扩展 Markdown 处理能力。

### 组件替换
可以通过自定义组件替换默认的渲染组件，实现个性化的内容展示。 