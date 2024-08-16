import React from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const doRegister = (values) => {
    console.log(values);
    setTimeout(() => {
      formik.setSubmitting(false);
      formik.resetForm();
    }, 2000);
  };
  const formik = useFormik({
    // initial values
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },

    // validation schema
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required(),
      email: Yup.string().email("Invalid email address").required(),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain a lowercase letter")
        .matches(/[A-Z]/, "Password must contain a uppercase letter")
        .matches(/[0-9]/, "Password must contain a number letter")
        .matches(/[@$!%*?&]/, "Password must contain a special letter")
        .matches(/^\S*$/, "Password not contain spaces")

        .required(),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required(),
      agreement: Yup.boolean().isTrue("Field must be checked"),
    }),

    // handle submit
    onSubmit: doRegister,
  });
  console.log(formik);
  return (
    <div className="w-1/2 min-h-screen mx-auto">
      <Navbar />
      <div className="w-[60%] py-4 px-8 mx-auto bg-indigo-50 border rounded-lg shadow-md my-10">
        <h3 className="font-bold text-color text-2xl py-4 text-center">
          Register Form
        </h3>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 py-2"
        >
          <div className="flex flex-col gap-1 text-sm">
            {/* <label htmlFor="username" className="font-semibold">
              Username *
            </label> */}
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="outline-1 outline-indigo-400 border border-indigo-200 py-2 px-3 rounded"
              // value={formik.values.username}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              {...formik.getFieldProps("username")}
            />
            {formik.errors.username && formik.touched.username && (
              <p className="text-red-500">{formik.errors.username}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 text-sm">
            {/* <label htmlFor="email" className="font-semibold">
              Email *
            </label> */}
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="outline-1 outline-indigo-400 border border-indigo-200 py-2 px-3 rounded"
              // value={formik.values.email}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 text-sm">
            {/* <label htmlFor="password" className="font-semibold">
              Password *
            </label> */}
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="outline-1 outline-indigo-400 border border-indigo-200 py-2 px-3 rounded"
              // value={formik.values.password}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 text-sm">
            {/* <label htmlFor="confirmPassword" className="font-semibold">
              Confirm Password *
            </label> */}
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="outline-1 outline-indigo-400 border border-indigo-200 py-2 px-3 rounded"
              // value={formik.values.confirmPassword}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p className="text-red-500">{formik.errors.confirmPassword}</p>
              )}
          </div>
          <div className="flex flex-col  text-sm gap-1">
            <div className="flex gap-3">
              <input
                id="agreement"
                type="checkbox"
                className="outline-1 outline-indigo-400 border border-indigo-200 py-2 px-3 rounded"
                // value={formik.values.agreement}
                // checked={formik.values.agreement}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                {...formik.getFieldProps("agreement")}
              />

              <label htmlFor="agreement" className="font-semibold">
                I agree to Terms of Services *
              </label>
            </div>
            {formik.errors.agreement && formik.touched.agreement && (
              <p className="text-red-500">{formik.errors.agreement}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn-register cursor-pointer"
            disabled={formik.isSubmitting}
          >
            Register
          </button>
          <p className="text-sm mx-auto">
            Do you have an account ?{" "}
            <span className="text-color font-semibold hover:underline cursor-pointer">
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormikForm;
