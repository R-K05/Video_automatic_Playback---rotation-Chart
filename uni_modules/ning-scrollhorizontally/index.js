// 规则检验
import test from './libs/function/test.js'
// 公共文件写入的方法
import index from './libs/function/index.js'
// props配置信息
import props from './libs/config/props.js'


const $u = {
    test,
    props,
    ...index,

}

// $u挂载到uni对象上
uni.$u = $u


const install = (Vue) => {
    // 同时挂载到uni和Vue.prototype中
    // #ifndef APP-NVUE
    Vue.prototype.$u = $u
    // #endif
}

export default {
    install
}
