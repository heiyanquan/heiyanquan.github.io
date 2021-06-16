<h2 id="paginacion"><a class="header-anchor" href="#paginacion">¶</a> Paginación</h2>
<p>Si tiene que mostrar muchos datos en una página, utilice la paginación.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>Asigne en el atributo <code>layout</code> los diferentes elementos que quiere utilizar separados por coma. Los elementos de paginación son: <code>prev</code> (un botón para navegar a la página anterior), <code>next</code> (un botón para navegar a la siguiente página), <code>pager</code> (lista de página), <code>jumper</code> (un <code>input</code> para saltar a una página determinada), <code>total</code> (total de elementos), <code>size</code> (un <code>select</code> para seleccionar el tamaño de la página ) y <code>-&gt;</code>(todo elemento situado luego de este símbolo será movido a la derecha).</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;When you have few pages&lt;/span&gt;
  &lt;el-pagination
    layout=&quot;prev, pager, next&quot;
    :total=&quot;50&quot;&gt;
  &lt;/el-pagination&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;When you have more than 7 pages&lt;/span&gt;
  &lt;el-pagination
    layout=&quot;prev, pager, next&quot;
    :total=&quot;1000&quot;&gt;
  &lt;/el-pagination&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="numeros-de-paginas"><a class="header-anchor" href="#numeros-de-paginas">¶</a> Números de paginas</h3>
<demo-block>
        <div><p>De forma predeterminada, Pagination colapsa los botones del paginador adicionales cuando tiene más de 7 páginas. Esto se puede configurar con el atributo <code>pager-count</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-pagination
  :page-size=&quot;20&quot;
  :pager-count=&quot;11&quot;
  layout=&quot;prev, pager, next&quot;
  :total=&quot;1000&quot;&gt;
&lt;/el-pagination&gt;
</code></pre></template></demo-block><h3 id="paginacion-pequena"><a class="header-anchor" href="#paginacion-pequena">¶</a> Paginación pequeña</h3>
<p>Usa una paginación pequeña en caso de espacio limitado.</p>
<demo-block>
        <div><p>Solo ponga el atributo <code>small</code> como <code>true</code> y la Paginación se volverá pequeña.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-pagination
  small
  layout=&quot;prev, pager, next&quot;
  :total=&quot;50&quot;&gt;
&lt;/el-pagination&gt;
</code></pre></template></demo-block><h3 id="mas-elementos"><a class="header-anchor" href="#mas-elementos">¶</a> Más elementos</h3>
<p>Agrega más módulos basados en su escenario.</p>
<demo-block>
        <div><p>Este ejemplo es un completo caso de uso. Utiliza los eventos <code>size-change</code> y <code>current-change</code> para manejar el tamaño de página y el cambio de página. El atributo <code>page-sizes</code> acepta un arreglo de enteros, cada uno representa un diferente valor del atributo <code>sizes</code> que es un <code>select</code>, ejemplo <code>[100, 200, 300, 400]</code> indicará que el <code>select</code> tendrá las opciones: 100, 200, 300 o 400 elementos por página.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Total item count&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage1&quot;
      :page-size=&quot;100&quot;
      layout=&quot;total, prev, pager, next&quot;
      :total=&quot;1000&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Change page size&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage2&quot;
      :page-sizes=&quot;[100, 200, 300, 400]&quot;
      :page-size=&quot;100&quot;
      layout=&quot;sizes, prev, pager, next&quot;
      :total=&quot;1000&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Jump to&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage3&quot;
      :page-size=&quot;100&quot;
      layout=&quot;prev, pager, next, jumper&quot;
      :total=&quot;1000&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;All combined&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage4&quot;
      :page-sizes=&quot;[100, 200, 300, 400]&quot;
      :page-size=&quot;100&quot;
      layout=&quot;total, sizes, prev, pager, next, jumper&quot;
      :total=&quot;400&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="oculte-la-paginacion-cuando-el-resultado-es-solo-una-pagina-simple"><a class="header-anchor" href="#oculte-la-paginacion-cuando-el-resultado-es-solo-una-pagina-simple">¶</a> Oculte la paginación cuando el resultado es solo una pagina simple</h3>
<p>Cuando sólo hay una página, oculte la paginación configurando el atributo <code>hide-on-single-page</code>.</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
 &lt;el-switch v-model=&quot;value&quot;&gt;
 &lt;/el-switch&gt;
 &lt;el-pagination
  :hide-on-single-page=&quot;value&quot;
  :total=&quot;5&quot;
  layout=&quot;prev, pager, next&quot;&gt;
&lt;/el-pagination&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: false
      }
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
<td>small</td>
<td>usar paginación pequeña</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>page-size</td>
<td>cantidad de elementos por página, soporta el modificador .sync</td>
<td>number</td>
<td>—</td>
<td>10</td>
</tr>
<tr>
<td>total</td>
<td>total de elementos</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>page-count</td>
<td>total de páginas. Asigna <code>total</code> o <code>page-count</code> y las páginas serán mostradas; si necesitas <code>page-sizes</code>, <code>total</code> es <strong>requerido</strong></td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>pager-count</td>
<td>número de paginadores. La paginación colapsa cuando el número total de páginas excede este valor.</td>
<td>number</td>
<td>odd number between 5 and 21</td>
<td>7</td>
</tr>
<tr>
<td>current-page</td>
<td>número actual de la página, soporta el modificador .sync</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>layout</td>
<td>layout de la paginación, elementos separados por coma</td>
<td>string</td>
<td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td>
<td>'prev, pager, next, jumper, -&gt;, total'</td>
</tr>
<tr>
<td>page-sizes</td>
<td>opciones para la cantidad de elementos por página</td>
<td>number[]</td>
<td>—</td>
<td>[10, 20, 30, 40, 50, 100]</td>
</tr>
<tr>
<td>popper-class</td>
<td>clase propia para el <code>dropdown</code> del <code>select</code> del número de páginas</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prev-text</td>
<td>texto para el botón <code>prev</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>next-text</td>
<td>texto para el botón <code>next</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si Pagination esta disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hide-on-single-page</td>
<td>si ocultar cuando sólo hay una página</td>
<td>boolean</td>
<td>—</td>
<td>-</td>
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
<td>size-change</td>
<td>se dispara cuando <code>page-size</code> cambia</td>
<td>nuevo valor de <code>page-size</code></td>
</tr>
<tr>
<td>current-change</td>
<td>se dispara cuando <code>current-page</code> cambia</td>
<td>nuevo valor de <code>current-page</code></td>
</tr>
<tr>
<td>prev-click</td>
<td>Se dispara cuando el botón <code>prev</code> recibe el clic y la pagina actual cambia</td>
<td>la nueva pagina actual</td>
</tr>
<tr>
<td>next-click</td>
<td>Se dispara cuando el botón <code>next</code> recibe el clic y la pagina actual cambia</td>
<td>la nueva pagina actual</td>
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
<td>Elemento propio. Para utilizar esto necesitas declarar <code>slot</code> en el <code>layout</code></td>
</tr>
</tbody>
</table>
