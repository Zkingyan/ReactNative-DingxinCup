import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import SlideBar from './SlideBar';

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
					<Text>#1</Text>
				</View>

				<View style={styles.content} tabLabel='key2'>
					<Text>#2</Text>
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