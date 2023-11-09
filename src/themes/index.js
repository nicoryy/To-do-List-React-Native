import { useState } from 'react'
import dark from './dark'
import light from './light'

export const theme = () => {
    const [theme, setTheme] = useState(dark)
}

export default { dark, light }

