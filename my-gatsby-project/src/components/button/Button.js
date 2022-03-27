import * as styles from './Button.module.scss';
import { Button } from "react-bootstrap"
import * as React from "react"
import cx from 'classnames/bind';

const Btnprimary = (props) => {
    return ( 
        <Button variant="primary" className={cx( props.class)} href={props.href} type={props.type}>{props.btntext}</Button>

     );
}

const Btnsecondary = (props) => {
    return ( 
        <Button variant="secondary" className={cx(props.class)} href={props.href}>{props.btntext}</Button>

     );
}

const Btnwhite = (props) => {
    return ( 
        <Button className={cx(styles.btnWhite,props.class)} href={props.href}>{props.btntext}</Button>

     );
}

const Btnlink = (props) => {
    return ( 

        <Button className={styles.btnLink} variant="link" >{props.btntext}{props.arrow}</Button>

     );
}


 
export {Btnwhite , Btnprimary , Btnsecondary, Btnlink};