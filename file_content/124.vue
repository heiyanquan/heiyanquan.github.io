<h2 id="divider"><a class="header-anchor" href="#divider">¶</a> Divider</h2>
<p>The dividing line that separates the content.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Divide the text of different paragraphs.</p>
<demo-block>
        
        <!--element-demo: <template>
  <div>
    <span>I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.</span>
    <el-divider></el-divider>
    <span>There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.</span>
  </div>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.&lt;/span&gt;
    &lt;el-divider&gt;&lt;/el-divider&gt;
    &lt;span&gt;There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="custom-content"><a class="header-anchor" href="#custom-content">¶</a> Custom content</h3>
<p>You can customize the content on the divider line.</p>
<demo-block>
        
        <!--element-demo: <template>
  <div>
    <span>What you are you do not see, what you see is your shadow. </span>
    <el-divider content-position="left">Rabindranath Tagore</el-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
    <el-divider content-position="right">Rabindranath Tagore</el-divider>
  </div>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;What you are you do not see, what you see is your shadow. &lt;/span&gt;
    &lt;el-divider content-position=&quot;left&quot;&gt;Rabindranath Tagore&lt;/el-divider&gt;
    &lt;span&gt;I cannot choose the best. The best chooses me.&lt;/span&gt;
    &lt;el-divider&gt;&lt;i class=&quot;el-icon-star-on&quot;&gt;&lt;/i&gt;&lt;/el-divider&gt;
    &lt;span&gt;My wishes are fools, they shout across thy song, my Master. Let me but listen.&lt;/span&gt;
    &lt;el-divider content-position=&quot;right&quot;&gt;Rabindranath Tagore&lt;/el-divider&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="vertical-divider"><a class="header-anchor" href="#vertical-divider">¶</a> Vertical divider</h3>
<demo-block>
        
        <!--element-demo: <template>
  <div>
    <span>Rain</span>
    <el-divider direction="vertical"></el-divider>
    <span>Home</span>
    <el-divider direction="vertical"></el-divider>
    <span>Grass</span>
  </div>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;Rain&lt;/span&gt;
    &lt;el-divider direction=&quot;vertical&quot;&gt;&lt;/el-divider&gt;
    &lt;span&gt;Home&lt;/span&gt;
    &lt;el-divider direction=&quot;vertical&quot;&gt;&lt;/el-divider&gt;
    &lt;span&gt;Grass&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="divider-attributes"><a class="header-anchor" href="#divider-attributes">¶</a> Divider Attributes</h3>
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
<td>direction</td>
<td>Set divider's direction</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>horizontal</td>
</tr>
<tr>
<td>content-position</td>
<td>customize the content on the divider line</td>
<td>String</td>
<td>left / right / center</td>
<td>center</td>
</tr>
</tbody>
</table>
