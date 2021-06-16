<h2 id="tree"><a class="header-anchor" href="#tree">¶</a> Tree</h2>
<p>Muestra un conjunto de datos jerárquicos.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Estructura básica de árbol.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree :data=&quot;data&quot; :props=&quot;defaultProps&quot; @node-click=&quot;handleNodeClick&quot;&gt;&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          label: 'Level one 1',
          children: [{
            label: 'Level two 1-1',
            children: [{
              label: 'Level three 1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          children: [{
            label: 'Level two 2-1',
            children: [{
              label: 'Level three 2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            children: [{
              label: 'Level three 2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          children: [{
            label: 'Level two 3-1',
            children: [{
              label: 'Level three 3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            children: [{
              label: 'Level three 3-2-1'
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
</code></pre></template></demo-block><h3 id="seleccionable"><a class="header-anchor" href="#seleccionable">¶</a> Seleccionable</h3>
<p>Usado para la selección de nodos.</p>
<demo-block>
        <div><p>Este ejemplo también muestra como cargar los datos de forma asíncrona.</p>
</div>
        <template slot="source"><element-demo1 /></template>
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
</code></pre></template></demo-block><h3 id="nodos-hoja-en-modo-perezoso-lazy-load"><a class="header-anchor" href="#nodos-hoja-en-modo-perezoso-lazy-load">¶</a> Nodos hoja en modo perezoso (lazy load)</h3>
<demo-block>
        <div><p>Los datos de un nodo no son cargados hasta que no es pinchado, así que el árbol no puede predecir si es una hoja. Por eso a cada nodo se le añade el botón de desplegar, y si el nodo es una hoja el botón desaparecerá al pinchar en él. También puede decirle al árbol que el nodo es una hoja de antemano, y así evita que muestre el botón de desplegar.</p>
</div>
        <template slot="source"><element-demo2 /></template>
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
</code></pre></template></demo-block><h3 id="checkbox-desactivados"><a class="header-anchor" href="#checkbox-desactivados">¶</a> Checkbox desactivados</h3>
<p>El checkbox de un nodo se puede poner como desactivado.</p>
<demo-block>
        <div><p>En el ejemplo, la propiedad <code>disabled</code> se declara en <code>defaultProps</code>, y algunos nodos se ponen como <code>disabled:true</code>. Los checkboxes correspondientes son desactivados y no se pueden pinchar.</p>
</div>
        <template slot="source"><element-demo3 /></template>
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
          label: 'Level one 1',
          children: [{
            id: 3,
            label: 'Level two 2-1',
            children: [{
              id: 4,
              label: 'Level three 3-1-1'
            }, {
              id: 5,
              label: 'Level three 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: 'Level two 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: 'Level three 3-2-1'
            }, {
              id: 7,
              label: 'Level three 3-2-2',
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
</code></pre></template></demo-block><h3 id="desplegado-o-seleccionado-por-defecto"><a class="header-anchor" href="#desplegado-o-seleccionado-por-defecto">¶</a> Desplegado o seleccionado por defecto</h3>
<p>Los nodos pueden estar desplegados o seleccionados por defecto.</p>
<demo-block>
        <div><p>Utilice <code>default-expanded-keys</code> y <code>default-checked-keys</code> para establecer los nodos desplegados y seleccionados respectivamente. Tenga en cuenta que para que funcione es necesario que tengan <code>node-key</code>. Su valor es el nombre de una clave en el objeto data, y el valor de la clave debe ser único en todo el árbol.</p>
</div>
        <template slot="source"><element-demo4 /></template>
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
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1'
            }, {
              id: 10,
              label: 'Level three 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1'
          }, {
            id: 6,
            label: 'Level two 2-2'
          }]
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1'
          }, {
            id: 8,
            label: 'Level two 3-2'
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
</code></pre></template></demo-block><h3 id="seleccionando-nodos"><a class="header-anchor" href="#seleccionando-nodos">¶</a> Seleccionando nodos</h3>
<demo-block>
        <div><p>Este ejemplo muestra como establecer y leer nodos seleccionados. Esto se puede hacer por nodos o por claves. Si lo hace por claves el atributo <code>node-key</code> es necesario.</p>
</div>
        <template slot="source"><element-demo5 /></template>
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
  &lt;el-button @click=&quot;getCheckedNodes&quot;&gt;get by node&lt;/el-button&gt;
  &lt;el-button @click=&quot;getCheckedKeys&quot;&gt;get by key&lt;/el-button&gt;
  &lt;el-button @click=&quot;setCheckedNodes&quot;&gt;set by node&lt;/el-button&gt;
  &lt;el-button @click=&quot;setCheckedKeys&quot;&gt;set by key&lt;/el-button&gt;
  &lt;el-button @click=&quot;resetChecked&quot;&gt;reset&lt;/el-button&gt;
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
          label: 'Level two 2-1'
        }, {
          id: 9,
          label: 'Level three 1-1-1'
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
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1'
            }, {
              id: 10,
              label: 'Level three 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1'
          }, {
            id: 6,
            label: 'Level two 2-2'
          }]
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1'
          }, {
            id: 8,
            label: 'Level two 3-2'
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
</code></pre></template></demo-block><h3 id="contenido-personalizado-en-los-nodos"><a class="header-anchor" href="#contenido-personalizado-en-los-nodos">¶</a> Contenido personalizado en los nodos</h3>
<p>El contenido de los nodos puede ser personalizado, así que puede añadir iconos y botones a su gusto.</p>
<demo-block>
        <div><p>Hay dos maneras de personalizar la plantilla para los nodos de árbol: <code>render-content</code> y scoped slot. Utilice <code>render-content</code> para asignar una función de renderizado que devuelve el contenido del árbol de nodos. Mire la documentación de node para una introducción detallada a las funciones de renderizado. Si prefiere scoped slot, tendrá acceso a los <code>nodos</code> y <code>datos</code> en el ámbito de aplicación, representando el objeto TreeNode y los datos del nodo actual respectivamente. Tenga en cuenta que este ejemplo no puede ejecutarse en codepen.io ya que no soporta la sintaxis JSX. En un proyecto real <code>render-content</code> funcionará si las dependencias relevantes están configuradas correctamente.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;custom-tree-container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;p&gt;Using render-content&lt;/p&gt;
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
    &lt;p&gt;Using scoped slot&lt;/p&gt;
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
            Append
          &lt;/el-button&gt;
          &lt;el-button
            type=&quot;text&quot;
            size=&quot;mini&quot;
            @click=&quot;() =&gt; remove(node, data)&quot;&gt;
            Delete
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
        label: 'Level one 1',
        children: [{
          id: 4,
          label: 'Level two 1-1',
          children: [{
            id: 9,
            label: 'Level three 1-1-1'
          }, {
            id: 10,
            label: 'Level three 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: 'Level one 2',
        children: [{
          id: 5,
          label: 'Level two 2-1'
        }, {
          id: 6,
          label: 'Level two 2-2'
        }]
      }, {
        id: 3,
        label: 'Level one 3',
        children: [{
          id: 7,
          label: 'Level two 3-1'
        }, {
          id: 8,
          label: 'Level two 3-2'
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
              &lt;el-button size=&quot;mini&quot; type=&quot;text&quot; on-click={ () =&gt; this.append(data) }&gt;Append&lt;/el-button&gt;
              &lt;el-button size=&quot;mini&quot; type=&quot;text&quot; on-click={ () =&gt; this.remove(node, data) }&gt;Delete&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="filtrado-de-nodos"><a class="header-anchor" href="#filtrado-de-nodos">¶</a> Filtrado de nodos</h3>
<p>Los nodos del árbol se pueden filtrar.</p>
<demo-block>
        <div><p>Invoque el método <code>filter</code> de la instancia de Tree para filtrar los nodos. Su parámetro es la palabra de filtrado. Tenga en cuenta que para que funcione es necesario <code>filter-node-method</code>, y su valor el método de filtrado.</p>
</div>
        <template slot="source"><element-demo7 /></template>
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
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1'
            }, {
              id: 10,
              label: 'Level three 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1'
          }, {
            id: 6,
            label: 'Level two 2-2'
          }]
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1'
          }, {
            id: 8,
            label: 'Level two 3-2'
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
</code></pre></template></demo-block><h3 id="acordeon"><a class="header-anchor" href="#acordeon">¶</a> Acordeón</h3>
<p>Solo puede ser expandido un nodo del mismo nivel a la vez.</p>
<demo-block>
        
        <template slot="source"><element-demo8 /></template>
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
          label: 'Level one 1',
          children: [{
            label: 'Level two 1-1',
            children: [{
              label: 'Level three 1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          children: [{
            label: 'Level two 2-1',
            children: [{
              label: 'Level three 2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            children: [{
              label: 'Level three 2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          children: [{
            label: 'Level two 3-1',
            children: [{
              label: 'Level three 3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            children: [{
              label: 'Level three 3-2-1'
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
</code></pre></template></demo-block><h3 id="draggable"><a class="header-anchor" href="#draggable">¶</a> Draggable</h3>
<p>Puede arrastrar y soltar nodos de Tree añadiendo un atributo <code>draggable</code> .</p>
<demo-block>
        
        <template slot="source"><element-demo9 /></template>
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
          label: 'Level one 1',
          children: [{
            label: 'Level two 1-1',
            children: [{
              label: 'Level three 1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          children: [{
            label: 'Level two 2-1',
            children: [{
              label: 'Level three 2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            children: [{
              label: 'Level three 2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          children: [{
            label: 'Level two 3-1',
            children: [{
              label: 'Level three 3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            children: [{
              label: 'Level three 3-2-1'
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
        if (dropNode.data.label === 'Level two 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('Level three 3-1-1') === -1;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>Datos del árbol</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>Texto a mostrar cuando data es void</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>node-key</td>
<td>Identificador único en todo el árbol para los nodos</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>Opciones de configuración</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>render-after-expand</td>
<td>si se mostrarán los nodos hijo sólo después de que se desglose por primera vez un nodo padre</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>load</td>
<td>Método para cargar los datos de subárboles</td>
<td>function(node, resolve)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>render-content</td>
<td>Función de renderizado para los nodos</td>
<td>Function(h, { node, data, store }</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>highlight-current</td>
<td>Si el nodo actual está resaltado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>Expandir todos los nodos por defecto</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>expand-on-click-node</td>
<td>Si expandir o contraer un nodo al pincharlo, si es false solo se hará al pinchar en la flecha</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>check-on-click-node</td>
<td>si marcar o desmarcar el nodo al hacer clic en el. Si es <code>false</code>, el nodo sólo se puede marcar o desmarcar haciendo clic en la casilla de verificación.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>auto-expand-parent</td>
<td>Expandir un nodo padre si el hijo está seleccionado</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>default-expanded-keys</td>
<td>Array de claves de los nodos expandidos inicialmente</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-checkbox</td>
<td>Si un nodo es seleccionable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>check-strictly</td>
<td>El estado de selección de un nodo no afecta a sus padres o hijos, cuando <code>show-checkbox</code> es <code>true</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-checked-keys</td>
<td>Array con claves de los nodos seleccionados inicialmente</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>current-node-key</td>
<td>la clave del nodo inicialmente seleccionado</td>
<td>string, number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-node-method</td>
<td>Esta función se ejecutará en cada nodo cuando se use el método filtrar, si devuelve <code>false</code> el nodo se oculta</td>
<td>Function(value, data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>accordion</td>
<td>Si solo un nodo de cada nivel puede expandirse a la vez</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>indent</td>
<td>Indentación horizontal de los nodos en niveles adyacentes, en pixeles</td>
<td>number</td>
<td>—</td>
<td>16</td>
</tr>
<tr>
<td>icon-class</td>
<td>Icono del nodo del árbol de cliente</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>lazy</td>
<td>si se trata de un nodo de hoja lazy load, utilizado con el atributo <code>load</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>draggable</td>
<td>si se habilita la función de drag &amp; drop en los nodos</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-drag</td>
<td>esta función se ejecutará antes de arrastrar un nodo. si devuelve <code>false</code>, el nodo no puede ser arrastrado.</td>
<td>Function(nodo)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>allow-drop</td>
<td>esta función se ejecutará al arrastrar y soltar un nodo. si devuelve false, el nodo arrastrando no se puede soltar en el nodo destino. <code>type</code> tiene tres valores posibles: 'prev' (insertar el nodo de arrastre antes del nodo de destino), 'inner' (insertar el nodo de arrastre en el nodo de destino) y 'next' (insertar el nodo de arrastre después del nodo de destino)</td>
<td>Function(Nodoquesearrastra, Nododestino, type)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="props"><a class="header-anchor" href="#props">¶</a> props</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>Especifica que clave del objecto nodo se utilizará como label</td>
<td>string, function(data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>children</td>
<td>Especifica que objeto del nodo se utiliza como subárbol</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>isLeaf</td>
<td>Especifica si el nodo es una hoja, sólo funciona cuando lazy load está activado</td>
<td>boolean, function(datos, nodo)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="metodos"><a class="header-anchor" href="#metodos">¶</a> Métodos</h3>
<p><code>Tree</code> tiene los siguientes métodos, que devuelven el array de nodos seleccionados.</p>
<table>
<thead>
<tr>
<th>Método</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>filter</td>
<td>Filtra los nodos del árbol, los nodos filtrados estarán ocultos</td>
<td>Acepta un parámetro que será usado como primer parámetro para filter-node-method</td>
</tr>
<tr>
<td>updateKeyChildren</td>
<td>Asocia un nuevo dato al nodo, solo funciona si <code>node-key</code> está asignado</td>
<td>(key, data)Acepta dos parámetros: 1. clave del nodo 2. nuevo dato</td>
</tr>
<tr>
<td>getCheckedNodes</td>
<td>si el nodo puede ser seleccionado (<code>show-checkbox</code> es <code>true</code>), devuelve el array de nodos actualmente seleccionada.</td>
<td>(leafOnly, includeHalfChecked) Acepta dos parámetros de tipo booleano: 1. El valor por defecto es <code>false</code>. Si el parámetro es <code>true</code>, sólo devuelve el array de subnodos actualmente seleccionado. 2. El valor por defecto es <code>false</code>. Si el parámetro es <code>true</code>, el valor de retorno contiene nodos halfchecked.</td>
</tr>
<tr>
<td>setCheckedNodes</td>
<td>Establece algunos nodos como seleccionados, solo funciona cuando <code>node-key</code> está asignado</td>
<td>Un array de nodos a seleccionar</td>
</tr>
<tr>
<td>getCheckedKeys</td>
<td>Si los nodos pueden ser seleccionados (<code>show-checkbox</code> es <code>true</code>), devuelve un array con las claves de los nodos seleccionados</td>
<td>(leafOnly) Acepta un booleano que por defecto es <code>false</code>.</td>
</tr>
<tr>
<td>setCheckedKeys</td>
<td>Establece algunos nodos como seleccionados, solo si <code>node-key</code> está asignado</td>
<td>(keys, leafOnly) Acepta dos parametros: 1. un array de claves 2. un booleano cuyo valor por defecto es <code>false</code>. Si el parámetro es <code>true</code>, solo devuelve los nodos seleccionados</td>
</tr>
<tr>
<td>setChecked</td>
<td>Establece si un nodo está seleccionado, solo funciona si <code>node-key</code> esta asignado</td>
<td>(key/data, checked, deep) Acepta tres parámetros: 1. la clave o dato del nodo a ser seleccionado 2. un booleano que indica si un nodo el nodo estará seleccionado 3. un booleanoque indica si se hará en profundidad</td>
</tr>
<tr>
<td>getHalfCheckedNodes</td>
<td>Si el nodo puede ser seleccionado (<code>show-checkbox</code> es <code>true</code>), devuelve la mitad del array de nodos actualmente seleccionada.</td>
<td>-</td>
</tr>
<tr>
<td>getHalfCheckedKeys</td>
<td>Si el nodo puede ser seleccionado (<code>show-checkbox</code> es <code>true</code>), devuelve la mitad del array de claves del nodo actualmente seleccionado.</td>
<td>-</td>
</tr>
<tr>
<td>getCurrentKey</td>
<td>devuelve la clave del nodo resaltado actualmente (null si no hay ninguno)</td>
<td>—</td>
</tr>
<tr>
<td>getCurrentNode</td>
<td>devuelve los datos del nodo de resaltado (nulo si no hay ningún nodo resaltado)</td>
<td>—</td>
</tr>
<tr>
<td>setCurrentKey</td>
<td>establece el nodo resaltado por la clave, solo funciona si <code>node-key</code> está asignado</td>
<td>(key) la clave del nodo a ser resaltado. Si es <code>null</code>, cancela los nodos actualmente resaltados</td>
</tr>
<tr>
<td>setCurrentNode</td>
<td>establece el nodo resaltado, solo funciona si <code>node-key</code> está asignado</td>
<td>(node) nodo a ser resaltado</td>
</tr>
<tr>
<td>getNode</td>
<td>devuelve el nodo por el dato o la clave</td>
<td>(data) los datos o clave del nodo</td>
</tr>
<tr>
<td>remove</td>
<td>elimina un nodo, solo funciona si <code>node-key</code> está asignado</td>
<td>(data) los datos del nodo o nodo a borrar</td>
</tr>
<tr>
<td>append</td>
<td>añadir un nodo hijo a un nodo determinado del árbol</td>
<td>(data, parentNode) 1. los datos del nodo hijo que se añadirán 2. los datos del nodo padre, clave o nodo</td>
</tr>
<tr>
<td>insertBefore</td>
<td>insertar un nodo antes de un nodo dado en el árbol</td>
<td>(data, refNode) 1. Datos del nodo que se insertarán 2. Datos del nodo de referencia, clave o nodo</td>
</tr>
<tr>
<td>insertAfter</td>
<td>insertar un nodo después de un nodo dado en el árbol</td>
<td>(data, refNode) 1. Datos del nodo que se insertarán 2. Datos del nodo de referencia, clave o nodo</td>
</tr>
</tbody>
</table>
<h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3>
<table>
<thead>
<tr>
<th>Nombre del evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>node-click</td>
<td>se lanza cuando un nodo es pinchado</td>
<td>tres parámetros: el objeto del nodo seleccionado, propiedad <code>node</code> de TreeNode y el TreeNode en si</td>
</tr>
<tr>
<td>node-contextmenu</td>
<td>se lanza cuando en un nodo se hace clic con el botón derecho</td>
<td>cuatro parámetros: evento, el objeto nodo sobre el que se hizo clic, la propiedad <code>node</code>  del TreeNode, el TreeNode en si mismo</td>
</tr>
<tr>
<td>check-change</td>
<td>se lanza cuando el estado de selección del nodo cambia</td>
<td>tres parámetros: objeto nodo que se corresponde con el que ha cambiado, booleano que dice si esta seleccionado, booleano que dice si el nodo tiene hijos seleccionados</td>
</tr>
<tr>
<td>check</td>
<td>se activa al hacer clic en la casilla de selección de un nodo</td>
<td>dos parámetros: objeto de nodo correspondiente al nodo que se marca/desmarca, objeto de estatus de árbol verificado que tiene cuatro puntales: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys</td>
</tr>
<tr>
<td>current-change</td>
<td>cambia cuando el nodo actual cambia</td>
<td>dos parámetros: objeto nodo que se corresponde al nodo actual y propiedad <code>node</code> del TreeNode</td>
</tr>
<tr>
<td>node-expand</td>
<td>se lanza cuando el nodo actual se abre</td>
<td>tres parámetros: el objeto del nodo abierto, propiedad <code>node</code> de TreeNode y el TreeNode en si</td>
</tr>
<tr>
<td>node-collapse</td>
<td>se lanza cuando el nodo actual se cierra</td>
<td>tres parámetros: el objeto del nodo cerrado, propiedad <code>node</code> de TreeNode y el TreeNode en si</td>
</tr>
<tr>
<td>node-drag-start</td>
<td>se activa cuando se inicia el arrastre</td>
<td>dos parámetros: el objeto del nodo que se arrastrara, evento.</td>
</tr>
<tr>
<td>node-drag-enter</td>
<td>se desencadena cuando el nodo de arrastre entra en otro nodo</td>
<td>tres parámetros: objeto del nodo que se arrastra, objeto del nodo en el que entra, evento.</td>
</tr>
<tr>
<td>node-drag-leave</td>
<td>se desencadena cuando el nodo de arrastre sale de un nodo</td>
<td>tres parámetros: objeto del nodo que se arrastra, objeto del nodo del cual se sale, evento.</td>
</tr>
<tr>
<td>node-drag-over</td>
<td>se activa cuando se arrastra sobre un nodo (como el evento mouseover)</td>
<td>tres parámetros: objeto del nodo que se arrastra, objeto del nodo sobre el que esta el arrastre, evento.</td>
</tr>
<tr>
<td>node-drag-end</td>
<td>se activa cuando se termina de arrastrar</td>
<td>cuatro parámetros: objeto del nodo que se arrastra, objeto del nodo que corresponde al final del arrastre (puede ser <code>undefined</code> ), tipo de integración (antes (before), después (after), dentro (inner) ), evento.</td>
</tr>
<tr>
<td>node-drop</td>
<td>después de soltar el nodo de arrastre</td>
<td>cuatro parámetros: objeto del nodo que se esta arrastrando, objeto del nodo sobre el que se esta soltando, tipo de integración (antes (before), después (after), dentro (inner) ), evento.</td>
</tr>
</tbody>
</table>
<h3 id="scoped-slot"><a class="header-anchor" href="#scoped-slot">¶</a> Scoped Slot</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Contenido personalizado para nodos de tree. El parámetro del scope es { node, data }.</td>
</tr>
</tbody>
</table>
