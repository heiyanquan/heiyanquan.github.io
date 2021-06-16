<h2 id="loading-jia-zai"><a class="header-anchor" href="#loading-jia-zai">¶</a> Loading 加载</h2>
<p>加载数据时显示动效。</p>
<h3 id="qu-yu-jia-zai"><a class="header-anchor" href="#qu-yu-jia-zai">¶</a> 区域加载</h3>
<p>在表格等容器中加载数据时显示。</p>
<demo-block>
        <div><p>Element 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令<code>v-loading</code>，只需要绑定<code>Boolean</code>即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加<code>body</code>修饰符，可以使遮罩插入至 DOM 中的 body 上。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    v-loading=&quot;loading&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;style&gt;
  body {
    margin: 0;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi"><a class="header-anchor" href="#zi-ding-yi">¶</a> 自定义</h3>
<p>可自定义加载文案、图标和背景色。</p>
<demo-block>
        <div><p>在绑定了<code>v-loading</code>指令的元素上添加<code>element-loading-text</code>属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，<code>element-loading-spinner</code>和<code>element-loading-background</code>属性分别用来设定图标类名和背景色值。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    v-loading=&quot;loading&quot;
    element-loading-text=&quot;拼命加载中&quot;
    element-loading-spinner=&quot;el-icon-loading&quot;
    element-loading-background=&quot;rgba(0, 0, 0, 0.8)&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zheng-ye-jia-zai"><a class="header-anchor" href="#zheng-ye-jia-zai">¶</a> 整页加载</h3>
<p>页面数据加载时显示。</p>
<demo-block>
        <div><p>当使用指令方式时，全屏遮罩需要添加<code>fullscreen</code>修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用<code>lock</code>修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    type=&quot;primary&quot;
    @click=&quot;openFullScreen1&quot;
    v-loading.fullscreen.lock=&quot;fullscreenLoading&quot;&gt;
    指令方式
  &lt;/el-button&gt;
  &lt;el-button
    type=&quot;primary&quot;
    @click=&quot;openFullScreen2&quot;&gt;
    服务方式
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() =&gt; {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() =&gt; {
          loading.close();
        }, 2000);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fu-wu"><a class="header-anchor" href="#fu-wu">¶</a> 服务</h3>
<p>Loading 还可以以服务的方式调用。引入 Loading 服务：</p>
<pre><code class="language-javascript">import { Loading } from 'element-ui';
</code></pre>
<p>在需要调用时：</p>
<pre><code class="language-javascript">Loading.service(options);
</code></pre>
<p>其中 <code>options</code> 参数为 Loading 的配置项，具体见下表。<code>LoadingService</code> 会返回一个 Loading 实例，可通过调用该实例的 <code>close</code> 方法来关闭它：</p>
<pre><code class="language-javascript">let loadingInstance = Loading.service(options);
this.$nextTick(() =&gt; { // 以服务的方式调用的 Loading 需要异步关闭
  loadingInstance.close();
});
</code></pre>
<p>需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：</p>
<pre><code class="language-javascript">let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
</code></pre>
<p>此时调用它们中任意一个的 <code>close</code> 方法都能关闭这个全屏 Loading。</p>
<p>如果完整引入了 Element，那么 Vue.prototype 上会有一个全局方法 <code>$loading</code>，它的调用方式为：<code>this.$loading(options)</code>，同样会返回一个 Loading 实例。</p>
<h3 id="options"><a class="header-anchor" href="#options">¶</a> Options</h3>
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
<td>target</td>
<td>Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 <code>document.querySelector</code>以获取到对应 DOM 节点</td>
<td>object/string</td>
<td>—</td>
<td>document.body</td>
</tr>
<tr>
<td>body</td>
<td>同 <code>v-loading</code> 指令中的 <code>body</code> 修饰符</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>fullscreen</td>
<td>同 <code>v-loading</code> 指令中的 <code>fullscreen</code> 修饰符</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>lock</td>
<td>同 <code>v-loading</code> 指令中的 <code>lock</code> 修饰符</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text</td>
<td>显示在加载图标下方的加载文案</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>spinner</td>
<td>自定义加载图标类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>background</td>
<td>遮罩背景色</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>Loading 的自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
