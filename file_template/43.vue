<h2 id="switch"><a class="header-anchor" href="#switch">¶</a> Switch</h2>
<p>Switch is used for switching between two opposing states.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p>Bind <code>v-model</code> to a <code>Boolean</code> typed variable. The <code>active-color</code> and <code>inactive-color</code> attribute decides the background color in two states.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch v-model=&quot;value1&quot;&gt;
&lt;/el-switch&gt;
&lt;el-switch
  v-model=&quot;value2&quot;
  active-color=&quot;#13ce66&quot;
  inactive-color=&quot;#ff4949&quot;&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="text-description"><a class="header-anchor" href="#text-description">¶</a> Text description</h3>
<demo-block>
        <div><p>You can add <code>active-text</code> and <code>inactive-text</code> attribute to show texts.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch
  v-model=&quot;value1&quot;
  active-text=&quot;Pay by month&quot;
  inactive-text=&quot;Pay by year&quot;&gt;
&lt;/el-switch&gt;
&lt;el-switch
  style=&quot;display: block&quot;
  v-model=&quot;value2&quot;
  active-color=&quot;#13ce66&quot;
  inactive-color=&quot;#ff4949&quot;
  active-text=&quot;Pay by month&quot;
  inactive-text=&quot;Pay by year&quot;&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="extended-value-types"><a class="header-anchor" href="#extended-value-types">¶</a> Extended value types</h3>
<demo-block>
        <div><p>You can set <code>active-value</code> and <code>inactive-value</code> attributes. They both receive a <code>Boolean</code>, <code>String</code> or <code>Number</code> typed value.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip :content=&quot;'Switch value: ' + value&quot; placement=&quot;top&quot;&gt;
  &lt;el-switch
    v-model=&quot;value&quot;
    active-color=&quot;#13ce66&quot;
    inactive-color=&quot;#ff4949&quot;
    active-value=&quot;100&quot;
    inactive-value=&quot;0&quot;&gt;
  &lt;/el-switch&gt;
&lt;/el-tooltip&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: '100'
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disabled"><a class="header-anchor" href="#disabled">¶</a> Disabled</h3>
<demo-block>
        <div><p>Adding the <code>disabled</code> attribute disables Switch.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch
  v-model=&quot;value1&quot;
  disabled&gt;
&lt;/el-switch&gt;
&lt;el-switch
  v-model=&quot;value2&quot;
  disabled&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
&lt;/script&gt;
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
<td>value / v-model</td>
<td>binding value</td>
<td>boolean / string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Switch is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>width</td>
<td>width of Switch</td>
<td>number</td>
<td>—</td>
<td>40</td>
</tr>
<tr>
<td>active-icon-class</td>
<td>class name of the icon displayed when in <code>on</code> state, overrides <code>active-text</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inactive-icon-class</td>
<td>class name of the icon displayed when in <code>off</code> state, overrides <code>inactive-text</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>active-text</td>
<td>text displayed when in <code>on</code> state</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inactive-text</td>
<td>text displayed when in <code>off</code> state</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>active-value</td>
<td>switch value when in <code>on</code> state</td>
<td>boolean / string / number</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inactive-value</td>
<td>switch value when in <code>off</code> state</td>
<td>boolean / string / number</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>active-color</td>
<td>background color when in <code>on</code> state</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
<tr>
<td>inactive-color</td>
<td>background color when in <code>off</code> state</td>
<td>string</td>
<td>—</td>
<td>#C0CCDA</td>
</tr>
<tr>
<td>name</td>
<td>input name of Switch</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>validate-event</td>
<td>whether to trigger form validation</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>triggers when value changes</td>
<td>value after changing</td>
</tr>
</tbody>
</table>
<h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>focus the Switch component</td>
<td>—</td>
</tr>
</tbody>
</table>
