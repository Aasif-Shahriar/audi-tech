"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password || formData.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters long";
    }

    return newErrors;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    //get input value
    const form = e.target;
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      password: form.password.value,
    };

    //validate form
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsLoading(false);

      //show errors for each error
      Object.values(formErrors).forEach((error) => {
        toast.error(error);
      });

      return;
    }

    try {
      const res = await registerUser(formData);

      if (res?.success) {
        toast.success("Registration successful! Welcome");
        form.reset();
      } else {
        toast.error(res?.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full max-w-md p-5 bg-gray-100 shadow-md rounded-xl">
      <h1 className="text-4xl font-bold mb-6">Sign up now!</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="mb-4">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className={`input w-full ${errors.name ? "input-error" : ""}`}
            placeholder="John Doe"
            disabled={isLoading}
          />
          {errors.name && (
            <p className="text-error text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className={`input w-full ${errors.email ? "input-error" : ""}`}
            placeholder="example@gmail.com"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-error text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className={`input w-full ${errors.password ? "input-error" : ""}`}
            placeholder="Password"
            disabled={isLoading}
          />
          {errors.password && (
            <p className="text-error text-sm mt-1">{errors.password}</p>
          )}
        </div>

          <button
          type="submit"
          className="btn btn-neutral mt-4 w-full"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
