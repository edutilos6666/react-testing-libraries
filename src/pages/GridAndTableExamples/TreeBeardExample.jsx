import React, { useState } from "react";
import { Treebeard } from "react-treebeard";

const TreeBeardExample = props => {
  const _data = {
    name: "root",
    toggled: true,
    children: [
      {
        name: "parent",
        children: [{ name: "child1" }, { name: "child2" }]
      },
      {
        name: "loading parent",
        loading: true,
        children: []
      },
      {
        name: "parent",
        children: [
          {
            name: "nested parent",
            children: [{ name: "nested child 1" }, { name: "nested child 2" }]
          }
        ]
      }
    ]
  };

  const [data, setData] = useState(_data);
  const [cursor, setCursor] = useState();
  const [active, setActive] = useState();

  const onToggle = (node, toggled) => {
    if (cursor) {
      // this.setState(() => ({cursor, active: false}));
      setActive(false);
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    // this.setState(() => ({cursor: node, data: Object.assign({}, data)}));
    setCursor(node);
    setData({ ...data });
  };

  return <Treebeard data={data} onToggle={onToggle} />;
};

export default TreeBeardExample;
