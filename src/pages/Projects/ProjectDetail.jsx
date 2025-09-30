import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../CSS/Pages/ProjectDetails.css";

import aImg from "../../Images/Projects/a.jpg";
import bImg from "../../Images/Projects/b.jpg";
import cImg from "../../Images/Projects/c.jpg";
import dImg from "../../Images/Projects/d.jpg";

import iws from "../../Images/Projects/iws.jpg"
import iws1 from "../../Images/Projects/iws1.jpg"
import iws2 from "../../Images/Projects/iws2.jpg"
import iws3 from "../../Images/Projects/iws3.jpg"

import temp1 from "../../Images/Projects/TEMP1.jpg"
import temp2 from "../../Images/Projects/TEMP2.jpg"
import temp3 from "../../Images/Projects/TEMP3.jpg"
import temp from "../../Images/Projects/TEMP.jpg"

import tce1 from "../../Images/Projects/TCE1.jpg"
import tce2 from "../../Images/Projects/TCE2.jpg"
import tce3 from "../../Images/Projects/TCE3.jpg"

import pcb1 from "../../Images/Projects/pcb1.jpg"
import pcb2 from "../../Images/Projects/pcb2.jpg"
import pcb3 from "../../Images/Projects/pcb3.jpg"

import dp1 from "../../Images/Projects/dp1.jpg"
import dp2 from "../../Images/Projects/dp2.jpg"
import dp3 from "../../Images/Projects/dp3.jpg"

import wd1 from "../../Images/Projects/wd1.jpg"
import wd2 from "../../Images/Projects/wd2.jpg"
import wd3 from "../../Images/Projects/wd3.jpg"

import ba1 from "../../Images/Projects/ba1.jpg"
import ba2 from "../../Images/Projects/ba2.jpg"
import ba3 from "../../Images/Projects/ba3.jpg"

import mld1 from "../../Images/Projects/mld1.jpg"
import mld2 from "../../Images/Projects/mld2.jpg"
import mld3 from "../../Images/Projects/mld3.jpg"

import stp1 from "../../Images/Projects/stp1.jpg"
import stp2 from "../../Images/Projects/stp2.jpg"
import stp3 from "../../Images/Projects/stp3.jpg"






const projectData = {
  1: {
    title: "Integrated Water Supply Projects – Maldives",
    client: "MM Infra Projects, Chennai",
    location: "Maldives",
    status: "Completed",
    value: "Confidential",
    duration: "N/A",
    sector: "Water Solutions",
    img: iws,
    description:
      "Pretender services for bidding of 6 desalination plants in Maldives. AECON Infra provided consultancy ensuring optimized design, compliance with international standards, and economic project execution.",
    highlights: [
      { title: "Scope", text: "Pretender services for 6 desalination plants." },
      { title: "Sustainability", text: "Designed with energy-efficient RO systems." },
      { title: "Impact", text: "Improved potable water supply across island communities." },
    ],
    gallery: [iws1, iws2, iws3],
  },
  2: {
    title: "Water Supply (6 Islands) – Maldives",
    client: "MM Infra Projects, Chennai",
    location: "Maldives",
    status: "Completed",
    value: "Confidential",
    duration: "N/A",
    sector: "Water Infrastructure",
    img: iws3,
    description:
      "Project Management Consultancy for execution of integrated water supply systems across 6 islands in Maldives. Services covered post-tender stage supervision, coordination, and technical guidance.",
    highlights: [
      { title: "Scope", text: "Post-tender PMC services for water distribution." },
      { title: "Execution", text: "Ensured quality construction and timely delivery." },
      { title: "Community Benefit", text: "Secured sustainable water access for multiple islands." },
    ],
    gallery: [iws3, iws2, iws1],
  },
  3: {
    title: "Treated Effluent Marine Piping – Ennore Creek",
    client: "Sattva Engineering Const Pvt Ltd, Chennai",
    location: "Ennore, Chennai",
    status: "Completed",
    value: "Part of 45 MLD TTRO Project",
    duration: "18 Months",
    sector: "Marine Infrastructure",
    img: temp2,
    description:
      "Comprehensive consultancy from concept to commissioning for treated effluent marine outfall piping at Ennore Creek. Key part of the 45 MLD TTRO Project of CMWSSB.",
    highlights: [
      { title: "Scope", text: "End-to-end consultancy covering design to commissioning." },
      { title: "Engineering", text: "Marine piping designed for long-term resilience." },
      { title: "Impact", text: "Supports wastewater reuse and environmental compliance." },
    ],
    gallery: [temp1, temp,temp3],
  },
  4: {
    title: "Trenchless Crossings – Ennore",
    client: "Sattva Engineering Const Pvt Ltd, Chennai",
    location: "Ennore, Chennai",
    status: "Completed",
    value: "Part of 45 MLD TTRO Project",
    duration: "12 Months",
    sector: "Civil Infrastructure",
    img: tce3,
    description:
      "Executed 3 trenchless crossings using BOR-IT Auger Boring technology. A critical element of the TTRO Project enabling non-disruptive infrastructure implementation.",
    highlights: [
      { title: "Innovation", text: "Adopted trenchless BOR-IT auger boring for crossings." },
      { title: "Efficiency", text: "Completed with minimal environmental disturbance." },
      { title: "Scope", text: "Enabled seamless effluent transport across key zones." },
    ],
    gallery: [tce1,tce2,tce3],
  },
  5: {
    title: "PCB Construction – Buckingham Canal",
    client: "Sattva Engineering Const Pvt Ltd, Chennai",
    location: "Chennai",
    status: "Completed",
    value: "Part of 45 MLD TTRO Project",
    duration: "N/A",
    sector: "Water Infrastructure",
    img: pcb1,
    description:
      "Constructed two pumping stations along Buckingham Canal as part of the TTRO project for CMWSSB. Designed with robust civil structures and efficient pumping systems.",
    highlights: [
      { title: "Scope", text: "Construction of 2 pumping stations." },
      { title: "Design", text: "Optimized hydraulic efficiency and durability." },
      { title: "Outcome", text: "Key infrastructure supporting treated wastewater transport." },
    ],
    gallery: [pcb1,pcb3,pcb2],
  },
  6: {
    title: "3x6.25 MLD SWRO Desalination Plant – Kakinada",
    client: "Aurobindo Pharma Ltd, Hyderabad",
    location: "Kakinada, Andhra Pradesh",
    status: "Ongoing",
    value: "Confidential",
    duration: "N/A",
    sector: "Water Solutions",
    img: dp1,
    description:
      "Project Management Consultancy for offshore and civil works of a 3x6.25 MLD seawater reverse osmosis desalination plant at AV Nagaram, Kakinada. Commissioning in progress.",
    highlights: [
      { title: "Technology", text: "Advanced SWRO with high recovery design." },
      { title: "Execution", text: "PMC services covering offshore & civil works." },
      { title: "Progress", text: "Commissioning works underway." },
    ],
    gallery: [dp2,dp3,dp1],
  },
  7: {
    title: "Water Distribution Network – Thiruvarur & Karur",
    client: "Transtroy India Ltd, Chennai",
    location: "Tamil Nadu",
    status: "Ongoing",
    value: "Confidential",
    duration: "N/A",
    sector: "Urban Infrastructure",
    img: wd1,
    description:
      "PMC Services for TWAD Board water distribution network projects in Thiruvarur and Karur. Procurement progress at 70% and construction at 38%.",
    highlights: [
      { title: "Scope", text: "PMC for water supply distribution networks." },
      { title: "Progress", text: "Procurement at 70%, construction at 38%." },
      { title: "Outcome", text: "Enhanced potable water delivery to urban populations." },
    ],
    gallery: [wd2,wd1,wd3],
  },
  8: {
    title: "Bhama Ashkhed Rising Main Project – PCMC",
    client: "T&T Infra Ltd, Pune",
    location: "Pune, Maharashtra",
    status: "Ongoing",
    value: "Confidential",
    duration: "N/A",
    sector: "Water Supply",
    img: ba1,
    description:
      "Pretender and post-tender support for Bhama Ashkhed Rising Main Project. Execution includes sheet pile coffer dam construction for robust water conveyance.",
    highlights: [
      { title: "Scope", text: "Pretender & post-tender consultancy support." },
      { title: "Engineering", text: "Sheet pile coffer dam constructed for water intake." },
      { title: "Progress", text: "Execution in progress." },
    ],
    gallery: [ba2,ba3,ba1],
  },
  9: {
    title: "80 MLD STP Project – Tamil Nadu",
    client: "Gondwana Engineers Ltd, Nagpur",
    location: "Tamil Nadu",
    status: "Ongoing",
    value: "Confidential",
    duration: "N/A",
    sector: "Wastewater Treatment",
    img: mld1,
    description:
      "80 MLD sewage treatment plant under execution in Tamil Nadu. Pretender support and consultancy provided, with infiltration well blasting currently in progress.",
    highlights: [
      { title: "Scope", text: "Pretender consultancy & execution support." },
      { title: "Progress", text: "Infiltration well blasting underway." },
      { title: "Impact", text: "Strengthens wastewater treatment capacity in Tamil Nadu." },
    ],
    gallery: [mld1,mld2,mld3],
  },
  10: {
    title: "127 MLD STP Civil Works – Pune",
    client: "Gnanam Engineering, Chennai (for Toshiba Water Ltd)",
    location: "Pune, Maharashtra",
    status: "Ongoing",
    value: "Confidential",
    duration: "N/A",
    sector: "Wastewater Infrastructure",
    img: stp1,
    description:
      "Consultancy for execution support of 127 MLD sewage treatment plant civil works in Pune. Focused on structural design efficiency and timely execution.",
    highlights: [
      { title: "Scope", text: "Execution support for civil works." },
      { title: "Capacity", text: "127 MLD sewage treatment plant." },
      { title: "Impact", text: "Enhances urban wastewater treatment infrastructure." },
    ],
    gallery: [stp2,stp1,stp3],
  },
  11: {
    title: "15 MLD SWRO Desalination Plants – Prefeasibility",
    client: "Hindustan Coca Cola Beverages",
    location: "India (Coastal)",
    status: "Ongoing",
    value: "Confidential",
    duration: "N/A",
    sector: "Water Solutions",
    img: wd2,
    description:
      "Prefeasibility study for 15 MLD SWRO desalination plants across coastal India. Includes seawater intake and outfall studies, site analysis, and environmental feasibility.",
    highlights: [
      { title: "Scope", text: "Prefeasibility for multiple SWRO desal plants." },
      { title: "Studies", text: "Seawater intake and outfall environmental studies." },
      { title: "Client", text: "Hindustan Coca Cola Beverages." },
    ],
    gallery: [iws, dp1,stp1],
  },
};


const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!project) return <h2 style={{ textAlign: "center" }}>Project not found</h2>;

  return (
    <div className="project-detail-page">
      {/* Hero Banner */}
      <div
        className="project-detail-hero"
        style={{ backgroundImage: `url(${project.img})` }}
      >
        <div className="overlay" data-aos="fade-up">
          <h1>{project.title}</h1>
          <p>Delivering excellence in {project.sector}</p>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="project-detail-overview" data-aos="fade-up">
        <div>
          <strong>Client:</strong> {project.client}
        </div>
        <div>
          <strong>Location:</strong> {project.location}
        </div>
        <div>
          <strong>Status:</strong> {project.status}
        </div>
        <div>
          <strong>Value:</strong> {project.value}
        </div>
        <div>
          <strong>Duration:</strong> {project.duration}
        </div>
        <div>
          <strong>Sector:</strong> {project.sector}
        </div>
      </div>

      {/* About Section */}
      <div className="project-detail-about" data-aos="fade-up">
        <h2>About this Project</h2>
        <p>{project.description}</p>
      </div>

      {/* Key Highlights */}
      <div className="project-detail-highlights">
        <h2 data-aos="fade-up">Key Highlights</h2>
        <div className="highlights-grid">
          {project.highlights.map((h, i) => (
            <div className="highlight-box" key={i} data-aos="zoom-in" data-aos-delay={i * 150}>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="project-detail-gallery">
        <h2 data-aos="fade-up">Project Gallery</h2>
        <div className="gallery-grid">
          {project.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} ${i}`}
              data-aos="fade-up"
              data-aos-delay={i * 200}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="project-detail-cta" data-aos="fade-up">
        <h2>Partner with AECON Infra Solutions</h2>
        <p>
          We deliver sustainable, reliable, and innovative infrastructure solutions tailored to your needs.
        </p>
        <Link to="/contact">Start Your Project</Link>
      </div>

      {/* Back Button */}
      <div className="project-detail-back">
        <Link to="/projects">← Back to Projects</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
