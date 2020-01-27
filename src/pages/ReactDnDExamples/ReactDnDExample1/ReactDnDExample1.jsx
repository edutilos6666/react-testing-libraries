import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import DnDContainer from "./DnDContainer";

const ReactDnDExample1 = () => {
  return (
    <DndProvider backend={Backend}>
      <DnDContainer />
    </DndProvider>
  );
};

export default ReactDnDExample1;
