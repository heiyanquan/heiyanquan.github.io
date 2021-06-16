<h2 id="nei-zhi-guo-du-dong-hua"><a class="header-anchor" href="#nei-zhi-guo-du-dong-hua">¶</a> 内置过渡动画</h2>
<p>Element 内应用在部分组件的过渡动画，你也可以直接使用。在使用之前请阅读 <a href="https://cn.vuejs.org/v2/api/#transition">transition 组件文档</a> 。</p>
<h3 id="fade-dan-ru-dan-chu"><a class="header-anchor" href="#fade-dan-ru-dan-chu">¶</a> fade 淡入淡出</h3>
<demo-block>
        <div><p>提供 <code>el-fade-in-linear</code> 和 <code>el-fade-in</code> 两种效果。</p>
</div>
        <!--element-demo: <template>
  <div>
    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style>
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
</style>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="zoom-suo-fang"><a class="header-anchor" href="#zoom-suo-fang">¶</a> zoom 缩放</h3>
<demo-block>
        <div><p>提供 <code>el-zoom-in-center</code>，<code>el-zoom-in-top</code> 和 <code>el-zoom-in-bottom</code> 三种效果。</p>
</div>
        <!--element-demo: <template>
  <div>
    <el-button @click="show2 = !show2">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style>
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
</style>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="collapse-zhan-kai-zhe-die"><a class="header-anchor" href="#collapse-zhan-kai-zhe-die">¶</a> collapse 展开折叠</h3>
<p>使用 <code>el-collapse-transition</code> 组件实现折叠展开效果。</p>
<demo-block>
        
        <!--element-demo: <template>
  <div>
    <el-button @click="show3 = !show3">Click Me</el-button>

    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
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
</style>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="an-xu-yin-ru"><a class="header-anchor" href="#an-xu-yin-ru">¶</a> 按需引入</h3>
<pre><code class="language-js">// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
</code></pre>
