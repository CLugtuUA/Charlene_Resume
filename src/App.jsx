import React from "react";



const sampleData = {
  profileText:
    "Motivated and adaptable professional with experience in customer service, online teaching, and clinic assistance. Skilled in communication, problem-solving, and building strong client relationships. Committed to delivering quality support and continuous personal growth.",
  contact: {
    address: "City of Minalin",
    phone: "+63 935 465 2103",
    email: "sivougastrell@gmail.com",
  },
  education: [
    {
      degree: "Senior High School",
      school: "Our Lady of Fatima University - San Fernando, Pampanga",
    },
    {
      degree: "Bachelor of Science: Information Technology",
      school: "University of the Assumption - San Fernando, Pampanga",
    },

  ],
  skills: [
    "Strong customer service and client relations",
    "Effective oral and written communication",
    "Online teaching and tutoring experience",
    "Problem-solving and conflict resolution",
    "Multitasking and time management",
  ],
  experience: [
    {
      years: "2022",
      title: "Customer Service Representative",
      company: "Concentrix",
      bullets: [
        "Assisted customers with account inquiries, service requests, and issue resolution.",
        "Maintained high customer satisfaction through professional communication.",
        "Handled high-volume calls while meeting performance metrics.",
      ],
    },
    {
      years: "2021 - 2022",
      title: "ESL Tutor",
      company: "Weblio",
      bullets: [
        "Conducted online English lessons for Japanese learners of varying levels.",
        "Designed engaging lessons tailored to student needs and language goals.",
        "Provided constructive feedback to improve speaking, grammar, and vocabulary.",
      ],
    },
    {
      years: "2023",
      title: "Clinic Assistant",
      company: "Petwell Veterinary Clinic – Magalang, Pampanga",
      bullets: [
        "Assisted veterinarians with routine procedures and pet care.",
        "Managed client communication and appointment scheduling.",
      ],
    },
  ],
};

export default function App() {
  return (
    <div className="resume-root">
      {/* Embedded CSS so all styling is in this file */}
      <style>{css}</style>

      <div className="resume">
        <LeftSidebar />
        <RightContent />
      </div>
    </div>
  );

  /* ---------- Local components inside this file ---------- */

  function LeftSidebar() {
    return (
      <aside className="left-col">
        <div className="photo-wrap">
          {/* Save your photo to public/profile.jpg OR change the path */}
          <img
            src={"/profile.jpg"}
            alt="profile"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://via.placeholder.com/140x170.png?text=Photo";
            }}
          />
        </div>

        <div className="name-block">
          <div className="name-first">Charlene</div>
          <div className="name-last">Lugtu</div>
        </div>

        <div className="sidebar-section">
          <h3 className="section-title">Contact</h3>
          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-label">Address</div>
              <div className="contact-value">{sampleData.contact.address}</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Phone</div>
              <div className="contact-value">{sampleData.contact.phone}</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">E-mail</div>
              <div className="contact-value">{sampleData.contact.email}</div>
            </div>
          </div>
        </div>

        <div className="sidebar-section last">
          <h3 className="section-title">Skills</h3>
          <ul className="skills-list">
            {sampleData.skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }

  function RightContent() {
    return (
      <main className="right-col">
        <section className="profile-intro">
          <p>{sampleData.profileText}</p>
        </section>

        <section className="section-block">
          <SectionHeader title="Education" />
          <div className="education-list">
            {sampleData.education.map((ed, i) => (
              <div className="edu-entry" key={i}>
                <div className="edu-years">{ed.years || ""}</div> {/* keeps column structure */}
                <div className="edu-body">
                  <div className="edu-title">{ed.degree}</div>
                  <div className="edu-school">{ed.school}</div>
                </div>
              </div>

            ))}
          </div>
        </section>

        <section className="section-block">
          <SectionHeader title="Experience" />
          <div className="experience-list">
            {sampleData.experience.map((job, idx) => (
              <JobEntry key={idx} job={job} />
            ))}
          </div>
        </section>
      </main>
    );
  }

  function SectionHeader({ title }) {
    return <h2 className="section-heading">{title}</h2>;
  }

  function JobEntry({ job }) {
    return (
      <div className="job-entry">
        <div className="job-year">{job.years}</div>
        <div className="job-body">
          <div className="job-title">{job.title}</div>
          <div className="job-company">{job.company}</div>
          <ul className="job-bullets">
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

/* ---------- CSS string (kept as a JS constant) ---------- */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

* { box-sizing: border-box; }
:root {
  --sidebar: #084d72;
  --accent: #2f80b6;
  --muted: #6b7280;
  --maxwidth: 980px;
}

body, html, #root {
  height: 100%;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f3f6f8;
}

.resume {
  max-width: var(--maxwidth);
  margin: 28px auto;
  display: flex;
  box-shadow: 0 6px 18px rgba(12, 22, 33, 0.12);
  background: white;
  border-radius: 2px;
  overflow: hidden;
}

/* Left column */
.left-col {
  width: 300px;
  background: var(--sidebar);
  color: #fff;
  padding: 30px 26px;
  display: flex;
  flex-direction: column;
}

.photo-wrap {
  width: 240px;
  height: 250px;
  overflow: hidden;
  border-radius: 2px;
  background: #fff;
  margin-bottom: 14px;
}
.photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 2px;
}

.name-block {
  margin-bottom: 24px;
}
.name-first,
.name-last {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
}

.sidebar-section {
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 18px;
}
  
.sidebar-section.last {
  margin-top: 18px;
}

.section-title {
  font-size: 25px;
  font-weight: 700;
  color: #fff;
  background: rgba(0, 0, 0, 0.25); /* dark bar */
  padding: 8px 18px;
  margin: 14px -26px 10px -26px; /* stretch to edges of sidebar */
  border-radius: 0; /* no rounding so it looks like a bar */
  letter-spacing: 1px;
}



.contact-list {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.4;
}
.contact-item {
  margin-bottom: 18px;
}
.contact-label {
  font-size: 18px;
  color: #cfe7ff;
}
.contact-value {
  font-size: 18px;
  margin-top: 2px;
}

.skills-list {
  list-style: none;
  padding-left: 0;
  margin: 6px 0 20px 0;
  font-size: 18px;
  line-height: 1.5;
}
.skills-list li {
  margin-bottom: 8px;
  padding-left: 12px;
  position: relative;
}
.skills-list li:before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  color: #e6f3ff;
  font-weight: 700;
}

/* Right column */
.right-col {
  flex: 1;
  padding: 32px 40px;
  background: #fff;
  color: #042029;
  min-width: 0;
}

.profile-intro p {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 18px;
  line-height: 1.6;
}

.section-heading {
  color: #084d72;
  font-size: 30px;
  margin: 20px 0 14px 0;
  padding-bottom: 8px;
  border-top: 2px solid #e6eef2;
  border-bottom: 2px solid #e6eef2;
}

.education-list {
  margin-top: 10px;
}

.edu-entry {
  display: grid;
  grid-template-columns: 110px 1fr; /* same as job entries */
  gap: 18px;
  padding: 14px 0;
  border-bottom: 1px solid #eef3f5;
  align-items: start;
}

.edu-years {
  /* keep for alignment, even if empty */
  font-size: 18px;
  color: #9aa4ad;
}

.edu-body {
  font-size: 18px;
  color: #222;
}

.edu-title {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 25px;
}

.edu-school {
  font-size: 18px;
  color: var(--muted);
  font-style: italic;
}



.experience-list {
  margin-top: 10px;
}
.job-entry {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 20px;
  padding: 14px 0;
  border-bottom: 1px solid #eef3f5;
  align-items: start;
}
.job-year {
  font-size: 18px;
  color: #9aa4ad;
}
.job-body {
  font-size: 18px;
  color: #222;
}
.job-title {
  font-weight: 700;
  margin-bottom: 4px;
  font-size: 25px;
}
.job-company {
  font-style: italic;
  font-size: 18px;
  color: var(--muted);
  margin-bottom: 8px;
}
.job-bullets {
  margin: 0;
  padding-left: 18px;
  color: #333;
}
.job-bullets li {
  margin-bottom: 6px;
  font-size: 18px;
  line-height: 1.45;
}

@media (max-width: 880px) {
  .resume {
    flex-direction: column;
    margin: 12px;
  }
  .left-col {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    gap: 14px;
    padding: 18px;
  }
  .photo-wrap {
    width: 100px;
    height: 120px;
  }
  .name-block {
    text-align: left;
  }
  .right-col {
    padding: 20px;
  }
  .job-entry {
    grid-template-columns: 90px 1fr;
    gap: 12px;
  }
}
`;
