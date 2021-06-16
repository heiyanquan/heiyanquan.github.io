<h2 id="popconfirm"><a class="header-anchor" href="#popconfirm">¶</a> Popconfirm</h2>
<p>Un dialogo de confirmación simple asociado al evento click de un elemento.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Popconfirm es parecido a Popover. Para algunos atributos duplicados, por favor consulte la documentación de Popover.</p>
<demo-block>
        <div><p>Solo el atributo  <code>title</code>  esta disponible en Popconfirm, <code>content</code> sera ignorado.</p>
</div>
        <!--element-demo: <template>
<el-popconfirm
  title="Are you sure to delete this?"
>
  <el-button slot="reference">Delete</el-button>
</el-popconfirm>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
&lt;el-popconfirm
  title=&quot;Are you sure to delete this?&quot;
&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;Delete&lt;/el-button&gt;
&lt;/el-popconfirm&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="personalizacion"><a class="header-anchor" href="#personalizacion">¶</a> Personalización</h3>
<p>Se puede personalizar Popconfirm así:</p>
<demo-block>
        
        <!--element-demo: <template>
<el-popconfirm
  confirm-button-text='OK'
  cancel-button-text='No, Thanks'
  icon="el-icon-info"
  icon-color="red"
  title="Are you sure to delete this?"
>
  <el-button slot="reference">Delete</el-button>
</el-popconfirm>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
&lt;el-popconfirm
  confirm-button-text='OK'
  cancel-button-text='No, Thanks'
  icon=&quot;el-icon-info&quot;
  icon-color=&quot;red&quot;
  title=&quot;Are you sure to delete this?&quot;
&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;Delete&lt;/el-button&gt;
&lt;/el-popconfirm&gt;
&lt;/template&gt;
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
<td>title</td>
<td>Titulo</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirm-button-text</td>
<td>Texto del botón de confirmación</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cancel-button-text</td>
<td>Texto del botón de cancelación</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirm-button-type</td>
<td>Tipo del botón de confirmación</td>
<td>String</td>
<td>—</td>
<td>Primary</td>
</tr>
<tr>
<td>cancel-button-type</td>
<td>Tipo del botón de cancelación</td>
<td>String</td>
<td>—</td>
<td>Text</td>
</tr>
<tr>
<td>icon</td>
<td>Icono</td>
<td>String</td>
<td>—</td>
<td>el-icon-question</td>
</tr>
<tr>
<td>icon-color</td>
<td>Color icono</td>
<td>String</td>
<td>—</td>
<td>#f90</td>
</tr>
<tr>
<td>hide-icon</td>
<td>¿Es un icono oculto?</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
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
<td>reference</td>
<td>Elemento HTML que activa el Popconfirm</td>
</tr>
</tbody>
</table>
<h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3>
<table>
<thead>
<tr>
<th>Nombre Evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>confirm</td>
<td>Se activa cuando se pulsa el botón de confirmación</td>
<td>—</td>
</tr>
<tr>
<td>cancel</td>
<td>Se activa cuando se pulsa el botón de cancelación</td>
<td>—</td>
</tr>
</tbody>
</table>
