import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import SlideBar from './SlideBar';
import Shortlisted from './Shortlisted';
import Winnerslist from './Winnerslist'

class Show extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tabNames: ['入围名单', '获奖名单'],
		};
	}

	render() {
		let tabNames = this.state.tabNames;
		let tabIconNames = this.state.tabIconNames;
		return (
			<ScrollableTabView
				renderTabBar={() => <SlideBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
				tabBarPosition='top'>

				<View style={styles.content} tabLabel='key1'>
					 <Shortlisted></Shortlisted>  
				</View>

				<View style={styles.content} tabLabel='key2'>
					<Winnerslist></Winnerslist>
				</View>
			</ScrollableTabView>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EBEBEB',
		flex: 1
	}
});

AppRegistry.registerComponent('Show', () => Show);
export default Show;