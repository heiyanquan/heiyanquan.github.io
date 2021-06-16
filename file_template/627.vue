
<h2 id="typography-zi-ti"><a class="header-anchor" href="#typography-zi-ti">¶</a> Typography 字体</h2>
<p>我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</p>
<h3 id="zi-ti"><a class="header-anchor" href="#zi-ti">¶</a> 字体</h3>
<div class="demo-term-box">
<img src="../../assets/images/term-pingfang.png" alt="">
<img src="../../assets/images/term-hiragino.png" alt="">
<img src="../../assets/images/term-microsoft.png" alt="">
<img src="../../assets/images/term-sf.png" alt="">
<img src="../../assets/images/term-helvetica.png" alt="">
<img src="../../assets/images/term-arial.png" alt="">
</div>
<h3 id="zi-hao"><a class="header-anchor" href="#zi-hao">¶</a> 字号</h3>
<table class="demo-typo-size">
  <tbody>
  <tr
    >
      <td>层级</td>
      <td>字体大小</td>
      <td class="color-dark-light">举例</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_extra_small }"
    >
      <td>辅助文字</td>
      <td class="color-dark-light">{{font_size_extra_small}} Extra Small</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_small }"
    >
      <td>正文（小）</td>
      <td class="color-dark-light">{{font_size_small}} Small</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_base }"
    >
      <td>正文</td>
      <td class="color-dark-light">{{font_size_base}} Base</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_medium }"
    >
      <td>小标题</td>
      <td class="color-dark-light">{{font_size_medium}} Medium</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_large }"
    >
      <td>标题</td>
      <td class="color-dark-light">{{font_size_large}} large</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_extra_large }"
    >
      <td>主标题</td>
      <td class="color-dark-light">{{font_size_extra_large}} Extra large</td>
      <td>用 Element 快速搭建页面</td>
    </tr>
  </tbody>
</table>
<h3 id="xing-gao"><a class="header-anchor" href="#xing-gao">¶</a> 行高</h3>
<div>
<img class="lineH-left" src="~examples/assets/images/typography.png" />
<ul class="lineH-right">
<li>line-height:1 <span>无行高</span></li>
<li>line-height:1.3 <span>紧凑</span></li>
<li>line-height:1.5 <span>常规</span></li>
<li>line-height:1.7 <span>宽松</span></li>
</ul>
</div>
<h3 id="font-family-dai-ma"><a class="header-anchor" href="#font-family-dai-ma">¶</a> Font-family 代码</h3>
<pre><code class="language-css">font-family: &quot;Helvetica Neue&quot;,Helvetica,&quot;PingFang SC&quot;,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;微软雅黑&quot;,Arial,sans-serif;
</code></pre>
