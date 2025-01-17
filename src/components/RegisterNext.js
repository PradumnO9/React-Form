import React, { useState } from "react";
import { STATES } from "../utils/constants";

const RegisterNext = ({
  setNextState,
  valid,
  setValid,
  registerData,
  MESSAGE,
  handelChange,
  formErrors
}) => {
  const [mandatory, setMandatory] = useState(false);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (
      !registerData.email ||
      !registerData.password ||
      !registerData.name ||
      !registerData.address ||
      !registerData.pin_code ||
      !registerData.state ||
      !registerData.city || 
      !registerData.gender
    ) {
      setMandatory(MESSAGE.MANDATORY);
      setValid(true);
    } else {
      console.log(registerData);
    }
  };

  return (
    <div className="px-4 mt-[30px] md:mt-[70px] md:ml-6">
      <h1 className="text-2xl p-1 mb-2">Address</h1>
      <div>
        <input
          className="w-full p-2 mb-1 border rounded-sm"
          type="text"
          name="address"
          value={registerData?.address}
          placeholder="Address"
          onChange={handelChange}
        />
        <input
          className="w-full p-2 mb-1 border rounded-sm"
          type="text"
          name="city"
          value={registerData?.city}
          placeholder="City Name"
          onChange={handelChange}
        />
        <div className="mt-1">
          {formErrors.address_error && (
            <span className="text-red-500">{formErrors.address_error}</span>
          )}
        </div>
      </div>
      <div>
        <select
          className="w-full p-2 mb-1 border rounded-sm"
          name="state"
          value={registerData?.state}
          onChange={handelChange}
        >
          <option>Choose your state...</option>
          {STATES.map((state, index) => {
            return <option key={index}>{state}</option>;
          })}
        </select>
        <div className="mt-1">
          {formErrors.state_name_error && (
            <span className="text-red-500">{formErrors.state_name_error}</span>
          )}
        </div>
      </div>
      <div>
        <input
          className="w-full p-2 mb-1 border rounded-sm"
          type="text"
          name="pin_code"
          value={registerData?.pin_code}
          placeholder="Pin Code"
          onChange={handelChange}
        />
        <div className="mt-1">
          {formErrors.pin_code_error && (
            <span className="text-red-500">{formErrors.pin_code_error}</span>
          )}
        </div>
      </div>
      <div className="mt-2">
        {mandatory && <span className="text-red-500">{mandatory}</span>}
      </div>
      {valid ? (
        <button
          disabled
          className="w-full bg-blue-400 rounded-lg p-2 my-2 text-lg text-white"
          onClick={handleSubmitButton}
        >
          Register
        </button>
      ) : (
        <button
          className="w-full bg-blue-400 hover:bg-opacity-85 rounded-lg p-2 my-2 text-lg text-white"
          onClick={handleSubmitButton}
        >
          Register
        </button>
      )}
      <div className="flex justify-end">
        <button
          className="text-blue-500 underline"
          onClick={() => setNextState(false)}
        >
          {"<"}- previous
        </button>
      </div>
    </div>
  );
};

export default RegisterNext;
