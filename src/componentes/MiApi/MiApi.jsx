import Buscador from "../Buscador/Buscador";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";

// url api
const urlAPI =
  "https://gateway.marvel.com:443/v1/public/characters?apikey=53673b4c34b6b108031d9a035421bf90";

const MiApi = () => {
  const [personajes, setPersonajes] = useState([]);
  const [buscador, setBuscador] = useState("");
  // funcion async
  const traerPersonajes = async () => {
    try {
      const { data } = await axios(urlAPI);
      const dataOrdenada = data.data.results.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setPersonajes(dataOrdenada);
    } catch (error) {
      alert("No se pudo acceder a los datos" + error.message);
    }
  };

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      await traerPersonajes();
    };

    fetchData();
  }, []);

  return (
    <div>
      <Buscador
        buscador={buscador}
        setBuscador={setBuscador}
        texto="Busca a tu personaje favorito"
      />

      <Container className="containerCards">
        <Row s="1" md="3" className="g-4">
          {personajes
            .filter((personaje) => {
              return personaje.name
                .toLowerCase()
                .includes(buscador.toLowerCase());
            })
            .map((personaje) => (
              <Col key={personaje.id}>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                    className="cardImagen"
                  />
                  <Card.Body className="cardBody">
                    <Card.Title className="nombrePersonaje">
                      {personaje.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default MiApi;
