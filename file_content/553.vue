<h2 id="timepicker-shi-jian-xuan-ze-qi"><a class="header-anchor" href="#timepicker-shi-jian-xuan-ze-qi">¶</a> TimePicker 时间选择器</h2>
<p>用于选择或输入日期</p>
<h3 id="gu-ding-shi-jian-dian"><a class="header-anchor" href="#gu-ding-shi-jian-dian">¶</a> 固定时间点</h3>
<p>提供几个固定的时间点供用户选择</p>
<demo-block>
        <div><p>使用 el-time-select 标签，分别通过<code>start</code>、<code>end</code>和<code>step</code>指定可选的起始时间、结束时间和步长</p>
</div>
        <!--element-demo: <el-time-select
  v-model="value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</el-time-select>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-time-select
  v-model=&quot;value&quot;
  :picker-options=&quot;{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }&quot;
  placeholder=&quot;选择时间&quot;&gt;
&lt;/el-time-select&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ren-yi-shi-jian-dian"><a class="header-anchor" href="#ren-yi-shi-jian-dian">¶</a> 任意时间点</h3>
<p>可以选择任意时间</p>
<demo-block>
        <div><p>使用 el-time-picker 标签，通过<code>selectableRange</code>限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开<code>arrow-control</code>属性则通过界面上的箭头进行选择。</p>
</div>
        <!--element-demo: <template>
  <el-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-time-picker
    v-model=&quot;value1&quot;
    :picker-options=&quot;{
      selectableRange: '18:30:00 - 20:30:00'
    }&quot;
    placeholder=&quot;任意时间点&quot;&gt;
  &lt;/el-time-picker&gt;
  &lt;el-time-picker
    arrow-control
    v-model=&quot;value2&quot;
    :picker-options=&quot;{
      selectableRange: '18:30:00 - 20:30:00'
    }&quot;
    placeholder=&quot;任意时间点&quot;&gt;
  &lt;/el-time-picker&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="gu-ding-shi-jian-fan-wei"><a class="header-anchor" href="#gu-ding-shi-jian-fan-wei">¶</a> 固定时间范围</h3>
<p>若先选择开始时间，则结束时间内备选项的状态会随之改变</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-time-select
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="结束时间"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </el-time-select>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-time-select
    placeholder=&quot;起始时间&quot;
    v-model=&quot;startTime&quot;
    :picker-options=&quot;{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }&quot;&gt;
  &lt;/el-time-select&gt;
  &lt;el-time-select
    placeholder=&quot;结束时间&quot;
    v-model=&quot;endTime&quot;
    :picker-options=&quot;{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }&quot;&gt;
  &lt;/el-time-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ren-yi-shi-jian-fan-wei"><a class="header-anchor" href="#ren-yi-shi-jian-fan-wei">¶</a> 任意时间范围</h3>
<p>可选择任意的时间范围</p>
<demo-block>
        <div><p>添加<code>is-range</code>属性即可选择时间范围，同样支持<code>arrow-control</code>属性。</p>
</div>
        <!--element-demo: <template>
  <el-time-picker
    is-range
    v-model="value1"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </el-time-picker>
  <el-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-time-picker
    is-range
    v-model=&quot;value1&quot;
    range-separator=&quot;至&quot;
    start-placeholder=&quot;开始时间&quot;
    end-placeholder=&quot;结束时间&quot;
    placeholder=&quot;选择时间范围&quot;&gt;
  &lt;/el-time-picker&gt;
  &lt;el-time-picker
    is-range
    arrow-control
    v-model=&quot;value2&quot;
    range-separator=&quot;至&quot;
    start-placeholder=&quot;开始时间&quot;
    end-placeholder=&quot;结束时间&quot;
    placeholder=&quot;选择时间范围&quot;&gt;
  &lt;/el-time-picker&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
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
<td>value / v-model</td>
<td>绑定值</td>
<td>date(TimePicker) / string(TimeSelect)</td>
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
<td>medium / small / mini</td>
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
<td>范围选择时开始日期的占位内容</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>is-range</td>
<td>是否为时间范围选择，仅对<code>&lt;el-time-picker&gt;</code>有效</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>arrow-control</td>
<td>是否使用箭头进行时间选择，仅对<code>&lt;el-time-picker&gt;</code>有效</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>align</td>
<td>对齐方式</td>
<td>string</td>
<td>left / center / right</td>
<td>left</td>
</tr>
<tr>
<td>popper-class</td>
<td>TimePicker 下拉框的类名</td>
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
<td>value-format</td>
<td>可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象</td>
<td>string</td>
<td>见<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">日期格式</a></td>
<td>—</td>
</tr>
<tr>
<td>default-value</td>
<td>可选，选择器打开时默认显示的时间</td>
<td>Date(TimePicker) / string(TimeSelect)</td>
<td>可被<code>new Date()</code>解析(TimePicker) / 可选值(TimeSelect)</td>
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
<td>prefix-icon</td>
<td>自定义头部图标的类名</td>
<td>string</td>
<td>—</td>
<td>el-icon-time</td>
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
<h3 id="time-select-options"><a class="header-anchor" href="#time-select-options">¶</a> Time Select Options</h3>
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
<td>start</td>
<td>开始时间</td>
<td>string</td>
<td>—</td>
<td>09:00</td>
</tr>
<tr>
<td>end</td>
<td>结束时间</td>
<td>string</td>
<td>—</td>
<td>18:00</td>
</tr>
<tr>
<td>step</td>
<td>间隔时间</td>
<td>string</td>
<td>—</td>
<td>00:30</td>
</tr>
<tr>
<td>minTime</td>
<td>最小时间，小于该时间的时间段将被禁用</td>
<td>string</td>
<td>—</td>
<td>00:00</td>
</tr>
<tr>
<td>maxTime</td>
<td>最大时间，大于该时间的时间段将被禁用</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="time-picker-options"><a class="header-anchor" href="#time-picker-options">¶</a> Time Picker Options</h3>
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
<td>selectableRange</td>
<td>可选时间段，例如<code>'18:30:00 - 20:30:00'</code>或者传入数组<code>['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']</code></td>
<td>string / array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format</td>
<td>时间格式化(TimePicker)</td>
<td>string</td>
<td>小时：<code>HH</code>，分：<code>mm</code>，秒：<code>ss</code>，AM/PM <code>A</code></td>
<td>'HH:mm:ss'</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>用户确认选定的值时触发</td>
<td>组件绑定值</td>
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
<td>-</td>
</tr>
</tbody>
</table>
