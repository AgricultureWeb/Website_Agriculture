"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import eyeClosed from "../../public/assets/icons/eyeClosed.svg";
import eyeOpen from "../../public/assets/icons/eyeOpen.svg";
import UploadWidget from "./UploadWidget";
import Image from "next/image";

interface ResultInfo {
  public_id: string;
}

const SignupForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    cpassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), ""], "Passwords must match"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  return (
    <>
      <h1 className="font-bold text-4xl text-center my-6">Create Account</h1>
      <Formik
        initialValues={{
          name: "",
          username: "",
          password: "",
          cpassword: "",
          aadharUrl: "",
          addressUrl: "",
          passbookUrl: "",
          photoUrl: "",
          ekyfUrl: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="flex flex-col mx-auto">
            <Field
              className="input-field custom-placeholder"
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
            />
            <div className="h-6">
              <ErrorMessage
                name="name"
                component="div"
                className="text-sm text-red-400"
              />
            </div>
            <Field
              className="input-field custom-placeholder"
              id="username"
              name="username"
              type="text"
              placeholder="Phone No/Username"
            />
            <div className="h-6">
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
                placeholder="Enter Password"
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
            <div className="h-6">
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-400"
              />
            </div>
            <div className="relative">
              <Field
                className="input-field custom-placeholder"
                id="cpassword"
                name="cpassword"
                type={showCPassword ? "text" : "password"}
                placeholder="Confirm Password"
              />
              <button
                className="absolute right-2 top-1.5 text-red-600"
                onClick={() => setShowCPassword(!showCPassword)}
              >
                <Image
                  priority
                  src={showCPassword ? eyeClosed : eyeOpen}
                  width={21}
                  height={21}
                  alt="Show Password"
                />
              </button>
            </div>
            <div className="h-6">
              <ErrorMessage
                name="cpassword"
                component="div"
                className="text-sm text-red-400"
              />
            </div>
            <h1 className="font-bold text-xl mb-2">Upload Document</h1>
            <div className="flex justify-center ">
              <div className="uploadField">
                <label>Aadhar Card</label>
                <UploadWidget
                  text="Upload"
                  onUploadSuccess={(resultInfo: ResultInfo) => {
                    setFieldValue("aadharUrl", resultInfo.public_id);
                  }}
                />
              </div>
              <div className="uploadField mx-6">
                <label>Address</label>
                <UploadWidget
                  text="Upload"
                  onUploadSuccess={(resultInfo: ResultInfo) => {
                    setFieldValue("addressUrl", resultInfo.public_id);
                  }}
                />
              </div>
              <div className="uploadField">
                <label>Passbook Copy</label>
                <UploadWidget
                  text="Upload"
                  onUploadSuccess={(resultInfo: ResultInfo) => {
                    setFieldValue("passbookUrl", resultInfo.public_id);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <div className="uploadField mr-6">
                <label>Photograph</label>
                <UploadWidget
                  text="Upload"
                  onUploadSuccess={(resultInfo: ResultInfo) => {
                    setFieldValue("photoUrl", resultInfo.public_id);
                  }}
                />
              </div>
              <div className="uploadField">
                <label>e-KYF ID</label>
                <UploadWidget
                  text="Upload"
                  onUploadSuccess={(resultInfo: ResultInfo) => {
                    setFieldValue("ekyfUrl", resultInfo.public_id);
                  }}
                />
              </div>
            </div>
            <button type="submit" className="primary-green-bg-button">
              Create Account
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
