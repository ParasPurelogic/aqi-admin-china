// Helper function to parse attributes from a tag string
function parseAttributes(attributesString: string): Record<string, any> {
  const attributes: Record<string, any> = {};
  const attrRegex = /(\w+)=['"](.*?)['"]/g;
  let match: RegExpExecArray | null;

  while ((match = attrRegex.exec(attributesString)) !== null) {
    let attrName = match[1];

    // Convert 'class' to 'className' for React
    if (attrName === "class") {
      attrName = "className";
    }

    // Parse 'style' into an object
    if (attrName === "style") {
      const styleObject: Record<string, string> = {};
      match[2]
        .split?.(";")
        .filter((style) => style.trim() !== "")
        .forEach((style) => {
          const [key, value] = style.split?.(":").map((str) => str.trim());
          if (key && value) {
            // Convert CSS property names to camelCase for React
            const camelCaseKey = key.replace(/-([a-z])/g, (_, char) =>
              char.toUpperCase()
            );
            styleObject[camelCaseKey] = value;
          }
        });
      attributes[attrName] = styleObject;
    } else {
      attributes[attrName] = match[2];
    }
  }

  return attributes;
}

// Recursive function to parse a string containing HTML tags and return an array of string/JSX.Element
export default function parseStringedHTML(
  translation: string
): (string | JSX.Element)[] {
  try {
    const tagRegex = /<(\w+)([^>]*)>(.*?)<\/\1>|<br\s*\/?>/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;

    let match: RegExpExecArray | null;
    while ((match = tagRegex.exec(translation)) !== null) {
      const [fullMatch, tagName, attributesString, content] = match;

      // Add the text before the matched tag
      if (match.index > lastIndex) {
        parts.push(translation.slice(lastIndex, match.index));
      }

      if (tagName) {
        // Handle standard tags
        const attributes = parseAttributes(attributesString);

        // Recursively parse the content inside the tag (to handle nested tags)
        const children = parseStringedHTML(content);

        // Create JSX element based on tag name and attributes
        const Tag = tagName as keyof JSX.IntrinsicElements; // Convert tag name to JSX component
        parts.push(
          <Tag key={parts.length} {...attributes}>
            {children}
          </Tag>
        );
      } else if (fullMatch.startsWith("<br")) {
        // Handle <br> tags
        parts.push(<br key={parts.length} />);
      }

      lastIndex = tagRegex.lastIndex;
    }

    // Add the remaining part of the string after the last tag
    if (lastIndex < translation.length) {
      parts.push(translation.slice(lastIndex));
    }

    return parts;
  } catch (error) {
    return [translation];
  }
}
