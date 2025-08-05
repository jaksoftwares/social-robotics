// components/ReadMore.tsx
"use client";

import { useState, useEffect } from "react";

interface ReadMoreTextProps {
  text: string;
  maxChars?: number;
  mobileBreakpoint?: number;
  className?: string;
}

export const ReadMoreText = ({ 
  text, 
  maxChars = 150,
  mobileBreakpoint = 768,
  className = "text-gray-600 text-lg text-justify leading-relaxed mb-6" 
}: ReadMoreTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [mobileBreakpoint]);

  // Function to truncate text while preserving HTML tags
  const truncateHtml = (html: string, maxLength: number) => {
    if (html.length <= maxLength) return html;

    let truncated = '';
    let length = 0;
    const tagStack: string[] = [];
    let inTag = false;
    let currentTag = '';

    for (let i = 0; i < html.length && length < maxLength; i++) {
      const char = html[i];

      if (char === '<') {
        inTag = true;
        currentTag = char;
      } else if (char === '>') {
        inTag = false;
        currentTag += char;
        
        // Handle opening and closing tags
        if (currentTag.startsWith('</')) {
          tagStack.pop();
        } else if (!currentTag.endsWith('/>')) {
          const tagMatch = currentTag.match(/<\s*([a-zA-Z]+)/);
          if (tagMatch) {
            tagStack.push(tagMatch[1]);
          }
        }
        
        truncated += currentTag;
        currentTag = '';
      } else if (inTag) {
        currentTag += char;
      } else {
        truncated += char;
        length++;
      }
    }

    // Close any open tags
    while (tagStack.length > 0) {
      const tag = tagStack.pop();
      truncated += `</${tag}>`;
    }

    return truncated + '...';
  };

  if (!isMobile || text.length <= maxChars) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: text }} />;
  }

  const truncatedHtml = truncateHtml(text, maxChars);

  return (
    <div>
      <div 
        className={className}
        dangerouslySetInnerHTML={{ __html: isExpanded ? text : truncatedHtml }}
      />
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 hover:underline font-semibold mt-2"
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};