import { Flex } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

export const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			<Flex
				minH={'100vh'}
				align={'center'}
				justify={'center'}
				bgGradient='linear(to-t, #3F1D38 0%, #A2678A 25%, #E48586 50%)'>
				{children}
			</Flex>
			<Footer />
		</>
	);
};
