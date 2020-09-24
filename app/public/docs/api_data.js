define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/public/docs/main.js",
    "group": "F:\\Github Store\\template-egg\\app\\public\\docs\\main.js",
    "groupTitle": "F:\\Github Store\\template-egg\\app\\public\\docs\\main.js",
    "name": ""
  },
  {
    "type": " Get ",
    "url": "/me",
    "title": "获取用户信息",
    "group": "用户",
    "header": {
      "fields": {
        "请求头": [
          {
            "group": "请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "成功响应": [
          {
            "group": "成功响应",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>状态码</p>"
          },
          {
            "group": "成功响应",
            "type": "Any",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据</p>"
          },
          {
            "group": "成功响应",
            "type": "String",
            "optional": false,
            "field": "msg",
            "defaultValue": "√",
            "description": "<p>成功消息</p>"
          }
        ],
        "失败响应": [
          {
            "group": "失败响应",
            "type": "Integer",
            "allowedValues": [
              "\"400（客户端错误）\"",
              "\"401（鉴权失败）\"",
              "\"500（服务器错误）\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "失败响应",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "groupTitle": "用户",
    "name": " get Me"
  },
  {
    "type": " Post ",
    "url": "/login",
    "title": "登录",
    "group": "用户",
    "parameter": {
      "fields": {
        "请求体": [
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "成功响应": [
          {
            "group": "成功响应",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>状态码</p>"
          },
          {
            "group": "成功响应",
            "type": "Any",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据</p>"
          },
          {
            "group": "成功响应",
            "type": "String",
            "optional": false,
            "field": "msg",
            "defaultValue": "√",
            "description": "<p>成功消息</p>"
          }
        ],
        "失败响应": [
          {
            "group": "失败响应",
            "type": "Integer",
            "allowedValues": [
              "\"400（客户端错误）\"",
              "\"401（鉴权失败）\"",
              "\"500（服务器错误）\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "失败响应",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "groupTitle": "用户",
    "name": " post Login"
  },
  {
    "type": " Post ",
    "url": "/register",
    "title": "注册",
    "group": "用户",
    "parameter": {
      "fields": {
        "请求体": [
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "成功响应": [
          {
            "group": "成功响应",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>状态码</p>"
          },
          {
            "group": "成功响应",
            "type": "Any",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据</p>"
          },
          {
            "group": "成功响应",
            "type": "String",
            "optional": false,
            "field": "msg",
            "defaultValue": "√",
            "description": "<p>成功消息</p>"
          }
        ],
        "失败响应": [
          {
            "group": "失败响应",
            "type": "Integer",
            "allowedValues": [
              "\"400（客户端错误）\"",
              "\"401（鉴权失败）\"",
              "\"500（服务器错误）\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "失败响应",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "groupTitle": "用户",
    "name": " post Register"
  },
  {
    "type": " Put ",
    "url": "/password",
    "title": "修改密码",
    "group": "用户",
    "header": {
      "fields": {
        "请求头": [
          {
            "group": "请求头",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "请求体": [
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "originPassword",
            "description": "<p>原始密码</p>"
          },
          {
            "group": "请求体",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "成功响应": [
          {
            "group": "成功响应",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>状态码</p>"
          },
          {
            "group": "成功响应",
            "type": "Any",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据</p>"
          },
          {
            "group": "成功响应",
            "type": "String",
            "optional": false,
            "field": "msg",
            "defaultValue": "√",
            "description": "<p>成功消息</p>"
          }
        ],
        "失败响应": [
          {
            "group": "失败响应",
            "type": "Integer",
            "allowedValues": [
              "\"400（客户端错误）\"",
              "\"401（鉴权失败）\"",
              "\"500（服务器错误）\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "失败响应",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/user.js",
    "groupTitle": "用户",
    "name": " put Password"
  }
] });
