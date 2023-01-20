"use client";

import { UserFormComponent } from "../../components/UserFormComponent";
import { IUserRegister } from "../../types/user.type";
import { authService } from "@/services/AuthService";

export default function Register() {
  const handleSubmit = async (data: IUserRegister) => {
    const response = await authService.register(data);
    console.log(response);
  };
  return (
    <div>
      <h1>
        <UserFormComponent onSubmit={handleSubmit} isRegistration={true} />
      </h1>
    </div>
  );
}
