import App from './index';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
	config: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: '购物车',
		navigationBarTextStyle: 'black'
	}
};
