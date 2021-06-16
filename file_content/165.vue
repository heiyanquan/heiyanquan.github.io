<h2 id="carousel"><a class="header-anchor" href="#carousel">¶</a> Carousel</h2>
<p>Loop a series of images or texts in a limited space</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p>Combine <code>el-carousel</code> with <code>el-carousel-item</code>, and you'll get a carousel. Content of each slide is completely customizable, and you just need to place it inside  <code>el-carousel-item</code> tag. By default the carousel switches when mouse hovers over an indicator. Set <code>trigger</code> to <code>click</code>, and the carousel switches only when an indicator is clicked.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Switch when indicator is hovered (default)</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
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
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Switch when indicator is hovered (default)&lt;/span&gt;
    &lt;el-carousel height=&quot;150px&quot;&gt;
      &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
        &lt;h3 class=&quot;small&quot;&gt;{{ item }}&lt;/h3&gt;
      &lt;/el-carousel-item&gt;
    &lt;/el-carousel&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Switch when indicator is clicked&lt;/span&gt;
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
</code></pre></template></demo-block><h3 id="indicators"><a class="header-anchor" href="#indicators">¶</a> Indicators</h3>
<p>Indicators can be displayed outside the carousel</p>
<demo-block>
        <div><p>The <code>indicator-position</code> attribute determines where the indicators are located. By default they are inside the carousel, and setting <code>indicator-position</code> to <code>outside</code> moves them outside; setting <code>indicator-position</code> to <code>none</code> hides the indicators.</p>
</div>
        <!--element-demo: <template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
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
</style>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="arrows"><a class="header-anchor" href="#arrows">¶</a> Arrows</h3>
<p>You can define when arrows are displayed</p>
<demo-block>
        <div><p>The <code>arrow</code> attribute determines when arrows are displayed. By default they appear when mouse hovers over the carousel. Setting <code>arrow</code> to <code>always</code> or <code>never</code> shows/hides the arrows permanently.</p>
</div>
        <!--element-demo: <template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
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
</style>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="card-mode"><a class="header-anchor" href="#card-mode">¶</a> Card mode</h3>
<p>When a page is wide enough but has limited height, you can activate card mode for carousels</p>
<demo-block>
        <div><p>Setting <code>type</code> to <code>card</code> activates the card mode. Apart from the appearance, the biggest difference between card mode and common mode is that clicking the slides at both sides directly switches the carousel in card mode.</p>
</div>
        <!--element-demo: <template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
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
</style>
:element-demo-->
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
</code></pre></template></demo-block><p>By default, <code>direction</code> is <code>horizontal</code>. Let carousel be displayed in the vertical direction by setting <code>direction</code> to <code>vertical</code>.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-carousel height="200px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
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
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-carousel height=&quot;200px&quot; direction=&quot;vertical&quot; :autoplay=&quot;false&quot;&gt;
    &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
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
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>height</td>
<td>height of the carousel</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>initial-index</td>
<td>index of the initially active slide (starting from 0)</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>trigger</td>
<td>how indicators are triggered</td>
<td>string</td>
<td>hover/click</td>
<td>hover</td>
</tr>
<tr>
<td>autoplay</td>
<td>whether automatically loop the slides</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>interval</td>
<td>interval of the auto loop, in milliseconds</td>
<td>number</td>
<td>—</td>
<td>3000</td>
</tr>
<tr>
<td>indicator-position</td>
<td>position of the indicators</td>
<td>string</td>
<td>outside/none</td>
<td>—</td>
</tr>
<tr>
<td>arrow</td>
<td>when arrows are shown</td>
<td>string</td>
<td>always/hover/never</td>
<td>hover</td>
</tr>
<tr>
<td>type</td>
<td>type of the Carousel</td>
<td>string</td>
<td>card</td>
<td>—</td>
</tr>
<tr>
<td>loop</td>
<td>display the items in loop</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>direction</td>
<td>display direction</td>
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
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>triggers when the active slide switches</td>
<td>index of the new active slide, index of the old active slide</td>
</tr>
</tbody>
</table>
<h3 id="carousel-methods"><a class="header-anchor" href="#carousel-methods">¶</a> Carousel Methods</h3>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>setActiveItem</td>
<td>manually switch slide</td>
<td>index of the slide to be switched to, starting from 0; or the <code>name</code> of corresponding <code>el-carousel-item</code></td>
</tr>
<tr>
<td>prev</td>
<td>switch to the previous slide</td>
<td>—</td>
</tr>
<tr>
<td>next</td>
<td>switch to the next slide</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="carousel-item-attributes"><a class="header-anchor" href="#carousel-item-attributes">¶</a> Carousel-Item Attributes</h3>
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
<td>name</td>
<td>name of the item, can be used in <code>setActiveItem</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>text content for the corresponding indicator</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
