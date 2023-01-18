/** @format */
import React from "react";
import courses from "../data/courses";

function Home() {
  return (
    <div>
      {courses.map((item, i) => (
        <div key={i}>
          <img
            src={item.image}
            alt=""
            style={{ height: 200, width: 200, objectFit: "contain" }}
          />
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Home;
