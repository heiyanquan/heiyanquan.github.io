<h2 id="pagination"><a class="header-anchor" href="#pagination">¶</a> Pagination</h2>
<p>If you have too much data to display in one page, use pagination.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p>Set <code>layout</code> with different pagination elements you wish to display separated with a comma. Pagination elements are: <code>prev</code> (a button navigating to the previous page), <code>next</code> (a button navigating to the next page), <code>pager</code> (page list), <code>jumper</code> (a jump-to input), <code>total</code> (total item count), <code>size</code> (a select to determine page size) and <code>-&gt;</code>(every element after this symbol will be pulled to the right).</p>
</div>
        <!--element-demo: <div class="block">
  <span class="demonstration">When you have few pages</span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
<div class="block">
  <span class="demonstration">When you have more than 7 pages</span>
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;When you have few pages&lt;/span&gt;
  &lt;el-pagination
    layout=&quot;prev, pager, next&quot;
    :total=&quot;50&quot;&gt;
  &lt;/el-pagination&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;When you have more than 7 pages&lt;/span&gt;
  &lt;el-pagination
    layout=&quot;prev, pager, next&quot;
    :total=&quot;1000&quot;&gt;
  &lt;/el-pagination&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="number-of-pagers"><a class="header-anchor" href="#number-of-pagers">¶</a> Number of pagers</h3>
<demo-block>
        <div><p>By default, Pagination collapses extra pager buttons when it has more than 7 pages. This can be configured with the <code>pager-count</code> attribute.</p>
</div>
        <!--element-demo: <el-pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-pagination
  :page-size=&quot;20&quot;
  :pager-count=&quot;11&quot;
  layout=&quot;prev, pager, next&quot;
  :total=&quot;1000&quot;&gt;
&lt;/el-pagination&gt;
</code></pre></template></demo-block><h3 id="buttons-with-background-color"><a class="header-anchor" href="#buttons-with-background-color">¶</a> Buttons with background color</h3>
<demo-block>
        <div><p>Set the <code>background</code> attribute and the buttons will have a background color.</p>
</div>
        <!--element-demo: <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-pagination
  background
  layout=&quot;prev, pager, next&quot;
  :total=&quot;1000&quot;&gt;
&lt;/el-pagination&gt;
</code></pre></template></demo-block><h3 id="small-pagination"><a class="header-anchor" href="#small-pagination">¶</a> Small Pagination</h3>
<p>Use small pagination in the case of limited space.</p>
<demo-block>
        <div><p>Just set the <code>small</code> attribute to <code>true</code> and the Pagination becomes smaller.</p>
</div>
        <!--element-demo: <el-pagination
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-pagination
  small
  layout=&quot;prev, pager, next&quot;
  :total=&quot;50&quot;&gt;
&lt;/el-pagination&gt;
</code></pre></template></demo-block><h3 id="more-elements"><a class="header-anchor" href="#more-elements">¶</a> More elements</h3>
<p>Add more modules based on your scenario.</p>
<demo-block>
        <div><p>This example is a complete use case. It uses <code>size-change</code> and <code>current-change</code> event to handle page size changes and current page changes. <code>page-sizes</code> accepts an array of integers, each of which represents a different page size in the <code>sizes</code> select options, e.g. <code>[100, 200, 300, 400]</code> indicates that the select will have four options: 100, 200, 300 or 400 items per page.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Total item count</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Change page size</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Jump to</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">All combined</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Total item count&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage1&quot;
      :page-size=&quot;100&quot;
      layout=&quot;total, prev, pager, next&quot;
      :total=&quot;1000&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Change page size&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage2&quot;
      :page-sizes=&quot;[100, 200, 300, 400]&quot;
      :page-size=&quot;100&quot;
      layout=&quot;sizes, prev, pager, next&quot;
      :total=&quot;1000&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Jump to&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage3&quot;
      :page-size=&quot;100&quot;
      layout=&quot;prev, pager, next, jumper&quot;
      :total=&quot;1000&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;All combined&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage4&quot;
      :page-sizes=&quot;[100, 200, 300, 400]&quot;
      :page-size=&quot;100&quot;
      layout=&quot;total, sizes, prev, pager, next, jumper&quot;
      :total=&quot;400&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="hide-pagination-when-there-is-only-one-page"><a class="header-anchor" href="#hide-pagination-when-there-is-only-one-page">¶</a> Hide pagination when there is only one page</h3>
<p>When there is only one page, hide the pagination by setting the <code>hide-on-single-page</code> attribute.</p>
<demo-block>
        
        <!--element-demo: <div>
 <el-switch v-model="value">
 </el-switch>
 <el-pagination
  :hide-on-single-page="value"
  :total="5"
  layout="prev, pager, next">
</el-pagination>
</div>

<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
 &lt;el-switch v-model=&quot;value&quot;&gt;
 &lt;/el-switch&gt;
 &lt;el-pagination
  :hide-on-single-page=&quot;value&quot;
  :total=&quot;5&quot;
  layout=&quot;prev, pager, next&quot;&gt;
&lt;/el-pagination&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: false
      }
    }
  }
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
<td>small</td>
<td>whether to use small pagination</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>background</td>
<td>whether the buttons have a background color</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>page-size</td>
<td>item count of each page, supports the .sync modifier</td>
<td>number</td>
<td>—</td>
<td>10</td>
</tr>
<tr>
<td>total</td>
<td>total item count</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>page-count</td>
<td>total page count. Set either <code>total</code> or <code>page-count</code> and pages will be displayed; if you need <code>page-sizes</code>, <code>total</code> is required</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>pager-count</td>
<td>number of pagers. Pagination collapses when the total page count exceeds this value</td>
<td>number</td>
<td>odd number between 5 and 21</td>
<td>7</td>
</tr>
<tr>
<td>current-page</td>
<td>current page number, supports the .sync modifier</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>layout</td>
<td>layout of Pagination, elements separated with a comma</td>
<td>string</td>
<td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td>
<td>'prev, pager, next, jumper, -&gt;, total'</td>
</tr>
<tr>
<td>page-sizes</td>
<td>options of item count per page</td>
<td>number[]</td>
<td>—</td>
<td>[10, 20, 30, 40, 50, 100]</td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for the page size Select's dropdown</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prev-text</td>
<td>text for the prev button</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>next-text</td>
<td>text for the next button</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Pagination is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hide-on-single-page</td>
<td>whether to hide when there's only one page</td>
<td>boolean</td>
<td>—</td>
<td>-</td>
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
<td>size-change</td>
<td>triggers when <code>page-size</code> changes</td>
<td>the new page size</td>
</tr>
<tr>
<td>current-change</td>
<td>triggers when <code>current-page</code> changes</td>
<td>the new current page</td>
</tr>
<tr>
<td>prev-click</td>
<td>triggers when the prev button is clicked and current page changes</td>
<td>the new current page</td>
</tr>
<tr>
<td>next-click</td>
<td>triggers when the next button is clicked and current page changes</td>
<td>the new current page</td>
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
<td>—</td>
<td>custom content. To use this, you need to declare <code>slot</code> in <code>layout</code></td>
</tr>
</tbody>
</table>
