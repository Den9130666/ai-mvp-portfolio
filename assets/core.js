
const defs=[['docflow','DocFlow','Проверка реквизитов и экспорт данных','📄'],['cargodesk','CargoDesk','Заявки на международную перевозку','🚚'],['autoimport','AutoImport','Калькулятор предварительной стоимости','🚙'],['ai-servicedesk','ServiceDesk','Триаж клиентских обращений','🤖'],['reportpilot','ReportPilot','Аналитика CSV и KPI','📊']];
const el=document.getElementById('app');const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const get=k=>JSON.parse(localStorage.getItem('portfolio_'+k)||'[]');const put=(k,v)=>localStorage.setItem('portfolio_'+k,JSON.stringify(v));
function home(){window.location.assign('/')}
function openApp(id){if(!defs.some(d=>d[0]===id))return;window.location.assign('/'+id+'/')}
function renderHome(){el.innerHTML='<div class="grid">'+defs.map(([id,name,desc,emoji])=>'<article class="card" onclick="openApp(\''+id+'\')"><div style="font-size:32px">'+emoji+'</div><h2>'+name+'</h2><p>'+desc+'</p><span class="tag">Открыть демо →</span></article>').join('')+'</div>'}
function renderApp(id,fn){const d=defs.find(x=>x[0]===id);if(!d)throw Error('Unknown app');el.innerHTML='<div class="project-actions"><a href="/">← Проекты</a></div><h2>'+d[3]+' '+d[1]+'</h2><p>'+d[2]+'</p><div id="work" class="panel"></div>';fn();if(typeof mountDemo==='function')mountDemo(id)}
function download(name,text){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type:'text/csv;charset=utf-8'}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function table(rows,keys,names){return '<div style="overflow:auto"><table><tr>'+names.map(x=>'<th>'+x+'</th>').join('')+'</tr>'+rows.map(r=>'<tr>'+keys.map(k=>'<td>'+esc(r[k])+'</td>').join('')+'</tr>').join('')+'</table></div>'}
function csv(rows,keys){return '\ufeff'+keys.join(',')+'\n'+rows.map(r=>keys.map(k=>'"'+String(r[k]??'').replace(/"/g,'""')+'"').join(',')).join('\n')}
