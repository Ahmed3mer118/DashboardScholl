import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
function Register() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
    number: "",
    group: "",
  });
  const handleRegister = (e) => {
    e.preventDefault();
    if (register.password === register.confPassword) {
      axios
        .post(
          "http://localhost:1337/api/data-students",
          { data: register },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          toast.success("Hello " + register.name);
        });
    } else {
      toast.error("Password is not confirm");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="bg-form">
        <form className="p-3 rounded" onSubmit={handleRegister}>
          <h1 className="text-center ">Register</h1>
          <input
            type="text"
            placeholder="Name"
            className="form-control border rounded mt-3 "
            required
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control border rounded mt-3 "
            required
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control border rounded mt-3 "
            required
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Confirm  password"
            className="form-control border rounded mt-3 "
            required
            onChange={(e) =>
              setRegister({ ...register, confPassword: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="number"
            className="form-control border rounded mt-3 "
            required
            onChange={(e) =>
              setRegister({ ...register, number: e.target.value })
            }
          />
          <input
            type="date"
            className="form-control border rounded mt-3 "
            required
            onChange={(e) =>
              setRegister({ ...register, group: e.target.value })
            }
          />
          <div className="mt-2 p-2">
            <button className="btn btn-primary   d-block w-100 m-atuo">
              Submit
            </button>
          </div>

          <Link to={"/login"} className="text-decoration-underline p-2 mt-2">
            Sign In
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
