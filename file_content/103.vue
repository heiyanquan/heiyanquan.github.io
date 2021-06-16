<h2 id="input"><a class="header-anchor" href="#input">¶</a> Input</h2>
<p>Input data using mouse or keyboard.</p>
<div class="warning">
<p>Input is a controlled component, it <strong>always shows Vue binding value</strong>.</p>
<p>Under normal circumstances, <code>input</code> event should be handled. Its handler should update component's binding value (or use <code>v-model</code>). Otherwise, input box's value will not change.</p>
<p>Do not support <code>v-model</code> modifiers.</p>
</div>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        
        <!--element-demo: <el-input placeholder="Please input" v-model="input"></el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input placeholder=&quot;Please input&quot; v-model=&quot;input&quot;&gt;&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disabled"><a class="header-anchor" href="#disabled">¶</a> Disabled</h3>
<demo-block>
        <div><p>Disable the Input with the <code>disabled</code> attribute.</p>
</div>
        <!--element-demo: <el-input
  placeholder="Please input"
  v-model="input"
  :disabled="true">
</el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;Please input&quot;
  v-model=&quot;input&quot;
  :disabled=&quot;true&quot;&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="clearable"><a class="header-anchor" href="#clearable">¶</a> Clearable</h3>
<demo-block>
        <div><p>Make the Input clearable with the <code>clearable</code> attribute.</p>
</div>
        <!--element-demo: <el-input
  placeholder="Please input"
  v-model="input"
  clearable>
</el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;Please input&quot;
  v-model=&quot;input&quot;
  clearable&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="password-box"><a class="header-anchor" href="#password-box">¶</a> Password box</h3>
<demo-block>
        <div><p>Make a toggleable password Input with the <code>show-password</code> attribute.</p>
</div>
        <!--element-demo: <el-input placeholder="Please input password" v-model="input" show-password></el-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input placeholder=&quot;Please input password&quot; v-model=&quot;input&quot; show-password&gt;&lt;/el-input&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="input-with-icon"><a class="header-anchor" href="#input-with-icon">¶</a> Input with icon</h3>
<p>Add an icon to indicate input type.</p>
<demo-block>
        <div><p>To add icons in Input, you can simply use <code>prefix-icon</code> and <code>suffix-icon</code> attributes. Also, the <code>prefix</code> and <code>suffix</code> named slots works as well.</p>
</div>
        <!--element-demo: <div class="demo-input-suffix">
  <span class="demo-input-label">Using attributes</span>
  <el-input
    placeholder="Pick a date"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
  <el-input
    placeholder="Type something"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
</div>
<div class="demo-input-suffix">
  <span class="demo-input-label">Using slots</span>
  <el-input
    placeholder="Pick a date"
    v-model="input3">
    <i slot="suffix" class="el-input__icon el-icon-date"></i>
  </el-input>
  <el-input
    placeholder="Type something"
    v-model="input4">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>

<style>
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
</style>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-input-suffix&quot;&gt;
  &lt;span class=&quot;demo-input-label&quot;&gt;Using attributes&lt;/span&gt;
  &lt;el-input
    placeholder=&quot;Pick a date&quot;
    suffix-icon=&quot;el-icon-date&quot;
    v-model=&quot;input1&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    placeholder=&quot;Type something&quot;
    prefix-icon=&quot;el-icon-search&quot;
    v-model=&quot;input2&quot;&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div class=&quot;demo-input-suffix&quot;&gt;
  &lt;span class=&quot;demo-input-label&quot;&gt;Using slots&lt;/span&gt;
  &lt;el-input
    placeholder=&quot;Pick a date&quot;
    v-model=&quot;input3&quot;&gt;
    &lt;i slot=&quot;suffix&quot; class=&quot;el-input__icon el-icon-date&quot;&gt;&lt;/i&gt;
  &lt;/el-input&gt;
  &lt;el-input
    placeholder=&quot;Type something&quot;
    v-model=&quot;input4&quot;&gt;
    &lt;i slot=&quot;prefix&quot; class=&quot;el-input__icon el-icon-search&quot;&gt;&lt;/i&gt;
  &lt;/el-input&gt;
&lt;/div&gt;

&lt;style&gt;
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
&lt;/style&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="textarea"><a class="header-anchor" href="#textarea">¶</a> Textarea</h3>
<p>Resizable for entering multiple lines of text information. Add attribute <code>type=&quot;textarea&quot;</code> to change <code>input</code> into native <code>textarea</code>.</p>
<demo-block>
        <div><p>Control the height by setting the <code>rows</code> prop.</p>
</div>
        <!--element-demo: <el-input
  type="textarea"
  :rows="2"
  placeholder="Please input"
  v-model="textarea">
</el-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;textarea&quot;
  :rows=&quot;2&quot;
  placeholder=&quot;Please input&quot;
  v-model=&quot;textarea&quot;&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="autosize-textarea"><a class="header-anchor" href="#autosize-textarea">¶</a> Autosize Textarea</h3>
<p>Setting the <code>autosize</code> prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to <code>autosize</code> to specify the minimum and maximum number of lines the textarea can automatically adjust.</p>
<demo-block>
        
        <!--element-demo: <el-input
  type="textarea"
  autosize
  placeholder="Please input"
  v-model="textarea1">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Please input"
  v-model="textarea2">
</el-input>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;textarea&quot;
  autosize
  placeholder=&quot;Please input&quot;
  v-model=&quot;textarea1&quot;&gt;
&lt;/el-input&gt;
&lt;div style=&quot;margin: 20px 0;&quot;&gt;&lt;/div&gt;
&lt;el-input
  type=&quot;textarea&quot;
  :autosize=&quot;{ minRows: 2, maxRows: 4}&quot;
  placeholder=&quot;Please input&quot;
  v-model=&quot;textarea2&quot;&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="mixed-input"><a class="header-anchor" href="#mixed-input">¶</a> Mixed input</h3>
<p>Prepend or append an element, generally a label or a button.</p>
<demo-block>
        <div><p>Use <code>slot</code> to distribute elements that prepend or append to Input.</p>
</div>
        <!--element-demo: <div>
  <el-input placeholder="Please input" v-model="input1">
    <template slot="prepend">Http://</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Please input" v-model="input2">
    <template slot="append">.com</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Please input" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="Select">
      <el-option label="Restaurant" value="1"></el-option>
      <el-option label="Order No." value="2"></el-option>
      <el-option label="Tel" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>

<style>
  .el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-input placeholder=&quot;Please input&quot; v-model=&quot;input1&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;Http://&lt;/template&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div style=&quot;margin-top: 15px;&quot;&gt;
  &lt;el-input placeholder=&quot;Please input&quot; v-model=&quot;input2&quot;&gt;
    &lt;template slot=&quot;append&quot;&gt;.com&lt;/template&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div style=&quot;margin-top: 15px;&quot;&gt;
  &lt;el-input placeholder=&quot;Please input&quot; v-model=&quot;input3&quot; class=&quot;input-with-select&quot;&gt;
    &lt;el-select v-model=&quot;select&quot; slot=&quot;prepend&quot; placeholder=&quot;Select&quot;&gt;
      &lt;el-option label=&quot;Restaurant&quot; value=&quot;1&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;Order No.&quot; value=&quot;2&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;Tel&quot; value=&quot;3&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
    &lt;el-button slot=&quot;append&quot; icon=&quot;el-icon-search&quot;&gt;&lt;/el-button&gt;
  &lt;/el-input&gt;
&lt;/div&gt;

&lt;style&gt;
  .el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
&lt;/style&gt;
&lt;script&gt;
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="sizes"><a class="header-anchor" href="#sizes">¶</a> Sizes</h3>
<demo-block>
        <div><p>Add <code>size</code> attribute to change the size of Input. In addition to the default size, there are three other options: <code>large</code>, <code>small</code> and <code>mini</code>.</p>
</div>
        <!--element-demo: <div class="demo-input-size">
  <el-input
    placeholder="Please Input"
    v-model="input1">
  </el-input>
  <el-input
    size="medium"
    placeholder="Please Input"
    v-model="input2">
  </el-input>
  <el-input
    size="small"
    placeholder="Please Input"
    v-model="input3">
  </el-input>
  <el-input
    size="mini"
    placeholder="Please Input"
    v-model="input4">
  </el-input>
</div>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-input-size&quot;&gt;
  &lt;el-input
    placeholder=&quot;Please Input&quot;
    v-model=&quot;input1&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;medium&quot;
    placeholder=&quot;Please Input&quot;
    v-model=&quot;input2&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;small&quot;
    placeholder=&quot;Please Input&quot;
    v-model=&quot;input3&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;mini&quot;
    placeholder=&quot;Please Input&quot;
    v-model=&quot;input4&quot;&gt;
  &lt;/el-input&gt;
&lt;/div&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="autocomplete"><a class="header-anchor" href="#autocomplete">¶</a> Autocomplete</h3>
<p>You can get some recommended tips based on the current input.</p>
<demo-block>
        <div><p>Autocomplete component provides input suggestions. The <code>fetch-suggestions</code> attribute is a method that returns suggested input. In this example, <code>querySearch(queryString, cb)</code> returns suggestions to Autocomplete via <code>cb(data)</code> when suggestions are ready.</p>
</div>
        <!--element-demo: <el-row class="demo-autocomplete">
  <el-col :span="12">
    <div class="sub-title">list suggestions when activated</div>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12">
    <div class="sub-title">list suggestions on input</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
<script>
  export default {
    data() {
      return {
        links: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row class=&quot;demo-autocomplete&quot;&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;div class=&quot;sub-title&quot;&gt;list suggestions when activated&lt;/div&gt;
    &lt;el-autocomplete
      class=&quot;inline-input&quot;
      v-model=&quot;state1&quot;
      :fetch-suggestions=&quot;querySearch&quot;
      placeholder=&quot;Please Input&quot;
      @select=&quot;handleSelect&quot;
    &gt;&lt;/el-autocomplete&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;div class=&quot;sub-title&quot;&gt;list suggestions on input&lt;/div&gt;
    &lt;el-autocomplete
      class=&quot;inline-input&quot;
      v-model=&quot;state2&quot;
      :fetch-suggestions=&quot;querySearch&quot;
      placeholder=&quot;Please Input&quot;
      :trigger-on-focus=&quot;false&quot;
      @select=&quot;handleSelect&quot;
    &gt;&lt;/el-autocomplete&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        links: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) =&gt; {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { &quot;value&quot;: &quot;vue&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue&quot; },
          { &quot;value&quot;: &quot;element&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/element&quot; },
          { &quot;value&quot;: &quot;cooking&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/cooking&quot; },
          { &quot;value&quot;: &quot;mint-ui&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/mint-ui&quot; },
          { &quot;value&quot;: &quot;vuex&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vuex&quot; },
          { &quot;value&quot;: &quot;vue-router&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue-router&quot; },
          { &quot;value&quot;: &quot;babel&quot;, &quot;link&quot;: &quot;https://github.com/babel/babel&quot; }
         ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="custom-template"><a class="header-anchor" href="#custom-template">¶</a> Custom template</h3>
<p>Customize how suggestions are displayed.</p>
<demo-block>
        <div><p>Use <code>scoped slot</code> to customize suggestion items. In the scope, you can access the suggestion object via the <code>item</code> key.</p>
</div>
        <!--element-demo: <el-autocomplete
  popper-class="my-autocomplete"
  v-model="state"
  :fetch-suggestions="querySearch"
  placeholder="Please input"
  @select="handleSelect">
  <i
    class="el-icon-edit el-input__icon"
    slot="suffix"
    @click="handleIconClick">
  </i>
  <template slot-scope="{ item }">
    <div class="value">{{ item.value }}</div>
    <span class="link">{{ item.link }}</span>
  </template>
</el-autocomplete>

<style>
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        links: [],
        state: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestion objects
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-autocomplete
  popper-class=&quot;my-autocomplete&quot;
  v-model=&quot;state&quot;
  :fetch-suggestions=&quot;querySearch&quot;
  placeholder=&quot;Please input&quot;
  @select=&quot;handleSelect&quot;&gt;
  &lt;i
    class=&quot;el-icon-edit el-input__icon&quot;
    slot=&quot;suffix&quot;
    @click=&quot;handleIconClick&quot;&gt;
  &lt;/i&gt;
  &lt;template slot-scope=&quot;{ item }&quot;&gt;
    &lt;div class=&quot;value&quot;&gt;{{ item.value }}&lt;/div&gt;
    &lt;span class=&quot;link&quot;&gt;{{ item.link }}&lt;/span&gt;
  &lt;/template&gt;
&lt;/el-autocomplete&gt;

&lt;style&gt;
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        links: [],
        state: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestion objects
        cb(results);
      },
      createFilter(queryString) {
        return (link) =&gt; {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { &quot;value&quot;: &quot;vue&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue&quot; },
          { &quot;value&quot;: &quot;element&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/element&quot; },
          { &quot;value&quot;: &quot;cooking&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/cooking&quot; },
          { &quot;value&quot;: &quot;mint-ui&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/mint-ui&quot; },
          { &quot;value&quot;: &quot;vuex&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vuex&quot; },
          { &quot;value&quot;: &quot;vue-router&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue-router&quot; },
          { &quot;value&quot;: &quot;babel&quot;, &quot;link&quot;: &quot;https://github.com/babel/babel&quot; }
         ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="remote-search"><a class="header-anchor" href="#remote-search">¶</a> Remote search</h3>
<p>Search data from server-side.</p>
<demo-block>
        
        <!--element-demo: <el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="Please input"
  @select="handleSelect"
></el-autocomplete>
<script>
  export default {
    data() {
      return {
        links: [],
        state: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-autocomplete
  v-model=&quot;state&quot;
  :fetch-suggestions=&quot;querySearchAsync&quot;
  placeholder=&quot;Please input&quot;
  @select=&quot;handleSelect&quot;
&gt;&lt;/el-autocomplete&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        links: [],
        state: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { &quot;value&quot;: &quot;vue&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue&quot; },
          { &quot;value&quot;: &quot;element&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/element&quot; },
          { &quot;value&quot;: &quot;cooking&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/cooking&quot; },
          { &quot;value&quot;: &quot;mint-ui&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/mint-ui&quot; },
          { &quot;value&quot;: &quot;vuex&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vuex&quot; },
          { &quot;value&quot;: &quot;vue-router&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue-router&quot; },
          { &quot;value&quot;: &quot;babel&quot;, &quot;link&quot;: &quot;https://github.com/babel/babel&quot; }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() =&gt; {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) =&gt; {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="limit-length"><a class="header-anchor" href="#limit-length">¶</a> Limit length</h3>
<demo-block>
        <div><p><code>maxlength</code> and <code>minlength</code> are attributes of native input, they declare a limit on the number of characters a user can input. The &quot;number of characters&quot; is measured using JavaScript string length.Setting the <code>maxlength</code> prop for a text or textarea type of Input can limit the length of input value, allows you to show word count by setting <code>show-word-limit</code> to <code>true</code> at the same time.</p>
</div>
        <!--element-demo: <el-input
  type="text"
  placeholder="Please input"
  v-model="text"
  maxlength="10"
  show-word-limit
>
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  placeholder="Please input"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;text&quot;
  placeholder=&quot;Please input&quot;
  v-model=&quot;text&quot;
  maxlength=&quot;10&quot;
  show-word-limit
&gt;
&lt;/el-input&gt;
&lt;div style=&quot;margin: 20px 0;&quot;&gt;&lt;/div&gt;
&lt;el-input
  type=&quot;textarea&quot;
  placeholder=&quot;Please input&quot;
  v-model=&quot;textarea&quot;
  maxlength=&quot;30&quot;
  show-word-limit
&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="input-attributes"><a class="header-anchor" href="#input-attributes">¶</a> Input Attributes</h3>
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
<td>type</td>
<td>type of input</td>
<td>string</td>
<td>text, textarea and other <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">native input types</a></td>
<td>text</td>
</tr>
<tr>
<td>value / v-model</td>
<td>binding value</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>maxlength</td>
<td>same as <code>maxlength</code> in native input</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>minlength</td>
<td>same as <code>minlength</code> in native input</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-word-limit</td>
<td>whether show word count，only works when <code>type</code> is 'text' or 'textarea'</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder of Input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>whether to show clear button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-password</td>
<td>whether to show toggleable password input</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Input is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>size of Input, works when <code>type</code> is not 'textarea'</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>prefix icon class</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>suffix icon class</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>rows</td>
<td>number of rows of textarea, only works when <code>type</code> is 'textarea'</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>autosize</td>
<td>whether textarea has an adaptive height, only works when <code>type</code> is 'textarea'. Can accept an object, e.g. { minRows: 2, maxRows: 6 }</td>
<td>boolean / object</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>autocomplete</td>
<td>same as <code>autocomplete</code> in native input</td>
<td>string</td>
<td>on/off</td>
<td>off</td>
</tr>
<tr>
<td>auto-complete</td>
<td>@DEPRECATED in next major version</td>
<td>string</td>
<td>on/off</td>
<td>off</td>
</tr>
<tr>
<td>name</td>
<td>same as <code>name</code> in native input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>readonly</td>
<td>same as <code>readonly</code> in native input</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>max</td>
<td>same as <code>max</code> in native input</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min</td>
<td>same as <code>min</code> in native input</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>step</td>
<td>same as <code>step</code> in native input</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>resize</td>
<td>control the resizability</td>
<td>string</td>
<td>none, both, horizontal, vertical</td>
<td>—</td>
</tr>
<tr>
<td>autofocus</td>
<td>same as <code>autofocus</code> in native input</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>form</td>
<td>same as <code>form</code> in native input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>label text</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tabindex</td>
<td>input tabindex</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>validate-event</td>
<td>whether to trigger form validation</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="input-slots"><a class="header-anchor" href="#input-slots">¶</a> Input slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>content as Input prefix, only works when <code>type</code> is 'text'</td>
</tr>
<tr>
<td>suffix</td>
<td>content as Input suffix, only works when <code>type</code> is 'text'</td>
</tr>
<tr>
<td>prepend</td>
<td>content to prepend before Input, only works when <code>type</code> is 'text'</td>
</tr>
<tr>
<td>append</td>
<td>content to append after Input, only works when <code>type</code> is 'text'</td>
</tr>
</tbody>
</table>
<h3 id="input-events"><a class="header-anchor" href="#input-events">¶</a> Input Events</h3>
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
<td>blur</td>
<td>triggers when Input blurs</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>triggers when Input focuses</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>change</td>
<td>triggers only when the input box loses focus or the user presses Enter</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>input</td>
<td>triggers when the Input value change</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>clear</td>
<td>triggers when the Input is cleared by clicking the clear button</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="input-methods"><a class="header-anchor" href="#input-methods">¶</a> Input Methods</h3>
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
<td>focus</td>
<td>focus the input element</td>
<td>—</td>
</tr>
<tr>
<td>blur</td>
<td>blur the input element</td>
<td>—</td>
</tr>
<tr>
<td>select</td>
<td>select the text in input element</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-attributes"><a class="header-anchor" href="#autocomplete-attributes">¶</a> Autocomplete Attributes</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Options</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>placeholder</td>
<td>the placeholder of Autocomplete</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>whether to show clear button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Autocomplete is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value-key</td>
<td>key name of the input suggestion object for display</td>
<td>string</td>
<td>—</td>
<td>value</td>
</tr>
<tr>
<td>icon</td>
<td>icon name</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>value</td>
<td>binding value</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>debounce</td>
<td>debounce delay when typing, in milliseconds</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>placement</td>
<td>placement of the popup menu</td>
<td>string</td>
<td>top / top-start / top-end / bottom / bottom-start / bottom-end</td>
<td>bottom-start</td>
</tr>
<tr>
<td>fetch-suggestions</td>
<td>a method to fetch input suggestions. When suggestions are ready, invoke <code>callback(data:[])</code> to return them to Autocomplete</td>
<td>Function(queryString, callback)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for autocomplete's dropdown</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>trigger-on-focus</td>
<td>whether show suggestions when input focus</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>name</td>
<td>same as <code>name</code> in native input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-when-unmatched</td>
<td>whether to emit a <code>select</code> event on enter when there is no autocomplete match</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>label text</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>prefix icon class</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>suffix icon class</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>hide-loading</td>
<td>whether to hide the loading icon in remote search</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>highlight-first-item</td>
<td>whether to highlight first item in remote search suggestions by default</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-slots"><a class="header-anchor" href="#autocomplete-slots">¶</a> Autocomplete Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>content as Input prefix</td>
</tr>
<tr>
<td>suffix</td>
<td>content as Input suffix</td>
</tr>
<tr>
<td>prepend</td>
<td>content to prepend before Input</td>
</tr>
<tr>
<td>append</td>
<td>content to append after Input</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-scoped-slot"><a class="header-anchor" href="#autocomplete-scoped-slot">¶</a> Autocomplete Scoped Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Custom content for input suggestions. The scope parameter is { item }</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-events"><a class="header-anchor" href="#autocomplete-events">¶</a> Autocomplete Events</h3>
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
<td>select</td>
<td>triggers when a suggestion is clicked</td>
<td>suggestion being clicked</td>
</tr>
<tr>
<td>change</td>
<td>triggers when the icon inside Input value change</td>
<td>(value: string | number)</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-methods"><a class="header-anchor" href="#autocomplete-methods">¶</a> Autocomplete Methods</h3>
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
<td>focus</td>
<td>focus the input element</td>
<td>—</td>
</tr>
</tbody>
</table>
