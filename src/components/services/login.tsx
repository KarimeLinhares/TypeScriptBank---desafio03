/* eslint-disable react-hooks/rules-of-hooks */
import { api } from '../Api/api';

//autenticação

export const login = async (
	email: string,
	password: string,
): Promise<boolean> => {
	// const { setIsLoggedIn } = useContext(AppContext);
	// const navigate = useNavigate();
	const data: any = await api;

	//alerta no caso de email inválido
	if (email !== data.email || password !== data.password) {
		return false;
	}

	return true;
};
