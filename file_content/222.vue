<h2 id="switch"><a class="header-anchor" href="#switch">¶</a> Switch</h2>
<p>Switch es utilizado para realizar cambios entre dos estados opuestos.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>Enlace <code>v-model</code> a una variable de tipo <code>Boolean</code>. Los atributos <code>active-color</code> y <code>inactive-color</code> deciden el color de fondo en cada estado.</p>
</div>
        <!--element-demo: <el-switch v-model="value1">
</el-switch>
<el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch v-model=&quot;value1&quot;&gt;
&lt;/el-switch&gt;
&lt;el-switch
  v-model=&quot;value2&quot;
  active-color=&quot;#13ce66&quot;
  inactive-color=&quot;#ff4949&quot;&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="texto-de-descripcion"><a class="header-anchor" href="#texto-de-descripcion">¶</a> Texto de descripción</h3>
<demo-block>
        <div><p>Puede agregar los atributos <code>active-text</code> y <code>inactive-text</code> para mostrar los textos.</p>
</div>
        <!--element-demo: <el-switch
  v-model="value1"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch
  v-model=&quot;value1&quot;
  active-text=&quot;Pay by month&quot;
  inactive-text=&quot;Pay by year&quot;&gt;
&lt;/el-switch&gt;
&lt;el-switch
  style=&quot;display: block&quot;
  v-model=&quot;value2&quot;
  active-color=&quot;#13ce66&quot;
  inactive-color=&quot;#ff4949&quot;
  active-text=&quot;Pay by month&quot;
  inactive-text=&quot;Pay by year&quot;&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tipos-de-valores-extendidos"><a class="header-anchor" href="#tipos-de-valores-extendidos">¶</a> Tipos de valores extendidos</h3>
<demo-block>
        <div><p>Puede establecer los atributos <code>active-value</code> y <code>inactive-value</code>. Ambos reciben valores de tipo <code>Boolean</code>, <code>String</code> o <code>Number</code>.</p>
</div>
        <!--element-demo: <el-tooltip :content="'Switch value: ' + value" placement="top">
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0">
  </el-switch>
</el-tooltip>

<script>
  export default {
    data() {
      return {
        value: '100'
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip :content=&quot;'Switch value: ' + value&quot; placement=&quot;top&quot;&gt;
  &lt;el-switch
    v-model=&quot;value&quot;
    active-color=&quot;#13ce66&quot;
    inactive-color=&quot;#ff4949&quot;
    active-value=&quot;100&quot;
    inactive-value=&quot;0&quot;&gt;
  &lt;/el-switch&gt;
&lt;/el-tooltip&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: '100'
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disabled"><a class="header-anchor" href="#disabled">¶</a> Disabled</h3>
<demo-block>
        <div><p>Agregar el atributo <code>disabled</code> desactiva el componente Switch.</p>
</div>
        <!--element-demo: <el-switch
  v-model="value1"
  disabled>
</el-switch>
<el-switch
  v-model="value2"
  disabled>
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch
  v-model=&quot;value1&quot;
  disabled&gt;
&lt;/el-switch&gt;
&lt;el-switch
  v-model=&quot;value2&quot;
  disabled&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: false
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
<td>boolean / string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si Switch esta deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>width</td>
<td>ancho del componente Switch</td>
<td>number</td>
<td>—</td>
<td>40</td>
</tr>
<tr>
<td>active-icon-class</td>
<td>nombre de la clase del icono mostrado en el estado <code>on</code>, sobrescribe <code>active-text</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inactive-icon-class</td>
<td>nombre de la clase del icono mostrado en el estado <code>off</code>, sobrescribe <code>inactive-text</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>active-text</td>
<td>texto mostrado en el estado <code>on</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inactive-text</td>
<td>texto mostrado en el estado <code>off</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>active-value</td>
<td>cambia su valor cuando se encuentra en el estado <code>on</code></td>
<td>boolean / string / number</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inactive-value</td>
<td>cambia su valor cuando se encuentra en el estado <code>off</code></td>
<td>boolean / string / number</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>active-color</td>
<td>color de fondo cuando se encuentra en el estado <code>on</code></td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
<tr>
<td>inactive-color</td>
<td>color de fondo cuando se encuentra en el estado <code>off</code></td>
<td>string</td>
<td>—</td>
<td>#C0CCDA</td>
</tr>
<tr>
<td>name</td>
<td>nombre de entrada del componente Switch</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>validate-event</td>
<td>si se debe lanzar la validación de formulario</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3>
<table>
<thead>
<tr>
<th>Nombre del evento</th>
<th>Descripción</th>
<th>Parámetro</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>se dispara cuando el valor cambia</td>
<td>valor</td>
</tr>
</tbody>
</table>
<p>después de cambiar</p>
<h3 id="metodos"><a class="header-anchor" href="#metodos">¶</a> Métodos</h3>
<table>
<thead>
<tr>
<th>Método</th>
<th>Descripción</th>
<th>Parámetro</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>foco al componente Switch</td>
<td>—</td>
</tr>
</tbody>
</table>
