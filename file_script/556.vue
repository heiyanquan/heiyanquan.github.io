<script>
      export default {
        name: 'component-doc',
        components: {
          "element-demo0": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "box" }, [
      _c(
        "div",
        { staticClass: "top" },
        [
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Top Left prompts info",
                placement: "top-start"
              }
            },
            [_c("el-button", [_vm._v("top-start")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Top Center prompts info",
                placement: "top"
              }
            },
            [_c("el-button", [_vm._v("top")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Top Right prompts info",
                placement: "top-end"
              }
            },
            [_c("el-button", [_vm._v("top-end")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "left" },
        [
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Left Top prompts info",
                placement: "left-start"
              }
            },
            [_c("el-button", [_vm._v("left-start")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Left Center prompts info",
                placement: "left"
              }
            },
            [_c("el-button", [_vm._v("left")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Left Bottom prompts info",
                placement: "left-end"
              }
            },
            [_c("el-button", [_vm._v("left-end")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "right" },
        [
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Right Top prompts info",
                placement: "right-start"
              }
            },
            [_c("el-button", [_vm._v("right-start")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Right Center prompts info",
                placement: "right"
              }
            },
            [_c("el-button", [_vm._v("right")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Right Bottom prompts info",
                placement: "right-end"
              }
            },
            [_c("el-button", [_vm._v("right-end")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bottom" },
        [
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Bottom Left prompts info",
                placement: "bottom-start"
              }
            },
            [_c("el-button", [_vm._v("bottom-start")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Bottom Center prompts info",
                placement: "bottom"
              }
            },
            [_c("el-button", [_vm._v("bottom")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Bottom Right prompts info",
                placement: "bottom-end"
              }
            },
            [_c("el-button", [_vm._v("bottom-end")])],
            1
          )
        ],
        1
      )
    ])
  ])
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
      _c(
        "el-tooltip",
        { attrs: { content: "Top center", placement: "top" } },
        [_c("el-button", [_vm._v("Dark")])],
        1
      ),
      _vm._v(" "),
      _c(
        "el-tooltip",
        {
          attrs: {
            content: "Bottom center",
            placement: "bottom",
            effect: "light"
          }
        },
        [_c("el-button", [_vm._v("Light")])],
        1
      )
    ],
    1
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
      _c(
        "el-tooltip",
        { attrs: { placement: "top" } },
        [
          _c("div", { attrs: { slot: "content" }, slot: "content" }, [
            _vm._v("Multiples lignes"),
            _c("br"),
            _vm._v("Seconde ligne")
          ]),
          _vm._v(" "),
          _c("el-button", [_vm._v("Top center")])
        ],
        1
      )
    ],
    1
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
          "el-tooltip",
          {
            attrs: {
              disabled: _vm.disabled,
              content: "Cliquez pour désactiver le tooltip",
              placement: "bottom",
              effect: "light"
            }
          },
          [
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.disabled = !_vm.disabled
                  }
                }
              },
              [
                _vm._v(
                  "Cliquez pour " +
                    _vm._s(_vm.disabled ? "activer" : "désactiver") +
                    " le tooltip"
                )
              ]
            )
          ],
          1
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        disabled: false
      };
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>