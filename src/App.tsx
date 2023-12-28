import {
  PersonalInformation,
  AddressInformation,
  AccountInformation,
} from "./containers";
import { useState } from "react";
import { Card } from "./components";
import "./App.css";

const App = () => {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if (step === 3) {
      handleFormSubmit();
    } else setStep((prevState) => prevState + 1);
  };

  const handleFormSubmit = () => {
    console.log();
  };
  const decrease = () => {
    setStep((step) => (step > 1 ? step - 1 : 1));
  };

  return (
    <div>
      <Card>
        {step === 1 && (
          <div>
            <PersonalInformation onNext={handleNext} />
          </div>
        )}
        {step === 2 && (
          <div>
            <AddressInformation handleBack={decrease} onNext={handleNext} />
          </div>
        )}
        {step === 3 && (
          <div>
            <AccountInformation handleBack={decrease} onNext={handleNext} />
          </div>
        )}
      </Card>
    </div>
  );
};

export default App;
