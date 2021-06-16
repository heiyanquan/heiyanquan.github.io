<h2 id="badge-biao-ji"><a class="header-anchor" href="#badge-biao-ji">¶</a> Badge 标记</h2>
<p>出现在按钮、图标旁的数字或状态标记。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>展示新消息数量。</p>
<demo-block>
        <div><p>定义<code>value</code>属性，它接受<code>Number</code>或者<code>String</code>。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge :value=&quot;12&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;评论&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;3&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;回复&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;1&quot; class=&quot;item&quot; type=&quot;primary&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;评论&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;2&quot; class=&quot;item&quot; type=&quot;warning&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;回复&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;el-dropdown trigger=&quot;click&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    点我查看&lt;i class=&quot;el-icon-caret-bottom el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item class=&quot;clearfix&quot;&gt;
      评论
      &lt;el-badge class=&quot;mark&quot; :value=&quot;12&quot; /&gt;
    &lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item class=&quot;clearfix&quot;&gt;
      回复
      &lt;el-badge class=&quot;mark&quot; :value=&quot;3&quot; /&gt;
    &lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zui-da-zhi"><a class="header-anchor" href="#zui-da-zhi">¶</a> 最大值</h3>
<p>可自定义最大值。</p>
<demo-block>
        <div><p>由<code>max</code>属性定义，它接受一个<code>Number</code>，需要注意的是，只有当<code>value</code>为<code>Number</code>时，它才会生效。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge :value=&quot;200&quot; :max=&quot;99&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;评论&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;100&quot; :max=&quot;10&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;回复&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-nei-rong"><a class="header-anchor" href="#zi-ding-yi-nei-rong">¶</a> 自定义内容</h3>
<p>可以显示数字以外的文本内容。</p>
<demo-block>
        <div><p>定义<code>value</code>为<code>String</code>类型是时可以用于显示自定义文本。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge value=&quot;new&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;评论&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge value=&quot;hot&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;回复&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="xiao-hong-dian"><a class="header-anchor" href="#xiao-hong-dian">¶</a> 小红点</h3>
<p>以红点的形式标注需要关注的内容。</p>
<demo-block>
        <div><p>除了数字外，设置<code>is-dot</code>属性，它接受一个<code>Boolean</code>。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge is-dot class=&quot;item&quot;&gt;数据查询&lt;/el-badge&gt;
&lt;el-badge is-dot class=&quot;item&quot;&gt;
  &lt;el-button class=&quot;share-button&quot; icon=&quot;el-icon-share&quot; type=&quot;primary&quot;&gt;&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
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
<td>value</td>
<td>显示值</td>
<td>string, number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max</td>
<td>最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>is-dot</td>
<td>小圆点</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hidden</td>
<td>隐藏 badge</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>类型</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>—</td>
</tr>
</tbody>
</table>
