import React from "react";
import { Modal } from "antd";
import Constants from "../Constants";

class FAQEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  getBody = () => {
    return { __html: this.props.body };
  };

  render() {
    return (
      <>
        <h3
          style={{ cursor: "pointer" }}
          onClick={event => this.setState({ expanded: !this.state.expanded })}
        >
          {this.props.title}
        </h3>
        {this.state.expanded && (
          <p dangerouslySetInnerHTML={this.getBody()}></p>
        )}
      </>
    );
  }
}

function FAQModal(props) {
  function renderLink(url, text, target) {
    target = target || "_blank";
    return "<a target='" + target + "' href='" + url + "'>" + text + "</a>";
  }

  function addPlaceLink(text) {
    return renderLink(Constants.AddPlaceURL, text, "_self");
  }

  const consumerFAQs = [
    {
      title: "¿Qué es Localesdetubarrio.org?",
      body:
        'localesdetubarrio.org es un directorio virtual (100% ad honorem) en el cual los locales de barrio pueden ofrecer tarjetas de regalo ("giftcards") para que las personas hagan compras por adelantado y las retiren o consuman cuando termine la cuarentena.'
    },
    {
      title:
        "¿De qué otra manera puedo apoyar a nuestros comercios locales más allá de comprar una tarjeta de regalo?",
      body:
        "Otra opción es hacer compras a aquellos que ofrecen delivery. Algunos locales que normalmente no ofrecen entregas comenzaron a ofrecer delivery durante la pandemia, así que revisá sus sitios web y redes sociales para ver qué hay disponible. Si podés, se generoso con la propina. Los encargados del delivery están haciendo un trabajo extra y poniendo en riesgo su salud."
    },
    {
      title: "¿Quién construyó esto? ¿Y por qué?",
      body:
        "Kaitlyn y Mike Krieger: una pareja en San Francisco creó el directorio base (" +
        renderLink("https://saveourfaves.org/", "https://saveourfaves.org/") +
        ") que adaptamos para Argentina. Pueden contactar al grupo de voluntarios de Argentina con cualquier pregunta sobre el sitio en " +
        renderLink(
          "mailto:localesdetubarrio@gmail.com",
          "localesdetubarrio@gmail.com"
        ) +
        "."
    },
    {
      title:
        "¿Por qué es esto solo para Argentina? ¿Pueden hacer esto en mi ciudad?",
      body:
        "Este fue creado en base al sitio de @mikeyk presente en github. Si bien no podremos ayudar a implementar el directorio, podés consultar el back-end de la interfaz para obtener más instrucciones sobre cómo podría implementar el sitio en tu pais/ciudad. Es posible que necesitas algunos ajustes para que esto funcione de tu lado. Si necesita más ayuda, podés enviar un pedido de ayuda al repositorio de Github."
    }
  ];
  const bizFAQs = [
    {
      title: "¿Cómo puedo agregar mi local en el sitio?",
      body:
        "Ayudanos a agregar tu local acá. Estamos abiertos a agregar más categorías de comercios si esto funciona."
    },
    {
      title:
        "Mi empresa ofrece certificados de regalo, pero su sitio dice que no",
      body:
        "Por favor, completá el formulario con el link correcto a tu sitio o al post de red social donde expliques sobre la tarjeta de regalo así se lista en el sitio."
    },
    {
      title: "¿Cómo puedo comenzar a ofrecer tarjetas de regalo en línea?",
      body:
        "El primer paso es consultar con tu proveedor de punto de venta o ecommerce. Muchos ofrecen sus propias funciones de tarjetas de regalo y otros se integran con proveedores externos específicos.<br></br>" +
        "Para ayudarte con esto, pusimos más opciones y estamos actualizando documentos de Google para que puedas contar con más información: " +
        renderLink(
          "https://docs.google.com/document/d/1Dh3K21otWNH7LrnCJfqhwKohzPO385yVdpF6BAifrWY/edit",
          "LINK"
        ) +
        "<br></br>" +
        "Si estás considerando otras opciones, asegurate de que tu empresa reciba la tarifa por la tarjeta de regalo tan pronto como el cliente compre la tarjeta (de lo contrario, eso no te va a ayudar durante la crisis).<br></br>"
    },
    {
      title: "¿Cómo puedo alentar a los clientes a comprar tarjetas de regalo?",
      body:
        "Las personas quieren apoyar a sus comercios favoritos, así que no tengas miedo de decirles que las tarjetas de regalo son importantes para tu negocio. Aprovechá tu comunidad en Facebook, Twitter e Instagram, y contactate con tus clientes leales. ¡Pediles que consideren adelantar la compra de un mes para ayudarte en medio de la crisis!"
    },
    {
      title: "Descargo de responsabilidad",
      body:
        'Somos un directorio para listar comercios en Argentina en medio de la pandemia del COVID-19. No gestionamos los servicios de tarjetas de regalo ("giftcards"), ni los pagos a los comercios. Si tenes algún problema con las tarjetas de regalo, comunicate directamente con los comercios. <b>No somos responsables de reclamos, daños u otras responsabilidades que puedan surgir.</b>'
    }
  ];
  return (
    <Modal
      title="FAQs"
      visible={props.shouldShow}
      onOk={props.onClose}
      width="80%"
      onCancel={props.onClose}
      footer={<span></span>}
    >
      <h2>Para personas que quieran apoyar a los comercios de su barrio.</h2>
      {consumerFAQs.map(faq => (
        <FAQEntry key={faq.title} title={faq.title} body={faq.body} />
      ))}
      <h2>Para locales comerciales</h2>
      {bizFAQs.map(faq => (
        <FAQEntry key={faq.title} title={faq.title} body={faq.body} />
      ))}
    </Modal>
  );
}

export default FAQModal;
