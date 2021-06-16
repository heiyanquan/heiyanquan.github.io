<h2 id="calendar"><a class="header-anchor" href="#calendar">¶</a> Calendar</h2>
<p>Muestra fechas.</p>
<h3 id="basico"><a class="header-anchor" href="#basico">¶</a> Básico</h3>
<demo-block>
        <div><p>Configure el valor para especificar el mes que se muestra actualmente. Si no se especifica el valor, se muestra el mes actual. el valor soporta la vinculación bidireccional.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-calendar v-model=&quot;value&quot;&gt;
&lt;/el-calendar&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="contenido-personalizado"><a class="header-anchor" href="#contenido-personalizado">¶</a> Contenido personalizado</h3>
<demo-block>
        <div><p>Personalice lo que se muestra en la celda del calendario configurando el <code>scoped-slot</code> llamada <code>dateCell</code>. En la ranura de alcance se puede obtener la fecha (la fecha de la celda actual), los datos (incluyendo el tipo, isSelected, el atributo day). Para obtener más información, consulte la documentación de la API a continuación.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-calendar&gt;
  &lt;!-- Use 2.5 slot syntax. If you use Vue 2.6, please use new slot syntax--&gt;
  &lt;template
    slot=&quot;dateCell&quot;
    slot-scope=&quot;{date, data}&quot;&gt;
    &lt;p :class=&quot;data.isSelected ? 'is-selected' : ''&quot;&gt;
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    &lt;/p&gt;
  &lt;/template&gt;
&lt;/el-calendar&gt;
&lt;style&gt;
  .is-selected {
    color: #1989FA;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="rango"><a class="header-anchor" href="#rango">¶</a> Rango</h3>
<demo-block>
        <div><p>Defina el atributo <code>range</code> para especificar el rango de visualización del calendario. El tiempo de inicio debe ser el lunes, el tiempo de finalización debe ser el domingo y el período no puede exceder los dos meses.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-calendar :range=&quot;['2019-03-04', '2019-03-24']&quot;&gt;
&lt;/el-calendar&gt;
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
<td>value / v-model</td>
<td>valor vinculante</td>
<td>Date/string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range</td>
<td>rango de tiempo, incluyendo el tiempo de inicio y el tiempo final. Start time debe ser el primer dia de la semana, end time debe ser el ultimo día de la semana, el time entre las fechas no puede exceder dos meses</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>first-day-of-week</td>
<td>primer día de la semana</td>
<td>Number</td>
<td>1 to 7</td>
<td>1</td>
</tr>
</tbody>
</table>
<h3 id="datecell-scoped-slot"><a class="header-anchor" href="#datecell-scoped-slot">¶</a> dateCell scoped slot</h3>
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
<td>date</td>
<td>fecha que la celda representa</td>
<td>Date</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>{ type, isSelected, day}. <code>type</code> indica el mes al que pertenece la fecha, los valores opcionales son mes anterior, mes actual, mes siguiente; <code>isSelected</code> indica si la fecha está seleccionada; <code>day</code> es la fecha formateada en el formato yyyy-MM-dd</td>
<td>Object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
