import { useState, useEffect } from "react";
import { getData, ApiResponse } from '../../services/axiosService.js';
import { endpoints } from "../../services/endpoints.js";

type UserProfile = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
};

export const Profile = () => {
	const [profile, setProfile] = useState<UserProfile | null>(null);

	useEffect(() => {
		const fetchUserProfile = async () => {
			const response = await getData<ApiResponse<UserProfile>>(endpoints.USER_PROFILE);
			if (response && response.data) {
				setProfile(response.data);
			}
		};
		fetchUserProfile();
	}, []);

	return (
		<div className="max-w-lg mx-auto mt-12">
			<h2 className="text-2xl text-sky-800 font-bold mb-6 text-center">Perfil de Usuario</h2>
			<div className="bg-white rounded-lg shadow-md p-8">
				{!profile ? (
					<p className="text-gray-500 text-center">Cargando...</p>
				) : (
					<div className="flex flex-col items-center space-y-2">
						<div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center mb-4">
							<span className="text-3xl text-sky-700 font-bold">
								{profile.firstName[0]}
								{profile.lastName[0]}
							</span>
						</div>
						<p className="text-xl text-sky-900 font-semibold">
							{profile.firstName} {profile.lastName}
						</p>
						<p className="text-gray-600">{profile.email}</p>
					</div>
				)}
			</div>
		</div>
	);
};
