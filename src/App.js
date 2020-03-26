import "./App.scss";
import React from "react";
import axios from "axios";

import { Button, Popover, Typography, Row, Col } from "antd";
import Areas from "./CityData/Areas";

import Config from "./Config";
import GoogleAnalyticsTag from "./Components/GoogleAnalyticsTag";
import FAQModal from "./Components/FAQModal";
import AddNewPlaceModal from "./Components/AddNewPlaceModal";
import LogEngagementEvent from "./Logging";
import NeighborhoodCards from "./Components/NeighborhoodCards";
import PlaceFilterDisplay from "./Components/PlaceFilterDisplay";
import ShareOptions from "./Components/ShareOptions";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const { Title } = Typography;

/*
 * This holds the context of what area (eg, SF, East Bay, etc)
 * is currently enabled
 */
const AreaContext = React.createContext({
  currentArea: null,
  updateArea: () => {}
});

class App extends React.Component {
  constructor(props) {
    super(props);
    // TODO this is janktown routing
    const path = window.location.pathname.slice(1).toLowerCase();
    const currentArea = Areas[path] ? path : "caba";

    this.state = {
      faqVisible: false,
      shareVisible: true,
      currentArea: currentArea,
      addPlaceVisible: path === "addplace"
    };

    this.selfRef = React.createRef();
  }

  showFAQModal() {
    this.setState({ faqVisible: true });
  }
  hideFAQModal() {
    this.setState({ faqVisible: false });
  }
  showShareModal() {
    this.setState({ shareVisible: true });
  }
  hideShareModal() {
    this.setState({ shareVisible: false });
  }
  hideAddModal() {
    window.history.pushState({}, "", "/");
    this.setState({ addPlaceVisible: false });
  }
  render() {
    return (
      <AreaContext.Provider
        value={{
          currentArea: this.state.currentArea,
          updateArea: newArea => {
            LogEngagementEvent("user-action", "selected-area", newArea);
            this.setState({ currentArea: newArea });
          }
        }}
      >
        <div>
          <div style={{ marginTop: "0px" }}>
            <FAQModal
              shouldShow={this.state.faqVisible}
              onClose={() => {
                this.hideFAQModal();
              }}
            />
            <AddNewPlaceModal
              shouldShow={this.state.addPlaceVisible}
              onClose={() => {
                this.hideAddModal();
              }}
            />
            <Row className="hero-row">
              <div style={{ maxWidth: "1100px", margin: "0px auto" }}>
                <Row className="top-header">
                  <Col span={24} offset={0}>
                    <Title style={{ float: "left", color: "white" }} level={4}>
                      <b>Locales de tu Barrio</b>
                    </Title>
                    <div style={{ float: "right" }}>
                      <a href="#">
                        <Title
                          onClick={() => {
                            this.showFAQModal();
                          }}
                          style={{
                            color: "white",
                            display: "inline",
                            marginRight: "16px"
                          }}
                          level={4}
                        >
                          Preguntas frecuentes
                        </Title>
                      </a>
                      <a
                        href="https://localesdetubarrio.typeform.com/to/CJpu60"
                        target="_blank"
                      >
                        <Title
                          style={{
                            color: "white",
                            display: "inline",
                            marginRight: "16px"
                          }}
                          level={4}
                        >
                          Agregá tu local
                        </Title>
                      </a>
                      <Popover content={<ShareOptions />}>
                        <Button shape="round" className="header-button">
                          Compartí
                        </Button>
                      </Popover>
                    </div>
                  </Col>
                </Row>

                <Col
                  xs={{ span: 18, offset: 3 }}
                  span={16}
                  offset={4}
                  style={{ textAlign: "center", padding: "20px 0px" }}
                >
                  <Title
                    level={1}
                    style={{ color: "white", textAlign: "center" }}
                  >
                    El restaurant de tu barrio podría cerrar para siempre.
                  </Title>
                  <div className="header-sans">
                    Tu compra por adelantado puede ayudar a que no cierren los
                    locales de tu barrio por el impacto económico de la pandemia
                    de COVID-19.
                  </div>
                </Col>
                <Col
                  sm={{ span: 20, offset: 2 }}
                  md={{ span: 20, offset: 2 }}
                  lg={{ span: 20, offset: 2 }}
                >
                  <div className="main-results">
                    <div style={{ padding: 20 }}>
                      <AreaContext.Consumer>
                        {value => {
                          return (
                            <PlaceFilterDisplay
                              updateArea={value.updateArea}
                              currentArea={value.currentArea}
                            />
                          );
                        }}
                      </AreaContext.Consumer>
                    </div>
                    <div className="neighborhood-card-container-outer">
                      <AreaContext.Consumer>
                        {value => {
                          return (
                            <NeighborhoodCards
                              currentArea={value.currentArea}
                              updateArea={value.updateArea}
                            />
                          );
                        }}
                      </AreaContext.Consumer>
                    </div>
                  </div>
                </Col>
                <Row className="footer-content">
                  <Col
                    offset={2}
                    xs={18}
                    sm={18}
                    md={9}
                    lg={9}
                    xl={9}
                    style={{ textAlign: "left" }}
                  >
                    <Title level={3}>Vos podes hacer la diferencia</Title>
                    <p>
                      Los locales de tu barrio te necesitan más que nunca.
                      Aunque no puedas salir de casa (#quedateencasa), podes
                      apoyarlos adelantando compras para canjear cuando los
                      locales vuelvan a abrir, y de esta forma ayudás a que
                      puedan pagar los sueldos y otros gastos durante la crisis.
                    </p>
                  </Col>
                  <Col
                    offset={2}
                    xs={18}
                    sm={18}
                    md={9}
                    lg={9}
                    xl={9}
                    style={{ textAlign: "left" }}
                  >
                    <Title level={3}>3 semanas pueden cambiarlo todo</Title>
                    <p>
                      Los comercios tienen muchos costos fijos: alquiler,
                      sueldos, seguros, servicios, y más. Según el Ministerio de
                      Producción las PyMEs emplean el 70% de las personas en
                      Argentina <sup>(1)</sup>. Se estima que un restaurant
                      puede sobrevivir en promedio 16 días en promedio sin
                      ingresos <sup>(2)</sup>.
                    </p>
                    <p>
                      Fuentes:&nbsp;
                      <sup>(1)</sup>{" "}
                      <a href="https://www.lanacion.com.ar/economia/empleos/el-50-de-los-empresarios-de-las-pymes-tiene-masde-60-anos-nid2151143">
                        Ministerio de Producción
                      </a>
                      . <sup>(2)</sup>
                      <a href="https://www.jpmorganchase.com/corporate/institute/document/jpmc-institute-small-business-report.pdf">
                        Estudio de JP Morgan Chase
                      </a>
                      .
                    </p>
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  maxWidth: "1100px",
                  margin: "10px auto",
                  fontSize: "12px"
                }}
              >
                Disclaimer: Somos un directorio para listar comercios en
                Argentina en medio de la pandemia del COVID-19. No gestionamos
                los servicios de tarjetas de regalo ("giftcards"), ni los pagos
                a los comercios. Si tenes algún problema con las tarjetas de
                regalo, comunicate directamente con los comercios.{" "}
                <b>
                  No somos responsables de reclamos, daños u otras
                  responsabilidades que puedan surgir.
                </b>
              </div>
            </Row>
          </div>
        </div>
        <GoogleAnalyticsTag analyticsID={Config.GoogleAnalyticsID} />
      </AreaContext.Provider>
    );
  }
}

export default App;
