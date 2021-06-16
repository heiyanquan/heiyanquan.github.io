<h2 id="button"><a class="header-anchor" href="#button">¶</a> Button</h2>
<p>Botones comúnmente usados.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>Use <code>type</code>, <code>plain</code>,<code>round</code> y <code>circle</code> para definir estilos a los botones.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-button&gt;Default&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot;&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot;&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot;&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot;&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot;&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button plain&gt;Plain&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; plain&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; plain&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; plain&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; plain&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; plain&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button round&gt;Round&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; round&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; round&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; round&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; round&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; round&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button icon=&quot;el-icon-search&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; icon=&quot;el-icon-check&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; icon=&quot;el-icon-message&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; icon=&quot;el-icon-star-off&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; icon=&quot;el-icon-delete&quot; circle&gt;&lt;/el-button&gt;
&lt;/el-row&gt;
</code></pre></template></demo-block><h3 id="boton-deshabilitado"><a class="header-anchor" href="#boton-deshabilitado">¶</a> Botón deshabilitado</h3>
<p>El atributo <code>disabled</code> determina su un botón esta deshabilitado.</p>
<demo-block>
        <div><p>Use el atributo <code>disabled</code> para determinar si un botón esta deshabilitado. Acepta un valor <code>Boolean</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-button disabled&gt;Default&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; disabled&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; disabled&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; disabled&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; disabled&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; disabled&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button plain disabled&gt;Plain&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; plain disabled&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; plain disabled&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; plain disabled&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; plain disabled&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; plain disabled&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;
</code></pre></template></demo-block><h3 id="boton-de-texto"><a class="header-anchor" href="#boton-de-texto">¶</a> Botón de texto</h3>
<p>Botones sin borde ni fondo.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot;&gt;Text Button&lt;/el-button&gt;
&lt;el-button type=&quot;text&quot; disabled&gt;Text Button&lt;/el-button&gt;
</code></pre></template></demo-block><h3 id="boton-icono"><a class="header-anchor" href="#boton-icono">¶</a> Botón icono</h3>
<p>Use iconos para darle mayor significado a Button. Se puede usar simplemente un icono o un icono con texto.</p>
<demo-block>
        <div><p>Use el atributo <code>icon</code> para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag <code>&lt;i&gt;</code>. También se pueden usar iconos personalizados.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-share&quot;&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-delete&quot;&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-search&quot;&gt;Search&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot;&gt;Upload&lt;i class=&quot;el-icon-upload el-icon-right&quot;&gt;&lt;/i&gt;&lt;/el-button&gt;
</code></pre></template></demo-block><h3 id="grupo-de-botones"><a class="header-anchor" href="#grupo-de-botones">¶</a> Grupo de botones</h3>
<p>Mostrar un grupo de botones puede ser usado para mostrar un grupo de operaciones similares.</p>
<demo-block>
        <div><p>Use el tag <code>&lt;el-button-group&gt;</code> para agrupar sus botones.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button-group&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-arrow-left&quot;&gt;Previous Page&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot;&gt;Next Page&lt;i class=&quot;el-icon-arrow-right el-icon-right&quot;&gt;&lt;/i&gt;&lt;/el-button&gt;
&lt;/el-button-group&gt;
&lt;el-button-group&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-share&quot;&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-delete&quot;&gt;&lt;/el-button&gt;
&lt;/el-button-group&gt;
</code></pre></template></demo-block><h3 id="boton-de-descarga"><a class="header-anchor" href="#boton-de-descarga">¶</a> Botón de descarga</h3>
<p>Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.</p>
<demo-block>
        <div><p>Ajuste el atributo <code>loading</code> a <code>true</code> para mostrar el estado de descarga.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;primary&quot; :loading=&quot;true&quot;&gt;Loading&lt;/el-button&gt;
</code></pre></template></demo-block><h3 id="tamanos"><a class="header-anchor" href="#tamanos">¶</a> Tamaños</h3>
<p>Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.</p>
<demo-block>
        <div><p>Use el atributo <code>size</code> para setear tamaños adicionales con <code>medium</code>, <code>small</code> o <code>mini</code>.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-button&gt;Default&lt;/el-button&gt;
  &lt;el-button size=&quot;medium&quot;&gt;Medium&lt;/el-button&gt;
  &lt;el-button size=&quot;small&quot;&gt;Small&lt;/el-button&gt;
  &lt;el-button size=&quot;mini&quot;&gt;Mini&lt;/el-button&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-button round&gt;Default&lt;/el-button&gt;
  &lt;el-button size=&quot;medium&quot; round&gt;Medium&lt;/el-button&gt;
  &lt;el-button size=&quot;small&quot; round&gt;Small&lt;/el-button&gt;
  &lt;el-button size=&quot;mini&quot; round&gt;Mini&lt;/el-button&gt;
&lt;/el-row&gt;
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
<td>size</td>
<td>tamaño del botón</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>tipo de botón</td>
<td>string</td>
<td>primary / success / warning / danger / info / text</td>
<td>—</td>
</tr>
<tr>
<td>plain</td>
<td>determinar si es o no un botón plano</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>determinar si es o no un botón redondo</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>circle</td>
<td>determina si es un botón circular</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>determinar si es o no un botón de descarga</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>deshabilitar el botón</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>nombre de la clase del icono</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>autofocus</td>
<td>misma funcionalidad que la nativa <code>autofocus</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>native-type</td>
<td>misma funcionalidad que la nativa <code>type</code></td>
<td>string</td>
<td>button / submit / reset</td>
<td>button</td>
</tr>
</tbody>
</table>
