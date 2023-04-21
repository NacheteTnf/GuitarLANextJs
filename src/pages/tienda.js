import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from "../styles/grid.module.css";
export default function Tienda({ guitarras }) {
  // cliente --> console.log(guitarras);

  return (
    <Layout
      title={"Tienda"}
      description={"Tienda virtual, venta de guitarras, instrumentos, GuitarLA"}
    >
      <main className="contenedor">
        <h2 className="heading">Nuestra Coleccion</h2>
        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//   const { data: guitarras } = await res.json();

//   // servidor no cambia seguido  --> console.log(guitarras);
//   return {
//     props: {
//       guitarras,
//     },
//   };
// }

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data: guitarras } = await res.json();

  // servidor cambia seguido la informacion --> console.log(guitarras);
  return {
    props: {
      guitarras,
    },
  };
}
