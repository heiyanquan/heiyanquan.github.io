<h2 id="cascader"><a class="header-anchor" href="#cascader">¶</a> Cascader</h2>
<p>Si les options ont une structure hiérarchique claire, Le composant Cascader peut être utilisé pour les afficher et les sélectionner.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Il y a deux manières d'étendres les options enfants.</p>
<demo-block>
        <div><p>Assigner l'attribut <code>options</code> à un tableau d'options fournit un composant Cascader. L'attribut <code>props.expandTrigger</code> définit comment les options enfants sont étendues.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Les options enfants se développent lorsque vous cliquez dessus (par défaut)&lt;/span&gt;
  &lt;el-cascader
    v-model=&quot;value&quot;
    :options=&quot;options&quot;
    @change=&quot;handleChange&quot;&gt;&lt;/el-cascader&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Les options enfants se développent lorsqu'elles sont survolées&lt;/span&gt;
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
</code></pre></template></demo-block><h3 id="disabled-option"><a class="header-anchor" href="#disabled-option">¶</a> Disabled option</h3>
<p>Désactivez une option en définissant un champ <code>disabled</code> dans l'objet d'option.</p>
<demo-block>
        <div><p>Dans cet exemple, le premier élément du tableau <code>options</code> a un champ<code>disabled: true</code>, il est donc désactivé. Par défaut, Cascader vérifie le champ <code>disabled</code> dans chaque objet option. Si vous utilisez un autre nom de champ pour indiquer si une option est désactivée, vous pouvez l'affecter dans l'attribut <code>props.disabled</code> (voir le tableau des API ci-dessous pour plus de détails). Et bien sûr, les noms de champs <code>value</code>,<code>label</code> et <code>children</code> peuvent également être personnalisés de la même manière.</p>
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
</code></pre></template></demo-block><h3 id="clearable"><a class="header-anchor" href="#clearable">¶</a> Clearable</h3>
<p>Définissez l'attribut <code>clearable</code> pour<code>el-cascader</code> et une icône claire apparaîtra une fois sélectionnée et survolée</p>
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
</code></pre></template></demo-block><h3 id="display-only-the-last-level"><a class="header-anchor" href="#display-only-the-last-level">¶</a> Display only the last level</h3>
<p>L'entrée peut afficher uniquement le dernier niveau au lieu de tous les niveaux.</p>
<demo-block>
        <div><p>L'attribut <code>show-all-levels</code> définit si tous les niveaux sont affichés. S'il est <code>false</code>, seul le dernier niveau est affiché.</p>
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
</code></pre></template></demo-block><h3 id="multiple-selection"><a class="header-anchor" href="#multiple-selection">¶</a> Multiple Selection</h3>
<p>Définissez <code>props.multiple = true</code> pour utiliser la sélection multiple.</p>
<demo-block>
        <div><p>Lors de l'utilisation de la sélection multiple, toutes les balises sélectionnées seront affichées par défaut. Vous pouvez définir <code>collapse-tags = true</code> pour replier les balises sélectionnées.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Afficher toutes les balises (par défaut)&lt;/span&gt;
  &lt;el-cascader
    :options=&quot;options&quot;
    :props=&quot;props&quot;
    clearable&gt;&lt;/el-cascader&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Réduire les balises&lt;/span&gt;
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
</code></pre></template></demo-block><h3 id="select-any-level-of-options"><a class="header-anchor" href="#select-any-level-of-options">¶</a> Select any level of options</h3>
<p>Dans la sélection simple, seuls les noeuds terminaux peuvent être coché, et dans la sélection multiple, coché les noeuds parents cochera les noeuds terminaux. Lorsque cette fonctionnalité est activée, les noeuds parents et enfants peuvent être dissociés et vous pouvez sélectionner n’importe quel niveau d’options.</p>
<demo-block>
        <div><p>Définissez <code>props.checkStrictly = true</code> pour que l'état vérifié d'un noeud n'affecte pas ses noeuds parents et ses noeuds enfants. Vous pouvez ensuite sélectionner n'importe quel niveau d'options.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Sélectionnez n'importe quel niveau d'options (Sélection unique)&lt;/span&gt;
  &lt;el-cascader
    :options=&quot;options&quot;
    :props=&quot;{ checkStrictly: true }&quot;
    clearable&gt;&lt;/el-cascader&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Sélectionnez n'importe quel niveau d'options (sélection multiple)&lt;/span&gt;
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
</code></pre></template></demo-block><h3 id="dynamic-loading"><a class="header-anchor" href="#dynamic-loading">¶</a> Dynamic loading</h3>
<p>Charge dynamiquement ses noeuds enfants lorsque un noeud est sélectionné.</p>
<demo-block>
        <div><p>Définissez <code>lazy = true</code> pour utiliser le chargement dynamique. Vous devez Spécifier comment charger la source de données avec<code>lazyload</code>. Il existe deux paramètres de <code>lazyload</code>, le premier paramètre<code>node</code> est le noeud sur lequel l'utilisateur a cliqué, et <code>resolution</code> est un callback indiquant que le chargement est terminé et qu'il doit être appelé. Pour afficher le statut du noeud plus précisément, vous pouvez ajouter un champ <code>leaf</code> (modifiable par<code>props.leaf</code>) pour indiquer s'il s'agit d'un noeud feuille. Sinon, il sera déduit par ses noeuds enfants.</p>
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
              // Appelez le callback `resolve` pour renvoyer les données des noeuds enfants et indiquer que le chargement est terminé.
              resolve(nodes);
            }, 1000);
          }
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="filterable"><a class="header-anchor" href="#filterable">¶</a> Filterable</h3>
<p>Rechercher et sélectionner des options avec un mot clé.</p>
<demo-block>
        <div><p>Ajouter <code>filterable</code> à<code>el-cascader</code> permet le filtrage. Cascader recherchera les noeuds dont l'étiquette ou l'étiquette du parent (selon <code>show-all-levels</code>) inclut le mot-clé input. Bien sûr, vous pouvez personnaliser la logique de recherche en utilisant <code>filter-method</code> qui accepte une fonction, le premier paramètre est <code>node</code>, le second est <code>keyword</code> et doit renvoyer une valeur booléenne indiquant si le résultat est positif.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Filtrable (Sélection unique)&lt;/span&gt;
  &lt;el-cascader
    placeholder=&quot;Try searchingL Guide&quot;
    :options=&quot;options&quot;
    filterable&gt;&lt;/el-cascader&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Filtrable (Sélection multiple)&lt;/span&gt;
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
</code></pre></template></demo-block><h3 id="custom-option-content"><a class="header-anchor" href="#custom-option-content">¶</a> Custom option content</h3>
<p>Vous pouvez personnaliser le contenu du noeud cascader.</p>
<demo-block>
        <div><p>Vous pouvez personnaliser le contenu du noeud cascader avec <code>scoped slot</code>. Vous aurez accès à <code>node</code> et<code>data</code> dans la portée, correspondant respectivement à l'objet Node et aux données de noeud du noeud actuel.</p>
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
</code></pre></template></demo-block><h3 id="cascader-panel"><a class="header-anchor" href="#cascader-panel">¶</a> Cascader panel</h3>
<p><code>CascaderPanel</code> est le composant principal de<code>Cascader</code>. Il comporte diverses fonctionnalités telles que la sélection unique, la sélection multiple, le chargement dynamique, etc.</p>
<demo-block>
        <div><p>Tout comme <code>el-cascader</code>, vous pouvez définir des options alternatives par <code>options</code>, et activer d'autres fonctionnalités par <code>props</code>, voir le formulaire d'API ci-dessous pour plus de détails.</p>
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
</code></pre></template></demo-block><h3 id="cascader-attributs"><a class="header-anchor" href="#cascader-attributs">¶</a> Cascader Attributs</h3>
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
<td>value / v-model</td>
<td>Valeur de liaison</td>
<td>-</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>options</td>
<td>Les données des options，la clé de <code>value</code> et <code>label</code> peuvent être personnalisées par <code>Props</code>.</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>Options de configuration, voir le tableau suivant.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>Taille de l'entrée</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>Placeholder de l'input</td>
<td>string</td>
<td>—</td>
<td>Select</td>
</tr>
<tr>
<td>disabled</td>
<td>Si Cascader est désactivé</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>clearable</td>
<td>Si la valeur sélectionnée peut être effacée</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-all-levels</td>
<td>Afficher ou non tous les niveaux de la valeur sélectionnée dans l'entrée</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>collapse-tags</td>
<td>Réduire ou non les balises en mode de sélection multiple</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>separator</td>
<td>Option label separator</td>
<td>string</td>
<td>—</td>
<td>' / '</td>
</tr>
<tr>
<td>filterable</td>
<td>Si les options peuvent être recherchées</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-method</td>
<td>Personnaliser la logique de recherche, le premier paramètre est <code>node</code>, le second est <code>keyword</code>, et doit renvoyer une valeur booléenne indiquant si le résultat est positif.</td>
<td>function(node, keyword)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>debounce</td>
<td>Délai de réponse lors de la saisie du mot clé de filtre, en millisecondes</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>before-filter</td>
<td>Hook fonction avant de filtrer avec la valeur à filtrer en tant que paramètre. Si <code>false</code> est renvoyé ou si une <code>Promise</code> est renvoyée puis rejetée, le filtrage sera annulé</td>
<td>function(value)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-class</td>
<td>Nom de classe personnalisé pour la liste déroulante de Cascader</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="cascader-events"><a class="header-anchor" href="#cascader-events">¶</a> Cascader Events</h3>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Se déclenche lorsque la valeur de liaison change</td>
<td>value</td>
</tr>
<tr>
<td>expand-change</td>
<td>Se déclenche lorsque l'option d'agrandissement change</td>
<td>an array of the expanding node's parent nodes</td>
</tr>
<tr>
<td>blur</td>
<td>Se déclenche lorsque Cascader blurs</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>Se déclenche lorsque Cascader à le focus</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>visible-change</td>
<td>Se déclenche lorsque le menu déroulant apparaît / disparaît</td>
<td>vrai quand il apparaît, et faux sinon</td>
</tr>
<tr>
<td>remove-tag</td>
<td>Se déclenche lors de la suppression d'une balise en mode de sélection multiple</td>
<td>la valeur de la balise qui est supprimée</td>
</tr>
</tbody>
</table>
<h3 id="cascader-methods"><a class="header-anchor" href="#cascader-methods">¶</a> Cascader Methods</h3>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>getCheckedNodes</td>
<td>get an array of currently selected node</td>
<td>(leafOnly) whether only return the leaf checked nodes, default is <code>false</code></td>
</tr>
</tbody>
</table>
<h3 id="cascader-slots"><a class="header-anchor" href="#cascader-slots">¶</a> Cascader Slots</h3>
<table>
<thead>
<tr>
<th>Slot Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Le contenu personnalisé du noeud cascader, le paramètre est { node, data }, qui sont respectivement les objets de noeud et les données de noeud actuels.</td>
</tr>
<tr>
<td>empty</td>
<td>Contenu quand il n'y a pas d'options correspondantes.</td>
</tr>
</tbody>
</table>
<h3 id="cascaderpanel-attributes"><a class="header-anchor" href="#cascaderpanel-attributes">¶</a> CascaderPanel Attributes</h3>
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
<td>value / v-model</td>
<td>Baleur de liaison</td>
<td>-</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>options</td>
<td>Les données des options, la clé de <code>value</code> et <code>label</code> peuvent être personnalisées par <code>Props</code>.</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>Options de configuration, voir le tableau suivant.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="cascaderpanel-events"><a class="header-anchor" href="#cascaderpanel-events">¶</a> CascaderPanel Events</h3>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Se déclenche lorsque la valeur de liaison change</td>
<td>value</td>
</tr>
<tr>
<td>expand-change</td>
<td>Se déclenche lorsque l'option d'agrandissement change</td>
<td>an array of the expanding node's parent nodes</td>
</tr>
</tbody>
</table>
<h3 id="cascaderpanel-methods"><a class="header-anchor" href="#cascaderpanel-methods">¶</a> CascaderPanel Methods</h3>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>getCheckedNodes</td>
<td>get an array of currently selected node</td>
<td>(leafOnly) whether only return the leaf checked nodes, default is <code>false</code></td>
</tr>
<tr>
<td>clearCheckedNodes</td>
<td>clear checked nodes</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="cascaderpanel-slots"><a class="header-anchor" href="#cascaderpanel-slots">¶</a> CascaderPanel Slots</h3>
<table>
<thead>
<tr>
<th>Slot Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Le contenu personnalisé du noeud cascader, le paramètre est { node, data }, qui sont respectivement les objets de noeud et les données de noeud actuels.</td>
</tr>
</tbody>
</table>
<h3 id="props"><a class="header-anchor" href="#props">¶</a> Props</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>expandTrigger</td>
<td>Mode de déclenchement des options de développement</td>
<td>string</td>
<td>click / hover</td>
<td>'click'</td>
</tr>
<tr>
<td>multiple</td>
<td>Si la sélection multiple est activée</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>checkStrictly</td>
<td>Si l'état coché d'un noeud n'affecte pas ses noeuds parents et enfants</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>emitPath</td>
<td>Lorsque les noeuds cochés changent, émet ou non un tableau du chemin du noeud. Si la valeur est false, n'émet que la valeur du noeud.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>lazy</td>
<td>S'il faut charger dynamiquement les noeuds enfants, utiliser avec l'attribut <code>lazyload</code></td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>lazyLoad</td>
<td>Méthode de chargement de données de noeuds enfants, ne fonctionne que lorsque <code>lazy</code> est vrai</td>
<td>function(node, resolve)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>Spécifie quelle clé de l'objet noeud est utilisée comme valeur du noeud</td>
<td>string</td>
<td>—</td>
<td>'value'</td>
</tr>
<tr>
<td>label</td>
<td>Spécifie quelle clé de l'objet noeud est utilisée comme label du noeud</td>
<td>string</td>
<td>—</td>
<td>'label'</td>
</tr>
<tr>
<td>children</td>
<td>Spécifie quelle clé de l'objet noeud est utilisée en tant qu'enfant du noeud</td>
<td>string</td>
<td>—</td>
<td>'children'</td>
</tr>
<tr>
<td>disabled</td>
<td>Spécifie quelle clé de l'objet noeud est utilisée comme noeud désactivé</td>
<td>string</td>
<td>—</td>
<td>'disabled'</td>
</tr>
<tr>
<td>leaf</td>
<td>Spécifie quelle clé de l'objet est noeud utilisée comme champ feuille du noeud</td>
<td>string</td>
<td>—</td>
<td>'leaf'</td>
</tr>
</tbody>
</table>
