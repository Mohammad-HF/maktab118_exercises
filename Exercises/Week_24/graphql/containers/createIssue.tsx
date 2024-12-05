import { Button } from "@/components/btn";
import { Input } from "@/components/input";
import { CreateIssueMutaion } from "@/gql/mutations/issues";
import { classNames } from "@/utils/classname";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const CreateIssue: React.FC<{refresh : ()=>void}> = ({refresh}) => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [values, setValues] = React.useState<ICreateIssue>({
    content: "",
    name: "",
    status: "",
  });

  const { push } = useRouter();
  const [createIssue, { loading }] = useMutation<ICreateIssueDto>(CreateIssueMutaion);
  const onChange: (
    _: keyof ICreateIssue
  ) => React.ChangeEventHandler<HTMLInputElement> = (field) => {
    return (event) => {
      const value = event.target.value;
      const newValues: ICreateIssue = { ...values };
      newValues[field] = value;
      setValues(newValues);
    };
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await createIssue({ variables: { input: values } });
      console.log(response);
      refresh();
      push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <button
        onClick={() => setShowButton((prev) => !prev)}
        className="bg-slate-600 hover:bg-slate-700 w-fit mx-auto px-6 py-2 rounded-md text-white"
      >
        Add Issue
      </button>
      <div className={` ${!showButton && "hidden"} `}>
        <form
          onSubmit={onSubmit}
          className={classNames(
            "bg-white border border-slate-300 rounded-xl px-4 py-5 shadow-lg",
            "max-w-[500px] w-full space-y-4 mx-auto"
          )}
        >
          <p className="text-lg font-semibold">Create new issue</p>
          <Input label="Name" onChange={onChange("name")} />
          <Input
            label="Content"
            onChange={onChange("content")}
          />
          <Input
            label="Status"
            onChange={onChange("status")}
          />
          <Button disabled={loading} type="submit">
            Add Issue
          </Button>
        </form>
      </div>
    </>
  );
};
