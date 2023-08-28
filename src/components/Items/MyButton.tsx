import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface Btn {
	children?: any;
	onClick?: MouseEventHandler;
}

export const MyButton = ({ children, onClick }: Btn) => {
	return (
		<Button
			onClick={onClick}
			loadingText='Carregando...'
			size='lg'
			bg={'#331D2C'}
			color={'white'}
			_hover={{ bg: '#3F2E3E' }}>
			{children}
		</Button>
	);
};
