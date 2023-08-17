This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Notion's database connections 
Cara untuk menghubungkan database notion dengan project ini adalah sebagai berikut : <br>

1. Buka notion dan buat sebuah database baru 
![Alt text](public/image.png)

2. Beri nama untuk database baru dan masukkan ke dalam .env sebagai NOTION_DATABASE_NAME. Pencet tombol ... di atas dan pilih add connections, lalu tekan manage connections
![Alt text](public/image-1.png)

3. Di dalam manage connections, tekan tombol develop or manage integrations
![Alt text](public/image-2.png)

4. Buat integrations baru (jika belum ada) dan pilih HMIF sebagai workspacenya. Pastikan bahwa integrations bisa membaca data dari database
![Alt text](public/image-3.png)

5. Copy secrets di dalam intergrations dan masukkan ke dalam .env sebagai NOTION_SECRETS
![Alt text](public/image-4.png)

6. Masukkan id database sebagai NOTION_DATABASE_ID di dalam .env
![Alt text](public/image-5.png)
Pada gambar di atas, id databasenya adalah 0b72269b36d149edb3ab213fd62a8aa5