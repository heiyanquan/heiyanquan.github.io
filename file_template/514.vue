<h2 id="card"><a class="header-anchor" href="#card">¶</a> Card</h2>
<p>Conteneur intégrant des informations.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Le composant Card comprend un titre, un contenu et des opérations.</p>
<demo-block>
        <div><p>Card est composé d'un <code>header</code> et d'un <code>body</code>. <code>header</code> est optionnel et son contenu nécessite l'utilisation d'un slot.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-card class=&quot;box-card&quot;&gt;
  &lt;div slot=&quot;header&quot; class=&quot;clearfix&quot;&gt;
    &lt;span&gt;Card name&lt;/span&gt;
    &lt;el-button style=&quot;float: right; padding: 3px 0&quot; type=&quot;text&quot;&gt;Bouton&lt;/el-button&gt;
  &lt;/div&gt;
  &lt;div v-for=&quot;o in 4&quot; :key=&quot;o&quot; class=&quot;text item&quot;&gt;
    {{'List item ' + o }}
  &lt;/div&gt;
&lt;/el-card&gt;

&lt;style&gt;
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: &quot;&quot;;
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="card-simple"><a class="header-anchor" href="#card-simple">¶</a> Card simple</h3>
<p>Le header peut être omis.</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-card class=&quot;box-card&quot;&gt;
  &lt;div v-for=&quot;o in 4&quot; :key=&quot;o&quot; class=&quot;text item&quot;&gt;
    {{'List item ' + o }}
  &lt;/div&gt;
&lt;/el-card&gt;

&lt;style&gt;
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="images"><a class="header-anchor" href="#images">¶</a> Images</h3>
<p>Affichez un contenu plus riche grâce à la configuration.</p>
<demo-block>
        <div><p>L'attribut <code>body-style</code> définit le style CSS du <code>body</code>. Cet exemple utilise aussi <code>el-col</code> pour la mise en page.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-col :span=&quot;8&quot; v-for=&quot;(o, index) in 2&quot; :key=&quot;o&quot; :offset=&quot;index &gt; 0 ? 2 : 0&quot;&gt;
    &lt;el-card :body-style=&quot;{ padding: '0px' }&quot;&gt;
      &lt;img src=&quot;https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png&quot; class=&quot;image&quot;&gt;
      &lt;div style=&quot;padding: 14px;&quot;&gt;
        &lt;span&gt;Yummy hamburger&lt;/span&gt;
        &lt;div class=&quot;bottom clearfix&quot;&gt;
          &lt;time class=&quot;time&quot;&gt;{{ currentDate }}&lt;/time&gt;
          &lt;el-button type=&quot;text&quot; class=&quot;button&quot;&gt;Operating&lt;/el-button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-card&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: &quot;&quot;;
  }

  .clearfix:after {
      clear: both
  }
&lt;/style&gt;

&lt;script&gt;
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ombres"><a class="header-anchor" href="#ombres">¶</a> Ombres</h3>
<p>Vous pouvez définir quand l'ombre des Cards doivent apparaître.</p>
<demo-block>
        <div><p>L'attribut <code>shadow</code> détermine quand l'ombre doit apparaître. Les valeurs possibles sont <code>always</code>, <code>hover</code> ou <code>never</code>.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;12&quot;&gt;
  &lt;el-col :span=&quot;8&quot;&gt;
    &lt;el-card shadow=&quot;always&quot;&gt;
      Always
    &lt;/el-card&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;
    &lt;el-card shadow=&quot;hover&quot;&gt;
      Hover
    &lt;/el-card&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;
    &lt;el-card shadow=&quot;never&quot;&gt;
      Never
    &lt;/el-card&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;
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
<td>header</td>
<td>Titre de la Card. Accepte aussi un template DOM passé via <code>slot#header</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>body-style</td>
<td>Style CSS du body.</td>
<td>object</td>
<td>—</td>
<td>{ padding: '20px' }</td>
</tr>
<tr>
<td>shadow</td>
<td>Quand l'ombre doit apparaître</td>
<td>string</td>
<td>always / hover / never</td>
<td>always</td>
</tr>
</tbody>
</table>
