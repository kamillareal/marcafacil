import LogoFametro from "assets/icons/logo-fametro.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "routes/enum";
import { FlexButton } from "shared/components/Button/FlexButton";
import { InputFormController } from "shared/components/Inputs/InputFormController";
import { InputFormPassword } from "shared/components/Inputs/InputFormPassword";
import {
  AlignItems,
  Aside,
  Container,
  ImgLoginPage,
  LogoImgStyled,
} from "./styles";
import { LoginType } from "./types";

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    control,
    formState: { isValid },
  } = useForm<LoginType>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <Container>
      <ImgLoginPage />
      <Aside>
        <LogoImgStyled src={LogoFametro} alt="Logo" />
        <AlignItems>
          <InputFormController
            inputType="email"
            formControl={control}
            formControlName="user"
            label="Usuário"
            placeholder="Matrícula"
            defaultValue=""
            fullWidth
          />
          <InputFormPassword
            formControl={control}
            formControlName="password"
            label="Senha"
            defaultValue=""
            fullWidth
          />
        </AlignItems>
        <FlexButton
          width="15rem"
          text="Entrar"
          disabled={!isValid}
          handleClick={() => navigate(RoutesEnum.Home)}
        />
      </Aside>
    </Container>
  );
};
