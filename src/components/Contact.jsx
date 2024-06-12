import React, { useState } from "react";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e) {
    const formElement = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formElement);
    setLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbx5MPSSt7rkhH2akv6JJdQLnbJqRM70yp5PiHUdcu6csHe1_QcdDq6vs5LY0L_52ai8/exec",
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
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Nombre completo"
                      name="Name"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="email"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Email"
                      name="Email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    {/* <select
                              className="form-control bg-secondary border-0"
                              style={{ height: "52px" }}
                              id="numberGuests"
                              name="NumberGuest"
                            >
                              <option>Número de invitados</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select> */}
                    <input
                      type="subject"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="Subject"
                      name="Subject"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="phone"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      placeholder="numero"
                      name="Phone"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control bg-secondary border-0 py-2 px-3"
                    rows="5"
                    placeholder="Message"
                    required="required"
                    id="message"
                    name="Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="btn btn-primary font-weight-bold py-3 px-5"
                    type="submit"
                  >
                    Submit
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

export default Contact;
