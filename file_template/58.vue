<h2 id="radio"><a class="header-anchor" href="#radio">¶</a> Radio</h2>
<p>Single selection among multiple options.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Radio should not have too many options. Otherwise, use the Select component instead.</p>
<demo-block>
        <div><p>Creating a radio component is easy, you just need to bind a variable to Radio's <code>v-model</code>. It equals to the value of <code>label</code> of the chosen radio. The type of <code>label</code> is <code>String</code>, <code>Number</code> or <code>Boolean</code>.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio v-model=&quot;radio&quot; label=&quot;1&quot;&gt;Option A&lt;/el-radio&gt;
  &lt;el-radio v-model=&quot;radio&quot; label=&quot;2&quot;&gt;Option B&lt;/el-radio&gt;
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
</code></pre></template></demo-block><h3 id="disabled"><a class="header-anchor" href="#disabled">¶</a> Disabled</h3>
<p><code>disabled</code> attribute is used to disable the radio.</p>
<demo-block>
        <div><p>You just need to add the <code>disabled</code> attribute.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio disabled v-model=&quot;radio&quot; label=&quot;disabled&quot;&gt;Option A&lt;/el-radio&gt;
  &lt;el-radio disabled v-model=&quot;radio&quot; label=&quot;selected and disabled&quot;&gt;Option B&lt;/el-radio&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="radio-button-group"><a class="header-anchor" href="#radio-button-group">¶</a> Radio button group</h3>
<p>Suitable for choosing from some mutually exclusive options.</p>
<demo-block>
        <div><p>Combine <code>el-radio-group</code> with <code>el-radio</code> to display a radio group. Bind a variable with <code>v-model</code> of <code>el-radio-group</code> element and set label value in <code>el-radio</code>. It also provides <code>change</code> event with the current value as its parameter.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-radio-group v-model=&quot;radio&quot;&gt;
  &lt;el-radio :label=&quot;3&quot;&gt;Option A&lt;/el-radio&gt;
  &lt;el-radio :label=&quot;6&quot;&gt;Option B&lt;/el-radio&gt;
  &lt;el-radio :label=&quot;9&quot;&gt;Option C&lt;/el-radio&gt;
&lt;/el-radio-group&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="button-style"><a class="header-anchor" href="#button-style">¶</a> Button style</h3>
<p>Radio with button styles.</p>
<demo-block>
        <div><p>You just need to change <code>el-radio</code> element into <code>el-radio-button</code> element. We also provide <code>size</code> attribute.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-radio-group v-model=&quot;radio1&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio2&quot; size=&quot;medium&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot; &gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio3&quot; size=&quot;small&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot; disabled &gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio4&quot; disabled size=&quot;mini&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="with-borders"><a class="header-anchor" href="#with-borders">¶</a> With borders</h3>
<demo-block>
        <div><p>The <code>border</code> attribute adds a border to Radios.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-radio v-model=&quot;radio1&quot; label=&quot;1&quot; border&gt;Option A&lt;/el-radio&gt;
    &lt;el-radio v-model=&quot;radio1&quot; label=&quot;2&quot; border&gt;Option B&lt;/el-radio&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio v-model=&quot;radio2&quot; label=&quot;1&quot; border size=&quot;medium&quot;&gt;Option A&lt;/el-radio&gt;
    &lt;el-radio v-model=&quot;radio2&quot; label=&quot;2&quot; border size=&quot;medium&quot;&gt;Option B&lt;/el-radio&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio3&quot; size=&quot;small&quot;&gt;
      &lt;el-radio label=&quot;1&quot; border&gt;Option A&lt;/el-radio&gt;
      &lt;el-radio label=&quot;2&quot; border disabled&gt;Option B&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio4&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-radio label=&quot;1&quot; border&gt;Option A&lt;/el-radio&gt;
      &lt;el-radio label=&quot;2&quot; border&gt;Option B&lt;/el-radio&gt;
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
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>the value of Radio</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Radio is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>whether to add a border around Radio</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>size of the Radio, only works when <code>border</code> is true</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>native 'name' attribute</td>
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
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>triggers when the bound value changes</td>
<td>the label value of the chosen radio</td>
</tr>
</tbody>
</table>
<h3 id="radio-group-attributes"><a class="header-anchor" href="#radio-group-attributes">¶</a> Radio-group Attributes</h3>
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
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>the size of radio buttons or bordered radios</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether the nesting radios are disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text-color</td>
<td>font color when button is active</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>fill</td>
<td>border and background color when button is active</td>
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
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>triggers when the bound value changes</td>
<td>the label value of the chosen radio</td>
</tr>
</tbody>
</table>
<h3 id="radio-button-attributes"><a class="header-anchor" href="#radio-button-attributes">¶</a> Radio-button Attributes</h3>
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
<td>label</td>
<td>the value of radio</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether radio is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>native 'name' attribute</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
