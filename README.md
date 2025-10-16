# Student Finance Tracker

A simple, responsive web app that helps students track their daily expenses in Rwandan Francs (RWF).

# Live Demo
[GitHub Pages Link](https://Nsh-teddy.github.io/student-finance-tracker/)

# Features
- Add, edit, and delete expense records  
- Regex validation for inputs (amount, date, category, etc.)  
- Real-time search using regex  
- Dashboard with totals, top category, and 7-day trends  
- JSON import/export with structure validation  
- Data persistence via localStorage  
- Accessible (keyboard-friendly, aria-live updates)  
- Responsive layout across mobile, tablet, and desktop  

# Regex Catalog
| Field | Regex Pattern | Description |
|--------|----------------|-------------|
| Description | `/^\\S(?:.*\\S)?$/` | No leading or trailing spaces |
| Amount | `/^(0|[1-9]\\d*)(\\.\\d{1,2})?$/` | Valid amount with up to 2 decimals |
| Date | `/^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/` | Valid date (YYYY-MM-DD) |
| Category | `/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/` | Letters, spaces, hyphens only |
| Advanced | `/\\b(\\w+)\\s+\\1\\b/` | Detects duplicate words |

# Accessibility (a11y)
- All forms have associated labels  
- Keyboard navigation: use `Tab` and `Enter`  
- ARIA live regions announce updates (total and errors)  
- Color contrast tested for readability  

# Keyboard Shortcuts
- `Tab`: Navigate between fields  
- `Enter`: Submit forms  
- `Ctrl + F`: Focus the search field  

# How to Run Locally
1. Clone this repo  
   ```bash
   git clone https://github.com/Nsh-teddy/student-finance-tracker.git
