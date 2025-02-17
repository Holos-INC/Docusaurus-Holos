import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/simple_brush.svg').default,
    description: (
      <>
        La base de gestión de conocimiento del grupo 1 de ISPP 24-25 
        se ha creado mediante el uso de Docusaurus. De esta manera, 
        facilitamos la gestión de código y el acceso a la documentación en línea.
      </>
    ),
  },
  { 
    title: 'Estructura',
    Svg: require('@site/static/img/art_palette.svg').default,
    description: (
      <>
      La estructura que se va a utilizar para esta base de gestión del conocimiento se divide en:<br /><br />
      - <b>Actas:</b> en la cual se va a guardar todas las actas de las reuniones y estará dividido en frontend o backend.<br />
      - <b>Feedback:</b> donde se recogerá todos los comentarios proporcionados por los profesores.<br />
      - <b>Entregables pasados:</b> donde estarán las carpetas con los documentos entregados en el pasado.<br />
      - <b>Documentación:</b> donde estarán todos los documentos actualizados en este sprint.
      </>
    ),
  },
  {
    title: 'Landing Page',
    Svg: require('@site/static/img/landing_page.svg').default,
    description: (
      <>
        Nuestra Landing Page se encuentra desplegada en <a href="https://holos.es/">holos.es</a>. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
