<h2 id="inputnumber"><a class="header-anchor" href="#inputnumber">¶</a> InputNumber</h2>
<p>Input numerical values with a customizable range.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p>Bind a variable to <code>v-model</code> in <code>&lt;el-input-number&gt;</code> element and you are set.</p>
</div>
        <!--element-demo: <template>
  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
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
        console.log(value)
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; @change=&quot;handleChange&quot; :min=&quot;1&quot; :max=&quot;10&quot;&gt;&lt;/el-input-number&gt;
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
        console.log(value)
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disabled"><a class="header-anchor" href="#disabled">¶</a> Disabled</h3>
<demo-block>
        <div><p>The <code>disabled</code> attribute accepts a <code>boolean</code>, and if the value is <code>true</code>, the component is disabled. If you just need to control the value within a range, you can add <code>min</code> attribute to set the minimum value and <code>max</code> to set the maximum value. By default, the minimum value is <code>0</code>.</p>
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
</code></pre></template></demo-block><h3 id="steps"><a class="header-anchor" href="#steps">¶</a> Steps</h3>
<p>Allows you to define incremental steps.</p>
<demo-block>
        <div><p>Add <code>step</code> attribute to set the step.</p>
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
</code></pre></template></demo-block><h3 id="step-strictly"><a class="header-anchor" href="#step-strictly">¶</a> Step strictly</h3>
<demo-block>
        <div><p>The <code>step-strictly</code> attribute accepts a <code>boolean</code>. if this attribute is <code>true</code>, input value can only be multiple of step.</p>
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
</code></pre></template></demo-block><h3 id="precision"><a class="header-anchor" href="#precision">¶</a> Precision</h3>
<demo-block>
        <div><p>Add <code>precision</code> attribute to set the precision of input value.</p>
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
<p>The value of <code>precision</code> must be a non negative integer and should not be less than the decimal places of <code>step</code>.</p>
</div>
<h3 id="size"><a class="header-anchor" href="#size">¶</a> Size</h3>
<p>Use attribute <code>size</code> to set additional sizes with <code>medium</code>, <code>small</code> or <code>mini</code>.</p>
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
</code></pre></template></demo-block><h3 id="controls-position"><a class="header-anchor" href="#controls-position">¶</a> Controls Position</h3>
<demo-block>
        <div><p>Set <code>controls-position</code> to decide the position of control buttons.</p>
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
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>value / v-model</td>
<td>binding value</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>min</td>
<td>the minimum allowed value</td>
<td>number</td>
<td>—</td>
<td><code>-Infinity</code></td>
</tr>
<tr>
<td>max</td>
<td>the maximum allowed value</td>
<td>number</td>
<td>—</td>
<td><code>Infinity</code></td>
</tr>
<tr>
<td>step</td>
<td>incremental step</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>step-strictly</td>
<td>whether input value can only be multiple of step</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>precision</td>
<td>precision of input value</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>size of the component</td>
<td>string</td>
<td>large/small</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether the component is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>controls</td>
<td>whether to enable the control buttons</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>controls-position</td>
<td>position of the control buttons</td>
<td>string</td>
<td>right</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>same as <code>name</code> in native input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>label text</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder in input</td>
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
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>triggers when the value changes</td>
<td>currentValue, oldValue</td>
</tr>
<tr>
<td>blur</td>
<td>triggers when Input blurs</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>triggers when Input focuses</td>
<td>(event: Event)</td>
</tr>
</tbody>
</table>
<h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>focus the Input component</td>
<td>-</td>
</tr>
<tr>
<td>select</td>
<td>select the text in input element</td>
<td>—</td>
</tr>
</tbody>
</table>
