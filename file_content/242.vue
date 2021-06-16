<h2 id="progreso"><a class="header-anchor" href="#progreso">¶</a> Progreso</h2>
<p>Progreso es usado para mostrar el estado de la operación actual e informar al usuario acerca de ésta.</p>
<h3 id="barra-de-progreso-lineal"><a class="header-anchor" href="#barra-de-progreso-lineal">¶</a> Barra de progreso lineal</h3>
<demo-block>
        <div><p>Usa el atributo <code>percentage</code> para asignar el porcentaje. Este es <strong>requerido</strong> y tiene que ser un valor entre <code>0-100</code>. Puede personalizar el formato de texto estableciendo <code>format</code>.</p>
</div>
        <!--element-demo: <el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" :format="format"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="100" status="warning"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :percentage=&quot;50&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; :format=&quot;format&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;

&lt;script&gt;
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="porcentaje-interno"><a class="header-anchor" href="#porcentaje-interno">¶</a> Porcentaje interno</h3>
<p>En este caso el porcentaje no toma espacio adicional.</p>
<demo-block>
        <div><p>El atributo <code>stroke-width</code> decide el ancho de la barra de progreso, y usa el atributo <code>text-inside</code> para poner la descripción dentro de la misma.</p>
</div>
        <!--element-demo: <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;26&quot; :percentage=&quot;70&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;24&quot; :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;22&quot; :percentage=&quot;80&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;20&quot; :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;
</code></pre></template></demo-block><h3 id="color-personalizado"><a class="header-anchor" href="#color-personalizado">¶</a> Color personalizado</h3>
<p>Puede utilizar el atributo <code>color</code> para establecer el color de la barra de progreso.</p>
<demo-block>
        
        <!--element-demo: <el-progress :percentage="percentage" :color="customColor"></el-progress>

<el-progress :percentage="percentage" :color="customColorMethod"></el-progress>

<el-progress :percentage="percentage" :color="customColors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColor&quot;&gt;&lt;/el-progress&gt;

&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColorMethod&quot;&gt;&lt;/el-progress&gt;

&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColors&quot;&gt;&lt;/el-progress&gt;
&lt;div&gt;
  &lt;el-button-group&gt;
    &lt;el-button icon=&quot;el-icon-minus&quot; @click=&quot;decrease&quot;&gt;&lt;/el-button&gt;
    &lt;el-button icon=&quot;el-icon-plus&quot; @click=&quot;increase&quot;&gt;&lt;/el-button&gt;
  &lt;/el-button-group&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage &lt; 30) {
          return '#909399';
        } else if (percentage &lt; 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage &gt; 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage &lt; 0) {
          this.percentage = 0;
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="barra-de-progreso-circular"><a class="header-anchor" href="#barra-de-progreso-circular">¶</a> Barra de progreso circular</h3>
<demo-block>
        <div><p>Puede asignar el atributo <code>type</code> como <code>circle</code> para usar la barra circular de progreso, y usar el atributo <code>width</code> para cambiar el tamaño del círculo.</p>
</div>
        <!--element-demo: <el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="70" status="warning"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress type=&quot;circle&quot; :percentage=&quot;0&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;25&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;70&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;
</code></pre></template></demo-block><h3 id="barra-de-progreso-del-panel-de-control"><a class="header-anchor" href="#barra-de-progreso-del-panel-de-control">¶</a> Barra de progreso del panel de control</h3>
<demo-block>
        <div><p>También puede especificar el atributo <code>type</code> a <code>dashboard</code> para usar la barra de progreso del panel de control.</p>
</div>
        <!--element-demo: <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>

<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress type=&quot;dashboard&quot; :percentage=&quot;percentage&quot; :color=&quot;colors&quot;&gt;&lt;/el-progress&gt;

&lt;div&gt;
  &lt;el-button-group&gt;
    &lt;el-button icon=&quot;el-icon-minus&quot; @click=&quot;decrease&quot;&gt;&lt;/el-button&gt;
    &lt;el-button icon=&quot;el-icon-plus&quot; @click=&quot;increase&quot;&gt;&lt;/el-button&gt;
  &lt;/el-button-group&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage &gt; 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage &lt; 0) {
          this.percentage = 0;
        }
      }
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
<th>Valores aceptado</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>percentage</td>
<td>porcentaje, requerido</td>
<td>number</td>
<td>0-100</td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>tipo de barra de progreso</td>
<td>string</td>
<td>line/circle/dashboard</td>
<td>line</td>
</tr>
<tr>
<td>stroke-width</td>
<td>ancho de la barra de progreso</td>
<td>number</td>
<td>—</td>
<td>6</td>
</tr>
<tr>
<td>text-inside</td>
<td>mostrar el porcentaje dentro de la barra de progreso, solo funciona cuando <code>type</code> es 'line'</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>status</td>
<td>estado actual de la barra de progreso</td>
<td>string</td>
<td>success/exception/warning</td>
<td>—</td>
</tr>
<tr>
<td>color</td>
<td>color de fondo de la barra de progreso. Sobrescribe la propiedad <code>status</code></td>
<td>string/function/array</td>
<td>—</td>
<td>''</td>
</tr>
<tr>
<td>width</td>
<td>ancho del canvas que contiene la barra de progreso circula</td>
<td>number</td>
<td>—</td>
<td>126</td>
</tr>
<tr>
<td>show-text</td>
<td>mostrar porcentaje</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>stroke-linecap</td>
<td>circle/dashboard tipo de diseño al final del camino</td>
<td>string</td>
<td>butt/round/square</td>
<td>round</td>
</tr>
<tr>
<td>format</td>
<td>personalizar el formato de texto estableciendo format</td>
<td>function(percentage)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
