import * as React from 'react'
import { Link } from 'gatsby';
import { Container, Row, Col, Nav, } from 'react-bootstrap';
import * as styles from './Footer.module.scss'
import FooterStrings from "./Footer.strings"
import cx from 'classnames/bind'
import whiteLogo from '../../assets/logo-white.svg'

const Footer = () => (

    <div>
        <footer className={styles.footer}>
            
            <div className={styles.top}>
                <Container>
                    <Row className="justify-content-center">

                        <Col md="auto">
                            <div className={styles.info}>
                                
                                <span><b>{FooterStrings.TOP.DEMO_1}</b> & <b>{FooterStrings.TOP.DEMO_2}</b></span>
                            </div>
                        </Col>

                        <Col md="auto">
                            <div className={styles.info}>
                                
                                <span><b>{FooterStrings.TOP.UPTIME_1}</b>{FooterStrings.TOP.UPTIME_2}</span>
                            </div>
                        </Col>

                        <Col md="auto">
                            <div className={styles.info}>
                                
                                <span>{FooterStrings.TOP.SECURITY_1} <b>{FooterStrings.TOP.SECURITY_2}</b> </span>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
                
            <div className={styles.pageLinks}>
                <Container>
                    <Row>

                        <Col md="4" xs="6">
                            <h5>{FooterStrings.PAGELINKS.TITLE1}</h5>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Link to="/platform-overview" className={styles.navLink}>{FooterStrings.PAGELINKS.COL1_ROW1}</Link>
                                <Link to="/why-workhall" className={styles.navLink}>{FooterStrings.PAGELINKS.COL1_ROW2}</Link>
                                <Link to="/about_us_page/about" className={styles.navLink}>{FooterStrings.PAGELINKS.COL1_ROW3}</Link>
                                <Link to="/help" className={styles.navLink}>{FooterStrings.PAGELINKS.COL1_ROW4}</Link>
                                <Link to="/contact" className={styles.navLink}>{FooterStrings.PAGELINKS.COL1_ROW5}</Link>                                
                            </Nav>
                        </Col>

                        <Col md="4" xs="6">
                            <h5>{FooterStrings.PAGELINKS.TITLE2}</h5>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Link to="/platform-overview#task" className={styles.navLink}>{FooterStrings.PAGELINKS.COL2_ROW1}</Link>
                                <Link to="/platform-overview#datalist" className={styles.navLink}>{FooterStrings.PAGELINKS.COL2_ROW2}</Link>
                                <Link to="/platform-overview#procedures" className={styles.navLink}>{FooterStrings.PAGELINKS.COL2_ROW3}</Link>
                                <Link to="/platform-overview#collaboration" className={styles.navLink}>{FooterStrings.PAGELINKS.COL2_ROW4}</Link>
                            </Nav>
                        </Col>

                        <Col md="4" xs="12" className={styles.blog}>
                            <h5>{FooterStrings.PAGELINKS.TITLE3}</h5>
                            <p className={styles.addressTag}><span>Level 2, #185, 3rd Main Road,&nbsp;</span> <span>Natesa Nagar,&nbsp;</span><span>Virugambakkam,&nbsp;</span>  <span>Chennai – 600 092,&nbsp;</span><span>Tamil Nadu, India.</span></p><br/>
                            <Link href="mailto:ask@workhall.com?Subject=I Need to talk to you" target="_blank" className={styles.navLink}>{FooterStrings.PAGELINKS.COL3_ROW2}</Link>
                        </Col>
                            
                    </Row>
                </Container>
            </div>

            <div className={styles.bottom}>
                <Container>
                    <Row className="align-items-center">

                        <Col sm="4" className={styles.logo}>
                            <img src={whiteLogo} alt="WorkHall Logo" />
                        </Col>

                        <Col sm="8">
                            <Nav className={styles.socialIcons} defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li">
                                    <Link to="/" className={styles.navLink}>
                                        
                                    </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="/" className={styles.navLink}>
                                      
                                    </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="/" className={styles.navLink}>
                                       
                                    </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="/" className={styles.navLink}>
                                       
                                    </Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="/" className={styles.navLink}>
                                      
                                    </Link>
                                </Nav.Item>
                            </Nav>

                            <Nav className={styles.secureLink} defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li">
                                    <p className={cx(styles.navLink, styles.copy, "me-0")}>{FooterStrings.BOTTOM.COPYRIGHT}</p>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        {/* <Col sm="12"> */}
                            {/* <Nav className={styles.secureLink} defaultActiveKey="/home" as="ul"> */}
                                {/* <Nav.Item as="li"> */}
                                    {/* <p className={cx(styles.navLink, "me-0")}>{FooterStrings.BOTTOM.COPYRIGHT}</p> */}
                                {/* </Nav.Item> */}
                                {/* <Nav.Item as="li">
                                    <Link to="link-1" className={styles.navLink}>{FooterStrings.BOTTOM.SECURITY}</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="link-2" className={styles.navLink}>{FooterStrings.BOTTOM.PRIVACY}</Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Link to="link-2" className={styles.navLink} style={{borderRight: "none", paddingRight: "0"}}>{FooterStrings.BOTTOM.TERMS}</Link>
                                </Nav.Item> */}
                            {/* </Nav> */}
                        {/* </Col> */}

                    </Row>
                </Container>
            </div>

        </footer>
    </div>

)

export default Footer