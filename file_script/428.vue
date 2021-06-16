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
    _c(
      "div",
      { staticClass: "block" },
      [
        _c("span", { staticClass: "demonstration" }, [
          _vm._v("When you have few pages")
        ]),
        _vm._v(" "),
        _c("el-pagination", {
          attrs: { layout: "prev, pager, next", total: 50 }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "block" },
      [
        _c("span", { staticClass: "demonstration" }, [
          _vm._v("When you have more than 7 pages")
        ]),
        _vm._v(" "),
        _c("el-pagination", {
          attrs: { layout: "prev, pager, next", total: 1000 }
        })
      ],
      1
    )
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
      _c("el-pagination", {
        attrs: {
          "page-size": 20,
          "pager-count": 11,
          layout: "prev, pager, next",
          total: 1000
        }
      })
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
      _c("el-pagination", {
        attrs: { small: "", layout: "prev, pager, next", total: 50 }
      })
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
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [
              _vm._v("Total item count")
            ]),
            _vm._v(" "),
            _c("el-pagination", {
              attrs: {
                "current-page": _vm.currentPage1,
                "page-size": 100,
                layout: "total, prev, pager, next",
                total: 1000
              },
              on: {
                "size-change": _vm.handleSizeChange,
                "current-change": _vm.handleCurrentChange,
                "update:currentPage": function($event) {
                  _vm.currentPage1 = $event
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [
              _vm._v("Change page size")
            ]),
            _vm._v(" "),
            _c("el-pagination", {
              attrs: {
                "current-page": _vm.currentPage2,
                "page-sizes": [100, 200, 300, 400],
                "page-size": 100,
                layout: "sizes, prev, pager, next",
                total: 1000
              },
              on: {
                "size-change": _vm.handleSizeChange,
                "current-change": _vm.handleCurrentChange,
                "update:currentPage": function($event) {
                  _vm.currentPage2 = $event
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [_vm._v("Jump to")]),
            _vm._v(" "),
            _c("el-pagination", {
              attrs: {
                "current-page": _vm.currentPage3,
                "page-size": 100,
                layout: "prev, pager, next, jumper",
                total: 1000
              },
              on: {
                "size-change": _vm.handleSizeChange,
                "current-change": _vm.handleCurrentChange,
                "update:currentPage": function($event) {
                  _vm.currentPage3 = $event
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [
              _vm._v("All combined")
            ]),
            _vm._v(" "),
            _c("el-pagination", {
              attrs: {
                "current-page": _vm.currentPage4,
                "page-sizes": [100, 200, 300, 400],
                "page-size": 100,
                layout: "total, sizes, prev, pager, next, jumper",
                total: 400
              },
              on: {
                "size-change": _vm.handleSizeChange,
                "current-change": _vm.handleCurrentChange,
                "update:currentPage": function($event) {
                  _vm.currentPage4 = $event
                }
              }
            })
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
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
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
  return _c("div", [
    _c(
      "div",
      [
        _c("el-switch", {
          model: {
            value: _vm.value,
            callback: function($$v) {
              _vm.value = $$v
            },
            expression: "value"
          }
        }),
        _vm._v(" "),
        _c("el-pagination", {
          attrs: {
            "hide-on-single-page": _vm.value,
            total: 5,
            layout: "prev, pager, next"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        value: false
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