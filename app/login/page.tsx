"use client";

import { useEffect } from "react";
import { UserFormComponent } from "../../components/UserFormComponent";
import { IUserLogin } from "../../types/user.type";
import { authService } from "@/services/AuthService";
import { getItem } from "@/utils/helpers";
import { ACCESS_TOKEN } from "../../utils/static";
import { useRouter } from "next/navigation";

export default function Login(): JSX.Element {
  const router = useRouter();

  const handleSubmit = async (data: IUserLogin) => {
    await authService.login(data);
  };

  useEffect(() => {
    const token = getItem(ACCESS_TOKEN);
    if (token) {
      router.back();
    }
  });

  return (
    <div>
      <h1>
        <UserFormComponent onSubmit={handleSubmit} />
      </h1>
    </div>
  );
}
