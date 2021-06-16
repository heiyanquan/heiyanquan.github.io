<h2 id="custom-theme"><a class="header-anchor" href="#custom-theme">¶</a> Custom theme</h2>
<p>Element uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea. We provide four ways to change the style variables.</p>
<h3 id="theme-roller"><a class="header-anchor" href="#theme-roller">¶</a> Theme Roller</h3>
<p>Use <a href="./#/en-US/theme">Online Theme Roller</a> to customize all Design Tokens of global variables and components，and preview the new theme in real-time.and it can generate a complete style package based on the new theme for you to download directly (to import new style files in your project, please refer to the 'Import custom theme' part of this section).</p>
<p>Also, use <a href="https://chrome.google.com/webstore/detail/element-theme-roller/lifkjlojflekabbmlddfccdkphlelmim">Theme Roller Chrome Extension</a>，to customize theme and preview in real-time on any website developed by Element.</p>
<img src="https://shadow.elemecdn.com/app/sns-client/element-theme-editor2.e16c6a01-806d-11e9-bc23-21435c54c509.png" style="width: 100%;margin: 30px auto 0;display: block;">
<h3 id="changing-theme-color"><a class="header-anchor" href="#changing-theme-color">¶</a> Changing theme color</h3>
<p>If you just want to change the theme color of Element, the <a href="https://elementui.github.io/theme-chalk-preview/#/en-US">theme preview website</a> is recommended. The theme color of Element is bright and friendly blue. By changing it, you can make Element more visually connected to specific projects.</p>
<p>The above website enables you to preview theme of a new theme color in real-time, and it can generate a complete style package based on the new theme color for you to download directly (to import new style files in your project, please refer to the 'Import custom theme' or 'Import component theme on demand' part of this section).</p>
<h3 id="update-scss-variables-in-your-project"><a class="header-anchor" href="#update-scss-variables-in-your-project">¶</a> Update SCSS variables in your project</h3>
<p><code>theme-chalk</code> is written in SCSS. If your project also uses SCSS, you can directly change Element style variables. Create a new style file, e.g. <code>element-variables.scss</code>:</p>
<pre><code class="language-html">/* theme color */
$--color-primary: teal;

/* icon font path, required */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import &quot;~element-ui/packages/theme-chalk/src/index&quot;;
</code></pre>
<p>Then in the entry file of your project, import this style file instead of Element's built CSS:</p>
<pre><code class="language-JS">import Vue from 'vue'
import Element from 'element-ui'
import './element-variables.scss'

Vue.use(Element)
</code></pre>
<div class="tip">
<p>Note that it is required to override icon font path to the relative path of Element's font files.</p>
</div>
<h3 id="cli-theme-tool"><a class="header-anchor" href="#cli-theme-tool">¶</a> CLI theme tool</h3>
<p>If you project doesn't use SCSS, you can customize themes with our CLI theme tool:</p>
<h4 id="install"><a class="header-anchor" href="#install">¶</a> <strong>Install</strong></h4>
<p>First install the theme generator globally or locally. Local install is recommended because in this way, when others clone your project, npm will automatically install it for them.</p>
<pre><code class="language-shell">npm i element-theme -g
</code></pre>
<p>Then install the chalk theme from npm or GitHub.</p>
<pre><code class="language-shell"># from npm
npm i element-theme-chalk -D

# from GitHub
npm i https://github.com/ElementUI/theme-chalk -D
</code></pre>
<h4 id="initialize-variable-file"><a class="header-anchor" href="#initialize-variable-file">¶</a> <strong>Initialize variable file</strong></h4>
<p>After successfully installing the above packages, a command named <code>et</code> is available in CLI (if the packages are installed locally, use <code>node_modules/.bin/et</code> instead). Run <code>-i</code> to initialize the variable file which outputs to <code>element-variables.scss</code> by default. And you can specify its output directory as you will.</p>
<pre><code class="language-shell">et -i [custom output file]

&gt; ✔ Generator variables file
</code></pre>
<p>In <code>element-variables.scss</code> you can find all the variables we used to style Element and they are defined in SCSS format. Here's a snippet:</p>
<pre><code class="language-css">$--color-primary: #409EFF !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default; /* 53a8ff */
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default; /* 66b1ff */
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default; /* 79bbff */
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default; /* 8cc5ff */
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default; /* a0cfff */
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default; /* b3d8ff */
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default; /* c6e2ff */
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default; /* d9ecff */
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default; /* ecf5ff */

$--color-success: #67c23a !default;
$--color-warning: #e6a23c !default;
$--color-danger: #f56c6c !default;
$--color-info: #909399 !default;

...
</code></pre>
<h4 id="modify-variables"><a class="header-anchor" href="#modify-variables">¶</a> <strong>Modify variables</strong></h4>
<p>Just edit <code>element-variables.scss</code>, e.g. changing the theme color to red:</p>
<pre><code class="language-CSS">$--color-primary: red;
</code></pre>
<h4 id="build-theme"><a class="header-anchor" href="#build-theme">¶</a> <strong>Build theme</strong></h4>
<p>After saving the variable file, use <code>et</code> to build your theme. You can activate <code>watch</code> mode by adding a parameter <code>-w</code>. And if you customized the variable file's output, you need to add a parameter <code>-c</code> and variable file's name. By default the build theme file is placed inside <code>./theme</code>. You can specify its output directory with parameter <code>-o</code>.</p>
<pre><code class="language-shell">et

&gt; ✔ build theme font
&gt; ✔ build element theme
</code></pre>
<h3 id="use-custom-theme"><a class="header-anchor" href="#use-custom-theme">¶</a> Use custom theme</h3>
<h4 id="import-custom-theme"><a class="header-anchor" href="#import-custom-theme">¶</a> <strong>Import custom theme</strong></h4>
<p>Importing your own theme is just like importing the default theme, only this time you import the file built from &quot;Online Theme Roller&quot; or &quot;CLI tool&quot;:</p>
<pre><code class="language-javascript">import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
</code></pre>
<h4 id="import-component-theme-on-demand"><a class="header-anchor" href="#import-component-theme-on-demand">¶</a> <strong>Import component theme on demand</strong></h4>
<p>If you are using <code>babel-plugin-component</code> for on-demand import, just modify <code>.babelrc</code> and specify <code>styleLibraryName</code> to the path where your custom theme is located relative to <code>.babelrc</code>. Note that <code>~</code> is required:</p>
<pre><code class="language-json">{
  &quot;plugins&quot;: [
    [
      &quot;component&quot;,
      {
        &quot;libraryName&quot;: &quot;element-ui&quot;,
        &quot;styleLibraryName&quot;: &quot;~theme&quot;
      }
    ]
  ]
}
</code></pre>
<p>If you are unfamiliar with <code>babel-plugin-component</code>, please refer to <a href="./#/en-US/component/quickstart">Quick Start</a>. For more details, check out the <a href="https://github.com/ElementUI/element-theme">project repository</a> of <code>element-theme</code>.</p>
