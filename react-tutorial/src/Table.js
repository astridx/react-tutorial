import React, { Component } from "react";

const Table = (props) => {
  const { TodoDaten, removeListeneintrag } = props;

  return (
    <table className="table table-striped">
      <TableHeader />
      <TableBody TodoDaten={TodoDaten} removeListeneintrag={removeListeneintrag} />
    </table>
  );
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Aufgabe</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.TodoDaten.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.aufgabe}</td>
        <td>
          <button onClick={() => props.removeListeneintrag(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default Table;
