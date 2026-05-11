import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");

      // Correct employee object
      const newEmpObj = {
        name: data.name.trim(),
        email: data.email.trim(),
        mobile: String(data.mobile).trim(),
        designation: data.designation.trim(),
        companyName: data.companyName.trim(),
      };

      const res = await fetch(
        "https://emp-management-app.onrender.com/employee-api/employees",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEmpObj),
        }
      );

      const result = await res.json();

      if (res.status === 201) {
        reset();
        navigate("/list");
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <p className="text-center text-3xl mt-10">Loading...</p>;

  return (
    <div className="p-5">
      <h1 className="text-5xl text-center mb-10 font-bold">
        Create Employee
      </h1>

      {error && (
        <p className="text-red-600 text-center text-xl mb-5">
          {error}
        </p>
      )}

      <form
        className="max-w-md mx-auto"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <input
          type="text"
          placeholder="Enter name"
          {...register("name", { required: true })}
          className="border p-3 w-full mb-3 rounded"
        />

        <input
          type="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
          className="border p-3 w-full mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Enter mobile"
          {...register("mobile", { required: true })}
          className="border p-3 w-full mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation", { required: true })}
          className="border p-3 w-full mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName", { required: true })}
          className="border p-3 w-full mb-3 rounded"
        />

        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-900 text-white p-3 w-full rounded"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;