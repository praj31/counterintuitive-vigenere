import { useEffect, useState } from "react";
import { encrypt, decrypt } from "../../util";

export const HandsOn = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (text && key) {
      if (activeTab) {
        setOutput(decrypt(text, key));
      } else {
        setOutput(encrypt(text, key));
      }
    }
  }, [text, key]);

  return (
    <>
      <form>
        <div className="options">
          <div
            className={activeTab ? null : "process-active"}
            onClick={() => {
              setText("");
              setActiveTab(0);
            }}
          >
            Encrypt
          </div>
          <div
            className={activeTab ? "process-active" : null}
            onClick={() => {
              setText("");
              setActiveTab(1);
            }}
          >
            Decrypt
          </div>
        </div>
        <div className="workzone">
          <div className="texthere">
            <textarea
              id="data-text-field"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`${
                activeTab ? "Cipher text goes here." : "Plain text goes here."
              }`}
            ></textarea>
          </div>
          <div className="keyhere">
            <input
              id="key-text-field"
              type="text"
              placeholder="Key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
          <div className="outputhere">
           
            {(!(text && key) && (
              <span className="warning-text">
                Please enter values for message as well as key. The output shall
                be displayed here.
              </span>
            )) ||
              (text && key && output)}
          </div>
        </div>
      </form>
    </>
  );
};
