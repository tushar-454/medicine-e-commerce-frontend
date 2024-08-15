# Medicine E-Commerce Frontend

The Medicine E-Commerce project aims to provide a convenient platform for users to purchase medicines online. It allows users to browse through a wide range of medicines, add them to their cart, and complete the purchase securely. The frontend is responsible for providing an intuitive user interface that enables users to interact with the platform seamlessly.

## Technology

The frontend of the Medicine E-Commerce project is built using the following technologies:

- Next.js: A React framework for building server-side rendered and static websites.
  TypeScript: A statically typed superset of JavaScript that compiles to plain JavaScript.
- Redux: A predictable state container for JavaScript apps.
- RTK (Redux Toolkit): An opinionated, batteries-included toolset for efficient Redux development.
- Redux Persist: A library for persisting and rehydrating Redux state.
- Express: A fast and minimalist web application framework for Node.js.
- Mongoose: An elegant MongoDB object modeling tool for Node.js.
- MongoDB: A popular NoSQL database that provides high scalability and flexibility for storing and retrieving data.

## How to Run Locally

To run the Medicine E-Commerce frontend locally, you will need to follow these steps:

1. Make sure you have Node.js installed on your computer. You can check the version by running the following command in your terminal:

```bash
node -v
```

Ensure that the version displayed is 20 or higher. If you don't have Node.js installed or have an older version, please download and install the latest version from the official Node.js website.

2. Clone the repository to your local machine:

```bash
 git clone -b local --single-branch https://github.com/tushar-454/medicine-e-commerce-frontend.git
```

3. Navigate to the project directory:

```bash
cd medicine-e-commerce-frontend
```

4. Install the package manager:

```bash
npm install -g yarn
```

5. Install the dependencies:

```bash
yarn
```

6. Start the project dev mode:

```bash
yarn dev
```

🤚Note: If you have any existing project running on port 3000, you can change the port by running the following command:

⛔Note: Please if you change the port, make sure to update backend `index.js` file cors origin with the new port new frontend url.

```bash
yarn dev -p <port_number>
```

7. For better experience to make a production build:

```bash
yarn build
yarn start
```
