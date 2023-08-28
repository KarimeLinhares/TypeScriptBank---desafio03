import { login } from './login';

// mocks
// const mockSetIsLoggedIn = jest.fn();
// const mockNavigate = jest.fn();

// desestruturações
// jest.mock('react', () => ({
// 	...jest.requireActual('react'),
// 	useContext: () => ({
// 		setIsLoggedIn: mockSetIsLoggedIn,
// 	}),
// }));

// jest.mock('react-router-dom', () => ({
// 	...(jest.requireActual('react-router-dom') as any),
// 	useNavigate: () => mockNavigate,
// }));

describe('login', () => {
	// const mockAlert = jest.fn();
	// window.alert = mockAlert;

	const mockEmail = 'teste@dio.bank';
	const mockPassword = '123';

	it('Deve exibir um alert com boas vindas caso o email e a senha sejam válidos', async () => {
		const response = await login(mockEmail, mockPassword);
		expect(response).toBeTruthy();
		// expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
		// expect(mockNavigate).toHaveBeenCalledWith('/Conta1');
	});

	it('Deve exibir um erro caso o email e a senha sejam inválidos', async () => {
		const response = await login('email@invalido.com', 'senhainvalida');
		expect(response).toBeFalsy();
		// expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
		// expect(mockNavigate).not.toHaveBeenCalled();
	});
});
