<h2 id="checkbox-duo-xuan-kuang"><a class="header-anchor" href="#checkbox-duo-xuan-kuang">¶</a> Checkbox 多选框</h2>
<p>一组备选项中进行多选</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
<demo-block>
        <div><p>在<code>el-checkbox</code>元素中定义<code>v-model</code>绑定变量，单一的<code>checkbox</code>中，默认绑定变量的值会是<code>Boolean</code>，选中为<code>true</code>。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;!-- `checked` 为 true 或 false --&gt;
  &lt;el-checkbox v-model=&quot;checked&quot;&gt;备选项&lt;/el-checkbox&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai">¶</a> 禁用状态</h3>
<p>多选框不可用状态。</p>
<demo-block>
        <div><p>设置<code>disabled</code>属性即可。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox v-model=&quot;checked1&quot; disabled&gt;备选项1&lt;/el-checkbox&gt;
  &lt;el-checkbox v-model=&quot;checked2&quot; disabled&gt;备选项&lt;/el-checkbox&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="duo-xuan-kuang-zu"><a class="header-anchor" href="#duo-xuan-kuang-zu">¶</a> 多选框组</h3>
<p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
<demo-block>
        <div><p><code>checkbox-group</code>元素能把多个 checkbox 管理为一组，只需要在 Group 中使用<code>v-model</code>绑定<code>Array</code>类型的变量即可。 <code>el-checkbox</code> 的 <code>label</code>属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。<code>label</code>与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox-group v-model=&quot;checkList&quot;&gt;
    &lt;el-checkbox label=&quot;复选框 A&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;复选框 B&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;复选框 C&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;禁用&quot; disabled&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;选中且禁用&quot; disabled&gt;&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="indeterminate-zhuang-tai"><a class="header-anchor" href="#indeterminate-zhuang-tai">¶</a> indeterminate 状态</h3>
<p><code>indeterminate</code> 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox :indeterminate=&quot;isIndeterminate&quot; v-model=&quot;checkAll&quot; @change=&quot;handleCheckAllChange&quot;&gt;全选&lt;/el-checkbox&gt;
  &lt;div style=&quot;margin: 15px 0;&quot;&gt;&lt;/div&gt;
  &lt;el-checkbox-group v-model=&quot;checkedCities&quot; @change=&quot;handleCheckedCitiesChange&quot;&gt;
    &lt;el-checkbox v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount &gt; 0 &amp;&amp; checkedCount &lt; this.cities.length;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ke-xuan-xiang-mu-shu-liang-de-xian-zhi"><a class="header-anchor" href="#ke-xuan-xiang-mu-shu-liang-de-xian-zhi">¶</a> 可选项目数量的限制</h3>
<p>使用 <code>min</code> 和 <code>max</code> 属性能够限制可以被勾选的项目的数量。</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox-group 
    v-model=&quot;checkedCities&quot;
    :min=&quot;1&quot;
    :max=&quot;2&quot;&gt;
    &lt;el-checkbox v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkedCities: ['上海', '北京'],
        cities: cityOptions
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="an-niu-yang-shi"><a class="header-anchor" href="#an-niu-yang-shi">¶</a> 按钮样式</h3>
<p>按钮样式的多选组合。</p>
<demo-block>
        <div><p>只需要把<code>el-checkbox</code>元素替换为<code>el-checkbox-button</code>元素即可。此外，Element 还提供了<code>size</code>属性。</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup1&quot;&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup2&quot; size=&quot;medium&quot;&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup3&quot; size=&quot;small&quot;&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :disabled=&quot;city === '北京'&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup4&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data () {
      return {
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        cities: cityOptions
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-you-bian-kuang"><a class="header-anchor" href="#dai-you-bian-kuang">¶</a> 带有边框</h3>
<demo-block>
        <div><p>设置<code>border</code>属性可以渲染为带有边框的多选框。</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-checkbox v-model=&quot;checked1&quot; label=&quot;备选项1&quot; border&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox v-model=&quot;checked2&quot; label=&quot;备选项2&quot; border&gt;&lt;/el-checkbox&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox v-model=&quot;checked3&quot; label=&quot;备选项1&quot; border size=&quot;medium&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox v-model=&quot;checked4&quot; label=&quot;备选项2&quot; border size=&quot;medium&quot;&gt;&lt;/el-checkbox&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup1&quot; size=&quot;small&quot;&gt;
      &lt;el-checkbox label=&quot;备选项1&quot; border&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;备选项2&quot; border disabled&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup2&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-checkbox label=&quot;备选项1&quot; border&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;备选项2&quot; border&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: []
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="checkbox-attributes"><a class="header-anchor" href="#checkbox-attributes">¶</a> Checkbox Attributes</h3>
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
<td>选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>true-label</td>
<td>选中时的值</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>false-label</td>
<td>没有选中时的值</td>
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
<td>border</td>
<td>是否显示边框</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Checkbox 的尺寸，仅在 border 为真时有效</td>
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
<tr>
<td>checked</td>
<td>当前是否勾选</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>indeterminate</td>
<td>设置 indeterminate 状态，只负责样式控制</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="checkbox-events"><a class="header-anchor" href="#checkbox-events">¶</a> Checkbox Events</h3>
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
<td>当绑定值变化时触发的事件</td>
<td>更新后的值</td>
</tr>
</tbody>
</table>
<h3 id="checkbox-group-attributes"><a class="header-anchor" href="#checkbox-group-attributes">¶</a> Checkbox-group Attributes</h3>
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
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效</td>
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
<td>min</td>
<td>可被勾选的 checkbox 的最小数量</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max</td>
<td>可被勾选的 checkbox 的最大数量</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>text-color</td>
<td>按钮形式的 Checkbox 激活时的文本颜色</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>fill</td>
<td>按钮形式的 Checkbox 激活时的填充色和边框色</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
</tbody>
</table>
<h3 id="checkbox-group-events"><a class="header-anchor" href="#checkbox-group-events">¶</a> Checkbox-group Events</h3>
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
<td>当绑定值变化时触发的事件</td>
<td>更新后的值</td>
</tr>
</tbody>
</table>
<h3 id="checkbox-button-attributes"><a class="header-anchor" href="#checkbox-button-attributes">¶</a> Checkbox-button Attributes</h3>
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
<td>选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>true-label</td>
<td>选中时的值</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>false-label</td>
<td>没有选中时的值</td>
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
<tr>
<td>checked</td>
<td>当前是否勾选</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
