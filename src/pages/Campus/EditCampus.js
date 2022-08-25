import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditCampus() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/campus/${id}`).then((res) => {
      setName(res.data.name);
      setStatus(res.data.status);
    });
    //eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    status:status
  };

  function Update(e) {
    e.preventDefault();
    if(!data.name || !data.status) alert("Please enter the details!") 

    if(data.status.toLowerCase() ==='active' || data.status.toLowerCase() === 'inactive'){
      axios.put(`http://localhost:3001/campus/${id}`, data).then(navigate("/campusPage"));
    }
    else{
      alert("Please enter  active / inactive  in status")
    }
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Campus Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter status(active/inactive)"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4 bg-sky-500 hover:bg-sky-700"
          type="submit"
          onClick={Update}
        >
          UPDATE CAMPUS
        </button>
      </form>
    </div>
  );
}

export default EditCampus;
