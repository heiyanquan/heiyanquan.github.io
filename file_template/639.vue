<h2 id="timeline-shi-jian-xian"><a class="header-anchor" href="#timeline-shi-jian-xian">¶</a> Timeline 时间线</h2>
<p>可视化地呈现时间流信息。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>Timeline 可拆分成多个按照时间戳正序或倒序排列的 activity，时间戳是其区分于其他控件的重要特征，使⽤时注意与 Steps 步骤条等区分。</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;div class=&quot;radio&quot;&gt;
    排序：
    &lt;el-radio-group v-model=&quot;reverse&quot;&gt;
      &lt;el-radio :label=&quot;true&quot;&gt;倒序&lt;/el-radio&gt;
      &lt;el-radio :label=&quot;false&quot;&gt;正序&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;

  &lt;el-timeline :reverse=&quot;reverse&quot;&gt;
    &lt;el-timeline-item
      v-for=&quot;(activity, index) in activities&quot;
      :key=&quot;index&quot;
      :timestamp=&quot;activity.timestamp&quot;&gt;
      {{activity.content}}
    &lt;/el-timeline-item&gt;
  &lt;/el-timeline&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        reverse: true,
        activities: [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ding-yi-jie-dian-yang-shi"><a class="header-anchor" href="#ding-yi-jie-dian-yang-shi">¶</a> ⾃定义节点样式</h3>
<p>可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;el-timeline&gt;
    &lt;el-timeline-item
      v-for=&quot;(activity, index) in activities&quot;
      :key=&quot;index&quot;
      :icon=&quot;activity.icon&quot;
      :type=&quot;activity.type&quot;
      :color=&quot;activity.color&quot;
      :size=&quot;activity.size&quot;
      :timestamp=&quot;activity.timestamp&quot;&gt;
      {{activity.content}}
    &lt;/el-timeline-item&gt;
  &lt;/el-timeline&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ding-yi-shi-jian-chuo"><a class="header-anchor" href="#ding-yi-shi-jian-chuo">¶</a> ⾃定义时间戳</h3>
<p>当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;el-timeline&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/12&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;更新 Github 模板&lt;/h4&gt;
        &lt;p&gt;王小虎 提交于 2018/4/12 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/3&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;更新 Github 模板&lt;/h4&gt;
        &lt;p&gt;王小虎 提交于 2018/4/3 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/2&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;更新 Github 模板&lt;/h4&gt;
        &lt;p&gt;王小虎 提交于 2018/4/2 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
  &lt;/el-timeline&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="timeline-attributes"><a class="header-anchor" href="#timeline-attributes">¶</a> Timeline Attributes</h3>
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
<td>reverse</td>
<td>指定节点排序方向，默认为正序</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="timeline-item-attributes"><a class="header-anchor" href="#timeline-item-attributes">¶</a> Timeline-item Attributes</h3>
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
<td>timestamp</td>
<td>时间戳</td>
<td>string</td>
<td>-</td>
<td>—</td>
</tr>
<tr>
<td>hide-timestamp</td>
<td>是否隐藏时间戳</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>时间戳位置</td>
<td>string</td>
<td>top / bottom</td>
<td>bottom</td>
</tr>
<tr>
<td>type</td>
<td>节点类型</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>节点颜色</td>
<td>string</td>
<td>hsl / hsv / hex / rgb</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>节点尺寸</td>
<td>string</td>
<td>normal / large</td>
<td>normal</td>
</tr>
<tr>
<td>icon</td>
<td>节点图标</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="timeline-item-slot"><a class="header-anchor" href="#timeline-item-slot">¶</a> Timeline-Item Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Timeline-Item 的内容</td>
</tr>
<tr>
<td>dot</td>
<td>自定义节点</td>
</tr>
</tbody>
</table>
