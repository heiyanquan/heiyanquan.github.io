<h2 id="backtop"><a class="header-anchor" href="#backtop">¶</a> Backtop</h2>
<p>Un botón para volver a la parte superior</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Desplácese hacia abajo para ver el botón en el lado inferior derecho.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  Scroll down to see the bottom-right button.
  &lt;el-backtop target=&quot;.page-component__scroll .el-scrollbar__wrap&quot;&gt;&lt;/el-backtop&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="personalizacion"><a class="header-anchor" href="#personalizacion">¶</a> Personalización</h3>
<p>Área de visualización de 40px * 40px.</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  Scroll down to see the bottom-right button.
  &lt;el-backtop target=&quot;.page-component__scroll .el-scrollbar__wrap&quot; :bottom=&quot;100&quot;&gt;
    &lt;div
      style=&quot;{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }&quot;
    &gt;
      UP
    &lt;/div&gt;
  &lt;/el-backtop&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>target</td>
<td>el objetivo para activar el scroll</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>visibility-height</td>
<td>el botón no se mostrará hasta que la altura de desplazamiento alcance este valor</td>
<td>number</td>
<td></td>
<td>200</td>
</tr>
<tr>
<td>right</td>
<td>separación desde la derecha</td>
<td>number</td>
<td></td>
<td>40</td>
</tr>
<tr>
<td>bottom</td>
<td>separación desde abajo</td>
<td>number</td>
<td></td>
<td>40</td>
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
<td>click</td>
<td>se activa al hacer clic</td>
<td>click event</td>
</tr>
</tbody>
</table>
