<h2 id="inputnumber"><a class="header-anchor" href="#inputnumber">¶</a> InputNumber</h2>
<p>Input de  valores numéricos con un rango personalizable.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>Vincule una variable con <code>v-model</code> en el elemento <code>&lt;el-input-number&gt;</code> y estará listo.</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; @change=&quot;handleChange&quot; :min=&quot;1&quot; :max=&quot;10&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disabled"><a class="header-anchor" href="#disabled">¶</a> Disabled</h3>
<demo-block>
        <div><p>El atributo <code>disabled</code> acepta un valor <code>boolean</code>, y si el valor es <code>true</code>, el componente queda deshabilitado. Si sólo necesita controlar el valor dentro de un rango, puede añadir un atributo <code>min</code> para establecer el valor mínimo y un valor <code>max</code> para establecer el valor máximo. Por defecto, el valor mínimo es <code>0</code>.</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :disabled=&quot;true&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="steps"><a class="header-anchor" href="#steps">¶</a> Steps</h3>
<p>Le permite definir el nivel de incremento de los saltos.</p>
<demo-block>
        <div><p>Añada el atributo <code>step</code> para establecer el salto.</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" :step="2"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 5
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :step=&quot;2&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 5
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="step-estrictamente"><a class="header-anchor" href="#step-estrictamente">¶</a> Step estrictamente</h3>
<demo-block>
        <div><p>El atributo <code>step-strictly</code> acepta <code>boolean</code>. Si este atributo es <code>true</code>, el valor de entrada sólo puede ser múltiplo de step.</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" :step="2" step-strictly></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 2
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :step=&quot;2&quot; step-strictly&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 2
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="precision"><a class="header-anchor" href="#precision">¶</a> Precisión</h3>
<demo-block>
        <div><p>El atributo <code>precision</code> aplica presición al valor del value.</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :precision=&quot;2&quot; :step=&quot;0.1&quot; :max=&quot;10&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>El valor de <code>precision</code> debe ser un numero entero positivo que no debe ser inferior a los decimales del <code>step</code>.</p>
</div>
<h3 id="tamano"><a class="header-anchor" href="#tamano">¶</a> Tamaño</h3>
<p>Utilice el atributo <code>size</code> para establecer tamaños adicionales con <code>medium</code>, <code>small</code> o <code>mini</code>.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-input-number v-model="num1"></el-input-number>
    <el-input-number size="medium" v-model="num2"></el-input-number>
    <el-input-number size="small" v-model="num3"></el-input-number>
    <el-input-number size="mini" v-model="num4"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num1&quot;&gt;&lt;/el-input-number&gt;
    &lt;el-input-number size=&quot;medium&quot; v-model=&quot;num2&quot;&gt;&lt;/el-input-number&gt;
    &lt;el-input-number size=&quot;small&quot; v-model=&quot;num3&quot;&gt;&lt;/el-input-number&gt;
    &lt;el-input-number size=&quot;mini&quot; v-model=&quot;num4&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="posicion-de-los-controles"><a class="header-anchor" href="#posicion-de-los-controles">¶</a> Posición de los controles</h3>
<demo-block>
        <div><p>Establezca <code>controls-position</code> para decidir la posición de los botones de control.</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; controls-position=&quot;right&quot; @change=&quot;handleChange&quot; :min=&quot;1&quot; :max=&quot;10&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
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
<td>valor vinculado</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>min</td>
<td>el valor mínimo permitido</td>
<td>number</td>
<td>—</td>
<td><code>-Infinity</code></td>
</tr>
<tr>
<td>max</td>
<td>el valor máximo permitido</td>
<td>number</td>
<td>—</td>
<td><code>Infinity</code></td>
</tr>
<tr>
<td>step</td>
<td>incremento (salto)</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>step-strictly</td>
<td>si el valor del input puede ser solo un múltiplo de step</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>precision</td>
<td>precisión del valor del input</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del componente</td>
<td>string</td>
<td>large/small</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si el componente esta deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>controls</td>
<td>si se activan los botones de control</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>controls-position</td>
<td>posición de los botones de control</td>
<td>string</td>
<td>right</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>lo mismo que <code>name</code> en un input nativo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>texto de la etiqueta</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder en el input</td>
<td>string</td>
<td>-</td>
<td>-</td>
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
<td>se produce cuando el valor cambia</td>
<td>currentValue, oldValue</td>
</tr>
<tr>
<td>blur</td>
<td>se produce cuando el componente pierde el foco</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>se produce cuando el componente obtiene el foco</td>
<td>(event: Event)</td>
</tr>
</tbody>
</table>
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
<td>coloca el foco en el elemento actual</td>
<td>-</td>
</tr>
<tr>
<td>select</td>
<td>selecciona el contenido del input</td>
<td>-</td>
</tr>
</tbody>
</table>
