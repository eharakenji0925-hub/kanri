/* ============================================
   AXISCORE pickleball — Site Logic
   Charcoal × Acid Lime palette.
   Purchases handled on BASE: https://axiscore.base.shop/
   ============================================ */

const BASE_SHOP_URL = 'https://axiscore.base.shop/';
const ACCENT_LIME = '#D8FF1A';

// ===== Product Database =====
const PRODUCTS = {
  'p001': {
    id: 'p001', name: 'AXIS / 01', nameJp: 'カーボンラケット',
    category: 'racket', categoryLabel: 'RACKET',
    price: 24800, oldPrice: 29800, badge: 'NEW',
    desc: 'AXISCORE のフラッグシップ・カーボンラケット。スイング軸を最適化した薄型コア構造で、シャープなコントロールと打感を両立。',
    image: 'paddle-01',
    baseUrl: BASE_SHOP_URL
  },
  'p002': {
    id: 'p002', name: 'AIR / 02', nameJp: '軽量モデル',
    category: 'racket', categoryLabel: 'RACKET',
    price: 18800, oldPrice: null, badge: null,
    desc: 'グラファイト製の軽量モデル。長時間プレイでも疲れにくい、ニュートラルなフォルム。',
    image: 'paddle-02',
    baseUrl: BASE_SHOP_URL
  },
  'p003': {
    id: 'p003', name: 'CORE / Kit', nameJp: 'スターターキット',
    category: 'set', categoryLabel: 'KIT',
    price: 12800, oldPrice: 16800, badge: 'KIT',
    desc: 'ラケット2本・公式ボール4個・収納バッグの入門キット。AXISCORE の世界観をそのまま体験できる完全セット。',
    image: 'set',
    baseUrl: BASE_SHOP_URL
  },
  'p004': {
    id: 'p004', name: 'BALL / Outdoor', nameJp: '屋外用ボール 12個',
    category: 'ball', categoryLabel: 'BALL',
    price: 3200, oldPrice: null, badge: null,
    desc: '屋外用公式ボール。風の影響を抑える穴設計と、安定した飛びを実現する密度バランス。',
    image: 'balls-out',
    baseUrl: BASE_SHOP_URL
  },
  'p005': {
    id: 'p005', name: 'POWER / 03', nameJp: 'ミッドレンジモデル',
    category: 'racket', categoryLabel: 'RACKET',
    price: 21800, oldPrice: null, badge: null,
    desc: 'パワーとコントロールの中間に位置するバランス型。中級者の技術が伸びる「拡張する軸」。',
    image: 'paddle-03',
    baseUrl: BASE_SHOP_URL
  },
  'p006': {
    id: 'p006', name: 'BALL / Indoor', nameJp: '屋内用ボール 6個',
    category: 'ball', categoryLabel: 'BALL',
    price: 1980, oldPrice: null, badge: null,
    desc: '屋内専用ボール。柔らかな打音と滑らかな転がりで、室内コートでのラリーを快適に。',
    image: 'balls-in',
    baseUrl: BASE_SHOP_URL
  },
  'p007': {
    id: 'p007', name: 'TOUR / Bag', nameJp: 'プロツアーバッグ',
    category: 'accessory', categoryLabel: 'BAG',
    price: 8800, oldPrice: 10800, badge: null,
    desc: 'ラケット6本収納可能なツアーバッグ。装飾を排した、ミニマルで機能美のあるシルエット。',
    image: 'bag',
    baseUrl: BASE_SHOP_URL
  },
  'p008': {
    id: 'p008', name: 'GRIP / Premium', nameJp: 'グリップテープ 3本',
    category: 'accessory', categoryLabel: 'GRIP',
    price: 1480, oldPrice: null, badge: null,
    desc: '吸湿速乾素材のグリップテープ3本セット。手のひらの触感を、設計の起点に。',
    image: 'grip',
    baseUrl: BASE_SHOP_URL
  },
  'p009': {
    id: 'p009', name: 'TEE / Dri-Fit', nameJp: 'スポーツTシャツ',
    category: 'apparel', categoryLabel: 'APPAREL',
    price: 4200, oldPrice: null, badge: 'NEW',
    desc: '高吸汗速乾素材のスポーツTシャツ。コートでもスタジオでも着られる、AXISCORE のクロスオーバーウェア。',
    image: 'shirt',
    baseUrl: BASE_SHOP_URL
  }
};

// ===== Brand Logo Mark — uses currentColor, adapts to section bg =====
const BRAND_MARK_SVG = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.85">
    <path d="M 100 18 C 150 18, 182 50, 182 100 C 182 150, 150 182, 100 182 C 50 182, 18 150, 18 100 C 18 50, 50 18, 100 18 Z"/>
    <path d="M 100 22 C 148 22, 178 52, 178 100 C 178 148, 148 178, 100 178 C 52 178, 22 148, 22 100 C 22 52, 52 22, 100 22 Z" opacity="0.4"/>
  </g>
  <g fill="currentColor" font-family="Cormorant Garamond, serif">
    <text x="100" y="74" text-anchor="middle" font-size="9" letter-spacing="2.5">PICKLEBALL</text>
    <text x="100" y="106" text-anchor="middle" font-size="22" letter-spacing="2.5" font-weight="500">AXISCORE</text>
    <text x="100" y="128" text-anchor="middle" font-size="7" letter-spacing="2.5" opacity="0.7">SINCE 2026</text>
  </g>
  <circle cx="100" cy="156" r="2.2" fill="${ACCENT_LIME}"/>
</svg>`;

const BRAND_MARK_SMALL_SVG = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.9">
    <path d="M 100 18 C 150 18, 182 50, 182 100 C 182 150, 150 182, 100 182 C 50 182, 18 150, 18 100 C 18 50, 50 18, 100 18 Z"/>
  </g>
  <g fill="currentColor" font-family="Cormorant Garamond, serif">
    <text x="100" y="78" text-anchor="middle" font-size="11" letter-spacing="2">PICKLEBALL</text>
    <text x="100" y="110" text-anchor="middle" font-size="22" letter-spacing="2" font-weight="500">AXISCORE</text>
    <text x="100" y="132" text-anchor="middle" font-size="9" letter-spacing="2.5" opacity="0.7">SINCE 2026</text>
  </g>
  <circle cx="100" cy="158" r="2.4" fill="${ACCENT_LIME}"/>
</svg>`;

// ===== Product SVGs — minimal line-art on dark, with lime accent on key models =====
const SVG_ILLUSTRATIONS = {
  'paddle-01': `<svg viewBox="0 0 200 270" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1">
      <ellipse cx="100" cy="100" rx="78" ry="92"/>
      <ellipse cx="100" cy="100" rx="68" ry="82" opacity="0.25"/>
      <line x1="100" y1="190" x2="100" y2="252" stroke-width="6"/>
      <rect x="92" y="248" width="16" height="14" rx="2" fill="currentColor"/>
    </g>
    <text x="100" y="105" text-anchor="middle" font-family="Cormorant Garamond, serif" font-style="italic" font-size="14" letter-spacing="2" fill="${ACCENT_LIME}">AXIS / 01</text>
  </svg>`,

  'paddle-02': `<svg viewBox="0 0 200 270" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1">
      <ellipse cx="100" cy="100" rx="78" ry="92"/>
      <ellipse cx="100" cy="100" rx="68" ry="82" opacity="0.25"/>
      <line x1="100" y1="190" x2="100" y2="252" stroke-width="6"/>
      <rect x="92" y="248" width="16" height="14" rx="2" fill="currentColor"/>
    </g>
    <text x="100" y="105" text-anchor="middle" font-family="Cormorant Garamond, serif" font-style="italic" font-size="14" letter-spacing="2" fill="currentColor" opacity="0.7">AIR / 02</text>
  </svg>`,

  'paddle-03': `<svg viewBox="0 0 200 270" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1">
      <ellipse cx="100" cy="100" rx="78" ry="92"/>
      <ellipse cx="100" cy="100" rx="68" ry="82" opacity="0.25"/>
      <line x1="100" y1="190" x2="100" y2="252" stroke-width="6"/>
      <rect x="92" y="248" width="16" height="14" rx="2" fill="currentColor"/>
    </g>
    <text x="100" y="105" text-anchor="middle" font-family="Cormorant Garamond, serif" font-style="italic" font-size="13" letter-spacing="2" fill="${ACCENT_LIME}">POWER / 03</text>
  </svg>`,

  'set': `<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1">
      <g transform="rotate(-12 80 90)">
        <ellipse cx="80" cy="90" rx="50" ry="60"/>
        <line x1="80" y1="150" x2="80" y2="200" stroke-width="4"/>
      </g>
      <g transform="rotate(12 160 90)">
        <ellipse cx="160" cy="90" rx="50" ry="60"/>
        <line x1="160" y1="150" x2="160" y2="200" stroke-width="4"/>
      </g>
    </g>
    <circle cx="120" cy="180" r="14" fill="${ACCENT_LIME}"/>
    <g fill="#1A1A1A" opacity="0.55">
      <circle cx="116" cy="176" r="0.8"/>
      <circle cx="124" cy="178" r="0.8"/>
      <circle cx="120" cy="184" r="0.8"/>
      <circle cx="114" cy="184" r="0.8"/>
      <circle cx="126" cy="184" r="0.8"/>
    </g>
  </svg>`,

  'balls-out': `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="65" cy="80" r="42" fill="${ACCENT_LIME}"/>
    <circle cx="135" cy="120" r="42" fill="${ACCENT_LIME}" opacity="0.85"/>
    <circle cx="105" cy="55" r="32" fill="${ACCENT_LIME}" opacity="0.7"/>
    <g fill="#1A1A1A" opacity="0.65">
      <circle cx="55" cy="70" r="1.6"/><circle cx="75" cy="68" r="1.6"/><circle cx="50" cy="88" r="1.6"/>
      <circle cx="78" cy="92" r="1.6"/><circle cx="65" cy="82" r="1.6"/><circle cx="68" cy="98" r="1.6"/>
      <circle cx="125" cy="110" r="1.6"/><circle cx="148" cy="118" r="1.6"/><circle cx="120" cy="132" r="1.6"/>
      <circle cx="148" cy="132" r="1.6"/><circle cx="135" cy="124" r="1.6"/><circle cx="138" cy="142" r="1.6"/>
      <circle cx="98" cy="48" r="1.6"/><circle cx="112" cy="52" r="1.6"/><circle cx="100" cy="62" r="1.6"/>
      <circle cx="110" cy="64" r="1.6"/>
    </g>
  </svg>`,

  'balls-in': `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1">
      <circle cx="80" cy="100" r="42"/>
      <circle cx="140" cy="80" r="32"/>
    </g>
    <g fill="currentColor" opacity="0.55">
      <circle cx="68" cy="92" r="2.2"/><circle cx="92" cy="86" r="2.2"/><circle cx="64" cy="112" r="2.2"/>
      <circle cx="94" cy="118" r="2.2"/><circle cx="80" cy="106" r="2.2"/>
      <circle cx="130" cy="74" r="2.2"/><circle cx="148" cy="82" r="2.2"/><circle cx="134" cy="92" r="2.2"/>
    </g>
  </svg>`,

  'bag': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1">
      <path d="M 30 70 Q 30 60 40 60 L 160 60 Q 170 60 170 70 L 165 170 Q 165 180 155 180 L 45 180 Q 35 180 35 170 Z"/>
      <rect x="50" y="80" width="100" height="36" rx="2" fill="${ACCENT_LIME}" stroke="${ACCENT_LIME}"/>
      <rect x="60" y="130" width="80" height="34" rx="2" opacity="0.5"/>
      <path d="M 70 40 Q 70 30 80 30 L 120 30 Q 130 30 130 40 L 130 60" stroke-width="3"/>
    </g>
    <text x="100" y="103" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="11" letter-spacing="3" fill="#1A1A1A" font-weight="500">AXISCORE</text>
  </svg>`,

  'grip': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1">
      <rect x="60" y="40" width="20" height="120" rx="2"/>
      <rect x="90" y="40" width="20" height="120" rx="2" stroke="${ACCENT_LIME}" fill="${ACCENT_LIME}" opacity="0.7"/>
      <rect x="120" y="40" width="20" height="120" rx="2"/>
    </g>
    <g stroke="currentColor" stroke-width="0.5" opacity="0.4" fill="none">
      <line x1="60" y1="55" x2="80" y2="50"/><line x1="60" y1="75" x2="80" y2="70"/><line x1="60" y1="95" x2="80" y2="90"/>
      <line x1="60" y1="115" x2="80" y2="110"/><line x1="60" y1="135" x2="80" y2="130"/><line x1="60" y1="155" x2="80" y2="150"/>
      <line x1="120" y1="55" x2="140" y2="50"/><line x1="120" y1="75" x2="140" y2="70"/><line x1="120" y1="95" x2="140" y2="90"/>
      <line x1="120" y1="115" x2="140" y2="110"/><line x1="120" y1="135" x2="140" y2="130"/><line x1="120" y1="155" x2="140" y2="150"/>
    </g>
  </svg>`,

  'shirt': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" stroke-width="1">
      <path d="M 50 50 L 70 40 L 90 50 Q 100 60 110 50 L 130 40 L 150 50 L 165 70 L 145 80 L 145 170 Q 145 175 140 175 L 60 175 Q 55 175 55 170 L 55 80 L 35 70 Z"/>
      <path d="M 90 50 Q 100 60 110 50 L 110 65 Q 100 70 90 65 Z" fill="currentColor"/>
    </g>
    <text x="100" y="125" text-anchor="middle" font-family="Cormorant Garamond, serif" font-style="italic" font-size="13" letter-spacing="3" fill="${ACCENT_LIME}">AXISCORE</text>
  </svg>`
};

function getSvg(key) { return SVG_ILLUSTRATIONS[key] || SVG_ILLUSTRATIONS['paddle-01']; }

// ===== Render helpers =====
function renderProductCard(p) {
  const oldPriceHtml = p.oldPrice
    ? `<span class="old">¥${p.oldPrice.toLocaleString()}</span>` : '';
  const badgeHtml = p.badge ? `<span class="badge">${p.badge}</span>` : '';
  return `
    <a href="product-detail.html?id=${p.id}" class="product-card">
      <div class="img-wrap">
        ${badgeHtml}
        ${getSvg(p.image)}
      </div>
      <div class="cat">${p.categoryLabel}</div>
      <h3>${p.name}</h3>
      <div class="name-jp">${p.nameJp}</div>
      <div class="price"><span class="yen">¥</span>${p.price.toLocaleString()}${oldPriceHtml}</div>
    </a>
  `;
}

function renderFeatured() {
  const container = document.querySelector('[data-featured-products]');
  if (!container) return;
  const ids = ['p001', 'p002', 'p003', 'p005'];
  container.innerHTML = ids.map(id => renderProductCard(PRODUCTS[id])).join('');
}

function renderAllProducts(filterCategory = 'all') {
  const container = document.querySelector('[data-all-products]');
  if (!container) return;
  let products = Object.values(PRODUCTS);
  if (filterCategory !== 'all') {
    products = products.filter(p => p.category === filterCategory);
  }
  container.innerHTML = products.map(p => renderProductCard(p)).join('');
  const countEl = document.querySelector('[data-results-count]');
  if (countEl) countEl.textContent = String(products.length).padStart(2, '0');
}

function renderProductDetail() {
  const container = document.querySelector('[data-product-detail]');
  if (!container) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id') || 'p001';
  const p = PRODUCTS[id];
  if (!p) {
    container.innerHTML = '<p style="text-align:center;padding:80px 0;">Product not found.</p>';
    return;
  }

  document.title = `${p.name} ${p.nameJp} | AXISCORE pickleball`;

  const oldPriceHtml = p.oldPrice ? `<span class="old">¥${p.oldPrice.toLocaleString()}</span>` : '';

  container.innerHTML = `
    <div class="detail-gallery">
      <div class="gallery-main">${getSvg(p.image)}</div>
      <div class="gallery-thumbs">
        <div class="gallery-thumb active">${getSvg(p.image)}</div>
        <div class="gallery-thumb">${getSvg(p.image)}</div>
        <div class="gallery-thumb">${getSvg(p.image)}</div>
        <div class="gallery-thumb">${getSvg(p.image)}</div>
      </div>
    </div>
    <div class="detail-info">
      <div class="cat-tag">${p.categoryLabel}</div>
      <h1>${p.name}</h1>
      <div class="name-jp">${p.nameJp}</div>
      <div class="price"><span class="yen">¥</span>${p.price.toLocaleString()}${oldPriceHtml}</div>
      <p class="description">${p.desc}</p>

      <div class="features-block">
        <h4>Design Features</h4>
        <ul>
          <li>軸（AXIS）に基づく重心設計で、ニュートラルな振り抜き</li>
          <li>カーボン素材によるシャープな打感とコントロール性能</li>
          <li>ハニカム構造のコアで反発力と安定性を両立</li>
          <li>USAPA / IFP公認モデル。公式トーナメント対応</li>
        </ul>
      </div>

      <div class="purchase-row">
        <a href="${p.baseUrl}" class="btn-shop" target="_blank" rel="noopener">Shop on BASE →</a>
      </div>

      <table class="spec-table">
        <tr><th>Size</th><td>406mm × 200mm</td></tr>
        <tr><th>Weight</th><td>225g (±5g)</td></tr>
        <tr><th>Face</th><td>T700 Carbon Fiber</td></tr>
        <tr><th>Core</th><td>Polymer Honeycomb 13mm</td></tr>
        <tr><th>Grip</th><td>4.0 inch / 140mm</td></tr>
        <tr><th>Certification</th><td>USAPA / IFP Approved</td></tr>
        <tr><th>Made in</th><td>Japan — Designed by AXISCORE</td></tr>
      </table>
    </div>
  `;
}

function renderBrandMarks() {
  document.querySelectorAll('[data-brand-mark="hero"]').forEach(el => { el.innerHTML = BRAND_MARK_SVG; });
  document.querySelectorAll('[data-brand-mark="small"]').forEach(el => { el.innerHTML = BRAND_MARK_SMALL_SVG; });
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  if (filterButtons.length === 0) return;
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAllProducts(btn.dataset.filter);
    });
  });
}

function setupFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) q.addEventListener('click', () => item.classList.toggle('open'));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBrandMarks();
  renderFeatured();
  renderProductDetail();
  if (document.querySelector('[data-all-products]')) {
    renderAllProducts('all');
    setupFilters();
  }
  setupFAQ();
});
