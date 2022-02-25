import { Input } from "./styled"


const TextField = ({ placeholder, error, errorLabel, ...rest }) => {
  return (
    <Input placeholder={error ? errorLabel : placeholder} error={error} {...rest} />
  )
}

export default TextField