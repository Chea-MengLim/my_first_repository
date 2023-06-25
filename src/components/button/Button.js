import styles from "./Button.module.css"
const Button = (props) => {
    const {title, textColor, bgColor} = props
  return (
        <div>      
            <button className={styles.btn_container}
            style=
            {{color:textColor,
            backgroundColor:bgColor,
             }}
             > 
             {title}
            </button>
        </div>
  );
};

export default Button;
