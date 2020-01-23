import React from "react";
import styled from "styled-components";
import { makeWorkers } from "./makeData";
import { useTable } from "react-table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const ReactTableExample2 = props => {
  const columns = React.useMemo(
    () => [
      //   {
      //     Header: "Useless Header",
      //     columns: [
      {
        Header: "First Name",
        accessor: w => <span>{w.firstName}</span>
      },
      {
        Header: "Last Name",
        accessor: w => <h3>{w.lastName}</h3>
      },
      {
        Header: "Age",
        accessor: w => <h4>{w.age}</h4>
      },
      {
        Header: "Wage",
        accessor: w => <h3>`{w.wage} €`</h3>
      }
      // ]
      //   }
    ],
    []
  );

  const data = React.useMemo(() => makeWorkers(30), []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
};

export default ReactTableExample2;
