import Fuse from 'fuse.js';
const input=document.querySelector('#search'); const select=document.querySelector('#category'); const results=document.querySelector('#results'); const state=document.querySelector('#state');
const articles=window.articles;
const fuse=new Fuse(articles,{keys:['title','description','category','tags','body'],threshold:.35});
function render(){state.textContent='Loading articles…'; const query=input.value.trim(); const category=select.value; let found=query?fuse.search(query).map(x=>x.item):articles; found=found.filter(a=>category==='all'||a.category===category); results.replaceChildren(); if(!found.length){state.textContent='No articles match that search. Try a broader keyword such as Digimon, quest, or guide.'; return} state.textContent=`${found.length} article${found.length===1?'':'s'} found`; found.forEach(a=>{const link=document.createElement('a');link.className='article-card';link.href=`/wiki/${a.slug}`;link.innerHTML=`<span class="eyebrow">${a.category}</span><h3>${a.title}</h3><span class="muted">${a.description}</span>`;results.append(link)})}
input.addEventListener('input',render);select.addEventListener('change',render);render();
