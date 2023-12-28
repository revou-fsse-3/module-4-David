import { Input, Text, Button, Card } from "../../components";
import { useFormik } from "formik";
import * as yup from "yup";

interface AddressInformationProps {
  onNext: () => void;
}

const AddressInformation: React.FC<AddressInformationProps> = ({ onNext }) => {
  const formMik = useFormik({
    initialValues: {
      address: "",
      city: "",
      state: "",
      zipcode: "",
    },
    onSubmit: (values) => {
      console.log(values);
      onNext();
    },
    validationSchema: yup.object({
      address: yup
        .string()
        .min(15, "Please enter the correct addess")
        .required("Please enter your address"),
      city: yup
        .string()
        .min(4, "Please enter the correct city")
        .required("Please enter your city"),
      state: yup
        .string()
        .min(4, "Please enter the correct state")
        .required("Please enter your state"),
      zipcode: yup
        .string()
        .matches(/^\d{5}$/, "Please enter the valid zip code")
        .required("Please enter your zip code"),
    }),
  });

  return (
    <Card border>
      <form onSubmit={formMik.handleSubmit}>
        <Text className="text-2xl font-semibold text-center text-amber-950">
          Address Information
        </Text>
        <div className="my-2">
          <Text>Street Address</Text>
          <Input
            className="block border-neutral-400 border"
            name={"asddres"}
            value={formMik.values.address}
            onChange={formMik.handleChange("address")}
          />
          {formMik.errors.address && (
            <Text className="italic text-sm text-red-500">
              {formMik.errors.address}
            </Text>
          )}
        </div>
        <div className="my-2">
          <Text>City</Text>
          <Input
            className="block border-neutral-400 border"
            name={"city"}
            value={formMik.values.city}
            onChange={formMik.handleChange("city")}
          />
          {formMik.errors.city && (
            <Text className="italic text-sm text-red-500">
              {formMik.errors.city}
            </Text>
          )}
        </div>
        <div className="my-2">
          <Text>State</Text>
          <Input
            className="block border-neutral-400 border"
            name={"state"}
            value={formMik.values.state}
            onChange={formMik.handleChange("state")}
          />
          {formMik.errors.state && (
            <Text className="italic text-sm text-red-500">
              {formMik.errors.state}
            </Text>
          )}
        </div>
        <div className="my-2">
          <Text>Zip Code</Text>
          <Input
            className="block border-neutral-400 border"
            name={"zipcode"}
            value={formMik.values.zipcode}
            onChange={formMik.handleChange("zipcode")}
          />
          {formMik.errors.zipcode && (
            <Text className="italic text-sm text-red-500">
              {formMik.errors.zipcode}
            </Text>
          )}
        </div>
        <Button label={"Next"} type={"submit"} />
      </form>
    </Card>
  );
};

export default AddressInformation;
