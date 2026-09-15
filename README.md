# Prasanta Kumar Gorai Portfolio

A static personal portfolio website. No build step or environment variables are required.

## Deploy free on Vercel

### GitHub + Vercel (recommended)

1. Create a new GitHub repository and upload this project folder.
2. Sign in to [Vercel](https://vercel.com) with GitHub.
3. Select **Add New → Project**, then import the repository.
4. Leave the framework setting as **Other** and leave the build/output fields empty.
5. Click **Deploy**.

Every future push to the production branch deploys automatically.

### Vercel CLI

From this folder, run:

```powershell
npm install -g vercel
vercel --prod
```

The command will ask you to sign in and then prints the public deployment URL.

## Notes

- `vercel.json` keeps URLs clean and does not define a build command.
- The résumé PDF is deployed and linked from the header's "Download résumé" button.
