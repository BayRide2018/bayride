import React, { Component } from 'react';
<<<<<<< HEAD
import { Text, View, ScrollView } from 'react-native';
=======
import { Text, View, ScrollView, Button } from 'react-native';
>>>>>>> d60639a9b09844e47145b33fc8ed91b23c63b024
import firebase from 'firebase';
import { store } from '../fire';
import LotBanner from './LotBanner';
import LotBannerWrapper from './LotBannerWrapper';
import Winner from './Winner';
import { Permissions, Location } from 'expo';

export default class DriverHome extends Component {

  state = {
    allLots: []
  }

  componentDidMount () {
    // This will need to be trimmed down. IE, only show trips that are close
    // Later, we'll need to have it only show lots with a nearby starting point.
    // We'll also need to have something that show's if they have a bid already in place (I think maybe that banner could be outlined in green).
    // Much much later, we could worry about things like throttling and maybe more complicated sorting algos.

    this._getLocationAsync();


    store.collection("lots").get().then(allLots => {
      allLots.forEach(lot => {
        const copy = Object.assign({ id: lot.id }, lot.data()); // Putting the doc id in here becomes very useful in LotBanner.js
        this.setState({ allLots: [...this.state.allLots, copy] });
      });
    });
  }

  _getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied',
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({ location });
	};

  render(){
    return(
      <ScrollView>
      <View>
        <ScrollView>
          {this.state.allLots.map((lot, i) => {
            return <LotBannerWrapper key={i} lotData={lot} />;
          })}
        </ScrollView>
      </View>
      <Button title='Drawer' onPress={() => {this.props.navigation.toggleDrawer();
      }} />
      </ScrollView>
    )
  }
}
