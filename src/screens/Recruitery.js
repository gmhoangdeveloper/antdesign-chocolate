import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Test from "./Test";

function Recruitery({ age }) {
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);
  // const user = { age, name };
  const buttonStyle = {
    backgroundColor: dark ? "#000" : "initial",
    color: dark ? "#FFF" : "initial",
  };
  const user = useMemo(() => {
    return { age, name };
  }, [name, age]);
  // const user = { name, age };
  useEffect(() => {
    console.log(user, "useEffect");
  }, [user]);
  const haldeClickSave = () => {
    console.log("haldeClickSave", name, age);
  };
  return (
    <>
      <div>
        {console.log("one")}
        
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button
          style={buttonStyle}
          // onClick={haldeClickSave}
          onClick={() => setDark((currDark) => !currDark)}
        >
          toggle
        </button>
        {name}
      </div>
    </>
  );
}

export default Recruitery;
