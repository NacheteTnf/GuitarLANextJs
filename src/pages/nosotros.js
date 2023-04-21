import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, GuitarLA, tienda de musica"}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre Nosotros"
          />
          <div>
            <p>
              Sed et tellus in leo viverra vestibulum. Fusce lobortis lectus et
              massa aliquet, quis tincidunt velit bibendum. Ut dapibus sodales
              viverra. Maecenas at ipsum vulputate ex pellentesque egestas.
            </p>
            <p>
              Sed et tellus in leo viverra vestibulum. Fusce lobortis lectus et
              massa aliquet, quis tincidunt velit bibendum. Ut dapibus sodales
              viverra. Maecenas at ipsum vulputate ex pellentesque egestas.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
