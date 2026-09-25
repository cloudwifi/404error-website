# 404error.online

Professional React + Vite starter website for 404error.online.

## Local development

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
```

The production files are generated in `dist/`.

## Cloudflare Pages

Recommended setup:
1. Push this project to a GitHub repository.
2. In Cloudflare, open Workers & Pages → Create application → Pages → Connect to Git.
3. Select the GitHub repository.
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Deploy.
7. Add `404error.online` under Custom domains.
8. Keep your domain DNS managed by Cloudflare and follow the DNS records Cloudflare provides.

No backend is required for this first version.
