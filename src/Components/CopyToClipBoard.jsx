import { useEffect, useState } from "react";
import CopyIcon from "./CopyIcon";
import CheckIcon from "./CheckIcon";
export default function CopyToClipboard({ hex }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(hex);
    setCopied(true);
  }

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button className="copy-button" onClick={handleCopy} title="Copy hex">
      {!copied ? (
        <CopyIcon />
      ) : (
        <>
          <CheckIcon />
          Copied!
        </>
      )}
    </button>
  );
}
