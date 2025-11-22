import React from "react";
import './Home.css';

const Home = () => {
  
const items = [
    { title: "Holiday Notice", description: "Office closed on Nov 5 for Diwali." }
  ];

   const images = [
   "/src/assets/collage/17.jpg",
   "/src/assets/collage/2.jpeg",
   "/src/assets/collage/8.jpg",
   "/src/assets/collage/22.jpg",
   "/src/assets/collage/9.jpg",
   "/src/assets/collage/6.jpeg",
   "/src/assets/collage/19.jpg",
   "/src/assets/collage/27.jpg",
   "/src/assets/collage/23.jpg",
   "/src/assets/collage/28.jpg",
   "/src/assets/collage/10.jpg",
   "/src/assets/collage/12.jpg",
   "/src/assets/collage/13.jpg",
   "/src/assets/collage/14.jpg",
   "/src/assets/collage/21.jpg",
   "/src/assets/collage/16.jpg",
   "/src/assets/collage/11.jpg",
   "/src/assets/collage/15.jpg",
   "/src/assets/collage/26.jpg",
   "/src/assets/collage/24.jpg",
   "/src/assets/collage/18.jpg",
   "/src/assets/collage/4.jpeg",
    "/src/assets/collage/20.jpg",


  ];
  
  


  return (
    <>
    <div  className="first">
       </div>

    {/* <div className="second">
      <div className="course">UG Courses</div>
      <div className="course">PG Courses</div>
      <div className="course">PhD Courses</div>
    </div> */}

    <div className="third">
      {/* <div className="ruler"></div> */}
      <div className="about">
        <h2>∽ About Us ∼</h2>
        <div className="container">
        <p>Mahila Arts Commerce College was established on 27/08/1991, by Vidarbha Youth Welfare Society of Amravati. The foundation stone of the College of Mahila Arts Commerce College was led by Late Honorable Shri. Ram Meghe, the Ex-Education Minister of Maharashtra. At present, Dr. Nitin R. Dhande is the Hon’ble Chairman of the Vidarbha Youth Welfare Society, Amravati.
        <br /><br />
        Mahila Arts Commerce College is affiliated to SGB, Amravati University Amravati; it provides instructions to the students for three years B.A. Degree Course, M.A. Degree course and PhD in two subjects. The college has implemented the education schemes of National Education Policy-2020 as per the instructions given by the parent University. The college has a team of duly qualified members of the academic community as its faculty. This has considerably helped in providing quality education. The college has been reaccredited (second cycle) in 2018 with “B” grade by NAAC, Bangalore.
        <br /></p>

          <img src="/src/assets/colg.jpg" alt="College Building" />
        </div>
      </div>
    </div>

    <div className="fourth">
      <div className="facility">
        <h2>Facilities</h2>
        <div className="boxes">
        <div className="box">
          <div className="img">
          <img src="/src/assets/nss.png" alt="" />
          </div>
          <h3>NSS</h3>
        </div>
        <div className="box">
          <div className="img">
          <img src="/src/assets/lib2.svg" alt="" />
          </div>
          <h3>Library</h3>
        </div>
        <div className="box">
          <div className="img">
          <img src="/src/assets/lab.png" alt="" />
          </div>
          <h3>Laboratories</h3>
        </div>
        <div className="box">
          <div className="img">
          <img src="/src/assets/sports.svg" alt="" />
          </div>
          <h3>Sports</h3>
        </div>
        <div className="box">
          <div className="img">
          <img src="/src/assets/hostel.png" alt="" />
          </div>
          <h3>Hostel</h3>
        </div>
        <div className="box">
          <div className="img">
          <img src="/src/assets/canteen.png" alt="" />
          </div>
          <h3>Canteen</h3>
        </div>
        </div>
      </div>
    </div>


    <div className="fifth">
      <div className="container">
      <div className="left">
      <h2>Admission</h2>
     <div className="notice-scroll">
        <div className="notice-list">
          {items.map((item, index) => (
            <div key={index} className="notice-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
          {/* Duplicate list for infinite loop */}
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="notice-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="ruler2"></div>
      <div className="right">
          <h2>Notice</h2>
     <div className="notice-scroll">
        <div className="notice-list">
          {items.map((item, index) => (
            <div key={index} className="notice-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
          {/* Duplicate list for infinite loop */}
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="notice-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        </div>
        {/* <h2>Chairman's Message</h2>
        <div className="message">
          <p>It gives me immense pleasure to welcome you to Mahila Arts & Commerce College, Chandur Railway — an institution built on the vision of empowering women through quality education and holistic development.

          Education is not merely about acquiring degrees; it is about shaping character, nurturing creativity, and instilling confidence to face the challenges of life. At our college, we are committed to providing an environment where every student feels valued, supported, and motivated to reach her full potential.
          </p>
          <img className="img" src="/src/assets/president.jpeg" alt="Chairman" />
        </div>
        Our aim is to equip young women with knowledge, skills, and moral values that will enable them to become self-reliant, responsible citizens, and leaders of tomorrow. Through a blend of academics, co-curricular activities, and value-based learning, we strive to create individuals who contribute positively to society.
        <br />
        <br />
        — Chairman
      <i>Mahila Arts & Commerce College, Chandur Railway</i> */}
      </div>
      </div>
    </div>

    <div className="sixth">
        <h2>∽ Academics ∼</h2>
    <div className="container">
      <div className="sixth-left">
          <div className="bigimg">
            <img src="/src/assets/collage/8.jpg" alt="" />
          </div>
          <div className="smallimgs">
            <img className="one" src="/src/assets/collage/27.jpg" alt="" />
            <img className="two" src= "/src/assets/collage/24.jpg" alt="" />
          </div>
        </div>
        
        <div className="sixth-right">
          <p>Our academic programs focus on building strong fundamentals, practical understanding, and consistent discipline. With experienced faculty and a supportive learning environment, we guide students toward excellence in exams, higher studies, and future careers.</p>

          <h3 className="courses">Under Graduate (B.A.) —→</h3>
          <h3 className="courses">Post Graduate (P.G.) —→</h3>
          <h3 className="courses">Ph.D Research center —→</h3>

        </div>

      {/*<div className="gallery-grid">
     {images.map((src, index) => (
  <img key={index} className={`gallery-item size-${(index % 4) + 1}`} src={src}/>

))}  
        </div>*/}
        </div> 
    </div>

    <div className="seven">
      <div className="container">
      <div className="seven-left">
        <h2>∽ Management desk ∼</h2>
        <div className="chairman">
          <img src="/src/assets/president.jpeg" alt="" />
          <div className="msg">
            <h3>Chairman's Message: Dr. Nitin R. Dhande</h3>
            <p>Mahila Arts commerce college  has a team of duly qualified members of the academic community as its faculty. This has considerably helped in providing quality education. The College is reaccredited by NACC, Bangalore in 2018.
              <br />
              <i style={{color:"red"}}>read more —→</i></p>
          </div>
        </div>
        <div className="principal">
          <img src="\src\assets\TusharDeshmukh.jpeg" alt="" />
          <div className="msg">
            <h3>Principal's Message: Dr. Tushar Deshmukh</h3>
            <p>It gives me immense pleasure to welcome you to Mahila Arts & Commerce College, Chandur Railway — an institution built on the vision of empowering women through quality education and holistic development.
              <br />
              <i style={{color:"#fd6202"}}>read more —→</i>
            </p>

          </div>
        </div>
      </div>

      <div className="seven-right">
        <div className="box">300+ Students</div>
        <div className="box">
          50+ Staff
        </div>
        <div className="box">12 courses</div>
        <div className="box">35 Years Completed</div>
        
      </div>
      </div>
    </div>

    <div className="seventh">
      <h1>Contact Us</h1>
      <div className="map">
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.434126979951!2d77.97414537470871!3d20.81416889511545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4030100000003%3A0x5778f131418e1b17!2sMahila%20Arts%20%26%20Commerce%20College!5e0!3m2!1sen!2sin!4v1762157750882!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
      </div>
      </div>
    </>

  );
};

export default Home;
