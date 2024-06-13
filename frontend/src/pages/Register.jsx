import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-lg bg-base-100">
        <form className="card-body" onSubmit={submitHandler}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <label className="label">
            <Link to="/" className="label-text-alt link link-hover">
              Have an account? Login
            </Link>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
          <div className="flex justify-center">
            <span className="loading loading-dots loading-xs ml-0.5"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
