
import { createContext } from "react";
import { IUser } from "../types/interfaces";

export interface AuthContextType {
  user: IUser | null;
  login: (userData: IUser) => void;
  logout: () => void;
  register: (userData: IUser) => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);