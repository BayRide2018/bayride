import { createStackNavigator } from 'react-navigation';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import DriverHome from './components/DriverHome';
import LotSubmissionForm from './components/LotSubmissionForm';
import Account from './components/Account';
import MainScreen from './components/MainScreen';
import DrawerNavigator from './components/DrawerNavigator';
import DriverRegistration from './components/DriverRegistration';
import Payment from './components/Payment';

export default createStackNavigator({
	Welcome: { screen: Welcome },
	Login: { screen: Login },
	Signup: { screen: Signup },
	DrawerNavigator: {screen: DrawerNavigator},
	DriverHome: { screen: DriverHome },
	DriverRegistration: { screen: DriverRegistration},
	LotSubmissionForm: { screen: LotSubmissionForm },
	Account: { screen: Account },
	Payment: { screen: Payment },
}, {
	initialRouteName: 'Welcome',
	navigationOptions: {
		title: 'BayRide',
		headerLeft: null,
		gesturesEnabled: false,
		header: null,
	}
});


