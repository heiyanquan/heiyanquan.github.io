<h2 id="loading"><a class="header-anchor" href="#loading">¶</a> Loading</h2>
<p>Affiche une animation durant le chargement de données.</p>
<h3 id="loading-dans-un-conteneur"><a class="header-anchor" href="#loading-dans-un-conteneur">¶</a> Loading dans un conteneur</h3>
<p>Affiche une animation dans un conteneur (Comme un tableau par exemple) pendant le chargement des données.</p>
<demo-block>
        <div><p>Element fournit deux moyens d'invoquer Loading: la directive et le service. Pour la directive <code>v-loading</code>, attachez simplement un <code>boolean</code>. Par défaut le masque sera ajouté à l'élément contenant la directive. Ajoutez le modificateur <code>body</code> pour ajouter le masque à l'élément body.</p>
</div>
        <!--element-demo: <template>
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Nom"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Adresse">
    </el-table-column>
  </el-table>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    v-loading=&quot;loading&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;style&gt;
  body {
    margin: 0;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="personnalisation"><a class="header-anchor" href="#personnalisation">¶</a> Personnalisation</h3>
<p>Vous pouvez personnaliser le texte, le spinner et la couleur de fond.</p>
<demo-block>
        <div><p>Ajoutez l'attribut <code>element-loading-text</code> à l'élement sur lequel <code>v-loading</code> est attaché et sa valeur sera affichée sous le spinner. De la même façon, <code>element-loading-spinner</code> et <code>element-loading-background</code> permettent de personnaliser le spinner et la couleur de fond.</p>
</div>
        <!--element-demo: <template>
  <el-table
    v-loading="loading"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Nom"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Adresse">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    v-loading=&quot;loading&quot;
    element-loading-text=&quot;Loading...&quot;
    element-loading-spinner=&quot;el-icon-loading&quot;
    element-loading-background=&quot;rgba(0, 0, 0, 0.8)&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="chargement-plein-ecran"><a class="header-anchor" href="#chargement-plein-ecran">¶</a> Chargement plein écran</h3>
<p>Affichez une animation en plein écran quand vous charger des données.</p>
<demo-block>
        <div><p>Quand il est utilisé comme une directive, un Loading plein écran nécessite le modificateur <code>fullscreen</code> qui sera ajouté au body. Dans ce cas, si vous souhaitez désactiver le défilement du body, vous pouvez ajouter le modificateur <code>lock</code>. Quand il est utilisé comme service, Loading est en plein écran par défaut.</p>
</div>
        <!--element-demo: <template>
  <el-button
    type="primary"
    @click="openFullScreen1"
    v-loading.fullscreen.lock="fullscreenLoading">
    Comme directive
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen2">
    Comme service
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    type=&quot;primary&quot;
    @click=&quot;openFullScreen1&quot;
    v-loading.fullscreen.lock=&quot;fullscreenLoading&quot;&gt;
    Comme directive
  &lt;/el-button&gt;
  &lt;el-button
    type=&quot;primary&quot;
    @click=&quot;openFullScreen2&quot;&gt;
    Comme service
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() =&gt; {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() =&gt; {
          loading.close();
        }, 2000);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="service"><a class="header-anchor" href="#service">¶</a> Service</h3>
<p>Vous pouvez invoquer Loading comme un service. Importez le service Loading:</p>
<pre><code class="language-javascript">import { Loading } from 'element-ui';
</code></pre>
<p>Et invoquer-le:</p>
<pre><code class="language-javascript">Loading.service(options);
</code></pre>
<p>Le paramètre <code>options</code> correspond à la configuration de Loading (voir table suivante). <code>LoadingService</code> retourne une instance de Loading, que vous pouvez fermer en appelant la méthode <code>close</code>:</p>
<pre><code class="language-javascript">let loadingInstance = Loading.service(options);
this.$nextTick(() =&gt; { // Loading should be closed asynchronously
  loadingInstance.close();
});
</code></pre>
<p>Notez que dans ce cas le Loading plein écran est un singleton. Si un nouveau Loading plein écran est invoqué avant la fermeture du précédent, celui-ci sera retourné au lieu d'en créer un nouveau:</p>
<pre><code class="language-javascript">let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
</code></pre>
<p>Appeler la méthode <code>close</code> sur n'importe lequel des deux fermera le Loading.</p>
<p>Si Element est importé en entier, une méthode globale <code>$loading</code> sera ajoutée à Vue.prototype. Vous pourrez l'invoquer comme ceci: <code>this.$loading(options)</code> et elle retournera une instance Loading.</p>
<h3 id="options"><a class="header-anchor" href="#options">¶</a> Options</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>target</td>
<td>L'élément du DOM a couvrir. Accepte un objet DOM ou un string. Si c'est un string, il sera passé à <code>document.querySelector</code> Pour avoir l'élément du DOM correspondant.</td>
<td>object/string</td>
<td>—</td>
<td>document.body</td>
</tr>
<tr>
<td>body</td>
<td>Identique au modificateur <code>body</code> de <code>v-loading</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>fullscreen</td>
<td>Identique au modificateur <code>fullscreen</code> de <code>v-loading</code>.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>lock</td>
<td>Identique au modificateur <code>lock</code> de <code>v-loading</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text</td>
<td>Texte a afficher sous le spinner.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>spinner</td>
<td>Classe du spinner.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>background</td>
<td>Couleur de fond du masque.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>Classe du Loading.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
