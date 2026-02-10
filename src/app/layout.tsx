import './globals.css';

import { ChildrenType } from '@/@types/children-type';
import { geistFont, geistMonoFont } from '@/lib/fonts';

export default function RootLayout({ children }: ChildrenType) {
	return (
		<html lang="pt-BR">
			<body className={`${geistFont.className} ${geistMonoFont.className} antialiased`}>{children}</body>
		</html>
	);
}
