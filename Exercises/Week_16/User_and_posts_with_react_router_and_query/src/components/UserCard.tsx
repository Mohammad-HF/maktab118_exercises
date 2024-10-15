import { IUser } from "../types/users";

export const UserCard: React.FC<IUser> = ({
  firstName,
  lastName,
  age,
  address: { country ,city},
  image,
  email
}) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 border-b border-b-appGray py-4 cursor-pointer">
        <div className="flex items-center gap-x-4 flex-wrap md:flex-nowrap">
          <img className="size-10" src={image} alt="" />
          <h2 className="font-bold text-lg sm:text-2xl text-appWhite md:w-4/12 ">
            {firstName} {lastName}
          </h2>
          <p className="text-appGreen  shrink-0 md:w-2/12">age : {age}</p>
          <p className="text-appGreen text-sm md:text-base mt-2 md:mt-0 w-full md:w-6/12">email : {email}</p>
        </div>
        <p className="text-appGreen cursor-text">{country}/ {city}</p>
      </div>
    </>
  );
};
