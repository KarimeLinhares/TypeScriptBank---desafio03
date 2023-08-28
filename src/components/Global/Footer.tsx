import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
	return (
		<Box bg={'#3F1D38'} color={'#E48586'}>
			<Container
				as={Stack}
				// maxW={'6xl'}
				py={4}
				direction={{ md: 'row' }}
				spacing={4}
				justify={{ base: 'center' }}
				align={{ base: 'center', md: 'center' }}>
				<Text>© 2023 All rights reserved</Text>
				<Stack direction={'row'} spacing={6}>
					<FaTwitter />
					<FaYoutube />
					<FaInstagram />
				</Stack>
			</Container>
		</Box>
	);
}

export default Footer;
