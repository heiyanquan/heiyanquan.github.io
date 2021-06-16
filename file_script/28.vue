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
                content: "Top Left 提示文字",
                placement: "top-start"
              }
            },
            [_c("el-button", [_vm._v("上左")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Top Center 提示文字",
                placement: "top"
              }
            },
            [_c("el-button", [_vm._v("上边")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Top Right 提示文字",
                placement: "top-end"
              }
            },
            [_c("el-button", [_vm._v("上右")])],
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
                content: "Left Top 提示文字",
                placement: "left-start"
              }
            },
            [_c("el-button", [_vm._v("左上")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Left Center 提示文字",
                placement: "left"
              }
            },
            [_c("el-button", [_vm._v("左边")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Left Bottom 提示文字",
                placement: "left-end"
              }
            },
            [_c("el-button", [_vm._v("左下")])],
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
                content: "Right Top 提示文字",
                placement: "right-start"
              }
            },
            [_c("el-button", [_vm._v("右上")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Right Center 提示文字",
                placement: "right"
              }
            },
            [_c("el-button", [_vm._v("右边")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Right Bottom 提示文字",
                placement: "right-end"
              }
            },
            [_c("el-button", [_vm._v("右下")])],
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
                content: "Bottom Left 提示文字",
                placement: "bottom-start"
              }
            },
            [_c("el-button", [_vm._v("下左")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Bottom Center 提示文字",
                placement: "bottom"
              }
            },
            [_c("el-button", [_vm._v("下边")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: "Bottom Right 提示文字",
                placement: "bottom-end"
              }
            },
            [_c("el-button", [_vm._v("下右")])],
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
            _vm._v("多行信息"),
            _c("br"),
            _vm._v("第二行信息")
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
              content: "点击关闭 tooltip 功能",
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
                  "点击" +
                    _vm._s(_vm.disabled ? "开启" : "关闭") +
                    " tooltip 功能"
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