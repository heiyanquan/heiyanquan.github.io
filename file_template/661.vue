<h2 id="steps-bu-zou-tiao"><a class="header-anchor" href="#steps-bu-zou-tiao">¶</a> Steps 步骤条</h2>
<p>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>简单的步骤条。</p>
<demo-block>
        <div><p>设置<code>active</code>属性，接受一个<code>Number</code>，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置<code>space</code>属性即可，它接受<code>Number</code>，单位为<code>px</code>，如果不设置，则为自适应。设置<code>finish-status</code>属性可以改变已经完成的步骤的状态。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;active&quot; finish-status=&quot;success&quot;&gt;
  &lt;el-step title=&quot;步骤 1&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 2&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 3&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;

&lt;el-button style=&quot;margin-top: 12px;&quot; @click=&quot;next&quot;&gt;下一步&lt;/el-button&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ &gt; 2) this.active = 0;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="han-zhuang-tai-bu-zou-tiao"><a class="header-anchor" href="#han-zhuang-tai-bu-zou-tiao">¶</a> 含状态步骤条</h3>
<p>每一步骤显示出该步骤的状态。</p>
<demo-block>
        <div><p>也可以使用<code>title</code>具名分发，可以用<code>slot</code>的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :space=&quot;200&quot; :active=&quot;1&quot; finish-status=&quot;success&quot;&gt;
  &lt;el-step title=&quot;已完成&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;进行中&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 3&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="you-miao-shu-de-bu-zou-tiao"><a class="header-anchor" href="#you-miao-shu-de-bu-zou-tiao">¶</a> 有描述的步骤条</h3>
<p>每个步骤有其对应的步骤状态描述。</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;1&quot;&gt;
  &lt;el-step title=&quot;步骤 1&quot; description=&quot;这是一段很长很长很长的描述性文字&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 2&quot; description=&quot;这是一段很长很长很长的描述性文字&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 3&quot; description=&quot;这段就没那么长了&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="ju-zhong-de-bu-zou-tiao"><a class="header-anchor" href="#ju-zhong-de-bu-zou-tiao">¶</a> 居中的步骤条</h3>
<p>标题和描述都将居中。</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;2&quot; align-center&gt;
  &lt;el-step title=&quot;步骤1&quot; description=&quot;这是一段很长很长很长的描述性文字&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤2&quot; description=&quot;这是一段很长很长很长的描述性文字&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤3&quot; description=&quot;这是一段很长很长很长的描述性文字&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤4&quot; description=&quot;这是一段很长很长很长的描述性文字&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="dai-tu-biao-de-bu-zou-tiao"><a class="header-anchor" href="#dai-tu-biao-de-bu-zou-tiao">¶</a> 带图标的步骤条</h3>
<p>步骤条内可以启用各种自定义的图标。</p>
<demo-block>
        <div><p>通过<code>icon</code>属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名<code>slot</code>来使用自定义的图标。</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">
&lt;el-steps :active=&quot;1&quot;&gt;
  &lt;el-step title=&quot;步骤 1&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 2&quot; icon=&quot;el-icon-upload&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 3&quot; icon=&quot;el-icon-picture&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="shu-shi-bu-zou-tiao"><a class="header-anchor" href="#shu-shi-bu-zou-tiao">¶</a> 竖式步骤条</h3>
<p>竖直方向的步骤条。</p>
<demo-block>
        <div><p>只需要在<code>el-steps</code>元素中设置<code>direction</code>属性为<code>vertical</code>即可。</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div style=&quot;height: 300px;&quot;&gt;
  &lt;el-steps direction=&quot;vertical&quot; :active=&quot;1&quot;&gt;
    &lt;el-step title=&quot;步骤 1&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;步骤 2&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;步骤 3&quot; description=&quot;这是一段很长很长很长的描述性文字&quot;&gt;&lt;/el-step&gt;
  &lt;/el-steps&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="jian-ji-feng-ge-de-bu-zou-tiao"><a class="header-anchor" href="#jian-ji-feng-ge-de-bu-zou-tiao">¶</a> 简洁风格的步骤条</h3>
<p>设置 <code>simple</code> 可应用简洁风格，该条件下 <code>align-center</code> / <code>description</code> / <code>direction</code> / <code>space</code> 都将失效。</p>
<demo-block>
        
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">
&lt;el-steps :active=&quot;1&quot; simple&gt;
  &lt;el-step title=&quot;步骤 1&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 2&quot; icon=&quot;el-icon-upload&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 3&quot; icon=&quot;el-icon-picture&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;

&lt;el-steps :active=&quot;1&quot; finish-status=&quot;success&quot; simple style=&quot;margin-top: 20px&quot;&gt;
  &lt;el-step title=&quot;步骤 1&quot; &gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 2&quot; &gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;步骤 3&quot; &gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="steps-attributes"><a class="header-anchor" href="#steps-attributes">¶</a> Steps Attributes</h3>
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
<td>space</td>
<td>每个 step 的间距，不填写将自适应间距。支持百分比。</td>
<td>number / string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>direction</td>
<td>显示方向</td>
<td>string</td>
<td>vertical/horizontal</td>
<td>horizontal</td>
</tr>
<tr>
<td>active</td>
<td>设置当前激活步骤</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>process-status</td>
<td>设置当前步骤的状态</td>
<td>string</td>
<td>wait / process / finish / error / success</td>
<td>process</td>
</tr>
<tr>
<td>finish-status</td>
<td>设置结束步骤的状态</td>
<td>string</td>
<td>wait / process / finish / error / success</td>
<td>finish</td>
</tr>
<tr>
<td>align-center</td>
<td>进行居中对齐</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>simple</td>
<td>是否应用简洁风格</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="step-attributes"><a class="header-anchor" href="#step-attributes">¶</a> Step Attributes</h3>
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
<td>—</td>
</tr>
<tr>
<td>description</td>
<td>描述性文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>icon</td>
<td>图标</td>
<td>传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入</td>
<td>string</td>
<td>—</td>
</tr>
<tr>
<td>status</td>
<td>设置当前步骤的状态，不设置则根据 steps 确定状态</td>
<td>wait / process / finish / error / success</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="step-slot"><a class="header-anchor" href="#step-slot">¶</a> Step Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon</td>
<td>自定义图标</td>
</tr>
<tr>
<td>title</td>
<td>自定义标题</td>
</tr>
<tr>
<td>description</td>
<td>自定义描述性文字</td>
</tr>
</tbody>
</table>
