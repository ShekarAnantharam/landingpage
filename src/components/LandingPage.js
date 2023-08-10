import React from "react";
import "./styles.css";

import hand from "../Images/pointing-right_318-562278.webp";
import instructor from "../Images/622057e51aac4e15268ac6bf_Group 48096756-p-500.jpeg";
import graph from "../Images/62393f30eaff0773441763cf_Group 48097179.svg";
import hubspot from "../Images/6239424b0f868b9ee30c554a_Group 48097174.svg";
import pubg from "../Images/623941ecd9a520e20fc99977_Group 48097175.svg";
import uber from "../Images/623de450ba09624afdd7837f_Vector (6).svg";
import flipkart from "../Images/6239420af1583ac1657b6fe0_Vector (2).svg";
import amazon from "../Images/6239424b0dee5914142658a7_Group 48097173.svg";
import zomato from "../Images/62394209eaff07674417714f_Vector.svg";
import t1 from "../Images/t1.png";
import t1logo from "../Images/t1logo.svg";
import t2 from "../Images/t2.png";
import t2logo from "../Images/t2logo.png";
import t3 from "../Images/t3.png";
import t3logo from "../Images/t3logo.png";
import andrew from "../Images/name.png";
import instructorpic from "../Images/instructor.jpg";
import copic from "../Images/copic.png";
import scripbox from "../Images/scripbox.svg";
import fynd from "../Images/fridge.png";
import hw1 from "../Images/hw1.gif";
import hw2 from "../Images/hw2.gif";
import hw3 from "../Images/hw3.gif";
import hw4 from "../Images/hw4.gif";
import hw5 from "../Images/hw5.gif";
import linkedin from "../Images/linkedin.svg";
import growthschool from "../Images/growthschool.svg";

function LandingPage() {
  return (
    <div className="home">
      <div className="home-section">
        <h1>Learn Growth Hacking that works in 8 hours</h1>
        <p style={{ fontSize: "20px" }}>
          An 8-week cohort-based course to help you build a career in growth and
          grow your business faster than ever.
        </p>
        <button>
          <a
            target="_blank"
            href="https://forms.growthschool.io/custom/growth-hacking-application-fb/c63317cf-d13d-4701-b0cc-fd7da8c5072e?utm_medium=web&utm_campaign=organic"
          >
            Apply Now
          </a>
        </button>
      </div>
      <svg
        style={{ marginTop: "-280px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="0.6"
          d="M0,32L48,58.7C96,85,192,139,288,176C384,213,480,235,576,202.7C672,171,768,85,864,69.3C960,53,1056,107,1152,149.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="instructor-details">
        <div>
          <p className="instructed-by">
            Instructed By
            <img src={hand} />
          </p>
        </div>
        <div className="vaibhav">
          {" "}
          <h3 style={{ color: "lightsalmon" }}>Vaibhav Sisinty</h3>
          <p style={{ marginTop: "-20px" }}>Founder - GrowthSchool</p>
          <div style={{ display: "flex" }}>
            <p style={{ position: "relative", bottom: "-10px" }}>
              Previously Worked at
            </p>
            <img
              style={{ width: "50%" }}
              src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/62203c24b1908f71fdb70972_Group%2048096904.svg"
            />
            <img
              style={{ width: "50%" }}
              src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/62203c2537fd2f3203b22670_Group%2048096903.svg"
            />
          </div>
        </div>
        <div>
          <img style={{ width: "60%", marginLeft: "30px" }} src={instructor} />
        </div>
      </div>
      <div className="schedule">
        <div>
          <div
            style={{
              color: "black",
              position: "relative",
              top: "10px",
              fontSize: "20px",
            }}
          >
            Application deadline
          </div>
          <h1>9 Aug, 2023</h1>
        </div>

        <div>
          <div>
            <div
              style={{
                color: "black",
                position: "relative",
                top: "10px",
                fontSize: "20px",
              }}
            >
              Cohort Starts On
            </div>
            <h1>Sept 10th, 2023</h1>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div
        style={{
          transform: "rotate(-36deg)",
          background: "white",
          width: "400px",
          borderRadius: "40%",
          padding: "20px",
          marginTop: "150px",
          marginLeft: "70px",
          color: "orange",
        }}
      >
        <h1> Who is this program for?</h1>
        <img
          style={{
            transform: "rotate(90deg)",
            width: "10%",
            marginLeft: "250px",
            marginTop: "-70px",
          }}
          src={hand}
        ></img>
      </div>
      <div className="who-is-this-for">
        <div className="who-is-this-for-grid">
          <div className="grid-item">
            <h3>Marketers</h3>
            <ul>
              <li>Transform yourself into a Growth Hacker</li>
              <li>Switch to better higher-paying jobs</li>
              <li>Get countless international opportunities</li>
            </ul>
          </div>
          <div className="grid-item">
            <h3>Coaches & Trainers</h3>
            <ul>
              <li>Fill seats for your courses</li>
              <li>Fast track your way to growth</li>
              <li>Stand out among your competitors</li>
            </ul>
          </div>

          <div className="grid-item">
            <h3>Students</h3>
            <ul>
              <li>Kickstart your career in growth hacking</li>
              <li>Get ahead and cut through your peers</li>
              <li>Stand out among your competitors</li>
            </ul>
          </div>

          <div className="grid-item">
            <h3>Product Managers</h3>
            <ul>
              <li>Boost the adoption of your product</li>
              <li>Become a Product Growth Manager</li>
              <li>Better understand your customers</li>
            </ul>
          </div>

          <div className="grid-item">
            <h3>Freelancers</h3>
            <ul>
              <li>Get world-class clients using growth tactics</li>
              <li>Upskill yourselves and increase your offerings</li>
              <li>Command a higher price in front of your clients</li>
            </ul>
          </div>
          <div className="grid-item">
            <h3>Entrepreneurs</h3>
            <ul>
              <li>Get customers without spending 1000s of $$$</li>
              <li>Generate high-quality leads for your business</li>
              <li>Train your marketing team in growth hacking</li>
            </ul>
          </div>
          <div className="grid-item">
            <h3>Growth Hackers</h3>
            <ul>
              <li>Join the Top 1% of growth hackers</li>
              <li>Make a living out of this one skill</li>
              <li>Become a leader in your organization</li>
            </ul>
          </div>
          <div className="grid-item">
            <h3>Sales Managers</h3>
            <ul>
              <li>Become the center of revenue generation</li>
              <li>Upskill yourselves into a better professional</li>
              <li>Get quality customers by building growth loops</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "100px 0  50px 0",
        }}
      >
        <div className="dont-do">Don't do this mentorship</div>
      </div>
      <div className="dont-do-grid">
        <div className="item">
          <h3>If you want rapid results</h3>

          <p>
            This program requires a lot of unlearning and experimentation which
            will require patience to get better results over time
          </p>
        </div>
        <div className="item">
          <h3>If you are looking for growth hacks</h3>

          <p>
            This program is about ultimate frameworks on growth that drive
            compounding results
          </p>
        </div>
        <div className="item">
          <h3>If you only want to invest money on some course</h3>

          <p>
            This program requires your time, effort and energy to improve your
            business or career. Top 40% students spend 10hrs a week on learning
            & working on projects during 8 weeks.
          </p>
        </div>
        <div className="item">
          <h3>You want to learn how to run ads</h3>

          <p>
            The program is about understanding the entire growth funnel, every
            step from Awareness to Revenue. And ads is a small piece of the
            funnel.
          </p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          color: "blueviolet",
          margin: "70px",
          fontSize: "25px",
        }}
      >
        <h1>How is Growth Hacking Different from Marketing?</h1>
      </div>
      <div>
        <div className="growth-vs-marketing">
          <div>
            <h4>The Growth funnel</h4>
            <img style={{ width: "90%" }} src={graph} />
          </div>
          <div style={{ borderLeft: "1px solid white", paddingLeft: "30px" }}>
            <h4>What is Growth Hacking?</h4>
            <p>
              Growth hacking is all about running experiments and creating
              strategies for the exponential growth of the company while
              spending as little as possible.
            </p>
            <h5>
              Funnel Breakdowns of Brands which are covered in the program
            </h5>
            <div
              className="logos"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div style={{ width: "200%" }}>
                <img src={hubspot} />
              </div>
              <img src={pubg} />
              <img src={uber} />
              <img src={flipkart} />
              <img src={amazon} />
              <img src={zomato} />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div style={{ margin: "auto" }}>
        <h1 style={{ textAlign: "center", margin: "100px" }}>Testimonials</h1>
        <div className="list">
          <div className="listitem">
            <div>
              <img style={{ width: "30%" }} src={t1} />
              <h4 style={{ marginLeft: "-40px" }}>Pratik Shigli (Vivan)</h4>
              <p>Marketing Manager</p>
              <img
                style={{
                  width: "40%",
                  border: "1px solid white",
                  marginBottom: "10px",
                  background: "blue",
                }}
                src={t1logo}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <p style={{ alignSelf: "center" }}>
                Got a new job at Vauld and started making videos for Coindcx.
              </p>
            </div>
          </div>
          <div className="listitem">
            <div>
              <img style={{ width: "30%" }} src={t2} />
              <h4 style={{ marginLeft: "-50px" }}>Akhand Pratap Singh</h4>
              <p>Product Manager</p>
              <img
                style={{
                  width: "40%",
                  height: "18%",
                  border: "1px solid white",
                  position: "relative",
                  top: "-10px",
                  background: "blue",
                }}
                src={t2logo}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width: "70%",
              }}
            >
              <p style={{ alignSelf: "center" }}>
                When I mentioned the traffic growth on their website and few
                other things in start of the conversation the founder got ready
                to have next conversation with me. That resulted getting a full
                time job as a Product Manager even after being a fresher.
              </p>
            </div>
          </div>
          <div className="listitem">
            <div>
              <img style={{ width: "30%" }} src={t3} />
              <h4 style={{ marginLeft: "-73px" }}>Ramya Anudeep</h4>
              <p>Growth & Marketing Director</p>
              <img
                style={{
                  width: "40%",
                  border: "1px solid white",
                  background: "blue",
                  position: "relative",
                  top: "-10px",
                }}
                src={t3logo}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width: "70%",
              }}
            >
              <p style={{ alignSelf: "center" }}>
                Started with zero knowledge in marketing and with zero income.
                Now became a growth hacker and having an agency , served and
                serving 30+ clients from the past 11 months with a consistent
                income of 2 lakhs per month.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <h1 style={{ textAlign: "center", margin: "100px" }}>
        But, Why become a Growth Hacker?
      </h1>
      <div
        className="why"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "2.5px",
        }}
      >
        <div>
          <h1>18L</h1>
          <p>
            Experienced Growth Hackers earn an average of ₹18 Lakhs per annum
          </p>
        </div>
        <div className="vertical-line"></div>
        <div>
          <h1>25000+</h1>
          <p>
            There are more than 25000 openings for the role of Growth Hackers
          </p>
        </div>
        <div className="vertical-line"></div>
        <div>
          <h1>4000+</h1>
          <p>
            There are more than 4000 remote opportunities for Growth Hacking
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          border: "3px dotted black",
          width: "30%",
          margin: "100px auto 100px",
          borderRadius: "10px",
          padding: "10px 0px 10px 30px",
        }}
      >
        <div>
          <img style={{ width: "50%", borderRadius: "50px" }} src={andrew} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>“Growth Hacker is the new VP of Marketing”</p>
          <p style={{ alignSelf: "end" }}>-Andrew Chen</p>
        </div>
      </div>
      <div>
        <div className="divider"></div>
        <h1 style={{ textAlign: "center", margin: "100px" }}>
          Program Overview
        </h1>
        <div style={{ display: "flex", gap: "50px", marginLeft: "100px" }}>
          <div
            style={{
              width: "10px",
              height: "fitContent",
              background: "black",
              margin: "50px",
              borderRadius: "10px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              // flexDirection:"column",
              margin: "auto",
              gap: "100px",
            }}
          >
            <div className="overview-item">
              <h2>Week-0 </h2>
              <h4>Kickoff Week</h4>
              <ul>
                <li>
                  Learn exactly how to make the most out of this program in 8
                  weeks.
                </li>
                <li>
                  Get to know the people you are learning with through
                  ice-breaker sessions.
                </li>
                <li>
                  Interact in the community and make friends to learn with for
                  the next 8 weeks.
                </li>
              </ul>
            </div>
            <div className="overview-item">
              <h2>Week-1 </h2>
              <h4>Fundamentals of Growth Hacking</h4>
              <ul>
                <li>Understanding the fundamentals</li>
                <li>Growth Hacking framework</li>
                <li>TBD Framework & Building a persona</li>
                <li>Psychographics vs Demographics</li>
                <li>OPN Deep dive</li>

                <li>Finding competitors</li>
                <li>Understanding competitor channels</li>
                <li>Piggybacking on competitors data</li>
              </ul>
              <h4>Projects you'll be doing</h4>
              <li>Pirate Funnel Mapping</li>
              <li>JBDT building for a brand</li>
              <li>Build a persona for a brand</li>
              <li>Competitor report</li>
            </div>
            <div className="overview-item">
              <h2>Week-2-3</h2>
              <h4>Building a Kickass Landing Page that converts</h4>
              <ul>
                <li>Symmetric Messaging</li>
                <li>Copywriting – LIFT model</li>
                <li>Building a kickass landing page</li>
                <li>Hard vs Soft Data</li>
                <li>UTM setup Building a tracking plan</li>
                <li>Headline & LP testing</li>
                <li>Speed tracking and optimization</li>
                <li>Eye-tracking test</li>
                <li>Usability test</li>
              </ul>
              <h4>Projects you'll be doing</h4>
              <ul>
                <li>
                  Build your landing page by writing copy using the LIFT method
                </li>
                <li>Integrate GA, Pixel, and other tracking codes using GTM</li>
                <li>Setup parameters for 4 channels & a basic tracking plan</li>
                <li>
                  Perform all the tests on the landing page and optimize the
                  landing page based on test results
                </li>
              </ul>
            </div>
            <div className="overview-item">
              <h2>Week-4</h2>
              <h4>Customer Acquisition & Marketing that works</h4>
              <ul>
                <li>Understanding Data</li>
                <li>Google Analytics</li>
                <li>Understanding user behavior using recordings</li>
                <li>User Feedback</li>
                <li>Heatmap analysis</li>
                <li>Conversion Rate optimization based on learnings</li>
                <li>Landing page experimentation</li>
                <li>Symmetric Messaging Experimentation</li>
                <h4>Projects you'll be doing</h4>
                <li>Google Analytics hunt</li>
                <li>
                  Aggregate all the feedback and document them on a notion doc
                </li>
                <li>Make changes on the landing page based on new learnings</li>
                <li>Perform an A/B test</li>
                <li>Perform a personalization experiment</li>
              </ul>
            </div>
            <div className="overview-item">
              <h2>Week-5</h2>
              <h4>Understanding various Acquisition and Retention Channels</h4>
              <ul>
                <li>Retention deep-dive</li>
                <li>Awareness + Acquisition channels overview</li>
                <li>Understanding: CAC, LTV, CLTV.</li>
                <li>Friction to value, painkillers vs vitamins, etc</li>
                <li>Understanding Acquisition cost based on channel</li>
                <li>Ad creative research</li>
                <li>Ad creative optimization</li>
                <li>Leveraging Al for ad testing without running ads</li>
                <li>Ad copywriting using Al</li>
                <li>Building audiences from FB groups and Scraping</li>
                <h4>Projects you'll be doing</h4>
                <li>Build a channel strategy for a brand/product</li>
                <li>T3 and B3 of competition</li>
                <li>Building your ad creatives</li>
                <li>Testing your creative without ad spend</li>
                <li>Building copy using GPT3</li>
                <li>Conduct your first scrapping experiment</li>
              </ul>
            </div>
            <div className="overview-item">
              <h2>Week-6-7</h2>
              <h4>Customer Lifecycle and Advanced Email Marketing</h4>
              <ul>
                <li>User lifecycle automation</li>
                <li>Setting up SMS, Push, Email automation</li>
                <li>User Segmentation</li>
                <li>Finding emails of people who matter</li>
                <li>Email list verification</li>
                <li>Email warming & setup SPF, DKIP</li>
                <li>Cold Email Fundamental</li>
                <li>Understanding typography & iconography</li>
                <li>
                  Cold email personalisation : Image + Text Setting up your
                  first cold email campaign
                </li>
                <li>MixPanel Scavenger hunt</li>
                <li>Design a user journey and set it up on MP</li>
                <li>Setup your first cold emailing campaign</li>
              </ul>
            </div>
            <div className="overview-item">
              <h2>Week-8</h2>
              <h4>Understanding User Onboarding, Virality and Growth Loops</h4>
              <ul>
                <li>Monetization deep-dive</li>
                <li>User onboarding & WOW moment</li>
                <li>Building Growth Loops</li>
                <li>Referral Marketing Campaigns</li>
                <li>Viral Marketing Campaigns</li>
                <h4>Projects you'll be doing</h4>
                <li>Identify roadblocks in the onboarding process</li>
                <li>
                  Design a referral or viral marketing campaign for a brand
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid",
          borderRadius: "15px",
          width: "70%",
          margin: "100px auto",
          textAlign: "center",
          // background: "rgb(129, 164, 209)",
        }}
      >
        <h4
          style={{
            border: "1px solid",
            borderRadius: "5px",
            display: "inline",
            position: "relative",
            top: "-30px",
            padding: "10px",
            // background: "rgb(129, 164, 209)",
          }}
        >
          BEYOND 8 WEEKS
        </h4>
        <h2>It’s over? Nope!</h2>
        <p style={{ marginBottom: "40px" }}>
          While the program is done and you have learned everything about growth
          hacking, you will learn and grow together with your peers and stay
          connected for life through our community.
        </p>
      </div>
      <div className="divider"></div>
      <h1 style={{ margin: "100px", textAlign: "center" }}>Instructed By</h1>
      <div
        style={{
          margin: "auto",
          width: "50%",
          border: "1px solid",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "50px" }}>
          <div style={{ width: "100%", height: "fitContent" }}>
            <img
              style={{ width: "100%", height: "90%", borderRadius: "15px" }}
              src={instructorpic}
            />
          </div>
          <div className="instructor-intro">
            <h3>Vaibhav Sisinty</h3>
            <h5>Growth Hacker, Entrepreneur Ex. Uber, Klook</h5>
            <p style={{ fontSize: "18px" }}>Hi, I am Vaibhav Sisinty.</p>
            <p>
              Vaibhav Sisinty Growth Hacker, Entrepreneur Ex. Uber, Klook Hi, I
              am Vaibhav Sisinty. I turn startups into profitable businesses,
              growth consult for brands & help them use the internet to increase
              profitability & their overall bottom lines.
            </p>
            <p>
              Vaibhav Sisinty Growth Hacker, Entrepreneur Ex. Uber, Klook Hi, I
              am Vaibhav Sisinty. I turn startups into profitable businesses,
              growth consult for brands & help them use the internet to increase
              profitability & their overall bottom lines. In 2012 (at age 19), I
              moved from running Discovery Android to founding an award winning
              digital media company, CrazyHeads. Within 3 years, CrazyHead
              helped 100+ clients over the world grow their businesses using
              internet.
            </p>
            <p>
              After working at Uber ( India & Latin America ) for 4.5 years, I
              joined Klook to lead marketing for India & the Middle East where I
              scaled the business to over $27M in a year.
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <h1 style={{ margin: "100px", textAlign: "center" }}>Co-Mentors</h1>
      <div
        style={{
          width: "18%",
          border: "1px solid",
          borderRadius: "20px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <img
          style={{
            padding: "4px 14px",
            borderRadius: "20px",
            width: "300px",
            height: "300px",
            margin: "auto",
          }}
          src={copic}
        />
        <h3>Ishan Singh</h3>
        <p>
          Growth Marketing Manager - Scripbox ; Growth Assistance - UpGrad &
          Fynd
        </p>
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <img style={{ width: "40%" }} src={scripbox} />
          <img style={{ width: "20%" }} src={fynd} />
        </div>
      </div>
      <div className="divider"></div>
      <h1 style={{ margin: "100px", textAlign: "center" }}>
        How does the Program Work?
      </h1>
      <div className="hw">
        <div className="gif">
          <img style={{ width: "100%" }} src={hw1} />
        </div>
        <div>
          <h2>WEEKLY LIVE Q&A SESSIONS</h2>
          <p>
            Have doubts about the program content or need guidance to fast-track
            your marketing career or facing roadblocks while scaling up your
            brand?I got you covered. Every week I will come LIVE and answer any
            question you through at me LIVE.
          </p>
        </div>
      </div>
      <div className="hw">
        <div className="gif" style={{ width: "56%" }}>
          <img style={{ width: "89%" }} src={hw2} />
        </div>
        <div style={{ marginLeft: "-50px" }}>
          <h2>WEEKLY MASTERCLASSES BY INDUSTRY EXPERTS</h2>
          <p>
            Why just learn from me, when you can learn from my friends and
            mentors too?
          </p>
          <p>
            Every week learn from marketing ninjas who have worked with brands
            like Accel, PitchGround, RazorPay, Springworks, and more.
          </p>
        </div>
      </div>
      <div className="hw">
        <div className="gif" style={{ width: "77%" }}>
          <img style={{ width: "100%" }} src={hw3} />
        </div>
        <div>
          <h2>ON-DEMAND CONTENT TRACK</h2>
          <p>
            We know coming LIVE daily to learn can be difficult. Hence I have
            created the on-demand video track where you can learn the most
            important concepts required by spending the least amount of time.
          </p>
          <p>
            Every week, study the video content and then come up with your
            doubts in the QnA session.
          </p>
        </div>
      </div>
      <div className="hw">
        <div className="gif" style={{ width: "77%" }}>
          <img style={{ width: "98%" }} src={hw4} />
        </div>
        <div>
          <h2>JAMMING AND NETWORKING SESSIONS</h2>
          <p>Learning alone online is boring & tough.</p>
          <p>
            So, this program is structured in a model: Learn - Ask Questions -
            Discuss - Apply
          </p>
          <p>
            Hence every week, there will be a live session for you to discuss
            and share ideas with your peers, and jam on different problem
            statements so that you can meet people and learn together.
          </p>
        </div>
      </div>
      <div className="hw">
        <div className="gif" style={{ width: "75%" }}>
          <img style={{ width: "98%" }} src={hw5} />
        </div>
        <div>
          <h2>COMMUNITY FOR LIFETIME</h2>
          <p>
            You learn and grow best when you are surrounded by like-minded
            people: You will be made part of a community where you can network,
            share opportunities, and build relations.
          </p>
        </div>
      </div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        target="_blank"
        href="https://forms.growthschool.io/custom/growth-hacking-application-fb/c63317cf-d13d-4701-b0cc-fd7da8c5072e?utm_medium=web&utm_campaign=organic"
      >
        <button className="apply-btn">Apply Now</button>
      </a>
      <p style={{ textAlign: "center" }}>Program starts on 10th Sept, 2023</p>
      <div className="divider"></div>
      <h1 style={{ margin: "100px", textAlign: "center" }}>How it works?</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "60%",
          margin: "auto 0 auto 10px",
          gap: "50px",
        }}
      >
        <div>
          <h3 style={{ alignSelf: "center", marginTop: "50px" }}>Step-1</h3>
        </div>
        <div>
          <h5>Application Process</h5>
          <p>Fill out the application form to apply for the Program</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "60%",
          margin: "0 0 0 auto",
          gap: "50px",
        }}
      >
        <div>
          <h3 style={{ alignSelf: "center", marginTop: "50px" }}>Step-2</h3>
        </div>
        <div>
          <h5>Application Reviews</h5>
          <p>
            Experts review each application selecting only the people who are
            aligned with our goal and values.{" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "60%",
          margin: "auto auto 0 0",
          gap: "50px",
        }}
      >
        <div>
          <h3 style={{ alignSelf: "center", marginTop: "50px" }}>Step-3</h3>
        </div>
        <div>
          <h5>Selection</h5>
          <p>Successful candidates will receive an email.</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "60%",
          margin: "auto 0 0 auto",
          gap: "50px",
        }}
      >
        <div>
          <h3 style={{ alignSelf: "center", marginTop: "50px" }}>Step-4</h3>
        </div>
        <div>
          <h5>Fellowship Kick-off & Onboarding</h5>
          <p>Welcome to the 6-week madness, to learn, and hit your goals.</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "60%",
          margin: "auto auto 0 0",
          gap: "50px",
        }}
      >
        <div>
          <h3 style={{ alignSelf: "center", marginTop: "50px" }}>Step-5</h3>
        </div>
        <div>
          <h5>Build Relations</h5>
          <p>Meet & network with your fellows</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "60%",
          margin: "auto 0 0 auto",
          gap: "50px",
        }}
      >
        <div>
          <h3
            style={{
              alignSelf: "center",
              alignSelf: "flex-end",
              marginTop: "50px",
            }}
          >
            Step-6
          </h3>
        </div>
        <div>
          <h5>Share</h5>
          <p>Celebrate your deals with the community</p>
        </div>
      </div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        target="_blank"
        href="https://forms.growthschool.io/custom/growth-hacking-application-fb/c63317cf-d13d-4701-b0cc-fd7da8c5072e?utm_medium=web&utm_campaign=organic"
      >
        <button className="apply-btn">Apply Now</button>
      </a>
      <p style={{ textAlign: "center" }}>Program starts on 10th Sept, 2023</p>
      <div className="divider"></div>
      <h1 style={{ margin: "100px", textAlign: "center" }}>Program Details</h1>
      <div
        style={{
          width: "60%",
          margin: "auto",
          display: "flex",
          gap: "20px",
          position: "relative",
          left: "60px",
        }}
      >
        <div>
          <h2>Ready to join Growth hacking Program?</h2>
          <p>Learn from industry experts to develop a growth mindset</p>
          <ul style={{ fontSize: "20px", fontWeight: "bold" }}>
            <li style={{ padding: "0 0 0 10px" }}>60+ Hours of Content</li>
            <li style={{ padding: "0 0 0 10px" }}>15+ Guest Sessions</li>
            <li style={{ padding: "0 0 0 10px" }}>8 Live QnA</li>
            <li style={{ padding: "0 0 0 10px" }}>
              Premium Growth Hacking community of marketers
            </li>
          </ul>
        </div>
        <div
          style={{ width: "3px", border: "1px solid", borderRadius: "200%" }}
        ></div>
        <div>
          <h2>What You Get?</h2>
          <p>
            Access to a powerful community of Growth Hacking enthusiasts and
            mentors from top brands.
          </p>
          <p>
            One year access to the pre-reads, curriculum, and on-demand content.
          </p>
          <p>
            Exclusive access to physical events and meetups in the community.
          </p>
          <p>
            Opportunity to connect with Guest Mentors who have fueled growth in
            multiple million-dollar startups.
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <h1 style={{ margin: "50px", textAlign: "center" }}>
        FAQs: Here’s everything you may ask...
      </h1>
      <div style={{ textAlign: "center", margin: "50px" }}>
        <p>
          <h3 style={{ display: "inline" }}>Q:</h3>When does the mentorship
          program start?
        </p>
        <p>
          <h3 style={{ display: "inline" }}>Ans:</h3>This batch of the program
          will begin on 10th Sept 2023
        </p>
        <p>
          <h3 style={{ display: "inline" }}>Q:</h3>Is this a completely live
          program?
        </p>
        <p>
          <h3 style={{ display: "inline" }}>Ans:</h3>No. This is a hybrid of
          on-demand content and live sessions. Every week you will get access to
          on-demand content. And you can get all your doubts and queries
          answered in the Q&A sessions.
        </p>

        <p>
          <h3 style={{ display: "inline" }}>Q:</h3>Do I have lifetime access to
          the content?
        </p>
        <p>
          <h3 style={{ display: "inline" }}>Ans:</h3>You will have access to the
          content for 1 year.
        </p>

        <p>
          <h3 style={{ display: "inline" }}>Q:</h3>I have a jam-packed schedule
          and I am not sure if I can make it, what do you suggest?
        </p>
        <p>
          <h3 style={{ display: "inline" }}>Ans:</h3>You will have access to the
          on-demand content to watch whenever you want. You will only need to
          get into the live sessions but even if you can’t make it, we provide
          all the recordings. So, mostly we expect you to put in 4-6 hours a
          week to complete the program successfully.
        </p>
      </div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        target="_blank"
        href="https://forms.growthschool.io/custom/growth-hacking-application-fb/c63317cf-d13d-4701-b0cc-fd7da8c5072e?utm_medium=web&utm_campaign=organic"
      >
        <button className="apply-btn">Apply Now</button>
      </a>
      <p style={{ textAlign: "center" }}>Program starts on 10th Sept, 2023</p>
      <footer>
        <div
          style={{ display: "flex", width: "20%", margin: "auto", gap: "10px", paddingLeft:"30px" }}
        >
          <div>
            <img style={{ width: "85%" }} src={growthschool} />
          </div>
          <div
            style={{ width: "2px", background: "white", marginTop: "20px" }}
          ></div>
          <div>
            <img style={{ width: "100%" }} src={linkedin} />
          </div>
          {/* <div>
              <p>Linkedin</p>
              <p>Top startup in idia 2022</p>
            </div> */}
        </div>
        <p
         style={{fontSize:"10px", color:"white", textAlign:"center",lineHeight:"20px"}}>
          For any support, please mail to hi@growthschool.io. Our support team
          will get back to you within<br/> 24 hours. The brands and companies that
          the instructors of growthschool are working or have <br/>worked, have no
          relation what so ever with Growthschool
        </p>
      </footer>
      <div className="last">
        <p
         style={{fontSize:"10px", color:"white", textAlign:"center"}}>©️ 2022 Growthschool.io. All rights reserved.
         </p>
      </div>
    </div>
  );
}

export default LandingPage;
