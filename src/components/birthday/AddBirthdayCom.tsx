"use client";

import { useState } from "react";

const AddBirthdayCom = () => {
  const [current, setCurrent] = useState("null");
  return (
    <div className=" px-6 h-[400px]">
      <div className=" flex justify-between">
        <button className="btn" onClick={() => setCurrent("add-friend")}>
          Add Friend
        </button>
        <button className="btn" onClick={() => setCurrent("manual-add-friend")}>
          Manually Add Birthday
        </button>
      </div>
      {current === "add-friend" && (
        <div>
          <div>
            <label>
              Enter Username:
              <input type="text" className=" outline-none" />
            </label>
            <button className="btn border-2 p-2">Search</button>
          </div>
        </div>
      )}
      {current === "manual-add-friend" && (
        <div>
          <label className=" block">
            Username:
            <input type="text" />
          </label>
          <label className=" block">
            Firstname:
            <input type="text" />
          </label>
          <label className=" block">
            Lastname:
            <input type="text" />
          </label>
          <label className=" block">
            Date of Birth:
            <input type="date" />
          </label>
        </div>
      )}
    </div>
  );
};

export default AddBirthdayCom;
