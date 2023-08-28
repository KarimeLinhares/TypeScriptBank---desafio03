import {
	Heading,
	Stack,
	SimpleGrid,
	Spinner,
	IconButton,
	Flex,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	PopoverBody,
	Button,
	useColorModeValue,
	Text,
} from '@chakra-ui/react';
import { AccountInfo } from '../Items/AccountInfo';
import { useContext, useEffect, useState } from 'react';
import { api } from '../Api/api';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { AtSignIcon, EmailIcon, SettingsIcon } from '@chakra-ui/icons';

interface dataUser {
	name: string;
	email: string;
	password: string;
	balance: string;
	id: string;
}

const Account = () => {
	const [user, setUser] = useState<null | dataUser>();
	const { id } = useParams();
	const navigate = useNavigate();

	const { isLoggedIn } = useContext(AppContext);
	console.log('account', isLoggedIn);

	!isLoggedIn && navigate('/Home');

	//tratamento api
	useEffect(() => {
		const getData = async () => {
			const data: any | dataUser = await api;
			setUser(data);
		};
		getData();
	}, []);

	const actualDate = new Date();

	if (user && id !== user.id) {
		navigate('/Home');
	}
	return (
		<>
			<Stack align={'center'} spacing={8}>
				<Heading fontSize={'4xl'} textAlign={'center'} color={'#331D2C'}>
					MINHA CONTA
				</Heading>
				<SimpleGrid columns={2} spacing={10}>
					{user === undefined || user === null ? (
						<>
							<Spinner size='xl' color='white' />
							<Spinner size='xl' color='white' />
						</>
					) : (
						<>
							<AccountInfo
								Title='Informações de Acesso'
								SubTitle={`Bem Vindo(a)! ${user?.name}`}
								Content={`Último Acesso: ${actualDate.getDate()}/${
									actualDate.getMonth() + 1
								}/${actualDate.getFullYear()} às ${actualDate.getHours()}:${actualDate.getMinutes()}`}
							/>
							<AccountInfo
								Title='Informações da Conta'
								Content={`Saldo Atual: R$ ${user.balance}`}
							/>
						</>
					)}
				</SimpleGrid>
			</Stack>
			<Flex position={'absolute'} top={20} right={10}>
				<Popover placement='bottom' isLazy>
					<PopoverTrigger>
						<IconButton
							aria-label='Dados do Usuário'
							icon={<SettingsIcon />}
							variant='solid'
							w='fit-content'
							bg={useColorModeValue('white', 'gray.800')}
						/>
					</PopoverTrigger>
					<PopoverContent w='fit-content' _focus={{ boxShadow: 'dark-lg' }}>
						<PopoverArrow />
						<PopoverBody>
							<Stack>
								<Text fontWeight='bold' align='center'>
									Dados do Usuário
								</Text>
								<Button
									justifyContent='flex-start'
									w='194px'
									variant='ghost'
									leftIcon={<AtSignIcon />}
									fontWeight='normal'
									fontSize='sm'>{`Nome: ${user?.name}`}</Button>
								<Button
									justifyContent='flex-start'
									w='194px'
									variant='ghost'
									leftIcon={<EmailIcon />}
									fontWeight='normal'
									fontSize='sm'>{`Email: ${user?.email}`}</Button>
							</Stack>
						</PopoverBody>
					</PopoverContent>
				</Popover>
			</Flex>
		</>
	);
};

export default Account;
