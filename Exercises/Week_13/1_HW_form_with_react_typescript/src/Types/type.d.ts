interface IData {
  id: number;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  maxW?: "max-w-[245px]" | "max-w-[133px]";
  validator: (input: string) => string | undefined;
  collectValue: (input: string) => void;
}

interface ICollectInput {
  company: string;
  business: string;
  address: string;
  postalCode: string;
  name: string;
  phone: string;
  linkedin: string;
  email: string;
  idea: string;
  file: string;
}
type Inputs =
  | "company"
  | "business"
  | "address"
  | "postalCode"
  | "name"
  | "phone"
  | "linkedin"
  | "email"
  | "idea"
  | "file";
type CollectValue = (input: string) => void;
