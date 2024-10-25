import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/Input";
import { InputTwo } from "../components/InputTwo";
import { registerSchema } from "../validations/register-validation";
import { IForm } from "../types/form-type";

export const AllInput: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IForm>({
    mode: "all",
    resolver: zodResolver(registerSchema),
  });
  return (
    <form
      className="border-b border-b-black "
      onSubmit={handleSubmit((value) => console.log(value))}
    >
      <div className="border-b-2 pb-10">
        <h2 className="text-lg font-bold text-appBlue2">
          PERSONAL INFORMATION
        </h2>
        <Controller
          control={control}
          name="fullName"
          render={({ field, fieldState }) => (
            <Input
              type="text"
              label="Full Name"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>

        <Controller
          control={control}
          name="gender"
          render={({ field, fieldState }) => (
            <InputTwo
              cases={["Male", "Female"]}
              label="Gender"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end sm:mr-5"
              type="date"
              label="Date Of Birth"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="placeOfBirth"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end"
              type="string"
              label="Place Of Birth"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="nationality"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end sm:mr-5"
              type="string"
              label="Nationality"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="religion"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end"
              type="string"
              label="Religion"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="residenceStatus"
          render={({ field, fieldState }) => (
            <InputTwo
              cases={["residence", "none residence"]}
              label="Residence Status"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="maritalStatus"
          render={({ field, fieldState }) => (
            <InputTwo
              cases={["single", "married", "widowed"]}
              label="Marital Status"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="nationalIdNo"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end sm:mr-5"
              type="text"
              label="National ID No"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="tinNo"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end"
              type="text"
              label="TIN No"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
      </div>
      <div className="border-b-2 pb-10 pt-6">
        <h2 className="text-lg font-bold text-appBlue2">Contact Information</h2>
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <Input
              type="text"
              label="Address"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="city"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end sm:mr-5"
              type="text"
              label="City"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="state"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end"
              type="text"
              label="State"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="zipCode"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end sm:mr-5"
              type="text"
              label="Zip Code"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="country"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end"
              type="text"
              label="Country"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="phone"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end sm:mr-5"
              type="text"
              label="Phone"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Input
              className="inline-flex flex-wrap items-end"
              type="text"
              label="Email"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
      </div>
      <div className="pb-10 pt-6">
        <h2 className="text-lg font-bold text-appBlue2">Service Information</h2>
        <Controller
          control={control}
          name="serviceName"
          render={({ field, fieldState }) => (
            <Input
              type="text"
              label="Service Name"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="paymentDetail"
          render={({ field, fieldState }) => (
            <InputTwo
              cases={["Cash","Debit Card","Credit Card"]}
              type="text"
              label="Payment Detail"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="comments"
          render={({ field, fieldState }) => (
            <Input
              type="text"
              label="Comments"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        ></Controller>
      </div>
      <button
        type="submit"
        className="w-full px-4 my-6 py-2 bg-green-600 hover:bg-green-400 disabled:bg-gray-500 rounded-lg"
        disabled={!isDirty || !isValid}
      >
        submit
      </button>
    </form>
  );
};
