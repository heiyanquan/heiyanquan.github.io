<h2 id="select-xuan-ze-qi"><a class="header-anchor" href="#select-xuan-ze-qi">¶</a> Select 选择器</h2>
<p>当选项过多时，使用下拉菜单展示并选择内容。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>适用广泛的基础单选</p>
<demo-block>
        <div><p><code>v-model</code>的值为当前被选中的<code>el-option</code>的 value 属性值</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;请选择&quot;&gt;
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
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="you-jin-yong-xuan-xiang"><a class="header-anchor" href="#you-jin-yong-xuan-xiang">¶</a> 有禁用选项</h3>
<demo-block>
        <div><p>在<code>el-option</code>中，设定<code>disabled</code>值为 true，即可禁用该选项</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;请选择&quot;&gt;
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
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai">¶</a> 禁用状态</h3>
<p>选择器不可用状态</p>
<demo-block>
        <div><p>为<code>el-select</code>设置<code>disabled</code>属性，则整个选择器不可用</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; disabled placeholder=&quot;请选择&quot;&gt;
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
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ke-qing-kong-dan-xuan"><a class="header-anchor" href="#ke-qing-kong-dan-xuan">¶</a> 可清空单选</h3>
<p>包含清空按钮，可将选择器清空为初始状态</p>
<demo-block>
        <div><p>为<code>el-select</code>设置<code>clearable</code>属性，则可将选择器清空。需要注意的是，<code>clearable</code>属性仅适用于单选。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; clearable placeholder=&quot;请选择&quot;&gt;
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
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ji-chu-duo-xuan"><a class="header-anchor" href="#ji-chu-duo-xuan">¶</a> 基础多选</h3>
<p>适用性较广的基础多选，用 Tag 展示已选项</p>
<demo-block>
        <div><p>为<code>el-select</code>设置<code>multiple</code>属性即可启用多选，此时<code>v-model</code>的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置<code>collapse-tags</code>属性将它们合并为一段文字。</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value1&quot; multiple placeholder=&quot;请选择&quot;&gt;
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
    placeholder=&quot;请选择&quot;&gt;
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
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
        value2: []
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-mo-ban"><a class="header-anchor" href="#zi-ding-yi-mo-ban">¶</a> 自定义模板</h3>
<p>可以自定义备选项</p>
<demo-block>
        <div><p>将自定义的 HTML 模板插入<code>el-option</code>的 slot 中即可。</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;请选择&quot;&gt;
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
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fen-zu"><a class="header-anchor" href="#fen-zu">¶</a> 分组</h3>
<p>备选项进行分组展示</p>
<demo-block>
        <div><p>使用<code>el-option-group</code>对备选项进行分组，它的<code>label</code>属性为分组名</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;请选择&quot;&gt;
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
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ke-sou-suo"><a class="header-anchor" href="#ke-sou-suo">¶</a> 可搜索</h3>
<p>可以利用搜索功能快速查找选项</p>
<demo-block>
        <div><p>为<code>el-select</code>添加<code>filterable</code>属性即可启用搜索功能。默认情况下，Select 会找出所有<code>label</code>属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个<code>filter-method</code>来实现。<code>filter-method</code>为一个<code>Function</code>，它会在输入值发生变化时调用，参数为当前输入值。</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; filterable placeholder=&quot;请选择&quot;&gt;
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
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="yuan-cheng-sou-suo"><a class="header-anchor" href="#yuan-cheng-sou-suo">¶</a> 远程搜索</h3>
<p>从服务器搜索数据，输入关键字进行查找</p>
<demo-block>
        <div><p>为了启用远程搜索，需要将<code>filterable</code>和<code>remote</code>设置为<code>true</code>，同时传入一个<code>remote-method</code>。<code>remote-method</code>为一个<code>Function</code>，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果<code>el-option</code>是通过<code>v-for</code>指令渲染出来的，此时需要为<code>el-option</code>添加<code>key</code>属性，且其值需具有唯一性，比如此例中的<code>item.value</code>。</p>
</div>
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select
    v-model=&quot;value&quot;
    multiple
    filterable
    remote
    reserve-keyword
    placeholder=&quot;请输入关键词&quot;
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
</code></pre></template></demo-block><h3 id="chuang-jian-tiao-mu"><a class="header-anchor" href="#chuang-jian-tiao-mu">¶</a> 创建条目</h3>
<p>可以创建并选中选项中不存在的条目</p>
<demo-block>
        <div><p>使用<code>allow-create</code>属性即可通过在输入框中输入文字来创建新的条目。注意此时<code>filterable</code>必须为真。本例还使用了<code>default-first-option</code>属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。</p>
</div>
        <template slot="source"><element-demo9 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select
    v-model=&quot;value&quot;
    multiple
    filterable
    allow-create
    default-first-option
    placeholder=&quot;请选择文章标签&quot;&gt;
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
<p>如果 Select 的绑定值为对象类型，请务必指定 <code>value-key</code> 作为它的唯一性标识。</p>
</div>
<h3 id="select-attributes"><a class="header-anchor" href="#select-attributes">¶</a> Select Attributes</h3>
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
<td>boolean / string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>multiple</td>
<td>是否多选</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value-key</td>
<td>作为 value 唯一标识的键名，绑定值为对象类型时必填</td>
<td>string</td>
<td>—</td>
<td>value</td>
</tr>
<tr>
<td>size</td>
<td>输入框尺寸</td>
<td>string</td>
<td>medium/small/mini</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>是否可以清空选项</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>collapse-tags</td>
<td>多选时是否将选中值按文字的形式展示</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>multiple-limit</td>
<td>多选时用户最多可以选择的项目数，为 0 则不限制</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>name</td>
<td>select input 的 name 属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>autocomplete</td>
<td>select input 的 autocomplete 属性</td>
<td>string</td>
<td>—</td>
<td>off</td>
</tr>
<tr>
<td>auto-complete</td>
<td>下个主版本弃用</td>
<td>string</td>
<td>—</td>
<td>off</td>
</tr>
<tr>
<td>placeholder</td>
<td>占位符</td>
<td>string</td>
<td>—</td>
<td>请选择</td>
</tr>
<tr>
<td>filterable</td>
<td>是否可搜索</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-create</td>
<td>是否允许用户创建新条目，需配合 <code>filterable</code> 使用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filter-method</td>
<td>自定义搜索方法</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>remote</td>
<td>是否为远程搜索</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>remote-method</td>
<td>远程搜索方法</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>loading</td>
<td>是否正在从远程获取数据</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>loading-text</td>
<td>远程加载时显示的文字</td>
<td>string</td>
<td>—</td>
<td>加载中</td>
</tr>
<tr>
<td>no-match-text</td>
<td>搜索条件无匹配时显示的文字，也可以使用<code>slot=&quot;empty&quot;</code>设置</td>
<td>string</td>
<td>—</td>
<td>无匹配数据</td>
</tr>
<tr>
<td>no-data-text</td>
<td>选项为空时显示的文字，也可以使用<code>slot=&quot;empty&quot;</code>设置</td>
<td>string</td>
<td>—</td>
<td>无数据</td>
</tr>
<tr>
<td>popper-class</td>
<td>Select 下拉框的类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>reserve-keyword</td>
<td>多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-first-option</td>
<td>在输入框按下回车，选择第一个匹配项。需配合 <code>filterable</code> 或 <code>remote</code> 使用</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>automatic-dropdown</td>
<td>对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单</td>
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
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>选中值发生变化时触发</td>
<td>目前的选中值</td>
</tr>
<tr>
<td>visible-change</td>
<td>下拉框出现/隐藏时触发</td>
<td>出现则为 true，隐藏则为 false</td>
</tr>
<tr>
<td>remove-tag</td>
<td>多选模式下移除tag时触发</td>
<td>移除的tag值</td>
</tr>
<tr>
<td>clear</td>
<td>可清空的单选模式下用户点击清空按钮时触发</td>
<td>—</td>
</tr>
<tr>
<td>blur</td>
<td>当 input 失去焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>当 input 获得焦点时触发</td>
<td>(event: Event)</td>
</tr>
</tbody>
</table>
<h3 id="select-slots"><a class="header-anchor" href="#select-slots">¶</a> Select Slots</h3>
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
<td>Option 组件列表</td>
</tr>
<tr>
<td>prefix</td>
<td>Select 组件头部内容</td>
</tr>
<tr>
<td>empty</td>
<td>无选项时的列表</td>
</tr>
</tbody>
</table>
<h3 id="option-group-attributes"><a class="header-anchor" href="#option-group-attributes">¶</a> Option Group Attributes</h3>
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
<td>分组的组名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否将该分组下所有选项置为禁用</td>
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
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>选项的值</td>
<td>string/number/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>选项的标签，若不设置则默认与 <code>value</code> 相同</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用该选项</td>
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
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>使 input 获取焦点</td>
<td>-</td>
</tr>
<tr>
<td>blur</td>
<td>使 input 失去焦点，并隐藏下拉框</td>
<td>-</td>
</tr>
</tbody>
</table>
