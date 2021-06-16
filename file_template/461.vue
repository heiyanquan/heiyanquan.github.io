<h2 id="infinitescroll"><a class="header-anchor" href="#infinitescroll">¶</a> InfiniteScroll</h2>
<p>Charge plus de données quand le bas de la page est atteint</p>
<h3 id="utilisation-de-base"><a class="header-anchor" href="#utilisation-de-base">¶</a> Utilisation de base</h3>
<p>Ajoutez <code>v-infinite-scroll</code> à la liste pour exécuter automatiquement la méthode de chargement lors du défilement vers le bas.</p>
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
</code></pre></template></demo-block><h3 id="desactiver-le-chargement"><a class="header-anchor" href="#desactiver-le-chargement">¶</a> Désactiver le chargement</h3>
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
    &lt;p v-if=&quot;noMore&quot;&gt;Pas plus&lt;/p&gt;
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
</code></pre></template></demo-block><h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeur acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>infinite-scroll-disabled</td>
<td>Est désactivé</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>infinite-scroll-delay</td>
<td>Throttle le delais (ms)</td>
<td>number</td>
<td>-</td>
<td>200</td>
</tr>
<tr>
<td>infinite-scroll-distance</td>
<td>Distance de déclenchement (px)</td>
<td>number</td>
<td>-</td>
<td>0</td>
</tr>
<tr>
<td>infinite-scroll-immediate</td>
<td>S'il faut exécuter la méthode de chargement immédiatement, au cas où le contenu ne pourrait pas être set à l'état initial.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
