import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">
                  <b>Timeline</b>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1 ">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Master of Science in Artificial Intelligence{" "}
                          <span>2019-2020</span>
                        </h2>
                        <p>
                          Currenly pursuing masters in artificial intelligence
                          from National University of Ireland Galway with 2.1
                          honors due to be graduated by August 2020. During
                          course of my study I learnt a great deal about machine
                          learning and deep learning models and methodologies. I
                          have done numerous projects on Computer Vision (CNN,
                          VGG, ResNet, FaceNet, ImageNet, YOLO), Sequence
                          Modelling (RNN, CRNN, GRU, LSTM with Attention,
                          SiameseNN) and Generative Adversarial Networks (DCGAN,
                          StyleGAN). The machine learning frameworks I’m
                          familiar with are Tensorflow, PyTorch, Keras,
                          Scikit-learn, Spark MLlib, Numpy, Pandas, Seaborn,
                          Apache Spark, PySpark, Apache Hive, Pig.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Freelance Full Stack Developer<span>2018-2019</span>
                        </h2>
                        <p>
                          Design and development of Android application for ride
                          sharing services using Android Studio and Flutter,
                          Backend API and services integration using Django and
                          Firebase real-time database. Adopting Agile Scrum
                          methodology, CI/CD pipelines, Git versioning through
                          GitLab.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Business Intelligence Developer<span>2016-2019</span>
                        </h2>
                        <p>
                          As a business intelligence developer at Tata
                          Consultancy Services, Where my tasks include
                          Performing Data Warehouse design and modelling on
                          Oracle ETL platform (ODI, Endeca, Talend) according to
                          Industry standards. Compiling Business Intelligence
                          data into meaningful reports and dashboards using
                          Oracle OBIEE, Tableau and Endeca. Retail Big Data
                          analytics (clickstream and social media analytics) for fashion industry using Hortonworks
                          Sandbox (Apache Spark, Hive, Pig)
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Data Analyst Intern <span>Aug 2015 - Dec 2015</span>
                        </h2>
                        <p>
                          As a Data Analyst Intern in Cognizant Technology
                          Solutions, I performed tasks like Live streaming and
                          Extracting tweets using hashtags, analyzing why a
                          particular hashtag is trending and who started
                          tweeting at first through text analytics.{" "}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-book2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Masters of Science in Software Engineering{" "}
                          <span>2011-2016</span>
                        </h2>
                        <p>
                          I have completed masters in software engineering from
                          Vellore Institute of Technology, Chennai with CGPA of
                          8.31/10. The modules includes: Problem solving in C,
                          data structures and algorithms, object oriented
                          analysis and design, programming in Java, database
                          management systems, data warehousing and mining,
                          internet and web programming, artificial intelligence
                          and intelligent systems, web services and service
                          oriented architecture, distributed computing, cloud
                          computing, requirements engineering, software
                          architecture and design, software testing, software
                          quality and metrics
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
