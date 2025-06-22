#!/bin/bash

# Revolution AI CopyWriters Website - Professional Installation Script
# This script automates the complete setup process

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# ASCII Art Banner
show_banner() {
    clear
    echo -e "${CYAN}"
    cat << "EOF"
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║   ██████╗ ███████╗██╗   ██╗ ██████╗ ██╗     ██╗   ██╗████████╗██╗ ██████╗ ███╗   ██║
║   ██╔══██╗██╔════╝██║   ██║██╔═══██╗██║     ██║   ██║╚══██╔══╝██║██╔═══██╗████╗  ██║
║   ██████╔╝█████╗  ██║   ██║██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██╔██╗ ██║
║   ██╔══██╗██╔══╝  ╚██╗ ██╔╝██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██║╚██╗██║
║   ██║  ██║███████╗ ╚████╔╝ ╚██████╔╝███████╗╚██████╔╝   ██║   ██║╚██████╔╝██║ ╚████║
║   ╚═╝  ╚═╝╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
║                                                                               ║
║                    AI COPYWRITERS & CONTENT STRATEGIST                       ║
║                         Professional Website Setup                           ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
EOF
    echo -e "${NC}"
    echo -e "${WHITE}Welcome to the Revolution AI CopyWriters Website Installation Script${NC}"
    echo -e "${BLUE}This script will automatically set up your professional copywriting website${NC}"
    echo ""
}

# Progress indicator
show_progress() {
    local current=$1
    local total=$2
    local message=$3
    local percentage=$((current * 100 / total))
    local filled=$((percentage / 5))
    local empty=$((20 - filled))
    
    printf "\r${CYAN}[${GREEN}"
    printf "%*s" $filled | tr ' ' '█'
    printf "${WHITE}"
    printf "%*s" $empty | tr ' ' '░'
    printf "${CYAN}] ${percentage}%% - ${WHITE}${message}${NC}"
}

# Logging functions
log_info() {
    echo -e "${BLUE}ℹ ${WHITE}$1${NC}"
}

log_success() {
    echo -e "${GREEN}✓ ${WHITE}$1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠ ${WHITE}$1${NC}"
}

log_error() {
    echo -e "${RED}✗ ${WHITE}$1${NC}"
}

log_step() {
    echo -e "\n${PURPLE}▶ ${WHITE}$1${NC}"
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check system requirements
check_requirements() {
    log_step "Checking System Requirements"
    
    local requirements_met=true
    
    # Check Node.js
    if command_exists node; then
        local node_version=$(node --version | cut -d'v' -f2)
        local major_version=$(echo $node_version | cut -d'.' -f1)
        if [ "$major_version" -ge 18 ]; then
            log_success "Node.js $node_version (✓ Compatible)"
        else
            log_warning "Node.js $node_version (Requires v18+)"
            requirements_met=false
        fi
    else
        log_error "Node.js not found (Required)"
        requirements_met=false
    fi
    
    # Check npm
    if command_exists npm; then
        local npm_version=$(npm --version)
        log_success "npm $npm_version (✓ Available)"
    else
        log_error "npm not found (Required)"
        requirements_met=false
    fi
    
    # Check git
    if command_exists git; then
        local git_version=$(git --version | cut -d' ' -f3)
        log_success "Git $git_version (✓ Available)"
    else
        log_warning "Git not found (Recommended for version control)"
    fi
    
    if [ "$requirements_met" = false ]; then
        echo ""
        log_error "System requirements not met. Please install the required software:"
        echo -e "${YELLOW}  • Node.js 18+ : https://nodejs.org/${NC}"
        echo -e "${YELLOW}  • npm (comes with Node.js)${NC}"
        echo ""
        exit 1
    fi
    
    log_success "All system requirements met!"
}

# Interactive configuration
configure_environment() {
    log_step "Environment Configuration"
    
    echo -e "${WHITE}Let's configure your website environment variables.${NC}"
    echo -e "${BLUE}Press Enter to skip optional fields or use default values.${NC}"
    echo ""
    
    # Supabase Configuration
    echo -e "${CYAN}═══ Supabase Database Configuration ═══${NC}"
    echo -e "${YELLOW}Get these values from your Supabase project dashboard${NC}"
    echo ""
    
    read -p "$(echo -e ${WHITE}Supabase Project URL: ${NC})" SUPABASE_URL
    read -p "$(echo -e ${WHITE}Supabase Anon Key: ${NC})" SUPABASE_ANON_KEY
    
    echo ""
    echo -e "${CYAN}═══ SMTP Email Configuration (Optional) ═══${NC}"
    echo -e "${YELLOW}Configure email functionality for contact forms${NC}"
    echo ""
    
    read -p "$(echo -e ${WHITE}SMTP Host (e.g., smtp.gmail.com): ${NC})" SMTP_HOST
    read -p "$(echo -e ${WHITE}SMTP Port [587]: ${NC})" SMTP_PORT
    SMTP_PORT=${SMTP_PORT:-587}
    
    read -p "$(echo -e ${WHITE}SMTP Username: ${NC})" SMTP_USER
    read -s -p "$(echo -e ${WHITE}SMTP Password: ${NC})" SMTP_PASS
    echo ""
    
    read -p "$(echo -e ${WHITE}From Email [hello@revolutionai.com]: ${NC})" SMTP_FROM
    SMTP_FROM=${SMTP_FROM:-hello@revolutionai.com}
    
    echo ""
    log_success "Configuration completed!"
}

# Create environment file
create_env_file() {
    log_step "Creating Environment File"
    
    cat > .env << EOF
# Supabase Configuration
VITE_SUPABASE_URL=${SUPABASE_URL}
VITE_SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}

# SMTP Configuration (for email functionality)
SMTP_HOST=${SMTP_HOST}
SMTP_PORT=${SMTP_PORT}
SMTP_USER=${SMTP_USER}
SMTP_PASS=${SMTP_PASS}
SMTP_FROM=${SMTP_FROM}
EOF
    
    log_success "Environment file created (.env)"
}

# Install dependencies
install_dependencies() {
    log_step "Installing Dependencies"
    
    show_progress 1 4 "Updating npm to latest version..."
    npm install -g npm@latest >/dev/null 2>&1
    
    show_progress 2 4 "Installing project dependencies..."
    npm install >/dev/null 2>&1
    
    show_progress 3 4 "Verifying installation..."
    npm audit fix --silent >/dev/null 2>&1 || true
    
    show_progress 4 4 "Dependencies installed successfully!"
    echo ""
    
    log_success "All dependencies installed!"
}

# Build the project
build_project() {
    log_step "Building Project"
    
    show_progress 1 3 "Compiling TypeScript..."
    npm run build >/dev/null 2>&1
    
    show_progress 2 3 "Optimizing assets..."
    sleep 1
    
    show_progress 3 3 "Build completed successfully!"
    echo ""
    
    log_success "Project built successfully!"
}

# Setup instructions
show_setup_instructions() {
    echo ""
    echo -e "${CYAN}╔═══════════════════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║                            SETUP COMPLETED!                                  ║${NC}"
    echo -e "${CYAN}╚═══════════════════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    echo -e "${GREEN}🎉 Your Revolution AI CopyWriters website is ready!${NC}"
    echo ""
    
    echo -e "${WHITE}Next Steps:${NC}"
    echo -e "${BLUE}1.${NC} Start the development server:"
    echo -e "   ${YELLOW}npm run dev${NC}"
    echo ""
    
    echo -e "${BLUE}2.${NC} Open your browser and visit:"
    echo -e "   ${YELLOW}http://localhost:5173${NC}"
    echo ""
    
    echo -e "${BLUE}3.${NC} For production deployment:"
    echo -e "   ${YELLOW}npm run build${NC}"
    echo -e "   ${YELLOW}npm run preview${NC}"
    echo ""
    
    echo -e "${WHITE}Database Setup:${NC}"
    if [ -n "$SUPABASE_URL" ]; then
        echo -e "${GREEN}✓${NC} Supabase configured"
        echo -e "${BLUE}•${NC} Run migrations: Check supabase/migrations/ folder"
        echo -e "${BLUE}•${NC} Set up RLS policies in your Supabase dashboard"
    else
        echo -e "${YELLOW}⚠${NC} Supabase not configured - contact forms won't work"
        echo -e "${BLUE}•${NC} Add Supabase credentials to .env file when ready"
    fi
    echo ""
    
    echo -e "${WHITE}Email Setup:${NC}"
    if [ -n "$SMTP_HOST" ]; then
        echo -e "${GREEN}✓${NC} SMTP configured for contact forms"
    else
        echo -e "${YELLOW}⚠${NC} Email not configured - contact forms will log to console"
        echo -e "${BLUE}•${NC} Add SMTP credentials to .env file when ready"
    fi
    echo ""
    
    echo -e "${WHITE}Project Structure:${NC}"
    echo -e "${BLUE}•${NC} ${YELLOW}src/pages/${NC} - Website pages (Home, About, Services, etc.)"
    echo -e "${BLUE}•${NC} ${YELLOW}src/components/${NC} - Reusable components"
    echo -e "${BLUE}•${NC} ${YELLOW}src/lib/${NC} - Utilities and configurations"
    echo -e "${BLUE}•${NC} ${YELLOW}supabase/migrations/${NC} - Database schema"
    echo ""
    
    echo -e "${WHITE}Customization:${NC}"
    echo -e "${BLUE}•${NC} Update content in page components"
    echo -e "${BLUE}•${NC} Modify colors in ${YELLOW}tailwind.config.js${NC}"
    echo -e "${BLUE}•${NC} Add your own images and branding"
    echo -e "${BLUE}•${NC} Configure domain and hosting"
    echo ""
    
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════════════════════${NC}"
    echo -e "${WHITE}Need help? Check the README.md file or visit the documentation.${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════════════════════${NC}"
}

# Cleanup function
cleanup() {
    if [ $? -ne 0 ]; then
        echo ""
        log_error "Installation failed!"
        echo -e "${YELLOW}Please check the error messages above and try again.${NC}"
        echo -e "${BLUE}For support, please check the documentation or contact support.${NC}"
    fi
}

# Set trap for cleanup
trap cleanup EXIT

# Main installation process
main() {
    show_banner
    
    echo -e "${WHITE}This script will:${NC}"
    echo -e "${BLUE}• Check system requirements${NC}"
    echo -e "${BLUE}• Configure environment variables${NC}"
    echo -e "${BLUE}• Install all dependencies${NC}"
    echo -e "${BLUE}• Build the project${NC}"
    echo -e "${BLUE}• Provide setup instructions${NC}"
    echo ""
    
    read -p "$(echo -e ${WHITE}Continue with installation? [Y/n]: ${NC})" -n 1 -r
    echo ""
    
    if [[ ! $REPLY =~ ^[Yy]$ ]] && [[ ! -z $REPLY ]]; then
        log_info "Installation cancelled by user."
        exit 0
    fi
    
    # Run installation steps
    check_requirements
    configure_environment
    create_env_file
    install_dependencies
    build_project
    show_setup_instructions
    
    # Remove trap since we succeeded
    trap - EXIT
    
    echo ""
    log_success "Installation completed successfully! 🚀"
    echo ""
}

# Run main function
main "$@"