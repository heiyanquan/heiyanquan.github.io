<h2 id="layout-bu-ju"><a class="header-anchor" href="#layout-bu-ju">¶</a> Layout 布局</h2>
<p>通过基础的 24 分栏，迅速简便地创建布局。</p>
<h3 id="ji-chu-bu-ju"><a class="header-anchor" href="#ji-chu-bu-ju">¶</a> 基础布局</h3>
<p>使用单一分栏创建基础的栅格布局。</p>
<demo-block>
        <div><p>通过 row 和 col 组件，并通过 col 组件的 <code>span</code> 属性我们就可以自由地组合布局。</p>
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
</code></pre></template></demo-block><h3 id="fen-lan-jian-ge"><a class="header-anchor" href="#fen-lan-jian-ge">¶</a> 分栏间隔</h3>
<p>分栏之间存在间隔。</p>
<demo-block>
        <div><p>Row 组件 提供 <code>gutter</code> 属性来指定每一栏之间的间隔，默认间隔为 0。</p>
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
</code></pre></template></demo-block><h3 id="hun-he-bu-ju"><a class="header-anchor" href="#hun-he-bu-ju">¶</a> 混合布局</h3>
<p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
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
</code></pre></template></demo-block><h3 id="fen-lan-pian-yi"><a class="header-anchor" href="#fen-lan-pian-yi">¶</a> 分栏偏移</h3>
<p>支持偏移指定的栏数。</p>
<demo-block>
        <div><p>通过制定 col 组件的 <code>offset</code> 属性可以指定分栏偏移的栏数。</p>
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
</code></pre></template></demo-block><h3 id="dui-qi-fang-shi"><a class="header-anchor" href="#dui-qi-fang-shi">¶</a> 对齐方式</h3>
<p>通过 <code>flex</code> 布局来对分栏进行灵活的对齐。</p>
<demo-block>
        <div><p>将 <code>type</code> 属性赋值为 'flex'，可以启用 flex 布局，并可通过 <code>justify</code> 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</p>
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
</code></pre></template></demo-block><h3 id="xiang-ying-shi-bu-ju"><a class="header-anchor" href="#xiang-ying-shi-bu-ju">¶</a> 响应式布局</h3>
<p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>。</p>
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
</code></pre></template></demo-block><h3 id="ji-yu-duan-dian-de-yin-cang-lei"><a class="header-anchor" href="#ji-yu-duan-dian-de-yin-cang-lei">¶</a> 基于断点的隐藏类</h3>
<p>Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：</p>
<pre><code class="language-js">import 'element-ui/lib/theme-chalk/display.css';
</code></pre>
<p>包含的类名及其含义为：</p>
<ul>
<li><code>hidden-xs-only</code> - 当视口在 <code>xs</code> 尺寸时隐藏</li>
<li><code>hidden-sm-only</code> - 当视口在 <code>sm</code> 尺寸时隐藏</li>
<li><code>hidden-sm-and-down</code> - 当视口在 <code>sm</code> 及以下尺寸时隐藏</li>
<li><code>hidden-sm-and-up</code> - 当视口在 <code>sm</code> 及以上尺寸时隐藏</li>
<li><code>hidden-md-only</code> - 当视口在 <code>md</code> 尺寸时隐藏</li>
<li><code>hidden-md-and-down</code> - 当视口在 <code>md</code> 及以下尺寸时隐藏</li>
<li><code>hidden-md-and-up</code> - 当视口在 <code>md</code> 及以上尺寸时隐藏</li>
<li><code>hidden-lg-only</code> - 当视口在 <code>lg</code> 尺寸时隐藏</li>
<li><code>hidden-lg-and-down</code> - 当视口在 <code>lg</code> 及以下尺寸时隐藏</li>
<li><code>hidden-lg-and-up</code> - 当视口在 <code>lg</code> 及以上尺寸时隐藏</li>
<li><code>hidden-xl-only</code> - 当视口在 <code>xl</code> 尺寸时隐藏</li>
</ul>
<h3 id="row-attributes"><a class="header-anchor" href="#row-attributes">¶</a> Row Attributes</h3>
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
<td>gutter</td>
<td>栅格间隔</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>布局模式，可选 flex，现代浏览器下有效</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>justify</td>
<td>flex 布局下的水平排列方式</td>
<td>string</td>
<td>start/end/center/space-around/space-between</td>
<td>start</td>
</tr>
<tr>
<td>align</td>
<td>flex 布局下的垂直排列方式</td>
<td>string</td>
<td>top/middle/bottom</td>
<td>top</td>
</tr>
<tr>
<td>tag</td>
<td>自定义元素标签</td>
<td>string</td>
<td>*</td>
<td>div</td>
</tr>
</tbody>
</table>
<h3 id="col-attributes"><a class="header-anchor" href="#col-attributes">¶</a> Col Attributes</h3>
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
<td>span</td>
<td>栅格占据的列数</td>
<td>number</td>
<td>—</td>
<td>24</td>
</tr>
<tr>
<td>offset</td>
<td>栅格左侧的间隔格数</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>push</td>
<td>栅格向右移动格数</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>pull</td>
<td>栅格向左移动格数</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>xs</td>
<td><code>&lt;768px</code> 响应式栅格数或者栅格属性对象</td>
<td>number/object (例如： {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sm</td>
<td><code>≥768px</code> 响应式栅格数或者栅格属性对象</td>
<td>number/object (例如： {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>md</td>
<td><code>≥992px</code> 响应式栅格数或者栅格属性对象</td>
<td>number/object (例如： {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>lg</td>
<td><code>≥1200px</code> 响应式栅格数或者栅格属性对象</td>
<td>number/object (例如： {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>xl</td>
<td><code>≥1920px</code> 响应式栅格数或者栅格属性对象</td>
<td>number/object (例如： {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tag</td>
<td>自定义元素标签</td>
<td>string</td>
<td>*</td>
<td>div</td>
</tr>
</tbody>
</table>
