import{s as h}from"./config-c9PVx6gu.js";const c=document.getElementById("load-more-btn"),s=document.querySelectorAll(".project-item"),r=document.getElementById("project-modal"),g=document.getElementById("modal-content"),p=document.getElementById("close-modal");let n=5;const v=(l,e)=>{const t=document.createElement("div");if(t.className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center p-4",t.innerHTML=`
    <div class="relative max-w-6xl max-h-full">
      <button class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" onclick="this.closest('.fixed').remove()">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="text-center">
        <img src="${l}" alt="Project Image" class="max-w-full max-h-[80vh] object-contain rounded-lg ${e?"mb-4":""}" id="lightbox-image" loading="eager" />
        ${e?`<div id="caption-container"><p class="text-white text-lg bg-black bg-opacity-50 px-6 py-3 rounded-lg inline-block text-center" id="image-caption">${e}</p></div>`:""}
      </div>
    </div>
  `,t.onclick=o=>o.target===t&&t.remove(),document.body.appendChild(t),e){const o=t.querySelector("#lightbox-image"),a=t.querySelector("#image-caption"),i=()=>{const d=o?.offsetWidth;d>0&&a&&(a.style.width=`${d}px`,a.style.maxWidth=`${d}px`,a.style.boxSizing="border-box")};o?.complete&&o.offsetWidth>0?requestAnimationFrame(i):o&&(o.onload=()=>requestAnimationFrame(i))}};c&&s.length>5&&c.addEventListener("click",()=>{const l=Math.min(s.length-n,5);for(let e=n;e<n+l;e++)s[e]?.classList.remove("hidden"),s[e]?.classList.add("animate-fade-in");n+=l,n>=s.length&&(c.style.display="none")});const u=l=>{if(!r||!g)return;const e=h.projects[l];e&&(g.innerHTML=`
    <div class="space-y-6">
      ${e.image?`
        <div class="rounded-lg overflow-hidden">
          <img src="${e.image}" alt="${e.name}" class="w-full h-64 sm:h-80 object-cover" />
        </div>
      `:""}
      
      <div>
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">${e.name}</h3>
        <p class="text-lg text-black leading-relaxed mb-6">${e.fullDescription}</p>
        
        <div class="bg-teal-50 rounded-lg p-6 mb-6">
          ${e.dataAndTools?.length>0?`
            <div class="mb-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-3">Data and tools</h4>
              <ul class="space-y-2">
                ${e.dataAndTools.map(t=>`
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-gray-700">${t}</span>
                  </li>
                `).join("")}
              </ul>
            </div>
          `:""}
          
          ${e.gallery?.length>0?`
            <div class="mb-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-3">Project gallery</h4>
              <div class="${e.gallery.length===1?"grid grid-cols-1 gap-4":"grid grid-cols-1 sm:grid-cols-2 gap-4"}">
                ${e.gallery.map((t,o)=>{const a=Array.isArray(t)?t[0]:t,i=Array.isArray(t)?t[1]:void 0;return`
                    <div class="rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 gallery-image" data-image-src="${a}" ${i?`data-caption="${i}"`:""}>
                      <img src="${a}" alt="${e.name} - Image ${o+1}" class="w-full ${e.gallery.length===1?"h-auto":"h-48"} object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                  `}).join("")}
              </div>
            </div>
          `:""}
          
          ${e.methodology?`
            <div class="mb-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-3">Method</h4>
              <p class="text-base text-gray-700 leading-relaxed">${e.methodology}</p>
            </div>
          `:""}
          
          ${e.results?`
            <div class="${e.methodology?"mb-0":"mb-6"}">
              <h4 class="text-xl font-semibold text-gray-900 mb-3">Results</h4>
              <p class="text-base text-gray-700 leading-relaxed">${e.results}</p>
            </div>
          `:""}
        </div>
        
        <div class="flex flex-wrap gap-2 mb-6">
          ${e.skills?.map(t=>`<span class="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-sm font-medium">${t}</span>`).join("")||""}
        </div>
        
        ${e.link?.trim()?`
          <div class="pt-4">
            <a 
              href="${e.link}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
            >
              <span>View project</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        `:""}
      </div>
    </div>
  `,r.classList.remove("hidden"),document.body.style.overflow="hidden",g.querySelectorAll(".gallery-image").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-image-src"),a=t.getAttribute("data-caption");o&&v(o,a||void 0)})}))};s.forEach((l,e)=>{const t=l.querySelector(".project-title"),o=l.querySelector(".project-button");[t,o].forEach(a=>{a?.addEventListener("click",()=>u(e))})});const m=()=>{r?.classList.add("hidden"),document.body.style.overflow="auto"};p?.addEventListener("click",m);r?.addEventListener("click",l=>l.target===r&&m());
