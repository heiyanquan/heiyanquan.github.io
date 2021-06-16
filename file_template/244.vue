<h2 id="popover"><a class="header-anchor" href="#popover">¶</a> Popover</h2>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Similar a un Tooltip, Popover está construido con <code>Vue-popper</code>. Así que para atributos duplicados, por favor refiérase a la documentación de Tooltip.</p>
<demo-block>
        <div><p>El atributo <code>trigger</code> es usado para definir como el popover se dispara: <code>hover</code>, <code>click</code>, <code>focus</code> o <code>manual</code>. En cuanto al elemento desencadenante, puedes escribirlo de dos maneras diferentes: usando el <code>slot=&quot;reference&quot;</code><a href="https://vuejs.org/v2/guide/components.html#Named-Slots">named slot</a>, o usando la directiva <code>v-popover</code> y poniendo  el <code>ref</code> de Popover.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-popover
    placement=&quot;top-start&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;hover&quot;
    content=&quot;this is content, this is content, this is content&quot;&gt;
    &lt;el-button slot=&quot;reference&quot;&gt;Hover to activate&lt;/el-button&gt;
  &lt;/el-popover&gt;

  &lt;el-popover
    placement=&quot;bottom&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;click&quot;
    content=&quot;this is content, this is content, this is content&quot;&gt;
    &lt;el-button slot=&quot;reference&quot;&gt;Click to activate&lt;/el-button&gt;
  &lt;/el-popover&gt;

  &lt;el-popover
    ref=&quot;popover&quot;
    placement=&quot;right&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;focus&quot;
    content=&quot;this is content, this is content, this is content&quot;&gt;
  &lt;/el-popover&gt;
  &lt;el-button v-popover:popover&gt;Focus to activate&lt;/el-button&gt;

  &lt;el-popover
    placement=&quot;bottom&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;manual&quot;
    content=&quot;this is content, this is content, this is content&quot;
    v-model=&quot;visible&quot;&gt;
    &lt;el-button slot=&quot;reference&quot; @click=&quot;visible = !visible&quot;&gt;Manual to activate&lt;/el-button&gt;
  &lt;/el-popover&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="informacion-anidada"><a class="header-anchor" href="#informacion-anidada">¶</a> Información anidada</h3>
<p>Otros componentes pueden anidarse dentro de popover. A continuación un ejemplo de una tabla anidada.</p>
<demo-block>
        <div><p>Reemplaza el atributo <code>content</code> con un <code>slot</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-popover
  placement=&quot;right&quot;
  width=&quot;400&quot;
  trigger=&quot;click&quot;&gt;
  &lt;el-table :data=&quot;gridData&quot;&gt;
    &lt;el-table-column width=&quot;150&quot; property=&quot;date&quot; label=&quot;date&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column width=&quot;100&quot; property=&quot;name&quot; label=&quot;name&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column width=&quot;300&quot; property=&quot;address&quot; label=&quot;address&quot;&gt;&lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;Click to activate&lt;/el-button&gt;
&lt;/el-popover&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="operacion-anidada"><a class="header-anchor" href="#operacion-anidada">¶</a> Operación anidada</h3>
<p>Por supuesto, puedes anidar otras operaciones. Es más ligero que utilizar un <code>dialog</code>.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-popover
  placement=&quot;top&quot;
  width=&quot;160&quot;
  v-model=&quot;visible&quot;&gt;
  &lt;p&gt;Are you sure to delete this?&lt;/p&gt;
  &lt;div style=&quot;text-align: right; margin: 0&quot;&gt;
    &lt;el-button size=&quot;mini&quot; type=&quot;text&quot; @click=&quot;visible = false&quot;&gt;cancel&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; size=&quot;mini&quot; @click=&quot;visible = false&quot;&gt;confirm&lt;/el-button&gt;
  &lt;/div&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;Delete&lt;/el-button&gt;
&lt;/el-popover&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        visible: false,
      };
    }
  }
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
<td>trigger</td>
<td>cómo se dispara el popover</td>
<td>string</td>
<td>click/focus/hover/manual</td>
<td>click</td>
</tr>
<tr>
<td>title</td>
<td>título del popover</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>content</td>
<td>contenido del popover, puede ser sustituido por un <code>slot</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>ancho del popover</td>
<td>string, number</td>
<td>—</td>
<td>Min width 150px</td>
</tr>
<tr>
<td>placement</td>
<td>posición del popover en la pantalla</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>disabled</td>
<td>si el popover está deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value / v-model</td>
<td>si el popover está visible</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>popover offset</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>animación de transición del popover</td>
<td>string</td>
<td>—</td>
<td>el-fade-in-linear</td>
</tr>
<tr>
<td>visible-arrow</td>
<td>si una flecha del tooltip es mostrada o no. Para más información, por favor refiérase a <a href="https://github.com/element-component/vue-popper">Vue-popper</a></td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>popper-options</td>
<td>parámetros para <a href="https://popper.js.org/documentation.html">popper.js</a></td>
<td>object</td>
<td>por favor, refiérase a <a href="https://popper.js.org/documentation.html">popper.js</a></td>
<td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>
</tr>
<tr>
<td>popper-class</td>
<td>clase propia para popover</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>open-delay</td>
<td>retraso de la aparición cuando <code>trigger</code> es hover, en mili segundos</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-delay</td>
<td>Retraso antes de desaparecer cuando el <code>trigger</code> es hover, en mili segundos.</td>
<td>number</td>
<td>—</td>
<td>200</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> de Popover</td>
<td>number</td>
<td>—</td>
<td>0</td>
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
<td>—</td>
<td>texto contenido en popover</td>
</tr>
<tr>
<td>reference</td>
<td>elemento HTML que dispara el popover</td>
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
<td>show</td>
<td>se dispara cuando se muestra el popover</td>
<td>—</td>
</tr>
<tr>
<td>after-enter</td>
<td>se dispara cuando la transición de entrada termina</td>
<td>—</td>
</tr>
<tr>
<td>hide</td>
<td>se dispara cuando se oculta el popover</td>
<td>—</td>
</tr>
<tr>
<td>after-leave</td>
<td>se dispara cuando la transición de salida termina</td>
<td>—</td>
</tr>
</tbody>
</table>
