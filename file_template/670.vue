<h2 id="rate-ping-fen"><a class="header-anchor" href="#rate-ping-fen">¶</a> Rate 评分</h2>
<p>评分组件</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        <div><p>评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用<code>colors</code>属性设置，而它们对应的两个阈值则通过 <code>low-threshold</code> 和 <code>high-threshold</code> 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;默认不区分颜色&lt;/span&gt;
  &lt;el-rate v-model=&quot;value1&quot;&gt;&lt;/el-rate&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;区分颜色&lt;/span&gt;
  &lt;el-rate
    v-model=&quot;value2&quot;
    :colors=&quot;colors&quot;&gt;
  &lt;/el-rate&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fu-zhu-wen-zi"><a class="header-anchor" href="#fu-zhu-wen-zi">¶</a> 辅助文字</h3>
<p>用辅助文字直接地表达对应分数</p>
<demo-block>
        <div><p>为组件设置 <code>show-text</code> 属性会在右侧显示辅助文字。通过设置 <code>texts</code> 可以为每一个分值指定对应的辅助文字。<code>texts</code> 为一个数组，长度应等于最大值 <code>max</code>。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  show-text&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="qi-ta-icon"><a class="header-anchor" href="#qi-ta-icon">¶</a> 其它 icon</h3>
<p>当有多层评价时，可以用不同类型的 icon 区分评分层级</p>
<demo-block>
        <div><p>设置<code>icon-classes</code>属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用<code>void-icon-class</code>指定了未选中时的图标类名。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  :icon-classes=&quot;iconClasses&quot;
  void-icon-class=&quot;icon-rate-face-off&quot;
  :colors=&quot;['#99A9BF', '#F7BA2A', '#FF9900']&quot;&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null,
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zhi-du"><a class="header-anchor" href="#zhi-du">¶</a> 只读</h3>
<p>只读的评分用来展示分数，允许出现半星</p>
<demo-block>
        <div><p>为组件设置 <code>disabled</code> 属性表示组件为只读，支持小数分值。此时若设置 <code>show-score</code>，则会在右侧显示目前的分值。可以提供 <code>score-template</code> 作为显示模板，模板为一个包含了 <code>{value}</code> 的字符串，<code>{value}</code> 会被解析为分值。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  disabled
  show-score
  text-color=&quot;#ff9900&quot;
  score-template=&quot;{value}&quot;&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 3.7
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
<td>value / v-model</td>
<td>绑定值</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>最大分值</td>
<td>number</td>
<td>—</td>
<td>5</td>
</tr>
<tr>
<td>disabled</td>
<td>是否为只读</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-half</td>
<td>是否允许半选</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>low-threshold</td>
<td>低分和中等分数的界限值，值本身被划分在低分中</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>high-threshold</td>
<td>高分和中等分数的界限值，值本身被划分在高分中</td>
<td>number</td>
<td>—</td>
<td>4</td>
</tr>
<tr>
<td>colors</td>
<td>icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色</td>
<td>array/object</td>
<td>—</td>
<td>['#F7BA2A', '#F7BA2A', '#F7BA2A']</td>
</tr>
<tr>
<td>void-color</td>
<td>未选中 icon 的颜色</td>
<td>string</td>
<td>—</td>
<td>#C6D1DE</td>
</tr>
<tr>
<td>disabled-void-color</td>
<td>只读时未选中 icon 的颜色</td>
<td>string</td>
<td>—</td>
<td>#EFF2F7</td>
</tr>
<tr>
<td>icon-classes</td>
<td>icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名</td>
<td>array/object</td>
<td>—</td>
<td>['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']</td>
</tr>
<tr>
<td>void-icon-class</td>
<td>未选中 icon 的类名</td>
<td>string</td>
<td>—</td>
<td>el-icon-star-off</td>
</tr>
<tr>
<td>disabled-void-icon-class</td>
<td>只读时未选中 icon 的类名</td>
<td>string</td>
<td>—</td>
<td>el-icon-star-on</td>
</tr>
<tr>
<td>show-text</td>
<td>是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-score</td>
<td>是否显示当前分数，show-score 和 show-text 不能同时为真</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text-color</td>
<td>辅助文字的颜色</td>
<td>string</td>
<td>—</td>
<td>#1F2D3D</td>
</tr>
<tr>
<td>texts</td>
<td>辅助文字数组</td>
<td>array</td>
<td>—</td>
<td>['极差', '失望', '一般', '满意', '惊喜']</td>
</tr>
<tr>
<td>score-template</td>
<td>分数显示模板</td>
<td>string</td>
<td>—</td>
<td>{value}</td>
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
<td>change</td>
<td>分值改变时触发</td>
<td>改变后的分值</td>
</tr>
</tbody>
</table>
