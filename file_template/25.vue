<h2 id="timeline"><a class="header-anchor" href="#timeline">¶</a> Timeline</h2>
<p>Visually display timeline.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Timeline can be split into multiple activities in ascending or descending. Timestamps are important features that distinguish them from other components. Note the difference with Steps.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;div class=&quot;radio&quot;&gt;
    Order: 
    &lt;el-radio-group v-model=&quot;reverse&quot;&gt;
      &lt;el-radio :label=&quot;true&quot;&gt;descending&lt;/el-radio&gt;
      &lt;el-radio :label=&quot;false&quot;&gt;ascending&lt;/el-radio&gt;
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
          content: 'Event start',
          timestamp: '2018-04-15'
        }, {
          content: 'Approved',
          timestamp: '2018-04-13'
        }, {
          content: 'Success',
          timestamp: '2018-04-11'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="custom-node"><a class="header-anchor" href="#custom-node">¶</a> Custom node</h3>
<p>Size, color, and icons can be customized in node.</p>
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
          content: 'Custom icon',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: 'Custom color',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: 'Custom size',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: 'Default node',
          timestamp: '2018-04-03 20:46'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="custom-timestamp"><a class="header-anchor" href="#custom-timestamp">¶</a> Custom timestamp</h3>
<p>Timestamp can be placed on top of content when content is too high.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;el-timeline&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/12&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;Update Github template&lt;/h4&gt;
        &lt;p&gt;Tom committed 2018/4/12 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/3&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;Update Github template&lt;/h4&gt;
        &lt;p&gt;Tom committed 2018/4/3 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/2&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;Update Github template&lt;/h4&gt;
        &lt;p&gt;Tom committed 2018/4/2 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
  &lt;/el-timeline&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="timeline-attributes"><a class="header-anchor" href="#timeline-attributes">¶</a> Timeline Attributes</h3>
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
<td>reverse</td>
<td>whether the node is ascending or descending, default is ascending</td>
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
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>timestamp</td>
<td>timestamp content</td>
<td>string</td>
<td>-</td>
<td>—</td>
</tr>
<tr>
<td>hide-timestamp</td>
<td>whether to show timestamp</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>position of timestamp</td>
<td>string</td>
<td>top / bottom</td>
<td>bottom</td>
</tr>
<tr>
<td>type</td>
<td>node type</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>background color of node</td>
<td>string</td>
<td>hsl / hsv / hex / rgb</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>node size</td>
<td>string</td>
<td>normal / large</td>
<td>normal</td>
</tr>
<tr>
<td>icon</td>
<td>icon class name</td>
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
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Custom content for timeline item</td>
</tr>
<tr>
<td>dot</td>
<td>Custom defined node</td>
</tr>
</tbody>
</table>
