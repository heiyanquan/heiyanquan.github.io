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
        "el-menu",
        {
          staticClass: "el-menu-demo",
          attrs: { "default-active": _vm.activeIndex, mode: "horizontal" },
          on: { select: _vm.handleSelect }
        },
        [
          _c("el-menu-item", { attrs: { index: "1" } }, [
            _vm._v("Centre de traitement")
          ]),
          _vm._v(" "),
          _c(
            "el-submenu",
            { attrs: { index: "2" } },
            [
              _c("template", { slot: "title" }, [_vm._v("Lieu de travail")]),
              _vm._v(" "),
              _c("el-menu-item", { attrs: { index: "2-1" } }, [
                _vm._v("item un")
              ]),
              _vm._v(" "),
              _c("el-menu-item", { attrs: { index: "2-2" } }, [
                _vm._v("item deux")
              ]),
              _vm._v(" "),
              _c("el-menu-item", { attrs: { index: "2-3" } }, [
                _vm._v("item trois")
              ]),
              _vm._v(" "),
              _c(
                "el-submenu",
                { attrs: { index: "2-4" } },
                [
                  _c("template", { slot: "title" }, [_vm._v("item quatre")]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "2-4-1" } }, [
                    _vm._v("item un")
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "2-4-2" } }, [
                    _vm._v("item deux")
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "2-4-3" } }, [
                    _vm._v("item trois")
                  ])
                ],
                2
              )
            ],
            2
          ),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "3", disabled: "" } }, [
            _vm._v("Infos")
          ]),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "4" } }, [
            _c(
              "a",
              { attrs: { href: "https://www.ele.me", target: "_blank" } },
              [_vm._v("Commandes")]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "line" }),
      _vm._v(" "),
      _c(
        "el-menu",
        {
          staticClass: "el-menu-demo",
          attrs: {
            "default-active": _vm.activeIndex2,
            mode: "horizontal",
            "background-color": "#545c64",
            "text-color": "#fff",
            "active-text-color": "#ffd04b"
          },
          on: { select: _vm.handleSelect }
        },
        [
          _c("el-menu-item", { attrs: { index: "1" } }, [
            _vm._v("Centre de traitement")
          ]),
          _vm._v(" "),
          _c(
            "el-submenu",
            { attrs: { index: "2" } },
            [
              _c("template", { slot: "title" }, [_vm._v("Lieu de travail")]),
              _vm._v(" "),
              _c("el-menu-item", { attrs: { index: "2-1" } }, [
                _vm._v("item un")
              ]),
              _vm._v(" "),
              _c("el-menu-item", { attrs: { index: "2-2" } }, [
                _vm._v("item deux")
              ]),
              _vm._v(" "),
              _c("el-menu-item", { attrs: { index: "2-3" } }, [
                _vm._v("item trois")
              ]),
              _vm._v(" "),
              _c(
                "el-submenu",
                { attrs: { index: "2-4" } },
                [
                  _c("template", { slot: "title" }, [_vm._v("item quatre")]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "2-4-1" } }, [
                    _vm._v("item un")
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "2-4-2" } }, [
                    _vm._v("item deux")
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "2-4-3" } }, [
                    _vm._v("item trois")
                  ])
                ],
                2
              )
            ],
            2
          ),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "3", disabled: "" } }, [
            _vm._v("Info")
          ]),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "4" } }, [
            _c(
              "a",
              { attrs: { href: "https://www.ele.me", target: "_blank" } },
              [_vm._v("Commandes")]
            )
          ])
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
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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
      _c(
        "el-row",
        { staticClass: "tac" },
        [
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("h5", [_vm._v("Couleurs par défaut")]),
              _vm._v(" "),
              _c(
                "el-menu",
                {
                  staticClass: "el-menu-vertical-demo",
                  attrs: { "default-active": "2" },
                  on: { open: _vm.handleOpen, close: _vm.handleClose }
                },
                [
                  _c(
                    "el-submenu",
                    { attrs: { index: "1" } },
                    [
                      _c("template", { slot: "title" }, [
                        _c("i", { staticClass: "el-icon-location" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Navigateur Un")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        { attrs: { title: "Group Un" } },
                        [
                          _c("el-menu-item", { attrs: { index: "1-1" } }, [
                            _vm._v("item un")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "1-2" } }, [
                            _vm._v("item un")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        { attrs: { title: "Group Deux" } },
                        [
                          _c("el-menu-item", { attrs: { index: "1-3" } }, [
                            _vm._v("item trois")
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
                            _vm._v("item quatre")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "1-4-1" } }, [
                            _vm._v("item un")
                          ])
                        ],
                        2
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "2" } }, [
                    _c("i", { staticClass: "el-icon-menu" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Navigateur Deux")])
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "3", disabled: "" } }, [
                    _c("i", { staticClass: "el-icon-document" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Navigateur Trois")])
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "4" } }, [
                    _c("i", { staticClass: "el-icon-setting" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Navigateur Quatre")])
                  ])
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
              _c("h5", [_vm._v("Couleurs personnalisées")]),
              _vm._v(" "),
              _c(
                "el-menu",
                {
                  staticClass: "el-menu-vertical-demo",
                  attrs: {
                    "default-active": "2",
                    "background-color": "#545c64",
                    "text-color": "#fff",
                    "active-text-color": "#ffd04b"
                  },
                  on: { open: _vm.handleOpen, close: _vm.handleClose }
                },
                [
                  _c(
                    "el-submenu",
                    { attrs: { index: "1" } },
                    [
                      _c("template", { slot: "title" }, [
                        _c("i", { staticClass: "el-icon-location" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Navigateur Un")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        { attrs: { title: "Group Un" } },
                        [
                          _c("el-menu-item", { attrs: { index: "1-1" } }, [
                            _vm._v("item un")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "1-2" } }, [
                            _vm._v("item un")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-menu-item-group",
                        { attrs: { title: "Group Deux" } },
                        [
                          _c("el-menu-item", { attrs: { index: "1-3" } }, [
                            _vm._v("item trois")
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
                            _vm._v("item quatre")
                          ]),
                          _vm._v(" "),
                          _c("el-menu-item", { attrs: { index: "1-4-1" } }, [
                            _vm._v("item un")
                          ])
                        ],
                        2
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "2" } }, [
                    _c("i", { staticClass: "el-icon-menu" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Navigateur Deux")])
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "3", disabled: "" } }, [
                    _c("i", { staticClass: "el-icon-document" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Navigateur Trois")])
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "4" } }, [
                    _c("i", { staticClass: "el-icon-setting" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Navigateur Quatre")])
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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
        "el-radio-group",
        {
          staticStyle: { "margin-bottom": "20px" },
          model: {
            value: _vm.isCollapse,
            callback: function($$v) {
              _vm.isCollapse = $$v
            },
            expression: "isCollapse"
          }
        },
        [
          _c("el-radio-button", { attrs: { label: false } }, [
            _vm._v("Agrandir")
          ]),
          _vm._v(" "),
          _c("el-radio-button", { attrs: { label: true } }, [_vm._v("Réduire")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-menu",
        {
          staticClass: "el-menu-vertical-demo",
          attrs: { "default-active": "2", collapse: _vm.isCollapse },
          on: { open: _vm.handleOpen, close: _vm.handleClose }
        },
        [
          _c(
            "el-submenu",
            { attrs: { index: "1" } },
            [
              _c("template", { slot: "title" }, [
                _c("i", { staticClass: "el-icon-location" }),
                _vm._v(" "),
                _c("span", { attrs: { slot: "title" }, slot: "title" }, [
                  _vm._v("Navigateur Un")
                ])
              ]),
              _vm._v(" "),
              _c(
                "el-menu-item-group",
                [
                  _c("span", { attrs: { slot: "title" }, slot: "title" }, [
                    _vm._v("Group Un")
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "1-1" } }, [
                    _vm._v("item un")
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "1-2" } }, [
                    _vm._v("item deux")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-menu-item-group",
                { attrs: { title: "Group Deux" } },
                [
                  _c("el-menu-item", { attrs: { index: "1-3" } }, [
                    _vm._v("item trois")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-submenu",
                { attrs: { index: "1-4" } },
                [
                  _c("span", { attrs: { slot: "title" }, slot: "title" }, [
                    _vm._v("item quatre")
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "1-4-1" } }, [
                    _vm._v("item un")
                  ])
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "2" } }, [
            _c("i", { staticClass: "el-icon-menu" }),
            _vm._v(" "),
            _c("span", { attrs: { slot: "title" }, slot: "title" }, [
              _vm._v("Navigateur Deux")
            ])
          ]),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "3", disabled: "" } }, [
            _c("i", { staticClass: "el-icon-document" }),
            _vm._v(" "),
            _c("span", { attrs: { slot: "title" }, slot: "title" }, [
              _vm._v("Navigateur Trois")
            ])
          ]),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "4" } }, [
            _c("i", { staticClass: "el-icon-setting" }),
            _vm._v(" "),
            _c("span", { attrs: { slot: "title" }, slot: "title" }, [
              _vm._v("Navigateur Quatre")
            ])
          ])
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
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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