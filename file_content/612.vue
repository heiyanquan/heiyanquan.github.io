<h2 id="tag-biao-qian"><a class="header-anchor" href="#tag-biao-qian">¶</a> Tag 标签</h2>
<p>用于标记和选择。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        <div><p>由<code>type</code>属性来选择tag的类型，也可以通过<code>color</code>属性来自定义背景色。</p>
</div>
        <!--element-demo: <el-tag>标签一</el-tag>
<el-tag type="success">标签二</el-tag>
<el-tag type="info">标签三</el-tag>
<el-tag type="warning">标签四</el-tag>
<el-tag type="danger">标签五</el-tag>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tag&gt;标签一&lt;/el-tag&gt;
&lt;el-tag type=&quot;success&quot;&gt;标签二&lt;/el-tag&gt;
&lt;el-tag type=&quot;info&quot;&gt;标签三&lt;/el-tag&gt;
&lt;el-tag type=&quot;warning&quot;&gt;标签四&lt;/el-tag&gt;
&lt;el-tag type=&quot;danger&quot;&gt;标签五&lt;/el-tag&gt;
</code></pre></template></demo-block><h3 id="ke-yi-chu-biao-qian"><a class="header-anchor" href="#ke-yi-chu-biao-qian">¶</a> 可移除标签</h3>
<demo-block>
        <div><p>设置<code>closable</code>属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置<code>disable-transitions</code>属性，它接受一个<code>Boolean</code>，true 为关闭。</p>
</div>
        <!--element-demo: <el-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</el-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tag
  v-for=&quot;tag in tags&quot;
  :key=&quot;tag.name&quot;
  closable
  :type=&quot;tag.type&quot;&gt;
  {{tag.name}}
&lt;/el-tag&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dong-tai-bian-ji-biao-qian"><a class="header-anchor" href="#dong-tai-bian-ji-biao-qian">¶</a> 动态编辑标签</h3>
<p>动态编辑标签可以通过点击标签关闭按钮后触发的 <code>close</code> 事件来实现</p>
<demo-block>
        
        <!--element-demo: <el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tag
  :key=&quot;tag&quot;
  v-for=&quot;tag in dynamicTags&quot;
  closable
  :disable-transitions=&quot;false&quot;
  @close=&quot;handleClose(tag)&quot;&gt;
  {{tag}}
&lt;/el-tag&gt;
&lt;el-input
  class=&quot;input-new-tag&quot;
  v-if=&quot;inputVisible&quot;
  v-model=&quot;inputValue&quot;
  ref=&quot;saveTagInput&quot;
  size=&quot;small&quot;
  @keyup.enter.native=&quot;handleInputConfirm&quot;
  @blur=&quot;handleInputConfirm&quot;
&gt;
&lt;/el-input&gt;
&lt;el-button v-else class=&quot;button-new-tag&quot; size=&quot;small&quot; @click=&quot;showInput&quot;&gt;+ New Tag&lt;/el-button&gt;

&lt;style&gt;
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ =&gt; {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-tong-chi-cun"><a class="header-anchor" href="#bu-tong-chi-cun">¶</a> 不同尺寸</h3>
<p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
<demo-block>
        <div><p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p>
</div>
        <!--element-demo: <el-tag closable>默认标签</el-tag>
<el-tag size="medium" closable>中等标签</el-tag>
<el-tag size="small" closable>小型标签</el-tag>
<el-tag size="mini" closable>超小标签</el-tag>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tag closable&gt;默认标签&lt;/el-tag&gt;
&lt;el-tag size=&quot;medium&quot; closable&gt;中等标签&lt;/el-tag&gt;
&lt;el-tag size=&quot;small&quot; closable&gt;小型标签&lt;/el-tag&gt;
&lt;el-tag size=&quot;mini&quot; closable&gt;超小标签&lt;/el-tag&gt;
</code></pre></template></demo-block><h3 id="bu-tong-zhu-ti"><a class="header-anchor" href="#bu-tong-zhu-ti">¶</a> 不同主题</h3>
<p>Tag 组件提供了三个不同的主题：<code>dark</code>、<code>light</code> 和 <code>plain</code></p>
<demo-block>
        <div><p>通过设置<code>effect</code>属性来改变主题，默认为 <code>light</code></p>
</div>
        <!--element-demo: <div class="tag-group">
  <span class="tag-group__title">Dark</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="dark">
    {{ item.label }}
  </el-tag>
</div>
<div class="tag-group">
  <span class="tag-group__title">Plain</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain">
    {{ item.label }}
  </el-tag>
</div>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;tag-group&quot;&gt;
  &lt;span class=&quot;tag-group__title&quot;&gt;Dark&lt;/span&gt;
  &lt;el-tag
    v-for=&quot;item in items&quot;
    :key=&quot;item.label&quot;
    :type=&quot;item.type&quot;
    effect=&quot;dark&quot;&gt;
    {{ item.label }}
  &lt;/el-tag&gt;
&lt;/div&gt;
&lt;div class=&quot;tag-group&quot;&gt;
  &lt;span class=&quot;tag-group__title&quot;&gt;Plain&lt;/span&gt;
  &lt;el-tag
    v-for=&quot;item in items&quot;
    :key=&quot;item.label&quot;
    :type=&quot;item.type&quot;
    effect=&quot;plain&quot;&gt;
    {{ item.label }}
  &lt;/el-tag&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
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
<td>type</td>
<td>类型</td>
<td>string</td>
<td>success/info/warning/danger</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>是否可关闭</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disable-transitions</td>
<td>是否禁用渐变动画</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hit</td>
<td>是否有边框描边</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>color</td>
<td>背景色</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>effect</td>
<td>主题</td>
<td>string</td>
<td>dark / light / plain</td>
<td>light</td>
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
<td>click</td>
<td>点击 Tag 时触发的事件</td>
<td>—</td>
</tr>
<tr>
<td>close</td>
<td>关闭 Tag 时触发的事件</td>
<td>—</td>
</tr>
</tbody>
</table>
