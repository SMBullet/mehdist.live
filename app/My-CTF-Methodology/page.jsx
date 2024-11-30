"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

const scrollbarStyle = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const CopyButton = React.memo(({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  }, [code]);

  return (
    <button
      onClick={handleCopy}
      className="absolute right-2 top-2 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400" />
      )}
    </button>
  );
});

CopyButton.displayName = 'CopyButton'; // Set displayName for memoized component

const TableOfContents = React.memo(({ headings, onHeadingClick }) => {
  const [activeSection, setActiveSection] = useState('');
  const tocRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      const visibleSection = entries.find(entry => entry.isIntersecting);
      if (visibleSection) {
        setActiveSection(visibleSection.target.id);
        
        const activeElement = tocRef.current?.querySelector(`[data-heading="${visibleSection.target.id}"]`);
        if (activeElement) {
          const containerHeight = tocRef.current.clientHeight;
          const elementTop = activeElement.offsetTop;
          const elementHeight = activeElement.clientHeight;
          const scrollTop = tocRef.current.scrollTop;
          
          if (elementTop < scrollTop || elementTop + elementHeight > scrollTop + containerHeight) {
            tocRef.current.scrollTo({
              top: elementTop - containerHeight / 2 + elementHeight / 2,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -35% 0px',
      threshold: 0.4
    });

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-4 top-[12.5rem] w-[350px] xl:w-[400px] hidden xl:block"
    >
      <div className="p-4 bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl shadow-lg">
        <h3 className="text-base font-bold mb-3 text-red-400 border-b border-red-500/20 pb-2">On this page</h3>
        <nav 
          ref={tocRef}
          className="custom-scrollbar overflow-y-auto max-h-[calc(100vh-20rem)] pr-2"
        >
          {headings.map((heading, index) => (
            <motion.button
              key={index}
              data-heading={heading.id}
              onClick={() => onHeadingClick(heading.id)}
              className={`block text-left w-full transition-colors duration-200 py-1.5 px-2 rounded
                ${heading.level === 2 ? 'mt-1' : 'mt-0.5'} 
                ${activeSection === heading.id 
                  ? 'text-red-400 font-medium bg-red-500/10' 
                  : 'text-gray-400/80 hover:text-gray-300 hover:bg-white/5'
                }`}
              style={{ 
                fontSize: heading.level === 2 ? '0.875rem' : '0.8rem',
                marginLeft: `${(heading.level - 2) * 0.75}rem`,
                lineHeight: '1.4',
                paddingLeft: heading.level === 3 ? '1.25rem' : '0.5rem',
                whiteSpace: 'normal',
                wordBreak: 'break-word'
              }}
              whileHover={{ x: 2 }}
            >
              {heading.text}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
});

TableOfContents.displayName = 'TableOfContents'; // Set displayName for memoized component

const MethodologyPage = () => {
  const [headings, setHeadings] = useState([]);
  const [methodologyContent, setMethodologyContent] = useState('');

  const extractHeadings = useCallback((content) => {
    const headingRegex = /^(#{2,3})\s+(.+?)(?=\n|$)/gm;
    const matches = [...content.matchAll(headingRegex)];
    return matches.map((match) => ({
      level: match[1].length,
      text: match[2],
      id: match[2]
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim()
    }));
  }, []);

  useEffect(() => {
    const fetchMethodologyContent = async () => {
      const response = await fetch('/methodology.md');
      const text = await response.text();
      setMethodologyContent(text);
      setHeadings(extractHeadings(text));
    };

    fetchMethodologyContent();
  }, [extractHeadings]);

  const scrollToHeading = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const MarkdownComponents = useMemo(() => ({
    h2: ({ children }) => {
      const id = children.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      return (
        <h2 
          id={id} 
          className="text-3xl font-bold text-red-400 mt-8 mb-4"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = children.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      return (
        <h3 
          id={id} 
          className="text-2xl font-semibold text-gray-200 mt-6 mb-3"
        >
          {children}
        </h3>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-gray-300">
        {children}
      </ol>
    ),
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <div className="relative group">
          <SyntaxHighlighter
            style={dracula}
            language={match[1]}
            PreTag="div"
            className="rounded-lg custom-scrollbar !bg-gray-900/50 !mt-0"
            customStyle={{
              padding: '1.5rem 1rem',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              background: 'rgba(17, 24, 39, 0.5)',
              maxHeight: '400px',
              overflow: 'auto'
            }}
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
          <CopyButton code={String(children)} />
          <div className="absolute top-0 right-0 px-2 py-1 text-xs text-gray-400 bg-gray-800/50 rounded-bl rounded-tr-lg">
            {match[1]}
          </div>
        </div>
      ) : (
        <code className="bg-gray-800 px-2 py-1 rounded text-red-400" {...props}>
          {children}
        </code>
      );
    }
  }), []);

  return (
    <>
      <style jsx global>
        {scrollbarStyle}
      </style>
      <div className="min-h-screen p-6 sm:p-8">
        <motion.div
          className="w-full max-w-5xl mx-auto xl:pr-[300px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-gray-400 hover:text-red-400 transition-colors duration-300 mb-8 text-sm font-medium"
            whileHover={{ x: -5 }}
          >
            <svg 
              className="w-4 h-4 mr-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back to writeups
          </motion.button>

          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 leading-tight animate-moving-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-600">
              CTF Methodology
            </h1>
            <hr className="border-t-2 border-gray-700 mb-8" />
          </motion.div>

          <motion.div 
            className="prose prose-invert prose-red max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Markdown
              components={MarkdownComponents}
            >
              {methodologyContent}
            </Markdown>
          </motion.div>
        </motion.div>

        <TableOfContents 
          headings={headings} 
          onHeadingClick={scrollToHeading}
        />
      </div>
    </>
  );
};

MethodologyPage.displayName = 'MethodologyPage'; // Set displayName for memoized component

export default React.memo(MethodologyPage);
