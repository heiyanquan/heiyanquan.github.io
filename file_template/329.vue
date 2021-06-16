<h2 id="checkbox"><a class="header-anchor" href="#checkbox">¶</a> Checkbox</h2>
<p>Un grupo de opciones para manejar múltiples elecciones.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Checkbox puede ser usado para alternar entre dos estados.</p>
<demo-block>
        <div><p>Define <code>v-model</code>(enlaza la variable) en <code>el-checkbox</code>. El valor por defecto es un <code>Boolean</code> para un <code>checkbox</code>, y se convierte en <code>true</code> cuando este es seleccionado. El contenido dentro del tag <code>el-checkbox</code> se convierte en la descripción al costado del botón del checkbox.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;!-- `checked` debe ser true o false --&gt;
  &lt;el-checkbox v-model=&quot;checked&quot;&gt;Opción&lt;/el-checkbox&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="estado-deshabilitado"><a class="header-anchor" href="#estado-deshabilitado">¶</a> Estado Deshabilitado</h3>
<p>Estado deshabilitado para el checkbox.</p>
<demo-block>
        <div><p>Setear el atributo <code>disabled</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox v-model=&quot;checked1&quot; disabled&gt;Opción&lt;/el-checkbox&gt;
  &lt;el-checkbox v-model=&quot;checked2&quot; disabled&gt;Opción&lt;/el-checkbox&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="grupo-de-checkboxes"><a class="header-anchor" href="#grupo-de-checkboxes">¶</a> Grupo de Checkboxes</h3>
<p>Es usado por múltiples checkboxes los cuales están enlazados a un grupo, indica si una opción está seleccionada verificando si esta está marcada.</p>
<demo-block>
        <div><p>El elemento <code>checkbox-group</code> puede manejar múltiples checkboxes en un grupo usando <code>v-model</code> el cuál está enlazado a un <code>Array</code>. Dentro del elemento <code>el-checkbox</code>, <code>label</code> es el valor del checkbox. Si en ese tag no hay contenido anidado, <code>label</code> va a ser mostrado como la descripción al lado del botón del checkbox. <code>label</code> también se corresponde con los valores del array. Es seleccionado si el valor especificado existe en el array y viceversa.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox-group v-model=&quot;checkList&quot;&gt;
    &lt;el-checkbox label=&quot;Opción A&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;Opción B&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;Opción C&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;disabled&quot; disabled&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;Seleccionado y deshabilitado&quot; disabled&gt;&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        checkList: ['Seleccionado y deshabilitado','Opción A']
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="indeterminado"><a class="header-anchor" href="#indeterminado">¶</a> Indeterminado</h3>
<p>La propiedad <code>indeterminate</code> puede ser usada para generar el efecto de marcar todos (check all).</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox :indeterminate=&quot;isIndeterminate&quot; v-model=&quot;checkAll&quot; @change=&quot;handleCheckAllChange&quot;&gt;Marcar todos&lt;/el-checkbox&gt;
  &lt;div style=&quot;margin: 15px 0;&quot;&gt;&lt;/div&gt;
  &lt;el-checkbox-group v-model=&quot;checkedCities&quot; @change=&quot;handleCheckedCitiesChange&quot;&gt;
    &lt;el-checkbox v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount &gt; 0 &amp;&amp; checkedCount &lt; this.cities.length;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="cantidad-minima-maxima-de-elementos-seleccionados"><a class="header-anchor" href="#cantidad-minima-maxima-de-elementos-seleccionados">¶</a> Cantidad Mínima / Máxima de elementos seleccionados</h3>
<p>Las propiedades <code>min</code> y <code>max</code> pueden limitar la cantidad de elementos seleccionados.</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox-group 
    v-model=&quot;checkedCities&quot;
    :min=&quot;1&quot;
    :max=&quot;2&quot;&gt;
    &lt;el-checkbox v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="estilo-tipo-boton"><a class="header-anchor" href="#estilo-tipo-boton">¶</a> Estilo tipo Botón</h3>
<p>Checkbox con estilo tipo Botón.</p>
<demo-block>
        <div><p>Sólo debe cambiar el elemento <code>el-checkbox</code> por el elemento <code>el-checkbox-button</code>. También proveemos el atributo <code>size</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup1&quot;&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup2&quot; size=&quot;medium&quot;&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup3&quot; size=&quot;small&quot;&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :disabled=&quot;city === 'Beijing'&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup4&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default {
    data () {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="con-bordes"><a class="header-anchor" href="#con-bordes">¶</a> Con bordes</h3>
<demo-block>
        <div><p>El atributo <code>border</code> agrega un borde a los Checkboxes.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-checkbox v-model=&quot;checked1&quot; label=&quot;Opción1&quot; border&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox v-model=&quot;checked2&quot; label=&quot;Opción2&quot; border&gt;&lt;/el-checkbox&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox v-model=&quot;checked3&quot; label=&quot;Opción1&quot; border size=&quot;medium&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox v-model=&quot;checked4&quot; label=&quot;Opción2&quot; border size=&quot;medium&quot;&gt;&lt;/el-checkbox&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup1&quot; size=&quot;small&quot;&gt;
      &lt;el-checkbox label=&quot;Opción1&quot; border&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Opción2&quot; border disabled&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup2&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-checkbox label=&quot;Opción1&quot; border&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Opción2&quot; border&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: []
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="atributos-de-checkbox"><a class="header-anchor" href="#atributos-de-checkbox">¶</a> Atributos de Checkbox</h3>
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
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>valor del Checkbox si es usado dentro de un tag <code>checkbox-group</code></td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>true-label</td>
<td>valor del Checkbox si está marcado</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>false-label</td>
<td>valor del Checkbox si no está marcado</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>especifica si el Checkbox está deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>especifica si agrega un borde alrededor del Checkbox</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del Checkbox, sólo funciona si <code>border</code> es true</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>atributo <code>name</code> nativo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>checked</td>
<td>especifica si el Checkbox está marcado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>indeterminate</td>
<td>similar a <code>indeterminate</code> en el checkbox nativo</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="eventos-de-checkbox"><a class="header-anchor" href="#eventos-de-checkbox">¶</a> Eventos de Checkbox</h3>
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
<td>se ejecuta cuando el valor enlazado cambia</td>
<td>el valor actualizado</td>
</tr>
</tbody>
</table>
<h3 id="atributos-de-checkbox-group"><a class="header-anchor" href="#atributos-de-checkbox-group">¶</a> Atributos de Checkbox-group</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por Defecto</th>
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
<td>size</td>
<td>tamaño de los checkboxes de tipo botón o los checkboxes con border</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>especifica si los checkboxes anidados están deshabilitados</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>min</td>
<td>cantidad mínima de checkboxes que deben ser marcados</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max</td>
<td>cantidad máxima de checkboxes que pueden ser marcados</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>text-color</td>
<td>color de fuente cuando el botón está activo</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>fill</td>
<td>color de border y de fondo cuando el botón está activo</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
</tbody>
</table>
<h3 id="eventos-de-checkbox-group"><a class="header-anchor" href="#eventos-de-checkbox-group">¶</a> Eventos de Checkbox-group</h3>
<table>
<thead>
<tr>
<th>Nombre de Evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>se ejecuta cuando el valor enlazado cambia</td>
<td>el valor actualizado</td>
</tr>
</tbody>
</table>
<h3 id="atributos-de-checkbox-button"><a class="header-anchor" href="#atributos-de-checkbox-button">¶</a> Atributos de Checkbox-button</h3>
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
<td>valor del checkbox cuando es usado dentro de un <code>checkbox-group</code></td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>true-label</td>
<td>valor del checkbox si este está marcado</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>false-label</td>
<td>valor del checkbox si este no está marcado</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>especifica si el checkbox está deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>atributo 'name' del checbox nativo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>checked</td>
<td>si el checkbox está marcado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
