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
      _c("el-input", {
        attrs: { placeholder: "Entrez quelque chose" },
        model: {
          value: _vm.input,
          callback: function($$v) {
            _vm.input = $$v
          },
          expression: "input"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
  data() {
    return {
      input: ''
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
      _c("el-input", {
        attrs: { placeholder: "Entrez quelque chose", disabled: true },
        model: {
          value: _vm.input,
          callback: function($$v) {
            _vm.input = $$v
          },
          expression: "input"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
  data() {
    return {
      input: ''
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
      _c("el-input", {
        attrs: { placeholder: "Entrez quelque chose", clearable: "" },
        model: {
          value: _vm.input,
          callback: function($$v) {
            _vm.input = $$v
          },
          expression: "input"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
  data() {
    return {
      input: ''
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
      _c("el-input", {
        attrs: {
          placeholder: "Entrez votre mot de passe",
          "show-password": ""
        },
        model: {
          value: _vm.input,
          callback: function($$v) {
            _vm.input = $$v
          },
          expression: "input"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        input: ''
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "demo-input-suffix" },
      [
        _c("span", { staticClass: "demo-input-label" }, [
          _vm._v("Avec les attributs")
        ]),
        _vm._v(" "),
        _c("el-input", {
          attrs: {
            placeholder: "Entrez une date",
            "suffix-icon": "el-icon-date"
          },
          model: {
            value: _vm.input1,
            callback: function($$v) {
              _vm.input1 = $$v
            },
            expression: "input1"
          }
        }),
        _vm._v(" "),
        _c("el-input", {
          attrs: {
            placeholder: "Entrez du texte",
            "prefix-icon": "el-icon-search"
          },
          model: {
            value: _vm.input2,
            callback: function($$v) {
              _vm.input2 = $$v
            },
            expression: "input2"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "demo-input-suffix" },
      [
        _c("span", { staticClass: "demo-input-label" }, [
          _vm._v("Avec les slots")
        ]),
        _vm._v(" "),
        _c(
          "el-input",
          {
            attrs: { placeholder: "Entrez une date" },
            model: {
              value: _vm.input3,
              callback: function($$v) {
                _vm.input3 = $$v
              },
              expression: "input3"
            }
          },
          [
            _c("i", {
              staticClass: "el-input__icon el-icon-date",
              attrs: { slot: "suffix" },
              slot: "suffix"
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "el-input",
          {
            attrs: { placeholder: "Entrez du texte" },
            model: {
              value: _vm.input4,
              callback: function($$v) {
                _vm.input4 = $$v
              },
              expression: "input4"
            }
          },
          [
            _c("i", {
              staticClass: "el-input__icon el-icon-search",
              attrs: { slot: "prefix" },
              slot: "prefix"
            })
          ]
        )
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
      input1: '',
      input2: '',
      input3: '',
      input4: ''
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
      _c("el-input", {
        attrs: {
          type: "textarea",
          rows: 2,
          placeholder: "Entrez quelque chose"
        },
        model: {
          value: _vm.textarea,
          callback: function($$v) {
            _vm.textarea = $$v
          },
          expression: "textarea"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
  data() {
    return {
      textarea: ''
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
      _c("el-input", {
        attrs: {
          type: "textarea",
          autosize: "",
          placeholder: "Entrez quelque chose"
        },
        model: {
          value: _vm.textarea1,
          callback: function($$v) {
            _vm.textarea1 = $$v
          },
          expression: "textarea1"
        }
      }),
      _vm._v(" "),
      _c("div", { staticStyle: { margin: "20px 0" } }),
      _vm._v(" "),
      _c("el-input", {
        attrs: {
          type: "textarea",
          autosize: { minRows: 2, maxRows: 4 },
          placeholder: "Entrez quelque chose"
        },
        model: {
          value: _vm.textarea2,
          callback: function($$v) {
            _vm.textarea2 = $$v
          },
          expression: "textarea2"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
  data() {
    return {
      textarea1: '',
      textarea2: ''
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
  return _c("div", [
    _c(
      "div",
      [
        _c(
          "el-input",
          {
            attrs: { placeholder: "Entrez quelque chose" },
            model: {
              value: _vm.input1,
              callback: function($$v) {
                _vm.input1 = $$v
              },
              expression: "input1"
            }
          },
          [_c("template", { slot: "prepend" }, [_vm._v("Http://")])],
          2
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { "margin-top": "15px" } },
      [
        _c(
          "el-input",
          {
            attrs: { placeholder: "Entrez quelque chose" },
            model: {
              value: _vm.input2,
              callback: function($$v) {
                _vm.input2 = $$v
              },
              expression: "input2"
            }
          },
          [_c("template", { slot: "append" }, [_vm._v(".com")])],
          2
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { "margin-top": "15px" } },
      [
        _c(
          "el-input",
          {
            staticClass: "input-with-select",
            attrs: { placeholder: "Entrez quelque chose" },
            model: {
              value: _vm.input3,
              callback: function($$v) {
                _vm.input3 = $$v
              },
              expression: "input3"
            }
          },
          [
            _c(
              "el-select",
              {
                attrs: { slot: "prepend", placeholder: "Choisir" },
                slot: "prepend",
                model: {
                  value: _vm.select,
                  callback: function($$v) {
                    _vm.select = $$v
                  },
                  expression: "select"
                }
              },
              [
                _c("el-option", { attrs: { label: "Restaurant", value: "1" } }),
                _vm._v(" "),
                _c("el-option", {
                  attrs: { label: "Num. Commande", value: "2" }
                }),
                _vm._v(" "),
                _c("el-option", { attrs: { label: "Tel", value: "3" } })
              ],
              1
            ),
            _vm._v(" "),
            _c("el-button", {
              attrs: { slot: "append", icon: "el-icon-search" },
              slot: "append"
            })
          ],
          1
        )
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
      input1: '',
      input2: '',
      input3: '',
      select: ''
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "demo-input-size" },
      [
        _c("el-input", {
          attrs: { placeholder: "Entrez quelque chose" },
          model: {
            value: _vm.input1,
            callback: function($$v) {
              _vm.input1 = $$v
            },
            expression: "input1"
          }
        }),
        _vm._v(" "),
        _c("el-input", {
          attrs: { size: "medium", placeholder: "Entrez quelque chose" },
          model: {
            value: _vm.input2,
            callback: function($$v) {
              _vm.input2 = $$v
            },
            expression: "input2"
          }
        }),
        _vm._v(" "),
        _c("el-input", {
          attrs: { size: "small", placeholder: "Entrez quelque chose" },
          model: {
            value: _vm.input3,
            callback: function($$v) {
              _vm.input3 = $$v
            },
            expression: "input3"
          }
        }),
        _vm._v(" "),
        _c("el-input", {
          attrs: { size: "mini", placeholder: "Entrez quelque chose" },
          model: {
            value: _vm.input4,
            callback: function($$v) {
              _vm.input4 = $$v
            },
            expression: "input4"
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
      input1: '',
      input2: '',
      input3: '',
      input4: ''
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
      _c(
        "el-row",
        { staticClass: "demo-autocomplete" },
        [
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("div", { staticClass: "sub-title" }, [
                _vm._v("Liste des suggestions au focus")
              ]),
              _vm._v(" "),
              _c("el-autocomplete", {
                staticClass: "inline-input",
                attrs: {
                  "fetch-suggestions": _vm.querySearch,
                  placeholder: "Entrez quelque chose"
                },
                on: { select: _vm.handleSelect },
                model: {
                  value: _vm.state1,
                  callback: function($$v) {
                    _vm.state1 = $$v
                  },
                  expression: "state1"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("div", { staticClass: "sub-title" }, [
                _vm._v("Liste des suggestions à l'écriture")
              ]),
              _vm._v(" "),
              _c("el-autocomplete", {
                staticClass: "inline-input",
                attrs: {
                  "fetch-suggestions": _vm.querySearch,
                  placeholder: "Entrez quelque chose",
                  "trigger-on-focus": false
                },
                on: { select: _vm.handleSelect },
                model: {
                  value: _vm.state2,
                  callback: function($$v) {
                    _vm.state2 = $$v
                  },
                  expression: "state2"
                }
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
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        links: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
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
      _c(
        "el-autocomplete",
        {
          attrs: {
            "popper-class": "my-autocomplete",
            "fetch-suggestions": _vm.querySearch,
            placeholder: "Entrez quelque chose"
          },
          on: { select: _vm.handleSelect },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("div", { staticClass: "value" }, [
                    _vm._v(_vm._s(item.value))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "link" }, [
                    _vm._v(_vm._s(item.link))
                  ])
                ]
              }
            }
          ]),
          model: {
            value: _vm.state,
            callback: function($$v) {
              _vm.state = $$v
            },
            expression: "state"
          }
        },
        [
          _c("i", {
            staticClass: "el-icon-edit el-input__icon",
            attrs: { slot: "suffix" },
            on: { click: _vm.handleIconClick },
            slot: "suffix"
          })
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
        links: [],
        state: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestion objects
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
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
      _c("el-autocomplete", {
        attrs: {
          "fetch-suggestions": _vm.querySearchAsync,
          placeholder: "Entrez quelque chose"
        },
        on: { select: _vm.handleSelect },
        model: {
          value: _vm.state,
          callback: function($$v) {
            _vm.state = $$v
          },
          expression: "state"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        links: [],
        state: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
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
      _c("el-input", {
        attrs: {
          type: "text",
          placeholder: "Please input",
          maxlength: "10",
          "show-word-limit": ""
        },
        model: {
          value: _vm.text,
          callback: function($$v) {
            _vm.text = $$v
          },
          expression: "text"
        }
      }),
      _vm._v(" "),
      _c("div", { staticStyle: { margin: "20px 0" } }),
      _vm._v(" "),
      _c("el-input", {
        attrs: {
          type: "textarea",
          placeholder: "Please input",
          maxlength: "30",
          "show-word-limit": ""
        },
        model: {
          value: _vm.textarea,
          callback: function($$v) {
            _vm.textarea = $$v
          },
          expression: "textarea"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
  data() {
    return {
      text: '',
      textarea: ''
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