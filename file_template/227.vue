<h2 id="slider"><a class="header-anchor" href="#slider">¶</a> Slider</h2>
<p>Desliza el slider dentro de un rango fijo.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>El valor actual se muestra cuando se inicia el arrastre del slider.</p>
<demo-block>
        <div><p>Personalice el valor inicial del slider configurando el valor vinculado.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default value&lt;/span&gt;
    &lt;el-slider v-model=&quot;value1&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Customized initial value&lt;/span&gt;
    &lt;el-slider v-model=&quot;value2&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Hide Tooltip&lt;/span&gt;
    &lt;el-slider v-model=&quot;value3&quot; :show-tooltip=&quot;false&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Format Tooltip&lt;/span&gt;
    &lt;el-slider v-model=&quot;value4&quot; :format-tooltip=&quot;formatTooltip&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Disabled&lt;/span&gt;
    &lt;el-slider v-model=&quot;value5&quot; disabled&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="valores-discretos"><a class="header-anchor" href="#valores-discretos">¶</a> Valores discretos</h3>
<p>Las opciones pueden ser discretas.</p>
<demo-block>
        <div><p>Configure el tamaño del paso con el atributo <code>step</code>. Puede visualizar los puntos de ruptura configurando el atributo <code>show-stops</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Breakpoints not displayed&lt;/span&gt;
    &lt;el-slider
      v-model=&quot;value1&quot;
      :step=&quot;10&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Breakpoints displayed&lt;/span&gt;
    &lt;el-slider
      v-model=&quot;value2&quot;
      :step=&quot;10&quot;
      show-stops&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="slider-con-input"><a class="header-anchor" href="#slider-con-input">¶</a> Slider con input</h3>
<p>Inserte el valor a través de un input</p>
<demo-block>
        <div><p>Configure el atributo <code>show-input</code> para que muestre un input a la derecha.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      show-input&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="seleccion-de-rangos"><a class="header-anchor" href="#seleccion-de-rangos">¶</a> Seleccion de rangos</h3>
<p>Se soporta la selección de un rango de valores.</p>
<demo-block>
        <div><p>El ajuste del atributo <code>range</code> activa el modo range, donde el valor vinculado es un array compuesto por dos valores límite.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      range
      show-stops
      :max=&quot;10&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="modo-vertical"><a class="header-anchor" href="#modo-vertical">¶</a> Modo Vertical</h3>
<demo-block>
        <div><p>El ajuste del atributo <code>vertical</code> a <code>true</code> habilita el modo vertical. En el modo vertical, se requiere el atributo <code>height</code> .</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      vertical
      height=&quot;200px&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="mostrar-marcas"><a class="header-anchor" href="#mostrar-marcas">¶</a> Mostrar marcas</h3>
<demo-block>
        <div><p>Use el atributo <code>marks</code>  para mostrar marcas en el slider.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      range
      :marks=&quot;marks&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h2 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h2>
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
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>min</td>
<td>valor mínimo</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>valor máximo</td>
<td>number</td>
<td>—</td>
<td>100</td>
</tr>
<tr>
<td>disabled</td>
<td>si el Slider esta deshabitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>step</td>
<td>tamaño del paso</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>show-input</td>
<td>Si se muestra el input, trabaja cuando <code>range</code>es false</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-input-controls</td>
<td>si se muestran los botones de control cuando<code>show-input</code>es true</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>input-size</td>
<td>tamaño del input</td>
<td>string</td>
<td>large / medium / small / mini</td>
<td>small</td>
</tr>
<tr>
<td>show-stops</td>
<td>si se muestran los puntos de ruptura (breakpoints)</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-tooltip</td>
<td>si se muestra el valor en un tooltip</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>format-tooltip</td>
<td>formato para mostrar el valor del tooltip</td>
<td>function(value)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range</td>
<td>si se usaran un rango</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>vertical</td>
<td>modo vertical</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>height</td>
<td>alto del Slider, requerido en modo vertical</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>etiqueta para screen reader</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>debounce</td>
<td>retardo al escribir, en mili segundos, funciona cuando<code>show-input</code> es true.</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>tooltip-class</td>
<td>nombre personalizado de clase para el tooltip</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>marks</td>
<td>marcas, tipo de clave debe ser <code>number</code> y debe estar en intervalo cerrado [min, max], cada marca puede tener estilo personalizado</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h2 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h2>
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
<td>se dispara cuando el valor cambia (si el ratón está comenzando el arrastre este evento sólo se disparara cuando se suelte el ratón)</td>
<td>valor después del cambio</td>
</tr>
<tr>
<td>input</td>
<td>Se dispara cuando los datos cambian (funciona en tiempo real)</td>
<td>valor después del cambio</td>
</tr>
</tbody>
</table>
