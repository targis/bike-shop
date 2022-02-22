import { useContext } from "react"
import { Flex, Text } from "components/ui"
import Context from "containers/context/context"
import { Button, Input } from './styled'

const CountPicker = () => {
  const { count, setCount } = useContext(Context)

  const handleIncrement = () => {
    if (count < 99) {
      setCount((prev) => prev + 1)
    }
  }


  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1)
    }
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value) && value > 0 && value < 100) {
      setCount(value)
    } else {
      setCount(1)
    }
  }

  return (
    <Flex justify='flex-start' margin='20px 0 30px'>
      <Text weight={500} margin='0 30px 0 0'>Количество</Text>

      <Flex>
        <Button onClick={handleDecrement}>-</Button>
        <Input value={count} onChange={handleChange} />
        <Button onClick={handleIncrement}>+</Button>
      </Flex>

    </Flex>
  )
}

export default CountPicker