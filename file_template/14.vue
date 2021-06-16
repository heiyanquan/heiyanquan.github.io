
<h2 id="typography"><a class="header-anchor" href="#typography">¶</a> Typography</h2>
<p>We create a font convention to ensure the best presentation across different platforms.</p>
<h3 id="font"><a class="header-anchor" href="#font">¶</a> Font</h3>
<div class="demo-term-box">
<img src="../../assets/images/term-pingfang.png" alt="">
<img src="../../assets/images/term-hiragino.png" alt="">
<img src="../../assets/images/term-microsoft.png" alt="">
<img src="../../assets/images/term-sf.png" alt="">
<img src="../../assets/images/term-helvetica.png" alt="">
<img src="../../assets/images/term-arial.png" alt="">
</div>
<h3 id="font-convention"><a class="header-anchor" href="#font-convention">¶</a> Font Convention</h3>
<table class="demo-typo-size">
  <tbody>
  <tr
    >
      <td>Level</td>
      <td>Font Size</td>
      <td class="color-dark-light">Demo</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_extra_small }"
    >
      <td>Supplementary text</td>
      <td class="color-dark-light">{{font_size_extra_small}} Extra Small</td>
      <td>Build with Element</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_small }"
    >
      <td>Body (small)</td>
      <td class="color-dark-light">{{font_size_small}} Small</td>
      <td>Build with Element</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_base }"
    >
      <td>Body</td>
      <td class="color-dark-light">{{font_size_base}} Base</td>
      <td>Build with Element</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_medium }"
    >
      <td >Small Title</td>
      <td class="color-dark-light">{{font_size_medium}} Medium</td>
      <td>Build with Element</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_large }"
    >
      <td>Title</td>
      <td class="color-dark-light">{{font_size_large}} large</td>
      <td>Build with Element</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_extra_large }"
    >
      <td>Main Title</td>
      <td class="color-dark-light">{{font_size_extra_large}} Extra large</td>
      <td>Build with Element</td>
    </tr>
  </tbody>
</table>
<h3 id="font-line-height"><a class="header-anchor" href="#font-line-height">¶</a> Font Line Height</h3>
<div>
<img class="lineH-left" src="~examples/assets/images/typography.png" />
<ul class="lineH-right">
<li>line-height:1 <span>No line height</span></li>
<li>line-height:1.3 <span>Compact</span></li>
<li>line-height:1.5 <span>Regular</span></li>
<li>line-height:1.7 <span>Loose</span></li>
</ul>
</div>
<h3 id="font-family"><a class="header-anchor" href="#font-family">¶</a> Font-family</h3>
<pre><code class="language-css">font-family: &quot;Helvetica Neue&quot;,Helvetica,&quot;PingFang SC&quot;,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;微软雅黑&quot;,Arial,sans-serif;
</code></pre>
