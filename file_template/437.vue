<h2 id="messagebox"><a class="header-anchor" href="#messagebox">¶</a> MessageBox</h2>
<p>Un ensemble de fenêtres modales pour afficher des messages système, tels que des alertes, des demandes de confirmation ou des informations importantes.</p>
<div class="tip">
<p>MessageBox est avant tout conçue pour émuler des <code>alert</code>, <code>confirm</code> ou <code>prompt</code>, son contenu devrait donc être simple. Pour afficher un contenu plus riche, utilisez plutôt Dialog.</p>
</div>
<h3 id="alert"><a class="header-anchor" href="#alert">¶</a> Alert</h3>
<p>Alert interrompt l'action de l'utilisateur jusqu'à ce qu'il confirme.</p>
<demo-block>
        <div><p>Ouvrez un alert en appelant la méthode <code>$alert</code>. Elle simule une <code>alert</code> système et ne peut être fermée en pressant ESC ou en cliquant hors de la boite. Dans cet exemple, deux paramètres <code>message</code> et <code>title</code> sont reçus. Notez que lorsque la boite est fermée, elle retourne un objet <code>Promise</code>. Si vous n'êtes pas certains que tout vos navigateurs cibles supportent <code>Promise</code>, utilisez un polyfill ou utilisez des callbacks comme dans l'exemple qui suit.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Cliquez pour ouvrir la MessageBox&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$alert('Ceci est un message', 'Titre', {
          confirmButtonText: 'OK',
          callback: action =&gt; {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="confirm"><a class="header-anchor" href="#confirm">¶</a> Confirm</h3>
<p>Confirm est utilisé pour demander une confirmation à l'utilisateur.</p>
<demo-block>
        <div><p>Appelez la méthode <code>$confirm</code> pour ouvrir une confirm, qui simule le <code>confirm</code> système. Vous pouvez aussi personnaliser MessageBox en passant un objet à l'attribut <code>options</code>. L'attribut <code>type</code> indique le type de message (voir en bas de la page pour la liste des valeurs possibles). Notez que l'attribut <code>title</code> doit être de type <code>string</code>. S'il se trouve être un <code>object</code>, il sera considéré comme étant l'attribut <code>options</code>. Cet exemple utilise une <code>Promise</code> pour gérer la suite du processus.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Cliquez pour ouvrir la MessageBox&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('Ceci effacera le fichier. Continuer?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Annuler',
          type: 'warning'
        }).then(() =&gt; {
          this.$message({
            type: 'success',
            message: 'Fichier supprimé'
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: 'Suppression annulée'
          });          
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="prompt"><a class="header-anchor" href="#prompt">¶</a> Prompt</h3>
<p>Prompt est utilisé lorsqu'un utilisateur.</p>
<demo-block>
        <div><p>Appellez la méthode <code>$prompt</code> pour ouvrir un prompt simulant le <code>prompt</code> système. Vous pouvez utiliser le paramètre <code>inputPattern</code> pour spécifier un pattern à l'aide d'une RegExp. Utilisez <code>inputValidator</code> pour indiquer la méthode de validation, qui devra retourner un <code>Boolean</code> ou un <code>String</code>. Retourner <code>false</code> ou un <code>String</code> veut dire que la validation a échouée, et la string ainsi fournie sera le <code>inputErrorMessage</code>. De plus, vous pouvez personnaliser le placeholder du champs avec le paramètre <code>inputPlaceholder</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Cliquez pour ouvrir la MessageBox&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$prompt('Entrez votre e-mail', 'Astuce', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Annuler',
          inputPattern: /[\w!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[\w!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'E-mail invalide'
        }).then(({ value }) =&gt; {
          this.$message({
            type: 'success',
            message: 'Votre e-mail est: ' + value
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: 'Annulé'
          });
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="personnalisation"><a class="header-anchor" href="#personnalisation">¶</a> Personnalisation</h3>
<p>Il est possible d'afficher du contenu un peu plus varié et personnalisé.</p>
<demo-block>
        <div><p>les trois précédentes méthodes sont des repackagings de la méthode <code>$msgbox</code>. cet exemple appelle directement <code>$msgbox</code> en utilisant l'attribut <code>showCancelButton</code> pour indiquer si un bouton annuler doit être affiché. De plus, vous pouvez utiliser <code>cancelButtonClass</code> pour ajouter du style et <code>cancelButtonText</code> pour personnaliser le bouton texte (voir la liste complète en fin de page). La méthode <code>beforeClose</code>est appelée quand la MessageBox va être fermée et prévient sa fermeture. Elle prend trois paramètres: <code>action</code>, <code>instance</code> et <code>done</code>. Elle vous permet ainsi d'effectuer des actions avant la fermeture, e.g. activer <code>loading</code> pour le bouton de confirmation. Appelez <code>done</code> pour fermer la MessageBox, sinon l'instance ne sera jamais fermée.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Cliquez pour ouvrir la MessageBox&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: 'Message',
          message: h('p', null, [
            h('span', null, 'Le message peut être '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Annuler',
          beforeClose: (action, instance, done) =&gt; {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Chargement...';
              setTimeout(() =&gt; {
                done();
                setTimeout(() =&gt; {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action =&gt; {
          this.$message({
            type: 'info',
            message: 'Action: ' + action
          });
        });
      },
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>Le contenu de MessageBox peut être <code>VNode</code>, Vous permettant de passer des composants personnalisés. Lorsque vous ouvrer MessageBox, Vue compare le nouveau <code>VNode</code> avec l'ancien <code>VNode</code>, puis détermine comment rafraîchir efficacement l'UI, le composant peut donc ne pas être totalement re-rendu (<a href="https://github.com/ElemeFE/element/issues/8931">#8931</a>). Dans ce cas, Vous pouvez ajouter une clé unique à <code>VNode</code> à chaque fois que MessageBox s'ouvre: <a href="https://jsfiddle.net/zhiyang/ezmhq2ef">exemple</a>.</p>
</div>
<h3 id="utiliser-du-html"><a class="header-anchor" href="#utiliser-du-html">¶</a> Utiliser du HTML</h3>
<p><code>message</code> supporte le HTML.</p>
<demo-block>
        <div><p>Mettez <code>dangerouslyUseHTMLString</code> à <code>true</code> et <code>message</code> sera traité comme du HTML.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Cliquez pour ouvrir la MessageBox&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$alert('&lt;strong&gt;Ceci est du &lt;i&gt;HTML&lt;/i&gt;&lt;/strong&gt;', 'HTML', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="warning">
<p>Bien que la propriété <code>message</code> supporte le HTML, générer du contenu HTML dynamiquement peut être très dangereux, car cela permet des <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">attaques XSS</a>. Donc lorsque <code>dangerouslyUseHTMLString</code> est présent, soyez certain de sécuriser le contenu de <code>message</code>, et n'assignez <strong>jamais</strong> à <code>message</code> du contenu fournit par l'utilisateur.</p>
</div>
<h3 id="distinguer-annuler-de-fermer"><a class="header-anchor" href="#distinguer-annuler-de-fermer">¶</a> Distinguer 'annuler' de 'fermer'</h3>
<p>Dans certains cas, les boutons fermer et annuler peuvent avoir des sens différents.</p>
<demo-block>
        <div><p>Par défaut, le paramètre de la <code>callback</code> et de la promesse rejetée est 'cancel' lorsque l'utilisateur annule (clique sur le bouton annuler) ou lorsqu'il ferme la fenêtre (clique sur le bouton fermer, hors de la fenêtre, ou presse ESC). Si <code>distinguishCancelAndClose</code> est à <code>true</code>, le dernier cas précédent renvoie 'close' au lieu de 'cancel' afin de pouvoir gérer les deux actions différemment.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Cliquez pour ouvrir la MessageBox&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('Vous avez du travail non enregistré, enregistrer et quitter?', 'Confirm', {
          distinguishCancelAndClose: true,
          confirmButtonText: 'Enregistrer',
          cancelButtonText: 'Ne pas enregistrer'
        })
          .then(() =&gt; {
            this.$message({
              type: 'info',
              message: 'Enregistré. Passage a une nouvelle route.'
            });
          })
          .catch(action =&gt; {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? 'Changements annulés. Passage sur une nouvelle route.'
                : 'Reste sur la même route'
            })
          });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="contenu-centre"><a class="header-anchor" href="#contenu-centre">¶</a> Contenu centré</h3>
<p>le contenu de MessageBox peut être centré.</p>
<demo-block>
        <div><p>Mettre <code>center</code> à <code>true</code> centrera le contenu</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Cliquez pour ouvrir la MessageBox&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('Ceci effacera le fichier, continuer?' , 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Annuler',
          type: 'warning',
          center: true
        }).then(() =&gt; {
          this.$message({
            type: 'success',
            message: 'Fichier supprimé'
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: 'Annulé'
          });
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="methode-globale"><a class="header-anchor" href="#methode-globale">¶</a> Méthode globale</h3>
<p>Si Element est importé entièrement, il ajoutera les méthodes suivantes à Vue.prototype: <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> et <code>$prompt</code>. Dans ce cas vous pouvez appeler <code>MessageBox</code> comme nous l'avons fait dans cette page. Les paramètres sont:</p>
<ul>
<li><code>$msgbox(options)</code></li>
<li><code>$alert(message, title, options)</code> ou <code>$alert(message, options)</code></li>
<li><code>$confirm(message, title, options)</code> ou <code>$confirm(message, options)</code></li>
<li><code>$prompt(message, title, options)</code> ou <code>$prompt(message, options)</code></li>
</ul>
<h3 id="import-a-la-demande"><a class="header-anchor" href="#import-a-la-demande">¶</a> Import à la demande</h3>
<p>Si vous préférer importer <code>MessageBox</code> à la demande:</p>
<pre><code class="language-javascript">import { MessageBox } from 'element-ui';
</code></pre>
<p>Les méthodes correspondantes sont: <code>MessageBox</code>, <code>MessageBox.alert</code>, <code>MessageBox.confirm</code> et <code>MessageBox.prompt</code>. Les paramètres sont les mêmes que précédemment.</p>
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
<td>Titre de la MessageBox.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>message</td>
<td>Contenu de la MessageBox.</td>
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
<td>type</td>
<td>Type du message, utilisé pour le choix d'icône.</td>
<td>string</td>
<td>success / info / warning / error</td>
<td>—</td>
</tr>
<tr>
<td>iconClass</td>
<td>Classe d'icône personnalisée, écrase <code>type</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>Nom de classe pour MessageBox.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>callback</td>
<td>La callback de fermeture de MessageBox si vous n'utilisez pas les promesses.</td>
<td>function(action, instance), ou <code>action</code> peut être 'confirm', 'cancel' ou 'close', et <code>instance</code> est l'instance MessageBox.</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>showClose</td>
<td>Si l'icône de fermeture doit être affichée.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>beforeClose</td>
<td>La callback de pré-fermeture qui empèchera MessageBox de se fermer.</td>
<td>function(action, instance, done), ou <code>action</code> peut-être 'confirm', 'cancel' ou 'close'; <code>instance</code> est l'instance de MessageBox; <code>done</code> est la méthode pour fermer l'instance.</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>distinguishCancelAndClose</td>
<td>S'il doit y avoir une différence entre l'annulation et la fermeture de la MessageBox.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lockScroll</td>
<td>Si le défilement de la page doit être bloqué lorsque la MessageBox est active.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>showCancelButton</td>
<td>Si le bouton annuler doit être affiché.</td>
<td>boolean</td>
<td>—</td>
<td>false (true dans le cas de confirm ou prompt).</td>
</tr>
<tr>
<td>showConfirmButton</td>
<td>Si le bouton confirmer doit être affiché.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>cancelButtonText</td>
<td>Le texte du bouton annuler.</td>
<td>string</td>
<td>—</td>
<td>Cancel</td>
</tr>
<tr>
<td>confirmButtonText</td>
<td>Le texte du bouton confirmer.</td>
<td>string</td>
<td>—</td>
<td>OK</td>
</tr>
<tr>
<td>cancelButtonClass</td>
<td>Classe du bouton annuler.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirmButtonClass</td>
<td>Classe du bouton confirmer.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>closeOnClickModal</td>
<td>Si MessageBox peut être fermée en cliquant en dehors.</td>
<td>boolean</td>
<td>—</td>
<td>true (false dans le cas de alert).</td>
</tr>
<tr>
<td>closeOnPressEscape</td>
<td>Si MessageBox peut être fermée en pressant ESC.</td>
<td>boolean</td>
<td>—</td>
<td>true (false dans le cas de alert)</td>
</tr>
<tr>
<td>closeOnHashChange</td>
<td>Si MessageBox doit être fermée quand le hash change.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>showInput</td>
<td>Si un champs d'input doit être affiché.</td>
<td>boolean</td>
<td>—</td>
<td>false (true dans le cas de prompt).</td>
</tr>
<tr>
<td>inputPlaceholder</td>
<td>Placeholder du champs d'input.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputType</td>
<td>Type du champs d'input.</td>
<td>string</td>
<td>—</td>
<td>text</td>
</tr>
<tr>
<td>inputValue</td>
<td>Valeur initiale du champs d'input.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputPattern</td>
<td>RegExp du champs d'input.</td>
<td>regexp</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputValidator</td>
<td>Fonction de validation du champs d'input. Doit retourner un boolean ou un string. Si c'est un string, il sera assigné à inputErrorMessage.</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputErrorMessage</td>
<td>Message d'erreur lorsque la validation échoue.</td>
<td>string</td>
<td>—</td>
<td>Illegal input</td>
</tr>
<tr>
<td>center</td>
<td>Si le contenu doit être centré.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>roundButton</td>
<td>Si le bouton doit être rond.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
