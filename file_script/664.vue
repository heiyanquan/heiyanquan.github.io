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
            _c("span", { staticClass: "demonstration" }, [_vm._v("Défaut")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: { type: "date", placeholder: "Choississez un jour" },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
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
              _vm._v("Picker avec raccourcis")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "Choississez un jour",
                "picker-options": _vm.pickerOptions
              },
              model: {
                value: _vm.value2,
                callback: function($$v) {
                  _vm.value2 = $$v
                },
                expression: "value2"
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
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: 'Aujourd\'hui',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Hier',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'Il y a une semaine',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
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
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("Semaine")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: {
              type: "week",
              format: "Week WW",
              placeholder: "Sélectionnez une semaine"
            },
            model: {
              value: _vm.value1,
              callback: function($$v) {
                _vm.value1 = $$v
              },
              expression: "value1"
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
          _c("span", { staticClass: "demonstration" }, [_vm._v("Mois")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: { type: "month", placeholder: "Sélectionnez un mois" },
            model: {
              value: _vm.value2,
              callback: function($$v) {
                _vm.value2 = $$v
              },
              expression: "value2"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("Année")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: { type: "year", placeholder: "Sélectionnez une année" },
            model: {
              value: _vm.value3,
              callback: function($$v) {
                _vm.value3 = $$v
              },
              expression: "value3"
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
          _c("span", { staticClass: "demonstration" }, [_vm._v("Dates")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: {
              type: "dates",
              placeholder: "Sélectionnez une ou plusieurs dates"
            },
            model: {
              value: _vm.value4,
              callback: function($$v) {
                _vm.value4 = $$v
              },
              expression: "value4"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
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
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [_vm._v("Défaut")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                "range-separator": "à",
                "start-placeholder": "Date de début",
                "end-placeholder": "Date de fin"
              },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
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
              _vm._v("Avec des options")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                align: "right",
                "unlink-panels": "",
                "range-separator": "à",
                "start-placeholder": "Date de début",
                "end-placeholder": "Date de fin",
                "picker-options": _vm.pickerOptions
              },
              model: {
                value: _vm.value2,
                callback: function($$v) {
                  _vm.value2 = $$v
                },
                expression: "value2"
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
        pickerOptions: {
          shortcuts: [{
            text: 'Semaine dernière',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Mois dernier',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Trois derniers mois',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
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
            _c("span", { staticClass: "demonstration" }, [_vm._v("Défaut")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "monthrange",
                "range-separator": "à",
                "start-placeholder": "Mois de début",
                "end-placeholder": "Mois de fin"
              },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
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
              _vm._v("Avec options")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "monthrange",
                align: "right",
                "unlink-panels": "",
                "range-separator": "à",
                "start-placeholder": "Mois de début",
                "end-placeholder": "Mois de fin",
                "picker-options": _vm.pickerOptions
              },
              model: {
                value: _vm.value2,
                callback: function($$v) {
                  _vm.value2 = $$v
                },
                expression: "value2"
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
        pickerOptions: {
          shortcuts: [{
            text: 'Ce mois',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: 'Cette année',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Les derniers 6 mois',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
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
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [_vm._v("Date")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "Sélectionnez une date",
                "default-value": "2010-10-01"
              },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
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
              _vm._v("Plage de dates")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                align: "right",
                "start-placeholder": "Date de début",
                "end-placeholder": "Date de fin",
                "default-value": "2010-10-01"
              },
              model: {
                value: _vm.value2,
                callback: function($$v) {
                  _vm.value2 = $$v
                },
                expression: "value2"
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
        value1: '',
        value2: ''
      };
    }
  };
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
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [
              _vm._v("Émet un objet Date")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "demonstration" }, [
              _vm._v("Value: " + _vm._s(_vm.value1))
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "Sélectionnez une date",
                format: "yyyy/MM/dd"
              },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
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
              _vm._v("Utilise value-format")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "demonstration" }, [
              _vm._v("Value: " + _vm._s(_vm.value2))
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "Sélectionnez une date",
                format: "yyyy/MM/dd",
                "value-format": "yyyy-MM-dd"
              },
              model: {
                value: _vm.value2,
                callback: function($$v) {
                  _vm.value2 = $$v
                },
                expression: "value2"
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
            _c("span", { staticClass: "demonstration" }, [_vm._v("Timestamp")]),
            _vm._v(" "),
            _c("div", { staticClass: "demonstration" }, [
              _vm._v("Value：" + _vm._s(_vm.value3))
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "Sélectionnez une date",
                format: "yyyy/MM/dd",
                "value-format": "timestamp"
              },
              model: {
                value: _vm.value3,
                callback: function($$v) {
                  _vm.value3 = $$v
                },
                expression: "value3"
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
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
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
          "div",
          { staticClass: "block" },
          [
            _c("p", [_vm._v("Valeur: " + _vm._s(_vm.value))]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                "start-placeholder": "Date de début",
                "end-placeholder": "Date de fin",
                "default-time": ["00:00:00", "23:59:59"]
              },
              model: {
                value: _vm.value,
                callback: function($$v) {
                  _vm.value = $$v
                },
                expression: "value"
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
        value: ''
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