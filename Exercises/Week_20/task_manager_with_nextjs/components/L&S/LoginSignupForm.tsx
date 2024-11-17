"use client";
import { Input } from "./Input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSignupFormSchema } from "@/validations/L&S.validation";
import { usePathname} from "next/navigation";

export const LoginSignupForm: React.FC<{
  requestFn: (data: ILoginSignup) => void;
}> = ({ requestFn }) => {
  const pathname = usePathname();
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<ILoginSignup>({ resolver: zodResolver(LoginSignupFormSchema),mode:"all" });
  const submitForm = (data: ILoginSignup) => {
    requestFn(data);
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="mt-10 grid gap-y-6 mx-auto"
    >
      <Controller
        control={control}
        name="userName"
        render={({ field, fieldState }) => (
          <Input
            label="UserName"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      ></Controller>
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <Input
            label="Password"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      ></Controller>

      <button
        disabled={!isDirty || !isValid}
        type="submit"
        className="bg-slate-400 textbase font font-semibold px-2 py-1 rounded-sm mt-5 hover:bg-slate-500 disabled:bg-gray-600"
      >
        {pathname === "/login" ? "Login" : "Signup"}
      </button>
    </form>
  );
};
