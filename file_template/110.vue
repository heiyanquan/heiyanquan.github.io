<h2 id="image"><a class="header-anchor" href="#image">¶</a> Image</h2>
<p>Besides the native features of img, support lazy load, custom placeholder and load failure, etc.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic Usage</h3>
<demo-block>
        <div><p>Indicate how the image should be resized to fit its container by <code>fit</code>, same as native <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image&quot;&gt;
  &lt;div class=&quot;block&quot; v-for=&quot;fit in fits&quot; :key=&quot;fit&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;{{ fit }}&lt;/span&gt;
    &lt;el-image
      style=&quot;width: 100px; height: 100px&quot;
      :src=&quot;url&quot;
      :fit=&quot;fit&quot;&gt;&lt;/el-image&gt;
  &lt;/div&gt;
&lt;/div&gt;

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
</code></pre></template></demo-block><h3 id="placeholder"><a class="header-anchor" href="#placeholder">¶</a> Placeholder</h3>
<demo-block>
        <div><p>Custom placeholder content when image hasn't loaded yet by <code>slot = placeholder</code></p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__placeholder&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-image :src=&quot;src&quot;&gt;&lt;/el-image&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Custom&lt;/span&gt;
    &lt;el-image :src=&quot;src&quot;&gt;
      &lt;div slot=&quot;placeholder&quot; class=&quot;image-slot&quot;&gt;
        Loading&lt;span class=&quot;dot&quot;&gt;...&lt;/span&gt;
      &lt;/div&gt;
    &lt;/el-image&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="load-failed"><a class="header-anchor" href="#load-failed">¶</a> Load Failed</h3>
<demo-block>
        <div><p>Custom failed content when error occurs to image load by <code>slot = error</code></p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__error&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-image&gt;&lt;/el-image&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Custom&lt;/span&gt;
    &lt;el-image&gt;
      &lt;div slot=&quot;error&quot; class=&quot;image-slot&quot;&gt;
        &lt;i class=&quot;el-icon-picture-outline&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
    &lt;/el-image&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="lazy-load"><a class="header-anchor" href="#lazy-load">¶</a> Lazy Load</h3>
<demo-block>
        <div><p>Use lazy load by <code>lazy = true</code>. Image will load until scroll into view when set. You can indicate scroll container that adds scroll listener to by <code>scroll-container</code>. If undefined, will be the nearest parent container whose overflow property is auto or scroll.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__lazy&quot;&gt;
  &lt;el-image v-for=&quot;url in urls&quot; :key=&quot;url&quot; :src=&quot;url&quot; lazy&gt;&lt;/el-image&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="image-preview"><a class="header-anchor" href="#image-preview">¶</a> Image Preview</h3>
<demo-block>
        <div><p>allow big image preview by setting <code>previewSrcList</code> prop.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__preview&quot;&gt;
  &lt;el-image 
    style=&quot;width: 100px; height: 100px&quot;
    :src=&quot;url&quot; 
    :preview-src-list=&quot;srcList&quot;&gt;
  &lt;/el-image&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
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
<th>Accepted values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td>Image source, same as native</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>fit</td>
<td>Indicate how the image should be resized to fit its container, same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a></td>
<td>string</td>
<td>fill / contain / cover / none / scale-down</td>
<td>-</td>
</tr>
<tr>
<td>alt</td>
<td>Native alt</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>referrer-policy</td>
<td>Native referrerPolicy</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>lazy</td>
<td>Whether to use lazy load</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>scroll-container</td>
<td>The container to add scroll listener when using lazy load</td>
<td>string / HTMLElement</td>
<td>—</td>
<td>The nearest parent container whose overflow property is auto or scroll</td>
</tr>
<tr>
<td>preview-src-list</td>
<td>allow big image preview</td>
<td>Array</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>z-index</td>
<td>set image preview z-index</td>
<td>Number</td>
<td>—</td>
<td>2000</td>
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
<td>load</td>
<td>Same as native load</td>
<td>(e: Event)</td>
</tr>
<tr>
<td>error</td>
<td>Same as native error</td>
<td>(e: Error)</td>
</tr>
</tbody>
</table>
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>Slot Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>placeholder</td>
<td>Triggers when image load</td>
</tr>
<tr>
<td>error</td>
<td>Triggers when image load failed</td>
</tr>
</tbody>
</table>
