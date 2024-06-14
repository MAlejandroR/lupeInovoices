import { CopyrightStyled } from "./CopyrightStyled";

export const Copyright = () => {
  const date = new Date();
  return (
    <CopyrightStyled>
      <p>&copy; {date.getFullYear()} Todos los derechos reservados</p>
    </CopyrightStyled>
  );
};
