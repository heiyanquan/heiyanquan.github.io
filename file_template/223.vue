<h2 id="steps"><a class="header-anchor" href="#steps">¶</a> Steps</h2>
<p>Guía al usuario para completar tareas de acuerdo con el proceso. Sus pasos pueden configurarse de acuerdo con el escenario de aplicación real y el número de pasos no puede ser inferior a dos.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Barra de pasos simple.</p>
<demo-block>
        <div><p>Defina el atributo <code>active</code> con un valor de tipo <code>Number</code>, que indica el índice de pasos y comienza desde 0. Puede definir el atributo <code>space</code> cuando es necesario fijar el ancho del paso que acepta el tipo <code>Number</code>. La unidad del atributo <code>space</code> es px. Si no está configurado, es responsive. La configuración del atributo <code>finish-status</code> puede cambiar el estado de los pasos completados.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;active&quot; finish-status=&quot;success&quot;&gt;
  &lt;el-step title=&quot;Step 1&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;

&lt;el-button style=&quot;margin-top: 12px;&quot; @click=&quot;next&quot;&gt;Next step&lt;/el-button&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ &gt; 2) this.active = 0;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="step-bar-con-el-estatus"><a class="header-anchor" href="#step-bar-con-el-estatus">¶</a> Step bar con el estatus</h3>
<p>Muestra el estado del step para cada paso.</p>
<demo-block>
        <div><p>Utilice el atributo <code>title</code> para establecer el nombre del paso, o sobrescriba el atributo usando un slot con nombre. Hemos enumerado todos los nombres de slots al final de esta página.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :space=&quot;200&quot; :active=&quot;1&quot; finish-status=&quot;success&quot;&gt;
  &lt;el-step title=&quot;Done&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Processing&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="centrado"><a class="header-anchor" href="#centrado">¶</a> Centrado</h3>
<p>El título y la descripción pueden estar centrados.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;2&quot; align-center&gt;
  &lt;el-step title=&quot;Step 1&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 4&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="step-bar-con-descripcion"><a class="header-anchor" href="#step-bar-con-descripcion">¶</a> Step bar con descripción</h3>
<p>Puede poner una descripción para cada paso.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;1&quot;&gt;
  &lt;el-step title=&quot;Step 1&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="step-bar-con-icono"><a class="header-anchor" href="#step-bar-con-icono">¶</a> Step bar con icono</h3>
<p>En la barra de pasos se pueden utilizar diversos iconos personalizados.</p>
<demo-block>
        <div><p>El icono se define mediante la propiedad <code>icon</code>. Los tipos de iconos se pueden encontrar en la descripción del componente Icono. Además, puede personalizar el icono a través de un slot con nombre.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;1&quot;&gt;
  &lt;el-step title=&quot;Step 1&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot; icon=&quot;el-icon-upload&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot; icon=&quot;el-icon-picture&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="step-bar-vertical"><a class="header-anchor" href="#step-bar-vertical">¶</a> Step bar vertical</h3>
<p>Step bar vertical.</p>
<demo-block>
        <div><p>Sólo tiene que fijar el atributo <code>direction</code>  a <code>vertical</code> en el elemento <code>el-steps</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div style=&quot;height: 300px;&quot;&gt;
  &lt;el-steps direction=&quot;vertical&quot; :active=&quot;1&quot;&gt;
    &lt;el-step title=&quot;Step 1&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;Step 2&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;Step 3&quot;&gt;&lt;/el-step&gt;
  &lt;/el-steps&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="step-bar-simple"><a class="header-anchor" href="#step-bar-simple">¶</a> Step bar simple</h3>
<p>Step bar simple, donde se ignorará <code>align-center</code>, <code>description</code>, <code>direction</code> y <code>space</code>.</p>
<demo-block>
        
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">
&lt;el-steps :space=&quot;200&quot; :active=&quot;1&quot; simple&gt;
  &lt;el-step title=&quot;Step 1&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot; icon=&quot;el-icon-upload&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot; icon=&quot;el-icon-picture&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;

&lt;el-steps :active=&quot;1&quot; finish-status=&quot;success&quot; simple style=&quot;margin-top: 20px&quot;&gt;
  &lt;el-step title=&quot;Step 1&quot; &gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot; &gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot; &gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="steps-atributos"><a class="header-anchor" href="#steps-atributos">¶</a> Steps atributos</h3>
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
<td>space</td>
<td>el espaciado de cada paso, será responsivo si se omite. Soporta porcentaje.</td>
<td>number / string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>direction</td>
<td>dirección de visualización</td>
<td>string</td>
<td>vertical/horizontal</td>
<td>horizontal</td>
</tr>
<tr>
<td>active</td>
<td>actual paso de activación</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>process-status</td>
<td>estatus del paso actual</td>
<td>string</td>
<td>wait / process / finish / error / success</td>
<td>process</td>
</tr>
<tr>
<td>finish-status</td>
<td>estatus del paso final</td>
<td>string</td>
<td>wait / process / finish / error / success</td>
<td>finish</td>
</tr>
<tr>
<td>align-center</td>
<td>centrado de título y descripción</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>simple</td>
<td>si aplicar un tema simple</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="step-atributos"><a class="header-anchor" href="#step-atributos">¶</a> Step atributos</h3>
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
<td>titulo del paso</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>description</td>
<td>descripción del paso</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>icon</td>
<td>icono del paso</td>
<td>nombre de la clase del icono del paso. Los iconos también se pueden pasar a través del slot con nombre</td>
<td>string</td>
<td>—</td>
</tr>
<tr>
<td>status</td>
<td>estado actual. Se configurará automáticamente mediante Steps si no está configurado.</td>
<td>wait / process / finish / error / success</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="slot-step"><a class="header-anchor" href="#slot-step">¶</a> Slot Step</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon</td>
<td>Icono personalizado</td>
</tr>
<tr>
<td>title</td>
<td>Titulo del paso</td>
</tr>
<tr>
<td>description</td>
<td>Descripción del paso</td>
</tr>
</tbody>
</table>
