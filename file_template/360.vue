<h2 id="avatar"><a class="header-anchor" href="#avatar">¶</a> Avatar</h2>
<p>Los avatares pueden utilizarse para representar personas u objetos. Soporta imágenes, iconos o caracteres.</p>
<h3 id="basico"><a class="header-anchor" href="#basico">¶</a> Básico</h3>
<p>Use los props <code>shape</code> y <code>size</code> para establecer la forma y el tamaño del avatar</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-row class=&quot;demo-avatar demo-basic&quot;&gt;
    &lt;el-col :span=&quot;12&quot;&gt;
      &lt;div class=&quot;sub-title&quot;&gt;circle&lt;/div&gt;
      &lt;div class=&quot;demo-basic--circle&quot;&gt;
        &lt;div class=&quot;block&quot;&gt;&lt;el-avatar :size=&quot;50&quot; :src=&quot;circleUrl&quot;&gt;&lt;/el-avatar&gt;&lt;/div&gt;
        &lt;div class=&quot;block&quot; v-for=&quot;size in sizeList&quot; :key=&quot;size&quot;&gt;
          &lt;el-avatar :size=&quot;size&quot; :src=&quot;circleUrl&quot;&gt;&lt;/el-avatar&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-col&gt;  
    &lt;el-col :span=&quot;12&quot;&gt;
      &lt;div class=&quot;sub-title&quot;&gt;square&lt;/div&gt;
      &lt;div class=&quot;demo-basic--circle&quot;&gt;
        &lt;div class=&quot;block&quot;&gt;&lt;el-avatar shape=&quot;square&quot; :size=&quot;50&quot; :src=&quot;squareUrl&quot;&gt;&lt;/el-avatar&gt;&lt;/div&gt;
        &lt;div class=&quot;block&quot; v-for=&quot;size in sizeList&quot; :key=&quot;size&quot;&gt;
          &lt;el-avatar shape=&quot;square&quot; :size=&quot;size&quot; :src=&quot;squareUrl&quot;&gt;&lt;/el-avatar&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-col&gt; 
  &lt;/el-row&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        circleUrl: &quot;https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png&quot;,
        squareUrl: &quot;https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png&quot;,
        sizeList: [&quot;large&quot;, &quot;medium&quot;, &quot;small&quot;]
      }
    }
  }
&lt;/script&gt;

</code></pre></template></demo-block><h3 id="tipos"><a class="header-anchor" href="#tipos">¶</a> Tipos</h3>
<p>Soporta imágenes, iconos o caracteres.</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;demo-type&quot;&gt;
    &lt;div&gt;
      &lt;el-avatar icon=&quot;el-icon-user-solid&quot;&gt;&lt;/el-avatar&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;el-avatar src=&quot;https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png&quot;&gt;&lt;/el-avatar&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;el-avatar&gt; user &lt;/el-avatar&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="fallback-cuando-se-produce-un-error-de-carga-de-imagen"><a class="header-anchor" href="#fallback-cuando-se-produce-un-error-de-carga-de-imagen">¶</a> Fallback cuando se produce un error de carga de imagen</h3>
<p>Fallback cuando se produce un error de carga de imagen</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;demo-type&quot;&gt;
    &lt;el-avatar :size=&quot;60&quot; src=&quot;https://empty&quot; @error=&quot;errorHandler&quot;&gt;
      &lt;img src=&quot;https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png&quot;/&gt;
      &lt;/el-avatar&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
&lt;/script&gt;

</code></pre></template></demo-block><h3 id="como-encaja-la-imagen-en-su-contenedor"><a class="header-anchor" href="#como-encaja-la-imagen-en-su-contenedor">¶</a> Cómo encaja la imagen en su contenedor</h3>
<p>Establezca cómo la imagen se ajusta a su contenedor para un avatar de imagen, igual que <a href="https://developer.mozilla.org/es/docs/Web/CSS/object-fit">object-fit</a>.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;demo-fit&quot;&gt;
    &lt;div class=&quot;block&quot; v-for=&quot;fit in fits&quot; :key=&quot;fit&quot;&gt;
        &lt;span class=&quot;title&quot;&gt;{{ fit }}&lt;/span&gt;
        &lt;el-avatar shape=&quot;square&quot; :size=&quot;100&quot; :fit=&quot;fit&quot; :src=&quot;url&quot;&gt;&lt;/el-avatar&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon</td>
<td>establece el tipo de representación a Icono, más información en  Componente Icon</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>Establece el tamaño del avatar</td>
<td>number/string</td>
<td>number / large / medium / small</td>
<td>large</td>
</tr>
<tr>
<td>shape</td>
<td>establece la forma del avatar</td>
<td>string</td>
<td>circle / square</td>
<td>circle</td>
</tr>
<tr>
<td>src</td>
<td>la dirección de la imagen para un avatar de imagen</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>srcSet</td>
<td>Una lista de una o más cadenas separadas por comas que indica un conjunto de posibles fuentes de imágenes para que el agente de usuario las utilice.</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>alt</td>
<td>Este atributo define una descripción de texto alternativo de la imagen</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fit</td>
<td>establece cómo encaja la imagen en su contenedor para un avatar de imagen</td>
<td>string</td>
<td>fill / contain / cover / none / scale-down</td>
<td>cover</td>
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
<td>error</td>
<td>cuando se produce un error de carga de img, devuelve false para evitar el comportamiento de repliegue predeterminado</td>
<td>(e: Event)</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<p>| Nombre | Descripción |
| default  | personalice el contenido del avatar |</p>
