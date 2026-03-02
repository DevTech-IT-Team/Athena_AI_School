# Admissions Folder

This folder contains all admissions-related components and pages for WisdomAI School.

## Files Overview

### Core Admissions Pages

1. **ApplyNow.jsx** - How to Register
   - Complete registration process and application form
   - Step-by-step registration guide
   - Document submission requirements

2. **WhoShouldRegister.jsx** - Who Should Register
   - Eligibility criteria and target audience
   - Age requirements and grade levels
   - Ideal candidate profiles

3. **BatchTimings.jsx** - Batch Timings
   - Available batch schedules and timings
   - Different time slots and formats
   - Academic calendar information

4. **EssentialRequirements.jsx** - Essential Requirements
   - Technical requirements (devices, internet)
   - Academic prerequisites
   - Documentation needed

5. **Fees.jsx** - Fees
   - Complete fee structure
   - Payment options and plans
   - Scholarship information

### Components

6. **FeeCalculator.jsx** - Fee Calculator Component
   - Interactive fee calculation tool
   - Program-specific pricing
   - Payment plan estimator

## Usage

### Importing Components

You can import individual components:

```javascript
import { ApplyNow, WhoShouldRegister, Fees } from '../pages/Admissions';
```

Or import specific components:

```javascript
import ApplyNow from '../pages/Admissions/ApplyNow';
import Fees from '../pages/Admissions/Fees';
```

### Routes Configuration

All admissions routes are configured in `index.js`:

```javascript
import { admissionsRoutes } from '../pages/Admissions';

// Use admissionsRoutes for navigation or routing setup
```

## File Structure

```
Admissions/
├── index.js                 # Main exports and routes
├── ApplyNow.jsx             # Registration process
├── WhoShouldRegister.jsx    # Eligibility criteria
├── BatchTimings.jsx         # Schedule information
├── EssentialRequirements.jsx # Requirements
├── Fees.jsx                 # Fee structure
├── FeeCalculator.jsx        # Fee calculator component
└── README.md               # This documentation
```

## Integration

- All routes are updated in `App.jsx`
- Import paths have been updated throughout the application
- Components are exported from `index.js` for easy importing

## Notes

- All files have been moved from their original locations to this centralized folder
- Import paths in `App.jsx` and `Programs.jsx` have been updated
- The folder structure maintains clean separation of admissions-related functionality
