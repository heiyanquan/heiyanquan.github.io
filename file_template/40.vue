<h2 id="table"><a class="header-anchor" href="#table">¶</a> Table</h2>
<p>Display multiple data with similar format. You can sort, filter, compare your data in a table.</p>
<h3 id="basic-table"><a class="header-anchor" href="#basic-table">¶</a> Basic table</h3>
<p>Basic table is just for data display.</p>
<demo-block>
        <div><p>After setting attribute <code>data</code> of <code>el-table</code> with an object array, you can use <code>prop</code> (corresponding to a key of the object in <code>data</code> array) in <code>el-table-column</code> to insert data to table columns, and set the attribute <code>label</code> to define the column name. You can also use the attribute <code>width</code> to define the width of columns.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">  &lt;template&gt;
    &lt;el-table
      :data=&quot;tableData&quot;
      style=&quot;width: 100%&quot;&gt;
      &lt;el-table-column
        prop=&quot;date&quot;
        label=&quot;Date&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;Name&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;address&quot;
        label=&quot;Address&quot;&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table&gt;
  &lt;/template&gt;

  &lt;script&gt;
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
        }
      }
    }
  &lt;/script&gt;
</code></pre></template></demo-block><h3 id="striped-table"><a class="header-anchor" href="#striped-table">¶</a> Striped Table</h3>
<p>Striped table makes it easier to distinguish different rows.</p>
<demo-block>
        <div><p>Attribute <code>stripe</code> accepts a <code>Boolean</code>. If <code>true</code>, table will be striped.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    stripe
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="table-with-border"><a class="header-anchor" href="#table-with-border">¶</a> Table with border</h3>
<demo-block>
        <div><p>By default, Table has no vertical border. If you need it, you can set attribute <code>border</code> to <code>true</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    border
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="table-with-status"><a class="header-anchor" href="#table-with-status">¶</a> Table with status</h3>
<p>You can highlight your table content to distinguish between &quot;success, information, warning, danger&quot; and other states.</p>
<demo-block>
        <div><p>Use <code>row-class-name</code> in <code>el-table</code> to add custom classes to a certain row. Then you can style it with custom classes.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    :row-class-name=&quot;tableRowClassName&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData:  [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="table-with-fixed-header"><a class="header-anchor" href="#table-with-fixed-header">¶</a> Table with fixed header</h3>
<p>When there are too many rows, you can use a fixed header.</p>
<demo-block>
        <div><p>By setting the attribute <code>height</code> of <code>el-table</code>, you can fix the table header without any other codes.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    height=&quot;250&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="table-with-fixed-column"><a class="header-anchor" href="#table-with-fixed-column">¶</a> Table with fixed column</h3>
<p>When there are too many columns, you can fix some of them.</p>
<demo-block>
        <div><p>Attribute <code>fixed</code> is used in <code>el-table-column</code>, it accepts a <code>Boolean</code>. If <code>true</code>, the column will be fixed at left. It also accepts two string literals: 'left' and 'right', both indicating that the column will be fixed at corresponding direction.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      fixed
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;state&quot;
      label=&quot;State&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;City&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;Zip&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      fixed=&quot;right&quot;
      label=&quot;Operations&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button @click=&quot;handleClick&quot; type=&quot;text&quot; size=&quot;small&quot;&gt;Detail&lt;/el-button&gt;
        &lt;el-button type=&quot;text&quot; size=&quot;small&quot;&gt;Edit&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      handleClick() {
        console.log('click');
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="table-with-fixed-columns-and-header"><a class="header-anchor" href="#table-with-fixed-columns-and-header">¶</a> Table with fixed columns and header</h3>
<p>When you have huge chunks of data to put in a table, you can fix the header and columns at the same time.</p>
<demo-block>
        <div><p>Fix columns and header at the same time by combining the above two examples.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    height=&quot;250&quot;&gt;
    &lt;el-table-column
      fixed
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;state&quot;
      label=&quot;State&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;City&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;Zip&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fluid-height-table-with-fixed-header-and-columns"><a class="header-anchor" href="#fluid-height-table-with-fixed-header-and-columns">¶</a> Fluid-height Table with fixed header (and columns)</h3>
<p>When the the data is dynamically changed, you might want the table to have a maximum height rather than a fixed height and to show the scroll bar if needed.</p>
<demo-block>
        <div><p>By setting the attribute <code>max-height</code> of <code>el-table</code>, you can fix the table header. The table body scrolls only if the height of the rows exceeds the max height value.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    max-height=&quot;250&quot;&gt;
    &lt;el-table-column
      fixed
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;state&quot;
      label=&quot;State&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;City&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;Zip&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      fixed=&quot;right&quot;
      label=&quot;Operations&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          @click.native.prevent=&quot;deleteRow(scope.$index, tableData)&quot;
          type=&quot;text&quot;
          size=&quot;small&quot;&gt;
          Remove
        &lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="grouping-table-head"><a class="header-anchor" href="#grouping-table-head">¶</a> Grouping table head</h3>
<p>When the data structure is complex, you can use group header to show the data hierarchy.</p>
<demo-block>
        <div><p>Only need to place el-table-column inside a el-table-column, you can achieve group header.</p>
</div>
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column label=&quot;Delivery Info&quot;&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;Name&quot;
        width=&quot;120&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column label=&quot;Address Info&quot;&gt;
        &lt;el-table-column
          prop=&quot;state&quot;
          label=&quot;State&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;city&quot;
          label=&quot;City&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;address&quot;
          label=&quot;Address&quot;
          width=&quot;300&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;zip&quot;
          label=&quot;Zip&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="single-select"><a class="header-anchor" href="#single-select">¶</a> Single select</h3>
<p>Single row selection is supported.</p>
<demo-block>
        <div><p>Table supports single row selection. You can activate it by adding the <code>highlight-current-row</code> attribute. An event called <code>current-change</code> will be triggered when row selection changes, and its parameters are the rows after and before this change: <code>currentRow</code> and <code>oldCurrentRow</code>. If you need to display row index, you can add a new <code>el-table-column</code> with its <code>type</code> attribute assigned to <code>index</code>, and you will see the index starting from 1.</p>
</div>
        <template slot="source"><element-demo9 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    ref=&quot;singleTable&quot;
    :data=&quot;tableData&quot;
    highlight-current-row
    @current-change=&quot;handleCurrentChange&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      type=&quot;index&quot;
      width=&quot;50&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;address&quot;
      label=&quot;Address&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-button @click=&quot;setCurrent(tableData[1])&quot;&gt;Select second row&lt;/el-button&gt;
    &lt;el-button @click=&quot;setCurrent()&quot;&gt;Clear selection&lt;/el-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="multiple-select"><a class="header-anchor" href="#multiple-select">¶</a> Multiple select</h3>
<p>You can also select multiple rows.</p>
<demo-block>
        <div><p>Activating multiple selection is easy: simply add an <code>el-table-column</code> with its <code>type</code> set to <code>selection</code>. Apart from multiple selection, this example also uses <code>show-overflow-tooltip</code>: by default, if the content is too long, it will break into multiple lines. If you want to keep it in one line, use attribute <code>show-overflow-tooltip</code>, which accepts a <code>Boolean</code> value. When set <code>true</code>, the extra content will show in tooltip when hover on the cell.</p>
</div>
        <template slot="source"><element-demo10 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    ref=&quot;multipleTable&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    @selection-change=&quot;handleSelectionChange&quot;&gt;
    &lt;el-table-column
      type=&quot;selection&quot;
      width=&quot;55&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Date&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;{{ scope.row.date }}&lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;address&quot;
      label=&quot;Address&quot;
      show-overflow-tooltip&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-button @click=&quot;toggleSelection([tableData[1], tableData[2]])&quot;&gt;Toggle selection status of second and third rows&lt;/el-button&gt;
    &lt;el-button @click=&quot;toggleSelection()&quot;&gt;Clear selection&lt;/el-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row =&gt; {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="sorting"><a class="header-anchor" href="#sorting">¶</a> Sorting</h3>
<p>Sort the data to find or compare data quickly.</p>
<demo-block>
        <div><p>Set attribute <code>sortable</code> in a certain column to sort the data based on this column. It accepts <code>Boolean</code> with a default value <code>false</code>. Set table attribute <code>default-sort</code> to determine default sort column and order. To apply your own sorting rules, use <code>sort-method</code> or <code>sort-by</code>. If you need remote sorting from backend, set <code>sortable</code> to <code>custom</code>, and listen to the <code>sort-change</code> event on Table. In the event handler, you have access to the sorting column and sorting order so that you can fetch sorted table data from API. In this example we use another attribute named <code>formatter</code> to format the value of certain columns. It accepts a function which has two parameters: <code>row</code> and <code>column</code>. You can handle it according to your own needs.</p>
</div>
        <template slot="source"><element-demo11 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    :default-sort = &quot;{prop: 'date', order: 'descending'}&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;
      :formatter=&quot;formatter&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="filter"><a class="header-anchor" href="#filter">¶</a> Filter</h3>
<p>Filter the table to find desired data.</p>
<demo-block>
        <div><p>Set attribute <code>filters</code> and <code>filter-method</code> in <code>el-table-column</code> makes this column filterable. <code>filters</code> is an array, and <code>filter-method</code> is a function deciding which rows are displayed. It has three parameters: <code>value</code>, <code>row</code> and <code>column</code>.</p>
</div>
        <template slot="source"><element-demo12 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button @click=&quot;resetDateFilter&quot;&gt;reset date filter&lt;/el-button&gt;
  &lt;el-button @click=&quot;clearFilter&quot;&gt;reset all filters&lt;/el-button&gt;
  &lt;el-table
    ref=&quot;filterTable&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      sortable
      width=&quot;180&quot;
      column-key=&quot;date&quot;
      :filters=&quot;[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]&quot;
      :filter-method=&quot;filterHandler&quot;
    &gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;
      :formatter=&quot;formatter&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;tag&quot;
      label=&quot;Tag&quot;
      width=&quot;100&quot;
      :filters=&quot;[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]&quot;
      :filter-method=&quot;filterTag&quot;
      filter-placement=&quot;bottom-end&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-tag
          :type=&quot;scope.row.tag === 'Home' ? 'primary' : 'success'&quot;
          disable-transitions&gt;{{scope.row.tag}}&lt;/el-tag&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }]
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="custom-column-template"><a class="header-anchor" href="#custom-column-template">¶</a> Custom column template</h3>
<p>Customize table column so it can be integrated with other components.</p>
<demo-block>
        <div><p>You have access to the following data: row, column, $index and store (state management of Table) by <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots">Scoped slot</a>.</p>
</div>
        <template slot="source"><element-demo13 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;i class=&quot;el-icon-time&quot;&gt;&lt;/i&gt;
        &lt;span style=&quot;margin-left: 10px&quot;&gt;{{ scope.row.date }}&lt;/span&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-popover trigger=&quot;hover&quot; placement=&quot;top&quot;&gt;
          &lt;p&gt;Name: {{ scope.row.name }}&lt;/p&gt;
          &lt;p&gt;Addr: {{ scope.row.address }}&lt;/p&gt;
          &lt;div slot=&quot;reference&quot; class=&quot;name-wrapper&quot;&gt;
            &lt;el-tag size=&quot;medium&quot;&gt;{{ scope.row.name }}&lt;/el-tag&gt;
          &lt;/div&gt;
        &lt;/el-popover&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Operations&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          size=&quot;mini&quot;
          @click=&quot;handleEdit(scope.$index, scope.row)&quot;&gt;Edit&lt;/el-button&gt;
        &lt;el-button
          size=&quot;mini&quot;
          type=&quot;danger&quot;
          @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;Delete&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="table-with-custom-header"><a class="header-anchor" href="#table-with-custom-header">¶</a> Table with custom header</h3>
<p>Customize table header so it can be even more customized.</p>
<demo-block>
        <div><p>You can customize how the header looks by header <a href="https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots">scoped slots</a>.</p>
</div>
        <template slot="source"><element-demo14 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData.filter(data =&gt; !search || data.name.toLowerCase().includes(search.toLowerCase()))&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      label=&quot;Date&quot;
      prop=&quot;date&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Name&quot;
      prop=&quot;name&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      align=&quot;right&quot;&gt;
      &lt;template slot=&quot;header&quot; slot-scope=&quot;scope&quot;&gt;
        &lt;el-input
          v-model=&quot;search&quot;
          size=&quot;mini&quot;
          placeholder=&quot;Type to search&quot;/&gt;
      &lt;/template&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          size=&quot;mini&quot;
          @click=&quot;handleEdit(scope.$index, scope.row)&quot;&gt;Edit&lt;/el-button&gt;
        &lt;el-button
          size=&quot;mini&quot;
          type=&quot;danger&quot;
          @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;Delete&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Jessy',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        search: '',
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="expandable-row"><a class="header-anchor" href="#expandable-row">¶</a> Expandable row</h3>
<p>When the row content is too long and you do not want to display the horizontal scroll bar, you can use the expandable row feature.</p>
<demo-block>
        <div><p>Activate expandable row by adding type=&quot;expand&quot; and scoped slot. The template for el-table-column will be rendered as the contents of the expanded row, and you can access the same attributes as when you are using <code>Scoped slot</code> in custom column templates.</p>
</div>
        <template slot="source"><element-demo15 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column type=&quot;expand&quot;&gt;
      &lt;template slot-scope=&quot;props&quot;&gt;
        &lt;p&gt;State: {{ props.row.state }}&lt;/p&gt;
        &lt;p&gt;City: {{ props.row.city }}&lt;/p&gt;
        &lt;p&gt;Address: {{ props.row.address }}&lt;/p&gt;
        &lt;p&gt;Zip: {{ props.row.zip }}&lt;/p&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Date&quot;
      prop=&quot;date&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Name&quot;
      prop=&quot;name&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tree-data-and-lazy-mode"><a class="header-anchor" href="#tree-data-and-lazy-mode">¶</a> Tree data and lazy mode</h3>
<demo-block>
        <div><p>You can display tree structure data. When row contains the <code>children</code> field, it is treated as nested data. For rendering nested data, the prop <code>row-key</code> is required。Also, child row data can be loaded asynchronously. Set <code>lazy</code> property of Table to true and the function <code>load</code>. Specify <code>hasChildren</code> attribute in row to determine which row contains children. Both <code>children</code> and <code>hasChildren</code> can be configured via <code>tree-props</code>.</p>
</div>
        <template slot="source"><element-demo16 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
&lt;div&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%;margin-bottom: 20px;&quot;
    row-key=&quot;id&quot;
    border
    default-expand-all&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;date&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;

  &lt;el-table
    :data=&quot;tableData1&quot;
    style=&quot;width: 100%&quot;
    row-key=&quot;id&quot;
    border
    lazy
    :load=&quot;load&quot;
    :tree-props=&quot;{children: 'children', hasChildren: 'hasChildren'}&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu'
        }, {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu'
        }, {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }, {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu'
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu'
        }, {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu'
        }, {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu'
        }]
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() =&gt; {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }, {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }
          ])
        }, 1000)
      }
    },
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="summary-row"><a class="header-anchor" href="#summary-row">¶</a> Summary row</h3>
<p>For table of numbers, you can add an extra row at the table footer displaying each column's sum.</p>
<demo-block>
        <div><p>You can add the summary row by setting <code>show-summary</code> to <code>true</code>. By default, for the summary row, the first column does not sum anything up but always displays 'Sum' (you can configure the displayed text using <code>sum-text</code>), while other columns sum every number in that column up and display them. You can of course define your own sum behaviour. To do so, pass a method to <code>summary-method</code>, which returns an array, and each element of the returned array will be displayed in the columns of the summary row. The second table of this example is a detailed demo.</p>
</div>
        <template slot="source"><element-demo17 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    border
    show-summary
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;id&quot;
      label=&quot;ID&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount1&quot;
      sortable
      label=&quot;Amount 1&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount2&quot;
      sortable
      label=&quot;Amount 2&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount3&quot;
      sortable
      label=&quot;Amount 3&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;

  &lt;el-table
    :data=&quot;tableData&quot;
    border
    height=&quot;200&quot;
    :summary-method=&quot;getSummaries&quot;
    show-summary
    style=&quot;width: 100%; margin-top: 20px&quot;&gt;
    &lt;el-table-column
      prop=&quot;id&quot;
      label=&quot;ID&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount1&quot;
      label=&quot;Cost 1 ($)&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount2&quot;
      label=&quot;Cost 2 ($)&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount3&quot;
      label=&quot;Cost 3 ($)&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) =&gt; {
          if (index === 0) {
            sums[index] = 'Total Cost';
            return;
          }
          const values = data.map(item =&gt; Number(item[column.property]));
          if (!values.every(value =&gt; isNaN(value))) {
            sums[index] = '$ ' + values.reduce((prev, curr) =&gt; {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="rowspan-and-colspan"><a class="header-anchor" href="#rowspan-and-colspan">¶</a> Rowspan and colspan</h3>
<p>Configuring rowspan and colspan allows you to merge cells</p>
<demo-block>
        <div><p>Use the <code>span-method</code> attribute to configure rowspan and colspan. It accepts a method, and passes an object to that method including current row <code>row</code>, current column <code>column</code>, current row index <code>rowIndex</code> and current column index <code>columnIndex</code>. The method should return an array of two numbers, the first number being <code>rowspan</code> and second <code>colspan</code>. It can also return an object with <code>rowspan</code> and <code>colspan</code> props.</p>
</div>
        <template slot="source"><element-demo18 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-table
      :data=&quot;tableData&quot;
      :span-method=&quot;arraySpanMethod&quot;
      border
      style=&quot;width: 100%&quot;&gt;
      &lt;el-table-column
        prop=&quot;id&quot;
        label=&quot;ID&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;Name&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount1&quot;
        sortable
        label=&quot;Amount 1&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount2&quot;
        sortable
        label=&quot;Amount 2&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount3&quot;
        sortable
        label=&quot;Amount 3&quot;&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table&gt;

    &lt;el-table
      :data=&quot;tableData&quot;
      :span-method=&quot;objectSpanMethod&quot;
      border
      style=&quot;width: 100%; margin-top: 20px&quot;&gt;
      &lt;el-table-column
        prop=&quot;id&quot;
        label=&quot;ID&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;Name&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount1&quot;
        label=&quot;Amount 1&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount2&quot;
        label=&quot;Amount 2&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount3&quot;
        label=&quot;Amount 3&quot;&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="custom-index"><a class="header-anchor" href="#custom-index">¶</a> Custom index</h3>
<p>You can customize row index in <code>type=index</code> columns.</p>
<demo-block>
        <div><p>To customize row indices, use <code>index</code> attribute on <code>el-table-column</code> with <code>type=index</code>. If it is assigned to a number, all indices will have an offset of that number. It also accepts a method with each index (starting from <code>0</code>) as parameter, and the returned value will be displayed as index.</p>
</div>
        <template slot="source"><element-demo19 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      type=&quot;index&quot;
      :index=&quot;indexMethod&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Address&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }],
      }
    },
    methods: {
      indexMethod(index) {
        return index * 2;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="table-attributes"><a class="header-anchor" href="#table-attributes">¶</a> Table Attributes</h3>
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
<td>data</td>
<td>Table data</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>height</td>
<td>Table's height. By default it has an <code>auto</code> height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max-height</td>
<td>Table's max-height. The legal value is a number or the height in px.</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>stripe</td>
<td>whether Table is striped</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>whether Table has vertical border</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>size of Table</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>fit</td>
<td>whether width of column automatically fits its container</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-header</td>
<td>whether Table header is visible</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>highlight-current-row</td>
<td>whether current row is highlighted</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>current-row-key</td>
<td>key of current row, a set only prop</td>
<td>string,number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-class-name</td>
<td>function that returns custom class names for a row, or a string assigning class names for every row</td>
<td>Function({row, rowIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-style</td>
<td>function that returns custom style for a row, or an object assigning custom style for every row</td>
<td>Function({row, rowIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-class-name</td>
<td>function that returns custom class names for a cell, or a string assigning class names for every cell</td>
<td>Function({row, column, rowIndex, columnIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-style</td>
<td>function that returns custom style for a cell, or an object assigning custom style for every cell</td>
<td>Function({row, column, rowIndex, columnIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-class-name</td>
<td>function that returns custom class names for a row in table header, or a string assigning class names for every row in table header</td>
<td>Function({row, rowIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-style</td>
<td>function that returns custom style for a row in table header, or an object assigning custom style for every row in table header</td>
<td>Function({row, rowIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-class-name</td>
<td>function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header</td>
<td>Function({row, column, rowIndex, columnIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-style</td>
<td>function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header</td>
<td>Function({row, column, rowIndex, columnIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-key</td>
<td>key of row data, used for optimizing rendering. Required if <code>reserve-selection</code> is on or display tree data. When its type is String, multi-level access is supported, e.g. <code>user.info.id</code>, but <code>user.info[0].id</code> is not supported, in which case <code>Function</code> should be used.</td>
<td>Function(row)/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>Displayed text when data is empty. You can customize this area with <code>slot=&quot;empty&quot;</code></td>
<td>String</td>
<td>—</td>
<td>No Data</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>whether expand all rows by default, works when the table has a column type=&quot;expand&quot; or contains tree structure data</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>expand-row-keys</td>
<td>set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop</td>
<td>Array</td>
<td>—</td>
<td></td>
</tr>
<tr>
<td>default-sort</td>
<td>set the default sort column and order. property <code>prop</code> is used to set default sort column, property <code>order</code> is used to set default sort order</td>
<td>Object</td>
<td><code>order</code>: ascending, descending</td>
<td>if <code>prop</code> is set, and <code>order</code> is not set, then <code>order</code> is default to ascending</td>
</tr>
<tr>
<td>tooltip-effect</td>
<td>tooltip <code>effect</code> property</td>
<td>String</td>
<td>dark/light</td>
<td></td>
</tr>
<tr>
<td>show-summary</td>
<td>whether to display a summary row</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>sum-text</td>
<td>displayed text for the first column of summary row</td>
<td>String</td>
<td>—</td>
<td>Sum</td>
</tr>
<tr>
<td>summary-method</td>
<td>custom summary method</td>
<td>Function({ columns, data })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>span-method</td>
<td>method that returns rowspan and colspan</td>
<td>Function({ row, column, rowIndex, columnIndex })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-on-indeterminate</td>
<td>controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected.</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>indent</td>
<td>horizontal indentation of tree data</td>
<td>Number</td>
<td>—</td>
<td>16</td>
</tr>
<tr>
<td>lazy</td>
<td>whether to lazy loading data</td>
<td>Boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>load</td>
<td>method for loading child row data, only works when <code>lazy</code> is true</td>
<td>Function(row, treeNode, resolve)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tree-props</td>
<td>configuration for rendering nested data</td>
<td>Object</td>
<td>—</td>
<td>{ hasChildren: 'hasChildren', children: 'children' }</td>
</tr>
</tbody>
</table>
<h3 id="table-events"><a class="header-anchor" href="#table-events">¶</a> Table Events</h3>
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
<td>triggers when user clicks the checkbox in a row</td>
<td>selection, row</td>
</tr>
<tr>
<td>select-all</td>
<td>triggers when user clicks the checkbox in table header</td>
<td>selection</td>
</tr>
<tr>
<td>selection-change</td>
<td>triggers when selection changes</td>
<td>selection</td>
</tr>
<tr>
<td>cell-mouse-enter</td>
<td>triggers when hovering into a cell</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-mouse-leave</td>
<td>triggers when hovering out of a cell</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-click</td>
<td>triggers when clicking a cell</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-dblclick</td>
<td>triggers when double clicking a cell</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>row-click</td>
<td>triggers when clicking a row</td>
<td>row, column, event</td>
</tr>
<tr>
<td>row-contextmenu</td>
<td>triggers when user right clicks on a row</td>
<td>row, column, event</td>
</tr>
<tr>
<td>row-dblclick</td>
<td>triggers when double clicking a row</td>
<td>row, column, event</td>
</tr>
<tr>
<td>header-click</td>
<td>triggers when clicking a column header</td>
<td>column, event</td>
</tr>
<tr>
<td>header-contextmenu</td>
<td>triggers when user right clicks on a column header</td>
<td>column, event</td>
</tr>
<tr>
<td>sort-change</td>
<td>triggers when Table's sorting changes</td>
<td>{ column, prop, order }</td>
</tr>
<tr>
<td>filter-change</td>
<td>column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered</td>
<td>filters</td>
</tr>
<tr>
<td>current-change</td>
<td>triggers when current row changes</td>
<td>currentRow, oldCurrentRow</td>
</tr>
<tr>
<td>header-dragend</td>
<td>triggers after changing a column's width by dragging the column header's border</td>
<td>newWidth, oldWidth, column, event</td>
</tr>
<tr>
<td>expand-change</td>
<td>triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded)</td>
<td>row, (expandedRows | expanded)</td>
</tr>
</tbody>
</table>
<h3 id="table-methods"><a class="header-anchor" href="#table-methods">¶</a> Table Methods</h3>
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
<td>clearSelection</td>
<td>used in multiple selection Table, clear user selection</td>
<td>—</td>
</tr>
<tr>
<td>toggleRowSelection</td>
<td>used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected</td>
<td>row, selected</td>
</tr>
<tr>
<td>toggleAllSelection</td>
<td>used in multiple selection Table, toggle the selected state of all rows</td>
<td>-</td>
</tr>
<tr>
<td>toggleRowExpansion</td>
<td>used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed</td>
<td>row, expanded</td>
</tr>
<tr>
<td>setCurrentRow</td>
<td>used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection.</td>
<td>row</td>
</tr>
<tr>
<td>clearSort</td>
<td>clear sorting, restore data to the original order</td>
<td>—</td>
</tr>
<tr>
<td>clearFilter</td>
<td>clear filters of the columns whose <code>columnKey</code> are passed in. If no params, clear all filters</td>
<td>columnKeys</td>
</tr>
<tr>
<td>doLayout</td>
<td>refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout</td>
<td>—</td>
</tr>
<tr>
<td>sort</td>
<td>sort Table manually. Property <code>prop</code> is used to set sort column, property <code>order</code> is used to set sort order</td>
<td>prop: string, order: string</td>
</tr>
</tbody>
</table>
<h3 id="table-slot"><a class="header-anchor" href="#table-slot">¶</a> Table Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>append</td>
<td>Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one.</td>
</tr>
</tbody>
</table>
<h3 id="table-column-attributes"><a class="header-anchor" href="#table-column-attributes">¶</a> Table-column Attributes</h3>
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
<td>type of the column. If set to <code>selection</code>, the column will display checkbox. If set to <code>index</code>, the column will display index of the row (staring from 1). If set to <code>expand</code>, the column will display expand icon.</td>
<td>string</td>
<td>selection/index/expand</td>
<td>—</td>
</tr>
<tr>
<td>index</td>
<td>customize indices for each row, works on columns with <code>type=index</code></td>
<td>number, Function(index)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>column label</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>column-key</td>
<td>column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered</td>
<td>string</td>
<td>string</td>
<td>—</td>
</tr>
<tr>
<td>prop</td>
<td>field name. You can also use its alias: <code>property</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>column width</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min-width</td>
<td>column minimum width. Columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>fixed</td>
<td>whether column is fixed at left/right. Will be fixed at left if <code>true</code></td>
<td>string/boolean</td>
<td>true/left/right</td>
<td>—</td>
</tr>
<tr>
<td>render-header</td>
<td>render function for table header of this column</td>
<td>Function(h, { column, $index })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sortable</td>
<td>whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the <code>sort-change</code> event of Table</td>
<td>boolean, string</td>
<td>true, false, custom</td>
<td>false</td>
</tr>
<tr>
<td>sort-method</td>
<td>sorting method, works when <code>sortable</code> is <code>true</code>. Should return a number, just like Array.sort</td>
<td>Function(a, b)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sort-by</td>
<td>specify which property to sort by, works when <code>sortable</code> is <code>true</code> and <code>sort-method</code> is <code>undefined</code>. If set to an Array, the column will sequentially sort by the next property if the previous one is equal</td>
<td>Function(row, index)/String/Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sort-orders</td>
<td>the order of the sorting strategies used when sorting the data, works when <code>sortable</code> is <code>true</code>. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array</td>
<td>array</td>
<td>the elements in the array need to be one of the following: <code>ascending</code>, <code>descending</code> and <code>null</code> (restores to the original order)</td>
<td>['ascending', 'descending', null]</td>
</tr>
<tr>
<td>resizable</td>
<td>whether column width can be resized, works when <code>border</code> of <code>el-table</code> is <code>true</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>formatter</td>
<td>function that formats cell content</td>
<td>Function(row, column, cellValue, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-overflow-tooltip</td>
<td>whether to hide extra content and show them in a tooltip when hovering on the cell</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>align</td>
<td>alignment</td>
<td>string</td>
<td>left/center/right</td>
<td>left</td>
</tr>
<tr>
<td>header-align</td>
<td>alignment of the table header. If omitted, the value of the above <code>align</code> attribute will be applied</td>
<td>String</td>
<td>left/center/right</td>
<td>—</td>
</tr>
<tr>
<td>class-name</td>
<td>class name of cells in the column</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-class-name</td>
<td>class name of the label of this column</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>selectable</td>
<td>function that determines if a certain row can be selected, works when <code>type</code> is 'selection'</td>
<td>Function(row, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>reserve-selection</td>
<td>whether to reserve selection after data refreshing, works when <code>type</code> is 'selection'. Note that <code>row-key</code> is required for this to work</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filters</td>
<td>an array of data filtering options. For each element in this array, <code>text</code> and <code>value</code> are required</td>
<td>Array[{ text, value }]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-placement</td>
<td>placement for the filter dropdown</td>
<td>String</td>
<td>same as Tooltip's <code>placement</code></td>
<td>—</td>
</tr>
<tr>
<td>filter-multiple</td>
<td>whether data filtering supports multiple options</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>filter-method</td>
<td>data filtering method. If <code>filter-multiple</code> is on, this method will be called multiple times for each row, and a row will display if one of the calls returns <code>true</code></td>
<td>Function(value, row, column)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filtered-value</td>
<td>filter value for selected data, might be useful when table header is rendered with <code>render-header</code></td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="table-column-scoped-slot"><a class="header-anchor" href="#table-column-scoped-slot">¶</a> Table-column Scoped Slot</h3>
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
<td>Custom content for table columns. The scope parameter is { row, column, $index }</td>
</tr>
<tr>
<td>header</td>
<td>Custom content for table header. The scope parameter is { column, $index }</td>
</tr>
</tbody>
</table>
