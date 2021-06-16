<h2 id="layout"><a class="header-anchor" href="#layout">¶</a> Layout</h2>
<p>Vous pouvez créer une mise en page facilement et rapidement grâce à une base de 24 colonnes.</p>
<h3 id="mise-en-page-basique"><a class="header-anchor" href="#mise-en-page-basique">¶</a> Mise en page basique</h3>
<p>Créez une grille de mise en page basique grâce aux colonnes.</p>
<demo-block>
        <div><p>Grâce à <code>row</code> et <code>col</code>, vous pouvez arranger la mise en page en utilisant l'attribut <code>span</code>.</p>
</div>
        <!--element-demo: <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-col :span=&quot;24&quot;&gt;&lt;div class=&quot;grid-content bg-purple-dark&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;12&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="espacement"><a class="header-anchor" href="#espacement">¶</a> Espacement</h3>
<p>L'espacement entre colonnes est configurable.</p>
<demo-block>
        <div><p>Utilisez l'attribut <code>gutter</code> dans el-row pour spécifier l'espacement entre colonnes. La valeur par défaut est 0.</p>
</div>
        <!--element-demo: <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="mise-en-page-complexe"><a class="header-anchor" href="#mise-en-page-complexe">¶</a> Mise en page complexe</h3>
<p>Vous pouvez former une mise en page complexe en combinant les systèmes de colonnes 1 / 24 comme vous le souhaitez.</p>
<demo-block>
        
        <!--element-demo: <el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;16&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;16&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="decalage-des-colonnes"><a class="header-anchor" href="#decalage-des-colonnes">¶</a> Décalage des colonnes</h3>
<p>Vous pouvez spécifier un décalage pour les colonnes.</p>
<demo-block>
        <div><p>Utiliser l'attribut <code>offset</code> pour régler le décalage.</p>
</div>
        <!--element-demo: <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;12&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="alignement"><a class="header-anchor" href="#alignement">¶</a> Alignement</h3>
<p>Utilisez la mise en page flex pour rendre l'alignement des colonnes flexible.</p>
<demo-block>
        <div><p>Vous pouvez activer la mise en page flex en réglant l'attribut <code>type</code> à 'flex', puis en configurant la disposition des éléments enfants avec l'attribut <code>justify</code> définit à 'start', 'center', 'end', 'space-between' ou 'space-around'.</p>
</div>
        <!--element-demo: <el-row type="flex" class="row-bg">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="end">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;center&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;end&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;space-between&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;space-around&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="mise-en-page-responsive"><a class="header-anchor" href="#mise-en-page-responsive">¶</a> Mise en page responsive</h3>
<p>Se basant sur le design responsive de Bootstrap, il existe cinq breakpoints déjà définit: xs, sm, md, lg and xl.</p>
<demo-block>
        
        <!--element-demo: <el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;10&quot;&gt;
  &lt;el-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;8&quot; :lg=&quot;9&quot; :xl=&quot;11&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;8&quot; :lg=&quot;9&quot; :xl=&quot;11&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="classes-pour-cacher-certains-elements"><a class="header-anchor" href="#classes-pour-cacher-certains-elements">¶</a> Classes pour cacher certains éléments</h3>
<p>Element fournit également une série de classes pour cacher des éléments dans certaines circonstances. Ces classes peuvent être ajoutées à n'importe quel élément du DOM ou composant. Vous devrez importer le fichier CSS suivant pour pouvoir les utiliser:</p>
<pre><code class="language-js">import 'element-ui/lib/theme-chalk/display.css';
</code></pre>
<p>Ces classes sont:</p>
<ul>
<li><code>hidden-xs-only</code> - disparaît sur les très petits viewports uniquement</li>
<li><code>hidden-sm-only</code> - disparaît sur les petits viewports uniquement</li>
<li><code>hidden-sm-and-down</code> - disparaît sur les petits viewports et plus petits</li>
<li><code>hidden-sm-and-up</code> - disparaît sur les petits viewports et plus grand</li>
<li><code>hidden-md-only</code> - disparaît sur les viewports moyens uniquement</li>
<li><code>hidden-md-and-down</code> - disparaît sur les viewports moyens et plus petits</li>
<li><code>hidden-md-and-up</code> - disparaît sur les viewports moyens et plus grand</li>
<li><code>hidden-lg-only</code> - disparaît sur les viewports larges uniquement</li>
<li><code>hidden-lg-and-down</code> - disparaît sur les viewports larges et plus petits</li>
<li><code>hidden-lg-and-up</code> - disparaît sur les viewports larges et plus grand</li>
<li><code>hidden-xl-only</code> - disparaît sur les viewports très larges uniquement</li>
</ul>
<h3 id="attributs-des-lignes"><a class="header-anchor" href="#attributs-des-lignes">¶</a> Attributs des lignes</h3>
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
<td>gutter</td>
<td>Espacement de la grille.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>Mode de mise en page. Vous pouvez utiliser flex, qui fonctionne sur les navigateurs modernes.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>justify</td>
<td>Alignement horizontal pour le mise en page flex.</td>
<td>string</td>
<td>start/end/center/space-around/space-between</td>
<td>start</td>
</tr>
<tr>
<td>align</td>
<td>Alignement vertical pour la mise en page flex.</td>
<td>string</td>
<td>top/middle/bottom</td>
<td>top</td>
</tr>
<tr>
<td>tag</td>
<td>Élément de tag personnalisé.</td>
<td>string</td>
<td>*</td>
<td>div</td>
</tr>
</tbody>
</table>
<h3 id="attributs-des-colonnes"><a class="header-anchor" href="#attributs-des-colonnes">¶</a> Attributs des colonnes</h3>
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
<td>span</td>
<td>Nombre de colonnes sur lesquelles l'élément s'étend.</td>
<td>number</td>
<td>—</td>
<td>24</td>
</tr>
<tr>
<td>offset</td>
<td>Nombre d'espacements sur la gauche de l'élément.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>push</td>
<td>Nombre de colonnes dont l'élément se déplace vers la droite.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>pull</td>
<td>Nombre de colonnes dont l'élément se déplace vers la gauche.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>xs</td>
<td><code>&lt;768px</code> Nombre de colonnes responsives ou bien objet de propriétés de colonne.</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sm</td>
<td><code>≥768px</code> Nombre de colonnes responsives ou bien objet de propriétés de colonne.</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>md</td>
<td><code>≥992px</code> Nombre de colonnes responsives ou bien objet de propriétés de colonne.</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>lg</td>
<td><code>≥1200px</code> Nombre de colonnes responsives ou bien objet de propriétés de colonne.</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>xl</td>
<td><code>≥1920px</code> Nombre de colonnes responsives ou bien objet de propriétés de colonne.</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tag</td>
<td>Élément de tag personnalisé.</td>
<td>string</td>
<td>*</td>
<td>div</td>
</tr>
</tbody>
</table>
