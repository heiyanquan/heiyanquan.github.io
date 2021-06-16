<h2 id="datepicker-ri-qi-xuan-ze-qi"><a class="header-anchor" href="#datepicker-ri-qi-xuan-ze-qi">¶</a> DatePicker 日期选择器</h2>
<p>用于选择或输入日期</p>
<h3 id="xuan-ze-ri"><a class="header-anchor" href="#xuan-ze-ri">¶</a> 选择日</h3>
<p>以「日」为基本单位，基础的日期选择控件</p>
<demo-block>
        <div><p>基本单位由<code>type</code>属性指定。快捷选项需配置<code>picker-options</code>对象中的<code>shortcuts</code>，禁用日期通过 <code>disabledDate</code> 设置，传入函数</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;默认&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;选择日期&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;带快捷选项&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      align=&quot;right&quot;
      type=&quot;date&quot;
      placeholder=&quot;选择日期&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() &gt; Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="qi-ta-ri-qi-dan-wei"><a class="header-anchor" href="#qi-ta-ri-qi-dan-wei">¶</a> 其他日期单位</h3>
<p>通过扩展基础的日期选择，可以选择周、月、年或多个日期</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;周&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;week&quot;
      format=&quot;yyyy 第 WW 周&quot;
      placeholder=&quot;选择周&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;月&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;month&quot;
      placeholder=&quot;选择月&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;年&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;year&quot;
      placeholder=&quot;选择年&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;多个日期&lt;/span&gt;
    &lt;el-date-picker
      type=&quot;dates&quot;
      v-model=&quot;value4&quot;
      placeholder=&quot;选择一个或多个日期&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xuan-ze-ri-qi-fan-wei"><a class="header-anchor" href="#xuan-ze-ri-qi-fan-wei">¶</a> 选择日期范围</h3>
<p>可在一个选择器中便捷地选择一个时间范围</p>
<demo-block>
        <div><p>在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用<code>unlink-panels</code>属性解除联动。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;默认&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;daterange&quot;
      range-separator=&quot;至&quot;
      start-placeholder=&quot;开始日期&quot;
      end-placeholder=&quot;结束日期&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;带快捷选项&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;daterange&quot;
      align=&quot;right&quot;
      unlink-panels
      range-separator=&quot;至&quot;
      start-placeholder=&quot;开始日期&quot;
      end-placeholder=&quot;结束日期&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xuan-ze-yue-fen-fan-wei"><a class="header-anchor" href="#xuan-ze-yue-fen-fan-wei">¶</a> 选择月份范围</h3>
<p>可在一个选择器中便捷地选择一个月份范围</p>
<demo-block>
        <div><p>在选择月份范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前年份，可以使用<code>unlink-panels</code>属性解除联动。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;默认&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;monthrange&quot;
      range-separator=&quot;至&quot;
      start-placeholder=&quot;开始月份&quot;
      end-placeholder=&quot;结束月份&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;带快捷选项&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;monthrange&quot;
      align=&quot;right&quot;
      unlink-panels
      range-separator=&quot;至&quot;
      start-placeholder=&quot;开始月份&quot;
      end-placeholder=&quot;结束月份&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ri-qi-ge-shi"><a class="header-anchor" href="#ri-qi-ge-shi">¶</a> 日期格式</h3>
<p>使用<code>format</code>指定输入框的格式；使用<code>value-format</code>指定绑定值的格式。</p>
<p>默认情况下，组件接受并返回<code>Date</code>对象。以下为可用的格式化字串，以 UTC 2017年1月2日 03:04:05 为例：</p>
<div class="warning">
<p>请注意大小写</p>
</div>
<table>
<thead>
<tr>
<th>格式</th>
<th>含义</th>
<th>备注</th>
<th>举例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>yyyy</code></td>
<td>年</td>
<td></td>
<td>2017</td>
</tr>
<tr>
<td><code>M</code></td>
<td>月</td>
<td>不补0</td>
<td>1</td>
</tr>
<tr>
<td><code>MM</code></td>
<td>月</td>
<td></td>
<td>01</td>
</tr>
<tr>
<td><code>W</code></td>
<td>周</td>
<td>仅周选择器的 <code>format</code> 可用；不补0</td>
<td>1</td>
</tr>
<tr>
<td><code>WW</code></td>
<td>周</td>
<td>仅周选择器的 <code>format</code> 可用</td>
<td>01</td>
</tr>
<tr>
<td><code>d</code></td>
<td>日</td>
<td>不补0</td>
<td>2</td>
</tr>
<tr>
<td><code>dd</code></td>
<td>日</td>
<td></td>
<td>02</td>
</tr>
<tr>
<td><code>H</code></td>
<td>小时</td>
<td>24小时制；不补0</td>
<td>3</td>
</tr>
<tr>
<td><code>HH</code></td>
<td>小时</td>
<td>24小时制</td>
<td>03</td>
</tr>
<tr>
<td><code>h</code></td>
<td>小时</td>
<td>12小时制，须和 <code>A</code> 或 <code>a</code> 使用；不补0</td>
<td>3</td>
</tr>
<tr>
<td><code>hh</code></td>
<td>小时</td>
<td>12小时制，须和 <code>A</code> 或 <code>a</code> 使用</td>
<td>03</td>
</tr>
<tr>
<td><code>m</code></td>
<td>分钟</td>
<td>不补0</td>
<td>4</td>
</tr>
<tr>
<td><code>mm</code></td>
<td>分钟</td>
<td></td>
<td>04</td>
</tr>
<tr>
<td><code>s</code></td>
<td>秒</td>
<td>不补0</td>
<td>5</td>
</tr>
<tr>
<td><code>ss</code></td>
<td>秒</td>
<td></td>
<td>05</td>
</tr>
<tr>
<td><code>A</code></td>
<td>AM/PM</td>
<td>仅 <code>format</code> 可用，大写</td>
<td>AM</td>
</tr>
<tr>
<td><code>a</code></td>
<td>am/pm</td>
<td>仅 <code>format</code> 可用，小写</td>
<td>am</td>
</tr>
<tr>
<td><code>timestamp</code></td>
<td>JS时间戳</td>
<td>仅 <code>value-format</code> 可用；组件绑定值为<code>number</code>类型</td>
<td>1483326245000</td>
</tr>
<tr>
<td><code>[MM]</code></td>
<td>不需要格式化字符</td>
<td>使用方括号标识不需要格式化的字符 (如  [A] [MM])</td>
<td>MM</td>
</tr>
</tbody>
</table>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;默认为 Date 对象&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;值：{{ value1 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;选择日期&quot;
      format=&quot;yyyy 年 MM 月 dd 日&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;使用 value-format&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;值：{{ value2 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;date&quot;
      placeholder=&quot;选择日期&quot;
      format=&quot;yyyy 年 MM 月 dd 日&quot;
      value-format=&quot;yyyy-MM-dd&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;时间戳&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;值：{{ value3 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;date&quot;
      placeholder=&quot;选择日期&quot;
      format=&quot;yyyy 年 MM 月 dd 日&quot;
      value-format=&quot;timestamp&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="mo-ren-xian-shi-ri-qi"><a class="header-anchor" href="#mo-ren-xian-shi-ri-qi">¶</a> 默认显示日期</h3>
<p>在选择日期范围时，指定起始日期和结束日期的默认时刻。</p>
<demo-block>
        <div><p>选择日期范围时，默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒。通过<code>default-time</code>可以分别指定二者的具体时刻。<code>default-time</code>接受一个数组，其中的值为形如<code>12:00:00</code>的字符串，第一个值控制起始日期的时刻，第二个值控制结束日期的时刻。</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;p&gt;组件值：{{ value }}&lt;/p&gt;
    &lt;el-date-picker
      v-model=&quot;value&quot;
      type=&quot;daterange&quot;
      start-placeholder=&quot;开始日期&quot;
      end-placeholder=&quot;结束日期&quot;
      :default-time=&quot;['00:00:00', '23:59:59']&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ''
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
<td>date(DatePicker) / array(DateRangePicker)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>readonly</td>
<td>完全只读</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>editable</td>
<td>文本框可输入</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>clearable</td>
<td>是否显示清除按钮</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>输入框尺寸</td>
<td>string</td>
<td>large, small, mini</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>非范围选择时的占位内容</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>start-placeholder</td>
<td>范围选择时开始日期的占位内容</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>end-placeholder</td>
<td>范围选择时结束日期的占位内容</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>显示类型</td>
<td>string</td>
<td>year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange</td>
<td>date</td>
</tr>
<tr>
<td>format</td>
<td>显示在输入框中的格式</td>
<td>string</td>
<td>见<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">日期格式</a></td>
<td>yyyy-MM-dd</td>
</tr>
<tr>
<td>align</td>
<td>对齐方式</td>
<td>string</td>
<td>left, center, right</td>
<td>left</td>
</tr>
<tr>
<td>popper-class</td>
<td>DatePicker 下拉框的类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>picker-options</td>
<td>当前时间日期选择器特有的选项参考下表</td>
<td>object</td>
<td>—</td>
<td>{}</td>
</tr>
<tr>
<td>range-separator</td>
<td>选择范围时的分隔符</td>
<td>string</td>
<td>—</td>
<td>'-'</td>
</tr>
<tr>
<td>default-value</td>
<td>可选，选择器打开时默认显示的时间</td>
<td>Date</td>
<td>可被<code>new Date()</code>解析</td>
<td>—</td>
</tr>
<tr>
<td>default-time</td>
<td>范围选择时选中日期所使用的当日内具体时刻</td>
<td>string[]</td>
<td>数组，长度为 2，每项值为字符串，形如<code>12:00:00</code>，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 <code>00:00:00</code></td>
<td>—</td>
</tr>
<tr>
<td>value-format</td>
<td>可选，绑定值的格式。不指定则绑定值为 Date 对象</td>
<td>string</td>
<td>见<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">日期格式</a></td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>原生属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>unlink-panels</td>
<td>在范围选择器里取消两个日期面板之间的联动</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>自定义头部图标的类名</td>
<td>string</td>
<td>—</td>
<td>el-icon-date</td>
</tr>
<tr>
<td>clear-icon</td>
<td>自定义清空图标的类名</td>
<td>string</td>
<td>—</td>
<td>el-icon-circle-close</td>
</tr>
<tr>
<td>validate-event</td>
<td>输入时是否触发表单的校验</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="picker-options"><a class="header-anchor" href="#picker-options">¶</a> Picker Options</h3>
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
<td>shortcuts</td>
<td>设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表</td>
<td>Object[]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabledDate</td>
<td>设置禁用状态，参数为当前日期，要求返回 Boolean</td>
<td>Function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cellClassName</td>
<td>设置日期的 className</td>
<td>Function(Date)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>firstDayOfWeek</td>
<td>周起始日</td>
<td>Number</td>
<td>1 到 7</td>
<td>7</td>
</tr>
<tr>
<td>onPick</td>
<td>选中日期后会执行的回调，只有当 <code>daterange</code> 或 <code>datetimerange</code> 才生效</td>
<td>Function({ maxDate, minDate })</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="shortcuts"><a class="header-anchor" href="#shortcuts">¶</a> Shortcuts</h3>
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
<td>text</td>
<td>标题文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>onClick</td>
<td>选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())</td>
<td>function</td>
<td>—</td>
<td>—</td>
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
<td>用户确认选定的值时触发</td>
<td>组件绑定值。格式与绑定值一致，可受 <code>value-format</code> 控制</td>
</tr>
<tr>
<td>blur</td>
<td>当 input 失去焦点时触发</td>
<td>组件实例</td>
</tr>
<tr>
<td>focus</td>
<td>当 input 获得焦点时触发</td>
<td>组件实例</td>
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
<td>—</td>
</tr>
</tbody>
</table>
