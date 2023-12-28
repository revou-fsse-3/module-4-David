import { Input, Text, Button, Card } from "../../components";
import { useFormik } from "formik";
import * as yup from "yup";

const AccountInformation = () => {
  const formMik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .min(8, "Username should be at least 8 characters")
        .required("Please enter the username"),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character"
        )
        .required("Please enter the password"),
    }),
  });

  return (
    <Card border>
      <form onSubmit={formMik.handleSubmit}>
        <Text className="text-2xl font-semibold text-center text-amber-950">
          Account Information
        </Text>
        <div className="my-2">
          <Text>Username</Text>
          <Input
            className="block border-neutral-400 border"
            name={"username"}
            value={formMik.values.username}
            onChange={formMik.handleChange("username")}
          />
          {formMik.errors.username && (
            <Text className="italic text-sm text-red-500 text-wrap">
              {formMik.errors.username}
            </Text>
          )}
        </div>
        <div className="my-2">
          <Text>Password</Text>
          <Input
            className="block border-neutral-400 border"
            name={"password"}
            value={formMik.values.password}
            onChange={formMik.handleChange("password")}
          />
          {formMik.errors.password && (
            <Text className="italic text-sm text-red-500 text-wrap">
              {formMik.errors.password}
            </Text>
          )}
        </div>
        <Button label={"Submit"} type={"submit"} className={"bg-red-400"} />
      </form>
    </Card>
  );
};

export default AccountInformation;
