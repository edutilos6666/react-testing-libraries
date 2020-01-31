import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DataGrid, { valueCellContentRenderer } from "react-data-grid";
import { Menu } from "react-data-grid-addons";
import Wrapper from "./Wrapper";

const { ContextMenu, MenuItem, SubMenu, ContextMenuTrigger } = Menu;

const ReactDataGridExample = props => {
  const [rows, setRows] = useState([]);
  const _columns = [
    { key: "id", name: "ID" },
    { key: "title", name: "Title" },
    { key: "count", name: "Count" }
  ];

  useEffect(() => {
    const rows = [];
    for (let i = 1; i < 10; i++) {
      rows.push({
        id: i,
        title: `Title ${i}`,
        count: i * 1000
      });
    }

    setRows([...rows]);
  }, []);

  const rowGetter = rowIdx => {
    return rows[rowIdx];
  };

  const deleteRow = (e, { rowIdx }) => {
    rows.splice(rowIdx, 1);
    setRows(rows);
  };

  const insertRowAbove = (e, { rowIdx }) => {
    insertRow(rowIdx);
  };

  const insertRowBelow = (e, { rowIdx }) => {
    insertRow(rowIdx + 1);
  };

  const insertRow = rowIdx => {
    const newRow = {
      id: 0,
      title: `New at ${rowIdx + 1}`,
      count: 0
    };

    const rows = [...rows];
    rows.splice(rowIdx, 0, newRow);

    setRows(rows);
  };

  return (
    <Wrapper title="Context Menu Example">
      <DataGrid
        contextMenu={
          <MyContextMenu
            id="customizedContextMenu"
            onRowDelete={deleteRow}
            onRowInsertAbove={insertRowAbove}
            onRowInsertBelow={insertRowBelow}
          />
        }
        columns={_columns}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        minHeight={500}
        RowsContainer={ContextMenuTrigger}
        defaultCellContentRenderer={valueCellContentRenderer}
      />
    </Wrapper>
  );
};

const MyContextMenu = ({
  onRowDelete,
  onRowInsertAbove,
  onRowInsertBelow,
  idx,
  id,
  rowIdx
}) => {
  //   onRowDelete = (e, data) => {
  //     if (typeof this.props.onRowDelete === 'function') {
  //       this.props.onRowDelete(e, data);
  //     }
  //   };

  //   onRowInsertAbove = (e, data) => {
  //     if (typeof this.props.onRowInsertAbove === 'function') {
  //       this.props.onRowInsertAbove(e, data);
  //     }
  //   };

  //   onRowInsertBelow = (e, data) => {
  //     if (typeof this.props.onRowInsertBelow === 'function') {
  //       this.props.onRowInsertBelow(e, data);
  //     }
  //   };

  return (
    <ContextMenu id={id}>
      <MenuItem data={{ rowIdx, idx }} onClick={onRowDelete}>
        Delete Row
      </MenuItem>
      <SubMenu title="Insert Row">
        <MenuItem data={{ rowIdx, idx }} onClick={onRowInsertAbove}>
          Above
        </MenuItem>
        <MenuItem data={{ rowIdx, idx }} onClick={onRowInsertBelow}>
          Below
        </MenuItem>
      </SubMenu>
    </ContextMenu>
  );
};

export default ReactDataGridExample;
