import image from "../../assets/calculator.png";
import { DiagonalSparator } from "../../components/atoms/DiagonalSeparator";
import { Heading } from "../../components/molecules/Heading";
import { Header } from "../../components/layout/header/Header";
import { Hero } from "../../components/layout/hero/Hero";
import { Footer } from "../../components/layout/footer/Footer";
import { Calculator } from "./Calculator";
import { TableIva } from "../../components/tables/tableIVA/TableIva";
import { CalculatorPageStyled } from "./CalculatorPageStyled";

export const CalculatorPage = () => {
  return (
    <CalculatorPageStyled>
      <Header />
      <Hero
        title="Calculadora de los Autónomos"
        subtitle="Calcula tu IVA, IRPF y beneficio neto en segundos."
        image={image}
        action="Calcular ahora"
        path="/login"
      ></Hero>
      <DiagonalSparator />
      <Heading
        title="Toma el control de tus finanzas como autónomo."
        subtitle="Si eres autónomo y quieres tener las cuetas claras, ahora puedes
        aprovechar las ventajas de nuestra calculadora para autónomos. Con ella
        podrás saber facilmente cuánto vas a ganar y cuanto tendrás que pagar o
        exigir de IVA e IRPF.
        "
      />
      <Calculator></Calculator>
      <Footer></Footer>
    </CalculatorPageStyled>
  );
};
