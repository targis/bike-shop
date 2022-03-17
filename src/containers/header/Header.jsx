import { Wrapper, Flex, Button } from 'components/ui'
import { HeaderSC, Absolute, HeaderText } from './styled';
import { ReactComponent as Logo } from 'assets/logo.svg'

export default function Header({ handleProductScroll }) {
  return <HeaderSC>
    <Wrapper relative height="100%">
      <Flex padding="24px 0 0">
        <Logo />
      </Flex>
      <Absolute>
        <HeaderText red weight={700}>Новый</HeaderText>
        <HeaderText>Идеальный</HeaderText>
        <HeaderText size='71px' weight={900} space='30px'>Fuel Ex 9.8 GX</HeaderText>
        <Button onClick={handleProductScroll}>Оформить заказ</Button>
      </Absolute>
    </Wrapper>
  </HeaderSC>;
}
