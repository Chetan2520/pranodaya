# Pranodaya - Ecology & Environment Website

[![PHP Version](https://img.shields.io/badge/PHP-7.2+-blue.svg)](https://php.net)
[![Composer](https://img.shields.io/badge/Composer-Required-red.svg)](https://getcomposer.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, responsive PHP-based website template for ecology and environmental organizations. Built with clean HTML5, CSS3, and vanilla PHP for maximum performance and flexibility.

Developed and maintained by pixcels themes.

## 🌍 Overview

Pranodaya is a professionally designed website template specifically created for environmental organizations, NGOs, and eco-friendly initiatives. The template features a modern, clean design with multiple homepage variations and comprehensive sections for showcasing environmental projects, volunteer opportunities, and donation campaigns.

## ✨ Features

### 🎨 Design & UI

- **Multiple Homepage Variations** - 5 different homepage layouts
- **Fully Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Optimized** - Built with SEO best practices
- **Fast Loading** - Optimized for performance

### 📋 Core Sections

- **Hero Slider** - Engaging hero sections with call-to-action buttons
- **About Us** - Interactive tabs for history, mission, and vision
- **Services** - Showcase environmental services (Waste Management, Ocean Cleaning, Recycling)
- **Projects** - Display completed and ongoing environmental projects
- **Camping/Donations** - Campaign showcase with progress tracking
- **Volunteers** - Team member profiles and volunteer opportunities
- **Contact Forms** - Multiple contact forms with validation
- **404 Error Page** - Custom error page with helpful navigation

### 🔧 Technical Features

- **Environment Configuration** - Secure configuration via `.env` files
- **Production-Level Logging** - Monolog integration with rotating file handlers and comprehensive logging
- **Session Management** - Secure session handling with environment-based configuration and flash messages
- **Composer Integration** - Modern PHP dependency management
- **Mail Integration** - Contact form email functionality with comprehensive logging
- **Social Media Integration** - Configurable social media links
- **Form Validation** - Client-side and server-side validation
- **Error Handling** - Proper HTTP status codes and error messages

## 🚀 Quick Start

### Prerequisites

- **PHP 7.2.5** or higher
- **Composer** - PHP dependency manager
- **Web Server** - Apache/Nginx with PHP support
- **Mail Server** - For contact form functionality (optional)

### Installation

1. **Clone or download** the project files to your web server

2. **Install dependencies**:

   ```bash
   composer install
   ```

3. **Configure environment**:

   ```bash
   # Copy the example environment file
   cp .env.example .env
   ```

4. **Update configuration** in `.env`:

   ```env
   # Application Settings
   APP_NAME="Pranodaya"
   APP_ENV="production"
   APP_URL="https://yourdomain.com"

   # Contact Information
   CONTACT_EMAIL="your-email@domain.com"
   CONTACT_PHONE="+1 (555) 123-4567"

   # Email Configuration (for contact forms)
   MAIL_HOST="smtp.gmail.com"
   MAIL_PORT=587
   MAIL_USERNAME="your-email@gmail.com"
   MAIL_PASSWORD="your-app-password"
   MAIL_FROM_ADDRESS="noreply@yourdomain.com"
   MAIL_FROM_NAME="Pranodaya"

   # Social Media Links
   FACEBOOK_URL="https://facebook.com/yourpage"
   TWITTER_URL="https://twitter.com/yourhandle"
   INSTAGRAM_URL="https://instagram.com/yourhandle"
   LINKEDIN_URL="https://linkedin.com/company/yourcompany"
   ```

5. **Set up web server**:
   - Point your web server's document root to the project directory
   - Ensure the `assets/` directory is accessible
   - Create the `storage/logs/` directory for application logs:
     ```bash
     mkdir -p storage/logs
     ```
   - For **Apache servers**, the included `.htaccess` file provides:
     - Automatic 404 error handling
     - Security headers
     - Static asset caching
     - URL rewriting (if needed)
   - Configure URL rewriting if needed

6. **Access your site**:
   - Main site: `http://localhost/index.php`
   - Alternative homepages: `index-2.php`, `index-3.php`, `index-4.php`, `index-5.php`

## 📁 Project Structure

```
Pranodaya/
├── .env                    # Environment configuration
├── .env.example           # Environment configuration template
├── .htaccess              # URL rewriting and security
├── bootstrap.php          # Application bootstrap with logging
├── composer.json          # PHP dependencies
├── composer.lock          # Locked dependency versions
├── index.php              # Main homepage
├── index-2.php           # Alternative homepage 2
├── index-3.php           # Alternative homepage 3
├── index-4.php           # Alternative homepage 4
├── index-5.php           # Alternative homepage 5
├── about.php             # About us page
├── services.php          # Services page
├── project.php           # Projects page
├── contact.php           # Contact page
├── donations.php         # Donations page
├── be-volunteer.php      # Volunteer registration
├── volunteer.php         # Volunteers page
├── blog-*.php           # Blog pages
├── camping*.php         # Campaign pages
├── 404.php              # Custom 404 error page
├── layouts/             # Layout templates
│   ├── layout-top.php   # Top layout (header)
│   └── layout-bottom.php # Bottom layout (footer)
├── partials/            # Reusable components
│   ├── head.php        # HTML head section
│   ├── header.php      # Site header
│   ├── footer.php      # Site footer
│   └── *.php          # Other partials
├── storage/            # Application data
│   └── logs/          # Log files directory
├── assets/             # Static assets
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   ├── scss/          # SCSS source files
│   ├── img/           # Images
│   └── mail*.php      # Contact form handlers
└── vendor/            # Composer dependencies
```

## 🔧 Configuration

### Environment Variables

All sensitive configuration is managed through environment variables in the `.env` file:

#### Application Settings

- `APP_NAME` - Site name
- `APP_ENV` - Environment (development/production)
- `APP_DEBUG` - Debug mode (true/false)
- `APP_URL` - Base URL of the site

#### Contact Information

- `CONTACT_EMAIL` - Primary contact email
- `CONTACT_PHONE` - Contact phone number
- `CONTACT_ADDRESS` - Physical address

#### Email Configuration

- `MAIL_HOST` - SMTP server hostname
- `MAIL_PORT` - SMTP server port
- `MAIL_USERNAME` - SMTP username
- `MAIL_PASSWORD` - SMTP password
- `MAIL_ENCRYPTION` - Encryption method (tls/ssl)
- `MAIL_FROM_ADDRESS` - From email address
- `MAIL_FROM_NAME` - From name in emails

#### Social Media

- `FACEBOOK_URL` - Facebook page URL
- `TWITTER_URL` - Twitter profile URL
- `INSTAGRAM_URL` - Instagram profile URL
- `LINKEDIN_URL` - LinkedIn page URL

#### Logging Configuration

- `LOG_CHANNEL` - Log channel (file, stderr, etc.)
- `LOG_LEVEL` - Log level (debug, info, warning, error, critical)
- `LOG_FILE` - Log file path (relative to project root)

#### Session Configuration

- `SESSION_LIFETIME` - Session lifetime in seconds (default: 7200 = 2 hours)
- `SESSION_SECURE_COOKIE` - Use secure cookies (HTTPS only)
- `SESSION_HTTP_ONLY` - HTTP only cookies (JavaScript cannot access)
- `SESSION_ENCRYPT_COOKIE` - Encrypt session cookies
- `SESSION_SAME_SITE` - SameSite policy (strict, lax, none)
- `SESSION_DOMAIN` - Session cookie domain

## 🔐 Session Management

The application includes comprehensive session management with security features:

### Security Features

- **Environment-Based Configuration** - All session settings from `.env` file
- **Secure Session Cookies** - HTTP only, secure, encrypted cookies
- **Session Regeneration** - Automatic session ID regeneration for security
- **IP Validation** - Optional IP address validation for session security
- **Session Timeout** - Configurable session lifetime with automatic cleanup
- **Session Logging** - All session activities logged for monitoring

### Session Functions Available

#### Core Functions

- `initialize_session()` - Initialize secure session with environment settings
- `validate_session()` - Validate current session for security and expiration
- `destroy_session()` - Securely destroy session and clear data

#### Helper Functions

- `set_session($key, $value)` - Set session variable with logging
- `get_session($key, $default)` - Get session variable with logging
- `is_authenticated()` - Check if user is authenticated (placeholder)
- `has_permission($permission)` - Check user permissions (placeholder)
- `get_user_role()` - Get current user role (placeholder)

#### Flash Messages

- `set_flash_message($type, $message)` - Set temporary flash message
- `get_flash_messages()` - Retrieve and clear flash messages
- `has_flash_messages()` - Check if flash messages exist

### Session Security Measures

- **Automatic Validation** - Sessions validated on each request
- **IP Monitoring** - Tracks original IP for security (configurable)
- **Activity Tracking** - Monitors last activity timestamp
- **Secure Destruction** - Proper cleanup of session data and cookies
- **Environment Awareness** - Different settings for development/production

The application includes comprehensive logging using Monolog:

### Features

- **Rotating File Handler** - Automatically rotates logs (30-day retention)
- **Multiple Log Levels** - Debug, Info, Warning, Error, Critical
- **Context Logging** - Structured logging with additional context data
- **Development Console** - Console output in development environment
- **Production Ready** - Secure file-based logging for production

### Log Events

- **Form Submissions** - Contact and volunteer form submissions
- **Email Activities** - Email sending attempts and results
- **Security Events** - Unauthorized access attempts
- **Application Lifecycle** - Application startup and configuration
- **Error Tracking** - Form validation failures and system errors

### Log Files Location

```
storage/logs/
├── app.log           # Main application logs
└── php_errors.log    # PHP errors and warnings
```

The template includes two contact form handlers:

### Contact Form (`assets/mail.php`)

- General contact inquiries
- Validates required fields (name, email, phone, message)
- Sends email to `CONTACT_EMAIL`
- Returns appropriate HTTP status codes
- **Comprehensive Logging** - All form submissions, validation failures, and email activities are logged

### Volunteer Application (`assets/mail-2.php`)

- Volunteer registration form
- Additional fields: location, date, occupation
- Same validation and email functionality
- **Comprehensive Logging** - All applications, validation failures, and email activities are logged

## 🎨 Customization

### Styling

- Main styles: `assets/css/main.css`
- SCSS source files: `assets/scss/`
- Responsive breakpoints included

### JavaScript

- Main functionality: `assets/js/script.js`
- Third-party libraries included in `assets/vendor/`

### Content

- Update text content directly in PHP files
- Images in `assets/img/` directory
- Easy to modify HTML structure

## 🔒 Security

- **Environment Variables** - Sensitive data stored securely
- **Input Validation** - All form inputs validated and sanitized
- **Session Security** - Secure session management with encryption, timeouts, and IP validation
- **CSRF Protection** - Ready for CSRF token implementation
- **HTTPS Ready** - Configure `SESSION_SECURE_COOKIE=true` for HTTPS
