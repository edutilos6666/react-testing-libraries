import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";

const EditorExample = props => {
  const [text1, setText1] = useState(
    "<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>"
  );
  const [text2, setText2] = useState("");
  function renderHeader() {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
      </span>
    );
  }

  const header = renderHeader();

  return (
    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>Editor</h1>
          <p>Editor is rich text editor component based on Quill.</p>
        </div>
      </div>

      <div className="content-section implementation">
        <h3 className="first">Default</h3>
        <Editor
          style={{ height: "320px" }}
          value={text1}
          onTextChange={e => setText1(e.htmlValue)}
        />
        <p>Value: {text1 || "empty"}</p>
        <Button label="Clear" icon="pi pi-times" onClick={() => setText1("")} />

        <hr />

        <h3 className="first">Custom Toolbar</h3>
        <Editor
          headerTemplate={header}
          style={{ height: "320px" }}
          value={text2}
          onTextChange={e => setText2(e.htmlValue)}
        />
        <p>Value: {text2 || "empty"}</p>
        <Button label="Clear" icon="pi pi-times" onClick={() => setText2("")} />
      </div>
    </div>
  );
};

export default EditorExample;
