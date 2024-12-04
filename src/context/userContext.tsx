import { createContext } from "react";

interface UserContextType {
  location: object | null;
  setLocation: (location: object) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  signup: (values: any) => void;
  logout: () => void;
  login: (values: any) => void;
  getUserData: () => void;
  user: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
