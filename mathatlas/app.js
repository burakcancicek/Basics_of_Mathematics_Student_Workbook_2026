const $=id=>document.getElementById(id);const repo='https://github.com/burakcancicek/Basics_of_Mathematics_Student_Workbook_2026';let translatedSolutions={};fetch('full_solution_translations.json').then(r=>r.json()).then(x=>{translatedSolutions=x;if(selected>=0&&mode==='solution')show()}).catch(()=>{});let topics=[],selected=-1,mode='exercise',problem=1,lang=localStorage.getItem('mathlang')||'en',light=localStorage.getItem('mathlight')==='1';const dict={en:{subtitle:'Student Workbook · Winter 2026',source:'Official course workbook',search:'Search topics...',overview:'Overview',welcome:'Your personal learning space',headline:'Mathematics, made clear.',intro:'Explore official problems, visualize ideas, and explain each step in your own words.',start:'Start studying →',topic:'Topic collections',files:'Solution files',completed:'Marked as studied',problems:'Exercise problems',solutions:'My solutions',visual:'Visual learning lab',notice:'Your answers belong in the matching Markdown file under solutions/. Save them with a GitHub commit.',empty:'No solution written yet. The official answer file is empty.',exercise:'Exercise',check:'Mark as studied on this device',uncheck:'Marked as studied ✓',next:'Next problem →',prev:'← Previous',matrix:'Matrix addition',vector:'Vector coordinates',curve:'Function graph',tip:'Interactive pictures are learning examples, NOT answers to the official exercises.',matrixHint:'Change the numbers. Each square adds to the square in the same position.',vectorHint:'Move the point to see how x and y determine the arrow.',curveHint:'Move the slider to see how changing a changes the parabola y = ax².',a:'Curve width a',noResults:'No topics found',edit:'Edit this answer on GitHub ↗',sourceEnglish:'Official exercise text is in English; the interface is translated.',groupAlgebra:'Algebra',groupGeometry:'Geometry',groupCalculus:'Calculus',count:'Problems in this topic'},tr:{subtitle:'Öğrenci Çalışma Kitabı · Kış 2026',source:'Resmî ders çalışma kitabı',search:'Konu ara...',overview:'Genel Bakış',welcome:'Kişisel öğrenme alanın',headline:'Matematik artık daha anlaşılır.',intro:'Hocanın sorularını incele, fikirleri görselleştir ve her adımı kendi sözlerinle açıkla.',start:'Çalışmaya başla →',topic:'Konu başlıkları',files:'Çözüm dosyaları',completed:'Çalışıldı olarak işaretlenen',problems:'Sorular',solutions:'Çözümlerim',visual:'Görsel öğrenme laboratuvarı',notice:'Cevaplar solutions/ klasöründeki ilgili Markdown dosyasına yazılır. GitHub üzerinde commit yaparak kaydet.',empty:'Henüz çözüm yazılmamış. Resmî cevap dosyası boş.',exercise:'Soru',check:'Bu cihazda çalışıldı işaretle',uncheck:'Çalışıldı ✓',next:'Sonraki soru →',prev:'← Önceki',matrix:'Matris toplama',vector:'Vektör koordinatları',curve:'Fonksiyon grafiği',tip:'Etkileşimli çizimler öğretici örneklerdir; hocanın sorularının cevapları DEĞİLDİR.',matrixHint:'Sayıları değiştir. Aynı konumdaki kareler birbiriyle toplanır.',vectorHint:'Noktayı hareket ettir; x ve y değerlerinin oku nasıl belirlediğini gör.',curveHint:'Kaydırıcıyı hareket ettirerek a değerinin y = ax² parabolünü nasıl değiştirdiğini gör.',a:'Eğri katsayısı a',noResults:'Konu bulunamadı',edit:'Bu cevabı GitHub üzerinde düzenle ↗',sourceEnglish:'Hocanın orijinal soru metinleri İngilizcedir; arayüz çevrilmiştir.',groupAlgebra:'Cebir',groupGeometry:'Geometri',groupCalculus:'Analiz',count:'Bu konudaki sorular'},pl:{subtitle:'Zeszyt ćwiczeń · Zima 2026',source:'Oficjalny zeszyt kursu',search:'Szukaj tematów...',overview:'Przegląd',welcome:'Twoja przestrzeń do nauki',headline:'Matematyka staje się jasna.',intro:'Poznaj zadania, zobacz wizualizacje i wyjaśnij każdy krok własnymi słowami.',start:'Rozpocznij naukę →',topic:'Tematy',files:'Pliki rozwiązań',completed:'Oznaczone jako przerobione',problems:'Zadania',solutions:'Moje rozwiązania',visual:'Laboratorium wizualne',notice:'Odpowiedzi zapisz w odpowiednim pliku Markdown w solutions/ i zatwierdź zmiany w GitHub.',empty:'Brak rozwiązania. Oficjalny plik odpowiedzi jest pusty.',exercise:'Zadanie',check:'Oznacz jako przerobione na tym urządzeniu',uncheck:'Przerobione ✓',next:'Następne zadanie →',prev:'← Poprzednie',matrix:'Dodawanie macierzy',vector:'Współrzędne wektora',curve:'Wykres funkcji',tip:'Interaktywne ilustracje to przykłady edukacyjne, NIE rozwiązania zadań z kursu.',matrixHint:'Zmień liczby. Dodajemy elementy w tych samych pozycjach.',vectorHint:'Przesuń punkt i zobacz, jak x i y określają wektor.',curveHint:'Przesuń suwak, aby zobaczyć wpływ a na parabolę y = ax².',a:'Współczynnik a',noResults:'Nie znaleziono tematów',edit:'Edytuj odpowiedź w GitHub ↗',sourceEnglish:'Oryginalne zadania są po angielsku; interfejs jest tłumaczony.',groupAlgebra:'Algebra',groupGeometry:'Geometria',groupCalculus:'Analiza',count:'Zadania w tym temacie'}};const titles={tr:['Matrisler ve İşlemler','Determinantlar','Ters Matris','Denklem Sistemleri','Vektörler','Doğrular ve Düzlemler','İkinci Dereceden Eğriler ve Yüzeyler','Limitler','Türevler','Fonksiyon Analizi','İntegraller','Uygulamalar'],pl:['Macierze i działania','Wyznaczniki','Macierz odwrotna','Układy równań','Wektory','Proste i płaszczyzny','Krzywe i powierzchnie drugiego stopnia','Granice','Pochodne','Analiza funkcji','Całki','Zastosowania']};function t(k){return dict[lang][k]||k}function title(i){return titles[lang]?.[i]||topics[i].title}function group(g){return t('group'+g)}function md(s){return DOMPurify.sanitize(marked.parse(s))}async function typeset(){if(window.MathJax?.typesetPromise){MathJax.typesetClear?.();await MathJax.typesetPromise()}}async function getText(path){const r=await fetch(encodeURI(path));if(!r.ok)throw Error('Cannot load '+path);return r.text()}function applyLang(){document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));$('search').placeholder=t('search');document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('chosen',b.dataset.lang===lang));menu();if(selected>=0)show();else overview()}function menu(){let q=$('search').value.toLocaleLowerCase();let html='',g='';topics.forEach((x,i)=>{if(!(title(i)+' '+x.title+' '+group(x.group)).toLocaleLowerCase().includes(q))return;if(x.group!==g){g=x.group;html+=`<h3>${group(g)}</h3>`}html+=`<button class="${selected===i?'active':''}" data-i="${i}">${String(i+1).padStart(2,'0')} ${title(i)}</button>`});$('nav').innerHTML=html||`<p class="muted">${t('noResults')}</p>`;document.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>openTopic(+b.dataset.i))}function studiedKey(){return `studied-${selected}-${problem}`}function isStudied(){return localStorage.getItem(studiedKey())==='1'}function countStudied(){let n=0;for(let i=0;i<topics.length;i++)for(let p=1;p<=15;p++)if(localStorage.getItem(`studied-${i}-${p}`)==='1')n++;return n}function overview(){selected=-1;menu();$('crumb').textContent=t('overview');$('content').innerHTML=`<section class="hero"><p class="eyebrow">✦ ${t('welcome').toUpperCase()}</p><h1>${t('headline')}</h1><p>${t('intro')}</p><button id="start">${t('start')}</button></section><div id="summary"><div class="tile"><strong>180</strong><span>${t('files')}</span></div><div class="tile"><strong>12</strong><span>${t('topic')}</span></div><div class="tile"><strong>${countStudied()}</strong><span>${t('completed')}</span></div></div><p class="notice">${t('sourceEnglish')}</p><div class="subject-cards">${['Algebra','Geometry','Calculus'].map(g=>`<button data-group="${g}"><span>${g==='Algebra'?'∑':g==='Geometry'?'◇':'∫'}</span><strong>${group(g)}</strong><small>${topics.filter(x=>x.group===g).length} ${t('topic').toLowerCase()}</small></button>`).join('')}</div>`;$('start').onclick=()=>openTopic(0);document.querySelectorAll('[data-group]').forEach(b=>b.onclick=()=>openTopic(topics.findIndex(x=>x.group===b.dataset.group)))}async function openTopic(i){selected=i;problem=1;mode='exercise';location.hash=`topic=${i}&p=1`;menu();await show();if(innerWidth<800)$('sidebar').classList.remove('expanded')}function problemSections(raw){const parts=raw.split(/(?=^### Exercise\s+\d+\b)/gm);return parts.filter(p=>/^### Exercise\s+\d+\b/.test(p.trim()))}async function show(){if(selected<0)return overview();let i=selected,x=topics[i],c=$('content');$('crumb').textContent=`${group(x.group)} / ${title(i)}`;c.innerHTML=`<div class="topic-head"><div><p class="eyebrow">${group(x.group)}</p><h2>${title(i)}</h2></div><button class="small-btn" id="home">⌂ ${t('overview')}</button></div><div class="tabs"><button id="exTab" class="${mode==='exercise'?'active':''}">📖 ${t('problems')}</button><button id="solTab" class="${mode==='solution'?'active':''}">💡 ${t('solutions')}</button><button id="vizTab" class="${mode==='visual'?'active':''}">📊 ${t('visual')}</button></div><div id="problemNav"></div><div class="panel" id="document"><p class="muted">Loading...</p></div><p class="notice">${t('sourceEnglish')}</p>`;$('home').onclick=overview;$('exTab').onclick=()=>{mode='exercise';show()};$('solTab').onclick=()=>{mode='solution';show()};$('vizTab').onclick=()=>{mode='visual';show()};if(mode==='visual'){$('document').innerHTML=visualMarkup();bindVisual();addAnimationButtons();return}const buttons=Array.from({length:15},(_,j)=>`<button data-p="${j+1}" class="${problem===j+1?'active':''}">${j+1}</button>`).join('');$('problemNav').innerHTML=`<div class="problem-buttons">${buttons}</div>`;document.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{problem=+b.dataset.p;location.hash=`topic=${selected}&p=${problem}`;show()});try{let raw;if(mode==='exercise'){raw=await getText(x.exercise);let sections=problemSections(raw);raw=sections[problem-1]||raw}else{raw=await getText(`${x.solutiondir}/problem_${String(problem).padStart(2,'0')}_solution.md`)}if(selected!==i)return;if(mode==='solution'&&lang!=='en'){raw=translatedSolutions[`${i}-${problem}`]?.[lang]||raw}let body=raw.trim()?md(raw):`<h3>${t('empty')}</h3>`;let path=`${x.solutiondir}/problem_${String(problem).padStart(2,'0')}_solution.md`;let url=`${repo}/edit/main/${path}`;$('document').innerHTML=`<div class="doc-toolbar"><span>${t('exercise')} ${problem} / 15</span><button id="studied" class="small-btn">${isStudied()?t('uncheck'):t('check')}</button></div><div class="markdown">${body}</div><div class="doc-bottom"><button id="prev" ${problem===1?'disabled':''}>${t('prev')}</button><button id="next" ${problem===15?'disabled':''}>${t('next')}</button></div>${mode==='solution'?`<p class="notice">${t('notice')} <a href="${url}" target="_blank" rel="noopener">${t('edit')}</a></p>`:''}`;$('studied').onclick=()=>{localStorage.setItem(studiedKey(),isStudied()?'0':'1');$('studied').textContent=isStudied()?t('uncheck'):t('check')};$('prev').onclick=()=>{problem--;show()};$('next').onclick=()=>{problem++;show()};await typeset();addGuidedLearning(raw,mode)}catch(e){$('document').textContent=e.message}}function visualMarkup(){return `<p class="notice">⚠ ${t('tip')}</p><div class="lab-grid"><section class="lab-card"><h3>🟩 ${t('matrix')}</h3><p>${t('matrixHint')}</p><div class="matrices"><div class="matrix">${[0,1,2,3].map((n)=>`<input type="number" class="ma" value="${n+1}" aria-label="Matrix A ${n+1}">`).join('')}</div><b>+</b><div class="matrix">${[4,3,2,1].map((n)=>`<input type="number" class="mb" value="${n+1}" aria-label="Matrix B ${n+1}">`).join('')}</div><b>=</b><div class="matrix result">${[0,1,2,3].map(()=>`<output>5</output>`).join('')}</div></div><p id="matrixExplanation" class="lab-explain"></p></section><section class="lab-card"><h3>↗ ${t('vector')}</h3><p>${t('vectorHint')}</p><svg id="vectorSvg" viewBox="0 0 320 250" role="img" aria-label="Interactive vector diagram"><defs><marker id="arrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="#83edcb" stroke-width="1.5"/></marker></defs><g id="vectorGrid"></g><line id="vectorLine" stroke="#83edcb" stroke-width="4" marker-end="url(#arrow)"/><circle id="vectorPoint" r="9" fill="#f4ba72" stroke="#fff" stroke-width="2"/><text id="vectorLabel" fill="currentColor" font-size="15"></text></svg><div class="sliderrow"><label>x <input id="vx" type="range" min="-4" max="4" value="3"></label><label>y <input id="vy" type="range" min="-4" max="4" value="2"></label></div><p id="vectorExplanation" class="lab-explain"></p></section><section class="lab-card"><h3>〰 ${t('curve')}</h3><p>${t('curveHint')}</p><svg id="curveSvg" viewBox="0 0 320 250" role="img" aria-label="Interactive parabola graph"><g id="curveGrid"></g><path id="curvePath" fill="none" stroke="#83edcb" stroke-width="4" stroke-linecap="round"/></svg><div class="sliderrow"><label>${t('a')} <input id="ca" type="range" min="-3" max="3" step="0.25" value="1"></label></div><p id="curveExplanation" class="lab-explain"></p></section></div>`}function bindVisual(){const ma=[...document.querySelectorAll('.ma')],mb=[...document.querySelectorAll('.mb')],outs=[...document.querySelectorAll('.result output')];function updateMatrix(){let a=ma.map(e=>Number(e.value)||0),b=mb.map(e=>Number(e.value)||0);outs.forEach((o,i)=>o.textContent=a[i]+b[i]);$('matrixExplanation').textContent=`${a[0]} + ${b[0]} = ${a[0]+b[0]}   ·   ${a[1]} + ${b[1]} = ${a[1]+b[1]}`}document.querySelectorAll('.matrix input').forEach(e=>e.oninput=updateMatrix);updateMatrix();let grid='';for(let v=-4;v<=4;v++){let pos=160+v*25;grid+=`<line x1="${pos}" y1="20" x2="${pos}" y2="220" stroke="#34485d"/><line x1="60" y1="${120+v*25}" x2="260" y2="${120+v*25}" stroke="#34485d"/>`}$('vectorGrid').innerHTML=grid+'<line x1="60" y1="120" x2="260" y2="120" stroke="#9aaec5" stroke-width="2"/><line x1="160" y1="20" x2="160" y2="220" stroke="#9aaec5" stroke-width="2"/>';function updateVector(){let x=+$('vx').value,y=+$('vy').value,px=160+x*25,py=120-y*25;$('vectorLine').setAttribute('x1',160);$('vectorLine').setAttribute('y1',120);$('vectorLine').setAttribute('x2',px);$('vectorLine').setAttribute('y2',py);$('vectorPoint').setAttribute('cx',px);$('vectorPoint').setAttribute('cy',py);$('vectorLabel').setAttribute('x',Math.min(260,px+10));$('vectorLabel').setAttribute('y',Math.max(20,py-12));$('vectorLabel').textContent=`(${x}, ${y})`;$('vectorExplanation').textContent=`x = ${x}   ·   y = ${y}   ·   |v| = ${Math.hypot(x,y).toFixed(2)}`}$('vx').oninput=$('vy').oninput=updateVector;updateVector();$('curveGrid').innerHTML=grid+'<line x1="60" y1="120" x2="260" y2="120" stroke="#9aaec5" stroke-width="2"/><line x1="160" y1="20" x2="160" y2="220" stroke="#9aaec5" stroke-width="2"/>';function updateCurve(){let a=+$('ca').value,points=[];for(let x=-4;x<=4;x+=.08){let px=160+x*25,py=120-a*x*x*12;points.push(`${points.length?'L':'M'}${px.toFixed(1)} ${py.toFixed(1)}`)}$('curvePath').setAttribute('d',points.join(' '));$('curveExplanation').textContent=`y = ${a}x²   ·   x = 2 → y = ${4*a}`}$('ca').oninput=updateCurve;updateCurve()}async function init(){document.body.classList.toggle('light',light);$('theme').onclick=()=>{light=!light;localStorage.setItem('mathlight',light?'1':'0');document.body.classList.toggle('light',light)};$('mobileNav').onclick=()=>$('sidebar').classList.toggle('expanded');document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;localStorage.setItem('mathlang',lang);applyLang()});$('search').oninput=menu;try{topics=await(await fetch('topics.json')).json();applyLang();let h=location.hash.match(/topic=(\d+)(?:&p=(\d+))?/);if(h){await openTopic(Math.min(+h[1],topics.length-1));problem=Math.max(1,Math.min(15,+(h[2]||1)));await show()}}catch(e){$('content').textContent='Failed to load workbook: '+e.message}}window.addEventListener('load',init);

// Progressive explanation, explicitly based on the actual saved solution content.
const guideLabels={
 en:{title:'Guided solution',simple:'🧸 Explain simply',hide:'Hide simple explanation',next:'Next step →',back:'← Previous step',all:'Show full solution',steps:'Step',empty:'Write a solution in the matching Markdown file to unlock guided steps.',notice:'The simplified explanation is a learning aid, not a replacement for the full mathematical proof.',animate:'▶ Animate graph',stop:'■ Stop animation',matrix:'Each colored position is matched with the same position in the other matrix.',vector:'The arrow shows how far we move horizontally and vertically.',curve:'Changing the number changes the shape of the curve.',generic:'We do one small operation at a time. Follow where each number comes from, and check the answer at the end.'},
 tr:{title:'Adım adım çözüm',simple:'🧸 Çocuk gibi anlat',hide:'Basit anlatımı gizle',next:'Sonraki adım →',back:'← Önceki adım',all:'Tam çözümü göster',steps:'Adım',empty:'Adımları görmek için ilgili Markdown çözüm dosyasına gerçek çözümü yaz.',notice:'Basit anlatım öğrenmek içindir; matematiksel ispatın yerine geçmez.',animate:'▶ Grafiği hareket ettir',stop:'■ Animasyonu durdur',matrix:'Aynı yerde duran renkli kutuları eşleştirip içlerindeki sayıları topluyoruz.',vector:'Ok, sağa-sola ve yukarı-aşağı ne kadar gittiğimizi gösterir.',curve:'Sayı değişince çizginin şekli de değişir.',generic:'Her seferinde küçük bir işlem yapıyoruz. Sayıların nereden geldiğine bakıyoruz ve sonunda sonucu kontrol ediyoruz.'},
 pl:{title:'Rozwiązanie krok po kroku',simple:'🧸 Wyjaśnij bardzo prosto',hide:'Ukryj proste wyjaśnienie',next:'Następny krok →',back:'← Poprzedni krok',all:'Pokaż pełne rozwiązanie',steps:'Krok',empty:'Wpisz rozwiązanie w odpowiednim pliku Markdown, aby zobaczyć kroki.',notice:'Proste wyjaśnienie pomaga w nauce, ale nie zastępuje dowodu matematycznego.',animate:'▶ Animuj wykres',stop:'■ Zatrzymaj animację',matrix:'Łączymy pola o tym samym położeniu i dodajemy ich liczby.',vector:'Strzałka pokazuje, jak daleko idziemy w poziomie i w pionie.',curve:'Gdy zmieniamy liczbę, zmienia się kształt krzywej.',generic:'Wykonujemy jedną małą operację naraz. Sprawdzamy, skąd pochodzą liczby, a na końcu kontrolujemy wynik.'}};
function addGuidedLearning(raw,currentMode){if(currentMode!=='solution')return;const target=document.querySelector('#document .markdown');if(!target)return;const L=guideLabels[lang];if(!raw.trim()){const n=document.createElement('p');n.className='guide-note';n.textContent=L.empty;target.after(n);return}
// Split on solution headings first, otherwise on paragraphs; do not fabricate any math.
const headings=[...target.querySelectorAll('h1,h2,h3,h4')];let steps=[];
if(headings.length){for(const h of headings){let section=[];for(let el=h.nextElementSibling;el&&!/^H[1-4]$/.test(el.tagName);el=el.nextElementSibling){if(/^Detailed Step-by-Step Solution/i.test(h.textContent)&&/^Step\s+\d+/i.test(el.textContent.trim())){if(section.length)steps.push(section.join(''));section=[el.outerHTML]}else section.push(el.outerHTML)}if(section.length){if(/^Detailed Step-by-Step Solution/i.test(h.textContent))steps.push(section.join(''));else steps.push(h.outerHTML+section.join(''))}}}
else steps=[...target.children].map(e=>e.outerHTML);
steps=steps.filter(Boolean);if(!steps.length)return;
const guide=document.createElement('section');guide.className='guide';const heading=document.createElement('h3');heading.textContent=L.title;guide.append(heading);
const progress=document.createElement('p');progress.className='guide-progress';guide.append(progress);const display=document.createElement('div');display.className='guide-step markdown';guide.append(display);
const actions=document.createElement('div');actions.className='guide-actions';const prev=document.createElement('button'),next=document.createElement('button'),all=document.createElement('button'),simple=document.createElement('button');prev.textContent=L.back;next.textContent=L.next;all.textContent=L.all;simple.textContent=L.simple;actions.append(prev,next,all,simple);guide.append(actions);
const note=document.createElement('p');note.className='guide-note';note.textContent=L.notice;guide.append(note);
const simpleBox=document.createElement('div');simpleBox.className='guide-simple';simpleBox.hidden=true;simpleBox.textContent=(window.kidNotes?.[String(selected)]?.[String(problem)]?.[lang])||L.generic;guide.append(simpleBox);
let pos=0,full=false;const render=()=>{progress.textContent=`${L.steps} ${pos+1} / ${steps.length}`;display.innerHTML=full?steps.join(''):steps[pos];prev.disabled=pos===0||full;next.disabled=pos===steps.length-1||full;all.textContent=full?L.title:L.all;window.MathJax?.typesetPromise?.([display]).catch(()=>{})};
prev.onclick=()=>{pos=Math.max(0,pos-1);render()};next.onclick=()=>{pos=Math.min(steps.length-1,pos+1);render()};all.onclick=()=>{full=!full;render()};simple.onclick=()=>{simpleBox.hidden=!simpleBox.hidden;simple.textContent=simpleBox.hidden?L.simple:L.hide};target.before(guide);render();addProblemVisual()}
let mathAnimation=null;
function addAnimationButtons(){if(mathAnimation){cancelAnimationFrame(mathAnimation);mathAnimation=null}const L=guideLabels[lang];const graph=document.querySelector('#curveSvg');if(!graph)return;const slider=document.querySelector('#ca');if(!slider)return;const btn=document.createElement('button');btn.className='visual-play';btn.textContent=L.animate;graph.after(btn);let active=false,started=0;
const tick=now=>{if(!active)return;if(!started)started=now;const v=Math.sin((now-started)/1200)*2.75;slider.value=String(Math.round(v*4)/4);slider.dispatchEvent(new Event('input'));mathAnimation=requestAnimationFrame(tick)};
btn.onclick=()=>{active=!active;btn.textContent=active?L.stop:L.animate;if(active){started=0;mathAnimation=requestAnimationFrame(tick)}else{cancelAnimationFrame(mathAnimation);mathAnimation=null}};
const info=document.createElement('p');info.className='guide-simple';info.textContent=L.curve;btn.after(info);
const matrix=document.querySelector('.matrices');if(matrix){const hint=document.createElement('p');hint.className='guide-simple';hint.textContent=L.matrix;matrix.after(hint)}const vector=document.querySelector('#vectorSvg');if(vector){const hint=document.createElement('p');hint.className='guide-simple';hint.textContent=L.vector;vector.after(hint)}}

fetch('kid_explanations.json').then(r=>r.json()).then(x=>window.kidNotes=x).catch(()=>{});

// Interactive concept-specific diagrams. These are educational illustrations, not asserted to be exact exercise plots.
const visualNames={
 en:['Matrix positions','Add matching cells','Can matrices connect?','Does order matter?','Matrix moves an arrow','Flip rows and columns','Identity and zero','Row operations','Rotate and scale','Columns as arrows','Commuting operations','Powers and patterns','Fibonacci growth','Two rotations','Grouping three matrices'],
 tr:['Matrisin adresleri','Aynı kutuları topla','Matrisler bağlanabilir mi?','Sıra önemli mi?','Matris oku hareket ettirir','Satır ve sütun değişimi','Birim ve sıfır','Satır işlemleri','Döndür ve büyüt','Sütunlar birer ok','İşlemler yer değiştirir mi?','Kuvvetlerde örüntü','Fibonacci büyümesi','İki döndürme','Üç matrisi gruplama'],
 pl:['Adresy w macierzy','Dodaj pasujące pola','Czy macierze pasują?','Czy kolejność ma znaczenie?','Macierz przesuwa strzałkę','Zamiana wierszy i kolumn','Jednostka i zero','Operacje na wierszach','Obrót i skalowanie','Kolumny jako strzałki','Czy kolejność działań jest dowolna?','Wzór potęg','Wzrost Fibonacciego','Dwa obroty','Grupowanie trzech macierzy']};
const visualLabels={en:{title:'Animated learning picture',play:'▶ Play',pause:'■ Pause',hint:'Drag the slider or play the animation. This diagram explains the idea; check the written solution for the exact exercise numbers.',value:'Change'},tr:{title:'Hareketli öğrenme görseli',play:'▶ Başlat',pause:'■ Durdur',hint:'Kaydırıcıyı hareket ettir veya animasyonu başlat. Bu çizim fikri anlatır; sorunun gerçek sayılarını yazılı çözümden kontrol et.',value:'Değiştir'},pl:{title:'Animowana ilustracja',play:'▶ Odtwórz',pause:'■ Zatrzymaj',hint:'Przesuń suwak lub włącz animację. Rysunek objaśnia ideę; dokładne liczby sprawdź w rozwiązaniu.',value:'Zmień'}};
let perProblemRAF=0;
function addProblemVisual(){
 if(perProblemRAF){cancelAnimationFrame(perProblemRAF);perProblemRAF=0}
 const container=document.querySelector('.guide');if(!container||![0,4,5,7].includes(selected))return;
 const i=problem-1,L=visualLabels[lang],section=document.createElement('section');section.className='problem-visual';
 const title=selected===0?visualNames[lang][i]:(selected===4?({en:'Vector picture',tr:'Vektör resmi',pl:'Obraz wektora'})[lang]:selected===5?({en:'Lines and planes',tr:'Doğrular ve düzlemler',pl:'Proste i płaszczyzny'})[lang]:({en:'Approaching a limit',tr:'Limite yaklaşmak',pl:'Zbliżanie się do granicy'})[lang]);
 section.innerHTML=`<h3>🎬 ${L.title} — ${title} #${problem}</h3><svg viewBox="0 0 520 240" role="img" aria-label="${title}"></svg><div class="problem-visual-controls"><label>${L.value}: <output>0</output></label><input type="range" min="0" max="100" value="0" step="1" aria-label="${L.value}"><button type="button">${L.play}</button></div><p class="guide-note">${L.hint}</p>`;
 container.after(section);const svg=section.querySelector('svg'),range=section.querySelector('input'),output=section.querySelector('output'),btn=section.querySelector('button');
 const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;');
 const line=(x1,y1,x2,y2,c='#7698b9',w=2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}"/>`;
 const dot=(x,y,c='#f4b65b',r=6)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
 const txt=(x,y,s,c='currentColor',size=14)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${size}">${esc(s)}</text>`;
 const grid=()=>{let s='';for(let x=20;x<=500;x+=24)s+=line(x,10,x,225,'#526779',.4);for(let y=12;y<=228;y+=24)s+=line(20,y,500,y,'#526779',.4);return s+line(260,12,260,228,'#8297ab')+line(20,120,500,120,'#8297ab')};
 const poly=(points,c='#5bd6b3')=>`<polyline points="${points}" fill="none" stroke="${c}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>`;
 function render(){const q=Number(range.value)/100;output.textContent=range.value+'%';let s='';
 if(selected===0){const vals=[[1,2],[3,4]],b=[[5,6],[7,8]];const chosen=Math.min(3,Math.floor(q*4));for(let m=0;m<3;m++){const ox=30+m*175;s+=txt(ox+18,25,['A','B','A+B'][m],'currentColor',18);for(let r=0;r<2;r++)for(let c=0;c<2;c++){const j=r*2+c,x=ox+c*62,y=48+r*75;const active=j===chosen;s+=`<rect x="${x}" y="${y}" width="55" height="57" rx="9" fill="${active?'#f4b65b':'#57768d'}" fill-opacity="${active?.34:.12}" stroke="${active?'#f4b65b':'#627d93'}"/>`;s+=txt(x+18,y+34,m===2?vals[r][c]+b[r][c]:m===0?vals[r][c]:b[r][c],'currentColor',22)}}s+=txt(155,120,'+','currentColor',26)+txt(335,120,'=','currentColor',26);s+=txt(40,222,`(${vals[Math.floor(chosen/2)][chosen%2]} + ${b[Math.floor(chosen/2)][chosen%2]} = ${vals[Math.floor(chosen/2)][chosen%2]+b[Math.floor(chosen/2)][chosen%2]})`,'#f4b65b',16);
 }else if(selected===4){s+=grid();const angle=(i+1)*.19+q*2.8,rad=35+Math.sin((i+1)*.7)*10+q*45;const x=260+Math.cos(angle)*rad*2,y=120-Math.sin(angle)*rad*1.4;s+=line(260,120,x,y,'#58d9b3',5)+dot(x,y,'#f4b65b',8)+txt(x+9,y-9,`v${problem}`,'#f4b65b',17);s+=line(260,120,x,120,'#d884a5',2)+line(x,120,x,y,'#e0bc6e',2);s+=txt(28,30,`x = ${((x-260)/24).toFixed(1)}   y = ${((120-y)/24).toFixed(1)}`);
 }else if(selected===5){s+=grid();const slope=(i%5-2)*.25+Math.sin(q*Math.PI*2)*.9;const intercept=100+(i%3)*18;const y=x=>intercept-slope*(x-260);s+=line(20,y(20),500,y(500),'#5bd6b3',4);const px=40+q*430,py=y(px);s+=dot(px,py,'#f4b65b',8)+line(px,py,px,120,'#f4b65b',1.5)+txt(28,32,`t = ${q.toFixed(2)} · P(${((px-260)/24).toFixed(1)}, ${((120-py)/24).toFixed(1)})`);
 }else if(selected===7){s+=grid();const fns=[x=>2+2/(x+1),x=>x/(x*x+1),x=>2.5+1/(x+2),x=>Math.pow(2/3,Math.max(0,x+4)),x=>Math.E-1/(x*x+2),x=>.6+1/(x*x+2),x=>x-1,x=>1/(Math.sqrt(Math.max(.01,x+4))+2),x=>1/(x-2),x=>x<0?x+1:1-x,x=>5-1/(x*x+1),x=>Math.exp(x),x=>Math.sin(x),x=>1-Math.cos(x),x=>2+Math.sin(x)/4];const fn=fns[i];let pts=[];for(let px=20;px<=500;px+=3){let x=(px-260)/45,y=fn(x),py=120-(y*24);if(Number.isFinite(py)&&py>-400&&py<600){pts.push([px,py])}else if(pts.length){s+=poly(pts.map(a=>a.join(',')).join(' '));pts=[]}}if(pts.length)s+=poly(pts.map(a=>a.join(',')).join(' '));const x=-3+q*6,y=fn(x),px=260+x*45,py=120-y*24;if(Number.isFinite(py)&&py>=10&&py<=230)s+=dot(px,py,'#f4b65b',8);s+=txt(28,32,`x = ${x.toFixed(2)}  ·  y ≈ ${Number.isFinite(y)?y.toFixed(3):'∞'}`);
 }
 svg.innerHTML=s;
 }
 range.addEventListener('input',render);let running=false;const animate=()=>{if(!running||!section.isConnected){running=false;return}range.value=(Number(range.value)+1)%101;render();perProblemRAF=requestAnimationFrame(animate)};btn.onclick=()=>{running=!running;btn.textContent=running?L.pause:L.play;if(running)perProblemRAF=requestAnimationFrame(animate);else cancelAnimationFrame(perProblemRAF)};render();
}


// Source-grounded equation animation for each of the 60 solved exercises.
// This augments conceptual SVGs; it does not pretend an illustrative plot uses exact coefficients.
let sourceVisuals={};
fetch('problem_source_visuals.json').then(r=>r.json()).then(x=>{sourceVisuals=x;showSourceMath()}).catch(()=>{});
const sourceMathLabels={
 en:{heading:'This exercise’s actual formulas',play:'▶ Animate',stop:'■ Stop',previous:'← Previous',next:'Next →',note:'These formulas come from the original exercise. The highlighted formula changes with the controls; the conceptual diagram above may use example values.'},
 tr:{heading:'Bu sorunun gerçek formülleri',play:'▶ Canlandır',stop:'■ Durdur',previous:'← Önceki',next:'Sonraki →',note:'Formüller hocanın orijinal sorusundan alınmıştır. Üstteki kavram çizimi örnek değerler kullanabilir.'},
 pl:{heading:'Prawdziwe wzory z tego zadania',play:'▶ Animuj',stop:'■ Zatrzymaj',previous:'← Poprzedni',next:'Następny →',note:'Wzory pochodzą z oryginalnego zadania. Ilustracja pojęciowa powyżej może używać przykładowych wartości.'}
};
let sourceMathTimer=null;
function showSourceMath(){
 const guide=document.querySelector('.guide'),d=sourceVisuals[`${selected}-${problem}`];
 document.querySelectorAll('.source-math-visual').forEach(e=>e.remove());
 if(sourceMathTimer){clearInterval(sourceMathTimer);sourceMathTimer=null}
 if(!guide||!d)return;
 const L=sourceMathLabels[lang],sec=document.createElement('section');sec.className='source-math-visual';
 const formulas=d.expressions.length?d.expressions:[d.title];
 sec.innerHTML=`<h3>🔎 ${L.heading}</h3><p class="source-title"></p><div class="source-equation markdown"></div><div class="source-controls"><button type="button" data-prev>${L.previous}</button><input type="range" min="0" max="${Math.max(0,formulas.length-1)}" value="0" step="1" aria-label="${L.heading}"><button type="button" data-next>${L.next}</button><button type="button" data-play>${L.play}</button></div><p class="guide-note">${L.note}</p>`;
 guide.after(sec);sec.querySelector('.source-title').textContent=d.title;
 const area=sec.querySelector('.source-equation'),range=sec.querySelector('input'),play=sec.querySelector('[data-play]');
 function draw(){const k=+range.value;area.textContent='';const f=document.createElement('div');f.className='source-equation-inner';f.textContent=d.expressions.length?'\\['+formulas[k]+'\\]':formulas[k];area.append(f);window.MathJax?.typesetPromise?.([area]).catch(()=>{});}
 sec.querySelector('[data-prev]').onclick=()=>{range.value=Math.max(0,+range.value-1);draw()};
 sec.querySelector('[data-next]').onclick=()=>{range.value=(+range.value+1)%formulas.length;draw()};
 range.oninput=draw;
 play.onclick=()=>{if(sourceMathTimer){clearInterval(sourceMathTimer);sourceMathTimer=null;play.textContent=L.play}else{play.textContent=L.stop;sourceMathTimer=setInterval(()=>{if(!sec.isConnected){clearInterval(sourceMathTimer);sourceMathTimer=null;return}range.value=(+range.value+1)%formulas.length;draw()},1800)}};
 draw();
}
const originalAddProblemVisual=addProblemVisual;
addProblemVisual=function(){originalAddProblemVisual();showSourceMath()};

// Exact-data visualizations: four verified worked exercises.
const exactVizLabels={en:{heading:'Animation using this problem’s actual numbers',note:'The numbers and equation below are taken from this specific exercise.'},tr:{heading:'Bu sorunun gerçek sayılarıyla animasyon',note:'Aşağıdaki sayılar ve denklem doğrudan bu sorudan alınmıştır.'},pl:{heading:'Animacja z rzeczywistymi danymi zadania',note:'Poniższe liczby i równanie pochodzą bezpośrednio z tego zadania.'}};
function addExactVisual(){
 const guide=document.querySelector('.guide');if(!guide||problem!==1||![0,4,5,7].includes(selected))return;
 const old=document.querySelector('.problem-visual');if(old)old.style.display='none';
 const L=exactVizLabels[lang],sec=document.createElement('section');sec.className='problem-visual exact-visual';
 sec.innerHTML=`<h3>🎯 ${L.heading}</h3><svg viewBox="0 0 520 260" role="img" aria-label="${L.heading}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="${L.heading}"><output></output><button type="button">▶</button></div><p class="guide-note">${L.note}</p>`;
 guide.after(sec);const svg=sec.querySelector('svg'),range=sec.querySelector('input'),output=sec.querySelector('output'),btn=sec.querySelector('button');let timer=null;
 const line=(x,y,X,Y,color='#5bc6d0',width=3)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${color}" stroke-width="${width}"/>`;
 const dot=(x,y,color='#f4b65b')=>`<circle cx="${x}" cy="${y}" r="6" fill="${color}"/>`;
 const txt=(x,y,t,color='currentColor')=>`<text x="${x}" y="${y}" font-size="16" fill="${color}">${t}</text>`;
 function render(){let q=+range.value/100;output.textContent=Math.round(q*100)+'%';let out='';
 if(selected===0){const A=[[2,-1,3],[0,4,5]],B=[[1,0],[-2,3],[4,1]],j=Math.min(5,Math.floor(q*6)),r=Math.floor(j/3),c=j%3;
  for(let rr=0;rr<2;rr++)for(let cc=0;cc<3;cc++){const x=35+cc*64,y=55+rr*72;out+=`<rect x="${x}" y="${y}" width="57" height="60" rx="8" fill="${j===rr*3+cc?'#e8b44e':'#55778d'}" fill-opacity=".25" stroke="#7d93a8"/>`+txt(x+20,y+36,A[rr][cc]);}
  for(let rr=0;rr<3;rr++)for(let cc=0;cc<2;cc++){const x=310+cc*64,y=28+rr*72;out+=`<rect x="${x}" y="${y}" width="57" height="60" rx="8" fill="#55778d" fill-opacity=".16" stroke="#7d93a8"/>`+txt(x+20,y+36,B[rr][cc]);}
  out+=txt(35,27,'A (2×3)')+txt(310,20,'B (3×2)')+txt(38,247,`a${r+1}${c+1} = ${A[r][c]}`,'#e8b44e');
 }else if(selected===4){const u=[2,-1],v=[-1,4],w=[1,3],ux=260+u[0]*35,uy=150-u[1]*26,vx=ux+v[0]*35,vy=uy-v[1]*26;out+=line(20,150,500,150,'#6c7e92',1)+line(260,12,260,250,'#6c7e92',1);out+=line(260,150,260+(ux-260)*q,150+(uy-150)*q,'#6ec8f0',5)+line(ux,uy,ux+(vx-ux)*q,uy+(vy-uy)*q,'#e8b44e',5)+line(260,150,260+(vx-260)*q,150+(vy-150)*q,'#7cd6a5',3)+dot(ux,uy)+dot(vx,vy,'#7cd6a5');out+=txt(20,25,'u=(2,−1,3), v=(−1,4,2)')+txt(20,48,'u+v=(1,3,5)')+txt(20,240,'XY projection; z: 3+2=5');
 }else if(selected===5){out+=line(20,200,500,200,'#6c7e92',1)+line(260,10,260,250,'#6c7e92',1);const x1=260+1*35,y1=200-2*35,x2=260+4*35,y2=200+1*35;out+=line(x1,y1,x2,y2,'#7cd6a5',5)+dot(x1,y1)+dot(x2,y2);out+=txt(x1-10,y1-15,'A(1,2)')+txt(x2+8,y2+5,'B(4,−1)');const t=q*1.5-.25;const x=1+3*t,y=2-3*t;out+=dot(260+x*35,200-y*35,'#ed9ac0')+txt(20,25,'x+y=3')+txt(20,48,`P=(${x.toFixed(2)}, ${y.toFixed(2)})`);
 }else if(selected===7){out+=line(20,205,500,205,'#6c7e92',1)+line(40,10,40,245,'#6c7e92',1);const f=n=>(4*n*n-3*n+1)/(2*n*n+5*n-7);let points=[];for(let n=4;n<=100;n+=2){const x=40+(n-4)*4.5,y=205-(f(n)-1.4)*100;points.push(x+','+y)}out+=`<polyline points="${points.join(' ')}" fill="none" stroke="#7cd6a5" stroke-width="4"/>`+line(40,145,500,145,'#e8b44e',2);const n=4+Math.round(q*96),y=f(n);out+=dot(40+(n-4)*4.5,205-(y-1.4)*100)+txt(55,25,`n=${n};  a(n)=${y.toFixed(5)}`)+txt(55,47,'limit = 2');}
 svg.innerHTML=out;}
 range.oninput=render;btn.onclick=()=>{if(timer){clearInterval(timer);timer=null;btn.textContent='▶'}else{btn.textContent='■';timer=setInterval(()=>{if(!sec.isConnected){clearInterval(timer);return}range.value=(+range.value+1)%101;render()},70)}};render();
}
const previousAddVisual=addProblemVisual;
addProblemVisual=function(){previousAddVisual();addExactVisual()};
// Verified exercise-specific animated diagrams for the second problem in each group.
function addExactSecondVisual(){
 if(problem!==2||![0,4,5,7].includes(selected))return;
 const guide=document.querySelector('.guide');if(!guide)return;
 const old=document.querySelector('.problem-visual');if(old)old.style.display='none';
 const L=exactVizLabels[lang],sec=document.createElement('section');sec.className='problem-visual exact-visual';
 sec.innerHTML=`<h3>🎯 ${L.heading}</h3><svg viewBox="0 0 520 260" role="img" aria-label="${L.heading}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="${L.heading}"><output></output><button type="button">▶</button></div><p class="guide-note">${L.note}</p>`;
 guide.after(sec);const svg=sec.querySelector('svg'),range=sec.querySelector('input'),output=sec.querySelector('output'),btn=sec.querySelector('button');let timer=null;
 const line=(x,y,X,Y,color='#5bc6d0',width=3)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${color}" stroke-width="${width}"/>`;
 const dot=(x,y,color='#f4b65b')=>`<circle cx="${x}" cy="${y}" r="6" fill="${color}"/>`;
 const txt=(x,y,t,color='currentColor')=>`<text x="${x}" y="${y}" font-size="15" fill="${color}">${t}</text>`;
 function render(){const q=+range.value/100;let out='';
 if(selected===0){const A=[[1,2],[-1,3]],B=[[4,-2],[0,5]],op=Math.min(2,Math.floor(q*3)),names=['A+B','A−B','3A−2B'],C=[[[5,0],[-1,8]],[[-3,4],[-1,-2]],[[-5,10],[-3,-1]]][op];
 for(let m=0;m<3;m++){const M=[A,B,C][m];for(let r=0;r<2;r++)for(let c=0;c<2;c++){const x=32+m*170+c*60,y=65+r*65;out+=`<rect x="${x}" y="${y}" width="55" height="55" rx="7" stroke="#7996b1" fill="${m===2?'#e8b44e':'#7cd6a5'}" fill-opacity=".16"/>`+txt(x+16,y+33,M[r][c]);}}
 out+=txt(32,43,'A')+txt(202,43,'B')+txt(372,43,names[op])+txt(30,237,`Selected operation: ${names[op]}`);
 }else if(selected===4){const A=[1,2,3],B=[4,-2,6],D=[3,-4,3],t=q;out+=txt(20,25,'A=(1,2,3), B=(4,−2,6)')+txt(20,49,'B−A=(3,−4,3), distance=√34');out+=line(50,180,480,180,'#758396',1)+line(140,18,140,240,'#758396',1);const x=140+(A[0]+D[0]*t)*55,y=180-(A[1]+D[1]*t)*25;out+=line(195,130,x,y,'#e8b44e',5)+dot(195,130,'#7cd6a5')+dot(360,230,'#f4b65b')+dot(x,y,'#ed9ac0');out+=txt(195,112,'A')+txt(360,248,'B')+txt(20,80,`t=${t.toFixed(2)};  z=${(3+3*t).toFixed(2)} (XY projection)`);
 }else if(selected===5){const t=-1+3*q,x=2+t,y=-1+2*t,z=3-2*t;out+=txt(20,25,'L=(2,−1,3)+t(1,2,−2)')+txt(20,48,`t=${t.toFixed(2)}, P=(${x.toFixed(2)},${y.toFixed(2)},${z.toFixed(2)})`);out+=line(20,170,500,170,'#758396',1)+line(250,15,250,245,'#758396',1);out+=line(180,230,390,20,'#7cd6a5',4);out+=dot(250+2*25,170-(-1)*25,'#e8b44e');out+=dot(250+4*25,170-3*25,'#7cd6a5');out+=dot(250+x*25,170-y*25,'#ed9ac0');out+=txt(20,240,'XY projection; z shown numerically');
 }else if(selected===7){const f=n=>(3*n+1)/(n*n+4),g=n=>(2*n*n*n-n)/(5*n*n+1),n=1+Math.round(q*49);out+=txt(20,25,'f(n)=(3n+1)/(n²+4) → 0');out+=txt(20,47,'g(n)=(2n³−n)/(5n²+1) → +∞');out+=line(40,220,500,220,'#758396',1)+line(40,15,40,245,'#758396',1);const ps1=[],ps2=[];for(let k=1;k<=50;k++){const x=40+(k-1)*9.1;ps1.push(`${x},${220-f(k)*120}`);ps2.push(`${x},${220-g(k)*3}`)}out+=`<polyline points="${ps1.join(' ')}" stroke="#7cd6a5" stroke-width="3" fill="none"/><polyline points="${ps2.join(' ')}" stroke="#e8b44e" stroke-width="3" fill="none"/>`;out+=dot(40+(n-1)*9.1,220-f(n)*120,'#7cd6a5')+dot(40+(n-1)*9.1,220-g(n)*3,'#e8b44e');out+=txt(265,25,`n=${n}, f=${f(n).toFixed(4)}, g=${g(n).toFixed(4)}`);out+=txt(20,250,'Different vertical scales: green ×120, gold ×3');}
 svg.innerHTML=out;output.textContent=Math.round(q*100)+'%';}
 range.oninput=render;btn.onclick=()=>{if(timer){clearInterval(timer);timer=null;btn.textContent='▶'}else{btn.textContent='■';timer=setInterval(()=>{if(!sec.isConnected){clearInterval(timer);return}range.value=(+range.value+1)%101;render()},75)}};render();
}
const previousExactSecondVisual=addProblemVisual;
addProblemVisual=function(){previousExactSecondVisual();addExactSecondVisual()};

// Exercise 3: four separate diagrams computed from each exercise's actual data.
function addExactThirdVisual(){
 if(problem!==3||![0,4,5,7].includes(selected))return;
 const guide=document.querySelector('.guide');if(!guide)return;
 const old=document.querySelector('.problem-visual');if(old)old.style.display='none';
 const L=exactVizLabels[lang],sec=document.createElement('section');sec.className='problem-visual exact-visual';
 sec.innerHTML=`<h3>🎯 ${L.heading}</h3><svg viewBox="0 0 520 270" role="img" aria-label="${L.heading}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="${L.heading}"><output>0%</output><button type="button">▶</button></div><p>${L.note}</p>`;
 guide.after(sec);const svg=sec.querySelector('svg'),range=sec.querySelector('input'),output=sec.querySelector('output'),btn=sec.querySelector('button');let timer=null;
 const txt=(x,y,s,col='currentColor')=>`<text x="${x}" y="${y}" font-size="15" fill="${col}">${s}</text>`;
 const line=(x,y,X,Y,col='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${col}" stroke-width="${w}"/>`;
 const dot=(x,y,col='#efb956')=>`<circle cx="${x}" cy="${y}" r="7" fill="${col}"/>`;
 function render(){const q=+range.value/100;let out='';
 if(selected===0){
  const pairs=[['AB',2,3,3,4],['BA',3,4,2,3],['BC',3,4,4,2],['CB',4,2,3,4],['AC',2,3,4,2],['CA',4,2,2,3],['AD',2,3,2,2],['DA',2,2,2,3]];
  const [name,r1,c1,r2,c2]=pairs[Math.min(7,Math.floor(q*8))],ok=c1===r2;
  out+=txt(26,35,`A: 2×3   B: 3×4   C: 4×2   D: 2×2`);
  out+=txt(26,73,`${name}: (${r1}×${c1}) · (${r2}×${c2})`);
  for(let k=0;k<4;k++){const xx=45+k*112;out+=`<rect x="${xx}" y="100" width="95" height="78" rx="10" stroke="${k===1||k===2?'#efb956':'#7393aa'}" fill="${k===1||k===2?'#efb956':'#7393aa'}" fill-opacity=".16"/>`+txt(xx+35,146,[r1,c1,r2,c2][k]);}
  out+=txt(32,215,ok?`✓ ${c1} = ${r2} → ${r1}×${c2}`:`✗ ${c1} ≠ ${r2} → undefined`,ok?'#6dd2b5':'#e79a9a');
 }else if(selected===4){
  const scale=1-q*0.8, x=3*scale,y=4*scale,px=95+x*55,py=232-y*43;
  out+=line(40,232,490,232,'#66788c',1)+line(95,15,95,255,'#66788c',1);
  out+=line(95,232,95+3*55,232-4*43,'#6b93da',3)+dot(95+3*55,232-4*43,'#6b93da');
  out+=line(95,232,px,py,'#efb956',5)+dot(px,py);
  out+=txt(280,45,'v = (3, 4), |v| = 5');out+=txt(280,72,`k = ${scale.toFixed(2)}`);
  out+=txt(280,100,`kv = (${x.toFixed(2)}, ${y.toFixed(2)})`);out+=txt(280,127,`|kv| = ${(5*scale).toFixed(2)}`);
  out+=txt(280,154,'e = (3/5, 4/5)');
 }else if(selected===5){
  const x=-1+4*q,y=-2+2*q,z=2*x+y+3; // plane: z = 2x+y+3
  out+=txt(25,30,'P=(1,−2,3), n=(2,1,−1)');out+=txt(25,57,'2x+y−z+3=0');
  out+=line(55,225,460,225,'#66788c',1)+line(230,20,230,245,'#66788c',1);
  const poly=[[130,185],[325,220],[435,90],[235,65]].map(a=>a.join(',')).join(' ');
  out+=`<polygon points="${poly}" fill="#6dd2b5" fill-opacity=".15" stroke="#6dd2b5" stroke-width="2"/>`;
  const px=230+x*35,py=155-y*24;out+=dot(px,py);out+=line(px,py,px+70,py-35,'#efb956',4);
  out+=txt(25,257,`x=${x.toFixed(2)}, y=${y.toFixed(2)}, z=${z.toFixed(2)}  →  2x+y−z+3=0`);
  out+=txt(350,40,'XY projection');
 }else if(selected===7){
  const n=1+Math.round(q*999),f=x=>5/(Math.sqrt(1+5/x)+1),v=f(n);
  out+=line(50,220,500,220,'#66788c',1)+line(50,20,50,235,'#66788c',1);
  const pts=[];for(let k=1;k<=1000;k+=5){const x=50+(k-1)*.44,y=220-(f(k)-1)*115;pts.push(`${pts.length?'L':'M'}${x.toFixed(1)} ${y.toFixed(1)}`)}
  out+=`<path d="${pts.join(' ')}" fill="none" stroke="#6dd2b5" stroke-width="3"/>`;
  out+=line(50,47.5,500,47.5,'#efb956',2)+txt(390,38,'limit = 2.5','#efb956');
  out+=dot(50+(n-1)*.44,220-(v-1)*115);out+=txt(70,250,`n=${n}, sqrt(n²+5n)−n = ${v.toFixed(5)}`);
 }
 svg.innerHTML=out;output.textContent=Math.round(q*100)+'%';}
 range.oninput=render;btn.onclick=()=>{if(timer){clearInterval(timer);timer=null;btn.textContent='▶'}else{btn.textContent='■';timer=setInterval(()=>{if(!sec.isConnected){clearInterval(timer);timer=null;return}range.value=(+range.value+1)%101;render()},55)}};
 render();
}
const prevExactThirdVisual=addProblemVisual;
addProblemVisual=function(){prevExactThirdVisual();addExactThirdVisual()};


// Exercise 4: source-specific mathematical animations for all four topic families.
function addExactFourthVisual(){
 if(problem!==4||![0,4,5,7].includes(selected))return;
 const guide=document.querySelector('.guide');if(!guide)return;
 const old=document.querySelector('.problem-visual');if(old)old.style.display='none';
 const L=exactVizLabels[lang],sec=document.createElement('section');sec.className='problem-visual exact-visual';
 sec.innerHTML=`<h3>🎯 ${L.heading}</h3><svg viewBox="0 0 520 270" role="img" aria-label="${L.heading}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="${L.heading}"><output>0%</output><button type="button">▶</button></div><p class="guide-note">${L.note}</p>`;
 guide.after(sec);
 const svg=sec.querySelector('svg'),range=sec.querySelector('input'),output=sec.querySelector('output'),btn=sec.querySelector('button');
 let timer=null;
 const txt=(x,y,s,col='currentColor',sz=16)=>`<text x="${x}" y="${y}" font-size="${sz}" fill="${col}">${s}</text>`;
 const line=(x,y,X,Y,col='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${col}" stroke-width="${w}"/>`;
 const dot=(x,y,col='#efb956')=>`<circle cx="${x}" cy="${y}" r="6" fill="${col}"/>`;
 function render(){
  const q=+range.value/100;let out='';
  if(selected===0){
   const A=[[1,2],[0,1]],B=[[2,0],[3,1]],AB=[[8,2],[3,1]],BA=[[2,4],[3,7]];
   const reverse=q>=.5,first=reverse?B:A,second=reverse?A:B,ans=reverse?BA:AB,k=Math.min(3,Math.floor((q%0.5)*8)),rr=Math.floor(k/2),cc=k%2;
   out+=txt(20,28,reverse?'B × A = BA':'A × B = AB','#efb956',20);
   const matrix=(M,x,y,highlight=false)=>{let s='';for(let i=0;i<2;i++)for(let j=0;j<2;j++){const active=highlight&&(i===rr&&j===cc);s+=`<rect x="${x+j*47}" y="${y+i*47}" width="43" height="43" rx="5" fill="${active?'#efb956':'#6d8ca2'}" fill-opacity="${active?.35:.12}" stroke="#7c91a5"/>`+txt(x+15+j*47,y+28+i*47,M[i][j]);}return s};
   out+=matrix(first,20,72,true)+txt(130,130,'×')+matrix(second,160,72,true)+txt(269,130,'=')+matrix(ans,300,72,true);
   const a=first[rr][0]*second[0][cc],b=first[rr][1]*second[1][cc];
   out+=txt(20,222,`${first[rr][0]}×${second[0][cc]} + ${first[rr][1]}×${second[1][cc]} = ${a+b}`,'#efb956');
   out+=txt(20,251,'AB ≠ BA: order changes the result');
  }else if(selected===4){
   const u=[1,2,-1],v=[2,-1,3],a=-3+6*q,w=[2,-1,a],dotUV=-3,dotUW=-a;
   out+=txt(22,32,'u=(1,2,−1), v=(2,−1,3)');
   out+=txt(22,63,`u·v = 2 − 2 − 3 = ${dotUV}`,'#efb956');
   out+=txt(22,106,`w=(2,−1,${a.toFixed(2)})`);
   out+=txt(22,139,`u·w = 2 − 2 − a = ${dotUW.toFixed(2)}`,'#6dd2b5');
   const x=260,y=208;out+=line(x-180,y,x+180,y,'#73859a',1)+line(x,y+32,x,y-95,'#73859a',1);
   out+=line(x,y,x+70,y-65,'#6b93da',5)+line(x,y,x+70,y-65+dotUW*10,'#efb956',4);
   out+=txt(22,254,Math.abs(a)<.031?'✓ a=0: u·w=0, perpendicular':'Move to a=0 for perpendicularity',Math.abs(a)<.031?'#6dd2b5':'#efb956');
  }else if(selected===5){
   const A=[1,0,0],B=[0,1,0],C=[0,0,1],u=q,v=(1-q)*q,w=1-u-v;
   const P=[w,u,v],X=245+(P[0]-P[1])*145,Y=215-(P[2]*140+(P[0]+P[1])*32);
   const proj=([x,y,z])=>[245+(x-y)*145,215-(z*140+(x+y)*32)];
   const aa=proj(A),bb=proj(B),cc=proj(C);
   out+=`<polygon points="${[aa,bb,cc].map(p=>p.join(',')).join(' ')}" fill="#6dd2b5" fill-opacity=".2" stroke="#6dd2b5" stroke-width="3"/>`;
   for(const [pt,label] of [[aa,'A(1,0,0)'],[bb,'B(0,1,0)'],[cc,'C(0,0,1)']])out+=dot(pt[0],pt[1])+txt(pt[0]+8,pt[1]-8,label);
   out+=dot(X,Y,'#efb956')+txt(20,30,'Plane: x + y + z = 1');
   out+=txt(20,56,`P=(${P[0].toFixed(2)}, ${P[1].toFixed(2)}, ${P[2].toFixed(2)})`);
   out+=txt(20,82,`x+y+z=${(P[0]+P[1]+P[2]).toFixed(2)}`,'#efb956');
   out+=txt(20,254,'AB×AC=(1,1,1)  →  normal vector');
  }else if(selected===7){
   const n=1+Math.round(q*79),seqs=[Math.pow(2/3,n),Math.pow(3/2,Math.min(n,20)),n%2===0?1:-1,(n%2===0?1:-1)/n];
   out+=line(50,205,500,205,'#73859a',1)+line(50,20,50,250,'#73859a',1);
   const colors=['#6dd2b5','#efb956','#6b93da','#eaa1bd'];
   const fn=[k=>Math.pow(2/3,k),k=>Math.min(3,Math.pow(3/2,k)),k=>k%2===0?1:-1,k=>(k%2===0?1:-1)/k];
   for(let j=0;j<4;j++){let pts='';for(let k=1;k<=n;k++){const x=50+k*5.2,y=130-fn[j](k)*34;pts+=`<circle cx="${x}" cy="${y}" r="2.6" fill="${colors[j]}"/>`;}out+=pts;}
   out+=txt(25,24,`n=${n}  (2/3)^n → 0`,colors[0],14);
   out+=txt(270,24,`(3/2)^n → +∞`,colors[1],14);
   out+=txt(25,48,'(−1)^n oscillates',colors[2],14);
   out+=txt(270,48,'(−1)^n/n → 0',colors[3],14);
   out+=txt(25,254,'Plot capped at y=3 for readability',undefined,13);
  }
  svg.innerHTML=out;output.textContent=Math.round(q*100)+'%';
 }
 range.oninput=render;
 btn.onclick=()=>{if(timer){clearInterval(timer);timer=null;btn.textContent='▶'}else{btn.textContent='■';timer=setInterval(()=>{if(!sec.isConnected){clearInterval(timer);timer=null;return}range.value=(+range.value+1)%101;render()},75)}};
 render();
}
const prevExactFourthVisual=addProblemVisual;
addProblemVisual=function(){prevExactFourthVisual();addExactFourthVisual()};


// Exercise 5: four animations driven by the exact numbers of the official exercises.
function addExactFifthVisual(){
 if(problem!==5||![0,4,5,7].includes(selected))return;
 const guide=document.querySelector('.guide');if(!guide)return;
 const old=document.querySelector('.problem-visual');if(old)old.style.display='none';
 const L=exactVizLabels[lang],sec=document.createElement('section');sec.className='problem-visual exact-visual';
 sec.innerHTML=`<h3>🎯 ${L.heading}</h3><svg viewBox="0 0 520 280" role="img" aria-label="${L.heading}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="${L.heading}"><output>0%</output><button type="button">▶</button></div><p class="guide-note">${L.note}</p>`;
 guide.after(sec);
 const svg=sec.querySelector('svg'),range=sec.querySelector('input'),output=sec.querySelector('output'),btn=sec.querySelector('button');
 let timer=null;
 const txt=(x,y,s,col='currentColor',sz=16)=>`<text x="${x}" y="${y}" font-size="${sz}" fill="${col}">${s}</text>`;
 const line=(x,y,X,Y,col='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${col}" stroke-width="${w}"/>`;
 const dot=(x,y,col='#efb956')=>`<circle cx="${x}" cy="${y}" r="5.5" fill="${col}"/>`;
 function render(){
  const q=+range.value/100;let out='';
  if(selected===0){
   // A=[[2,-1],[1,3]], x=[4,2], Ax=[6,10]. Each animated column has its true coefficient.
   const a=4*q,b=2*q,ax=2*a-b,ay=a+3*b,scale=8,ox=240,oy=230;
   out+=line(30,230,490,230,'#73859a',1)+line(240,265,240,20,'#73859a',1);
   out+=line(ox,oy,ox+2*a*scale,oy-a*scale,'#6b93da',4);
   out+=line(ox+2*a*scale,oy-a*scale,ox+ax*scale,oy-ay*scale,'#efb956',4);
   out+=line(ox,oy,ox+ax*scale,oy-ay*scale,'#6dd2b5',4);
   out+=dot(ox+ax*scale,oy-ay*scale);
   out+=txt(15,26,'A=[[2,−1],[1,3]], x=(4,2)',undefined,17);
   out+=txt(15,56,`4q·(2,1) = (${(2*a).toFixed(1)}, ${a.toFixed(1)})`,'#6b93da');
   out+=txt(15,83,`2q·(−1,3) = (${(-b).toFixed(1)}, ${(3*b).toFixed(1)})`,'#efb956');
   out+=txt(15,110,`A(qx) = (${ax.toFixed(1)}, ${ay.toFixed(1)})`,'#6dd2b5');
   out+=txt(15,267,'At 100%: Ax=(6,10)',undefined,14);
  }else if(selected===4){
   const theta=Math.PI/3*q,ux=1,uy=1,vx=Math.cos(theta)*Math.SQRT2,vy=Math.sin(theta)*Math.SQRT2;
   const ox=245,oy=230,scale=78;
   out+=line(40,230,480,230,'#73859a',1)+line(245,255,245,25,'#73859a',1);
   out+=line(ox,oy,ox+ux*scale,oy-uy*scale,'#6b93da',5);
   out+=line(ox,oy,ox+vx*scale,oy-vy*scale,'#efb956',5);
   out+=dot(ox+ux*scale,oy-uy*scale,'#6b93da')+dot(ox+vx*scale,oy-vy*scale);
   out+=txt(20,25,'u=(1,1,0), v=(1,0,1)',undefined,17);
   out+=txt(20,55,'u·v = 1, |u|=|v|=√2','#6dd2b5');
   out+=txt(20,83,'cos θ = 1/2 → θ = 60°','#efb956');
   out+=txt(20,270,'Projection illustration; z coordinates shown above',undefined,13);
   out+=txt(340,165,`sweep ${(theta*180/Math.PI).toFixed(1)}°`,'#efb956');
  }else if(selected===5){
   // Real 3D lines with simple axonometric projection; exact coordinate check displayed.
   const t=-1+3*q,s=-1+5*q, p=[1+t,1+2*t,t],v=[2,s,1-s];
   const proj=([x,y,z])=>[235+55*(x-y),185-30*(x+y)-50*z];
   const a=proj([0, -1,-1]),b=proj([4,7,3]),c=proj([2,-1,2]),e=proj([2,4,-3]);
   const P=proj(p),V=proj(v);
   out+=line(...a,...b,'#6b93da',4)+line(...c,...e,'#efb956',4);
   out+=dot(...P,'#6b93da')+dot(...V,'#efb956');
   out+=txt(12,25,'L1=(1+t,1+2t,t)','#6b93da',15);
   out+=txt(260,25,'L2=(2,s,1−s)','#efb956',15);
   out+=txt(12,52,`t=${t.toFixed(2)}, s=${s.toFixed(2)}`);
   out+=txt(12,77,`P1=(${p.map(x=>x.toFixed(1)).join(', ')})`,'#6b93da',14);
   out+=txt(260,77,`P2=(${v.map(x=>x.toFixed(1)).join(', ')})`,'#efb956',14);
   out+=txt(12,254,'Intersection test: t=1, s=3 → z: 1 ≠ −2',undefined,14);
   out+=txt(12,274,'Lines are skew (3D; drawing is a projection)',undefined,13);
  }else if(selected===7){
   const n=1+Math.round(q*999),v=Math.pow(1+1/n,n);
   const f=k=>Math.pow(1+1/k,k),ox=42,oy=235;
   out+=line(ox,oy,500,oy,'#73859a',1)+line(ox,20,ox,oy,'#73859a',1);
   const e=Math.E;out+=line(ox,oy-65*e,500,oy-65*e,'#efb956',2);
   let path='';for(let k=1;k<=1000;k+=5){const x=ox+(k-1)*.45,y=oy-65*f(k);path+=(path?' L':'M')+x.toFixed(2)+' '+y.toFixed(2)}
   out+=`<path d="${path}" fill="none" stroke="#6dd2b5" stroke-width="3"/>`;
   out+=dot(ox+(n-1)*.45,oy-65*v);
   out+=txt(15,25,`n=${n}, (1+1/n)^n=${v.toFixed(6)}`,undefined,17);
   out+=txt(320,48,'e ≈ 2.718282','#efb956',15);
   out+=txt(15,271,'Sample values illustrate the limit; they do not prove it.',undefined,13);
  }
  svg.innerHTML=out;output.textContent=Math.round(q*100)+'%';
 }
 range.oninput=render;
 btn.onclick=()=>{if(timer){clearInterval(timer);timer=null;btn.textContent='▶'}else{btn.textContent='■';timer=setInterval(()=>{if(!sec.isConnected){clearInterval(timer);timer=null;return}range.value=(+range.value+1)%101;render()},75)}};
 render();
}
const prevExactFifthVisual=addProblemVisual;
addProblemVisual=function(){prevExactFifthVisual();addExactFifthVisual()};
// Exercise 6: original-number-driven diagrams for four topics.
function addSixthVisual(){
 if(problem!==6||![0,4,5,7].includes(selected))return;
 const guide=document.querySelector('.guide');if(!guide)return;
 const old=document.querySelector('.problem-visual');if(old)old.style.display='none';
 const L=exactVizLabels[lang],s=document.createElement('section');s.className='problem-visual exact-visual';
 s.innerHTML=`<h3>🎯 ${L.heading}</h3><svg viewBox="0 0 520 270" role="img"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0"><output>0%</output><button type="button">▶</button></div><p class="guide-note">${L.note}</p>`;
 guide.after(s);const svg=s.querySelector('svg'),slider=s.querySelector('input'),out=s.querySelector('output'),btn=s.querySelector('button');let timer=null;
 const T=(x,y,v,c='currentColor',z=17)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}">${v}</text>`;
 const Ln=(x,y,a,b,c='#6dd2b5',w=4)=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${c}" stroke-width="${w}"/>`;
 function draw(){const q=+slider.value/100;let h='';
 if(selected===0){const mats=[[[1,2,3],[4,5,6]],[[1,0],[2,1],[-1,3]],[[2,11],[8,23]],[[2,8],[11,23]]],titles=['A (2×3)','B (3×2)','AB (2×2)','(AB)ᵀ = BᵀAᵀ'];const k=Math.min(3,Math.floor(q*4)),m=mats[k];h+=T(25,30,titles[k],'#efb956',20);for(let i=0;i<m.length;i++)for(let j=0;j<m[i].length;j++){let x=110+j*80,y=55+i*60;h+=`<rect x="${x}" y="${y}" width="70" height="52" rx="7" stroke="#8ba1b5" fill="#6b93da" fill-opacity=".16"/>`+T(x+24,y+32,m[i][j]);}h+=T(15,257,'AB = [[2,11],[8,23]]; transpose swaps rows and columns',undefined,14);
 }else if(selected===4){const ox=140,oy=220,k=34*q;h+=Ln(20,220,500,220,'#8293a3',1)+Ln(140,260,140,15,'#8293a3',1)+Ln(ox,oy,ox+4*k,oy-2*k,'#6b93da',5)+Ln(ox,oy,ox+3*k,oy-3*k,'#6dd2b5',5)+Ln(ox+3*k,oy-3*k,ox+4*k,oy-2*k,'#efb956',5);h+=T(15,26,'u=(4,2)','#6b93da')+T(15,52,'projᵥ u=(3,3)','#6dd2b5')+T(15,78,'r=(1,−1)','#efb956')+T(15,259,'r·v = 1−1 = 0 (perpendicular)',undefined,14);
 }else if(selected===5){let a=q*Math.PI/2;h+=T(15,26,'Π₁: x+y+z=1, Π₂: x−y=2')+T(15,55,'n₁=(1,1,1), n₂=(1,−1,0)')+Ln(260,200,390,200,'#6b93da',5)+Ln(260,200,260+130*Math.cos(a),200-130*Math.sin(a),'#efb956',5)+T(15,105,'n₁·n₂ = 1−1+0 = 0','#6dd2b5')+T(15,132,'Exact plane angle = 90°','#efb956')+T(15,258,`Animated angle sweep: ${(a*180/Math.PI).toFixed(1)}°`,undefined,14);
 }else{let x=2+q*998,f=t=>(3*t*t-t+1)/(5*t*t+4*t-2),v=f(x),path='';for(let k=2;k<=1000;k+=3){let X=55+(k-2)*.43,Y=220-170*f(k);path+=(path?' L':'M')+X.toFixed(2)+' '+Y.toFixed(2);}h+=Ln(55,220,495,220,'#8293a3',1)+Ln(55,20,55,245,'#8293a3',1)+Ln(55,118,495,118,'#efb956',2)+`<path d="${path}" fill="none" stroke="#6dd2b5" stroke-width="3"/>`+`<circle cx="${55+(x-2)*.43}" cy="${220-170*v}" r="6" fill="#efb956"/>`+T(15,27,`x=${x.toFixed(1)}, f(x)=${v.toFixed(6)}`)+T(300,57,'limit = 3/5','#efb956')+T(15,260,'f(x)=(3x²−x+1)/(5x²+4x−2)',undefined,14);}
 svg.innerHTML=h;out.textContent=Math.round(q*100)+'%';}
 slider.oninput=draw;btn.onclick=()=>{if(timer){clearInterval(timer);timer=null;btn.textContent='▶';}else{btn.textContent='■';timer=setInterval(()=>{if(!s.isConnected){clearInterval(timer);timer=null;return;}slider.value=(+slider.value+1)%101;draw();},75);}};draw();
}
const beforeSixthVisual=addProblemVisual;
addProblemVisual=function(){beforeSixthVisual();addSixthVisual();};

// Exact visualizations for exercise 7, using the numbers from the exercise statements.
function addSeventhVisual(){
 if(problem!==7||![0,4,5,7].includes(selected))return;
 const anchor=document.querySelector('.guide');if(!anchor)return;
 const prior=document.querySelector('.problem-visual');if(prior)prior.style.display='none';
 const s=document.createElement('section');s.className='problem-visual exact-visual';
 s.innerHTML='<h3>🎯 Interactive exercise 7</h3><svg viewBox="0 0 520 280" role="img" aria-label="Exercise 7 mathematical visualization"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="Animation progress"><output>0%</output><button type="button">▶</button></div><p class="guide-note">Values and equations are taken from exercise 7.</p>';
 anchor.after(s);
 const svg=s.querySelector('svg'),slider=s.querySelector('input'),o=s.querySelector('output'),button=s.querySelector('button');
 const T=(x,y,t,c='currentColor',z=17)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}">${t}</text>`;
 const L=(x,y,a,b,c='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${c}" stroke-width="${w}"/>`;
 let timer=null;
 function render(){
 const q=+slider.value/100;let h='';
 if(selected===0){
  const n=1+Math.floor(q*7),pow=2**n,off=n*2**(n-1),a=[[pow,off],[0,pow]];
  h+=T(22,32,'A = [[2,1],[0,2]]', '#efb956',21)+T(22,66,`n = ${n}, A^n = [[${pow},${off}],[0,${pow}]]`,'#6dd2b5',19);
  for(let i=0;i<2;i++)for(let j=0;j<2;j++){let x=150+j*110,y=90+i*72;h+=`<rect x="${x}" y="${y}" width="100" height="64" rx="8" fill="#6b93da" fill-opacity=".15" stroke="#8fa1b5"/>`+T(x+18,y+40,String(a[i][j]),'#efb956',23)}
  h+=T(20,266,'AI = IA = A;  A+0 = A',undefined,17);
 }else if(selected===4){
  const k=2*q,ox=125,oy=240,sc=24;
  h+=L(30,240,480,240,'#8293a3',1)+L(125,250,125,25,'#8293a3',1);
  h+=L(ox,oy,ox+sc,oy-2*sc,'#6b93da',5)+L(ox,oy,ox+sc*2*k,oy-sc*4*k,'#efb956',5);
  h+=T(22,30,'u=(1,2,3), v=(2,4,6)=2u',undefined,20);
  h+=T(22,62,`Animated scale: ${k.toFixed(2)}u`,'#efb956');
  h+=T(22,95,'2u − v + 0w = (0,0,0)','#6dd2b5');
  h+=T(22,269,'Linear dependence; 2D projection of x,y components',undefined,13);
 }else if(selected===5){
  const t=-3+6*q,x=1+t,y=1-t,ox=250,oy=145;
  h+=`<polygon points="65,80 460,80 410,235 20,235" fill="#6dd2b5" fill-opacity=".15" stroke="#6dd2b5" stroke-width="2"/>`;
  h+=L(70,165,450,165,'#6b93da',4);
  const px=260+t*55;
  h+=`<circle cx="${px}" cy="165" r="7" fill="#efb956"/>`;
  h+=T(20,30,'Plane Π: x+y+z=2',undefined,20);
  h+=T(20,56,`L(t)=(${x.toFixed(1)}, ${y.toFixed(1)}, 0)`,'#efb956',17);
  h+=T(20,260,`x+y+z=${(x+y).toFixed(1)}; n·d=(1,1,1)·(1,−1,0)=0`,'#6dd2b5',15);
 }else{
  const x=3+(q-.5)*2, y=x-1,ox=255,oy=170;
  h+=L(35,170,490,170,'#8293a3',1)+L(255,250,255,25,'#8293a3',1);
  h+=L(60,250,460,50,'#6dd2b5',4);
  const px=ox+(x-3)*100,py=oy-(y-2)*50;
  h+=`<circle cx="${px}" cy="${py}" r="6" fill="#efb956"/>`;
  h+=`<circle cx="${ox}" cy="${oy}" r="8" fill="none" stroke="#efb956" stroke-width="3"/>`;
  h+=T(20,30,'f(x)=(x²−4x+3)/(x−3)=x−1 for x≠3',undefined,16);
  h+=T(20,59,`x=${x.toFixed(3)}; nearby value ≈ ${y.toFixed(3)}`,'#6dd2b5',17);
  h+=T(20,271,'Open circle at x=3: function undefined, limit = 2','#efb956',14);
 }
 svg.innerHTML=h;o.textContent=slider.value+'%';
 }
 slider.oninput=render;
 button.onclick=()=>{if(timer){clearInterval(timer);timer=null;button.textContent='▶'}else{button.textContent='■';timer=setInterval(()=>{if(!s.isConnected){clearInterval(timer);timer=null;return}slider.value=(+slider.value+1)%101;render()},70)}};
 render();
}
const beforeSeventhVisual=addProblemVisual;
addProblemVisual=function(){beforeSeventhVisual();addSeventhVisual();};

// Exercise 8: mathematical animations using each exercise's original values.
function addEighthVisual(){
 if(problem!==8||![0,4,5,7].includes(selected))return;
 const anchor=document.querySelector('.guide');if(!anchor)return;
 const prior=document.querySelector('.problem-visual');if(prior)prior.style.display='none';
 const s=document.createElement('section');s.className='problem-visual exact-visual';
 const headings={en:'Exercise 8 — exact-number visualization',tr:'8. soru — gerçek sayılarla görsel',pl:'Zadanie 8 — wizualizacja danych'};
 s.innerHTML=`<h3>🎯 ${headings[lang]||headings.en}</h3><svg viewBox="0 0 520 280" role="img" aria-label="${headings[lang]||headings.en}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="Animation progress"><output>0%</output><button type="button">▶</button></div>`;
 anchor.after(s);
 const svg=s.querySelector('svg'),slider=s.querySelector('input'),out=s.querySelector('output'),button=s.querySelector('button');
 const T=(x,y,t,c='currentColor',z=16)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}">${t}</text>`;
 const L=(x,y,a,b,c='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${c}" stroke-width="${w}"/>`;
 const C=(x,y,c='#efb956',r=6)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
 let timer=null;
 function render(){
  const q=+slider.value/100;let h='';
  if(selected===0){
   const stages=[
    [[1,2,-1],[2,4,1],[-1,1,3]],
    [[1,2,-1],[0,0,3],[-1,1,3]],
    [[1,2,-1],[0,0,3],[0,3,2]],
    [[1,2,-1],[0,3,2],[0,0,3]]
   ],names=['Original matrix','R₂ ← R₂ − 2R₁','R₃ ← R₃ + R₁','R₂ ↔ R₃'];
   const k=Math.min(3,Math.floor(q*4)),M=stages[k];
   h+=T(20,28,names[k],'#efb956',20);
   for(let i=0;i<3;i++)for(let j=0;j<3;j++){
    const x=110+j*100,y=48+i*65;
    h+=`<rect x="${x}" y="${y}" width="90" height="57" rx="6" fill="${i===k-1?'#efb956':'#6dd2b5'}" fill-opacity=".14" stroke="#8196a6"/>`;
    h+=T(x+31,y+35,String(M[i][j]),'currentColor',22);
   }
   h+=T(20,267,'Reverse order: swap R₂,R₃; R₃−R₁; R₂+2R₁',undefined,14);
  }else if(selected===4){
   const a=7*q/3,b=4*q/3,ox=120,oy=240,sc=32;
   const u=[a,a],v=[2*b,-b],w=[a+2*b,a-b];
   h+=L(25,240,500,240,'#8196a6',1)+L(120,255,120,20,'#8196a6',1);
   h+=L(ox,oy,ox+u[0]*sc,oy-u[1]*sc,'#6b93da',5);
   h+=L(ox+u[0]*sc,oy-u[1]*sc,ox+w[0]*sc,oy-w[1]*sc,'#efb956',5);
   h+=L(ox,oy,ox+w[0]*sc,oy-w[1]*sc,'#6dd2b5',4);
   h+=C(ox+w[0]*sc,oy-w[1]*sc);
   h+=T(20,27,'u=(1,1), v=(2,−1), w=(5,1)',undefined,18);
   h+=T(20,54,`a=${a.toFixed(3)}, b=${b.toFixed(3)}`,'#efb956');
   h+=T(20,81,`au+bv=(${w[0].toFixed(3)}, ${w[1].toFixed(3)})`,'#6dd2b5');
   h+=T(20,268,'At 100%: (7/3)u + (4/3)v = (5,1)',undefined,14);
  }else if(selected===5){
   const t=-.5+1.5*q,x=1+t,y=2*t,z=2-t;
   const px=160+95*t,py=190-45*t;
   h+=`<polygon points="90,65 475,65 415,230 25,230" fill="#6dd2b5" fill-opacity=".13" stroke="#6dd2b5" stroke-width="2"/>`;
   h+=L(110,210,340,100,'#6b93da',5)+C(px,py);
   h+=T(18,27,'Line: (1+t, 2t, 2−t)',undefined,18);
   h+=T(18,54,'Plane: x+y+z=4','#6dd2b5',18);
   h+=T(18,82,`t=${t.toFixed(3)}, P=(${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)})`,'#efb956',16);
   h+=T(18,270,`x+y+z=${(x+y+z).toFixed(3)}; intersection t=0.5`,undefined,15);
  }else if(selected===7){
   const x=4+(q-.5)*2, f=x=>1/(Math.sqrt(x)+2),v=f(x);
   const ox=260,oy=152;
   h+=L(40,220,485,220,'#8196a6',1)+L(260,255,260,20,'#8196a6',1);
   h+=L(40,152,485,152,'#efb956',2);
   let path='';for(let i=0;i<=200;i++){const xx=3+i/100,px=60+i*2.1,py=152-(f(xx)-.25)*950;path+=(i?' L':'M')+px.toFixed(1)+' '+py.toFixed(1)}
   h+=`<path d="${path}" fill="none" stroke="#6dd2b5" stroke-width="4"/>`;
   const px=60+(x-3)*210,py=152-(v-.25)*950;
   h+=C(px,py)+`<circle cx="270" cy="152" r="7" fill="none" stroke="#efb956" stroke-width="3"/>`;
   h+=T(18,27,'(√x−2)/(x−4) = 1/(√x+2), x≠4',undefined,17);
   h+=T(18,55,`x=${x.toFixed(3)}, f(x)=${v.toFixed(6)}`,'#6dd2b5');
   h+=T(18,270,'At x=4 the function is undefined; limit = 1/4','#efb956',15);
  }
  svg.innerHTML=h;out.textContent=slider.value+'%';
 }
 slider.oninput=render;
 button.onclick=()=>{if(timer){clearInterval(timer);timer=null;button.textContent='▶'}else{button.textContent='■';timer=setInterval(()=>{if(!s.isConnected){clearInterval(timer);timer=null;return}slider.value=(+slider.value+1)%101;render()},75)}};
 render();
}
const previousEighthVisual=addProblemVisual;
addProblemVisual=function(){previousEighthVisual();addEighthVisual();};
// Exercise 9: four distinct visuals using actual source numbers.
function addNinthVisual(){
 if(problem!==9||![0,4,5,7].includes(selected))return;
 const anchor=document.querySelector('.guide');if(!anchor)return;
 const previous=document.querySelector('.problem-visual');if(previous)previous.style.display='none';
 const s=document.createElement('section');s.className='problem-visual exact-visual';
 const names={tr:'9. soru — gerçek verilerle animasyon',pl:'Zadanie 9 — animacja na danych z zadania',en:'Exercise 9 — animation with actual problem data'};
 s.innerHTML=`<h3>🎯 ${names[lang]||names.en}</h3><svg viewBox="0 0 520 280" role="img" aria-label="${names[lang]||names.en}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="Animation progress"><output>0%</output><button type="button">▶</button></div>`;
 anchor.after(s);
 const svg=s.querySelector('svg'),slider=s.querySelector('input'),out=s.querySelector('output'),button=s.querySelector('button');
 const T=(x,y,t,c='currentColor',z=16)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}">${t}</text>`;
 const L=(x,y,a,b,c='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${c}" stroke-width="${w}"/>`;
 const C=(x,y,c='#efb956',r=6)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
 let timer=null;
 function render(){
  const q=+slider.value/100;let h='';
  if(selected===0){
   const stage=Math.min(3,Math.floor(q*4)),pts=[[1,2],[2,2],[-2,2],[-4,1]],labels=['x = (1,2)','Sx = (2,2)','RSx = (−2,2)','SRx = (−4,1)'];
   const origin=[255,220],sc=43;
   h+=L(20,220,500,220,'#8396a7',1)+L(255,265,255,20,'#8396a7',1);
   const draw=(p,col)=>{const X=origin[0]+p[0]*sc,Y=origin[1]-p[1]*sc;h+=L(...origin,X,Y,col,4)+C(X,Y,col);};
   draw(pts[0],'#6b93da');
   if(stage>=1)draw(pts[1],'#6dd2b5');
   if(stage>=2)draw(pts[2],'#efb956');
   if(stage>=3)draw(pts[3],'#eaa1bd');
   h+=T(16,25,'S(a,b)=(2a,b)   R(a,b)=(−b,a)',undefined,17);
   h+=T(16,52,labels[stage],'#efb956',19);
   h+=T(16,274,'RSx=(−2,2), while SRx=(−4,1)',undefined,15);
  }else if(selected===4){
   const u=[1,2,0],v=[0,1,3],cross=[6,-3,1],k=q;
   const project=p=>[210+24*p[0]-13*p[1],225-15*p[0]-17*p[1]-27*p[2]];
   const o=project([0,0,0]);
   for(const [p,color] of [[u,'#6b93da'],[v,'#6dd2b5'],[cross.map(z=>z*k),'#efb956']]){
    const pt=project(p);h+=L(...o,...pt,color,5)+C(...pt,color);
   }
   h+=T(14,25,'u=(1,2,0), v=(0,1,3)',undefined,18);
   h+=T(14,54,'u×v=(6,−3,1)','#efb956',18);
   h+=T(14,81,'(u×v)·u=0; (u×v)·v=0','#6dd2b5',16);
   h+=T(14,273,'v×u=(−6,3,−1); 3D axonometric projection',undefined,14);
  }else if(selected===5){
   const phase=q<.5?0:1,local=phase?q*2-1:q*2;
   if(!phase){
    const P=[2,3],n=[3,4],d=8/25,foot=[P[0]-d*n[0],P[1]-d*n[1]],a=[180,220],sc=35;
    const proj=p=>[a[0]+sc*p[0],a[1]-sc*p[1]];
    const p=proj(P),f=proj(foot),current=[p[0]+(f[0]-p[0])*local,p[1]+(f[1]-p[1])*local];
    h+=L(80,170,460,170-380*3/4,'#6dd2b5',3);
    h+=L(...p,...f,'#efb956',3)+C(...p,'#6b93da')+C(...current);
    h+=T(15,28,'P=(2,3); line 3x+4y−10=0',undefined,18);
    h+=T(15,56,'normal=(3,4), |normal|=5','#6dd2b5');
    h+=T(15,83,'distance = |8|/5 = 1.6','#efb956');
   }else{
    const Q=[2,-1,3],n=[2,-2,1],d=5/9,foot=Q.map((z,i)=>z-d*n[i]);
    h+=`<polygon points="90,130 400,100 455,220 145,250" fill="#6dd2b5" fill-opacity=".16" stroke="#6dd2b5" stroke-width="2"/>`;
    const A=[240,55],B=[240+local*45,55+local*145];
    h+=L(...A,...B,'#efb956',4)+C(...A,'#6b93da')+C(...B);
    h+=T(15,28,'Q=(2,−1,3); plane 2x−2y+z−4=0',undefined,17);
    h+=T(15,56,'normal=(2,−2,1), |normal|=3','#6dd2b5');
    h+=T(15,83,'distance = |5|/3 = 1.6667','#efb956');
    h+=T(15,272,`Orthogonal foot = (${foot.map(v=>v.toFixed(2)).join(', ')})`,undefined,14);
   }
  }else if(selected===7){
   const delta=Math.pow(10,-1-3*q),left=2-delta,right=2+delta,fl=1/(left-2),fr=1/(right-2);
   h+=L(35,155,490,155,'#8194a6',1)+L(255,15,255,260,'#efb956',2);
   let leftPath='',rightPath='';
   for(let i=0;i<160;i++){
    const x=0.1+i/160*1.87,y=1/(x-2),px=55+(x-.1)*100,py=155-y*9;
    leftPath+=(i?' L':'M')+px.toFixed(1)+' '+Math.min(290,Math.max(-20,py)).toFixed(1);
    const xr=2.03+i/160*1.87,yr=1/(xr-2),pxr=255+(xr-2)*100,pyr=155-yr*9;
    rightPath+=(i?' L':'M')+pxr.toFixed(1)+' '+Math.min(290,Math.max(-20,pyr)).toFixed(1);
   }
   h+=`<path d="${leftPath}" fill="none" stroke="#6b93da" stroke-width="3"/>`;
   h+=`<path d="${rightPath}" fill="none" stroke="#6dd2b5" stroke-width="3"/>`;
   h+=T(15,26,'f(x)=1/(x−2); asymptote x=2',undefined,18);
   h+=T(15,54,`x(left)=${left.toFixed(4)} → ${fl.toFixed(1)}`,'#6b93da',16);
   h+=T(275,54,`x(right)=${right.toFixed(4)} → +${fr.toFixed(1)}`,'#6dd2b5',16);
   h+=T(15,274,'Left → −∞, right → +∞; no two-sided limit',undefined,14);
  }
  svg.innerHTML=h;out.textContent=slider.value+'%';
 }
 slider.oninput=render;
 button.onclick=()=>{if(timer){clearInterval(timer);timer=null;button.textContent='▶'}else{button.textContent='■';timer=setInterval(()=>{if(!s.isConnected){clearInterval(timer);timer=null;return}slider.value=(+slider.value+1)%101;render()},75)}};
 render();
}
const beforeNinthVisual=addProblemVisual;
addProblemVisual=function(){beforeNinthVisual();addNinthVisual();};

// Exercise 10: all four diagrams use the workbook's exact input values.
function addTenthVisual(){
 if(problem!==10||![0,4,5,7].includes(selected))return;
 const anchor=document.querySelector('.guide');if(!anchor)return;
 const prior=document.querySelector('.problem-visual');if(prior)prior.style.display='none';
 const sec=document.createElement('section');sec.className='problem-visual exact-visual';
 const names={en:'Exercise 10 — interactive calculation',tr:'10. soru — etkileşimli hesaplama',pl:'Zadanie 10 — obliczenia interaktywne'};
 sec.innerHTML=`<h3>🎯 ${names[lang]||names.en}</h3><svg viewBox="0 0 520 280" role="img" aria-label="${names[lang]||names.en}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="Progress"><output>0%</output><button type="button">▶</button></div>`;
 anchor.after(sec);
 const svg=sec.querySelector('svg'),range=sec.querySelector('input'),output=sec.querySelector('output'),btn=sec.querySelector('button');
 const T=(x,y,s,c='currentColor',sz=16)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${sz}">${s}</text>`;
 const L=(x,y,X,Y,c='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${c}" stroke-width="${w}"/>`;
 const D=(x,y,c='#efb956')=>`<circle cx="${x}" cy="${y}" r="6" fill="${c}"/>`;
 let timer=null;
 function render(){
 const q=+range.value/100;let h='';
 if(selected===0){
  const k=q<.5?0:1,b=k===0?[1,-1,3]:[2,0,1],ans=k===0?[-1,2]:[2,1];
  h+=T(15,28,'A = [[1,2,0],[0,1,1]]',undefined,18);
  h+=T(15,58,k===0?'b₁=(1,−1,3)':'b₂=(2,0,1)','#efb956',20);
  h+=T(15,90,`Row 1: 1×${b[0]} + 2×${b[1]} + 0×${b[2]} = ${ans[0]}`,'#6dd2b5');
  h+=T(15,122,`Row 2: 0×${b[0]} + 1×${b[1]} + 1×${b[2]} = ${ans[1]}`,'#6dd2b5');
  h+=T(15,162,`Ab${k+1} = (${ans.join(', ')})`,'#efb956',21);
  h+=T(15,206,'AB = [[−1,2],[2,1]]',undefined,20);
  h+=T(15,257,'Each output column is A times the matching B column.',undefined,14);
 }else if(selected===4){
  const A=[0,0],B=[2,1],C=[1,3],sc=47,ox=185,oy=210, t=q;
  const pt=([x,y])=>[ox+x*sc,oy-y*sc],a=pt(A),b=pt(B),c=pt(C),d=pt([3,4]);
  h+=`<polygon points="${[a,b,d,c].map(x=>x.join(',')).join(' ')}" fill="#6dd2b5" fill-opacity=".16" stroke="#6dd2b5" stroke-width="2"/>`;
  h+=`<polygon points="${[a,b,c].map(x=>x.join(',')).join(' ')}" fill="#efb956" fill-opacity="${.10+.3*t}" stroke="#efb956" stroke-width="3"/>`;
  h+=T(15,28,'AB=(2,1,0), AC=(1,3,2)',undefined,17);
  h+=T(15,58,'AB × AC = (2,−4,5)','#6dd2b5',18);
  h+=T(15,88,'Parallelogram area = 3√5 ≈ 6.708','#6dd2b5');
  h+=T(15,115,'Triangle area = 3√5/2 ≈ 3.354','#efb956');
  h+=T(15,265,'2D x-y projection; actual area uses all 3 coordinates',undefined,13);
  h+=D(...a)+D(...b)+D(...c);
 }else if(selected===5){
  const P=[2,1,3],H=[1,0,2],R=[0,-1,1],q2=2*q,pt=[P[0]+(R[0]-P[0])*q,P[1]+(R[1]-P[1])*q,P[2]+(R[2]-P[2])*q];
  const project=([x,y,z])=>[250+60*(x-y),220-30*(x+y)-36*z];
  const p=project(P),r=project(R),mid=project(H),cur=project(pt);
  h+=`<polygon points="55,115 405,55 475,205 120,255" fill="#6dd2b5" fill-opacity=".13" stroke="#6dd2b5" stroke-width="2"/>`;
  h+=L(...p,...r,'#efb956',4)+D(...p,'#6b93da')+D(...mid,'#6dd2b5')+D(...r,'#eaa1bd')+D(...cur);
  h+=T(12,25,'Plane x+y+z=3',undefined,18);
  h+=T(12,52,'P=(2,1,3) → H=(1,0,2) → R=(0,−1,1)','#efb956',15);
  h+=T(12,78,`Moving point: (${pt.map(v=>v.toFixed(2)).join(', ')})`,'#6dd2b5',15);
  h+=T(12,270,'Midpoint (P+R)/2 = H; normal n=(1,1,1)',undefined,14);
 }else{
  const a=2*q,ax=90,ay=200,scaleX=95,scaleY=36;
  h+=L(20,200,505,200,'#8597a8',1)+L(90,245,90,20,'#8597a8',1);
  const points=(fn,start,end,step)=>{let s='';for(let x=start;x<=end;x+=step){let px=ax+x*scaleX,py=ay-fn(x)*scaleY;s+=(s?' L':'M')+px.toFixed(2)+' '+py.toFixed(2)}return s};
  h+=`<path d="${points(x=>a*x+1,0,1.99,.03)}" fill="none" stroke="#efb956" stroke-width="3"/>`;
  h+=`<path d="${points(x=>x*x-1,2,4,.03)}" fill="none" stroke="#6dd2b5" stroke-width="3"/>`;
  h+=D(ax+2*scaleX,ay-3*scaleY,'#6dd2b5');
  h+=`<circle cx="${ax+2*scaleX}" cy="${ay-(2*a+1)*scaleY}" r="7" fill="none" stroke="#efb956" stroke-width="3"/>`;
  h+=T(12,26,`a=${a.toFixed(2)}  left limit = ${(2*a+1).toFixed(2)}`,'#efb956',18);
  h+=T(12,53,'Right limit = f(2) = 3','#6dd2b5',18);
  h+=T(12,269,'Continuous exactly when a=1',undefined,16);
 }
 svg.innerHTML=h;output.textContent=range.value+'%';
 }
 range.oninput=render;
 btn.onclick=()=>{if(timer){clearInterval(timer);timer=null;btn.textContent='▶'}else{btn.textContent='■';timer=setInterval(()=>{if(!sec.isConnected){clearInterval(timer);timer=null;return}range.value=(+range.value+1)%101;render()},80)}};
 render();
}
const previousTenthVisual=addProblemVisual;
addProblemVisual=function(){previousTenthVisual();addTenthVisual();};
// Exercise 11: each visualization uses the exact values of its exercise.
function addEleventhVisual(){
 if(problem!==11||![0,4,5,7].includes(selected))return;
 const anchor=document.querySelector('.guide');if(!anchor)return;
 const prior=document.querySelector('.problem-visual');if(prior)prior.style.display='none';
 const sec=document.createElement('section');sec.className='problem-visual exact-visual';
 const headings={en:'Exercise 11 — interactive verification',tr:'11. soru — etkileşimli doğrulama',pl:'Zadanie 11 — interaktywna weryfikacja'};
 sec.innerHTML=`<h3>🎯 ${headings[lang]||headings.en}</h3><svg viewBox="0 0 520 280" role="img" aria-label="${headings[lang]||headings.en}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="Animation progress"><output>0%</output><button type="button">▶</button></div>`;
 anchor.after(sec);
 const svg=sec.querySelector('svg'),range=sec.querySelector('input'),output=sec.querySelector('output'),btn=sec.querySelector('button');
 const T=(x,y,s,c='currentColor',sz=16)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${sz}">${s}</text>`;
 const L=(x,y,X,Y,c='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${c}" stroke-width="${w}"/>`;
 const D=(x,y,c='#efb956')=>`<circle cx="${x}" cy="${y}" r="6" fill="${c}"/>`;
 let timer=null;
 function render(){
  const q=+range.value/100;let h='';
  if(selected===0){
   // General B=[[a,b],[c,d]]; interpolate c->0 and d->a to show commutator vanishing.
   const a=2,b=3,c=2*(1-q),d=4+(a-4)*q;
   // AB-BA = [[c,d-a],[0,-c]]
   h+=T(15,28,'A = [[1,1],[0,1]]',undefined,19);
   h+=T(15,61,`B = [[2,3],[${c.toFixed(2)},${d.toFixed(2)}]]`,'#efb956',19);
   h+=T(15,101,'AB − BA =',undefined,19);
   const M=[[c,d-a],[0,-c]];
   for(let i=0;i<2;i++)for(let j=0;j<2;j++){
    const x=182+105*j,y=80+69*i;
    h+=`<rect x="${x}" y="${y}" width="95" height="61" rx="8" fill="#6dd2b5" fill-opacity=".13" stroke="#8798a9"/>`;
    h+=T(x+15,y+38,M[i][j].toFixed(2),'#6dd2b5',18);
   }
   h+=T(15,252,'At 100%: c=0, d=a=2, so AB=BA.','#efb956',16);
  }else if(selected===4){
   const ox=145,oy=231,s=34,k=q,up=[11/5,22/5],per=[4/5,-2/5],u=[3,4];
   h+=L(25,231,485,231,'#8294a5',1)+L(145,250,145,15,'#8294a5',1);
   h+=L(ox,oy,ox+up[0]*s*k,oy-up[1]*s*k,'#6b93da',5);
   h+=L(ox+up[0]*s*k,oy-up[1]*s*k,ox+u[0]*s*k,oy-u[1]*s*k,'#efb956',5);
   h+=L(ox,oy,ox+u[0]*s*k,oy-u[1]*s*k,'#6dd2b5',4);
   h+=D(ox+u[0]*s*k,oy-u[1]*s*k);
   h+=T(15,24,'u=(3,4), v=(1,2)',undefined,18);
   h+=T(15,52,'parallel=(11/5,22/5)','#6b93da',16);
   h+=T(15,80,'perpendicular=(4/5,−2/5)','#efb956',16);
   h+=T(15,267,'(4/5,−2/5) · (1,2) = 0',undefined,14);
  }else if(selected===5){
   // Axonometric projection of Q+t d and P; both lie on x+2y+3z=7.
   const project=([x,y,z])=>[270+55*(x-y),214-24*(x+y)-39*z];
   const t=-2+4*q,Q=[1+t,t,2-t],P=[0,2,1];
   const q0=project([1,0,2]),q1=project([-1,-2,4]),q2=project([3,2,0]),pp=project(P),moving=project(Q);
   h+=`<polygon points="95,115 425,52 480,196 130,262" fill="#6dd2b5" fill-opacity=".12" stroke="#6dd2b5" stroke-width="2"/>`;
   h+=L(...q1,...q2,'#6b93da',4)+D(...pp,'#efb956')+D(...moving,'#6dd2b5');
   h+=T(14,25,'Plane: x+2y+3z=7',undefined,19);
   h+=T(14,54,'P=(0,2,1)  →  0+4+3=7','#efb956',16);
   h+=T(14,82,`t=${t.toFixed(2)}; line point (${Q.map(x=>x.toFixed(1)).join(', ')})`,'#6dd2b5',15);
   h+=T(14,274,'For every t: (1+t)+2t+3(2−t)=7',undefined,14);
  }else{
   const n=1+Math.round(q*149),ratio=Math.pow(.4,n),v=5*Math.exp(Math.log1p(ratio)/n);
   h+=L(45,228,485,228,'#8195a7',1)+L(45,30,45,240,'#8195a7',1);
   h+=L(45,157,485,157,'#efb956',2);
   let path='';for(let k=1;k<=150;k++){
    const x=45+(k-1)*2.9,y=157-(5*Math.exp(Math.log1p(Math.pow(.4,k))/k)-5)*280;
    path+=(path?' L':'M')+x.toFixed(2)+' '+y.toFixed(2);
   }
   h+=`<path d="${path}" fill="none" stroke="#6dd2b5" stroke-width="3"/>`;
   const px=45+(n-1)*2.9,py=157-(v-5)*280;h+=D(px,py);
   h+=T(15,25,`n=${n}; nth root = ${v.toFixed(8)}`,undefined,18);
   h+=T(15,53,`(2/5)^n = ${ratio.toExponential(2)}`,'#6dd2b5',16);
   h+=T(335,143,'limit = 5','#efb956',16);
   h+=T(15,267,'5 ≤ nth root ≤ 5 · 2^(1/n)',undefined,15);
  }
  svg.innerHTML=h;output.textContent=range.value+'%';
 }
 range.oninput=render;
 btn.onclick=()=>{if(timer){clearInterval(timer);timer=null;btn.textContent='▶'}else{btn.textContent='■';timer=setInterval(()=>{if(!sec.isConnected){clearInterval(timer);timer=null;return}range.value=(+range.value+1)%101;render()},80)}};
 render();
}
const previousEleventhVisual=addProblemVisual;
addProblemVisual=function(){previousEleventhVisual();addEleventhVisual();};

// Exercise 12: original numerical data, interactive SVGs.
function addTwelfthVisual(){
 if(problem!==12||![0,4,5,7].includes(selected))return;
 const anchor=document.querySelector('.guide');if(!anchor)return;
 const old=document.querySelector('.problem-visual');if(old)old.style.display='none';
 const sec=document.createElement('section');sec.className='problem-visual exact-visual';
 const title={en:'Exercise 12 — interactive verification',tr:'12. soru — etkileşimli doğrulama',pl:'Zadanie 12 — weryfikacja interaktywna'};
 sec.innerHTML=`<h3>🎯 ${title[lang]||title.en}</h3><svg viewBox="0 0 520 280" role="img" aria-label="${title[lang]||title.en}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="Animation progress"><output>0%</output><button type="button">▶</button></div>`;
 anchor.after(sec);
 const svg=sec.querySelector('svg'),slider=sec.querySelector('input'),out=sec.querySelector('output'),button=sec.querySelector('button');
 const T=(x,y,s,c='currentColor',z=16)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}">${s}</text>`;
 const L=(x,y,X,Y,c='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${c}" stroke-width="${w}"/>`;
 const D=(x,y,c='#efb956')=>`<circle cx="${x}" cy="${y}" r="6" fill="${c}"/>`;
 let timer=null;
 function render(){
  const q=+slider.value/100;let h='';
  if(selected===0){
   const n=1+Math.floor(q*9),vals=[[1,n],[0,1]];
   h+=T(18,30,'A = [[1,1],[0,1]]','#6dd2b5',19);
   h+=T(18,60,`n=${n} → A^n = [[1,${n}],[0,1]]`,'#efb956',19);
   for(let i=0;i<2;i++)for(let j=0;j<2;j++){
    const x=135+j*115,y=82+i*72;
    h+=`<rect x="${x}" y="${y}" width="105" height="62" rx="8" fill="#6b93da" fill-opacity=".15" stroke="#8298a9"/>`+T(x+40,y+40,String(vals[i][j]),'currentColor',25);
   }
   h+=T(18,254,'Induction: [[1,n],[0,1]] · A = [[1,n+1],[0,1]]',undefined,15);
  }else if(selected===4){
   // Actual 3D vectors: AB=(1,1,-2), AC=(-1,3,-1), normal=(5,3,4).
   const proj=([x,y,z])=>[250+32*(x-y),195-18*(x+y)-20*z];
   const A=[1,0,2],u=[1,1,-2],v=[-1,3,-1],n=[5,3,4];
   const add=(a,b,k=1)=>a.map((x,i)=>x+k*b[i]);
   const a=proj(A),b=proj(add(A,u)),c=proj(add(A,v)),d=proj(add(add(A,u),v));
   const tip=proj(add(A,n,.45*q));
   h+=`<polygon points="${[a,b,d,c].map(p=>p.join(',')).join(' ')}" fill="#6dd2b5" fill-opacity=".15" stroke="#6dd2b5" stroke-width="2"/>`;
   h+=L(...a,...b,'#6b93da',4)+L(...a,...c,'#efb956',4)+L(...a,...tip,'#dc82b3',5)+D(...a);
   h+=T(12,26,'A=(1,0,2), B=(2,1,0), C=(0,3,1)',undefined,17);
   h+=T(12,53,'AB=(1,1,−2), AC=(−1,3,−1)',undefined,16);
   h+=T(12,79,'AB × AC = (5,3,4)','#dc82b3',17);
   h+=T(12,255,'n·AB=5+3−8=0; n·AC=−5+9−4=0',undefined,14);
   h+=T(12,275,'3D vectors shown in an axonometric projection',undefined,12);
  }else if(selected===5){
   // Both plane equations are satisfied at every point on (2-t,1,t).
   const t=-2+4*q,x=2-t,z=t;
   const proj=([a,b,c])=>[250+42*(a-b),170-23*(a+b)-35*c];
   const p0=proj([4,1,-2]),p1=proj([0,1,2]),pt=proj([x,1,z]);
   h+=`<polygon points="80,95 425,45 470,220 115,255" fill="#6dd2b5" fill-opacity=".12" stroke="#6dd2b5" stroke-width="2"/>`;
   h+=`<polygon points="100,65 455,105 410,250 45,205" fill="#efb956" fill-opacity=".10" stroke="#efb956" stroke-width="2"/>`;
   h+=L(...p0,...p1,'#6b93da',5)+D(...pt);
   h+=T(12,25,'Π1: x+y+z=3; Π2: x−y+z=1',undefined,17);
   h+=T(12,52,`t=${t.toFixed(2)}; P=(${x.toFixed(2)},1,${z.toFixed(2)})`,'#efb956',16);
   h+=T(12,78,`Π1: ${(x+1+z).toFixed(2)}; Π2: ${(x-1+z).toFixed(2)}`,'#6dd2b5',16);
   h+=T(12,271,'n1 × n2=(2,0,−2) ∥ d=(−1,0,1)',undefined,14);
  }else{
   // (1+3x)^(1/x), x approaches zero from both sides.
   const x=q===.5?0:(q-.5)*.6;
   const f=t=>Math.exp(Math.log1p(3*t)/t),val=x===0?Math.exp(3):f(x);
   const ox=255,oy=208;
   h+=L(38,208,490,208,'#8295a8',1)+L(255,245,255,25,'#8295a8',1);
   let path='';for(let i=0;i<=200;i++){
    const t=-.30+i*.003;if(Math.abs(t)<1e-10)continue;
    const px=255+t*620,py=oy-(f(t)-10)*5;
    path+=(path?' L':'M')+px.toFixed(1)+' '+py.toFixed(1);
   }
   h+=`<path d="${path}" fill="none" stroke="#6dd2b5" stroke-width="3"/>`;
   h+=D(255+x*620,oy-(val-10)*5);
   h+=`<circle cx="255" cy="${oy-(Math.exp(3)-10)*5}" r="7" fill="none" stroke="#efb956" stroke-width="3"/>`;
   h+=T(14,26,'f(x)=(1+3x)^(1/x), x≠0',undefined,18);
   h+=T(14,54,`x=${x.toFixed(4)}; f(x)≈${val.toFixed(6)}`,'#6dd2b5',17);
   h+=T(14,269,'lim f(x) = e³ ≈ 20.085537','#efb956',17);
  }
  svg.innerHTML=h;out.textContent=slider.value+'%';
 }
 slider.oninput=render;
 button.onclick=()=>{if(timer){clearInterval(timer);timer=null;button.textContent='▶'}else{button.textContent='■';timer=setInterval(()=>{if(!sec.isConnected){clearInterval(timer);timer=null;return}slider.value=(+slider.value+1)%101;render()},80)}};
 render();
}
const previousTwelfthVisual=addProblemVisual;
addProblemVisual=function(){previousTwelfthVisual();addTwelfthVisual();};

// Exercise 13: diagrams derived from each exercise's actual numbers.
function addThirteenthVisual(){
 if(problem!==13||![0,4,5,7].includes(selected))return;
 const guide=document.querySelector('.guide');if(!guide)return;
 const old=document.querySelector('.problem-visual');if(old)old.style.display='none';
 const s=document.createElement('section');s.className='problem-visual exact-visual';
 const title={tr:'13. soru — etkileşimli görsel',pl:'Zadanie 13 — wizualizacja',en:'Exercise 13 — interactive visualization'};
 s.innerHTML=`<h3>🎯 ${title[lang]||title.en}</h3><svg viewBox="0 0 520 280" role="img" aria-label="${title[lang]||title.en}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="Progress"><output>0%</output><button type="button">▶</button></div>`;
 guide.after(s);
 const svg=s.querySelector('svg'),r=s.querySelector('input'),o=s.querySelector('output'),btn=s.querySelector('button');
 const txt=(x,y,v,c='currentColor',sz=17)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${sz}">${v}</text>`;
 const ln=(x,y,X,Y,c='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${c}" stroke-width="${w}"/>`;
 const dot=(x,y,c='#efb956')=>`<circle cx="${x}" cy="${y}" r="6" fill="${c}"/>`;
 let timer=null;
 function render(){const q=+r.value/100;let h='';
 if(selected===0){
  const mats=[[[1,1],[1,0]],[[2,1],[1,1]],[[3,2],[2,1]],[[5,3],[3,2]],[[8,5],[5,3]]];
  const n=Math.min(5,1+Math.floor(q*5)),m=mats[n-1];
  h+=txt(20,31,'F = [[1,1],[1,0]]; Fibonacci matrix','#6dd2b5',19);
  h+=txt(20,63,`F^${n} = [[${m[0]}],[${m[1]}]]`,'#efb956',23);
  for(let i=0;i<2;i++)for(let j=0;j<2;j++){const x=120+j*120,y=90+i*69;h+=`<rect x="${x}" y="${y}" width="108" height="60" rx="8" stroke="#8294a6" fill="#6dd2b5" fill-opacity=".13"/>`+txt(x+35,y+38,m[i][j],'#efb956',24)}
  h+=txt(20,264,'F·(a,b) = (a+b,a) — one recurrence step',undefined,15);
 }else if(selected===4){
  const p=[[0,0],[1,2],[0,1],[2,5]],names=['A','B','C','D'],ox=135,oy=240,sc=35;
  h+=txt(16,27,'A=(0,0,0), B=(1,2,0), C=(0,1,1), D=(2,5,1)',undefined,15);
  h+=txt(16,54,'AB × AC = n=(2,−1,1); AD·n=0','#6dd2b5',18);
  h+=ln(ox,oy,ox+2*sc,oy-5*sc,'#efb956',3);
  for(let i=0;i<4;i++){const [x,y]=p[i],X=ox+x*sc,Y=oy-y*sc;h+=dot(X,Y,i===3?'#efb956':'#6dd2b5')+txt(X+9,Y-8,names[i],undefined,15)}
  h+=`<polygon points="${ox},${oy} ${ox+sc},${oy-2*sc} ${ox+2*sc},${oy-5*sc} ${ox+sc},${oy-3*sc}" fill="#6dd2b5" fill-opacity="${.1+.3*q}"/>`;
  h+=txt(16,271,'2x − y + z = 0; all four points lie on the plane',undefined,15);
 }else if(selected===5){
  const P=[3,0,0],Q=[28/9,2/9,2/9],pt=P.map((v,i)=>v+(Q[i]-v)*q);
  const project=([x,y,z])=>[190+48*(x-y),225-30*(x+y)-28*z];
  const a=project(P),b=project(Q),c=project(pt);
  h+=`<polygon points="65,90 430,60 475,195 100,240" fill="#6dd2b5" fill-opacity=".15" stroke="#6dd2b5" stroke-width="2"/>`;
  h+=ln(...a,...b,'#efb956',5)+dot(...a,'#6b93da')+dot(...b,'#6dd2b5')+dot(...c);
  h+=txt(15,26,'Plane: x+2y+2z=4',undefined,20);
  h+=txt(15,54,'P=(3,0,0), Q=(28/9,2/9,2/9)','#6dd2b5',17);
  h+=txt(15,82,`P + ${q.toFixed(2)}(Q−P)`,'#efb956',18);
  h+=txt(15,268,'Q−P=(1,2,2)/9; distance = 1/3',undefined,15);
 }else{
  h+=ln(45,205,490,205,'#8495a5',1)+ln(260,245,260,20,'#8495a5',1);
  const x=.5-q,den=x===0?1e-9:x;
  for(const [k,col] of [[5,'#efb956'],[2,'#6dd2b5']]){
   let path='';for(let i=0;i<=200;i++){const xx=-.5+i/200,px=260+xx*410,py=205-(xx===0?k:k*Math.sin(k*xx)/(k*xx))*18;path+=(i?' L':'M')+px.toFixed(2)+' '+py.toFixed(2)}
   h+=`<path d="${path}" fill="none" stroke="${col}" stroke-width="3"/>`;
  }
  const y1=Math.sin(5*den)/den,y2=Math.sin(2*den)/Math.sin(3*den);
  h+=dot(260+x*410,205-y1*18,'#efb956');
  h+=txt(14,28,'sin(5x)/x → 5','#efb956',19);
  h+=txt(14,54,'sin(2x)/sin(3x) → 2/3','#6dd2b5',19);
  h+=txt(14,80,`x=${x.toFixed(3)}; sin(5x)/x≈${y1.toFixed(4)}`,undefined,16);
  h+=txt(14,268,'Angles in radians; approach x=0 from both sides',undefined,14);
 }
 svg.innerHTML=h;o.textContent=r.value+'%';}
 r.oninput=render;
 btn.onclick=()=>{if(timer){clearInterval(timer);timer=null;btn.textContent='▶'}else{btn.textContent='■';timer=setInterval(()=>{if(!s.isConnected){clearInterval(timer);timer=null;return}r.value=(+r.value+1)%101;render()},75)}};
 render();
}
const previousThirteenthVisual=addProblemVisual;
addProblemVisual=function(){previousThirteenthVisual();addThirteenthVisual();};
// Workbook exercise 14: four distinct, data-specific interactive SVGs.
function addFourteenthVisual(){
 if(problem!==14||![0,4,5,7].includes(selected))return;
 const guide=document.querySelector('.guide');if(!guide)return;
 const old=document.querySelector('.problem-visual');if(old)old.style.display='none';
 const s=document.createElement('section');s.className='problem-visual exact-visual';
 const heading={en:'Exercise 14 — interactive illustration',tr:'14. soru — etkileşimli görsel',pl:'Zadanie 14 — ilustracja interaktywna'};
 s.innerHTML=`<h3>🎯 ${heading[lang]||heading.en}</h3><svg viewBox="0 0 520 280" role="img" aria-label="${heading[lang]||heading.en}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="Animation progress"><output>0%</output><button type="button">▶</button></div>`;
 guide.after(s);
 const svg=s.querySelector('svg'),slider=s.querySelector('input'),output=s.querySelector('output'),button=s.querySelector('button');
 const text=(x,y,t,c='currentColor',z=16)=>`<text x="${x}" y="${y}" font-size="${z}" fill="${c}">${t}</text>`;
 const line=(x,y,X,Y,c='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${c}" stroke-width="${w}"/>`;
 const dot=(x,y,c='#efb956',r=6)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
 let timer=null;
 function render(){
  const q=+slider.value/100;let h='';
  if(selected===0){
   const alpha=Math.PI*q,beta=Math.PI/3,theta=alpha+beta,ox=245,oy=157,r=87;
   const point=a=>[ox+r*Math.cos(a),oy-r*Math.sin(a)];
   const b=point(beta),ab=point(theta);
   h+=line(40,oy,480,oy,'#8997a5',1)+line(ox,25,ox,264,'#8997a5',1);
   h+=line(ox,oy,...b,'#6b93da',4)+line(ox,oy,...ab,'#efb956',5)+dot(...b,'#6b93da')+dot(...ab);
   h+=text(14,28,`β=60°, α=${(alpha*180/Math.PI).toFixed(1)}°`,undefined,19);
   h+=text(14,55,`R(α)R(β) = R(${(theta*180/Math.PI).toFixed(1)}°)`,'#efb956',19);
   h+=text(14,267,'First rotate by β, then α; angles add.',undefined,15);
  }else if(selected===4){
   const P=[4,1],Q=[6/5,12/5],t=6*q/5,cur=[t,2*t],ox=75,oy=239,sc=46;
   const pt=v=>[ox+v[0]*sc,oy-v[1]*sc],p=pt(P),qq=pt(Q),cc=pt(cur);
   h+=line(25,239,490,239,'#8997a5',1)+line(ox,255,ox,15,'#8997a5',1);
   h+=line(...pt([0,0]),...pt([2.2,4.4]),'#6dd2b5',4);
   h+=line(...p,...qq,'#efb956',3)+dot(...p,'#6b93da')+dot(...qq,'#efb956')+dot(...cc,'#6dd2b5');
   h+=text(14,28,'P=(4,1), v=(1,2)',undefined,19);
   h+=text(14,55,`Q=(6/5,12/5), t=${t.toFixed(2)}`,'#6dd2b5',17);
   h+=text(14,82,'Distance = 7/√5; (P−Q)·v = 0','#efb956',17);
   h+=text(14,269,'Yellow segment is perpendicular to the line.',undefined,14);
  }else if(selected===5){
   const t=2*q,ox=115,oy=178;
   h+=`<polygon points="45,185 460,185 500,250 80,250" fill="#6dd2b5" fill-opacity=".18" stroke="#6dd2b5" stroke-width="2"/>`;
   const x=ox+90*t,y=oy-47*t;
   h+=line(ox,104,ox+180,185,'#efb956',4)+line(ox,104,ox+180,104,'#6b93da',4);
   h+=dot(ox+90,185,'#efb956')+dot(x,y,'#efb956');
   h+=text(14,27,'Plane z=0; P=(0,0,1)',undefined,19);
   h+=text(14,54,`L₁(t)=(2t,t,1−t); t=${t.toFixed(2)}`,'#efb956',17);
   h+=text(14,81,`L₂(t)=(2t,t,1): z stays 1`,'#6b93da',17);
   h+=text(14,271,'L₁ meets plane at (2,1,0); L₂ is parallel.',undefined,15);
  }else{
   const x=.6*(1-q)+.0005*q,y=(1-Math.cos(x))/(x*x),ox=275,oy=194;
   h+=line(45,oy,485,oy,'#8997a5',1)+line(ox,244,ox,35,'#8997a5',1);
   h+=line(45,100,485,100,'#efb956',2);
   let path='';for(let i=0;i<=160;i++){const a=-.8+i*.01;if(Math.abs(a)<.00001)continue;const v=(1-Math.cos(a))/(a*a),px=ox+a*245,py=oy-v*188;path+=(path?' L':'M')+px.toFixed(2)+' '+py.toFixed(2)}
   h+=`<path d="${path}" fill="none" stroke="#6dd2b5" stroke-width="3"/>`;
   h+=dot(ox+x*245,oy-y*188);
   h+=text(14,28,'f(x)=(1−cos x)/x²',undefined,19);
   h+=text(14,55,`x=${x.toFixed(4)}, f(x)=${y.toFixed(6)}`,'#6dd2b5',17);
   h+=text(14,270,'Identity: f(x) = ½(sin(x/2)/(x/2))² → ½','#efb956',14);
  }
  svg.innerHTML=h;output.textContent=slider.value+'%';
 }
 slider.oninput=render;
 button.onclick=()=>{if(timer){clearInterval(timer);timer=null;button.textContent='▶'}else{button.textContent='■';timer=setInterval(()=>{if(!s.isConnected){clearInterval(timer);timer=null;return}slider.value=(+slider.value+1)%101;render()},75)}};
 render();
}
const priorFourteenthVisual=addProblemVisual;
addProblemVisual=function(){priorFourteenthVisual();addFourteenthVisual();};
// Exercise 15: four question-specific interactive SVG explanations.
function addFifteenthVisual(){
 if(problem!==15||![0,4,5,7].includes(selected))return;
 const anchor=document.querySelector('.guide');if(!anchor)return;
 const old=document.querySelector('.problem-visual');if(old)old.style.display='none';
 const headings={en:'Exercise 15 — interactive proof',tr:'15. soru — etkileşimli ispat',pl:'Zadanie 15 — dowód interaktywny'};
 const s=document.createElement('section');s.className='problem-visual exact-visual';
 s.innerHTML=`<h3>🎯 ${headings[lang]||headings.en}</h3><svg viewBox="0 0 520 280" role="img" aria-label="${headings[lang]||headings.en}"></svg><div class="problem-visual-controls"><input type="range" min="0" max="100" value="0" aria-label="Animation progress"><output>0%</output><button type="button">▶</button></div>`;
 anchor.after(s);
 const svg=s.querySelector('svg'),range=s.querySelector('input'),out=s.querySelector('output'),btn=s.querySelector('button');
 const T=(x,y,t,c='currentColor',z=17)=>`<text x="${x}" y="${y}" fill="${c}" font-size="${z}">${t}</text>`;
 const L=(x,y,a,b,c='#6dd2b5',w=3)=>`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${c}" stroke-width="${w}"/>`;
 const D=(x,y,c='#efb956',r=6)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
 let timer=null;
 function render(){
 const q=+range.value/100;let h='';
 if(selected===0){
  const first=q<.5,mid=first?[[5,2],[1,4]]:[[2,1],[4,1],[-2,-4]],answer=[[10,3],[2,-3]];
  h+=T(16,28,first?'Path 1: (AB)C':'Path 2: A(BC)','#efb956',22);
  h+=T(16,57,first?'AB = [[5,2],[1,4]]':'BC = [[2,1],[4,1],[−2,−4]]','#6dd2b5',18);
  h+=T(16,87,first?'12 + 8 = 20 scalar multiplications':'12 + 12 = 24 scalar multiplications',undefined,16);
  h+=T(16,119,'Final matrix (same on both paths):',undefined,17);
  for(let i=0;i<2;i++)for(let j=0;j<2;j++){
   const x=155+j*110,y=135+i*54;
   h+=`<rect x="${x}" y="${y}" width="98" height="48" rx="6" stroke="#6dd2b5" fill="#6dd2b5" fill-opacity=".13"/>`+T(x+33,y+31,String(answer[i][j]),'#efb956',21);
  }
  h+=T(16,270,'Associativity changes cost, not the result.',undefined,15);
 }else if(selected===4){
  const cosine=5/Math.sqrt(78),angle=Math.acos(cosine),theta=angle*q,ox=230,oy=224,r=130;
  h+=L(ox,oy,ox+r,oy,'#6dd2b5',5);
  h+=L(ox,oy,ox+r*Math.cos(theta),oy-r*Math.sin(theta),'#efb956',5);
  h+=`<path d="M ${ox+50} ${oy} A 50 50 0 0 0 ${ox+50*Math.cos(theta)} ${oy-50*Math.sin(theta)}" stroke="#6b93da" fill="none" stroke-width="3"/>`;
  h+=T(16,27,'a=(1,2,1), b=2a, c=(2,0,3)',undefined,18);
  h+=T(16,55,'cos(a,b)=1, angle(a,b)=0°','#6dd2b5',17);
  h+=T(16,82,`cos(a,c)=cos(b,c)=5/√78 ≈ ${cosine.toFixed(4)}`,'#efb956',16);
  h+=T(16,109,`Animated angle: ${(theta*180/Math.PI).toFixed(1)}° / ${(angle*180/Math.PI).toFixed(1)}°`,'#efb956',17);
  h+=T(16,270,'Diagram shows angles, not a literal 3D projection.',undefined,14);
 }else if(selected===5){
  const mode=Math.min(2,Math.floor(q*3)),t=-1+2*(q*3%1),labels=['One intersection: z=1−t','Parallel, disjoint: z=1','Contained in plane: z=0'];
  h+=`<polygon points="45,125 460,125 500,232 90,232" fill="#6dd2b5" fill-opacity=".14" stroke="#6dd2b5" stroke-width="2"/>`;
  if(mode===0){h+=L(150,38,320,229,'#efb956',5)+D(245,145);}
  else if(mode===1){h+=L(90,76,425,76,'#efb956',5)+D(230,76);}
  else {h+=L(100,181,445,181,'#efb956',5)+D(250,181);}
  h+=T(15,28,labels[mode],'#efb956',20);
  h+=T(15,60,mode===0?'n·v ≠ 0':mode===1?'n·v = 0; n·p ≠ d':'n·v = 0; n·p = d','#6dd2b5',18);
  h+=T(15,265,mode===0?'Equation 1−t=0: one solution':mode===1?'Equation 1=0: impossible':'Equation 0=0: every parameter works',undefined,16);
 }else{
  const seq=q<.5,progress=seq?2*q:2*q-1;
  if(seq){
   const n=Math.max(10,Math.round(10*Math.pow(100,progress))),v=(4*n*n-3*n+1)/(2*n*n+5*n-7);
   h+=T(16,28,'Sequence: (4n²−3n+1)/(2n²+5n−7)',undefined,18);
   h+=T(16,60,`n = ${n}, aₙ = ${v.toFixed(7)}`,'#efb956',20);
   h+=L(35,182,485,182,'#8196a6',2)+L(35,182,485,182,'#6dd2b5',3);
   h+=D(35+Math.max(0,Math.min(1,v/2))*450,182);
   h+=T(18,157,'0',undefined,15)+T(466,157,'2',undefined,15);
   h+=T(16,237,'Proof: divide numerator and denominator by n².','#6dd2b5',15);
   h+=T(16,265,'Limit = 4/2 = 2',undefined,18);
  }else{
   const x=3+(progress-.5)*1.8,y=x-1,ox=255,oy=160;
   h+=L(35,160,490,160,'#8196a6',1)+L(255,245,255,30,'#8196a6',1);
   h+=L(75,250,445,65,'#6dd2b5',4)+D(ox+(x-3)*180,oy-(y-2)*90);
   h+=`<circle cx="${ox}" cy="${oy}" r="8" fill="none" stroke="#efb956" stroke-width="3"/>`;
   h+=T(16,28,'g(x)=(x²−4x+3)/(x−3) = x−1',undefined,18);
   h+=T(16,56,`x = ${x.toFixed(3)}, g(x) = ${y.toFixed(3)}`,'#efb956',18);
   h+=T(16,269,'Open circle at (3,2); limit = 2',undefined,16);
  }
 }
 svg.innerHTML=h;out.textContent=range.value+'%';
 }
 range.oninput=render;
 btn.onclick=()=>{if(timer){clearInterval(timer);timer=null;btn.textContent='▶'}else{btn.textContent='■';timer=setInterval(()=>{if(!s.isConnected){clearInterval(timer);timer=null;return}range.value=(+range.value+1)%101;render()},80)}};
 render();
}
const priorFifteenthVisual=addProblemVisual;
addProblemVisual=function(){priorFifteenthVisual();addFifteenthVisual();};
