# Revolution AI CopyWriters - Copywriter & Content Strategist Website

A modern, professional website for copywriting and content strategy services built with React, TypeScript, and Tailwind CSS. Features a complete payment integration system with both traditional and cryptocurrency payment options.

## 🚀 Quick Start

### Automated Installation

Run the installation script for a guided setup:

```bash
chmod +x install.sh
./install.sh
```

The script will:
- Check system requirements
- Guide you through configuration
- Install all dependencies
- Build the project
- Provide next steps

### Manual Installation

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd copywriter-website
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📋 System Requirements

- **Node.js**: Version 18 or higher
- **npm**: Latest version (comes with Node.js)
- **Git**: For version control (recommended)
- **Supabase Account**: For database and edge functions
- **Stripe Account**: For credit card payments (optional)
- **Cryptomus Account**: For cryptocurrency payments (optional)

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Supabase Configuration (Required)
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# SMTP Configuration (Optional - for email functionality)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM=hello@revolutionai.com

# Payment Processing (Required for payments)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
CRYPTOMUS_MERCHANT_ID=your_cryptomus_merchant_id
CRYPTOMUS_API_KEY=your_cryptomus_api_key
```

### Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the API settings
3. Run the database migrations from `supabase/migrations/`
4. Set up Row Level Security (RLS) policies
5. Deploy the edge functions for payment processing

### Payment Gateway Setup

#### Stripe Configuration
1. Create account at [stripe.com](https://stripe.com)
2. Get your secret key from the dashboard
3. Set up webhook endpoints for payment confirmations
4. Configure webhook secret for security

#### Cryptomus Configuration (Optional)
1. Create account at [cryptomus.com](https://cryptomus.com)
2. Get merchant ID and API key
3. Configure webhook endpoints for crypto payments
4. Set up supported cryptocurrencies (BTC, ETH, USDT, etc.)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation with cyber theme
│   ├── Footer.tsx       # Site footer with contact info
│   └── PaymentModal.tsx # Complete payment processing modal
├── pages/              # Website pages
│   ├── Home.tsx        # Landing page with services preview
│   ├── About.tsx       # About page with timeline
│   ├── Services.tsx    # Services with integrated payments
│   ├── Portfolio.tsx   # Portfolio with case studies
│   ├── Contact.tsx     # Contact page with forms
│   ├── Booking.tsx     # Project booking system
│   ├── PaymentSuccess.tsx # Payment confirmation page
│   └── PaymentCancel.tsx  # Payment cancellation page
├── lib/                # Utilities and configurations
│   └── supabase.ts     # Supabase client configuration
└── App.tsx             # Main application with routing

supabase/
├── migrations/         # Database schema migrations
│   ├── 20250613091711_royal_night.sql    # Initial tables
│   └── 20250622150438_holy_leaf.sql      # Orders table
└── functions/          # Edge functions for payments
    ├── create-payment/ # Payment creation endpoint
    ├── stripe-webhook/ # Stripe webhook handler
    └── cryptomus-webhook/ # Cryptomus webhook handler

public/                 # Static assets
```

## 💳 Payment Integration System

### Complete Payment Flow

The website features a comprehensive payment system that supports both traditional credit card payments via Stripe and cryptocurrency payments via Cryptomus.

#### Payment Modal Features
- **Beautiful UI**: Cyberpunk-themed modal with smooth animations
- **Customer Information**: Full name, email, and phone collection with validation
- **Payment Method Selection**: Choose between Stripe (cards) or Cryptomus (crypto)
- **Real-time Validation**: Client-side form validation with error handling
- **Loading States**: Processing indicators and step-by-step feedback
- **Product Summary**: Shows selected product details and pricing
- **Security**: SSL encryption and secure payment processing

#### Supported Payment Methods

**Credit Cards (via Stripe)**
- Visa, Mastercard, American Express
- Real-time payment processing
- Automatic receipt generation
- Refund capabilities

**Cryptocurrencies (via Cryptomus)**
- Bitcoin (BTC)
- Ethereum (ETH)
- Tether (USDT)
- And 50+ other cryptocurrencies
- QR code payments
- Real-time blockchain confirmations

### Payment API Endpoints

#### Create Payment (`/functions/v1/create-payment`)
- Processes payment requests for both Stripe and Cryptomus
- Creates order records in database
- Handles customer information securely
- Returns payment URLs or checkout sessions

#### Stripe Webhook (`/functions/v1/stripe-webhook`)
- Handles payment confirmations
- Updates order status automatically
- Processes refunds and cancellations
- Verifies webhook signatures for security

#### Cryptomus Webhook (`/functions/v1/cryptomus-webhook`)
- Processes cryptocurrency payment confirmations
- Updates order status based on blockchain confirmations
- Handles payment failures and expirations
- Verifies webhook authenticity

### Database Schema

#### Orders Table
```sql
- id (uuid, primary key)
- customer_name (text)
- customer_email (text)
- customer_phone (text, optional)
- product_id (text)
- product_title (text)
- product_description (text)
- amount (integer, in cents)
- currency (text, default 'USD')
- payment_method ('stripe' | 'cryptomus')
- status ('pending' | 'completed' | 'failed' | 'expired' | 'cancelled')
- stripe_session_id (text, optional)
- stripe_payment_intent_id (text, optional)
- cryptomus_payment_id (text, optional)
- payment_url (text, optional)
- created_at (timestamptz)
- completed_at (timestamptz, optional)
```

## 🎨 Design & Theme

### Cyberpunk Dark Theme
- **Color Palette**: Deep navy backgrounds with bright blue/teal accents
- **Typography**: Lora serif for headings, Inter sans-serif for body text
- **Animations**: Smooth transitions, glow effects, and micro-interactions
- **Responsive**: Mobile-first design with breakpoints for all devices

### Key Design Features
- **Gradient Backgrounds**: Multi-layered gradients for depth
- **Glow Effects**: Neon-style glows on interactive elements
- **Backdrop Blur**: Modern glass-morphism effects
- **Cyber Aesthetics**: Futuristic design elements throughout
- **Accessibility**: High contrast ratios and readable fonts

## 🛍️ Service Packages

### Tier 1 - Core Starter Funnels ($150-$600)
- Lead Gen Funnel Package
- Google Search Funnel Package
- Ecom Sales Funnel Package
- Starter Ads & Offer Setup
- Ad Copy Testing Pack

### Tier 2 - Value-Add & Growth Packages ($100-$1200)
- Lead Magnet Creation + Page Copy
- Follow-Up Script Pack
- Offer Rebuild & Positioning Refresh
- Mini Funnel Audit + Upgrade
- Complete Funnel Overhaul

### Tier 3 - AI-Powered Add-Ons ($100-$450)
- AI Ad Variation Generator
- AI Lead Follow-Up Automation
- AI Lead Magnet Creator
- AI Offer Angle Generator
- Chatbot Script + Setup
- AI Testimonial Collector
- Social Proof Automation Kit
- Auto-Scheduling Lead Flow
- AI Video Script Generator + Tools

### Premium Package ($950-$1500)
- All-In-One Growth Package
- Complete funnel build with AI automation
- 30-day results guarantee
- Bonus CRM and review automation templates

## 📱 Features

### Core Website Features
- **Responsive Design**: Mobile-first approach with perfect scaling
- **Modern UI**: Clean, professional cyberpunk design
- **Contact Forms**: Integrated with Supabase database
- **Service Tiers**: Organized service packages with clear pricing
- **Portfolio Showcase**: Project galleries with case studies
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Performance**: Optimized builds and lazy-loaded assets

### Payment System Features
- **Dual Payment Options**: Credit cards and cryptocurrency
- **Secure Processing**: PCI-compliant and blockchain-secure
- **Order Management**: Complete order tracking and status updates
- **Email Notifications**: Automated confirmation emails
- **Webhook Integration**: Real-time payment status updates
- **Error Handling**: Comprehensive error management and user feedback
- **Testing Support**: Full test mode for both payment processors

### Advanced Features
- **AI Integration Ready**: Prepared for AI-powered automation tools
- **Funnel Analytics**: Ready for conversion tracking integration
- **CRM Integration**: Database structure supports customer management
- **Multi-currency Support**: Extensible for international payments
- **Subscription Ready**: Database schema supports recurring payments
- **Affiliate Tracking**: Prepared for affiliate program integration

## 🧪 Testing

### Payment Testing

#### Stripe Test Cards
```
Success: 4242 4242 4242 4242
Decline: 4000 0000 0000 0002
Insufficient Funds: 4000 0000 0000 9995
Expired Card: 4000 0000 0000 0069
```

#### Cryptomus Testing
- Use test mode in Cryptomus dashboard
- Generate test payment invoices
- Test with various cryptocurrencies
- Verify webhook delivery

### Development Testing
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Environment Variables**:
   Add all environment variables in Netlify dashboard

3. **Edge Functions**:
   Deploy Supabase edge functions separately

### Vercel

1. Connect your repository
2. Set environment variables
3. Configure build settings
4. Deploy edge functions to Supabase

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload `dist/` folder contents to your web server
3. Configure server for SPA routing
4. Set up SSL certificates

## 🔒 Security

### Payment Security
- **PCI Compliance**: Stripe handles all card data securely
- **Blockchain Security**: Cryptomus provides secure crypto processing
- **Webhook Verification**: All webhooks are signature-verified
- **Data Encryption**: All sensitive data is encrypted in transit and at rest

### Application Security
- **Environment Variables**: Sensitive data stored securely
- **Supabase RLS**: Row Level Security protects data access
- **CORS Configuration**: Proper cross-origin request handling
- **Input Validation**: Both client and server-side validation
- **Rate Limiting**: Ready for implementation to prevent abuse

## 📊 Analytics & Monitoring

### Payment Analytics
- Order tracking and status monitoring
- Revenue reporting and analytics
- Customer behavior insights
- Payment method performance

### Website Analytics
- Page view tracking
- Conversion funnel analysis
- User engagement metrics
- Performance monitoring

## 🛠️ Development

### Adding New Services

1. Update service arrays in `src/pages/Services.tsx`
2. Add pricing and feature information
3. Test payment integration
4. Update documentation

### Adding Payment Methods

1. Create new edge function for payment processor
2. Update PaymentModal component
3. Add webhook handler
4. Update database schema if needed

### Customization Guidelines

- Use Tailwind CSS classes consistently
- Follow existing color scheme and animations
- Maintain responsive design principles
- Add hover states and micro-interactions
- Test across all device sizes

## 🐛 Troubleshooting

### Common Issues

**Payment Processing Errors**:
- Verify API keys are correct
- Check webhook endpoints are accessible
- Ensure SSL certificates are valid
- Verify environment variables

**Database Connection Issues**:
- Verify Supabase URL and key
- Check RLS policies are configured
- Ensure migrations are applied
- Test database connectivity

**Build Errors**:
- Check Node.js version (18+)
- Clear node_modules and reinstall
- Verify all environment variables
- Check for TypeScript errors

### Getting Help

1. Check this README documentation
2. Review error messages in browser console
3. Check Supabase logs for edge function errors
4. Verify payment gateway webhooks
5. Test in development mode first

## 📈 Performance Optimization

### Frontend Optimization
- Code splitting and lazy loading
- Image optimization and compression
- CSS and JavaScript minification
- Caching strategies

### Backend Optimization
- Database query optimization
- Edge function performance
- Webhook processing efficiency
- CDN integration

## 🔄 Updates & Maintenance

### Regular Maintenance
- Update dependencies monthly
- Monitor payment gateway changes
- Review security patches
- Backup database regularly

### Feature Updates
- Add new service packages
- Integrate additional payment methods
- Enhance user experience
- Expand automation capabilities

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (including payments)
5. Submit a pull request

## 🎯 Roadmap

### Upcoming Features
- **Subscription Payments**: Recurring payment support
- **Affiliate Program**: Partner referral system
- **Advanced Analytics**: Detailed conversion tracking
- **AI Automation**: Enhanced AI-powered tools
- **Mobile App**: React Native companion app
- **Multi-language**: International market support

### Integration Opportunities
- **CRM Systems**: HubSpot, Salesforce integration
- **Email Marketing**: Mailchimp, ConvertKit integration
- **Calendar Booking**: Calendly, Acuity integration
- **Project Management**: Notion, Asana integration

---

**Built with ❤️ for professional copywriters and content strategists**

*This comprehensive payment-integrated website provides everything needed to run a successful copywriting business online, from lead generation to payment processing and project delivery.*