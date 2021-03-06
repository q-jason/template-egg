const passportLocal = require('./app/middleware/passport-local')
const passportJwt = require('./app/middleware/passport-jwt')

class AppBootHook {
  constructor (app) {
    this.app = app
  }
  
  async configWillLoad () {
    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // 注意：此函数只支持同步调用
  }
  
  async didLoad () {
    // 所有的配置已经加载完毕
    // 可以用来加载应用自定义的文件，启动自定义的服务
  }
  
  async willReady () {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
    
    passportLocal.init(this.app)
    passportJwt.init(this.app)
    
    this.app.passport.verify(async (ctx, payload) => {
      switch (payload.provider) {
        case 'local': {
          return passportLocal.verify(ctx, payload)
        }
        case 'jwt': {
          return passportJwt.verify(ctx, payload)
        }
      }
    })
    
    /**
     *  在开发环境中使用 sync({ alter: true }) 同步
     *  在线上环境中每张表的首次使用 sync() 同步，修改字段时使用 migrations 同步
     **/
    await this.app.model.sync({
      // force: process.env.NODE_ENV === 'development'
      alter: process.env.NODE_ENV === 'development'
    })
  }
  
  async didReady () {
    // 应用已经启动完毕
  }
  
  async serverDidReady () {
    // http / https server 已启动，开始接受外部请求
    // 此时可以从 app.server 拿到 server 的实例
  }
}

module.exports = AppBootHook