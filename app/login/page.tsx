"use client";

import { UserFormComponent } from "../../components/UserFormComponent";
import { IUserLogin } from "../../types/user.type";
import { authService } from "@/services/AuthService";

export default function Login() {
  const handleSubmit = async (data: IUserLogin) => {
    await authService.login(data);
  };
  return (
    <div>
      <h1>
        <UserFormComponent onSubmit={handleSubmit} />
      </h1>
    </div>
  );
}
