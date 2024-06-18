import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

function FormClients() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateBirthday, setDateBirthday] = useState(new Date());
  const [loading, setLoading] = useState(false);

  function handleDateChange(date) {
    setDate(date);
  }
  function handleDateBirthdayChange(dateBirthday) {
    setDateBirthday(dateBirthday);
  }
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  }

  function submit(e) {
    const formElement = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formElement);
    const formattedDate = formatDate(date);
    const formattedDateBirthday = formatDate(dateBirthday);
    formData.append("Fecha", formattedDate);
    formData.append("Happybirhday", formattedDateBirthday);
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
                    <DatePicker
                      value={date}
                      onChange={handleDateChange}
                      format="dd/MM/yyyy"
                      className="form-control border-0 py-4 px-3"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="nombre"
                      className="form-control   border-0 py-4 px-3"
                      placeholder="Nombre"
                      name="Nombre"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="apellido"
                      className="form-control   border-0 py-4 px-3"
                      placeholder="Apellido"
                      name="Apellido"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="cedula"
                      className="form-control   border-0 py-4 px-3"
                      placeholder="Cedula"
                      name="Cedula"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <DatePicker
                      value={dateBirthday}
                      onChange={handleDateBirthdayChange}
                      format="dd/MM/yyyy"
                      className="form-control border-0 py-4 px-3"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="edad"
                      className="form-control   border-0 py-4 px-3"
                      placeholder="Edad"
                      name="Edad"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="localidad"
                      className="form-control   border-0 py-4 px-3"
                      placeholder="Localidad"
                      name="Localidad"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="correo"
                      className="form-control   border-0 py-4 px-3"
                      placeholder="Correo"
                      name="Correo"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="celular"
                      className="form-control   border-0 py-4 px-3"
                      placeholder="Celular"
                      name="Celular"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="patologia"
                      className="form-control   border-0 py-4 px-3"
                      placeholder="Patologia"
                      name="Patologia"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <select
                      className="form-control   border-0"
                      style={{ height: "52px" }}
                      id="podologa"
                      name="Podologa"
                    >
                      <option>Podologa</option>
                      <option>Molly</option>
                      <option>Paola</option>
                      <option>Otra</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <select
                      className="form-control   border-0"
                      style={{ height: "52px" }}
                      id="medio"
                      name="Medio"
                    >
                      <option>Medio</option>
                      <option>Internet</option>
                      <option>Referido/Recomendado</option>
                      <option>Publicidad</option>
                      <option>Otros</option>
                    </select>
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
