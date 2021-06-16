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
        "el-radio-group",
        {
          model: {
            value: _vm.direction,
            callback: function($$v) {
              _vm.direction = $$v
            },
            expression: "direction"
          }
        },
        [
          _c("el-radio", { attrs: { label: "ltr" } }, [
            _vm._v("left to right")
          ]),
          _vm._v(" "),
          _c("el-radio", { attrs: { label: "rtl" } }, [
            _vm._v("right to left")
          ]),
          _vm._v(" "),
          _c("el-radio", { attrs: { label: "ttb" } }, [
            _vm._v("top to bottom")
          ]),
          _vm._v(" "),
          _c("el-radio", { attrs: { label: "btt" } }, [_vm._v("bottom to top")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-button",
        {
          staticStyle: { "margin-left": "16px" },
          attrs: { type: "primary" },
          on: {
            click: function($event) {
              _vm.drawer = true
            }
          }
        },
        [_vm._v("\n  open\n")]
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "I am the title",
            visible: _vm.drawer,
            direction: _vm.direction,
            "before-close": _vm.handleClose
          },
          on: {
            "update:visible": function($event) {
              _vm.drawer = $event
            }
          }
        },
        [_c("span", [_vm._v("Hi, there!")])]
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
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure you want to close this?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
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
        "el-button",
        {
          staticStyle: { "margin-left": "16px" },
          attrs: { type: "primary" },
          on: {
            click: function($event) {
              _vm.drawer = true
            }
          }
        },
        [_vm._v("\n  open\n")]
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "I am the title",
            visible: _vm.drawer,
            "with-header": false
          },
          on: {
            "update:visible": function($event) {
              _vm.drawer = $event
            }
          }
        },
        [_c("span", [_vm._v("Hi there!")])]
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
        drawer: false,
      };
    }
  };
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
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.table = true
            }
          }
        },
        [_vm._v("Open Drawer with nested table")]
      ),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.dialog = true
            }
          }
        },
        [_vm._v("Open Drawer with nested form")]
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "I have a nested table inside!",
            visible: _vm.table,
            direction: "rtl",
            size: "50%"
          },
          on: {
            "update:visible": function($event) {
              _vm.table = $event
            }
          }
        },
        [
          _c(
            "el-table",
            { attrs: { data: _vm.gridData } },
            [
              _c("el-table-column", {
                attrs: { property: "date", label: "Date", width: "150" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { property: "name", label: "Name", width: "200" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { property: "address", label: "Address" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          ref: "drawer",
          attrs: {
            title: "I have a nested form inside!",
            "before-close": _vm.handleClose,
            visible: _vm.dialog,
            direction: "ltr",
            "custom-class": "demo-drawer"
          },
          on: {
            "update:visible": function($event) {
              _vm.dialog = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "demo-drawer__content" },
            [
              _c(
                "el-form",
                { attrs: { model: _vm.form } },
                [
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "Name",
                        "label-width": _vm.formLabelWidth
                      }
                    },
                    [
                      _c("el-input", {
                        attrs: { autocomplete: "off" },
                        model: {
                          value: _vm.form.name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "Area",
                        "label-width": _vm.formLabelWidth
                      }
                    },
                    [
                      _c(
                        "el-select",
                        {
                          attrs: { placeholder: "Please select activity area" },
                          model: {
                            value: _vm.form.region,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "region", $$v)
                            },
                            expression: "form.region"
                          }
                        },
                        [
                          _c("el-option", {
                            attrs: { label: "Area1", value: "shanghai" }
                          }),
                          _vm._v(" "),
                          _c("el-option", {
                            attrs: { label: "Area2", value: "beijing" }
                          })
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
                "div",
                { staticClass: "demo-drawer__footer" },
                [
                  _c("el-button", { on: { click: _vm.cancelForm } }, [
                    _vm._v("Cancel")
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary", loading: _vm.loading },
                      on: {
                        click: function($event) {
                          _vm.$refs.drawer.closeDrawer()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.loading ? "Submitting ..." : "Submit"))]
                  )
                ],
                1
              )
            ],
            1
          )
        ]
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
      table: false,
      dialog: false,
      loading: false,
      gridData: [{
        date: '2016-05-02',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-04',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-01',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-03',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      timer: null,
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('Do you want to submit?')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // animation takes time
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
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
      _c(
        "el-button",
        {
          staticStyle: { "margin-left": "16px" },
          attrs: { type: "primary" },
          on: {
            click: function($event) {
              _vm.drawer = true
            }
          }
        },
        [_vm._v("\n  open\n")]
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "I'm outer Drawer",
            visible: _vm.drawer,
            size: "50%"
          },
          on: {
            "update:visible": function($event) {
              _vm.drawer = $event
            }
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.innerDrawer = true
                    }
                  }
                },
                [_vm._v("Click me!")]
              ),
              _vm._v(" "),
              _c(
                "el-drawer",
                {
                  attrs: {
                    title: "I'm inner Drawer",
                    "append-to-body": true,
                    "before-close": _vm.handleClose,
                    visible: _vm.innerDrawer
                  },
                  on: {
                    "update:visible": function($event) {
                      _vm.innerDrawer = $event
                    }
                  }
                },
                [_c("p", [_vm._v("_(:зゝ∠)_")])]
              )
            ],
            1
          )
        ]
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
        drawer: false,
        innerDrawer: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('You still have unsaved data, proceed?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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