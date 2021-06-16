<h2 id="calendar-calendar"><a class="header-anchor" href="#calendar-calendar">¶</a> Calendar calendar</h2>
<p>显示日期</p>
<h3 id="ji-ben"><a class="header-anchor" href="#ji-ben">¶</a> 基本</h3>
<demo-block>
        <div><p>设置 <code>value</code> 来指定当前显示的月份。如果 <code>value</code> 未指定，则显示当月。<code>value</code> 支持 <code>v-model</code> 双向绑定。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-calendar v-model=&quot;value&quot;&gt;
&lt;/el-calendar&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-nei-rong"><a class="header-anchor" href="#zi-ding-yi-nei-rong">¶</a> 自定义内容</h3>
<demo-block>
        <div><p>通过设置名为 <code>dateCell</code> 的 <code>scoped-slot</code> 来自定义日历单元格中显示的内容。在 <code>scoped-slot</code> 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。详情解释参考下方的 API 文档。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-calendar&gt;
  &lt;!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法--&gt;
  &lt;template
    slot=&quot;dateCell&quot;
    slot-scope=&quot;{date, data}&quot;&gt;
    &lt;p :class=&quot;data.isSelected ? 'is-selected' : ''&quot;&gt;
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    &lt;/p&gt;
  &lt;/template&gt;
&lt;/el-calendar&gt;
&lt;style&gt;
  .is-selected {
    color: #1989FA;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-fan-wei"><a class="header-anchor" href="#zi-ding-yi-fan-wei">¶</a> 自定义范围</h3>
<demo-block>
        <div><p>设置 <code>range</code> 属性指定日历的显示范围。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-calendar :range=&quot;['2019-03-04', '2019-03-24']&quot;&gt;
&lt;/el-calendar&gt;
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
<td>Date/string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range</td>
<td>时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>first-day-of-week</td>
<td>周起始日</td>
<td>Number</td>
<td>1 到 7</td>
<td>1</td>
</tr>
</tbody>
</table>
<h3 id="datecell-scoped-slot-can-shu"><a class="header-anchor" href="#datecell-scoped-slot-can-shu">¶</a> dateCell scoped slot 参数</h3>
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
<td>date</td>
<td>单元格代表的日期</td>
<td>Date</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>{ type, isSelected, day}，<code>type</code> 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；<code>isSelected</code> 标明该日期是否被选中；<code>day</code> 是格式化的日期，格式为 yyyy-MM-dd</td>
<td>Object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
