<h2 id="alert"><a class="header-anchor" href="#alert">¶</a> Alert</h2>
<p>Mostrar mensajes de alertas importantes.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Los componentes de alertas no son elementos overlay de la página y no desaparecen automáticamente.</p>
<demo-block>
        <div><p>Alert provee 4 tipos de temas definidos por <code>type</code>, el valor por defecto es <code>info</code>.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="success alert"
    type="success">
  </el-alert>
  <el-alert
    title="info alert"
    type="info">
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning">
  </el-alert>
  <el-alert
    title="error alert"
    type="error">
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;success alert&quot;
    type=&quot;success&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info alert&quot;
    type=&quot;info&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;warning alert&quot;
    type=&quot;warning&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;error alert&quot;
    type=&quot;error&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="theme"><a class="header-anchor" href="#theme">¶</a> Theme</h3>
<p>Alert provee dos diferentes temas  <code>light</code> y <code>dark</code>.</p>
<demo-block>
        <div><p>Use <code>effect</code> para cambiar el tema, por defecto es <code>light</code>.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="success alert"
    type="success"
    effect="dark">
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    effect="dark">
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    effect="dark">
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    effect="dark">
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;success alert&quot;
    type=&quot;success&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info alert&quot;
    type=&quot;info&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;warning alert&quot;
    type=&quot;warning&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;error alert&quot;
    type=&quot;error&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="personalizacion-del-boton-de-cerrar"><a class="header-anchor" href="#personalizacion-del-boton-de-cerrar">¶</a> Personalización del botón de cerrar</h3>
<p>Personalizar el botón de cerrar como texto u otros símbolos.</p>
<demo-block>
        <div><p>Alert permite configurar si es posible cerrarla. El texto del botón de cerrado, así como los callbacks de cerrado son personalizables. El atributo <code>closable</code> define si el componente puede cerrarse o no. Acepta un <code>boolean</code>, que por defecto es <code>true</code>. También puede configurar el atributo <code>close-text</code> para reemplazar el símbolo de cerrado que se muestra por defecto. El atributo <code>close-text</code> debe ser un string. El evento <code>close</code> se dispara cuando el componente se cierra.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="unclosable alert"
    type="success"
    :closable="false">
  </el-alert>
  <el-alert
    title="customized close-text"
    type="info"
    close-text="Gotcha">
  </el-alert>
  <el-alert
    title="alert with callback"
    type="warning"
    @close="hello">
  </el-alert>
</template>

<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;unclosable alert&quot;
    type=&quot;success&quot;
    :closable=&quot;false&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;customized close-text&quot;
    type=&quot;info&quot;
    close-text=&quot;Gotcha&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;alert with callback&quot;
    type=&quot;warning&quot;
    @close=&quot;hello&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="usar-iconos"><a class="header-anchor" href="#usar-iconos">¶</a> Usar iconos</h3>
<p>Mostrar un icono mejora la legibilidad.</p>
<demo-block>
        <div><p>Setear el atributo <code>show-icon</code> muestra un icono que corresponde al tipo de Alert que se está mostrando.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="success alert"
    type="success"
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    show-icon>
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;success alert&quot;
    type=&quot;success&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info alert&quot;
    type=&quot;info&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;warning alert&quot;
    type=&quot;warning&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;error alert&quot;
    type=&quot;error&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="texto-centrado"><a class="header-anchor" href="#texto-centrado">¶</a> Texto centrado</h3>
<p>Para centrar el texto utilice el atributo <code>center</code>.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-alert
    title="success alert"
    type="success"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    center
    show-icon>
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;success alert&quot;
    type=&quot;success&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info alert&quot;
    type=&quot;info&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;warning alert&quot;
    type=&quot;warning&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;error alert&quot;
    type=&quot;error&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="con-descripcion"><a class="header-anchor" href="#con-descripcion">¶</a> Con descripción</h3>
<p>Descripción incluye un mensaje con información más detallada.</p>
<demo-block>
        <div><p>Además del atributo requerido <code>title</code>, se puede agregar el atributo <code>description</code> para ayudar a describir la alerta con mas detalles. La descripción puede contener solamente un string y va a usar word wrap automáticamente.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="with description"
    type="success"
    description="This is a description.">
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;with description&quot;
    type=&quot;success&quot;
    description=&quot;This is a description.&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="utilizando-icono-y-descripcion"><a class="header-anchor" href="#utilizando-icono-y-descripcion">¶</a> Utilizando icono y descripción</h3>
<demo-block>
        <div><p>Finalmente este es un ejemplo utilizando icono y descripción.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon>
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;success alert&quot;
    type=&quot;success&quot;
    description=&quot;more text description&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info alert&quot;
    type=&quot;info&quot;
    description=&quot;more text description&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;warning alert&quot;
    type=&quot;warning&quot;
    description=&quot;more text description&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;error alert&quot;
    type=&quot;error&quot;
    description=&quot;more text description&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
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
<td>título</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>tipo de componente</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>info</td>
</tr>
<tr>
<td>description</td>
<td>texto descriptivo. También puede ser pasado con el slot por defecto</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>si se puede cerrar o no</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>center</td>
<td>si el texto debe estar centrado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>close-text</td>
<td>texto de cerrado personalizado</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-icon</td>
<td>si un icono del tipo de alerta se debe mostrar</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>effect</td>
<td>selecciona tema</td>
<td>string</td>
<td>light/dark</td>
<td>light</td>
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
<td>descripción</td>
</tr>
<tr>
<td>title</td>
<td>El contenido del título de alerta.</td>
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
<td>close</td>
<td>Se dispara cuando la alerta se cierra</td>
<td>—</td>
</tr>
</tbody>
</table>
