<h2 id="carga-de-archivos"><a class="header-anchor" href="#carga-de-archivos">¶</a> Carga de archivos</h2>
<p>Carga archivos haciendo clic o arrastrándolos.</p>
<h3 id="clic-para-cargar-archivos"><a class="header-anchor" href="#clic-para-cargar-archivos">¶</a> Clic para cargar archivos</h3>
<demo-block>
        <div><p>Personalice el tipo y texto del botón utilizando la propiedad <code>slot</code>. Defina las propiedades <code>limit</code> y <code>on-exceed</code> para limitar el número máximo de archivos a subir y especifique un método para cuando el límite ha sido excedido.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :on-preview=&quot;handlePreview&quot;
  :on-remove=&quot;handleRemove&quot;
  multiple
  :limit=&quot;3&quot;
  :on-exceed=&quot;handleExceed&quot;
  :file-list=&quot;fileList&quot;&gt;
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;Clic para subir archivo&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;Solo archivos jpg/png con un tamaño menor de 500kb&lt;/div&gt;
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
        this.$message.warning(`El límite es 3, haz seleccionado ${files.length} archivos esta vez, añade hasta ${files.length + fileList.length}`);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="cargar-avatar-de-usuario"><a class="header-anchor" href="#cargar-avatar-de-usuario">¶</a> Cargar avatar de usuario</h3>
<p>Utilice el <em>hook</em> <code>before-upload</code> para limitar el formato de archivo y su tamaño.</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
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
          this.$message.error('La imagen debe estar en formato JPG!');
        }
        if (!isLt2M) {
          this.$message.error('La imagen excede los 2MB!');
        }
        return isJPG &amp;&amp; isLt2M;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="pared-de-fotografias"><a class="header-anchor" href="#pared-de-fotografias">¶</a> Pared de fotografías</h3>
<p>Utilice la propiedad <code>list-type</code> para cambiar el estilo a un listado de archivos.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
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
</code></pre></template></demo-block><h3 id="personalizar-el-template-thumbnail"><a class="header-anchor" href="#personalizar-el-template-thumbnail">¶</a> Personalizar el template thumbnail</h3>
<p>Use el <code>scoped-slot</code>  para cambiar el template por defecto del thumbnail.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
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
</code></pre></template></demo-block><h3 id="lista-de-archivos-con-miniatura"><a class="header-anchor" href="#lista-de-archivos-con-miniatura">¶</a> Lista de archivos con miniatura</h3>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :on-preview=&quot;handlePreview&quot;
  :on-remove=&quot;handleRemove&quot;
  :file-list=&quot;fileList&quot;
  list-type=&quot;picture&quot;&gt;
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;Clic para subir archivo&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;Solo archivos jpg/png con un tamaño menor de 500kb&lt;/div&gt;
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
</code></pre></template></demo-block><h3 id="control-de-lista-de-archivos"><a class="header-anchor" href="#control-de-lista-de-archivos">¶</a> Control de lista de archivos</h3>
<p>Utilice el <em>hook</em> <code>on-change</code> para controlar la funcionalidad de la lista de archivos subidos.</p>
<demo-block>
        
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :on-change=&quot;handleChange&quot;
  :file-list=&quot;fileList&quot;&gt;
  &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;Clic para subir archivo&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;Solo archivos jpg/png con un tamaño menor de 500kb&lt;/div&gt;
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
</code></pre></template></demo-block><h3 id="arrastrar-para-cargar-archivo"><a class="header-anchor" href="#arrastrar-para-cargar-archivo">¶</a> Arrastrar para cargar archivo</h3>
<p>Puede arrastrar el archivo dentro de un área en especifico para cargar el archivo.</p>
<demo-block>
        
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  drag
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :on-preview=&quot;handlePreview&quot;
  :on-remove=&quot;handleRemove&quot;
  :file-list=&quot;fileList&quot;
  multiple&gt;
  &lt;i class=&quot;el-icon-upload&quot;&gt;&lt;/i&gt;
  &lt;div class=&quot;el-upload__text&quot;&gt;Suelta tu archivo aquí o &lt;em&gt;haz clic para cargar&lt;/em&gt;&lt;/div&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;Solo archivos jpg/png con un tamaño menor de 500kb&lt;/div&gt;
&lt;/el-upload&gt;
</code></pre></template></demo-block><h3 id="carga-normal"><a class="header-anchor" href="#carga-normal">¶</a> Carga normal</h3>
<demo-block>
        
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-upload
  class=&quot;upload-demo&quot;
  ref=&quot;upload&quot;
  action=&quot;https://jsonplaceholder.typicode.com/posts/&quot;
  :auto-upload=&quot;false&quot;&gt;
  &lt;el-button slot=&quot;trigger&quot; size=&quot;small&quot; type=&quot;primary&quot;&gt;Selecciona un archivo&lt;/el-button&gt;
  &lt;el-button style=&quot;margin-left: 10px;&quot; size=&quot;small&quot; type=&quot;success&quot; @click=&quot;submitUpload&quot;&gt;Cargar al servidor&lt;/el-button&gt;
  &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;Solo archivos jpg/png con un tamaño menor de 500kb&lt;/div&gt;
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
</code></pre></template></demo-block><h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>action</td>
<td>obligatorio, URL de la petición</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>headers</td>
<td>cabeceras de la petición</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>multiple</td>
<td>especifica si se permite subir múltiples archivos</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>opciones adicionales de la petición</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>nombre clave del archivo</td>
<td>string</td>
<td>—</td>
<td>file</td>
</tr>
<tr>
<td>with-credentials</td>
<td>especifica si enviará cookies</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-file-list</td>
<td>especifica si se debe mostrar la lista de archivos cargados</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>drag</td>
<td>se especifica si se activará el modo arrastrar y soltar</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>accept</td>
<td>acepta <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">tipos de archivos</a>, puede no funcionar cuando <code>thumbnail-mode</code> esta en <code>true</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-preview</td>
<td><em>hook</em> lanzado al hacer clic en los archivos subidos</td>
<td>function(file)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-remove</td>
<td><em>hook</em> lanzado cuando los archivos son eliminados</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-success</td>
<td><em>hook</em> lanzado cuando los archivos fueron cargados correctamente</td>
<td>function(response, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-error</td>
<td><em>hook</em> lanzado cuando han ocurrido algunos errores</td>
<td>function(err, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-progress</td>
<td><em>hook</em> lanzado cuando se produce algún progreso</td>
<td>function(event, file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-change</td>
<td><em>hook</em> lanzado cuando el archivo seleccionado se carga correctamente o falla</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>before-upload</td>
<td><em>hook</em> lanzado antes de que el archivo sea cargado. Si este devuelve <code>true</code> o <code>Promise</code> entonces será rechazado, la carga puede ser cancelada</td>
<td>function(file)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>before-remove</td>
<td><em>hook</em> lanzado antes de eliminar un archivo. Los parámetros son el archivo y la lista de archivos. Si se devuelve <code>false</code> o se devuelve una <code>Promise</code> y que luego es rechazada, la eliminación será abortada.</td>
<td>function(file, fileList)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>thumbnail-mode</td>
<td>especifica si se mostrará la miniatura</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>file-list</td>
<td>archivos cargados por defecto, por ejemplo,  [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]</td>
<td>array</td>
<td>—</td>
<td>[]</td>
</tr>
<tr>
<td>list-type</td>
<td>tipo de lista de archivos</td>
<td>string</td>
<td>text/picture/picture-card</td>
<td>text</td>
</tr>
<tr>
<td>auto-upload</td>
<td>se especifica si se auto cargan archivos</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>http-request</td>
<td>sobrescribe el comportamiento por defecto de xhr, permitiendo implementar tu propia petición de carga de archivos</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>especifica si se deshabilita la carga de archivos</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>limit</td>
<td>número máximo de cargas permitidas</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>on-exceed</td>
<td><em>hook</em> lanzado cuando el límite ha sido excedido</td>
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
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>trigger</td>
<td>contenido que desencadena el diálogo de archivo</td>
</tr>
<tr>
<td>tip</td>
<td>contenido de los tips</td>
</tr>
</tbody>
</table>
<h3 id="metodos"><a class="header-anchor" href="#metodos">¶</a> Métodos</h3>
<table>
<thead>
<tr>
<th>Nombre del método</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>clearFiles</td>
<td>limpia la lista de archivos cargados (este método no esta soportado en el <em>hook</em> <code>before-upload</code>)</td>
<td>—</td>
</tr>
<tr>
<td>abort</td>
<td>cancela la petición de carga</td>
<td>（ file: fileList's item ）</td>
</tr>
<tr>
<td>submit</td>
<td>La lista de archivos se sube manualmente</td>
<td>—</td>
</tr>
</tbody>
</table>
