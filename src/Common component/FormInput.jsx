import React, { useState } from "react";
import { inputStyle } from "../Components/Authentication/Authentication";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const FormInput = ({ type, defaultValue, name, title }) => {
  const [hide, setHide] = useState(true);

  const btnHandle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHide((prev) => !prev);
  };
  return (
    <div>
      <label className="relative" htmlFor={name}>
        <h1 className="text-md mb-2 font-semibold">{title}</h1>
        <input
          defaultValue={defaultValue}
          className="w-full focus:outline-none border-2 border-gray-300 font-semibold py-2 px-3 rounded-lg"
          type={!hide?"text":type}
          id={name}
          name={name}
        />
        <button
          onClick={btnHandle}
          className={type==="password"?"absolute bottom-0 right-2 text-xl":"hidden"}
        >
          {hide ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}
        </button>
      </label>
    </div>
  );
};

export default FormInput;
