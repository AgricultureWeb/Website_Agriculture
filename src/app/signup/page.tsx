"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  ClosedEye,
  OpenEye,
  down_polygon,
  globe,
} from "../../../public/assets/icons/icons";

interface SigninValues {
  name: string;
  username: string;
  passwd: string;
  cpasswd: string;
  adhaar: null | File;
  address: null | File;
  passbook: null | File;
  photograph: null | File;
  eKYFID: null | File;
}

interface FileWithSize extends File {
  size: number;
  type: string;
}

Yup.addMethod(Yup.mixed, "fileSize", function (maxSize, message) {
  return this.test("fileSize", message, function (value?: FileWithSize) {
    if (!value) {
      return true;
    }
    console.log("Checking filesize", value.size);
    return value.size <= maxSize;
  });
});

Yup.addMethod(Yup.mixed, "fileType", function (types, message) {
  return this.test("fileType", message, function (value?: FileWithSize) {
    const validTypes = ["image/png", "image/jpeg", "application/pdf"];
    console.log("Checking file type", value.type);
    return validTypes.includes(value.type);
  });
});
function Login() {
  const [isPasswdFocused, setIsPasswdFocused] = useState<boolean>(false);
  const [isCpasswdFocused, setIsCpasswdFocused] = useState<boolean>(false);
  const [viewPasswd, setViewPasswd] = useState<"password" | "text">("password");
  const [viewCpasswd, setViewCpasswd] = useState<"password" | "text">(
    "password"
  );
  const [selectedAdhaarFileName, setSelectedAdhaarFileName] =
    useState("No file chosen");
  const [selectedAddressFileName, setSelectedAddressFileName] =
    useState("No file chosen");
  const [selectedPassbookFileName, setSelectedPassbookFileName] =
    useState("No file chosen");
  const [selectedPhotoFileName, setSelectedPhotoFileName] =
    useState("No file chosen");
  const [selectedKyfFileName, setSelectedKyfFileName] =
    useState("No file chosen");

  const toggleViewPasswd = () => {
    setViewPasswd((prevView) =>
      prevView === "password" ? "text" : "password"
    );
  };
  const toggleViewCpasswd = () => {
    setViewCpasswd((prevView) =>
      prevView === "password" ? "text" : "password"
    );
  };

  const handleSubmit = (
    values: SigninValues,
    formikHelpers: FormikHelpers<SigninValues>
  ) => {
    const formData = new FormData();
    if (values.adhaar) {
      formData.append("adhaar", values.adhaar);
    }
    //   fetch('BACKEND_ENDPOINT', {
    //     method: 'POST',
    //     body: formData,
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //     setSubmitting(false);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     setSubmitting(false);
    //   });
    // };
  };

  const SigninValidationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").required("Required"),
    username: Yup.string().min(2, "Too Short!").required("Required"),
    passwd: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    cpasswd: Yup.string()
      .oneOf([Yup.ref("passwd"), null], "Passwords must match")
      .required("Required"),
    adhaar: Yup.mixed()
      .fileSize(1024 * 1024, "File size must be less than 1MB")
      .fileType(
        ["application/pdf", "image/jpeg", "image/png"],
        "Unsupported file format"
      )
      .required("Required"),
    address: Yup.mixed()
      .fileSize(1024 * 1024, "File size must be less than 1MB")
      .fileType(
        ["application/pdf", "image/jpeg", "image/png"],
        "Unsupported file format"
      )
      .required("Required"), // Required
    passbook: Yup.mixed()
      .fileSize(1024 * 1024, "File size must be less than 1MB")
      .fileType(
        ["application/pdf", "image/jpeg", "image/png"],
        "Unsupported file format"
      )
      .required("Required"), // Required
    photograph: Yup.mixed()
      .fileSize(1024 * 1024, "File size must be less than 1MB")
      .fileType(
        ["application/pdf", "image/jpeg", "image/png"],
        "Unsupported file format"
      )
      .required("Required"), // Required
    eKYFID: Yup.mixed()
      .fileSize(1024 * 1024, "File size must be less than 1MB")
      .fileType(
        ["application/pdf", "image/jpeg", "image/png"],
        "Unsupported file format"
      )
      .required("Required"), // Not required
  });

  return (
    <div className="grid grid-cols-12 h-[100vh]">
      <div className="col-span-5 overflow-auto ">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={250}
          height={100}
          className="mx-auto mt-5"
        />
        <h1 className="text-[#0C340D] mt-5 text-center text-4xl font-bold">
          Create Account
        </h1>

        <Formik
          initialValues={{
            name: "",
            username: "",
            passwd: "",
            cpasswd: "",
            adhaar: null,
            address: null,
            passbook: null,
            photograph: null,
            eKYFID: null,
          }}
          validationSchema={SigninValidationSchema}
          onSubmit={(values, formikHelpers) =>
            handleSubmit(values, formikHelpers)
          }
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="mx-24">
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="input-field mt-10"
                    placeholder="Enter your Name"
                  />
                  {errors.name && touched.name ? (
                    <div className="text-red-500 text-xs">{errors.name}</div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="input-field"
                    placeholder="Phone No/Username"
                  />
                  {errors.username && touched.username ? (
                    <div className="text-red-500 text-xs">
                      {errors.username}
                    </div>
                  ) : null}
                </div>
                <div>
                  <div
                    className={`input-field h-5 grid grid-cols-10 border-2 ${
                      isPasswdFocused ? "border-black" : "border-transparent"
                    }`}
                  >
                    <Field
                      className="col-span-9 bg-transparent border-none focus:outline-none"
                      type={viewPasswd}
                      name="passwd"
                      id="passwd"
                      placeholder="Password"
                      onFocus={() => setIsPasswdFocused(true)}
                      onBlur={() => setIsPasswdFocused(false)}
                    />
                    <span
                      className="col-span-1 cursor-pointer m-auto"
                      onClick={toggleViewPasswd}
                    >
                      {viewPasswd === "password" ? OpenEye : ClosedEye}
                    </span>
                  </div>
                  {errors.passwd && touched.passwd ? (
                    <div className="text-red-500 text-xs">{errors.passwd}</div>
                  ) : null}
                </div>
                <div>
                  <div
                    className={`input-field h-5 grid grid-cols-10 border-2 ${
                      isCpasswdFocused ? "border-black" : "border-transparent"
                    }`}
                  >
                    <Field
                      className="col-span-9 bg-transparent border-none focus:outline-none"
                      type={viewCpasswd}
                      name="cpasswd"
                      id="cpasswd"
                      placeholder="Confirm Password"
                      onFocus={() => setIsCpasswdFocused(true)}
                      onBlur={() => setIsCpasswdFocused(false)}
                    />
                    <span
                      className="col-span-1 cursor-pointer m-auto"
                      onClick={toggleViewCpasswd}
                    >
                      {viewCpasswd === "password" ? OpenEye : ClosedEye}
                    </span>
                  </div>
                  {errors.cpasswd && touched.cpasswd ? (
                    <div className="text-red-500 text-xs">{errors.cpasswd}</div>
                  ) : null}
                </div>
                <div>
                  <h1 className="text-[#0C340D] mt-5 text-xl font-bold">
                    Upload Documents
                  </h1>
                  <div className="flex flex-wrap justify-center space-x-5">
                    <div className="my-5">
                      <Field name="adhaar">
                        {() => (
                          <>
                            <div className="bg-[#EDEDED] rounded-lg w-28 py-1">
                              <span className="text-[#49624B] block text-center text-sm">
                                Adhaar Card
                              </span>
                              <input
                                id="adhaar-file-upload"
                                name="adhaar"
                                type="file"
                                onChange={(event) => {
                                  const files = event.currentTarget.files;
                                  if (files && files.length > 0) {
                                    const file = files[0];
                                    setSelectedAdhaarFileName(file.name);
                                    setFieldValue("adhaar", file);
                                  }
                                }}
                                className="hidden"
                              />
                              <label
                                htmlFor="adhaar-file-upload"
                                className="cursor-pointer bg-[#A2BCA4] text-xs flex justify-center mx-2 py-0.5 rounded-md"
                              >
                                Upload
                              </label>
                            </div>
                            <span className="text-xs block w-28">
                              {selectedAdhaarFileName}
                            </span>
                          </>
                        )}
                      </Field>
                      {errors.adhaar && touched.adhaar ? (
                        <div className="text-red-500 text-xs">
                          {errors.adhaar}
                        </div>
                      ) : null}
                    </div>
                    <div className="my-5">
                      <Field name="address">
                        {() => (
                          <>
                            <div className="bg-[#EDEDED] rounded-lg w-28 py-1">
                              <span className="text-[#49624B] block text-center text-sm">
                                Address
                              </span>
                              <input
                                id="address-file-upload"
                                name="address"
                                type="file"
                                onChange={(event) => {
                                  const files = event.currentTarget.files;
                                  if (files && files.length > 0) {
                                    const file = files[0];
                                    setSelectedAddressFileName(file.name);
                                    setFieldValue("address", file);
                                  }
                                }}
                                className="hidden"
                              />
                              <label
                                htmlFor="address-file-upload"
                                className="cursor-pointer bg-[#A2BCA4] text-xs flex justify-center mx-2 py-0.5 rounded-md"
                              >
                                Upload
                              </label>
                            </div>
                            <span className="text-xs block w-28">
                              {selectedAddressFileName}
                            </span>
                          </>
                        )}
                      </Field>
                      {errors.address && touched.address ? (
                        <div className="text-red-500 text-xs">
                          {errors.address}
                        </div>
                      ) : null}
                    </div>
                    <div className="my-5">
                      <Field name="passbook">
                        {() => (
                          <>
                            <div className="bg-[#EDEDED] rounded-lg w-28 py-1">
                              <span className="text-[#49624B] block text-center text-sm">
                                Passbook
                              </span>
                              <input
                                id="passbook-file-upload"
                                name="passbook"
                                type="file"
                                onChange={(event) => {
                                  const files = event.currentTarget.files;
                                  if (files && files.length > 0) {
                                    const file = files[0];
                                    setSelectedPassbookFileName(file.name);
                                    setFieldValue("passbook", file);
                                  }
                                }}
                                className="hidden"
                              />
                              <label
                                htmlFor="passbook-file-upload"
                                className="cursor-pointer bg-[#A2BCA4] text-xs flex justify-center mx-2 py-0.5 rounded-md"
                              >
                                Upload
                              </label>
                            </div>
                            <span className="text-xs block w-28">
                              {selectedPassbookFileName}
                            </span>
                          </>
                        )}
                      </Field>
                      {errors.passbook && touched.passbook ? (
                        <div className="text-red-500 text-xs">
                          {errors.passbook}
                        </div>
                      ) : null}
                    </div>
                    <div className="my-5">
                      <Field name="photograph">
                        {() => (
                          <>
                            <div className="bg-[#EDEDED] rounded-lg w-28 py-1">
                              <span className="text-[#49624B] block text-center text-sm">
                                Photograph
                              </span>
                              <input
                                id="photograph-file-upload"
                                name="phoyograph"
                                type="file"
                                onChange={(event) => {
                                  const files = event.currentTarget.files;
                                  if (files && files.length > 0) {
                                    const file = files[0];
                                    setSelectedPhotoFileName(file.name);
                                    setFieldValue("photograph", file);
                                  }
                                }}
                                className="hidden"
                              />
                              <label
                                htmlFor="photograph-file-upload"
                                className="cursor-pointer bg-[#A2BCA4] text-xs flex justify-center mx-2 py-0.5 rounded-md"
                              >
                                Upload
                              </label>
                            </div>
                            <span className="text-xs block w-28">
                              {selectedPhotoFileName}
                            </span>
                          </>
                        )}
                      </Field>
                      {errors.photograph && touched.photograph ? (
                        <div className="text-red-500 text-xs">
                          {errors.photograph}
                        </div>
                      ) : null}
                    </div>
                    <div className="my-5">
                      <Field name="eKYFID">
                        {() => (
                          <>
                            <div className="bg-[#EDEDED] rounded-lg w-28 py-1">
                              <span className="text-[#49624B] block text-center text-sm">
                                e-KYF ID
                              </span>
                              <input
                                id="ekyf-file-upload"
                                name="phoyograph"
                                type="file"
                                onChange={(event) => {
                                  const files = event.currentTarget.files;
                                  if (files && files.length > 0) {
                                    const file = files[0];
                                    setSelectedKyfFileName(file.name);
                                    setFieldValue("eKYFID", file);
                                  }
                                }}
                                className="hidden"
                              />
                              <label
                                htmlFor="ekyf-file-upload"
                                className="cursor-pointer bg-[#A2BCA4] text-xs flex justify-center mx-2 py-0.5 rounded-md"
                              >
                                Upload
                              </label>
                            </div>
                            <span className="text-xs block w-28">
                              {selectedKyfFileName}
                            </span>
                          </>
                        )}
                      </Field>
                      {errors.eKYFID && touched.eKYFID ? (
                        <div className="text-red-500 text-xs">
                          {errors.eKYFID}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-fit px-20 m-auto py-2 text-lg text-white justify-center rounded-full bg-primary-green "
                >
                  Create account
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className=" flex justify-center content-center text-primary-green items-center my-7">
          <hr className="border-1 my-auto border-primary-green w-32 mr-5" />
          or
          <hr className="ml-5 border-1 my-auto border-primary-green w-32" />
        </div>
        <Link
          href="/login"
          className="w-fit flex mx-auto text-lg font-bold mb-16 text-primary-green-dark hover:underline"
        >
          Login
        </Link>
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
          {globe} <span className="ml-5 mr-24 my-auto">English</span>{" "}
          <span className="my-auto">{down_polygon}</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
