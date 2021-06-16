<h2 id="transiciones-incorporadas"><a class="header-anchor" href="#transiciones-incorporadas">¶</a> Transiciones incorporadas</h2>
<p>Puede usar directamente las transiciones incorporadas en Element. Antes de hacerlo, por favor lea la <a href="https://vuejs.org/v2/api/#transition">documentación</a>.</p>
<h3 id="fade"><a class="header-anchor" href="#fade">¶</a> Fade</h3>
<demo-block>
        <div><p>Tenemos dos efectos de fading: <code>el-fade-in-linear</code> y <code>el-fade-in</code>.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-button @click=&quot;show = !show&quot;&gt;Click Me&lt;/el-button&gt;

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
        <div><p>También tenemos zoom: <code>el-zoom-in-center</code>, <code>el-zoom-in-top</code> y <code>el-zoom-in-bottom</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-button @click=&quot;show2 = !show2&quot;&gt;Click Me&lt;/el-button&gt;

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
</code></pre></template></demo-block><h3 id="colapsado"><a class="header-anchor" href="#colapsado">¶</a> Colapsado</h3>
<p>Para efectos de colapsado usar el componente <code>el-collapse-transition</code>.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-button @click=&quot;show3 = !show3&quot;&gt;Click Me&lt;/el-button&gt;

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
</code></pre></template></demo-block><h3 id="bajo-demanda"><a class="header-anchor" href="#bajo-demanda">¶</a> Bajo demanda</h3>
<pre><code class="language-js">// fade/zoom
import 'element-ui/lib/theme-chalk/base.css';
// colapsar
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
</code></pre>
