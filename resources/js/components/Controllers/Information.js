import React from "react";
import "./Information.css";
import { AiFillCalculator } from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
const Information = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: "25px",

        marginBottom: "35px",
      }}
    >
      <div className="d-flex justify-content-around">
        <div
          class="p-4  mt-4 mb-4"
          style={{
            backgroundColor: "	lightcyan",
            fontWeight: "bold",
            color: "Teal",
            border: "1px solid #d6d4d0",
            borderRadius: "6px",
          }}
        >
          <AiFillCalculator
            size={48}
            color="Teal"
            className="aifillcal"
            id="aifillcal"
          />
          Premium Calculator
        </div>
        <div
          class="p-4  mt-4 mb-4"
          style={{
            backgroundColor: "	lavender",
            fontWeight: "bold",
            color: "orchid",
            border: "1px solid #d6d4d0",
            borderRadius: "6px",
          }}
        >
          <FaClipboardCheck size={48} color="orchid" />
          Policy Information
        </div>
        <div
          class="p-4  mt-4 mb-4"
          style={{
            backgroundColor: "	mistyrose	",
            fontWeight: "bold",
            color: "#8B0000",
            border: "1px solid #d6d4d0",
            borderRadius: "6px",
          }}
        >
          <AiFillCalendar size={48} color="#8B0000" />
          My Transaction
        </div>
      </div>
    </div>
  );
};

export default Information;
