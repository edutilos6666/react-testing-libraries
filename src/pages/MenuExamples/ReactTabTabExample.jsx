import React, { useState } from "react";
import {
  Tabs,
  DragTabList,
  DragTab,
  PanelList,
  Panel,
  TabList,
  Tab
} from "react-tabtab";
import { simpleSwitch } from "react-tabtab/lib/helpers/move";

const ReactTabTabExample = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabs, setTabs] = useState([]);
  const handleTabChange = index => {
    setActiveIndex(index);
  };

  const handleTabSequenceChange = ({ oldIndex, newIndex }) => {
    const updateTabs = simpleSwitch(tabs, oldIndex, newIndex);
    setTabs(updateTabs);
    setActiveIndex(newIndex);
  };

  return (
    <div className="d-flex flex-column">
      <Tabs
        activeIndex={activeIndex}
        onTabChange={handleTabChange}
        onTabSequenceChange={handleTabSequenceChange}
      >
        <DragTabList>
          <DragTab>DragTab1</DragTab>
          <DragTab>DragTab2</DragTab>
        </DragTabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
        </PanelList>
      </Tabs>

      <Tabs>
        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
        </TabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
        </PanelList>
      </Tabs>
    </div>
  );
};

export default ReactTabTabExample;
