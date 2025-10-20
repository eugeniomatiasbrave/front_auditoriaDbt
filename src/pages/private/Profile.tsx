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
			const response = await getData<ApiResponse<UserProfile>>(endpoints.USER_PROFILE,);
			if (response && response.data) {
				setProfile(response.data);
			}
		};
		fetchUserProfile();
	}, []);

	return (
		<div>
			<h2 className="text-black">Perfil de Usuario</h2>
			{!profile ? (
				<p>Cargando...</p>
			) : (
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<div className=" text-black p-4 ">
						<p className=" text-black font-bold">{profile.firstName} {profile.lastName}</p>
						<p className="text-sm">{profile.email}</p>
					</div>
				</div>
			)}
		</div>
	);
};
