import { useState } from "react";

const BiodataBanner = () => {
  const [ageRange, setAgeRange] = useState("");
  const [biodataType, setBiodataType] = useState("");
  const [division, setDivision] = useState("");

  return (
    <div className="relative h-[500px] flex justify-center items-center">
      <img
        className="object-cover brightness-50 h-[500px] w-full absolute"
        src="https://i.ibb.co/7gsHVgd/1.jpg"
        alt=""
      />
      <div className="relative bg-black bg-opacity-70 p-10 rounded-md flex justify-between items-center space-x-4 max-w-screen-lg mx-auto w-3/4">
        <select
          className="p-3 rounded bg-white text-black w-1/4"
          value={biodataType}
          onChange={(e) => setBiodataType(e.target.value)}
        >
          <option value="">I'm looking for</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div className="flex flex-col text-white w-1/4">
          <select
            className="p-3 rounded bg-white text-black"
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
          >
            <option value="">Age</option>
            <option value="18-30">18 to 30</option>
            <option value="31-40">31 to 40</option>
            <option value="41-50">41 to 50</option>
            <option value="51-60">51 to 60</option>
            <option value="61-70">61 to 70</option>
            <option value="71-80">71 to 80</option>
            <option value="81-90">81 to 90</option>
            <option value="91-100">91 to 100</option>
          </select>
        </div>
        <select
          className="p-3 rounded bg-white text-black w-1/4"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
        >
          <option value="">Location</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chattagram">Chattagram</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Barisal">Barisal</option>
          <option value="Khulna">Khulna</option>
          <option value="Maymansign">Maymansign</option>
          <option value="Sylhet">Sylhet</option>
        </select>
        <button className="p-3 rounded bg-blue-500 text-white w-1/4">Search</button>
      </div>
    </div>
  );
};

export default BiodataBanner;
