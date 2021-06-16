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
        "el-container",
        [
          _c("el-header", [_vm._v("Header")]),
          _vm._v(" "),
          _c("el-main", [_vm._v("Main")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-container",
        [
          _c("el-header", [_vm._v("Header")]),
          _vm._v(" "),
          _c("el-main", [_vm._v("Main")]),
          _vm._v(" "),
          _c("el-footer", [_vm._v("Footer")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-container",
        [
          _c("el-aside", { attrs: { width: "200px" } }, [_vm._v("Aside")]),
          _vm._v(" "),
          _c("el-main", [_vm._v("Main")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-container",
        [
          _c("el-header", [_vm._v("Header")]),
          _vm._v(" "),
          _c(
            "el-container",
            [
              _c("el-aside", { attrs: { width: "200px" } }, [_vm._v("Aside")]),
              _vm._v(" "),
              _c("el-main", [_vm._v("Main")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-container",
        [
          _c("el-header", [_vm._v("Header")]),
          _vm._v(" "),
          _c(
            "el-container",
            [
              _c("el-aside", { attrs: { width: "200px" } }, [_vm._v("Aside")]),
              _vm._v(" "),
              _c(
                "el-container",
                [
                  _c("el-main", [_vm._v("Main")]),
                  _vm._v(" "),
                  _c("el-footer", [_vm._v("Footer")])
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
        "el-container",
        [
          _c("el-aside", { attrs: { width: "200px" } }, [_vm._v("Aside")]),
          _vm._v(" "),
          _c(
            "el-container",
            [
              _c("el-header", [_vm._v("Header")]),
              _vm._v(" "),
              _c("el-main", [_vm._v("Main")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-container",
        [
          _c("el-aside", { attrs: { width: "200px" } }, [_vm._v("Aside")]),
          _vm._v(" "),
          _c(
            "el-container",
            [
              _c("el-header", [_vm._v("Header")]),
              _vm._v(" "),
              _c("el-main", [_vm._v("Main")]),
              _vm._v(" "),
              _c("el-footer", [_vm._v("Footer")])
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
        "el-container",
        { staticStyle: { height: "500px", border: "1px solid #eee" } },
        [
          _c(
            "el-aside",
            {
              staticStyle: { "background-color": "rgb(238, 241, 246)" },
              attrs: { width: "200px" }
            },
            [
              _c(
                "el-menu",
                { attrs: { "default-openeds": ["1", "3"] } },
                [
                  _c(
                    "el-submenu",
                    { attrs: { index: "1" } },
                    [
                      _c("template", { slot: "title" }, [
                        _c("i", { staticClass: "el-icon-message" }),
                        _vm._v("导航一")
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        [
                          _c("template", { slot: "title" }, [_vm._v("分组一")]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "1-1" } }, [
                            _vm._v("选项1")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "1-2" } }, [
                            _vm._v("选项2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        { attrs: { title: "分组2" } },
                        [
                          _c("el-menu-item", { attrs: { index: "1-3" } }, [
                            _vm._v("选项3")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-submenu",
                        { attrs: { index: "1-4" } },
                        [
                          _c("template", { slot: "title" }, [_vm._v("选项4")]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "1-4-1" } }, [
                            _vm._v("选项4-1")
                          ])
                        ],
                        2
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "el-submenu",
                    { attrs: { index: "2" } },
                    [
                      _c("template", { slot: "title" }, [
                        _c("i", { staticClass: "el-icon-menu" }),
                        _vm._v("导航二")
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        [
                          _c("template", { slot: "title" }, [_vm._v("分组一")]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "2-1" } }, [
                            _vm._v("选项1")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "2-2" } }, [
                            _vm._v("选项2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        { attrs: { title: "分组2" } },
                        [
                          _c("el-menu-item", { attrs: { index: "2-3" } }, [
                            _vm._v("选项3")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-submenu",
                        { attrs: { index: "2-4" } },
                        [
                          _c("template", { slot: "title" }, [_vm._v("选项4")]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "2-4-1" } }, [
                            _vm._v("选项4-1")
                          ])
                        ],
                        2
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "el-submenu",
                    { attrs: { index: "3" } },
                    [
                      _c("template", { slot: "title" }, [
                        _c("i", { staticClass: "el-icon-setting" }),
                        _vm._v("导航三")
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        [
                          _c("template", { slot: "title" }, [_vm._v("分组一")]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "3-1" } }, [
                            _vm._v("选项1")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "3-2" } }, [
                            _vm._v("选项2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        { attrs: { title: "分组2" } },
                        [
                          _c("el-menu-item", { attrs: { index: "3-3" } }, [
                            _vm._v("选项3")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-submenu",
                        { attrs: { index: "3-4" } },
                        [
                          _c("template", { slot: "title" }, [_vm._v("选项4")]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "3-4-1" } }, [
                            _vm._v("选项4-1")
                          ])
                        ],
                        2
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-container",
            [
              _c(
                "el-header",
                { staticStyle: { "text-align": "right", "font-size": "12px" } },
                [
                  _c(
                    "el-dropdown",
                    [
                      _c("i", {
                        staticClass: "el-icon-setting",
                        staticStyle: { "margin-right": "15px" }
                      }),
                      _vm._v(" "),
                      _c(
                        "el-dropdown-menu",
                        { attrs: { slot: "dropdown" }, slot: "dropdown" },
                        [
                          _c("el-dropdown-item", [_vm._v("查看")]),
                          _vm._v(" "),
                          _c("el-dropdown-item", [_vm._v("新增")]),
                          _vm._v(" "),
                          _c("el-dropdown-item", [_vm._v("删除")])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("span", [_vm._v("王小虎")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-main",
                [
                  _c(
                    "el-table",
                    { attrs: { data: _vm.tableData } },
                    [
                      _c("el-table-column", {
                        attrs: { prop: "date", label: "日期", width: "140" }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { prop: "name", label: "姓名", width: "120" }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { prop: "address", label: "地址" }
                      })
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

  
    const democomponentExport = {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
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