# MinT Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Fully responsive design
- Modern UI with animations
- React & TypeScript for robust development
- Tailwind CSS for styling
- Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js (version 16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mintdunno/MinT_Porfolio.git
   cd MinT_Porfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
MinT_Portfolio/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Home/        # Home page components
│   │   └── Layout/      # Layout components
│   ├── context/         # React context for state management
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

## Customization

### Changing Content

Most of the content can be found in the respective component files under `src/components` and `src/pages`.

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file.

## Deployment

There are multiple ways to deploy this portfolio:

### 1. Automatic Deployment with GitHub Actions (Recommended)

This repository is set up with GitHub Actions to automatically deploy your portfolio whenever you push to the main branch.

1. Push your changes to the main branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. GitHub Actions will automatically build and deploy your site to the gh-pages branch.

3. Your site will be live at `https://mintdunno.github.io/MinT_Porfolio/` within a few minutes.

### 2. Manual Deployment

You can also manually trigger a deployment:

1. Run the deployment script:
   ```bash
   npm run deploy:local
   ```

2. This will build your project with production settings and deploy it to GitHub Pages.

### 3. Deploying to Cloudflare Pages

Cloudflare Pages provides a fast and secure hosting solution with automatic HTTPS and global CDN distribution.

#### First-time Setup

1. Push your repository to GitHub (if not already done).

2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) and sign in with your Cloudflare account.

3. Click "Create a project" and select "Connect to Git".

4. Select your GitHub repository with the MinT Portfolio code.

5. Configure your build settings:
   - **Project name**: `mint-portfolio` (or any name you prefer)
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Select "Vite"

6. Click "Save and Deploy".

7. Wait for the initial build to complete. Your site will be available at `https://{project-name}.pages.dev`.

#### Subsequent Deployments

Once set up, Cloudflare Pages will automatically deploy when you push changes to your repository. You can also manually trigger deployments from the Cloudflare Pages dashboard.

#### Custom Domain (Optional)

1. In your Cloudflare Pages project, go to "Custom domains".
2. Click "Set up a custom domain".
3. Follow the instructions to add and verify your domain.

### 4. Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Your site will be available at http://localhost:5173/ (or another port if 5173 is in use).

### 5. Building for Different Environments

This project supports different build environments:

- For development build: `npm run build:dev`
- For production build: `npm run build:prod`
- To test your build locally before deployment: `npm run test:build`

### Troubleshooting Deployment Issues

If you encounter any issues with your deployment:

1. Check GitHub Actions logs for any build errors:
   - Go to your repository on GitHub
   - Click on "Actions" tab
   - Look at the latest workflow run

2. Verify your assets are being loaded correctly:
   - Open your site in a browser
   - Open Developer Tools (F12)
   - Check the Console tab for 404 errors
   - Check the Network tab to see if assets are loading

3. If you see a blank page:
   - Make sure your base URL is set correctly in `vite.config.ts`
   - Verify that `.nojekyll` file exists in the deployed site
   - Check that routing is configured correctly for GitHub Pages

4. For local testing of the production build:
   ```bash
   npm run build:prod
   npm run test:build
   ```
   Then visit `http://localhost:5000`

### Deploying to GitHub Pages

1. Install the gh-pages package:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Add these scripts to your package.json:

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Deploy your application:

   ```bash
   npm run deploy
   ```

4. Configure your GitHub repository:
   - Go to Settings > Pages
   - Set the source branch to `gh-pages`
   - Save the changes

### Troubleshooting Blank Screen Issues

If you're seeing a blank screen after deployment:

1. Check browser console for errors (F12)
2. Ensure that `base` is set correctly in your vite.config.ts
3. Verify that assets are loading from the correct paths
4. Create a `.nojekyll` file in your dist directory before deploying
5. Wait a few minutes as GitHub Pages might take time to update
6. If using HashRouter, make sure all links within the app use the # syntax

## Live Demo

Visit the live portfolio at [https://mintdunno.github.io/MinT_Porfolio/](https://mintdunno.github.io/MinT_Porfolio/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
