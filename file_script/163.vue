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
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [
              _vm._v("默认 Hover 指示器触发")
            ]),
            _vm._v(" "),
            _c(
              "el-carousel",
              { attrs: { height: "150px" } },
              _vm._l(4, function(item) {
                return _c("el-carousel-item", { key: item }, [
                  _c("h3", { staticClass: "small" }, [_vm._v(_vm._s(item))])
                ])
              }),
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [
              _vm._v("Click 指示器触发")
            ]),
            _vm._v(" "),
            _c(
              "el-carousel",
              { attrs: { trigger: "click", height: "150px" } },
              _vm._l(4, function(item) {
                return _c("el-carousel-item", { key: item }, [
                  _c("h3", { staticClass: "small" }, [_vm._v(_vm._s(item))])
                ])
              }),
              1
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
        _c(
          "el-carousel",
          { attrs: { "indicator-position": "outside" } },
          _vm._l(4, function(item) {
            return _c("el-carousel-item", { key: item }, [
              _c("h3", [_vm._v(_vm._s(item))])
            ])
          }),
          1
        )
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
        _c(
          "el-carousel",
          { attrs: { interval: 5000, arrow: "always" } },
          _vm._l(4, function(item) {
            return _c("el-carousel-item", { key: item }, [
              _c("h3", [_vm._v(_vm._s(item))])
            ])
          }),
          1
        )
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
          "el-carousel",
          { attrs: { interval: 4000, type: "card", height: "200px" } },
          _vm._l(6, function(item) {
            return _c("el-carousel-item", { key: item }, [
              _c("h3", { staticClass: "medium" }, [_vm._v(_vm._s(item))])
            ])
          }),
          1
        )
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
        _c(
          "el-carousel",
          {
            attrs: { height: "200px", direction: "vertical", autoplay: false }
          },
          _vm._l(3, function(item) {
            return _c("el-carousel-item", { key: item }, [
              _c("h3", { staticClass: "medium" }, [_vm._v(_vm._s(item))])
            ])
          }),
          1
        )
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