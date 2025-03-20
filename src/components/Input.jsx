import React from "react";
import { useFormContext } from "react-hook-form";

function Input({ label, type, name, validation }) {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // Get form methods

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block">
        {label}
      </label>
      <input
        type={type}
        {...register(name, validation)}
        className="border p-2 w-full"
      />
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
}

export default Input;
