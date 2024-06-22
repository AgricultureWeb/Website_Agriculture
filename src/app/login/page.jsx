"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  ClosedEye,
  OpenEye,
  down_polygon,
  globe,
} from "../../../public/assets/icons/icons";

function Login() {
  const [isFocused, setIsFocused] = useState(false);
  const [view, setView] = useState("password");

  const toggleView = () => {
    if (view === "password") {
      setView("text");
    } else {
      setView("password");
    }
  };

  const LoginValidationSchema = Yup.object().shape({
    passwd: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    userName: Yup.string().required("Required"),
    agreeToTerms: Yup.boolean().oneOf(
      [true],
      "Must Accept Terms and Conditions"
    ),
  });

  return (
    <div className="grid grid-cols-12 h-[100vh]">
      <div className="col-span-5">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={250}
          height={100}
          className="mx-auto mt-10"
        />
        <h1 className="text-[#0C340D] mt-7 text-center font-readexPro text-5xl font-bold leading-normal">
          Login
        </h1>

        <Formik
          initialValues={{
            picked: "farmer",
            passwd: "",
            userName: "",
            agreeToTerms: false,
          }}
          validationSchema={LoginValidationSchema}
          onSubmit={(values) => {
            console.log("login values => ", values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="mt-10 mx-32">
              <div className="flex flex-col space-y-7">
                <div className="flex flex-col">
                  <div
                    className="flex justify-between mx-3"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <label className="font-semibold">
                      <Field type="radio" name="picked" value="farmer" /> Farmer
                    </label>
                    <label className="font-semibold">
                      <Field type="radio" name="picked" value="soil_agent" />{" "}
                      Soil Agent
                    </label>
                  </div>
                  <Field
                    type="text"
                    id="userName"
                    name="userName"
                    className="input-field mt-10"
                    placeholder="Phone No/Username"
                  />
                  {errors.userName && touched.userName ? (
                    <div className="text-red-500">{errors.userName}</div>
                  ) : null}
                </div>
                <div>
                  <div
                    className={`input-field h-5 grid grid-cols-10 border-2 ${
                      isFocused ? "border-black" : "border-transparent"
                    }`}
                  >
                    <Field
                      className="col-span-9 bg-transparent border-none focus:outline-none"
                      type={view}
                      name="passwd"
                      id="passwd"
                      placeholder="Password"
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                    <span
                      className="col-span-1 cursor-pointer m-auto"
                      onClick={() => {
                        toggleView();
                      }}
                    >
                      {view === "password" ? OpenEye : ClosedEye}
                    </span>
                  </div>
                  {errors.passwd && touched.passwd ? (
                    <div className="text-red-500">{errors.passwd}</div>
                  ) : null}
                </div>
                <div>
                  <Field
                    type="checkbox"
                    name="agreeToTerms"
                    id="agreeToTerms"
                  />
                  <label className=" text-sm ml-2 " htmlFor="agreeToTerms">
                    Accept all Terms and Conditions
                  </label>
                  {console.log(touched)}
                </div>
                <button
                  type="submit"
                  className="w-fit px-20 m-auto py-2 text-lg text-white justify-center rounded-full bg-primary-green "
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div
        className="col-span-7 h-full relative bg-black"
        style={{
          backgroundImage: `url("/assets/images/login_image.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <button className="flex absolute z-10 top-5 text-sm left-5 bg-primary-green-light rounded-md px-4 py-1">
          {globe} <span className="ml-5 mr-24 my-auto">English</span> <span className="my-auto">{down_polygon}</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
