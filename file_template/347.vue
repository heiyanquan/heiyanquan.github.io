<h2 id="breadcrumb"><a class="header-anchor" href="#breadcrumb">¶</a> Breadcrumb</h2>
<p>Muestra la localización de la página actual, haciendo más fácil el poder ir a la página anterior.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>En <code>el-breadcrumb</code>, cada <code>el-breadcrumb-item</code> es un tag que representa cada nivel empezando desde la homepage. Este componente tiene un atributo <code>String</code> llamado <code>separator</code>, el mismo determina el carácter separador. El valor por defecto es '/'.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-breadcrumb separator=&quot;/&quot;&gt;
  &lt;el-breadcrumb-item :to=&quot;{ path: '/' }&quot;&gt;homepage&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;&lt;a href=&quot;/&quot;&gt;promotion management&lt;/a&gt;&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;promotion list&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;promotion detail&lt;/el-breadcrumb-item&gt;
&lt;/el-breadcrumb&gt;
</code></pre></template></demo-block><h3 id="icono-separador"><a class="header-anchor" href="#icono-separador">¶</a> Icono separador</h3>
<demo-block>
        <div><p>Setee <code>separator-class</code> para que utilice <code>iconfont</code> como separador，el mismo va a cubrir <code>separator</code></p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-breadcrumb separator-class=&quot;el-icon-arrow-right&quot;&gt;
  &lt;el-breadcrumb-item :to=&quot;{ path: '/' }&quot;&gt;homepage&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;promotion management&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;promotion list&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;promotion detail&lt;/el-breadcrumb-item&gt;
&lt;/el-breadcrumb&gt;
</code></pre></template></demo-block><h3 id="breadcrumb-atributos"><a class="header-anchor" href="#breadcrumb-atributos">¶</a> Breadcrumb atributos</h3>
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
<td>separator</td>
<td>carácter separador</td>
<td>string</td>
<td>—</td>
<td>/</td>
</tr>
<tr>
<td>separator-class</td>
<td>nombre de la clase del icono separador</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="breadcrumb-item-atributos"><a class="header-anchor" href="#breadcrumb-item-atributos">¶</a> Breadcrumb Item atributos</h3>
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
<td>to</td>
<td>ruta del link, lo mismo que <code>to</code> de <code>vue-router</code></td>
<td>string/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>replace</td>
<td>si <code>true</code>,  la navegación no dejara una entrada en la historia</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
