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
          "el-row",
          { staticClass: "demo-avatar demo-basic" },
          [
            _c("el-col", { attrs: { span: 12 } }, [
              _c("div", { staticClass: "sub-title" }, [_vm._v("cercle")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "demo-basic--circle" },
                [
                  _c(
                    "div",
                    { staticClass: "block" },
                    [
                      _c("el-avatar", {
                        attrs: { size: 50, src: _vm.circleUrl }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.sizeList, function(size) {
                    return _c(
                      "div",
                      { key: size, staticClass: "block" },
                      [
                        _c("el-avatar", {
                          attrs: { size: size, src: _vm.circleUrl }
                        })
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("el-col", { attrs: { span: 12 } }, [
              _c("div", { staticClass: "sub-title" }, [_vm._v("carré")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "demo-basic--circle" },
                [
                  _c(
                    "div",
                    { staticClass: "block" },
                    [
                      _c("el-avatar", {
                        attrs: { shape: "square", size: 50, src: _vm.squareUrl }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.sizeList, function(size) {
                    return _c(
                      "div",
                      { key: size, staticClass: "block" },
                      [
                        _c("el-avatar", {
                          attrs: {
                            shape: "square",
                            size: size,
                            src: _vm.squareUrl
                          }
                        })
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ])
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
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
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
        _c("div", { staticClass: "demo-type" }, [
          _c(
            "div",
            [_c("el-avatar", { attrs: { icon: "el-icon-user-solid" } })],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("el-avatar", {
                attrs: {
                  src:
                    "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", [_c("el-avatar", [_vm._v(" user ")])], 1)
        ])
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
          "div",
          { staticClass: "demo-type" },
          [
            _c(
              "el-avatar",
              {
                attrs: { size: 60, src: "https://empty" },
                on: { error: _vm.errorHandler }
              },
              [
                _c("img", {
                  attrs: {
                    src:
                      "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                  }
                })
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
    methods: {
      errorHandler() {
        return true
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
          "div",
          { staticClass: "demo-fit" },
          _vm._l(_vm.fits, function(fit) {
            return _c(
              "div",
              { key: fit, staticClass: "block" },
              [
                _c("span", { staticClass: "title" }, [_vm._v(_vm._s(fit))]),
                _vm._v(" "),
                _c("el-avatar", {
                  attrs: { shape: "square", size: 100, fit: fit, src: _vm.url }
                })
              ],
              1
            )
          }),
          0
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
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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