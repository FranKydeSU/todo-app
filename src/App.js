import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp'
import AuthProvider from './contexts/AuthProvider';
import Navbar from './components/Navbar';
import Id from './pages/Id';

function App() {
	return (
		<Router>
			<AuthProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					{/* <Route path="/id/:id" element={<Id />} /> */}
					<Route path="*" element={<Navigate to="/signin" />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
