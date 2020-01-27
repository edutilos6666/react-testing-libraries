import React from "react";
import DnDContainer from "./DnDContainer";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const ReactDnDExample2 = () => {
  return (
    <DndProvider backend={Backend}>
      <DnDContainer />
    </DndProvider>
  );
};

export default ReactDnDExample2;
