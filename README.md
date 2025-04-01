# Unifize Transactions Table

This project is a React-based application that displays a transactions table. The table groups transactions by date and includes features like hover effects, conditional styling for amounts, and a responsive design.

## **How to Run the Code**

### **Prerequisites**

1. Ensure you have **Node.js** (version 14 or higher) installed on your system.
2. Install **npm** (comes with Node.js) or **yarn** as your package manager.

### **Steps to Run**

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd unifize-transactions-table
   ```

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

### **Project Structure**

#### **Features**

1. Displays a list of transactions grouped by date.
2. Conditional styling for positive and negative amounts.
3. Hover effects to highlight rows and display grouped dates.
4. Responsive design with horizontal scrolling for smaller screens.
5. Buttons in the "Attachment" column are centered for better alignment.

### **Technical Decisions**

1. Data Handling
   The transactions data is stored in a JSON file (public/data/transactions.json) and fetched dynamically using the fetch API.
   This approach allows for easy updates to the data without modifying the code.
2. Component Design
   The TableComponent is designed as a reusable component that accepts data as a prop.
   The transactions are grouped by date using the useMemo hook to optimize performance and avoid unnecessary recalculations.
3. Styling
   CSS is used for styling (TableComponent.css), ensuring a lightweight and responsive design.
   Flexbox and media queries are utilized for responsiveness, and hover effects are implemented for better user interaction.
4. Responsive Design
   The table is responsive, with horizontal scrolling enabled for smaller screens.
   Font sizes and padding are adjusted using media queries for better readability on mobile devices.
5. Technical Choices
   React Functional Components: Functional components with hooks (useState, useMemo) are used for simplicity and modern React practices.
   CSS over Material-UI: Plain CSS is used instead of Material-UI to keep the project lightweight and avoid unnecessary dependencies.
