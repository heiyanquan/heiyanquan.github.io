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
        _c("el-button", { attrs: { plain: true }, on: { click: _vm.open } }, [
          _vm._v("Show message")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: true }, on: { click: _vm.openVn } }, [
          _vm._v("VNode")
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
        this.$message('This is a message.');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
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
        _c("el-button", { attrs: { plain: true }, on: { click: _vm.open2 } }, [
          _vm._v("success")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: true }, on: { click: _vm.open3 } }, [
          _vm._v("warning")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: true }, on: { click: _vm.open1 } }, [
          _vm._v("message")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: true }, on: { click: _vm.open4 } }, [
          _vm._v("error")
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
        this.$message('This is a message.');
      },
      open2() {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Oops, this is a error message.');
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
        _c("el-button", { attrs: { plain: true }, on: { click: _vm.open1 } }, [
          _vm._v("message")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: true }, on: { click: _vm.open2 } }, [
          _vm._v("success")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: true }, on: { click: _vm.open3 } }, [
          _vm._v("warning")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: true }, on: { click: _vm.open4 } }, [
          _vm._v("error")
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
        this.$message({
          showClose: true,
          message: 'This is a message.'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error'
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
        _c(
          "el-button",
          { attrs: { plain: true }, on: { click: _vm.openCenter } },
          [_vm._v("Centered text")]
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      openCenter() {
        this.$message({
          message: 'Centered text',
          center: true
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
        _c(
          "el-button",
          { attrs: { plain: true }, on: { click: _vm.openHTML } },
          [_vm._v("Use HTML String")]
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
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