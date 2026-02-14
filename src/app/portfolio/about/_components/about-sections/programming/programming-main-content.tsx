'use client';

import { ArrowUpRightIcon, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import type { MouseEvent } from 'react';

import { Separator } from '@/components/ui/separator';

type NavigateFn = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => void;

export const ProgrammingMainContent = ({
	sectionClassName,
	makeNavigate,
}: {
	sectionClassName?: string;
	makeNavigate?: NavigateFn;
}) => {
	return (
		<>
			<section
				id="programming"
				className={`font-geist-sans mt-32 block w-full lg:mt-0 lg:py-0 ${sectionClassName ?? ''}`}
			>
				<div className="space-y-4">
					<div className="group flex items-center gap-2">
						<Link href="#programming" onClick={makeNavigate ? makeNavigate('#programming') : undefined}>
							<h2 className="text-background text-4xl font-semibold">O Universo da Programação</h2>
						</Link>
						<LinkIcon className="hidden text-zinc-600 group-hover:flex" />
					</div>
				</div>
				<Separator className="mt-4 mb-4 w-full bg-zinc-700" />
				<div className="mb-4 space-y-4">
					<h3 className="text-2xl font-semibold text-white">Primeiro Contato</h3>
					<p className="text-background">
						Conheci a programação através do meu irmão, que estava estudando pelos{' '}
						<Link
							href="https://www.cursoemvideo.com/sobre/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							cursos do Gustavo Guanabara
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						. Eu acompanhava de perto, mas naquele momento ainda não tinha decidido seguir pelo mesmo caminho.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-2xl font-semibold text-white">A curiosidade voltou</h3>
					<p className="text-background">
						Depois de alguns meses sem me aprofundar no assunto, a curiosidade falou mais alto. Resolvi dar uma chance e
						entender melhor como tudo funcionava.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-2xl font-semibold text-white">Início dos estudos</h3>
					<p className="text-background">
						Comecei pelos cursos do{' '}
						<Link
							href="https://www.cursoemvideo.com/sobre/"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							Curso em Vídeo
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						, onde tive meus primeiros contatos reais com lógica e desenvolvimento. Foi nesse momento que percebi que
						aquilo realmente fazia sentido para mim.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-2xl font-semibold text-white">A curiosidade voltou</h3>
					<p className="text-background">
						Depois de alguns meses sem me aprofundar no assunto, a curiosidade falou mais alto. Resolvi dar uma chance e
						entender melhor como tudo funcionava.
					</p>
				</div>
			</section>
			<section id="career" className="font-geist-sans block w-full">
				<div className="space-y-4">
					<div className="group flex items-center gap-2">
						<Link href="#career" onClick={makeNavigate ? makeNavigate('#career') : undefined}>
							<h2 className="text-background text-4xl font-semibold">Carreira</h2>
						</Link>
						<LinkIcon className="hidden text-zinc-600 group-hover:flex" />
					</div>
				</div>
				<Separator className="mt-4 mb-4 w-full bg-zinc-700" />
				<div className="mb-4 space-y-4">
					<h3 className="text-2xl font-semibold text-white">
						Entrada na <span className="text-blue-400">MyByte</span>
					</h3>
					<p className="text-background">
						Atualmente faço parte da equipe da{' '}
						<Link
							href="https://www.linkedin.com/company/mybyte-tecnologia/posts/?feedView=all"
							rel="noopener noreferrer"
							target="_blank"
							className="inline-flex text-blue-400"
						>
							MyByte
							<ArrowUpRightIcon size={12} className="inline-flex" />
						</Link>
						, onde iniciei minha primeira experiência profissional como desenvolvedor frontend. Este mês completo 5
						meses de atuação na empresa, período em que venho evoluindo tecnicamente e profissionalmente.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-2xl font-semibold text-white">Atuação como Frontend</h3>
					<p className="text-background">
						Minha principal responsabilidade é o desenvolvimento de interfaces modernas, funcionais e bem estruturadas.
						Trabalho diretamente na construção de páginas, componentes e funcionalidades que fazem parte dos produtos da
						empresa.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-2xl font-semibold text-white">Evolução Profissional</h3>
					<p className="text-background">
						Essa experiência tem sido fundamental para consolidar meus conhecimentos na prática, fortalecer minha base
						em desenvolvimento frontend e entender melhor o funcionamento de projetos reais em ambiente profissional.
					</p>
				</div>
			</section>
		</>
	);
};
