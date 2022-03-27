import * as React from "react"
import Layout from "/src/components/layout.js"
import Seo from "../../components/seo"
import { Container, Row, Col, Nav, Card } from "react-bootstrap"

import { Docs } from "../../acid/Help_svg_logo"
import cx from "classnames/bind"
import { Btnwhite } from "../../components/button/Button"

import helpStrings from "../../assets/string/help.strings"

import * as styles from "./help.module.scss"

const Home = () => {
  return (
    <div>
      <Seo title="Home" />
      <Layout>
        <div className={styles.pageBanner}>
          <Container data-aos="fade-down">
            <span>{helpStrings.BANNER.SPAN}</span>
            <h1>
              {helpStrings.BANNER.H1_1}
              <br />
              {helpStrings.BANNER.H1_2}
            </h1>
            <p>{helpStrings.BANNER.P}</p>
          </Container>
        </div>

        <Container
          fluid="xxl"
          className={styles.containerCard}
          data-aos="fade-up"
        >
          <Row>
            <Col xl="9" md="10" sm="10" xs="11" className="m-auto">
              <Card className={styles.card}>
                <Row className={styles.cardrow}>
                  <Col lg="1" md="1" sm="12" className={cx(styles.svg, "mb-3")}>
                    <Docs />
                  </Col>
                  <Col lg="8" md="8" sm="12" className={cx(styles.body)}>
                    <h3>{helpStrings.CARD.TITLE}</h3>
                    <p>{helpStrings.CARD.CONTENT}</p>
                  </Col>
                  <Col lg="3" md="3" sm="12" className={styles.buttoncol}>
                    <a href="/user_guide_page/guide" target="_blank">
                      <Btnwhite
                        btntext={helpStrings.CARD.BUTTON}
                        class={cx(styles.btnWhite)}
                      />
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className={styles.faq}>
            <div className={styles.secTitle} data-aos="fade-up">
              <span>{helpStrings.QA.SPAN}</span>
              <h1 className={styles.darkColor}>{helpStrings.QA.H1}</h1>
            </div>

            <div>
              <Row data-aos="fade-up">
                <Col xl={{ span: 10, offset: 1 }}>
                  <Row className={cx(styles.ques, "mt-4")}>
                    <Col md="6">
                      <Nav defaultActiveKey="/" className="flex-column">
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques1"
                        >
                          {helpStrings.QA.COL1_Q1}
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques3"
                        >
                          {helpStrings.QA.COL1_Q2}
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques5"
                        >
                          {helpStrings.QA.COL1_Q3}
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques7"
                        >
                          {helpStrings.QA.COL1_Q4}
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques9"
                        >
                          {helpStrings.QA.COL1_Q5}
                        </Nav.Link>
                      </Nav>
                    </Col>

                    <Col md="6">
                      <Nav defaultActiveKey="/" className="flex-column">
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques2"
                        >
                          {helpStrings.QA.COL2_Q1}
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques4"
                        >
                          {helpStrings.QA.COL2_Q2}
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques6"
                        >
                          {helpStrings.QA.COL2_Q3}
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques8"
                        >
                          {helpStrings.QA.COL2_Q4}
                        </Nav.Link>
                      </Nav>
                    </Col>
                  </Row>
                </Col>
              </Row>

              {/* <div className={styles.btnSec}  data-aos="fade-up">
              <span className={styles.line}></span>
              <Btnwhite btntext={helpStrings.QA.BUTTON} />
            </div> */}
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default Home
