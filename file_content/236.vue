<h2 id="radio"><a class="header-anchor" href="#radio">¶</a> Radio</h2>
<p>Selección única entre múltiples opciones.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>El elemento Radio no debe tener muchas opciones. De otra manera, utilice el componente Select.</p>
<demo-block>
        <div><p>Crear un elemento Radio es fácil, solo necesita enlazar(<code>bind</code>) una variable a la directiva <code>v-model</code> del Radio. Va a ser igual al valor <code>label</code> del Radio seleccionado. El tipo de dato de <code>label</code> es <code>String</code>, <code>Number</code> o <code>Boolean</code>.</p>
</div>
        <!--element-demo: <template>
  <el-radio v-model="radio" label="1">Option A</el-radio>
  <el-radio v-model="radio" label="2">Option B</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio v-model=&quot;radio&quot; label=&quot;1&quot;&gt;Option A&lt;/el-radio&gt;
  &lt;el-radio v-model=&quot;radio&quot; label=&quot;2&quot;&gt;Option B&lt;/el-radio&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="deshabilitado"><a class="header-anchor" href="#deshabilitado">¶</a> Deshabilitado</h3>
<p>El atributo <code>disabled</code> es utilizado para deshabilitar un Radio.</p>
<demo-block>
        <div><p>Solo necesita agregar el atributo <code>disabled</code>.</p>
</div>
        <!--element-demo: <template>
  <el-radio disabled v-model="radio" label="disabled">Option A</el-radio>
  <el-radio disabled v-model="radio" label="selected and disabled">Option B</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio disabled v-model=&quot;radio&quot; label=&quot;disabled&quot;&gt;Option A&lt;/el-radio&gt;
  &lt;el-radio disabled v-model=&quot;radio&quot; label=&quot;selected and disabled&quot;&gt;Option B&lt;/el-radio&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="grupo-de-elementos-radio"><a class="header-anchor" href="#grupo-de-elementos-radio">¶</a> Grupo de elementos Radio</h3>
<p>Recomendado para seleccionar opciones que se excluyen mutuamente.</p>
<demo-block>
        <div><p>Combine <code>el-radio-group</code> con <code>el-radio</code> para mostrar un grupo de Radios. Enlace la variable con <code>v-model</code> del elemento <code>el-radio-group</code> y asigne el valor del <code>label</code> en <code>el-radio</code>. Se provee el evento <code>change</code> con el valor actual como parámetro.</p>
</div>
        <!--element-demo: <el-radio-group v-model="radio">
  <el-radio :label="3">Option A</el-radio>
  <el-radio :label="6">Option B</el-radio>
  <el-radio :label="9">Option C</el-radio>
</el-radio-group>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-radio-group v-model=&quot;radio&quot;&gt;
  &lt;el-radio :label=&quot;3&quot;&gt;Option A&lt;/el-radio&gt;
  &lt;el-radio :label=&quot;6&quot;&gt;Option B&lt;/el-radio&gt;
  &lt;el-radio :label=&quot;9&quot;&gt;Option C&lt;/el-radio&gt;
&lt;/el-radio-group&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="estilo-button"><a class="header-anchor" href="#estilo-button">¶</a> Estilo Button</h3>
<p>Radio con estilo de botón.</p>
<demo-block>
        <div><p>Solo necesita cambiar el elemento <code>el-radio</code> a <code>el-radio-button</code>. Se provee el atributo <code>size</code>.</p>
</div>
        <!--element-demo: <template>
  <div>
    <el-radio-group v-model="radio1">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio2" size="medium">
      <el-radio-button label="New York" ></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington" disabled ></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" disabled size="mini">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-radio-group v-model=&quot;radio1&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio2&quot; size=&quot;medium&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot; &gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio3&quot; size=&quot;small&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot; disabled &gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio4&quot; disabled size=&quot;mini&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="con-bordes"><a class="header-anchor" href="#con-bordes">¶</a> Con bordes</h3>
<demo-block>
        <div><p>El atributo <code>border</code> agrega un borde al elemento Radio.</p>
</div>
        <!--element-demo: <template>
  <div>
    <el-radio v-model="radio1" label="1" border>Option A</el-radio>
    <el-radio v-model="radio1" label="2" border>Option B</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio v-model="radio2" label="1" border size="medium">Option A</el-radio>
    <el-radio v-model="radio2" label="2" border size="medium">Option B</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio label="1" border>Option A</el-radio>
      <el-radio label="2" border disabled>Option B</el-radio>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" size="mini" disabled>
      <el-radio label="1" border>Option A</el-radio>
      <el-radio label="2" border>Option B</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-radio v-model=&quot;radio1&quot; label=&quot;1&quot; border&gt;Option A&lt;/el-radio&gt;
    &lt;el-radio v-model=&quot;radio1&quot; label=&quot;2&quot; border&gt;Option B&lt;/el-radio&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio v-model=&quot;radio2&quot; label=&quot;1&quot; border size=&quot;medium&quot;&gt;Option A&lt;/el-radio&gt;
    &lt;el-radio v-model=&quot;radio2&quot; label=&quot;2&quot; border size=&quot;medium&quot;&gt;Option B&lt;/el-radio&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio3&quot; size=&quot;small&quot;&gt;
      &lt;el-radio label=&quot;1&quot; border&gt;Option A&lt;/el-radio&gt;
      &lt;el-radio label=&quot;2&quot; border disabled&gt;Option B&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio4&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-radio label=&quot;1&quot; border&gt;Option A&lt;/el-radio&gt;
      &lt;el-radio label=&quot;2&quot; border&gt;Option B&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="atributos-de-radio"><a class="header-anchor" href="#atributos-de-radio">¶</a> Atributos de Radio</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores Aceptado</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>value / v-model</td>
<td>valor enlazado</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>el valor del Radio</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si el Radio está deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>agregar borde alrededor del elemento Radio</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del elemento Radio, solo funciona si <code>border</code> es verdadero</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>atributo nativo <code>name</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="atributos-de-radio-button"><a class="header-anchor" href="#atributos-de-radio-button">¶</a> Atributos de Radio-button</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores Aceptado</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>el valor del Radio</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si el Radio está deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>atributo nativo <code>name</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="atributos-de-radio-group"><a class="header-anchor" href="#atributos-de-radio-group">¶</a> Atributos de Radio-group</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores Aceptado</th>
<th>Valores por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>value / v-model</td>
<td>valor enlazado</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>tamaño de los <code>radio buttons</code> o <code>bordered radios</code></td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si la anidación de radios está deshabilitada</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text-color</td>
<td>color de las letras cuando el botón está activo</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>fill</td>
<td>color del borde y fondo cuando el botón está activo</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
</tbody>
</table>
<h3 id="eventos-de-radio"><a class="header-anchor" href="#eventos-de-radio">¶</a> Eventos de Radio</h3>
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
<td>se dispara cuando el valor cambia</td>
<td>el valor del <code>label</code> del Radio seleccionado</td>
</tr>
</tbody>
</table>
<h3 id="eventos-de-radio-group"><a class="header-anchor" href="#eventos-de-radio-group">¶</a> Eventos de Radio-group</h3>
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
<td>se dispara cuando el valor cambia</td>
<td>el valor del <code>label</code> del Radio seleccionado</td>
</tr>
</tbody>
</table>
