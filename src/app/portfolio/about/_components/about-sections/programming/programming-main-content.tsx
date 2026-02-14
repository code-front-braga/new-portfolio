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
							<h2 className="text-4xl font-semibold text-white">O Universo da Programação</h2>
						</Link>
						<LinkIcon className="hidden text-zinc-600 group-hover:flex" />
					</div>
				</div>
				<Separator className="mt-4 mb-4 w-full bg-zinc-700" />
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Primeiro Contato</h3>
					<p className="text-zinc-200">
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
					<h3 className="text-xl font-semibold text-white">A Curiosidade Falou Mais Alto</h3>
					<p className="text-zinc-200">
						Depois de alguns meses sem me aprofundar no assunto, resolvi dar uma chance e entender melhor como tudo
						funcionava.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Início dos estudos</h3>
					<p className="text-zinc-200">
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
						, onde tive meus primeiros contatos reais com lógica e desenvolvimento. Foi ali que percebi que aquilo
						realmente fazia sentido para mim.
					</p>
				</div>
			</section>
			<section id="career" className="font-geist-sans block w-full">
				<div className="space-y-4">
					<div className="group flex items-center gap-2">
						<Link href="#career" onClick={makeNavigate ? makeNavigate('#career') : undefined}>
							<h2 className="text-4xl font-semibold text-white">Carreira</h2>
						</Link>
						<LinkIcon className="hidden text-zinc-600 group-hover:flex" />
					</div>
				</div>
				<Separator className="mt-4 mb-4 w-full bg-zinc-700" />
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">
						Entrada na <span className="text-blue-400">MyByte</span>
					</h3>
					<p className="text-zinc-200">
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
						meses de atuação, período marcado por crescimento técnico e profissional.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Atuação como Frontend</h3>
					<p className="text-zinc-200">
						Atuo no desenvolvimento de interfaces modernas e bem estruturadas, participando da construção de páginas,
						componentes e funcionalidades dos produtos da empresa, utilizando Next.js como principal framework.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Evolução Profissional</h3>
					<p className="text-zinc-200">
						Essa experiência tem sido essencial para consolidar meus conhecimentos na prática, fortalecer minha base em
						frontend e compreender a dinâmica de projetos reais em ambiente corporativo.
					</p>
				</div>
			</section>
			<section id="family" className="font-geist-sans block w-full">
				<div className="space-y-4">
					<div className="group flex items-center gap-2">
						<Link href="#career" onClick={makeNavigate ? makeNavigate('#family') : undefined}>
							<h2 className="text-4xl font-semibold text-white">Família</h2>
						</Link>
						<LinkIcon className="hidden text-zinc-600 group-hover:flex" />
					</div>
				</div>
				<Separator className="mt-4 mb-4 w-full bg-zinc-700" />
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Base</h3>
					<p className="text-zinc-200">
						Sou casado e pai de uma filha. Minha família é o centro das minhas decisões e prioridades.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Responsabilidade</h3>
					<p className="text-zinc-200">
						A paternidade reforçou em mim disciplina, constância e visão de longo prazo — valores que levo também para
						minha vida profissional.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Objetivo</h3>
					<p className="text-zinc-200">
						Meu principal objetivo é proporcionar conforto, estabilidade e segurança financeira para minha família,
						construindo um futuro sólido através do meu trabalho e crescimento contínuo.
					</p>
				</div>
			</section>
			<section id="draw" className="font-geist-sans block w-full">
				<div className="space-y-4">
					<div className="group flex items-center gap-2">
						<Link href="#career" onClick={makeNavigate ? makeNavigate('#draw') : undefined}>
							<h2 className="text-4xl font-semibold text-white">Desenho</h2>
						</Link>
						<LinkIcon className="hidden text-zinc-600 group-hover:flex" />
					</div>
				</div>
				<Separator className="mt-4 mb-4 w-full bg-zinc-700" />
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Início</h3>
					<p className="text-zinc-200">
						Desenho desde os 9 anos. Sempre foi uma das formas que encontrei de expressar ideias e criatividade.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Influências</h3>
					<p className="text-zinc-200">
						Grande parte dessa inspiração veio de personagens de Dragon Ball Z e animes no geral, o que desenvolveu
						minha atenção a formas, proporções e detalhes visuais.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Impacto no Desenvolvimento</h3>
					<p className="text-zinc-200">
						Esse lado artístico facilita na criação de interfaces, pois tenho mais facilidade para pensar em estética,
						equilíbrio visual e organização dos elementos.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Aplicação</h3>
					<p className="text-zinc-200">
						No desenvolvimento frontend, isso contribui diretamente para criar interfaces mais claras, bem estruturadas
						e visualmente agradáveis.
					</p>
				</div>
			</section>
			<section id="music" className="font-geist-sans block w-full">
				<div className="space-y-4">
					<div className="group flex items-center gap-2">
						<Link href="#career" onClick={makeNavigate ? makeNavigate('#music') : undefined}>
							<h2 className="text-4xl font-semibold text-white">Música</h2>
						</Link>
						<LinkIcon className="hidden text-zinc-600 group-hover:flex" />
					</div>
				</div>
				<Separator className="mt-4 mb-4 w-full bg-zinc-700" />
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Início</h3>
					<p className="text-zinc-200">
						Comecei a tocar violão aos 13 anos. Desde o início, a música se tornou parte importante da minha rotina e
						uma forma de foco e expressão.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Evolução</h3>
					<p className="text-zinc-200">
						Aos 15 anos, passei a tocar violão de 7 cordas, o que ampliou minha percepção musical e desenvolveu maior
						coordenação e precisão.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Conquista</h3>
					<p className="text-zinc-200">
						Realizei um dos meus maiores objetivos ao adquirir um violão de 7 cordas feito à mão por um luthier — um
						instrumento único, construído com identidade própria.
					</p>
				</div>
				<div className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">Estilo</h3>
					<p className="text-zinc-200">
						Tenho forte conexão com a música instrumental, onde valorizo técnica, estrutura e sensibilidade —
						características que também aplico no desenvolvimento e na criação de soluções.
					</p>
				</div>
			</section>
		</>
	);
};
