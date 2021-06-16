<h2 id="select"><a class="header-anchor" href="#select">¶</a> Select</h2>
<p>When there are plenty of options, use a drop-down menu to display and select desired ones.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p><code>v-model</code> is the value of <code>el-option</code> that is currently selected.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disabled-option"><a class="header-anchor" href="#disabled-option">¶</a> Disabled option</h3>
<demo-block>
        <div><p>Set the value of <code>disabled</code> in <code>el-option</code> to <code>true</code> to disable this option.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;
      :disabled=&quot;item.disabled&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2',
          disabled: true
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disabled-select"><a class="header-anchor" href="#disabled-select">¶</a> Disabled select</h3>
<p>Disable the whole component.</p>
<demo-block>
        <div><p>Set <code>disabled</code> of <code>el-select</code> to make it disabled.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; disabled placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="clearable-single-select"><a class="header-anchor" href="#clearable-single-select">¶</a> Clearable single select</h3>
<p>You can clear Select using a clear icon.</p>
<demo-block>
        <div><p>Set <code>clearable</code> attribute for <code>el-select</code> and a clear icon will appear. Note that <code>clearable</code> is only for single select.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; clearable placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="basic-multiple-select"><a class="header-anchor" href="#basic-multiple-select">¶</a> Basic multiple select</h3>
<p>Multiple select uses tags to display selected options.</p>
<demo-block>
        <div><p>Set <code>multiple</code> attribute for <code>el-select</code> to enable multiple mode. In this case, the value of <code>v-model</code> will be an array of selected options. By default the selected options will be displayed as Tags. You can collapse them to a text by using <code>collapse-tags</code> attribute.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value1&quot; multiple placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
  
  &lt;el-select
    v-model=&quot;value2&quot;
    multiple
    collapse-tags
    style=&quot;margin-left: 20px;&quot;
    placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value1: [],
        value2: []
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="custom-template"><a class="header-anchor" href="#custom-template">¶</a> Custom template</h3>
<p>You can customize HTML templates for options.</p>
<demo-block>
        <div><p>Insert customized HTML templates into the slot of <code>el-option</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in cities&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
      &lt;span style=&quot;float: left&quot;&gt;{{ item.label }}&lt;/span&gt;
      &lt;span style=&quot;float: right; color: #8492a6; font-size: 13px&quot;&gt;{{ item.value }}&lt;/span&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: 'Beijing'
        }, {
          value: 'Shanghai',
          label: 'Shanghai'
        }, {
          value: 'Nanjing',
          label: 'Nanjing'
        }, {
          value: 'Chengdu',
          label: 'Chengdu'
        }, {
          value: 'Shenzhen',
          label: 'Shenzhen'
        }, {
          value: 'Guangzhou',
          label: 'Guangzhou'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="grouping"><a class="header-anchor" href="#grouping">¶</a> Grouping</h3>
<p>Display options in groups.</p>
<demo-block>
        <div><p>Use <code>el-option-group</code> to group the options, and its <code>label</code> attribute stands for the name of the group.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option-group
      v-for=&quot;group in options&quot;
      :key=&quot;group.label&quot;
      :label=&quot;group.label&quot;&gt;
      &lt;el-option
        v-for=&quot;item in group.options&quot;
        :key=&quot;item.value&quot;
        :label=&quot;item.label&quot;
        :value=&quot;item.value&quot;&gt;
      &lt;/el-option&gt;
    &lt;/el-option-group&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          label: 'Popular cities',
          options: [{
            value: 'Shanghai',
            label: 'Shanghai'
          }, {
            value: 'Beijing',
            label: 'Beijing'
          }]
        }, {
          label: 'City name',
          options: [{
            value: 'Chengdu',
            label: 'Chengdu'
          }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
          }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
          }, {
            value: 'Dalian',
            label: 'Dalian'
          }]
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="option-filtering"><a class="header-anchor" href="#option-filtering">¶</a> Option filtering</h3>
<p>You can filter options for your desired ones.</p>
<demo-block>
        <div><p>Adding <code>filterable</code> to <code>el-select</code> enables filtering. By default, Select will find all the options whose <code>label</code> attribute contains the input value. If you prefer other filtering strategies, you can pass the <code>filter-method</code>. <code>filter-method</code> is a <code>Function</code> that gets called when the input value changes, and its parameter is the current input value.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; filterable placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="remote-search"><a class="header-anchor" href="#remote-search">¶</a> Remote Search</h3>
<p>Enter keywords and search data from server.</p>
<demo-block>
        <div><p>Set the value of <code>filterable</code> and <code>remote</code> with <code>true</code> to enable remote search, and you should pass the <code>remote-method</code>. <code>remote-method</code> is a <code>Function</code> that gets called when the input value changes, and its parameter is the current input value. Note that if <code>el-option</code> is rendered with the <code>v-for</code> directive, you should add the <code>key</code> attribute for <code>el-option</code>. Its value needs to be unique, such as <code>item.value</code> in the following example.</p>
</div>
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select
    v-model=&quot;value&quot;
    multiple
    filterable
    remote
    reserve-keyword
    placeholder=&quot;Please enter a keyword&quot;
    :remote-method=&quot;remoteMethod&quot;
    :loading=&quot;loading&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [],
        value: [],
        list: [],
        loading: false,
        states: [&quot;Alabama&quot;, &quot;Alaska&quot;, &quot;Arizona&quot;,
        &quot;Arkansas&quot;, &quot;California&quot;, &quot;Colorado&quot;,
        &quot;Connecticut&quot;, &quot;Delaware&quot;, &quot;Florida&quot;,
        &quot;Georgia&quot;, &quot;Hawaii&quot;, &quot;Idaho&quot;, &quot;Illinois&quot;,
        &quot;Indiana&quot;, &quot;Iowa&quot;, &quot;Kansas&quot;, &quot;Kentucky&quot;,
        &quot;Louisiana&quot;, &quot;Maine&quot;, &quot;Maryland&quot;,
        &quot;Massachusetts&quot;, &quot;Michigan&quot;, &quot;Minnesota&quot;,
        &quot;Mississippi&quot;, &quot;Missouri&quot;, &quot;Montana&quot;,
        &quot;Nebraska&quot;, &quot;Nevada&quot;, &quot;New Hampshire&quot;,
        &quot;New Jersey&quot;, &quot;New Mexico&quot;, &quot;New York&quot;,
        &quot;North Carolina&quot;, &quot;North Dakota&quot;, &quot;Ohio&quot;,
        &quot;Oklahoma&quot;, &quot;Oregon&quot;, &quot;Pennsylvania&quot;,
        &quot;Rhode Island&quot;, &quot;South Carolina&quot;,
        &quot;South Dakota&quot;, &quot;Tennessee&quot;, &quot;Texas&quot;,
        &quot;Utah&quot;, &quot;Vermont&quot;, &quot;Virginia&quot;,
        &quot;Washington&quot;, &quot;West Virginia&quot;, &quot;Wisconsin&quot;,
        &quot;Wyoming&quot;]
      }
    },
    mounted() {
      this.list = this.states.map(item =&gt; {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() =&gt; {
            this.loading = false;
            this.options = this.list.filter(item =&gt; {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) &gt; -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="create-new-items"><a class="header-anchor" href="#create-new-items">¶</a> Create new items</h3>
<p>Create and select new items that are not included in select options</p>
<demo-block>
        <div><p>By using the <code>allow-create</code> attribute, users can create new items by typing in the input box. Note that for <code>allow-create</code> to work, <code>filterable</code> must be <code>true</code>. This example also demonstrates <code>default-first-option</code>. When this attribute is set to <code>true</code>, you can select the first option in the current option list by hitting enter without having to navigate with mouse or arrow keys.</p>
</div>
        <template slot="source"><element-demo9 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select
    v-model=&quot;value&quot;
    multiple
    filterable
    allow-create
    default-first-option
    placeholder=&quot;Choose tags for your article&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value: []
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>If the binding value of Select is an object, make sure to assign <code>value-key</code> as its unique identity key name.</p>
</div>
<h3 id="select-attributes"><a class="header-anchor" href="#select-attributes">¶</a> Select Attributes</h3>
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
<td>multiple</td>
<td>whether multiple-select is activated</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Select is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value-key</td>
<td>unique identity key name for value, required when value is an object</td>
<td>string</td>
<td>—</td>
<td>value</td>
</tr>
<tr>
<td>size</td>
<td>size of Input</td>
<td>string</td>
<td>large/small/mini</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>whether select can be cleared</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>collapse-tags</td>
<td>whether to collapse tags to a text when multiple selecting</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>multiple-limit</td>
<td>maximum number of options user can select when <code>multiple</code> is <code>true</code>. No limit when set to 0</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>name</td>
<td>the name attribute of select input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>autocomplete</td>
<td>the autocomplete attribute of select input</td>
<td>string</td>
<td>—</td>
<td>off</td>
</tr>
<tr>
<td>auto-complete</td>
<td>@DEPRECATED in next major version</td>
<td>string</td>
<td>—</td>
<td>off</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder</td>
<td>string</td>
<td>—</td>
<td>Select</td>
</tr>
<tr>
<td>filterable</td>
<td>whether Select is filterable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-create</td>
<td>whether creating new items is allowed. To use this, <code>filterable</code> must be true</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filter-method</td>
<td>custom filter method</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>remote</td>
<td>whether options are loaded from server</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>remote-method</td>
<td>custom remote search method</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>loading</td>
<td>whether Select is loading data from server</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>loading-text</td>
<td>displayed text while loading data from server</td>
<td>string</td>
<td>—</td>
<td>Loading</td>
</tr>
<tr>
<td>no-match-text</td>
<td>displayed text when no data matches the filtering query, you can also use slot <code>empty</code></td>
<td>string</td>
<td>—</td>
<td>No matching data</td>
</tr>
<tr>
<td>no-data-text</td>
<td>displayed text when there is no options, you can also use slot <code>empty</code></td>
<td>string</td>
<td>—</td>
<td>No data</td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for Select's dropdown</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>reserve-keyword</td>
<td>when <code>multiple</code> and <code>filter</code> is true, whether to reserve current keyword after selecting an option</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-first-option</td>
<td>select first matching option on enter key. Use with <code>filterable</code> or <code>remote</code></td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>automatic-dropdown</td>
<td>for non-filterable Select, this prop decides if the option menu pops up when the input is focused</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="select-events"><a class="header-anchor" href="#select-events">¶</a> Select Events</h3>
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
<td>triggers when the selected value changes</td>
<td>current selected value</td>
</tr>
<tr>
<td>visible-change</td>
<td>triggers when the dropdown appears/disappears</td>
<td>true when it appears, and false otherwise</td>
</tr>
<tr>
<td>remove-tag</td>
<td>triggers when a tag is removed in multiple mode</td>
<td>removed tag value</td>
</tr>
<tr>
<td>clear</td>
<td>triggers when the clear icon is clicked in a clearable Select</td>
<td>—</td>
</tr>
<tr>
<td>blur</td>
<td>triggers when Input blurs</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>triggers when Input focuses</td>
<td>(event: Event)</td>
</tr>
</tbody>
</table>
<h3 id="select-slots"><a class="header-anchor" href="#select-slots">¶</a> Select Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Option component list</td>
</tr>
<tr>
<td>prefix</td>
<td>content as Select prefix</td>
</tr>
<tr>
<td>empty</td>
<td>content when there is no options</td>
</tr>
</tbody>
</table>
<h3 id="option-group-attributes"><a class="header-anchor" href="#option-group-attributes">¶</a> Option Group Attributes</h3>
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
<td>name of the group</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether to disable all options in this group</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="option-attributes"><a class="header-anchor" href="#option-attributes">¶</a> Option Attributes</h3>
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
<td>value</td>
<td>value of option</td>
<td>string/number/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>label of option, same as <code>value</code> if omitted</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether option is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
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
<td>focus the Input component</td>
<td>-</td>
</tr>
<tr>
<td>blur</td>
<td>blur the Input component, and hide the dropdown</td>
<td>-</td>
</tr>
</tbody>
</table>
