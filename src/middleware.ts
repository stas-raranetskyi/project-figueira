import { NextRequest, NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';

import i18nConfig from '@/configs/i18n.config';

export function middleware(req: NextRequest) {
	const basicAuth = req.headers.get('authorization');
	const url = req.nextUrl;
	let hostname = req.headers.get('host')!.replace('.localhost:3000', `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
	let canView = hostname.includes('localhost');

	if (basicAuth) {
		const authValue = basicAuth.split(' ')[1];
		const [user, pwd] = atob(authValue).split(':');

		if (user === 'admin' && pwd === 'admin') {
			canView = true;
		}
	}
	if (!canView) {
		return NextResponse.rewrite(new URL('/api/basic-auth', req.url));
	}

	if (hostname.includes('---') && hostname.endsWith(`.${process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_SUFFIX}`)) {
		hostname = `${hostname.split('---')[0]}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;
	}
	const searchParams = req.nextUrl.searchParams.toString();
	const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`;

	if (hostname === `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
		return NextResponse.rewrite(new URL(`/app${path === '/' ? '' : path}`, req.url));
	}

	return i18nRouter(req, i18nConfig);
}

export const config = {
	matcher: ['/((?!api|_next/static|.*svg|.*png|.*jpg|.*jpeg|.*gif|.*webp|_next/image|favicon.ico).*)'],
};
