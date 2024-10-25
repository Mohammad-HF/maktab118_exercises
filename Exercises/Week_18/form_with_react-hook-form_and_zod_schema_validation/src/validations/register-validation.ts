import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(7, "character should be 7 or more"),
  gender: z.string().refine((val) => val !== "", "value can not empty"),
  dateOfBirth: z.string().refine((val) => val !== "", "value can not empty"),
  placeOfBirth: z.string().min(5, "character should be 5 or more"),
  nationality: z.string().min(5, "character should be 5 or more"),
  religion: z.string().min(5, "character should be 5 or more"),
  residenceStatus: z.string().refine((val) => val !== "", "value can not empty"),
  maritalStatus: z.string().refine((val) => val !== "", "value can not empty"),
  nationalIdNo: z
    .string()
    .refine((val) => !isNaN(Number(val)) && val !== "", "enter number")
    .refine((val) => val.length >= 8, "value should be 8"),
  tinNo: z
    .string()
    .refine((val) => !isNaN(Number(val)) && val !== "", "enter number")
    .refine((val) => val.length >= 4, "value should be 4"),
  address: z.string().min(10, "character should be 7 or more"),
  city: z.string().refine((val) => val !== "", "value can not empty"),
  state: z.string().refine((val) => val !== "", "value can not empty"),
  zipCode: z
    .string()
    .refine((val) => !isNaN(Number(val)) && val !== "", "enter number")
    .refine((val) => val.length >= 10, "value should be 10"),
  country: z.string().refine((val) => val !== "", "value can not empty"),
  phone: z
    .string()
    .refine(
      (val) => /(09)[0-9]{9}/.test(val) && val.length === 11,
      "phone number is not true example : 09120000000"
    ),
    email: z.string().email("your email is not true. example: example@gmail.com"),
    serviceName: z.string().refine((val) => val !== "", "value can not empty"),
    paymentDetail: z.string().refine((val) => val !== "", "value can not empty"),
    comments: z.string().refine((val) => val !== "", "value can not empty"),
});
