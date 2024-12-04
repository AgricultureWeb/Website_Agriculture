"use client";
import React, { useState, ReactNode } from "react";
import UserContext from "./userContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface RegisterationStateProps {
  children: ReactNode;
}

const RegisterationState: React.FC<RegisterationStateProps> = ({
  children,
}) => {
  const [location, setLocation] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter();

  const logout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("logout data", data);
      if (data.success) {
        console.log("logout success");
        toast.success(data.message);
      }
      router.push("/login");
    } catch (error) {
      console.log("Error:", error);
      toast.error("Error: " + error);
    }
  };

  const signup = async (values: any) => {
    try {
      console.log("signup values", values);
      setLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log("signup data", data);

      if (data.success) {
        toast.success(data.message);
      }
      router.push("/login");
    } catch (error) {
      toast.error("Error: " + error);
      console.error("Error:", error);
    } finally {
      console.log(setLoading(false));
    }
  };

  const login = async (values: any) => {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        router.push("/");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.log("Login Error: ", error);
      toast.error("Invalid credentials: " + error);
    } finally {
      setLoading(false);
    }
  };

  const getUserData = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        setUser(data.user);
      } else if (data.message === "User not authenticated") {
        router.push("/login");
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Error: " + error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        location,
        setLocation,
        loading,
        setLoading,
        logout,
        signup,
        login,
        getUserData,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default RegisterationState;
