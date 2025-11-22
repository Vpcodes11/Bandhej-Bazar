// ============================================
// BANDHEJ BAZAR - Enhanced E-commerce Functionality
// ============================================

// Product Data with Professional Images - Expanded Catalog
const products = [
    // SAREES - Premium Silk
    {
        id: 1,
        name: "Royal Red Bandhani",
        description: "Stunning red and gold silk saree with traditional tie-dye patterns. Perfect for weddings and special occasions.",
        price: 8999,
        color: "red",
        category: "premium",
        productType: "saree",
        fabric: "silk",
        occasion: "wedding",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=900&fit=crop&q=80",
        badge: "Bestseller"
    },
    {
        id: 2,
        name: "Turquoise Dream",
        description: "Vibrant turquoise and white Bandhani silk saree. Lightweight and elegant for summer events.",
        price: 7499,
        color: "blue",
        category: "premium",
        productType: "saree",
        fabric: "silk",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=900&fit=crop&q=80",
        badge: "New"
    },
    {
        id: 3,
        name: "Magenta Elegance",
        description: "Premium magenta and yellow Bandhani silk saree. Handcrafted with over 10,000 tie-dye knots.",
        price: 9999,
        color: "pink",
        category: "premium",
        productType: "saree",
        fabric: "silk",
        occasion: "wedding",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&h=900&fit=crop&q=80",
        badge: "Premium"
    },
    {
        id: 4,
        name: "Royal Blue Heritage",
        description: "Deep navy blue with silver metallic patterns. A timeless classic from Rajasthan.",
        price: 11999,
        color: "blue",
        category: "luxury",
        productType: "saree",
        fabric: "silk",
        occasion: "wedding",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1610030469750-a0fe014e6c1e?w=600&h=900&fit=crop&q=80",
        badge: "Luxury"
    },
    {
        id: 5,
        name: "Emerald Splendor",
        description: "Rich emerald green with golden tie-dye motifs. Eco-friendly natural dyes used.",
        price: 8499,
        color: "green",
        category: "premium",
        productType: "saree",
        fabric: "silk",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=900&fit=crop&q=80",
        badge: ""
    },
    {
        id: 6,
        name: "Purple Majesty",
        description: "Deep purple with hot pink traditional patterns. Inspired by royal Rajasthani heritage.",
        price: 7999,
        color: "purple",
        category: "premium",
        productType: "saree",
        fabric: "silk",
        occasion: "party",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1610030469964-471e2b5a5b3f?w=600&h=900&fit=crop&q=80",
        badge: ""
    },

    // SAREES - Cotton Collection
    {
        id: 7,
        name: "Sunset Orange Cotton",
        description: "Bright orange cotton saree with maroon Gujarati Bandhani style. Perfect for festive celebrations.",
        price: 4999,
        color: "orange",
        category: "classic",
        productType: "saree",
        fabric: "cotton",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1583391733981-4745d9d52a8d?w=600&h=900&fit=crop&q=80",
        badge: ""
    },
    {
        id: 8,
        name: "Pink Paradise Cotton",
        description: "Soft pink cotton saree with white traditional Bandhani dots. Comfortable for daily wear.",
        price: 3999,
        color: "pink",
        category: "classic",
        productType: "saree",
        fabric: "cotton",
        occasion: "casual",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&h=900&fit=crop&q=80&hue=330",
        badge: ""
    },
    {
        id: 9,
        name: "Jade Green Cotton Classic",
        description: "Traditional jade green cotton saree with white patterns. Breathable and elegant.",
        price: 4499,
        color: "green",
        category: "classic",
        productType: "saree",
        fabric: "cotton",
        occasion: "casual",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1610030469750-a0fe014e6c1e?w=600&h=900&fit=crop&q=80&hue=120",
        badge: ""
    },

    // SAREES - Georgette Collection
    {
        id: 10,
        name: "Black Gold Luxury Georgette",
        description: "Elegant black georgette saree with luxurious gold patterns. The epitome of sophistication.",
        price: 9999,
        color: "black",
        category: "luxury",
        productType: "saree",
        fabric: "georgette",
        occasion: "party",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=900&fit=crop&q=80&sat=-100&con=20",
        badge: "Exclusive"
    },
    {
        id: 11,
        name: "Crimson Royale Georgette",
        description: "Deep crimson georgette saree with intricate golden borders. Lightweight and flowy.",
        price: 8499,
        color: "red",
        category: "premium",
        productType: "saree",
        fabric: "georgette",
        occasion: "party",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=900&fit=crop&q=80&sat=50",
        badge: "Premium"
    },
    {
        id: 12,
        name: "Ocean Blue Georgette",
        description: "Serene ocean blue georgette saree with silver accents. Perfect for evening events.",
        price: 7999,
        color: "blue",
        category: "classic",
        productType: "saree",
        fabric: "georgette",
        occasion: "party",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=900&fit=crop&q=80&hue=200",
        badge: ""
    },

    // SAREES - Chiffon Collection
    {
        id: 13,
        name: "Lavender Chiffon Dreams",
        description: "Delicate lavender chiffon saree with silver Bandhani work. Ultra-lightweight and graceful.",
        price: 6999,
        color: "purple",
        category: "premium",
        productType: "saree",
        fabric: "chiffon",
        occasion: "party",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1610030469964-471e2b5a5b3f?w=600&h=900&fit=crop&q=80&hue=270",
        badge: "New"
    },
    {
        id: 14,
        name: "Peach Blossom Chiffon",
        description: "Soft peach chiffon saree with golden tie-dye patterns. Perfect for daytime events.",
        price: 6499,
        color: "orange",
        category: "classic",
        productType: "saree",
        fabric: "chiffon",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1583391733981-4745d9d52a8d?w=600&h=900&fit=crop&q=80&hue=30",
        badge: ""
    },
    {
        id: 15,
        name: "Mint Green Chiffon",
        description: "Fresh mint green chiffon saree with white Bandhani dots. Breezy and elegant.",
        price: 5999,
        color: "green",
        category: "classic",
        productType: "saree",
        fabric: "chiffon",
        occasion: "casual",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=900&fit=crop&q=80&hue=150",
        badge: ""
    },

    // DUPATTAS
    {
        id: 16,
        name: "Red Bandhani Dupatta",
        description: "Vibrant red silk dupatta with traditional Bandhani patterns. Perfect match for any outfit.",
        price: 2999,
        color: "red",
        category: "premium",
        productType: "dupatta",
        fabric: "silk",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=900&fit=crop&q=80&crop=top",
        badge: ""
    },
    {
        id: 17,
        name: "Turquoise Silk Dupatta",
        description: "Beautiful turquoise silk dupatta with white tie-dye work. Adds elegance to any ensemble.",
        price: 2499,
        color: "blue",
        category: "premium",
        productType: "dupatta",
        fabric: "silk",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=900&fit=crop&q=80&crop=top",
        badge: "Bestseller"
    },
    {
        id: 18,
        name: "Golden Yellow Dupatta",
        description: "Bright golden yellow cotton dupatta with maroon Bandhani dots. Festive and vibrant.",
        price: 1999,
        color: "orange",
        category: "classic",
        productType: "dupatta",
        fabric: "cotton",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1583391733981-4745d9d52a8d?w=600&h=900&fit=crop&q=80&crop=top",
        badge: ""
    },
    {
        id: 19,
        name: "Pink Georgette Dupatta",
        description: "Soft pink georgette dupatta with silver work. Lightweight and versatile.",
        price: 2299,
        color: "pink",
        category: "classic",
        productType: "dupatta",
        fabric: "georgette",
        occasion: "party",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&h=900&fit=crop&q=80&crop=top",
        badge: ""
    },
    {
        id: 20,
        name: "Green Chiffon Dupatta",
        description: "Elegant green chiffon dupatta with golden Bandhani patterns. Graceful and airy.",
        price: 1799,
        color: "green",
        category: "classic",
        productType: "dupatta",
        fabric: "chiffon",
        occasion: "casual",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=900&fit=crop&q=80&crop=top",
        badge: ""
    },

    // LEHENGAS
    {
        id: 21,
        name: "Bridal Red Lehenga",
        description: "Stunning bridal red silk lehenga with heavy Bandhani work and golden embellishments.",
        price: 24999,
        color: "red",
        category: "luxury",
        productType: "lehenga",
        fabric: "silk",
        occasion: "wedding",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=900&fit=crop&q=80&crop=center",
        badge: "Exclusive"
    },
    {
        id: 22,
        name: "Royal Blue Lehenga",
        description: "Majestic royal blue silk lehenga with silver Bandhani patterns. Perfect for grand celebrations.",
        price: 22999,
        color: "blue",
        category: "luxury",
        productType: "lehenga",
        fabric: "silk",
        occasion: "wedding",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1610030469750-a0fe014e6c1e?w=600&h=900&fit=crop&q=80&crop=center",
        badge: "Premium"
    },
    {
        id: 23,
        name: "Pink Party Lehenga",
        description: "Gorgeous pink georgette lehenga with intricate tie-dye work. Ideal for festive occasions.",
        price: 18999,
        color: "pink",
        category: "premium",
        productType: "lehenga",
        fabric: "georgette",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&h=900&fit=crop&q=80&crop=center",
        badge: ""
    },
    {
        id: 24,
        name: "Green Festive Lehenga",
        description: "Vibrant green silk lehenga with golden Bandhani motifs. Traditional and elegant.",
        price: 19999,
        color: "green",
        category: "premium",
        productType: "lehenga",
        fabric: "silk",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=900&fit=crop&q=80&crop=center",
        badge: "New"
    },

    // DRESS MATERIALS
    {
        id: 25,
        name: "Red Bandhani Suit Set",
        description: "Complete unstitched suit set with red Bandhani kurta fabric, dupatta, and bottom.",
        price: 5999,
        color: "red",
        category: "premium",
        productType: "dress-material",
        fabric: "cotton",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=900&fit=crop&q=80&crop=bottom",
        badge: ""
    },
    {
        id: 26,
        name: "Blue Cotton Dress Material",
        description: "Beautiful blue cotton dress material with white Bandhani work. Ready to stitch.",
        price: 4999,
        color: "blue",
        category: "classic",
        productType: "dress-material",
        fabric: "cotton",
        occasion: "casual",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=900&fit=crop&q=80&crop=bottom",
        badge: "Bestseller"
    },
    {
        id: 27,
        name: "Pink Silk Suit Set",
        description: "Premium pink silk dress material with intricate Bandhani patterns. Luxurious fabric.",
        price: 7999,
        color: "pink",
        category: "premium",
        productType: "dress-material",
        fabric: "silk",
        occasion: "party",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&h=900&fit=crop&q=80&crop=bottom",
        badge: ""
    },
    {
        id: 28,
        name: "Green Georgette Suit",
        description: "Elegant green georgette dress material with golden tie-dye work. Flowy and comfortable.",
        price: 6499,
        color: "green",
        category: "premium",
        productType: "dress-material",
        fabric: "georgette",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=900&fit=crop&q=80&crop=bottom",
        badge: ""
    },
    {
        id: 29,
        name: "Orange Festival Suit Set",
        description: "Vibrant orange cotton dress material perfect for festive celebrations. Complete set.",
        price: 4499,
        color: "orange",
        category: "classic",
        productType: "dress-material",
        fabric: "cotton",
        occasion: "festive",
        pattern: "bandhani",
        image: "https://images.unsplash.com/photo-1583391733981-4745d9d52a8d?w=600&h=900&fit=crop&q=80&crop=bottom",
        badge: ""
    },

    // LEHERIYA PATTERN SAREES
    {
        id: 30,
        name: "Rainbow Leheriya Saree",
        description: "Multicolor Leheriya silk saree with diagonal wave patterns. Traditional Rajasthani style.",
        price: 8999,
        color: "pink",
        category: "premium",
        productType: "saree",
        fabric: "silk",
        occasion: "festive",
        pattern: "leheriya",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&h=900&fit=crop&q=80&hue=300",
        badge: "Trending"
    },
    {
        id: 31,
        name: "Yellow Leheriya Silk",
        description: "Bright yellow silk saree with traditional Leheriya wave patterns. Festive and cheerful.",
        price: 7999,
        color: "orange",
        category: "premium",
        productType: "saree",
        fabric: "silk",
        occasion: "festive",
        pattern: "leheriya",
        image: "https://images.unsplash.com/photo-1583391733981-4745d9d52a8d?w=600&h=900&fit=crop&q=80&hue=50",
        badge: ""
    },
    {
        id: 32,
        name: "Green Leheriya Classic",
        description: "Traditional green Leheriya saree with diagonal stripes. Authentic Rajasthani craftsmanship.",
        price: 7499,
        color: "green",
        category: "classic",
        productType: "saree",
        fabric: "cotton",
        occasion: "festive",
        pattern: "leheriya",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=900&fit=crop&q=80&hue=140",
        badge: ""
    },

    // TIE-DYE MODERN COLLECTION
    {
        id: 33,
        name: "Modern Tie-Dye Blue",
        description: "Contemporary blue tie-dye saree with abstract patterns. Fusion of traditional and modern.",
        price: 6999,
        color: "blue",
        category: "classic",
        productType: "saree",
        fabric: "georgette",
        occasion: "casual",
        pattern: "tie-dye",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=900&fit=crop&q=80&hue=220",
        badge: "New"
    },
    {
        id: 34,
        name: "Purple Tie-Dye Fusion",
        description: "Stunning purple tie-dye saree with modern patterns. Perfect for contemporary styling.",
        price: 6499,
        color: "purple",
        category: "classic",
        productType: "saree",
        fabric: "chiffon",
        occasion: "party",
        pattern: "tie-dye",
        image: "https://images.unsplash.com/photo-1610030469964-471e2b5a5b3f?w=600&h=900&fit=crop&q=80&hue=280",
        badge: ""
    },
    {
        id: 35,
        name: "Coral Tie-Dye Delight",
        description: "Beautiful coral tie-dye saree with unique patterns. Fresh and vibrant.",
        price: 5999,
        color: "pink",
        category: "classic",
        productType: "saree",
        fabric: "cotton",
        occasion: "casual",
        pattern: "tie-dye",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&h=900&fit=crop&q=80&hue=10",
        badge: ""
    },
    {
        id: 36,
        name: "Teal Tie-Dye Wonder",
        description: "Gorgeous teal tie-dye saree with flowing patterns. Modern and elegant.",
        price: 6299,
        color: "blue",
        category: "classic",
        productType: "saree",
        fabric: "georgette",
        occasion: "party",
        pattern: "tie-dye",
        image: "https://images.unsplash.com/photo-1610030469750-a0fe014e6c1e?w=600&h=900&fit=crop&q=80&hue=180",
        badge: ""
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('bandhejCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bandhejWishlist')) || [];
let orders = JSON.parse(localStorage.getItem('bandhejOrders')) || [];
let currentFilters = {
    search: '',
    productType: 'all',
    fabric: 'all',
    occasion: 'all',
    pattern: 'all',
    color: 'all',
    price: 'all',
    sort: 'featured'
};
let currentCheckoutStep = 1;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    setupEventListeners();
    setupScrollEffects();
    setupModals();
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    mobileMenuToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cart toggle
    const cartToggle = document.getElementById('cartToggle');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartClose = document.getElementById('cartClose');

    cartToggle?.addEventListener('click', () => {
        cartOverlay.classList.add('active');
    });

    cartClose?.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
    });

    cartOverlay?.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            cartOverlay.classList.remove('active');
        }
    });

    // Wishlist toggle
    const wishlistToggle = document.getElementById('wishlistToggle');
    const wishlistOverlay = document.getElementById('wishlistOverlay');
    const wishlistClose = document.getElementById('wishlistClose');

    wishlistToggle?.addEventListener('click', () => {
        wishlistOverlay.classList.add('active');
    });

    wishlistClose?.addEventListener('click', () => {
        wishlistOverlay.classList.remove('active');
    });

    wishlistOverlay?.addEventListener('click', (e) => {
        if (e.target === wishlistOverlay) {
            wishlistOverlay.classList.remove('active');
        }
    });

    // Checkout button
    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!', 'error');
            return;
        }
        document.getElementById('cartOverlay').classList.remove('active');
        openCheckoutModal();
    });

    // Filter listeners
    document.getElementById('searchInput')?.addEventListener('input', (e) => {
        currentFilters.search = e.target.value.toLowerCase();
        renderProducts();
    });

    document.getElementById('productTypeFilter')?.addEventListener('change', (e) => {
        currentFilters.productType = e.target.value;
        renderProducts();
    });

    document.getElementById('fabricFilter')?.addEventListener('change', (e) => {
        currentFilters.fabric = e.target.value;
        renderProducts();
    });

    document.getElementById('occasionFilter')?.addEventListener('change', (e) => {
        currentFilters.occasion = e.target.value;
        renderProducts();
    });

    document.getElementById('patternFilter')?.addEventListener('change', (e) => {
        currentFilters.pattern = e.target.value;
        renderProducts();
    });

    document.getElementById('colorFilter')?.addEventListener('change', (e) => {
        currentFilters.color = e.target.value;
        renderProducts();
    });

    document.getElementById('priceFilter')?.addEventListener('change', (e) => {
        currentFilters.price = e.target.value;
        renderProducts();
    });

    document.getElementById('sortFilter')?.addEventListener('change', (e) => {
        currentFilters.sort = e.target.value;
        renderProducts();
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
            }
        });
    });

    // Newsletter form
    document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value;
        showToast('Thank you for subscribing!', 'success');
        e.target.reset();
    });

    // Checkout form
    document.getElementById('checkoutForm')?.addEventListener('submit', handleCheckoutSubmit);

    // Scroll to top
    document.getElementById('scrollToTop')?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================
function setupScrollEffects() {
    const header = document.getElementById('header');
    const scrollToTop = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            scrollToTop?.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            scrollToTop?.classList.remove('visible');
        }
    });
}

// ============================================
// MODAL SETUP
// ============================================
function setupModals() {
    // Product modal
    const productModal = document.getElementById('productModal');
    const productModalClose = document.getElementById('productModalClose');

    productModalClose?.addEventListener('click', () => {
        productModal.classList.remove('active');
    });

    productModal?.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('active');
        }
    });

    // Checkout modal
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutModalClose = document.getElementById('checkoutModalClose');

    checkoutModalClose?.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
        resetCheckoutForm();
    });

    checkoutModal?.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('active');
            resetCheckoutForm();
        }
    });
}

// ============================================
// PRODUCT RENDERING
// ============================================
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    let filteredProducts = [...products];

    // Apply search filter
    if (currentFilters.search) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(currentFilters.search) ||
            product.description.toLowerCase().includes(currentFilters.search)
        );
    }

    // Apply color filter
    if (currentFilters.color !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
            product.color === currentFilters.color
        );
    }

    // Apply product type filter
    if (currentFilters.productType !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
            product.productType === currentFilters.productType
        );
    }

    // Apply fabric filter
    if (currentFilters.fabric !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
            product.fabric === currentFilters.fabric
        );
    }

    // Apply occasion filter
    if (currentFilters.occasion !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
            product.occasion === currentFilters.occasion
        );
    }

    // Apply pattern filter
    if (currentFilters.pattern !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
            product.pattern === currentFilters.pattern
        );
    }

    // Apply price filter
    if (currentFilters.price !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            if (currentFilters.price === 'low') return product.price < 5000;
            if (currentFilters.price === 'mid') return product.price >= 5000 && product.price <= 10000;
            if (currentFilters.price === 'high') return product.price > 10000 && product.price <= 20000;
            if (currentFilters.price === 'luxury') return product.price > 20000;
            return true;
        });
    }

    // Apply sorting
    if (currentFilters.sort === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (currentFilters.sort === 'price-high') {
            <div class="product-image" onclick="openProductModal(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <div class="wishlist-heart-btn ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 60)}...</p>
                <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div >
            `}).join('');

    // Add animation
    const cards = productsGrid.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease ${ index * 0.1 }s backwards`;
    });
}

// ============================================
// PRODUCT MODAL
// ============================================
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('productModalContent');
    const isInWishlist = wishlist.some(item => item.id === product.id);

    modalContent.innerHTML = `
            < div class="product-detail-grid" >
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                ${product.badge ? `<span class="product-badge" style="position: static; margin-bottom: 1rem;">${product.badge}</span>` : ''}
                <div class="product-detail-price">₹${product.price.toLocaleString('en-IN')}</div>
                <p class="product-detail-description">${product.description}</p>
                
                <div style="margin: 1.5rem 0;">
                    <h4>Product Details:</h4>
                    <ul style="list-style: none; padding: 0; margin-top: 0.5rem;">
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--color-gray-200);"><strong>Fabric:</strong> Pure Silk</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--color-gray-200);"><strong>Length:</strong> 5.5 meters</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--color-gray-200);"><strong>Blouse:</strong> 0.8 meters (unstitched)</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--color-gray-200);"><strong>Care:</strong> Dry clean only</li>
                        <li style="padding: 0.5rem 0;"><strong>Origin:</strong> Gujarat/Rajasthan, India</li>
                    </ul>
                </div>

                <div class="product-detail-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeProductModal();" style="flex: 1;">
                        <i class="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                    <button class="btn btn-secondary" onclick="toggleWishlist(${product.id})" style="padding: 1rem;">
                        <i class="fas fa-heart ${isInWishlist ? '' : 'far'}"></i>
                    </button>
                </div>
            </div>
        </div >
            `;

    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

// ============================================
// WISHLIST FUNCTIONALITY
// ============================================
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = wishlist.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(product);
        showToast('Added to wishlist!', 'success');
    }

    saveWishlist();
    updateWishlistUI();
    renderProducts(); // Re-render to update heart icons
}

function saveWishlist() {
    localStorage.setItem('bandhejWishlist', JSON.stringify(wishlist));
}

function updateWishlistUI() {
    const wishlistCount = document.getElementById('wishlistCount');
    const wishlistItems = document.getElementById('wishlistItems');
    const wishlistEmpty = document.getElementById('wishlistEmpty');

    // Update wishlist count
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
        wishlistCount.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }

    // Update wishlist items
    if (wishlist.length === 0) {
        wishlistEmpty.style.display = 'block';
        wishlistItems.innerHTML = wishlistEmpty.outerHTML;
    } else {
        wishlistEmpty.style.display = 'none';

        wishlistItems.innerHTML = wishlist.map(item => `
            < div class="cart-item" >
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                    <button class="btn btn-primary" onclick="addToCart(${item.id}); showToast('Added to cart!', 'success');" style="margin-top: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem;">
                        <i class="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                </div>
                <div class="cart-item-remove" onclick="toggleWishlist(${item.id})">
                    <i class="fas fa-trash"></i>
                </div>
            </div >
            `).join('');
    }
}

// ============================================
// CART FUNCTIONALITY
// ============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast('Added to cart!', 'success');
    showAddToCartAnimation();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Removed from cart', 'info');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('bandhejCart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Update cart items
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
        cartItems.innerHTML = cartEmpty.outerHTML;
    } else {
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';

        cartItems.innerHTML = cart.map(item => `
            < div class="cart-item" >
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </div>
            </div >
            `).join('');

        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `₹${ total.toLocaleString('en-IN') } `;
    }
}

function showAddToCartAnimation() {
    const cartIcon = document.getElementById('cartToggle');
    cartIcon.style.animation = 'none';
    setTimeout(() => {
        cartIcon.style.animation = 'pulse 0.5s ease';
    }, 10);
}

// ============================================
// CHECKOUT FUNCTIONALITY
// ============================================
function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    currentCheckoutStep = 1;
    updateCheckoutProgress();
    updateCheckoutSummary();
    modal.classList.add('active');
}

function nextStep(step) {
    // Validate current step
    if (!validateCheckoutStep(currentCheckoutStep)) {
        return;
    }

    // Hide current step
    document.getElementById(`step${ currentCheckoutStep } `).classList.add('hidden');

    // Show next step
    currentCheckoutStep = step;
    document.getElementById(`step${ currentCheckoutStep } `).classList.remove('hidden');

    updateCheckoutProgress();
    updateCheckoutSummary();
}

function prevStep(step) {
    // Hide current step
    document.getElementById(`step${ currentCheckoutStep } `).classList.add('hidden');

    // Show previous step
    currentCheckoutStep = step;
    document.getElementById(`step${ currentCheckoutStep } `).classList.remove('hidden');

    updateCheckoutProgress();
}

function updateCheckoutProgress() {
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        if (index + 1 <= currentCheckoutStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function validateCheckoutStep(step) {
    if (step === 1) {
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (!fullName || !email || !phone) {
            showToast('Please fill in all required fields', 'error');
            return false;
        }

        if (!email.includes('@')) {
            showToast('Please enter a valid email address', 'error');
            return false;
        }

        if (phone.length < 10) {
            showToast('Please enter a valid phone number', 'error');
            return false;
        }
    }

    if (step === 2) {
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value.trim();
        const pincode = document.getElementById('pincode').value.trim();

        if (!address || !city || !state || !pincode) {
            showToast('Please fill in all required fields', 'error');
            return false;
        }

        if (pincode.length !== 6 || !/^\d+$/.test(pincode)) {
            showToast('Please enter a valid 6-digit PIN code', 'error');
            return false;
        }
    }

    return true;
}

function updateCheckoutSummary() {
    const summaryDiv = document.getElementById('checkoutSummary');
    if (!summaryDiv) return;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 10000 ? 0 : 200;
    const total = subtotal + shipping;

    summaryDiv.innerHTML = `
            < div style = "margin-bottom: 1rem;" >
                ${
                    cart.map(item => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>${item.name} × ${item.quantity}</span>
                    <span>₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
            `).join('')
        }
        </div >
            <div style="border-top: 2px solid var(--color-gray-200); padding-top: 1rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Subtotal:</span>
                    <span>₹${subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Shipping:</span>
                    <span>${shipping === 0 ? 'FREE' : '₹' + shipping.toLocaleString('en-IN')}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 1.25rem; font-weight: 700; margin-top: 1rem; padding-top: 1rem; border-top: 2px solid var(--color-gray-200);">
                    <span>Total:</span>
                    <span style="color: var(--color-primary);">₹${total.toLocaleString('en-IN')}</span>
                </div>
            </div>
        `;
}

function handleCheckoutSubmit(e) {
    e.preventDefault();

    if (!validateCheckoutStep(3)) {
        return;
    }

    // Create order
    const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: [...cart],
        customer: {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: {
                street: document.getElementById('address').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                pincode: document.getElementById('pincode').value
            }
        },
        payment: document.querySelector('input[name="payment"]:checked').value,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) +
            (cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) > 10000 ? 0 : 200)
    };

    // Save order
    orders.push(order);
    localStorage.setItem('bandhejOrders', JSON.stringify(orders));

    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();

    // Close modal
    document.getElementById('checkoutModal').classList.remove('active');
    resetCheckoutForm();

    // Show success message
    showToast('Order placed successfully! Order ID: #' + order.id, 'success');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetCheckoutForm() {
    currentCheckoutStep = 1;
    document.getElementById('checkoutForm').reset();
    document.querySelectorAll('.checkout-step').forEach((step, index) => {
        if (index === 0) {
            step.classList.remove('hidden');
        } else {
            step.classList.add('hidden');
        }
    });
    updateCheckoutProgress();
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${ type } `;

    const icon = type === 'success' ? 'check-circle' :
        type === 'error' ? 'exclamation-circle' :
            'info-circle';

    toast.innerHTML = `
            < i class="fas fa-${icon}" ></i >
        <span class="toast-message">${message}</span>
        <i class="fas fa-times toast-close" onclick="this.parentElement.remove()"></i>
        `;

    container.appendChild(toast);

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
        @keyframes pulse {
            0 %, 100 % { transform: scale(1); }
            50 % { transform: scale(1.2); }
        }
        `;
document.head.appendChild(style);
