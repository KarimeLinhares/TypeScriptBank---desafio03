import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import { useContext } from 'react';
import { AppContext } from './components/Context/AppContext';
import MainHome from './components/pages/MainHome';

const MainRoutes = () => {
	const { isLoggedIn } = useContext(AppContext);
	return (
		<Routes>
			<Route path='/Home' element={<Home />} />
			<Route path='/' element={<MainHome />} />
			<Route
				path='/account/:id'
				element={isLoggedIn ? <Account /> : <Home />}
			/>
		</Routes>
	);
};

export default MainRoutes;
