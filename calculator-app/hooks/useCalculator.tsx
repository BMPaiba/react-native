import { useEffect, useRef, useState } from "react";

enum Operator {
  Add = "+",
  Subtract = "-",
  Multiply = "*",
  Divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>("0");
  const [number, setNumber] = useState<string>("0");
  const [previous, setPrevious] = useState<string>("0");

  const lastOperation = useRef<Operator | null>(null);

  useEffect(() => {
    setFormula(number);
  }, [number, previous]);

  const buildNumber = (numberString: string) => {
    //verificar si ya existe el punto decimal
    if (number.includes(".") && numberString === ".") return;
    //verificar si el numero es 0
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") setNumber(number + numberString);
      if (numberString === "0" && number.includes(".")) setNumber(number + numberString);
      if (numberString !== "0" && !number.includes(".")) setNumber(numberString);
      if (numberString === "0" && !number.includes(".")) return;
    }
    setNumber(number + numberString);
  };

  return {
    formula,
    number,
    previous,
    buildNumber,
  };
};
