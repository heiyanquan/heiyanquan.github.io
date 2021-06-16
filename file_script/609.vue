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
          _vm._v("\n    Se ferme automatiquement\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open2 } }, [
          _vm._v("\n    Ne se ferme pas automatiquement\n    ")
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
          title: 'Titre',
          message: h('i', { style: 'color: teal' }, 'Ceci est un rappel')
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'Ceci est un message qui ne se ferme pas',
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
          _vm._v("\n    Success\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open2 } }, [
          _vm._v("\n    Warning\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open3 } }, [
          _vm._v("\n    Info\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open4 } }, [
          _vm._v("\n    Error\n  ")
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
          title: 'Success',
          message: 'Ceci est un message de succès',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: 'Warning',
          message: 'Ceci est un avertissement',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: 'Info',
          message: 'Ceci est une information'
        });
      },

      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'Ceci est une erreur'
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
          _vm._v("\n    Top Right\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open2 } }, [
          _vm._v("\n    Bottom Right\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open3 } }, [
          _vm._v("\n    Bottom Left\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open4 } }, [
          _vm._v("\n    Top Left\n  ")
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
          title: 'Custom Position',
          message: 'Je suis dans le coin supérieur droit'
        });
      },

      open2() {
        this.$notify({
          title: 'Custom Position',
          message: 'Je suis dans le coin inférieur droit',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: 'Custom Position',
          message: 'Je suis dans le coin inférieur gauche',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: 'Custom Position',
          message: 'Je suis dans le coin supérieur gauche',
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
          _vm._v("\n    Notification avec décalage\n  ")
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
          title: 'Success',
          message: 'Ceci est un message de succès',
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
          _vm._v("\n    Utiliser du HTML\n  ")
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
          title: 'HTML String',
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
          _vm._v("\n    Bouton de fermeture caché\n    ")
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
          message: 'Ceci est un message sans bouton de fermeture',
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