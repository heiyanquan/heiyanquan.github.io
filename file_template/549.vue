<h2 id="breadcrumb-mian-bao-xie"><a class="header-anchor" href="#breadcrumb-mian-bao-xie">¶</a> Breadcrumb 面包屑</h2>
<p>显示当前页面的路径，快速返回之前的任意页面。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>适用广泛的基础用法。</p>
<demo-block>
        <div><p>在<code>el-breadcrumb</code>中使用<code>el-breadcrumb-item</code>标签表示从首页开始的每一级。Element 提供了一个<code>separator</code>属性，在<code>el-breadcrumb</code>标签中设置它来决定分隔符，它只能是字符串，默认为斜杠<code>/</code>。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-breadcrumb separator=&quot;/&quot;&gt;
  &lt;el-breadcrumb-item :to=&quot;{ path: '/' }&quot;&gt;首页&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;&lt;a href=&quot;/&quot;&gt;活动管理&lt;/a&gt;&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;活动列表&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;活动详情&lt;/el-breadcrumb-item&gt;
&lt;/el-breadcrumb&gt;
</code></pre></template></demo-block><h3 id="tu-biao-fen-ge-fu"><a class="header-anchor" href="#tu-biao-fen-ge-fu">¶</a> 图标分隔符</h3>
<demo-block>
        <div><p>通过设置 <code>separator-class</code> 可使用相应的 <code>iconfont</code> 作为分隔符，注意这将使 <code>separator</code> 设置失效</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-breadcrumb separator-class=&quot;el-icon-arrow-right&quot;&gt;
  &lt;el-breadcrumb-item :to=&quot;{ path: '/' }&quot;&gt;首页&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;活动管理&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;活动列表&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;活动详情&lt;/el-breadcrumb-item&gt;
&lt;/el-breadcrumb&gt;
</code></pre></template></demo-block><h3 id="breadcrumb-attributes"><a class="header-anchor" href="#breadcrumb-attributes">¶</a> Breadcrumb Attributes</h3>
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
<td>separator</td>
<td>分隔符</td>
<td>string</td>
<td>—</td>
<td>斜杠'/'</td>
</tr>
<tr>
<td>separator-class</td>
<td>图标分隔符 class</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="breadcrumb-item-attributes"><a class="header-anchor" href="#breadcrumb-item-attributes">¶</a> Breadcrumb Item Attributes</h3>
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
<td>to</td>
<td>路由跳转对象，同 <code>vue-router</code> 的 <code>to</code></td>
<td>string/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>replace</td>
<td>在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
