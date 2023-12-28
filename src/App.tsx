import React, { useState } from "react";
import "./App.css";
import { Card } from "./components";
import {
  AccountInformation,
  AddressInformation,
  PersonalInformation,
} from "./containers";

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if (step === 3) {
      handleFormSubmit();
    } else setStep((prevState) => prevState + 1);
  };

  const handleFormSubmit = () => {
    console.log();
  };

  return (
    <div className="app-background">
      <Card border={false}>
        {step === 1 && (
          <div className="container">
            <PersonalInformation onNext={handleNext} />
          </div>
        )}
        {step === 2 && (
          <div className="container">
            <AddressInformation onNext={handleNext} />
          </div>
        )}
        {step === 3 && (
          <div className="container">
            <AccountInformation />
          </div>
        )}
      </Card>
    </div>
  );
};

export default App;
