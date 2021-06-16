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
        "el-badge",
        { staticClass: "item", attrs: { value: 12 } },
        [_c("el-button", { attrs: { size: "small" } }, [_vm._v("评论")])],
        1
      ),
      _vm._v(" "),
      _c(
        "el-badge",
        { staticClass: "item", attrs: { value: 3 } },
        [_c("el-button", { attrs: { size: "small" } }, [_vm._v("回复")])],
        1
      ),
      _vm._v(" "),
      _c(
        "el-badge",
        { staticClass: "item", attrs: { value: 1, type: "primary" } },
        [_c("el-button", { attrs: { size: "small" } }, [_vm._v("评论")])],
        1
      ),
      _vm._v(" "),
      _c(
        "el-badge",
        { staticClass: "item", attrs: { value: 2, type: "warning" } },
        [_c("el-button", { attrs: { size: "small" } }, [_vm._v("回复")])],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dropdown",
        { attrs: { trigger: "click" } },
        [
          _c("span", { staticClass: "el-dropdown-link" }, [
            _vm._v("\n    点我查看"),
            _c("i", { staticClass: "el-icon-caret-bottom el-icon--right" })
          ]),
          _vm._v(" "),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c(
                "el-dropdown-item",
                { staticClass: "clearfix" },
                [
                  _vm._v("\n      评论\n      "),
                  _c("el-badge", { staticClass: "mark", attrs: { value: 12 } })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-dropdown-item",
                { staticClass: "clearfix" },
                [
                  _vm._v("\n      回复\n      "),
                  _c("el-badge", { staticClass: "mark", attrs: { value: 3 } })
                ],
                1
              )
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
  })(),"element-demo1": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-badge",
        { staticClass: "item", attrs: { value: 200, max: 99 } },
        [_c("el-button", { attrs: { size: "small" } }, [_vm._v("评论")])],
        1
      ),
      _vm._v(" "),
      _c(
        "el-badge",
        { staticClass: "item", attrs: { value: 100, max: 10 } },
        [_c("el-button", { attrs: { size: "small" } }, [_vm._v("回复")])],
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
        "el-badge",
        { staticClass: "item", attrs: { value: "new" } },
        [_c("el-button", { attrs: { size: "small" } }, [_vm._v("评论")])],
        1
      ),
      _vm._v(" "),
      _c(
        "el-badge",
        { staticClass: "item", attrs: { value: "hot" } },
        [_c("el-button", { attrs: { size: "small" } }, [_vm._v("回复")])],
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
      _c("el-badge", { staticClass: "item", attrs: { "is-dot": "" } }, [
        _vm._v("数据查询")
      ]),
      _vm._v(" "),
      _c(
        "el-badge",
        { staticClass: "item", attrs: { "is-dot": "" } },
        [
          _c("el-button", {
            staticClass: "share-button",
            attrs: { icon: "el-icon-share", type: "primary" }
          })
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