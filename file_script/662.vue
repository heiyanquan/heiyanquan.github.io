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
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.dialogVisible = true
            }
          }
        },
        [_vm._v("Cliquez pour ouvrir le modal")]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Tips",
            visible: _vm.dialogVisible,
            width: "30%",
            "before-close": _vm.handleClose
          },
          on: {
            "update:visible": function($event) {
              _vm.dialogVisible = $event
            }
          }
        },
        [
          _c("span", [_vm._v("Ceci est un message")]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.dialogVisible = false
                    }
                  }
                },
                [_vm._v("Annuler")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.dialogVisible = false
                    }
                  }
                },
                [_vm._v("Confirmer")]
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
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Voulez-vous vraiment quitter ?')
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
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.dialogTableVisible = true
            }
          }
        },
        [_vm._v("Ouvrir un modal avec tableau")]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Adresse d'expédition",
            visible: _vm.dialogTableVisible
          },
          on: {
            "update:visible": function($event) {
              _vm.dialogTableVisible = $event
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
                attrs: { property: "name", label: "Nom", width: "200" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { property: "address", label: "Adresse" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.dialogFormVisible = true
            }
          }
        },
        [_vm._v("Ouvrir un modal avec formulaire")]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Adresse d'expédition",
            visible: _vm.dialogFormVisible
          },
          on: {
            "update:visible": function($event) {
              _vm.dialogFormVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.form } },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "Nom de promotion",
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
                  attrs: { label: "Zones", "label-width": _vm.formLabelWidth }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "Sélectionnez une zone" },
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
                        attrs: { label: "Zone No.1", value: "shanghai" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "Zone No.2", value: "beijing" }
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
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.dialogFormVisible = false
                    }
                  }
                },
                [_vm._v("Annuler")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.dialogFormVisible = false
                    }
                  }
                },
                [_vm._v("Confirmer")]
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
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px'
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
      [
        _c(
          "el-button",
          {
            attrs: { type: "text" },
            on: {
              click: function($event) {
                _vm.outerVisible = true
              }
            }
          },
          [_vm._v("Ouvrir le modal extérieur")]
        ),
        _vm._v(" "),
        _c(
          "el-dialog",
          {
            attrs: { title: "Modal extérieur", visible: _vm.outerVisible },
            on: {
              "update:visible": function($event) {
                _vm.outerVisible = $event
              }
            }
          },
          [
            _c("el-dialog", {
              attrs: {
                width: "30%",
                title: "Modal intérieur",
                visible: _vm.innerVisible,
                "append-to-body": ""
              },
              on: {
                "update:visible": function($event) {
                  _vm.innerVisible = $event
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer"
              },
              [
                _c(
                  "el-button",
                  {
                    on: {
                      click: function($event) {
                        _vm.outerVisible = false
                      }
                    }
                  },
                  [_vm._v("Annuler")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary" },
                    on: {
                      click: function($event) {
                        _vm.innerVisible = true
                      }
                    }
                  },
                  [_vm._v("Ouvrir le modal intérieur")]
                )
              ],
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

  
    const democomponentExport = {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
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
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.centerDialogVisible = true
            }
          }
        },
        [_vm._v("Cliquez pour ouvrir le modal")]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Attention",
            visible: _vm.centerDialogVisible,
            width: "30%",
            center: ""
          },
          on: {
            "update:visible": function($event) {
              _vm.centerDialogVisible = $event
            }
          }
        },
        [
          _c("span", [
            _vm._v("Le contenu du modal n'est pas centré par défaut.")
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.centerDialogVisible = false
                    }
                  }
                },
                [_vm._v("Annuler")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.centerDialogVisible = false
                    }
                  }
                },
                [_vm._v("Confirmer")]
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
        centerDialogVisible: false
      };
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