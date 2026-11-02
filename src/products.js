export const products = [
 {id:'bottle',name:'Bottle',category:'Water bottles',price:25,color:'Sage',tone:'#a1b49a',type:'bottle',tag:'BESTSELLER',description:'A sturdy, 750 ml insulated bottle with a side handle, protective metal base, and cup-style cap. Built around early starts, packed schedules, and everyday refills.'},
 {id:'lunchbox',name:'Lunchbox',category:'Lunchboxes',price:33,color:'Oat',tone:'#d6c7a6',type:'box',tag:'LUNCH, PACKED BETTER',description:'A classic work-style lunchbox with a rounded lid, carry handle, and metal clasps. Pack your lunch, grab your gear, and get on with the day.'},
 {id:'thermos',name:'Thermos',category:'Thermoses',price:28,color:'Forest',tone:'#45634d',type:'thermos',tag:'HOT OR COLD',description:'A 450 ml insulated thermos with a geometric waist and a broad, cup-style lid. Bring a hot coffee or a cold drink along for the shift.'},
 {id:'cleaner',name:'Thermos Cleaner',category:'Cleaning tools',price:14,color:'Sand',tone:'#b9a77f',type:'cleaner',tag:'KEEP IT GOING',description:'A long-handled cleaning brush with a twisted-wire stem and a rounded bristle head for reaching inside your thermos or bottle. A little care for the gear you use every day.'}
];
let artSequence = 0;
// Each instance has its own paint IDs: hero, catalog and color preview can coexist.
export function productArt(p,customColor) {
const c=customColor||p.tone;
const id=`art-${p.id}-${++artSequence}`;
const paint=name=>`url(#${id}-${name})`;
const tint=(amount)=>{const rgb=c.match(/[a-f\d]{2}/gi).map(v=>parseInt(v,16));return '#'+rgb.map(v=>Math.round(amount>0?v+(255-v)*amount:v*(1+amount)).toString(16).padStart(2,'0')).join('')};
// All materials share a soft key light from the upper left. Cylinders have a
// broad highlight rather than a separate bright strip on every component.
const shellStops=p.type==='box'
  ? `<stop stop-color="${tint(.16)}"/><stop offset="1" stop-color="${tint(-.16)}"/>`
  : `<stop stop-color="${tint(-.08)}"/><stop offset=".24" stop-color="${tint(.22)}"/><stop offset=".6" stop-color="${c}"/><stop offset="1" stop-color="${tint(-.28)}"/>`;
const materials=`
<linearGradient id="${id}-shell" x1="0" y1="0" x2="1" y2="0">${shellStops}</linearGradient>
<linearGradient id="${id}-side" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="${tint(-.19)}"/><stop offset="1" stop-color="${tint(-.36)}"/></linearGradient>
<linearGradient id="${id}-roof" x1="0" y1="0" x2=".25" y2="1"><stop stop-color="${tint(.32)}"/><stop offset=".5" stop-color="${tint(.18)}"/><stop offset="1" stop-color="${tint(-.06)}"/></linearGradient>
<linearGradient id="${id}-chamfer-down" x1="0" y1="0" x2=".3" y2="1"><stop stop-color="${tint(-.1)}"/><stop offset="1" stop-color="${tint(-.27)}"/></linearGradient>
<linearGradient id="${id}-metal" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#89958b"/><stop offset=".24" stop-color="#dce2d6"/><stop offset=".6" stop-color="#aab5a8"/><stop offset="1" stop-color="#607064"/></linearGradient>
<linearGradient id="${id}-cap" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#304638"/><stop offset=".24" stop-color="#49634e"/><stop offset=".6" stop-color="#344d3b"/><stop offset="1" stop-color="#1c3025"/></linearGradient>
<radialGradient id="${id}-ground"><stop stop-color="#000" stop-opacity=".28"/><stop offset=".65" stop-color="#000" stop-opacity=".14"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>`;
let shape='';
if(p.type==='bottle') shape=`
<ellipse cx="164" cy="329" rx="80" ry="12" fill="${paint('ground')}"/>
<!-- Side handle, mounted behind the flask at two reinforced attachment points. -->
<path d="M201 144 218 147 Q236 148 237 165 L237 260 Q237 280 219 285 L202 289" fill="none" stroke="#172a20" stroke-width="13" stroke-linejoin="round"/>
<path d="M205 147 219 151 Q231 152 231 168 L231 260 Q231 275 218 279 L206 283" fill="none" stroke="#687763" stroke-width="2"/>

<path d="M104 110 Q104 102 114 96 L119 88 190 88 196 98 Q205 104 205 114 L205 301 Q205 316 155 318 Q104 316 104 301Z" fill="${paint('shell')}"/>
<path d="M109 114 Q155 123 200 114" fill="none" stroke="${tint(.34)}" stroke-width="2"/>
<path d="M113 128 113 294" stroke="${tint(.4)}" stroke-width="2" stroke-linecap="round" opacity=".35"/>
<path d="M119 79 Q155 70 190 79 L190 96 Q155 105 119 96Z" fill="${paint('cap')}"/>
<!-- Brushed steel cup cap: curved seams and highlights follow the cylinder. -->
<path d="M118 43 Q119 36 128 35 Q155 30 181 35 Q190 36 191 43 L193 79 Q155 90 116 79Z" fill="${paint('metal')}"/>
<ellipse cx="155" cy="39" rx="35" ry="7" fill="#d9dfd3"/>
<path d="M126 46 124 77 M133 46 132 80" stroke="#f1f2e7" stroke-width="2" opacity=".6"/>
<path d="M116 79 Q155 90 193 79" fill="none" stroke="#566659" stroke-width="2"/>
<!-- Protective steel foot. -->
<path d="M104 297 Q155 310 205 297 L205 313 Q202 326 155 327 Q107 326 104 313Z" fill="${paint('metal')}"/>
<path d="M107 298 Q155 312 202 298" fill="none" stroke="#203a29" stroke-width="3"/>
<path d="M115 307 115 316 M122 309 122 320" stroke="#e8ecde" stroke-width="2" opacity=".45"/>
<text x="155" y="181" text-anchor="middle" fill="#203b2b" font-size="12" font-family="Arial, sans-serif" font-weight="700" letter-spacing=".4">WorkFuel</text>
<path d="M142 191 168 191" stroke="#203b2b" stroke-width="1" opacity=".5"/>`;
if(p.type==='box') shape=`
<ellipse cx="170" cy="298" rx="126" ry="15" fill="${paint('ground')}"/>
<!-- Continuous closed shell underneath every face prevents background cracks.
     The roof is the swept outer silhouette, not a line to the hidden back corner. -->
<path d="M52 154 C52 125 64 105 85 107 L137 76 234 88 C259 91 274 112 274 144 L274 251 Q274 258 267 263 L222 291 Q218 294 211 291 L65 273 Q52 271 52 260Z" fill="${paint('shell')}"/>
<!-- Right face shares the exact front edge, with a one-unit overlap underneath. -->
<path d="M221 174 274 143 274 251 Q274 258 267 263 L222 291 221 282Z" fill="${paint('side')}"/>
<path d="M52 154 222 175 222 282 Q222 292 211 291 L65 273 Q52 271 52 260Z" fill="${paint('shell')}"/>
<!-- Rolled lid: front crown connects directly to the translated rear crown. -->
<path d="M52 154 C52 125 64 105 85 107 L137 76 234 88 C259 91 274 112 274 144 L222 175Z" fill="${paint('roof')}"/>
<path d="M52 154 C52 125 64 105 85 107 L182 119 C207 122 222 143 222 175Z" fill="${paint('shell')}"/>
<path d="M57 145 C60 122 69 111 87 114 L181 126 C200 129 211 144 214 163" fill="none" stroke="${tint(.36)}" stroke-width="1.5" opacity=".55"/>
<!-- Lid seam follows both faces; the base rim turns at the same shared corner. -->
<path d="M52 155 222 176 274 145" fill="none" stroke="${tint(-.42)}" stroke-width="2"/>
<path d="M54 158 222 179 272 149" fill="none" stroke="${tint(.28)}" stroke-width="1" opacity=".5"/>
<path d="M57 260 Q57 268 67 270 L211 288 Q220 289 222 282 L269 253" fill="none" stroke="${tint(-.32)}" stroke-width="2.5"/>
<path d="M65 250 209 268" stroke="${tint(-.15)}" stroke-width="1.5" opacity=".5"/>
<!-- Raised handle mounted along the roof ridge, not floating above it. -->
<path d="M115 104 128 96 146 99 133 107Z M192 114 204 107 221 109 208 117Z" fill="${paint('metal')}"/>
<path d="M130 99 132 77 Q133 67 144 69 L188 75 Q200 77 200 89 L199 111" fill="none" stroke="#182e23" stroke-width="11" stroke-linejoin="round"/>
<path d="M129 100 131 79 Q132 70 143 72 L186 78 Q195 80 195 90 L194 112" fill="none" stroke="#425344" stroke-width="7" stroke-linecap="round"/>
<path d="m144 74 39 6" stroke="#82907c" stroke-opacity=".6" stroke-width="2" stroke-linecap="round"/>
<!-- Two folded-metal clasp assemblies sit across the front lid seam. -->
<g transform="matrix(1 .125 0 1 81 151)"><path d="M0 0 14 0 16 31 2 31Z" fill="${paint('metal')}"/><path d="M3 7 12 7 13 23 4 23Z" fill="#354737"/><path d="M3 10 12 10 13 24 4 24Z" fill="${paint('metal')}"/><path d="M2 30 15 30" stroke="#23372a" stroke-width="2"/></g>
<g transform="matrix(1 .125 0 1 179 163)"><path d="M0 0 14 0 16 31 2 31Z" fill="${paint('metal')}"/><path d="M3 7 12 7 13 23 4 23Z" fill="#354737"/><path d="M3 10 12 10 13 24 4 24Z" fill="${paint('metal')}"/><path d="M2 30 15 30" stroke="#23372a" stroke-width="2"/></g>
<path d="m240 186 19-12 0 55-19 12Z" fill="${tint(-.3)}" stroke="${tint(-.15)}" stroke-width="1"/>
<text x="136" y="231" text-anchor="middle" fill="#233b2c" opacity=".8" font-size="12" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1.5" transform="rotate(7 136 231)">WorkFuel</text>`;
if(p.type==='thermos') shape=`
<ellipse cx="168" cy="313" rx="74" ry="12" fill="${paint('ground')}"/>
<!-- Broad end collars chamfer inward to a straight, narrower waist. -->
<path d="M101 105 Q160 91 219 105 L219 135 207 154 207 248 219 266 219 291 Q218 307 160 308 Q102 307 101 291 L101 266 113 248 113 154 101 135Z" fill="${paint('shell')}"/>
<path d="M101 135 Q160 149 219 135 L207 154 Q160 166 113 154Z" fill="${paint('chamfer-down')}"/>
<path d="M113 248 Q160 258 207 248 L219 266 Q160 281 101 266Z" fill="${paint('roof')}"/>

<path d="M113 159 113 246" stroke="${tint(.32)}" stroke-width="1.5" opacity=".4"/>
<path d="M101 286 Q160 303 219 286 L219 296 Q214 309 160 309 Q106 309 101 296Z" fill="${paint('cap')}"/>
<path d="M104 286 Q160 301 216 286" fill="none" stroke="${tint(.3)}" stroke-width="1.5"/>
<!-- Screw-top cup: elliptical top and curved lower seam share the body axis. -->
<path d="M98 84 Q160 68 222 84 L222 112 Q218 128 160 128 Q102 128 98 112Z" fill="${paint('cap')}"/>
<ellipse cx="160" cy="84" rx="62" ry="15" fill="#5b735b"/>
<ellipse cx="160" cy="83" rx="51" ry="10" fill="#435b45" stroke="#71886d" stroke-width="1"/>
<path d="M102 109 Q160 125 218 109" fill="none" stroke="#7f9277" stroke-opacity=".5" stroke-width="1.5"/>
<path d="m112 96 0 10 m8-8 0 10 m8-8 0 10 m64-1 0-10 m8 8 0-10 m8 8 0-10" stroke="#a7b29b" stroke-opacity=".25" stroke-width="2"/>
<text x="160" y="211" text-anchor="middle" fill="#e2e5cf" font-size="12" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1.5">WorkFuel</text>`;
if(p.type==='cleaner') {
// Dense staggered bristles taper around a twisted wire core; the grip has a hanging hole.
const bristles=Array.from({length:32},(_,i)=>{
  const y=53+i*2.5;
  const radius=5+19*Math.sin(Math.PI*(i+1)/33);
  return `<path d="M160 ${y} Q${160-radius*.5} ${y-5} ${160-radius} ${y-2}" stroke="${i%3===0?'#c6cfb6':'#a9b69a'}" stroke-width="2.2" stroke-linecap="round"/><path d="M160 ${y} Q${160+radius*.5} ${y-5} ${160+radius} ${y-2}" stroke="${i%3===0?'#9eae8f':'#7f9275'}" stroke-width="2.2" stroke-linecap="round"/>`;
}).join('');
shape=`<ellipse cx="134" cy="323" rx="45" ry="9" fill="${paint('ground')}"/><g transform="rotate(13 160 180)">
<path d="M158 225 158 56 Q160 45 162 56 L162 225" fill="none" stroke="${paint('metal')}" stroke-width="3"/>
${bristles}
<path d="M159 138 Q164 143 159 148 T159 158 T159 168 T159 178 T159 188 T159 198 T159 208 T159 218" fill="none" stroke="#a6b3a0" stroke-width="2"/>
<path d="M151 213 Q160 209 169 213 L169 227 151 227Z" fill="${paint('metal')}"/>
<path d="M149 225 Q160 219 171 225 L175 291 Q179 319 160 322 Q141 319 145 291Z" fill="${paint('shell')}"/>
<path d="M151 234 149 291" fill="none" stroke="${tint(.4)}" stroke-width="2" stroke-linecap="round"/>
<ellipse cx="160" cy="305" rx="5" ry="7" fill="#23352a" stroke="${tint(-.25)}" stroke-width="2"/>
<text x="161" y="270" text-anchor="middle" fill="#233b2c" font-size="7" font-family="Arial, sans-serif" font-weight="700" transform="rotate(90 161 270)">WorkFuel</text>
</g>`;
}
return `<svg class="product-art" viewBox="0 0 320 360" role="img" aria-label="${p.color} ${p.name}"><defs>${materials}</defs><g>${shape}</g></svg>`; }
