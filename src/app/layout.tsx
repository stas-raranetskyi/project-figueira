export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}
