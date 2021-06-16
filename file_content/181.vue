<h2 id="backtop"><a class="header-anchor" href="#backtop">¶</a> Backtop</h2>
<p>A button to back to top</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Scroll down to see the bottom-right button.</p>
<demo-block>
        
        <!--element-demo: <template>
  Scroll down to see the bottom-right button.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  Scroll down to see the bottom-right button.
  &lt;el-backtop target=&quot;.page-component__scroll .el-scrollbar__wrap&quot;&gt;&lt;/el-backtop&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="customizations"><a class="header-anchor" href="#customizations">¶</a> Customizations</h3>
<p>Display area is 40px * 40px.</p>
<demo-block>
        
        <!--element-demo: <template>
  Scroll down to see the bottom-right button.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  Scroll down to see the bottom-right button.
  &lt;el-backtop target=&quot;.page-component__scroll .el-scrollbar__wrap&quot; :bottom=&quot;100&quot;&gt;
    &lt;div
      style=&quot;{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }&quot;
    &gt;
      UP
    &lt;/div&gt;
  &lt;/el-backtop&gt;
&lt;/template&gt;
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
<td>target</td>
<td>the target to trigger scroll</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>visibility-height</td>
<td>the button will not show until the scroll height reaches this value</td>
<td>number</td>
<td></td>
<td>200</td>
</tr>
<tr>
<td>right</td>
<td>right distance</td>
<td>number</td>
<td></td>
<td>40</td>
</tr>
<tr>
<td>bottom</td>
<td>bottom distance</td>
<td>number</td>
<td></td>
<td>40</td>
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
<td>click</td>
<td>triggers when click</td>
<td>click event</td>
</tr>
</tbody>
</table>
