export const preprocessLaTeX = (content: string) => {
  const blockProcessedContent = content.replace(
    /\\\[([\s\S]*?)\\\]/g,
    (_, equation) => `$$${equation}$$`
  );
  const inlineProcessedContent = blockProcessedContent.replace(
    /\\\(([\s\S]*?)\\\)/g,
    (_, equation) => `$${equation}$`
  );
  return inlineProcessedContent;
};

export function replaceThinkToSection(text: string = "") {
  const pattern = /<think>([\s\S]*?)<\/think>/g;

  const result = text.replace(pattern, '<section class="think">$1</section>');

  return result;
}
