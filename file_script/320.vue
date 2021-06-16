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
                        _vm._v("Navigator One")
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("Group 1")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "1-1" } }, [
                            _vm._v("Option 1")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "1-2" } }, [
                            _vm._v("Option 2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        { attrs: { title: "Group 2" } },
                        [
                          _c("el-menu-item", { attrs: { index: "1-3" } }, [
                            _vm._v("Option 3")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-submenu",
                        { attrs: { index: "1-4" } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("Option4")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "1-4-1" } }, [
                            _vm._v("Option 4-1")
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
                        _vm._v("Navigator Two")
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("Group 1")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "2-1" } }, [
                            _vm._v("Option 1")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "2-2" } }, [
                            _vm._v("Option 2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        { attrs: { title: "Group 2" } },
                        [
                          _c("el-menu-item", { attrs: { index: "2-3" } }, [
                            _vm._v("Option 3")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-submenu",
                        { attrs: { index: "2-4" } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("Option 4")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "2-4-1" } }, [
                            _vm._v("Option 4-1")
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
                        _vm._v("Navigator Three")
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("Group 1")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "3-1" } }, [
                            _vm._v("Option 1")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "3-2" } }, [
                            _vm._v("Option 2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        { attrs: { title: "Group 2" } },
                        [
                          _c("el-menu-item", { attrs: { index: "3-3" } }, [
                            _vm._v("Option 3")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-submenu",
                        { attrs: { index: "3-4" } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("Option 4")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "3-4-1" } }, [
                            _vm._v("Option 4-1")
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
                          _c("el-dropdown-item", [_vm._v("View")]),
                          _vm._v(" "),
                          _c("el-dropdown-item", [_vm._v("Add")]),
                          _vm._v(" "),
                          _c("el-dropdown-item", [_vm._v("Delete")])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("span", [_vm._v("Tom")])
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
                        attrs: { prop: "date", label: "Date", width: "140" }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { prop: "name", label: "Name", width: "120" }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { prop: "address", label: "Address" }
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
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
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