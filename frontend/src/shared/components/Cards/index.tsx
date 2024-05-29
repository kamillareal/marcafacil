import { Box, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  RobotoBoldMedium,
  RobotoBoldSmall,
  RobotoSmall,
} from "shared/typography/Roboto";
import { CardStyled } from "./styles";

interface ICard {
  imageUrl: string;
  name: string;
  capacity: number;
  unit: string;
  description: string;
  handleClick: any;
}
export default function LabCard({
  imageUrl,
  capacity,
  name,
  unit,
  description,
  handleClick,
}: ICard) {
  return (
    <CardStyled onClick={() => handleClick?.()}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <RobotoBoldMedium gutterBottom variant="h5" component="div">
            Laboratório {name}
          </RobotoBoldMedium>
          <Box>
            <RobotoBoldSmall color={"text.secondary"}>Unidade:</RobotoBoldSmall>
            <RobotoSmall color={"text.secondary"}> {unit}</RobotoSmall>
          </Box>

          <Box>
            <RobotoBoldSmall color={"text.secondary"}>
              Capacidade:
            </RobotoBoldSmall>
            <RobotoSmall color={"text.secondary"}> {capacity}</RobotoSmall>
          </Box>
          <Box>
            <RobotoBoldSmall color={"text.secondary"}>
              Descrição:
            </RobotoBoldSmall>
            <RobotoSmall color={"text.secondary"}> {description}</RobotoSmall>
          </Box>
        </CardContent>
      </CardActionArea>
    </CardStyled>
  );
}
