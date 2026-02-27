export type Book = {
	title: string;
	subtitle: string;
	author: string;
	description: string;
	image?: string;
};

export const BOOKS: Book[] = [
	// ===== PRODUTIVIDADE =====
	{
		title: 'Essencialismo: A disciplinada busca por menos',
		subtitle: 'Foco no que realmente importa',
		author: 'Greg McKeown',
		description:
			'Propõe a disciplina de identificar e focar apenas no que é essencial, eliminando tarefas triviais para ampliar produtividade e impacto. Incentiva escolhas deliberadas para alcançar resultados significativos.',
		image: '/books/essencialismo.jpg',
	},

	// ===== NEGÓCIOS =====
	{
		title: 'O Poder do Hábito',
		subtitle: 'Por que fazemos o que fazemos na vida e nos negócios',
		author: 'Charles Duhigg',
		description:
			'Explora a ciência por trás da formação e mudança de hábitos, apresentando o conceito de loop do hábito (gatilho, rotina, recompensa) e como hábitos moldam comportamentos individuais e organizacionais.',
		image: '/books/poder-habito.jpg',
	},
	{
		title: 'O Poder da Ação',
		subtitle: 'Faça sua vida ideal sair do papel',
		author: 'Paulo Vieira',
		description:
			'Convida o leitor a romper ciclos de procrastinação e iniciar mudanças concretas usando práticas e hábitos diários que promovem autorresponsabilidade, foco e execução para alcançar objetivos pessoais e profissionais.',
		image: '/books/poder-acao.jpg',
	},
	{
		title: 'A Startup Enxuta',
		subtitle: 'Como usar inovação contínua para criar negócios bem-sucedidos',
		author: 'Eric Ries',
		description:
			'Apresenta a metodologia Lean Startup, que prioriza protótipos rápidos, aprendizado validado e ciclos iterativos de desenvolvimento para reduzir riscos, testar hipóteses e adaptar produtos às necessidades reais do mercado.',
		image: '/books/enxuta.jpg',
	},
	{
		title: 'Apaixone-se pelo problema e não pela solução',
		subtitle: 'Guia prático para empreendedores focarem em desafios reais',
		author: 'Uri Levine',
		description:
			'Defende a compreensão profunda do problema antes de buscar soluções, destacando que entender a dor do cliente é essencial para criar produtos relevantes e inovadores que realmente atendem às necessidades do mercado.',
		image: '/books/love-problem.jpg',
	},
	{
		title: 'O jeito Disney de encantar os clientes',
		subtitle: 'Do atendimento excepcional ao crescimento contínuo',
		author: 'Disney Institute & Theodore Kinni',
		description:
			'Revela princípios e práticas da Walt Disney Company para criar experiências memoráveis de atendimento ao cliente, incluindo foco obsessivo no detalhe, treinamento profundo de equipe e cultura orientada à excelência.',
		image: '/books/jeito-disney.jpg',
	},

	// ===== MOTIVAÇÃO/ESPORTE =====
	{
		title: 'Nunca deixe de tentar',
		subtitle: 'Lições de determinação e excelência com Michael Jordan',
		author: 'Michael Jordan (organizado por Bernardinho)',
		description:
			'Inclui depoimentos e princípios de Michael Jordan sobre metas, foco e persistência, comentados pelo técnico brasileiro Bernardinho, oferecendo inspiração para alcançar objetivos sem se intimidar diante de desafios.',
		image: '/books/nunca-deixe.jpg',
	},

	// ===== DESENVOLVIMENTO/PROGRAMAÇÃO =====
	{
		title: 'Código Limpo',
		subtitle: 'Habilidades práticas de escrita de código legível e sustentável',
		author: 'Robert C. Martin',
		description:
			'Apresenta princípios e práticas para escrever código limpo, legível e de fácil manutenção, com foco em qualidade, boas práticas e redução de bugs em projetos reais.',
		image: '/books/clean-code.jpg',
	},
	{
		title: 'Refatoração',
		subtitle: 'Melhorando o design de código existente',
		author: 'Martin Fowler',
		description:
			'Ensina técnicas de refatoração de código, identificando problemas e transformando código ruim em código mais limpo e eficiente, sem alterar seu comportamento externo.',
		image: '/books/refactoring.jpg',
	},
	{
		title: 'Estrutura de Dados e Algoritmos com JavaScript',
		subtitle: 'Aprenda a organizar e otimizar dados em JavaScript',
		author: 'Loiane Groner',
		description:
			'Aborda implementação de estruturas de dados e algoritmos utilizando JavaScript, com exemplos práticos, explicações de complexidade e técnicas para escrever código eficiente e escalável.',
		image: '/books/estrutura-dados.jpg',
	},
{
	title: 'Comunicação Não-Violenta',
	subtitle: 'Técnicas para aprimorar relacionamentos pessoais e profissionais',
	author: 'Marshall B. Rosenberg',
	description:
		'Apresenta um método prático de comunicação baseado em empatia, escuta ativa e responsabilidade emocional. O livro ensina a expressar sentimentos e necessidades com clareza, reduzir conflitos e construir relações mais honestas, respeitosas e cooperativas, tanto no âmbito pessoal quanto profissional.',
	image: '/books/comunicacao-nao-violenta.jpg',
}
];
