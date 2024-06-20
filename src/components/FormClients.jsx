import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        window.location.reload(); // Recargar la página después de 5 segundos
      }, 5000);
      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }
  }, [formSubmitted]);

  return (
    <div className="col-lg-5">
      {formSubmitted ? (
        <div className="text-center">
          <p>{responseMessage}</p>
        </div>
      ) : loading ? (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="text-left">
          <form className="form" onSubmit={(e) => submit(e)}>
            <div className="row">
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Fecha de consulta</label>
                <DatePicker
                  value={date}
                  onChange={handleDateChange}
                  format="dd/MM/yyyy"
                  className="form-control border-0"
                />
              </div>
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Fecha de Cumpleaños</label>
                <DatePicker
                  value={dateBirthday}
                  onChange={handleDateBirthdayChange}
                  format="dd/MM/yyyy"
                  className="form-control border-0  "
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Nombre</label>
                <input
                  type="nombre"
                  className="form-control border-0"
                  placeholder="Nombre"
                  name="Nombre"
                  required
                />
              </div>
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Apellido</label>
                <input
                  type="apellido"
                  className="form-control border-0"
                  placeholder="Apellido"
                  name="Apellido"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-3 mb-4">
                <label htmlFor="">Edad</label>
                <input
                  type="number"
                  className="form-control border-0"
                  placeholder="Edad del paciente"
                  name="Edad"
                />
              </div>
              <div className="form-group col-sm mb-4">
                <label htmlFor="">Cedula</label>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Cedula"
                  name="Cedula"
                  required
                />
              </div>
              <div className="form-group col-sm mb-4">
                <label htmlFor="">Localidad</label>
                <select
                  className="form-control border-0"
                  id="localidad"
                  name="Localidad"
                >
                  <option>Seleccione la localidad</option>
                  <option>Usaquen</option>
                  <option>Chapinero</option>
                  <option>Santa Fe</option>
                  <option>San Cristobal</option>
                  <option>Usme</option>
                  <option>Tunjuelito</option>
                  <option>Bosa</option>
                  <option>Kennedy</option>
                  <option>Fontibón</option>
                  <option>Engativá</option>
                  <option>Suba</option>
                  <option>Barrios Unidos</option>
                  <option>Teusaquillo</option>
                  <option>Los Mártires</option>
                  <option>Antonio Nariño</option>
                  <option>Puente Aranda</option>
                  <option>Calendaria</option>
                  <option>Rafael Uribe Uribe</option>
                  <option>Ciudad Bolivar</option>
                  <option>Sumapaz</option>
                  <option>Alrededores de Bogotá</option>
                  <option>Otra</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Correo</label>
                <input
                  type="email"
                  className="form-control border-0"
                  placeholder="correo_cliente@example.com"
                  name="Correo"
                />
              </div>
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Celular</label>
                <input
                  type="phone"
                  className="form-control border-0"
                  placeholder="+57 321 22 22 22"
                  name="Celular"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-12 mb-4">
                <label htmlFor="">Patologia</label>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Escribe la patologia del paciente"
                  name="Patologia"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Podologa</label>
                <select
                  className="form-control border-0"
                  id="podologa"
                  name="Podologa"
                >
                  <option>Podologa</option>
                  <option>Molly</option>
                  <option>Paola</option>
                  <option>Otra</option>
                </select>
              </div>
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Medio referido</label>
                <select
                  className="form-control border-0"
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
            <div className="w-100">
              <button
                className="btn btn-primary w-100 font-weight-bold py-3 px-5"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default FormClients;
