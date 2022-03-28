import * as React from "react"
import Layout from "/src/components/layout.js"
import Seo from "../../components/seo"
import { Container, Row, Col, Nav, Card } from "react-bootstrap"


import cx from "classnames/bind"
import { Btnwhite } from "../../components/button/Button"

import * as styles from "./home.module.scss"

const Home = () => {
  return (
    <div>
      <Seo title="Home" />
      <Layout>
        <div className={styles.pageBanner}>
          <Container data-aos="fade-down">
            <span>HELP</span>
            <h1>
            We're here to answer your queries,
              <br />
              any hour of the day.
            </h1>
            <p>Workhall has the highest rated client support in the industry. We are here to answer your questions 24 hours a day and every day of the week - including holidays!</p>
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
                    
                  </Col>
                  <Col lg="8" md="8" sm="12" className={cx(styles.body)}>
                    <h3>Support Articles</h3>
                    <p>Figure out how you can build, customise, and use features in Workhall to get your work done.</p>
                  </Col>
                  <Col lg="3" md="3" sm="12" className={styles.buttoncol}>
                    <a href="/user_guide_page/guide" target="_blank">
                      <Btnwhite
                        btntext="CLICK MORE"
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
              <span>FAQ</span>
              <h1 className={styles.darkColor}>Questions & Answers</h1>
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
                          What can I do with Workhall?
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques3"
                        >
                          What can I do with Workhall?
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques5"
                        >
                          What can I do with Workhall?
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques7"
                        >
                          What can I do with Workhall?
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques9"
                        >
                          What can I do with Workhall?
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
                          What can I do with Workhall?
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques4"
                        >
                          What can I do with Workhall?
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques6"
                        >
                          What can I do with Workhall?
                        </Nav.Link>
                        <Nav.Link
                          className={styles.navLink}
                          target="_blank"
                          href="/user_guide_page/faq_page/faq#ques8"
                        >
                          What can I do with Workhall?
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
