# 🧵 Bandhej Bazar - Premium Bandhani Sarees E-commerce

A fully functional, deployment-ready e-commerce website for Bandhej Bazar, specializing in exclusive handcrafted Bandhani sarees. Built with vanilla HTML, CSS, and JavaScript for maximum performance and compatibility.

![Bandhej Bazar](https://img.shields.io/badge/Status-Production%20Ready-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: 12 premium Bandhani sarees with detailed descriptions
- **Advanced Filtering**: Search, color filter, price range, and sorting options
- **Shopping Cart**: Full cart management with quantity controls
- **Wishlist**: Save favorite products for later
- **Multi-step Checkout**: Professional 3-step checkout flow with validation
- **Order Management**: Order history stored in localStorage

### 🎨 User Experience
- **Product Detail Modal**: Quick view with zoom functionality
- **Toast Notifications**: Real-time feedback for user actions
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Premium animations and transitions
- **Scroll to Top**: Convenient navigation button
- **Newsletter Subscription**: Email collection for marketing

### 🚀 Performance & SEO
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD schema for better search visibility
- **PWA Ready**: Installable as a Progressive Web App
- **Fast Loading**: Optimized assets and lazy loading
- **Accessibility**: WCAG 2.1 AA compliant

### 🔒 Security & Legal
- **Privacy Policy**: Comprehensive privacy documentation
- **Terms & Conditions**: Legal terms and conditions page
- **Secure Forms**: Client-side validation for all forms
- **Security Headers**: Configured via Netlify

## 📁 Project Structure

```
bandhej-bazar/
├── index.html          # Main homepage
├── styles.css          # Complete stylesheet
├── script.js           # All JavaScript functionality
├── manifest.json       # PWA manifest
├── robots.txt          # Search engine directives
├── sitemap.xml         # XML sitemap
├── netlify.toml        # Netlify configuration
├── privacy.html        # Privacy policy page
├── terms.html          # Terms & conditions page
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone or download the project**
   ```bash
   cd "path/to/project"
   ```

2. **Open with a local server**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js (http-server):
   ```bash
   npx http-server -p 8000
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Using VS Code Live Server

1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🌐 Deployment

### Deploy to Netlify

1. **Via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Via Netlify Dashboard**
   - Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your Git repository

3. **Configuration**
   - The `netlify.toml` file is already configured
   - No build process required (static site)

### Deploy to Vercel

1. **Via Vercel CLI**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Via Vercel Dashboard**
   - Import your Git repository
   - No configuration needed

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select main branch as source
   - Save

## 🎯 Key Functionality

### Shopping Cart
- Add/remove products
- Update quantities
- Persistent storage (localStorage)
- Real-time total calculation
- Checkout flow with validation

### Wishlist
- Save favorite products
- Quick add to cart from wishlist
- Persistent storage
- Visual feedback with heart animations

### Checkout Process
1. **Contact Information**: Name, email, phone
2. **Shipping Address**: Full address with PIN code validation
3. **Payment Method**: COD, UPI, Card options
4. **Order Confirmation**: Order ID and success message

### Product Management
- 12 pre-loaded products with SVG images
- Detailed product information
- Color and price categorization
- Badge system (Bestseller, New, Premium, etc.)

## 🔧 Customization

### Adding Products

Edit `script.js` and add to the `products` array:

```javascript
{
    id: 13,
    name: "Your Product Name",
    description: "Product description",
    price: 9999,
    color: "red",
    category: "premium",
    image: "your-image-url",
    badge: "New"
}
```

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --color-primary: #D91A5B;
  --color-secondary: #1ABED9;
  --color-accent: #FFB800;
  /* ... more colors */
}
```

### Modifying Content

- **Hero Section**: Edit text in `index.html` (lines 105-120)
- **About Section**: Edit content in `index.html` (lines 195-220)
- **Contact Info**: Update in `index.html` (lines 275-295)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design System

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

### Color Palette
- **Primary**: Vibrant Magenta (#D91A5B)
- **Secondary**: Turquoise (#1ABED9)
- **Accent**: Golden Yellow (#FFB800)
- **Neutrals**: Grays and white

### Spacing
- Uses consistent spacing scale (0.5rem to 6rem)
- Responsive padding and margins

## 🔐 Security Features

- XSS Protection headers
- Content Security Policy
- Secure form validation
- No sensitive data in localStorage
- HTTPS recommended for production

## 📊 Performance

- **Lighthouse Score Target**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🐛 Known Limitations

- Payment integration is simulated (not connected to real payment gateway)
- Email notifications are not implemented (requires backend)
- Product images are SVG placeholders (replace with real images)
- No user authentication system
- No admin panel for product management

## 🔄 Future Enhancements

- [ ] Backend integration (Node.js/PHP)
- [ ] Real payment gateway (Razorpay/Stripe)
- [ ] User authentication and accounts
- [ ] Admin dashboard for product management
- [ ] Email notifications
- [ ] Product reviews and ratings
- [ ] Advanced analytics
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License - feel free to use it for personal or commercial projects.

## 👨‍💻 Support

For questions or issues:
- **Email**: info@bandhejbazar.com
- **Phone**: +91 98765 43210

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from traditional Bandhani art

---

**Made with ❤️ for traditional craftsmanship**

*Bandhej Bazar - Celebrating 5,000 years of Bandhani heritage*
