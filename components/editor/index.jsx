/* eslint-disable react/no-children-prop */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Prism from "prismjs";

import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export const getContentFragment = (content) => {
  const [codeBlock, setCodeBlock] = useState("");
  useEffect(() => {
    setCodeBlock("line-numbers language-markup rounded-lg");
    Prism.highlightAll();
  }, [codeBlock]);

  return (
    <React.Fragment>
      <RichText
        content={content}
        renderers={{
          h1: ({ children }) => <h1 className="text-3xl font-semibold mb-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-semibold mb-4">{children}</h3>,
          blockquote: ({ children }) => <blockquote className="p-4 mb-4 italic border-l-4 bg-neutral-100 text-neutral-700 border-cyan-700 rounded-r-lg">{children}</blockquote>,
          a: ({ children, href, openInNewTab }) => (
            <a href={href} className="text-cyan-700 active:text-pink-500 mb-4" target={openInNewTab ? "_blank" : "_self"} rel="noreferrer" alt={children?.props.parent.title}>
              {children}
            </a>
          ),
          bold: ({ children }) => <strong>{children}</strong>,
          p: ({ children }) => <p className="mb-4">{children}</p>,
          ul: ({ children }) => <ul className="mb-4 list-disc">{children}</ul>,
          ol: ({ children }) => <ol className="mb-4 list-decimal">{children}</ol>,
          li: ({ children }) => <li className="ml-4 lg:ml-8">{children}</li>,
          img: ({ children }) => (
            <div className="mb-4 flex justify-center">
              <img src={children.props.parent.src} width={children.props.parent.width} height={children.props.parent.height} alt={children.props.parent.title} />
            </div>
          ),
          table: ({ children }) => <table className="mb-4  w-full">{children}</table>,

          code_block: ({ children }) => {
            return (
              <pre className={`${codeBlock}`}>
                <code>{children}</code>
              </pre>
            );
          },
          Asset: {
            application: () => (
              <div>
                <p>Asset</p>
              </div>
            ),
            text: () => (
              <div>
                <p>text plain</p>
              </div>
            ),
          },
        }}
      />
    </React.Fragment>
  );
};

// export const getContentFragment = (index, text, obj, type) => {
//   let modifiedText = text;
//   if (obj) {
//     if (obj.bold) {
//       modifiedText = <b key={index}>{text}</b>;
//     }
//     if (obj.italic) {
//       modifiedText = <em key={index}>{text}</em>;
//     }
//     if (obj.underline) {
//       modifiedText = <u key={index}>{text}</u>;
//     }
//   }
//   switch (type) {
//     case "heading-three":
//       return (
//         <h3 key={index} className="text-xl font-semibold mb-4">
//           {modifiedText.map((item, i) => (
//             <React.Fragment key={i}>{item}</React.Fragment>
//           ))}
//         </h3>
//       );
//     case "paragraph":
//       return (
//         <p key={index} className="mb-8">
//           {modifiedText.map((item, i) => (
//             <React.Fragment key={i}>{item}</React.Fragment>
//           ))}
//         </p>
//       );
//     case "heading-four":
//       return (
//         <h4 key={index} className="text-md font-semibold mb-4">
//           {modifiedText.map((item, i) => (
//             <React.Fragment key={i}>{item}</React.Fragment>
//           ))}
//         </h4>
//       );
//     case "image":
//       return (
//         <div className="mb-8 flex justify-center" key={index}>
//           <img alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />
//         </div>
//       );
//     default:
//       return modifiedText;
//   }
// };
