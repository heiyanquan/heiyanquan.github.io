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
        _c("el-alert", { attrs: { title: "succès", type: "success" } }),
        _vm._v(" "),
        _c("el-alert", { attrs: { title: "information", type: "info" } }),
        _vm._v(" "),
        _c("el-alert", { attrs: { title: "avertissement", type: "warning" } }),
        _vm._v(" "),
        _c("el-alert", { attrs: { title: "erreur", type: "error" } })
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
          attrs: { title: "succès", type: "success", effect: "dark" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "info", type: "info", effect: "dark" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "avertissement", type: "warning", effect: "dark" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "erreur", type: "error", effect: "dark" }
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
          attrs: {
            title: "alerte non fermable",
            type: "success",
            closable: false
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "texte de fermeture personnalisé",
            type: "info",
            "close-text": "Gotcha"
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "alerte avec callback", type: "warning" },
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
          attrs: { title: "succès", type: "success", "show-icon": "" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "information", type: "info", "show-icon": "" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "avertissement", type: "warning", "show-icon": "" }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "erreur", type: "error", "show-icon": "" }
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
            title: "succès",
            type: "success",
            center: "",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "information",
            type: "info",
            center: "",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "avertissement",
            type: "warning",
            center: "",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: { title: "erreur", type: "error", center: "", "show-icon": "" }
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
            title: "Titre",
            type: "success",
            description: "Ceci est la description."
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
            title: "succès",
            type: "success",
            description: "Plus de texte pour décrire.",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "information",
            type: "info",
            description: "Plus de texte pour décrire.",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "avertissement",
            type: "warning",
            description: "Plus de texte pour décrire.",
            "show-icon": ""
          }
        }),
        _vm._v(" "),
        _c("el-alert", {
          attrs: {
            title: "erreur",
            type: "error",
            description: "Plus de texte pour décrire.",
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