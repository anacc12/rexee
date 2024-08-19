import React, { useState, useRef } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import logo from "../../src/assets/svg/logo-white.svg";
import { Link, useNavigate } from "react-router-dom";

const ResetPasswordCode: React.FC = () => {
    const navigate = useNavigate();
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (value.match(/^[0-9]$/)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to the next input
      if (index < inputs.current.length - 1 && value) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      // Move to the previous input on backspace if current input is empty
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const compiledCode = code.join("");
    console.log(compiledCode);
    navigate("/reset-password");

  };

  return (
    <div className="w-screen h-screen bg-extra-light">
      <div className="w-screen h-[200px] pb-8 bg-primary text-white flex flex-col gap-10 justify-center items-center z-10">
      <Link to={`/`}>
        <img src={logo} alt="Rexee Logo" className="h-[50px] w-auto" />
        </Link>
        
      </div>
      <Card
        rounded="xxl"
        cardStyle="outline"
        cardSize="base"
        className="max-w-[500px] -mt-[45px] mx-auto z-20 flex flex-col items-center"
      >
        <h4 className="text-[24px] font-bold mb-3">Enter Verification Code</h4>
        <p className="text-[15px] !text-gray-dark text-center">
          Please enter the 6-digit code sent to your email.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <div className="flex justify-between gap-2 w-full my-6">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputs.current[index] = el)}
                className="w-14 h-14 text-center text-[24px] border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
          >
            Verify
          </button>
        </form>
      </Card>
    </div>
  );
};

export default ResetPasswordCode;
