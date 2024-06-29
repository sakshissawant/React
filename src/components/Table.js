import React from "react";

import data from "../db.json";

function Table() {
  function deleteData(index) {
    fetch("http://localhost:3000/todo", { method: "DELETE" }).then(
      (response) => {
        response.json();
      }
    );
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Sr. No.</td>
            <td>Title</td>
            <td>Description</td>
            <td></td>
          </tr>
          {data.todo.map((info) => {
            return (
              <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.title}</td>
                <td>{info.description}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteData(info.index);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
