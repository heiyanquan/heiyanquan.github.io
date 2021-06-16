<h2 id="notification"><a class="header-anchor" href="#notification">¶</a> Notification</h2>
<p>Muestra un mensaje de notificación global en una esquina de la página.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>Element ha registrado el método<code>$notify</code> y recibe un objeto como parámetro. En el caso más sencillo, puede establecer el campo de <code>title</code> y el campo de <code>message</code> para el título y el cuerpo de la notificación. De forma predeterminada, la notificación se cierra automáticamente después de 4500ms, pero configurando <code>duration</code>  se puede controlar su duración. Específicamente, si está configurado en <code>0</code>, no se cerrará automáticamente. Tenga en cuenta que <code>duration</code> recibe un <code>Number</code> en mili segundos.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open1">
    Closes automatically
  </el-button>
  <el-button
    plain
    @click="open2">
    Won't close automatically
    </el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open1&quot;&gt;
    Closes automatically
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open2&quot;&gt;
    Won't close automatically
    &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tipos-de-notificaciones"><a class="header-anchor" href="#tipos-de-notificaciones">¶</a> Tipos de notificaciones</h3>
<p>Proporcionamos cuatro tipos: success, warning, info y error.</p>
<demo-block>
        <div><p>Element proporciona cuatro tipos de notificación: <code>success</code>, <code>warning</code>, <code>info</code> y <code>error</code>. Se definen por el campo <code>type</code>  y se ignorarán otros valores. También se han registrado métodos para estos tipos que se pueden invocar directamente como en el ejemplo <code>open3</code> y <code>open4</code> sin pasar un campo <code>type</code>.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open1">
    Success
  </el-button>
  <el-button
    plain
    @click="open2">
    Warning
  </el-button>
  <el-button
    plain
    @click="open3">
    Info
  </el-button>
  <el-button
    plain
    @click="open4">
    Error
  </el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open1&quot;&gt;
    Success
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open2&quot;&gt;
    Warning
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open3&quot;&gt;
    Info
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open4&quot;&gt;
    Error
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="posicion-personalizada"><a class="header-anchor" href="#posicion-personalizada">¶</a> Posición personalizada</h3>
<p>La notificación puede surgir de cualquier rincón que uno desee.</p>
<demo-block>
        <div><p>El atributo <code>position</code> define desde qué esquina se desliza la notificación. Puede ser <code>top-right</code>, <code>top-left</code>, <code>bottom-right</code> o <code>bottom-left</code>. Predeterminado: <code>top-right</code>.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open1">
    Top Right
  </el-button>
  <el-button
    plain
    @click="open2">
    Bottom Right
  </el-button>
  <el-button
    plain
    @click="open3">
    Bottom Left
  </el-button>
  <el-button
    plain
    @click="open4">
    Top Left
  </el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top right corner'
        });
      },

      open2() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom right corner',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom left corner',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top left corner',
          position: 'top-left'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open1&quot;&gt;
    Top Right
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open2&quot;&gt;
    Bottom Right
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open3&quot;&gt;
    Bottom Left
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open4&quot;&gt;
    Top Left
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top right corner'
        });
      },

      open2() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom right corner',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom left corner',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top left corner',
          position: 'top-left'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="desplazamiento"><a class="header-anchor" href="#desplazamiento">¶</a> Desplazamiento</h3>
<p>Personalizar el desplazamiento de notificación desde el borde de la pantalla.</p>
<demo-block>
        <div><p>Configure el atributo <code>offset</code> para personalizar el desplazamiento de la notificación desde el borde de la pantalla. Tenga en cuenta que cada instancia de la notificación del mismo momento debe tener el mismo desplazamiento.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open">
    Notification with offset
  </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    Notification with offset
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="usando-cadenas-html"><a class="header-anchor" href="#usando-cadenas-html">¶</a> Usando cadenas HTML</h3>
<p><code>message</code> soporta cadenas HTML.</p>
<demo-block>
        <div><p>Configure <code>dangerouslyUseHTMLString</code> a true y <code>message</code> se tratará como una cadena HTML.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open">
    Use HTML String
  </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    Use HTML String
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '&lt;strong&gt;This is &lt;i&gt;HTML&lt;/i&gt; string&lt;/strong&gt;'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="warning">
<p>Aunque la propiedad <code>message</code> soporta cadenas HTML, el renderizado dinámico de HTML arbitrario en su sitio web puede ser muy peligroso porque puede conducir fácilmente a <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">ataques XSS</a>. Por lo tanto, cuando <code>dangerouslyUseHTMLString</code> está a true, por favor asegúrese de que el contenido del mensaje es confiable, y <strong>nunca</strong> asigne <code>message</code> al contenido proporcionado por el usuario.</p>
</div>
<h3 id="ocultar-boton-de-cerrar"><a class="header-anchor" href="#ocultar-boton-de-cerrar">¶</a> Ocultar boton de cerrar</h3>
<p>Es posible ocultar el botón de cerrar</p>
<demo-block>
        <div><p>Configure el atributo <code>showClose</code> como <code>false</code> para que el usuario no pueda cerrar la notificación.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open">
    Hide close button
    </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    Hide close button
    &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="metodo-global"><a class="header-anchor" href="#metodo-global">¶</a> Método global</h3>
<p>Element ha añadido un método global <code>$notify</code> para Vue.prototype. Así que en una instancia de vue se puede llamar <code>Notification</code> como lo hacemos en esta página.</p>
<h3 id="importar-localmente"><a class="header-anchor" href="#importar-localmente">¶</a> Importar localmente</h3>
<p>Importar <code>Notification</code>:</p>
<pre><code class="language-javascript">import { Notification } from 'element-ui';
</code></pre>
<p>En este caso, debe llamar a <code>Notification(options)</code>. También se han registrado métodos para diferentes tipos, e.j. <code>Notification.success(options)</code>. Puede llamar al método <code>Notification.closeAll()</code> para cerrar manualmente todas las instancias.</p>
<h3 id="opciones"><a class="header-anchor" href="#opciones">¶</a> Opciones</h3>
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
<td>title</td>
<td>titulo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>message</td>
<td>mensaje</td>
<td>string/Vue.VNode</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>si  <code>message</code> es tratado como una cadena HTML</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>tipo de notificación</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>—</td>
</tr>
<tr>
<td>iconClass</td>
<td>clase personalizada de icono. Será anulado por <code>type</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>nombre de clase personalizado para la notificación</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>duration</td>
<td>duración antes de cerrar. Si no se quiere que se cierre automáticamente este valor debe estar a 0</td>
<td>number</td>
<td>—</td>
<td>4500</td>
</tr>
<tr>
<td>position</td>
<td>posición personalizada</td>
<td>string</td>
<td>top-right/top-left/bottom-right/bottom-left</td>
<td>top-right</td>
</tr>
<tr>
<td>showClose</td>
<td>si se muestra el botón de cerrar</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>onClose</td>
<td>función que se ejecuta cuando la notificación se cierra</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>onClick</td>
<td>función que se ejecuta cuando se hace clic en la notificación</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>offset</td>
<td>desplazamiento desde el borde superior de la pantalla. Cada instancia de notificación del mismo momento debe tener siempre el mismo desplazamiento.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="metodos"><a class="header-anchor" href="#metodos">¶</a> Métodos</h3>
<p><code>Notification</code> y <code>this.$notify</code> devuelven la instancia de la notificación actual. Para cerrar manualmente la instancia, se puede llamar <code>close</code> para ello.</p>
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
<td>cierra la notificación</td>
</tr>
</tbody>
</table>
