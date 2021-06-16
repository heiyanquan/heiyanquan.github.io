<h2 id="loading"><a class="header-anchor" href="#loading">¶</a> Loading</h2>
<p>Show animation while loading data.</p>
<h3 id="loading-inside-a-container"><a class="header-anchor" href="#loading-inside-a-container">¶</a> Loading inside a container</h3>
<p>Displays animation in a container (such as a table) while loading data.</p>
<demo-block>
        <div><p>Element provides two ways to invoke Loading: directive and service. For the custom directive <code>v-loading</code>, you just need to bind a <code>boolean</code> value to it. By default, the loading mask will append to the element where the directive is used. Adding the <code>body</code> modifier makes the mask append to the body element.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    v-loading=&quot;loading&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;&gt;
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
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="customization"><a class="header-anchor" href="#customization">¶</a> Customization</h3>
<p>You can customize loading text, loading spinner and background color.</p>
<demo-block>
        <div><p>Add attribute <code>element-loading-text</code> to the element on which <code>v-loading</code> is bound, and its value will be displayed under the spinner. Similarly, <code>element-loading-spinner</code> and <code>element-loading-background</code> are for customizing loading spinner class name and background color.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    v-loading=&quot;loading&quot;
    element-loading-text=&quot;Loading...&quot;
    element-loading-spinner=&quot;el-icon-loading&quot;
    element-loading-background=&quot;rgba(0, 0, 0, 0.8)&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="full-screen-loading"><a class="header-anchor" href="#full-screen-loading">¶</a> Full screen loading</h3>
<p>Show a full screen animation while loading data.</p>
<demo-block>
        <div><p>When used as a directive, a full screen Loading requires the <code>fullscreen</code> modifier, and it will be appended to body. In this case, if you wish to disable scrolling on body, you can add another modifier <code>lock</code>. When used as a service, Loading will be full screen by default.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    type=&quot;primary&quot;
    @click=&quot;openFullScreen1&quot;
    v-loading.fullscreen.lock=&quot;fullscreenLoading&quot;&gt;
    As a directive
  &lt;/el-button&gt;
  &lt;el-button
    type=&quot;primary&quot;
    @click=&quot;openFullScreen2&quot;&gt;
    As a service
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
</code></pre></template></demo-block><h3 id="service"><a class="header-anchor" href="#service">¶</a> Service</h3>
<p>You can also invoke Loading with a service. Import Loading service:</p>
<pre><code class="language-javascript">import { Loading } from 'element-ui';
</code></pre>
<p>Invoke it:</p>
<pre><code class="language-javascript">Loading.service(options);
</code></pre>
<p>The parameter <code>options</code> is the configuration of Loading, and its details can be found in the following table. <code>LoadingService</code> returns a Loading instance, and you can close it by invoking its <code>close</code> method:</p>
<pre><code class="language-javascript">let loadingInstance = Loading.service(options);
this.$nextTick(() =&gt; { // Loading should be closed asynchronously
  loadingInstance.close();
});
</code></pre>
<p>Note that in this case the full screen Loading is singleton. If a new full screen Loading is invoked before an existing one is closed, the existing full screen Loading instance will be returned instead of actually creating another Loading instance:</p>
<pre><code class="language-javascript">let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
</code></pre>
<p>Calling the <code>close</code> method on any one of them can close this full screen Loading.</p>
<p>If Element is imported entirely, a globally method <code>$loading</code> will be registered to Vue.prototype. You can invoke it like this: <code>this.$loading(options)</code>, and it also returns a Loading instance.</p>
<h3 id="options"><a class="header-anchor" href="#options">¶</a> Options</h3>
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
<td>target</td>
<td>the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to <code>document.querySelector</code> to get the corresponding DOM node</td>
<td>object/string</td>
<td>—</td>
<td>document.body</td>
</tr>
<tr>
<td>body</td>
<td>same as the <code>body</code> modifier of <code>v-loading</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>fullscreen</td>
<td>same as the <code>fullscreen</code> modifier of <code>v-loading</code></td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>lock</td>
<td>same as the <code>lock</code> modifier of <code>v-loading</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text</td>
<td>loading text that displays under the spinner</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>spinner</td>
<td>class name of the custom spinner</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>background</td>
<td>background color of the mask</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>custom class name for Loading</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
