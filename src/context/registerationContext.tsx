import { createContext } from "react";

interface RegisterationContextType {
  location: object | null;
  setLocation: (location: object) => void;
}

const RegisterationContext = createContext<RegisterationContextType | undefined>(undefined);

export default RegisterationContext;