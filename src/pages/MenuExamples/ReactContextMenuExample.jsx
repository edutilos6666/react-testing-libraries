import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const NEWLINE = "\r\n";
const ReactContextMenuExample = props => {
  const [log, setLog] = useState("");
  function handleClick(e, data) {
    console.log(data.foo);
    setLog(`${log}${NEWLINE}${data.foo}`);
  }

  return (
    <div>
      <ContextMenuTrigger id="some_unique_identifier">
        {" "}
        {/* NOTICE: id must be unique for EVERY instance */}
        <div className="well">Right click to see the menu</div>
      </ContextMenuTrigger>

      <ContextMenu id="some_unique_identifier">
        <MenuItem data={{ foo: "foo" }} onClick={handleClick}>
          ContextMenu Item 1
        </MenuItem>
        <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
          ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{ foo: "bim" }} onClick={handleClick}>
          ContextMenu Item 3
        </MenuItem>
      </ContextMenu>

      <textarea
        className="w-100 mt-5"
        style={{ height: "400px" }}
        value={log}
        onChange={e => setLog(e.target.value)}
      ></textarea>
    </div>
  );
};

export default ReactContextMenuExample;
