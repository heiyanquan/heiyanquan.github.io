<h2 id="badge"><a class="header-anchor" href="#badge">¶</a> Badge</h2>
<p>Marcas en forma de número o estado para botones e iconos.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Muestra la cantidad de mensajes nuevos.</p>
<demo-block>
        <div><p>La cantidad está definida por <code>value</code> que acepta <code>Number</code> o <code>String</code>.</p>
</div>
        <!--element-demo: <el-badge :value="12" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="3" class="item">
  <el-button size="small">replies</el-button>
</el-badge>
<el-badge :value="1" class="item" type="primary">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="2" class="item" type="warning">
  <el-button size="small">replies</el-button>
</el-badge>

<el-dropdown trigger="click">
  <span class="el-dropdown-link">
    Click Me<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="clearfix">
      comments
      <el-badge class="mark" :value="12" />
    </el-dropdown-item>
    <el-dropdown-item class="clearfix">
      replies
      <el-badge class="mark" :value="3" />
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge :value=&quot;12&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;comments&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;3&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;replies&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;1&quot; class=&quot;item&quot; type=&quot;primary&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;comments&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;2&quot; class=&quot;item&quot; type=&quot;warning&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;replies&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;el-dropdown trigger=&quot;click&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Click Me&lt;i class=&quot;el-icon-caret-bottom el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item class=&quot;clearfix&quot;&gt;
      comments
      &lt;el-badge class=&quot;mark&quot; :value=&quot;12&quot; /&gt;
    &lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item class=&quot;clearfix&quot;&gt;
      replies
      &lt;el-badge class=&quot;mark&quot; :value=&quot;3&quot; /&gt;
    &lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="valor-maximo"><a class="header-anchor" href="#valor-maximo">¶</a> Valor máximo</h3>
<p>Se puede personalizar el valor máximo.</p>
<demo-block>
        <div><p>El valor máximo se define como <code>max</code> el cual es un <code>Number</code>. Nota: solo funciona si <code>value</code> es también un <code>Number</code>.</p>
</div>
        <!--element-demo: <el-badge :value="200" :max="99" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">replies</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge :value=&quot;200&quot; :max=&quot;99&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;comments&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;100&quot; :max=&quot;10&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;replies&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="personalizaciones"><a class="header-anchor" href="#personalizaciones">¶</a> Personalizaciones</h3>
<p>Mostrar texto en vez de números.</p>
<demo-block>
        <div><p>Cuando <code>value</code> es un <code>String</code>, puede mostrar texto personalizado.</p>
</div>
        <!--element-demo: <el-badge value="new" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small">replies</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge value=&quot;new&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;comments&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge value=&quot;hot&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;replies&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="pequeno-punto-rojo"><a class="header-anchor" href="#pequeno-punto-rojo">¶</a> Pequeño punto rojo</h3>
<p>Puede utilizar un punto rojo para marcar contenido que debe ser notado.</p>
<demo-block>
        <div><p>Use el atributo <code>is-dot</code>. Es un <code>Boolean</code>.</p>
</div>
        <!--element-demo: <el-badge is-dot class="item">query</el-badge>
<el-badge is-dot class="item">
  <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge is-dot class=&quot;item&quot;&gt;query&lt;/el-badge&gt;
&lt;el-badge is-dot class=&quot;item&quot;&gt;
  &lt;el-button class=&quot;share-button&quot; icon=&quot;el-icon-share&quot; type=&quot;primary&quot;&gt;&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
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
<td>value</td>
<td>valor a mostrar</td>
<td>string, number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max</td>
<td>valor máximo, Muestra '{max}+' cuando se excede. Solo funciona si <code>value</code> es un <code>Number</code></td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>is-dot</td>
<td>si se debe mostrar un pequeño punto</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hidden</td>
<td>oculta el badge</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>tipo de botón</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>—</td>
</tr>
</tbody>
</table>
