<h2 id="rate"><a class="header-anchor" href="#rate">¶</a> Rate</h2>
<p>Used for rating</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p>Rate divides rating scores into several levels and these levels can be distinguished by using different background colors. By default background colors are the same, but you can assign them an array with three element to reflect three levels using the <code>colors</code> attribute, and their two thresholds can be defined by <code>low-threshold</code> and <code>high-threshold</code>, or you can assign them with a object which key is the threshold between two levels and value is the corresponding color.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
  &lt;el-rate v-model=&quot;value1&quot;&gt;&lt;/el-rate&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Color for different levels&lt;/span&gt;
  &lt;el-rate
    v-model=&quot;value2&quot;
    :colors=&quot;colors&quot;&gt;
  &lt;/el-rate&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="with-text"><a class="header-anchor" href="#with-text">¶</a> With text</h3>
<p>Using text to indicate rating score</p>
<demo-block>
        <div><p>Add attribute <code>show-text</code> to display text at the right of Rate. You can assign texts for different scores using <code>texts</code>. <code>texts</code> is an array whose length should be equal to the max score <code>max</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  :texts=&quot;['oops', 'disappointed', 'normal', 'good', 'great']&quot;
  show-text&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="more-icons"><a class="header-anchor" href="#more-icons">¶</a> More icons</h3>
<p>You can use different icons to distinguish different rate components.</p>
<demo-block>
        <div><p>You can customize icons by passing <code>icon-classes</code> an array with three elements or a object which key is the threshold between two levels and value is the corresponding icon class. In this example, we also use <code>void-icon-class</code> to set the icon if it is unselected.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  :icon-classes=&quot;iconClasses&quot;
  void-icon-class=&quot;icon-rate-face-off&quot;
  :colors=&quot;['#99A9BF', '#F7BA2A', '#FF9900']&quot;&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null,
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="read-only"><a class="header-anchor" href="#read-only">¶</a> Read-only</h3>
<p>Read-only Rate is for displaying rating score. Half star is supported.</p>
<demo-block>
        <div><p>Use attribute <code>disabled</code> to make the component read-only. Add <code>show-score</code> to display the rating score at the right side. Additionally, you can use attribute <code>score-template</code> to provide a score template. It must contain <code>{value}</code>, and <code>{value}</code> will be replaced with the rating score.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  disabled
  show-score
  text-color=&quot;#ff9900&quot;
  score-template=&quot;{value} points&quot;&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 3.7
      }
    }
  }
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
<td>max</td>
<td>max rating score</td>
<td>number</td>
<td>—</td>
<td>5</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Rate is read-only</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-half</td>
<td>whether picking half start is allowed</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>low-threshold</td>
<td>threshold value between low and medium level. The value itself will be included in low level</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>high-threshold</td>
<td>threshold value between medium and high level. The value itself will be included in high level</td>
<td>number</td>
<td>—</td>
<td>4</td>
</tr>
<tr>
<td>colors</td>
<td>colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color</td>
<td>array/object</td>
<td>—</td>
<td>['#F7BA2A', '#F7BA2A', '#F7BA2A']</td>
</tr>
<tr>
<td>void-color</td>
<td>color of unselected icons</td>
<td>string</td>
<td>—</td>
<td>#C6D1DE</td>
</tr>
<tr>
<td>disabled-void-color</td>
<td>color of unselected read-only icons</td>
<td>string</td>
<td>—</td>
<td>#EFF2F7</td>
</tr>
<tr>
<td>icon-classes</td>
<td>class names of icons. If array, ot should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon class</td>
<td>array/object</td>
<td>—</td>
<td>['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']</td>
</tr>
<tr>
<td>void-icon-class</td>
<td>class name of unselected icons</td>
<td>string</td>
<td>—</td>
<td>el-icon-star-off</td>
</tr>
<tr>
<td>disabled-void-icon-class</td>
<td>class name of unselected read-only icons</td>
<td>string</td>
<td>—</td>
<td>el-icon-star-on</td>
</tr>
<tr>
<td>show-text</td>
<td>whether to display texts</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-score</td>
<td>whether to display current score. show-score and show-text cannot be true at the same time</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text-color</td>
<td>color of texts</td>
<td>string</td>
<td>—</td>
<td>#1F2D3D</td>
</tr>
<tr>
<td>texts</td>
<td>text array</td>
<td>array</td>
<td>—</td>
<td>['极差', '失望', '一般', '满意', '惊喜']</td>
</tr>
<tr>
<td>score-template</td>
<td>score template</td>
<td>string</td>
<td>—</td>
<td>{value}</td>
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
<td>Triggers when rate value is changed</td>
<td>value after changing</td>
</tr>
</tbody>
</table>
