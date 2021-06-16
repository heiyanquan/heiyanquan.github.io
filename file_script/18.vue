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
        _c("el-alert", { attrs: { title: "success alert", type: "success" } }),
        _vm._v(" "),
        _c("el-alert", { attrs: { title: "info alert", type: "info" } }),
        _vm._v(" "),
        _c("el-alert", { attrs: { title: "warning alert", type: "warning" } }),
        _vm._v(" "),
        _c("el-alert", { attrs: { title: "error alert", type: "error" } })
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
          attrs: { title: "success alert", type: "success", effect: "dark" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "info alert", type: "info", effect: "dark" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "warning alert", type: "warning", effect: "dark" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "error alert", type: "error", effect: "dark" }
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
          attrs: { title: "unclosable alert", type: "success", closable: false }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "customized close-text",
            type: "info",
            "close-text": "Gotcha"
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "alert with callback", type: "warning" },
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
          attrs: { title: "success alert", type: "success", "show-icon": "" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "info alert", type: "info", "show-icon": "" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "warning alert", type: "warning", "show-icon": "" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "error alert", type: "error", "show-icon": "" }
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
            title: "success alert",
            type: "success",
            center: "",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "info alert",
            type: "info",
            center: "",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "warning alert",
            type: "warning",
            center: "",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "error alert",
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
            title: "with description",
            type: "success",
            description: "This is a description."
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
            title: "success alert",
            type: "success",
            description: "more text description",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "info alert",
            type: "info",
            description: "more text description",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "warning alert",
            type: "warning",
            description: "more text description",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "error alert",
            type: "error",
            description: "more text description",
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