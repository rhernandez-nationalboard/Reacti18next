import { useTranslation } from 'react-i18next'
import {useState } from 'react'
import './App.css'

function App() {
  const { t, i18n } = useTranslation(
    'translation'
  );
  const dogPrice = 10.35;
  const [shoppingCart, setShoppingCart] = useState({
    name: 'John',
    totalDogs: 0,
    totalPrice: 0,
  });

  const addDog = () => {
    const totalDogs = shoppingCart.totalDogs + 1;
    const totalPrice = totalDogs * dogPrice;
    setShoppingCart({
      ...shoppingCart,
      totalDogs: totalDogs,
      totalPrice,
    })
  }

  const removeDog = () => {
    const totalDogs = shoppingCart.totalDogs > 0
      ? shoppingCart.totalDogs - 1 
      : 0;
    const totalPrice = totalDogs * dogPrice;
    setShoppingCart({
      ...shoppingCart,
      totalDogs,
      totalPrice
    })
  }

  return (
    <>
      <h3>{t('title_line')}</h3>
      <div>
        <button onClick={addDog}>Buy dog</button>
        <button onClick={removeDog}>Remove Dog</button>
      </div>

      <div>{t('plural_line', { shoppingCart, count:  shoppingCart.totalDogs })}</div>
      <div>{t('money_line', { shoppingCart })}</div>
      <div>{t('date_line')}</div>

      <div className="card">
        <button onClick={() => i18n.changeLanguage('en-US')}>English</button>
        <button onClick={() => i18n.changeLanguage('es')}>Spanish</button>
      </div>
    </>
  )
}

export default App
