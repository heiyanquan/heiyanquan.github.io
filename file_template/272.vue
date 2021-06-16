<h2 id="layout"><a class="header-anchor" href="#layout">¶</a> Layout</h2>
<p>Rápido y fácilmente crea un layout básico con 24 columnas.</p>
<h3 id="layout-basico"><a class="header-anchor" href="#layout-basico">¶</a> Layout básico</h3>
<p>Crea un layout básico usando columnas.</p>
<demo-block>
        <div><p>Con <code>row</code> y <code>col</code>, puede fácilmente manipular el layout usando el atributo <code>span</code>.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-col :span=&quot;24&quot;&gt;&lt;div class=&quot;grid-content bg-purple-dark&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;12&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="espaciado-de-columnas"><a class="header-anchor" href="#espaciado-de-columnas">¶</a> Espaciado de columnas</h3>
<p>El espaciado de columnas está soportado.</p>
<demo-block>
        <div><p>Row provee el atributo <code>gutter</code> para especificar el espacio entre columnas y su valor por defecto es 0.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="layout-hibrido"><a class="header-anchor" href="#layout-hibrido">¶</a> Layout híbrido</h3>
<p>Crea un complejo layout híbrido combinando el básico de 1/24 columnas.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;16&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;16&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="offset-de-columnas"><a class="header-anchor" href="#offset-de-columnas">¶</a> Offset de columnas</h3>
<p>Puedes especificar offsets para las columnas.</p>
<demo-block>
        <div><p>Puedes especificar el offset para una columna mediante el atributo <code>offset</code> de Col.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;12&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="alineacion"><a class="header-anchor" href="#alineacion">¶</a> Alineación</h3>
<p>Usa flex layout para un alineamiento flexible de columnas.</p>
<demo-block>
        <div><p>Puede habilitar flex layout asignando el atributo <code>type</code> a 'flex', y definir el layout de elementos hijos asignando el atributo <code>justify</code> con los valores start, center, end, space-between o space-around.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;center&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;end&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;space-between&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;space-around&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="responsive-layout"><a class="header-anchor" href="#responsive-layout">¶</a> Responsive Layout</h3>
<p>Tomando el ejemplo de Bootstrap responsive design, existen 5 breakpoints: xs, sm, md, lg y xl.</p>
<demo-block>
        
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;10&quot;&gt;
  &lt;el-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;8&quot; :lg=&quot;9&quot; :xl=&quot;11&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;8&quot; :lg=&quot;9&quot; :xl=&quot;11&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="clases-utiles-para-ocultar-elementos"><a class="header-anchor" href="#clases-utiles-para-ocultar-elementos">¶</a> Clases útiles para ocultar elementos</h3>
<p>Adicionalmente, Element provee una serie de clases para ocultar elementos dadas ciertas condiciones. Estas clases pueden se agregadas a cualquier elemento del DOM o un elemento propio. Necesita importar el siguiente archivo CSS para usar estas clases:</p>
<pre><code class="language-js">import 'element-ui/lib/theme-chalk/display.css';
</code></pre>
<p>Las clases son:</p>
<ul>
<li><code>hidden-xs-only</code> - oculto en viewports extra pequeños solamente</li>
<li><code>hidden-sm-only</code> - oculto en viewports pequeños solamente</li>
<li><code>hidden-sm-and-down</code> - oculto en viewports pequeños y menores</li>
<li><code>hidden-sm-and-up</code> - oculto en viewports pequeños y superiores</li>
<li><code>hidden-md-only</code> - oculto en viewports medios solamente</li>
<li><code>hidden-md-and-down</code> - oculto en viewports medios y menores</li>
<li><code>hidden-md-and-up</code> - oculto en viewports medios y mayores</li>
<li><code>hidden-lg-only</code> - ocultos en viewports grandes solamente</li>
<li><code>hidden-lg-and-down</code> - ocultos en viewports grandes y menores</li>
<li><code>hidden-lg-and-up</code> - ocultos en viewports grandes y superiores</li>
<li><code>hidden-xl-only</code> - oculto en viewports extra grandes solamente</li>
</ul>
<h3 id="atributos-row"><a class="header-anchor" href="#atributos-row">¶</a> Atributos Row</h3>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Valor por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>gutter</td>
<td>espaciado de la grilla</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>modo del layout , puedes usar flex, funciona en navegadores modernos</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>justify</td>
<td>alineación horizontal del layout flex</td>
<td>string</td>
<td>start/end/center/space-around/space-between</td>
<td>start</td>
</tr>
<tr>
<td>align</td>
<td>alineación vertical del layout flex</td>
<td>string</td>
<td>top/middle/bottom</td>
<td>top</td>
</tr>
<tr>
<td>tag</td>
<td>tag de elemento propio</td>
<td>string</td>
<td>*</td>
<td>div</td>
</tr>
</tbody>
</table>
<h3 id="atributos-col"><a class="header-anchor" href="#atributos-col">¶</a> Atributos Col</h3>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Valor por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>span</td>
<td>número de columnas que abarca la cuadrícula</td>
<td>number</td>
<td>—</td>
<td>24</td>
</tr>
<tr>
<td>offset</td>
<td>especifica el espacio en el lado izquierdo del grill</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>push</td>
<td>número de columnas que la grilla se mueve hacia la derecha</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>pull</td>
<td>número de columnas que la grilla se mueve hacia la izquierda</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>xs</td>
<td><code>&lt;768px</code> Columnas responsive u objeto con propiedades de la columna</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sm</td>
<td><code>≥768px</code> Columnas responsive u objeto con propiedades de la columna</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>md</td>
<td><code>≥992px</code> Columnas responsive u objeto con propiedades de la columna</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>lg</td>
<td><code>≥1200px</code> Columnas responsive u objeto con propiedades de la columna</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>xl</td>
<td><code>≥1920px</code> Columnas responsive u objeto con propiedades de la columna</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tag</td>
<td>tag de elemento propio</td>
<td>string</td>
<td>*</td>
<td>div</td>
</tr>
</tbody>
</table>
