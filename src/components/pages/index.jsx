import queryString from "query-string";
import React, { useEffect, useState } from "react";

// import { get } from "../services/service-general/service-general";
// import {
//   deleteDataBases,
//   getDataIb,
//   updateHostUser,
// } from "../services/service-indexDB/service-indexDB";
// import { postApiPreHome } from "../services/service-pre-home/service-pre-home";
// import { addInfoUser } from "../actions/You-cant-miss/You-cant-miss";
import { connect } from "react-redux";
// import { URL_SERVICES } from "../utils/paramApplication";
// import IndexComponents from "../components/molecules/index/index";

// import { ReactComponent as Globe } from "../assets/images/globe.svg";
// import { restrictPrehome } from "../utils/restrictPrehome";
// import {
//   validationChangeHome,
//   redirectHome,
// } from "../utils/home-configuration";
// import { ThemeProvider } from "styled-components";
// import { Helmet } from "react-helmet";
// import { selectTheme } from "../utils/select-theme";
// import "./index.scss";
// import HeaderPrehome from "../components/molecules/header-prehome/header-prehome";
// import Seo from "../components/internal-pages/common/seo/seo";
// import { enableBodyScroll } from "body-scroll-lock";
import { contentfulClient } from "../lib/contentful";



export function IndexComponent(props) {
  restrictPrehome(dataIndex);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [indexDBUser, setIndexDBUser] = useState("");
  const [openLink, setOpenLink] = useState(false);
  const [validatechangeModalDelete, setValidatechangeModalDelete] =
    useState(false);
  const [perfilamientoCesantias, setPerfilamientoCesantias] = useState(true);
  const [copyProps, setCopyProps] = useState(props);

  const enableBody = (target) => enableBodyScroll(target);

  
  

  useEffect(() => {
    servicesIndexbd();
    redirectHome(indexDBUser);
  }, []);

  const validationLInk = (query, services) => {
    if (query) {
      let params = queryString.parse(window.location.search);
      if (params["tipoCliente"] || params["linea"] || params["changeModal"]) {
        const changeModal = params["changeModal"] ? true : false;
        const category = params["linea"] !== services.category;
        const type = parseInt(params["tipoCliente"]) !== services.type;
        if (type || category || changeModal) {
          setOpenLink(true);
          setIsOpenMenu(true);
        } else {
          window.location.href = "/";
        }
        if (changeModal) {
          setValidatechangeModalDelete(true);
        }
      }
    }
  };

  const refreshPage = () => {
    servicesIndexbd();
    redirectHome(indexDBUser);
  };

  useEffect(() => {
    if (props !== copyProps) {
      validationChangeHome(
        props,
        copyProps,
        updateHostUser,
        {
          indexDBUser: indexDBUser,
          IsOpenMenu: isOpenMenu,
        },
        postApiPreHome,
        () => {
          refreshPage();
        },
        () => {
          setIsOpenMenu(true);
        }
      );
      setCopyProps(props);
    }
  });

  const servicesIndexbd = () => {
    if (props.hasOwnProperty("getInfoDb")) {
      props.getInfoDb().then((responde) => {
        if (responde.length === 0) {
          setIsOpenMenu(true);
          setPerfilamientoCesantias(false);
        } else if (responde.length > 0) {
          let params = queryString.parse(window.location.search);
          const categorySend = responde[0].category;
          let validateQuery =
            params["tipoCliente"] || params["linea"] || params["changeModal"]
              ? true
              : false;
          if (
            categorySend === "Inversión" &&
            !validateQuery &&
            process.env.RESTRIGIR_REDIRECT === "true"
          ) {
            setPerfilamientoCesantias(true);
            const prefix =
              process.env.PATH_PREFIX === ""
                ? "https://proteccion.com/wps/portal/proteccion/web/inversion/home/#/"
                : `${window.location.origin}/wps/portal/proteccion/web/inversion/home/#/`;
            window.location.href = prefix;
          } else {
            setPerfilamientoCesantias(false);
          }
          redirectHome(indexDBUser);
        }
      });

      props.getInfoDb().then((responde) => {
        if (responde.length > 0) {
          let params = queryString.parse(window.location.search);
          let validateQuery =
            params["tipoCliente"] || params["linea"] || params["changeModal"]
              ? true
              : false;
          const query = window.location.search;
          const categorySend = responde[0].category;
          if (query) {
            validationLInk(query, responde[0]);
          }
          if (
            categorySend === "Inversión" &&
            !validateQuery &&
            process.env.RESTRIGIR_REDIRECT === "true"
          ) {
            setPerfilamientoCesantias(true);
            const prefix =
              process.env.PATH_PREFIX === ""
                ? "https://proteccion.com/wps/portal/proteccion/web/inversion/home/#/"
                : `${window.location.origin}/wps/portal/proteccion/web/inversion/home/#/`;
            window.location.href = prefix;
          } else {
            setPerfilamientoCesantias(false);
          }
          const indexDBUserName = responde[0].nameuser;
          const indexDBUser = responde[0];

          setIndexDBUser(indexDBUser);

          props
            .getF(
              [{ name: "name", value: indexDBUserName }],
              `${URL_SERVICES}users/${responde[0].host}`,
              true
            )
            .then((result) => {
              if (result.length > 0) {
                props.dispatch(addInfoUser(result[result.length - 1]));
              }
            })
            .catch((error) => {});
          redirectHome(indexDBUser);
        }
      });
    }
  };

  const deleteDataBaseUser = () => {
    deleteDataBases();
  };

  if (isOpenMenu) {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";
  }

  return (
    <>
      <Seo
        pageContext={{
          title: "Protección: Pensiones, Cesantías, Ahorro e Inversión",
        }}
      />
      {/* <React.Fragment>
        <div className="hidden-lable" id={'accessibility-state-false'} />
        <Helmet>
          <meta
            content="vqw769x2iqwmnqdx1xocn2dusrruis"
            name="facebook-domain-verification"
          />
        </Helmet>
        {!perfilamientoCesantias ? (
          <React.Fragment>
            {isOpenMenu && !openLink ? (
              <div className="container-page-home__prehome">
                <ThemeProvider theme={selectTheme('', props.accessibility, '')}>
                  <HeaderPrehome />
                  <div className="container-prehome">
                    <div className="container-prehome__top">
                      <Globe className="container-prehome__globe" />
                      <p className="container-prehome__title">proteccion.com</p>
                    </div>
                    <IndexComponents
                      {...props}
                      getF={get}
                      data={dataIndex}
                      eventClose={() => {
                        enableBody(document.body)
                      }}
                      getInfoDB={getDataIb}
                      layaout={false}
                      dataContefull={props.data}
                      next={() => {
                        setIsOpenMenu(false)
                        servicesIndexbd()
                        document.body.style.overflowY = 'scroll'
                        document.documentElement.style.overflow = null
                      }}
                    />
                  </div>
                </ThemeProvider>
              </div>
            ) : null}
            {isOpenMenu && openLink ? (
              <div className="container-page-home__prehome">
                <ThemeProvider theme={selectTheme('', props.accessibility, '')}>
                  <div className="container-prehome">
                    <IndexComponents
                      {...props}
                      getF={get}
                      data={dataIndex}
                      getInfoDB={getDataIb}
                      resetData={true}
                      eventClose={() => {
                        enableBody(document.body)
                      }}
                      layaout={false}
                      dataContefull={props.data}
                      next={() => {
                        setIsOpenMenu(false)
                        servicesIndexbd()
                        document.body.style.overflowY = 'scroll'
                        document.documentElement.style.overflow = null
                      }}
                      deleteDataBaseUser={() => {
                        if (!validatechangeModalDelete) {
                          deleteDataBaseUser()
                        }
                      }}
                    />
                  </div>
                </ThemeProvider>
              </div>
            ) : null}
          </React.Fragment>
        ) : null}
      </React.Fragment> */}
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.youcantmiss,
    nameUser: state.welcome,
    perfilamiento: state.home,
    statusMenu: state.menu.status,
    statusTourguide: state.tourguide.status,
    accessibility: state.accesibility,
  };
}
IndexComponent = connect(mapStateToProps)(IndexComponent);


const entries = await contentfulClient.getEntries({
    content_type: "contenidoHome",
  });
export const IndexPage = (props) => {
 
  return (
    <div className="container-page-home">
      <IndexComponent
        {...props}
        data={entries}
        // getF={get}
        // getInfoDb={getDataIb}
        // showTest={true}
      />
    </div>
  );
};

export default IndexPage;
