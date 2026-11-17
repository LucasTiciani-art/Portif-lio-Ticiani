import lcdtecWebImage from '../assets/projects/lcdtec-web.png'
import eClassesFrontImage from '../assets/projects/e-classes-front.png'
import supaBoardImage from '../assets/projects/supaboard.png'
import rotaFacilImage from '../assets/projects/rota-facil.png'

export interface Project {
  id: string
  name: string
  image: string
  repositoryUrl: string
  description?: string
  category?: string
  technologies?: string[]
}

const projects: Project[] = [
  {
    id: 'lcdtec-web',
    name: 'LCDTec Web',
    image: lcdtecWebImage,
    repositoryUrl: 'https://github.com/LucasTiciani-art/LCDTec-web',
  },
  {
    id: 'e-classes-front',
    name: 'e-Classes Front',
    image: eClassesFrontImage,
    repositoryUrl: 'https://github.com/LucasTiciani-art/e-classes-front',
  },
  {
    id: 'supaboard',
    name: 'SupaBoard',
    image: supaBoardImage,
    repositoryUrl: 'https://github.com/LucasTiciani-art/Suplabord',
  },
  {
    id: 'rota-facil',
    name: 'Rota Fácil',
    image: rotaFacilImage,
    repositoryUrl: 'https://github.com/LucasTiciani-art/RotaFacil',
  },
]

export default projects
