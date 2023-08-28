interface Bank {
	login: boolean;
}

const bank = {
	login: false,
};

//retorna tudo do localStorage
export const getAllLocalStorage = (): string | null => {
	return localStorage.getItem('bank');
};

//cria o localStorage
export const createLocalStorage = (): void => {
	localStorage.setItem('bank', JSON.stringify(bank));
};

//modifica o localStorage
export const modifyLocalStorage = (iBank: Bank):void => {
	localStorage.setItem('bank', JSON.stringify(iBank));
};
