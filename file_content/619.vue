<h2 id="upload-shang-chuan"><a class="header-anchor" href="#upload-shang-chuan">¶</a> Upload 上传</h2>
<p>通过点击或者拖拽上传文件</p>
<h3 id="dian-ji-shang-chuan"><a class="header-anchor" href="#dian-ji-shang-chuan">¶</a> 点击上传</h3>
<demo-block>
        <div><p>通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置<code>limit</code>和<code>on-exceed</code>来限制上传文件的个数和定义超出限制时的行为。可通过设置<code>before-remove</code>来阻止文件移除操作。</p>
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
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
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
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;点击上传&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;只能上传jpg/png文件，且不超过500kb&lt;/div&gt;
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
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="yong-hu-tou-xiang-shang-chuan"><a class="header-anchor" href="#yong-hu-tou-xiang-shang-chuan">¶</a> 用户头像上传</h3>
<p>使用 <code>before-upload</code> 限制用户上传的图片格式和大小。</p>
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
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
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
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG &amp;&amp; isLt2M;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zhao-pian-qiang"><a class="header-anchor" href="#zhao-pian-qiang">¶</a> 照片墙</h3>
<p>使用 <code>list-type</code> 属性来设置文件列表的样式。</p>
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
</code></pre></template></demo-block><h3 id="wen-jian-suo-lue-tu"><a class="header-anchor" href="#wen-jian-suo-lue-tu">¶</a> 文件缩略图</h3>
<p>使用 <code>scoped-slot</code> 去设置缩略图模版。</p>
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
</code></pre></template></demo-block><h3 id="tu-pian-lie-biao-suo-lue-tu"><a class="header-anchor" href="#tu-pian-lie-biao-suo-lue-tu">¶</a> 图片列表缩略图</h3>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;点击上传&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;只能上传jpg/png文件，且不超过500kb&lt;/div&gt;
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
</code></pre></template></demo-block><h3 id="shang-chuan-wen-jian-lie-biao-kong-zhi"><a class="header-anchor" href="#shang-chuan-wen-jian-lie-biao-kong-zhi">¶</a> 上传文件列表控制</h3>
<p>通过 <code>on-change</code> 钩子函数来对列表进行控制</p>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;点击上传&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;只能上传jpg/png文件，且不超过500kb&lt;/div&gt;
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
</code></pre></template></demo-block><h3 id="tuo-zhuai-shang-chuan"><a class="header-anchor" href="#tuo-zhuai-shang-chuan">¶</a> 拖拽上传</h3>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  drag
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  multiple&gt;
  &lt;i class=&quot;el-icon-upload&quot;&gt;&lt;/i&gt;
  &lt;div class=&quot;el-upload__text&quot;&gt;将文件拖到此处，或&lt;em&gt;点击上传&lt;/em&gt;&lt;/div&gt;
  &lt;div class=&quot;el-upload__tip&quot; slot=&quot;tip&quot;&gt;只能上传jpg/png文件，且不超过500kb&lt;/div&gt;
&lt;/el-upload&gt;
</code></pre></template></demo-block><h3 id="shou-dong-shang-chuan"><a class="header-anchor" href="#shou-dong-shang-chuan">¶</a> 手动上传</h3>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
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
  ref=&quot;upload&quot;
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :on-preview=&quot;handlePreview&quot;
  :on-remove=&quot;handleRemove&quot;
  :file-list=&quot;fileList&quot;
  :auto-upload=&quot;false&quot;&gt;
  &lt;el-button slot=&quot;trigger&quot; size=&quot;small&quot; type=&quot;primary&quot;&gt;选取文件&lt;/el-button&gt;
  &lt;el-button style=&quot;margin-left: 10px;&quot; size=&quot;small&quot; type=&quot;success&quot; @click=&quot;submitUpload&quot;&gt;上传到服务器&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;只能上传jpg/png文件，且不超过500kb&lt;/div&gt;
&lt;/el-upload&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="attribute"><a class="header-anchor" href="#attribute">¶</a> Attribute</h3>
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
<td>action</td>
<td>必选参数，上传的地址</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>headers</td>
<td>设置上传的请求头部</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>multiple</td>
<td>是否支持多选文件</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>上传时附带的额外参数</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>上传的文件字段名</td>
<td>string</td>
<td>—</td>
<td>file</td>
</tr>
<tr>
<td>with-credentials</td>
<td>支持发送 cookie 凭证信息</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-file-list</td>
<td>是否显示已上传文件列表</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>drag</td>
<td>是否启用拖拽上传</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>accept</td>
<td>接受上传的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">文件类型</a>（thumbnail-mode 模式下此参数无效）</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-preview</td>
<td>点击文件列表中已上传的文件时的钩子</td>
<td>function(file)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-remove</td>
<td>文件列表移除文件时的钩子</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-success</td>
<td>文件上传成功时的钩子</td>
<td>function(response, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-error</td>
<td>文件上传失败时的钩子</td>
<td>function(err, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-progress</td>
<td>文件上传时的钩子</td>
<td>function(event, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-change</td>
<td>文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>before-upload</td>
<td>上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。</td>
<td>function(file)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>before-remove</td>
<td>删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>list-type</td>
<td>文件列表的类型</td>
<td>string</td>
<td>text/picture/picture-card</td>
<td>text</td>
</tr>
<tr>
<td>auto-upload</td>
<td>是否在选取文件后立即进行上传</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>file-list</td>
<td>上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]</td>
<td>array</td>
<td>—</td>
<td>[]</td>
</tr>
<tr>
<td>http-request</td>
<td>覆盖默认的上传行为，可以自定义上传的实现</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>limit</td>
<td>最大允许上传个数</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-exceed</td>
<td>文件超出个数限制时的钩子</td>
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
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>trigger</td>
<td>触发文件选择框的内容</td>
</tr>
<tr>
<td>tip</td>
<td>提示说明文字</td>
</tr>
</tbody>
</table>
<h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3>
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
<td>clearFiles</td>
<td>清空已上传的文件列表（该方法不支持在 before-upload 中调用）</td>
<td>—</td>
</tr>
<tr>
<td>abort</td>
<td>取消上传请求</td>
<td>（ file: fileList 中的 file 对象 ）</td>
</tr>
<tr>
<td>submit</td>
<td>手动上传文件列表</td>
<td>—</td>
</tr>
</tbody>
</table>
