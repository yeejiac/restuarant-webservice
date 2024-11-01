// pages/api/_middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const apiKey = req.headers.get('x-api-key');
  
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return new NextResponse(JSON.stringify({ message: 'Invalid API key' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return NextResponse.next(); // 若驗證成功，則繼續處理請求
}

// 使 middleware 僅作用於 /api 路由
export const config = {
  matcher: '/api/:path*',
};
