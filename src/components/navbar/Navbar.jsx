import React, { useEffect } from "react";
import { ContainerNavbar, NavbarSection, MenuBurger } from "./navbarStyles";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import Menu from "./Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleOcultarMenuBurger } from "../../redux/menuBurger/menuBurgerSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const ocultarMenu = useSelector((state) => state.menuBurger.hidden);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ocultarMenu) {
      dispatch(toggleOcultarMenuBurger());
    }
  }, [dispatch, ocultarMenu]);

  const handleMenuClick = () => {
    dispatch(toggleOcultarMenuBurger());
  };

  return (
    <>
      <ContainerNavbar>
        <NavbarSection>
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            Vecinos Opinan
          </p>

          <ul>
            <li
              onClick={() => {
                navigate("/map");
              }}
            >
              Buscar
            </li>
            <li onClick={() => navigate("/about")}>Sobre nosotros</li>
            <li>
              <button onClick={() => navigate("/login")}>Iniciar sesión</button>
            </li>
          </ul>

          <MenuBurger onClick={() => handleMenuClick()}>
            {!ocultarMenu ? (
              <IoCloseCircle style={{ fontSize: "2rem" }} />
            ) : (
              <GiHamburgerMenu style={{ fontSize: "2rem" }} />
            )}
          </MenuBurger>
        </NavbarSection>
      </ContainerNavbar>
      {!ocultarMenu ? <Menu /> : null}
    </>
  );
};

export default Navbar;
