import { Input } from '@chakra-ui/react';

interface Ipt {
	type?: any;
	value?: any;
	onChange?: any;
}

export const MyInput = ({ type, value, onChange }: Ipt) => {
	return (
		<Input
			value={value}
			onChange={onChange}
			type={type}
			borderColor={'#331D2C'}
			_hover={{ borderColor: '#2B2730' }}
			focusBorderColor={'#2B2730'}
		/>
	);
};
