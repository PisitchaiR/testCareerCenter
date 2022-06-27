const dev = process.env.NEXT_PUBLIC_API_URL !== 'production'
export const server = dev ? 'http://localhost:8000' : 'https://yourwebsite.com'