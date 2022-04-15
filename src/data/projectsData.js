import recipeImg from '../assets/images/recipesimg.png';
import trunfoImg from '../assets/images/trunfo.png';
import portfolio from '../assets/images/portfolio.png';
import react from '../assets/images/react.svg';
import tailwind from '../assets/images/tailwindcss.svg';
import javascript from '../assets/images/javascriptlogo.svg';
import sass from '../assets/images/sass.svg';
import empty from '../assets/images/empty.svg';
import bamin from '../assets/images/bamin.png';

const projectsList = [
  {
    id: 1,
    tipo: 'Profissional',
    linkSite: '',
    linkCode: '',
    image: bamin,
    title: 'Bamin',
    stacks: [react, tailwind, javascript],
    text: 'Primeiro projeto profissional que estou realizando. O site tem como função auxiliar a empresa Bamin no controle interno do escoamente e recebimento de minério, controlando o fluxo de viagens(Rodoviárias e Ferroviárias) e agilizando os processos de registro de minério. Sou o responsável pelo desenvolvimento front-end do site e meu amigo Eduardo Temponi, que me convidou para ajudá-lo está responsável pelo back-end.',
  },
  {
    id: 2,
    tipo: 'Pessoal',
    linkSite: '',
    linkCode: 'https://github.com/ArthurSimoess/my-portfolio',
    image: portfolio,
    title: 'Portfolio web',
    stacks: [react, sass, javascript],
  },
  {
    id: 3,
    tipo: 'Pessoal',
    linkSite: 'https://main.d1c34ifddgonvj.amplifyapp.com/',
    linkCode: 'https://github.com/ArthurSimoess/recipe-app',
    image: recipeImg,
    stacks: [react, tailwind, javascript],
    title: 'Recipe App',
  },
  {
    id: 4,
    tipo: 'Pessoal',
    linkSite: 'https://arthursimoess.github.io/super-trunfo-project/#/',
    linkCode: 'https://github.com/ArthurSimoess/super-trunfo-project',
    image: trunfoImg,
    title: 'Super Tryunfo',
    stacks: [react, tailwind, javascript],
  },
  {
    id: 5,
    tipo: 'Pessoal',
    linkSite: '',
    linkCode: '',
    image: empty,
    title: 'Em breve',
    stacks: [],
  },
  {
    id: 6,
    tipo: 'Profissional',
    image: empty,
    linkSite: '',
    linkCode: '',
    title: 'Em breve',
    stacks: [],
  },
];

export default projectsList;
