import get from 'lodash/get'

class VueEnv {

  constructor () {
    this._assign({})
  }

  /**
   * 用于 vue use 的接口
   *
   * @public
   * @param {Object} Vue - Vue 对象
   * @param {Object} env - env 配置对象
   */
  install (Vue, env) {
    this._assign(env)
    Vue.prototype.$env = this
  }

  /**
   * 合并 env 对象，并储存在对象内
   *
   * @private
   * @param {Object} env - env 配置对象
   *
   * @return {this}
   */
  _assign (env) {
    this.env = Object.assign({}, env)
    return this
  }

  /**
   * 获得某一个参数，支持 . 符号获取，允许配置默认值
   *
   * @public
   * @param {String} path - 配置路径
   * @param {Object} defaultValue - 默认参数
   *
   * @return {mixin}
   */
  get (path, defaultValue) {
    return get(this.env, path, defaultValue)
  }

  /**
   * 获得所有的配置
   *
   * @return {Object}
   */
  all () {
    return this.env
  }
}

export default new VueEnv()
