<h2 id="avatar-avatar"><a class="header-anchor" href="#avatar-avatar">¶</a> Avatar avatar</h2>
<p>Avatars can be used to represent people or objects. It supports images, Icons, or characters.
Les avatars peuvent être utilisés pour représenter des personnes ou des objets. Les images, icônes et les caractères sont supportés.</p>
<h3 id="basic"><a class="header-anchor" href="#basic">¶</a> Basic</h3>
<p>utilisez les prop <code>shape</code> et<code>size</code> pour définir la forme et la taille de l'avatar</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">cercle</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-col>  
    <el-col :span="12">
      <div class="sub-title">carré</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
</script>

:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-row class=&quot;demo-avatar demo-basic&quot;&gt;
    &lt;el-col :span=&quot;12&quot;&gt;
      &lt;div class=&quot;sub-title&quot;&gt;cercle&lt;/div&gt;
      &lt;div class=&quot;demo-basic--circle&quot;&gt;
        &lt;div class=&quot;block&quot;&gt;&lt;el-avatar :size=&quot;50&quot; :src=&quot;circleUrl&quot;&gt;&lt;/el-avatar&gt;&lt;/div&gt;
        &lt;div class=&quot;block&quot; v-for=&quot;size in sizeList&quot; :key=&quot;size&quot;&gt;
          &lt;el-avatar :size=&quot;size&quot; :src=&quot;circleUrl&quot;&gt;&lt;/el-avatar&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-col&gt;  
    &lt;el-col :span=&quot;12&quot;&gt;
      &lt;div class=&quot;sub-title&quot;&gt;carré&lt;/div&gt;
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

</code></pre></template></demo-block><h3 id="types"><a class="header-anchor" href="#types">¶</a> Types</h3>
<p>Les images, icônes et les caractères sont supportés.</p>
<demo-block>
        
        <!--element-demo: <template>
  <div class="demo-type">
    <div>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    <div>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div>
      <el-avatar> user </el-avatar>
    </div>
  </div>
</template>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="fallback-en-cas-d-erreur-de-chargement-d-image"><a class="header-anchor" href="#fallback-en-cas-d-erreur-de-chargement-d-image">¶</a> fallback en cas d'erreur de chargement d'image</h3>
<p>fallback en cas d'erreur de chargement d'image</p>
<demo-block>
        
        <!--element-demo: <template>
  <div class="demo-type">
    <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </el-avatar>
  </div>
</template>
<script>
  export default {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
</script>

:element-demo-->
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

</code></pre></template></demo-block><h3 id="comment-l-image-s-adapte-a-son-conteneur"><a class="header-anchor" href="#comment-l-image-s-adapte-a-son-conteneur">¶</a> Comment l'image s'adapte à son conteneur</h3>
<p>Défini comment l'image s'adapte à son conteneur, pareil que <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>.</p>
<demo-block>
        
        <!--element-demo: <template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
        <span class="title">{{ fit }}</span>
        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
    </div>
  </div>
</template>
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

</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon</td>
<td>Défini le type de représentation sur Icon, plus d’informations sur le composant Icon</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>Défini la taille de l'avatar</td>
<td>number/string</td>
<td>number / large / medium / small</td>
<td>large</td>
</tr>
<tr>
<td>shape</td>
<td>Défini la forme de l'avatar</td>
<td>string</td>
<td>circle / square</td>
<td>circle</td>
</tr>
<tr>
<td>src</td>
<td>L'adresse de l'image pour un avatar image</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>srcSet</td>
<td>Une liste d'un ou plusieurs string séparés par des virgules indiquant un ensemble de sources d'images possibles que le user agent peut utiliser</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>alt</td>
<td>Cet attribut définit une description textuelle alternative de l'image</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fit</td>
<td>Défini comment l'image s'adapte à son conteneur</td>
<td>string</td>
<td>fill / contain / cover / none / scale-down</td>
<td>cover</td>
</tr>
</tbody>
</table>
<h3 id="evenements"><a class="header-anchor" href="#evenements">¶</a> Évènements</h3>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>error</td>
<td>handler en cas d'erreur de chargement de l'image, renvoie false pour éviter le fallback par défaut</td>
<td>(e: Event)</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<p>| Slot Name | Description |
| default  | personnalise le contenu de l'avatar |</p>
