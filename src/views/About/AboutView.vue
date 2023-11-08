<template>
  <div id="allContent">
  <div id="pageTitle">
    <h1>Who am I?</h1>
    
    <h3>Here will go over myself, my experience, skills, and what I do</h3>
  </div>

  <div class="aboutme-container">
    <div class="aboutme-content">
      <h2 class="aboutme-title">Get to know me</h2>
      <div class="aboutme-content-detail">
        <p class="aboutme-description">I am a <strong>software engineer</strong> that works on the <strong>back-end</strong> of web and application development.</p>
        <p class="aboutme-description">I'm an <strong>Eagle Scout</strong> since 2018 and I volunteer at my home town ambulance agency as an EMT.</p>
        <p class="aboutme-description">I am open for any opportunity to learn and expand my knowledge and experience. If you'd like to connect through my <a id="linkedIn" href="https://www.linkedin.com/in/jakelevinsky/">LinkedIn</a>, feel free to reach out. </p>
      </div>
    </div>

    <div class="aboutme-content">
      <h2 class="aboutme-title">Skills</h2>
      <div id="skills">
      <div class="aboutme-skills">C#</div>
      <div class="aboutme-skills">Java</div>
      <div class="aboutme-skills">Python</div>
      <div class="aboutme-skills">JavaScript</div>
      <div class="aboutme-skills">TypeScript</div>
      <div class="aboutme-skills">HTML</div>
      <div class="aboutme-skills">CSS</div>
      <div class="aboutme-skills">Blazor</div>
      <div class="aboutme-skills">VueJs</div>
      <div class="aboutme-skills">GitHub</div>
      <div class="aboutme-skills">MSSQL</div>
    </div>
    </div>
  </div>

  <div class="wavyArrow">
    <div class="topOfArrow"></div>
  </div>
  
  <div id="allTimeline">
    <h1 id="timelineTitle">Timeline of experience and accomplishments</h1>
  <div id="timeline">
        <div class="timeline-container left">
          <div class="timeline-list-item">
            <div class="timeline-list-date">
              <h5>August 2022 - Present</h5>
            </div>
            <div class="timeline-list-desc">
              <p class="companyName">eGifter</p>
              <p class="company-title">Software Engineer I</p>
              <ul class="list-desc-item">Spearheaded application project for sales team for opportunity leads and calculations,enabling employees to calculate revenue opportunities for sales prospects.
                  Led cross-functional collaboration between multiple departments and external clients to ensure timely and successful project </ul>
                  <ul class="list-desc-item">delivery. Designed and implemented an MSSQL database with a schema to store deal calculations, catering to the analytics and
                  business intelligence needs of the company. Integrated RESTful APIs to synchronize the company's database and Salesforce opportunity data with a deal calculator
                  application, ensuring real-time data updates.</ul>
                  <ul class="list-desc-item">Migrated and modernized legacy code to align with current standards during the transition to the company's new messaging
                  system to optimize reporting.</ul> 
            </div>
          </div>
        </div>

        <div class="timeline-container right"> 
          <div class="timeline-list-item">
            <div class="timeline-list-date">
              <h5>December 2021 - March 2022</h5>
            </div>
            <div class="timeline-list-desc">
              <p class="company-title">College Senior Project</p>
              <ul class="list-desc-item">Created an encryption algorithm taking inspiration from the Enigma Machine and Ceasar Cipher.</ul>
              <ul class="list-desc-item">Developed site using Django and created a Python oriented encryption algorithm. Algorithm consists of creating 
                a random key which is used to determine the number of steps the alphabet is shifted to change a letter of the message into.
              </ul>
              <ul class="list-desc-item">Taught myself Python and Django to complete the project.</ul>
            </div>
          </div>
        </div>

        <div class="timeline-container left"> 
          <div class="timeline-list-item">
            <div class="timeline-list-date">
              <h5>July 2021 - January 2023</h5>
            </div>
            <div class="timeline-list-desc">
              <p class="companyName">Huntington Community First Aid Squad</p>
              <p class="company-title">Captain</p>
              <ul class="list-desc-item">Scheduled 24-hour coverage and delegated workload for the agency’s volunteers. Managed the training of new members, ensuring they met the agency’s standards in emergency medical procedures and
                protocols.</ul>
            </div>
          </div>
        </div>

        <div class="timeline-container right"> 
          <div class="timeline-list-item">
            <div class="timeline-list-date">
              <h5>August 2018 - May 2022</h5>
            </div>
            <div class="timeline-list-desc">
              <p class="companyName">SUNY Purchase</p>
              <p class="company-title">College</p>
              <ul class="list-desc-item">Got my degree in the Bachelor of Arts in Mathematics and Computer Science.</ul>
              <ul class="list-desc-item">Maintained a GPA of 3.04.</ul>
              <ul class="list-desc-item">Related Coursework: Computer Science I & II, Networking and Security, Data Structures, Linear Algebra, Introduction to the
                  Web, Creating User Interfaces, Design Principles, Computability</ul>
              <ul class="list-desc-item">Learned languages such as Java and JavaScript, technologies such as HTML and CSS, and how to create git repositories and contribute to them.</ul>
            </div>
          </div>
        </div>

        <div class="timeline-container left"> 
          <div class="timeline-list-item">
            <div class="timeline-list-date">
              <h5>June 2018 - Present</h5>
            </div>
            <div class="timeline-list-desc">
              <p class="companyName">BSA</p>
              <p class="company-title">Eagle Scout</p>
              <ul class="list-desc-item">Achieved the highest rank in Scouts BSA. Educated scouts to achieve higher scouting ranks during weekly meetings and improve their skills.
                Guided and mentored three scouts to successfully attain the rank of Eagle Scout. Helped plan community service projects to aid the community and outdoor activities to 
                create a fun and informative environment for the scouts to learn.</ul>
            </div>
          </div>
        </div>      
    </div>
  </div>
  <div class="endOfArrow"></div>
</div>
</template>

<style src="./AboutView.css"></style>