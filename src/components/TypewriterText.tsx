
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypewriterText = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = "",
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      const shouldDelete = isDeleting;
      const currentTextLength = currentText.length;
      
      // Set the next text based on state
      if (!shouldDelete && currentTextLength < fullText.length) {
        // Still typing
        setCurrentText(fullText.substring(0, currentTextLength + 1));
        timeout = setTimeout(handleTyping, typingSpeed);
      } else if (shouldDelete && currentTextLength > 0) {
        // Deleting
        setCurrentText(currentText.substring(0, currentTextLength - 1));
        timeout = setTimeout(handleTyping, deletingSpeed);
      } else if (shouldDelete && currentTextLength === 0) {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        timeout = setTimeout(handleTyping, typingSpeed);
      } else {
        // Finished typing, start deleting after delay
        setIsDeleting(true);
        timeout = setTimeout(handleTyping, delayBetweenTexts);
      }
    };
    
    timeout = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return <span className={className}>{currentText}<span className="animate-pulse">|</span></span>;
};

export default TypewriterText;
