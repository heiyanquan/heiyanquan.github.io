<h2 id="collapse-zhe-die-mian-ban"><a class="header-anchor" href="#collapse-zhe-die-mian-ban">¶</a> Collapse 折叠面板</h2>
<p>通过折叠面板收纳内容区域</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>可同时展开多个面板，面板之间不影响</p>
<demo-block>
        
        <!--element-demo: <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse v-model=&quot;activeNames&quot; @change=&quot;handleChange&quot;&gt;
  &lt;el-collapse-item title=&quot;一致性 Consistency&quot; name=&quot;1&quot;&gt;
    &lt;div&gt;与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；&lt;/div&gt;
    &lt;div&gt;在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;反馈 Feedback&quot; name=&quot;2&quot;&gt;
    &lt;div&gt;控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；&lt;/div&gt;
    &lt;div&gt;页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;效率 Efficiency&quot; name=&quot;3&quot;&gt;
    &lt;div&gt;简化流程：设计简洁直观的操作流程；&lt;/div&gt;
    &lt;div&gt;清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；&lt;/div&gt;
    &lt;div&gt;帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;可控 Controllability&quot; name=&quot;4&quot;&gt;
    &lt;div&gt;用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；&lt;/div&gt;
    &lt;div&gt;结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shou-feng-qin-xiao-guo"><a class="header-anchor" href="#shou-feng-qin-xiao-guo">¶</a> 手风琴效果</h3>
<p>每次只能展开一个面板</p>
<demo-block>
        <div><p>通过 <code>accordion</code> 属性来设置是否以手风琴模式显示。</p>
</div>
        <!--element-demo: <el-collapse v-model="activeName" accordion>
  <el-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse v-model=&quot;activeName&quot; accordion&gt;
  &lt;el-collapse-item title=&quot;一致性 Consistency&quot; name=&quot;1&quot;&gt;
    &lt;div&gt;与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；&lt;/div&gt;
    &lt;div&gt;在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;反馈 Feedback&quot; name=&quot;2&quot;&gt;
    &lt;div&gt;控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；&lt;/div&gt;
    &lt;div&gt;页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;效率 Efficiency&quot; name=&quot;3&quot;&gt;
    &lt;div&gt;简化流程：设计简洁直观的操作流程；&lt;/div&gt;
    &lt;div&gt;清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；&lt;/div&gt;
    &lt;div&gt;帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;可控 Controllability&quot; name=&quot;4&quot;&gt;
    &lt;div&gt;用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；&lt;/div&gt;
    &lt;div&gt;结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-mian-ban-biao-ti"><a class="header-anchor" href="#zi-ding-yi-mian-ban-biao-ti">¶</a> 自定义面板标题</h3>
<p>除了可以通过 <code>title</code> 属性以外，还可以通过具名 <code>slot</code> 来实现自定义面板的标题内容，以实现增加图标等效果。</p>
<demo-block>
        
        <!--element-demo: <el-collapse accordion>
  <el-collapse-item>
    <template slot="title">
      一致性 Consistency<i class="header-icon el-icon-info"></i>
    </template>
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse accordion&gt;
  &lt;el-collapse-item&gt;
    &lt;template slot=&quot;title&quot;&gt;
      一致性 Consistency&lt;i class=&quot;header-icon el-icon-info&quot;&gt;&lt;/i&gt;
    &lt;/template&gt;
    &lt;div&gt;与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；&lt;/div&gt;
    &lt;div&gt;在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;反馈 Feedback&quot;&gt;
    &lt;div&gt;控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；&lt;/div&gt;
    &lt;div&gt;页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;效率 Efficiency&quot;&gt;
    &lt;div&gt;简化流程：设计简洁直观的操作流程；&lt;/div&gt;
    &lt;div&gt;清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；&lt;/div&gt;
    &lt;div&gt;帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;可控 Controllability&quot;&gt;
    &lt;div&gt;用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；&lt;/div&gt;
    &lt;div&gt;结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
</code></pre></template></demo-block><h3 id="collapse-attributes"><a class="header-anchor" href="#collapse-attributes">¶</a> Collapse Attributes</h3>
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
<td>当前激活的面板(如果是手风琴模式，绑定值类型需要为<code>string</code>，否则为<code>array</code>)</td>
<td>string / array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>accordion</td>
<td>是否手风琴模式</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="collapse-events"><a class="header-anchor" href="#collapse-events">¶</a> Collapse Events</h3>
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
<td>当前激活面板改变时触发(如果是手风琴模式，参数 <code>activeNames</code> 类型为<code>string</code>，否则为<code>array</code>)</td>
<td>(activeNames: array / string)</td>
</tr>
</tbody>
</table>
<h3 id="collapse-item-attributes"><a class="header-anchor" href="#collapse-item-attributes">¶</a> Collapse Item Attributes</h3>
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
<td>name</td>
<td>唯一标志符</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>title</td>
<td>面板标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
