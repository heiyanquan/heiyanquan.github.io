<h2 id="pageheader-ye-tou"><a class="header-anchor" href="#pageheader-ye-tou">¶</a> PageHeader 页头</h2>
<p>如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。</p>
<h3 id="ji-chu"><a class="header-anchor" href="#ji-chu">¶</a> 基础</h3>
<demo-block>
        
        <!--element-demo: <el-page-header @back="goBack" content="详情页面">
</el-page-header>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-page-header @back=&quot;goBack&quot; content=&quot;详情页面&quot;&gt;
&lt;/el-page-header&gt;

&lt;script&gt;
  export default {
    methods: {
      goBack() {
        console.log('go back');
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
<td>title</td>
<td>标题</td>
<td>string</td>
<td>—</td>
<td>返回</td>
</tr>
<tr>
<td>content</td>
<td>内容</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>back</td>
<td>点击左侧区域触发</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>标题内容</td>
</tr>
<tr>
<td>content</td>
<td>内容</td>
</tr>
</tbody>
</table>
