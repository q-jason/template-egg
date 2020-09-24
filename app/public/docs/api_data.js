define({ "api": [
  {
    "type": " DELETE ",
    "url": "/[model-name]/:id",
    "title": "删除条目",
    "group": "模型增删改查",
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
    "filename": "app/controller/A.js",
    "groupTitle": "模型增删改查",
    "name": " delete ModelNameId"
  },
  {
    "type": " GET ",
    "url": "/[model-name]",
    "title": "获取数据列表",
    "group": "模型增删改查",
    "parameter": {
      "fields": {
        "查询字符串": [
          {
            "group": "查询字符串",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>用于分页查询，跳过 offset 条结果</p>"
          },
          {
            "group": "查询字符串",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>用于分页查询，限制返回的条目数</p>"
          },
          {
            "group": "查询字符串",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>排序，格式：createdAt:DESC,id:ASC</p>"
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
    "filename": "app/controller/A.js",
    "groupTitle": "模型增删改查",
    "name": " get ModelName"
  },
  {
    "type": " GET ",
    "url": "/[model-name]/count",
    "title": "获取数量",
    "group": "模型增删改查",
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
        "成功响应_": [
          {
            "group": "成功响应_",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>数量</p>"
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
    "filename": "app/controller/A.js",
    "groupTitle": "模型增删改查",
    "name": " get ModelNameCount"
  },
  {
    "type": " GET ",
    "url": "/[model-name]/:id",
    "title": "根据 id 查询单条数据",
    "group": "模型增删改查",
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
    "filename": "app/controller/A.js",
    "groupTitle": "模型增删改查",
    "name": " get ModelNameId"
  },
  {
    "type": " POST ",
    "url": "/[model-name]",
    "title": "创建条目",
    "group": "模型增删改查",
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
    "filename": "app/controller/A.js",
    "groupTitle": "模型增删改查",
    "name": " post ModelName"
  },
  {
    "type": " PUT ",
    "url": "/[model-name]/:id",
    "title": "更新条目",
    "group": "模型增删改查",
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
    "filename": "app/controller/A.js",
    "groupTitle": "模型增删改查",
    "name": " put ModelNameId"
  }
] });
