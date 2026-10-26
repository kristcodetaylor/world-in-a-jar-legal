(function(){
var ID="G-2PTK8NTCWQ",K='wij-consent',W={"en": {"text": "May we count visits to this website with Google Analytics, to see which pages help people? Only if you say yes. The game itself measures nothing.", "yes": "Yes, count my visit", "no": "No", "policy": "Privacy Policy", "settings": "Cookie settings"}, "hr": {"text": "Smijemo li brojati posjete ovoj stranici pomoću Google Analyticsa, da vidimo koje stranice ljudima pomažu? Samo ako kažeš da. Sama igra ništa ne mjeri.", "yes": "Da, broji moj posjet", "no": "Ne", "policy": "Pravila privatnosti", "settings": "Postavke kolačića"}};
var L=(document.documentElement.lang||'en').toLowerCase().split('-')[0],w=W[L]||W.en,n=navigator;
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function put(v){try{if(v===null)localStorage.removeItem(K);else localStorage.setItem(K,v)}catch(e){}}
function load(){if(window.__wijGa)return;window.__wijGa=1;window.dataLayer=window.dataLayer||[];
var g=window.gtag=function(){window.dataLayer.push(arguments)};
g('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
g('js',new Date());g('config',ID,{allow_google_signals:false,allow_ad_personalization_signals:false});
document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a[href*="play.google.com/store/apps"]'):null;if(a)g('event','play_store_click',{link_url:a.href})},true);
var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(ID);document.head.appendChild(s)}
function clearGa(){document.cookie.split(';').forEach(function(c){var k=c.split('=')[0].trim();if(/^_ga/.test(k)){['','.'+location.hostname,location.hostname].forEach(function(d){document.cookie=k+'=; Max-Age=0; path=/'+(d?'; domain='+d:'')})}})}
var css='.wijc{position:fixed;left:12px;right:12px;bottom:12px;z-index:50;max-width:40rem;margin:0 auto;background:#103138;color:#e4f4ee;border:1px solid #2f5a5f;border-radius:14px;padding:14px 16px;box-shadow:0 8px 28px rgba(0,0,0,.35);font:16px/1.5 system-ui,sans-serif}.wijc p{margin:0 0 10px}.wijc a{color:#9edfd1}.wijc .b{display:flex;gap:10px;flex-wrap:wrap}.wijc button{flex:1 1 9rem;font:inherit;font-weight:700;border-radius:999px;padding:10px 14px;cursor:pointer;border:1px solid #9edfd1;background:#9edfd1;color:#103138}';
function ask(){if(document.querySelector('.wijc'))return;var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var d=document.createElement('div');d.className='wijc';d.setAttribute('role','dialog');d.setAttribute('aria-live','polite');
var p=document.createElement('p');p.textContent=w.text+' ';var a=document.createElement('a');a.href=L==='hr'?'privacy-policy.hr.html':'privacy-policy.html';a.textContent=w.policy;p.appendChild(a);
var b=document.createElement('div');b.className='b';
var no=document.createElement('button');no.type='button';no.textContent=w.no;
var yes=document.createElement('button');yes.type='button';yes.textContent=w.yes;
no.onclick=function(){put('no');d.remove()};yes.onclick=function(){put('yes');d.remove();load()};
b.appendChild(no);b.appendChild(yes);d.appendChild(p);d.appendChild(b);document.body.appendChild(d)}
var f=document.querySelector('footer p')||document.querySelector('footer');if(f){var c=document.createElement('a');c.href='#';c.textContent=w.settings;
c.onclick=function(e){e.preventDefault();var was=get();put(null);clearGa();if(was==='yes'){location.reload()}else ask()};f.appendChild(document.createTextNode(' · '));f.appendChild(c)}
if(n.globalPrivacyControl===true||n.doNotTrack==='1'||window.doNotTrack==='1')return;
var v=get();if(v==='yes')load();else if(v!=='no')ask();
})();
