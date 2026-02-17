import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';

import type { SectionContent } from '../../../_shared/section';

export const SKILLS_CONTENT: Record<'hard' | 'soft', SectionContent> = {
	hard: {
		id: 'hard',
		title: 'Hard Skills',
		className: 'mt-32 lg:mt-0 lg:py-0',
		items: [
			{
				title: 'Frontend com Next.js',
				text: (
					<>
						Desenvolvimento de aplicações modernas utilizando{' '}
						<Link
							href="https://nextjs.org/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							Next.js
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						, com foco em componentização, organização e performance. Experiência com Server Components, Server Actions
						e arquitetura baseada em App Router.
					</>
				),
			},
			{
				title: 'Interfaces Modernas e Bem Estruturadas',
				text: (
					<>
						Construção de interfaces utilizando{' '}
						<Link
							href="https://react.dev/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							React
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						,{' '}
						<Link
							href="https://www.typescriptlang.org/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							TypeScript
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>{' '}
						e{' '}
						<Link
							href="https://tailwindcss.com/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							Tailwind CSS
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						, priorizando clareza visual, consistência e experiência do usuário.
					</>
				),
			},
			{
				title: 'Integração com Backend e Dados',
				text: (
					<>
						Integração com banco de dados utilizando{' '}
						<Link
							href="https://www.prisma.io/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							Prisma ORM
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>{' '}
						e{' '}
						<Link
							href="https://www.postgresql.org/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							PostgreSQL
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						, com foco em organização, tipagem e estrutura escalável.
					</>
				),
			},
			{
				title: 'Código Limpo e Arquitetura',
				text: 'Aplicação de boas práticas de desenvolvimento, com foco em legibilidade, manutenibilidade e estrutura consistente, seguindo padrões modernos do ecossistema React e Next.js.',
			},
			{
				title: 'Componentes com shadcn/ui',
				text: (
					<>
						Construção de componentes acessíveis e estilizados com{' '}
						<Link
							href="https://ui.shadcn.com/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							shadcn/ui
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						.
					</>
				),
			},
			{
				title: 'Ícones com Lucide',
				text: (
					<>
						Conjunto de ícones{' '}
						<Link
							href="https://lucide.dev/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							Lucide
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>{' '}
						para compor interfaces com consistência visual.
					</>
				),
			},
			{
				title: 'Formulários com React Hook Form',
				text: (
					<>
						Gestão eficiente de estado de formulários com{' '}
						<Link
							href="https://react-hook-form.com/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							React Hook Form
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>{' '}
						e integração com Zod.
					</>
				),
			},
			{
				title: 'Animações com Motion',
				text: (
					<>
						Animações declarativas e performáticas usando{' '}
						<Link
							href="https://motion.dev/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							Motion
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						.
					</>
				),
			},
			{
				title: 'Validação com Zod',
				text: (
					<>
						Validação de dados e tipagem com{' '}
						<Link
							href="https://zod.dev/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							Zod
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						.
					</>
				),
			},
			{
				title: 'Autenticação com Better Auth',
				text: (
					<>
						Fluxos de autenticação simplificados com{' '}
						<Link
							href="https://better-auth.com/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							Better Auth
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						.
					</>
				),
			},
		],
	},
	soft: {
		id: 'soft',
		title: 'Soft Skills',
		items: [
			{
				title: 'Competências Profissionais',
				text: 'Comunicação clara e objetiva, facilitando o alinhamento de ideias e a colaboração com a equipe. Facilidade em trabalhar em equipe, contribuindo de forma colaborativa na construção de soluções e na evolução contínua dos projetos. Perfil analítico, com foco em clareza, organização e qualidade de código, priorizando soluções bem estruturadas e de fácil manutenção.Adaptabilidade e aprendizado contínuo, com capacidade de evoluir rapidamente e acompanhar tecnologias e práticas modernas de desenvolvimento.',
			},
		],
	},
};
