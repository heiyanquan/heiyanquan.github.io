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
          "el-tabs",
          {
            on: { "tab-click": _vm.handleClick },
            model: {
              value: _vm.activeName,
              callback: function($$v) {
                _vm.activeName = $$v
              },
              expression: "activeName"
            }
          },
          [
            _c("el-tab-pane", { attrs: { label: "User", name: "first" } }, [
              _vm._v("Utilisateur")
            ]),
            _vm._v(" "),
            _c("el-tab-pane", { attrs: { label: "Config", name: "second" } }, [
              _vm._v("Config")
            ]),
            _vm._v(" "),
            _c("el-tab-pane", { attrs: { label: "Role", name: "third" } }, [
              _vm._v("Rôle")
            ]),
            _vm._v(" "),
            _c("el-tab-pane", { attrs: { label: "Task", name: "fourth" } }, [
              _vm._v("Tâche")
            ])
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
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
      [
        _c(
          "el-tabs",
          { attrs: { type: "card" }, on: { "tab-click": _vm.handleClick } },
          [
            _c("el-tab-pane", { attrs: { label: "User" } }, [
              _vm._v("Utilisateur")
            ]),
            _vm._v(" "),
            _c("el-tab-pane", { attrs: { label: "Config" } }, [
              _vm._v("Config")
            ]),
            _vm._v(" "),
            _c("el-tab-pane", { attrs: { label: "Role" } }, [_vm._v("Rôle")]),
            _vm._v(" "),
            _c("el-tab-pane", { attrs: { label: "Task" } }, [_vm._v("Tâche")])
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
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
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
        "el-tabs",
        { attrs: { type: "border-card" } },
        [
          _c("el-tab-pane", { attrs: { label: "User" } }, [
            _vm._v("Utilisateur")
          ]),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "Config" } }, [_vm._v("Config")]),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "Role" } }, [_vm._v("Rôle")]),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "Task" } }, [_vm._v("Tâche")])
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
      [
        _c(
          "el-radio-group",
          {
            staticStyle: { "margin-bottom": "30px" },
            model: {
              value: _vm.tabPosition,
              callback: function($$v) {
                _vm.tabPosition = $$v
              },
              expression: "tabPosition"
            }
          },
          [
            _c("el-radio-button", { attrs: { label: "top" } }, [
              _vm._v("En haut")
            ]),
            _vm._v(" "),
            _c("el-radio-button", { attrs: { label: "right" } }, [
              _vm._v("À droite")
            ]),
            _vm._v(" "),
            _c("el-radio-button", { attrs: { label: "bottom" } }, [
              _vm._v("En bas")
            ]),
            _vm._v(" "),
            _c("el-radio-button", { attrs: { label: "left" } }, [
              _vm._v("À gauche")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-tabs",
          {
            staticStyle: { height: "200px" },
            attrs: { "tab-position": _vm.tabPosition }
          },
          [
            _c("el-tab-pane", { attrs: { label: "User" } }, [
              _vm._v("Utilisateur")
            ]),
            _vm._v(" "),
            _c("el-tab-pane", { attrs: { label: "Config" } }, [
              _vm._v("Config")
            ]),
            _vm._v(" "),
            _c("el-tab-pane", { attrs: { label: "Role" } }, [_vm._v("Rôle")]),
            _vm._v(" "),
            _c("el-tab-pane", { attrs: { label: "Task" } }, [_vm._v("Tâche")])
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
        tabPosition: 'left'
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
      _c(
        "el-tabs",
        { attrs: { type: "border-card" } },
        [
          _c("el-tab-pane", [
            _c("span", { attrs: { slot: "label" }, slot: "label" }, [
              _c("i", { staticClass: "el-icon-date" }),
              _vm._v(" Route")
            ]),
            _vm._v("\n    Route\n  ")
          ]),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "Config" } }, [_vm._v("Config")]),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "Role" } }, [_vm._v("Rôle")]),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "Task" } }, [_vm._v("Tâche")])
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
  })(),"element-demo5": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-tabs",
        {
          attrs: { type: "card", editable: "" },
          on: { edit: _vm.handleTabsEdit },
          model: {
            value: _vm.editableTabsValue,
            callback: function($$v) {
              _vm.editableTabsValue = $$v
            },
            expression: "editableTabsValue"
          }
        },
        _vm._l(_vm.editableTabs, function(item, index) {
          return _c(
            "el-tab-pane",
            { key: item.name, attrs: { label: item.title, name: item.name } },
            [_vm._v("\n    " + _vm._s(item.content) + "\n  ")]
          )
        }),
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
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Onglet 1',
          name: '1',
          content: 'Contenu de l\'onglet 1'
        }, {
          title: 'Onglet 2',
          name: '2',
          content: 'Contenu de l\'onglet 2'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'Nouvel onglet',
            name: newTabName,
            content: 'Contenu du nouvel onglet'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
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
      _c(
        "div",
        { staticStyle: { "margin-bottom": "20px" } },
        [
          _c(
            "el-button",
            {
              attrs: { size: "small" },
              on: {
                click: function($event) {
                  _vm.addTab(_vm.editableTabsValue)
                }
              }
            },
            [_vm._v("\n    Ajouter un onglet\n  ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
          attrs: { type: "card", closable: "" },
          on: { "tab-remove": _vm.removeTab },
          model: {
            value: _vm.editableTabsValue,
            callback: function($$v) {
              _vm.editableTabsValue = $$v
            },
            expression: "editableTabsValue"
          }
        },
        _vm._l(_vm.editableTabs, function(item, index) {
          return _c(
            "el-tab-pane",
            { key: item.name, attrs: { label: item.title, name: item.name } },
            [_vm._v("\n    " + _vm._s(item.content) + "\n  ")]
          )
        }),
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
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Onglet 1',
          name: '1',
          content: 'Contenu de l\'onglet 1'
        }, {
          title: 'Onglet 2',
          name: '2',
          content: 'Contenu de l\'onglet 2'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'Nouvel onglet',
          name: newTabName,
          content: 'Contenu du nouvel onglet'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
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