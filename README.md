# React Crypto Live Data App

This project is a web-based application built with React and Tailwind CSS that allows users to register and login using Alchemy's embedded-account with passkey. Once authenticated, users can view live cryptocurrency data from Binance.

## Features

- User authentication (register/login) using Alchemy's passkey system
- Live cryptocurrency data display from Binance WebSocket
- Responsive design using Tailwind CSS
- Real-time updates of crypto prices, volumes, and price changes

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)
- An Alchemy account and API key

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/react-crypto-app.git
   cd react-crypto-app
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Alchemy API key:
   ```
   REACT_APP_ALCHEMY_API_KEY=your_alchemy_api_key_here
   ```

## Configuration

1. Update the Binance WebSocket URL in `src/services/websocketService.js` if necessary.

2. Adjust the Alchemy network settings in `src/services/authService.js` if you're not using the Ethereum mainnet.

## Usage

To start the development server:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
/src
  /components
    Auth.js
    LiveData.js
    NotFound.js
  /services
    authService.js
    websocketService.js
  App.js
  index.js
```

- `Auth.js`: Handles user registration and login
- `LiveData.js`: Displays live cryptocurrency data
- `NotFound.js`: 404 page for unmatched routes
- `authService.js`: Implements authentication logic using Alchemy SDK
- `websocketService.js`: Manages WebSocket connection to Binance API

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a new Pull Request

## Acknowledgments

- [Alchemy](https://www.alchemy.com/) for providing the embedded-account with passkey system
- [Binance](https://www.binance.com/) for the WebSocket API providing live cryptocurrency data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the JavaScript library for building user interfaces

## Contact

If you have any questions or feedback, please contact Asmit Kumar at [a7mitk000@gmail.com].
