import React, { useState, useEffect } from "react";
import DataShow from "./DataShow";
import api from "./api";

const SendData = () => {
  const [name, setName] = useState([]);
  const [firstname, setFirstname] = useState("");

  const fetchName = async () => {
    const res = await api.get();
    setName(res.data);
  };

  const firstnameChanged = (event) => {
    setFirstname(event.target.value);
  };

  const onNameSubmit = async () => {
    try {
      await api.post("/create", { name: firstname });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchName();
  }, []);

  return (
    <>
      <DataShow name={name} />
      <label>Enter name :</label>
      <input type="text" value={firstname} onChange={firstnameChanged} />
      <button onClick={onNameSubmit}>Submit</button>
    </>
  );
};

export default SendData;
