<h2 id="colorpicker"><a class="header-anchor" href="#colorpicker">¶</a> ColorPicker</h2>
<p>ColorPicker es un selector de color que soporta varios formatos de color.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>ColorPicker requiere una variable de tipo <code>string</code> para ser enlazada a <code>v-model</code>.</p>
</div>
        <!--element-demo: <div class="block">
  <span class="demonstration">Especifica valor por defecto</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">No especifica valor por defecto</span>
  <el-color-picker v-model="color2"></el-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Especifica valor por defecto&lt;/span&gt;
  &lt;el-color-picker v-model=&quot;color1&quot;&gt;&lt;/el-color-picker&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;No especifica valor por defecto&lt;/span&gt;
  &lt;el-color-picker v-model=&quot;color2&quot;&gt;&lt;/el-color-picker&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="alpha"><a class="header-anchor" href="#alpha">¶</a> Alpha</h3>
<demo-block>
        <div><p>ColorPicker soporta selección de canales alpha. Para activarlo sólo agregue el atributo <code>show-alpha</code>.</p>
</div>
        <!--element-demo: <el-color-picker v-model="color" show-alpha></el-color-picker>

<script>
  export default {
    data() {
      return {
        color: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker v-model=&quot;color&quot; show-alpha&gt;&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="colores-predefinidos"><a class="header-anchor" href="#colores-predefinidos">¶</a> Colores predefinidos</h3>
<demo-block>
        <div><p>ColorPicker soporta opciones de color predefinidas</p>
</div>
        <!--element-demo: <el-color-picker
  v-model="color"
  show-alpha
  :predefine="predefineColors">
</el-color-picker>

<script>
  export default {
    data() {
      return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker
  v-model=&quot;color&quot;
  show-alpha
  :predefine=&quot;predefineColors&quot;&gt;
&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="sizes"><a class="header-anchor" href="#sizes">¶</a> Sizes</h3>
<demo-block>
        
        <!--element-demo: <el-color-picker v-model="color"></el-color-picker>
<el-color-picker v-model="color" size="medium"></el-color-picker>
<el-color-picker v-model="color" size="small"></el-color-picker>
<el-color-picker v-model="color" size="mini"></el-color-picker>

<script>
  export default {
    data() {
      return {
        color: '#409EFF'
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker v-model=&quot;color&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;medium&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;small&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;mini&quot;&gt;&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: '#409EFF'
      }
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
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>especifica si se deshabilita el ColorPicker</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del ColorPicker</td>
<td>string</td>
<td>—</td>
<td>medium / small / mini</td>
</tr>
<tr>
<td>show-alpha</td>
<td>especifica si se muestra el control deslizante para el valor alpha</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>color-format</td>
<td>formato de color del <code>v-model</code></td>
<td>string</td>
<td>hsl / hsv / hex / rgb</td>
<td>hex (si show-alpha es false)/ rgb (si show-alpha es true)</td>
</tr>
<tr>
<td>popper-class</td>
<td>nombre de clase para el dropdown del ColorPicker</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>predefine</td>
<td>opciones de colores predefinidas</td>
<td>array</td>
<td>—</td>
<td>—</td>
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
<td>se dispara cuando el valor del input cambia</td>
<td>valor del color</td>
</tr>
<tr>
<td>active-change</td>
<td>se dispara cuando el actual color activo cambia</td>
<td>valor del color activo</td>
</tr>
</tbody>
</table>
