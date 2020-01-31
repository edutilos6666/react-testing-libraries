import "./KATableExample.scss";

import React, { useState } from "react";

import { ITableOption, Table } from "ka-table";
import { ActionType, DataType, EditingMode } from "ka-table/enums";
import { Cell } from "ka-table/models";
import { typeUtils } from "ka-table/utils";

const dataArray = [
  { id: 1, name: "Mike Wazowski", score: 80, passed: true },
  {
    id: 2,
    name: "Billi Bob",
    score: 55,
    passed: false,
    nextTry: new Date(2019, 10, 8, 10)
  },
  {
    id: 3,
    name: "Tom Williams",
    score: 45,
    passed: false,
    nextTry: new Date(2019, 11, 8, 10)
  },
  { id: 4, name: "Kurt Cobain", score: 75, passed: true },
  { id: 5, name: "Marshall Bruce", score: 77, passed: true },
  {
    id: 6,
    name: "Sunny Fox",
    score: 33,
    passed: false,
    nextTry: new Date(2019, 10, 9, 10)
  }
];

const CustomEditor = ({ column: { key }, rowKeyField, rowData, dispatch }) => {
  const close = () => {
    const cell = { columnKey: key, rowKey: rowData[rowKeyField] };
    dispatch(ActionType.CloseEditor, { cell });
  };
  const [value, setValue] = useState(rowData[key]);
  return (
    <div className="custom-editor">
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
      />
      <button
        className="custom-editor-button custom-editor-button-save"
        onClick={() => {
          const newValue = { ...rowData, ...{ [key]: value } };
          dispatch(ActionType.ChangeRowData, { newValue });
          close();
        }}
      >
        Save
      </button>
      <button
        className="custom-editor-button custom-editor-button-cancel"
        onClick={close}
      >
        Cancel
      </button>
    </div>
  );
};

const CustomLookupEditor = ({
  column: { key },
  rowData,
  rowKeyField,
  dispatch
}) => {
  const close = () => {
    const cell = { columnKey: key, rowKey: rowData[rowKeyField] };
    dispatch(ActionType.CloseEditor, { cell });
  };
  const [value, setValue] = useState(rowData[key]);
  return (
    <div>
      <select
        className="form-control"
        autoFocus={true}
        defaultValue={value}
        onBlur={() => {
          const newValue = { ...rowData, ...{ [key]: value } };
          dispatch(ActionType.ChangeRowData, { newValue });
          close();
        }}
        onChange={event => {
          setValue(typeUtils.toBoolean(event.currentTarget.value));
        }}
      >
        <option value={"true"}>True</option>
        <option value={"false"}>False</option>
      </select>
    </div>
  );
};

const tableOption = {
  columns: [
    {
      dataType: DataType.String,
      key: "name",
      title: "Name",
      editor: CustomEditor,
      style: { width: "330px" }
    },
    {
      key: "score",
      title: "Score",
      dataType: DataType.Number,
      style: { width: "50px" }
    },
    {
      dataType: DataType.Boolean,
      editor: CustomLookupEditor,
      key: "passed",
      style: { width: "50px" },
      title: "Passed"
    },
    {
      dataType: DataType.Date,
      format: value =>
        value &&
        value.toLocaleDateString("en", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric"
        }),
      key: "nextTry",
      title: "Next Try"
    }
  ],
  editableCells: [{ columnKey: "name", rowKey: 1 }],
  editingMode: EditingMode.Cell,
  rowKeyField: "id"
};

const KATableExmaple = () => {
  const [option, changeOptions] = useState(tableOption);
  const onOptionChange = value => {
    changeOptions({ ...option, ...value });
  };

  const [data, changeData] = useState(dataArray);
  const onDataChange = newValue => {
    changeData(newValue);
  };
  return (
    <Table
      {...option}
      data={data}
      onOptionChange={onOptionChange}
      onDataChange={onDataChange}
      childAttributes={{ table: { className: "custom-editor-demo-table" } }}
    />
  );
};

export default KATableExmaple;
