# Taskido

A modern task management application with a beautiful landing page.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Netlify

### Option 1: Deploy from GitHub

1. Push your code to GitHub
2. Log in to Netlify
3. Click "New site from Git"
4. Select your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Option 2: Deploy using Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login to Netlify: `netlify login`
3. Initialize your site: `netlify init`
4. Deploy your site: `netlify deploy --prod`

## Custom Domain Setup

1. In Netlify, go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., taskido.com)
4. Follow the instructions to configure your DNS settings

## Technologies Used

- Next.js
- React
- TypeScript
- Sass
- Swiper
