<h2 id="collapse"><a class="header-anchor" href="#collapse">¶</a> Collapse</h2>
<p>Use Collapse para almacenar contenidos.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Puede expandir varios paneles</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse v-model=&quot;activeNames&quot; @change=&quot;handleChange&quot;&gt;
  &lt;el-collapse-item title=&quot;Consistency&quot; name=&quot;1&quot;&gt;
    &lt;div&gt;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;&lt;/div&gt;
    &lt;div&gt;Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Feedback&quot; name=&quot;2&quot;&gt;
    &lt;div&gt;Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;&lt;/div&gt;
    &lt;div&gt;Visual feedback: reflect current state by updating or rearranging elements of the page.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Efficiency&quot; name=&quot;3&quot;&gt;
    &lt;div&gt;Simplify the process: keep operating process simple and intuitive;&lt;/div&gt;
    &lt;div&gt;Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;&lt;/div&gt;
    &lt;div&gt;Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Controllability&quot; name=&quot;4&quot;&gt;
    &lt;div&gt;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;&lt;/div&gt;
    &lt;div&gt;Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="acordeon"><a class="header-anchor" href="#acordeon">¶</a> Acordeón</h3>
<p>En modo acordeón sólo un panel puede ser expandido a la vez</p>
<demo-block>
        <div><p>Activa el modo acordeón usado el atributo <code>accordion</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse v-model=&quot;activeName&quot; accordion&gt;
  &lt;el-collapse-item title=&quot;Consistency&quot; name=&quot;1&quot;&gt;
    &lt;div&gt;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;&lt;/div&gt;
    &lt;div&gt;Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Feedback&quot; name=&quot;2&quot;&gt;
    &lt;div&gt;Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;&lt;/div&gt;
    &lt;div&gt;Visual feedback: reflect current state by updating or rearranging elements of the page.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Efficiency&quot; name=&quot;3&quot;&gt;
    &lt;div&gt;Simplify the process: keep operating process simple and intuitive;&lt;/div&gt;
    &lt;div&gt;Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;&lt;/div&gt;
    &lt;div&gt;Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Controllability&quot; name=&quot;4&quot;&gt;
    &lt;div&gt;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;&lt;/div&gt;
    &lt;div&gt;Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="titulo-personalizado"><a class="header-anchor" href="#titulo-personalizado">¶</a> Título personalizado</h3>
<p>Además de usar el atributo <code>title</code>, se puede personalizar el título del panel con slots con nombre, esto hace posible agregar contenido personalizado, por ejemplo: iconos.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse accordion&gt;
  &lt;el-collapse-item name=&quot;1&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;
      Consistency&lt;i class=&quot;header-icon el-icon-information&quot;&gt;&lt;/i&gt;
    &lt;/template&gt;
    &lt;div&gt;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;&lt;/div&gt;
    &lt;div&gt;Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Feedback&quot; name=&quot;2&quot;&gt;
    &lt;div&gt;Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;&lt;/div&gt;
    &lt;div&gt;Visual feedback: reflect current state by updating or rearranging elements of the page.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Efficiency&quot; name=&quot;3&quot;&gt;
    &lt;div&gt;Simplify the process: keep operating process simple and intuitive;&lt;/div&gt;
    &lt;div&gt;Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;&lt;/div&gt;
    &lt;div&gt;Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Controllability&quot; name=&quot;4&quot;&gt;
    &lt;div&gt;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;&lt;/div&gt;
    &lt;div&gt;Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
</code></pre></template></demo-block><h3 id="atributos-de-collapse"><a class="header-anchor" href="#atributos-de-collapse">¶</a> Atributos de Collapse</h3>
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
<td>value / v-model</td>
<td>panel activo</td>
<td>string (modo acordeón) / array (No modo acordeón)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>accordion</td>
<td>especifica si activa el modo acordeón</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="eventos-de-collapse"><a class="header-anchor" href="#eventos-de-collapse">¶</a> Eventos de Collapse</h3>
<table>
<thead>
<tr>
<th>Nombre de Evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>se dispara cuando los paneles activos cambian</td>
<td>(activeNames: array (No modo acordeón) / string (modo acordeón))</td>
</tr>
</tbody>
</table>
<h3 id="atributos-de-collapse-item"><a class="header-anchor" href="#atributos-de-collapse-item">¶</a> Atributos de Collapse Item</h3>
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
<td>name</td>
<td>identificador único del panel</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>title</td>
<td>título del panel</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>deshabilita el collapse ítem</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
