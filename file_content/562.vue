<h2 id="slider-hua-kuai"><a class="header-anchor" href="#slider-hua-kuai">¶</a> Slider 滑块</h2>
<p>通过拖动滑块在一个固定区间内进行选择</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>在拖动滑块时，显示当前值</p>
<demo-block>
        <div><p>通过设置绑定值自定义滑块的初始值</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;默认&lt;/span&gt;
    &lt;el-slider v-model=&quot;value1&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;自定义初始值&lt;/span&gt;
    &lt;el-slider v-model=&quot;value2&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;隐藏 Tooltip&lt;/span&gt;
    &lt;el-slider v-model=&quot;value3&quot; :show-tooltip=&quot;false&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;格式化 Tooltip&lt;/span&gt;
    &lt;el-slider v-model=&quot;value4&quot; :format-tooltip=&quot;formatTooltip&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;禁用&lt;/span&gt;
    &lt;el-slider v-model=&quot;value5&quot; disabled&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="chi-san-zhi"><a class="header-anchor" href="#chi-san-zhi">¶</a> 离散值</h3>
<p>选项可以是离散的</p>
<demo-block>
        <div><p>改变<code>step</code>的值可以改变步长，通过设置<code>show-stops</code>属性可以显示间断点</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">不显示间断点</span>
    <el-slider
      v-model="value1"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">显示间断点</span>
    <el-slider
      v-model="value2"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;不显示间断点&lt;/span&gt;
    &lt;el-slider
      v-model=&quot;value1&quot;
      :step=&quot;10&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;显示间断点&lt;/span&gt;
    &lt;el-slider
      v-model=&quot;value2&quot;
      :step=&quot;10&quot;
      show-stops&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-you-shu-ru-kuang"><a class="header-anchor" href="#dai-you-shu-ru-kuang">¶</a> 带有输入框</h3>
<p>通过输入框设置精确数值</p>
<demo-block>
        <div><p>设置<code>show-input</code>属性会在右侧显示一个输入框</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      show-input&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fan-wei-xuan-ze"><a class="header-anchor" href="#fan-wei-xuan-ze">¶</a> 范围选择</h3>
<p>支持选择某一数值范围</p>
<demo-block>
        <div><p>设置<code>range</code>即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      range
      show-stops
      :max=&quot;10&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shu-xiang-mo-shi"><a class="header-anchor" href="#shu-xiang-mo-shi">¶</a> 竖向模式</h3>
<demo-block>
        <div><p>设置<code>vertical</code>可使 Slider 变成竖向模式，此时必须设置高度<code>height</code>属性</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <el-slider
      v-model="value"
      vertical
      height="200px">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      vertical
      height=&quot;200px&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zhan-shi-biao-ji"><a class="header-anchor" href="#zhan-shi-biao-ji">¶</a> 展示标记</h3>
<demo-block>
        <div><p>设置 <code>marks</code> 属性可以展示标记</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      :marks="marks">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      range
      :marks=&quot;marks&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
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
<td>value / v-model</td>
<td>绑定值</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>min</td>
<td>最小值</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
<td>number</td>
<td>—</td>
<td>100</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>step</td>
<td>步长</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>show-input</td>
<td>是否显示输入框，仅在非范围选择时有效</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-input-controls</td>
<td>在显示输入框的情况下，是否显示输入框的控制按钮</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>input-size</td>
<td>输入框的尺寸</td>
<td>string</td>
<td>large / medium / small / mini</td>
<td>small</td>
</tr>
<tr>
<td>show-stops</td>
<td>是否显示间断点</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-tooltip</td>
<td>是否显示 tooltip</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>format-tooltip</td>
<td>格式化 tooltip message</td>
<td>function(value)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range</td>
<td>是否为范围选择</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>vertical</td>
<td>是否竖向模式</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>height</td>
<td>Slider 高度，竖向模式时必填</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>屏幕阅读器标签</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>debounce</td>
<td>输入时的去抖延迟，毫秒，仅在<code>show-input</code>等于true时有效</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>tooltip-class</td>
<td>tooltip 的自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>marks</td>
<td>标记， key 的类型必须为 number 且取值在闭区间 <code>[min, max]</code> 内，每个标记可以单独设置样式</td>
<td>object</td>
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
<td>值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）</td>
<td>改变后的值</td>
</tr>
<tr>
<td>input</td>
<td>数据改变时触发（使用鼠标拖曳时，活动过程实时触发）</td>
<td>改变后的值</td>
</tr>
</tbody>
</table>
