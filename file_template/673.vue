<h2 id="radio-dan-xuan-kuang"><a class="header-anchor" href="#radio-dan-xuan-kuang">¶</a> Radio 单选框</h2>
<p>在一组备选项中进行单选</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
<demo-block>
        <div><p>要使用 Radio 组件，只需要设置<code>v-model</code>绑定变量，选中意味着变量的值为相应 Radio <code>label</code>属性的值，<code>label</code>可以是<code>String</code>、<code>Number</code>或<code>Boolean</code>。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio v-model=&quot;radio&quot; label=&quot;1&quot;&gt;备选项&lt;/el-radio&gt;
  &lt;el-radio v-model=&quot;radio&quot; label=&quot;2&quot;&gt;备选项&lt;/el-radio&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai">¶</a> 禁用状态</h3>
<p>单选框不可用的状态。</p>
<demo-block>
        <div><p>只要在<code>el-radio</code>元素中设置<code>disabled</code>属性即可，它接受一个<code>Boolean</code>，<code>true</code>为禁用。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio disabled v-model=&quot;radio&quot; label=&quot;禁用&quot;&gt;备选项&lt;/el-radio&gt;
  &lt;el-radio disabled v-model=&quot;radio&quot; label=&quot;选中且禁用&quot;&gt;备选项&lt;/el-radio&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dan-xuan-kuang-zu"><a class="header-anchor" href="#dan-xuan-kuang-zu">¶</a> 单选框组</h3>
<p>适用于在多个互斥的选项中选择的场景</p>
<demo-block>
        <div><p>结合<code>el-radio-group</code>元素和子元素<code>el-radio</code>可以实现单选组，在<code>el-radio-group</code>中绑定<code>v-model</code>，在<code>el-radio</code>中设置好<code>label</code>即可，无需再给每一个<code>el-radio</code>绑定变量，另外，还提供了<code>change</code>事件来响应变化，它会传入一个参数<code>value</code>。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio-group v-model=&quot;radio&quot;&gt;
    &lt;el-radio :label=&quot;3&quot;&gt;备选项&lt;/el-radio&gt;
    &lt;el-radio :label=&quot;6&quot;&gt;备选项&lt;/el-radio&gt;
    &lt;el-radio :label=&quot;9&quot;&gt;备选项&lt;/el-radio&gt;
  &lt;/el-radio-group&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="an-niu-yang-shi"><a class="header-anchor" href="#an-niu-yang-shi">¶</a> 按钮样式</h3>
<p>按钮样式的单选组合。</p>
<demo-block>
        <div><p>只需要把<code>el-radio</code>元素换成<code>el-radio-button</code>元素即可，此外，Element 还提供了<code>size</code>属性。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-radio-group v-model=&quot;radio1&quot;&gt;
      &lt;el-radio-button label=&quot;上海&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;北京&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;广州&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;深圳&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio2&quot; size=&quot;medium&quot;&gt;
      &lt;el-radio-button label=&quot;上海&quot; &gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;北京&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;广州&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;深圳&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio3&quot; size=&quot;small&quot;&gt;
      &lt;el-radio-button label=&quot;上海&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;北京&quot; disabled &gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;广州&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;深圳&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio4&quot; disabled size=&quot;mini&quot;&gt;
      &lt;el-radio-button label=&quot;上海&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;北京&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;广州&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;深圳&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-you-bian-kuang"><a class="header-anchor" href="#dai-you-bian-kuang">¶</a> 带有边框</h3>
<demo-block>
        <div><p>设置<code>border</code>属性可以渲染为带有边框的单选框。</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-radio v-model=&quot;radio1&quot; label=&quot;1&quot; border&gt;备选项1&lt;/el-radio&gt;
    &lt;el-radio v-model=&quot;radio1&quot; label=&quot;2&quot; border&gt;备选项2&lt;/el-radio&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio v-model=&quot;radio2&quot; label=&quot;1&quot; border size=&quot;medium&quot;&gt;备选项1&lt;/el-radio&gt;
    &lt;el-radio v-model=&quot;radio2&quot; label=&quot;2&quot; border size=&quot;medium&quot;&gt;备选项2&lt;/el-radio&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio3&quot; size=&quot;small&quot;&gt;
      &lt;el-radio label=&quot;1&quot; border&gt;备选项1&lt;/el-radio&gt;
      &lt;el-radio label=&quot;2&quot; border disabled&gt;备选项2&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio4&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-radio label=&quot;1&quot; border&gt;备选项1&lt;/el-radio&gt;
      &lt;el-radio label=&quot;2&quot; border&gt;备选项2&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="radio-attributes"><a class="header-anchor" href="#radio-attributes">¶</a> Radio Attributes</h3>
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
<td>value / v-model</td>
<td>绑定值</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>Radio 的 value</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>是否显示边框</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Radio 的尺寸，仅在 border 为真时有效</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>原生 name 属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="radio-events"><a class="header-anchor" href="#radio-events">¶</a> Radio Events</h3>
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
<td>change</td>
<td>绑定值变化时触发的事件</td>
<td>选中的 Radio label 值</td>
</tr>
</tbody>
</table>
<h3 id="radio-group-attributes"><a class="header-anchor" href="#radio-group-attributes">¶</a> Radio-group Attributes</h3>
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
<td>value / v-model</td>
<td>绑定值</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text-color</td>
<td>按钮形式的 Radio 激活时的文本颜色</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>fill</td>
<td>按钮形式的 Radio 激活时的填充色和边框色</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
</tbody>
</table>
<h3 id="radio-group-events"><a class="header-anchor" href="#radio-group-events">¶</a> Radio-group Events</h3>
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
<td>change</td>
<td>绑定值变化时触发的事件</td>
<td>选中的 Radio label 值</td>
</tr>
</tbody>
</table>
<h3 id="radio-button-attributes"><a class="header-anchor" href="#radio-button-attributes">¶</a> Radio-button Attributes</h3>
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
<td>label</td>
<td>Radio 的 value</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>原生 name 属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
