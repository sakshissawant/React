import React from "react";

import data from "../db.json";

function Table() {
  function deleteData(id) {
    fetch("http://localhost:3000/todo/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: null,
    });
  }

  return (
    <div>
      <table>
        <tbody>
          <tr id="first">
            <td>Sr. No.</td>
            <td>Title</td>
            <td>Description</td>
            <td></td>
          </tr>
          {data.todo.map((info) => {
            return (
              <tr key={info.id} className="rows" draggable>
                <td>{data.todo.indexOf(info) + 1}</td>
                <td>{info.title}</td>
                <td>{info.description}</td>
                <td>
                  <button
                    id="delete"
                    className="button"
                    onClick={() => {
                      deleteData(info.id);
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
