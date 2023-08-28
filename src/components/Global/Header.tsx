import { Box, Flex, useColorModeValue, Button, Image } from '@chakra-ui/react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { modifyLocalStorage } from '../services/storage';
import { AtSignIcon } from '@chakra-ui/icons';

function Header() {
	const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
	const navigate = useNavigate();
	const logout = () => {
		modifyLocalStorage({ login: false });
		setIsLoggedIn(false);
		navigate('/Home');
	};
	return (
		<Box>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 10 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}>
				<Flex flex={{ base: 1 }} justify={{ md: 'start' }}>
					<NavLink to='/'>
						<Image
							boxSize={'40px'}
							src='https://www.svgrepo.com/show/484623/pig-piggy-bank.svg'
							alt='piggy'
						/>
					</NavLink>
				</Flex>
				{isLoggedIn ? (
					<>
						<AtSignIcon />
						<NavLink to={'/account/Conta1'}>Minha Conta</NavLink>
						<Button
							marginLeft={5}
							fontSize={'sm'}
							fontWeight={600}
							color={'white'}
							bg={'#331D2C'}
							_hover={{
								bg: '#E48586',
							}}
							onClick={() => logout()}>
							Sair
						</Button>
					</>
				) : (
					<Button
						fontSize={'sm'}
						fontWeight={600}
						color={'white'}
						bg={'#331D2C'}
						_hover={{
							bg: '#E48586',
						}}
						onClick={() => navigate('/Home')}>
						Login
					</Button>
				)}
			</Flex>
		</Box>
	);
}

export default Header;
