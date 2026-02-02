# Social Viz - Social Media Insights Dashboard

A scalable Next.js application for visualizing Facebook and Instagram insights using the Facebook Graph API.

## Features

- **Tech Stack**: Next.js 14, TypeScript, Tailwind CSS.
- **Charts**: Interactive charts using Recharts.
- **Integration**: Facebook Graph API integration for retrieving User, Page, and Post insights.
- **UI**: Modern, responsive design.

## Setup Instructions

1. **Clone the repository**.

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Configure Facebook SDK**:
    - Open `src/components/SocialDashboard.tsx`.
    - Find the line `appId: 'YOUR_APP_ID'`.
    - Replace `'YOUR_APP_ID'` with your actual Facebook App ID from the [Meta for Developers](https://developers.facebook.com/) portal.

4. **Run the development server**:

    ```bash
    npm run dev
    ```

5. **Access**: Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/components/SocialDashboard.tsx`: Main component handling API logic and visualization.
- `src/app/page.tsx`: Entry page.
- `src/types/facebook.d.ts`: TypeScript definitions for the Facebook SDK.

## Scalability

This project is designed to be scalable:
- **Component-based**: UI is broken down into reusable components (can be further refactored).
- **Type Safety**: Full TypeScript definitions for API responses.
- **Modern Stack**: Uses Next.js App Router for optimal performance.
