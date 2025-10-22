import { useState, ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { IUser } from '../types/interfaces';


interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const login = (userData: IUser) => {
		setUser(userData);
		setIsAuthenticated(true);
	};
	const logout = () => {
		setUser(null);
		setIsAuthenticated(false);
	};
	const register = (userData: IUser) => {
		setUser(userData);
		setIsAuthenticated(true);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				logout,
				register,
				isAuthenticated
			}}>
			{children}
		</AuthContext.Provider>
	);
};