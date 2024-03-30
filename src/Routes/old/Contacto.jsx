import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contacto = () => {
  return (
    <div>
      <h2>Necesitas saber mas?</h2>
      <p>Envianos tus preguntas y nos contactaremos contigo</p>
      <Form />
    </div>
  );
};

export default Contacto;
