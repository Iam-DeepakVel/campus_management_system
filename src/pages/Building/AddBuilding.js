import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddBuilding() {
  const [Bname, setBname] = useState("");
  const [Bstatus, setBstatus] = useState("");
  const {id} = useParams()
  const navigate = useNavigate();
  const data = {
    Bname: Bname,
    Bstatus: Bstatus,
    Cid:Number(id)
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/building", data).then(navigate("/buildingPage"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD BUILDING</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={Bname}
          onChange={(e) => setBname(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Building name"
        />
        <input
          value={Bstatus}
          onChange={(e) => setBstatus(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Status(active/inactive)"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4 bg-sky-500 hover:bg-sky-700"
          type="submit"
          onClick={submitForm}
        >
          ADD BUILDING
        </button>
      </form>
    </div>
  );
}

export default AddBuilding;
