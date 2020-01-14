
// 字段配置
import { fieldInfo } from "./replace-text.field.js"

var _self;
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
        console.group('replace-text组件 beforeCreate 状态=====》');
    },
    onLoad(option) {
        _self = this;
        console.log('onLoad 状态=====》');
    },
    
    onShow() {
        console.log('onShow 状态=====》');
    },
    onReady() {
        console.log('onReady 状态====》');
    },
    onUnload() {
        console.groupEnd('onUnload 状态=====》');
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