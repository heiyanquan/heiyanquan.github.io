<h2 id="transfer-chuan-suo-kuang"><a class="header-anchor" href="#transfer-chuan-suo-kuang">¶</a> Transfer 穿梭框</h2>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        <div><p>Transfer 的数据通过 <code>data</code> 属性传入。数据需要是一个对象数组，每个对象有以下属性：<code>key</code> 为数据的唯一性标识，<code>label</code> 为显示文本，<code>disabled</code> 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定至 <code>v-model</code> 的变量，值为数据项的 <code>key</code> 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 <code>v-model</code> 绑定的变量赋予一个初始值。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer v-model=&quot;value&quot; :data=&quot;data&quot;&gt;&lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        for (let i = 1; i &lt;= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
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
</code></pre></template></demo-block><h3 id="ke-sou-suo"><a class="header-anchor" href="#ke-sou-suo">¶</a> 可搜索</h3>
<p>在数据很多的情况下，可以对数据进行搜索和过滤。</p>
<demo-block>
        <div><p>设置 <code>filterable</code> 为 <code>true</code> 即可开启搜索模式。默认情况下，若数据项的 <code>label</code> 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 <code>filter-method</code> 定义自己的搜索逻辑。<code>filter-method</code> 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 <code>true</code>，则会在搜索结果中显示对应的数据项。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer
    filterable
    :filter-method=&quot;filterMethod&quot;
    filter-placeholder=&quot;请输入城市拼音&quot;
    v-model=&quot;value&quot;
    :data=&quot;data&quot;&gt;
  &lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) =&gt; {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) &gt; -1;
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ke-zi-ding-yi"><a class="header-anchor" href="#ke-zi-ding-yi">¶</a> 可自定义</h3>
<p>可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。</p>
<demo-block>
        <div><p>可以使用 <code>titles</code>、<code>button-texts</code>、<code>render-content</code> 和 <code>format</code> 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。数据项的渲染还可以使用 <code>scoped-slot</code> 进行自定义。对于列表底部的内容区，提供了两个具名 slot：<code>left-footer</code> 和 <code>right-footer</code>。此外，如果希望某些数据项在初始化时就被勾选，可以使用 <code>left-default-checked</code> 和 <code>right-default-checked</code> 属性。最后，本例还展示了 <code>change</code> 事件的用法。注意：由于 jsfiddle 不支持 JSX 语法，所以使用 <code>render-content</code> 自定义数据项的例子在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;p style=&quot;text-align: center; margin: 0 0 20px&quot;&gt;使用 render-content 自定义数据项&lt;/p&gt;
  &lt;div style=&quot;text-align: center&quot;&gt;
    &lt;el-transfer
      style=&quot;text-align: left; display: inline-block&quot;
      v-model=&quot;value&quot;
      filterable
      :left-default-checked=&quot;[2, 3]&quot;
      :right-default-checked=&quot;[1]&quot;
      :render-content=&quot;renderFunc&quot;
      :titles=&quot;['Source', 'Target']&quot;
      :button-texts=&quot;['到左边', '到右边']&quot;
      :format=&quot;{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }&quot;
      @change=&quot;handleChange&quot;
      :data=&quot;data&quot;&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;left-footer&quot; size=&quot;small&quot;&gt;操作&lt;/el-button&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;right-footer&quot; size=&quot;small&quot;&gt;操作&lt;/el-button&gt;
    &lt;/el-transfer&gt;
  &lt;/div&gt;
  &lt;p style=&quot;text-align: center; margin: 50px 0 20px&quot;&gt;使用 scoped-slot 自定义数据项&lt;/p&gt;
  &lt;div style=&quot;text-align: center&quot;&gt;
    &lt;el-transfer
      style=&quot;text-align: left; display: inline-block&quot;
      v-model=&quot;value4&quot;
      filterable
      :left-default-checked=&quot;[2, 3]&quot;
      :right-default-checked=&quot;[1]&quot;
      :titles=&quot;['Source', 'Target']&quot;
      :button-texts=&quot;['到左边', '到右边']&quot;
      :format=&quot;{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }&quot;
      @change=&quot;handleChange&quot;
      :data=&quot;data&quot;&gt;
      &lt;span slot-scope=&quot;{ option }&quot;&gt;{{ option.key }} - {{ option.label }}&lt;/span&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;left-footer&quot; size=&quot;small&quot;&gt;操作&lt;/el-button&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;right-footer&quot; size=&quot;small&quot;&gt;操作&lt;/el-button&gt;
    &lt;/el-transfer&gt;
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
            label: `备选项 ${ i }`,
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
</code></pre></template></demo-block><h3 id="shu-ju-xiang-shu-xing-bie-ming"><a class="header-anchor" href="#shu-ju-xiang-shu-xing-bie-ming">¶</a> 数据项属性别名</h3>
<p>默认情况下，Transfer 仅能识别数据项中的 <code>key</code>、<code>label</code> 和 <code>disabled</code> 字段。如果你的数据的字段名不同，可以使用 <code>props</code> 属性为它们设置别名。</p>
<demo-block>
        <div><p>本例中的数据源没有 <code>key</code> 和 <code>label</code> 字段，在功能上与它们相同的字段名为 <code>value</code> 和 <code>desc</code>。因此可以使用<code>props</code> 属性为 <code>key</code> 和 <code>label</code> 设置别名。</p>
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
            desc: `备选项 ${ i }`,
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
<td>data</td>
<td>Transfer 的数据源</td>
<td>array[{ key, label, disabled }]</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>filterable</td>
<td>是否可搜索</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filter-placeholder</td>
<td>搜索框占位符</td>
<td>string</td>
<td>—</td>
<td>请输入搜索内容</td>
</tr>
<tr>
<td>filter-method</td>
<td>自定义搜索方法</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>target-order</td>
<td>右侧列表元素的排序策略：若为 <code>original</code>，则保持与数据源相同的顺序；若为 <code>push</code>，则新加入的元素排在最后；若为 <code>unshift</code>，则新加入的元素排在最前</td>
<td>string</td>
<td>original / push / unshift</td>
<td>original</td>
</tr>
<tr>
<td>titles</td>
<td>自定义列表标题</td>
<td>array</td>
<td>—</td>
<td>['列表 1', '列表 2']</td>
</tr>
<tr>
<td>button-texts</td>
<td>自定义按钮文案</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>render-content</td>
<td>自定义数据项渲染函数</td>
<td>function(h, option)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format</td>
<td>列表顶部勾选状态文案</td>
<td>object{noChecked, hasChecked}</td>
<td>—</td>
<td>{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }</td>
</tr>
<tr>
<td>props</td>
<td>数据源的字段别名</td>
<td>object{key, label, disabled}</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>left-default-checked</td>
<td>初始状态下左侧列表的已勾选项的 key 数组</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>right-default-checked</td>
<td>初始状态下右侧列表的已勾选项的 key 数组</td>
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
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>left-footer</td>
<td>左侧列表底部的内容</td>
</tr>
<tr>
<td>right-footer</td>
<td>右侧列表底部的内容</td>
</tr>
</tbody>
</table>
<h3 id="scoped-slot"><a class="header-anchor" href="#scoped-slot">¶</a> Scoped Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>自定义数据项的内容，参数为 { option }</td>
</tr>
</tbody>
</table>
<h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>clearQuery</td>
<td>清空某个面板的搜索关键词</td>
<td>'left' / 'right'，指定需要清空的面板</td>
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
<td>右侧列表元素变化时触发</td>
<td>当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组</td>
</tr>
<tr>
<td>left-check-change</td>
<td>左侧列表元素被用户选中 / 取消选中时触发</td>
<td>当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</td>
</tr>
<tr>
<td>right-check-change</td>
<td>右侧列表元素被用户选中 / 取消选中时触发</td>
<td>当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</td>
</tr>
</tbody>
</table>
