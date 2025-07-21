# Futuristic Portfolio with Supabase Backend

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Supabase backend for comments and contact form functionality.

## Features

- 🚀 Modern futuristic design with animations
- 💬 Real-time comment system
- 📧 Contact form with database storage
- 🎨 Responsive design with Tailwind CSS
- ⚡ Built with Vite for fast development
- 🔒 Secure backend with Supabase RLS policies

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages + Supabase

## Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### 2. Supabase Setup

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Wait for the database to be ready

2. **Get Your Credentials**
   - Go to Project Settings > API
   - Copy your `Project URL` and `anon public` key

3. **Create Environment Variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### 3. Database Setup

Run these SQL commands in your Supabase SQL Editor:

#### Create Comments Table
```sql
-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  comment text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read comments"
  ON comments
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can insert comments"
  ON comments
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

#### Create Contact Messages Table
```sql
-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy (only insert, no read for privacy)
CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

### 4. Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### 5. Build for Production

```bash
npm run build
```

### 6. Deploy to GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source

2. **Create GitHub Actions Workflow**
   
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build
           env:
             VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
             VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           if: github.ref == 'refs/heads/main'
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Add Repository Secrets**
   - Go to repository Settings > Secrets and variables > Actions
   - Add these secrets:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

4. **Push to Deploy**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

## Database Schema

### Comments Table
- `id`: UUID (Primary Key)
- `name`: TEXT (Required)
- `comment`: TEXT (Required)
- `created_at`: TIMESTAMP (Auto-generated)

### Contact Messages Table
- `id`: UUID (Primary Key)
- `name`: TEXT (Required)
- `email`: TEXT (Required)
- `subject`: TEXT (Required)
- `message`: TEXT (Required)
- `created_at`: TIMESTAMP (Auto-generated)

## Security

- Row Level Security (RLS) is enabled on all tables
- Anonymous users can only insert data and read comments
- Contact messages are private (insert-only for users)
- All user inputs are validated on the frontend

## Customization

1. **Update Personal Information**
   - Edit the content in each component file
   - Replace placeholder images and links
   - Update social media links in `Footer.tsx`

2. **Modify Design**
   - Colors and gradients are defined in `tailwind.config.js`
   - Custom animations are in `src/index.css`
   - Component styles use Tailwind classes

3. **Add New Sections**
   - Create new components in `src/components/`
   - Import and add to `App.tsx`
   - Update navigation in `Navigation.tsx`

## Troubleshooting

### Common Issues

1. **Supabase Connection Errors**
   - Verify your environment variables are correct
   - Check if your Supabase project is active
   - Ensure RLS policies are properly set

2. **Build Errors**
   - Make sure all dependencies are installed
   - Check for TypeScript errors
   - Verify environment variables are set

3. **Deployment Issues**
   - Ensure GitHub secrets are properly configured
   - Check GitHub Actions logs for errors
   - Verify the build process completes successfully

## License

MIT License - feel free to use this project for your own portfolio!

## Support

If you encounter any issues, please check the troubleshooting section or create an issue in the repository.