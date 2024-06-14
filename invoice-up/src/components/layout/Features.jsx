import styled from "styled-components";
import { FeactureCard } from "../molecules/FeactureCard";
import iconSpeed from "../../assets/speed-blue.png";
import iconPig from "../../assets/piggy-bank.png";
import iconPlane from "../../assets/plane.png";
import iconBrush from "../../assets/brush.png";

const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 80px 0;
  @media only screen and (max-width: 798px) {
    padding: 80px 20px;
  }
`;

export const Features = () => {
  return (
    <FeaturesWrapper>
      <FeactureCard
        image={iconSpeed}
        alt="iconSpeed"
        title="Rápido y fácil"
        text="Puedes crear facturas fácilmente allí donde estés. Desde la comodidad de tu sofá con tu móvil o tablet o desde el ordenador de tu despacho. InvoiceUp se adapta a tu ritmo de vida."
      ></FeactureCard>
      <FeactureCard
        image={iconPig}
        title="Crea facturas gratis"
        text="Olvídate de pagar costosas suscripciones o software para crear facturas. Con InvoiceUp, puedes crear y enviar tantas facturas como necesites, sin restricciones ni costos adicionales."
      ></FeactureCard>
      <FeactureCard
        image={iconPlane}
        title="Envío instantáneo"
        text="Con InvoiceUp, tus facturas llegan a tus clientes en un instante. Olvídate de las esperas y los retrasos: envía tus facturas por correo electrónico o descárgalas en PDF con solo un clic."
      ></FeactureCard>
      <FeactureCard
        image={iconBrush}
        title="Plantillas personalizables"
        text="No necesitas conocimientos de diseño ni experiencia previa. La interfaz intuitiva de InvoiceUp te permite crear facturas personalizadas en cuestión de minutos."
      ></FeactureCard>{" "}
    </FeaturesWrapper>
  );
};
