<h2 id="message"><a class="header-anchor" href="#message">¶</a> Message</h2>
<p>Utilizado para mostrar retroalimentación después de una actividad. La diferencia con el componente Notification es que este ultimo es utilizado para mostrar una notificación pasiva a nivel de sistema.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Se muestra en la parte superior de la pagina y desaparece después de 3 segundos.</p>
<demo-block>
        <div><p>La configuración del componente Message es muy similar al del componente notification, así que parte de las opciones no serán explicadas en detalle aquí. Puedes consultar la tabla de opciones en la parte inferior combinada con la documentación del componente notification para comprenderla. Element a registrado un método <code>$message</code> para poder invocarlo. Message puede tomar una cadena o un Vnode como parámetro, y lo mostrara como el cuerpo principal.</p>
</div>
        <!--element-demo: <template>
  <el-button :plain="true" @click="open">Show message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('This is a message.');
      },
      
      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open&quot;&gt;Show message&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openVn&quot;&gt;VNode&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$message('This is a message.');
      },
      
      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tipos"><a class="header-anchor" href="#tipos">¶</a> Tipos</h3>
<p>Utilizados para mostrar retroalimentación de Success, Warning, Message y Error activities.</p>
<demo-block>
        <div><p>Cuando necesite mas personalización, el componente Message también puede tomar un objeto como parámetro. Por ejemplo, estableciendo el valor de <code>type</code> puede definir diferentes tipos, el predeterminado es <code>info</code>. En tales casos el cuerpo principal se pasa como el valor de <code>message</code>. También, hay registrados métodos para los diferentes tipos, así que, puedes llamarlos sin necesidad de pasar un tipo como <code>open4</code>.</p>
</div>
        <!--element-demo: <template>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$message('This is a message.');
      },
      open2() {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Oops, this is a error message.');
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open2&quot;&gt;success&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open3&quot;&gt;warning&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open1&quot;&gt;message&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open4&quot;&gt;error&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$message('This is a message.');
      },
      open2() {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Oops, this is a error message.');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="closable"><a class="header-anchor" href="#closable">¶</a> Closable</h3>
<p>Un botón para cerrar que puede ser agregado.</p>
<demo-block>
        <div><p>Un componente Message predeterminado no se puede cerrar manualmente. Si necesitas un componente message que pueda cerrarse, puedes establecer el campo <code>showClose</code>. Ademas, al igual que las notificaciones, message tiene un atributo <code>duration</code> que puede ser controlado. Por defecto la duración es de 3000 ms, y no desaparecerá al llegar a <code>0</code>.</p>
</div>
        <!--element-demo: <template>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$message({
          showClose: true,
          message: 'This is a message.'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open1&quot;&gt;message&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open2&quot;&gt;success&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open3&quot;&gt;warning&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open4&quot;&gt;error&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$message({
          showClose: true,
          message: 'This is a message.'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="texto-centrado"><a class="header-anchor" href="#texto-centrado">¶</a> Texto centrado</h3>
<p>Utiliza el atributo <code>center</code> para centrar el texto.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-button :plain="true" @click="openCenter">Centered text</el-button>
</template>

<script>
  export default {
    methods: {
      openCenter() {
        this.$message({
          message: 'Centered text',
          center: true
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openCenter&quot;&gt;Centered text&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      openCenter() {
        this.$message({
          message: 'Centered text',
          center: true
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="utiliza-cadenas-html"><a class="header-anchor" href="#utiliza-cadenas-html">¶</a> Utiliza cadenas HTML</h3>
<p><code>message</code> soporta cadenas HTML.</p>
<demo-block>
        <div><p>Establece la propiedad <code>dangerouslyUseHTMLString</code> en true y <code>message</code> sera tratado como una cadena HTML.</p>
</div>
        <!--element-demo: <template>
  <el-button :plain="true" @click="openHTML">Use HTML String</el-button>
</template>

<script>
  export default {
    methods: {
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openHTML&quot;&gt;Use HTML String&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '&lt;strong&gt;This is &lt;i&gt;HTML&lt;/i&gt; string&lt;/strong&gt;'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="warning">
<p>Aunque la propiedad <code>message</code> soporta cadenas HTML, realizar arbitrariamente render dinámico de HTML en nuestro sitio web puede ser muy peligroso ya que puede conducir fácilmente a <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS attacks</a>. Entonces cuando <code>dangerouslyUseHTMLString</code> esta activada, asegúrese que el contenido de <code>message</code> sea de confianza, y <strong>nunca</strong> asignar <code>message</code> a contenido generado por el usuario.</p>
</div>
<h3 id="metodos-globales"><a class="header-anchor" href="#metodos-globales">¶</a> Métodos Globales</h3>
<p>Element ha agregado un método global llamado <code>$message</code> para Vue.prototype. Entonces en una instancia de vue puede llamar a <code>Message</code> como lo hicimos en esta pagina.</p>
<h3 id="importacion-local"><a class="header-anchor" href="#importacion-local">¶</a> Importación local</h3>
<p>Import <code>Message</code>:</p>
<pre><code class="language-javascript">import { Message } from 'element-ui';
</code></pre>
<p>En este caso debería llamar al método <code>Message(options)</code>. También se han registrado métodos para los diferentes tipos, e.g. <code>Message.success(options)</code>. Puede llamar al método <code>Message.closeAll()</code> para cerrar manualmente todas las instancias.</p>
<h3 id="opciones"><a class="header-anchor" href="#opciones">¶</a> Opciones</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores permitidos</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>message</td>
<td>texto del mensaje</td>
<td>string / VNode</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>tipo del mensaje</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>info</td>
</tr>
<tr>
<td>iconClass</td>
<td>clase personalizada para el icono, sobrescribe <code>type</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>utilizado para que <code>message</code> sea tratado como cadena HTML</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>customClass</td>
<td>nombre de clase personalizado para el componente Message</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>duration</td>
<td>muestra la duración,en mili segundos. si se establece en 0, este no se apagara automáticamente</td>
<td>number</td>
<td>—</td>
<td>3000</td>
</tr>
<tr>
<td>showClose</td>
<td>utilizado para mostrar un botón para cerrar</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>center</td>
<td>utilizado para centrar el texto</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>onClose</td>
<td>función callback ejecutada cuando se cierra con una instancia de mensaje como parámetro</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>offset</td>
<td>La distancia desde la parte superior del  viewport</td>
<td>number</td>
<td>—</td>
<td>20</td>
</tr>
</tbody>
</table>
<h3 id="metodos"><a class="header-anchor" href="#metodos">¶</a> Métodos</h3>
<p><code>Message</code> y <code>this.$message</code> regresan una instancia del componente Message. Para cerrar manualmente la instancia, puede llamar al método <code>close</code>.</p>
<table>
<thead>
<tr>
<th>Método</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>cierra el componente Message</td>
</tr>
</tbody>
</table>
