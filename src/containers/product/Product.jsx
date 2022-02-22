import { Wrapper, Flex, Title, Text, Hr, Button } from 'components/ui'
import Carousel from 'components/Carousel'
import ColorPicker from 'components/ColorPicker'
import CountPicker from 'components/CountPicker'
import SizePicker from 'components/SizePicker'

import Image1 from 'assets/image-1.png'
import Image2 from 'assets/image-2.png'
import Image3 from 'assets/image-3.png'
import Image4 from 'assets/image-4.png'
import Image5 from 'assets/image-5.png'
import Image6 from 'assets/image-6.png'
import Image7 from 'assets/image-7.png'
import Image8 from 'assets/image-8.png'

const colors = [
  {
    id: 1,
    color: '#e6110c'
  },
  {
    id: 2,
    color: 'linear-gradient(180deg, #8B2936 1.47%, #000000 100%);'
  },
  {
    id: 3,
    color: '#282828'
  },
]

const sizes = [
  {
    id: 1,
    label: 'XS (27.5” колеса)'
  },
  {
    id: 2,
    label: 'S (27.5” колеса)'
  }
]

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8
]

export default function Product() {
  return <section>
    <Wrapper>
      <Title withBorder margin='70px 0 30px'>Встречайте нового короля вершин</Title>
      <Text>Fuel EX 9.8 поднимет вашу поездку на новый уровень с пакетом запчастей, который обеспечивает высочайшую производительность.
        Так же иы расширили наш размерный ряд, чтобы обеспечить удобство для всех райдеров. Вы можете выбрать максимальный размер колес, который подойдет для вашей рамы: рамам XS доступны колеса 27,5 дюймов, на рамы S можно выбрать между 27,5 дюймов или 29 дюймов, а размерам от M до XL доступны колеса 29 дюймов.
        Fuel EX 9.8 - отличное вложение для одного велосипеда, который может все. </Text>
      <Flex gap='30px'>
        <Flex flex={1}>
          <Carousel>
            {images.map((image) => (<img src={image} key={image} alt={image} />))}
          </Carousel>
        </Flex>
        <Flex
          width='470px'
          direction='column'
          align='flex-start'
          justify='space-between'>
          <Title>Fuel EX 9.8</Title>
          <Flex justify='space-between' width='100%' margin='30px 0 20px'>
            <Text weight={500}>2021</Text>
            <Text weight={500} color='#b5b5b5'>Model 33408</Text>
          </Flex>
          <Text color='#020106' weight={700} size='26px'>
            $5.499.99 - $5.999.99
          </Text>
          <Hr />
          <Flex width='100%'>
            <Flex flex={1} justify='flex-start'>
              <ColorPicker items={colors} />
            </Flex>
            <Flex flex={1}>
              <SizePicker items={sizes} />
            </Flex>
          </Flex>
          <CountPicker />
          <Button>Оформить заказ</Button>
        </Flex>
      </Flex>
    </Wrapper>
  </section >;
}
