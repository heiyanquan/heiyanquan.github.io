<h2 id="colorpicker-yan-se-xuan-ze-qi"><a class="header-anchor" href="#colorpicker-yan-se-xuan-ze-qi">¶</a> ColorPicker 颜色选择器</h2>
<p>用于颜色选择，支持多种格式。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        <div><p>使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。</p>
</div>
        <!--element-demo: <div class="block">
  <span class="demonstration">有默认值</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">无默认值</span>
  <el-color-picker v-model="color2"></el-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;有默认值&lt;/span&gt;
  &lt;el-color-picker v-model=&quot;color1&quot;&gt;&lt;/el-color-picker&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;无默认值&lt;/span&gt;
  &lt;el-color-picker v-model=&quot;color2&quot;&gt;&lt;/el-color-picker&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xuan-ze-tou-ming-du"><a class="header-anchor" href="#xuan-ze-tou-ming-du">¶</a> 选择透明度</h3>
<demo-block>
        <div><p>ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过<code>show-alpha</code>属性即可控制是否支持透明度的选择。</p>
</div>
        <!--element-demo: <el-color-picker v-model="color" show-alpha></el-color-picker>

<script>
  export default {
    data() {
      return {
        color: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker v-model=&quot;color&quot; show-alpha&gt;&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="yu-ding-yi-yan-se"><a class="header-anchor" href="#yu-ding-yi-yan-se">¶</a> 预定义颜色</h3>
<demo-block>
        <div><p>ColorPicker 支持预定义颜色</p>
</div>
        <!--element-demo: <el-color-picker
  v-model="color"
  show-alpha
  :predefine="predefineColors">
</el-color-picker>

<script>
  export default {
    data() {
      return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker
  v-model=&quot;color&quot;
  show-alpha
  :predefine=&quot;predefineColors&quot;&gt;
&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-tong-chi-cun"><a class="header-anchor" href="#bu-tong-chi-cun">¶</a> 不同尺寸</h3>
<demo-block>
        
        <!--element-demo: <el-color-picker v-model="color"></el-color-picker>
<el-color-picker v-model="color" size="medium"></el-color-picker>
<el-color-picker v-model="color" size="small"></el-color-picker>
<el-color-picker v-model="color" size="mini"></el-color-picker>

<script>
  export default {
    data() {
      return {
        color: '#409EFF'
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker v-model=&quot;color&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;medium&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;small&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;mini&quot;&gt;&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: '#409EFF'
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
<td>size</td>
<td>尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>show-alpha</td>
<td>是否支持透明度选择</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>color-format</td>
<td>写入 v-model 的颜色的格式</td>
<td>string</td>
<td>hsl / hsv / hex / rgb</td>
<td>hex（show-alpha 为 false）/ rgb（show-alpha 为 true）</td>
</tr>
<tr>
<td>popper-class</td>
<td>ColorPicker 下拉框的类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>predefine</td>
<td>预定义颜色</td>
<td>array</td>
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
<td>当绑定值变化时触发</td>
<td>当前值</td>
</tr>
<tr>
<td>active-change</td>
<td>面板中当前显示的颜色发生改变时触发</td>
<td>当前显示的颜色值</td>
</tr>
</tbody>
</table>
