/**
 * 商城主框架界面
 */
'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  AppRegistry
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'; 
import Show from './Show';
import Sign from './Sign';
import Process from './Process';

class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
	  	      selectedTab:'Show'
	      };
    }
    render() {
        return (
          <TabNavigator>
			  <TabNavigator.Item
			  	title="公示"
			    selected={this.state.selectedTab === 'Show'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={require("./imgs/Show.png")} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={require("./imgs/Showclick.png")} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'Show' })}>
			    <Show {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="签到"
			    selected={this.state.selectedTab === 'Sign'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={require("./imgs/Sign.png")} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={require("./imgs/Signclick.png")} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'Sign' })}>
			    <Sign {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="终审进程"
			    selected={this.state.selectedTab === 'Process'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={require("./imgs/Process.png")} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={require("./imgs/Processclick.png")} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'Process' })}>
			    <Process {...this.props}/>
			  </TabNavigator.Item>
			</TabNavigator>
        );
    }
}
const styles=StyleSheet.create({
   iconStyle:{
       width:26,
       height:26,
   },
   textStyle:{
       color:'#999',
   },
   selectedTextStyle:{
       color:'black',
   }
});
export default test;
AppRegistry.registerComponent('test', () => test);