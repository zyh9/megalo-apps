import App from './App';
import Vue from 'vue';
import VHtmlPlugin from '@megalo/vhtml-plugin';

Vue.use(VHtmlPlugin);

const app = new Vue(App);

app.$mount();

export default {
	config: {
		// pages 的首个页面会被编译成首页
		pages: [ 'pages/index/index', 'pages/cart/index', 'pages/user/index' ],
		subPackages: [
			{
				root: 'pagesOther',
				pages: [ 'other/index' ]
			}
		],
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
			list: [
				{
					selectedIconPath: 'static/tabBar/index-active.png',
					iconPath: 'static/tabBar/index.png',
					pagePath: 'pages/index/index',
					text: '首页'
				},
				{
					selectedIconPath: 'static/tabBar/cart-active.png',
					iconPath: 'static/tabBar/cart.png',
					pagePath: 'pages/cart/index',
					text: '购物车'
				},
				{
					selectedIconPath: 'static/tabBar/user-active.png',
					iconPath: 'static/tabBar/user.png',
					pagePath: 'pages/user/index',
					text: '我的'
				}
			]
		}
	}
};
