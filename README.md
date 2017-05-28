<div class="container markdown-body">
      <h1 id="最新消息分類切換功能">最新消息分類切換功能</h1>
<p>因學習途中遇到需要使用下一頁來切換內容的功能，常常只有找到元件找不到實際上是如何運用的，所以做了一個這樣的套件來使用:D</p>

<p><br></p>
<h3>範例網址</h3>
<p><a href="https://codepen.io/benjaming1312/pen/aWGjpX" target="_blank">範例</a>
<br>
<br></p>
<h3>使用到的元件</h3>
<ul>
    <li><a href="https://kkbruce.tw/bs3/" target="_blank">boostrap</a></li>
    <li><a href="https://jquery.com/" target="_blank">jquery</a></li>
    <li><a href="https://daneden.github.io/animate.css/" target="_blank">animate.css</a></li>
</ul>

<div class="highlighter-rouge"><pre class="highlight"><code>&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css" /&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" /&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js"&gt;&lt;/script&gt;
</code></pre>
</div>

<p><br></p>
<h3>引入套件包</h3>

<div class="highlighter-rouge"><pre class="highlight">
```
<code>&lt;link rel="stylesheet" href="https://rawgit.com/Benjaming1312/bcpageing/master/bcpageing.css"&gt;
&lt;script src="https://rawgit.com/Benjaming1312/bcpageing/master/bcpageing.js"&gt;&lt;/script&gt;
</code>
```
</pre>
</div>
<p><br></p>
<h3>建置HTML</h3>

<div class="highlighter-rouge"><pre class="highlight">
```
<code>&lt;ul class="test"&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
    &lt;li&gt;&lt;img src="http://placehold.it/150/92c952" alt=""&gt;&lt;/li&gt;
&lt;/ul&gt;
</code>
```
</pre>
</div>
<p><br></p>
<h3>使用套件</h3>
<h6>在你指定的ul element使用套件，如果沒有特別設定，預設值是一次顯示6個</h6>
<h6 style="color: red;">提醒必須將套件使用在ul那一層級，此套件是抓他下面的li元素</h6>

<div class="highlighter-rouge"><pre class="highlight"><code>$('.test').bcpagein()
</code></pre>
</div>

<p><br></p>
<hr>

<p><br></p>
<h3>相關控制項</h3>

<p>顯示幾則新聞</p>

<p>userlimt: number</p>

<p>使用animate.css</p>

<p>animate: Boolean</p>

<p>animateIn: String</p>

<p>animateOut: String</p>

<p><br></p>
<h3>實際應用</h3>
<h6>一次顯示四則，使用animate,設定進入與出去的動畫效果</h6>

<div class="highlighter-rouge"><pre class="highlight"><code>

```
$('.test').bcpagein({
    userlimt: 4,
    animate: true,
    animateIn: 'flipInX',
    animateOut: 'flipOutX'
})
```

</code></pre>
</div>