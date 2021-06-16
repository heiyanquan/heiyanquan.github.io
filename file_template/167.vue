<h2 id="card"><a class="header-anchor" href="#card">¶</a> Card</h2>
<p>Integrate information in a card container.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Card includes title, content and operations.</p>
<demo-block>
        <div><p>Card is made up of <code>header</code> and <code>body</code>. <code>header</code> is optional, and its content distribution depends on a named slot.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-card class=&quot;box-card&quot;&gt;
  &lt;div slot=&quot;header&quot; class=&quot;clearfix&quot;&gt;
    &lt;span&gt;Card name&lt;/span&gt;
    &lt;el-button style=&quot;float: right; padding: 3px 0&quot; type=&quot;text&quot;&gt;Operation button&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="simple-card"><a class="header-anchor" href="#simple-card">¶</a> Simple card</h3>
<p>The header part can be omitted.</p>
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
</code></pre></template></demo-block><h3 id="with-images"><a class="header-anchor" href="#with-images">¶</a> With images</h3>
<p>Display richer content by adding some configs.</p>
<demo-block>
        <div><p>The <code>body-style</code> attribute defines CSS style of custom <code>body</code>. This example also uses <code>el-col</code> for layout.</p>
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
</code></pre></template></demo-block><h3 id="shadow"><a class="header-anchor" href="#shadow">¶</a> Shadow</h3>
<p>You can define when to show the card shadows</p>
<demo-block>
        <div><p>The <code>shadow</code> attribute determines when the card shadows are displayed. It can be <code>always</code>, <code>hover</code> or <code>never</code>.</p>
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
</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>header</td>
<td>title of the card. Also accepts a DOM passed by <code>slot#header</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>body-style</td>
<td>CSS style of body</td>
<td>object</td>
<td>—</td>
<td>{ padding: '20px' }</td>
</tr>
<tr>
<td>shadow</td>
<td>when to show card shadows</td>
<td>string</td>
<td>always / hover / never</td>
<td>always</td>
</tr>
</tbody>
</table>
