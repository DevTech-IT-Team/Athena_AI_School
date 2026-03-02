# Howitworks Folder

This folder contains all how-it-works related components and pages for WisdomAI School, providing comprehensive information about how our online education system functions.

## Files Overview

### Core How-it-works Pages

1. **HowItWorksSimple.jsx** - How It Works
   - Complete guide to how our online school works
   - Step-by-step process explanation
   - Platform overview and features

2. **SpecialEducation.jsx** - Special Education
   - Special education programs and support services
   - Inclusive learning approaches
   - Specialized curriculum adaptations

3. **Technology.jsx** - Technology
   - Technology requirements and platform features
   - Device specifications and internet needs
   - Technical support information

4. **Features.jsx** - Features
   - Key features and benefits of our platform
   - Interactive learning tools
   - Advanced educational technologies

5. **WhyOnlineOnly.jsx** - Why Online Only
   - Benefits of online education approach
   - Comparison with traditional education
   - Success stories and outcomes

### Information & Support Pages

6. **FAQ.jsx** - FAQ
   - Frequently asked questions and answers
   - Common concerns and solutions
   - Quick reference guide

7. **AffiliationsAccreditation.jsx** - Affiliations & Accreditation
   - Our affiliations and accreditations
   - Recognition and certifications
   - Quality assurance information

8. **Resources.jsx** - Resources
   - Educational resources and materials
   - Learning aids and supplements
   - Reference materials

9. **ResourcesDownloads.jsx** - Resources Downloads
   - Downloadable resources and documents
   - Forms and applications
   - Educational materials for offline use

## Usage

### Importing Components

You can import individual components:

```javascript
import { HowItWorksSimple, Technology, FAQ } from '../pages/Howitworks';
```

Or import specific components:

```javascript
import HowItWorksSimple from '../pages/Howitworks/HowItWorksSimple';
import FAQ from '../pages/Howitworks/FAQ';
```

### Routes Configuration

All how-it-works routes are configured in `index.js`:

```javascript
import { howitworksRoutes } from '../pages/Howitworks';

// Use howitworksRoutes for navigation or routing setup
```

## File Structure

```
Howitworks/
├── index.js                          # Main exports and routes
├── HowItWorksSimple.jsx              # How It Works guide
├── SpecialEducation.jsx              # Special Education programs
├── Technology.jsx                    # Technology requirements
├── Features.jsx                      # Platform features
├── WhyOnlineOnly.jsx                 # Why online education
├── FAQ.jsx                           # Frequently asked questions
├── AffiliationsAccreditation.jsx     # Accreditations
├── Resources.jsx                     # Educational resources
├── ResourcesDownloads.jsx            # Downloadable resources
└── README.md                         # This documentation
```

## Integration

- All routes are updated in `App.jsx`
- Import paths have been updated throughout the application
- Components are exported from `index.js` for easy importing
- Organized by functionality: core guides, features, and support resources

## Categories

### **Core Guides:**
- HowItWorksSimple - Main guide
- SpecialEducation - Specialized programs
- Technology - Technical requirements

### **Platform Information:**
- Features - Key benefits
- WhyOnlineOnly - Educational approach
- AffiliationsAccreditation - Quality assurance

### **Support & Resources:**
- FAQ - Common questions
- Resources - Learning materials
- ResourcesDownloads - Downloadable content

## Notes

- All files have been moved from their original locations to this centralized folder
- Import paths in `App.jsx` have been updated
- The folder structure maintains clean separation of how-it-works functionality
- Components are organized logically by their purpose and user journey
