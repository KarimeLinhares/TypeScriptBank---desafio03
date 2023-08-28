import { Box, Text, useColorModeValue } from '@chakra-ui/react';

interface IAccount {
	Title: string;
	SubTitle?: string;
	Content: string;
}

export const AccountInfo = ({ Title, Content, SubTitle }: IAccount) => {
	return (
		<Box
			// height='100px'
			bg={useColorModeValue('white', 'gray.700')}
			boxShadow={'dark-lg'}
			rounded={'lg'}
			p={18}>
			<Text
				fontSize={'2xl'}
				textAlign={'center'}
				color={'#331D2C'}
				fontWeight={'bold'}
				marginBottom={5}
				p={5}>
				{Title}
			</Text>
			<Text
				fontSize={'md'}
				textAlign={'center'}
				color={'#331D2C'}
				marginBottom={2}>
				{SubTitle}
			</Text>
			<Text fontSize={'md'} textAlign={'center'} color={'#331D2C'}>
				{Content}
			</Text>
		</Box>
	);
};
