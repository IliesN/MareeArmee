// Import des logos des marques (fournis dans Marques_Splatoon.zip)
import Leviathus from '../assets/brands/Leviathus.png'
import EF from '../assets/brands/EF.png'
import Krakers from '../assets/brands/Krakers.png'
import Ezko from '../assets/brands/Ezko.png'
import Friture from '../assets/brands/Friture.png'
import ThonyK from '../assets/brands/Thony_K.png'
import Abysma from '../assets/brands/Abysma.png'
import Aroz from '../assets/brands/Aroz.png'
import Focus from '../assets/brands/Focus.png'
import Cubic from '../assets/brands/Cubic.png'
import Jack from '../assets/brands/Jack.png'
import Alpaj from '../assets/brands/Alpaj.png'
import OculR from '../assets/brands/OculR.png'
import Apex from '../assets/brands/Apex.png'
import KalamarusRex from '../assets/brands/Kalamarus_Rex.png'
import Iormungand from '../assets/brands/Iormungand.png'
import LUX from '../assets/brands/LUX.png'
import Gedeon from '../assets/brands/Gedeon.png'

// 18 marques fictives de l'univers Splatoon, chacune avec son logo
export const brands = [
  { id: 'leviathus', nom: 'Leviathus', logo: Leviathus },
  { id: 'ef', nom: 'EF', logo: EF },
  { id: 'krakers', nom: 'Krakers', logo: Krakers },
  { id: 'ezko', nom: 'Ezko', logo: Ezko },
  { id: 'friture', nom: 'Friture', logo: Friture },
  { id: 'thony_k', nom: 'Thony K.', logo: ThonyK },
  { id: 'abysma', nom: 'Abysma', logo: Abysma },
  { id: 'aroz', nom: 'Aroz', logo: Aroz },
  { id: 'focus', nom: 'Focus', logo: Focus },
  { id: 'cubic', nom: 'Cubic', logo: Cubic },
  { id: 'jack', nom: 'Jack', logo: Jack },
  { id: 'alpaj', nom: 'Alpaj', logo: Alpaj },
  { id: 'ocul_r', nom: "OculR", logo: OculR },
  { id: 'apex', nom: 'Apex', logo: Apex },
  { id: 'kalamarus_rex', nom: 'Kalamarus Rex', logo: KalamarusRex },
  { id: 'iormungand', nom: 'Iormungand', logo: Iormungand },
  { id: 'lux', nom: 'LUX', logo: LUX },
  { id: 'gedeon', nom: 'Gedeon', logo: Gedeon },
]

export function getBrandById(id) {
  return brands.find((b) => b.id === id)
}
