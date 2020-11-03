import React from "react";

const DataShow = ({ name }) => {
  return (
    <>
      {name.map((data) => (
        <h1 key={data._id}>{data.name}</h1>
      ))}
    </>
  );
};

export default DataShow;
