<h2 id="message"><a class="header-anchor" href="#message">¶</a> Message</h2>
<p>Utilisé pour avoir un retour après une action particulière. La différence avec Notification est que ce dernier est surtout utilisé pour afficher des notifications système passives.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>S'affiche en haut de la page et disparaît après trois secondes.</p>
<demo-block>
        <div><p>L'utilisation de Message est très similaire à Notification, la plupart des options ne sont donc pas expliquées ici. Référez-vous à la table en fin de page et celle de Notification pour en savoir plus. Element affecte la méthode <code>$message</code> pour appeler Message. Il peut prendre en paramètre un string ou un VNode, qui sera affiché en tant que body principal.</p>
</div>
        <!--element-demo: <template>
  <el-button :plain="true" @click="open">Afficher le message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('Ceci est un message.');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message peut être '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open&quot;&gt;Afficher le message&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openVn&quot;&gt;VNode&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$message('Ceci est un message.');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message peut être '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="types"><a class="header-anchor" href="#types">¶</a> Types</h3>
<p>Utilisé pour montrer un retour d'activités Success, Warning, Message ou Error.</p>
<demo-block>
        <div><p>Lorsque vous avez besoin de plus de personnalisation, Message peut aussi accepter un objet en paramètre. Par exemple, le paramètre <code>type</code> définit différents types, son défaut étant <code>info</code>. Dans ce cas le body est passé comme valeur de <code>message</code>. De plus, il existe des méthodes pour chaque type, afin que vous puissiez vous passer de la propriété <code>type</code> comme dans <code>open4</code>.</p>
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
        this.$message('Ceci est un message.');
      },
      open2() {
        this.$message({
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Attention, ceci est un avertissement.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Ouups, ceci est une erreur.');
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
        this.$message('Ceci est un message.');
      },
      open2() {
        this.$message({
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Attention, ceci est un avertissement.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Ouups, ceci est une erreur.');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fermeture"><a class="header-anchor" href="#fermeture">¶</a> Fermeture</h3>
<p>Un bouton de fermeture peut être ajouté.</p>
<demo-block>
        <div><p>Un Message ne peut être fermé par défaut. Utiliséez <code>showClose</code> si vous avez besoin de pouvoir le fermer. De plus, tout comme Notification, Message possède une <code>duration</code> réglable. La durée par défaut est de 3000 ms, et infinie si à <code>0</code>.</p>
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
          message: 'Ceci est un message.'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: 'Attention, ceci est un avertissement.',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: 'Ouups, ceci est une erreur.',
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
          message: 'Ceci est un message.'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: 'Attention, ceci est un avertissement.',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: 'Ouups, ceci est une erreur.',
          type: 'error'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="texte-centre"><a class="header-anchor" href="#texte-centre">¶</a> Texte centré</h3>
<p>Utilisez l'attribut <code>center</code> pour centrer le texte.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-button :plain="true" @click="openCenter">Texte centré</el-button>
</template>

<script>
  export default {
    methods: {
      openCenter() {
        this.$message({
          message: 'Texte centré',
          center: true
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openCenter&quot;&gt;Texte centré&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      openCenter() {
        this.$message({
          message: 'Texte centré',
          center: true
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="utiliser-du-html"><a class="header-anchor" href="#utiliser-du-html">¶</a> Utiliser du HTML</h3>
<p><code>message</code> supporte le HTML.</p>
<demo-block>
        <div><p>Mettez <code>dangerouslyUseHTMLString</code> à true et <code>message</code> sera traité comme du HTML.</p>
</div>
        <!--element-demo: <template>
  <el-button :plain="true" @click="openHTML">Utiliser du HTML</el-button>
</template>

<script>
  export default {
    methods: {
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>Ceci est du <i>HTML</i></strong>'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openHTML&quot;&gt;Utiliser du HTML&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '&lt;strong&gt;Ceci est du &lt;i&gt;HTML&lt;/i&gt;&lt;/strong&gt;'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="warning">
<p>Bien que la propriété <code>message</code> supporte le HTML, générer du contenu HTML dynamiquement peut être très dangereux, car cela permet des <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">attaques XSS</a>. Donc lorsque <code>dangerouslyUseHTMLString</code> est présent, soyez certain de sécuriser le contenu de <code>message</code>, et n'assignez <strong>jamais</strong> à <code>message</code> du contenu fournit par l'utilisateur.</p>
</div>
<h3 id="methode-globale"><a class="header-anchor" href="#methode-globale">¶</a> Méthode globale</h3>
<p>Element ajoute une méthode <code>$message</code> à Vue.prototype. Vous pouvez donc appeler <code>Message</code> dans l'instance de Vue comme dans cette page.</p>
<h3 id="import-a-la-demande"><a class="header-anchor" href="#import-a-la-demande">¶</a> Import à la demande</h3>
<p>Importez <code>Message</code>:</p>
<pre><code class="language-javascript">import { Message } from 'element-ui';
</code></pre>
<p>Dans ce cas il faudra appeler <code>Message(options)</code>. Les méthodes des différents types sont aussi ajoutées, e.g. <code>Message.success(options)</code>. Vous pouvez appeler <code>Message.closeAll()</code> pour fermer manuellement toutes les instances.</p>
<h3 id="options"><a class="header-anchor" href="#options">¶</a> Options</h3>
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
<td>message</td>
<td>Texte du message.</td>
<td>string / VNode</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>Type du message.</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>info</td>
</tr>
<tr>
<td>iconClass</td>
<td>Classe de l'icône, écrase <code>type</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>Si <code>message</code> doit être traité comme du HTML.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>customClass</td>
<td>Nom de classe pour Message.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>duration</td>
<td>La durée d'affichage, en millisecondes. Si 0, la durée est infinie.</td>
<td>number</td>
<td>—</td>
<td>3000</td>
</tr>
<tr>
<td>showClose</td>
<td>Si un bouton de fermeture doit être affiché.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>center</td>
<td>Si le texte doit être centré.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>onClose</td>
<td>Callback de fermeture avec en paramètre l'instance de Message.</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>offset</td>
<td>set the distance to the top of viewport</td>
<td>number</td>
<td>—</td>
<td>20</td>
</tr>
</tbody>
</table>
<h3 id="methodes"><a class="header-anchor" href="#methodes">¶</a> Méthodes</h3>
<p><code>Message</code> et <code>this.$message</code> retourne l'instance actuelle. Pour fermer manuellement cette instance, appelez sa méthode <code>close</code>.</p>
<table>
<thead>
<tr>
<th>Méthode</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>Ferme l'instance de Message.</td>
</tr>
</tbody>
</table>
