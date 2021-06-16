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
      _c(
        "el-card",
        { staticClass: "box-card" },
        [
          _c(
            "div",
            {
              staticClass: "clearfix",
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("span", [_vm._v("卡片名称")]),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  staticStyle: { float: "right", padding: "3px 0" },
                  attrs: { type: "text" }
                },
                [_vm._v("操作按钮")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(4, function(o) {
            return _c("div", { key: o, staticClass: "text item" }, [
              _vm._v("\n    " + _vm._s("列表内容 " + o) + "\n  ")
            ])
          })
        ],
        2
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
  })(),"element-demo1": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-card",
        { staticClass: "box-card" },
        _vm._l(4, function(o) {
          return _c("div", { key: o, staticClass: "text item" }, [
            _vm._v("\n    " + _vm._s("列表内容 " + o) + "\n  ")
          ])
        }),
        0
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
        "el-row",
        _vm._l(2, function(o, index) {
          return _c(
            "el-col",
            { key: o, attrs: { span: 8, offset: index > 0 ? 2 : 0 } },
            [
              _c("el-card", { attrs: { "body-style": { padding: "0px" } } }, [
                _c("img", {
                  staticClass: "image",
                  attrs: {
                    src:
                      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticStyle: { padding: "14px" } }, [
                  _c("span", [_vm._v("好吃的汉堡")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "bottom clearfix" },
                    [
                      _c("time", { staticClass: "time" }, [
                        _vm._v(_vm._s(_vm.currentDate))
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        { staticClass: "button", attrs: { type: "text" } },
                        [_vm._v("操作按钮")]
                      )
                    ],
                    1
                  )
                ])
              ])
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
  data() {
    return {
      currentDate: new Date()
    };
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
      _c(
        "el-row",
        { attrs: { gutter: 12 } },
        [
          _c(
            "el-col",
            { attrs: { span: 8 } },
            [
              _c("el-card", { attrs: { shadow: "always" } }, [
                _vm._v("\n      总是显示\n    ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 8 } },
            [
              _c("el-card", { attrs: { shadow: "hover" } }, [
                _vm._v("\n      鼠标悬浮时显示\n    ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 8 } },
            [
              _c("el-card", { attrs: { shadow: "never" } }, [
                _vm._v("\n      从不显示\n    ")
              ])
            ],
            1
          )
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
  })(),
        }
      }
    </script>