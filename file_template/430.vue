<h2 id="notification"><a class="header-anchor" href="#notification">¶</a> Notification</h2>
<p>Affiche une notification globale dans un coin de la page.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>Element enregistre la méthode <code>$notify</code> qui reçoit un objet en paramètre. Dans le cas le plus simple, vous pouvez simplement configurer les champs <code>title</code> et<code>message</code>. Par défaut, la notification se ferme automatiquement après 4500ms, mais vous pouvez régler une autre durée avec <code>duration</code>. Si la durée est mise à <code>0</code>, la notification ne se fermera pas. <code>duration</code> prends donc un <code>Number</code> en millisecondes.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open1&quot;&gt;
    Se ferme automatiquement
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open2&quot;&gt;
    Ne se ferme pas automatiquement
    &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: 'Titre',
          message: h('i', { style: 'color: teal' }, 'Ceci est un rappel')
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'Ceci est un message qui ne se ferme pas',
          duration: 0
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="types"><a class="header-anchor" href="#types">¶</a> Types</h3>
<p>Nous fournissons quatre types: succès, avertissement, information et erreur.</p>
<demo-block>
        <div><p>Element fournit quatre types de notifications: <code>success</code>, <code>warning</code>, <code>info</code> et <code>error</code>. Il sont choisis grâce au champs <code>type</code>, et n'importe quelle autre valeur sera ignorée. Il existe des méthodes  enregistrées pour chaque type, comme dans <code>open3</code> et <code>open4</code>, qui ne nécessitent donc pas le champs <code>type</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
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
          message: 'Ceci est un message de succès',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: 'Warning',
          message: 'Ceci est un avertissement',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: 'Info',
          message: 'Ceci est une information'
        });
      },

      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'Ceci est une erreur'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="position-personnalisee"><a class="header-anchor" href="#position-personnalisee">¶</a> Position personnalisée</h3>
<p>La notification peut apparaître dans le coin de votre choix.</p>
<demo-block>
        <div><p>L'attribut <code>position</code> définit le coin d'apparition de la notification. Cela peut être <code>top-right</code>, <code>top-left</code>, <code>bottom-right</code> ou <code>bottom-left</code>. Le défaut est <code>top-right</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
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
          message: 'Je suis dans le coin supérieur droit'
        });
      },

      open2() {
        this.$notify({
          title: 'Custom Position',
          message: 'Je suis dans le coin inférieur droit',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: 'Custom Position',
          message: 'Je suis dans le coin inférieur gauche',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: 'Custom Position',
          message: 'Je suis dans le coin supérieur gauche',
          position: 'top-left'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="avec-decalage"><a class="header-anchor" href="#avec-decalage">¶</a> Avec décalage</h3>
<p>Vous pouvez décaler l'emplacement de la notification par rapport au bord de la page.</p>
<demo-block>
        <div><p>Réglez <code>offset</code> pour choisir le décalage de la notification. Notez que chaque notification apparaissant au même moment devrait avoir le même décalage.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    Notification avec décalage
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Success',
          message: 'Ceci est un message de succès',
          offset: 100
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="utiliser-du-html"><a class="header-anchor" href="#utiliser-du-html">¶</a> Utiliser du HTML</h3>
<p>L'attribut <code>message</code> supporte le HTML.</p>
<demo-block>
        <div><p>Mettez <code>dangerouslyUseHTMLString</code> à true et <code>message</code> sera traité comme du HTML.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    Utiliser du HTML
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify({
          title: 'HTML String',
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
<h3 id="cacher-le-bouton-de-fermeture"><a class="header-anchor" href="#cacher-le-bouton-de-fermeture">¶</a> Cacher le bouton de fermeture</h3>
<p>Il est possible de cacher le bouton de fermeture.</p>
<demo-block>
        <div><p>Mettez <code>showClose</code> à <code>false</code> Pour que la notification ne puisse pas être fermée par l'utilisateur.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    Bouton de fermeture caché
    &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: 'Ceci est un message sans bouton de fermeture',
          showClose: false
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="methode-globale"><a class="header-anchor" href="#methode-globale">¶</a> Méthode globale</h3>
<p>Element ajoute la méthode <code>$notify</code> à Vue.prototype. Vous pouvez donc appeler <code>Notification</code> dans l'instance de Vue comme nous avons fait dans cette page.</p>
<h3 id="import-a-la-demande"><a class="header-anchor" href="#import-a-la-demande">¶</a> Import à la demande</h3>
<p>Importez <code>Notification</code>:</p>
<pre><code class="language-javascript">import { Notification } from 'element-ui';
</code></pre>
<p>Dans ce cas vous devrez appeler <code>Notification(options)</code>. Il existe aussi des méthodes pour chaque type, e.g. <code>Notification.success(options)</code>. Vous pouvez appeler <code>Notification.closeAll()</code> pour fermer manuellement toutes les instances.</p>
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
<td>title</td>
<td>Titre de la notification.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>message</td>
<td>Message de la notification.</td>
<td>string/Vue.VNode</td>
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
<td>type</td>
<td>Type de notification.</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>—</td>
</tr>
<tr>
<td>iconClass</td>
<td>Classe d'icône. Écrasé par <code>type</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>Nom de classe pour la notification.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>duration</td>
<td>Durée avant fermeture. Infinie si mise à 0.</td>
<td>number</td>
<td>—</td>
<td>4500</td>
</tr>
<tr>
<td>position</td>
<td>Position de la notification.</td>
<td>string</td>
<td>top-right/top-left/bottom-right/bottom-left</td>
<td>top-right</td>
</tr>
<tr>
<td>showClose</td>
<td>Si le bouton de fermeture doit être affiché.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>onClose</td>
<td>Callback de fermeture.</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>onClick</td>
<td>Callback quand la notification est cliquée.</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>offset</td>
<td>Décalage par rapport au bord de la page. Toutes les notifications arrivant au même moment devraient avoir le même décalage.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="methodes"><a class="header-anchor" href="#methodes">¶</a> Méthodes</h3>
<p><code>Notification</code> et <code>this.$notify</code> retourne l'instance actuelle de Notification. Pour fermer chaque instance manuellement, appelez la méthode <code>close</code>.</p>
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
<td>Ferme la notification.</td>
</tr>
</tbody>
</table>
