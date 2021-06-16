<h2 id="calificacion"><a class="header-anchor" href="#calificacion">¶</a> Calificación</h2>
<p>Usado para la calificación</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>Clasificación divide las puntuaciones en tres niveles y estos niveles pueden distinguirse usando diferentes colores de fondo. Por defecto los colores de fondo son iguales, pero puedes asignarlos para reflejar los tres niveles usando el atributo <code>colors</code> y sus dos umbrales pueden ser definidos con <code>low-treshold</code> y <code>high-treshold</code>. O puede asignarlos con un objeto cuya clave es el umbral entre dos niveles y cuyo valor es el color correspondiente.</p>
</div>
        <!--element-demo: <div class="block">
  <span class="demonstration">Default</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">Color for different levels</span>
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
</div>

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
  &lt;el-rate v-model=&quot;value1&quot;&gt;&lt;/el-rate&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Color for different levels&lt;/span&gt;
  &lt;el-rate
    v-model=&quot;value2&quot;
    :colors=&quot;colors&quot;&gt;
  &lt;/el-rate&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="con-texto"><a class="header-anchor" href="#con-texto">¶</a> Con texto</h3>
<p>Usa texto para indicar la puntuación</p>
<demo-block>
        <div><p>Agregar el atributo <code>show-text</code> para mostrar texto a la derecha del componente. Puede asignar textos para las distintas puntuaciones usando <code>texts</code>. <code>texts</code> es un arreglo cuya longitud debe ser igual a la máxima puntuación <code>max</code>.</p>
</div>
        <!--element-demo: <el-rate
  v-model="value"
  :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
  show-text>
</el-rate>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  :texts=&quot;['oops', 'disappointed', 'normal', 'good', 'great']&quot;
  show-text&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="mas-iconos"><a class="header-anchor" href="#mas-iconos">¶</a> Más iconos</h3>
<p>Puede utilizar iconos para diferenciar cada componente.</p>
<demo-block>
        <div><p>Puede personalizar los iconos pasando <code>icon-classes</code> un array con tres elementos o un objeto cuya clave es el umbral entre dos niveles y cuyo valor es la clase de icono correspondiente.  En este ejemplo también usamos <code>void-icon-class</code> para asignar un icono si no está seleccionado.</p>
</div>
        <!--element-demo: <el-rate
  v-model="value"
  :icon-classes="iconClasses"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>

<script>
  export default {
    data() {
      return {
        value: null,
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  :icon-classes=&quot;iconClasses&quot;
  void-icon-class=&quot;icon-rate-face-off&quot;
  :colors=&quot;['#99A9BF', '#F7BA2A', '#FF9900']&quot;&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null,
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="solo-lectura"><a class="header-anchor" href="#solo-lectura">¶</a> Solo lectura</h3>
<p>La calificación de solo lectura es para mostrar la puntuación. Soporta media estrella.</p>
<demo-block>
        <div><p>Use el atributo <code>disabled</code> para hacer el componente de solo lectura. Agregar <code>show-score</code> para mostrar la puntuación en el lado derecho. Además, puede usar el atributo <code>score-template</code> para proveer una plantilla. Tiene que contener <code>{value}</code>, y <code>{value}</code> será sustituido por la puntuación.</p>
</div>
        <!--element-demo: <el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value} points">
</el-rate>

<script>
  export default {
    data() {
      return {
        value: 3.7
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  disabled
  show-score
  text-color=&quot;#ff9900&quot;
  score-template=&quot;{value} points&quot;&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 3.7
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
<td>value / v-model</td>
<td>valor enlazado</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>puntuación máxima</td>
<td>number</td>
<td>—</td>
<td>5</td>
</tr>
<tr>
<td>disabled</td>
<td>si la calificación es de solo lectura</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-half</td>
<td>si escoger media estrella está permitido</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>low-threshold</td>
<td>valor del umbral entre nivel bajo y medio. El valor será incluido en el nivel bajo</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>high-threshold</td>
<td>valor del umbral entre nivel bajo y medio. El valor será incluido en el nivel alto</td>
<td>number</td>
<td>—</td>
<td>4</td>
</tr>
<tr>
<td>colors</td>
<td>colores para los iconos. Si se trata de una matriz, debe tener 3 elementos, cada uno de los cuales corresponde a un nivel de puntuación, si se trata de un objeto, la clave debe ser el valor umbral entre dos niveles, y el valor debe ser el color correspondiente.</td>
<td>array/object</td>
<td>—</td>
<td>['#F7BA2A', '#F7BA2A', '#F7BA2A']</td>
</tr>
<tr>
<td>void-color</td>
<td>color para iconos no seleccionados</td>
<td>string</td>
<td>—</td>
<td>#C6D1DE</td>
</tr>
<tr>
<td>disabled-void-color</td>
<td>color para las iconos no seleccionados de solo lectura</td>
<td>string</td>
<td>—</td>
<td>#EFF2F7</td>
</tr>
<tr>
<td>icon-classes</td>
<td>nombres de clase de los iconos. Si es array, debe tener 3 elementos, cada uno de los cuales corresponde a un nivel de puntuación, en caso contrario, si es objeto, la clave debe ser el valor umbral entre dos niveles, y el valor debe ser la clase de icono correspondiente.</td>
<td>array/object</td>
<td>—</td>
<td>['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']</td>
</tr>
<tr>
<td>void-icon-class</td>
<td>nombre de clase para iconos no seleccionados</td>
<td>string</td>
<td>—</td>
<td>el-icon-star-off</td>
</tr>
<tr>
<td>disabled-void-icon-class</td>
<td>nombre de clase para elementos no seleccionados de solo lectura</td>
<td>string</td>
<td>—</td>
<td>el-icon-star-on</td>
</tr>
<tr>
<td>show-text</td>
<td>muestra el texto</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-score</td>
<td>muestra puntuación actual. <code>show-score</code> y <code>show-text</code> no pueden ser verdaderos al mismo tiempo</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text-color</td>
<td>color del texto</td>
<td>string</td>
<td>—</td>
<td>#1F2D3D</td>
</tr>
<tr>
<td>texts</td>
<td>arreglo de textos</td>
<td>array</td>
<td>—</td>
<td>['极差', '失望', '一般', '满意', '惊喜']</td>
</tr>
<tr>
<td>score-template</td>
<td>plantilla de puntuación</td>
<td>string</td>
<td>—</td>
<td>{value}</td>
</tr>
</tbody>
</table>
<h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3>
<table>
<thead>
<tr>
<th>Nombre del evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Se dispara cuando la puntuación es cambiada</td>
<td>valor luego del cambio</td>
</tr>
</tbody>
</table>
