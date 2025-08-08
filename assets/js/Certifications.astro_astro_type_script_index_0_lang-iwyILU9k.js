import{s as n}from"./config-BoRI59bw.js";const i=document.getElementById("certs-container"),s=document.getElementById("cert-modal"),d=document.getElementById("close-cert-modal"),c=document.getElementById("cert-modal-content"),m=l=>{const e=n.certifications[l];!e||!s||!c||(c.innerHTML=`
    <div class="space-y-6">
      <div class="flex items-start gap-3">
  ${e.logo?`<img src="${e.logo}" alt="${e.issuer} logo" class="w-16 h-16 object-contain rounded" />`:""}
        <div>
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">${e.name}</h3>
          <p class="text-base sm:text-lg" style="color: ${n.accentColor}">${e.issuer}</p>
          ${e.date?`<p class="text-sm text-gray-600 mt-1">${e.date}</p>`:""}
        </div>
      </div>

  ${e.description?`<p class="text-lg text-black leading-relaxed mb-2">${e.description}</p>`:""}

      ${e.documents?.length||e.fullDescription?`
        <div class="bg-teal-50 rounded-lg p-6">
          ${e.fullDescription?`<p class="text-base text-gray-700 leading-relaxed mb-6">${e.fullDescription}</p>`:""}

          ${e.documents?.length?`
            <div>
              <h4 class="text-xl font-semibold text-gray-900 mb-3">Documents</h4>
              <ul class="space-y-2">
                ${e.documents.map(t=>`
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-base text-gray-700 hover:text-blue-600 transition-colors duration-300" style="--accent-color: ${n.accentColor}">
                      <span>${t.label}</span>
                      <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14"/></svg>
                    </a>
                  </li>
                `).join("")}
              </ul>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `,s.classList.remove("hidden"),document.body.style.overflow="hidden")};i?.querySelectorAll(".cert-item").forEach((l,e)=>{const t=l.querySelector(".cert-title-link"),o=n.certifications[e];Array.isArray(o?.documents)&&o.documents.length>0&&o.documents.length===1&&o.documents[0],t&&t.getAttribute("data-open-modal")==="true"&&t.addEventListener("click",r=>{r.preventDefault(),m(e)})});const a=()=>{s?.classList.add("hidden"),document.body.style.overflow="auto"};d?.addEventListener("click",a);s?.addEventListener("click",l=>l.target===s&&a());
