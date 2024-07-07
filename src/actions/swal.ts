import React from 'react'
import swal from 'sweetalert';
import styles from "@/src/components/Auth/authstyle.module.css"
const sweetAl = (props:object) => {
    return swal({
        ...props ,
        buttons: [false],
        className: styles.swal
    });
}

export default sweetAl