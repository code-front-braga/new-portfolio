import './globals.css';

import { ChildrenType } from '@/@types/children-type';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { geistFont, geistMonoFont } from '@/lib/fonts';

export default function RootLayout({ children }: ChildrenType) {
	return (
		<html lang="pt-BR">
			<body className={`${geistFont.className} ${geistMonoFont.className} antialiased`}>
				<TooltipProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </TooltipProvider>
			</body>
		</html>
	);
}
