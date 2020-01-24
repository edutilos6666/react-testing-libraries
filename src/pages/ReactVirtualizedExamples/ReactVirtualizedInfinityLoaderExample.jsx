import React, { useState, useEffect } from "react";
import { Table, Column, AutoSizer, InfiniteLoader } from "react-virtualized";
import namor from "namor";
/////////////////////////////////////////
// Does not work yet
//////////////////////////////////////////
const generateRandomItem = idx => ({
  id: idx,
  name: namor.generate({ words: 1, numbers: 0 }),
  email: namor.generate({ words: 1, numbers: 0 })
});

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const dummyPromiseResolver = resolve => {
  return true;
};

const ReactVirtualizedInfinityLoaderExample = () => {
  const [items, setItems] = useState([]);
  const [promiseResolve, setPromiseResolve] = useState(() => {});
  useEffect(() => {
    // let items = [];
    // for (let i = 0, l = 100; i < l; i++) {
    //   items.push(generateRandomItem(i));
    // }

    setItems(range(10).map(one => generateRandomItem(one)));
  });

  function loadMore() {
    // simulate a request
    setTimeout(() => {
      actuallyLoadMore();
    }, 500);
    // we need to return a promise
    return new Promise((resolve, reject) => {
      setPromiseResolve(resolve);
    });
  }

  function actuallyLoadMore() {
    // fake new data
    let newItems = [];
    let s = items.length + 1;
    for (let i = 0, l = 100; i < l; i++) {
      newItems.push(generateRandomItem(s + i));
    }
    //   setState({ items: items.concat(newItems)})
    setItems([...items, ...newItems]);
    // resolve the promise after data where fetched
    // promiseResolve();
    return false;
  }

  return (
    <div className="container">
      <h1>Infinite scrolling autosize table example </h1>
      <InfiniteLoader
        isRowLoaded={({ index }) => !!items[index]}
        loadMoreRows={loadMore}
        rowCount={1000000}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ width }) => (
              <Table
                ref={registerChild}
                onRowsRendered={onRowsRendered}
                rowClassName="table-row"
                headerHeight={40}
                width={width}
                height={300}
                rowHeight={40}
                rowCount={items.length}
                rowGetter={({ index }) => items[index]}
              >
                <Column label="Id" dataKey="id" width={width * 0.2} />
                <Column label="Name" dataKey="name" width={width * 0.4} />
                <Column label="E.mail" dataKey="email" width={width * 0.4} />
              </Table>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
};

export default ReactVirtualizedInfinityLoaderExample;
