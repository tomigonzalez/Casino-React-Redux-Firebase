import { ContenedorMonedas, Input, StyledIcon } from "./MonedaStyle";
import MonedaSelect from "./MonedaOption";
import useMonedas from "../../hooks/useMonedas";

const Monedas = () => {
  const {
    handleCurrencyChange,
    exchangeRate,
    fixedNumber = 60,
    selectedCurrency,
  } = useMonedas();

  console.log(exchangeRate);

  return (
    <ContenedorMonedas>
      <StyledIcon />
      <MonedaSelect handleCurrencyChange={handleCurrencyChange} />
      <Input
        type="number"
        value={
          selectedCurrency === "USD"
            ? fixedNumber
            : (fixedNumber * exchangeRate).toFixed(2)
        }
        readOnly
      />
    </ContenedorMonedas>
  );
};

export default Monedas;
