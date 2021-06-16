<h2 id="transfer"><a class="header-anchor" href="#transfer">¶</a> Transfer</h2>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>Los datos se pasan a Transfer a través del atributo <code>data</code>. Los datos tienen que ser un array de objetos, y cada objeto debe tener estos atributos: <code>key</code> que será el identificador del ítem, <code>label</code> que será el texto a mostrar, y <code>disabled</code> que indicará si el elemento esta desactivado. Los items dentro de la lista destino están sincronizados con la variable asociada a <code>v-model</code>, y el valor de esa variable es un array de claves de los elementos de la lista destino. Así que si no quiere que la lista destino esté vacía inicialmente puede inicializar el <code>v-model</code> con un array.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer
    v-model=&quot;value&quot;
    :data=&quot;data&quot;&gt;
  &lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        for (let i = 1; i &lt;= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="filtrar"><a class="header-anchor" href="#filtrar">¶</a> Filtrar</h3>
<p>Puede buscar y filtrar los items.</p>
<demo-block>
        <div><p>Ponga el atributo <code>filterable</code> a true para permitir el filtrado. Por defecto si el <code>label</code> del ítem contiene el término buscado será incluido en el resultado. También puede implementar su propio método de filtrado con el atributo <code>filter-method</code>, que recibe un método y le pasa la búsqueda y cada ítem. Los items para los que devuelva true serán incluidos en el resultado de la búsqueda.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer
    filterable
    :filter-method=&quot;filterMethod&quot;
    filter-placeholder=&quot;State Abbreviations&quot;
    v-model=&quot;value&quot;
    :data=&quot;data&quot;&gt;
  &lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
        states.forEach((city, index) =&gt; {
          data.push({
            label: city,
            key: index,
            initial: initials[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.initial.toLowerCase().indexOf(query.toLowerCase()) &gt; -1;
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="personalizable"><a class="header-anchor" href="#personalizable">¶</a> Personalizable</h3>
<p>Puede personalizar los títulos, botones, la función de renderizado de los items, el texto de estatus de la cabecera y el contenido del pie.</p>
<demo-block>
        <div><p>Use <code>titles</code>, <code>button-texts</code>, <code>render-content</code> y <code>format</code> respectivamente para personalizar los títulos de las listas, el texto de los botones, la función de renderizado para los items y el texto de la cabecera que muestra el estado de los items. Además, también puede utilizar el scoped-slot para personalizar los elementos de datos. Para el pie de la lista hay dos slots: <code>left-footer</code> y <code>right-footer</code>. Además, si quiere algunos items marcados inicialmente puede usar <code>left-default-checked</code> y <code>right-default-checked</code>. Finalmente este ejemplo muestra el evento <code>change</code>. Tenga en cuenta que este ejemplo no se puede ejecutar en jsfiddle porque no soporta sintaxis JSX. En un proyecto real <code>render-content</code> funcionará si las dependencias son configuradas correctamente.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;p style=&quot;text-align: center; margin: 0 0 20px&quot;&gt;Customize data items using render-content&lt;/p&gt;
  &lt;div style=&quot;text-align: center&quot;&gt;
    &lt;el-transfer
      style=&quot;text-align: left; display: inline-block&quot;
      v-model=&quot;value&quot;
      filterable
      :left-default-checked=&quot;[2, 3]&quot;
      :right-default-checked=&quot;[1]&quot;
      :render-content=&quot;renderFunc&quot;
      :titles=&quot;['Source', 'Target']&quot;
      :button-texts=&quot;['To left', 'To right']&quot;
      :format=&quot;{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }&quot;
      @change=&quot;handleChange&quot;
      :data=&quot;data&quot;&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;left-footer&quot; size=&quot;small&quot;&gt;Operation&lt;/el-button&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;right-footer&quot; size=&quot;small&quot;&gt;Operation&lt;/el-button&gt;
    &lt;/el-transfer&gt;
  &lt;/div&gt;
  &lt;p style=&quot;text-align: center; margin: 50px 0 20px&quot;&gt;Customize data items using scoped slot&lt;/p&gt;
  &lt;div style=&quot;text-align: center&quot;&gt;
    &lt;el-transfer
      style=&quot;text-align: left; display: inline-block&quot;
      v-model=&quot;value4&quot;
      filterable
      :left-default-checked=&quot;[2, 3]&quot;
      :right-default-checked=&quot;[1]&quot;
      :titles=&quot;['Source', 'Target']&quot;
      :button-texts=&quot;['To left', 'To right']&quot;
      :format=&quot;{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }&quot;
      @change=&quot;handleChange&quot;
      :data=&quot;data&quot;&gt;
      &lt;span slot-scope=&quot;{ option }&quot;&gt;{{ option.key }} - {{ option.label }}&lt;/span&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;left-footer&quot; size=&quot;small&quot;&gt;Operation&lt;/el-button&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;right-footer&quot; size=&quot;small&quot;&gt;Operation&lt;/el-button&gt;
    &lt;/el-transfer&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        for (let i = 1; i &lt;= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return &lt;span&gt;{ option.key } - { option.label }&lt;/span&gt;;
        }
      };
    },

    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="prop-con-alias"><a class="header-anchor" href="#prop-con-alias">¶</a> Prop con alias</h3>
<p>Por defecto Transfer busca los atributos <code>key</code>, <code>label</code>, y <code>disabled</code> en cada elemento. Si sus datos tienen un nombre diferente para la clave puede usar el atributo <code>props</code> para añadir alias.</p>
<demo-block>
        <div><p>En este ejemplo los elementos no tienen <code>key</code>y <code>label</code>, en vez de eso tienen <code>value</code> y <code>desc</code>. Así que tiene que añadir alias para <code>key</code> y <code>label</code>.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer
    v-model=&quot;value&quot;
    :props=&quot;{
      key: 'value',
      label: 'desc'
    }&quot;
    :data=&quot;data&quot;&gt;
  &lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        for (let i = 1; i &lt;= 15; i++) {
          data.push({
            value: i,
            desc: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: []
      };
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
<td>value / v-model</td>
<td>valor enlazado</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>Origen de datos</td>
<td>array[{ key, label, disabled }]</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>filterable</td>
<td>Si se puede filtrar</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filter-placeholder</td>
<td>Placeholder para el input del filtro</td>
<td>string</td>
<td>—</td>
<td>Enter keyword</td>
</tr>
<tr>
<td>filter-method</td>
<td>Método de filtrado</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>target-order</td>
<td>estrategia de órdenes para elementos de la lista destino. Si está configurado en <code>original</code>, los elementos mantendrán el mismo orden que la fuente de datos. Si está configurado para <code>push</code>, los nuevos elementos añadidos se insertaran al final. Si se ajusta a <code>unshift</code>, los nuevos elementos añadidos se insertarán en la parte superior.</td>
<td>string</td>
<td>original / push / unshift</td>
<td>original</td>
</tr>
<tr>
<td>titles</td>
<td>Títulos de las listas</td>
<td>array</td>
<td>—</td>
<td>['List 1', 'List 2']</td>
</tr>
<tr>
<td>button-texts</td>
<td>Texto de los botones</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>render-content</td>
<td>Función de renderizado</td>
<td>function(h, option)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format</td>
<td>Texto para el status en el header</td>
<td>object{noChecked, hasChecked}</td>
<td>—</td>
<td>{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }</td>
</tr>
<tr>
<td>props</td>
<td>prop alias para el origen de datos</td>
<td>object{key, label, disabled}</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>left-default-checked</td>
<td>Array de claves de los elementos marcados inicialmente en la lista de la izquierda</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>right-default-checked</td>
<td>Array de claves de los elementos marcados inicialmente en la lista de la derecha</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>left-footer</td>
<td>Contenido del footer de la lista de la izquierda</td>
</tr>
<tr>
<td>right-footer</td>
<td>Contenido del footer de la lista de la derecha</td>
</tr>
</tbody>
</table>
<h3 id="scoped-slot"><a class="header-anchor" href="#scoped-slot">¶</a> Scoped Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Contenido personalizado para los datos de los items. El parámetro del scope es { option }</td>
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
<td>clearQuery</td>
<td>borra la palabra clave del filtro de un determinado panel</td>
<td>'left' / 'right'</td>
</tr>
</tbody>
</table>
<h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3>
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
<td>se lanza cuando los elementos cambian en la lista de la derecha</td>
<td>array con las claves de los elementos de la lista de la derecha</td>
</tr>
<tr>
<td>left-check-change</td>
<td>se dispara cuando el usuario final cambia el estado verificado de cualquier elemento de datos en la lista izquierda</td>
<td>array clave de ítems actualmente verificados, array clave de ítems cuyo estado verificado ha cambiado</td>
</tr>
<tr>
<td>right-check-change</td>
<td>se dispara cuando el usuario final cambia el estado verificado de cualquier elemento de datos en la lista derecha.</td>
<td>array clave de ítems actualmente verificados, array clave de ítems cuyo estado verificado ha cambiado</td>
</tr>
</tbody>
</table>
