export const products = [
 {id:'bottle',name:'The Everyday Bottle',category:'Water bottles',price:28,color:'Sage',tone:'#a1b49a',type:'bottle',tag:'BESTSELLER',description:'Your daily hydration, upgraded. A double-wall insulated, 750 ml stainless steel bottle that goes wherever you do.'},
 {id:'lunchbox',name:'The Lunch Companion',category:'Lunchboxes',price:38,color:'Oat',tone:'#d6c7a6',type:'box',tag:'LUNCH, PACKED BETTER',description:'Room for the good stuff. A reusable lunchbox with removable compartments and a snug, spill-resistant lid.'},
 {id:'thermos',name:'The Slow Sip',category:'Thermoses',price:32,color:'Forest',tone:'#45634d',type:'thermos',tag:'HOT OR COLD',description:'Take your time. A 450 ml insulated companion for coffee, tea, and the small pauses that make your day.'},
 {id:'cutlery',name:'The Takealong Set',category:'Everyday extras',price:16,color:'Sand',tone:'#b9a77f',type:'cutlery',tag:'THE LITTLE EXTRAS',description:'A compact, reusable utensil set for desk lunches, park picnics, and everything in between.'}
];
let artSequence = 0;
// Each instance has its own paint IDs: hero, catalog and color preview can coexist.
export function productArt(p,customColor) {
const c=customColor||p.tone;
const id=`art-${p.id}-${++artSequence}`;
const paint=name=>`url(#${id}-${name})`;
const tint=(amount)=>{const rgb=c.match(/[a-f\d]{2}/gi).map(v=>parseInt(v,16));return '#'+rgb.map(v=>Math.round(amount>0?v+(255-v)*amount:v*(1+amount)).toString(16).padStart(2,'0')).join('')};
const materials=`
<linearGradient id="${id}-shell" x1="0" y1="0" x2="1" y2=".25"><stop stop-color="${tint(.24)}"/><stop offset=".38" stop-color="${c}"/><stop offset="1" stop-color="${tint(-.2)}"/></linearGradient>
<linearGradient id="${id}-side" x1="0" y1="0" x2="1" y2=".3"><stop stop-color="${tint(-.22)}"/><stop offset="1" stop-color="${tint(-.43)}"/></linearGradient>
<linearGradient id="${id}-roof" x1="0" y1="0" x2=".35" y2="1"><stop stop-color="${tint(.4)}"/><stop offset=".5" stop-color="${tint(.15)}"/><stop offset="1" stop-color="${tint(-.1)}"/></linearGradient>
<linearGradient id="${id}-metal" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#758379"/><stop offset=".3" stop-color="#dce2d6"/><stop offset=".55" stop-color="#9ca99d"/><stop offset="1" stop-color="#526357"/></linearGradient>
<linearGradient id="${id}-cap" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#2c4336"/><stop offset=".32" stop-color="#45604c"/><stop offset="1" stop-color="#192d23"/></linearGradient>`;
let shape='';
if(p.type==='bottle') shape=`<ellipse cx="160" cy="305" rx="59" ry="10" fill="#000" opacity=".08"/><rect x="127" y="54" width="66" height="33" rx="9" fill="#314b38"/><path d="M128 84 Q128 103 114 119 Q108 126 108 146 V277 Q108 298 130 300 H190 Q212 298 212 277 V146 Q212 126 206 119 Q192 103 192 84Z" fill="${c}"/><path d="M122 144 V272" stroke="white" stroke-opacity=".2" stroke-width="7" stroke-linecap="round"/><text x="160" y="220" text-anchor="middle" fill="#284d37" font-size="13" font-family="serif" letter-spacing="2">everday</text>`;
if(p.type==='box') shape=`
<ellipse cx="160" cy="300" rx="116" ry="13" fill="#000" opacity=".18"/>
<!-- A single perspective: back/right edges recede together, light from upper left. -->
<path d="M221 174 274 143 274 251 Q274 258 267 263 L226 289 218 282Z" fill="${paint('side')}"/>
<path d="M52 154 222 175 222 282 Q222 292 211 291 L65 273 Q53 271 53 260Z" fill="${paint('shell')}"/>
<!-- Rolled roof, with a rounded front end and continuous receding barrel. -->
<path d="M52 154 C52 125 64 105 85 107 L182 119 C207 122 222 143 222 175 L274 144 C274 112 259 92 234 89 L137 77 C116 75 104 95 104 123Z" fill="${paint('roof')}"/>
<path d="M52 154 C52 125 64 105 85 107 L182 119 C207 122 222 143 222 175Z" fill="${paint('shell')}"/>
<path d="M57 145 C60 122 69 111 87 114 L181 126 C200 129 211 144 214 163" fill="none" stroke="${tint(.42)}" stroke-width="2" opacity=".65"/>
<path d="M222 175 274 144" stroke="${tint(-.45)}" stroke-width="3"/>
<!-- Recessed lid seam and rolled lower rim follow the same vanishing direction. -->
<path d="M52 157 222 178 274 147" fill="none" stroke="${tint(-.5)}" stroke-width="3"/>
<path d="M54 162 221 183 271 154" fill="none" stroke="${tint(.4)}" stroke-width="1.3" opacity=".65"/>
<path d="M57 260 Q57 268 67 270 L210 288 Q219 289 222 282 L269 253" fill="none" stroke="${tint(-.4)}" stroke-width="4"/>
<path d="M65 250 209 268" stroke="${tint(-.15)}" stroke-width="2" opacity=".6"/>
<!-- Raised handle mounted along the roof ridge, not floating above it. -->
<path d="M115 104 128 96 146 99 133 107Z M192 114 204 107 221 109 208 117Z" fill="${paint('metal')}"/>
<path d="M130 99 132 77 Q133 67 144 69 L188 75 Q200 77 200 89 L199 111" fill="none" stroke="#182e23" stroke-width="11" stroke-linejoin="round"/>
<path d="M129 100 131 79 Q132 70 143 72 L186 78 Q195 80 195 90 L194 112" fill="none" stroke="#425344" stroke-width="7" stroke-linecap="round"/>
<path d="m144 74 39 6" stroke="#82907c" stroke-opacity=".6" stroke-width="2" stroke-linecap="round"/>
<!-- Two folded-metal clasp assemblies sit across the front lid seam. -->
<g transform="matrix(1 .125 0 1 81 151)"><path d="M0 0 14 0 16 31 2 31Z" fill="${paint('metal')}"/><path d="M3 7 12 7 13 23 4 23Z" fill="#354737"/><path d="M3 10 12 10 13 24 4 24Z" fill="${paint('metal')}"/><path d="M2 30 15 30" stroke="#23372a" stroke-width="2"/></g>
<g transform="matrix(1 .125 0 1 179 163)"><path d="M0 0 14 0 16 31 2 31Z" fill="${paint('metal')}"/><path d="M3 7 12 7 13 23 4 23Z" fill="#354737"/><path d="M3 10 12 10 13 24 4 24Z" fill="${paint('metal')}"/><path d="M2 30 15 30" stroke="#23372a" stroke-width="2"/></g>
<path d="m240 186 19-12 0 55-19 12Z" fill="${tint(-.3)}" stroke="${tint(-.15)}" stroke-width="1"/>
<text x="136" y="231" text-anchor="middle" fill="#233b2c" opacity=".8" font-size="12" font-family="serif" letter-spacing="1.5" transform="rotate(7 136 231)">everday</text>`;
if(p.type==='thermos') shape=`
<ellipse cx="160" cy="307" rx="65" ry="11" fill="#000" opacity=".2"/>
<!-- Broad end collars chamfer inward to a straight, narrower waist. -->
<path d="M101 105 Q160 91 219 105 L219 135 207 154 207 248 219 266 219 291 Q218 307 160 308 Q102 307 101 291 L101 266 113 248 113 154 101 135Z" fill="${paint('shell')}"/>
<path d="M101 132 Q160 147 219 132 L201 154 Q160 164 113 154Z" fill="${paint('roof')}"/>
<path d="M119 248 Q160 258 207 248 L219 266 Q160 281 101 266Z" fill="${paint('roof')}"/>
<path d="M201 154 219 135 219 105 209 108 209 133 200 153 200 249 210 268 210 295 Q218 293 219 290 L219 266 207 248Z" fill="${tint(-.35)}" opacity=".5"/>
<path d="M119 159 113 246" stroke="${tint(.46)}" stroke-width="2" opacity=".65"/>
<path d="M101 286 Q160 303 219 286 L219 296 Q214 309 160 309 Q106 309 101 296Z" fill="${paint('cap')}"/>
<path d="M104 286 Q160 301 216 286" fill="none" stroke="${tint(.3)}" stroke-width="1.5"/>
<!-- Screw-top cup: elliptical top and curved lower seam share the body axis. -->
<path d="M98 84 Q160 68 222 84 L222 112 Q218 128 160 128 Q102 128 98 112Z" fill="${paint('cap')}"/>
<ellipse cx="160" cy="84" rx="62" ry="15" fill="#526c55"/>
<ellipse cx="160" cy="83" rx="51" ry="10" fill="#3a5240" stroke="#6c8267" stroke-width="1"/>
<path d="M102 109 Q160 125 218 109" fill="none" stroke="#7f9277" stroke-opacity=".5" stroke-width="1.5"/>
<path d="m112 96 0 10 m8-8 0 10 m8-8 0 10 m64-1 0-10 m8 8 0-10 m8 8 0-10" stroke="#a7b29b" stroke-opacity=".25" stroke-width="2"/>
<text x="160" y="211" text-anchor="middle" fill="#e2e5cf" font-size="12" font-family="serif" letter-spacing="1.5">everday</text>`;
if(p.type==='cutlery') shape=`<ellipse cx="160" cy="292" rx="85" ry="12" fill="#000" opacity=".08"/><rect x="83" y="83" width="154" height="208" rx="35" fill="${c}" transform="rotate(-10 160 187)"/><rect x="103" y="91" width="114" height="190" rx="25" fill="#e2d6b9" transform="rotate(-10 160 187)"/><path d="M140 115 V250 M130 115 V151 Q140 168 150 151 V115 M140 114 V152 M183 164 V250 M183 110 Q160 119 173 151 Q184 173 193 151 Q205 121 183 110" stroke="#7b8064" fill="none" stroke-width="7" stroke-linecap="round"/>`;
return `<svg class="product-art" viewBox="0 0 320 360" role="img" aria-label="${p.color} ${p.name}"><defs>${materials}<filter id="${id}-shadow"><feDropShadow dx="3" dy="8" stdDeviation="7" flood-opacity=".1"/></filter></defs><g filter="${paint('shadow')}">${shape}</g></svg>`; }
