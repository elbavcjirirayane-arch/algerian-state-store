// --- AGin State VIP Shop Mock Data ---
const PRODUCTS = [
  {
    id: 1,
    name: 'Sultan Custom VIP',
    category: 'cars',
    price: 25.00,
    description: 'An agile drift sports car featuring custom neon underglow, chrome rims, and unique VIP license plates.',
    image: 'images/car_sultan.png',
    premium: false,
    specs: {
      'Top Speed': '290 km/h',
      'Acceleration': 'S+',
      'Drive Type': 'AWD',
      'Seats': '4'
    }
  },
  {
    id: 2,
    name: 'Osiris Carbon Edition',
    category: 'cars',
    price: 35.00,
    description: 'An elite hypercar built for street racing dominance. Upgraded armor plate chassis and bulletproof tires.',
    image: 'images/car_osiris.png',
    premium: true,
    specs: {
      'Top Speed': '340 km/h',
      'Acceleration': 'SS',
      'Drive Type': 'RWD',
      'Seats': '2'
    }
  },
  {
    id: 3,
    name: 'Buzzard Luxury Heli',
    category: 'cars',
    price: 45.00,
    description: 'Skip highway traffic. A high-altitude civilian transport helicopter with executive leather interior.',
    image: 'images/heli_buzzard.jpg',
    premium: false,
    specs: {
      'Top Speed': '220 km/h',
      'Propulsion': 'Aerial',
      'Storage': 'Large',
      'Seats': '4'
    }
  },
  {
    id: 4,
    name: 'Vinewood Luxury Mansion',
    category: 'houses',
    price: 50.00,
    description: 'A spectacular hillside estate in Vinewood. Includes a 10-car garage, private helipad, infinity pool, and bar.',
    image: 'images/house_mansion.png',
    premium: true,
    specs: {
      'Location': 'Vinewood Hills',
      'Garage Cap': '10 Cars',
      'Helipad': 'Yes',
      'Security': 'Grade A+'
    }
  },
  {
    id: 5,
    name: 'Del Perro Beach Villa',
    category: 'houses',
    price: 40.00,
    description: 'A premium beach villa with direct sand access, lounge decks, private yacht dock, and standard garage.',
    image: 'images/house_beach.jpg',
    premium: false,
    specs: {
      'Location': 'Del Perro Beach',
      'Garage Cap': '4 Cars',
      'Yacht Dock': 'Yes',
      'Security': 'Grade A'
    }
  },
  {
    id: 6,
    name: 'Eclipse Penthouse Suite',
    category: 'houses',
    price: 30.00,
    description: 'A skyscraper penthouse overlooking downtown Los Santos. Includes custom DJ booth and modern styling.',
    image: 'images/house_penthouse.jpg',
    premium: false,
    specs: {
      'Location': 'Eclipse Towers',
      'Garage Cap': '3 Cars',
      'Floors': '2',
      'Security': 'Grade B+'
    }
  },
  {
    id: 7,
    name: 'Cyber Samurai Ped',
    category: 'peds',
    price: 20.00,
    description: 'A high-tech cyberpunk character model skin with animated neon visor textures and custom action posture.',
    image: 'images/ped_samurai.png',
    premium: false,
    specs: {
      'Type': 'Male/Female Skin',
      'Features': 'Neon Textures',
      'Accessories': 'Sword Scabbard',
      'Visor Toggle': 'Yes'
    }
  },
  {
    id: 8,
    name: 'SWAT Special Forces Ped',
    category: 'peds',
    price: 15.00,
    description: 'Fully detailed SWAT character model with bulletproof vest detailing, gear bags, and helmet visor toggles.',
    image: 'images/ped_swat.jpg',
    premium: false,
    specs: {
      'Type': 'Male Skin',
      'Features': 'Modular Vest',
      'Helmets': '4 Options',
      'Camo Style': 'Black/Urban'
    }
  },
  {
    id: 9,
    name: 'Anime Neko Girl Ped',
    category: 'peds',
    price: 25.00,
    description: 'A custom anime-inspired female player model with animated tail/ears and custom emote scripts.',
    image: 'images/ped_neko.jpg',
    premium: false,
    specs: {
      'Type': 'Female Skin',
      'Features': 'Animated Parts',
      'Style': 'Anime/Casual',
      'Emote Commands': 'Yes'
    }
  },
  {
    id: 10,
    name: 'AGin Platinum Pass',
    category: 'bundles',
    price: 80.00,
    description: 'The ultimate VIP pack. Grants Platinum Rank, Priority Queue, Osiris hypercar, Vinewood Mansion, and 2 Peds.',
    image: 'images/bundle_platinum.jpg',
    premium: true,
    specs: {
      'VIP Rank': 'Platinum',
      'Queue Perk': 'Highest Priority',
      'Total Items': '1 Car, 1 House, 2 Peds',
      'Duration': 'Lifetime'
    }
  },
  {
    id: 11,
    name: 'Priority Queue + Bronze VIP',
    category: 'bundles',
    price: 15.00,
    description: 'Skip standard login queues during rush hours. Includes a 1.25x job payout cash multiplier and Bronze tag.',
    image: 'https://placehold.co/400x300/7f3800/ffb703?text=Bronze+VIP',
    premium: false,
    specs: {
      'VIP Rank': 'Bronze',
      'Queue Perk': 'Medium Priority',
      'Pay Multiplier': '1.25x Cash',
      'Duration': '30 Days'
    }
  }
];

// --- Application State ---
let cart = [];
let currentCategory = 'all';
let searchQuery = '';

// --- Bilingual Support ---
const TRANSLATIONS = {
  en: {
    nav_store: "Store",
    nav_packages: "VIP Packages",
    nav_faq: "FAQ",
    nav_discord: "Discord",
    hero_badge: "<i class='fa-solid fa-gem'></i> Algerian State VIP Store",
    hero_title: "Dominate The Streets <br>As a <span class='text-gradient neon-glow'>VIP Member</span>",
    hero_subtitle: "Upgrade your FiveM gameplay on Algerian State. Unlock premium custom vehicles, high-end mansions, custom peds, and elite server privileges. Instant automated delivery.",
    btn_browse: "<i class='fa-solid fa-shopping-bag'></i> Browse Packages",
    btn_discord: "<i class='fa-brands fa-discord'></i> Join Discord",
    tab_all: "All Packages",
    tab_cars: "VIP Cars",
    tab_houses: "VIP Houses",
    tab_peds: "VIP Peds",
    tab_bundles: "VIP Bundles",
    reviews_title: "What Our VIPs Say"
  },
  ar: {
    nav_store: "المتجر",
    nav_packages: "باقات VIP",
    nav_faq: "الأسئلة الشائعة",
    nav_discord: "ديسكورد",
    hero_badge: "<i class='fa-solid fa-gem'></i> متجر Algerian State VIP",
    hero_title: "سيطر على الشوارع <br>كعضو <span class='text-gradient neon-glow'>VIP متميز</span>",
    hero_subtitle: "ارتقِ بلعبك في سيرفر Algerian State. افتح سيارات حصرية، قصور فخمة، شخصيات مخصصة، وصلاحيات متميزة في السيرفر. استلام فوري وآلي.",
    btn_browse: "<i class='fa-solid fa-shopping-bag'></i> تصفح الباقات",
    btn_discord: "<i class='fa-brands fa-discord'></i> انضم للديسكورد",
    tab_all: "كل الباقات",
    tab_cars: "سيارات VIP",
    tab_houses: "قصور VIP",
    tab_peds: "شخصيات VIP",
    tab_bundles: "حزم VIP",
    reviews_title: "ماذا يقول مشتركونا"
  }
};

let currentLang = localStorage.getItem('agin_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('agin_lang', lang);
  
  if(lang === 'ar') {
    document.body.classList.add('rtl');
    const lbl = document.getElementById('currentLangLabel');
    if(lbl) lbl.textContent = 'AR';
  } else {
    document.body.classList.remove('rtl');
    const lbl = document.getElementById('currentLangLabel');
    if(lbl) lbl.textContent = 'EN';
  }

  // Update translatable texts
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });
}

// --- Particles JS Init ---
function initParticles() {
  if(window.particlesJS && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#9d4edd" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#9d4edd", opacity: 0.2, width: 1 },
        move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  }
}

// --- Reviews Marquee ---
const REVIEWS = [
  { name: "Ahmed K.", role: "Platinum VIP", text: "أفضل سيرفر وأسرع متجر. السيارت خرافية جداً!", stars: 5 },
  { name: "Youssef DZ", role: "Bronze VIP", text: "خدمة العملاء ممتازة والاستلام كان فوري.", stars: 5 },
  { name: "Ghostx", role: "Player", text: "الـ Custom Peds جودتها عالية جداً، أنصح الجميع.", stars: 4 },
  { name: "Rayane", role: "Platinum VIP", text: "قصر فاينوود يستحق كل دولار. شكراً للإدارة.", stars: 5 },
  { name: "Samir", role: "VIP User", text: "السيرفر مستقر جداً وسيارات المتجر أسطورية.", stars: 5 },
  { name: "Tarik", role: "Player", text: "أسعار ممتازة مقارنة بجودة السكربتات.", stars: 5 }
];

function initReviews() {
  const marquee = document.getElementById('reviewsMarquee');
  if(!marquee) return;
  marquee.innerHTML = '';
  
  // Duplicate array to make seamless scroll
  const items = [...REVIEWS, ...REVIEWS];
  
  items.forEach(r => {
    let starsHtml = '';
    for(let i=0; i<5; i++) {
      starsHtml += i < r.stars ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }
    marquee.innerHTML += `
      <div class="review-card">
        <div class="review-stars">${starsHtml}</div>
        <div class="review-text">"${r.text}"</div>
        <div class="review-author">
          <img src="https://placehold.co/40/9d4edd/fff?text=${r.name.charAt(0)}" alt="avatar" onerror="this.style.display='none'">
          <div class="review-author-info">
            <span class="review-author-name">${r.name}</span>
            <span class="review-author-role">${r.role}</span>
          </div>
        </div>
      </div>
    `;
  });
}

// --- DOM Elements ---
const productsGrid = document.getElementById('productsGrid');
const shopTabs = document.getElementById('shopTabs');
const searchInput = document.getElementById('searchInput');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const playerIdentifier = document.getElementById('playerIdentifier');
const checkoutTriggerBtn = document.getElementById('checkoutTriggerBtn');

// Modals
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutModalBackdrop = document.getElementById('checkoutModalBackdrop');
const summaryIdentifier = document.getElementById('summaryIdentifier');
const summaryCount = document.getElementById('summaryCount');
const summaryTotal = document.getElementById('summaryTotal');
const checkoutForm = document.getElementById('checkoutForm');

const successModal = document.getElementById('successModal');
const successCloseBtn = document.getElementById('successCloseBtn');
const successModalBackdrop = document.getElementById('successModalBackdrop');

// Server Info
const serverStatus = document.getElementById('serverStatus');
const playerCount = document.getElementById('playerCount');

// Card inputs validation
const cardNumberInput = document.getElementById('cardNumber');
const cardExpiryInput = document.getElementById('cardExpiry');
const cardCvcInput = document.getElementById('cardCvc');

// --- Initialization ---
function init() {
  loadCartFromStorage();
  renderProducts();
  renderCart();
  setupEventListeners();
  updateLivePlayerCount();
  
  // New features init
  initParticles();
  initReviews();
  setLanguage(currentLang);
}

// --- Local Storage Helpers ---
function saveCartToStorage() {
  localStorage.setItem('agin_state_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem('agin_state_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
}

// --- Render Functions ---
function renderProducts() {
  productsGrid.innerHTML = '';
  
  // Filter products
  const filtered = PRODUCTS.filter(prod => {
    const matchesCategory = currentCategory === 'all' || prod.category === currentCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="cart-empty" style="grid-column: 1 / -1; padding: 4rem 0;">
        <i class="fa-solid fa-face-frown"></i>
        <h3>No Packages Found</h3>
        <p>Try searching for something else or changing categories.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(prod => {
    const card = document.createElement('article');
    card.className = `product-card ${prod.premium ? 'premium-tag' : ''}`;
    
    // Generate specifications elements
    let specsHtml = '';
    for (const [key, val] of Object.entries(prod.specs)) {
      specsHtml += `
        <div class="spec-item">
          <i class="fa-solid fa-angle-right"></i>
          <span><strong>${key}:</strong> ${val}</span>
        </div>
      `;
    }
    
    card.innerHTML = `
      <div class="product-image-container">
        <img src="${prod.image}" alt="${prod.name}" onerror="this.onerror=null; this.src='https://placehold.co/600x400/1e1936/e0aaff?text=${encodeURIComponent(prod.name)}'">
        <span class="product-category-badge">${prod.category}</span>
      </div>
      <div class="product-info">
        <h3>${prod.name}</h3>
        <p class="product-desc">${prod.description}</p>
        <div class="product-specifications">
          ${specsHtml}
        </div>
        <div class="product-purchase">
          <div class="product-price">
            <span class="price-label">Price</span>
            <span class="price-value">$${prod.price.toFixed(2)}</span>
          </div>
          <button class="add-to-cart-btn" data-id="${prod.id}" title="Add to Cart">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    `;
    
    productsGrid.appendChild(card);
  });
}

function renderCart() {
  cartItemsContainer.innerHTML = '';
  let subtotal = 0;
  let totalItemsCount = 0;
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-shopping-cart"></i>
        <h3>Your cart is empty</h3>
        <p>Browse our shop and add packages to upgrade your VIP status.</p>
      </div>
    `;
    cartTotal.textContent = '$0.00';
    cartCount.textContent = '0';
    return;
  }
  
  cart.forEach(item => {
    subtotal += item.product.price * item.quantity;
    totalItemsCount += item.quantity;
    
    const cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item';
    
    cartItemDiv.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.product.image}" alt="${item.product.name}" onerror="this.onerror=null; this.src='https://placehold.co/200x200/1e1936/e0aaff?text=${encodeURIComponent(item.product.name)}'">
      </div>
      <div class="cart-item-info">
        <h4>${item.product.name}</h4>
        <span class="item-price">$${(item.product.price * item.quantity).toFixed(2)}</span>
      </div>
      <div class="cart-item-actions">
        <div class="item-quantity">
          <button class="qty-btn dec-qty" data-id="${item.product.id}">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn inc-qty" data-id="${item.product.id}">+</button>
        </div>
        <button class="remove-item" data-id="${item.product.id}">
          <i class="fa-solid fa-trash-can"></i> Remove
        </button>
      </div>
    `;
    
    cartItemsContainer.appendChild(cartItemDiv);
  });
  
  cartTotal.textContent = `$${subtotal.toFixed(2)}`;
  cartCount.textContent = totalItemsCount;
}

// --- Cart Actions ---
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  const existing = cart.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }
  
  saveCartToStorage();
  renderCart();
  openCart();
}

function updateQuantity(productId, increment) {
  const item = cart.find(item => item.product.id === productId);
  if (!item) return;
  
  item.quantity += increment;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCartToStorage();
    renderCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  saveCartToStorage();
  renderCart();
}

// --- Sidebar Control ---
function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('show');
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('show');
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Category tabs filtering
  shopTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      renderProducts();
    }
  });
  
  // Search input typing
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });
  
  // Add to cart click event delegation
  productsGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (btn) {
      const productId = parseInt(btn.getAttribute('data-id'));
      addToCart(productId);
    }
  });
  
  // Cart Actions (inc/dec/remove) delegation
  cartSidebar.addEventListener('click', (e) => {
    if (e.target.classList.contains('inc-qty')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      updateQuantity(id, 1);
    } else if (e.target.classList.contains('dec-qty')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      updateQuantity(id, -1);
    } else if (e.target.closest('.remove-item')) {
      const id = parseInt(e.target.closest('.remove-item').getAttribute('data-id'));
      removeFromCart(id);
    }
  });
  
  // Cart toggle buttons
  cartToggleBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  
  // Copy server IP
  serverStatus.addEventListener('click', () => {
    const mockIP = 'play.aginstate.com';
    navigator.clipboard.writeText(mockIP).then(() => {
      const originalText = serverStatus.innerHTML;
      serverStatus.innerHTML = `<i class="fa-solid fa-check" style="color:#10b981;"></i> <span>Copied IP!</span>`;
      setTimeout(() => {
        serverStatus.innerHTML = originalText;
      }, 2000);
    });
  });
  
  // Checkout trigger
  checkoutTriggerBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add VIP items first.');
      return;
    }
    
    const identifier = playerIdentifier.value.trim();
    if (!identifier) {
      playerIdentifier.focus();
      playerIdentifier.style.borderColor = 'var(--accent-neon)';
      setTimeout(() => {
        playerIdentifier.style.borderColor = '';
      }, 1500);
      return;
    }
    
    // Open checkout modal
    summaryIdentifier.textContent = identifier;
    
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    summaryCount.textContent = count;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    summaryTotal.textContent = `$${subtotal.toFixed(2)}`;
    
    closeCart();
    checkoutModal.classList.add('show');
  });
  
  // Close checkout modal
  closeCheckoutModal.addEventListener('click', () => {
    checkoutModal.classList.remove('show');
  });
  checkoutModalBackdrop.addEventListener('click', () => {
    checkoutModal.classList.remove('show');
  });
  
  // Checkout card formatting inputs
  cardNumberInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' ';
      }
      formatted += value[i];
    }
    e.target.value = formatted;
  });
  
  cardExpiryInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    let formatted = '';
    if (value.length > 0) {
      formatted = value.substring(0, 2);
      if (value.length > 2) {
        formatted += '/' + value.substring(2, 4);
      }
    }
    e.target.value = formatted;
  });
  
  cardCvcInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  });
  
  // Submit Checkout
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = checkoutForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Animate payment loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing...`;
    
    setTimeout(() => {
      // Complete mock payment
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      
      // Send Webhook Log
      const identifier = document.getElementById('playerIdentifier').value.trim();
      const checkoutTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2);
      
      // We pass a copy of the cart before we clear it
      const cartCopy = [...cart];
      sendPurchaseWebhook(identifier, cartCopy, checkoutTotal);

      // Clear cart
      cart = [];
      saveCartToStorage();
      renderCart();
      playerIdentifier.value = '';
      checkoutForm.reset();
      
      // Close Checkout, Show Success
      checkoutModal.classList.remove('show');
      successModal.classList.add('show');
    }, 2000);
  });
  
  // Success Close
  successCloseBtn.addEventListener('click', () => {
    successModal.classList.remove('show');
  });
  successModalBackdrop.addEventListener('click', () => {
    successModal.classList.remove('show');
  });
  
  // FAQ Accordion toggles
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const active = item.classList.contains('active');
      // Collapse others
      faqItems.forEach(innerItem => {
        innerItem.classList.remove('active');
        innerItem.querySelector('.faq-answer').style.maxHeight = null;
      });
      
      if (!active) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  mobileMenuToggle.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
      navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '80px';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.background = 'rgba(10, 8, 20, 0.95)';
      navMenu.style.padding = '2rem';
      navMenu.style.borderBottom = '1px solid var(--border)';
    }
  });

  // Language Toggle
  const langToggleBtn = document.getElementById('langToggleBtn');
  if(langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(newLang);
    });
  }
}

// --- Live Counter simulation ---
// --- Live FiveM API Counter ---
async function updateLivePlayerCount() {
  const SERVER_CODE = '964e4e'; // Algerian State FiveM Server
  try {
    const res = await fetch(`https://servers-frontend.fivem.net/api/servers/single/${SERVER_CODE}`);
    if(res.ok) {
      const data = await res.json();
      const players = data.Data.clients;
      const maxPlayers = data.Data.sv_maxclients;
      if(playerCount) {
        playerCount.textContent = players;
        if(playerCount.nextSibling) {
          playerCount.nextSibling.textContent = `/${maxPlayers} Online`;
        }
      }
    } else {
      throw new Error();
    }
  } catch(e) {
    // Fallback simulation if API fails
    setInterval(() => {
      if(!playerCount) return;
      const current = parseInt(playerCount.textContent) || 148;
      const change = Math.floor(Math.random() * 5) - 2;
      let updated = current + change;
      if (updated < 120) updated = 120;
      if (updated > 195) updated = 195;
      playerCount.textContent = updated;
    }, 5000);
  }
}

// Run initial configurations
document.addEventListener('DOMContentLoaded', () => {
  // Check if this is a callback from Discord OAuth
  const hash = window.location.hash;
  if (hash && hash.includes('access_token')) {
      DiscordAuth.parseCallback();
  }
  
  init();
});

// ===================================================
//  DISCORD CONFIG — عدّل هنا فقط
// ===================================================
const DISCORD_CONFIG = {
  CLIENT_ID:    '1169783170749706341',       // Discord App Client ID
  GUILD_ID:     '1363621598489481382',       // Server ID
  ADMIN_ROLE_ID:'1415838728248889354',       // Role required to access Admin Panel
  // ⚠️ أضف Webhook URL هنا بعد ما تعطيه لي
  WEBHOOK_URL:  'https://discord.com/api/webhooks/1514140923196342342/Cj6DKe2QtEkwHwRtGqgeXvo3382CXp2Yz9LSSmqDcjET27veJfZuzoiQtOAbk2cb2jl-',
  // رابط موقعك على GitHub Pages — عدّله بعد نشر الموقع
  REDIRECT_URI: window.location.href.split('#')[0].split('?')[0]
};

// ===================================================
//  DISCORD AUTH MODULE
// ===================================================

const DiscordAuth = {
  tokenKey: 'ds_admin_token',
  userKey:  'ds_admin_user',

  /** ابدأ OAuth2 Implicit Flow */
  login() {
    const params = new URLSearchParams({
      client_id:     DISCORD_CONFIG.CLIENT_ID,
      redirect_uri:  DISCORD_CONFIG.REDIRECT_URI,
      response_type: 'token',
      scope:         'identify guilds.members.read'
    });
    window.location.href = `https://discord.com/api/oauth2/authorize?${params}`;
  },

  /** سجل خروج */
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    // أخفِ مؤشر المستخدم
    const indicator = document.getElementById('adminUserIndicator');
    if (indicator) indicator.remove();
  },

  /** احفظ الـ token من الـ URL hash بعد الـ redirect */
  parseCallback() {
    const hash = window.location.hash.substring(1);
    if (!hash) return null;
    const params = new URLSearchParams(hash);
    const token  = params.get('access_token');
    const expiry = params.get('expires_in');
    if (!token) return null;

    const expiresAt = Date.now() + parseInt(expiry) * 1000;
    localStorage.setItem(this.tokenKey, JSON.stringify({ token, expiresAt }));
    // نظّف الـ hash من الـ URL
    history.replaceState(null, '', window.location.pathname + window.location.search);
    return token;
  },

  /** اجلب الـ token المحفوظ إذا لا يزال صالحاً */
  getStoredToken() {
    const raw = localStorage.getItem(this.tokenKey);
    if (!raw) return null;
    try {
      const { token, expiresAt } = JSON.parse(raw);
      if (Date.now() > expiresAt) {
        localStorage.removeItem(this.tokenKey);
        return null;
      }
      return token;
    } catch { return null; }
  },

  /** تحقق من هوية المستخدم */
  async fetchUser(token) {
    const res = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to fetch user');
    return await res.json();
  },

  /** تحقق من الـ roles داخل السيرفر */
  async fetchMember(token) {
    const res = await fetch(
      `https://discord.com/api/users/@me/guilds/${DISCORD_CONFIG.GUILD_ID}/member`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!res.ok) throw new Error('Not a member of the server');
    return await res.json();
  },

  /** هل لدى المستخدم صلاحية الـ Admin Role؟ */
  hasAdminRole(member) {
    return Array.isArray(member.roles) && member.roles.includes(DISCORD_CONFIG.ADMIN_ROLE_ID);
  }
};

// ===================================================
//  DISCORD WEBHOOK — Purchase Log
// ===================================================

async function sendPurchaseWebhook(identifier, cartItems, total) {
  if (!DISCORD_CONFIG.WEBHOOK_URL || DISCORD_CONFIG.WEBHOOK_URL === 'PASTE_YOUR_WEBHOOK_URL_HERE') {
    console.warn('[Webhook] لم يتم إعداد Webhook URL بعد.');
    return;
  }

  const now  = new Date();
  const time = now.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });

  const itemLines = cartItems.map(item =>
    `> \`${item.quantity}x\` **${item.product.name}** — $${(item.product.price * item.quantity).toFixed(2)}`
  ).join('\n');

  const embed = {
    title: '🛍️ عملية شراء جديدة — Algerian State VIP Store',
    color: 0x9d4edd, // بنفسجي مثل ثيم الموقع
    fields: [
      {
        name: '🆔 Game Identifier',
        value: `\`${identifier}\``,
        inline: false
      },
      {
        name: '📦 المنتجات المشتراة',
        value: itemLines || 'لا توجد منتجات',
        inline: false
      },
      {
        name: '💰 المجموع الكلي',
        value: `**$${total}**`,
        inline: true
      },
      {
        name: '🕐 وقت الشراء',
        value: time,
        inline: true
      }
    ],
    footer: {
      text: 'Algerian State VIP Store • Auto Purchase Log'
    },
    thumbnail: {
      url: 'https://cdn.discordapp.com/emojis/1234567890.png'
    }
  };

  try {
    await fetch(DISCORD_CONFIG.WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] })
    });
    console.log('[Webhook] تم إرسال log الشراء بنجاح ✅');
  } catch (err) {
    console.error('[Webhook] خطأ في إرسال الـ log:', err);
  }
}

// ===================================================
//  ADMIN PANEL UI
// ===================================================

// --- Admin DOM refs ---
const adminToggleBtn  = document.getElementById('adminToggleBtn');
const adminPanel      = document.getElementById('adminPanel');
const adminOverlay    = document.getElementById('adminOverlay');
const adminCloseBtn   = document.getElementById('adminCloseBtn');
const adminProductsList = document.getElementById('adminProductsList');
const adminAddProductForm = document.getElementById('adminAddProductForm');
const addSpecFieldBtn = document.getElementById('addSpecFieldBtn');
const specFieldsContainer = document.getElementById('specFieldsContainer');
const adminSaveSettings = document.getElementById('adminSaveSettings');

// --- Toast helper ---
function showAdminToast(message, type = 'success', icon = 'fa-check-circle') {
  let toast = document.getElementById('adminToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'adminToast';
    toast.className = 'admin-toast';
    document.body.appendChild(toast);
  }
  toast.className = `admin-toast ${type}`;
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// --- Open / Close Admin Panel ---
async function openAdmin() {
  const token = DiscordAuth.getStoredToken();
  
  if (!token) {
    // If no token, show loading and redirect to Discord login
    adminToggleBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    DiscordAuth.login();
    return;
  }

  // Token exists, verify role
  try {
    adminToggleBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    const member = await DiscordAuth.fetchMember(token);
    
    if (DiscordAuth.hasAdminRole(member)) {
      // Access Granted
      adminToggleBtn.innerHTML = '<i class="fa-solid fa-user-shield"></i>';
      adminPanel.classList.add('open');
      adminOverlay.classList.add('show');
      renderAdminProductList();
      
      // Optionally fetch user info to display
      const user = await DiscordAuth.fetchUser(token);
      showAdminToast(`Welcome back, ${user.username}!`, 'success', 'fa-user');
      
    } else {
      // Access Denied
      adminToggleBtn.innerHTML = '<i class="fa-solid fa-user-shield"></i>';
      alert("Access Denied: You do not have the required Discord Role to access the Admin Panel.");
      DiscordAuth.logout();
    }
  } catch (error) {
    console.error("Auth Error:", error);
    adminToggleBtn.innerHTML = '<i class="fa-solid fa-user-shield"></i>';
    alert("Authentication failed or session expired. Please log in again.");
    DiscordAuth.logout();
    DiscordAuth.login(); // Force re-login
  }
}

function closeAdmin() {
  adminPanel.classList.remove('open');
  adminOverlay.classList.remove('show');
}

adminToggleBtn.addEventListener('click', openAdmin);
adminCloseBtn.addEventListener('click', closeAdmin);
adminOverlay.addEventListener('click', closeAdmin);

// --- Admin Tab Switching ---
document.querySelectorAll('.admin-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-admin-tab');
    // Update buttons
    document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Update content panels
    document.querySelectorAll('.admin-tab-content').forEach(panel => panel.classList.remove('active'));
    document.getElementById(`admin-tab-${target}`).classList.add('active');

    // If switching to products tab, refresh list
    if (target === 'products') renderAdminProductList();
  });
});

// --- Render Admin Product List ---
function renderAdminProductList() {
  adminProductsList.innerHTML = '';
  PRODUCTS.forEach(prod => {
    const row = document.createElement('div');
    row.className = 'admin-product-row';
    row.setAttribute('data-prod-id', prod.id);

    row.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}"
           onerror="this.src='https://placehold.co/56x42/1e1936/e0aaff?text=?'">
      <div class="admin-prod-info">
        <div class="admin-prod-name">${prod.name}</div>
        <div class="admin-prod-meta">${prod.category} ${prod.premium ? '★ Premium' : ''}</div>
      </div>
      <div class="admin-prod-price">$${prod.price.toFixed(2)}</div>
      <div class="admin-prod-actions">
        <button class="admin-edit-btn" title="Edit" data-id="${prod.id}">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button class="admin-delete-btn" title="Delete" data-id="${prod.id}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    adminProductsList.appendChild(row);
  });
}

// --- Inline Edit / Delete delegation ---
adminProductsList.addEventListener('click', e => {
  // DELETE
  const deleteBtn = e.target.closest('.admin-delete-btn');
  if (deleteBtn) {
    const id = parseInt(deleteBtn.getAttribute('data-id'));
    const idx = PRODUCTS.findIndex(p => p.id === id);
    if (idx !== -1) {
      const name = PRODUCTS[idx].name;
      PRODUCTS.splice(idx, 1);
      // Remove from cart too
      cart = cart.filter(item => item.product.id !== id);
      saveCartToStorage();
      renderCart();
      renderProducts();
      renderAdminProductList();
      showAdminToast(`"${name}" deleted.`, 'error', 'fa-trash');
    }
    return;
  }

  // EDIT (toggle inline form)
  const editBtn = e.target.closest('.admin-edit-btn');
  if (editBtn) {
    const id = parseInt(editBtn.getAttribute('data-id'));
    const existingForm = adminProductsList.querySelector('.admin-edit-form');
    if (existingForm) existingForm.remove(); // close open form first

    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return;

    const row = adminProductsList.querySelector(`[data-prod-id="${id}"]`);
    const form = document.createElement('div');
    form.className = 'admin-edit-form';
    form.innerHTML = `
      <label>Name</label>
      <input type="text" id="editName_${id}" value="${prod.name}">
      <label>Price ($)</label>
      <input type="number" id="editPrice_${id}" value="${prod.price}" step="0.01" min="0">
      <label>Description</label>
      <textarea id="editDesc_${id}" rows="3">${prod.description}</textarea>
      <label>Image URL</label>
      <input type="text" id="editImg_${id}" value="${prod.image}">
      <label>Category</label>
      <select id="editCat_${id}">
        <option value="cars" ${prod.category === 'cars' ? 'selected' : ''}>VIP Cars</option>
        <option value="houses" ${prod.category === 'houses' ? 'selected' : ''}>VIP Houses</option>
        <option value="peds" ${prod.category === 'peds' ? 'selected' : ''}>VIP Peds</option>
        <option value="bundles" ${prod.category === 'bundles' ? 'selected' : ''}>VIP Bundles</option>
      </select>
      <label><input type="checkbox" id="editPrem_${id}" ${prod.premium ? 'checked' : ''} style="margin-right:8px;"> Premium</label>
      <button class="admin-edit-save-btn" data-save-id="${id}"><i class="fa-solid fa-floppy-disk"></i> Save Changes</button>
    `;
    row.after(form);

    // Save changes handler
    form.querySelector(`[data-save-id="${id}"]`).addEventListener('click', () => {
      prod.name        = document.getElementById(`editName_${id}`).value.trim() || prod.name;
      prod.price       = parseFloat(document.getElementById(`editPrice_${id}`).value) || prod.price;
      prod.description = document.getElementById(`editDesc_${id}`).value.trim() || prod.description;
      prod.image       = document.getElementById(`editImg_${id}`).value.trim() || prod.image;
      prod.category    = document.getElementById(`editCat_${id}`).value;
      prod.premium     = document.getElementById(`editPrem_${id}`).checked;

      form.remove();
      renderAdminProductList();
      renderProducts();
      showAdminToast(`"${prod.name}" updated!`, 'success', 'fa-check-circle');
    });
    return;
  }
});

// --- Add New Product Form ---
addSpecFieldBtn.addEventListener('click', () => {
  const row = document.createElement('div');
  row.className = 'spec-field-row';
  row.innerHTML = `
    <input type="text" class="spec-key" placeholder="Label (e.g. Top Speed)">
    <input type="text" class="spec-val" placeholder="Value (e.g. 320 km/h)">
    <button type="button" class="spec-remove-btn"><i class="fa-solid fa-trash"></i></button>
  `;
  specFieldsContainer.appendChild(row);
  row.querySelector('.spec-remove-btn').addEventListener('click', () => row.remove());
});

// Delegate remove on existing first row
specFieldsContainer.addEventListener('click', e => {
  const removeBtn = e.target.closest('.spec-remove-btn');
  if (removeBtn) {
    const row = removeBtn.closest('.spec-field-row');
    if (specFieldsContainer.querySelectorAll('.spec-field-row').length > 1) {
      row.remove();
    }
  }
});

adminAddProductForm.addEventListener('submit', e => {
  e.preventDefault();

  const name      = document.getElementById('newProdName').value.trim();
  const category  = document.getElementById('newProdCategory').value;
  const price     = parseFloat(document.getElementById('newProdPrice').value) || 0;
  const image     = document.getElementById('newProdImage').value.trim() || 'images/placeholder.jpg';
  const desc      = document.getElementById('newProdDesc').value.trim();
  const premium   = document.getElementById('newProdPremium').checked;

  // Build specs from field rows
  const specs = {};
  specFieldsContainer.querySelectorAll('.spec-field-row').forEach(row => {
    const key = row.querySelector('.spec-key').value.trim();
    const val = row.querySelector('.spec-val').value.trim();
    if (key && val) specs[key] = val;
  });

  // Assign new unique ID
  const newId = PRODUCTS.length > 0 ? Math.max(...PRODUCTS.map(p => p.id)) + 1 : 1;

  PRODUCTS.push({ id: newId, name, category, price, description: desc, image, premium, specs });

  // Reset form
  adminAddProductForm.reset();
  specFieldsContainer.innerHTML = `
    <div class="spec-field-row">
      <input type="text" class="spec-key" placeholder="Label (e.g. Top Speed)">
      <input type="text" class="spec-val" placeholder="Value (e.g. 320 km/h)">
      <button type="button" class="spec-remove-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;

  renderProducts();
  showAdminToast(`"${name}" added to store!`, 'success', 'fa-plus-circle');

  // Switch back to Products tab
  document.querySelector('[data-admin-tab="products"]').click();
});

// --- Save Settings ---
adminSaveSettings.addEventListener('click', () => {
  const siteName    = document.getElementById('adminSiteName').value.trim();
  const heroTitle   = document.getElementById('adminHeroTitle').value.trim();
  const heroSub     = document.getElementById('adminHeroSubtitle').value.trim();
  const discordLink = document.getElementById('adminDiscordLink').value.trim();
  const serverIP    = document.getElementById('adminServerIP').value.trim();
  const maxPlayers  = parseInt(document.getElementById('adminMaxPlayers').value) || 200;

  // Apply settings live
  if (siteName) {
    document.querySelectorAll('.nav-logo').forEach(el => {
      el.innerHTML = `${siteName.split(' ')[0]} <span>${siteName.split(' ').slice(1).join(' ') || 'State'}</span>`;
    });
    document.title = `${siteName} | Premium FiveM VIP Store`;
  }
  if (heroTitle) {
    const h1 = document.querySelector('.hero h1');
    if (h1) {
      const parts = heroTitle.split(' as a ');
      if (parts.length >= 2) {
        h1.innerHTML = `${parts[0]} <br>As a <span class="text-gradient neon-glow">${parts[1]}</span>`;
      } else {
        h1.textContent = heroTitle;
      }
    }
  }
  if (heroSub) {
    const heroP = document.querySelector('.hero p');
    if (heroP) heroP.textContent = heroSub;
  }
  if (discordLink) {
    document.querySelectorAll('a[href*="discord.gg"]').forEach(a => a.href = discordLink);
  }
  if (serverIP) {
    // Update click-to-copy server IP
    const origClickHandler = serverStatus._adminIP;
    serverStatus._adminIP = serverIP;
  }

  // Update max player display
  const maxEl = document.querySelector('#playerCount');
  if (maxEl && maxEl.parentElement) {
    const sibling = maxEl.nextSibling;
    if (sibling) sibling.textContent = `/${maxPlayers} Online`;
  }

  showAdminToast('Settings saved!', 'success', 'fa-floppy-disk');
});

