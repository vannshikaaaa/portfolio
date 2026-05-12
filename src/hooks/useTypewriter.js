import { useEffect, useState } from 'react';

const useTypewriter = (words, typingSpeed = 110, deletingSpeed = 60, pause = 1400) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words?.length) return undefined;

    const currentWord = words[wordIndex % words.length];

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, displayText.length + 1);
          setDisplayText(nextText);
          if (nextText === currentWord) setIsDeleting(true);
        } else {
          const nextText = currentWord.slice(0, displayText.length - 1);
          setDisplayText(nextText);
          if (nextText === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : displayText === currentWord ? pause : typingSpeed
    );

    return () => window.clearTimeout(timeout);
  }, [deletingSpeed, displayText, isDeleting, pause, typingSpeed, wordIndex, words]);

  return displayText;
};

export default useTypewriter;