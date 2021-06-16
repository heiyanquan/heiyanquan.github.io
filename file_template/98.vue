<h2 id="layout"><a class="header-anchor" href="#layout">¶</a> Layout</h2>
<p>Quickly and easily create layouts with the basic 24-column.</p>
<h3 id="basic-layout"><a class="header-anchor" href="#basic-layout">¶</a> Basic layout</h3>
<p>Create basic grid layout using columns.</p>
<demo-block>
        <div><p>With <code>row</code> and <code>col</code>, we can easily manipulate the layout using the <code>span</code> attribute.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-col :span=&quot;24&quot;&gt;&lt;div class=&quot;grid-content bg-purple-dark&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;12&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="column-spacing"><a class="header-anchor" href="#column-spacing">¶</a> Column spacing</h3>
<p>Column spacing is supported.</p>
<demo-block>
        <div><p>Row provides <code>gutter</code> attribute to specify spacings between columns, and its default value is 0.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="hybrid-layout"><a class="header-anchor" href="#hybrid-layout">¶</a> Hybrid layout</h3>
<p>Form a more complex hybrid layout by combining the basic 1/24 columns.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;16&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;16&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;4&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="column-offset"><a class="header-anchor" href="#column-offset">¶</a> Column offset</h3>
<p>You can specify column offsets.</p>
<demo-block>
        <div><p>You can specify the number of column offset by setting the value of <code>offset</code> attribute of Col.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row :gutter=&quot;20&quot;&gt;
  &lt;el-col :span=&quot;12&quot; :offset=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="alignment"><a class="header-anchor" href="#alignment">¶</a> Alignment</h3>
<p>Use the flex layout to make flexible alignment of columns.</p>
<demo-block>
        <div><p>You can enable flex layout by setting <code>type</code> attribute to 'flex', and define the layout of child elements by setting <code>justify</code> attribute with start, center, end, space-between or space-around.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;center&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;end&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;space-between&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;
&lt;el-row type=&quot;flex&quot; class=&quot;row-bg&quot; justify=&quot;space-around&quot;&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :span=&quot;6&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-row {
    margin-bottom: 20px;
    &amp;:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="responsive-layout"><a class="header-anchor" href="#responsive-layout">¶</a> Responsive Layout</h3>
<p>Taking example by Bootstrap's responsive design, five breakpoints are preset: xs, sm, md, lg and xl.</p>
<demo-block>
        
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;10&quot;&gt;
  &lt;el-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;8&quot; :lg=&quot;9&quot; :xl=&quot;11&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;8&quot; :lg=&quot;9&quot; :xl=&quot;11&quot;&gt;&lt;div class=&quot;grid-content bg-purple&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
  &lt;el-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;&lt;div class=&quot;grid-content bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="utility-classes-for-hiding-elements"><a class="header-anchor" href="#utility-classes-for-hiding-elements">¶</a> Utility classes for hiding elements</h3>
<p>Additionally, Element provides a series of classes for hiding elements under certain conditions. These classes can be added to any DOM elements or custom components. You need to import the following CSS file to use these classes:</p>
<pre><code class="language-js">import 'element-ui/lib/theme-chalk/display.css';
</code></pre>
<p>The classes are:</p>
<ul>
<li><code>hidden-xs-only</code> - hide when on extra small viewports only</li>
<li><code>hidden-sm-only</code> - hide when on small viewports and down</li>
<li><code>hidden-sm-and-down</code> - hide when on small viewports and down</li>
<li><code>hidden-sm-and-up</code> - hide when on small viewports and up</li>
<li><code>hidden-md-only</code> - hide when on medium viewports only</li>
<li><code>hidden-md-and-down</code> - hide when on medium viewports and down</li>
<li><code>hidden-md-and-up</code> - hide when on medium viewports and up</li>
<li><code>hidden-lg-only</code> - hide when on large viewports only</li>
<li><code>hidden-lg-and-down</code> - hide when on large viewports and down</li>
<li><code>hidden-lg-and-up</code> - hide when on large viewports and up</li>
<li><code>hidden-xl-only</code> - hide when on extra large viewports only</li>
</ul>
<h3 id="row-attributes"><a class="header-anchor" href="#row-attributes">¶</a> Row Attributes</h3>
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
<td>gutter</td>
<td>grid spacing</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>layout mode, you can use flex, works in modern browsers</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>justify</td>
<td>horizontal alignment of flex layout</td>
<td>string</td>
<td>start/end/center/space-around/space-between</td>
<td>start</td>
</tr>
<tr>
<td>align</td>
<td>vertical alignment of flex layout</td>
<td>string</td>
<td>top/middle/bottom</td>
<td>top</td>
</tr>
<tr>
<td>tag</td>
<td>custom element tag</td>
<td>string</td>
<td>*</td>
<td>div</td>
</tr>
</tbody>
</table>
<h3 id="col-attributes"><a class="header-anchor" href="#col-attributes">¶</a> Col Attributes</h3>
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
<td>span</td>
<td>number of column the grid spans</td>
<td>number</td>
<td>—</td>
<td>24</td>
</tr>
<tr>
<td>offset</td>
<td>number of spacing on the left side of the grid</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>push</td>
<td>number of columns that grid moves to the right</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>pull</td>
<td>number of columns that grid moves to the left</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>xs</td>
<td><code>&lt;768px</code> Responsive columns or column props object</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sm</td>
<td><code>≥768px</code> Responsive columns or column props object</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>md</td>
<td><code>≥992px</code> Responsive columns or column props object</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>lg</td>
<td><code>≥1200px</code> Responsive columns or column props object</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>xl</td>
<td><code>≥1920px</code> Responsive columns or column props object</td>
<td>number/object (e.g. {span: 4, offset: 4})</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tag</td>
<td>custom element tag</td>
<td>string</td>
<td>*</td>
<td>div</td>
</tr>
</tbody>
</table>
