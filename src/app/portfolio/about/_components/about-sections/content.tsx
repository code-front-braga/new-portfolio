import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';

import type { SectionContent } from '../../../_shared/section';

export const ABOUT_CONTENT: Record<'programming' | 'career' | 'family' | 'draw' | 'music', SectionContent> = {
	programming: {
		id: 'programming',
		title: 'O Universo da Programação',
		className: 'mt-32 lg:mt-0 lg:py-0',
		items: [
			{
				title: 'Primeiro Contato',
				text: (
					<>
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
					</>
				),
			},
			{
				title: 'A Curiosidade Falou Mais Alto',
				text: 'Depois de alguns meses sem me aprofundar no assunto, resolvi dar uma chance e entender melhor como tudo funcionava.',
			},
			{
				title: 'Início dos estudos',
				text: (
					<>
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
					</>
				),
			},
		],
	},
	career: {
		id: 'career',
		title: 'Carreira',
		items: [
			{
				title: 'Entrada na MyByte',
				text: (
					<>
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
					</>
				),
			},
			{
				title: 'Atuação como Frontend',
				text: 'Atuo no desenvolvimento de interfaces modernas e bem estruturadas, participando da construção de páginas, componentes e funcionalidades dos produtos da empresa, utilizando Next.js como principal framework.',
			},
			{
				title: 'Evolução Profissional',
				text: 'Essa experiência tem sido essencial para consolidar meus conhecimentos na prática, fortalecer minha base em frontend e compreender a dinâmica de projetos reais em ambiente corporativo.',
			},
		],
	},
	family: {
		id: 'family',
		title: 'Família',
		items: [
			{
				title: 'Base',
				text: 'Sou casado e pai de uma filha. Minha família é o centro das minhas decisões e prioridades.',
			},
			{
				title: 'Responsabilidade',
				text: 'A paternidade reforçou em mim disciplina, constância e visão de longo prazo — valores que levo também para minha vida profissional.',
			},
			{
				title: 'Objetivo',
				text: 'Meu principal objetivo é proporcionar conforto, estabilidade e segurança financeira para minha família, construindo um futuro sólido através do meu trabalho e crescimento contínuo.',
			},
		],
	},
	draw: {
		id: 'draw',
		title: 'Desenho',
		items: [
			{
				title: 'Início',
				text: 'Desenho desde os 9 anos. Sempre foi uma das formas que encontrei de expressar ideias e criatividade.',
			},
			{
				title: 'Influências',
				text: 'Grande parte dessa inspiração veio de personagens de Dragon Ball Z e animes no geral, o que desenvolveu minha atenção a formas, proporções e detalhes visuais.',
			},
			{
				title: 'Impacto no Desenvolvimento',
				text: 'Esse lado artístico facilita na criação de interfaces, pois tenho mais facilidade para pensar em estética, equilíbrio visual e organização dos elementos.',
			},
			{
				title: 'Aplicação',
				text: 'No desenvolvimento frontend, isso contribui diretamente para criar interfaces mais claras, bem estruturadas e visualmente agradáveis.',
			},
		],
	},
	music: {
		id: 'music',
		title: 'Música',
		items: [
			{
				title: 'Início',
				text: 'Comecei a tocar violão aos 13 anos. Desde o início, a música se tornou parte importante da minha rotina e uma forma de foco e expressão.',
			},
			{
				title: 'Evolução',
				text: 'Aos 15 anos, passei a tocar violão de 7 cordas, o que ampliou minha percepção musical e desenvolveu maior coordenação e precisão.',
			},
			{
				title: 'Conquista',
				text: 'Realizei um dos meus maiores objetivos ao adquirir um violão de 7 cordas feito à mão por um luthier — um instrumento único, construído com identidade própria.',
			},
			{
				title: 'Estilo',
				text: 'Tenho forte conexão com a música instrumental, onde valorizo técnica, estrutura e sensibilidade — características que também aplico no desenvolvimento e na criação de soluções.',
			},
		],
	},
};
