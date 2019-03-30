import App from './App';
import Vue from 'vue';
// import VHtmlPlugin from '@megalo/vhtml-plugin';

// Vue.use(VHtmlPlugin);

const app = new Vue(App);

app.$mount();

// 引用vuex
import store from './store/index';
Vue.prototype.$store = store;

export default {
	config: {
		// pages 的首个页面会被编译成首页
		pages: ['pages/index/index', 'pages/cart/index', 'pages/user/index'],
		subPackages: [{
			root: 'pagesOther',
			pages: ['other/index']
		}],
		window: {
			backgroundTextStyle: 'light',
			navigationBarBackgroundColor: '#fff',
			navigationBarTitleText: '',
			navigationBarTextStyle: 'black'
		},
		tabBar: {
			backgroundColor: '#fff',
			selectedColor: '#090102',
			color: '#b2b2b2',
			list: [{
					selectedIconPath: 'native/tabBar/index-active.png',
					iconPath: 'native/tabBar/index.png',
					pagePath: 'pages/index/index',
					text: '首页'
				},
				{
					selectedIconPath: 'native/tabBar/cart-active.png',
					iconPath: 'native/tabBar/cart.png',
					pagePath: 'pages/cart/index',
					text: '购物车'
				},
				{
					selectedIconPath: 'native/tabBar/user-active.png',
					iconPath: 'native/tabBar/user.png',
					pagePath: 'pages/user/index',
					text: '我的'
				}
			]
		}
	}
}