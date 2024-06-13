import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/dashboard");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    // <div
    //   className="hero min-h-screen"
    //   style={{
    //     backgroundImage: "url(images/hero.jpg)",
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-25"></div>
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-5xl font-bold text-white">Login now!</h1>
    //       <p className="py-6">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi.
    //       </p>
    //     </div>
    //     <div className="card shrink-0 w-full max-w-sm shadow-lg bg-base-100">
    //       <form className="card-body" onSubmit={submitHandler}>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             type="email"
    //             placeholder="email"
    //             className="input input-bordered"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Password</span>
    //           </label>
    //           <input
    //             type="password"
    //             placeholder="password"
    //             className="input input-bordered"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //           />
    //           <label className="label">
    //             <Link to="/register" className="label-text-alt link link-hover">
    //               Dont have an account? Register
    //             </Link>
    //           </label>
    //         </div>
    //         <div className="form-control mt-6">
    //           <button className="btn btn-primary" type="submit">
    //             Login
    //           </button>
    //         </div>
    //         {isLoading && (
    //           <div className="flex justify-center">
    //             <span className="loading loading-dots loading-xs ml-0.5"></span>
    //           </div>
    //         )}
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen flex items-start justify-center bg-gray-100 pt-20">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 md:flex">
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-gray-600 mb-4">Please login to your account.</p>
          <form className="space-y-4" onSubmit={submitHandler}>
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
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Dont have an account? Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
            {isLoading && (
              <div className="flex justify-center">
                <span className="loading loading-dots loading-xs ml-0.5"></span>
              </div>
            )}
          </form>
        </div>
        <div
          className="md:w-1/2 p-4 rounded-lg md:ml-4 flex flex-col justify-center bg-cover bg-center relative"
          style={{ backgroundImage: "url(images/hero.jpg)" }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
