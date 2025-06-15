# Sarah Mitchell - Copywriter & Content Strategist Website

A modern, professional website for copywriting and content strategy services built with React, TypeScript, and Tailwind CSS.

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

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Supabase Configuration (Required for contact forms)
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# SMTP Configuration (Optional - for email functionality)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM=hello@sarahmitchell.com
```

### Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the API settings
3. Run the database migrations from `supabase/migrations/`
4. Set up Row Level Security (RLS) policies

### SMTP Setup (Optional)

Configure SMTP for contact form emails:
- **Gmail**: Use App Passwords with 2FA enabled
- **SendGrid**: Use API key as password
- **Mailgun**: Use SMTP credentials from dashboard

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation
│   └── Footer.tsx       # Site footer
├── pages/              # Website pages
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Portfolio.tsx   # Portfolio page
│   ├── Contact.tsx     # Contact page
│   └── Booking.tsx     # Booking page
├── lib/                # Utilities and configurations
│   └── supabase.ts     # Supabase client
└── App.tsx             # Main application component

supabase/
└── migrations/         # Database schema migrations

public/                 # Static assets
```

## 🎨 Customization

### Colors and Styling

Edit `tailwind.config.js` to customize:
- Color palette
- Typography
- Spacing
- Animations

### Content Updates

Update content in the respective page components:
- **Home**: `src/pages/Home.tsx`
- **About**: `src/pages/About.tsx`
- **Services**: `src/pages/Services.tsx`
- **Portfolio**: `src/pages/Portfolio.tsx`

### Images

Replace stock images with your own:
- Update image URLs in components
- Add images to `public/` folder for local assets
- Use services like Pexels for stock photos

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Installation
chmod +x install.sh  # Make install script executable
./install.sh         # Run guided installation
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Environment Variables**:
   Add your environment variables in Netlify dashboard

3. **Deploy**:
   ```bash
   npm run build
   # Upload dist/ folder to Netlify
   ```

### Vercel

1. Connect your repository
2. Set environment variables
3. Deploy automatically on push

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload `dist/` folder contents to your web server
3. Configure server for SPA routing

## 🔒 Security

- Environment variables are properly configured
- Supabase RLS policies protect data
- CORS is configured for API endpoints
- Input validation on all forms

## 📱 Features

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional design
- **Contact Forms**: Integrated with Supabase
- **Service Tiers**: Organized service packages
- **Portfolio Showcase**: Project galleries
- **SEO Optimized**: Meta tags and structure
- **Performance**: Optimized builds and assets

## 🛠️ Development

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navigation.tsx`

### Database Changes

1. Create new migration in `supabase/migrations/`
2. Update types in `src/lib/supabase.ts`
3. Apply migration to your Supabase project

### Styling Guidelines

- Use Tailwind CSS classes
- Follow existing color scheme
- Maintain responsive design
- Add hover states and animations

## 🐛 Troubleshooting

### Common Issues

**Build Errors**:
- Check Node.js version (18+)
- Clear node_modules and reinstall
- Verify environment variables

**Database Connection**:
- Verify Supabase URL and key
- Check RLS policies
- Ensure migrations are applied

**Email Not Working**:
- Verify SMTP credentials
- Check firewall/security settings
- Test with different SMTP provider

### Getting Help

1. Check this README
2. Review error messages
3. Check browser console
4. Verify environment configuration

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for professional copywriters and content strategists**