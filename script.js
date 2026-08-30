/* ═══════════════════════════════════════════
   CHIC CITY — application logic (external, no inline handlers anywhere)
═══════════════════════════════════════════ */
const WHATSAPP_PHONE = '254769338054'; // ← Chic City, +254 769 338 054
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1000&q=80';
const fmtKsh = n => `Ksh ${n.toLocaleString('en-KE')}`;

const PRODUCTS = [
  { id:1, no:'nº 01', name:'the siena tote', category:'Totes', material:'genuine vegetable-tanned leather', price:4100,
    blurb:'room for your laptop, your snacks & your secrets.',
    collections:['Everyday Essentials','Work & Travel'],
    narrative:'Sourced for its structure and quiet good looks, the Siena carries market mornings and museum afternoons alike. Its walls stand proud on their own, and every seam is checked before it earns a spot on our wall.',
    image:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Terracotta',hex:'#B4552D'},{name:'Espresso',hex:'#1A1715'},{name:'Oat',hex:'#D9CDBA'}] },
  { id:2, no:'nº 02', name:'the argile crossbody', category:'Crossbody', material:'waxed saddle leather', price:2900,
    blurb:'your perfect little sidekick for market days.',
    collections:['Everyday Essentials','New Arrivals'],
    narrative:'A compact companion shaped like river clay. The Argile is burnished with beeswax until it drinks the light, its strap cut to sit exactly at the hip.',
    image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Ochre',hex:'#C08A3E'},{name:'Madder Red',hex:'#8E3B2E'},{name:'Umber',hex:'#5B4636'}] },
  { id:3, no:'nº 03', name:'the vesper clutch', category:'Clutches', material:'silk-lined nappa, brass frame', price:2900,
    blurb:'for nights that turn into stories.',
    collections:['Evening Wear'],
    narrative:'Made for candlelit hours. The Vesper folds like origami over a cast brass frame, its nappa soft as bread dough, its lining woven silk the colour of dusk.',
    image:'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Raw Gold',hex:'#C9A24B'},{name:'Ink',hex:'#232028'},{name:'Bone',hex:'#E7DFD2'}] },
  { id:4, no:'nº 04', name:'the dune market tote', category:'Totes', material:'undyed ecru hide, tonal stitch', price:3300,
    blurb:'light as a sunday morning.',
    collections:['Everyday Essentials','Work & Travel'],
    narrative:'Left undyed to honour the hide\u2019s own map of scars and freckles. The Dune is the collection\u2019s quietest piece — ecru on ecru, stitch on stitch.',
    image:'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Ecru',hex:'#E4DACA'},{name:'Sand',hex:'#CBB89A'},{name:'Clay',hex:'#B97F5B'}] },
  { id:5, no:'nº 05', name:'the umbra backpack', category:'Backpacks', material:'smoke-tanned full-grain leather', price:4900,
    blurb:'carries your whole world, keeps it safe.',
    collections:['Work & Travel'],
    narrative:'Tanned over smouldering oak, the Umbra arrives the colour of twilight and deepens toward midnight with every year of use. A lifetime bag in the truest sense.',
    image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Smoke',hex:'#3E3730'},{name:'Espresso',hex:'#1A1715'},{name:'Chestnut',hex:'#6E4A2F'}] },
  { id:6, no:'nº 06', name:'the solène bucket', category:'Crossbody', material:'ochre-dyed pebbled grain', price:3200,
    blurb:'a favourite for good reason, love.',
    collections:['Everyday Essentials','Evening Wear'],
    narrative:'Dyed with raw ochre pigment for warmth that doesn\u2019t fade, each Solène carries its own soft variation in tone. Its drawstring closes with a whisper; its base is double-studded for café floors and cobblestones.',
    image:'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Ochre',hex:'#C08A3E'},{name:'Terracotta',hex:'#B4552D'},{name:'Olive',hex:'#6B6B4A'}] },
  { id:7, no:'nº 07', name:'the luna minaudière', category:'Clutches', material:'pearl-lacquered calf, gilt clasp', price:2600,
    blurb:'tiny, but holds the essentials (and lipstick).',
    collections:['Evening Wear','New Arrivals'],
    narrative:'A jewel box that happens to carry keys and lipstick. The Luna is lacquered in seven whisper-thin coats and polished to a soft shine.',
    image:'https://images.unsplash.com/photo-1575032617735-21ff5dcbf0f5?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Pearl',hex:'#EDE7DC'},{name:'Ink',hex:'#232028'},{name:'Gilt',hex:'#C9A24B'}] },
  { id:8, no:'nº 08', name:'the atlas backpack', category:'Backpacks', material:'double-stitched umber grain', price:4400,
    blurb:'your commute just got charming.',
    collections:['Work & Travel','New Arrivals'],
    narrative:'Built like a saddle for the shoulders. The Atlas swallows a laptop, a novel and a market haul, then closes with a single brass turn-lock.',
    image:'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Umber',hex:'#5B4636'},{name:'Black',hex:'#1A1715'},{name:'Tan',hex:'#C69C6D'}] },
  { id:9, no:'nº 09', name:'the marlow tote', category:'Totes', material:'smooth black leather', price:4500,
    blurb:'goes with everything, holds even more.',
    collections:['Everyday Essentials','Work & Travel'],
    narrative:'Clean lines and a soft slouch make the Marlow the one bag that works for every outfit. Roomy enough for a laptop, sturdy enough for a Saturday market run.',
    image:'https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Black',hex:'#1A1715'},{name:'Chestnut',hex:'#6E4A2F'},{name:'Sand',hex:'#CBB89A'}] },
  { id:10, no:'nº 10', name:'the harbor tote', category:'Totes', material:'structured brown leather', price:3700,
    blurb:'sturdy enough for the whole day.',
    collections:['Work & Travel'],
    narrative:'Squared corners and a flat base give the Harbor real structure — it stands up on its own and looks just as at home at the office as it does at the market.',
    image:'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Umber',hex:'#5B4636'},{name:'Terracotta',hex:'#B4552D'},{name:'Espresso',hex:'#1A1715'}] },
  { id:11, no:'nº 11', name:'the amble tote', category:'Totes', material:'soft grain leather', price:2900,
    blurb:'light enough for a quick trip out.',
    collections:['Everyday Essentials'],
    narrative:'The Amble keeps things simple — a soft, unlined shoulder tote for the days you just need to grab your keys, your phone, and go.',
    image:'https://images.unsplash.com/photo-1624687943971-e86af76d57de?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Oat',hex:'#D9CDBA'},{name:'Clay',hex:'#B97F5B'},{name:'Espresso',hex:'#1A1715'}] },
  { id:12, no:'nº 12', name:'the wren crossbody', category:'Crossbody', material:'grey leather, gold-tone buckles', price:3500,
    blurb:'a little polish for an everyday bag.',
    collections:['Everyday Essentials','Work & Travel'],
    narrative:'The Wren pairs a soft grey leather body with gold-tone buckle detailing — understated most days, sharp enough for the ones that need it.',
    image:'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Stone',hex:'#9C9184'},{name:'Umber',hex:'#5B4636'},{name:'Black',hex:'#1A1715'}] },
  { id:13, no:'nº 13', name:'the drift crossbody', category:'Crossbody', material:'soft pebbled leather', price:2300,
    blurb:'made for busy days and full hands.',
    collections:['Everyday Essentials'],
    narrative:'The Drift sits close to the body and stays out of the way — a light, no-fuss crossbody for days when you need both hands free.',
    image:'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Terracotta',hex:'#B4552D'},{name:'Olive',hex:'#6B6B4A'},{name:'Black',hex:'#1A1715'}] },
  { id:14, no:'nº 14', name:'the sable sling', category:'Crossbody', material:'smooth black leather', price:2600,
    blurb:'small, sleek, and always ready.',
    collections:['Everyday Essentials','Evening Wear'],
    narrative:'A minimal sling built for exactly what you need and nothing more — phone, cards, keys, and a strap you can adjust however you like to wear it.',
    image:'https://images.unsplash.com/photo-1603219527847-24c87f552a77?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Black',hex:'#1A1715'},{name:'Umber',hex:'#5B4636'},{name:'Ink',hex:'#232028'}] },
  { id:15, no:'nº 15', name:'the ember clutch', category:'Clutches', material:'soft grain leather', price:2100,
    blurb:'small enough to slip under your arm.',
    collections:['Evening Wear','Everyday Essentials'],
    narrative:'The Ember keeps to the essentials — cards, keys, lipstick — in a soft fold-over silhouette that looks just as good at dinner as it does running errands.',
    image:'https://images.unsplash.com/photo-1749294435694-ce3c586591e6?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Umber',hex:'#5B4636'},{name:'Terracotta',hex:'#B4552D'},{name:'Black',hex:'#1A1715'}] },
  { id:16, no:'nº 16', name:'the noir clutch', category:'Clutches', material:'smooth leather, magnetic clasp', price:1800,
    blurb:'the one you reach for on a whim.',
    collections:['Evening Wear'],
    narrative:'Simple and sturdy, the Noir closes with a quiet magnetic snap and holds its shape trip after trip — an easy grab for last-minute plans.',
    image:'https://images.unsplash.com/photo-1749294435693-4f39ec7e0ab2?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Black',hex:'#1A1715'},{name:'Bone',hex:'#E7DFD2'},{name:'Umber',hex:'#5B4636'}] },
  { id:17, no:'nº 17', name:'the opal clutch', category:'Clutches', material:'beaded silver pouch', price:2400,
    blurb:'a little sparkle for the nights that need it.',
    collections:['Evening Wear','New Arrivals'],
    narrative:'The Opal trades leather for a beaded silver shell — a statement piece for evenings that call for a little more shine.',
    image:'https://images.unsplash.com/photo-1598552105309-9243044d2002?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Silver',hex:'#C7C2B8'},{name:'Pearl',hex:'#EDE7DC'},{name:'Gilt',hex:'#C9A24B'}] },
  { id:18, no:'nº 18', name:'the ridge backpack', category:'Backpacks', material:'full-grain leather', price:4000,
    blurb:'a bold pick for a plain backpack drawer.',
    collections:['Work & Travel','New Arrivals'],
    narrative:'Most backpacks hide in black and brown — the Ridge doesn\u2019t. Same solid straps and roomy main compartment, just with a little more colour to it.',
    image:'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Rust Red',hex:'#B4552D'},{name:'Black',hex:'#1A1715'},{name:'Chestnut',hex:'#6E4A2F'}] },
  { id:19, no:'nº 19', name:'the voyager backpack', category:'Backpacks', material:'full-grain leather, reinforced base', price:5500,
    blurb:'built for the long commute and the long trip.',
    collections:['Work & Travel'],
    narrative:'The Voyager is the biggest bag on the wall — padded straps, a reinforced base, and enough room for a laptop, a change of clothes, and whatever else the day needs.',
    image:'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Chestnut',hex:'#6E4A2F'},{name:'Espresso',hex:'#1A1715'},{name:'Tan',hex:'#C69C6D'}] },
  { id:20, no:'nº 20', name:'the anchor backpack', category:'Backpacks', material:'smooth grain leather', price:3600,
    blurb:'steady, simple, everyday-proof.',
    collections:['Everyday Essentials','Work & Travel'],
    narrative:'No extra buckles, no fuss — the Anchor is a straightforward daypack that carries a laptop and a lunch without complaint.',
    image:'https://images.unsplash.com/photo-1622560257067-108402fcedc0?auto=format&fit=crop&w=900&q=80',
    swatches:[{name:'Umber',hex:'#5B4636'},{name:'Black',hex:'#1A1715'},{name:'Sand',hex:'#CBB89A'}] },
];

const state = { cart:[], filter:{type:null,value:null}, modalProduct:null, modalColor:null, modalQty:1 };
const $ = id => document.getElementById(id);

/* ── Graceful image fallback (replaces inline onerror handlers; CSP-friendly) ── */
document.addEventListener('error', (e) => {
  const t = e.target;
  if (t && t.tagName === 'IMG' && t.dataset.fallback && !t.dataset.fallbackUsed) {
    t.dataset.fallbackUsed = '1';
    t.src = t.dataset.fallback;
  }
}, true);

/* ── WhatsApp — exact requested format, routed to +254769338054 ── */
function waLink(items){
  const total = items.reduce((s,i)=>s+i.price*i.qty,0);
  let msg = 'Hello Chic City, I wish to reserve the following piece(s):\n';
  items.forEach(i => { msg += `- ${i.name} (${i.color}) x${i.qty} - ${fmtKsh(i.price*i.qty)}\n`; });
  msg += `Total: ${fmtKsh(total)}\nPlease let me know availability and lead time.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}
const singleWA = (p,color=p.swatches[0].name,qty=1) => waLink([{name:p.name,color,qty,price:p.price}]);

/* ── Reveal on scroll ── */
const revealObserver = new IntersectionObserver(es => es.forEach(en => {
  if(en.isIntersecting){ en.target.classList.add('revealed'); revealObserver.unobserve(en.target); }
}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Dropdowns ── */
function closeAllDD(except){
  document.querySelectorAll('[data-dropdown]').forEach(d=>{
    if(d!==except){
      d.querySelector('[data-dd-panel]').classList.remove('dd-open');
      d.querySelector('[data-dd-btn]').setAttribute('aria-expanded','false');
    }
  });
}
document.querySelectorAll('[data-dropdown]').forEach(dd=>{
  const btn=dd.querySelector('[data-dd-btn]'), panel=dd.querySelector('[data-dd-panel]');
  const setOpen=o=>{ panel.classList.toggle('dd-open',o); btn.setAttribute('aria-expanded',o); };
  btn.addEventListener('click',e=>{ e.stopPropagation(); closeAllDD(dd); setOpen(!panel.classList.contains('dd-open')); });
});
document.addEventListener('click',()=>closeAllDD());

/* ── Mobile menu ── */
$('menuBtn').addEventListener('click',()=>{ $('mobileMenu').hidden=false; document.body.style.overflow='hidden'; });
function closeMenu(){ $('mobileMenu').hidden=true; document.body.style.overflow=''; }
$('menuClose').addEventListener('click',closeMenu);
document.querySelectorAll('[data-close-menu]').forEach(a=>a.addEventListener('click',closeMenu));

/* ── Filtering ── */
function filteredProducts(){
  const {type,value}=state.filter;
  if(!type || (type==='category'&&value==='All')) return PRODUCTS;
  return type==='category' ? PRODUCTS.filter(p=>p.category===value) : PRODUCTS.filter(p=>p.collections.includes(value));
}
function applyFilter(type,value){
  state.filter={type,value}; renderGrid();
  const active=!(type==='category'&&value==='All');
  $('filterChip').hidden=!active; if(active) $('filterLabel').textContent=value;
  closeMenu(); closeAllDD();
  $('collection').scrollIntoView({behavior:'smooth'});
}
document.querySelectorAll('[data-filter-type]').forEach(b=>b.addEventListener('click',()=>applyFilter(b.dataset.filterType,b.dataset.filterValue)));
$('clearFilter').addEventListener('click',()=>applyFilter('category','All'));

/* ── THE HANGING WALL GRID (no inline styles; sway rhythm lives in styles.css nth-child rules) ── */
function renderGrid(){
  const list = filteredProducts();
  $('productGrid').innerHTML = list.map((p)=>`
    <article class="reveal flex flex-col items-center">
      <div class="push relative w-full max-w-[300px]">
        <span class="nail absolute left-1/2 -translate-x-1/2 -top-2 z-20"></span>
        <div class="hang">
          <svg viewBox="0 0 200 74" class="w-[70%] mx-auto block -mb-3 relative z-10"><path d="M28 74 C 40 6, 160 6, 172 74" fill="none" stroke="#402412" stroke-width="8" stroke-linecap="round"/></svg>
          <button data-open="${p.id}" class="block w-full print-frame rounded-md p-2.5 pb-3 hover:shadow-2xl transition-shadow" aria-label="meet ${p.name}">
            <div class="overflow-hidden rounded-sm aspect-[4/5]">
              <img src="${p.image}" alt="${p.name}" loading="lazy" data-fallback="${FALLBACK_IMG}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p class="font-hand text-xl text-center text-cocoa/80 mt-1.5">${p.no} · ${p.name}</p>
          </button>
          ${p.collections.includes('New Arrivals') ? `<div class="stamp-badge">
            <p class="font-type text-[9px] leading-tight tracking-[0.1em] uppercase text-cream">just<br/>landed</p>
          </div>` : ''}
          <div class="kraft absolute -right-5 top-20 w-20 p-2 rotate-[7deg] rounded-sm shadow-md">
            <p class="font-type text-base text-center leading-none">${fmtKsh(p.price)}</p>
            <p class="font-hand text-sm text-center text-rust leading-tight mt-0.5">imported!</p>
          </div>
        </div>
      </div>

      <div class="mt-7 text-center px-2 max-w-[280px]">
        <h3 class="font-display font-black text-2xl leading-tight">${p.name}</h3>
        <p class="font-hand text-xl text-rust leading-snug mt-1">${p.blurb}</p>
        <div class="mt-3 flex items-center justify-center gap-2">
          ${p.swatches.map(s=>`<span class="w-4 h-4 rounded-full border-2 border-cream shadow" style="background:${s.hex}" title="${s.name}"></span>`).join('')}
          <span class="font-type text-[10px] tracking-[0.2em] uppercase text-cocoa/50 ml-1">${p.category}</span>
        </div>
        <div class="mt-5 flex items-center justify-center gap-4">
          <a href="${singleWA(p)}" target="_blank" rel="noopener noreferrer" class="ticket font-type text-[11px] tracking-[0.18em] uppercase px-6 py-3 inline-flex items-center gap-2">
            <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> get now ♡
          </a>
          <button data-open="${p.id}" class="font-hand text-xl text-cocoa/70 border-b-2 border-dashed border-cocoa/30 hover:text-rust hover:border-rust transition-colors">peek closer</button>
        </div>
      </div>
    </article>`).join('')
  || `<p class="col-span-full text-center font-hand text-3xl text-cocoa/60">nothing hanging here just now — try another shelf, friend!</p>`;

  document.querySelectorAll('#productGrid [data-open]').forEach(b=>b.addEventListener('click',()=>openModal(+b.dataset.open)));
  document.querySelectorAll('#productGrid .reveal').forEach(el=>revealObserver.observe(el));
  lucide.createIcons();
}

/* ── Modal ── */
function openModal(id){
  const p=PRODUCTS.find(x=>x.id===id);
  state.modalProduct=p; state.modalColor=p.swatches[0]; state.modalQty=1;
  $('mImage').src=p.image; $('mImage').alt=p.name; $('mImage').style.transform='scale(1)';
  $('mCaption').textContent=`${p.no} · ${p.name}`;
  $('mNo').textContent=`${p.no} · ${p.category}`; $('mName').textContent=p.name;
  $('mBlurb').textContent=p.blurb; $('mNarrative').textContent=p.narrative;
  $('mMaterial').textContent=p.material; $('mPrice').textContent=fmtKsh(p.price); $('mQty').textContent='1';
  renderSwatches();
  $('modalBackdrop').hidden=false; $('productModal').hidden=false;
  document.body.style.overflow='hidden';
  lucide.createIcons();
}
function closeModal(){ $('modalBackdrop').hidden=true; $('productModal').hidden=true; document.body.style.overflow=''; }
function updateModalWA(){ $('mWaLink').href=singleWA(state.modalProduct,state.modalColor.name,state.modalQty); }
function renderSwatches(){
  $('mColorName').textContent=state.modalColor.name.toLowerCase();
  $('mSwatches').innerHTML=state.modalProduct.swatches.map(s=>`
    <button data-color="${s.name}" title="${s.name}" class="w-10 h-10 rounded-full border-4 transition-all duration-300 hover:scale-110 ${s.name===state.modalColor.name?'border-rust scale-110 shadow-lg':'border-cream shadow'}" style="background:${s.hex}"></button>`).join('');
  $('mSwatches').querySelectorAll('[data-color]').forEach(b=>b.addEventListener('click',()=>{
    state.modalColor=state.modalProduct.swatches.find(s=>s.name===b.dataset.color); renderSwatches();
  }));
  updateModalWA();
}
$('qtyMinus').addEventListener('click',()=>{ state.modalQty=Math.max(1,state.modalQty-1); $('mQty').textContent=state.modalQty; updateModalWA(); });
$('qtyPlus').addEventListener('click',()=>{ state.modalQty=Math.min(9,state.modalQty+1); $('mQty').textContent=state.modalQty; updateModalWA(); });
$('modalClose').addEventListener('click',closeModal);
$('modalBackdrop').addEventListener('click',closeModal);

/* zoom lens */
const zoomWrap=$('mZoomWrap'), zoomImg=$('mImage');
zoomWrap.addEventListener('mousemove',e=>{
  const r=zoomWrap.getBoundingClientRect();
  zoomImg.style.transformOrigin=`${((e.clientX-r.left)/r.width)*100}% ${((e.clientY-r.top)/r.height)*100}%`;
  zoomImg.style.transform='scale(1.7)';
});
zoomWrap.addEventListener('mouseleave',()=>{ zoomImg.style.transform='scale(1)'; });

/* ── Basket ── */
function paperBurst(originEl){
  const r = originEl.getBoundingClientRect();
  const cx = r.left + r.width/2, cy = r.top + r.height/2;
  const colors = ['#D9A13B','#B4552D','#8A8B6C','#C9A876','#93401F'];
  for(let i=0;i<14;i++){
    const bit = document.createElement('span');
    bit.className = 'paper-bit';
    const angle = Math.random()*Math.PI*2, dist = 55+Math.random()*95;
    bit.style.setProperty('--tx', `${Math.cos(angle)*dist}px`);
    bit.style.setProperty('--ty', `${Math.sin(angle)*dist - 45}px`);
    bit.style.setProperty('--rot', `${Math.random()*720-360}deg`);
    bit.style.left = cx+'px'; bit.style.top = cy+'px';
    bit.style.background = colors[i%colors.length];
    document.body.appendChild(bit);
    bit.addEventListener('animationend', ()=>bit.remove());
  }
}
$('addOrderBtn').addEventListener('click',()=>{
  const p=state.modalProduct;
  const line=state.cart.find(l=>l.id===p.id&&l.color===state.modalColor.name);
  line ? line.qty+=state.modalQty : state.cart.push({id:p.id,name:p.name,price:p.price,image:p.image,color:state.modalColor.name,qty:state.modalQty});
  paperBurst($('addOrderBtn'));
  closeModal(); renderCart(); openDrawer();
});
function renderCart(){
  const count=state.cart.reduce((s,l)=>s+l.qty,0), total=state.cart.reduce((s,l)=>s+l.price*l.qty,0);
  const badge=$('cartCount'); badge.hidden=count===0; badge.textContent=count;
  badge.classList.remove('badge-pop'); void badge.offsetWidth; badge.classList.add('badge-pop');
  $('drawerFooter').style.display=state.cart.length?'':'none';
  $('drawerTotal').textContent=fmtKsh(total);
  $('waCheckout').href=waLink(state.cart);
  $('drawerItems').innerHTML = state.cart.length ? state.cart.map((l,i)=>`
    <div class="flex gap-4 items-center anim-fade border-b border-dashed border-wood/30 pb-4">
      <img src="${l.image}" alt="${l.name}" data-fallback="${FALLBACK_IMG}" class="w-16 h-20 object-cover rounded-sm border-4 border-cream shadow" />
      <div class="flex-1 min-w-0">
        <p class="font-display font-bold text-lg leading-tight truncate">${l.name}</p>
        <p class="font-hand text-lg text-rust leading-none mt-0.5">${l.color.toLowerCase()}</p>
        <div class="flex items-center gap-3 mt-2">
          <button data-dec="${i}" class="hover:text-rust" aria-label="less"><i data-lucide="minus" class="w-4 h-4"></i></button>
          <span class="font-type text-sm w-4 text-center">${l.qty}</span>
          <button data-inc="${i}" class="hover:text-rust" aria-label="more"><i data-lucide="plus" class="w-4 h-4"></i></button>
        </div>
      </div>
      <div class="text-right">
        <p class="font-display font-black text-lg">${fmtKsh(l.price*l.qty)}</p>
        <button data-del="${i}" class="text-cocoa/40 hover:text-rust transition-colors mt-1" aria-label="remove"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>`).join('')
  : `<div class="h-full flex flex-col items-center justify-center text-center gap-3 text-cocoa/60">
       <i data-lucide="shopping-basket" class="w-10 h-10 opacity-40"></i>
       <p class="font-hand text-3xl">nothing here yet!</p>
       <p class="font-sans text-sm font-light">go on, treat yourself — you deserve a little something lovely ♡</p>
     </div>`;
  $('drawerItems').querySelectorAll('[data-inc]').forEach(b=>b.addEventListener('click',()=>{ state.cart[+b.dataset.inc].qty++; renderCart(); }));
  $('drawerItems').querySelectorAll('[data-dec]').forEach(b=>b.addEventListener('click',()=>{ const l=state.cart[+b.dataset.dec]; l.qty>1?l.qty--:state.cart.splice(+b.dataset.dec,1); renderCart(); }));
  $('drawerItems').querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>{ state.cart.splice(+b.dataset.del,1); renderCart(); }));
  lucide.createIcons();
}
function openDrawer(){ $('drawerBackdrop').hidden=false; const d=$('cartDrawer'); d.hidden=false; d.classList.remove('anim-slide-out'); d.classList.add('anim-slide'); document.body.style.overflow='hidden'; }
function closeDrawer(){ $('drawerBackdrop').hidden=true; const d=$('cartDrawer'); d.classList.remove('anim-slide'); d.classList.add('anim-slide-out'); setTimeout(()=>{ d.hidden=true; document.body.style.overflow=''; },280); }
$('cartBtn').addEventListener('click',openDrawer);
$('drawerClose').addEventListener('click',closeDrawer);
$('drawerBackdrop').addEventListener('click',closeDrawer);
addEventListener('keydown',e=>{ if(e.key==='Escape'){ closeModal(); closeDrawer(); closeMenu(); closeAllDD(); } });

/* ── Init ── */
$('campaignWA').href = singleWA(PRODUCTS[1]);
renderGrid(); renderCart(); lucide.createIcons();