import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  lastOptions,
  intervalMs,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  lastOptions?: string[];
  intervalMs?: number;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  // rotation logic for the last word
  const rotationOptions = (() => {
    if (lastOptions && lastOptions.length > 0) return lastOptions;
    const lastRaw = words[words.length - 1]?.text ?? "";
    return lastRaw.includes("|") ? lastRaw.split("|") : [lastRaw];
  })();
  const [currentRotationIndex, setCurrentRotationIndex] = useState(0);
  useEffect(() => {
    if (!rotationOptions || rotationOptions.length <= 1) return;
    const id = setInterval(() => {
      setCurrentRotationIndex((i) => (i + 1) % rotationOptions.length);
    }, intervalMs ?? 3000);
    return () => clearInterval(id);
  }, [rotationOptions, intervalMs]);

  // when rotation changes, re-run the reveal animation if in view
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [currentRotationIndex, isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          // if this is the last word, render based on rotating options
          const isLast = idx === wordsArray.length - 1;
          const chars = isLast
            ? rotationOptions[currentRotationIndex].split("")
            : word.text;
          return (
            <div key={`word-${idx}`} className="inline-block">
              {chars.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  lastOptions,
  lastColors,
  intervalMs,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  lastOptions?: string[];
  lastColors?: string[];
  intervalMs?: number;
}) => {
  const rotationOptions = lastOptions && lastOptions.length > 0
    ? lastOptions
    : [words[words.length - 1]?.text ?? ""];
  const colors = lastColors && lastColors.length > 0
    ? lastColors
    : rotationOptions.map(() => "text-blue-500");

  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState(rotationOptions[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    if (rotationOptions.length <= 1) {
      setDisplayed(rotationOptions[0]);
      return;
    }

    const pauseTime = intervalMs ?? 3000;
    const typeSpeed = 80;
    const deleteSpeed = 50;

    if (pause) {
      const timeout = setTimeout(() => setPause(false), pauseTime);
      return () => clearTimeout(timeout);
    }

    const current = rotationOptions[wordIndex];

    if (!isDeleting) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, typeSpeed);
        return () => clearTimeout(timeout);
      }
      setPause(true);
      setIsDeleting(true);
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      }
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % rotationOptions.length);
    }
  }, [displayed, isDeleting, pause, wordIndex, rotationOptions, intervalMs]);

  const staticWords = words.slice(0, -1);
  const currentColor = colors[wordIndex];

  const renderWords = () => {
    return (
      <div className="inline-flex">
        {staticWords.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.split("").map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn("text-white", word.className)}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
        <div className="inline-block">
          {displayed.split("").map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn("text-white", currentColor)}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
