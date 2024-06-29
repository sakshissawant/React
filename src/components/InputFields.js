import React, { useState } from "react";

const InputFields = () => {
  var [title, setTitle] = useState("");
  var [description, setDesc] = useState("");

  const saveInfo = () => {
    console.log(title, description);

    let info = { title, description };
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    };

    fetch("http://localhost:3000/todo", options).then((result) => {
      console.log("result", result);
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveInfo();
        }}
      >
        <input
          required
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <textarea
          required
          value={description}
          placeholder="Description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <br />
        <button>Save</button>
      </form>

      <button
        onClick={() => {
          setTitle("");
          setDesc("");
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default InputFields;
