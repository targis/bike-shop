import { useContext, useState } from "react"
import { Flex, Button, Title, Text } from "components/ui"
import TextField from "components/TextField"
import Context from "containers/context/context"

import { BorderContainer } from "./styled"

import Checkout from 'assets/checkout.png'

const Tabs = ['Оформить заказ', 'Проверить статус заказа']

const Form = () => {
  const { size, color, count } = useContext(Context)
  const [selectedTab, setSelectedTab] = useState(0)

  const [formData, setFormData] = useState({
    name: {
      value: '',
      error: false
    },
    email: {
      value: '',
      error: false
    },
    phone: {
      value: '',
      error: false
    },
    date: {
      value: new Date().toISOString().replace(/T.+/g, ''),
      error: false
    }
  })

  const onChangeFormData = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: { ...prev[key], value: e.target.value } }))
  }




  return (
    <BorderContainer>
      <Flex>
        {Tabs.map((tab, index) => (
          <Flex key={tab} flex={1}>
            <Button
              width='100%'
              color={selectedTab === index ? '#282828' : '#fff'}
              background={selectedTab === index ? '#fff' : '#020106'}
              onClick={() => setSelectedTab(index)}
            >
              {tab}
            </Button>
          </Flex>
        ))}
      </Flex>

      {selectedTab === 0 && (
        <Flex padding='60px 80px' direction='column'>
          <img src={Checkout} alt="Fuel EX 9.8" />
          <Title>Fuel EX 9.8</Title>
          <form>
            <TextField
              placeholder='ФИО'
              errorLabel='Пожалуйста, введите ФИО'
              error={formData['name'].error}
              value={formData['name'].value}
              onChange={onChangeFormData('name')}
            />
          </form>
        </Flex>
      )}

      {selectedTab === 1 && (
        <Flex>Tab 2</Flex>
      )}

    </BorderContainer>
  )
}

export default Form