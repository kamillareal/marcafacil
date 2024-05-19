import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLarge } from "shared/typography/HeaderLarge";
import {
  RobotoBoldMedium,
  RobotoMedium,
  RobotoSmall,
} from "shared/typography/Roboto";
import {
  HeaderOptionsContainer,
  MenuBoxStyled,
  PerfilBoxStyled,
  ProfileBoxStyled,
  ToolBarStyled,
} from "./styles";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const pages = [
  { name: "Laboratórios", path: "/laboratories" },
  { name: "Meus agendamentos", path: "/reservations" },
];

export default function Header() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ToolBarStyled>
          <MenuBoxStyled>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(`${page.path}`)}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </MenuBoxStyled>
          <HeaderLarge variant="h6" component="div">
            MarcaFácil
          </HeaderLarge>
          <HeaderOptionsContainer>
            {pages.map((page) => (
              <RobotoMedium onClick={() => navigate(`${page.path}`)}>
                {page.name}
              </RobotoMedium>
            ))}
          </HeaderOptionsContainer>
          <Box>
            <Tooltip title="Configurações">
              <PerfilBoxStyled>
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    alt="Foto de Perfil"
                    src="data:image/jpeg;base64,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"
                  />
                </IconButton>
                <ProfileBoxStyled>
                  <RobotoBoldMedium>Arthur barata</RobotoBoldMedium>
                  <RobotoSmall>Professor</RobotoSmall>
                </ProfileBoxStyled>
                <Box onClick={handleOpenUserMenu} sx={{ cursor: "pointer" }}>
                  <ExpandMoreIcon></ExpandMoreIcon>
                </Box>
              </PerfilBoxStyled>
            </Tooltip>

            <Menu
              sx={{ mt: "30px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </ToolBarStyled>
      </AppBar>
    </Box>
  );
}
