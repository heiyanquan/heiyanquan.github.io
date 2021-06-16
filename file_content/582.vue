<h2 id="pagination-fen-ye"><a class="header-anchor" href="#pagination-fen-ye">¶</a> Pagination 分页</h2>
<p>当数据量过多时，使用分页分解数据。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        <div><p>设置<code>layout</code>，表示需要显示的内容，用逗号分隔，布局元素会依次显示。<code>prev</code>表示上一页，<code>next</code>为下一页，<code>pager</code>表示页码列表，除此以外还提供了<code>jumper</code>和<code>total</code>，<code>size</code>和特殊的布局符号<code>-&gt;</code>，<code>-&gt;</code>后的元素会靠右显示，<code>jumper</code>表示跳页元素，<code>total</code>表示总条目数，<code>size</code>用于设置每页显示的页码数量。</p>
</div>
        <!--element-demo: <div class="block">
  <span class="demonstration">页数较少时的效果</span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
<div class="block">
  <span class="demonstration">大于 7 页时的效果</span>
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;页数较少时的效果&lt;/span&gt;
  &lt;el-pagination
    layout=&quot;prev, pager, next&quot;
    :total=&quot;50&quot;&gt;
  &lt;/el-pagination&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;大于 7 页时的效果&lt;/span&gt;
  &lt;el-pagination
    layout=&quot;prev, pager, next&quot;
    :total=&quot;1000&quot;&gt;
  &lt;/el-pagination&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="she-zhi-zui-da-ye-ma-an-niu-shu"><a class="header-anchor" href="#she-zhi-zui-da-ye-ma-an-niu-shu">¶</a> 设置最大页码按钮数</h3>
<demo-block>
        <div><p>默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过<code>pager-count</code>属性可以设置最大页码按钮数。</p>
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
</code></pre></template></demo-block><h3 id="dai-you-bei-jing-se-de-fen-ye"><a class="header-anchor" href="#dai-you-bei-jing-se-de-fen-ye">¶</a> 带有背景色的分页</h3>
<demo-block>
        <div><p>设置<code>background</code>属性可以为分页按钮添加背景色。</p>
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
</code></pre></template></demo-block><h3 id="xiao-xing-fen-ye"><a class="header-anchor" href="#xiao-xing-fen-ye">¶</a> 小型分页</h3>
<p>在空间有限的情况下，可以使用简单的小型分页。</p>
<demo-block>
        <div><p>只需要一个<code>small</code>属性，它接受一个<code>Boolean</code>，默认为<code>false</code>，设为<code>true</code>即可启用。</p>
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
</code></pre></template></demo-block><h3 id="fu-jia-gong-neng"><a class="header-anchor" href="#fu-jia-gong-neng">¶</a> 附加功能</h3>
<p>根据场景需要，可以添加其他功能模块。</p>
<demo-block>
        <div><p>此例是一个完整的用例，使用了<code>size-change</code>和<code>current-change</code>事件来处理页码大小和当前页变动时候触发的事件。<code>page-sizes</code>接受一个整型数组，数组元素为展示的选择每页显示个数的选项，<code>[100, 200, 300, 400]</code>表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">显示总数</span>
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
    <span class="demonstration">调整每页显示条数</span>
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
    <span class="demonstration">直接前往</span>
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
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
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
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
    &lt;span class=&quot;demonstration&quot;&gt;显示总数&lt;/span&gt;
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
    &lt;span class=&quot;demonstration&quot;&gt;调整每页显示条数&lt;/span&gt;
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
    &lt;span class=&quot;demonstration&quot;&gt;直接前往&lt;/span&gt;
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
    &lt;span class=&quot;demonstration&quot;&gt;完整功能&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page=&quot;currentPage4&quot;
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
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
</code></pre></template></demo-block><h3 id="dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"><a class="header-anchor" href="#dang-zhi-you-yi-ye-shi-yin-cang-fen-ye">¶</a> 当只有一页时隐藏分页</h3>
<p>当只有一页时，通过设置 <code>hide-on-single-page</code> 属性来隐藏分页。</p>
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
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>small</td>
<td>是否使用小型分页样式</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>background</td>
<td>是否为分页按钮添加背景色</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>page-size</td>
<td>每页显示条目个数，支持 .sync 修饰符</td>
<td>number</td>
<td>—</td>
<td>10</td>
</tr>
<tr>
<td>total</td>
<td>总条目数</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>page-count</td>
<td>总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性</td>
<td>Number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>pager-count</td>
<td>页码按钮的数量，当总页数超过该值时会折叠</td>
<td>number</td>
<td>大于等于 5 且小于等于 21 的奇数</td>
<td>7</td>
</tr>
<tr>
<td>current-page</td>
<td>当前页数，支持 .sync 修饰符</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>layout</td>
<td>组件布局，子组件名用逗号分隔</td>
<td>String</td>
<td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td>
<td>'prev, pager, next, jumper, -&gt;, total'</td>
</tr>
<tr>
<td>page-sizes</td>
<td>每页显示个数选择器的选项设置</td>
<td>number[]</td>
<td>—</td>
<td>[10, 20, 30, 40, 50, 100]</td>
</tr>
<tr>
<td>popper-class</td>
<td>每页显示个数选择器的下拉框类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prev-text</td>
<td>替代图标显示的上一页文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>next-text</td>
<td>替代图标显示的下一页文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hide-on-single-page</td>
<td>只有一页时是否隐藏</td>
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
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>size-change</td>
<td>pageSize 改变时会触发</td>
<td>每页条数</td>
</tr>
<tr>
<td>current-change</td>
<td>currentPage 改变时会触发</td>
<td>当前页</td>
</tr>
<tr>
<td>prev-click</td>
<td>用户点击上一页按钮改变当前页后触发</td>
<td>当前页</td>
</tr>
<tr>
<td>next-click</td>
<td>用户点击下一页按钮改变当前页后触发</td>
<td>当前页</td>
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
<td>—</td>
<td>自定义内容，需要在 <code>layout</code> 中列出 <code>slot</code></td>
</tr>
</tbody>
</table>
