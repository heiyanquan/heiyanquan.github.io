<h2 id="timeline"><a class="header-anchor" href="#timeline">¶</a> Timeline</h2>
<p>Línea de tiempo visual.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>El Timeline puede ser dividido en múltiples actividades en forma ascendente o descendente. Las marcas de tiempo son características importantes que los distinguen de otros componentes. Observe la diferencia con Steps.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;div class=&quot;radio&quot;&gt;
    Order: 
    &lt;el-radio-group v-model=&quot;reverse&quot;&gt;
      &lt;el-radio :label=&quot;true&quot;&gt;descending&lt;/el-radio&gt;
      &lt;el-radio :label=&quot;false&quot;&gt;ascending&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;

  &lt;el-timeline :reverse=&quot;reverse&quot;&gt;
    &lt;el-timeline-item
      v-for=&quot;(activity, index) in activities&quot;
      :key=&quot;index&quot;
      :timestamp=&quot;activity.timestamp&quot;&gt;
      {{activity.content}}
    &lt;/el-timeline-item&gt;
  &lt;/el-timeline&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        reverse: true,
        activities: [{
          content: 'Success',
          timestamp: '2018-04-11'
        }, {
          content: 'Approved',
          timestamp: '2018-04-13'
        }, {
          content: 'Event start',
          timestamp: '2018-04-15'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="nodo-personalizado"><a class="header-anchor" href="#nodo-personalizado">¶</a> Nodo personalizado</h3>
<p>El tamaño, el color y los iconos se pueden personalizar en el nodo.</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;el-timeline&gt;
    &lt;el-timeline-item
      v-for=&quot;(activity, index) in activities&quot;
      :key=&quot;index&quot;
      :icon=&quot;activity.icon&quot;
      :type=&quot;activity.type&quot;
      :color=&quot;activity.color&quot;
      :size=&quot;activity.size&quot;
      :timestamp=&quot;activity.timestamp&quot;&gt;
      {{activity.content}}
    &lt;/el-timeline-item&gt;
  &lt;/el-timeline&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        activities: [{
          content: 'Custom icon',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: 'Custom color',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: 'Custom size',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: 'Default node',
          timestamp: '2018-04-03 20:46'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="marcas-de-tiempo-personalizadas"><a class="header-anchor" href="#marcas-de-tiempo-personalizadas">¶</a> Marcas de tiempo personalizadas</h3>
<p>Las marcas de tiempo ( timestamp )  puede colocarse encima del contenido cuando éste es demasiado alto.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;el-timeline&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/12&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;Update Github template&lt;/h4&gt;
        &lt;p&gt;Tom committed 2018/4/12 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/3&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;Update Github template&lt;/h4&gt;
        &lt;p&gt;Tom committed 2018/4/3 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/2&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;Update Github template&lt;/h4&gt;
        &lt;p&gt;Tom committed 2018/4/2 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
  &lt;/el-timeline&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="timeline-atributos"><a class="header-anchor" href="#timeline-atributos">¶</a> Timeline Atributos</h3>
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
<td>reverse</td>
<td>Si el node es ascendente o descendente. Por defecto es ascendente</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="timeline-item-atributos"><a class="header-anchor" href="#timeline-item-atributos">¶</a> Timeline-item Atributos</h3>
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
<td>timestamp</td>
<td>Contenido de las marcas de tiempo</td>
<td>string</td>
<td>-</td>
<td>—</td>
</tr>
<tr>
<td>hide-timestamp</td>
<td>Si se muestra o no timestamp</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>la posición de timestamp</td>
<td>string</td>
<td>top / bottom</td>
<td>bottom</td>
</tr>
<tr>
<td>type</td>
<td>tipo de nodo</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>color de fondo del nodo</td>
<td>string</td>
<td>hsl / hsv / hex / rgb</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del nodo</td>
<td>string</td>
<td>normal / large</td>
<td>normal</td>
</tr>
<tr>
<td>icon</td>
<td>nombre de la clase del icono</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="timeline-item-slot"><a class="header-anchor" href="#timeline-item-slot">¶</a> Timeline-Item Slot</h3>
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
<td>Contenido personalizado del ítem del timeline</td>
</tr>
<tr>
<td>dot</td>
<td>Definición personalizada del nodo</td>
</tr>
</tbody>
</table>
