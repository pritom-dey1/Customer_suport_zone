# Customer Support Zone

A React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved. The project follows a Figma design and includes features like ticket status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features

### ✅ Navbar
- Website name/logo on the left.
- Menu items and **New Ticket** button on the right.

### ✅ Banner
- Linear gradient background as per Figma design.
- Displays ticket statistics:
  - In Progress Count
  - Resolved Count (default = 0)

### ✅ Main Section
#### JSON Data
- Contains 10–15 tickets with the following properties:
  - `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`
  
#### Ticket Cards
- Displays all ticket information in a card layout.
- Cards arranged in a 2-column grid (left side).

#### Task Status Section
- Clicking a ticket card adds it to the Task Status Section (right side) and shows a toast notification.
- Updates the **In Progress Count** in the banner.
- Task Status shows:
  - Ticket Title
  - Complete Button
- Clicking **Complete Button**:
  - Shows a toast notification
  - Removes the ticket from Task Status
  - Adds it to Resolved List
  - Updates banner counts
  - Removes ticket from Customer Tickets list

### ✅ Footer
- Designed according to Figma design.

### ✅ Responsiveness
- Fully responsive design for mobile devices.

---

## 📌 Technical Details

- **React**: Functional components with hooks.
- **State Management**: `useState` hook for managing ticket statuses, progress, and resolved tasks.
- **Props**: Passed data to child components for display and interaction.
- **Event Handling**: Clicking tickets or buttons triggers state updates and toast notifications.
- **React-Toastify**: Stylish toast notifications replace default alerts.

---

## 📝 Key Concepts

### JSX
JSX (JavaScript XML) allows you to write HTML-like syntax in React components. It is used for rendering UI elements in a more readable way.

### State vs Props
- **State**: Mutable data local to a component that can change over time.  
- **Props**: Immutable data passed from parent to child components.

### useState Hook
- `useState` is a React hook used to manage state in functional components.  
- Returns an array: `[state, setState]`.  
### Sharing State Between Components

Lift the state up to a common parent and pass it down as props to child components.
### Event Handling

Events in React are handled using camelCase syntax and passing functions as callbacks
### 🔔 Challenge Requirements Implemented

React-Toastify used for all alerts.

Task Completion Logic:

Clicking Complete Button removes the ticket from Task Status.

Adds it to Resolved List.

Decreases In Progress count and increases Resolved count.

Removes ticket from Customer Tickets list.