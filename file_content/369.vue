<h2 id="tree"><a class="header-anchor" href="#tree">¶</a> Tree</h2>
<p>Affiche un ensemble de données possédant plusieurs niveaux de hiérarchie ou d'imbrication.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Voici la structure basique.</p>
<demo-block>
        
        <!--element-demo: <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

<script>
  export default {
    data() {
      return {
        data: [{
          label: 'Niveau un 1',
          children: [{
            label: 'Niveau deux 1-1',
            children: [{
              label: 'Niveau trois 1-1-1'
            }]
          }]
        }, {
          label: 'Niveau un 2',
          children: [{
            label: 'Niveau deux 2-1',
            children: [{
              label: 'Niveau trois 2-1-1'
            }]
          }, {
            label: 'Niveau deux 2-2',
            children: [{
              label: 'Niveau trois 2-2-1'
            }]
          }]
        }, {
          label: 'Niveau un 3',
          children: [{
            label: 'Niveau deux 3-1',
            children: [{
              label: 'Niveau trois 3-1-1'
            }]
          }, {
            label: 'Niveau deux 3-2',
            children: [{
              label: 'Niveau trois 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree :data=&quot;data&quot; :props=&quot;defaultProps&quot; @node-click=&quot;handleNodeClick&quot;&gt;&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          label: 'Niveau un 1',
          children: [{
            label: 'Niveau deux 1-1',
            children: [{
              label: 'Niveau trois 1-1-1'
            }]
          }]
        }, {
          label: 'Niveau un 2',
          children: [{
            label: 'Niveau deux 2-1',
            children: [{
              label: 'Niveau trois 2-1-1'
            }]
          }, {
            label: 'Niveau deux 2-2',
            children: [{
              label: 'Niveau trois 2-2-1'
            }]
          }]
        }, {
          label: 'Niveau un 3',
          children: [{
            label: 'Niveau deux 3-1',
            children: [{
              label: 'Niveau trois 3-1-1'
            }]
          }, {
            label: 'Niveau deux 3-2',
            children: [{
              label: 'Niveau trois 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="selection"><a class="header-anchor" href="#selection">¶</a> Sélection</h3>
<p>Vous pouvez activer la sélection des noeuds.</p>
<demo-block>
        <div><p>cet exemple montre également comment charger des données de manière asynchrone.</p>
</div>
        <!--element-demo: <el-tree
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox
  @check-change="handleCheckChange">
</el-tree>

<script>
  export default {
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      };
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :props=&quot;props&quot;
  :load=&quot;loadNode&quot;
  lazy
  show-checkbox
  @check-change=&quot;handleCheckChange&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      };
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
        }
        if (node.level &gt; 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() &gt; 0.5;
        }

        setTimeout(() =&gt; {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="noeud-feuille-personnalises-en-mode-lazy"><a class="header-anchor" href="#noeud-feuille-personnalises-en-mode-lazy">¶</a> Noeud-feuille personnalisés en mode lazy</h3>
<demo-block>
        <div><p>Les données d'un noeud ne sont pas accessibles tant que la noeud n'est pas cliqué, l'arbre ne peut donc pas prédire si un noeud sera une feuille. C'est pourquoi un bouton de menu est ajouté à chaque noeud, et si c'est une feuille il disparaîtra après le clic. Vous pouvez également dire par avance à l'arbre si un noeud est une feuille, pour éviter l'apparition du bouton de menu.</p>
</div>
        <!--element-demo: <el-tree
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox>
</el-tree>

<script>
  export default {
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
      };
    },
    methods: {
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }]);
        }
        if (node.level > 1) return resolve([]);

        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: true
          }, {
            name: 'zone'
          }];

          resolve(data);
        }, 500);
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :props=&quot;props&quot;
  :load=&quot;loadNode&quot;
  lazy
  show-checkbox&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
      };
    },
    methods: {
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }]);
        }
        if (node.level &gt; 1) return resolve([]);

        setTimeout(() =&gt; {
          const data = [{
            name: 'leaf',
            leaf: true
          }, {
            name: 'zone'
          }];

          resolve(data);
        }, 500);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="checkbox-desactivees"><a class="header-anchor" href="#checkbox-desactivees">¶</a> Checkbox désactivées</h3>
<p>Les checkbox des noeuds peuvent être désactivées individuellement.</p>
<demo-block>
        <div><p>Dans cet exemple, la propriété <code>disabled</code> est ajoutée à <code>defaultProps</code>, et certains noeuds ont <code>disabled:true</code>. Les checkbox correspondantes sont donc désactivées.</p>
</div>
        <!--element-demo: <el-tree
  :data="data"
  :props="defaultProps"
  show-checkbox
  @check-change="handleCheckChange">
</el-tree>

<script>
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: 'Niveau un 1',
          children: [{
            id: 3,
            label: 'Niveau deux 2-1',
            children: [{
              id: 4,
              label: 'Niveau trois 3-1-1'
            }, {
              id: 5,
              label: 'Niveau trois 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: 'Niveau deux 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: 'Niveau trois 3-2-1'
            }, {
              id: 7,
              label: 'Niveau trois 3-2-2',
              disabled: true
            }]
          }]
        }],
        defaultProps: {
            children: 'children',
            label: 'label',
            disabled: 'disabled',
        },
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  :props=&quot;defaultProps&quot;
  show-checkbox
  @check-change=&quot;handleCheckChange&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: 'Niveau un 1',
          children: [{
            id: 3,
            label: 'Niveau deux 2-1',
            children: [{
              id: 4,
              label: 'Niveau trois 3-1-1'
            }, {
              id: 5,
              label: 'Niveau trois 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: 'Niveau deux 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: 'Niveau trois 3-2-1'
            }, {
              id: 7,
              label: 'Niveau trois 3-2-2',
              disabled: true
            }]
          }]
        }],
        defaultProps: {
            children: 'children',
            label: 'label',
            disabled: 'disabled',
        },
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ouverture-et-selection-par-defaut"><a class="header-anchor" href="#ouverture-et-selection-par-defaut">¶</a> Ouverture et sélection par défaut</h3>
<p>Certains noeuds peuvent être ouverts et/ou sélectionnés par défaut.</p>
<demo-block>
        <div><p>Utilisez <code>default-expanded-keys</code> et <code>default-checked-keys</code> pour réglez respectivement les noeuds ouverts et les noeuds sélectionnés par défaut. Notez que <code>node-key</code> est requis dans ce cas. Sa valeurs est le nom d'une clé dans l'objets data, et sa valeur devrait être unique dans tout l'arbre.</p>
</div>
        <!--element-demo: <el-tree
  :data="data"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]"
  :props="defaultProps">
</el-tree>

<script>
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: 'Niveau un 1',
          children: [{
            id: 4,
            label: 'Niveau deux 1-1',
            children: [{
              id: 9,
              label: 'Niveau trois 1-1-1'
            }, {
              id: 10,
              label: 'Niveau trois 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Niveau un 2',
          children: [{
            id: 5,
            label: 'Niveau deux 2-1'
          }, {
            id: 6,
            label: 'Niveau deux 2-2'
          }]
        }, {
          id: 3,
          label: 'Niveau un 3',
          children: [{
            id: 7,
            label: 'Niveau deux 3-1'
          }, {
            id: 8,
            label: 'Niveau deux 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  show-checkbox
  node-key=&quot;id&quot;
  :default-expanded-keys=&quot;[2, 3]&quot;
  :default-checked-keys=&quot;[5]&quot;
  :props=&quot;defaultProps&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: 'Niveau un 1',
          children: [{
            id: 4,
            label: 'Niveau deux 1-1',
            children: [{
              id: 9,
              label: 'Niveau trois 1-1-1'
            }, {
              id: 10,
              label: 'Niveau trois 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Niveau un 2',
          children: [{
            id: 5,
            label: 'Niveau deux 2-1'
          }, {
            id: 6,
            label: 'Niveau deux 2-2'
          }]
        }, {
          id: 3,
          label: 'Niveau un 3',
          children: [{
            id: 7,
            label: 'Niveau deux 3-1'
          }, {
            id: 8,
            label: 'Niveau deux 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="selectionner-des-noeuds"><a class="header-anchor" href="#selectionner-des-noeuds">¶</a> Sélectionner des noeuds</h3>
<demo-block>
        <div><p>Cet exemple montre comment récupérer et sélectionner des noeuds. Vous pouvez utiliser deux approches: les noeuds ou les clés. Dans le cas des clés, <code>node-key</code> est requis.</p>
</div>
        <!--element-demo: <el-tree
  :data="data"
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  highlight-current
  :props="defaultProps">
</el-tree>

<div class="buttons">
  <el-button @click="getCheckedNodes">Récupération par noeud</el-button>
  <el-button @click="getCheckedKeys">Récupération par clé</el-button>
  <el-button @click="setCheckedNodes">Sélection par noeud</el-button>
  <el-button @click="setCheckedKeys">Sélection par clé</el-button>
  <el-button @click="resetChecked">Reset</el-button>
</div>

<script>
  export default {
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: 'Niveau deux 2-1'
        }, {
          id: 9,
          label: 'Niveau trois 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    },

    data() {
      return {
        data: [{
          id: 1,
          label: 'Niveau un 1',
          children: [{
            id: 4,
            label: 'Niveau deux 1-1',
            children: [{
              id: 9,
              label: 'Niveau trois 1-1-1'
            }, {
              id: 10,
              label: 'Niveau trois 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Niveau un 2',
          children: [{
            id: 5,
            label: 'Niveau deux 2-1'
          }, {
            id: 6,
            label: 'Niveau deux 2-2'
          }]
        }, {
          id: 3,
          label: 'Niveau un 3',
          children: [{
            id: 7,
            label: 'Niveau deux 3-1'
          }, {
            id: 8,
            label: 'Niveau deux 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  show-checkbox
  default-expand-all
  node-key=&quot;id&quot;
  ref=&quot;tree&quot;
  highlight-current
  :props=&quot;defaultProps&quot;&gt;
&lt;/el-tree&gt;

&lt;div class=&quot;buttons&quot;&gt;
  &lt;el-button @click=&quot;getCheckedNodes&quot;&gt;Récupération par noeud&lt;/el-button&gt;
  &lt;el-button @click=&quot;getCheckedKeys&quot;&gt;Récupération par clé&lt;/el-button&gt;
  &lt;el-button @click=&quot;setCheckedNodes&quot;&gt;Sélection par noeud&lt;/el-button&gt;
  &lt;el-button @click=&quot;setCheckedKeys&quot;&gt;Sélection par clé&lt;/el-button&gt;
  &lt;el-button @click=&quot;resetChecked&quot;&gt;Reset&lt;/el-button&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: 'Niveau deux 2-1'
        }, {
          id: 9,
          label: 'Niveau trois 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    },

    data() {
      return {
        data: [{
          id: 1,
          label: 'Niveau un 1',
          children: [{
            id: 4,
            label: 'Niveau deux 1-1',
            children: [{
              id: 9,
              label: 'Niveau trois 1-1-1'
            }, {
              id: 10,
              label: 'Niveau trois 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Niveau un 2',
          children: [{
            id: 5,
            label: 'Niveau deux 2-1'
          }, {
            id: 6,
            label: 'Niveau deux 2-2'
          }]
        }, {
          id: 3,
          label: 'Niveau un 3',
          children: [{
            id: 7,
            label: 'Niveau deux 3-1'
          }, {
            id: 8,
            label: 'Niveau deux 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="contenu-personnalise"><a class="header-anchor" href="#contenu-personnalise">¶</a> Contenu personnalisé</h3>
<p>Le contenu des noeuds peut être personnalisé, afin de pouvoir ajouter des icônes ou des boutons par exemple.</p>
<demo-block>
        <div><p>Il existe deux méthodes de personnalisation: <code>render-content</code> et les slots avec portée. Utilisez <code>render-content</code> pour assigner une fonction de rendu qui va générer le contenu des noeuds. Voire la documentation de Vue pour plus d'informations. Si vous préférez les slots, vous aurez accès à <code>node</code> et <code>data</code> dans le scope, corerspondant à l'objet TreeNode et aux données du noeud courant. Notez que  la démo de <code>render-content</code> ne marche pas dans jsfiddle car il ne supporte pas JSX. Dans un vrai projet, <code>render-content</code> marchera si les dépendances sont satisfaites.</p>
</div>
        <!--element-demo: <div class="custom-tree-container">
  <div class="block">
    <p>Avec render-content</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>
  </div>
  <div class="block">
    <p>Avec un slot</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Ajouter
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Supprimer
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</div>

<script>
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: 1,
        label: 'Niveau un 1',
        children: [{
          id: 4,
          label: 'Niveau deux 1-1',
          children: [{
            id: 9,
            label: 'Niveau trois 1-1-1'
          }, {
            id: 10,
            label: 'Niveau trois 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: 'Niveau un 2',
        children: [{
          id: 5,
          label: 'Niveau deux 2-1'
        }, {
          id: 6,
          label: 'Niveau deux 2-2'
        }]
      }, {
        id: 3,
        label: 'Niveau un 3',
        children: [{
          id: 7,
          label: 'Niveau deux 3-1'
        }, {
          id: 8,
          label: 'Niveau deux 3-2'
        }]
      }];
      return {
        data: JSON.parse(JSON.stringify(data)),
        data: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Ajouter</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Supprimer</el-button>
            </span>
          </span>);
      }
    }
  };
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;custom-tree-container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;p&gt;Avec render-content&lt;/p&gt;
    &lt;el-tree
      :data=&quot;data&quot;
      show-checkbox
      node-key=&quot;id&quot;
      default-expand-all
      :expand-on-click-node=&quot;false&quot;
      :render-content=&quot;renderContent&quot;&gt;
    &lt;/el-tree&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;p&gt;Avec un slot&lt;/p&gt;
    &lt;el-tree
      :data=&quot;data&quot;
      show-checkbox
      node-key=&quot;id&quot;
      default-expand-all
      :expand-on-click-node=&quot;false&quot;&gt;
      &lt;span class=&quot;custom-tree-node&quot; slot-scope=&quot;{ node, data }&quot;&gt;
        &lt;span&gt;{{ node.label }}&lt;/span&gt;
        &lt;span&gt;
          &lt;el-button
            type=&quot;text&quot;
            size=&quot;mini&quot;
            @click=&quot;() =&gt; append(data)&quot;&gt;
            Ajouter
          &lt;/el-button&gt;
          &lt;el-button
            type=&quot;text&quot;
            size=&quot;mini&quot;
            @click=&quot;() =&gt; remove(node, data)&quot;&gt;
            Supprimer
          &lt;/el-button&gt;
        &lt;/span&gt;
      &lt;/span&gt;
    &lt;/el-tree&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: 1,
        label: 'Niveau un 1',
        children: [{
          id: 4,
          label: 'Niveau deux 1-1',
          children: [{
            id: 9,
            label: 'Niveau trois 1-1-1'
          }, {
            id: 10,
            label: 'Niveau trois 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: 'Niveau un 2',
        children: [{
          id: 5,
          label: 'Niveau deux 2-1'
        }, {
          id: 6,
          label: 'Niveau deux 2-2'
        }]
      }, {
        id: 3,
        label: 'Niveau un 3',
        children: [{
          id: 7,
          label: 'Niveau deux 3-1'
        }, {
          id: 8,
          label: 'Niveau deux 3-2'
        }]
      }];
      return {
        data: JSON.parse(JSON.stringify(data)),
        data: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d =&gt; d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          &lt;span class=&quot;custom-tree-node&quot;&gt;
            &lt;span&gt;{node.label}&lt;/span&gt;
            &lt;span&gt;
              &lt;el-button size=&quot;mini&quot; type=&quot;text&quot; on-click={ () =&gt; this.append(data) }&gt;Ajouter&lt;/el-button&gt;
              &lt;el-button size=&quot;mini&quot; type=&quot;text&quot; on-click={ () =&gt; this.remove(node, data) }&gt;Supprimer&lt;/el-button&gt;
            &lt;/span&gt;
          &lt;/span&gt;);
      }
    }
  };
&lt;/script&gt;

&lt;style&gt;
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="filtrage"><a class="header-anchor" href="#filtrage">¶</a> Filtrage</h3>
<p>Les noeuds peuvent être filtrés par mot-clé.</p>
<demo-block>
        <div><p>Utilisez la méthode <code>filter</code> de l'instance de Tree pour pouvoir filtrer les noeuds, son paramètre étant le mot-clé. Notez que pour que cela fonctionne, <code>filter-node-method</code> est requis, sa valeur étant la méthode de filtrage.</p>
</div>
        <!--element-demo: <el-input
  placeholder="Filter keyword"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree"
  :data="data"
  :props="defaultProps"
  default-expand-all
  :filter-node-method="filterNode"
  ref="tree">
</el-tree>

<script>
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

    data() {
      return {
        filterText: '',
        data: [{
          id: 1,
          label: 'Niveau un 1',
          children: [{
            id: 4,
            label: 'Niveau deux 1-1',
            children: [{
              id: 9,
              label: 'Niveau trois 1-1-1'
            }, {
              id: 10,
              label: 'Niveau trois 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Niveau un 2',
          children: [{
            id: 5,
            label: 'Niveau deux 2-1'
          }, {
            id: 6,
            label: 'Niveau deux 2-2'
          }]
        }, {
          id: 3,
          label: 'Niveau un 3',
          children: [{
            id: 7,
            label: 'Niveau deux 3-1'
          }, {
            id: 8,
            label: 'Niveau deux 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;Filter keyword&quot;
  v-model=&quot;filterText&quot;&gt;
&lt;/el-input&gt;

&lt;el-tree
  class=&quot;filter-tree&quot;
  :data=&quot;data&quot;
  :props=&quot;defaultProps&quot;
  default-expand-all
  :filter-node-method=&quot;filterNode&quot;
  ref=&quot;tree&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

    data() {
      return {
        filterText: '',
        data: [{
          id: 1,
          label: 'Niveau un 1',
          children: [{
            id: 4,
            label: 'Niveau deux 1-1',
            children: [{
              id: 9,
              label: 'Niveau trois 1-1-1'
            }, {
              id: 10,
              label: 'Niveau trois 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Niveau un 2',
          children: [{
            id: 5,
            label: 'Niveau deux 2-1'
          }, {
            id: 6,
            label: 'Niveau deux 2-2'
          }]
        }, {
          id: 3,
          label: 'Niveau un 3',
          children: [{
            id: 7,
            label: 'Niveau deux 3-1'
          }, {
            id: 8,
            label: 'Niveau deux 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="accordeon"><a class="header-anchor" href="#accordeon">¶</a> Accordéon</h3>
<p>Vous pouvez utiliser un mode accordéon afin que seul un noeud par niveau soit ouvert.</p>
<demo-block>
        
        <!--element-demo: <el-tree
  :data="data"
  :props="defaultProps"
  accordion
  @node-click="handleNodeClick">
</el-tree>

<script>
  export default {
    data() {
      return {
        data: [{
          label: 'Niveau un 1',
          children: [{
            label: 'Niveau deux 1-1',
            children: [{
              label: 'Niveau trois 1-1-1'
            }]
          }]
        }, {
          label: 'Niveau un 2',
          children: [{
            label: 'Niveau deux 2-1',
            children: [{
              label: 'Niveau trois 2-1-1'
            }]
          }, {
            label: 'Niveau deux 2-2',
            children: [{
              label: 'Niveau trois 2-2-1'
            }]
          }]
        }, {
          label: 'Niveau un 3',
          children: [{
            label: 'Niveau deux 3-1',
            children: [{
              label: 'Niveau trois 3-1-1'
            }]
          }, {
            label: 'Niveau deux 3-2',
            children: [{
              label: 'Niveau trois 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  :props=&quot;defaultProps&quot;
  accordion
  @node-click=&quot;handleNodeClick&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          label: 'Niveau un 1',
          children: [{
            label: 'Niveau deux 1-1',
            children: [{
              label: 'Niveau trois 1-1-1'
            }]
          }]
        }, {
          label: 'Niveau un 2',
          children: [{
            label: 'Niveau deux 2-1',
            children: [{
              label: 'Niveau trois 2-1-1'
            }]
          }, {
            label: 'Niveau deux 2-2',
            children: [{
              label: 'Niveau trois 2-2-1'
            }]
          }]
        }, {
          label: 'Niveau un 3',
          children: [{
            label: 'Niveau deux 3-1',
            children: [{
              label: 'Niveau trois 3-1-1'
            }]
          }, {
            label: 'Niveau deux 3-2',
            children: [{
              label: 'Niveau trois 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="noeuds-deplacables"><a class="header-anchor" href="#noeuds-deplacables">¶</a> Noeuds déplaçables</h3>
<p>Vous pouvez déplacer les noeuds par drag'n drop en ajoutant l'attribut <code>draggable</code>.</p>
<demo-block>
        
        <!--element-demo: <el-tree
  :data="data"
  node-key="id"
  default-expand-all
  @node-drag-start="handleDragStart"
  @node-drag-enter="handleDragEnter"
  @node-drag-leave="handleDragLeave"
  @node-drag-over="handleDragOver"
  @node-drag-end="handleDragEnd"
  @node-drop="handleDrop"
  draggable
  :allow-drop="allowDrop"
  :allow-drag="allowDrag">
</el-tree>

<script>
  export default {
    data() {
      return {
        data: [{
          label: 'Niveau un 1',
          children: [{
            label: 'Niveau deux 1-1',
            children: [{
              label: 'Niveau trois 1-1-1'
            }]
          }]
        }, {
          label: 'Niveau un 2',
          children: [{
            label: 'Niveau deux 2-1',
            children: [{
              label: 'Niveau trois 2-1-1'
            }]
          }, {
            label: 'Niveau deux 2-2',
            children: [{
              label: 'Niveau trois 2-2-1'
            }]
          }]
        }, {
          label: 'Niveau un 3',
          children: [{
            label: 'Niveau deux 3-1',
            children: [{
              label: 'Niveau trois 3-1-1'
            }]
          }, {
            label: 'Niveau deux 3-2',
            children: [{
              label: 'Niveau trois 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode && dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === 'Niveau deux 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('Niveau trois 3-1-1') === -1;
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  node-key=&quot;id&quot;
  default-expand-all
  @node-drag-start=&quot;handleDragStart&quot;
  @node-drag-enter=&quot;handleDragEnter&quot;
  @node-drag-leave=&quot;handleDragLeave&quot;
  @node-drag-over=&quot;handleDragOver&quot;
  @node-drag-end=&quot;handleDragEnd&quot;
  @node-drop=&quot;handleDrop&quot;
  draggable
  :allow-drop=&quot;allowDrop&quot;
  :allow-drag=&quot;allowDrag&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          label: 'Niveau un 1',
          children: [{
            label: 'Niveau deux 1-1',
            children: [{
              label: 'Niveau trois 1-1-1'
            }]
          }]
        }, {
          label: 'Niveau un 2',
          children: [{
            label: 'Niveau deux 2-1',
            children: [{
              label: 'Niveau trois 2-1-1'
            }]
          }, {
            label: 'Niveau deux 2-2',
            children: [{
              label: 'Niveau trois 2-2-1'
            }]
          }]
        }, {
          label: 'Niveau un 3',
          children: [{
            label: 'Niveau deux 3-1',
            children: [{
              label: 'Niveau trois 3-1-1'
            }]
          }, {
            label: 'Niveau deux 3-2',
            children: [{
              label: 'Niveau trois 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode &amp;&amp; dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === 'Niveau deux 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('Niveau trois 3-1-1') === -1;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>Données de l'arbre</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>Texte à afficher quand il n'y a pas de données.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>node-key</td>
<td>Identifiant unique pour chaque noeud, doit être unique dans tout l'arbre.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>Options de configuration, voir table suivante.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>render-after-expand</td>
<td>Si les noeuds enfants doivent être générés seulement après la première ouverture du parent.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>load</td>
<td>Méthode pour charger les noeuds enfants, uniquement en mode <code>lazy</code>.</td>
<td>function(node, resolve)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>render-content</td>
<td>Fonction de rendu pour les noeuds.</td>
<td>Function(h, { node, data, store }</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>highlight-current</td>
<td>Si le noeud courant est mis en valeur.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>Si tous les noeuds sont ouverts par défaut.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>expand-on-click-node</td>
<td>Si l'ouverture se fait aussi en cliquant sur le noeud. Si <code>false</code>, l'ouverture ne se fera qu'en cliquant sur l'icône.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>check-on-click-node</td>
<td>Si la sélection se fait aussi en cliquant sur le noeud. Si <code>false</code>, la sélection ne se fera qu'en cliquant sur la checkbox.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>auto-expand-parent</td>
<td>Si un noeud parent est automatiquement ouvert quand un noeud enfant s'ouvre.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>default-expanded-keys</td>
<td>Tableau des clés des noeuds initialement ouverts.</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-checkbox</td>
<td>Si un noeud est sélectionnable.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>check-strictly</td>
<td>Si la sélection d'un noeud affecte celle de son parent quand <code>show-checkbox</code> est <code>true</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-checked-keys</td>
<td>Tableau des clés des noeuds initialement sélectionnés.</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>current-node-key</td>
<td>Clé du noeud initialement sélectionné.</td>
<td>string, number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-node-method</td>
<td>Fonction exécutée sur chaque noeud pour le filtrage. Si elle retourne <code>false</code>, les noeuds seront cachés.</td>
<td>Function(value, data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>accordion</td>
<td>Si les noeuds fonctionnent en mode accordéon.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>indent</td>
<td>Indentation horizontale des noeuds en px.</td>
<td>number</td>
<td>—</td>
<td>16</td>
</tr>
<tr>
<td>icon-class</td>
<td>Icône pour chaque noeud.</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>lazy</td>
<td>Si les noeuds sont chargés en mode lazy, utilisé avec l'attribut <code>load</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>draggable</td>
<td>Si les noeuds sont déplaçables par drag'n drop.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-drag</td>
<td>Fonction exécutée avant le déplacement d'un noeud. Si <code>false</code> est retourné, le noeud ne sera pas déplaçable.</td>
<td>Function(node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>allow-drop</td>
<td>Fonction exécutée avant le placement d'un noeud. Si <code>false</code> est retourné, le noeud ne pourra être placé sur la zone en question. <code>type</code> a trois valeurs possibles: 'prev' (insertion avant le noeud cible), 'inner' (insertion dans le noeud cible) and 'next' (insertion après le noeud cible).</td>
<td>Function(draggingNode, dropNode, type)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="props"><a class="header-anchor" href="#props">¶</a> props</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>Détermine quelle clé de l'objet noeud représente le label.</td>
<td>string, function(data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>children</td>
<td>Détermine quelle clé de l'objet noeud représente les noeuds enfants.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Détermine quelle clé de l'objet noeud représente la désactivation du noeud.</td>
<td>boolean, function(data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>isLeaf</td>
<td>Détermine si le noeud est une feuille, ne marche qu'avec le mode lazy loading.</td>
<td>boolean, function(data, node)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="methodes"><a class="header-anchor" href="#methodes">¶</a> Méthodes</h3>
<p><code>Tree</code> possède les méthodes suivantes, qui retourne la sélection de noeuds actuelle.</p>
<table>
<thead>
<tr>
<th>Méthode</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>filter</td>
<td>Filtre les noeuds.</td>
<td>Accepte un paramètre qui sera le premier paramètre de <code>filter-node-method</code>.</td>
</tr>
<tr>
<td>updateKeyChildren</td>
<td>Ajoute de nouvelles données au noeud, ne marche que lorsque <code>node-key</code> est assigné.</td>
<td>(key, data) Accepte deux paramètres: 1. clé du noeud 2. nouvelles données.</td>
</tr>
<tr>
<td>getCheckedNodes</td>
<td>Si le noeud peut-être sélectionné (<code>show-checkbox</code> est <code>true</code>), il retourne un tableau des noeuds sélectionnés.</td>
<td>(leafOnly, includeHalfChecked) Accepte deux booléen: 1. Défaut à <code>false</code>. Si <code>true</code>, retourne seulement un tableau des sous-noeuds sélectionnés. 2. Défaut à <code>false</code>. Si <code>true</code>, retourne la moitié des noeuds sélectionnés.</td>
</tr>
<tr>
<td>setCheckedNodes</td>
<td>Détermine quels noeuds sont sélectionnés, ne marche que si <code>node_key</code> est assigné.</td>
<td>Un tableau de noeuds qui doivent être sélectionnés.</td>
</tr>
<tr>
<td>getCheckedKeys</td>
<td>Si le noeud peut être sélectionné (<code>show-checkbox</code> est <code>true</code>), retourne un tableau de clés des noeuds sélectionnés.</td>
<td>(leafOnly) Booléen, défaut à <code>false</code>. Si à <code>true</code>, Il retourne seulement un tableau des sous-noeuds sélectionnés.</td>
</tr>
<tr>
<td>setCheckedKeys</td>
<td>Détermine quels noeuds sont sélectionnés, ne marche que si <code>node_key</code> est assigné.</td>
<td>(keys, leafOnly) Accepte deux paramètres: 1. un tableau de clés de noeuds à sélectionner 2. un booléen avec pour défaut <code>false</code>. Si à <code>true</code>, Il retourne seulement un tableau des sous-noeuds sélectionnés.</td>
</tr>
<tr>
<td>setChecked</td>
<td>Détermine si un noeud est sélectionnable, ne marche que si <code>node_key</code> est assigné.</td>
<td>(key/data, checked, deep) Accepte trois paramètres: 1. La clé ou les données du noeud 2. un booléen indiquant si sélectionné. 3. un booléen indiquant si profond.</td>
</tr>
<tr>
<td>getHalfCheckedNodes</td>
<td>Si le noeud peut être sélectionné (<code>show-checkbox</code> est <code>true</code>), retourne la moitié des noeuds sélectionnés.</td>
<td>-</td>
</tr>
<tr>
<td>getHalfCheckedKeys</td>
<td>Si le noeud peut être sélectionné (<code>show-checkbox</code> est <code>true</code>), retourne les clés de la moitié des noeuds sélectionnés.</td>
<td>-</td>
</tr>
<tr>
<td>getCurrentKey</td>
<td>retourne la clé du noeud actuellement en valeur (<code>null</code> si aucun noeud n'est en valeur).</td>
<td>—</td>
</tr>
<tr>
<td>getCurrentNode</td>
<td>retourne les données du noeud actuellement en valeur (<code>null</code> si aucun noeud n'est en valeur).</td>
<td>—</td>
</tr>
<tr>
<td>setCurrentKey</td>
<td>Met un noeud en valeur par sa clé, ne marche que si <code>node_key</code> est assigné.</td>
<td>(key) la clé du noeud. Si <code>null</code>, annule la sélection actuelle.</td>
</tr>
<tr>
<td>setCurrentNode</td>
<td>Met un noeud en valeur, ne marche que si <code>node_key</code> est assigné.</td>
<td>(node) le noeud.</td>
</tr>
<tr>
<td>getNode</td>
<td>Retourne le noeud grâce à sa clé ou ses données.</td>
<td>(data) la clé ou les données du noeud.</td>
</tr>
<tr>
<td>remove</td>
<td>Supprime un noeud, ne marche que si node-key est assigné.</td>
<td>(data) le noeud ou ses données à supprimer.</td>
</tr>
<tr>
<td>append</td>
<td>Ajoute un noeud à un autre noeud.</td>
<td>(data, parentNode) 1. les données du noeud à ajouter 2. les données du parent, clé ou données.</td>
</tr>
<tr>
<td>insertBefore</td>
<td>Insère un noeud avant un autre noeud.</td>
<td>(data, refNode) 1. Les données du noeud à insérer 2. Clé ou noeud de référence.</td>
</tr>
<tr>
<td>insertAfter</td>
<td>Insère un noeud après un autre noeud.</td>
<td>(data, refNode) 1. Les données du noeud à insérer 2. Clé ou noeud de référence.</td>
</tr>
</tbody>
</table>
<h3 id="evenements"><a class="header-anchor" href="#evenements">¶</a> Évènements</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>node-click</td>
<td>Se déclenche quand est cliqué.</td>
<td>Le noeud cliqué, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td>
</tr>
<tr>
<td>node-contextmenu</td>
<td>Se déclenche quand un noeud reçoit un clic droit.</td>
<td>L'évènement, le noeud cliqué, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td>
</tr>
<tr>
<td>check-change</td>
<td>Se déclenche quand quand la sélection d'un noeud change.</td>
<td>Le noeud modifié, si le noeud est sélectionné, si des enfants sont sélectionnés.</td>
</tr>
<tr>
<td>check</td>
<td>Se déclenche après un clic sur le checkbox.</td>
<td>Le noeud modifié, l'objet statut de l'arbre avec quatre propriétés: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys.</td>
</tr>
<tr>
<td>current-change</td>
<td>Se déclenche quand le noeud courant changes.</td>
<td>Le noeud courant, la propriété <code>node</code> de TreeNode</td>
</tr>
<tr>
<td>node-expand</td>
<td>Se déclenche quand le noeud courant s'ouvre.</td>
<td>Le noeud ouvert, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td>
</tr>
<tr>
<td>node-collapse</td>
<td>Se déclenche quand le noeud courant se ferme.</td>
<td>Le noeud fermé, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td>
</tr>
<tr>
<td>node-drag-start</td>
<td>Se déclenche quand le déplacement commence.</td>
<td>Le noeud déplacé, l'évènement.</td>
</tr>
<tr>
<td>node-drag-enter</td>
<td>Se déclenche quand le noeud déplacé entre dans un autre noeud.</td>
<td>Le noeud déplacé, l'autre noeud, l'évènement.</td>
</tr>
<tr>
<td>node-drag-leave</td>
<td>Se déclenche quand le noeud déplacé quitte un autre noeud.</td>
<td>Le noeud déplacé, l'autre noeud, l'évènement.</td>
</tr>
<tr>
<td>node-drag-over</td>
<td>Se déclenche quand le noeud passe au-dessus d'un autre noeud (comme l'évènement mouseover).</td>
<td>Le noeud déplacé, l'autre noeud, l'évènement.</td>
</tr>
<tr>
<td>node-drag-end</td>
<td>Se déclenche quand le déplacement se termine.</td>
<td>Le noeud déplacé, le noeud d'arrivée (peut-être <code>undefined</code>), le type de placement (before / after / inner), l'évènement.</td>
</tr>
<tr>
<td>node-drop</td>
<td>Se déclenche après que le noeud déplacé soit placé.</td>
<td>Le noeud déplacé, le noeud d'arrivée, le type de placement (before / after / inner), l'évènement.</td>
</tr>
</tbody>
</table>
<h3 id="slot-avec-portee"><a class="header-anchor" href="#slot-avec-portee">¶</a> Slot avec portée</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Le contenu personnalisé des noeuds. les paramètres sont { node, data }.</td>
</tr>
</tbody>
</table>
