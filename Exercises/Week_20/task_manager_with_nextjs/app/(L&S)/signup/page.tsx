import { signUp } from "@/apis/server-side-apis/auth_service";
import { Input } from "@/components/L&S/Input";

const SignUp: React.FC = () => {
  return (
    <div className="grid w-full max-w-screen-sm mx-auto px-2 sm:px-5 mt-10 bg-slate-800 py-10 rounded-md ">
      <h2 className="text-xl sm:text-2xl font-semibold text-center">Signup and Create Account</h2>
      <form action={signUp} className="mt-10 grid gap-y-6 mx-auto">
        <Input label="UserName" name="userName"/>
        <Input label="Password" name="password"/>
        <button type="submit" className="bg-slate-400 textbase font font-semibold px-2 py-1 rounded-sm mt-5 hover:bg-slate-500">Create Account</button>
      </form>
    </div>
  );
};
export default SignUp;
