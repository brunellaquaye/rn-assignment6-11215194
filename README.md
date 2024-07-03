## Overview

This project is a React Native mobile application for an ecommerce fashion store. The app allows users to:

## View a list of available products.
Add products to their cart.
Remove products from their cart.
View the items in their cart.
The selected items are stored locally on the device using AsyncStorage.

## Design Choices

## Navigation
React Navigation: Implemented drawer navigation to allow users to navigate between the HomeScreen and CartScreen easily.
TouchableOpacity: Used for interactive components like the menu button and add/remove buttons to enhance user experience.
State Management
## Context API:
 Implemented a CartContext to manage the state of the cart globally. This allows for a clean and scalable way to manage the cart state across different components without prop drilling.

## Data Storage
AsyncStorage: Used for persistent local storage. This allows the app to save the cart data even when the app is closed and reopened. The cart data is loaded when the app starts and saved whenever the cart state changes.
![alt text](<WhatsApp Image 2024-07-03 at 19.22.47.jpeg>) ![alt text](<WhatsApp Image 2024-07-03 at 19.22.48 (1).jpeg>) ![alt text](<WhatsApp Image 2024-07-03 at 19.22.48.jpeg>)