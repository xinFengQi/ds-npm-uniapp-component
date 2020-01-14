
// 字段配置
import { fieldInfo } from "./replace-text.field.js"

let _self;
export default {
    // 导入的组件
    components: {
    },
    // 导入的数据
    data() {
        return {
            title: 'replace-text'
        }
    },
    // 初始化加载
	beforeCreate() {
		console.group('replace-text组件 beforeCreate');
	},
	onLoad(option) {
		_self = this;
		console.log('replace-text组件 onLoad');
	},

	onShow() {
		console.group('replace-text组件 onShow');
	},
	onReady() {
		console.log('replace-text组件 onReady 状态');
	},
	onUnload() {
		console.log('replace-text组件 onUnload');
		console.groupEnd()
	},
	onHide() {
		console.log('replace-text组件 onHide');
		console.groupEnd()
	},
    // 下拉刷新
    onPullDownRefresh:() => {
    
    },
    // 上拉加载
    onReachBottom: () => {

    },
    methods: {

    }
}