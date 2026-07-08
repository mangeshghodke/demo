import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './RotatingText.css';

function cn(...classes) { return classes.filter(Boolean).join(' '); }

const RotatingText = forwardRef((props, ref) => {
  const {
    texts,
    transition = { type: 'spring', damping: 25, stiffness: 300 },
    initial = { y: '100%', opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: '-120%', opacity: 0 },
    animatePresenceMode = 'wait',
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = 'first',
    loop = true,
    auto = true,
    splitBy = 'characters',
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = text => {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      return Array.from(new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text), s => s.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === 'characters') {
      return currentText.split(' ').map((word, i, arr) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== arr.length - 1
      }));
    }
    return currentText.split(' ').map((word, i, arr) => ({
      characters: [word],
      needsSpace: i !== arr.length - 1
    }));
  }, [texts, currentTextIndex, splitBy]);

  const getStaggerDelay = useCallback((index, totalChars) => {
    if (staggerFrom === 'first') return index * staggerDuration;
    if (staggerFrom === 'last') return (totalChars - 1 - index) * staggerDuration;
    if (staggerFrom === 'center') return Math.abs(Math.floor(totalChars / 2) - index) * staggerDuration;
    if (staggerFrom === 'random') return Math.abs(Math.floor(Math.random() * totalChars) - index) * staggerDuration;
    return Math.abs(staggerFrom - index) * staggerDuration;
  }, [staggerFrom, staggerDuration]);

  const next = useCallback(() => {
    const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
    if (nextIndex !== currentTextIndex) setCurrentTextIndex(nextIndex);
  }, [currentTextIndex, texts.length, loop]);

  useImperativeHandle(ref, () => ({ next, previous: () => { /* */ }, jumpTo: () => { /* */ }, reset: () => { /* */ } }), [next]);

  useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto]);

  return (
    <motion.span className={cn('text-rotate', mainClassName)} {...rest} layout transition={transition}>
      <span className="text-rotate-sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.span key={currentTextIndex} className={cn('text-rotate')} layout aria-hidden="true">
          {elements.map((wordObj, wordIndex, array) => {
            const previousCharsCount = array.slice(0, wordIndex).reduce((sum, w) => sum + w.characters.length, 0);
            return (
              <span key={wordIndex} className={cn('text-rotate-word', splitLevelClassName)}>
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{ ...transition, delay: getStaggerDelay(previousCharsCount + charIndex, array.reduce((sum, w) => sum + w.characters.length, 0)) }}
                    className={cn('text-rotate-element', elementLevelClassName)}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && <span className="text-rotate-space"> </span>}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = 'RotatingText';
export default RotatingText;
