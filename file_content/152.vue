<h2 id="collapse"><a class="header-anchor" href="#collapse">¶</a> Collapse</h2>
<p>Use Collapse to store contents.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>You can expand multiple panels</p>
<demo-block>
        
        <!--element-demo: <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="Consistency" name="1">
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficiency" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllability" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse v-model=&quot;activeNames&quot; @change=&quot;handleChange&quot;&gt;
  &lt;el-collapse-item title=&quot;Consistency&quot; name=&quot;1&quot;&gt;
    &lt;div&gt;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;&lt;/div&gt;
    &lt;div&gt;Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Feedback&quot; name=&quot;2&quot;&gt;
    &lt;div&gt;Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;&lt;/div&gt;
    &lt;div&gt;Visual feedback: reflect current state by updating or rearranging elements of the page.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Efficiency&quot; name=&quot;3&quot;&gt;
    &lt;div&gt;Simplify the process: keep operating process simple and intuitive;&lt;/div&gt;
    &lt;div&gt;Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;&lt;/div&gt;
    &lt;div&gt;Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Controllability&quot; name=&quot;4&quot;&gt;
    &lt;div&gt;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;&lt;/div&gt;
    &lt;div&gt;Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="accordion"><a class="header-anchor" href="#accordion">¶</a> Accordion</h3>
<p>In accordion mode, only one panel can be expanded at once</p>
<demo-block>
        <div><p>Activate accordion mode using the <code>accordion</code> attribute.</p>
</div>
        <!--element-demo: <el-collapse v-model="activeName" accordion>
  <el-collapse-item title="Consistency" name="1">
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficiency" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllability" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse v-model=&quot;activeName&quot; accordion&gt;
  &lt;el-collapse-item title=&quot;Consistency&quot; name=&quot;1&quot;&gt;
    &lt;div&gt;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;&lt;/div&gt;
    &lt;div&gt;Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Feedback&quot; name=&quot;2&quot;&gt;
    &lt;div&gt;Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;&lt;/div&gt;
    &lt;div&gt;Visual feedback: reflect current state by updating or rearranging elements of the page.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Efficiency&quot; name=&quot;3&quot;&gt;
    &lt;div&gt;Simplify the process: keep operating process simple and intuitive;&lt;/div&gt;
    &lt;div&gt;Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;&lt;/div&gt;
    &lt;div&gt;Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Controllability&quot; name=&quot;4&quot;&gt;
    &lt;div&gt;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;&lt;/div&gt;
    &lt;div&gt;Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="custom-title"><a class="header-anchor" href="#custom-title">¶</a> Custom title</h3>
<p>Besides using the <code>title</code> attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.</p>
<demo-block>
        
        <!--element-demo: <el-collapse accordion>
  <el-collapse-item name="1">
    <template slot="title">
      Consistency<i class="header-icon el-icon-info"></i>
    </template>
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficiency" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllability" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse accordion&gt;
  &lt;el-collapse-item name=&quot;1&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;
      Consistency&lt;i class=&quot;header-icon el-icon-info&quot;&gt;&lt;/i&gt;
    &lt;/template&gt;
    &lt;div&gt;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;&lt;/div&gt;
    &lt;div&gt;Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Feedback&quot; name=&quot;2&quot;&gt;
    &lt;div&gt;Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;&lt;/div&gt;
    &lt;div&gt;Visual feedback: reflect current state by updating or rearranging elements of the page.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Efficiency&quot; name=&quot;3&quot;&gt;
    &lt;div&gt;Simplify the process: keep operating process simple and intuitive;&lt;/div&gt;
    &lt;div&gt;Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;&lt;/div&gt;
    &lt;div&gt;Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Controllability&quot; name=&quot;4&quot;&gt;
    &lt;div&gt;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;&lt;/div&gt;
    &lt;div&gt;Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
</code></pre></template></demo-block><h3 id="collapse-attributes"><a class="header-anchor" href="#collapse-attributes">¶</a> Collapse Attributes</h3>
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
<td>value / v-model</td>
<td>currently active panel</td>
<td>string (accordion mode) / array (non-accordion mode)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>accordion</td>
<td>whether to activate accordion mode</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="collapse-events"><a class="header-anchor" href="#collapse-events">¶</a> Collapse Events</h3>
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
<td>triggers when active panels change</td>
<td>(activeNames: array (non-accordion mode) / string (accordion mode))</td>
</tr>
</tbody>
</table>
<h3 id="collapse-item-attributes"><a class="header-anchor" href="#collapse-item-attributes">¶</a> Collapse Item Attributes</h3>
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
<td>unique identification of the panel</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>title</td>
<td>title of the panel</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>disable the collapse item</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
