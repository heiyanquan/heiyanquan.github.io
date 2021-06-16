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
          _vm._v("Afficher le message")
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
        this.$message('Ceci est un message.');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message peut être '),
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
        this.$message('Ceci est un message.');
      },
      open2() {
        this.$message({
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Attention, ceci est un avertissement.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Ouups, ceci est une erreur.');
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
          message: 'Ceci est un message.'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: 'Attention, ceci est un avertissement.',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: 'Ouups, ceci est une erreur.',
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
          [_vm._v("Texte centré")]
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
          message: 'Texte centré',
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
          [_vm._v("Utiliser du HTML")]
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
          message: '<strong>Ceci est du <i>HTML</i></strong>'
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