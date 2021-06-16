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
        "el-collapse",
        {
          on: { change: _vm.handleChange },
          model: {
            value: _vm.activeNames,
            callback: function($$v) {
              _vm.activeNames = $$v
            },
            expression: "activeNames"
          }
        },
        [
          _c("el-collapse-item", { attrs: { title: "Cohérence", name: "1" } }, [
            _c("div", [
              _vm._v(
                "Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;"
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc."
              )
            ])
          ]),
          _vm._v(" "),
          _c("el-collapse-item", { attrs: { title: "Feedback", name: "2" } }, [
            _c("div", [
              _vm._v(
                "Retour d'expérience: permets aux utilisateurs de percevoir clairement leurs opérations par le biais d'animations et d'effets interactifs."
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments."
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Efficacité", name: "3" } },
            [
              _c("div", [
                _vm._v(
                  "Simplifier le processus: garde chaque opération simple et intuitive.;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Controllabilité", name: "4" } },
            [
              _c("div", [
                _vm._v(
                  "Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes."
                )
              ])
            ]
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
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
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
        "el-collapse",
        {
          attrs: { accordion: "" },
          model: {
            value: _vm.activeName,
            callback: function($$v) {
              _vm.activeName = $$v
            },
            expression: "activeName"
          }
        },
        [
          _c("el-collapse-item", { attrs: { title: "Cohérence", name: "1" } }, [
            _c("div", [
              _vm._v(
                "Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;"
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc."
              )
            ])
          ]),
          _vm._v(" "),
          _c("el-collapse-item", { attrs: { title: "Feedback", name: "2" } }, [
            _c("div", [
              _vm._v(
                "Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs."
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments."
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Efficacité", name: "3" } },
            [
              _c("div", [
                _vm._v(
                  "Simplifier le processus: garde chaque opération simple et intuitive.;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Controllabilité", name: "4" } },
            [
              _c("div", [
                _vm._v(
                  "Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes."
                )
              ])
            ]
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
        activeName: '1'
      };
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
        "el-collapse",
        { attrs: { accordion: "" } },
        [
          _c(
            "el-collapse-item",
            { attrs: { name: "1" } },
            [
              _c("template", { slot: "title" }, [
                _vm._v("\n      Cohérence"),
                _c("i", { staticClass: "header-icon el-icon-info" })
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc."
                )
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c("el-collapse-item", { attrs: { title: "Feedback", name: "2" } }, [
            _c("div", [
              _vm._v(
                "Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs."
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments."
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Efficacité", name: "3" } },
            [
              _c("div", [
                _vm._v(
                  "Simplifier le processus: garde chaque opération simple et intuitive.;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Controllabilité", name: "4" } },
            [
              _c("div", [
                _vm._v(
                  "Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes."
                )
              ])
            ]
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
  })(),
        }
      }
    </script>