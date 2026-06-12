
# **Project Blueprint: Lotto Number Generator**

## **Overview**

This project is a web-based Lotto Number Generator. It provides users with a fun and interactive way to generate random lottery numbers. The application is built using modern web technologies, including HTML, CSS, and JavaScript, with a focus on creating a visually appealing and user-friendly experience.

## **Design and Features**

### **Visual Design**

*   **Theme:** A clean, modern, and engaging design.
*   **Colors:** A vibrant color palette to create an energetic look and feel.
*   **Typography:** Clear and readable fonts with an emphasis on numbers and key information.
*   **Layout:** A responsive layout that works well on both desktop and mobile devices.
*   **Iconography:** Use of icons to enhance usability and visual appeal.
*   **Effects:** Subtle animations and effects to make the number generation process more exciting.

### **Functionality**

*   **Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Interactive Button:** A button to initiate the number generation process.
*   **Number Display:** The generated numbers are displayed in a clear and visually appealing manner, using individual "lotto ball" components.
*   **Partnership Inquiry Form:** A simple form powered by Formspree allowing users to send partnership inquiries directly to the project owners.
*   **Web Components:** A custom `<lotto-ball>` element is used to display each number, encapsulating its structure, style, and behavior.

## **Current Plan**

1.  **`index.html`:**
    *   Update the title to "Lotto Number Generator".
    *   Create the main structure for the lottery machine, including a display area for the numbers and a "Generate" button.
    *   Add a Partnership Inquiry form section.
2.  **`style.css`:**
    *   Implement a modern and visually appealing design for the page.
    *   Style the lottery machine, the number display area, the lotto balls, and the button.
    *   Add styles for the partnership inquiry form, ensuring consistency with the overall theme.
    *   Use CSS variables for a consistent color scheme and responsive design techniques.
3.  **`main.js`:**
    *   Create a `<lotto-ball>` web component to display each generated number.
    *   Implement the logic for generating 6 unique random numbers from 1 to 45.
    *   Add an event listener to the "Generate" button to trigger the number generation and display the results using the `<lotto-ball>` components.
