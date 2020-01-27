import React, { useState } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Infinite from "react-infinite";

const ReactInfiniteExample = () => {
  const SortableItem = sortableElement(({ height, value }) => {
    return <li style={{ height }}>{value}</li>;
  });

  const SortableInfiniteList = sortableContainer(({ items }) => {
    return (
      <Infinite
        containerHeight={600}
        elementHeight={items.map(({ height }) => height)}
      >
        {items.map(({ value, height }, index) => (
          <SortableItem
            key={`item-${value}`}
            index={index}
            value={value}
            height={height}
          />
        ))}
      </Infinite>
    );
  });

  const [items, setItems] = useState([
    { value: "Item 1", height: 89 },
    { value: "Item 2", height: 59 },
    { value: "Item 3", height: 130 },
    { value: "Item 4", height: 59 },
    { value: "Item 5", height: 200 },
    { value: "Item 6", height: 150 }
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
  return <SortableInfiniteList items={items} onSortEnd={onSortEnd} />;
};

export default ReactInfiniteExample;
