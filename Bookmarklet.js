
//Helloをアラートで表示
javascript:alert('Hello');

//title要素をアラートで表示
javascript:alert(document.title);

//title要素をコンソールに表示
javascript:console.log(document.title);

//文字列を変数としてアラートで表示
javascript:(()=>{
    const msg = "test";
    alert(msg)
})();

//h1要素をアラートで表示
javascript:alert(
    document.querySelector('h1').innerText
);

//h1要素をページ上部に追加
javascript:(function(){
    var h = document.querySelector('h1');
    document.body.insertAdjacentText('afterbegin', h.innerText);
})();

//最終更新日取得
javascript:(d => {
    alert((new Date(document.lastModified)).toLocaleString('jp-JP'));
})(document);

//選択文字数カウント
javascript:(() =>{const s = window.getSelection().toString();
    alert('Character connt: '+ s.length)
})();

//選択読み上げ
javascript:(() =>{
    const s = window.getSelection().toString();
    const msg = new SpeechSynthesisUtterance(s);
    msg.rate = 2;
    msg.lang = 'ja-JP';
    window.speechSynthesis.speak(msg);
})();

//HTMLソースを表示
javascript:(d =>{
    const newWindow = window.open();
    const preTag = newWindow.document.createElement('pre');
    preTag.textContent = d.documentElement.outerHTML;
    preTag.setAttribute('style', 'white-space: pre-wrap;');
    newWindow.document.body.innerHTML = '';
    newWindow.document.body.appendChild(preTag);
    newWindow.document.close();
})(document);

//google翻訳
javascript:(() =>{
    location.href =
        'https://translate.google.com/translate?sl=auto&tl=ja&u='
        + encodeURIComponent(location.href); 
})();

//goole pegespeed
javascript:(() =>{
    location.href =
        'https://pagespeed.web.dev/analysis?url='
        + encodeURIComponent(location.href); 
})();

//シニカルURLを取得
javascript:(d =>{
    location.href =
        d.querySelector('link[rel="canonical"]').href;
})(document);


//計算
javascript:(() =>{
    let expression = prompt("計算式を入力してください（例：３＋５＊２）");
    try {
        alert("結果："+ eval(expression));
    }catch(e){
        alert("エラー：無効な式です。");
    }
})();

//すべての要素にボーダーを追加
javascript:(d =>{
    d.querySelectorAll('*').forEach(e => {
        e.style.border = '1px solid red';
    });
})(document);

//パスワードを表示
javascript:(d =>{
    d.querySelectorAll('input[type="password"]').forEach(pwd => {
        pwd.type = 'text';
    });
})(document);

//背景色を変更
javascript:(d =>{
    d.querySelectorAll('*').forEach(e => {
        e.style.bakkgroundColor = '#ffffff';
        e.style.bakkgroundImage = 'none';
        e.style.color = 'black';
    });
})(document);

//SNSへのシェア用テキストのコピー
javascript:(() =>{
    const selected = window.getSelection().toString();
    const title = document.title;
    const url = window.location.href;
    const textToCopy = `"${selected}"\n\n${title}\n${url}`;
    navigator.clipboard.writeText(textToCopy);
})();

//広告を非表示にする
javascript:(d =>{
    d.querySelectorAll([
        '[class*="ad"]',
        '[id*="ad"]',
        '[class*="pr"]',
        '[id*="pr"]'
    ].join(',')).forEach(ad =>{
        ad.style.display = 'none';
    });
})(document);

//すべての画像を非表示にする
javascript:(d =>{
    d.querySelectorAll('img').forEach(img => {
        img.style.display = 'none';
    });
})(document);

//自動スクロール
javascript:((w, d) => {
    const scrollInterval = setInterval(() => {
        w.scrollBy(0, 50);
        if (w.scrollY + w.innerHeight >= d.documentElement.scrollHeight) {
            clearInterval(scrollInterval);
        }
    }, 100);
})(window, document);

//すべてのリンクを新しいタブで開く
javascript:(d =>{
    d.querySelectorAll('a').forEach(a => window.open(a.href));
})(document);

//すべての画像を新しいタブで開く
javascript:(d =>{
    d.querySelectorAll('img').forEach(i => window.open(i.src));
})(document);

//CSSをリセットする
javascript:(d =>{
    d.querySelectorAll([
        'link[rel = "stylesheet"]',
        'style'
    ].join(',')).forEach(style => style.remove());
})(document);

//OGP画像をページの先頭に表示する
javascript:(d =>{
    let ogp = d.querySelector('meta[property="og:image"]');
    if(ogp){
        let img = d.createElement('img');
        img.src = ogp.getAttribute('content');
        img.style.maxWidth = '100%';
        d.body.insertBefore(img, d.body.firstChild);
    } else {
        alert('not found');
    }
})(document);

//再生速度の変更
javascript:(d =>{
    d.querySelectorAll('video').forEach(video => {
        video.playbackRate = 2;
    });
})(document);

//すべてのチェックボックスにチェックする
javascript:(d =>{
    d.querySelectorAll('input[type="checkbox"]').forEach(c => {
        c.checked = true;
    });
})(document);

//すべてのラジオボタンにチェックする
javascript:(d =>{
    const selected = new Set();
    d.querySelectorAll('unput[type="radio"]').forEicih(r => {
        if(!selected.has(r.name)){
            r.checked = true;
            selected.add(r.name);
        }
    });
})(document);

//すべての画像をグレースケールにする
javascript:(d =>{
    d.querySelectorAll('img').forEach(image => {
        image.style.filter = 'grayscale(100%)';
    });
})(document);

//alt属性のない画像をチェックする
javascript:(d =>{
    d.querySelectorAll('img').forEach(image => {
        if(!image.hasAttribute('alt')) {
            image.style.border = '5px solid red';
        }
    });
})(document);

//alt属性の短い画像をチェックする
javascript:(d =>{
    d.querySelectorAll('img').forEach(image => {
        const alt = image.getAttribute('alt');
        if(!alt){
            image.style.border = '5px solid red';
        } else if(alt.length <= 5) {
            image.style.border = '5px solid yellow';
        }
    });
})(document);

//見出しからの目次を生成する
javascript:(d =>{
    const ss = d.querySelectorAll.bind(d);
    const c = d.createElement.bind(d);
    const ul = c('ul');
    ss('h1,h2,h3,h4,h5,h6').forEach(header => {
        const li = c('li');
        const link = c('a');
        link.href = '#' + header.id;
        link.innerText = header.innerText;
        li.appendChild(link);
        ul.appendChild(li);
    });
    d.body.insertBefore(ul, d.body.firstChild);
})(document);

//表形式のデータをcsv形式で出力する
javascript:(d =>{
    d.querySelectorAll('table').forEach(table => {
        const csv = [];
        for(let row of table.rows){
            const line = [];
            for(let cell of row.cells) {
                line.push(`"${cell.innerText}"`);
            };
            csv.push(line.join(','));  
        };
        const textarea = d.createElement('textarea');
        textarea.value = csv.join('\n');
        table.parentNode.insertBefore(textarea, table);
    });
})(document);

//Cosenseにノートを作成する
javascript:((d,w) =>{
    const s = d.createElement.bind(d);
    const site = 'https://cosense.io/<project>';
    const title = w.prompt('タイトル', d.title);
    if(!title){
        alert('タイトルがありませんでした');
        return;
    }
    const body = s('meta[name="description" ]');
    const e = t => encodeURIComponent(t);
    const ng = text => text.trim().replace(/[\[\]\n]/g, '');
    w.open(`${site}/${e(ng(title))}?body=${e(ng(body.content))}`);
})(document, window);

//操作中の要素の背景色を変更する
javascript:(d =>{
    d.addEventListener('focusin', e => {
        e.target.style. backgroundColor = 'yellow';
    });
    d.addEventListener('focusout', e => {
        e.target.style. backgroundColor = 'white';
    });
})(document);

//自動入力
javascript:(() =>{
    const formData = {
        name: "名 前"
    };
    function autofillInput(selectors, value){
        const element = document.querySelector(selectors.join(','));
        if(element){
            element.value = value;
        }
    }
    autofillInput([
        input[name="q"]
    ], formData.name);   
})();

//選択したテキストをフォームに入力する
javascript:(() =>{
    const selectedText = window.getSelection().toString();
    if(selectedText){
        const input = document.querySelector('input[name="q"]');
        if(input){
            input.value = selectedText;
        } else {
            alert('入力フィールドが見つかりませんでした');
        }
    } else {
        alert('テキストを選択してください');
    }
})();

//位置情報を取得する
javascript:(n =>{
    if(n.geolocation){
        n.geolocation.getCurrentPosition(position => {
            alert([
                '緯度：　',
                position.coords.latitude,
                '\n経度：　',
                position.coords.longitude,
            ].join(''));
        },() => {
            alert('位置情報の取得に失敗しました。');
        });
    }else {
        alert('このブラウザは位置情報に対応していません。');
    }
})(navigator);

//google検索欄に文字列を入力
javascript:(()=>{
    const q=document.querySelector('.gLFyf')
    ||document.querySelector('textarea[name="q"]')
    ||document.querySelector('input[name="q"]');
    if(!q){alert('検索欄が見つかりません');
        return;
    }q.value='入力する文字列';
})();

//google検索欄に文字列を入力改訂版
javascript:(() => {
  const q = document.querySelector('.gLFyf')
    ||document.querySelector('textarea[name="q"]')
    ||document.querySelector('input[name="q"]');
  if (!q) {
    alert('検索欄が見つかりません');
    return;
  }
  const v = '入力する文字列';
  const setter =
    Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')?.set ||
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
  if (setter) {
    setter.call(q, v);
  } else {
    q.value = v;
  }
  q.dispatchEvent(new Event('input', { bubbles: true }));
  q.dispatchEvent(new Event('change', { bubbles: true }));
  q.focus();
})();


//入力された文字列をアラートで表示する
javascript:(() => {
  const q = document.querySelector('.gLFyf')
    ||document.querySelector('textarea[name="q"]')
    ||document.querySelector('input[name="q"]');
  if (!q) {
    alert('検索欄が見つかりません');
    return;
  }
  alert(q.value);
})();


//入力された文字列をページ上部に追加
javascript:(() => {
  const q = document.querySelector('.gLFyf')
    ||document.querySelector('textarea[name="q"]')
    ||document.querySelector('input[name="q"]');
  if (!q) {
    alert('検索欄が見つかりません');
    return;
  }
  document.body.insertAdjacentHTML(
    'afterbegin',
    q.value.replace(/\n/g, '<br>')
  );
})();
