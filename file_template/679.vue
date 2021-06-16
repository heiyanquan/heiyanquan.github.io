<h2 id="popover-dan-chu-kuang"><a class="header-anchor" href="#popover-dan-chu-kuang">¶</a> Popover 弹出框</h2>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>Popover 的属性与 Tooltip 很类似，它们都是基于<code>Vue-popper</code>开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
<demo-block>
        <div><p><code>trigger</code>属性用于设置何时触发 Popover，支持四种触发方式：<code>hover</code>，<code>click</code>，<code>focus</code> 和 <code>manual</code>。对于触发 Popover 的元素，有两种写法：使用 <code>slot=&quot;reference&quot;</code> 的具名插槽，或使用自定义指令<code>v-popover</code>指向 Popover 的索引<code>ref</code>。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-popover
    placement=&quot;top-start&quot;
    title=&quot;标题&quot;
    width=&quot;200&quot;
    trigger=&quot;hover&quot;
    content=&quot;这是一段内容,这是一段内容,这是一段内容,这是一段内容。&quot;&gt;
    &lt;el-button slot=&quot;reference&quot;&gt;hover 激活&lt;/el-button&gt;
  &lt;/el-popover&gt;

  &lt;el-popover
    placement=&quot;bottom&quot;
    title=&quot;标题&quot;
    width=&quot;200&quot;
    trigger=&quot;click&quot;
    content=&quot;这是一段内容,这是一段内容,这是一段内容,这是一段内容。&quot;&gt;
    &lt;el-button slot=&quot;reference&quot;&gt;click 激活&lt;/el-button&gt;
  &lt;/el-popover&gt;

  &lt;el-popover
    ref=&quot;popover&quot;
    placement=&quot;right&quot;
    title=&quot;标题&quot;
    width=&quot;200&quot;
    trigger=&quot;focus&quot;
    content=&quot;这是一段内容,这是一段内容,这是一段内容,这是一段内容。&quot;&gt;
  &lt;/el-popover&gt;
  &lt;el-button v-popover:popover&gt;focus 激活&lt;/el-button&gt;

  &lt;el-popover
    placement=&quot;bottom&quot;
    title=&quot;标题&quot;
    width=&quot;200&quot;
    trigger=&quot;manual&quot;
    content=&quot;这是一段内容,这是一段内容,这是一段内容,这是一段内容。&quot;
    v-model=&quot;visible&quot;&gt;
    &lt;el-button slot=&quot;reference&quot; @click=&quot;visible = !visible&quot;&gt;手动激活&lt;/el-button&gt;
  &lt;/el-popover&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="qian-tao-xin-xi"><a class="header-anchor" href="#qian-tao-xin-xi">¶</a> 嵌套信息</h3>
<p>可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。</p>
<demo-block>
        <div><p>利用分发取代<code>content</code>属性</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-popover
  placement=&quot;right&quot;
  width=&quot;400&quot;
  trigger=&quot;click&quot;&gt;
  &lt;el-table :data=&quot;gridData&quot;&gt;
    &lt;el-table-column width=&quot;150&quot; property=&quot;date&quot; label=&quot;日期&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column width=&quot;100&quot; property=&quot;name&quot; label=&quot;姓名&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column width=&quot;300&quot; property=&quot;address&quot; label=&quot;地址&quot;&gt;&lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;click 激活&lt;/el-button&gt;
&lt;/el-popover&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="qian-tao-cao-zuo"><a class="header-anchor" href="#qian-tao-cao-zuo">¶</a> 嵌套操作</h3>
<p>当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-popover
  placement=&quot;top&quot;
  width=&quot;160&quot;
  v-model=&quot;visible&quot;&gt;
  &lt;p&gt;这是一段内容这是一段内容确定删除吗？&lt;/p&gt;
  &lt;div style=&quot;text-align: right; margin: 0&quot;&gt;
    &lt;el-button size=&quot;mini&quot; type=&quot;text&quot; @click=&quot;visible = false&quot;&gt;取消&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; size=&quot;mini&quot; @click=&quot;visible = false&quot;&gt;确定&lt;/el-button&gt;
  &lt;/div&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;删除&lt;/el-button&gt;
&lt;/el-popover&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        visible: false,
      };
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
<td>trigger</td>
<td>触发方式</td>
<td>String</td>
<td>click/focus/hover/manual</td>
<td>click</td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>content</td>
<td>显示的内容，也可以通过 <code>slot</code> 传入 DOM</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>宽度</td>
<td>String, Number</td>
<td>—</td>
<td>最小宽度 150px</td>
</tr>
<tr>
<td>placement</td>
<td>出现位置</td>
<td>String</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>disabled</td>
<td>Popover 是否可用</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value / v-model</td>
<td>状态是否可见</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>出现位置的偏移量</td>
<td>Number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>定义渐变动画</td>
<td>String</td>
<td>—</td>
<td>fade-in-linear</td>
</tr>
<tr>
<td>visible-arrow</td>
<td>是否显示 Tooltip 箭头，更多参数可见<a href="https://github.com/element-component/vue-popper">Vue-popper</a></td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>popper-options</td>
<td><a href="https://popper.js.org/documentation.html">popper.js</a> 的参数</td>
<td>Object</td>
<td>参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档</td>
<td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>
</tr>
<tr>
<td>popper-class</td>
<td>为 popper 添加类名</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>open-delay</td>
<td>触发方式为 hover 时的显示延迟，单位为毫秒</td>
<td>Number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-delay</td>
<td>触发方式为 hover 时的隐藏延迟，单位为毫秒</td>
<td>number</td>
<td>—</td>
<td>200</td>
</tr>
<tr>
<td>tabindex</td>
<td>Popover 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td>
<td>number</td>
<td>—</td>
<td>0</td>
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
<td>—</td>
<td>Popover 内嵌 HTML 文本</td>
</tr>
<tr>
<td>reference</td>
<td>触发 Popover 显示的 HTML 元素</td>
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
<td>show</td>
<td>显示时触发</td>
<td>—</td>
</tr>
<tr>
<td>after-enter</td>
<td>显示动画播放完毕后触发</td>
<td>—</td>
</tr>
<tr>
<td>hide</td>
<td>隐藏时触发</td>
<td>—</td>
</tr>
<tr>
<td>after-leave</td>
<td>隐藏动画播放完毕后触发</td>
<td>—</td>
</tr>
</tbody>
</table>
