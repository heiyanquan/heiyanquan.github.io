<h2 id="datepicker"><a class="header-anchor" href="#datepicker">¶</a> DatePicker</h2>
<p>Utilice Date Picker para introducir la fecha.</p>
<h3 id="ingresar-fecha"><a class="header-anchor" href="#ingresar-fecha">¶</a> Ingresar Fecha</h3>
<p>Date Picker básico por &quot;día&quot;.</p>
<demo-block>
        <div><p>La medida está determinada por el atributo <code>type</code> . Puede habilitar las opciones rápidas creando un objeto <code>picker-options</code> con la propiedad <code>shortcuts</code>. La fecha desactivada se ajusta mediante <code>disabledDate</code>, que es una función.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a day&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Picker with quick options&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a day&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() &gt; Date.now();
          },
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
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="otras-mediciones"><a class="header-anchor" href="#otras-mediciones">¶</a> Otras mediciones</h3>
<p>Puede elegir la semana, el mes, el año o varias fechas ampliando el componente estándar del selector de fechas.</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Week&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;week&quot;
      format=&quot;Week WW&quot;
      placeholder=&quot;Pick a week&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Month&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;month&quot;
      placeholder=&quot;Pick a month&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Year&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;year&quot;
      placeholder=&quot;Pick a year&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Dates&lt;/span&gt;
    &lt;el-date-picker
      type=&quot;dates&quot;
      v-model=&quot;value4&quot;
      placeholder=&quot;Pick one or more dates&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="rango-de-fechas"><a class="header-anchor" href="#rango-de-fechas">¶</a> Rango de fechas</h3>
<p>Se soporta la selección de un rango de fechas.</p>
<demo-block>
        <div><p>En modo de rango, los paneles izquierdo y derecho están vinculados por defecto. Si desea que los dos paneles cambien los meses actuales de forma independiente, puede utilizar el atributo <code>unlink-panels</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;daterange&quot;
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start date&quot;
      end-placeholder=&quot;End date&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;With quick options&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;daterange&quot;
      align=&quot;right&quot;
      unlink-panels
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start date&quot;
      end-placeholder=&quot;End date&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
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
        value1: '',
        value2: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="rango-de-mes"><a class="header-anchor" href="#rango-de-mes">¶</a> Rango de mes</h3>
<p>Se admite la selección de un intervalo de un mes.</p>
<demo-block>
        <div><p>Cuando se encuentra en el modo de rango, los paneles izquierdo y derecho están enlazados de forma predeterminada. Si desea que los dos paneles cambien de año en curso de forma independiente, puede utilizar el atributo unlink-panels.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;monthrange&quot;
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start month&quot;
      end-placeholder=&quot;End month&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;With quick options&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;monthrange&quot;
      align=&quot;right&quot;
      unlink-panels
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start month&quot;
      end-placeholder=&quot;End month&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'This month',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: 'This year',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 6 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="valor-por-defecto"><a class="header-anchor" href="#valor-por-defecto">¶</a> Valor por defecto</h3>
<p>Si el usuario no ha escogido una fecha, muestra el calendario de hoy por defecto. Puede utilizar <code>default-value</code> para fijar otra fecha. Su valor debe ser definido por <code>new Date()</code>.</p>
<p>Si el tipo es <code>daterange</code>, <code>default-value</code> establece el calendario del lado izquierdo.</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;date&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a date&quot;
      default-value=&quot;2010-10-01&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;daterange&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;daterange&quot;
      align=&quot;right&quot;
      start-placeholder=&quot;Start Date&quot;
      end-placeholder=&quot;End Date&quot;
      default-value=&quot;2010-10-01&quot;&gt;
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
</code></pre></template></demo-block><h3 id="formatos-de-date"><a class="header-anchor" href="#formatos-de-date">¶</a> Formatos de Date</h3>
<p>Utilice <code>format</code> para controlar el formato del texto visualizado en el input. Utilice <code>value-format</code> para controlar el formato del valor vinculado.</p>
<p>Por defecto, el componente acepta y emite un objeto Date. A continuación se soportan cadenas de formato, usando UTC 2017-01-02 03:04:05 como ejemplo:</p>
<div class="warning">
<p>Preste atención a la capitalización</p>
</div>
<table>
<thead>
<tr>
<th>formato</th>
<th>significado</th>
<th>nota</th>
<th>ejemplo</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>yyyy</code></td>
<td>año</td>
<td></td>
<td>2017</td>
</tr>
<tr>
<td><code>M</code></td>
<td>mes</td>
<td>no acepta 0</td>
<td>1</td>
</tr>
<tr>
<td><code>MM</code></td>
<td>mes</td>
<td></td>
<td>01</td>
</tr>
<tr>
<td><code>W</code></td>
<td>semana</td>
<td>solamente para semanas en picker's <code>format</code>; no acepta 0</td>
<td>1</td>
</tr>
<tr>
<td><code>WW</code></td>
<td>semana</td>
<td>solamente para semanas en  picker's <code>format</code></td>
<td>01</td>
</tr>
<tr>
<td><code>d</code></td>
<td>día</td>
<td>no acepta 0</td>
<td>2</td>
</tr>
<tr>
<td><code>dd</code></td>
<td>día</td>
<td></td>
<td>02</td>
</tr>
<tr>
<td><code>H</code></td>
<td>hora</td>
<td>24-hora reloj; no acepta 0</td>
<td>3</td>
</tr>
<tr>
<td><code>HH</code></td>
<td>hora</td>
<td>24-hora reloj</td>
<td>03</td>
</tr>
<tr>
<td><code>h</code></td>
<td>hora</td>
<td>12-hora reloj;  debe usarse con <code>A</code> o <code>a</code>; no acepta 0</td>
<td>3</td>
</tr>
<tr>
<td><code>hh</code></td>
<td>hora</td>
<td>12-hora reloj;  debe usarse con <code>A</code> o <code>a</code></td>
<td>03</td>
</tr>
<tr>
<td><code>m</code></td>
<td>minuto</td>
<td>no acepta 0</td>
<td>4</td>
</tr>
<tr>
<td><code>mm</code></td>
<td>minuto</td>
<td></td>
<td>04</td>
</tr>
<tr>
<td><code>s</code></td>
<td>segundo</td>
<td>no acepta 0</td>
<td>5</td>
</tr>
<tr>
<td><code>ss</code></td>
<td>segundo</td>
<td></td>
<td>05</td>
</tr>
<tr>
<td><code>A</code></td>
<td>AM/PM</td>
<td>solamente para <code>format</code>, mayúsculas</td>
<td>AM</td>
</tr>
<tr>
<td><code>a</code></td>
<td>am/pm</td>
<td>solamente para <code>format</code>, minúsculas</td>
<td>am</td>
</tr>
<tr>
<td><code>timestamp</code></td>
<td>JS timestamp</td>
<td>solamente para <code>value-format</code>; valor vinculado debe ser un <code>number</code></td>
<td>1483326245000</td>
</tr>
<tr>
<td><code>[MM]</code></td>
<td>No hay caracteres de escape</td>
<td>Para escapar de los caracteres, colóquelos entre corchetes (ejemplo: [A] [MM]).</td>
<td>MM</td>
</tr>
</tbody>
</table>
<demo-block>
        
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Emits Date object&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;Value: {{ value1 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a Date&quot;
      format=&quot;yyyy/MM/dd&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Use value-format&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;Value: {{ value2 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a Date&quot;
      format=&quot;yyyy/MM/dd&quot;
      value-format=&quot;yyyy-MM-dd&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Timestamp&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;Value：{{ value3 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a Date&quot;
      format=&quot;yyyy/MM/dd&quot;
      value-format=&quot;timestamp&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="hora-por-defecto-para-comienzo-y-fin-de-fecha"><a class="header-anchor" href="#hora-por-defecto-para-comienzo-y-fin-de-fecha">¶</a> Hora por defecto para comienzo y fin de fecha</h3>
<p>Al seleccionar un intervalo de fechas, puede asignar la hora para la fecha de inicio y la fecha final.</p>
<demo-block>
        <div><p>Por defecto, la hora de la fecha de inicio y final es <code>00:00:00</code>. Configurar <code>default-time</code>  puede cambiar la hora respectivamente. Acepta un array de hasta dos cadenas con el formato  <code>12:00:00</code>. La primera cadena fija la hora para la fecha de inicio y la segunda para la fecha final.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;p&gt;Component value：{{ value }}&lt;/p&gt;
    &lt;el-date-picker
      v-model=&quot;value&quot;
      type=&quot;daterange&quot;
      start-placeholder=&quot;Start date&quot;
      end-placeholder=&quot;End date&quot;
      :default-time=&quot;['00:00:00', '23:59:59']&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ''
      };
    }
  };
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
<td>date(DatePicker) / array(DateRangePicker)</td>
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
<td>si DatePicker esta deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del input</td>
<td>string</td>
<td>large/small/mini</td>
<td>—</td>
</tr>
<tr>
<td>editable</td>
<td>si el input es editable</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>clearable</td>
<td>si se muestra el botón de borrado</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder cuando el modo NO es rango</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>start-placeholder</td>
<td>placeholder para la fecha de inicio en modo rango</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>end-placeholder</td>
<td>placeholder para la fecha final en modo rango</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>tipo de picker</td>
<td>string</td>
<td>year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange</td>
<td>date</td>
</tr>
<tr>
<td>format</td>
<td>formato en que se muestra el valor en el input</td>
<td>string</td>
<td>ver <a href="#/es/component/date-picker#date-formats">date formats</a></td>
<td>yyyy-MM-dd</td>
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
<td>nombre de clase personalizada para el dropdown de DatePicker</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>picker-options</td>
<td>opciones adicionales, chequee la tabla debajo</td>
<td>object</td>
<td>—</td>
<td>{}</td>
</tr>
<tr>
<td>range-separator</td>
<td>separador de rangos</td>
<td>string</td>
<td>—</td>
<td>'-'</td>
</tr>
<tr>
<td>default-value</td>
<td>opcional, valor por defecto para el calendario</td>
<td>Date</td>
<td>cualquiera aceptado por <code>new Date()</code></td>
<td>—</td>
</tr>
<tr>
<td>default-time</td>
<td>opcional, los valores para las horas que se deben usar en la selección de fechas cuando se usa el modo rango</td>
<td>string[]</td>
<td>Array de dos valores, cada uno es un string del estilo <code>12:00:00</code>. El primer elemento es para la fecha de inicio y el segundo es para la fecha final.</td>
<td>—</td>
</tr>
<tr>
<td>value-format</td>
<td>opcional, formato del valor enlazado. Si no esta especificado, el valor enlazado será un objeto Date.</td>
<td>string</td>
<td>ver <a href="#/es/component/date-picker#date-formats">date formats</a></td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>igual que <code>name</code> en el input nativo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>unlink-panels</td>
<td>desvincular los dos paneles de fecha en el range-picker</td>
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
</tbody>
</table>
<h3 id="opciones-del-picker"><a class="header-anchor" href="#opciones-del-picker">¶</a> Opciones del Picker</h3>
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
<td>{ text, onClick } un array de objetos para establecer opciones de acceso directo, verifique la tabla siguiente</td>
<td>object[]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabledDate</td>
<td>una función que determina si una fecha está desactivada con esa fecha como parámetro. Debería devolver un valor booleano</td>
<td>function</td>
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
<td>primer día de la semana</td>
<td>Number</td>
<td>1 to 7</td>
<td>7</td>
</tr>
<tr>
<td>onPick</td>
<td>una función que se dispara cuando se cambia la fecha seleccionada. Solamente para <code>daterange</code> y <code>datetimerange</code>.</td>
<td>Function({ maxDate, minDate })</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="accesso-directo"><a class="header-anchor" href="#accesso-directo">¶</a> Accesso directo</h3>
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
<td>una función se dispara al hacer clic en el acceso directo, con<code>vm</code>como parámetro. Puede modificar el valor del picker emitiendo el evento <code>pick</code>. Ejemplo: <code>vm.$emit('pick', new Date())</code></td>
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
<th>Nombre</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>se dispara cuando el usuario confirma el valor</td>
<td>valor enlazado al componente</td>
</tr>
<tr>
<td>blur</td>
<td>se dispara cuando el input pierde el foco</td>
<td>instancia del componente</td>
</tr>
<tr>
<td>focus</td>
<td>se dispara cuando el input obtiene el foco</td>
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
<td>coloca el foco en el input</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>range-separator</td>
<td>Separador de los rangos personalizado</td>
</tr>
</tbody>
</table>
