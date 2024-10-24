"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import eyeClosed from "../../public/assets/icons/eyeClosed.svg";
import eyeOpen from "../../public/assets/icons/eyeOpen.svg";
import Image from "next/image";

const LoginForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h1 className="font-bold text-4xl text-center mt-11">Login</h1>
      <Formik
        initialValues={{
          userType: "",
          username: "",
          password: "",
          agree: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="flex flex-col mx-auto">
            <div
              role="group"
              aria-labelledby="my-radio-group"
              className="flex justify-around my-9"
            >
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="farmer"
                  className="mx-2"
                />
                Farmer
              </label>
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="soilAgent"
                  className="mx-2"
                />
                Soil Agent
              </label>
            </div>
            <Field
              className="input-field custom-placeholder"
              id="username"
              name="username"
              type="username"
              placeholder="Username"
            />
            <div className="mb-7 h-5">
              <ErrorMessage
                name="username"
                component="div"
                className="text-sm text-red-400"
              />
            </div>
            <div className="relative">
              <Field
                className="input-field custom-placeholder"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                className="absolute right-2 top-1.5 text-red-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Image
                  priority
                  src={showPassword ? eyeClosed : eyeOpen}
                  width={21}
                  height={21}
                  alt="Show Password"
                />
              </button>
            </div>
            <div className="mb-7 h-5">
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-400"
              />
            </div>
            <div role="group" aria-labelledby="checkbox-group">
              <label className="font-light text-sm text-[#687D6A]">
                <Field type="checkbox" name="agree" className="mr-2" />
                Agree to the Terms and Conditions
              </label>
            </div>

            <button type="submit" className="primary-green-bg-button">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
