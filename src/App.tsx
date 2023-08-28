import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Global/Layout';
import { AppContextProvider } from './components/Context/AppContext';
import MainRoutes from './routes';
import {
	createLocalStorage,
	getAllLocalStorage,
} from './components/services/storage';

function App() {
	!getAllLocalStorage() && createLocalStorage();

	return (
		<BrowserRouter>
			<AppContextProvider>
				<ChakraProvider>
					<Layout>
						<MainRoutes />
					</Layout>
				</ChakraProvider>
			</AppContextProvider>
		</BrowserRouter>
	);
}

export default App;
