<h2 id="upload"><a class="header-anchor" href="#upload">¶</a> Upload</h2>
<p>Upload files by clicking or drag-and-drop</p>
<h3 id="click-to-upload-files"><a class="header-anchor" href="#click-to-upload-files">¶</a> Click to upload files</h3>
<demo-block>
        <div><p>Customize upload button type and text using <code>slot</code>. Set <code>limit</code> and <code>on-exceed</code> to limit the maximum number of uploads allowed and specify method when the limit is exceeded. Plus, you can abort removing a file in the <code>before-remove</code> hook.</p>
</div>
        <!--element-demo: <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">Click to upload</el-button>
  <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :on-preview=&quot;handlePreview&quot;
  :on-remove=&quot;handleRemove&quot;
  :before-remove=&quot;beforeRemove&quot;
  multiple
  :limit=&quot;3&quot;
  :on-exceed=&quot;handleExceed&quot;
  :file-list=&quot;fileList&quot;&gt;
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;Click to upload&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;jpg/png files with a size less than 500kb&lt;/div&gt;
&lt;/el-upload&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="user-avatar-upload"><a class="header-anchor" href="#user-avatar-upload">¶</a> User avatar upload</h3>
<p>Use <code>before-upload</code> hook to limit the upload file format and size.</p>
<demo-block>
        
        <!--element-demo: <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;avatar-uploader&quot;
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :show-file-list=&quot;false&quot;
  :on-success=&quot;handleAvatarSuccess&quot;
  :before-upload=&quot;beforeAvatarUpload&quot;&gt;
  &lt;img v-if=&quot;imageUrl&quot; :src=&quot;imageUrl&quot; class=&quot;avatar&quot;&gt;
  &lt;i v-else class=&quot;el-icon-plus avatar-uploader-icon&quot;&gt;&lt;/i&gt;
&lt;/el-upload&gt;

&lt;style&gt;
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 &lt; 2;

        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        return isJPG &amp;&amp; isLt2M;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="photo-wall"><a class="header-anchor" href="#photo-wall">¶</a> Photo Wall</h3>
<p>Use <code>list-type</code> to change the fileList style.</p>
<demo-block>
        
        <!--element-demo: <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  list-type=&quot;picture-card&quot;
  :on-preview=&quot;handlePictureCardPreview&quot;
  :on-remove=&quot;handleRemove&quot;&gt;
  &lt;i class=&quot;el-icon-plus&quot;&gt;&lt;/i&gt;
&lt;/el-upload&gt;
&lt;el-dialog :visible.sync=&quot;dialogVisible&quot;&gt;
  &lt;img width=&quot;100%&quot; :src=&quot;dialogImageUrl&quot; alt=&quot;&quot;&gt;
&lt;/el-dialog&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="custom-file-thumbnail"><a class="header-anchor" href="#custom-file-thumbnail">¶</a> Custom file thumbnail</h3>
<p>Use <code>scoped-slot</code> to change default thumbnail template.</p>
<demo-block>
        
        <!--element-demo: <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      };
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  action=&quot;#&quot;
  list-type=&quot;picture-card&quot;
  :auto-upload=&quot;false&quot;&gt;
    &lt;i slot=&quot;default&quot; class=&quot;el-icon-plus&quot;&gt;&lt;/i&gt;
    &lt;div slot=&quot;file&quot; slot-scope=&quot;{file}&quot;&gt;
      &lt;img
        class=&quot;el-upload-list__item-thumbnail&quot;
        :src=&quot;file.url&quot; alt=&quot;&quot;
      &gt;
      &lt;span class=&quot;el-upload-list__item-actions&quot;&gt;
        &lt;span
          class=&quot;el-upload-list__item-preview&quot;
          @click=&quot;handlePictureCardPreview(file)&quot;
        &gt;
          &lt;i class=&quot;el-icon-zoom-in&quot;&gt;&lt;/i&gt;
        &lt;/span&gt;
        &lt;span
          v-if=&quot;!disabled&quot;
          class=&quot;el-upload-list__item-delete&quot;
          @click=&quot;handleDownload(file)&quot;
        &gt;
          &lt;i class=&quot;el-icon-download&quot;&gt;&lt;/i&gt;
        &lt;/span&gt;
        &lt;span
          v-if=&quot;!disabled&quot;
          class=&quot;el-upload-list__item-delete&quot;
          @click=&quot;handleRemove(file)&quot;
        &gt;
          &lt;i class=&quot;el-icon-delete&quot;&gt;&lt;/i&gt;
        &lt;/span&gt;
      &lt;/span&gt;
    &lt;/div&gt;
&lt;/el-upload&gt;
&lt;el-dialog :visible.sync=&quot;dialogVisible&quot;&gt;
  &lt;img width=&quot;100%&quot; :src=&quot;dialogImageUrl&quot; alt=&quot;&quot;&gt;
&lt;/el-dialog&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      };
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="filelist-with-thumbnail"><a class="header-anchor" href="#filelist-with-thumbnail">¶</a> FileList with thumbnail</h3>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">Click to upload</el-button>
  <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :on-preview=&quot;handlePreview&quot;
  :on-remove=&quot;handleRemove&quot;
  :file-list=&quot;fileList&quot;
  list-type=&quot;picture&quot;&gt;
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;Click to upload&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;jpg/png files with a size less than 500kb&lt;/div&gt;
&lt;/el-upload&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="file-list-control"><a class="header-anchor" href="#file-list-control">¶</a> File list control</h3>
<p>Use <code>on-change</code> hook function to control upload file list</p>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList">
  <el-button size="small" type="primary">Click to upload</el-button>
  <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :on-change=&quot;handleChange&quot;
  :file-list=&quot;fileList&quot;&gt;
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;Click to upload&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;jpg/png files with a size less than 500kb&lt;/div&gt;
&lt;/el-upload&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="drag-to-upload"><a class="header-anchor" href="#drag-to-upload">¶</a> Drag to upload</h3>
<p>You can drag your file to a certain area to upload it.</p>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  drag
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :on-preview=&quot;handlePreview&quot;
  :on-remove=&quot;handleRemove&quot;
  :file-list=&quot;fileList&quot;
  multiple&gt;
  &lt;i class=&quot;el-icon-upload&quot;&gt;&lt;/i&gt;
  &lt;div class=&quot;el-upload__text&quot;&gt;Drop file here or &lt;em&gt;click to upload&lt;/em&gt;&lt;/div&gt;
  &lt;div class=&quot;el-upload__tip&quot; slot=&quot;tip&quot;&gt;jpg/png files with a size less than 500kb&lt;/div&gt;
&lt;/el-upload&gt;
</code></pre></template></demo-block><h3 id="manual-upload"><a class="header-anchor" href="#manual-upload">¶</a> Manual upload</h3>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">select file</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">upload to server</el-button>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
<script>
  export default {
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  ref=&quot;upload&quot;
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :auto-upload=&quot;false&quot;&gt;
  &lt;el-button slot=&quot;trigger&quot; size=&quot;small&quot; type=&quot;primary&quot;&gt;select file&lt;/el-button&gt;
  &lt;el-button style=&quot;margin-left: 10px;&quot; size=&quot;small&quot; type=&quot;success&quot; @click=&quot;submitUpload&quot;&gt;upload to server&lt;/el-button&gt;
  &lt;div class=&quot;el-upload__tip&quot; slot=&quot;tip&quot;&gt;jpg/png files with a size less than 500kb&lt;/div&gt;
&lt;/el-upload&gt;
&lt;script&gt;
  export default {
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
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
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>action</td>
<td>required, request URL</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>headers</td>
<td>request headers</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>multiple</td>
<td>whether uploading multiple files is permitted</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>additions options of request</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>key name for uploaded file</td>
<td>string</td>
<td>—</td>
<td>file</td>
</tr>
<tr>
<td>with-credentials</td>
<td>whether cookies are sent</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-file-list</td>
<td>whether to show the uploaded file list</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>drag</td>
<td>whether to activate drag and drop mode</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>accept</td>
<td>accepted <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">file types</a>, will not work when <code>thumbnail-mode</code> is <code>true</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-preview</td>
<td>hook function when clicking the uploaded files</td>
<td>function(file)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-remove</td>
<td>hook function when files are removed</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-success</td>
<td>hook function when uploaded successfully</td>
<td>function(response, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-error</td>
<td>hook function when some errors occurs</td>
<td>function(err, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-progress</td>
<td>hook function when some progress occurs</td>
<td>function(event, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-change</td>
<td>hook function when select file or upload file success or upload file fail</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>before-upload</td>
<td>hook function before uploading with the file to be uploaded as its parameter. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, uploading will be aborted</td>
<td>function(file)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>before-remove</td>
<td>hook function before removing a file with the file and file list as its parameters. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, removing will be aborted.</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>thumbnail-mode</td>
<td>whether thumbnail is displayed</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>file-list</td>
<td>default uploaded files, e.g. [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]</td>
<td>array</td>
<td>—</td>
<td>[]</td>
</tr>
<tr>
<td>list-type</td>
<td>type of fileList</td>
<td>string</td>
<td>text/picture/picture-card</td>
<td>text</td>
</tr>
<tr>
<td>auto-upload</td>
<td>whether to auto upload file</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>http-request</td>
<td>override default xhr behavior, allowing you to implement your own upload-file's request</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether to disable upload</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>limit</td>
<td>maximum number of uploads allowed</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-exceed</td>
<td>hook function when limit is exceeded</td>
<td>function(files, fileList)</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>trigger</td>
<td>content which triggers file dialog</td>
</tr>
<tr>
<td>tip</td>
<td>content of tips</td>
</tr>
</tbody>
</table>
<h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3>
<table>
<thead>
<tr>
<th>Methods Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>clearFiles</td>
<td>clear the uploaded file list (this method is not supported in the <code>before-upload</code> hook)</td>
<td>—</td>
</tr>
<tr>
<td>abort</td>
<td>cancel upload request</td>
<td>（ file: fileList's item ）</td>
</tr>
<tr>
<td>submit</td>
<td>upload the file list manually</td>
<td>—</td>
</tr>
</tbody>
</table>
