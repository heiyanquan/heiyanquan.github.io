<h2 id="image"><a class="header-anchor" href="#image">¶</a> Image</h2>
<p>Además de las características nativas de img, soporte de carga perezosa, marcador de posición personalizado y fallo de carga, etc.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>Indica cómo se debe cambiar el tamaño de la imagen para que se ajuste a su contenedor por ajuste, igual que el ajuste de objeto nativo. <a href="https://developer.mozilla.org/es/docs/Web/CSS/object-fit">object-fit</a>。</p>
</div>
        <!--element-demo: <div class="demo-image">
  <div class="block" v-for="fit in fits" :key="fit">
    <span class="demonstration">{{ fit }}</span>
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fit"></el-image>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image&quot;&gt;
  &lt;div class=&quot;block&quot; v-for=&quot;fit in fits&quot; :key=&quot;fit&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;{{ fit }}&lt;/span&gt;
    &lt;el-image
      style=&quot;width: 100px; height: 100px&quot;
      :src=&quot;url&quot;
      :fit=&quot;fit&quot;&gt;&lt;/el-image&gt;
  &lt;/div&gt;
&lt;/div&gt;

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
</code></pre></template></demo-block><h3 id="placeholder"><a class="header-anchor" href="#placeholder">¶</a> Placeholder</h3>
<demo-block>
        <div><p>Personalice el placeholder del contenido mientras la imagen aun no ha sido cargada vía <code>slot = placeholder</code></p>
</div>
        <!--element-demo: <div class="demo-image__placeholder">
  <div class="block">
    <span class="demonstration">Default</span>
    <el-image :src="src"></el-image>
  </div>
  <div class="block">
    <span class="demonstration">Custom</span>
    <el-image :src="src">
      <div slot="placeholder" class="image-slot">
        Loading<span class="dot">...</span>
      </div>
    </el-image>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__placeholder&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-image :src=&quot;src&quot;&gt;&lt;/el-image&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Custom&lt;/span&gt;
    &lt;el-image :src=&quot;src&quot;&gt;
      &lt;div slot=&quot;placeholder&quot; class=&quot;image-slot&quot;&gt;
        Loading&lt;span class=&quot;dot&quot;&gt;...&lt;/span&gt;
      &lt;/div&gt;
    &lt;/el-image&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fallo-de-carga"><a class="header-anchor" href="#fallo-de-carga">¶</a> Fallo de carga</h3>
<demo-block>
        <div><p>Personalice el contenido cuando ocurra algún error al cargar la imagen vía <code>slot = error</code></p>
</div>
        <!--element-demo: <div class="demo-image__error">
  <div class="block">
    <span class="demonstration">Default</span>
    <el-image></el-image>
  </div>
  <div class="block">
    <span class="demonstration">Custom</span>
    <el-image>
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
  </div>
</div>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__error&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-image&gt;&lt;/el-image&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Custom&lt;/span&gt;
    &lt;el-image&gt;
      &lt;div slot=&quot;error&quot; class=&quot;image-slot&quot;&gt;
        &lt;i class=&quot;el-icon-picture-outline&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
    &lt;/el-image&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="lazy-load"><a class="header-anchor" href="#lazy-load">¶</a> Lazy Load</h3>
<demo-block>
        <div><p>Use lazy load vía <code>lazy = true</code>. La imagen se cargará hasta que se desplace a la vista cuando esté configurada. Puede indicar el contenedor de scroll que añade el oyente de scroll vía <code>scroll-container</code>. Si no está definido, será el contenedor padre más cercano cuya propiedad overflow es auto o scroll.</p>
</div>
        <!--element-demo: <div class="demo-image__lazy">
  <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
</div>

<script>
  export default {
    data() {
      return {
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__lazy&quot;&gt;
  &lt;el-image v-for=&quot;url in urls&quot; :key=&quot;url&quot; :src=&quot;url&quot; lazy&gt;&lt;/el-image&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="vista-previa-de-la-imagen"><a class="header-anchor" href="#vista-previa-de-la-imagen">¶</a> Vista previa de la imagen</h3>
<demo-block>
        <div><p>permitir una vista previa grande de la imagen configurando la prop <code>previewSrcList</code>.</p>
</div>
        <!--element-demo: <div class="demo-image__preview">
  <el-image 
    style="width: 100px; height: 100px"
    :src="url" 
    :preview-src-list="srcList">
  </el-image>
</div>

<script>
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__preview&quot;&gt;
  &lt;el-image 
    style=&quot;width: 100px; height: 100px&quot;
    :src=&quot;url&quot; 
    :preview-src-list=&quot;srcList&quot;&gt;
  &lt;/el-image&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
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
<td>src</td>
<td>origen de la imagen, igual que en nativo</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>fit</td>
<td>Indica como la imagen debe adaptarse al contenedor, lo mismo que <a href="https://developer.mozilla.org/es/docs/Web/CSS/object-fit">object-fit</a></td>
<td>string</td>
<td>fill / contain / cover / none / scale-down</td>
<td>-</td>
</tr>
<tr>
<td>alt</td>
<td>alt nativo</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>referrer-policy</td>
<td>referrerPolicy nativo</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>lazy</td>
<td>si se usara lazy load</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>scroll-container</td>
<td>El contenedor para añadir el scroll listener cuando se utiliza lazy load</td>
<td>string / HTMLElement</td>
<td>—</td>
<td>El contenedor padre más cercano cuya propiedad de desbordamiento es auto o scroll</td>
</tr>
<tr>
<td>preview-src-list</td>
<td>permitir una vista previa grande de la imagen</td>
<td>Array</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>z-index</td>
<td>establecer el z-index de la vista previa de la imagen</td>
<td>Number</td>
<td>—</td>
<td>2000</td>
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
<td>load</td>
<td>Igual que el load nativo</td>
<td>(e: Event)</td>
</tr>
<tr>
<td>error</td>
<td>Igual que el error nativo</td>
<td>(e: Error)</td>
</tr>
</tbody>
</table>
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>Nombre del slot</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>placeholder</td>
<td>Se activa cuando la imagen se carga</td>
</tr>
<tr>
<td>error</td>
<td>Se activa cuando la carga de la imagen falla</td>
</tr>
</tbody>
</table>
