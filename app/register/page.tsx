"use client";

import { UserFormComponent } from "../../components/UserFormComponent";
import { IUserRegister } from "../../types/user.type";
import { authService } from "@/services/AuthService";
import { ACCESS_TOKEN } from "../../utils/static";
import { useEffect } from "react";
import { getItem } from "../../utils/helpers";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleSubmit = async (data: IUserRegister) => {
    const response = await authService.register(data);
    console.log(response);
  };

  useEffect(() => {
    const token = getItem(ACCESS_TOKEN);
    if (token) {
      router.push("/");
    }
  });

  return (
    <div>
      <h1>
        <UserFormComponent onSubmit={handleSubmit} isRegistration={true} />
      </h1>
    </div>
  );
}
