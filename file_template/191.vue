<h2 id="avatar-avatar"><a class="header-anchor" href="#avatar-avatar">¶</a> Avatar avatar</h2>
<p>Avatars can be used to represent people or objects. It supports images, Icons, or characters.</p>
<h3 id="basic"><a class="header-anchor" href="#basic">¶</a> Basic</h3>
<p>use <code>shape</code> and <code>size</code> prop to set avatar's shape and size</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-row class=&quot;demo-avatar demo-basic&quot;&gt;
    &lt;el-col :span=&quot;12&quot;&gt;
      &lt;div class=&quot;sub-title&quot;&gt;circle&lt;/div&gt;
      &lt;div class=&quot;demo-basic--circle&quot;&gt;
        &lt;div class=&quot;block&quot;&gt;&lt;el-avatar :size=&quot;50&quot; :src=&quot;circleUrl&quot;&gt;&lt;/el-avatar&gt;&lt;/div&gt;
        &lt;div class=&quot;block&quot; v-for=&quot;size in sizeList&quot; :key=&quot;size&quot;&gt;
          &lt;el-avatar :size=&quot;size&quot; :src=&quot;circleUrl&quot;&gt;&lt;/el-avatar&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-col&gt;  
    &lt;el-col :span=&quot;12&quot;&gt;
      &lt;div class=&quot;sub-title&quot;&gt;square&lt;/div&gt;
      &lt;div class=&quot;demo-basic--circle&quot;&gt;
        &lt;div class=&quot;block&quot;&gt;&lt;el-avatar shape=&quot;square&quot; :size=&quot;50&quot; :src=&quot;squareUrl&quot;&gt;&lt;/el-avatar&gt;&lt;/div&gt;
        &lt;div class=&quot;block&quot; v-for=&quot;size in sizeList&quot; :key=&quot;size&quot;&gt;
          &lt;el-avatar shape=&quot;square&quot; :size=&quot;size&quot; :src=&quot;squareUrl&quot;&gt;&lt;/el-avatar&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-col&gt; 
  &lt;/el-row&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        circleUrl: &quot;https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png&quot;,
        squareUrl: &quot;https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png&quot;,
        sizeList: [&quot;large&quot;, &quot;medium&quot;, &quot;small&quot;]
      }
    }
  }
&lt;/script&gt;

</code></pre></template></demo-block><h3 id="types"><a class="header-anchor" href="#types">¶</a> Types</h3>
<p>It supports images, Icons, or characters</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;demo-type&quot;&gt;
    &lt;div&gt;
      &lt;el-avatar icon=&quot;el-icon-user-solid&quot;&gt;&lt;/el-avatar&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;el-avatar src=&quot;https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png&quot;&gt;&lt;/el-avatar&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;el-avatar&gt; user &lt;/el-avatar&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="fallback-when-image-load-error"><a class="header-anchor" href="#fallback-when-image-load-error">¶</a> Fallback when image load error</h3>
<p>fallback when image load error</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;demo-type&quot;&gt;
    &lt;el-avatar :size=&quot;60&quot; src=&quot;https://empty&quot; @error=&quot;errorHandler&quot;&gt;
      &lt;img src=&quot;https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png&quot;/&gt;
      &lt;/el-avatar&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
&lt;/script&gt;

</code></pre></template></demo-block><h3 id="how-the-image-fit-its-container"><a class="header-anchor" href="#how-the-image-fit-its-container">¶</a> How the image fit its container</h3>
<p>Set how the image fit its container for an image avatar, same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;demo-fit&quot;&gt;
    &lt;div class=&quot;block&quot; v-for=&quot;fit in fits&quot; :key=&quot;fit&quot;&gt;
        &lt;span class=&quot;title&quot;&gt;{{ fit }}&lt;/span&gt;
        &lt;el-avatar shape=&quot;square&quot; :size=&quot;100&quot; :fit=&quot;fit&quot; :src=&quot;url&quot;&gt;&lt;/el-avatar&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
<td>icon</td>
<td>set representation type to Icon, more info on Icon Component</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>set avatar size</td>
<td>number/string</td>
<td>number / large / medium / small</td>
<td>large</td>
</tr>
<tr>
<td>shape</td>
<td>set avatar shape</td>
<td>string</td>
<td>circle / square</td>
<td>circle</td>
</tr>
<tr>
<td>src</td>
<td>the address of the image for an image avatar</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>srcSet</td>
<td>A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>alt</td>
<td>This attribute defines an alternative text description of the image</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fit</td>
<td>set how the image fit its container for an image avatar</td>
<td>string</td>
<td>fill / contain / cover / none / scale-down</td>
<td>cover</td>
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
<td>error</td>
<td>handler when img load error, return false to prevent default fallback behavior</td>
<td>(e: Event)</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<p>| Slot Name | Description |
| default  | customize avatar content |</p>
