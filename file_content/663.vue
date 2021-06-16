<h2 id="datetimepicker-ri-qi-shi-jian-xuan-ze-qi"><a class="header-anchor" href="#datetimepicker-ri-qi-shi-jian-xuan-ze-qi">¶</a> DateTimePicker 日期时间选择器</h2>
<p>在同一个选择器里选择日期和时间</p>
<div class="tip">
<p>DateTimePicker 由 DatePicker 和 TimePicker 派生，<code>Picker Options</code> 或者其他选项可以参照 DatePicker 和 TimePicker。</p>
</div>
<h3 id="ri-qi-he-shi-jian-dian"><a class="header-anchor" href="#ri-qi-he-shi-jian-dian">¶</a> 日期和时间点</h3>
<demo-block>
        <div><p>通过设置<code>type</code>属性为<code>datetime</code>，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">设置默认时间</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="选择日期时间"
      default-time="12:00:00">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
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
        value3: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;默认&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;选择日期时间&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;带快捷选项&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;选择日期时间&quot;
      align=&quot;right&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;设置默认时间&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;选择日期时间&quot;
      default-time=&quot;12:00:00&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
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
        value3: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ri-qi-he-shi-jian-fan-wei"><a class="header-anchor" href="#ri-qi-he-shi-jian-fan-wei">¶</a> 日期和时间范围</h3>
<demo-block>
        <div><p>设置<code>type</code>为<code>datetimerange</code>即可选择日期和时间范围</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
  </div>
</template>

<script>
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
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;默认&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetimerange&quot;
      range-separator=&quot;至&quot;
      start-placeholder=&quot;开始日期&quot;
      end-placeholder=&quot;结束日期&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;带快捷选项&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetimerange&quot;
      :picker-options=&quot;pickerOptions&quot;
      range-separator=&quot;至&quot;
      start-placeholder=&quot;开始日期&quot;
      end-placeholder=&quot;结束日期&quot;
      align=&quot;right&quot;&gt;
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
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="mo-ren-de-qi-shi-yu-jie-shu-shi-ke"><a class="header-anchor" href="#mo-ren-de-qi-shi-yu-jie-shu-shi-ke">¶</a> 默认的起始与结束时刻</h3>
<demo-block>
        <div><p>使用<code>datetimerange</code>进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的<code>00:00:00</code>作为起始与结束的时刻；通过选项<code>default-time</code>可以控制选中起始与结束日期时所使用的具体时刻。<code>default-time</code>接受一个数组，数组每项值为字符串，形如<code>12:00:00</code>，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">起始日期时刻为 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      align="right"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;起始日期时刻为 12:00:00&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetimerange&quot;
      start-placeholder=&quot;开始日期&quot;
      end-placeholder=&quot;结束日期&quot;
      :default-time=&quot;['12:00:00']&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;起始日期时刻为 12:00:00，结束日期时刻为 08:00:00&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetimerange&quot;
      align=&quot;right&quot;
      start-placeholder=&quot;开始日期&quot;
      end-placeholder=&quot;结束日期&quot;
      :default-time=&quot;['12:00:00', '08:00:00']&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: '',
        value2: ''
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
<td>date(DateTimePicker) / array(DateTimeRangePicker)</td>
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
<td>time-arrow-control</td>
<td>是否使用箭头进行时间选择</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>显示类型</td>
<td>string</td>
<td>year/month/date/week/ datetime/datetimerange/daterange</td>
<td>date</td>
</tr>
<tr>
<td>format</td>
<td>显示在输入框中的格式</td>
<td>string</td>
<td>见<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">日期格式</a></td>
<td>yyyy-MM-dd HH:mm:ss</td>
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
<td>DateTimePicker 下拉框的类名</td>
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
<td>-</td>
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
<td>选中日期后的默认具体时刻</td>
<td>非范围选择时：string / 范围选择时：string[]</td>
<td>非范围选择时：形如<code>12:00:00</code>的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如<code>12:00:00</code>，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 <code>00:00:00</code></td>
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
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
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
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>range-separator</td>
<td>自定义分隔符</td>
</tr>
</tbody>
</table>
