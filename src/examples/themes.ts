import { MarkdownStyleConfig } from "../components/markdown-renderer/types";

/**
 * 深色主题配置
 */
export const darkTheme: MarkdownStyleConfig = {
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
};

/**
 * 学术风格主题配置
 */
export const academicTheme: MarkdownStyleConfig = {
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
};

/**
 * 现代简约主题配置
 */
export const modernMinimalTheme: MarkdownStyleConfig = {
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
};
