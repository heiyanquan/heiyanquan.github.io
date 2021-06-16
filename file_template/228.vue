<h2 id="select"><a class="header-anchor" href="#select">¶</a> Select</h2>
<p>Cuando haya muchas opciones, utilice un menú desplegable para mostrar y seleccionar las que desee.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p><code>v-model</code> es el valor de  <code>el-option</code> que está seleccionado actualmente.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disabled-en-el-option"><a class="header-anchor" href="#disabled-en-el-option">¶</a> Disabled en el-option</h3>
<demo-block>
        <div><p>Establezca el valor de <code>disabled</code> en <code>el-option</code>  como <code>true</code> para deshabilitar esta opción.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;
      :disabled=&quot;item.disabled&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2',
          disabled: true
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disabled-en-el-select"><a class="header-anchor" href="#disabled-en-el-select">¶</a> Disabled en el-select</h3>
<p>Desactivar todo el componente.</p>
<demo-block>
        <div><p>Configure <code>disabled</code> de <code>el-select</code> para deshabilitarla.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; disabled placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="select-simple-limpiable"><a class="header-anchor" href="#select-simple-limpiable">¶</a> Select simple limpiable</h3>
<p>Puede limpiar un Select con un icono.</p>
<demo-block>
        <div><p>Establezca el atributo <code>clearable</code> para <code>el-select</code>  y aparecerá un icono. Tenga en cuenta que la opción <code>clearable</code> es sólo para una selección individual.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; clearable placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="seleccion-multiple-basica"><a class="header-anchor" href="#seleccion-multiple-basica">¶</a> Selección múltiple básica</h3>
<p>Selección múltiple utiliza tags para mostrar las opciones seleccionadas.</p>
<demo-block>
        <div><p>Configure el atributo <code>multiple</code> para <code>el-select</code> para habilitar el modo múltiple. En este caso, el valor del <code>v-model</code> será un array de opciones seleccionadas. De forma predeterminada, las opciones seleccionadas se mostrarán como tags. Se pueden contraer a un texto utilizando el atributo  <code>collapse-tags</code>.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value1&quot; multiple placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;

  &lt;el-select
    v-model=&quot;value2&quot;
    multiple
    collapse-tags
    style=&quot;margin-left: 20px;&quot;
    placeholder=&quot;Select&quot;&gt;
    &lt;el-option
        v-for=&quot;item in options&quot;
        :key=&quot;item.value&quot;
        :label=&quot;item.label&quot;
        :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value1: [],
        value2: []
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="personalizar-template"><a class="header-anchor" href="#personalizar-template">¶</a> Personalizar template</h3>
<p>Puede personalizar templates HTML para las opciones.</p>
<demo-block>
        <div><p>Inserte templates HTML personalizados en el slot de <code>el-option</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in cities&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
      &lt;span style=&quot;float: left&quot;&gt;{{ item.label }}&lt;/span&gt;
      &lt;span style=&quot;float: right; color: #8492a6; font-size: 13px&quot;&gt;{{ item.value }}&lt;/span&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: 'Beijing'
        }, {
          value: 'Shanghai',
          label: 'Shanghai'
        }, {
          value: 'Nanjing',
          label: 'Nanjing'
        }, {
          value: 'Chengdu',
          label: 'Chengdu'
        }, {
          value: 'Shenzhen',
          label: 'Shenzhen'
        }, {
          value: 'Guangzhou',
          label: 'Guangzhou'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="agrupando"><a class="header-anchor" href="#agrupando">¶</a> Agrupando</h3>
<p>Mostrar opciones en grupos.</p>
<demo-block>
        <div><p>Utilice <code>el-option-group</code> para agrupar las opciones, y su atributo <code>label</code> representa el nombre del grupo.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option-group
      v-for=&quot;group in options&quot;
      :key=&quot;group.label&quot;
      :label=&quot;group.label&quot;&gt;
      &lt;el-option
        v-for=&quot;item in group.options&quot;
        :key=&quot;item.value&quot;
        :label=&quot;item.label&quot;
        :value=&quot;item.value&quot;&gt;
      &lt;/el-option&gt;
    &lt;/el-option-group&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          label: 'Popular cities',
          options: [{
            value: 'Shanghai',
            label: 'Shanghai'
          }, {
            value: 'Beijing',
            label: 'Beijing'
          }]
        }, {
          label: 'City name',
          options: [{
            value: 'Chengdu',
            label: 'Chengdu'
          }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
          }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
          }, {
            value: 'Dalian',
            label: 'Dalian'
          }]
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="filtrado-de-opciones"><a class="header-anchor" href="#filtrado-de-opciones">¶</a> Filtrado de opciones</h3>
<p>Puede filtrar opciones como lo desee.</p>
<demo-block>
        <div><p>Añadir <code>filterable</code> a <code>el-select</code> permite filtrar. Por defecto, Select buscará todas las opciones cuyo atributo<code>label</code> contenga el valor del input. Si prefiere otras estrategias de filtrado, puede pasar el <code>filter-method</code>. <code>filter-method</code> es una función que se llama cuando el valor del input cambia, y su parámetro es el valor del input actual.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; filterable placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="busqueda-remota"><a class="header-anchor" href="#busqueda-remota">¶</a> Búsqueda remota</h3>
<p>Introduzca palabras y datos para buscar desde el servidor.</p>
<demo-block>
        <div><p>Configure el valor de <code>filterable</code> y <code>remote</code> con <code>true</code> para habilitar la búsqueda remota, y debería pasar el método <code>remote-method</code>. <code>remote-method</code> es una función que se llama cuando el valor del input cambia, y su parámetro es el valor del input actual. Tenga en cuenta que si <code>el-option</code> se presenta con la directiva <code>v-for</code>, debe agregar el atributo <code>key</code> para <code>el-option</code>. Su valor tiene que ser unívoco, como el valor de <code>item.value</code> en el ejemplo siguiente.</p>
</div>
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select
    v-model=&quot;value&quot;
    multiple
    filterable
    remote
    reserve-keyword
    placeholder=&quot;Please enter a keyword&quot;
    :remote-method=&quot;remoteMethod&quot;
    :loading=&quot;loading&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [],
        value: [],
        list: [],
        loading: false,
        states: [&quot;Alabama&quot;, &quot;Alaska&quot;, &quot;Arizona&quot;,
        &quot;Arkansas&quot;, &quot;California&quot;, &quot;Colorado&quot;,
        &quot;Connecticut&quot;, &quot;Delaware&quot;, &quot;Florida&quot;,
        &quot;Georgia&quot;, &quot;Hawaii&quot;, &quot;Idaho&quot;, &quot;Illinois&quot;,
        &quot;Indiana&quot;, &quot;Iowa&quot;, &quot;Kansas&quot;, &quot;Kentucky&quot;,
        &quot;Louisiana&quot;, &quot;Maine&quot;, &quot;Maryland&quot;,
        &quot;Massachusetts&quot;, &quot;Michigan&quot;, &quot;Minnesota&quot;,
        &quot;Mississippi&quot;, &quot;Missouri&quot;, &quot;Montana&quot;,
        &quot;Nebraska&quot;, &quot;Nevada&quot;, &quot;New Hampshire&quot;,
        &quot;New Jersey&quot;, &quot;New Mexico&quot;, &quot;New York&quot;,
        &quot;North Carolina&quot;, &quot;North Dakota&quot;, &quot;Ohio&quot;,
        &quot;Oklahoma&quot;, &quot;Oregon&quot;, &quot;Pennsylvania&quot;,
        &quot;Rhode Island&quot;, &quot;South Carolina&quot;,
        &quot;South Dakota&quot;, &quot;Tennessee&quot;, &quot;Texas&quot;,
        &quot;Utah&quot;, &quot;Vermont&quot;, &quot;Virginia&quot;,
        &quot;Washington&quot;, &quot;West Virginia&quot;, &quot;Wisconsin&quot;,
        &quot;Wyoming&quot;]
      }
    },
    mounted() {
      this.list = this.states.map(item =&gt; {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() =&gt; {
            this.loading = false;
            this.options = this.list.filter(item =&gt; {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) &gt; -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="crear-nuevos-items"><a class="header-anchor" href="#crear-nuevos-items">¶</a> Crear nuevos items</h3>
<p>Crear y seleccionar nuevos items que no están incluidas en las opciones de selección.</p>
<demo-block>
        <div><p>Al utilizar el atributo <code>allow-create</code>, los usuarios pueden crear nuevos elementos escribiendo en el cuadro del input. Tenga en cuenta que para que <code>allow-create</code> funcione, <code>filterable</code> debe ser <code>true</code>.</p>
</div>
        <template slot="source"><element-demo9 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select
    v-model=&quot;value&quot;
    multiple
    filterable
    allow-create
    placeholder=&quot;Choose tags for your article&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value: []
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>Si el valor de encuadernación de Select es un objeto, asegúrese de asignar <code>value-key</code> como el nombre único de la clave de identidad.</p>
</div>
<h3 id="select-atributos"><a class="header-anchor" href="#select-atributos">¶</a> Select atributos</h3>
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
<td>valor enlazado</td>
<td>boolean / string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>multiple</td>
<td>si multiple-select esta activo</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>si Select esta deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>collapse-tags</td>
<td>si se colapsan los tags a un texto cuando <code>multiple</code> es <code>true</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value-key</td>
<td>nombre de clave de identidad única para el valor, necesario cuando el valor es un objeto.</td>
<td>string</td>
<td>—</td>
<td>value</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del Input</td>
<td>string</td>
<td>large/small/mini</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>si el select puede ser limpiado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>multiple-limit</td>
<td>máximo numero de opciones que el usuario puede seleccionar cuando <code>multiple</code> es <code>true</code>.  Sin límite cuando se fija a 0</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>name</td>
<td>el atributo <code>name</code> del input seleccionado</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>autocomplete</td>
<td>el atributo <code>autocomplete</code> del input seleccionado</td>
<td>string</td>
<td>—</td>
<td>off</td>
</tr>
<tr>
<td>auto-complete</td>
<td>@DEPRECATED en la proxima major versión</td>
<td>string</td>
<td>—</td>
<td>off</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder</td>
<td>string</td>
<td>—</td>
<td>Select</td>
</tr>
<tr>
<td>filterable</td>
<td>si Select es filtrable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-create</td>
<td>si esta permitido crear nuevos items. Para usar esto, <code>filterable</code> debe ser <code>true</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filter-method</td>
<td>método de filtrado personalizado</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>remote</td>
<td>si las opciones se traerán desde el servidor</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>remote-method</td>
<td>método de búsqueda remota personalizada</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>loading</td>
<td>si Select está cargando datos del servidor</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>loading-text</td>
<td>texto mostrado durante la carga de datos del servidor, también puedes usar la configuración de slot = &quot;empty&quot;</td>
<td>string</td>
<td>—</td>
<td>Loading</td>
</tr>
<tr>
<td>no-match-text</td>
<td>texto mostrado cuando ningún dato coincide con la consulta de filtrado. También puedes usar la configuración de slot = &quot;empty&quot;</td>
<td>string</td>
<td>—</td>
<td>No matching data</td>
</tr>
<tr>
<td>no-data-text</td>
<td>texto mostrado cuando no hay opciones</td>
<td>string</td>
<td>—</td>
<td>No data</td>
</tr>
<tr>
<td>popper-class</td>
<td>nombre de clase personalizado para el menú desplegable del Select</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>reserve-keyword</td>
<td>cuando <code>multiple</code> y <code>filter</code> es <code>true</code>, si se debe reservar la palabra clave actual después de seleccionar una opción.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-first-option</td>
<td>seleccione la primera opción de coincidencia en la tecla enter. Uso con <code>filterable</code> o <code>remote</code>.</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>si añadir o no el menu popup al body. Si el posicionamiento del popup es incorrecto, puede intentar poner este <code>prop</code> en <code>false</code>.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>automatic-dropdown</td>
<td>para non-filterable Select, este <code>prop</code> decide si el menú de opciones aparece cuando la entrada está enfocada</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="eventos-select"><a class="header-anchor" href="#eventos-select">¶</a> Eventos Select</h3>
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
<td>se dispara cuando el valor del select cambia</td>
<td>valor actual del select</td>
</tr>
<tr>
<td>visible-change</td>
<td>se dispara cuando el menú desplegable aparece o desaparece</td>
<td>true cuando aparece, y false en otro caso</td>
</tr>
<tr>
<td>remove-tag</td>
<td>se dispara cuando un tag es removido en modo múltiple</td>
<td>el valor del tag removido</td>
</tr>
<tr>
<td>clear</td>
<td>se dispara cuando el icono se clickea en un Select limpiable</td>
<td>—</td>
</tr>
<tr>
<td>blur</td>
<td>se dispara cuando el input pierde el foco</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>se dispara cuando el input obtiene el foco</td>
<td>(event: Event)</td>
</tr>
</tbody>
</table>
<h3 id="slots-select"><a class="header-anchor" href="#slots-select">¶</a> Slots Select</h3>
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
<td>lista de los componentes Option</td>
</tr>
<tr>
<td>prefix</td>
<td>contenido prefix de un  Select</td>
</tr>
<tr>
<td>empty</td>
<td>Lista sin opciones</td>
</tr>
</tbody>
</table>
<h3 id="atributos-del-grupo-de-opciones"><a class="header-anchor" href="#atributos-del-grupo-de-opciones">¶</a> Atributos del grupo de opciones</h3>
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
<td>nombre del grupo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si se deshabilitan todas las opciones del grupo</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="atributos-de-opciones"><a class="header-anchor" href="#atributos-de-opciones">¶</a> Atributos de opciones</h3>
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
<td>value</td>
<td>valor de option</td>
<td>string/number/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>etiqueta de option, es igual a  <code>value</code> si se omite</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si  option esta deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="metodos"><a class="header-anchor" href="#metodos">¶</a> Métodos</h3>
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
<td>focus</td>
<td>Foco en el componente input</td>
<td>-</td>
</tr>
<tr>
<td>blur</td>
<td>Quita el focus del componente y oculta el dropdown</td>
<td>-</td>
</tr>
</tbody>
</table>
