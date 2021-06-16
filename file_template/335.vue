<h2 id="cascader"><a class="header-anchor" href="#cascader">¶</a> Cascader</h2>
<p>Si las opciones tienen una estructura jerárquica clara, se puede utilizar Cascader para verlas y seleccionarlas.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Hay dos maneras de ampliar los elementos de opción hijos.</p>
<demo-block>
        <div><p>Asignar el atributo <code>options</code> a un array de opciones genera un Cascader. El atributo <code>props.expandTrigger</code> define cómo se expanden las opciones hijo.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Child options expand when clicked (default)&lt;/span&gt;
  &lt;el-cascader
    v-model=&quot;value&quot;
    :options=&quot;options&quot;
    @change=&quot;handleChange&quot;&gt;&lt;/el-cascader&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Child options expand when hovered&lt;/span&gt;
  &lt;el-cascader
    v-model=&quot;value&quot;
    :options=&quot;options&quot;
    :props=&quot;{ expandTrigger: 'hover' }&quot;
    @change=&quot;handleChange&quot;&gt;&lt;/el-cascader&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [],
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="opcion-disabled"><a class="header-anchor" href="#opcion-disabled">¶</a> Opción Disabled</h3>
<p>Deshabilite una opción estableciendo el campo  <code>disabled</code> en las opciones del objeto.</p>
<demo-block>
        <div><p>En este ejemplo, el primer ítem en el array <code>options</code> tiene un campo <code>disabled: true</code>, por lo que está deshabilitado. De forma predeterminada, Cascader comprueba el campo <code>disabled</code> en cada objeto de las opciones; si está utilizando otro nombre de campo para indicar si una opción está deshabilitada, puede asignarla en el atributo <code>props.disabled</code> (consulte la tabla de la API a continuación para obtener más detalles). Y por supuesto, el nombre de campo <code>value</code>, <code>label</code> y <code>children</code> también se pueden personalizar de la misma manera.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-cascader :options=&quot;options&quot;&gt;&lt;/el-cascader&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          disabled: true,
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="limpiable"><a class="header-anchor" href="#limpiable">¶</a> Limpiable</h3>
<p>Establezca el atributo <code>clearable</code> para <code>el-cascader</code> y aparecerá un icono de borrado cuando se seleccione y se pase el ratón por encima.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-cascader :options=&quot;options&quot; clearable&gt;&lt;/el-cascader&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="visualizar-solo-el-ultimo-nivel"><a class="header-anchor" href="#visualizar-solo-el-ultimo-nivel">¶</a> Visualizar sólo el último nivel</h3>
<p>La entrada puede mostrar sólo el último nivel en lugar de todos los niveles.</p>
<demo-block>
        <div><p>El atributo <code>show-all-levels</code> define si se muestran todos los niveles. Si es <code>false</code>, sólo se muestra el último nivel.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-cascader :options=&quot;options&quot; :show-all-levels=&quot;false&quot;&gt;&lt;/el-cascader&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="seleccion-multiple"><a class="header-anchor" href="#seleccion-multiple">¶</a> Selección múltiple</h3>
<p>Establezca <code>props.multiple = true</code> para usar la selección múltiple.</p>
<demo-block>
        <div><p>Cuando se utiliza la selección múltiple, todas las etiquetas seleccionadas se mostrarán de forma predeterminada, usted puede establecer <code>collapse-tags = true</code> para plegar las etiquetas seleccionadas.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Display all tags (default)&lt;/span&gt;
  &lt;el-cascader
    :options=&quot;options&quot;
    :props=&quot;props&quot;
    clearable&gt;&lt;/el-cascader&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Collapse tags&lt;/span&gt;
  &lt;el-cascader
    :options=&quot;options&quot;
    :props=&quot;props&quot;
    collapse-tags
    clearable&gt;&lt;/el-cascader&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        props: { multiple: true },
        options: [{
          value: 1,
          label: 'Asia',
          children: [{
            value: 2,
            label: 'China',
            children: [
              { value: 3, label: 'Beijing' },
              { value: 4, label: 'Shanghai' },
              { value: 5, label: 'Hangzhou' }
            ]
          }, {
            value: 6,
            label: 'Japan',
            children: [
              { value: 7, label: 'Tokyo' },
              { value: 8, label: 'Osaka' },
              { value: 9, label: 'Kyoto' }
            ]
          }, {
            value: 10,
            label: 'Korea',
            children: [
              { value: 11, label: 'Seoul' },
              { value: 12, label: 'Busan' },
              { value: 13, label: 'Taegu' }
            ]
          }]
        }, {
          value: 14,
          label: 'Europe',
          children: [{
            value: 15,
            label: 'France',
            children: [
              { value: 16, label: 'Paris' },
              { value: 17, label: 'Marseille' },
              { value: 18, label: 'Lyon' }
            ]
          }, {
            value: 19,
            label: 'UK',
            children: [
              { value: 20, label: 'London' },
              { value: 21, label: 'Birmingham' },
              { value: 22, label: 'Manchester' }
            ]
          }]
        }, {
          value: 23,
          label: 'North America',
          children: [{
            value: 24,
            label: 'US',
            children: [
              { value: 25, label: 'New York' },
              { value: 26, label: 'Los Angeles' },
              { value: 27, label: 'Washington' }
            ]
          }, {
            value: 28,
            label: 'Canada',
            children: [
              { value: 29, label: 'Toronto' },
              { value: 30, label: 'Montreal' },
              { value: 31, label: 'Ottawa' }
            ]
          }]
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="seleccione-cualquier-nivel-de-opciones"><a class="header-anchor" href="#seleccione-cualquier-nivel-de-opciones">¶</a> Seleccione cualquier nivel de opciones</h3>
<p>En la selección única, sólo se pueden comprobar los nodos de la hoja, y en la selección múltiple, los nodos padres de la comprobación conducirán a que los nodos de la hoja se comprueben con el tiempo. Cuando se activa esta función, puede hacer que los nodos padre e hijo se desacoplen y usted puede seleccionar cualquier nivel de opciones.</p>
<demo-block>
        <div><p>Establezca <code>props.checkStrictly = true</code> para que el estado comprobado de un nodo no afecte a sus nodos padre y nodos hijos, y entonces podrá seleccionar cualquier nivel de opciones.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Select any level of options (Single selection)&lt;/span&gt;
  &lt;el-cascader
    :options=&quot;options&quot;
    :props=&quot;{ checkStrictly: true }&quot;
    clearable&gt;&lt;/el-cascader&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Select any level of options (Multiple selection)&lt;/span&gt;
  &lt;el-cascader
    :options=&quot;options&quot;
    :props=&quot;{ multiple: true, checkStrictly: true }&quot;
    clearable&gt;&lt;/el-cascader&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="carga-dinamica"><a class="header-anchor" href="#carga-dinamica">¶</a> Carga dinámica</h3>
<p>Carga dinámica de sus nodos hijos cuando se selecciona un nodo.</p>
<demo-block>
        <div><p>Establezca <code>lazy = true</code> para utilizar la carga dinámica, y deberá especificar cómo cargar la fuente de datos mediante <code>lazyload</code>. Hay dos parámetros de <code>lazyload</code>, el primer parámetro <code>node</code> es el nodo en el que se hace clic actualmente, y el <code>resolve</code> es una llamada de retorno que indica que la carga ha terminado y que debe invocarse. Para mostrar el estado del nodo con mayor precisión, puede añadir un campo <code>leaf</code> (puede ser modificado por <code>props.leaf</code>) para indicar si se trata de un nodo de hoja. De lo contrario, se deducirá verificando si tiene algún nodo hijo.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-cascader :props=&quot;props&quot;&gt;&lt;/el-cascader&gt;

&lt;script&gt;
  let id = 0;

  export default {
    data() {
      return {
        props: {
          lazy: true,
          lazyLoad (node, resolve) {
            const { level } = node;
            setTimeout(() =&gt; {
              const nodes = Array.from({ length: level + 1 })
                .map(item =&gt; ({
                  value: ++id,
                  label: `Option - ${id}`,
                  leaf: level &gt;= 2
                }));
              // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
              resolve(nodes);
            }, 1000);
          }
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="filtrable"><a class="header-anchor" href="#filtrable">¶</a> Filtrable</h3>
<p>Buscar y seleccionar opciones con una palabra clave.</p>
<demo-block>
        <div><p>Añadir <code>filtrable</code> a <code>el-cascader</code> permite el filtrado. Cascader hará coincidir los nodos cuya etiqueta o etiqueta de padre (de acuerdo con <code>show-all-levels</code>) incluya una palabra clave de entrada. Por supuesto, puedes personalizar la lógica de búsqueda mediante el <code>filter-method</code> que acepta una función, el primer parámetro es <code>nodo</code>, el segundo es <code>keyword</code>, y necesitas devolver un valor booleano que indique si da en el blanco.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Filterable (Single selection)&lt;/span&gt;
  &lt;el-cascader
    placeholder=&quot;Try searchingL Guide&quot;
    :options=&quot;options&quot;
    filterable&gt;&lt;/el-cascader&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Filterable (Multiple selection)&lt;/span&gt;
  &lt;el-cascader
    placeholder=&quot;Try searchingL Guide&quot;
    :options=&quot;options&quot;
    :props=&quot;{ multiple: true }&quot;
    filterable&gt;&lt;/el-cascader&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="contenido-de-opciones-personalizadas"><a class="header-anchor" href="#contenido-de-opciones-personalizadas">¶</a> Contenido de opciones personalizadas</h3>
<p>Puede personalizar el contenido del nodo de cascada.</p>
<demo-block>
        <div><p>Puede personalizar el contenido del nodo del cascader mediante <code>scoped slot</code>. Tendrá acceso a <code>node</code> y <code>data</code> en el ámbito de aplicación, representando el objeto Node y los datos del nodo actual respectivamente.</p>
</div>
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-cascader :options=&quot;options&quot;&gt;
  &lt;template slot-scope=&quot;{ node, data }&quot;&gt;
    &lt;span&gt;{{ data.label }}&lt;/span&gt;
    &lt;span v-if=&quot;!node.isLeaf&quot;&gt; ({{ data.children.length }}) &lt;/span&gt;
  &lt;/template&gt;
&lt;/el-cascader&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="panel-cascader"><a class="header-anchor" href="#panel-cascader">¶</a> Panel cascader</h3>
<p><code>CascaderPanel</code> es el componente central de <code>Cascader</code> que tiene varias características como selección única, selección múltiple, carga dinámica, etc.</p>
<demo-block>
        <div><p>Al igual que <code>el-cascader</code>, puede establecer opciones alternativas mediante <code>options</code>, y habilitar otras características mediante <code>props</code>, consulte el formulario de la API a continuación para obtener más detalles.</p>
</div>
        <template slot="source"><element-demo9 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-cascader-panel :options=&quot;options&quot;&gt;&lt;/el-cascader-panel&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="atributos-de-cascader"><a class="header-anchor" href="#atributos-de-cascader">¶</a> Atributos de Cascader</h3>
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
<td>value / v-model</td>
<td>valor ligado</td>
<td>-</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>options</td>
<td>datos de las opciones，las claves <code>value</code> y <code>label</code> pueden ser personalizadas por <code>Props</code>.</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>opciones de configuración, consulte la siguiente tabla.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del input</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder del input</td>
<td>string</td>
<td>—</td>
<td>Select</td>
</tr>
<tr>
<td>disabled</td>
<td>si Cascader esta deshabilitada</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>clearable</td>
<td>si el valor seleccionado puede ser borrado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-all-levels</td>
<td>si muestra todos los niveles del valor seleccionado en el input</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>collapse-tags</td>
<td>si se colapsan los tags en la selección múltiple</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>separator</td>
<td>separador de las etiquetas de las opciones</td>
<td>string</td>
<td>—</td>
<td>' / '</td>
</tr>
<tr>
<td>filterable</td>
<td>si las opciones pueden ser usadas para la búsqueda</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-method</td>
<td>lógica de búsqueda personalizable. El primer parámetro es <code>node</code>, el segundo es <code>keyword</code>, y es necesario devolver un valor boolean que indique si se ha tenido éxito.</td>
<td>function(node, keyword)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>debounce</td>
<td>retraso en mili segundos para el tipeo de los datos de filtro</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>before-filter</td>
<td>hook antes de filtrar con el valor a filtrar como parámetro. Si se devuelve <code>false</code> o se devuelve una <code>Promise</code> y luego se rechaza, se abortará el filtrado.</td>
<td>function(value)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-class</td>
<td>nombre de clase personalizado para el menú desplegable de Cascader</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="eventos-de-cascader"><a class="header-anchor" href="#eventos-de-cascader">¶</a> Eventos de Cascader</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>se desencadena cuando cambia el valor ligado.</td>
<td>valor</td>
</tr>
<tr>
<td>expand-change</td>
<td>se desencadena cuando las opciones expandidas cambian</td>
<td>un array de los nodos padres del nodo en expansión</td>
</tr>
<tr>
<td>blur</td>
<td>se desencadena cuando Cascader se desenfoca</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>se activa cuando Cascader se enfoca</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>visible-change</td>
<td>se activa cuando aparece/desaparece el menú desplegable</td>
<td>verdadero cuando aparece, y falso de otra manera</td>
</tr>
<tr>
<td>remove-tag</td>
<td>se activa cuando se quita la etiqueta en modo de selección múltiple</td>
<td>el valor de la etiqueta que se quita</td>
</tr>
</tbody>
</table>
<h3 id="cascader-metodos"><a class="header-anchor" href="#cascader-metodos">¶</a> Cascader Métodos</h3>
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
<td>getCheckedNodes</td>
<td>Obtiene el array de los nodos seleccionados actualmente</td>
<td>(leafOnly) Si solo devuelve los nodos chequeados, por defecto es <code>false</code></td>
</tr>
</tbody>
</table>
<h3 id="slots-de-cascader"><a class="header-anchor" href="#slots-de-cascader">¶</a> Slots de Cascader</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>el contenido personalizado del nodo cascader, el parámetro es { node, data }, que son el actual objeto Node y los datos del nodo respectivamente.</td>
</tr>
<tr>
<td>empty</td>
<td>cuando no hay opciones coincidentes.</td>
</tr>
</tbody>
</table>
<h3 id="atributos-del-cascaderpanel"><a class="header-anchor" href="#atributos-del-cascaderpanel">¶</a> Atributos del CascaderPanel</h3>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>value / v-model</td>
<td>valor ligado</td>
<td>-</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>options</td>
<td>datos de las opciones，las claves <code>value</code> y <code>label</code> pueden ser personalizadas por <code>Props</code>.</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>opciones de configuración, consulte la siguiente tabla.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="eventos-de-cascaderpanel"><a class="header-anchor" href="#eventos-de-cascaderpanel">¶</a> Eventos de CascaderPanel</h3>
<table>
<thead>
<tr>
<th>Evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>se desencadena cuando cambia el valor ligado.</td>
<td>valor</td>
</tr>
<tr>
<td>expand-change</td>
<td>se desencadena cuando las opciones expandidas cambian</td>
<td>un array de los nodos padres del nodo en expansión</td>
</tr>
</tbody>
</table>
<h3 id="cascaderpanel-metodos"><a class="header-anchor" href="#cascaderpanel-metodos">¶</a> CascaderPanel Métodos</h3>
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
<td>getCheckedNodes</td>
<td>Obtiene el array de los nodos seleccionados actualmente</td>
<td>(leafOnly) Si solo devuelve los nodos chequeados, por defecto es <code>false</code></td>
</tr>
<tr>
<td>clearCheckedNodes</td>
<td>Limpia de nodos chequeados</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="slots-de-cascaderpanel"><a class="header-anchor" href="#slots-de-cascaderpanel">¶</a> Slots de CascaderPanel</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>el contenido personalizado del nodo cascader, el parámetro es { node, data }, que son el actual objeto Node y los datos del nodo respectivamente.</td>
</tr>
</tbody>
</table>
<h3 id="props"><a class="header-anchor" href="#props">¶</a> Props</h3>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>expandTrigger</td>
<td>modo de disparo de las opciones de ampliación</td>
<td>string</td>
<td>click / hover</td>
<td>'click'</td>
</tr>
<tr>
<td>multiple</td>
<td>si la selección múltiple esta activada</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>checkStrictly</td>
<td>si el estado verificado de un nodo no afecta a sus nodos padre e hijo</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>emitPath</td>
<td>cuando los nodos marcados cambian, si emitir o no un array de la ruta de un nodo, si es falso, sólo emite el valor del nodo.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>lazy</td>
<td>si se deben cargar dinámicamente nodos hijo, usarlo con el atributo <code>lazyload</code>.</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>lazyLoad</td>
<td>para cargar datos de nodos hijo, sólo funciona cuando <code>lazy</code> es verdadero</td>
<td>function(node, resolve)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>especificar qué clave de objeto de nodo se utiliza como valor del nodo</td>
<td>string</td>
<td>—</td>
<td>'value'</td>
</tr>
<tr>
<td>label</td>
<td>especificar qué clave de objeto de nodo se utiliza como etiqueta del nodo</td>
<td>string</td>
<td>—</td>
<td>'label'</td>
</tr>
<tr>
<td>children</td>
<td>especificar qué clave de objeto de nodo se utiliza como hijo del nodo</td>
<td>string</td>
<td>—</td>
<td>'children'</td>
</tr>
<tr>
<td>disabled</td>
<td>especificar qué clave de objeto de nodo se utiliza como nodo desactivado</td>
<td>string</td>
<td>—</td>
<td>'disabled'</td>
</tr>
<tr>
<td>leaf</td>
<td>especificar qué clave de objeto de nodo se utiliza como campo de hoja del nodo</td>
<td>string</td>
<td>—</td>
<td>'leaf'</td>
</tr>
</tbody>
</table>
