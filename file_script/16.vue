<script>
      export default {
        name: 'component-doc',
        components: {
          "element-demo0": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-alert", { attrs: { title: "成功提示的文案", type: "success" } }),
        _vm._v(" "),
        _c("el-alert", { attrs: { title: "消息提示的文案", type: "info" } }),
        _vm._v(" "),
        _c("el-alert", { attrs: { title: "警告提示的文案", type: "warning" } }),
        _vm._v(" "),
        _c("el-alert", { attrs: { title: "错误提示的文案", type: "error" } })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo1": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-alert", {
          attrs: { title: "成功提示的文案", type: "success", effect: "dark" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "消息提示的文案", type: "info", effect: "dark" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "警告提示的文案", type: "warning", effect: "dark" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "错误提示的文案", type: "error", effect: "dark" }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo2": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-alert", {
          attrs: { title: "不可关闭的 alert", type: "success", closable: false }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "自定义 close-text",
            type: "info",
            "close-text": "知道了"
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "设置了回调的 alert", type: "warning" },
          on: { close: _vm.hello }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo3": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-alert", {
          attrs: { title: "成功提示的文案", type: "success", "show-icon": "" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "消息提示的文案", type: "info", "show-icon": "" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "警告提示的文案", type: "warning", "show-icon": "" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "错误提示的文案", type: "error", "show-icon": "" }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo4": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-alert", {
          attrs: {
            title: "成功提示的文案",
            type: "success",
            center: "",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "消息提示的文案",
            type: "info",
            center: "",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "警告提示的文案",
            type: "warning",
            center: "",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "错误提示的文案",
            type: "error",
            center: "",
            "show-icon": ""
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo5": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-alert", {
          attrs: {
            title: "带辅助性文字介绍",
            type: "success",
            description:
              "这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo6": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-alert", {
          attrs: {
            title: "成功提示的文案",
            type: "success",
            description: "文字说明文字说明文字说明文字说明文字说明文字说明",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "消息提示的文案",
            type: "info",
            description: "文字说明文字说明文字说明文字说明文字说明文字说明",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "警告提示的文案",
            type: "warning",
            description: "文字说明文字说明文字说明文字说明文字说明文字说明",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "错误提示的文案",
            type: "error",
            description: "文字说明文字说明文字说明文字说明文字说明文字说明",
            "show-icon": ""
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>