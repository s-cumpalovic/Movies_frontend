"use client";

import { ILoginForm, IRegisterForm } from "@/types/user.type";
import { useForm } from "react-hook-form";

export const UserFormComponent: React.FC<ILoginForm | IRegisterForm> = ({
  onSubmit,
  isRegistration = false,
}) => {
  const { register, handleSubmit } = useForm();

  const submitCallback = (data: any) => {
    onSubmit({ name: data.name, email: data.email, password: data.password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitCallback)}>
        <label>Email</label>
        <input {...register("email")} type="email" required />

        <label>Password</label>
        <input {...register("password")} type="password" required />
        {isRegistration ? (
          <>
            <label>Name</label>
            <input {...register("name")} type="text" required />
          </>
        ) : null}

        <button type="submit">{isRegistration ? "Register" : "Log in"}</button>
      </form>
    </div>
  );
};
