<h2 id="carousel-zou-ma-deng"><a class="header-anchor" href="#carousel-zou-ma-deng">¶</a> Carousel 走马灯</h2>
<p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>适用广泛的基础用法</p>
<demo-block>
        <div><p>结合使用<code>el-carousel</code>和<code>el-carousel-item</code>标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在<code>el-carousel-item</code>标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置<code>trigger</code>属性为<code>click</code>，可以达到点击触发的效果。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;默认 Hover 指示器触发&lt;/span&gt;
    &lt;el-carousel height=&quot;150px&quot;&gt;
      &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
        &lt;h3 class=&quot;small&quot;&gt;{{ item }}&lt;/h3&gt;
      &lt;/el-carousel-item&gt;
    &lt;/el-carousel&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Click 指示器触发&lt;/span&gt;
    &lt;el-carousel trigger=&quot;click&quot; height=&quot;150px&quot;&gt;
      &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
        &lt;h3 class=&quot;small&quot;&gt;{{ item }}&lt;/h3&gt;
      &lt;/el-carousel-item&gt;
    &lt;/el-carousel&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zhi-shi-qi"><a class="header-anchor" href="#zhi-shi-qi">¶</a> 指示器</h3>
<p>可以将指示器的显示位置设置在容器外部</p>
<demo-block>
        <div><p><code>indicator-position</code>属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为<code>outside</code>则会显示在外部；设置为<code>none</code>则不会显示指示器。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-carousel indicator-position=&quot;outside&quot;&gt;
    &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
      &lt;h3&gt;{{ item }}&lt;/h3&gt;
    &lt;/el-carousel-item&gt;
  &lt;/el-carousel&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="qie-huan-jian-tou"><a class="header-anchor" href="#qie-huan-jian-tou">¶</a> 切换箭头</h3>
<p>可以设置切换箭头的显示时机</p>
<demo-block>
        <div><p><code>arrow</code>属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将<code>arrow</code>设置为<code>always</code>，则会一直显示；设置为<code>never</code>，则会一直隐藏。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-carousel :interval=&quot;5000&quot; arrow=&quot;always&quot;&gt;
    &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
      &lt;h3&gt;{{ item }}&lt;/h3&gt;
    &lt;/el-carousel-item&gt;
  &lt;/el-carousel&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="qia-pian-hua"><a class="header-anchor" href="#qia-pian-hua">¶</a> 卡片化</h3>
<p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
<demo-block>
        <div><p>将<code>type</code>属性设置为<code>card</code>即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-carousel :interval=&quot;4000&quot; type=&quot;card&quot; height=&quot;200px&quot;&gt;
    &lt;el-carousel-item v-for=&quot;item in 6&quot; :key=&quot;item&quot;&gt;
      &lt;h3 class=&quot;medium&quot;&gt;{{ item }}&lt;/h3&gt;
    &lt;/el-carousel-item&gt;
  &lt;/el-carousel&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="fang-xiang"><a class="header-anchor" href="#fang-xiang">¶</a> 方向</h3>
<p>默认情况下，<code>direction</code> 为 <code>horizontal</code>。通过设置 <code>direction</code> 为 <code>vertical</code> 来让走马灯在垂直方向上显示。</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-carousel height=&quot;200px&quot; direction=&quot;vertical&quot; :autoplay=&quot;false&quot;&gt;
    &lt;el-carousel-item v-for=&quot;item in 3&quot; :key=&quot;item&quot;&gt;
      &lt;h3 class=&quot;medium&quot;&gt;{{ item }}&lt;/h3&gt;
    &lt;/el-carousel-item&gt;
  &lt;/el-carousel&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="carousel-attributes"><a class="header-anchor" href="#carousel-attributes">¶</a> Carousel Attributes</h3>
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
<td>height</td>
<td>走马灯的高度</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>initial-index</td>
<td>初始状态激活的幻灯片的索引，从 0 开始</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>trigger</td>
<td>指示器的触发方式</td>
<td>string</td>
<td>click</td>
<td>—</td>
</tr>
<tr>
<td>autoplay</td>
<td>是否自动切换</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>interval</td>
<td>自动切换的时间间隔，单位为毫秒</td>
<td>number</td>
<td>—</td>
<td>3000</td>
</tr>
<tr>
<td>indicator-position</td>
<td>指示器的位置</td>
<td>string</td>
<td>outside/none</td>
<td>—</td>
</tr>
<tr>
<td>arrow</td>
<td>切换箭头的显示时机</td>
<td>string</td>
<td>always/hover/never</td>
<td>hover</td>
</tr>
<tr>
<td>type</td>
<td>走马灯的类型</td>
<td>string</td>
<td>card</td>
<td>—</td>
</tr>
<tr>
<td>loop</td>
<td>是否循环显示</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>direction</td>
<td>走马灯展示的方向</td>
<td>string</td>
<td>horizontal/vertical</td>
<td>horizontal</td>
</tr>
</tbody>
</table>
<h3 id="carousel-events"><a class="header-anchor" href="#carousel-events">¶</a> Carousel Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>幻灯片切换时触发</td>
<td>目前激活的幻灯片的索引，原幻灯片的索引</td>
</tr>
</tbody>
</table>
<h3 id="carousel-methods"><a class="header-anchor" href="#carousel-methods">¶</a> Carousel Methods</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>setActiveItem</td>
<td>手动切换幻灯片</td>
<td>需要切换的幻灯片的索引，从 0 开始；或相应 <code>el-carousel-item</code> 的 <code>name</code> 属性值</td>
</tr>
<tr>
<td>prev</td>
<td>切换至上一张幻灯片</td>
<td>—</td>
</tr>
<tr>
<td>next</td>
<td>切换至下一张幻灯片</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="carousel-item-attributes"><a class="header-anchor" href="#carousel-item-attributes">¶</a> Carousel-Item Attributes</h3>
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
<td>name</td>
<td>幻灯片的名字，可用作 <code>setActiveItem</code> 的参数</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>该幻灯片所对应指示器的文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
