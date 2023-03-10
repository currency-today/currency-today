/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useCallback } from 'react'
import axios from 'axios'
import { formatToBRL } from 'brazilian-values'
import { toast } from 'react-toastify'

import Translator from 'components/I18n/Translator'
import Footer from 'components/Footer'
import Nav from 'components/Nav'
import Text from 'components/Text'
import CurrencyPicker, {
  type ISelectedOptionProps,
} from 'components/CurrencyPicker'
import Button from 'components/Button'

import colors from 'utils/colors'

const Home: React.FC = () => {
  const defaultFirstValueCurrency = {
    name: 'Brazilian Real',
    flag: '',
    abbreviation: 'BRL',
  }
  const defaultSecondValueCurrency = {
    name: 'US Dollar',
    flag: '',
    abbreviation: 'USD',
  }

  const [firstCurrencyOptionSelected, setFirstCurrencyOptionSelected] =
    useState<ISelectedOptionProps>(defaultFirstValueCurrency)
  const [secondCurrencyOptionSelected, setSecondCurrencyOptionSelected] =
    useState<ISelectedOptionProps>(defaultSecondValueCurrency)

  const [currentValue, setCurrentValue] = useState(5.19)

  // [] -> add useEffect para buscar valor atual das moedas default
  // [] -> Add loading na handleCalculateCurrentValue
  // [] -> Exibir o valor na moeda selecionada

  const handleCalculateCurrentValue = useCallback(async () => {
    try {
      if (
        firstCurrencyOptionSelected === undefined ||
        secondCurrencyOptionSelected === undefined
      ) {
        toast('Favor selecione as moedas antes de continuar', {
          type: 'warning',
        })

        return
      }

      const response = await axios.get(
        `https://open.er-api.com/v6/latest/${firstCurrencyOptionSelected?.abbreviation}`
      )

      if (response?.data?.rates) {
        const keysArray = Object.keys(response.data.rates)
        const valuesArray = Object.values(response.data.rates)

        keysArray.map((key, keyIndex) => {
          if (key === secondCurrencyOptionSelected.abbreviation) {
            const value = Number(valuesArray[keyIndex])

            setCurrentValue(value)

            document.title = `${formatToBRL(value)}`

            // Pensar em um jeito de encerrar o processo ao achar a moeda
            // ou tornar isso mais performático

            // Não cheguei a testar a performance, mas tbm n deve estar
            // pesado não.
          }
        })
      } else {
        toast(
          'Não foi possível retornar os valores correspondentes, tente novamente mais tarde.',
          {
            type: 'error',
          }
        )
      }
    } catch (error) {
      toast('Ocorreu um erro desconhecido, tente novamente mais tarde', {
        type: 'error',
      })
    }
  }, [firstCurrencyOptionSelected, secondCurrencyOptionSelected])

  return (
    <>
      <Nav />

      <div className="container mx-auto h-3/4 pt-16 md:w-3/4">
        <Text
          text={Translator('home.welcome')}
          color={colors.gray.white}
          marginTop={32}
          align="left"
          size={36}
          letterHeight={36}
          weight="700"
        />

        <div className="mt-4 w-full rounded-2xl bg-white">
          <div className="w-full rounded-t-2xl bg-neutralNeutral50 pt-3 pb-3 pl-4 pr-4">
            <Text
              text={Translator('navbar.priceOption')}
              color={colors.secondary.darkBlue}
              align="left"
              size={20}
              letterHeight={28}
              weight="600"
            />
          </div>

          <div className="p-4">
            <div className="flex w-full gap-2">
              <CurrencyPicker
                name="initialCurrency"
                label={Translator('home.fromText')}
                value={defaultFirstValueCurrency.abbreviation}
                onSelectOption={(selectedOption) => {
                  setFirstCurrencyOptionSelected(selectedOption)
                }}
              />

              <CurrencyPicker
                name="finalCurrency"
                label={Translator('home.toText')}
                value={defaultSecondValueCurrency.abbreviation}
                onSelectOption={(selectedOption) => {
                  setSecondCurrencyOptionSelected(selectedOption)
                }}
              />
            </div>

            <div className="flex w-full items-end justify-between">
              <Button
                text={Translator('home.buttonText')}
                marginTop={16}
                onClick={handleCalculateCurrentValue}
              />

              <div className="flex h-11 w-1/2 items-center justify-between rounded-lg border-2 border-dashed pl-2 pr-2">
                <Text
                  text={Translator('home.valueText')}
                  color={colors.neutral.neutral500}
                  align="left"
                  size={16}
                  letterHeight={20}
                  weight="500"
                />

                <Text
                  text={formatToBRL(currentValue)}
                  color={colors.primary.orange}
                  align="left"
                  size={18}
                  letterHeight={20}
                  weight="700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
