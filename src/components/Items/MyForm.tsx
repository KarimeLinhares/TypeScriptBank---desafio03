import {
	Box,
	FormControl,
	FormLabel,
	InputGroup,
	InputRightElement,
	Stack,
	useColorModeValue,
	Text,
	Link,
	Button,
	Input,
} from '@chakra-ui/react';

import { useContext, useEffect, useState } from 'react';
import { MyButton } from './MyButton';
import { useNavigate } from 'react-router-dom';
import { api } from '../Api/api';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { login } from '../services/login';
import { AppContext } from '../Context/AppContext';
import { modifyLocalStorage } from '../services/storage';
import { MyInput } from './MyInput';

interface dataUser {
	name: string;
	email: string;
	password: string;
	balance: string;
	id: string;
}

export const MyForm = () => {
	const [user, setUser] = useState<null | dataUser>();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const { setIsLoggedIn } = useContext(AppContext);
	const validateUser = async (email: string, password: string) => {
		const loggedIn = await login(email, password);

		if (!loggedIn) {
			return alert('Email ou Senha inválidos! Tente novamente');
		}

		setIsLoggedIn(true);
		modifyLocalStorage({ login: true });
		navigate('/account/Conta1');
		console.log(validateUser);
	};

	const handleInputChangeEmail = (e: {
		target: { value: React.SetStateAction<string> };
	}) => setEmail(e.target.value);

	const handleInputChangePassword = (e: {
		target: { value: React.SetStateAction<string> };
	}) => setPassword(e.target.value);

	//tratamento api
	useEffect(() => {
		const getData = async () => {
			const data: any | dataUser = await api;
			setUser(data);
		};
		getData();
	}, []);

	return (
		<Box
			rounded={'lg'}
			bg={useColorModeValue('white', 'gray.700')}
			boxShadow={'dark-lg'}
			p={8}>
			<Stack spacing={4}>
				<FormControl id='email'>
					<FormLabel color={'#331D2C'}>Email</FormLabel>
					<MyInput
						type='email'
						value={email}
						onChange={handleInputChangeEmail}
					/>
				</FormControl>
				<FormControl id='password'>
					<FormLabel color={'#331D2C'}>Senha</FormLabel>
					<InputGroup>
						<Input
							value={password}
							onChange={handleInputChangePassword}
							type={showPassword ? 'text' : 'password'}
							borderColor={'#331D2C'}
							_hover={{ borderColor: '#2B2730' }}
							focusBorderColor={'#2B2730'}
						/>
						<InputRightElement h={'full'}>
							<Button
								variant={'ghost'}
								_hover={{ bg: 'transparent' }}
								onClick={() =>
									setShowPassword((showPassword) => !showPassword)
								}>
								{showPassword ? <ViewIcon /> : <ViewOffIcon />}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<Stack spacing={10} pt={2}>
					<MyButton onClick={() => validateUser(email, password)}>
						Entrar
					</MyButton>
				</Stack>
				<Stack pt={6} align={'center'}>
					<Text color={'#331D2C'}>
						Perdeu a Senha? <Link color={'#331D2C'}>Clique aqui!</Link>
					</Text>
				</Stack>
			</Stack>
		</Box>
	);
};
