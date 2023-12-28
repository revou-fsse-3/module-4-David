import { Input, Text, Button, Dates, Card } from "../../components";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

interface PersonalInformationProps {
  onNext: () => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  onNext,
}) => {
  const formMik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
    },
    onSubmit: (values) => {
      console.log(values);
      onNext();
    },
    validationSchema: yup.object({
      name: yup.string().required("Please enter your full name"),
      email: yup
        .string()
        .email("Please enter the correct email address")
        .required("Please enter your email address"),
      birthdate: yup
        .date()
        .max(new Date(), "Please enter the correct birth date")
        .required("Please enter your birth date"),
    }),
  });

  return (
    <Card border>
      <form onSubmit={formMik.handleSubmit}>
        <Text className="text-2xl font-semibold text-center text-amber-950">
          Personal Information
        </Text>
        <div className="my-2">
          <Text>Full Name</Text>
          <Input
            className="block border-neutral-400 border"
            name={"name"}
            value={formMik.values.name}
            onChange={formMik.handleChange("name")}
          />
          {formMik.errors.name && (
            <Text className="italic text-sm text-red-500">
              {formMik.errors.name}
            </Text>
          )}
        </div>
        <div className="my-2">
          <Text>Email Address</Text>
          <Input
            className="block border-neutral-400 border"
            name={"email"}
            value={formMik.values.email}
            onChange={formMik.handleChange("email")}
          />
          {formMik.errors.email && (
            <Text className="italic text-sm text-red-500">
              {formMik.errors.email}
            </Text>
          )}
        </div>
        <div className="my-2">
          <Text>Date of Birth</Text>
          <Dates
            className="block border-neutral-400 border"
            name={"birthdate"}
            value={formMik.values.birthdate}
            onChange={formMik.handleChange("birthdate")}
          />
          {formMik.errors.birthdate && (
            <Text className="italic text-sm text-red-500">
              {formMik.errors.birthdate}
            </Text>
          )}
        </div>
        <Button label={"Next"} type={"submit"} />
      </form>
    </Card>
  );
};

export default PersonalInformation;
