<h2 id="popconfirm-qi-pao-que-ren-kuang"><a class="header-anchor" href="#popconfirm-qi-pao-que-ren-kuang">¶</a> Popconfirm 气泡确认框</h2>
<p>点击元素，弹出气泡确认框。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。</p>
<demo-block>
        <div><p>在 Popconfirm 中，只有 <code>title</code> 属性可用，<code>content</code> 属性不会被展示。</p>
</div>
        <!--element-demo: <template>
<el-popconfirm
  title="这是一段内容确定删除吗？"
>
  <el-button slot="reference">删除</el-button>
</el-popconfirm>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
&lt;el-popconfirm
  title=&quot;这是一段内容确定删除吗？&quot;
&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;删除&lt;/el-button&gt;
&lt;/el-popconfirm&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi"><a class="header-anchor" href="#zi-ding-yi">¶</a> 自定义</h3>
<p>可以在 Popconfirm 中自定义内容。</p>
<demo-block>
        
        <!--element-demo: <template>
<el-popconfirm
  confirm-button-text='好的'
  cancel-button-text='不用了'
  icon="el-icon-info"
  icon-color="red"
  title="这是一段内容确定删除吗？"
>
  <el-button slot="reference">删除</el-button>
</el-popconfirm>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
&lt;el-popconfirm
  confirm-button-text='好的'
  cancel-button-text='不用了'
  icon=&quot;el-icon-info&quot;
  icon-color=&quot;red&quot;
  title=&quot;这是一段内容确定删除吗？&quot;
&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;删除&lt;/el-button&gt;
&lt;/el-popconfirm&gt;
&lt;/template&gt;
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
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirm-button-text</td>
<td>确认按钮文字</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cancel-button-text</td>
<td>取消按钮文字</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirm-button-type</td>
<td>确认按钮类型</td>
<td>String</td>
<td>—</td>
<td>Primary</td>
</tr>
<tr>
<td>cancel-button-type</td>
<td>取消按钮类型</td>
<td>String</td>
<td>—</td>
<td>Text</td>
</tr>
<tr>
<td>icon</td>
<td>Icon</td>
<td>String</td>
<td>—</td>
<td>el-icon-question</td>
</tr>
<tr>
<td>icon-color</td>
<td>Icon 颜色</td>
<td>String</td>
<td>—</td>
<td>#f90</td>
</tr>
<tr>
<td>hide-icon</td>
<td>是否隐藏 Icon</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>reference</td>
<td>触发 Popconfirm 显示的 HTML 元素</td>
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
<td>confirm</td>
<td>点击确认按钮时触发</td>
<td>—</td>
</tr>
<tr>
<td>cancel</td>
<td>点击取消按钮时触发</td>
<td>—</td>
</tr>
</tbody>
</table>
