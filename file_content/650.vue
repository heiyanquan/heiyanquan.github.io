<h2 id="inputnumber-ji-shu-qi"><a class="header-anchor" href="#inputnumber-ji-shu-qi">¶</a> InputNumber 计数器</h2>
<p>仅允许输入标准的数字值，可定义范围</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        <div><p>要使用它，只需要在<code>el-input-number</code>元素中使用<code>v-model</code>绑定变量即可，变量的初始值即为默认值。</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; @change=&quot;handleChange&quot; :min=&quot;1&quot; :max=&quot;10&quot; label=&quot;描述文字&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai">¶</a> 禁用状态</h3>
<demo-block>
        <div><p><code>disabled</code>属性接受一个<code>Boolean</code>，设置为<code>true</code>即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置<code>min</code>属性和<code>max</code>属性，不设置<code>min</code>和<code>max</code>时，最小值为 0。</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :disabled=&quot;true&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-shu"><a class="header-anchor" href="#bu-shu">¶</a> 步数</h3>
<p>允许定义递增递减的步数控制</p>
<demo-block>
        <div><p>设置<code>step</code>属性可以控制步长，接受一个<code>Number</code>。</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" :step="2"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 5
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :step=&quot;2&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 5
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="yan-ge-bu-shu"><a class="header-anchor" href="#yan-ge-bu-shu">¶</a> 严格步数</h3>
<demo-block>
        <div><p><code>step-strictly</code>属性接受一个<code>Boolean</code>。如果这个属性被设置为<code>true</code>，则只能输入步数的倍数。</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" :step="2" step-strictly></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 2
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :step=&quot;2&quot; step-strictly&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 2
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jing-du"><a class="header-anchor" href="#jing-du">¶</a> 精度</h3>
<demo-block>
        <div><p>设置 <code>precision</code> 属性可以控制数值精度，接收一个 <code>Number</code>。</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :precision=&quot;2&quot; :step=&quot;0.1&quot; :max=&quot;10&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p><code>precision</code> 的值必须是一个非负整数，并且不能小于 <code>step</code> 的小数位数。</p>
</div>
<h3 id="chi-cun"><a class="header-anchor" href="#chi-cun">¶</a> 尺寸</h3>
<p>额外提供了 <code>medium</code>、<code>small</code>、<code>mini</code> 三种尺寸的数字输入框</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-input-number v-model="num1"></el-input-number>
  <el-input-number size="medium" v-model="num2"></el-input-number>
  <el-input-number size="small" v-model="num3"></el-input-number>
  <el-input-number size="mini" v-model="num4"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num1&quot;&gt;&lt;/el-input-number&gt;
  &lt;el-input-number size=&quot;medium&quot; v-model=&quot;num2&quot;&gt;&lt;/el-input-number&gt;
  &lt;el-input-number size=&quot;small&quot; v-model=&quot;num3&quot;&gt;&lt;/el-input-number&gt;
  &lt;el-input-number size=&quot;mini&quot; v-model=&quot;num4&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="an-niu-wei-zhi"><a class="header-anchor" href="#an-niu-wei-zhi">¶</a> 按钮位置</h3>
<demo-block>
        <div><p>设置 <code>controls-position</code> 属性可以控制按钮位置。</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; controls-position=&quot;right&quot; @change=&quot;handleChange&quot; :min=&quot;1&quot; :max=&quot;10&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
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
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>min</td>
<td>设置计数器允许的最小值</td>
<td>number</td>
<td>—</td>
<td>-Infinity</td>
</tr>
<tr>
<td>max</td>
<td>设置计数器允许的最大值</td>
<td>number</td>
<td>—</td>
<td>Infinity</td>
</tr>
<tr>
<td>step</td>
<td>计数器步长</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>step-strictly</td>
<td>是否只能输入 step 的倍数</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>precision</td>
<td>数值精度</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>计数器尺寸</td>
<td>string</td>
<td>large, small</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用计数器</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>controls</td>
<td>是否使用控制按钮</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>controls-position</td>
<td>控制按钮位置</td>
<td>string</td>
<td>right</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>原生属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>输入框关联的label文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框默认 placeholder</td>
<td>string</td>
<td>-</td>
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
<td>change</td>
<td>绑定值被改变时触发</td>
<td>currentValue, oldValue</td>
</tr>
<tr>
<td>blur</td>
<td>在组件 Input 失去焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>在组件 Input 获得焦点时触发</td>
<td>(event: Event)</td>
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
<tr>
<td>select</td>
<td>选中 input 中的文字</td>
<td>—</td>
</tr>
</tbody>
</table>
