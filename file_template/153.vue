<h2 id="checkbox"><a class="header-anchor" href="#checkbox">¶</a> Checkbox</h2>
<p>A group of options for multiple choices.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Checkbox can be used alone to switch between two states.</p>
<demo-block>
        <div><p>Define <code>v-model</code>(bind variable) in <code>el-checkbox</code>. The default value is a <code>Boolean</code> for single <code>checkbox</code>, and it becomes <code>true</code> when selected. Content inside the <code>el-checkbox</code> tag will become the description following the button of the checkbox.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;!-- `checked` should be true or false --&gt;
  &lt;el-checkbox v-model=&quot;checked&quot;&gt;Option&lt;/el-checkbox&gt;
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
</code></pre></template></demo-block><h3 id="disabled-state"><a class="header-anchor" href="#disabled-state">¶</a> Disabled State</h3>
<p>Disabled state for checkbox.</p>
<demo-block>
        <div><p>Set the <code>disabled</code> attribute.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox v-model=&quot;checked1&quot; disabled&gt;Option&lt;/el-checkbox&gt;
  &lt;el-checkbox v-model=&quot;checked2&quot; disabled&gt;Option&lt;/el-checkbox&gt;
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
</code></pre></template></demo-block><h3 id="checkbox-group"><a class="header-anchor" href="#checkbox-group">¶</a> Checkbox group</h3>
<p>It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.</p>
<demo-block>
        <div><p><code>checkbox-group</code> element can manage multiple checkboxes in one group by using <code>v-model</code> which is bound as an <code>Array</code>. Inside the <code>el-checkbox</code> element, <code>label</code> is the value of the checkbox. If no content is nested in that tag, <code>label</code> will be rendered as the description following the button of the checkbox. <code>label</code> also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox-group v-model=&quot;checkList&quot;&gt;
    &lt;el-checkbox label=&quot;Option A&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;Option B&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;Option C&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;disabled&quot; disabled&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;selected and disabled&quot; disabled&gt;&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        checkList: ['selected and disabled','Option A']
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="indeterminate"><a class="header-anchor" href="#indeterminate">¶</a> Indeterminate</h3>
<p>The <code>indeterminate</code> property can help you to achieve a 'check all' effect.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox :indeterminate=&quot;isIndeterminate&quot; v-model=&quot;checkAll&quot; @change=&quot;handleCheckAllChange&quot;&gt;Check all&lt;/el-checkbox&gt;
  &lt;div style=&quot;margin: 15px 0;&quot;&gt;&lt;/div&gt;
  &lt;el-checkbox-group v-model=&quot;checkedCities&quot; @change=&quot;handleCheckedCitiesChange&quot;&gt;
    &lt;el-checkbox v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
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
</code></pre></template></demo-block><h3 id="minimum-maximum-items-checked"><a class="header-anchor" href="#minimum-maximum-items-checked">¶</a> Minimum / Maximum items checked</h3>
<p>The <code>min</code> and <code>max</code> properties can help you to limit the number of checked items.</p>
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
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="button-style"><a class="header-anchor" href="#button-style">¶</a> Button style</h3>
<p>Checkbox with button styles.</p>
<demo-block>
        <div><p>You just need to change <code>el-checkbox</code> element into <code>el-checkbox-button</code> element. We also provide <code>size</code> attribute.</p>
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
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :disabled=&quot;city === 'Beijing'&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup4&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default {
    data () {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="with-borders"><a class="header-anchor" href="#with-borders">¶</a> With borders</h3>
<demo-block>
        <div><p>The <code>border</code> attribute adds a border to Checkboxes.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-checkbox v-model=&quot;checked1&quot; label=&quot;Option1&quot; border&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox v-model=&quot;checked2&quot; label=&quot;Option2&quot; border&gt;&lt;/el-checkbox&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox v-model=&quot;checked3&quot; label=&quot;Option1&quot; border size=&quot;medium&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox v-model=&quot;checked4&quot; label=&quot;Option2&quot; border size=&quot;medium&quot;&gt;&lt;/el-checkbox&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup1&quot; size=&quot;small&quot;&gt;
      &lt;el-checkbox label=&quot;Option1&quot; border&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Option2&quot; border disabled&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup2&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-checkbox label=&quot;Option1&quot; border&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Option2&quot; border&gt;&lt;/el-checkbox&gt;
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
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Options</th>
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
<td>value of the Checkbox when used inside a <code>checkbox-group</code></td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>true-label</td>
<td>value of the Checkbox if it's checked</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>false-label</td>
<td>value of the Checkbox if it's not checked</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether the Checkbox is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>whether to add a border around Checkbox</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>size of the Checkbox, only works when <code>border</code> is true</td>
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
<tr>
<td>checked</td>
<td>if the Checkbox is checked</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>indeterminate</td>
<td>same as <code>indeterminate</code> in native checkbox</td>
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
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>triggers when the binding value changes</td>
<td>the updated value</td>
</tr>
</tbody>
</table>
<h3 id="checkbox-group-attributes"><a class="header-anchor" href="#checkbox-group-attributes">¶</a> Checkbox-group Attributes</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Options</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>value / v-model</td>
<td>binding value</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>size of checkbox buttons or bordered checkboxes</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether the nesting checkboxes are disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>min</td>
<td>minimum number of checkbox checked</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max</td>
<td>maximum number of checkbox checked</td>
<td>number</td>
<td>—</td>
<td>—</td>
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
<h3 id="checkbox-group-events"><a class="header-anchor" href="#checkbox-group-events">¶</a> Checkbox-group Events</h3>
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
<td>triggers when the binding value changes</td>
<td>the updated value</td>
</tr>
</tbody>
</table>
<h3 id="checkbox-button-attributes"><a class="header-anchor" href="#checkbox-button-attributes">¶</a> Checkbox-button Attributes</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Options</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>value of the checkbox when used inside a <code>checkbox-group</code></td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>true-label</td>
<td>value of the checkbox if it's checked</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>false-label</td>
<td>value of the checkbox if it's not checked</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether the checkbox is disabled</td>
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
<tr>
<td>checked</td>
<td>if the checkbox is checked</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
