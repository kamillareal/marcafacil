import LabCard from "shared/components/Cards";
import Header from "shared/components/Header";
import { RobotoLarge, RobotoMedium } from "shared/typography/Roboto";
import { CardsContainer, LabPageBody, TitleBox } from "./styles";

export const LaboratoriesPage = () => {
  const cardsList = [
    {
      id: "aosjdfj",
      name: "Laboratório 23",
      capacity: 32,
      unit: "5",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLdxdY5oRgigMbdxN3PrUk9CIIYxQvkOt_g&s",
      description:
        "Os Laboratórios de Informática têm como principalobjetivo atender aos acadêmicos da Instituição no desenvolvimento deTrabalhos e Pesquisas referentes as Disciplinas ministradas nos cursos regulares, além de servir como suporte didático aos professores",
    },
    {
      id: "aosjdfj",
      name: "Laboratório 24",
      capacity: 32,
      unit: "5",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLdxdY5oRgigMbdxN3PrUk9CIIYxQvkOt_g&s",
      description:
        "Os Laboratórios de Informática têm como principalobjetivo atender aos acadêmicos da Instituição no desenvolvimento deTrabalhos e Pesquisas referentes as Disciplinas ministradas nos cursos regulares, além de servir como suporte didático aos professores",
    },
    {
      id: "aosjdfj",
      name: "Laboratório 25",
      capacity: 32,
      unit: "5",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLdxdY5oRgigMbdxN3PrUk9CIIYxQvkOt_g&s",
      description:
        "Os Laboratórios de Informática têm como principalobjetivo atender aos acadêmicos da Instituição no desenvolvimento deTrabalhos e Pesquisas referentes as Disciplinas ministradas nos cursos regulares, além de servir como suporte didático aos professores",
    },
    {
      id: "aosjdfj",
      name: "Laboratório 26",
      capacity: 32,
      unit: "5",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLdxdY5oRgigMbdxN3PrUk9CIIYxQvkOt_g&s",
      description:
        "Os Laboratórios de Informática têm como principalobjetivo atender aos acadêmicos da Instituição no desenvolvimento deTrabalhos e Pesquisas referentes as Disciplinas ministradas nos cursos regulares, além de servir como suporte didático aos professores",
    },
    {
      id: "aosjdfj",
      name: "Laboratório 27",
      capacity: 32,
      unit: "5",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLdxdY5oRgigMbdxN3PrUk9CIIYxQvkOt_g&s",
      description:
        "Os Laboratórios de Informática têm como principalobjetivo atender aos acadêmicos da Instituição no desenvolvimento deTrabalhos e Pesquisas referentes as Disciplinas ministradas nos cursos regulares, além de servir como suporte didático aos professores",
    },
    {
      id: "aosjdfj",
      name: "Laboratório 28",
      capacity: 32,
      unit: "5",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLdxdY5oRgigMbdxN3PrUk9CIIYxQvkOt_g&s",
      description:
        "Os Laboratórios de Informática têm como principalobjetivo atender aos acadêmicos da Instituição no desenvolvimento deTrabalhos e Pesquisas referentes as Disciplinas ministradas nos cursos regulares, além de servir como suporte didático aos professores",
    },
    {
      id: "aosjdfj",
      name: "Laboratório 29",
      capacity: 32,
      unit: "5",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLdxdY5oRgigMbdxN3PrUk9CIIYxQvkOt_g&s",
      description:
        "Os Laboratórios de Informática têm como principalobjetivo atender aos acadêmicos da Instituição no desenvolvimento deTrabalhos e Pesquisas referentes as Disciplinas ministradas nos cursos regulares, além de servir como suporte didático aos professores",
    },
  ];
  return (
    <LabPageBody>
      <Header></Header>
      <TitleBox>
        <RobotoLarge>Laboratórios</RobotoLarge>
        <RobotoMedium>Selecione um laboratório para fazer reserva</RobotoMedium>
      </TitleBox>
      <CardsContainer>
        {cardsList.map((card) => (
          <LabCard
            imageUrl={card.imageUrl}
            name={card.name}
            capacity={card.capacity}
            unit={card.unit}
            description={card.description}
          ></LabCard>
        ))}
      </CardsContainer>
    </LabPageBody>
  );
};
