import './App.css';
import Head from './components/include/Head';
import Profile from './components/screens/Profile';
import User from './components/screens/User';
import Sample from './components/screens/Sample';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SampleParent from './components/screens/SampleParent';

function App() {
	return (
		<>
		<Router>
	
			<Head />
			<Switch>
				<Route to="/" exact component={SampleParent} />
				<Route to="/profile" component={Profile} />
				<Route to="/article/:id" component={User} />
				<Route to="/sample" component={Sample} />
			</Switch>
	
		</Router>
		</>
		);
}

export default App;
