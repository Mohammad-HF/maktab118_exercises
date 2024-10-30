import { UserInfoInput } from "../components/UserInfoInput";

export const UserInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-md rounded-md text-white mx-1 md:mx-auto bg-appGray ">
      <h2 className="font-semibold border-b py-2 w-full text-center text-base md:text-xl">
        Complete your Information
      </h2>
      <form className="w-full flex flex-wrap gap-5 justify-center md:justify-around py-4 px-4 ">
        <UserInfoInput label="Firstname" name="firstName" />
        <UserInfoInput label="Lastname" name="lastName" />
        <UserInfoInput label="Landline Number" name="landline" />
        <UserInfoInput label="Phone Number" name="phone" />
        <UserInfoInput label="Your Email" name="email" />
        <UserInfoInput label="Address" name="address" />
        <button className="block w-full bg-blue-500 py-2 rounded-md hover:bg-blue-400">
          Submit
        </button>
      </form>
    </div>
  );
};
