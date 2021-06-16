<h2 id="avatar-tou-xiang"><a class="header-anchor" href="#avatar-tou-xiang">¶</a> Avatar 头像</h2>
<p>用图标、图片或者字符的形式展示用户或事物信息。</p>
<h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa">¶</a> 基本用法</h3>
<p>通过 <code>shape</code> 和 <code>size</code> 设置头像的形状和大小。</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-col>  
    <el-col :span="12">
      <div class="sub-title">square</div>
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
      &lt;div class=&quot;sub-title&quot;&gt;circle&lt;/div&gt;
      &lt;div class=&quot;demo-basic--circle&quot;&gt;
        &lt;div class=&quot;block&quot;&gt;&lt;el-avatar :size=&quot;50&quot; :src=&quot;circleUrl&quot;&gt;&lt;/el-avatar&gt;&lt;/div&gt;
        &lt;div class=&quot;block&quot; v-for=&quot;size in sizeList&quot; :key=&quot;size&quot;&gt;
          &lt;el-avatar :size=&quot;size&quot; :src=&quot;circleUrl&quot;&gt;&lt;/el-avatar&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-col&gt;  
    &lt;el-col :span=&quot;12&quot;&gt;
      &lt;div class=&quot;sub-title&quot;&gt;square&lt;/div&gt;
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

</code></pre></template></demo-block><h3 id="zhan-shi-lei-xing"><a class="header-anchor" href="#zhan-shi-lei-xing">¶</a> 展示类型</h3>
<p>支持三种类型：图标、图片和字符</p>
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
</code></pre></template></demo-block><h3 id="tu-pian-jia-zai-shi-bai-de-fallback-xing-wei"><a class="header-anchor" href="#tu-pian-jia-zai-shi-bai-de-fallback-xing-wei">¶</a> 图片加载失败的 fallback 行为</h3>
<p>当展示类型为图片的时候，图片加载失败的 fallback 行为</p>
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

</code></pre></template></demo-block><h3 id="tu-pian-ru-he-gua-ying-rong-qi-kuang"><a class="header-anchor" href="#tu-pian-ru-he-gua-ying-rong-qi-kuang">¶</a> 图片如何适应容器框</h3>
<p>当展示类型为图片的时候，使用 <code>fit</code> 属性定义图片如何适应容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>。</p>
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
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon</td>
<td>设置头像的图标类型，参考 Icon 组件</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>设置头像的大小</td>
<td>number/string</td>
<td>number / large / medium / small</td>
<td>large</td>
</tr>
<tr>
<td>shape</td>
<td>设置头像的形状</td>
<td>string</td>
<td>circle / square</td>
<td>circle</td>
</tr>
<tr>
<td>src</td>
<td>图片头像的资源地址</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>srcSet</td>
<td>以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>alt</td>
<td>描述图像的替换文本</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fit</td>
<td>当展示类型为图片的时候，设置图片如何适应容器框</td>
<td>string</td>
<td>fill / contain / cover / none / scale-down</td>
<td>cover</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>error</td>
<td>图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为</td>
<td>(e: Event)</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>自定义头像展示内容</td>
</tr>
</tbody>
</table>
