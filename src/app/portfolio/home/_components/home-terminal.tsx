'use client';

import { motion } from 'motion/react';

import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/ui/terminal';

export const HomeTerminal = () => {
	return (
		<motion.div
			className="relative hidden w-full justify-center lg:flex"
			initial={{ opacity: 0, x: 24 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: 'spring', stiffness: 240, damping: 26, delay: 0.1 }}
		>
			<Terminal className="w-full max-w-2xl rounded-lg text-xs lg:text-sm">
				<TypingAnimation>&gt; git log --author=&quot;Leonardo Braga&quot;</TypingAnimation>
				<AnimatedSpan className="text-green-500">✔ feat: Desenvolvedor Web</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ feat: Entusiasta de Next.js e TypeScript</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ feat: Interfaces com Tailwind CSS</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ feat: Criador de interfaces modernas com Tailwind CSS</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ feat: Sistemas de gestão e plataformas SaaS</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ fix: Performance e UX</AnimatedSpan>
				<TypingAnimation>&gt; git show HEAD:skills.json</TypingAnimation>
				<AnimatedSpan className="text-white">
					<span>{'{'}</span>
					<span className="lg:block lg:pl-4">
						&quot;frontend&quot;: [&quot;Next.js&quot;, &quot;React&quot;, &quot;TypeScript&quot;, &quot;Tailwind
						CSS&quot;, &quot;Zod&quot;, <br /> &quot;react-hook-form&quot;],
					</span>
					<span className="lg:block lg:pl-4">
						&quot;backend&quot;: [&quot;Node.js&quot;, &quot;Prisma ORM&quot;, &quot;PostgreSQL&quot;,
						&quot;Better-auth&quot;],
					</span>
					<span className="lg:block lg:pl-4">
						&quot;tools&quot;: [&quot;Git&quot;, &quot;shadcn/ui&quot;, &quot;Lucide Icons&quot;],
					</span>
					<span className="block pl-2 lg:pl-4">&quot;location&quot;: &quot;Salvador, BA&quot;</span>
					<span>{'}'}</span>
				</AnimatedSpan>
				<TypingAnimation className="text-muted-foreground">
					git commit -m &quot;Ready to build amazing projects&quot;
				</TypingAnimation>
			</Terminal>
		</motion.div>
	);
};
