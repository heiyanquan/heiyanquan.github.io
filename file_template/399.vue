<h2 id="transitions"><a class="header-anchor" href="#transitions">¶</a> Transitions</h2>
<p>Vous pouvez utiliser les transitions d'Element directement. Mais avant ça, merci de lire la <a href="https://vuejs.org/v2/api/#transition">documentation</a>.</p>
<h3 id="fade"><a class="header-anchor" href="#fade">¶</a> Fade</h3>
<demo-block>
        <div><p>Il y a deux effets de fading: <code>el-fade-in-linear</code> et <code>el-fade-in</code>.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-button @click=&quot;show = !show&quot;&gt;Cliquez ici&lt;/el-button&gt;

    &lt;div style=&quot;display: flex; margin-top: 20px; height: 100px;&quot;&gt;
      &lt;transition name=&quot;el-fade-in-linear&quot;&gt;
        &lt;div v-show=&quot;show&quot; class=&quot;transition-box&quot;&gt;.el-fade-in-linear&lt;/div&gt;
      &lt;/transition&gt;
      &lt;transition name=&quot;el-fade-in&quot;&gt;
        &lt;div v-show=&quot;show&quot; class=&quot;transition-box&quot;&gt;.el-fade-in&lt;/div&gt;
      &lt;/transition&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
    data: () =&gt; ({
      show: true
    })
  }
&lt;/script&gt;

&lt;style&gt;
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zoom"><a class="header-anchor" href="#zoom">¶</a> Zoom</h3>
<demo-block>
        <div><p><code>el-zoom-in-center</code>, <code>el-zoom-in-top</code> et <code>el-zoom-in-bottom</code> sont fournis.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-button @click=&quot;show2 = !show2&quot;&gt;Cliquez ici&lt;/el-button&gt;

    &lt;div style=&quot;display: flex; margin-top: 20px; height: 100px;&quot;&gt;
      &lt;transition name=&quot;el-zoom-in-center&quot;&gt;
        &lt;div v-show=&quot;show2&quot; class=&quot;transition-box&quot;&gt;.el-zoom-in-center&lt;/div&gt;
      &lt;/transition&gt;

      &lt;transition name=&quot;el-zoom-in-top&quot;&gt;
        &lt;div v-show=&quot;show2&quot; class=&quot;transition-box&quot;&gt;.el-zoom-in-top&lt;/div&gt;
      &lt;/transition&gt;

      &lt;transition name=&quot;el-zoom-in-bottom&quot;&gt;
        &lt;div v-show=&quot;show2&quot; class=&quot;transition-box&quot;&gt;.el-zoom-in-bottom&lt;/div&gt;
      &lt;/transition&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
    data: () =&gt; ({
      show2: true
    })
  }
&lt;/script&gt;

&lt;style&gt;
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="collapse"><a class="header-anchor" href="#collapse">¶</a> Collapse</h3>
<p>Pour l'effet collapse, utilisez le composant <code>el-collapse-transition</code>.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-button @click=&quot;show3 = !show3&quot;&gt;Cliquez ici&lt;/el-button&gt;

    &lt;div style=&quot;margin-top: 20px; height: 200px;&quot;&gt;
      &lt;el-collapse-transition&gt;
        &lt;div v-show=&quot;show3&quot;&gt;
          &lt;div class=&quot;transition-box&quot;&gt;el-collapse-transition&lt;/div&gt;
          &lt;div class=&quot;transition-box&quot;&gt;el-collapse-transition&lt;/div&gt;
        &lt;/div&gt;
      &lt;/el-collapse-transition&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
    data: () =&gt; ({
      show3: true
    })
  }
&lt;/script&gt;

&lt;style&gt;
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="a-la-demande"><a class="header-anchor" href="#a-la-demande">¶</a> À la demande</h3>
<pre><code class="language-js">// fade/zoom
import 'element-ui/lib/theme-chalk/base.css';
// collapse
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
</code></pre>
