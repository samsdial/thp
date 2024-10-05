import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

function FormClientsDev() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateBirthday, setDateBirthday] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [inputTexto, setInputTexto] = useState(""); // Nuevo campo de texto
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    celular: "",
    localidad: "",
    correo: "",
    patologia: "",
    podologa: "",
    medioReferido: "",
    fechaCumple: "",
    fechaConsulta: "",
  });

  function handleDateChange(date) {
    setDate(date);
  }

  function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  function handleDateBirthdayChange(dateBirthday) {
    setDateBirthday(dateBirthday);
    const edadCalculada = calcularEdad(dateBirthday);
    setAge(edadCalculada);
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
        setLoading(false);
      });
  }

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const procesarTexto = () => {
    const lineas = inputTexto.split("\n");
    if (lineas.length >= 8) {
      const fechaNacimientoStr = lineas[1];
      const fechaNacimientoParts = fechaNacimientoStr.split("/");
      const fechaNacimiento = new Date(
        fechaNacimientoParts[2],
        fechaNacimientoParts[1] - 1,
        fechaNacimientoParts[0]
      );

      const edadCalculada = calcularEdad(fechaNacimiento);

      setFormData({
        ...formData,
        nombre: lineas[0].split(" ")[0],
        apellido: lineas[0].split(" ")[1] + " " + lineas[0].split(" ")[2],
        cedula: lineas[2],
        celular: lineas[3],
        localidad: lineas[4],
        correo: lineas[5],
        edad: edadCalculada,
        patologia: lineas[6],
        podologa: lineas[7],
        medioReferido: lineas[8],
        fechaCumple: lineas[1],
        fechaConsulta: lineas[9],
      });
    }
  };

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
          <div className="form-group">
            <label htmlFor="textoInput">Texto del cliente</label>
            <textarea
              className="form-control"
              value={inputTexto}
              onChange={(e) => setInputTexto(e.target.value)}
              placeholder="Pega el texto aquí"
              rows="8"
            />
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={procesarTexto}
            >
              Procesar texto
            </button>
          </div>

          <div className="row">
            <div className="form-group col-sm-6 mb-4">
              <label htmlFor="">Fecha de consulta</label>
              <input
                className="form-control border-0"
                placeholder="dd/MM/yyyy"
                id="birday"
                name="Birthday"
                value={formData.fechaConsulta}
                required
              />
            </div>
            <div className="form-group col-sm-6 mb-4">
              <label htmlFor="">Fecha de Cumpleaños</label>
              <input
                className="form-control border-0"
                placeholder="dd/MM/yyyy"
                id="birday"
                name="Birthday"
                value={formData.fechaCumple}
                required
              />
            </div>
          </div>
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
            <div className="w-100">
              <button
                className="btn btn-primary w-100 font-weight-bold py-3 px-5"
                type="submit"
              >
                Guardar
              </button>
            </div>
            <div className="row">
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Nombre</label>
                <input
                  type="nombre"
                  className="form-control border-0"
                  placeholder="Nombre"
                  name="Nombre"
                  value={formData.nombre}
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
                  value={formData.apellido}
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
                  value={formData.edad}
                />
              </div>
              <div className="form-group col-sm mb-4">
                <label htmlFor="">Cedula</label>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Cedula"
                  name="Cedula"
                  value={formData.cedula}
                  required
                />
              </div>
              <div className="form-group col-sm mb-4">
                <label htmlFor="">Localidad</label>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Localidad"
                  name="Localidad"
                  value={formData.localidad}
                />
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
                  value={formData.correo}
                />
              </div>
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Celular</label>
                <input
                  type="phone"
                  className="form-control border-0"
                  placeholder="+57 321 22 22 22"
                  name="Celular"
                  value={formData.celular}
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
                  value={formData.patologia}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Podologa</label>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Escribe la patologia del paciente"
                  id="podologa"
                  name="Podologa"
                  value={formData.podologa}
                />
              </div>
              <div className="form-group col-sm-6 mb-4">
                <label htmlFor="">Medio referido</label>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Medio referido"
                  id="medio"
                  name="Medio"
                  value={formData.medioReferido}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default FormClientsDev;
