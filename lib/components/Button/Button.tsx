import styles from  './Button.module.scss';

interface Props {
  btnType: 'flat' | 'contained';
  label?: string
}

export const Button = (props: Props) => {

  const { btnType } = props;

  return (
    <div className={styles.wrapper}>
      <button className={`${btnType === 'flat' ? styles.flat : styles.contained}`}>

      </button>
    </div>
  );
};
