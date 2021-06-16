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
        _c(
          "div",
          { staticClass: "radio" },
          [
            _vm._v("\n    Order:\n    "),
            _c(
              "el-radio-group",
              {
                model: {
                  value: _vm.reverse,
                  callback: function($$v) {
                    _vm.reverse = $$v
                  },
                  expression: "reverse"
                }
              },
              [
                _c("el-radio", { attrs: { label: true } }, [
                  _vm._v("Descendant")
                ]),
                _vm._v(" "),
                _c("el-radio", { attrs: { label: false } }, [
                  _vm._v("Ascendant")
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-timeline",
          { attrs: { reverse: _vm.reverse } },
          _vm._l(_vm.activities, function(activity, index) {
            return _c(
              "el-timeline-item",
              { key: index, attrs: { timestamp: activity.timestamp } },
              [_vm._v("\n      " + _vm._s(activity.content) + "\n    ")]
            )
          }),
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
        reverse: true,
        activities: [{
          content: 'Début de l\'évènement',
          timestamp: '2018-04-15'
        }, {
          content: 'Approuvé',
          timestamp: '2018-04-13'
        }, {
          content: 'Succès',
          timestamp: '2018-04-11'
        }]
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
    _c(
      "div",
      { staticClass: "block" },
      [
        _c(
          "el-timeline",
          _vm._l(_vm.activities, function(activity, index) {
            return _c(
              "el-timeline-item",
              {
                key: index,
                attrs: {
                  icon: activity.icon,
                  type: activity.type,
                  color: activity.color,
                  size: activity.size,
                  timestamp: activity.timestamp
                }
              },
              [_vm._v("\n      " + _vm._s(activity.content) + "\n    ")]
            )
          }),
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
        activities: [{
          content: 'Icône',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: 'Couleur',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: 'Taille',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: 'Défaut',
          timestamp: '2018-04-03 20:46'
        }]
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "block" },
      [
        _c(
          "el-timeline",
          [
            _c(
              "el-timeline-item",
              { attrs: { timestamp: "2018/4/12", placement: "top" } },
              [
                _c("el-card", [
                  _c("h4", [_vm._v("Mise à jour du template GitHub")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Commit de Tom le 2018/4/12 20:46")])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-timeline-item",
              { attrs: { timestamp: "2018/4/3", placement: "top" } },
              [
                _c("el-card", [
                  _c("h4", [_vm._v("Mise à jour du template GitHub")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Commit de Tom le 2018/4/3 20:46")])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-timeline-item",
              { attrs: { timestamp: "2018/4/2", placement: "top" } },
              [
                _c("el-card", [
                  _c("h4", [_vm._v("Mise à jour du template GitHub")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Commit de Tom le 2018/4/2 20:46")])
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
  })(),
        }
      }
    </script>