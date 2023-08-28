import { Heading, Stack, Text } from '@chakra-ui/react';
import { MyForm } from '../Items/MyForm';

export const Login = () => {
	return (
		<Stack spacing={8} mx={'auto'} maxW={'2xl'} py={6} px={6}>
			<Stack align={'center'}>
				<Heading fontSize={'4xl'} textAlign={'center'} color={'#331D2C'}>
					BEM VINDO AO SEU BANCO!
				</Heading>
				<Text fontSize={'lg'} color={'#331D2C'}>
					Coloque seus dados para acessar sua conta
				</Text>
			</Stack>
			<MyForm />
		</Stack>
	);
};
