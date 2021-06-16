<h2 id="upload"><a class="header-anchor" href="#upload">¶</a> Upload</h2>
<p>Permet d'uploader des fichiers en cliquant ou en les déplaçant sur le composant.</p>
<h3 id="cliquer-pour-envoyer"><a class="header-anchor" href="#cliquer-pour-envoyer">¶</a> Cliquer pour envoyer</h3>
<demo-block>
        <div><p>Personnalisez le bouton d'envoi avec <code>slot</code>. Utilisez <code>limit</code> et <code>on-exceed</code> pour limiter le nombre maximal de fichiers et déterminer le comportement quand ce nombre est dépassé. De plus, vous pouvez annuler la suppression d'un fichier avec <code>before-remove</code>.</p>
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
  <el-button size="small" type="primary">Cliquer pour envoyer</el-button>
  <div slot="tip" class="el-upload__tip">Fichiers jpg/png avec une taille inférieure à 500kb</div>
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
        this.$message.warning(`La limite est 3, vous avez choisi ${files.length} fichiers, soit ${files.length + fileList.length} au total.`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`Supprimer le transfert de ${ file.name } ?`);
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
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;Cliquer pour envoyer&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;Fichiers jpg/png avec une taille inférieure à 500kb&lt;/div&gt;
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
        this.$message.warning(`La limite est 3, vous avez choisi ${files.length} fichiers, soit ${files.length + fileList.length} au total.`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`Supprimer le transfert de ${ file.name } ?`);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="envoi-d-avatar-utilisateur"><a class="header-anchor" href="#envoi-d-avatar-utilisateur">¶</a> Envoi d'avatar utilisateur</h3>
<p>Utilisez <code>before-upload</code> pour restreindre le format et la taille du fichier à envoyer.</p>
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
          this.$message.error('L\'avatar doit être en JPG !');
        }
        if (!isLt2M) {
          this.$message.error('L\'avatar ne peut pas excéder 2Mb !');
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
          this.$message.error('L\'avatar doit être en JPG !');
        }
        if (!isLt2M) {
          this.$message.error('L\'avatar ne peut pas excéder 2Mb !');
        }
        return isJPG &amp;&amp; isLt2M;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="mur-de-photos"><a class="header-anchor" href="#mur-de-photos">¶</a> Mur de photos</h3>
<p>Utilisez <code>list-type</code> pour changer le style de la liste de fichiers.</p>
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
</code></pre></template></demo-block><h3 id="liste-de-fichiers-avec-miniatures"><a class="header-anchor" href="#liste-de-fichiers-avec-miniatures">¶</a> Liste de fichiers avec miniatures</h3>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">Cliquer pour envoyer</el-button>
  <div slot="tip" class="el-upload__tip">Fichiers jpg/png avec une taille inférieure à 500kb</div>
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
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;Cliquer pour envoyer&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;Fichiers jpg/png avec une taille inférieure à 500kb&lt;/div&gt;
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
</code></pre></template></demo-block><h3 id="controle-de-la-liste-de-fichiers"><a class="header-anchor" href="#controle-de-la-liste-de-fichiers">¶</a> Contrôle de la liste de fichiers</h3>
<p>Utilisez <code>on-change</code> pour contrôler le comportement de la liste de fichiers.</p>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList">
  <el-button size="small" type="primary">Cliquer pour envoyer</el-button>
  <div slot="tip" class="el-upload__tip">Fichiers jpg/png avec une taille inférieure à 500kb</div>
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
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;Cliquer pour envoyer&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;Fichiers jpg/png avec une taille inférieure à 500kb&lt;/div&gt;
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
</code></pre></template></demo-block><h3 id="envoi-en-deposant"><a class="header-anchor" href="#envoi-en-deposant">¶</a> Envoi en déposant</h3>
<p>Vous pouvez déposer les fichiers par drag'n drop sur l'espace dédié.</p>
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
  <div class="el-upload__text">Déposer les fichiers ici ou<em>cliquez pour envoyer</em></div>
  <div class="el-upload__tip" slot="tip">Fichiers jpg/png avec une taille inférieure à 500kb</div>
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
  &lt;div class=&quot;el-upload__text&quot;&gt;Déposer les fichiers ici ou&lt;em&gt;cliquez pour envoyer&lt;/em&gt;&lt;/div&gt;
  &lt;div class=&quot;el-upload__tip&quot; slot=&quot;tip&quot;&gt;Fichiers jpg/png avec une taille inférieure à 500kb&lt;/div&gt;
&lt;/el-upload&gt;
</code></pre></template></demo-block><h3 id="envoi-manuel"><a class="header-anchor" href="#envoi-manuel">¶</a> Envoi manuel</h3>
<demo-block>
        
        <!--element-demo: <el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">Choisir un fichier</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">Envoyer au serveur</el-button>
  <div class="el-upload__tip" slot="tip">Fichiers jpg/png avec une taille inférieure à 500kb</div>
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
  &lt;el-button slot=&quot;trigger&quot; size=&quot;small&quot; type=&quot;primary&quot;&gt;Choisir un fichier&lt;/el-button&gt;
  &lt;el-button style=&quot;margin-left: 10px;&quot; size=&quot;small&quot; type=&quot;success&quot; @click=&quot;submitUpload&quot;&gt;Envoyer au serveur&lt;/el-button&gt;
  &lt;div class=&quot;el-upload__tip&quot; slot=&quot;tip&quot;&gt;Fichiers jpg/png avec une taille inférieure à 500kb&lt;/div&gt;
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
</code></pre></template></demo-block><h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>action</td>
<td>Requis, l'url de requête.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>headers</td>
<td>Les headers de la requête.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>multiple</td>
<td>Si envoyer de multiples fichiers est autorisé.</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>Options additionnelles de la requête.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>Identifiant du fichier.</td>
<td>string</td>
<td>—</td>
<td>file</td>
</tr>
<tr>
<td>with-credentials</td>
<td>Si les cookies sont aussi envoyés.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-file-list</td>
<td>Si la liste des fichiers est affichée.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>drag</td>
<td>Si le mode drag'n drop est activé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>accept</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">Types de fichiers</a> acceptés, ne marche pas si <code>thumbnail-mode</code> est <code>true</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-preview</td>
<td>Fonction pour quand le fichier est cliqué.</td>
<td>function(file)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-remove</td>
<td>Fonction pour quand des fichiers sont supprimés.</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-success</td>
<td>Fonction pour quand l'upload a réussi.</td>
<td>function(response, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-error</td>
<td>Fonction pour quand l'upload renvoi une erreur.</td>
<td>function(err, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-progress</td>
<td>Fonction pour quand l'upload est en cours.</td>
<td>function(event, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-change</td>
<td>Fonction pour quand le statut d'un fichier change (sélection, upload, erreur...).</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>before-upload</td>
<td>Fonction pour avant l'upload. Si <code>false</code> est retourné ou une <code>Promise</code> qui est ensuite rejetée, l'envoi sera annulé.</td>
<td>function(file)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>before-remove</td>
<td>Fonction pour avant la suppression de fichiers. Si <code>false</code> est retourné ou une <code>Promise</code> qui est ensuite rejetée, la suppression sera ensuite annulée.</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>thumbnail-mode</td>
<td>Si les miniatures sont affichées.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>file-list</td>
<td>Les fichiers envoyé par défaut, e.g. [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]</td>
<td>array</td>
<td>—</td>
<td>[]</td>
</tr>
<tr>
<td>list-type</td>
<td>Le type de liste de fichiers.</td>
<td>string</td>
<td>text/picture/picture-card</td>
<td>text</td>
</tr>
<tr>
<td>auto-upload</td>
<td>Si l'envoi est automatique.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>http-request</td>
<td>Écrase le xhr par défaut, afin que vous puissiez implémenter votre propre fonction d'envoi.</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le composant est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>limit</td>
<td>Nombre maximum d'envoi autorisés.</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-exceed</td>
<td>Fonction pour quand la limite d'envoi est dépassée.</td>
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
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>trigger</td>
<td>Le contenu qui déclenche le Dialog du fichier.</td>
</tr>
<tr>
<td>tip</td>
<td>Le contenu des tips.</td>
</tr>
</tbody>
</table>
<h3 id="methodes"><a class="header-anchor" href="#methodes">¶</a> Méthodes</h3>
<table>
<thead>
<tr>
<th>Méthode</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>clearFiles</td>
<td>Efface la liste (non supporté dans <code>before-upload</code>).</td>
<td>—</td>
</tr>
<tr>
<td>abort</td>
<td>Annule l'envoi en cours.</td>
<td>（ file: fileList's item ）</td>
</tr>
<tr>
<td>submit</td>
<td>Envoi la liste de fichiers manuellement.</td>
<td>—</td>
</tr>
</tbody>
</table>
