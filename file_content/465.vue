<h2 id="image"><a class="header-anchor" href="#image">¶</a> Image</h2>
<p>En plus des propriétés natives de img, ce composant supporte le lazy loading, les placeholder personnalisés, les échecs de téléchargement, etc.</p>
<h3 id="usage-basique"><a class="header-anchor" href="#usage-basique">¶</a> Usage basique</h3>
<demo-block>
        <div><p>Indique comment l'image devrait être redimmensionnée pour s'adapter à son conteneur grâce à <code>fit</code>, identique au <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a> natif.</p>
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
        <div><p>Placeholder personnalisé qui s'affiche lorsque l'image n'est pas encore chargée, grâce à <code>slot = placeholder</code>.</p>
</div>
        <!--element-demo: <div class="demo-image__placeholder">
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-image :src="src"></el-image>
  </div>
  <div class="block">
    <span class="demonstration">Personnalisé</span>
    <el-image :src="src">
      <div slot="placeholder" class="image-slot">
        Chargement<span class="dot">...</span>
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
    &lt;span class=&quot;demonstration&quot;&gt;Défaut&lt;/span&gt;
    &lt;el-image :src=&quot;src&quot;&gt;&lt;/el-image&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Personnalisé&lt;/span&gt;
    &lt;el-image :src=&quot;src&quot;&gt;
      &lt;div slot=&quot;placeholder&quot; class=&quot;image-slot&quot;&gt;
        Chargement&lt;span class=&quot;dot&quot;&gt;...&lt;/span&gt;
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
</code></pre></template></demo-block><h3 id="echec-du-chargement"><a class="header-anchor" href="#echec-du-chargement">¶</a> Échec du chargement</h3>
<demo-block>
        <div><p>Contenu personnalisé qui s'affiche lorsque le chargement a échoué, grâce à <code>slot = error</code>.</p>
</div>
        <!--element-demo: <div class="demo-image__error">
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-image></el-image>
  </div>
  <div class="block">
    <span class="demonstration">Personnalisé</span>
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
    &lt;span class=&quot;demonstration&quot;&gt;Défaut&lt;/span&gt;
    &lt;el-image&gt;&lt;/el-image&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Personnalisé&lt;/span&gt;
    &lt;el-image&gt;
      &lt;div slot=&quot;error&quot; class=&quot;image-slot&quot;&gt;
        &lt;i class=&quot;el-icon-picture-outline&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
    &lt;/el-image&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="lazy-loading"><a class="header-anchor" href="#lazy-loading">¶</a> Lazy Loading</h3>
<demo-block>
        <div><p>Utilisez le lazy loading avec <code>lazy = true</code>. Les images ne se chargeront que lorsque le scrolling les atteindra. Vous pouvez indiquer le conteneur grâce à <code>scroll-container</code>. Si undefined, ce sera le conteneur parent le plus proche avec la propriété overflow à auto ou scroll.</p>
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
</code></pre></template></demo-block><h3 id="image-preview"><a class="header-anchor" href="#image-preview">¶</a> Image Preview</h3>
<demo-block>
        <div><p>allow big image preview by setting <code>previewSrcList</code> prop.</p>
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
</code></pre></template></demo-block><h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3>
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
<td>src</td>
<td>Source de l'image, identique au natif.</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>fit</td>
<td>Indique comment l'image devrait être redimmensionnée pour s'adapter à son conteneur, identique à <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a></td>
<td>string</td>
<td>fill / contain / cover / none / scale-down</td>
<td>-</td>
</tr>
<tr>
<td>alt</td>
<td>Attribut alt natif.</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>referrer-policy</td>
<td>Attribut referrerPolicy natif.</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>lazy</td>
<td>Si le lazy loading doit être utilisé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>scroll-container</td>
<td>Le conteneur auquel ajouter le listener du scroll en mode lazy loading.</td>
<td>string / HTMLElement</td>
<td>—</td>
<td>Le conteneur parent le plus proche avec la propriété overflow à auto ou scroll.</td>
</tr>
<tr>
<td>preview-src-list</td>
<td>allow big image preview</td>
<td>Array</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>z-index</td>
<td>set image preview z-index</td>
<td>Number</td>
<td>—</td>
<td>2000</td>
</tr>
</tbody>
</table>
<h3 id="evenements"><a class="header-anchor" href="#evenements">¶</a> Évènements</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>load</td>
<td>Identique au load natif.</td>
<td>(e: Event)</td>
</tr>
<tr>
<td>error</td>
<td>Identique au error natif.</td>
<td>(e: Error)</td>
</tr>
</tbody>
</table>
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>placeholder</td>
<td>Se déclenche quand l'image charge.</td>
</tr>
<tr>
<td>error</td>
<td>Se déclenche quand le chargement de l'image a échoué.</td>
</tr>
</tbody>
</table>
