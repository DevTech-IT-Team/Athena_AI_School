import React from 'react';
import '../../Academics.css';

const MusicArtsPartner = () => {
  return (
    <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Music & Arts Partner</h1>
            <p className="text-lg md:text-xl font-light opacity-90">NCF India</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Music & Arts Partner
          </div>

      <div className="academics-nav">
        <a href="/academics/learning-culture" className="nav-link">Learning Culture</a>
        <a href="/academics/primary" className="nav-link">Primary</a>
        <a href="/academics/pre-primary" className="nav-link">Pre Primary</a>
        <a href="/academics/middle" className="nav-link">Middle</a>
        <a href="/academics/senior-school" className="nav-link">Senior School</a>
        <a href="/academics/our-partners" className="nav-link">Our Partners</a>
        <a href="/academics/music-arts-partner" className="nav-link active">Music & Arts Partner</a>
      </div>

      <div className="academics-quote">
        <p className="quote-text">
          &quot;When you see your child looking forward to his classes, you know the school is doing something really right.&quot;
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Enquire Now</button>
          <button className="btn-secondary">Download Prospectus</button>
        </div>
      </div>

      <div className="academics-section">
        <h2>Our Music & Arts Partners</h2>
        <p className="section-description">
          WisdomAI School collaborates with renowned music and arts academies across India to provide world-class creative education opportunities for our students.
        </p>

        <div className="approach-grid">
          <div className="approach-item">
            <h3>Urban Raga Music School</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Bengaluru</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Bidyut Chakrabarty</p>
            <p className="text-gray-600 text-sm mb-1">998/1, 3rd Cross Road, HRBR Layout 1st Block, Kalyan Nagar, Bengaluru, Karnataka 560043</p>
            <p className="text-gray-600 text-sm">+917795349578 | info@urbanraga.com</p>
          </div>

          <div className="approach-item">
            <h3>Stars Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">South Jaipur</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Paras Ruhani</p>
            <p className="text-gray-600 text-sm mb-1">270, Jagatpura Road, Vinoba Vihar, Model Town, Malviya Nagar, Jaipur, Rajasthan 302017</p>
            <p className="text-gray-600 text-sm">919829188796 | starsmusicacademy@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Surtaal Music Training Institute</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">South Jaipur</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr Mahesh</p>
            <p className="text-gray-600 text-sm mb-1">B-305, mahesh nagar, near ICS school, jaipur 302015</p>
            <p className="text-gray-600 text-sm">919782884354 | surtaalcreation@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Backstreets Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Chandigarh</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Kartik</p>
            <p className="text-gray-600 text-sm mb-1">SCO 541, Top Floor, Himalaya Marg, Sector 70, Mohali, Chandigarh, Punjab 160059</p>
            <p className="text-gray-600 text-sm">919779922367 | backstreetsacademy@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Muzigyasa Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Delhi</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Deepak</p>
            <p className="text-gray-600 text-sm mb-1">A-437 & 438, Block A, New Ashok Nagar, Delhi, 110096</p>
            <p className="text-gray-600 text-sm">917503186689 | muzigyasa@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>SRJ Music Classes</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Jaipur</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Sibeon James</p>
            <p className="text-gray-600 text-sm mb-1">Near 13, Ajmer Rd, Panch Batti, Mission Compound, Hathroi, Jaipur, Rajasthan 302001</p>
            <p className="text-gray-600 text-sm">919950283453 | sibeon.james@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Nitish Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Uttarakhand</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Nitish</p>
            <p className="text-gray-600 text-sm mb-1">P.O.B karbari, Shimla Bypass Rd, Jhewaredi, Uttarakhand 248001</p>
            <p className="text-gray-600 text-sm">919634626076 | nitishmusicacademy@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>The Selewan Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Uttarakhand</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Ashish</p>
            <p className="text-gray-600 text-sm mb-1">House No, Lal Kurti Cantonment, Roorkee, Uttarakhand 247667</p>
            <p className="text-gray-600 text-sm">918477938411 | selewaan@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>The Melody Hub</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Jaipur</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Dipesh</p>
            <p className="text-gray-600 text-sm mb-1">PLOT NO E287, Swej Farm Rd, opposite to MJRPU university, Ramnagar Extension, Sodala, Jaipur</p>
            <p className="text-gray-600 text-sm">916375020567 | themelodyboxmusic@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Jagatpura Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Jaipur</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Pawan Kaushik</p>
            <p className="text-gray-600 text-sm mb-1">Kusum Vihar, Vidhyadhar Nagar, Jagatpura, Jaipur, Rajasthan 302025</p>
            <p className="text-gray-600 text-sm">917976603017 | jagatpuramusicacademy@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Piuriyaz Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Mumbai</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr Nayan</p>
            <p className="text-gray-600 text-sm mb-1">Ground Floor, Samyakth Bliss, Govind Dham, Khar West, Mumbai, Maharashtra - 400052</p>
            <p className="text-gray-600 text-sm">917900107033 | piuriyazmusic@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Goa Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Visakhapatnam</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Ms. Hemlata</p>
            <p className="text-gray-600 text-sm mb-1">2nd floor 1-83 Opp. Swarna Bharathi, Stadium Resapuvanipalem, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530013</p>
            <p className="text-gray-600 text-sm">918805740177 | rammyhema@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Realistic World Taekwondo School</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">New Delhi</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Atheleno</p>
            <p className="text-gray-600 text-sm mb-1">Wz 2/2 Hari Singh park, Multan nagar, paschim vihar EAST, opp Metro pillar no 218</p>
            <p className="text-gray-600 text-sm">919911238798 | realistic.academy@yahoo.com</p>
          </div>

          <div className="approach-item">
            <h3>Irfan Dance Studio</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Mumbai</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Irfan Hamid</p>
            <p className="text-gray-600 text-sm mb-1">Shop No. 3, Lokhandwala Complex, B/ 25, Queenland Building, Shastri Nagar, Andheri West, Mumbai, Maharashtra 400053</p>
            <p className="text-gray-600 text-sm">917208777517 | er2academy@yahoo.com</p>
          </div>

          <div className="approach-item">
            <h3>Vox Dance Studio</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Jaipur</p>
            <p className="text-gray-600">Dance Academy Partner</p>
          </div>

          <div className="approach-item">
            <h3>Opus Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">New Delhi</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Mukul</p>
            <p className="text-gray-600 text-sm mb-1">NP 148 A 1st Floor Pitampura, across Fitness First Gym, Delhi 110034</p>
            <p className="text-gray-600 text-sm">919899176251 | opus.academy@yahoo.com</p>
          </div>

          <div className="approach-item">
            <h3>Infrasonic School Of Music</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Bengaluru</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Rohit K Byahut</p>
            <p className="text-gray-600 text-sm mb-1">15 Mrinalini, Bannerghatta Main Rd, Thimappa Reddy Layout, Omkar Nagar, Hulimavu, Bengaluru, Karnataka 560076</p>
            <p className="text-gray-600 text-sm">918892850194 | iinfrasonic@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>VM Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Chennai</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Rahul</p>
            <p className="text-gray-600 text-sm mb-1">VM Store, 16, Mahatma Gandhi Rd, Thiruvanmiyur, Chennai, Tamil Nadu 600041</p>
            <p className="text-gray-600 text-sm">919940556519 | vmmusicclass@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Akki Dance Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Mumbai</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Akilesh Vijay Kedare</p>
            <p className="text-gray-600 text-sm mb-1">Shop No.204, 2nd Floor, BMC Market Building, Station Road, Bhandup West, Mumbai 400078</p>
            <p className="text-gray-600 text-sm">917208777517 | artstudiogenius@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Key 'n' Strings</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Bengaluru</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Joshua</p>
            <p className="text-gray-600 text-sm mb-1">284, Munnekollal Main Rd, Thubarahalli, Munnekollal, Bengaluru, Karnataka 560037</p>
            <p className="text-gray-600 text-sm">919886029367 | keynstrings.music@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Think Musical Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Mumbai</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Prashu</p>
            <p className="text-gray-600 text-sm mb-1">Navdurga co-op Society, R12-414, MMRDA Colony, Poonam Nagar, Jogeshwari East, Mumbai 400093</p>
            <p className="text-gray-600 text-sm">918149784158 | prashurockstar007@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>SwarDhwani Music School</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Bengaluru</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Tanusree</p>
            <p className="text-gray-600 text-sm mb-1">Mahaveer Dazzle Apartment, Basavanagar Main Road, Hoodi Circle</p>
            <p className="text-gray-600 text-sm">919036713880 | tanu.sarkar009@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Nritya Tarangini Dance Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Bengaluru</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Mythili Prathapa</p>
            <p className="text-gray-600 text-sm mb-1">Vaikuntam Layout, Lakshminarayana Pura, AECS Layout, Marathahalli, Bengaluru, Karnataka 560037</p>
            <p className="text-gray-600 text-sm">919611122317 | mythili.prathapa@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Shobhas Dance School</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Bangalore</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Shreyas</p>
            <p className="text-gray-600 text-sm mb-1">No 19, 152/1 SRS Nilaya, Beside Dr.Prasad's Pet Clinic, Doddanekkundi, Bangalore 560037</p>
            <p className="text-gray-600 text-sm">917026172737 | shreyasdance.7896@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>A Direction Dance Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Haridwar</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Alok</p>
            <p className="text-gray-600 text-sm mb-1">Durga Nagar, Bhupatwala, Mathur Vaishya Dham, Haridwar</p>
            <p className="text-gray-600 text-sm">919012010129 | alokgiri88855@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Tansen Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Roorkee</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Rehan</p>
            <p className="text-gray-600 text-sm mb-1">Azad Nagar Nehru Nagar, Shiv Puri Road, Roorkee</p>
            <p className="text-gray-600 text-sm">919045729957 | RehanAhmad1258@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Amala Music School</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Tamil Nadu</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Lourdu Samy</p>
            <p className="text-gray-600 text-sm mb-1">9, 191, Thirunavukarasu Street, Fairlands, Salem, Tamil Nadu 636016</p>
            <p className="text-gray-600 text-sm">919865616730 | amalamusicschool@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Music and Minds</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Mumbai</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Ujjal Ray</p>
            <p className="text-gray-600 text-sm mb-1">Shop No 4, Duttakrupa Co-Operative Housing Society, Sector 11, Kharghar, Navi Mumbai, Maharashtra 410210</p>
            <p className="text-gray-600 text-sm">919867670719 | Musicandminds86@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Bangalore Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Bengaluru</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Sundaresh</p>
            <p className="text-gray-600 text-sm mb-1">2nd Floor, 2nd Main, Sidda Reddy Compound, SUPRABHA 13/A, Mico Layout, Arekere, Bengaluru, Karnataka 560076</p>
            <p className="text-gray-600 text-sm">919880532266 | Violinsundaresh@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Mahadeva Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Haridwar</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Mohan</p>
            <p className="text-gray-600 text-sm mb-1">Railway Colony, Industrial Area, Haridwar, Uttarakhand 249401</p>
            <p className="text-gray-600 text-sm">917983345477 | mohandev996@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Professional Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Haridwar</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Kuldeep</p>
            <p className="text-gray-600 text-sm mb-1">Rishikul, Haridwar</p>
            <p className="text-gray-600 text-sm">918171652037 | kuldeepwilsonkumar@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Virusagam Preschool</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Pudukkottai, Tamil Nadu</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Vijayalaksmi</p>
            <p className="text-gray-600 text-sm mb-1">115, Near, 3rd St, Machuvadi, Thaila Nagar, Pudukkottai, Tamil Nadu 622004</p>
            <p className="text-gray-600 text-sm">919952502791 | vijayalakshmikg10@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>R Music Life</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Ahmedabad</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Chirag Shah</p>
            <p className="text-gray-600 text-sm mb-1">40, Lala Lajpat Rai Marg, Prankunj Society, Pushpkunj, Maninagar, Ahmedabad, Gujarat 380043</p>
            <p className="text-gray-600 text-sm">919898384973 | vichinishah@gmail.com</p>
          </div>

          <div className="approach-item">
            <h3>Bollywood Music Academy</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Jalandhar</p>
            <p className="text-gray-600 mb-1"><strong>Contact:</strong> Mr. Shiv Kumar</p>
            <p className="text-gray-600 text-sm mb-1">180, WX Basti 9, Jalandhar, Punjab</p>
            <p className="text-gray-600 text-sm">919878626432 | Shivbma@yahoo.com</p>
          </div>
        </div>

      <div className="social-highlights">
        <div className="highlight-card blue">
          <h3>#Being WisdomAI</h3>
          <p>Palchin Patil wants to master it all in 2021</p>
        </div>

        <div className="highlight-card green">
          <h3>#Being WisdomAI</h3>
          <p>Teamwork makes us all winners</p>
        </div>

        <div className="highlight-card purple">
          <h3>#Being WisdomAI</h3>
          <p>We enjoy learning even after classes</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default MusicArtsPartner;
