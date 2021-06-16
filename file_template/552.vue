<h2 id="card-qia-pian"><a class="header-anchor" href="#card-qia-pian">¶</a> Card 卡片</h2>
<p>将信息聚合在卡片容器中展示。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>包含标题，内容和操作。</p>
<demo-block>
        <div><p>Card 组件包括<code>header</code>和<code>body</code>部分，<code>header</code>部分需要有显式具名 slot 分发，同时也是可选的。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-card class=&quot;box-card&quot;&gt;
  &lt;div slot=&quot;header&quot; class=&quot;clearfix&quot;&gt;
    &lt;span&gt;卡片名称&lt;/span&gt;
    &lt;el-button style=&quot;float: right; padding: 3px 0&quot; type=&quot;text&quot;&gt;操作按钮&lt;/el-button&gt;
  &lt;/div&gt;
  &lt;div v-for=&quot;o in 4&quot; :key=&quot;o&quot; class=&quot;text item&quot;&gt;
    {{'列表内容 ' + o }}
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
</code></pre></template></demo-block><h3 id="jian-dan-qia-pian"><a class="header-anchor" href="#jian-dan-qia-pian">¶</a> 简单卡片</h3>
<p>卡片可以只有内容区域。</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-card class=&quot;box-card&quot;&gt;
  &lt;div v-for=&quot;o in 4&quot; :key=&quot;o&quot; class=&quot;text item&quot;&gt;
    {{'列表内容 ' + o }}
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
</code></pre></template></demo-block><h3 id="dai-tu-pian"><a class="header-anchor" href="#dai-tu-pian">¶</a> 带图片</h3>
<p>可配置定义更丰富的内容展示。</p>
<demo-block>
        <div><p>配置<code>body-style</code>属性来自定义<code>body</code>部分的<code>style</code>，我们还使用了布局组件。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-col :span=&quot;8&quot; v-for=&quot;(o, index) in 2&quot; :key=&quot;o&quot; :offset=&quot;index &gt; 0 ? 2 : 0&quot;&gt;
    &lt;el-card :body-style=&quot;{ padding: '0px' }&quot;&gt;
      &lt;img src=&quot;https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png&quot; class=&quot;image&quot;&gt;
      &lt;div style=&quot;padding: 14px;&quot;&gt;
        &lt;span&gt;好吃的汉堡&lt;/span&gt;
        &lt;div class=&quot;bottom clearfix&quot;&gt;
          &lt;time class=&quot;time&quot;&gt;{{ currentDate }}&lt;/time&gt;
          &lt;el-button type=&quot;text&quot; class=&quot;button&quot;&gt;操作按钮&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="qia-pian-yin-ying"><a class="header-anchor" href="#qia-pian-yin-ying">¶</a> 卡片阴影</h3>
<p>可对阴影的显示进行配置。</p>
<demo-block>
        <div><p>通过<code>shadow</code>属性设置卡片阴影出现的时机：<code>always</code>、<code>hover</code>或<code>never</code>。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;12&quot;&gt;
  &lt;el-col :span=&quot;8&quot;&gt;
    &lt;el-card shadow=&quot;always&quot;&gt;
      总是显示
    &lt;/el-card&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;
    &lt;el-card shadow=&quot;hover&quot;&gt;
      鼠标悬浮时显示
    &lt;/el-card&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;
    &lt;el-card shadow=&quot;never&quot;&gt;
      从不显示
    &lt;/el-card&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;
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
<td>header</td>
<td>设置 header，也可以通过 <code>slot#header</code> 传入 DOM</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>body-style</td>
<td>设置 body 的样式</td>
<td>object</td>
<td>—</td>
<td>{ padding: '20px' }</td>
</tr>
<tr>
<td>shadow</td>
<td>设置阴影显示时机</td>
<td>string</td>
<td>always / hover / never</td>
<td>always</td>
</tr>
</tbody>
</table>
