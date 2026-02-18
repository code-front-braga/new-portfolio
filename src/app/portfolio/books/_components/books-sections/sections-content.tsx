import ExpandableCards from '@/components/smoothui/expandable-cards';

import type { NavigateFn, SectionContent } from '../../../_shared/section';
import { Section } from '../../../_shared/section';
import { BOOKS } from '../../constants/books';

const PRODUCTIVITY_IDS = new Set(['Essencialismo: A disciplinada busca por menos']);
const HABITS_IDS = new Set(['O Poder do Hábito', 'O Poder da Ação']);
const BUSINESS_IDS = new Set(['A Startup Enxuta', 'Apaixone-se pelo problema e não pela solução']);
const CUSTOMER_IDS = new Set(['O jeito Disney de encantar os clientes']);
const INSPIRATION_IDS = new Set(['Nunca deixe de tentar']);
const DEVELOPER_IDS = new Set(['Código Limpo', 'Refatoração', 'Estrutura de Dados e Algoritmos com JavaScript']);

const CONTENT: Record<string, SectionContent> = {
	productivity: {
		id: 'productivity',
		title: 'Produtividade',
		subtitle: 'Clique no livro para ver informações',
		items: [
			{
				title: 'Livros',
				text: (
					<ExpandableCards
						cards={BOOKS.filter(b => PRODUCTIVITY_IDS.has(b.title)).map((b, idx) => ({
							id: idx + 1,
							title: '',
							image: b.image ?? '/placeholder.svg',
							content: (
								<div className="space-y-3">
									<p className="text-zinc-300">{b.subtitle}</p>
									<p className="text-zinc-400">
										<span className="text-zinc-400">Autor:</span> {b.author}
									</p>
									<p className="text-sm leading-relaxed text-zinc-200">{b.description}</p>
								</div>
							),
						}))}
					/>
				),
			},
		],
	},
	habits: {
		id: 'habits',
		title: 'Hábitos',
		subtitle: 'Clique no livro para ver informações',
		items: [
			{
				title: 'Livros',
				text: (
					<ExpandableCards
						cards={BOOKS.filter(b => HABITS_IDS.has(b.title)).map((b, idx) => ({
							id: idx + 1,
							title: '',
							image: b.image ?? '/placeholder.svg',
							content: (
								<div className="space-y-3">
									<p className="text-zinc-300">{b.subtitle}</p>
									<p className="text-zinc-400">
										<span className="text-zinc-400">Autor:</span> {b.author}
									</p>
									<p className="text-sm leading-relaxed text-zinc-200">{b.description}</p>
								</div>
							),
						}))}
					/>
				),
			},
		],
	},
	business: {
		id: 'business',
		title: 'Negócios/Startup',
		subtitle: 'Clique no livro para ver informações',
		items: [
			{
				title: 'Livros',
				text: (
					<ExpandableCards
						cards={BOOKS.filter(b => BUSINESS_IDS.has(b.title)).map((b, idx) => ({
							id: idx + 1,
							title: '',
							image: b.image ?? '/placeholder.svg',
							content: (
								<div className="space-y-3">
									<p className="text-zinc-300">{b.subtitle}</p>
									<p className="text-zinc-400">
										<span className="text-zinc-400">Autor:</span> {b.author}
									</p>
									<p className="text-sm leading-relaxed text-zinc-200">{b.description}</p>
								</div>
							),
						}))}
					/>
				),
			},
		],
	},
	customer: {
		id: 'customer',
		title: 'Experiência do Cliente',
		subtitle: 'Clique no livro para ver informações',
		items: [
			{
				title: 'Livros',
				text: (
					<ExpandableCards
						cards={BOOKS.filter(b => CUSTOMER_IDS.has(b.title)).map((b, idx) => ({
							id: idx + 1,
							title: '',
							image: b.image ?? '/placeholder.svg',
							content: (
								<div className="space-y-3">
									<p className="text-zinc-300">{b.subtitle}</p>
									<p className="text-zinc-400">
										<span className="text-zinc-400">Autor:</span> {b.author}
									</p>
									<p className="text-sm leading-relaxed text-zinc-200">{b.description}</p>
								</div>
							),
						}))}
					/>
				),
			},
		],
	},
	developer: {
		id: 'developer',
		title: 'Desenvolvimento',
		subtitle: 'Clique no livro para ver informações',
		items: [
			{
				title: 'Livros',
				text: (
					<ExpandableCards
						cards={BOOKS.filter(b => DEVELOPER_IDS.has(b.title)).map((b, idx) => ({
							id: idx + 1,
							title: '',
							image: b.image ?? '/placeholder.svg',
							content: (
								<div className="space-y-3">
									<p className="text-zinc-300">{b.subtitle}</p>
									<p className="text-zinc-400">
										<span className="text-zinc-400">Autor:</span> {b.author}
									</p>
									<p className="text-sm leading-relaxed text-zinc-200">{b.description}</p>
								</div>
							),
						}))}
					/>
				),
			},
		],
	},
	inspiration: {
		id: 'inspiration',
		title: 'Inspiração',
		subtitle: 'Clique no livro para ver informações',
		items: [
			{
				title: 'Livros',
				text: (
					<ExpandableCards
						cards={BOOKS.filter(b => INSPIRATION_IDS.has(b.title)).map((b, idx) => ({
							id: idx + 1,
							title: '',
							image: b.image ?? '/placeholder.svg',
							content: (
								<div className="space-y-3">
									<p className="text-zinc-300">{b.subtitle}</p>
									<p className="text-zinc-400">
										<span className="text-zinc-400">Autor:</span> {b.author}
									</p>
									<p className="text-sm leading-relaxed text-zinc-200">{b.description}</p>
								</div>
							),
						}))}
					/>
				),
			},
		],
	},
};

export const BooksSectionsContent = ({ makeNavigate }: { makeNavigate?: NavigateFn }) => {
	return (
		<>
			<Section content={CONTENT.productivity} makeNavigate={makeNavigate} />
			<Section content={CONTENT.habits} makeNavigate={makeNavigate} />
			<Section content={CONTENT.business} makeNavigate={makeNavigate} />
			<Section content={CONTENT.customer} makeNavigate={makeNavigate} />
			<Section content={CONTENT.developer} makeNavigate={makeNavigate} />
			<Section content={CONTENT.inspiration} makeNavigate={makeNavigate} />
		</>
	);
};
