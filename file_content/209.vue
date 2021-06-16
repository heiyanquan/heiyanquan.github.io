<h2 id="selector-de-tiempo"><a class="header-anchor" href="#selector-de-tiempo">¶</a> Selector de Tiempo</h2>
<p>Use el Time Picker para input de tipo time.</p>
<h3 id="selector-de-tiempo-fijo"><a class="header-anchor" href="#selector-de-tiempo-fijo">¶</a> Selector de tiempo fijo</h3>
<p>Provee una lista de tiempo fijo para que los usuarios escojan.</p>
<demo-block>
        <div><p>Use el tag <code>el-time-select</code>, se pueden asignar tiempo de inicio, tiempo de finalización y salto de tiempo con <code>start</code>, <code>end</code> y <code>step</code>.</p>
</div>
        <!--element-demo: <el-time-select
  v-model="value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="Select time">
</el-time-select>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-time-select
  v-model=&quot;value&quot;
  :picker-options=&quot;{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }&quot;
  placeholder=&quot;Select time&quot;&gt;
&lt;/el-time-select&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="selector-de-tiempo-arbitrario"><a class="header-anchor" href="#selector-de-tiempo-arbitrario">¶</a> Selector de tiempo arbitrario</h3>
<p>Un tiempo arbitrario puede ser escogido.</p>
<demo-block>
        <div><p>Al usar el tag <code>el-time-picker</code>, es posible limitar el rango de tiempo al especificar <code>selectableRange</code>. Por defecto, es posible hacer scroll con la rueda del ratón para escoger el tiempo, alternativamente se pueden utilizar las flechas de control cuando el atributo <code>arrow-control</code> esté establecido.</p>
</div>
        <!--element-demo: <template>
  <el-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-time-picker
    v-model=&quot;value1&quot;
    :picker-options=&quot;{
      selectableRange: '18:30:00 - 20:30:00'
    }&quot;
    placeholder=&quot;Arbitrary time&quot;&gt;
  &lt;/el-time-picker&gt;
  &lt;el-time-picker
    arrow-control
    v-model=&quot;value2&quot;
    :picker-options=&quot;{
      selectableRange: '18:30:00 - 20:30:00'
    }&quot;
    placeholder=&quot;Arbitrary time&quot;&gt;
  &lt;/el-time-picker&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="rango-de-tiempo-fijo"><a class="header-anchor" href="#rango-de-tiempo-fijo">¶</a> Rango de tiempo fijo</h3>
<p>Si se escoge el tiempo de inicio al principio, el tiempo de finalización cambiará respectivamente.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-time-select
    placeholder="Start time"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="End time"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </el-time-select>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-time-select
    placeholder=&quot;Start time&quot;
    v-model=&quot;startTime&quot;
    :picker-options=&quot;{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }&quot;&gt;
  &lt;/el-time-select&gt;
  &lt;el-time-select
    placeholder=&quot;End time&quot;
    v-model=&quot;endTime&quot;
    :picker-options=&quot;{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }&quot;&gt;
  &lt;/el-time-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="rango-de-tiempo-arbitrario"><a class="header-anchor" href="#rango-de-tiempo-arbitrario">¶</a> Rango de tiempo arbitrario</h3>
<p>Es posible escoger un rango de tiempo arbitrario.</p>
<demo-block>
        <div><p>Es posible seleccionar un rango de tiempo al añadir el atributo <code>is-range</code>. También, <code>arrow-control</code> es soportado en modo de rango.</p>
</div>
        <!--element-demo: <template>
  <el-time-picker
    is-range
    v-model="value1"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
  <el-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-time-picker
    is-range
    v-model=&quot;value1&quot;
    range-separator=&quot;To&quot;
    start-placeholder=&quot;Start time&quot;
    end-placeholder=&quot;End time&quot;&gt;
  &lt;/el-time-picker&gt;
  &lt;el-time-picker
    is-range
    arrow-control
    v-model=&quot;value2&quot;
    range-separator=&quot;To&quot;
    start-placeholder=&quot;Start time&quot;
    end-placeholder=&quot;End time&quot;&gt;
  &lt;/el-time-picker&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
&lt;/script&gt;
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
<td>valor enlazado</td>
<td>date(TimePicker) / string(TimeSelect)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>readonly</td>
<td>si el Time Picker está en modo de sólo lectura</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>si el Time Picker se encuentra deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>editable</td>
<td>si el input puede ser editado</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>clearable</td>
<td>si mostrar el botón de borrado</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del input</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder en un modo fuera de rango</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>start-placeholder</td>
<td>placeholder para el tiempo de inicio en modo de rango</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>end-placeholder</td>
<td>placeholder para el tiempo de finalización en modo de rango</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>is-range</td>
<td>si es posible escoger un rango de tiempo, solo funciona con <code>&lt;el-time-picker&gt;</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>arrow-control</td>
<td>si es posible escoger el tiempo usando los botones de flecha, solo funciona con <code>&lt;el-time-picker&gt;</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>align</td>
<td>alineación</td>
<td>left / center / right</td>
<td>left</td>
<td></td>
</tr>
<tr>
<td>popper-class</td>
<td>nombre de clase personalizada para el dropdown del Time Picker</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>picker-options</td>
<td>opciones adicionales, revisar la tabla posterior</td>
<td>object</td>
<td>—</td>
<td>{}</td>
</tr>
<tr>
<td>range-separator</td>
<td>separador de rango</td>
<td>string</td>
<td>-</td>
<td>'-'</td>
</tr>
<tr>
<td>default-value</td>
<td>opcional, fecha por defecto del calendario</td>
<td>Fecha para Selector de Tiempo, string para el Seleccionador de Tiempo</td>
<td>cualquier cosa aceptada por <code>new Date()</code> para el Selector de Tiempo,  Selector de Tiempo, valor seleccionable para el Seleccionador de Tiempo</td>
<td>—</td>
</tr>
<tr>
<td>value-format</td>
<td>opcional, solo para Time Picker, formato del valor vinculado. Si no se especifica, el valor vinculado será un objeto Date</td>
<td>string</td>
<td>ver <a href="#/es/component/date-picker#date-formats">date formats</a></td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>como <code>name</code> en input nativo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>Clase personalizada para el icono de prefijado</td>
<td>string</td>
<td>—</td>
<td>el-icon-time</td>
</tr>
<tr>
<td>clear-icon</td>
<td>Clase personalizada para el icono <code>clear</code></td>
<td>string</td>
<td>—</td>
<td>el-icon-circle-close</td>
</tr>
</tbody>
</table>
<h3 id="opciones-para-time-picker"><a class="header-anchor" href="#opciones-para-time-picker">¶</a> Opciones para Time Picker</h3>
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
<td>start</td>
<td>tiempo de inicio</td>
<td>string</td>
<td>—</td>
<td>09:00</td>
</tr>
<tr>
<td>end</td>
<td>tiempo de finalización</td>
<td>string</td>
<td>—</td>
<td>18:00</td>
</tr>
<tr>
<td>step</td>
<td>salto de tiempo</td>
<td>string</td>
<td>—</td>
<td>00:30</td>
</tr>
<tr>
<td>minTime</td>
<td>tiempo mínimo, cualquier tiempo antes de éste será deshabilitado</td>
<td>string</td>
<td>—</td>
<td>00:00</td>
</tr>
<tr>
<td>maxTime</td>
<td>tiempo máximo, cualquier tiempo después de éste será deshabilitado</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="opciones-para-time-picker-2"><a class="header-anchor" href="#opciones-para-time-picker-2">¶</a> Opciones para Time Picker</h3>
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
<td>selectableRange</td>
<td>rango de tiempo disponible p.ej. <code>'18:30:00 - 20:30:00'</code>ó<code>['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']</code></td>
<td>string / array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format</td>
<td>formato para el selector</td>
<td>string</td>
<td>hour <code>HH</code>, minute <code>mm</code>, second <code>ss</code></td>
<td>HH:mm:ss</td>
</tr>
</tbody>
</table>
<h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3>
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
<td>se lanza cuando el usuario confirma el valor</td>
<td>valor vinculado del componente</td>
</tr>
<tr>
<td>blur</td>
<td>se lanza cuando el input se difumina</td>
<td>instancia del componente</td>
</tr>
<tr>
<td>focus</td>
<td>se lanza cuando el input se enfoca</td>
<td>instancia del componente</td>
</tr>
</tbody>
</table>
<h3 id="metodos"><a class="header-anchor" href="#metodos">¶</a> Metodos</h3>
<table>
<thead>
<tr>
<th>Metodo</th>
<th>Descripción</th>
<th>Parameteros</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>coloca el foco en el input</td>
<td>—</td>
</tr>
</tbody>
</table>
