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
        "el-dropdown",
        [
          _c("span", { staticClass: "el-dropdown-link" }, [
            _vm._v("\n    下拉菜单"),
            _c("i", { staticClass: "el-icon-arrow-down el-icon--right" })
          ]),
          _vm._v(" "),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c("el-dropdown-item", [_vm._v("黄金糕")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("狮子头")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("螺蛳粉")]),
              _vm._v(" "),
              _c("el-dropdown-item", { attrs: { disabled: "" } }, [
                _vm._v("双皮奶")
              ]),
              _vm._v(" "),
              _c("el-dropdown-item", { attrs: { divided: "" } }, [
                _vm._v("蚵仔煎")
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
  })(),"element-demo1": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-dropdown",
        [
          _c("el-button", { attrs: { type: "primary" } }, [
            _vm._v("\n    更多菜单"),
            _c("i", { staticClass: "el-icon-arrow-down el-icon--right" })
          ]),
          _vm._v(" "),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c("el-dropdown-item", [_vm._v("黄金糕")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("狮子头")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("螺蛳粉")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("双皮奶")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("蚵仔煎")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dropdown",
        {
          attrs: { "split-button": "", type: "primary" },
          on: { click: _vm.handleClick }
        },
        [
          _vm._v("\n  更多菜单\n  "),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c("el-dropdown-item", [_vm._v("黄金糕")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("狮子头")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("螺蛳粉")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("双皮奶")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("蚵仔煎")])
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

  
    const democomponentExport = {
    methods: {
      handleClick() {
        alert('button click');
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
      _c(
        "el-row",
        { staticClass: "block-col-2" },
        [
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("span", { staticClass: "demonstration" }, [
                _vm._v("hover 激活")
              ]),
              _vm._v(" "),
              _c(
                "el-dropdown",
                [
                  _c("span", { staticClass: "el-dropdown-link" }, [
                    _vm._v("\n        下拉菜单"),
                    _c("i", {
                      staticClass: "el-icon-arrow-down el-icon--right"
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-dropdown-menu",
                    { attrs: { slot: "dropdown" }, slot: "dropdown" },
                    [
                      _c(
                        "el-dropdown-item",
                        { attrs: { icon: "el-icon-plus" } },
                        [_vm._v("黄金糕")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-dropdown-item",
                        { attrs: { icon: "el-icon-circle-plus" } },
                        [_vm._v("狮子头")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-dropdown-item",
                        { attrs: { icon: "el-icon-circle-plus-outline" } },
                        [_vm._v("螺蛳粉")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-dropdown-item",
                        { attrs: { icon: "el-icon-check" } },
                        [_vm._v("双皮奶")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-dropdown-item",
                        { attrs: { icon: "el-icon-circle-check" } },
                        [_vm._v("蚵仔煎")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("span", { staticClass: "demonstration" }, [
                _vm._v("click 激活")
              ]),
              _vm._v(" "),
              _c(
                "el-dropdown",
                { attrs: { trigger: "click" } },
                [
                  _c("span", { staticClass: "el-dropdown-link" }, [
                    _vm._v("\n        下拉菜单"),
                    _c("i", {
                      staticClass: "el-icon-arrow-down el-icon--right"
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-dropdown-menu",
                    { attrs: { slot: "dropdown" }, slot: "dropdown" },
                    [
                      _c(
                        "el-dropdown-item",
                        { attrs: { icon: "el-icon-plus" } },
                        [_vm._v("黄金糕")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-dropdown-item",
                        { attrs: { icon: "el-icon-circle-plus" } },
                        [_vm._v("狮子头")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-dropdown-item",
                        { attrs: { icon: "el-icon-circle-plus-outline" } },
                        [_vm._v("螺蛳粉")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-dropdown-item",
                        { attrs: { icon: "el-icon-check" } },
                        [_vm._v("双皮奶")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-dropdown-item",
                        { attrs: { icon: "el-icon-circle-check" } },
                        [_vm._v("蚵仔煎")]
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
      _c(
        "el-dropdown",
        { attrs: { "hide-on-click": false } },
        [
          _c("span", { staticClass: "el-dropdown-link" }, [
            _vm._v("\n    下拉菜单"),
            _c("i", { staticClass: "el-icon-arrow-down el-icon--right" })
          ]),
          _vm._v(" "),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c("el-dropdown-item", [_vm._v("黄金糕")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("狮子头")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("螺蛳粉")]),
              _vm._v(" "),
              _c("el-dropdown-item", { attrs: { disabled: "" } }, [
                _vm._v("双皮奶")
              ]),
              _vm._v(" "),
              _c("el-dropdown-item", { attrs: { divided: "" } }, [
                _vm._v("蚵仔煎")
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
  })(),"element-demo4": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-dropdown",
        { on: { command: _vm.handleCommand } },
        [
          _c("span", { staticClass: "el-dropdown-link" }, [
            _vm._v("\n    下拉菜单"),
            _c("i", { staticClass: "el-icon-arrow-down el-icon--right" })
          ]),
          _vm._v(" "),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c("el-dropdown-item", { attrs: { command: "a" } }, [
                _vm._v("黄金糕")
              ]),
              _vm._v(" "),
              _c("el-dropdown-item", { attrs: { command: "b" } }, [
                _vm._v("狮子头")
              ]),
              _vm._v(" "),
              _c("el-dropdown-item", { attrs: { command: "c" } }, [
                _vm._v("螺蛳粉")
              ]),
              _vm._v(" "),
              _c(
                "el-dropdown-item",
                { attrs: { command: "d", disabled: "" } },
                [_vm._v("双皮奶")]
              ),
              _vm._v(" "),
              _c("el-dropdown-item", { attrs: { command: "e", divided: "" } }, [
                _vm._v("蚵仔煎")
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

  
    const democomponentExport = {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
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
      _c(
        "el-dropdown",
        { attrs: { "split-button": "", type: "primary" } },
        [
          _vm._v("\n  默认尺寸\n  "),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c("el-dropdown-item", [_vm._v("黄金糕")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("狮子头")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("螺蛳粉")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("双皮奶")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("蚵仔煎")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dropdown",
        { attrs: { size: "medium", "split-button": "", type: "primary" } },
        [
          _vm._v("\n  中等尺寸\n  "),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c("el-dropdown-item", [_vm._v("黄金糕")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("狮子头")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("螺蛳粉")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("双皮奶")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("蚵仔煎")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dropdown",
        { attrs: { size: "small", "split-button": "", type: "primary" } },
        [
          _vm._v("\n  小型尺寸\n  "),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c("el-dropdown-item", [_vm._v("黄金糕")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("狮子头")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("螺蛳粉")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("双皮奶")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("蚵仔煎")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dropdown",
        { attrs: { size: "mini", "split-button": "", type: "primary" } },
        [
          _vm._v("\n  超小尺寸\n  "),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c("el-dropdown-item", [_vm._v("黄金糕")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("狮子头")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("螺蛳粉")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("双皮奶")]),
              _vm._v(" "),
              _c("el-dropdown-item", [_vm._v("蚵仔煎")])
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