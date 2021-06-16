<h2 id="transfer"><a class="header-anchor" href="#transfer">¶</a> Transfer</h2>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p>Data is passed to Transfer via the <code>data</code> attribute. The data needs to be an object array, and each object should have these attributes: <code>key</code> being the identification of the data item, <code>label</code> being the displayed text, and <code>disabled</code> indicating if the data item is disabled. Items inside the target list are in sync with the variable binding to <code>v-model</code>, and the value of that variable is an array of target item keys. So, if you don't want the target list be initially empty, you can initialize the <code>v-model</code> with an array.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer
    v-model=&quot;value&quot;
    :data=&quot;data&quot;&gt;
  &lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        for (let i = 1; i &lt;= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="filterable"><a class="header-anchor" href="#filterable">¶</a> Filterable</h3>
<p>You can search and filter data items.</p>
<demo-block>
        <div><p>Set the <code>filterable</code> attribute to <code>true</code> to enable filter mode. By default, if the data item <code>label</code> contains the search keyword, it will be included in the search result. Also, you can implement you own filter method with the <code>filter-method</code> attribute. It takes a method and passes search keyword and each data item to it whenever the keyword changes. For a certain data item, if the method returns true, it will be included in the result list.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer
    filterable
    :filter-method=&quot;filterMethod&quot;
    filter-placeholder=&quot;State Abbreviations&quot;
    v-model=&quot;value&quot;
    :data=&quot;data&quot;&gt;
  &lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
        states.forEach((city, index) =&gt; {
          data.push({
            label: city,
            key: index,
            initial: initials[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.initial.toLowerCase().indexOf(query.toLowerCase()) &gt; -1;
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="customizable"><a class="header-anchor" href="#customizable">¶</a> Customizable</h3>
<p>You can customize list titles, button texts, render function for data items, checking status texts in list footer and list footer contents.</p>
<demo-block>
        <div><p>Use <code>titles</code>, <code>button-texts</code>, <code>render-content</code> and <code>format</code> to respectively customize list titles, button texts, render function for data items, checking status texts in list header. Plus, you can also use scoped slot to customize data items. For list footer contents, two named slots are provided: <code>left-footer</code> and <code>right-footer</code>. Plus, if you want some items initially checked, you can use <code>left-default-checked</code> and <code>right-default-checked</code>. Finally, this example demonstrate the <code>change</code> event. Note that this demo can't run in jsfiddle because it doesn't support JSX syntax. In a real project, <code>render-content</code> will work if relevant dependencies are correctly configured.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;p style=&quot;text-align: center; margin: 0 0 20px&quot;&gt;Customize data items using render-content&lt;/p&gt;
  &lt;div style=&quot;text-align: center&quot;&gt;
    &lt;el-transfer
      style=&quot;text-align: left; display: inline-block&quot;
      v-model=&quot;value&quot;
      filterable
      :left-default-checked=&quot;[2, 3]&quot;
      :right-default-checked=&quot;[1]&quot;
      :render-content=&quot;renderFunc&quot;
      :titles=&quot;['Source', 'Target']&quot;
      :button-texts=&quot;['To left', 'To right']&quot;
      :format=&quot;{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }&quot;
      @change=&quot;handleChange&quot;
      :data=&quot;data&quot;&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;left-footer&quot; size=&quot;small&quot;&gt;Operation&lt;/el-button&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;right-footer&quot; size=&quot;small&quot;&gt;Operation&lt;/el-button&gt;
    &lt;/el-transfer&gt;
    &lt;p style=&quot;text-align: center; margin: 50px 0 20px&quot;&gt;Customize data items using scoped slot&lt;/p&gt;
    &lt;div style=&quot;text-align: center&quot;&gt;
      &lt;el-transfer
        style=&quot;text-align: left; display: inline-block&quot;
        v-model=&quot;value4&quot;
        filterable
        :left-default-checked=&quot;[2, 3]&quot;
        :right-default-checked=&quot;[1]&quot;
        :titles=&quot;['Source', 'Target']&quot;
        :button-texts=&quot;['To left', 'To right']&quot;
        :format=&quot;{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }&quot;
        @change=&quot;handleChange&quot;
        :data=&quot;data&quot;&gt;
        &lt;span slot-scope=&quot;{ option }&quot;&gt;{{ option.key }} - {{ option.label }}&lt;/span&gt;
        &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;left-footer&quot; size=&quot;small&quot;&gt;Operation&lt;/el-button&gt;
        &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;right-footer&quot; size=&quot;small&quot;&gt;Operation&lt;/el-button&gt;
      &lt;/el-transfer&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        for (let i = 1; i &lt;= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return &lt;span&gt;{ option.key } - { option.label }&lt;/span&gt;;
        }
      };
    },

    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="prop-aliases"><a class="header-anchor" href="#prop-aliases">¶</a> Prop aliases</h3>
<p>By default, Transfer looks for <code>key</code>, <code>label</code> and <code>disabled</code> in a data item. If your data items have different key names, you can use the <code>props</code> attribute to define aliases.</p>
<demo-block>
        <div><p>The data items in this example do not have <code>key</code>s or <code>label</code>s, instead they have <code>value</code>s and <code>desc</code>s. So you need to set aliases for <code>key</code> and <code>label</code>.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer
    v-model=&quot;value&quot;
    :props=&quot;{
      key: 'value',
      label: 'desc'
    }&quot;
    :data=&quot;data&quot;&gt;
  &lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        for (let i = 1; i &lt;= 15; i++) {
          data.push({
            value: i,
            desc: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: []
      };
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
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>data source</td>
<td>array[{ key, label, disabled }]</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>filterable</td>
<td>whether Transfer is filterable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filter-placeholder</td>
<td>placeholder for the filter input</td>
<td>string</td>
<td>—</td>
<td>Enter keyword</td>
</tr>
<tr>
<td>filter-method</td>
<td>custom filter method</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>target-order</td>
<td>order strategy for elements in the target list. If set to <code>original</code>, the elements will keep the same order as the data source. If set to <code>push</code>, the newly added elements will be pushed to the bottom. If set to <code>unshift</code>, the newly added elements will be inserted on the top</td>
<td>string</td>
<td>original / push / unshift</td>
<td>original</td>
</tr>
<tr>
<td>titles</td>
<td>custom list titles</td>
<td>array</td>
<td>—</td>
<td>['List 1', 'List 2']</td>
</tr>
<tr>
<td>button-texts</td>
<td>custom button texts</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>render-content</td>
<td>custom render function for data items</td>
<td>function(h, option)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format</td>
<td>texts for checking status in list header</td>
<td>object{noChecked, hasChecked}</td>
<td>—</td>
<td>{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }</td>
</tr>
<tr>
<td>props</td>
<td>prop aliases for data source</td>
<td>object{key, label, disabled}</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>left-default-checked</td>
<td>key array of initially checked data items of the left list</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>right-default-checked</td>
<td>key array of initially checked data items of the right list</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>left-footer</td>
<td>content of left list footer</td>
</tr>
<tr>
<td>right-footer</td>
<td>content of right list footer</td>
</tr>
</tbody>
</table>
<h3 id="scoped-slot"><a class="header-anchor" href="#scoped-slot">¶</a> Scoped Slot</h3>
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
<td>Custom content for data items. The scope parameter is { option }</td>
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
<td>clearQuery</td>
<td>clear the filter keyword of a certain panel</td>
<td>'left' / 'right'</td>
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
<td>triggers when data items change in the right list</td>
<td>key array of current data items in the right list, transfer direction (left or right), moved item keys</td>
</tr>
<tr>
<td>left-check-change</td>
<td>triggers when end user changes the checked state of any data item in the left list</td>
<td>key array of currently checked items, key array of items whose checked state have changed</td>
</tr>
<tr>
<td>right-check-change</td>
<td>triggers when end user changes the checked state of any data item in the right list</td>
<td>key array of currently checked items, key array of items whose checked state have changed</td>
</tr>
</tbody>
</table>
