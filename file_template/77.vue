<h2 id="pageheader"><a class="header-anchor" href="#pageheader">¶</a> PageHeader</h2>
<p>If path of the page is simple, it is recommended to use PageHeader instead of the Breadcrumb.</p>
<h3 id="basic"><a class="header-anchor" href="#basic">¶</a> Basic</h3>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-page-header @back=&quot;goBack&quot; content=&quot;detail&quot;&gt;
&lt;/el-page-header&gt;

&lt;script&gt;
  export default {
    methods: {
      goBack() {
        console.log('go back');
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
<td>title</td>
<td>main title</td>
<td>string</td>
<td>—</td>
<td>Back</td>
</tr>
<tr>
<td>content</td>
<td>content</td>
<td>string</td>
<td>—</td>
<td>—</td>
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
<td>back</td>
<td>triggers when right side is clicked</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>slot</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>title content</td>
</tr>
<tr>
<td>content</td>
<td>content</td>
</tr>
</tbody>
</table>
