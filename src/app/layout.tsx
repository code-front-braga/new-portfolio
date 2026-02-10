import './globals.css';

import { ChildrenType } from '@/@types/children-type';

export default function RootLayout({ children }: ChildrenType) {
	return (
		<html lang="pt-BR">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
