import { Box } from "@mui/material";
import { IStore } from "data";
import {
  setLaboratoryList,
  setSelectedLaboratory,
} from "data/laboratory/action";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "routes/enum";
import { getAllLabs } from "services/api";
import LabCard from "shared/components/Cards";
import Header from "shared/components/Header";
import { RobotoLarge, RobotoMedium } from "shared/typography/Roboto";
import { CardsContainer, LabPageBody, TitleBox } from "./styles";

export const LaboratoriesPage = () => {
  const { laboratorylist } = useSelector((store: IStore) => store.laboratory);

  const navigate = useNavigate();

  const getLabs = useCallback(async () => {
    try {
      const response = await getAllLabs();
      setLaboratoryList(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [laboratorylist]);

  const handleClick = (id: string) => {
    setSelectedLaboratory(id);
    navigate(RoutesEnum.Reservations);
  };

  useEffect(() => {
    getLabs();
  }, []);

  return (
    <LabPageBody>
      <Header></Header>
      <TitleBox>
        <RobotoLarge>Laboratórios</RobotoLarge>
        <RobotoMedium>Selecione um laboratório para fazer reserva</RobotoMedium>
      </TitleBox>
      <CardsContainer>
        {laboratorylist.map((card) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LabCard
              handleClick={() => handleClick(card.id)}
              key={card.id}
              imageUrl={card.imageUrl}
              name={card.number}
              capacity={card.capacity}
              unit={card.unit}
              description={card.description}
            ></LabCard>
          </Box>
        ))}
      </CardsContainer>
    </LabPageBody>
  );
};
