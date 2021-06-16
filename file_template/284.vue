<h2 id="infinitescroll"><a class="header-anchor" href="#infinitescroll">¶</a> InfiniteScroll</h2>
<p>Cargar más datos mientras se llega al final de la página</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Añada <code>v-infinite-scroll</code> a la lista para ejecutar automáticamente el método de carga cuando se desplace hacia abajo.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;ul class=&quot;infinite-list&quot; v-infinite-scroll=&quot;load&quot; style=&quot;overflow:auto&quot;&gt;
    &lt;li v-for=&quot;i in count&quot; class=&quot;infinite-list-item&quot;&gt;{{ i }}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="deshabilite-loading"><a class="header-anchor" href="#deshabilite-loading">¶</a> Deshabilite Loading</h3>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;infinite-list-wrapper&quot; style=&quot;overflow:auto&quot;&gt;
    &lt;ul
      class=&quot;list&quot;
      v-infinite-scroll=&quot;load&quot;
      infinite-scroll-disabled=&quot;disabled&quot;&gt;
      &lt;li v-for=&quot;i in count&quot; class=&quot;list-item&quot;&gt;{{ i }}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;p v-if=&quot;loading&quot;&gt;Loading...&lt;/p&gt;
    &lt;p v-if=&quot;noMore&quot;&gt;No more&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count &gt;= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() =&gt; {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>infinite-scroll-disabled</td>
<td>si esta disabled</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>infinite-scroll-delay</td>
<td>retraso en mili segundos</td>
<td>number</td>
<td>-</td>
<td>200</td>
</tr>
<tr>
<td>infinite-scroll-distance</td>
<td>distancia de activación (px)</td>
<td>number</td>
<td>-</td>
<td>0</td>
</tr>
<tr>
<td>infinite-scroll-immediate</td>
<td>Si se debe ejecutar el método de carga inmediatamente, en caso de que el contenido no se pueda rellenar en el estado inicial.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
