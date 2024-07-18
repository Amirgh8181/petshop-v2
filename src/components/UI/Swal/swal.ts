import swal from 'sweetalert';
import styles from "./swal.module.css"
const sweetAl = (props:object) => {
    return swal({
        ...props ,
        buttons: [false],
        className: styles.swal
    });
}

export default sweetAl