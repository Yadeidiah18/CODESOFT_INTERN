// ========================================
// PRODUCT DATA
// ========================================
const PRODUCTS = [
  // --- Electronics ---
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 12999,
    originalPrice: 18999,
    rating: 4.8,
    reviews: 234,
    emoji: "🎧",
    badge: "Best Seller",
    description: "Crystal-clear sound with 40-hour battery life, active noise cancellation, and premium comfort. Perfect for music lovers and professionals alike."
  },
  {
    id: 2,
    name: "4K Smart LED TV 55\"",
    category: "Electronics",
    price: 54999,
    originalPrice: 79999,
    rating: 4.6,
    reviews: 112,
    emoji: "📺",
    badge: "Sale",
    description: "Stunning 4K HDR display with smart features, built-in streaming apps, and Dolby Atmos sound. Transform your living room experience."
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    category: "Electronics",
    price: 4999,
    originalPrice: 6999,
    rating: 4.7,
    reviews: 180,
    emoji: "⌨️",
    badge: null,
    description: "RGB backlit mechanical keyboard with tactile switches, anti-ghosting, and durable metal frame for serious gamers."
  },
  {
    id: 4,
    name: "Smartphone 12 Pro Max",
    category: "Electronics",
    price: 89999,
    originalPrice: 99999,
    rating: 4.9,
    reviews: 560,
    emoji: "📱",
    badge: "New",
    description: "128MP camera, 120Hz AMOLED display, 5000mAh battery with 65W fast charging. The ultimate smartphone experience."
  },
  {
    id: 5,
    name: "Smartwatch Series 8",
    category: "Electronics",
    price: 24999,
    originalPrice: 32999,
    rating: 4.5,
    reviews: 88,
    emoji: "⌚",
    badge: "Sale",
    description: "Health tracking, GPS, AMOLED display, 18-day battery. Monitor your fitness and stay connected all day."
  },
  {
    id: 6,
    name: "Wireless Earbuds Pro",
    category: "Electronics",
    price: 8999,
    originalPrice: 12999,
    rating: 4.6,
    reviews: 310,
    emoji: "🎵",
    badge: null,
    description: "True wireless earbuds with 30-hour total playtime, IPX5 waterproof, and instant pairing for seamless audio."
  },

  // --- Fashion ---
  {
    id: 7,
    name: "Premium Leather Jacket",
    category: "Fashion",
    price: 7999,
    originalPrice: 12999,
    rating: 4.7,
    reviews: 95,
    emoji: "🧥",
    badge: "Trending",
    description: "Genuine leather jacket with YKK zippers, quilted lining, and a timeless design that elevates any outfit."
  },
  {
    id: 8,
    name: "Classic Oxford Shoes",
    category: "Fashion",
    price: 4499,
    originalPrice: 6999,
    rating: 4.5,
    reviews: 72,
    emoji: "👞",
    badge: null,
    description: "Handcrafted leather oxford shoes with cushioned insole and durable rubber sole — perfect for formal occasions."
  },
  {
    id: 9,
    name: "Designer Sunglasses",
    category: "Fashion",
    price: 2999,
    originalPrice: 4999,
    rating: 4.4,
    reviews: 143,
    emoji: "🕶️",
    badge: "Sale",
    description: "UV400 polarized lenses in a lightweight titanium frame. Style meets protection in every pair."
  },
  {
    id: 10,
    name: "Silk Saree — Royal Blue",
    category: "Fashion",
    price: 5999,
    originalPrice: 8999,
    rating: 4.8,
    reviews: 220,
    emoji: "👘",
    badge: "Ethnic",
    description: "Pure silk saree with intricate zari border. A timeless ethnic masterpiece for weddings and festivals."
  },

  // --- Home ---
  {
    id: 11,
    name: "Air Purifier Premium",
    category: "Home",
    price: 18999,
    originalPrice: 25999,
    rating: 4.7,
    reviews: 64,
    emoji: "🌀",
    badge: null,
    description: "HEPA + activated carbon filter removes 99.97% pollutants. Smart auto mode adapts to air quality in real time."
  },
  {
    id: 12,
    name: "Coffee Maker Deluxe",
    category: "Home",
    price: 6999,
    originalPrice: 9999,
    rating: 4.6,
    reviews: 181,
    emoji: "☕",
    badge: "Best Seller",
    description: "Brew café-quality coffee at home. Programmable, keeps warm for 2 hours, includes a reusable filter."
  },
  {
    id: 13,
    name: "Scented Candle Gift Set",
    category: "Home",
    price: 1499,
    originalPrice: 2299,
    rating: 4.4,
    reviews: 340,
    emoji: "🕯️",
    badge: "Gift",
    description: "Set of 6 hand-poured soy wax candles in lavender, vanilla, and sandalwood scents. Perfect gifting option."
  },
  {
    id: 14,
    name: "Robot Vacuum Cleaner",
    category: "Home",
    price: 29999,
    originalPrice: 44999,
    rating: 4.5,
    reviews: 55,
    emoji: "🤖",
    badge: "Smart",
    description: "Auto-mapping robot vacuum with mopping function, app control, and 180-min battery. Clean floors effortlessly."
  },

  // --- Beauty ---
  {
    id: 15,
    name: "Vitamin C Serum Set",
    category: "Beauty",
    price: 1999,
    originalPrice: 3499,
    rating: 4.7,
    reviews: 490,
    emoji: "✨",
    badge: "Popular",
    description: "Dermatologist-tested vitamin C + hyaluronic acid serum. Brightens, firms, and hydrates skin in 2 weeks."
  },
  {
    id: 16,
    name: "Luxury Perfume — Oud",
    category: "Beauty",
    price: 4999,
    originalPrice: 7999,
    rating: 4.9,
    reviews: 188,
    emoji: "🌹",
    badge: "Luxury",
    description: "An opulent blend of oud, amber, and rose. Long-lasting 24-hour fragrance in an elegant glass bottle."
  },

  // --- Sports ---
  {
    id: 17,
    name: "Yoga Mat Premium",
    category: "Sports",
    price: 2499,
    originalPrice: 3999,
    rating: 4.6,
    reviews: 275,
    emoji: "🧘",
    badge: null,
    description: "6mm thick non-slip TPE yoga mat with alignment lines, carry strap, and sweat-resistant surface."
  },
  {
    id: 18,
    name: "Adjustable Dumbbells Set",
    category: "Sports",
    price: 12999,
    originalPrice: 17999,
    rating: 4.7,
    reviews: 103,
    emoji: "🏋️",
    badge: "Gym",
    description: "5–30kg adjustable dumbbell pair with quick-lock mechanism. Replace 15 sets of weights in one compact design."
  },

  // --- Books ---
  {
    id: 19,
    name: "Web Dev Complete Guide 2025",
    category: "Books",
    price: 799,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 520,
    emoji: "📚",
    badge: "Best Seller",
    description: "Comprehensive guide from HTML basics to full-stack development. Perfect for beginners and intermediate learners."
  },
  {
    id: 20,
    name: "Atomic Habits",
    category: "Books",
    price: 499,
    originalPrice: 799,
    rating: 4.9,
    reviews: 1200,
    emoji: "📖",
    badge: "Top Pick",
    description: "James Clear's life-changing guide to building good habits and breaking bad ones. A must-read for everyone."
  },
];

// ========================================
// STATE — all app data lives here
// ========================================
let cart        = JSON.parse(localStorage.getItem('luxe_cart'))         || [];
let users       = JSON.parse(localStorage.getItem('luxe_users'))        || [];
let currentUser = JSON.parse(localStorage.getItem('luxe_current_user')) || null;
let activeCategory = '';   // currently selected category filter
let currentPage    = 'home';

// ========================================
// INIT — runs when page first loads
// ========================================
document.addEventListener('DOMContentLoaded', () => {

  renderFeatured();         // home page: featured product cards
  renderCategoryFilters();  // shop page: category chip buttons
  renderShop();             // shop page: product grid
  updateNavUser();          // navbar: login button or username
  updateCartBadge();        // navbar + cart: item count badges
  updatePriceLabel();       // shop filter: price range label

  // Shrink navbar on scroll
  window.addEventListener('scroll', () => {
    document.getElementById('navbar')
      .classList.toggle('scrolled', window.scrollY > 30);
  });

  // Show/hide card fields when payment method changes
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.getElementById('cardFields').style.display =
        radio.value === 'card' ? 'block' : 'none';
    });
  });

  // Close any modal when clicking its dark backdrop
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function (e) {
      if (e.target === this) closeModal(this.id);
    });
  });

});

// ========================================
// PAGE NAVIGATION
// ========================================

/**
 * showPage('home') or showPage('shop')
 * Hides all .page divs, shows the chosen one,
 * updates the active nav link highlight.
 */
function showPage(page) {
  currentPage = page;

  // Hide all pages, show the target
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');

  // Update nav link highlights
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const navMap = { home: 'navHome', shop: 'navShop' };
  if (navMap[page]) document.getElementById(navMap[page]).classList.add('active');

  // Scroll back to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-render shop whenever we navigate to it
  if (page === 'shop') renderShop();
}

// ========================================
// HOME PAGE — FEATURED PRODUCTS
// ========================================

/**
 * Pick up to 4 products that have a badge
 * and inject them into the dark featured section.
 */
function renderFeatured() {
  const featured = PRODUCTS.filter(p => p.badge).slice(0, 4);
  document.getElementById('featuredGrid').innerHTML =
    featured.map(p => productCardHTML(p)).join('');
}

// ========================================
// CATEGORY FILTER (from home page tiles)
// ========================================

/**
 * Called when a user clicks a category tile on the Home page.
 * Sets the active category, then navigates to the Shop page.
 */
function filterByCategory(cat) {
  activeCategory = cat;
  showPage('shop');

  // Wait a tick so the shop page is visible before filtering
  setTimeout(() => {
    renderCategoryFilters(); // highlight the correct chip
    applyFilters();          // filter the grid
  }, 50);
}

// ========================================
// SHOP PAGE — FILTERS & SORTING
// ========================================

/**
 * Build the category chip buttons inside the filter panel.
 * Highlights whichever category is currently active.
 */
function renderCategoryFilters() {
  const cats = [...new Set(PRODUCTS.map(p => p.category))];
  const emojiMap = {
    Electronics: '📱',
    Fashion:     '👗',
    Home:        '🏠',
    Beauty:      '✨',
    Sports:      '⚽',
    Books:       '📚',
  };

  document.getElementById('categoryFilters').innerHTML =
    // "All" chip
    `<button
        class="category-chip ${!activeCategory ? 'active' : ''}"
        data-cat=""
        onclick="setCat('')">
       All
     </button>` +
    // One chip per category
    cats.map(c =>
      `<button
          class="category-chip ${activeCategory === c ? 'active' : ''}"
          data-cat="${c}"
          onclick="setCat('${c}')">
         ${emojiMap[c] || ''} ${c}
       </button>`
    ).join('');
}

/**
 * Called when a category chip is clicked inside the filter panel.
 */
function setCat(cat) {
  activeCategory = cat;
  renderCategoryFilters(); // re-render chips to update active highlight
  applyFilters();
}

/**
 * Entry point for the shop page — renders filters + grid.
 */
function renderShop() {
  renderCategoryFilters();
  applyFilters();
}

/**
 * Read all filter/sort controls and re-render the product grid.
 * Called on every filter change (input, range, radio, select).
 */
function applyFilters() {
  // --- Read filter values ---
  const search  = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const maxPrice = parseInt(document.getElementById('priceRange')?.value || 100000);
  const minRating = parseFloat(
    document.querySelector('input[name="rating"]:checked')?.value || 0
  );
  const sortKey = document.getElementById('sortSelect')?.value || '';

  // --- Filter ---
  let filtered = PRODUCTS.filter(p => {
    const matchCat    = !activeCategory || p.category === activeCategory;
    const matchSearch = !search ||
                        p.name.toLowerCase().includes(search) ||
                        p.category.toLowerCase().includes(search);
    const matchPrice  = p.price <= maxPrice;
    const matchRating = !minRating || p.rating >= minRating;
    return matchCat && matchSearch && matchPrice && matchRating;
  });

  // --- Sort ---
  if      (sortKey === 'price-asc')  filtered.sort((a, b) => a.price - b.price);
  else if (sortKey === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortKey === 'rating')     filtered.sort((a, b) => b.rating - a.rating);
  else if (sortKey === 'name')       filtered.sort((a, b) => a.name.localeCompare(b.name));

  // --- Render ---
  const grid       = document.getElementById('shopGrid');
  const emptyState = document.getElementById('emptyResults');
  const countLabel = document.getElementById('resultCount');

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    countLabel.textContent   = 'No products found';
  } else {
    emptyState.style.display = 'none';
    grid.innerHTML = filtered.map(p => productCardHTML(p)).join('');
    countLabel.textContent =
      `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

    // Stagger the fade-in animation for each card
    grid.querySelectorAll('.product-card').forEach((card, i) => {
      card.style.animationDelay = `${i * 0.05}s`;
    });
  }
}

/**
 * Update the "Up to ₹X" label next to the price slider.
 */
function updatePriceLabel() {
  const val = parseInt(document.getElementById('priceRange')?.value || 100000);
  const el  = document.getElementById('priceLabel');
  if (el) el.textContent = `Up to ₹${val.toLocaleString('en-IN')}`;
}

/**
 * Reset every filter control back to its default state.
 */
function clearFilters() {
  activeCategory = '';
  document.getElementById('searchInput').value  = '';
  document.getElementById('priceRange').value   = 100000;
  document.getElementById('sortSelect').value   = '';
  document.querySelector('input[name="rating"][value=""]').checked = true;
  updatePriceLabel();
  renderCategoryFilters();
  applyFilters();
}

// ========================================
// PRODUCT CARD HTML BUILDER
// ========================================

/**
 * Returns the HTML string for one product card.
 * Used in both the featured section and the shop grid.
 */
function productCardHTML(p) {
  const discount = Math.round((1 - p.price / p.originalPrice) * 100);
  const stars    = '★'.repeat(Math.floor(p.rating)) +
                   (p.rating % 1 >= 0.5 ? '½' : '');

  return `
    <div class="product-card" onclick="openProductDetail(${p.id})">

      <!-- Image area -->
      <div class="product-img">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <span style="font-size:3rem">${p.emoji}</span>
      </div>

      <!-- Info area -->
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">${stars} ${p.rating} (${p.reviews} reviews)</div>

        <div class="product-footer">
          <div class="product-price">
            <span class="original">₹${p.originalPrice.toLocaleString('en-IN')}</span>
            ₹${p.price.toLocaleString('en-IN')}
          </div>
          <!-- stopPropagation so click doesn't also open the detail modal -->
          <button
            class="add-to-cart"
            onclick="event.stopPropagation(); addToCart(${p.id})">
            Add +
          </button>
        </div>
      </div>

    </div>
  `;
}

// ========================================
// PRODUCT DETAIL MODAL
// ========================================

/**
 * Find the product by id, build the detail view HTML,
 * inject it into the modal, and open the modal.
 */
function openProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const discount = Math.round((1 - p.price / p.originalPrice) * 100);
  const stars    = '★'.repeat(Math.floor(p.rating)) +
                   (p.rating % 1 >= 0.5 ? '½' : '');

  document.getElementById('productDetailContent').innerHTML = `
    <div class="product-detail">

      <!-- Big emoji image -->
      <div class="detail-img">${p.emoji}</div>

      <!-- All product info -->
      <div class="detail-info">
        <div class="detail-cat">
          ${p.category}${p.badge ? ` — ${p.badge}` : ''}
        </div>
        <h2>${p.name}</h2>
        <div class="detail-rating">${stars} ${p.rating} · ${p.reviews} reviews</div>
        <p class="detail-desc">${p.description}</p>
        <div class="detail-price">₹${p.price.toLocaleString('en-IN')}</div>
        <div class="detail-original">
          MRP ₹${p.originalPrice.toLocaleString('en-IN')} · Save ${discount}%
        </div>
        <button
          class="btn-full"
          onclick="addToCart(${p.id}); closeModal('productModal')">
          Add to Cart 🛒
        </button>
      </div>

    </div>
  `;

  openModal('productModal');
}

// ========================================
// CART — ADD / REMOVE / QUANTITY
// ========================================

/**
 * Add a product to the cart.
 * If it already exists, just increment its quantity.
 */
function addToCart(id) {
  const product  = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  updateCartBadge();
  showToast(`${product.emoji} "${product.name}" added to cart!`);
}

/**
 * Remove a product completely from the cart.
 */
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

/**
 * Increase or decrease a cart item's quantity by delta (+1 or -1).
 * If qty drops to 0, remove the item entirely.
 */
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
    updateCartBadge();
    renderCartItems();
  }
}

/**
 * Persist the cart array to localStorage.
 */
function saveCart() {
  localStorage.setItem('luxe_cart', JSON.stringify(cart));
}

/**
 * Update the item-count badges on the navbar cart button
 * and inside the cart sidebar header.
 */
function updateCartBadge() {
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cartCount').textContent    = totalQty;
  document.getElementById('navCartCount').textContent = totalQty;
}

// ========================================
// CART SIDEBAR — OPEN / CLOSE / RENDER
// ========================================

/**
 * Slide the cart sidebar in or out, and toggle its dark overlay.
 */
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
  renderCartItems(); // always refresh before showing
}

/**
 * Build and inject the list of cart item rows,
 * and show/hide the footer (total + checkout button).
 */
function renderCartItems() {
  const itemsEl  = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  // Empty state
  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-bag">🛍</div>
        <p>Your cart is empty</p>
      </div>
    `;
    footerEl.style.display = 'none';
    return;
  }

  // Build each cart row
  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">

      <!-- Emoji thumbnail -->
      <div class="cart-item-img">${item.emoji}</div>

      <!-- Name + line total -->
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">
          ₹${(item.price * item.qty).toLocaleString('en-IN')}
        </div>
      </div>

      <!-- Qty controls + remove -->
      <div class="cart-item-controls">
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span  class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, +1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">
          ✕ Remove
        </button>
      </div>

    </div>
  `).join('');

  // Cart total
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent =
    `₹${total.toLocaleString('en-IN')}`;

  footerEl.style.display = 'block';
}

// ========================================
// CHECKOUT
// ========================================

/**
 * Called when "Proceed to Checkout" is clicked.
 * If the user is not logged in, redirect them to login first.
 */
function goToCheckout() {
  if (!currentUser) {
    showToast('Please login to checkout!', 'warn');
    toggleCart(); // close cart
    setTimeout(() => openModal('authModal'), 400);
    return;
  }

  // Pre-fill the name from the logged-in user
  document.getElementById('shipName').value = currentUser.name;

  renderOrderSummary();
  toggleCart();            // close cart sidebar
  openModal('checkoutModal');
}

/**
 * Build the order summary list in the right column of the checkout modal.
 */
function renderOrderSummary() {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  document.getElementById('orderSummary').innerHTML =
    cart.map(i => `
      <div class="order-summary-item">
        <span>${i.emoji} ${i.name} × ${i.qty}</span>
        <span>₹${(i.price * i.qty).toLocaleString('en-IN')}</span>
      </div>
    `).join('');

  document.getElementById('orderGrandTotal').textContent =
    `₹${total.toLocaleString('en-IN')}`;
}

/**
 * Validate the checkout form and simulate placing an order.
 */
function placeOrder() {

  // --- Validate shipping fields ---
  const name    = document.getElementById('shipName').value.trim();
  const address = document.getElementById('shipAddress').value.trim();
  const city    = document.getElementById('shipCity').value.trim();
  const pin     = document.getElementById('shipPin').value.trim();

  if (!name || !address || !city || !pin) {
    showToast('Please fill in all shipping details!', 'warn');
    return;
  }

  // --- Validate card fields (only if card payment selected) ---
  const payment = document.querySelector('input[name="payment"]:checked').value;
  if (payment === 'card') {
    const cardNum = document.getElementById('cardNum').value.trim();
    const cardExp = document.getElementById('cardExp').value.trim();
    const cardCvv = document.getElementById('cardCvv').value.trim();

    if (!cardNum || !cardExp || !cardCvv) {
      showToast('Please fill in your card details!', 'warn');
      return;
    }
  }

  // --- Success: generate order ID, clear cart, show success modal ---
  const orderId = 'LUXE-' + Date.now().toString().slice(-8);
  document.getElementById('orderId').textContent = `Order ID: ${orderId}`;

  cart = [];
  saveCart();
  updateCartBadge();

  closeModal('checkoutModal');
  openModal('successModal');
}

/**
 * Auto-format a card number input as "XXXX XXXX XXXX XXXX".
 */
function formatCard(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 16); // digits only, max 16
  input.value = val.replace(/(.{4})/g, '$1 ').trim();        // add spaces every 4
}

// ========================================
// USER AUTHENTICATION
// ========================================

/**
 * Log in with email + password.
 * Checks against the users array stored in localStorage.
 */
function handleLogin() {
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl    = document.getElementById('loginError');

  // Basic validation
  if (!email || !password) {
    errEl.textContent = 'Please fill in all fields.';
    return;
  }

  // Find matching user
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    errEl.textContent = 'Invalid email or password.';
    return;
  }

  // Success
  currentUser = user;
  localStorage.setItem('luxe_current_user', JSON.stringify(currentUser));
  closeModal('authModal');
  updateNavUser();
  showToast(`Welcome back, ${user.name}! 👋`);
}

/**
 * Register a new account.
 * Saves the new user into the users array in localStorage.
 */
function handleRegister() {
  const name     = document.getElementById('regName').value.trim();
  const email    = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const errEl    = document.getElementById('registerError');

  // Validation
  if (!name || !email || !password) {
    errEl.textContent = 'Please fill in all fields.';
    return;
  }
  if (password.length < 6) {
    errEl.textContent = 'Password must be at least 6 characters.';
    return;
  }
  if (users.find(u => u.email === email)) {
    errEl.textContent = 'An account with this email already exists.';
    return;
  }

  // Save new user
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem('luxe_users', JSON.stringify(users));

  // Auto-login the new user
  currentUser = newUser;
  localStorage.setItem('luxe_current_user', JSON.stringify(currentUser));

  closeModal('authModal');
  updateNavUser();
  showToast(`Welcome to LUXE, ${name}! 🎉`);
}

/**
 * Log out the current user.
 */
function logout() {
  currentUser = null;
  localStorage.removeItem('luxe_current_user');
  updateNavUser();
  showToast('Logged out successfully.');
}

/**
 * Update the navbar's user area:
 * - If logged in: show name chip + logout button
 * - If logged out: show "Login / Register" button
 */
function updateNavUser() {
  const el = document.getElementById('navUser');

  if (currentUser) {
    el.innerHTML = `
      <span class="user-name">👤 ${currentUser.name.split(' ')[0]}</span>
      <button class="logout-btn" onclick="logout()">Logout</button>
    `;
  } else {
    el.innerHTML = `
      <button class="auth-btn" onclick="openModal('authModal')">
        Login / Register
      </button>
    `;
  }
}

/**
 * Switch between the Login and Register tabs inside the auth modal.
 */
function switchTab(tab) {
  const isLogin = tab === 'login';

  document.getElementById('loginForm').style.display    = isLogin ? 'block' : 'none';
  document.getElementById('registerForm').style.display = isLogin ? 'none'  : 'block';
  document.getElementById('loginTab').classList.toggle('active',  isLogin);
  document.getElementById('registerTab').classList.toggle('active', !isLogin);

  // Clear any error messages when switching tabs
  document.getElementById('loginError').textContent    = '';
  document.getElementById('registerError').textContent = '';
}

// ========================================
// MODAL HELPERS
// ========================================

/** Open a modal by adding the .open class */
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

/** Close a modal by removing the .open class */
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ========================================
// TOAST NOTIFICATION
// ========================================

/**
 * Show a small popup notification at the bottom of the screen.
 * type = 'success' (dark) or 'warn' (gold)
 */
function showToast(msg, type = 'success') {

  // Remove any existing toast first
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;

  // Inline styles so no CSS class is needed
  Object.assign(toast.style, {
    position:        'fixed',
    bottom:          '2rem',
    left:            '50%',
    transform:       'translateX(-50%) translateY(20px)',
    background:      type === 'warn' ? '#c9a84c' : '#111111',
    color:           '#ffffff',
    padding:         '0.8rem 1.8rem',
    borderRadius:    '40px',
    fontFamily:      "'Jost', sans-serif",
    fontSize:        '0.9rem',
    fontWeight:      '500',
    zIndex:          '9999',
    boxShadow:       '0 8px 30px rgba(0,0,0,0.25)',
    opacity:         '0',
    transition:      'all 0.3s ease',
    whiteSpace:      'nowrap',
    pointerEvents:   'none',
  });

  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.style.opacity   = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  // Animate out after 3 seconds
  setTimeout(() => {
    toast.style.opacity   = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}