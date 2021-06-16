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
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "Date", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "Adresse" }
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
      data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
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
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, stripe: "" }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "Date", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "Adresse" }
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
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
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
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, border: "" }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "Date", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "Adresse" }
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
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
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
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: {
              data: _vm.tableData,
              "row-class-name": _vm.tableRowClassName
            }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "Date", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "Adresse" }
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
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData:  [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
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
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, height: "250" }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "Date", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "Adresse" }
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
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
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
      [
        _c(
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { fixed: "", prop: "date", label: "Date", width: "150" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "state", label: "État", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "city", label: "Ville", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "Adresse", width: "300" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "zip", label: "Zip", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { fixed: "right", label: "Opérations", width: "120" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "text", size: "small" },
                          on: { click: _vm.handleClick }
                        },
                        [_vm._v("Detail")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        { attrs: { type: "text", size: "small" } },
                        [_vm._v("Editer")]
                      )
                    ]
                  }
                }
              ])
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
      handleClick() {
        console.log('click');
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }]
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo6": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, height: "250" }
          },
          [
            _c("el-table-column", {
              attrs: { fixed: "", prop: "date", label: "Date", width: "150" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "state", label: "État", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "city", label: "Ville", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "Adresse", width: "300" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "zip", label: "Zip", width: "120" }
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
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo7": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, "max-height": "250" }
          },
          [
            _c("el-table-column", {
              attrs: { fixed: "", prop: "date", label: "Date", width: "150" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "state", label: "État", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "city", label: "Ville", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "Adresse", width: "300" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "zip", label: "Zip", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { fixed: "right", label: "Opérations", width: "120" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "text", size: "small" },
                          nativeOn: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.deleteRow(scope.$index, _vm.tableData)
                            }
                          }
                        },
                        [_vm._v("\n          Supprimer\n        ")]
                      )
                    ]
                  }
                }
              ])
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
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo8": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "Date", width: "150" }
            }),
            _vm._v(" "),
            _c(
              "el-table-column",
              { attrs: { label: "Informations de livraison" } },
              [
                _c("el-table-column", {
                  attrs: { prop: "name", label: "Nom", width: "120" }
                }),
                _vm._v(" "),
                _c(
                  "el-table-column",
                  { attrs: { label: "Informations d'adresse" } },
                  [
                    _c("el-table-column", {
                      attrs: { prop: "state", label: "État", width: "120" }
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: { prop: "city", label: "Ville", width: "120" }
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: { prop: "address", label: "Adresse", width: "300" }
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: { prop: "zip", label: "Zip", width: "120" }
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
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo9": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            ref: "singleTable",
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, "highlight-current-row": "" },
            on: { "current-change": _vm.handleCurrentChange }
          },
          [
            _c("el-table-column", { attrs: { type: "index", width: "50" } }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { property: "date", label: "Date", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { property: "name", label: "Nom", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { property: "address", label: "Adresse" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "margin-top": "20px" } },
          [
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.setCurrent(_vm.tableData[1])
                  }
                }
              },
              [_vm._v("Sélectionner la deuxième ligne")]
            ),
            _vm._v(" "),
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.setCurrent()
                  }
                }
              },
              [_vm._v("Effacer la sélection")]
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
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo10": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            ref: "multipleTable",
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData },
            on: { "selection-change": _vm.handleSelectionChange }
          },
          [
            _c("el-table-column", {
              attrs: { type: "selection", width: "55" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "Date", width: "120" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [_vm._v(_vm._s(scope.row.date))]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { property: "name", label: "Nom", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: {
                property: "address",
                label: "Adresse",
                "show-overflow-tooltip": ""
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "margin-top": "20px" } },
          [
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.toggleSelection([_vm.tableData[1], _vm.tableData[2]])
                  }
                }
              },
              [_vm._v("Sélectionner les deuxième et troisième lignes")]
            ),
            _vm._v(" "),
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.toggleSelection()
                  }
                }
              },
              [_vm._v("Effacer la sélection")]
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
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo11": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: {
              data: _vm.tableData,
              "default-sort": { prop: "date", order: "descending" }
            }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "Date", sortable: "", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: {
                prop: "address",
                label: "Adresse",
                formatter: _vm.formatter
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
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo12": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-button", { on: { click: _vm.resetDateFilter } }, [
          _vm._v("Effacer le filtre date")
        ]),
        _vm._v(" "),
        _c("el-button", { on: { click: _vm.clearFilter } }, [
          _vm._v("Effacer tout les filtres")
        ]),
        _vm._v(" "),
        _c(
          "el-table",
          {
            ref: "filterTable",
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData }
          },
          [
            _c("el-table-column", {
              attrs: {
                prop: "date",
                label: "Date",
                sortable: "",
                width: "180",
                "column-key": "date",
                filters: [
                  { text: "2016-05-01", value: "2016-05-01" },
                  { text: "2016-05-02", value: "2016-05-02" },
                  { text: "2016-05-03", value: "2016-05-03" },
                  { text: "2016-05-04", value: "2016-05-04" }
                ],
                "filter-method": _vm.filterHandler
              }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: {
                prop: "address",
                label: "Adresse",
                formatter: _vm.formatter
              }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: {
                prop: "tag",
                label: "Tag",
                width: "100",
                filters: [
                  { text: "Home", value: "Home" },
                  { text: "Office", value: "Office" }
                ],
                "filter-method": _vm.filterTag,
                "filter-placement": "bottom-end"
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-tag",
                        {
                          attrs: {
                            type:
                              scope.row.tag === "Home" ? "primary" : "success",
                            "disable-transitions": ""
                          }
                        },
                        [_vm._v(_vm._s(scope.row.tag))]
                      )
                    ]
                  }
                }
              ])
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
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }]
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo13": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { label: "Date", width: "180" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c("i", { staticClass: "el-icon-time" }),
                      _vm._v(" "),
                      _c("span", { staticStyle: { "margin-left": "10px" } }, [
                        _vm._v(_vm._s(scope.row.date))
                      ])
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "Nom", width: "180" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-popover",
                        { attrs: { trigger: "hover", placement: "top" } },
                        [
                          _c("p", [_vm._v("Nom: " + _vm._s(scope.row.name))]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Addr: " + _vm._s(scope.row.address))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "name-wrapper",
                              attrs: { slot: "reference" },
                              slot: "reference"
                            },
                            [
                              _c("el-tag", { attrs: { size: "medium" } }, [
                                _vm._v(_vm._s(scope.row.name))
                              ])
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "Opérations" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-button",
                        {
                          attrs: { size: "mini" },
                          on: {
                            click: function($event) {
                              _vm.handleEdit(scope.$index, scope.row)
                            }
                          }
                        },
                        [_vm._v("Editer")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        {
                          attrs: { size: "mini", type: "danger" },
                          on: {
                            click: function($event) {
                              _vm.handleDelete(scope.$index, scope.row)
                            }
                          }
                        },
                        [_vm._v("Supprimer")]
                      )
                    ]
                  }
                }
              ])
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
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo14": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: {
              data: _vm.tableData.filter(function(data) {
                return (
                  !_vm.search ||
                  data.name.toLowerCase().includes(_vm.search.toLowerCase())
                )
              })
            }
          },
          [
            _c("el-table-column", { attrs: { label: "Date", prop: "date" } }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { label: "Name", prop: "name" } }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { align: "right" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function(scope) {
                    return [
                      _c("el-input", {
                        attrs: { size: "mini", placeholder: "Type to search" },
                        model: {
                          value: _vm.search,
                          callback: function($$v) {
                            _vm.search = $$v
                          },
                          expression: "search"
                        }
                      })
                    ]
                  }
                },
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-button",
                        {
                          attrs: { size: "mini" },
                          on: {
                            click: function($event) {
                              _vm.handleEdit(scope.$index, scope.row)
                            }
                          }
                        },
                        [_vm._v("Editer")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        {
                          attrs: { size: "mini", type: "danger" },
                          on: {
                            click: function($event) {
                              _vm.handleDelete(scope.$index, scope.row)
                            }
                          }
                        },
                        [_vm._v("Supprimer")]
                      )
                    ]
                  }
                }
              ])
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
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Jessy',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        search: '',
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo15": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { type: "expand" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(props) {
                    return [
                      _c("p", [_vm._v("État: " + _vm._s(props.row.state))]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Ville: " + _vm._s(props.row.city))]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("Adresse: " + _vm._s(props.row.address))
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Zip: " + _vm._s(props.row.zip))])
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { label: "Date", prop: "date" } }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { label: "Nom", prop: "name" } })
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
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo16": (function() {
    
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
          [
            _c(
              "el-table",
              {
                staticStyle: { width: "100%", "margin-bottom": "20px" },
                attrs: {
                  data: _vm.tableData,
                  "row-key": "id",
                  border: "",
                  "default-expand-all": ""
                }
              },
              [
                _c("el-table-column", {
                  attrs: {
                    prop: "date",
                    label: "date",
                    sortable: "",
                    width: "180"
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    prop: "name",
                    label: "Nom",
                    sortable: "",
                    width: "180"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-table",
              {
                staticStyle: { width: "100%" },
                attrs: {
                  data: _vm.tableData1,
                  "row-key": "id",
                  border: "",
                  lazy: "",
                  load: _vm.load,
                  "tree-props": {
                    children: "children",
                    hasChildren: "hasChildren"
                  }
                }
              },
              [
                _c("el-table-column", {
                  attrs: { prop: "date", label: "Date", width: "180" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "name", label: "Nom", width: "180" }
                })
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
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu'
        }, {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu'
        }, {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }, {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu'
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu'
        }, {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu'
        }, {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu'
        }]
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }, {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }
          ])
        }, 1000)
      }
    },
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo17": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, border: "", "show-summary": "" }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "id", label: "ID", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { prop: "name", label: "Nom" } }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount1", sortable: "", label: "Quantité 1" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount2", sortable: "", label: "Quantité 2" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount3", sortable: "", label: "Quantité 3" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-table",
          {
            staticStyle: { width: "100%", "margin-top": "20px" },
            attrs: {
              data: _vm.tableData,
              border: "",
              height: "200",
              "summary-method": _vm.getSummaries,
              "show-summary": ""
            }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "id", label: "ID", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { prop: "name", label: "Nom" } }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount1", label: "Coût 1 ($)" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount2", label: "Coût 2 ($)" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount3", label: "Coût 3 ($)" }
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
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Coût total';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = '$ ' + values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo18": (function() {
    
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
          [
            _c(
              "el-table",
              {
                staticStyle: { width: "100%" },
                attrs: {
                  data: _vm.tableData,
                  "span-method": _vm.arraySpanMethod,
                  border: ""
                }
              },
              [
                _c("el-table-column", {
                  attrs: { prop: "id", label: "ID", width: "180" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "name", label: "Nom" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount1", sortable: "", label: "Quantité 1" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount2", sortable: "", label: "Quantité 2" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount3", sortable: "", label: "Quantité 3" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-table",
              {
                staticStyle: { width: "100%", "margin-top": "20px" },
                attrs: {
                  data: _vm.tableData,
                  "span-method": _vm.objectSpanMethod,
                  border: ""
                }
              },
              [
                _c("el-table-column", {
                  attrs: { prop: "id", label: "ID", width: "180" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "name", label: "Nom" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount1", label: "Quantité 1" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount2", label: "Quantité 2" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount3", label: "Quantité 3" }
                })
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
        tableData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo19": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { type: "index", index: _vm.indexMethod }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "date", label: "Date", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "Nom", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "Adresse" }
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
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }],
      }
    },
    methods: {
      indexMethod(index) {
        return index * 2;
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