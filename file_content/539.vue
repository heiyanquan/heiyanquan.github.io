<h2 id="alert-jing-gao"><a class="header-anchor" href="#alert-jing-gao">¶</a> Alert 警告</h2>
<p>用于页面中展示重要的提示信息。</p>
<h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa">¶</a> 基本用法</h3>
<p>页面中的非浮层元素，不会自动消失。</p>
<demo-block>
        <div><p>Alert 组件提供四种主题，由<code>type</code>属性指定，默认值为<code>info</code>。</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="成功提示的文案"
    type="success">
  </el-alert>
  <el-alert
    title="消息提示的文案"
    type="info">
  </el-alert>
  <el-alert
    title="警告提示的文案"
    type="warning">
  </el-alert>
  <el-alert
    title="错误提示的文案"
    type="error">
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;成功提示的文案&quot;
    type=&quot;success&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;消息提示的文案&quot;
    type=&quot;info&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;警告提示的文案&quot;
    type=&quot;warning&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;错误提示的文案&quot;
    type=&quot;error&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="zhu-ti"><a class="header-anchor" href="#zhu-ti">¶</a> 主题</h3>
<p>Alert 组件提供了两个不同的主题：<code>light</code>和<code>dark</code>。</p>
<demo-block>
        <div><p>通过设置<code>effect</code>属性来改变主题，默认为<code>light</code>。</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="成功提示的文案"
    type="success"
    effect="dark">
  </el-alert>
  <el-alert
    title="消息提示的文案"
    type="info"
    effect="dark">
  </el-alert>
  <el-alert
    title="警告提示的文案"
    type="warning"
    effect="dark">
  </el-alert>
  <el-alert
    title="错误提示的文案"
    type="error"
    effect="dark">
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;成功提示的文案&quot;
    type=&quot;success&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;消息提示的文案&quot;
    type=&quot;info&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;警告提示的文案&quot;
    type=&quot;warning&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;错误提示的文案&quot;
    type=&quot;error&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-guan-bi-an-niu"><a class="header-anchor" href="#zi-ding-yi-guan-bi-an-niu">¶</a> 自定义关闭按钮</h3>
<p>自定义关闭按钮为文字或其他符号。</p>
<demo-block>
        <div><p>在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。<code>closable</code>属性决定是否可关闭，接受<code>boolean</code>，默认为<code>true</code>。你可以设置<code>close-text</code>属性来代替右侧的关闭图标，注意：<code>close-text</code>必须为文本。设置<code>close</code>事件来设置关闭时的回调。</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="不可关闭的 alert"
    type="success"
    :closable="false">
  </el-alert>
  <el-alert
    title="自定义 close-text"
    type="info"
    close-text="知道了">
  </el-alert>
  <el-alert
    title="设置了回调的 alert"
    type="warning"
    @close="hello">
  </el-alert>
</template>

<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;不可关闭的 alert&quot;
    type=&quot;success&quot;
    :closable=&quot;false&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;自定义 close-text&quot;
    type=&quot;info&quot;
    close-text=&quot;知道了&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;设置了回调的 alert&quot;
    type=&quot;warning&quot;
    @close=&quot;hello&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-you-icon"><a class="header-anchor" href="#dai-you-icon">¶</a> 带有 icon</h3>
<p>表示某种状态时提升可读性。</p>
<demo-block>
        <div><p>通过设置<code>show-icon</code>属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="成功提示的文案"
    type="success"
    show-icon>
  </el-alert>
  <el-alert
    title="消息提示的文案"
    type="info"
    show-icon>
  </el-alert>
  <el-alert
    title="警告提示的文案"
    type="warning"
    show-icon>
  </el-alert>
  <el-alert
    title="错误提示的文案"
    type="error"
    show-icon>
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;成功提示的文案&quot;
    type=&quot;success&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;消息提示的文案&quot;
    type=&quot;info&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;警告提示的文案&quot;
    type=&quot;warning&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;错误提示的文案&quot;
    type=&quot;error&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="wen-zi-ju-zhong"><a class="header-anchor" href="#wen-zi-ju-zhong">¶</a> 文字居中</h3>
<p>使用 <code>center</code> 属性让文字水平居中。</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-alert
    title="成功提示的文案"
    type="success"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="消息提示的文案"
    type="info"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="警告提示的文案"
    type="warning"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="错误提示的文案"
    type="error"
    center
    show-icon>
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;成功提示的文案&quot;
    type=&quot;success&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;消息提示的文案&quot;
    type=&quot;info&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;警告提示的文案&quot;
    type=&quot;warning&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;错误提示的文案&quot;
    type=&quot;error&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="dai-you-fu-zhu-xing-wen-zi-jie-shao"><a class="header-anchor" href="#dai-you-fu-zhu-xing-wen-zi-jie-shao">¶</a> 带有辅助性文字介绍</h3>
<p>包含标题和内容，解释更详细的警告。</p>
<demo-block>
        <div><p>除了必填的<code>title</code>属性外，你可以设置<code>description</code>属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="带辅助性文字介绍"
    type="success"
    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;带辅助性文字介绍&quot;
    type=&quot;success&quot;
    description=&quot;这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao"><a class="header-anchor" href="#dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao">¶</a> 带有 icon 和辅助性文字介绍</h3>
<demo-block>
        <div><p>最后，这是一个同时具有 icon 和辅助性文字的样例。</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="成功提示的文案"
    type="success"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
  <el-alert
    title="消息提示的文案"
    type="info"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
  <el-alert
    title="警告提示的文案"
    type="warning"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
  <el-alert
    title="错误提示的文案"
    type="error"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;成功提示的文案&quot;
    type=&quot;success&quot;
    description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;消息提示的文案&quot;
    type=&quot;info&quot;
    description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;警告提示的文案&quot;
    type=&quot;warning&quot;
    description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;错误提示的文案&quot;
    type=&quot;error&quot;
    description=&quot;文字说明文字说明文字说明文字说明文字说明文字说明&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
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
<td>title</td>
<td>标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>主题</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>info</td>
</tr>
<tr>
<td>description</td>
<td>辅助性文字。也可通过默认 slot 传入</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>是否可关闭</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>center</td>
<td>文字是否居中</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>close-text</td>
<td>关闭按钮自定义文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-icon</td>
<td>是否显示图标</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>effect</td>
<td>选择提供的主题</td>
<td>string</td>
<td>light/dark</td>
<td>light</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>描述</td>
</tr>
<tr>
<td>title</td>
<td>标题的内容</td>
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
<td>close</td>
<td>关闭alert时触发的事件</td>
<td>—</td>
</tr>
</tbody>
</table>
