import React, { useState } from "react";

function FormClients() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e) {
    const formElement = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formElement);
    setLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbysXkQ86H_i2kOeEmcrtucJ5GmXtxLlsFZ0F977ZidycJVWbygbaQnbepUWISmvr3Rstg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setResponseMessage(data);
        setFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setResponseMessage("Ocurrió un error al enviar el formulario.");
        setFormSubmitted(true);
      })
      .finally(() => {
        setLoading(false); // Cuando la solicitud finaliza, detenemos la carga
      });
  }
  return (
    <div className="col-12 py-3" data-aos="fade-right">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {formSubmitted ? (
            <div className="text-center">
              <p>{responseMessage}</p>
            </div>
          ) : loading ? (
            <div className="text-center">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="text-center">
              <form className="form" onSubmit={(e) => submit(e)}>
                <div className="row">
                  <div className="form-group col-sm-6">
                    <input
                      type="fecha"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Fecha"
                      name="Fecha"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="nombre"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Nombre"
                      name="Nombre"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="apellido"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Apellido"
                      name="Apellido"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="cedula"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Cedula"
                      name="Cedula"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="happybirhday"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Happybirhday"
                      name="Happybirhday"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="edad"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Edad"
                      name="Edad"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="localidad"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Localidad"
                      name="Localidad"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="correo"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Correo"
                      name="Correo"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="celular"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Celular"
                      name="Celular"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="patologia"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Patologia"
                      name="Patologia"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="podologa"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Podologa"
                      name="Podologa"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="medio"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Medio"
                      name="Medio"
                    />
                  </div>
                </div>
                <div className="form-group"></div>
                <div>
                  <button
                    className="btn btn-primary font-weight-bold py-3 px-5"
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormClients;
