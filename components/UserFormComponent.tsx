"use client";

import { ILoginForm } from "@/types/user.type";
import { useForm } from "react-hook-form";

export const UserFormComponent: React.FC<ILoginForm> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const submitCallback = (data: any) => {
    onSubmit({ email: data.email, password: data.password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitCallback)}>
        <label>Email</label>
        <input {...register("email")} type="email" required />

        <label>Password</label>
        <input {...register("password")} type="password" required />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
