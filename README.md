Here’s your **cleaned README** with all external links removed and “EtherWheels” replaced by “Pingsphere”:

---

# Carpooling Pingsphere

## Description

The CarPooling smart contract facilitates the creation, booking, management, and cancellation of rides within a carpooling system. It is designed to run on the Ethereum blockchain and leverages Solidity for smart contract development. This project is divided into two parts: smart contract and frontend.

## Features

* **Create Ride**: Drivers can create rides by specifying details such as maximum passengers, ride fare, start time, and trip details.
* **Book Ride**: Passengers can book available rides by paying the specified fare.
* **Cancel Ride**: Rides can be canceled by either the driver or passengers, with appropriate refund mechanisms in place.
* **Get All Rides**: Users can retrieve information about all available rides or rides associated with their address.
* **Status Update**: Passengers can mark rides as completed once the journey is finished.

## Requirements

### Node

### MetaMask Wallet

You won't be able to proceed further without it. You'll be redirected to a page that prompts you to install it.
We are using Ethereum's Sepolia testnet for the smart contract. So the transactions will be based on Sepolia Ethers.

### Rapid API Accounts and Required APIs

To get started with this project, you'll need to create accounts on Rapid API and obtain the following APIs:

1. Place Autocomplete:
   Autocomplete for place names, useful for location-based searches or forms.

2. Driving Distance Calculator Between Two Points:
   Calculates driving distance and time between locations.

3. Forward & Reverse Geocoding:
   Translates between addresses and coordinates.

4. Daily Petrol, Diesel, LPG & CNG Fuel Prices in India:
   Fetches daily fuel prices across India.

## Installation

Install dependencies:

```bash
npm install
```

## Setting Up Environment Variables

1. **Create a `.env` file** in the `frontend` root directory.
2. **Add your RapidAPI keys** as shown:

```env
NEXT_PUBLIC_RAPIDAPI_KEY1=your_rapidapi_key1
NEXT_PUBLIC_RAPIDAPI_KEY2=your_rapidapi_key2 #optional
NEXT_PUBLIC_RAPIDAPI_KEY3=your_rapidapi_key3 #optional
```

## Running the Project

### Select Driver or Passenger and Fill Details

#### Driver:

1. Fill in ride info: max passengers, fare, time, trip details.
2. Confirm and submit ride.
3. Use MetaMask to approve the transaction (wait \~12 seconds).

#### Passenger:

1. Fill destination, time, and preferences.
2. Search and book rides.
3. Pay using MetaMask.

## Working Demo

Watch the demo video in the assets section of the project repository.

## Testing

Unit tests for the CarPooling smart contract can be found in the `tests` directory.
Use **Truffle** or **Hardhat** to run tests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Let me know if you want it in `.md` file format or converted to a PDF.
