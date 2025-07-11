(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i={state:[],init:()=>{let e=localStorage.getItem(`cart`);i.state=e?JSON.parse(e):[],console.log(i.state),e||localStorage.setItem(`cart`,JSON.stringify(i.state))},setState:e=>{i.state=[...e],localStorage.setItem(`cart`,JSON.stringify(i.state))}};var a=i;async function o(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function s(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function c(){let e=await fetch(`/api/categories`);return await e.json()}const l=[{value:`10`,label:`10개`},{value:`20`,label:`20개`},{value:`50`,label:`50개`},{value:`100`,label:`100개`}],u=[{value:`price_asc`,label:`가격 낮은순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}],d=({isLoading:e,categories:t={},search:n,selectedLimit:r,selectedSort:i})=>{let a=new URLSearchParams(window.location.search),o=a.get(`category1`),s=a.get(`category2`),c=()=>{let e=[`<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>`];return o&&e.push(`<span class="text-xs text-gray-500">&gt;</span>
                   <button data-breadcrumb="category1" data-category1="${o}" class="text-xs hover:text-blue-800 hover:underline">${o}</button>`),s&&e.push(`<span class="text-xs text-gray-500">&gt;</span>
                   <button data-breadcrumb="category2" data-category2="${s}" class="text-xs hover:text-blue-800 hover:underline">${s}</button>`),e.join(``)},d=()=>e&&Object.keys(t).length===0?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:o?Object.keys(t[o]).map(e=>`<button data-category2="${e}" class="category2-filter-btn ${f}">${e}</button>`).join(``):Object.keys(t).map(e=>`<button data-category1="${e}" class="category1-filter-btn ${f}">${e}</button>`).join(``),f=`text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50`;return`
    <section class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <div class="mb-4 relative">
        <input
          type="text"
          id="search-input"
          value="${n}"
          placeholder="상품명을 검색해보세요..."
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <!-- 카테고리 필터 -->
      <div class="space-y-2 mb-3">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">카테고리:</label>
          ${c()}
        </div>
        <div class="flex flex-wrap gap-2">${d()}</div>
      </div>

      <!-- 개수 및 정렬 -->
      <div class="flex gap-2 items-center justify-between">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">개수:</label>
          <select
            id="limit-select"
            class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            ${l.map(e=>`
                  <option value="${e.value}" ${r===e.value?`selected`:``}>
                    ${e.label}
                  </option>
                `).join(``)}
          </select>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">정렬:</label>
          <select
            id="sort-select"
            class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            ${u.map(e=>`
                  <option value="${e.value}" ${i===e.value?`selected`:``}>
                    ${e.label}
                  </option>
                `).join(``)}
          </select>
        </div>
      </div>
    </section>
  `},f=()=>{let e=a.state.length;return console.log(e),`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">쇼핑몰</a>
          </h1>
          <div class="flex items-center space-x-2">
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                />
              </svg>

              <span
                id="cart-count"
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ${e===0?`hidden`:``}"
                >${e}</span
              >
            </button>
          </div>
        </div>
      </div>
    </header>
  `},p=()=>`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `,m=({children:e})=>`
    <div class="min-h-screen bg-gray-50">
      ${f()}
      <main class="max-w-md mx-auto px-4 py-4">${e}</main>
      ${p()}
      <div id="modal-portal"></div>
    </div>
  `;function h(e){let t=new Intl.NumberFormat;return t.format(typeof e==`string`?+e:e)}const g=({product:e})=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
         data-product-id="${e.productId}">
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img src="${e.image}"
             alt="${e.title}"
             class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
             loading="lazy">
      </div>
      
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            ${e.title}
          </h3>
          <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
          <p class="text-lg font-bold text-gray-900">
            ${h(e.lprice)}원
          </p>
        </div>
        <!-- 장바구니 버튼 -->
        <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                       hover:bg-blue-700 transition-colors add-to-cart-btn"
                data-product-id="${e.productId}">
          장바구니 담기
        </button>
      </div>
    </div>
  `,ee=()=>Array.from({length:4}).map(()=>`
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse mb-4">
        <div class="aspect-square bg-gray-200"></div>
        <div class="p-3">
          <div class="h-4 bg-gray-200 rounded mb-2"></div>
          <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
          <div class="h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    `).join(``),te=({products:e=[],total:t=0,isLoading:n=!1})=>`
    <section class="mb-6">
      <!-- 상품 개수 정보 -->
      ${n?``:`<div class="mb-4 text-sm text-gray-600">
            총 <span class="font-medium text-gray-900">${t}개</span>의 상품
          </div>`}

      <!-- 상품 그리드 -->
      <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
        ${e.map(e=>g({product:e})).join(``)}
        ${n?ee():``}
      </div>
      ${n?`
          <div class="text-center py-4">
            <div class="inline-flex items-center">
              <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
            </div>
          </div>
        `:``}
    </section>
  `,_=e=>{function t(){v(e);let t=new Map;a.state.forEach(e=>{t.has(e.productId)?t.get(e.productId).quantity+=e.quantity:t.set(e.productId,{...e})}),console.log(`CartModal`,a.state);let n=Array.from(t.values()),r=n.reduce((e,t)=>e+t.quantity,0),i=n.reduce((e,t)=>e+t.lprice*t.quantity,0);v(e,{uniqueCartItems:n,totalQuantity:r,totalPrice:i})}t()};function v(e,{uniqueCartItems:t=[],totalQuantity:n=0,totalPrice:r=0}={}){document.getElementById(`modal-portal`).innerHTML=`
    <div
      class="cart-modal-overlay cart-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
    >
      <div
        class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden"
      >
        <!-- 헤더 -->
        <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
              ></path>
            </svg>
            장바구니
            <span class="text-sm font-normal text-gray-600 ml-1">(${n})</span>
          </h2>
          <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        ${t.length===0?`
          <!-- 빈 장바구니 -->
          <div class="flex flex-col max-h-[calc(90vh-120px)]">
            <div class="flex-1 flex items-center justify-center p-8">
              <div class="text-center">
                <div class="text-gray-400 mb-4">
                  <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6">
                    </path>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
                <p class="text-gray-600">원하는 상품을 담아보세요!</p>
              </div>
            </div>
          </div>
        `:`
        <!-- 장바구니 아이템 목록 -->
        <div class="flex flex-col max-h-[calc(90vh-120px)]">
          <div class="p-4 border-b border-gray-200 bg-gray-50">
            <label class="flex items-center text-sm text-gray-700">
              <input type="checkbox" id="cart-modal-select-all-checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2">
              전체선택 (${n}개)
            </label>
          </div>

          <div class="flex-1 overflow-y-auto">
            <div class="p-4 space-y-4">
              ${t.map(e=>`
              <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e.productId}">
                <label class="flex items-center mr-3">
                  <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" data-product-id="${e.productId}">
                </label>

                <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                  <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${e.productId}">
                </div>

                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${e.productId}">
                    ${e.title}
                  </h4>
                  <p class="text-sm text-gray-600 mt-1">${e.lprice}원</p>
                  <div class="flex items-center mt-2">
                    <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                      </svg>
                    </button>
                    <input type="number" value="${e.quantity}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled data-product-id="${e.productId}">
                    <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="text-right ml-3">
                 <p class="item-price text-sm font-medium text-gray-900" data-product-id="${e.productId}">
                    ${e.lprice*e.quantity}원
                  </p>
                  <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.productId}">
                    삭제
                  </button>
                </div>
              </div>`).join(``)}
            </div>
          </div>
        </div>
        `}

        <!-- 하단 액션 -->
        <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <!-- 선택된 아이템 정보 -->
          <div class="flex justify-between items-center mb-3 text-sm">
            <span class="text-gray-600">선택한 상품 (1개)</span>
            <span class="font-medium">440원</span>
          </div>
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-bold text-gray-900">총 금액</span>
            <span class="text-xl font-bold text-blue-600">${r}원</span>
          </div>
          <div class="space-y-2">
            <button
              id="cart-modal-remove-selected-btn"
              class="w-full bg-red-600 text-white py-2 px-4 rounded-md
                       hover:bg-red-700 transition-colors text-sm"
            >
              선택한 상품 삭제 (1개)
            </button>
            <div class="flex gap-2">
              <button
                id="cart-modal-clear-cart-btn"
                class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm"
              >
                전체 비우기
              </button>
              <button
                id="cart-modal-checkout-btn"
                class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,V(e,v)}function ne(e){let t=document.getElementById(`cart-icon-btn`);t&&(t.onclick=()=>{_(e),b(e),y()})}function y(){let e=document.getElementById(`modal-portal`),t=document.getElementById(`cart-modal-close-btn`),n=document.querySelector(`.cart-modal-overlay`);t&&(t.onclick=()=>{e&&(e.innerHTML=``)}),n&&(n.onclick=t=>{t.target===n&&e&&(e.innerHTML=``)});let r=t=>{t.key===`Escape`&&e&&(e.innerHTML=``,document.onkeydown=null)};document.onkeydown=r}function b(e){let t=new Map;a.state.forEach(e=>{t.set(e.productId,{...e})}),document.querySelectorAll(`.quantity-increase-btn`).forEach(n=>{console.log(`foreach button`,n),n.onclick=()=>{let r=n.dataset.productId,i=document.querySelector(`.quantity-input[data-product-id="${r}"]`),a=document.querySelector(`.item-price[data-product-id="${r}"]`),o=t.get(r);o.quantity+=1,i.value=o.quantity,a.textContent=`${o.lprice*o.quantity}원`,x(t),S(e,r,o.quantity)}}),document.querySelectorAll(`.quantity-decrease-btn`).forEach(n=>{n.onclick=()=>{let r=n.dataset.productId,i=document.querySelector(`.quantity-input[data-product-id="${r}"]`),a=document.querySelector(`.item-price[data-product-id="${r}"]`),o=t.get(r);o.quantity>1&&(--o.quantity,i.value=o.quantity,a.textContent=`${o.lprice*o.quantity}원`,x(t),S(e,r,o.quantity))}}),x(t)}function x(e){let t=Array.from(e.values()).reduce((e,t)=>e+t.lprice*t.quantity,0),n=Array.from(e.values()).reduce((e,t)=>e+t.quantity,0),r=document.querySelector(`.text-xl.font-bold.text-blue-600`),i=document.querySelector(`h2 span`),a=document.querySelector(`#cart-modal-select-all-checkbox`)?.nextSibling;r&&(r.textContent=`${t}원`),i&&(i.textContent=`(${n})`),a&&(a.textContent=`전체선택 (${n}개)`)}function S(e,t,n){a.setState(a.state.map(e=>e.productId===t?{...e,quantity:n}:e)),C()}function C(){let e=document.getElementById(`cart-count`),t=a.state.length;e.textContent=t,t===0?e.classList.add(`hidden`):e.classList.remove(`hidden`)}function w(e){let t=document.querySelectorAll(`.add-to-cart-btn`);t.forEach(t=>{t.onclick=()=>{let n=t.dataset.productId,r=e.products.find(e=>e.productId===n);if(r){let e=a.state.some(e=>e.productId===n);e?a.setState(a.state.map(e=>e.productId===n?{...e,quantity:e.quantity+1}:e)):a.setState([...a.state,{...r,quantity:1}]),localStorage.setItem(`cart`,JSON.stringify(a.state)),C(a.state),D()}}})}function T(e){document.querySelectorAll(`.cart-item-remove-btn`).forEach(t=>{t.onclick=()=>{let n=t.dataset.productId,r=a.state.filter(e=>e.productId!==n);a.setState(r),_(e),C()}})}function E(e){let t=document.querySelector(`#cart-modal-remove-selected-btn`);t&&(t.onclick=()=>{let t=document.querySelectorAll(`.cart-item-checkbox:checked`),n=Array.from(t).map(e=>e.dataset.productId);n.length!==0&&(a.state=a.state.filter(e=>!n.includes(e.productId)),localStorage.setItem(`cart`,JSON.stringify(a.state)),_(e),C())})}function re(){let e=document.querySelector(`#cart-modal-select-all-checkbox`);e&&(e.onchange=()=>{let t=document.querySelectorAll(`.cart-item-checkbox`),n=e.checked;t.forEach(e=>{e.checked=n})},document.querySelectorAll(`.cart-item-checkbox`).forEach(t=>{t.onchange=()=>{let t=document.querySelectorAll(`.cart-item-checkbox`),n=Array.from(t).filter(e=>e.checked).length;n===t.length?e.checked=!0:e.checked=!1}}))}function ie(e){let t=document.getElementById(`cart-modal-clear-cart-btn`);t&&(t.onclick=()=>{a.state=[],_(e),C()})}function D(){let e=document.getElementById(`toast-message`);e&&e.remove();let t=document.createElement(`div`);t.id=`toast-message`,t.className=`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50`,t.innerHTML=`
    <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p class="text-sm font-medium">장바구니에 추가되었습니다</p>
      <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `,document.body.appendChild(t),t.querySelector(`#toast-close-btn`).onclick=()=>{t.remove()},setTimeout(()=>{t.remove()},3e3)}function O(e,t){let n=!1;window.onscroll=async()=>{if(n||e.isLoading||e.allLoaded)return;let r=window.scrollY,i=window.innerHeight,a=document.documentElement.scrollHeight;if(r+i>=a-200){n=!0,e.page++,e.isLoading=!0,t();let r=await o({page:e.page,limit:parseInt(e.selectedLimit,10),search:e.search,category1:e.selectedCategory1,category2:e.selectedCategory2,sort:e.selectedSort});e.products=[...e.products,...r.products],e.total=r.pagination.total,e.allLoaded=e.products.length>=r.pagination.total,e.isLoading=!1,t(),n=!1}}}document.onclick=e=>{let t=e.target.closest(`.product-image, .product-info`);if(t){let e=t.closest(`.product-card`)?.dataset.productId;e&&Z(`/product/${e}`)}};function k(e){let t=new URL(window.location.href),n=t.searchParams;e(n),window.history.replaceState({},``,`${t.pathname}${n.toString()?`?${n}`:``}`)}async function A(e,t,n={}){e.loading=!0,e.page=1,t();let r=await o({page:e.page,limit:e.limit,search:e.search,category1:e.category1,category2:e.category2,sort:e.selectedSort,...n});e.products=r.products,e.total=r.pagination.total,e.allLoaded=e.products.length>=r.pagination.total,e.loading=!1,t()}async function j(e,t,n){let r=e.trim().toLowerCase();k(e=>{r?e.set(`search`,r):e.delete(`search`)}),t.search=r,await A(t,n)}function M(e,t){let n=document.querySelectorAll(`.category1-filter-btn`);n.forEach(n=>{n.onclick=()=>{let r=n.dataset.category1;k(e=>{r?(e.set(`category1`,r),e.delete(`category2`)):(e.delete(`category1`),e.delete(`category2`))}),e.category1=r,e.category2=``,A(e,t)}})}function N(e,t){let n=document.querySelectorAll(`.category2-filter-btn`);n.forEach(n=>{n.onclick=()=>{let r=n.dataset.category2;k(e=>{r?e.set(`category2`,r):e.delete(`category2`)}),e.category2=r,A(e,t)}})}function P(e,t){document.querySelectorAll(`button[data-breadcrumb="reset"]`).forEach(n=>{n.onclick=()=>{k(e=>{e.delete(`category1`),e.delete(`category2`)}),A(e,t,{page:1,limit:parseInt(e.selectedLimit,10),search:e.search,sort:e.selectedSort,category1:``,category2:``})}})}function F(e,t){document.querySelectorAll(`button[data-breadcrumb="category1"]`).forEach(n=>{n.onclick=()=>{k(e=>{e.delete(`category2`)}),A(e,t,{page:1,limit:parseInt(e.selectedLimit,10),search:e.search,sort:e.selectedSort,category1:e.category1,category2:``})}})}function I(e,t){let n=document.getElementById(`limit-select`);n&&(n.onchange=async n=>{let r=n.target.value;e.selectedLimit=r;let i=new URL(window.location.href),a=i.searchParams;r?a.set(`limit`,r):a.delete(`limit`),window.history.replaceState({},``,`${i.pathname}${a.toString()?`?${a}`:``}`),e.page=1,e.loading=!0,t();let s=await o({page:e.page,limit:e.selectedLimit,search:e.search,category1:e.category1,category2:e.category2,sort:e.selectedSort});e.allLoaded=!1,e.products=s.products,e.total=s.pagination.total,e.loading=!1,e.allLoaded=e.products.length>=s.pagination.total,t()})}function L(e,t){let n=document.getElementById(`sort-select`);n&&(n.onchange=async n=>{let r=n.target.value;e.selectedSort=r;let i=new URL(window.location.href),a=i.searchParams;r?a.set(`sort`,r):a.delete(`sort`),window.history.replaceState({},``,`${i.pathname}${a.toString()?`?${a}`:``}`),e.page=1,e.loading=!0,t();let s=await o({page:e.page,limit:e.selectedLimit,search:e.search,category1:e.category1,category2:e.category2,sort:e.selectedSort});e.products=s.products,e.total=s.pagination.total,e.loading=!1,e.allLoaded=e.products.length>=s.pagination.total,t()})}function R(){document.querySelectorAll(`.breadcrumb-link`).forEach(e=>{e.onclick=()=>{if(e.dataset.category2){let t=e.dataset.category1||``;Z(`/?category1=${encodeURIComponent(t)}&category2=${encodeURIComponent(e.dataset.category2)}`);return}e.dataset.category1&&Z(`/?category1=${encodeURIComponent(e.dataset.category1)}`)}})}function z(){let e=document.getElementById(`related-products-list`);e&&(e.onclick=e=>{let t=e.target.closest(`.related-product-card`);t&&t.dataset.productId&&Z(`/product/${t.dataset.productId}`)})}function B(e){let t=document.getElementById(`quantity-increase`),n=document.getElementById(`quantity-decrease`),r=document.getElementById(`quantity-input`),i=document.getElementById(`add-to-cart-btn`);!n||!t||!r||!i||!e.product||(t.onclick=()=>{let e=parseInt(r.value);if(!isNaN(e)){let t=e+1;r.value=t}},n.onclick=()=>{let e=parseInt(r.value);if(!isNaN(e)&&e>1){let t=e-1;r.value=t}},i.onclick=()=>{let t=parseInt(r.value)||1,n=e.product.productId,i=a.state.find(e=>e.productId===n);i?a.setState(a.state.map(e=>e.productId===n?{...e,quantity:e.quantity+t}:e)):a.setState([...a.state,{...e.product,quantity:t}]),localStorage.setItem(`cart`,JSON.stringify(a.state)),C(a.state),D()})}function V(e,t){ne(e),y(),w(e),T(e),ie(e),E(e,t),re(e,t),O(e,t),M(e,t),N(e,t),F(e,t),P(e,t),I(e,t),L(e,t),R(e,t),z(e,t),B(e);let n=document.getElementById(`search-input`);n&&(n.onkeydown=n=>{if(n.key===`Enter`){let r=n.target.value;j(r,e,t)}})}const H={cart:[],cartCount:0,page:1,products:[],categories:[],total:0,isLoading:!0,selectedLimit:`20`,allLoaded:!1,search:``,selectedCategory1:``,selectedCategory2:``,selectedSort:`price_asc`,product:null,relatedProducts:[],selectProduct:null},U=()=>{let e=new URLSearchParams(window.location.search);H.selectedLimit=e.get(`limit`)||`20`,H.selectedSort=e.get(`sort`)||`price_asc`,H.search=e.get(`search`)||``,H.selectedCategory1=e.get(`category1`)||null,H.selectedCategory2=e.get(`category2`)||null,H.isLoading=!0;async function t(){W();let[e,t]=await Promise.all([c(),o({limit:parseInt(H.selectedLimit),search:H.search,category1:H.selectedCategory1,category2:H.selectedCategory2,sort:H.selectedSort})]);H.products=t.products,H.total=t.pagination.total,H.categories=e,H.isLoading=!1,W()}t()};function W(){let e=d({selectedLimit:H.selectedLimit,selectedSort:H.selectedSort,categories:H.categories,search:H.search,isLoading:H.isLoading}),t=te({products:H.products,total:H.total,isLoading:H.isLoading});document.body.querySelector(`#root`).innerHTML=m({children:` ${e} ${t} `}),V(H,W)}function G(){return`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1" />
            </filter>
          </defs>

          <!-- 404 Numbers -->
          <text
            x="160"
            y="85"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="48"
            font-weight="600"
            fill="url(#blueGradient)"
            text-anchor="middle"
          >
            404
          </text>

          <!-- Icon decoration -->
          <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5" />
          <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5" />

          <!-- Message -->
          <text
            x="160"
            y="110"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="14"
            font-weight="400"
            fill="#5f6368"
            text-anchor="middle"
          >
            페이지를 찾을 수 없습니다
          </text>

          <!-- Subtle bottom accent -->
          <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3" />
        </svg>

        <a
          href="/"
          data-link
          class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >홈으로</a
        >
      </div>
    </main>
  `}function K(e){async function t(){q();let t=await s(e);H.product=t,q();let n=await o({category2:t.category2});H.relatedProducts=n.products.filter(e=>e.productId!==t.productId),q()}t()}function q(){document.body.querySelector(`#root`).innerHTML=function(){return H.product?` <div class="min-h-screen bg-gray-50">
      <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
            </div>
            <div class="flex items-center space-x-2">
              <!-- 장바구니 아이콘 -->
              <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                  ></path>
                </svg>
                <span
                  id="cart-count"
                  class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ${a.state.length===0?`hidden`:``}"
                  >${a.state.length}</span
                >
              </button>
            </div>
          </div>
        </div>
      </header>
      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 브레드크럼 -->
        <nav class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category1="생활/건강">${H.product.category1}</button>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category2="생활용품">${H.product.category2}</button>
          </div>
        </nav>
        <!-- 상품 상세 정보 -->
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <!-- 상품 이미지 -->
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src="${H.product.image}"
                alt="${H.product.title}"
                class="w-full h-full object-cover state.product-detail-image"
              />
            </div>
            <!-- 상품 정보 -->
            <div>
              <p class="text-sm text-gray-600 mb-1"></p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${H.product.title}</h1>
              <!-- 평점 및 리뷰 -->
              <div class="flex items-center mb-3">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                </div>
                <span class="ml-2 text-sm text-gray-600">4.0 (749개 리뷰)</span>
              </div>
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${H.product.lprice}원</span>
              </div>
              <!-- 재고 -->
              <div class="text-sm text-gray-600 mb-4">
                <div class="text-sm text-gray-600 mb-4">재고 ${H.product.stock||107}개</div>
              </div>
              <!-- 설명 -->
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                PVC 투명 젤리 쇼핑백 1호 와인 답례품 구디백 비닐 손잡이 미니 간식 선물포장에 대한 상세 설명입니다.
                브랜드의 우수한 품질을 자랑하는 상품으로, 고객 만족도가 높은 제품입니다.
              </div>
            </div>
          </div>
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button
                  id="quantity-decrease"
                  class="w-8 h-8 flex items-center justify-center border border-gray-300
                   rounded-l-md bg-gray-50 hover:bg-gray-100"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input
                  type="number"
                  id="quantity-input"
                  value="1"
                  min="1"
                  max="107"
                  class="w-16 h-8 text-center text-sm border-t border-b border-gray-300
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  id="quantity-increase"
                  class="w-8 h-8 flex items-center justify-center border border-gray-300
                   rounded-r-md bg-gray-50 hover:bg-gray-100"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- 액션 버튼 -->
            <button
              id="add-to-cart-btn"
              data-product-id="85067212996"
              class="w-full bg-blue-600 text-white py-3 px-4 rounded-md
                 hover:bg-blue-700 transition-colors font-medium"
            >
              장바구니 담기
            </button>
          </div>
        </div>
        <!-- 상품 목록으로 이동 -->
        <div class="mb-6">
          <button
            class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md
            hover:bg-gray-200 transition-colors go-to-product-list"
          >
            상품 목록으로 돌아가기
          </button>
        </div>
        <!-- 관련 상품 -->
        ${H.relatedProducts.length===0?``:`
        <div class="bg-white rounded-lg shadow-sm">
          <div class="p-4 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
            <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3 responsive-grid" id="related-products-list">
              ${H.relatedProducts.filter(e=>e.productId!==H.product.id&&(e.category2===H.product.category2||e.category1===H.product.category1)).map(e=>`
                <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
                  <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                    <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
                  </div>
                  <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                  <p class="text-sm font-bold text-blue-600">${e.lprice}원</p>
                </div>
              `).join(``)}
            </div>
          </div>
          </div>
        </div>
      </main>
      <footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>
    </div>
  `}
      </main>
      <div id="modal-portal"></div>
    </div>`:`
        <div class="min-h-screen bg-gray-50">
          <header class="bg-white shadow-sm sticky top-0 z-40">
            <div class="max-w-md mx-auto px-4 py-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <button
                    onclick="window.history.back()"
                    class="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
                </div>
                <div class="flex items-center space-x-2">
                  <!-- 장바구니 아이콘 -->
                  <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main class="max-w-md mx-auto px-4 py-4">
            <div class="py-20 bg-gray-50 flex items-center justify-center">
              <div class="text-center">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p class="text-gray-600">상품 정보를 불러오는 중...</p>
              </div>
            </div>
          </main>
          <footer class="bg-white shadow-sm sticky top-0 z-40">
            <div class="max-w-md mx-auto py-8 text-center text-gray-500">
              <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
            </div>
          </footer>
        </div>
      `}(),V(H,q)}const J=`/front_6th_chapter1-1`,Y=(e=window.location.pathname)=>e.startsWith(J)?e.slice(21)||`/`:e,ae=e=>J+e;console.log(Y);const oe=[{path:/^\/?$/,render:()=>U()},{path:/^\/product\/(\w+)/,render:e=>K(e[1])}];function X(){let e=Y();for(let t of oe){let n=e.match(t.path);if(n)return t.render(n)}document.querySelector(`#root`).innerHTML=G()}function Z(e,{replace:t=!1}={}){let n=ae(e);t?window.history.replaceState({},``,n):window.history.pushState({},``,n),X()}window.onpopstate=X;const Q=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-DvH8zzVn.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));Q().then($),window.onpopstate=()=>{X()};async function $(){X()}a.init(),Q().then($);