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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open1 } }, [
          _vm._v("\n    可自动关闭\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open2 } }, [
          _vm._v("\n    不会自动关闭\n    ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }
    }
  }
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open1 } }, [
          _vm._v("\n    成功\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open2 } }, [
          _vm._v("\n    警告\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open3 } }, [
          _vm._v("\n    消息\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open4 } }, [
          _vm._v("\n    错误\n  ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open1() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open4() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
    }
  }
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open1 } }, [
          _vm._v("\n    右上角\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open2 } }, [
          _vm._v("\n    右下角\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open3 } }, [
          _vm._v("\n    左下角\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open4 } }, [
          _vm._v("\n    左上角\n  ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open1() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open2() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open } }, [
          _vm._v("\n    偏移的消息\n  ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open() {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100
        });
      }
    }
  }
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open } }, [
          _vm._v("\n    使用 HTML 片段\n  ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open() {
        this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open } }, [
          _vm._v("\n    隐藏关闭按钮\n  ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false
        });
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>