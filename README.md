# Emergency Information App

A mobile-friendly emergency information app built with React and Vite. It displays essential personal details, emergency contacts, and a call action for urgent situations.

## Features

- Clean emergency information layout
- Mobile-first responsive design
- Automatic light/dark theme based on device time
- Profile photo section with circular avatar
- Quick phone call actions
- Emergency contact list
- Warning / important note section
- Smooth hero background motion and polished visual design

## Project Overview

This app is designed to show critical information quickly in a simple and readable format, especially for mobile users in emergency situations.

## Personal Story

I am a biker and also an engineer, and this project was created to solve a very practical problem: when I am riding, I may not always be able to answer a phone call or explain my situation clearly. In an emergency, a person nearby should be able to scan a QR code placed on my bike or helmet and immediately access my contact information and emergency details.

The goal is simple: if something happens while I am on the road, anyone can quickly get the information they need to contact my family without delay. This makes the app useful not just as a personal profile, but as a safety tool for real-life situations.

## Tech Stack

- React
- Vite
- CSS

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal.

### Build for production

```bash
npm run build
```

## App Structure

- `src/App.jsx` — main application layout and data
- `src/index.css` — styling, theme system, and responsive design
- `public/` — static assets such as images

## Notes

- The app currently switches between light and dark mode automatically based on the device time.
- The call buttons use standard `tel:` links for direct phone dialing.
- The design is optimized for mobile-first usage but remains comfortable on larger screens.

## Future Enhancements

- Add a custom theme toggle option
- Support for multiple emergency contact groups
- Add medical notes or allergies section
- Integrate with backend or cloud data storage
- Add share/export functionality

## License

Copyright © 2026 Rabiul Islam Bipul. All rights reserved.

This project is for personal use and may not be copied, distributed, or reused without the author's permission.
