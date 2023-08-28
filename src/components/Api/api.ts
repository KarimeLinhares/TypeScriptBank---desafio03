const account = {
	name: 'Usuário',
	email: 'teste@dio.bank',
	password: '123',
	balance: '5000,99',
	id: 'Conta1',
};

export const api = new Promise((resolve) => {
	setTimeout(() => {
		resolve(account);
	}, 3000);
});
