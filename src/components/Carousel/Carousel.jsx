import { useState, useEffect, useRef } from "react"
import { Flex } from "components/ui"
import { Container, SliderBtn, Arrow, CarouselTrack, ContainerItem, SliderItem } from "./styled"

const Carousel = ({ children, width = '670px', height = '502px' }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [transform, setTransform] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const transVal = containerRef.current.offsetWidth * activeSlide
    setTransform(`-${transVal}px`)
  }, [activeSlide])

  const lastChild = children.length && children.length - 1

  const nextSlide = () => {
    if (activeSlide < lastChild) {
      setActiveSlide(activeSlide + 1)
    } else {
      setActiveSlide(0)
    }
  }

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1)
    } else {
      setActiveSlide(lastChild)
    }
  }

  const selectSlide = (i) => () => {
    setActiveSlide(i)
  }

  return (
    <div>
      <Container ref={containerRef} width={width} height={height}>
        <SliderBtn onClick={prevSlide}>
          <Arrow />
        </SliderBtn>

        <CarouselTrack transform={transform}>
          {children.map((item, i) => (
            <ContainerItem key={'container_item_key_' + i}
              width={width}
              height={height}>
              {item}
            </ContainerItem>
          ))}
        </CarouselTrack>

        <SliderBtn rotate='true' onClick={nextSlide}>
          <Arrow />
        </SliderBtn>
      </Container>
      <Flex width='670px' gap='10px' margin='38px 0 0' wrap='wrap'>
        {children.map((item, i) => (
          <SliderItem
            key={i}
            onClick={selectSlide(i)}
            active={activeSlide === i}
          >{item}</SliderItem>
        ))}
      </Flex>
    </div>
  )
}

export default Carousel