# Coats Tire Equipment Customer Portal

## Project Overview

This project is designed to create a customer portal for Coats Tire Equipment, where customers in Montana can sign up for membership and gain access to product manuals and a complete parts store. The website will allow customers to browse and search for parts, add items to their cart, and, upon checkout, send the order details via email to the service technician, who will manually place the order and bill the customer directly.

## Features

- **Customer Membership**: Customers can sign up and become members to access exclusive content.
- **Product Manuals**: Members will have access to download or view product manuals.
- **Parts Store**: A complete catalog of parts available for purchase, searchable by category or part number.
- **Shopping Cart**: Customers can add parts to their shopping cart and review their selections before checkout.
- **Email Checkout**: Upon checkout, the contents of the shopping cart are emailed to the service technician for manual processing.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js with Express or Python with Django/Flask (to manage user sessions, handle form submissions, and send emails)
- **Database**: MongoDB (to store user data, parts inventory, and order history)
- **Email Service**: SMTP server setup or a service like SendGrid for handling order emails.
- **Authentication**: User authentication and session management for member login.

## Installation

To get started with the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/s10skeleton/CoatsStore.git
   cd CoatsStore
   ```

2. **Install Dependencies:**

   Depending on your chosen backend framework, install the necessary dependencies:

   For Node.js (Express):
   ```bash
   npm install
   ```

   For Python (Django/Flask):
   ```bash
   pip install -r requirements.txt
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root of your project and add the necessary environment variables, such as database connection details and email service credentials.

4. **Run the Application:**

   For Node.js (Express):
   ```bash
   npm start
   ```

   For Python (Django/Flask):
   ```bash
   python manage.py runserver
   ```

5. **Access the Website:**

   Open your web browser and go to `http://localhost:3000` (or the port you configured) to access the customer portal.

## Usage

- **Sign Up**: New customers can sign up for a membership to access the portal's features.
- **Login**: Returning members can log in to access product manuals and the parts store.
- **Browse Parts**: Members can browse the parts catalog, search for specific parts, and view detailed information.
- **Add to Cart**: Members can add parts to their cart and review their selection.
- **Checkout**: Members can proceed to checkout, where their cart details are emailed to the service technician for order processing.

## Future Enhancements

- **Online Payment Integration**: Allow customers to pay for parts directly through the website.
- **Order Tracking**: Provide order tracking and history for members.
- **Automated Inventory Management**: Integrate inventory management to automatically update stock levels.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes. We welcome all contributions that can help improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any questions or support, please contact Shane Beaman at ShaneTechEng@gmail.com.
