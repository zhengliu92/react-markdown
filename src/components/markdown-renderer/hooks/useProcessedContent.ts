import DOMPurify from "dompurify";
import { useMemo } from "react";
import { pipe } from "lodash/fp";

import { preprocessLaTeX, replaceThinkToSection } from "@/utils/index";

interface UseProcessedContentOptions {
  content: string;
  sanitizeHtml: boolean;
  enableThinkSection: boolean;
  enableMath: boolean;
}

export const useProcessedContent = ({
  content,
  sanitizeHtml,
  enableThinkSection,
  enableMath,
}: UseProcessedContentOptions) => {
  return useMemo(() => {
    let text = sanitizeHtml ? DOMPurify.sanitize(content) : content;

    if (enableThinkSection) {
      text = pipe(replaceThinkToSection, preprocessLaTeX)(text) as string;
    } else if (enableMath) {
      text = preprocessLaTeX(text);
    }

    return text;
  }, [content, sanitizeHtml, enableThinkSection, enableMath]);
};
