<h2 id="infinitescroll"><a class="header-anchor" href="#infinitescroll">¶</a> InfiniteScroll</h2>
<p>Load more data while reach bottom of the page</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Add <code>v-infinite-scroll</code> to the list to automatically execute loading method when scrolling to the bottom.</p>
<demo-block>
        
        <!--element-demo: <template>
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;ul class=&quot;infinite-list&quot; v-infinite-scroll=&quot;load&quot; style=&quot;overflow:auto&quot;&gt;
    &lt;li v-for=&quot;i in count&quot; class=&quot;infinite-list-item&quot;&gt;{{ i }}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disable-loading"><a class="header-anchor" href="#disable-loading">¶</a> Disable Loading</h3>
<demo-block>
        
        <!--element-demo: <template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;infinite-list-wrapper&quot; style=&quot;overflow:auto&quot;&gt;
    &lt;ul
      class=&quot;list&quot;
      v-infinite-scroll=&quot;load&quot;
      infinite-scroll-disabled=&quot;disabled&quot;&gt;
      &lt;li v-for=&quot;i in count&quot; class=&quot;list-item&quot;&gt;{{ i }}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;p v-if=&quot;loading&quot;&gt;Loading...&lt;/p&gt;
    &lt;p v-if=&quot;noMore&quot;&gt;No more&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count &gt;= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() =&gt; {
          this.count += 2
          this.loading = false
        }, 2000)
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
<td>infinite-scroll-disabled</td>
<td>is disabled</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>infinite-scroll-delay</td>
<td>throttle delay (ms)</td>
<td>number</td>
<td>-</td>
<td>200</td>
</tr>
<tr>
<td>infinite-scroll-distance</td>
<td>trigger distance (px)</td>
<td>number</td>
<td>-</td>
<td>0</td>
</tr>
<tr>
<td>infinite-scroll-immediate</td>
<td>Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
