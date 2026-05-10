import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://emp-management-app.onrender.com/employee-api/employees",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEmpObj),
        }
      );

      if (res.status === 201) {
        navigate("/list");
      } else {
        const errorRes = await res.json();
        throw new Error(errorRes.reason || "Something went wrong");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center text-3xl">Loading...</p>;
  if (error) return <p className="text-red-600 text-center text-2xl">{error}</p>;

  return (
    <div>
      <h1 className="text-5xl text-center">Create Employee</h1>

      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="border p-3 w-full mb-3"
        />

        <input
          type="email"
          placeholder="Enter email"
          {...register("email")}
          className="border p-3 w-full mb-3"
        />

        <input
          type="number"
          placeholder="Enter mobile"
          {...register("mobile")}
          className="border p-3 w-full mb-3"
        />

        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="border p-3 w-full mb-3"
        />

        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName")}
          className="border p-3 w-full mb-3"
        />

        <button className="bg-gray-700 text-white p-3 w-full">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;