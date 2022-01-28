import styles from './styles.module.scss';

import {FaGithub} from "react-icons/fa";
import {FiX} from "react-icons/fi";


export function SignInButton() {

    const islogged = true;
    return islogged ?
        (
            <button type="button" className={styles.signInButton}>
                <FaGithub color='#04d361'/>
                Alex Teotonio
                <FiX color = "#757380" className={styles.closeIcon}></FiX>
            </button>
        ) : 
        (
            <button type="button" className={styles.signInButton}>
                <FaGithub color='#eba417'/>
                Sign in with Github
            </button>
        );
}