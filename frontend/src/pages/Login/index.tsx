import LogoFametro from "assets/icons/logo-fametro.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api, logIn } from "services/api";
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
    getValues,
    formState: { isValid },
  } = useForm<LoginType>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleLogIn = async () => {
    try {
      const { password, user } = getValues();

      const response = await logIn({
        enrollment: user,
        password,
      });

      api.defaults.headers.common["Authorization"] =
        `Bearer ${response.data.accessToken}`;
    } catch (error) {
      console.error(error);
    }
  };

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
          handleClick={() => handleLogIn()}
        />
      </Aside>
    </Container>
  );
};
