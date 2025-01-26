import React from "react";

interface TextFormatterProps {
  content: string;
}

const TextFormatter: React.FC<TextFormatterProps> = ({ content }) => {
  const formatText = (text: string) => {
    const lines = text.split("\n");

    return lines.map((line, index) => {
      // Header formatting
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold my-2">
            {line.substring(4)}
          </h3>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold my-3">
            {line.substring(3)}
          </h2>
        );
      }
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold my-4">
            {line.substring(2)}
          </h1>
        );
      }

      // Bold and link formatting
      const formattedLine = line
        .split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g)
        .map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="font-bold">
                {part.substring(2, part.length - 2)}
              </strong>
            );
          }
          if (part.startsWith("[") && part.includes("](")) {
            const match = part.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
              const [_, text, url] = match;
              return (
                <a
                  key={i}
                  href={url}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text}
                </a>
              );
            }
          }
          return part;
        });

      // Handle empty lines for spacing
      if (line.trim() === "") {
        return <br key={index} />;
      }

      return (
        <p key={index} className="mb-2">
          {formattedLine}
        </p>
      );
    });
  };

  return <div>{formatText(content)}</div>;
};

export default TextFormatter;
