import { Input, Text, Button, DOBPicker } from "../../components";
import { useFormik } from "formik";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";

interface FormProps {
  name: string;
  email: string;
  dob: Date;
}

const DOBDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

const HomeContainer = () => {
  const formMik = useFormik({
    initialValues: {
      name: "",
      email: "",
      dob: new Date(),
    },
    onSubmit: (values: FormProps) => console.log(values),
    validationSchema: yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      date: yup.date().required(),
    }),
  });

  return (
    <>
      <form onSubmit={formMik.handleSubmit}>
        <div>
          <Text>{"Full Name"}</Text>
          <Input
            className="block border border-neutral-600"
            name={"name"}
            value={formMik.values.name}
            onChange={formMik.handleChange("name")}
          />
          {formMik.errors.name && <Text>{formMik.errors.name}</Text>}
        </div>
        <div>
          <Text>{"Email Address"}</Text>
          <Input
            className="block border border-neutral-600"
            name={"email"}
            value={formMik.values.email}
            onChange={formMik.handleChange("email")}
          />
          {formMik.errors.email && <Text>{formMik.errors.email}</Text>}
        </div>
        <div>
          <Text>{"Date of Birth"}</Text>
          <DOBDate
            className="block border border-neutral-600"
            name={"dob"}
            value={formMik.values.email}
            onChange={formMik.handleChange("dob")}
          />
        </div>
        <Button label={"Submit"} type={"submit"} className="bg-blue-200" />
      </form>
    </>
  );
};

export default HomeContainer;
