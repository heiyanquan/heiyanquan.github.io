<h2 id="datetimepicker"><a class="header-anchor" href="#datetimepicker">¶</a> DateTimePicker</h2>
<p>Seleccionar fecha y tiempo juntos en un picker.</p>
<div class="tip">
<p>DateTimePicker se deriva de DatePicker y TimePicker. Por una explicación más detallada sobre <code>pickerOptions</code> y otros atributos, puede referirse a DatePicker y TimePicker.</p>
</div>
<h3 id="fecha-y-hora"><a class="header-anchor" href="#fecha-y-hora">¶</a> Fecha y hora</h3>
<demo-block>
        <div><p>Puede seleccionar la fecha y la hora en un picker al mismo tiempo configurando el tipo de fecha y la hora. La forma de utilizar los atajos es la misma que con Date Picker.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Select date and time"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With default time</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Select date and time"
      default-time="12:00:00">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;Select date and time&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;With shortcuts&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;Select date and time&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;With default time&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;Select date and time&quot;
      default-time=&quot;12:00:00&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="alcance-de-fecha-y-tiempo"><a class="header-anchor" href="#alcance-de-fecha-y-tiempo">¶</a> Alcance de fecha y tiempo</h3>
<demo-block>
        <div><p>Puede seleccionar la fecha y el rango de tiempo ajustando <code>type</code> a <code>datetimerange</code>.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      align="right">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetimerange&quot;
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start date&quot;
      end-placeholder=&quot;End date&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;With shortcuts&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetimerange&quot;
      :picker-options=&quot;pickerOptions&quot;
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start date&quot;
      end-placeholder=&quot;End date&quot;
      align=&quot;right&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="valor-de-la-hora-por-defecto-para-la-fecha-de-inicio-y-la-fecha-final"><a class="header-anchor" href="#valor-de-la-hora-por-defecto-para-la-fecha-de-inicio-y-la-fecha-final">¶</a> Valor de la hora por defecto para la fecha de inicio y la fecha final</h3>
<demo-block>
        <div><p>Cuando se selecciona el rango de fechas en el panel con el tipo datetimerange, 00:00:00:00 se usará como el valor de tiempo predeterminado para la fecha de inicio y fin. Podemos controlarlo con el atributo default-time. default-time acepta una matriz de hasta dos cadenas. La primera posición controla el valor de tiempo de la fecha de inicio y la segunda el valor de tiempo de la fecha de fin.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00, end date time 08:00:00</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Start date time 12:00:00&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetimerange&quot;
      start-placeholder=&quot;Start Date&quot;
      end-placeholder=&quot;End Date&quot;
      :default-time=&quot;['12:00:00']&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Start date time 12:00:00, end date time 08:00:00&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetimerange&quot;
      align=&quot;right&quot;
      start-placeholder=&quot;Start Date&quot;
      end-placeholder=&quot;End Date&quot;
      :default-time=&quot;['12:00:00', '08:00:00']&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
&lt;/script&gt;
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
<td>value / v-model</td>
<td>valor enlazado</td>
<td>date(DateTimePicker) / array(DateTimeRangePicker)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>readonly</td>
<td>si DatePicker es solo de lectura</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>si DatePicker esta deshabilitada</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>editable</td>
<td>Si la entrada es editable</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>clearable</td>
<td>Si mostrar el botón de <code>clear</code></td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del input</td>
<td>string</td>
<td>large/small/mini</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder cuando el modo NO es Range</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>start-placeholder</td>
<td>placeholder para el inicio de fecha en el modo Range</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>end-placeholder</td>
<td>placeholder para el fin de fecha en el modo Range</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>time-arrow-control</td>
<td>si se puede modificar el <code>time</code>  utilizando botones con flechas</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>tipo del picker</td>
<td>string</td>
<td>year/month/date/datetime/ week/datetimerange/daterange</td>
<td>date</td>
</tr>
<tr>
<td>format</td>
<td>formato de valor mostrado en el input</td>
<td>string</td>
<td>ver <a href="#/es/component/date-picker#date-formats">date formats</a></td>
<td>yyyy-MM-dd HH:mm:ss</td>
</tr>
<tr>
<td>align</td>
<td>alineación</td>
<td>left/center/right</td>
<td>left</td>
<td></td>
</tr>
<tr>
<td>popper-class</td>
<td>nombre de clase personalizado para el Dropdown de DatePicker</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>picker-options</td>
<td>opciones adicionales, Comprueba la tabla de mas abajo</td>
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
<td>opcional, fecha predeterminada del calendario</td>
<td>Fecha</td>
<td>cualquier cosa aceptada por <code>new Date()</code> —</td>
<td></td>
</tr>
<tr>
<td>default-time</td>
<td>el valor de tiempo por defecto después de elegir una fecha</td>
<td>non-range: string / range: string[]</td>
<td>non-range: Una cadena de texto como <code>12:00:00</code>, range: array de dos strings, el primero es para la fecha de inicio y el segundo para la fecha final. 00:00:00 se utilizará si no se especifica</td>
<td>—</td>
</tr>
<tr>
<td>value-format</td>
<td>opcional, formato de valor de enlazado. Si no se especifica, el valor de enlazado será un objeto Date</td>
<td>cadena</td>
<td>ver <a href="#/es/component/date-picker#date-formats">date formats</a></td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>igual que <code>name</code> en la entrada nativa</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>unlink-panels</td>
<td>desconectar dos date-panels en range-picker</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>Clase personalizada para el icono prefijado</td>
<td>string</td>
<td>—</td>
<td>el-icon-date</td>
</tr>
<tr>
<td>clear-icon</td>
<td>Clase personalizada para el icono <code>clear</code></td>
<td>string</td>
<td>—</td>
<td>el-icon-circle-close</td>
</tr>
<tr>
<td>validate-event</td>
<td>si se debe disparar la validación</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="picker-options"><a class="header-anchor" href="#picker-options">¶</a> Picker Options</h3>
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
<td>shortcuts</td>
<td>un array de objetos { text, onClick } para establecer las opciones de acceso directo, verifique la tabla debajo</td>
<td>objeto[]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabledDate</td>
<td>una función que determina si una fecha está desactivada con esa fecha como parámetro. Debería devolver un booleano</td>
<td>función</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cellClassName</td>
<td>establecer nombre de clase personalizado</td>
<td>Function(Date)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>firstDayOfWeek</td>
<td>primera día de semana</td>
<td>Número</td>
<td>1 to 7</td>
<td>7</td>
</tr>
</tbody>
</table>
<h3 id="accesos-directos"><a class="header-anchor" href="#accesos-directos">¶</a> Accesos directos</h3>
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
<td>text</td>
<td>título del acceso directo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>onClick</td>
<td>la función se dispara cuando se hace clic en el acceso directo, con el <code>vm</code> como parámetro. Puede modificar el valor del picker emitiendo el evento<code>pick</code>. Ejemplo: <code>vm.$emit('pick', new Date())</code></td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3>
<table>
<thead>
<tr>
<th>Nombre de evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Se dispara cuando el usuario confirma el valor</td>
<td>valor enlazado del componente</td>
</tr>
<tr>
<td>blur</td>
<td>Se dispara cuando el input pierde el foco</td>
<td>instancia del componente</td>
</tr>
<tr>
<td>focus</td>
<td>Se dispara cuando el input obtiene el foco</td>
<td>instancia del componente</td>
</tr>
</tbody>
</table>
<h3 id="metodos"><a class="header-anchor" href="#metodos">¶</a> Métodos</h3>
<table>
<thead>
<tr>
<th>Método</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>foco en el input</td>
<td>—</td>
</tr>
</tbody>
</table>
