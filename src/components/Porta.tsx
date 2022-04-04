import styles from "../../styles/Porta.module.css";
import PortaModel from "../../src/model/porta";

interface PortaProps {
  porta:PortaModel
}

const Porta = (props:PortaProps) => {
  const { porta } = props;
  const selecionada = porta.selecionada ? styles.selecianada : "";
  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
};

export default Porta;
