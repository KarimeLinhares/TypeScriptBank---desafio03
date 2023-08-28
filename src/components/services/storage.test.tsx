import {
	createLocalStorage,
	getAllLocalStorage,
	modifyLocalStorage,
} from './storage';

const bank = {
	login: false,
};
describe('storage', () => {
	const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
	it('Deve retornar o objeto no localStorage com a chave bank', () => {
		const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
		getAllLocalStorage();
		expect(mockGetItem).toHaveBeenCalledWith('bank');
	});

	it('Deve criar o objeto no localStorage', () => {
		const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
		createLocalStorage();
		expect(mockSetItem).toHaveBeenCalledWith('bank', JSON.stringify(bank));
	});

	it('Deve alterar o valor do objeto no localStorage', () => {
		modifyLocalStorage(bank);
		expect(mockSetItem).toHaveBeenCalledWith('bank', JSON.stringify(bank));
	});
});
