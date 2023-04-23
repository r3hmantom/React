import { useState } from "react";

interface Props {
  maxChar?: number;
  children: string;
}

const ExpandableText = ({ maxChar = 100, children }: Props) => {
  const [button, setButton] = useState(true);
  const handleButton = () => {
    setButton(!button);
  };

  return (
    <>
      <p>{!button ? children : children.slice(0, maxChar) + "..."}</p>
      <button onClick={handleButton}>
        {button ? "Read More" : "See Less"}
      </button>
    </>
  );
};

export default ExpandableText;
