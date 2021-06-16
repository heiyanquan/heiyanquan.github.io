<h2 id="divider-fen-ge-xian"><a class="header-anchor" href="#divider-fen-ge-xian">¶</a> Divider 分割线</h2>
<p>区隔内容的分割线。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>对不同章节的文本段落进行分割。</p>
<demo-block>
        
        <!--element-demo: <template>
  <div>
    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
    <el-divider></el-divider>
    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
  </div>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪&lt;/span&gt;
    &lt;el-divider&gt;&lt;/el-divider&gt;
    &lt;span&gt;少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="she-zhi-wen-an"><a class="header-anchor" href="#she-zhi-wen-an">¶</a> 设置文案</h3>
<p>可以在分割线上自定义文案内容。</p>
<demo-block>
        
        <!--element-demo: <template>
  <div>
    <span>头上一片晴天，心中一个想念</span>
    <el-divider content-position="left">少年包青天</el-divider>
    <span>饿了别叫妈, 叫饿了么</span>
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <span>为了无法计算的价值</span>
    <el-divider content-position="right">阿里云</el-divider>
  </div>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;头上一片晴天，心中一个想念&lt;/span&gt;
    &lt;el-divider content-position=&quot;left&quot;&gt;少年包青天&lt;/el-divider&gt;
    &lt;span&gt;饿了别叫妈, 叫饿了么&lt;/span&gt;
    &lt;el-divider&gt;&lt;i class=&quot;el-icon-mobile-phone&quot;&gt;&lt;/i&gt;&lt;/el-divider&gt;
    &lt;span&gt;为了无法计算的价值&lt;/span&gt;
    &lt;el-divider content-position=&quot;right&quot;&gt;阿里云&lt;/el-divider&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="chui-zhi-fen-ge"><a class="header-anchor" href="#chui-zhi-fen-ge">¶</a> 垂直分割</h3>
<demo-block>
        
        <!--element-demo: <template>
  <div>
    <span>雨纷纷</span>
    <el-divider direction="vertical"></el-divider>
    <span>旧故里</span>
    <el-divider direction="vertical"></el-divider>
    <span>草木深</span>
  </div>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;雨纷纷&lt;/span&gt;
    &lt;el-divider direction=&quot;vertical&quot;&gt;&lt;/el-divider&gt;
    &lt;span&gt;旧故里&lt;/span&gt;
    &lt;el-divider direction=&quot;vertical&quot;&gt;&lt;/el-divider&gt;
    &lt;span&gt;草木深&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="divider-attributes"><a class="header-anchor" href="#divider-attributes">¶</a> Divider Attributes</h3>
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
<td>direction</td>
<td>设置分割线方向</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>horizontal</td>
</tr>
<tr>
<td>content-position</td>
<td>设置分割线文案的位置</td>
<td>string</td>
<td>left / right / center</td>
<td>center</td>
</tr>
</tbody>
</table>
