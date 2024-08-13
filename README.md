
# React Users/Products API Application

## Overview
This React application features a main dashboard with buttons to navigate to the Users and Products pages. Each page includes filters, search functionality, pagination, and a "Back to Dashboard" button.

### Features
- **Main Dashboard**: Central landing page with navigation buttons to Users and Products pages.
- **Users Page**: Displays a table of users with filters for name, email, birthdate, and gender. Includes a client-side search feature and pagination.
- **Products Page**: Displays a table of products with filters for title, brand, and category. Includes a client-side search feature and pagination.
- **Back to Dashboard Button**: Present on both the Users and Products pages to easily return to the main dashboard.

## Components

### 1. Dashboard Component
Located in `src/pages/Dashboard.jsx`, this component serves as the main route with buttons that navigate to the Users and Products pages.

### 2. Users Component
Located in `src/pages/Users.jsx`, this component:
- Displays a list of users.
- Includes API-based filters for name, email, birthdate, and gender.
- Provides a client-side search option.
- Includes pagination.
- Contains a "Back to Dashboard" button.

### 3. Products Component
Located in `src/pages/Products.jsx`, this component:
- Displays a list of products.
- Includes API-based filters for title, brand, and category.
- Provides a client-side search option.
- Includes pagination.
- Contains a "Back to Dashboard" button.

### 4. Filters Component
- **UsersFilters.jsx**: Handles filtering and search functionality for the Users page.
- **ProductsFilters.jsx**: Handles filtering and search functionality for the Products page.

### 5. Routing
The application routing is managed in `src/App.js`:
- `/`: Main dashboard.
- `/users`: Users page.
- `/products`: Products page.

## Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/talha2k/react-astudio-task.git
   ```
2. Navigate to the project directory.
   ```bash
   cd <project-directory>
   ```
3. Install dependencies.
   ```bash
   npm install
   ```
4. Run the application.
   ```bash
   npm start
   ```

## Usage

- Navigate to the root route `/` to access the dashboard.
- Use the "Go to Users" and "Go to Products" buttons to navigate to respective pages.
- On each page, use the filters to refine results or search using the search input.
- Use the "Back to Dashboard" button to return to the main dashboard.

