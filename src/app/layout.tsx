import './globals.css';
import './scroll.css';

import { ChildrenType } from '@/@types/children-type';
import { TooltipProvider } from '@/components/ui/tooltip';
import { alumniFont, antaFont, geistFont, geistMonoFont, gemunuFont, sairaFont } from '@/lib/fonts';

export default function RootLayout({ children }: ChildrenType) {
	return (
		<html lang="pt-BR" data-scroll-behavior="smooth">
			<body
				className={`${alumniFont.className} ${antaFont.className} ${gemunuFont.className} ${geistFont.className} ${geistMonoFont.className} ${sairaFont.className} antialiased`}
			>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	);
}
