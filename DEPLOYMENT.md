# Deployment Guide for Dokploy

This guide explains how to deploy the Lexicon Beneficial Ownership application using Dokploy with GitHub Actions for automated CI/CD.

## Important: Environment Variables in Standalone Builds

This application uses Next.js with `output: 'standalone'` mode, which means:

- **`NEXT_PUBLIC_*` variables are embedded at BUILD time**, not runtime
- These variables must be provided as **Docker build arguments**
- Changing these variables requires a **full rebuild**, not just a container restart
- In Dokploy: Use "Build Args" section, NOT "Environment Variables"
- In GitHub Actions: Set as GitHub Secrets (passed as build args automatically)

## Prerequisites

- A Dokploy instance running and accessible
- Git repository access (GitHub)
- Environment variables ready
- GitHub repository secrets configured (for automated deployments)

## Deployment Steps

### 1. Access Dokploy Dashboard

Log in to your Dokploy dashboard at your Dokploy instance URL.

### 2. Create a New Application

1. Click on "Create Application" or "New Project"
2. Choose "Docker Compose" or "Dockerfile" as the deployment method

### 3. Connect Your Repository

1. Connect your Git repository (GitHub, GitLab, or Bitbucket)
2. Select the repository: `lexicon-bo/lexicon-beneficial-ownership`
3. Choose the branch to deploy (usually `main`)

### 4. Configure Build Settings

If using Dockerfile:
- **Build Context**: `/`
- **Dockerfile Path**: `./Dockerfile`

If using Docker Compose:
- **Docker Compose File**: `./docker-compose.yml`

### 5. Set Build Arguments

**Important**: Since we use Next.js standalone build, `NEXT_PUBLIC_*` environment variables must be set as **build arguments**, not runtime environment variables.

In Dokploy, configure the following build arguments:

```
NEXT_PUBLIC_API_KEY=<your-api-key>
NEXT_PUBLIC_SALT=<your-salt>
NEXT_PUBLIC_BASE_URL=<your-base-url>
NEXT_PUBLIC_BASE_URL_CHATBOT=<your-chatbot-url>
```

**Important**: Make sure to set these values according to your production environment.

### 6. Configure Port Mapping

- **Container Port**: 3000
- **Host Port**: 80 (or your preferred port)

### 7. Deploy

1. Review all settings
2. Click "Deploy" or "Create and Deploy"
3. Monitor the build logs for any errors

### 8. Verify Deployment

Once the deployment is complete:
1. Access your application via the provided URL or your domain
2. Verify all features are working correctly
3. Check that environment variables are properly loaded

## Local Testing with Docker

To test the Docker build locally before deploying:

1. Create a `.env` file in the project root with your environment variables:

   ```bash
   NEXT_PUBLIC_API_KEY=your_api_key
   NEXT_PUBLIC_SALT=your_salt
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_BASE_URL_CHATBOT=http://localhost:8080
   ```

2. Build and run with Docker Compose:

   ```bash
   docker-compose up --build
   ```

   Or build with Docker directly:

   ```bash
   docker build \
     --build-arg NEXT_PUBLIC_API_KEY=your_api_key \
     --build-arg NEXT_PUBLIC_SALT=your_salt \
     --build-arg NEXT_PUBLIC_BASE_URL=http://localhost:3000 \
     --build-arg NEXT_PUBLIC_BASE_URL_CHATBOT=http://localhost:8080 \
     -t lexicon-bo .

   docker run -p 3000:3000 lexicon-bo
   ```

3. Access the application at `http://localhost:3000`

## Troubleshooting

### Build Fails

- Check build logs in Dokploy dashboard or GitHub Actions
- Verify all build arguments are set (not environment variables)
- Ensure the Dockerfile and next.config.mjs are correctly configured
- For GitHub Actions, verify all secrets are properly configured

### Application Not Starting

- Verify port 3000 is exposed correctly
- Check container logs for Node.js errors
- Ensure all dependencies are installed correctly
- Verify sharp package is installed correctly

### Environment Variables Not Working

- **CRITICAL**: `NEXT_PUBLIC_*` variables must be set as **build arguments**, not runtime environment variables
- In Dokploy: Set them in the "Build Args" section, not "Environment Variables"
- In GitHub Actions: Set them as GitHub Secrets
- Remember that changing these variables requires a **rebuild**, not just a restart
- Verify the variables are available during the build by checking build logs

### Image Optimization Errors (sharp)

If you see errors about missing `sharp` module:
- Ensure `sharp` is in `package.json` dependencies
- Verify build dependencies are installed in Dockerfile (python3, make, g++)
- Check that `libc6-compat` is installed in the runtime stage

## Updating the Application

To deploy updates:
1. Push changes to your Git repository
2. Dokploy will automatically detect changes (if auto-deploy is enabled)
3. Or manually trigger a rebuild from the Dokploy dashboard

## Health Checks

Dokploy can monitor your application health. Configure:
- **Health Check Path**: `/` or `/api/health` (if you have one)
- **Interval**: 30s
- **Timeout**: 10s
- **Retries**: 3

## Custom Domain

To use a custom domain:
1. Go to your application settings in Dokploy
2. Add your domain name
3. Configure DNS to point to your Dokploy server
4. Enable SSL/TLS (Dokploy usually handles this automatically with Let's Encrypt)

## GitHub Actions Automated Deployment

This project includes a GitHub Actions workflow that automatically builds and deploys the application.

### Setup GitHub Secrets

Before the automated deployment works, you need to configure the following secrets in your GitHub repository:

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Add the following secrets:

#### Deployment Secrets

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `DOKPLOY_API_TOKEN` | Your Dokploy API token | `dpl_xxxxxxxxxxxxx` |
| `DOKPLOY_APPLICATION_ID` | Your application ID in Dokploy | `app_xxxxxxxxxxxxx` |
| `DOKPLOY_API_URL` | Your Dokploy instance URL | `https://dokploy.yourdomain.com` |

#### Application Environment Variables

**Important**: These are required for the Docker build since Next.js standalone mode embeds `NEXT_PUBLIC_*` variables at build time.

| Secret Name | Description | Required |
|-------------|-------------|----------|
| `NEXT_PUBLIC_API_KEY` | Your API key | Yes |
| `NEXT_PUBLIC_SALT` | Salt for encryption | Yes |
| `NEXT_PUBLIC_BASE_URL` | Base URL for the application | Yes |
| `NEXT_PUBLIC_BASE_URL_CHATBOT` | Base URL for chatbot service | Yes |

### How to Get Dokploy Credentials

1. **API Token**:
   - Log in to Dokploy dashboard
   - Go to Settings > API Tokens
   - Create a new API token
   - Copy and save it as `DOKPLOY_API_TOKEN`

2. **Application ID**:
   - In Dokploy, navigate to your application
   - Find the application ID in the URL or application settings
   - Save it as `DOKPLOY_APPLICATION_ID`

3. **API URL**:
   - This is your Dokploy instance URL
   - Format: `https://your-dokploy-domain.com`
   - Save it as `DOKPLOY_API_URL`

### Workflow Triggers

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered on:

- **Push to `main` branch**: Builds, pushes Docker image to GitHub Container Registry (GHCR), and deploys to Dokploy
- **Version tags** (e.g., `v1.0.0`): Builds and pushes Docker image with version tag

### Workflow Steps

1. **Build and Push**:
   - Checks out the code
   - Sets up Docker Buildx for multi-platform builds
   - Logs in to GitHub Container Registry
   - Builds Docker image for `linux/amd64` and `linux/arm64`
   - Pushes image to GHCR with `latest` tag
   - Generates build attestation for security

2. **Deploy**:
   - Triggers Dokploy deployment via API
   - Only runs on pushes to `main` branch

### Using the Docker Image from GHCR

The workflow pushes images to GitHub Container Registry. You can configure Dokploy to pull from GHCR:

1. In Dokploy, configure your application to use external image
2. Set image source to: `ghcr.io/<your-username>/lexicon-beneficial-ownership:latest`
3. Configure Dokploy to pull and redeploy when the workflow triggers the deployment

### Manual Deployment

To manually trigger a deployment:

1. Push to the `main` branch, or
2. Create and push a version tag:

   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

### Monitoring Deployments

- View workflow runs in GitHub: **Actions** tab
- Check deployment status in Dokploy dashboard
- Monitor application logs in Dokploy

## Additional Resources

- [Dokploy Documentation](https://dokploy.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
