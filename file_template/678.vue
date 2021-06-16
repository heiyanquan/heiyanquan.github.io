<h2 id="progress-jin-du-tiao"><a class="header-anchor" href="#progress-jin-du-tiao">¶</a> Progress 进度条</h2>
<p>用于展示操作进度，告知用户当前状态和预期。</p>
<h3 id="xian-xing-jin-du-tiao"><a class="header-anchor" href="#xian-xing-jin-du-tiao">¶</a> 线形进度条</h3>
<demo-block>
        <div><p>Progress 组件设置<code>percentage</code>属性即可，表示进度条对应的百分比，<strong>必填</strong>，必须在 0-100。通过 <code>format</code> 属性来指定进度条文字内容。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :percentage=&quot;50&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; :format=&quot;format&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;

&lt;script&gt;
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bai-fen-bi-nei-xian"><a class="header-anchor" href="#bai-fen-bi-nei-xian">¶</a> 百分比内显</h3>
<p>百分比不占用额外控件，适用于文件上传等场景。</p>
<demo-block>
        <div><p>Progress 组件可通过 <code>stroke-width</code> 属性更改进度条的高度，并可通过 <code>text-inside</code> 属性来将进度条描述置于进度条内部。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;26&quot; :percentage=&quot;70&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;24&quot; :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;22&quot; :percentage=&quot;80&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;20&quot; :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-yan-se"><a class="header-anchor" href="#zi-ding-yi-yan-se">¶</a> 自定义颜色</h3>
<p>可以通过 <code>color</code> 设置进度条的颜色，<code>color</code> 可以接受颜色字符串，函数和数组。</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColor&quot;&gt;&lt;/el-progress&gt;

&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColorMethod&quot;&gt;&lt;/el-progress&gt;

&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColors&quot;&gt;&lt;/el-progress&gt;
&lt;div&gt;
  &lt;el-button-group&gt;
    &lt;el-button icon=&quot;el-icon-minus&quot; @click=&quot;decrease&quot;&gt;&lt;/el-button&gt;
    &lt;el-button icon=&quot;el-icon-plus&quot; @click=&quot;increase&quot;&gt;&lt;/el-button&gt;
  &lt;/el-button-group&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage &lt; 30) {
          return '#909399';
        } else if (percentage &lt; 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage &gt; 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage &lt; 0) {
          this.percentage = 0;
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="huan-xing-jin-du-tiao"><a class="header-anchor" href="#huan-xing-jin-du-tiao">¶</a> 环形进度条</h3>
<p>Progress 组件可通过 <code>type</code> 属性来指定使用环形进度条，在环形进度条中，还可以通过 <code>width</code> 属性来设置其大小。</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress type=&quot;circle&quot; :percentage=&quot;0&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;25&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;70&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;
</code></pre></template></demo-block><h3 id="yi-biao-pan-xing-jin-du-tiao"><a class="header-anchor" href="#yi-biao-pan-xing-jin-du-tiao">¶</a> 仪表盘形进度条</h3>
<demo-block>
        <div><p>通过 <code>type</code> 属性来指定使用仪表盘形进度条。</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">
&lt;el-progress type=&quot;dashboard&quot; :percentage=&quot;percentage&quot; :color=&quot;colors&quot;&gt;&lt;/el-progress&gt;
&lt;div&gt;
  &lt;el-button-group&gt;
    &lt;el-button icon=&quot;el-icon-minus&quot; @click=&quot;decrease&quot;&gt;&lt;/el-button&gt;
    &lt;el-button icon=&quot;el-icon-plus&quot; @click=&quot;increase&quot;&gt;&lt;/el-button&gt;
  &lt;/el-button-group&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage &gt; 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage &lt; 0) {
          this.percentage = 0;
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
<td><strong>percentage</strong></td>
<td><strong>百分比（必填）</strong></td>
<td>number</td>
<td>0-100</td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>进度条类型</td>
<td>string</td>
<td>line/circle/dashboard</td>
<td>line</td>
</tr>
<tr>
<td>stroke-width</td>
<td>进度条的宽度，单位 px</td>
<td>number</td>
<td>—</td>
<td>6</td>
</tr>
<tr>
<td>text-inside</td>
<td>进度条显示文字内置在进度条内（只在 type=line 时可用）</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>status</td>
<td>进度条当前状态</td>
<td>string</td>
<td>success/exception/warning</td>
<td>—</td>
</tr>
<tr>
<td>color</td>
<td>进度条背景色（会覆盖 status 状态颜色）</td>
<td>string/function/array</td>
<td>—</td>
<td>''</td>
</tr>
<tr>
<td>width</td>
<td>环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）</td>
<td>number</td>
<td></td>
<td>126</td>
</tr>
<tr>
<td>show-text</td>
<td>是否显示进度条文字内容</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>stroke-linecap</td>
<td>circle/dashboard 类型路径两端的形状</td>
<td>string</td>
<td>butt/round/square</td>
<td>round</td>
</tr>
<tr>
<td>format</td>
<td>指定进度条文字内容</td>
<td>function(percentage)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
