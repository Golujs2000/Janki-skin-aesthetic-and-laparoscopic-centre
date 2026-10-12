export const treatmentsData = [
  // ==========================================
  // LAPAROSCOPIC SURGERIES (DR. S. SAGAR)
  // ==========================================
  {
    id: "laparoscopic-cholecystectomy",
    department: "laparoscopic",
    departmentName: "Laparoscopic & Keyhole Surgery",
    title: "Laparoscopic Cholecystectomy",
    subtitle: "दूरबीन द्वारा पित्त की थैली की पथरी का सुरक्षित ऑपरेशन",
    badge: "Laparoscopic Surgery",
    badgeTheme: "teal",
    thumb: "/assets/thumb-laparoscopic-cholecystectomy.jpg",
    poster: "/assets/poster-laparoscopy-cholecystectomy.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. S. Sagar",
    docDegree: "MBBS, MS (General Surgery), FIAGES",
    docRole: "Assistant Professor & Specialist Laparoscopic Surgeon",
    docPhoto: "/assets/dr-sagar.jpg",
    docPhone: "+917909067784",
    icon: "ShieldAlert",
    duration: "45 – 60 Minutes",
    anesthesia: "General Anesthesia (Completely Pain-Free)",
    hospitalStay: "24 – 48 Hours Rapid Discharge",
    recoveryTime: "5 – 7 Days Return to Work",
    desc: "Advanced minimally invasive surgical removal of gallbladder stones (पित्ताशय की पथरी) using high-definition 4K laparoscopes through 3-4 miniature keyhole incisions.",
    overview: `Laparoscopic Cholecystectomy is the internationally recognized gold-standard surgical treatment for symptomatic gallstones (Cholelithiasis), gallbladder inflammation (Cholecystitis), and biliary colic. Under the expert leadership of Dr. S. Sagar (MS Gen Surgery, FIAGES), our centre utilizes ultra-precision 4K laparoscopic imaging to safely mobilize and excise the diseased gallbladder without dividing major abdominal muscles.

Unlike traditional open cholecystectomy which demanded a painful 15–20 cm incision across the right upper abdomen, laparoscopic surgery is performed through miniature 0.5 to 1 cm keyhole ports. This dramatically preserves structural abdominal wall integrity, reduces postoperative pain, ensures near-zero blood loss, and enables patients to mobilize on the same evening of surgery.`,
    indications: [
      "Ultrasound-confirmed single or multiple stones in gallbladder (Cholelithiasis)",
      "Recurrent severe upper-right or central abdominal colic pain radiating to back or shoulder",
      "Acute or chronic cholecystitis (gallbladder wall thickening & inflammation)",
      "Gallbladder polyps greater than 5-10 mm or biliary dyskinesia"
    ],
    benefits: [
      "Tiny 0.5 to 1 cm keyhole incisions (न के बराबर निशान)",
      "Discharge in 24 to 48 hours (त्वरित डिस्चार्ज)",
      "Negligible pain and vastly reduced analgesic dependence",
      "Near-zero wound infection or incisional hernia complications",
      "Early resumption of oral nutrition and walking within hours",
      "Swift return to occupational duties within 5 to 7 days"
    ],
    procedureSteps: [
      {
        step: "Pre-Operative Assessment",
        detail: "Comprehensive high-resolution ultrasound evaluation, liver function panels, viral markers, and pre-anesthetic clearance."
      },
      {
        step: "Keyhole Access & Pneumoperitoneum",
        detail: "Creation of gentle carbon dioxide pneumoperitoneum and insertion of 3 to 4 tiny (5mm - 10mm) trocars into the abdominal cavity."
      },
      {
        step: "4K Laparoscopic Dissection",
        detail: "High-definition visual dissection of the Calot's triangle, critical view of safety (CVS) identification, and titanium clipping of the cystic duct and artery."
      },
      {
        step: "Safe Retrieval & Plastic Closure",
        detail: "Gallbladder extraction inside a sterile retrieval endobag followed by fine sub-cuticular cosmetic closure with zero visible exterior sutures."
      }
    ],
    recovery: {
      sameDay: "Patient drinks oral fluids and begins walking comfortably within 6 to 8 hours post-procedure.",
      dayTwo: "Discharge from hospital with oral medications and dietary counseling.",
      weekOne: "Complete resumption of light domestic chores, office work, and normal non-greasy home meals.",
      weekTwo: "Full unrestricted physical recovery and routine lifestyle resumption."
    },
    faqs: [
      {
        q: "Can gallstones be dissolved with medicines or dietary changes?",
        a: "No scientific medical therapy successfully dissolves calcified or cholesterol gallstones permanently. Attempting to delay treatment frequently leads to dangerous complications such as jaundice, bile duct obstruction (choledocholithiasis), or acute pancreatitis. Surgical keyhole removal is the only permanent, safe cure."
      },
      {
        q: "Will removing my gallbladder affect my digestion?",
        a: "The liver produces bile; the gallbladder only stores and concentrates it. Once removed, bile flows directly into the small intestine. After a brief 2-3 week adjustment period with low-fat meals, your digestive system functions completely normally."
      },
      {
        q: "How many days will I need to take off from work?",
        a: "Most desk-job professionals and homemakers resume light routines within 5 to 7 days. Strenuous heavy lifting is typically restricted for 3 to 4 weeks."
      }
    ]
  },
  {
    id: "laparoscopic-appendectomy",
    department: "laparoscopic",
    departmentName: "Laparoscopic & Keyhole Surgery",
    title: "Laparoscopic Appendectomy",
    subtitle: "दूरबीन द्वारा अपेंडिक्स (Appendix) का आधुनिक ऑपरेशन",
    badge: "Keyhole Surgery",
    badgeTheme: "teal",
    thumb: "/assets/thumb-laparoscopic-appendectomy.jpg",
    poster: "/assets/poster-laparoscopic-appendectomy.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. S. Sagar",
    docDegree: "MBBS, MS (General Surgery), FIAGES",
    docRole: "Assistant Professor & Specialist Laparoscopic Surgeon",
    docPhoto: "/assets/dr-sagar.jpg",
    docPhone: "+917909067784",
    icon: "Activity",
    duration: "30 – 45 Minutes",
    anesthesia: "General Anesthesia",
    hospitalStay: "24 – 36 Hours Rapid Discharge",
    recoveryTime: "3 – 5 Days Return to Routine",
    desc: "Swift, emergency and elective keyhole appendectomy relieving acute lower right abdominal pain and preventing appendix perforation or peritonitis.",
    overview: `Acute Appendicitis is one of the most common surgical abdominal emergencies. Delaying intervention can result in appendix rupture (perforation), abscess formation, and life-threatening widespread peritonitis. At Janki Centre Forbesganj, Dr. S. Sagar performs prompt 3-port laparoscopic appendectomy around the clock.

Using micro-laparoscopic optics, the entire peritoneal cavity is inspected to rule out other pelvic or intestinal pathologies before securely ligating the inflamed appendix base and removing it atraumatically. Patients benefit from instantaneous relief of excruciating pain, clean cosmetic incisions, and minimal surgical stress.`,
    indications: [
      "Severe sharp pain starting near the navel and shifting to the lower right abdomen (McBurney's point)",
      "High fever, persistent nausea, vomiting, and loss of appetite",
      "Elevated white blood cell count (leukocytosis) and tenderness on clinical examination",
      "Ultrasound or CT confirmation of acute appendicitis or recurrent chronic appendicular colic"
    ],
    benefits: [
      "Immediate permanent relief from excruciating abdominal pain",
      "Drastically reduced surgical site infection compared to traditional open appendectomy",
      "Complete exploration of the entire abdominal cavity to detect hidden pelvic conditions",
      "Near-invisible tiny cosmetic puncture marks with sub-cuticular closure",
      "Discharge within 24 hours in uncomplicated cases"
    ],
    procedureSteps: [
      {
        step: "Emergency Clinical Evaluation",
        detail: "Rapid physical checkup, abdominal ultrasound, emergency laboratory workup, and IV fluid stabilization."
      },
      {
        step: "Laparoscopic Entry",
        detail: "Insertion of 3 micro-ports (one 10mm umbilical port and two 5mm accessory working ports)."
      },
      {
        step: "Mesoappendix Ligation & Excision",
        detail: "Cauterization and division of the mesoappendix artery followed by secure ligation of the appendix base using endoloops."
      },
      {
        step: "Pelvic Toilet & Wash",
        detail: "Thorough sterile saline lavage of the pelvic and right iliac fossa region ensuring zero residual contamination."
      }
    ],
    recovery: {
      sameDay: "Relief of acute colic, mobilization within 4 to 6 hours.",
      dayTwo: "Discharge home on oral antibiotics and soft diet.",
      weekOne: "Full return to normal daily routine, schooling, or professional work."
    },
    faqs: [
      {
        q: "What happens if appendicitis surgery is delayed?",
        a: "An inflamed appendix can burst within 24 to 72 hours of symptom onset, spilling infected pus throughout the abdominal cavity (peritonitis). This converts a straightforward 30-minute keyhole surgery into an extensive emergency."
      },
      {
        q: "Can appendicitis be cured with antibiotics alone without surgery?",
        a: "While antibiotics may temporarily calm symptoms, recurrences occur in over 70% of cases, often with increased severity. Laparoscopic surgery offers a definitive, permanent 100% cure."
      }
    ]
  },
  {
    id: "laparoscopic-hernia",
    department: "laparoscopic",
    departmentName: "Laparoscopic & Keyhole Surgery",
    title: "Laparoscopic Hernia Repair",
    subtitle: "दूरबीन विधि द्वारा 3D मेश जाली प्रत्यारोपण (TAPP / TEP)",
    badge: "3D Mesh Repair",
    badgeTheme: "teal",
    thumb: "/assets/thumb-laparoscopic-hernia.jpg",
    poster: "/assets/thumb-laparoscopic-hernia.jpg",
    posterLabel: "View 3D Mesh Visual",
    doctor: "Dr. S. Sagar",
    docDegree: "MBBS, MS (General Surgery), FIAGES",
    docRole: "Assistant Professor & Specialist Laparoscopic Surgeon",
    docPhoto: "/assets/dr-sagar.jpg",
    docPhone: "+917909067784",
    icon: "Layers",
    duration: "45 – 75 Minutes",
    anesthesia: "General Anesthesia",
    hospitalStay: "24 – 48 Hours Discharge",
    recoveryTime: "5 – 7 Days Routine Activity",
    desc: "TAPP & TEP laparoscopic repair of inguinal, umbilical, epigastric, and incisional hernias reinforced with medical-grade anatomical 3D prostheses.",
    overview: `A hernia occurs when internal abdominal contents (such as fat or intestine) push through a weakened area in the muscular abdominal wall, creating a visible bulge and persistent dragging ache. Unlike open surgery where muscles are pulled tight under tension with painful stitching, Dr. S. Sagar specializes in advanced tension-free laparoscopic hernia repair (TEP and TAPP techniques).

In this procedure, a biological or synthetic 3D contoured polypropylene mesh is positioned from the inside of the abdominal wall—the natural direction of intra-abdominal pressure. This architectural reinforcement drastically lowers recurrence rates while eliminating the severe nerve entrapment pain associated with large open incisions.`,
    indications: [
      "Bulge in the groin (Inguinal hernia) or near the belly button (Umbilical hernia)",
      "Bulge at previous surgical scar sites (Incisional hernia)",
      "Dragging sensation, dull ache, or sharp pain aggravated by coughing, bending, or heavy lifting",
      "Risk of strangulation or bowel obstruction where the bulge fails to reduce"
    ],
    benefits: [
      "Tension-free 3D anatomical mesh reinforcement from behind the defect",
      "Negligible recurrence rate compared to conventional open stitching repairs",
      "Zero large abdominal cuts or painful muscle severance",
      "Simultaneous repair of bilateral (both sides) groin hernias through the same 3 ports",
      "Rapid painless walking on the same day"
    ],
    procedureSteps: [
      {
        step: "Precision Port Placement",
        detail: "Placement of 3 sub-umbilical ports creating pre-peritoneal working space without entering the peritoneal cavity in TEP."
      },
      {
        step: "Hernial Sac Reduction",
        detail: "Delicate dissection separating the peritoneal sac and spermatic cord structures without nerve injury."
      },
      {
        step: "3D Anatomical Mesh Implantation",
        detail: "Placement and unrolling of a wide-coverage 3D polypropylene mesh covering all three potential groin weakness orifices (Direct, Indirect, Femoral)."
      },
      {
        step: "Desufflation & Sealing",
        detail: "Careful desufflation trapping the mesh securely against the muscular wall without tension."
      }
    ],
    recovery: {
      sameDay: "Walking and taking normal fluids within hours.",
      dayTwo: "Discharge with minimal analgesic requirements.",
      weekOne: "Driving, office work, and routine domestic chores resumed.",
      monthOne: "Unrestricted athletic exercise and heavy weight lifting permitted."
    },
    faqs: [
      {
        q: "Why is laparoscopic hernia repair superior to open mesh repair?",
        a: "Laparoscopic placement puts the mesh on the inside of the abdominal wall, meaning internal pressure pushes the mesh tighter against the defect rather than pushing it away. Additionally, avoiding large groin incisions virtually eliminates chronic groin nerve pain (neuralgia)."
      },
      {
        q: "Can both sides (bilateral hernia) be fixed in one sitting?",
        a: "Yes! With laparoscopy, both right and left groin hernias are repaired through the exact same 3 miniature keyholes without needing two separate painful open cuts."
      }
    ]
  },
  {
    id: "laparoscopic-cystectomy",
    department: "laparoscopic",
    departmentName: "Laparoscopic & Keyhole Surgery",
    title: "Laparoscopic Cystectomy",
    subtitle: "दूरबीन द्वारा अंडाशय की गांठ (Ovarian Cyst) का इलाज",
    badge: "Ovarian Cyst Care",
    badgeTheme: "teal",
    thumb: "/assets/thumb-laparoscopic-cystectomy.jpg",
    poster: "/assets/poster-laparoscopy-cystectomy.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. S. Sagar",
    docDegree: "MBBS, MS (General Surgery), FIAGES",
    docRole: "Assistant Professor & Specialist Laparoscopic Surgeon",
    docPhoto: "/assets/dr-sagar.jpg",
    docPhone: "+917909067784",
    icon: "HeartPulse",
    duration: "45 – 60 Minutes",
    anesthesia: "General Anesthesia",
    hospitalStay: "24 – 36 Hours Discharge",
    recoveryTime: "5 – 7 Days Full Recovery",
    desc: "Minimally invasive excision of ovarian cysts and benign pelvic masses preserving ovarian tissue reserves, reproductive fertility, and hormonal balance.",
    overview: `Ovarian cysts (chocolate cysts/endometriomas, dermoid cysts, serous cystadenomas) are common benign fluid-filled sacs in women of reproductive and postmenopausal age. In young women, preserving healthy ovarian tissue and future fertility is paramount.

Dr. S. Sagar performs delicate fertility-preserving laparoscopic ovarian cystectomy. Under high-definition magnification, the cyst capsule is stripped precisely without damaging the surrounding follicular bed, and without causing extensive pelvic adhesions that could compromise fallopian tube mobility.`,
    indications: [
      "Persistent ovarian cyst exceeding 5 cm on pelvic ultrasound or MRI",
      "Complex, dermoid (mature teratoma), or endometriotic chocolate cysts",
      "Chronic lower abdominal or pelvic pain, painful menstrual cycles, or dyspareunia",
      "Risk of cyst torsion (twisting of ovary cutting off blood supply) or rupture"
    ],
    benefits: [
      "Maximum conservation of primordial ovarian follicles & natural fertility",
      "Micro-laparoscopic dissection preventing fallopian tube scar tissue",
      "Virtually invisible 0.5 cm cosmetic puncture marks",
      "Same-day or 24-hour discharge with minimal surgical pain",
      "Complete histopathological examination to rule out malignancy"
    ],
    procedureSteps: [
      {
        step: "Pelvic Visualization",
        detail: "Careful camera inspection of ovaries, uterus, and pelvic peritoneum under 4K magnification."
      },
      {
        step: "Cyst Enucleation",
        detail: "Fine incision of the ovarian cortex and gentle dissection planes stripping the cyst capsule intact."
      },
      {
        step: "Endobag Extraction",
        detail: "Placement of cyst inside a sterile impermeable endobag to prevent intra-abdominal spillage."
      },
      {
        step: "Ovarian Reconstruction",
        detail: "Hemostatic control with bipolar energy and reconstruction of the ovary preserving ovarian blood flow."
      }
    ],
    recovery: {
      sameDay: "Oral liquids and comfortable walking within hours.",
      dayTwo: "Discharge with gentle pain relievers.",
      weekOne: "Normal domestic activities and regular routine resumed."
    },
    faqs: [
      {
        q: "Will this surgery affect my chances of getting pregnant in the future?",
        a: "Laparoscopic cystectomy is specifically designed to protect your fertility. By carefully shelling out only the cyst wall and preserving the normal ovarian cortex, your ovarian egg reserve and fallopian tubes are safeguarded."
      },
      {
        q: "What is an ovarian cyst torsion emergency?",
        a: "When a large cyst twists on its stem, blood flow to the ovary is blocked, causing acute severe lower abdominal pain and vomiting. Emergency laparoscopy untwists and saves the ovary from necrosis."
      }
    ]
  },
  {
    id: "tubal-ligation",
    department: "laparoscopic",
    departmentName: "Laparoscopic & Keyhole Surgery",
    title: "Bilateral Tubal Ligation",
    subtitle: "दूरबीन द्वारा सुरक्षित एवं दर्द रहित महिला नसबंदी",
    badge: "Keyhole Contraception",
    badgeTheme: "teal",
    thumb: "/assets/thumb-tubal-ligation.jpg",
    poster: "/assets/poster-tubal-ligation.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. S. Sagar",
    docDegree: "MBBS, MS (General Surgery), FIAGES",
    docRole: "Assistant Professor & Specialist Laparoscopic Surgeon",
    docPhoto: "/assets/dr-sagar.jpg",
    docPhone: "+917909067784",
    icon: "ShieldCheck",
    duration: "20 – 30 Minutes",
    anesthesia: "Short General / Sedation",
    hospitalStay: "Same-Day Day-Care Discharge",
    recoveryTime: "2 – 3 Days Gentle Recovery",
    desc: "Gentle day-care laparoscopic female family planning procedure performed through a minute single port with swift discharge.",
    overview: `Bilateral Tubal Ligation is one of the safest and most reliable permanent family planning methods worldwide. Unlike traditional postpartum mini-laparotomy which requires a painful lower abdominal incision, laparoscopic tubal occlusion is performed through a minute keyhole near the umbilicus.

The Fallopian tubes are gently visualized and permanently occluded using medical-grade silastic Falope rings or bipolar electrocoagulation. The procedure takes under 25 minutes, involves virtually zero blood loss, and allows patients to return home comfortably on the same day.`,
    indications: [
      "Women desiring safe, permanent, and irreversible family planning contraception",
      "Completed family size seeking freedom from daily pills or intrauterine devices",
      "Elective day-care interval laparoscopic procedure"
    ],
    benefits: [
      "99.9% reliable, permanent lifetime contraceptive protection",
      "Minute cosmetic keyhole incision that leaves no visible scar",
      "Same-day discharge within 4 to 6 hours after procedure",
      "Does not interfere with natural hormonal balance or regular menstrual periods",
      "Safe, sterile hospital protocol under experienced laparoscopic surgeon"
    ],
    procedureSteps: [
      {
        step: "Pre-Procedure Clearance",
        detail: "Standard pelvic examination, negative pregnancy test verification, and vital health checks."
      },
      {
        step: "Laparoscopic Access",
        detail: "Single small puncture at the lower margin of the navel to insert the operating laparoscope."
      },
      {
        step: "Tubal Occlusion",
        detail: "Identification of the ampullary region of both Fallopian tubes and application of silicone Falope rings."
      },
      {
        step: "Same-Day Discharge",
        detail: "Immediate recovery observation for 3-4 hours followed by walking and discharge home."
      }
    ],
    recovery: {
      sameDay: "Walking and discharge home within 4 to 6 hours.",
      dayTwo: "Comfortable resting at home with routine light domestic tasks.",
      dayFour: "Complete normal resumption of daily activities."
    },
    faqs: [
      {
        q: "Will laparoscopic tubal ligation cause weight gain or hormonal changes?",
        a: "No. The Fallopian tubes only transport eggs from the ovary to the uterus. They produce no hormones. Your ovaries, estrogen, progesterone, and menstrual cycles remain 100% unaffected."
      },
      {
        q: "How soon can I resume daily household work?",
        a: "Most women resume light cooking and walking within 24 to 48 hours, and normal work within 3 to 4 days."
      }
    ]
  },
  {
    id: "general-surgery",
    department: "laparoscopic",
    departmentName: "Laparoscopic & Keyhole Surgery",
    title: "General Surgical Procedures",
    subtitle: "माइनर एवं डे-केयर सर्जिकल प्रोसीजर (चीरा-रहित एवं लेजर)",
    badge: "Minor Procedure Suite",
    badgeTheme: "teal",
    thumb: "/assets/thumb-general-surgery.jpg",
    poster: "/assets/thumb-general-surgery.jpg",
    posterLabel: "View Visual",
    doctor: "Dr. S. Sagar",
    docDegree: "MBBS, MS (General Surgery), FIAGES",
    docRole: "Assistant Professor & Specialist Laparoscopic Surgeon",
    docPhoto: "/assets/dr-sagar.jpg",
    docPhone: "+917909067784",
    icon: "Stethoscope",
    duration: "20 – 45 Minutes",
    anesthesia: "Local / Regional Anesthesia",
    hospitalStay: "Day-Care Outpatient (Zero Overnight Stay)",
    recoveryTime: "1 – 3 Days Swift Healing",
    desc: "Complete spectrum of general surgical conditions: hydrocele, lipoma excision, sebaceous cyst removal, circumcision, abscess drainage, and diabetic wound care.",
    overview: `Our dedicated surgical wing at Janki Centre provides comprehensive day-care and minor surgical procedures performed under strict autoclave-monitored sterile conditions. Dr. S. Sagar brings specialized academic surgical expertise to outpatient cases, ensuring fine plastic closures, minimal scar marks, and painless local anesthesia.

Conditions treated include subcutaneous lipomas, infected and non-infected sebaceous cysts, hydrocele eversion, phimosis circumcision, acute abscess drainage, ingrown toenail matricectomy, and diabetic ulcer debridement.`,
    indications: [
      "Subcutaneous soft tissue lumps (Lipomas, Sebaceous cysts, Epidermoid cysts)",
      "Scrotal fluid swelling (Hydrocele) or testicular varicocele",
      "Tight foreskin (Phimosis) requiring ZSR circumcision or plasty",
      "Skin abscesses, carbuncles, or chronic diabetic foot wounds"
    ],
    benefits: [
      "Dedicated sterile minor operating theater suite with continuous autoclave monitoring",
      "Pain-free modern local anesthesia and electrocautery tissue management",
      "Fine plastic subcuticular suturing minimizing any post-procedure scar",
      "Same-day walking and zero overnight hospital admission required",
      "Comprehensive dressing care and antibiotic protocol"
    ],
    procedureSteps: [
      {
        step: "Pre-Procedure Examination",
        detail: "Clinical palpation, transillumination test, and local ultrasound if needed to evaluate depth."
      },
      {
        step: "Painless Local Block",
        detail: "Administration of buffered local anesthetic ensuring total numbness in the operating zone."
      },
      {
        step: "Complete Capsule Excision",
        detail: "Delicate surgical enucleation ensuring intact removal of cyst walls or lipoma capsules to prevent recurrence."
      },
      {
        step: "Cosmetic Closure",
        detail: "Fine absorbable or monofilament plastic suturing and sterile protective dressing."
      }
    ],
    recovery: {
      sameDay: "Patient walks out of the clinic immediately after the procedure.",
      dayTwo: "First dressing change and resumption of light work.",
      weekOne: "Complete stitch line healing and skin remodeling."
    },
    faqs: [
      {
        q: "Can a lipoma or sebaceous cyst grow back after removal?",
        a: "When the entire outer capsule is completely removed by a qualified surgeon as performed at Janki Centre, recurrence at that exact site is exceptionally rare."
      }
    ]
  },

  // ==========================================
  // AESTHETICS & TRICHOLOGY (DR. RASHMI RAY)
  // ==========================================
  {
    id: "gfc-therapy",
    department: "aesthetic",
    departmentName: "Aesthetics & Trichology",
    title: "GFC Hair & Skin Therapy",
    subtitle: "ग्रोथ फैक्टर कंसन्ट्रेट - प्राकृतिक हेयर रिग्रोथ व त्वचा निखार",
    badge: "Hair & Skin Rejuvenation",
    badgeTheme: "rose",
    thumb: "/assets/thumb-gfc-therapy.jpg",
    poster: "/assets/poster-gfc-treatment.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. Rashmi Ray",
    docDegree: "MBBS, MD (Skin, VD & Leprosy), DNB, MNAMS",
    docRole: "Assistant Professor, Dermatologist & Aesthetician",
    docPhoto: "/assets/dr-rashmi-ray.jpg",
    docPhone: "+917091506123",
    icon: "Sparkles",
    duration: "45 – 60 Minutes",
    anesthesia: "Topical Anesthetic Numbing Cream",
    hospitalStay: "Outpatient Day-Care (Lunchtime Procedure)",
    recoveryTime: "Zero Downtime (Wash Hair After 24 Hrs)",
    desc: "Next-generation autologous Growth Factor Concentrate engineered from your own blood platelets, delivering high concentrations of PDGF, VEGF, and EGF for hair follicle restoration.",
    overview: `Growth Factor Concentrate (GFC) therapy represents the premier dermatological breakthrough in biological hair follicle regeneration and skin anti-aging, superseding conventional PRP (Platelet-Rich Plasma). Administered by Dr. Rashmi Ray (MD, DNB, MNAMS), GFC is a sterile, cell-free biological therapy prepared from the patient's own peripheral blood.

Unlike standard PRP which contains inflammatory red and white blood cells that trigger pain and swelling, GFC isolates purely the beneficial growth factors (Platelet-Derived Growth Factor PDGF, Vascular Endothelial Growth Factor VEGF, Epidermal Growth Factor EGF, and Insulin-like Growth Factor IGF-1) into a crystal-clear golden serum. These bioactive molecules directly nourish miniaturized hair follicles, arrest hair shedding, stimulate active anagen hair regrowth, and boost dermal collagen.`,
    indications: [
      "Androgenetic Alopecia (Male pattern baldness with receding hairline & crown thinning)",
      "Female pattern hair thinning, wide parting lines, and diffuse volume loss",
      "Post-COVID, post-dengue, or stress-induced acute Telogen Effluvium hair shedding",
      "Facial skin dullness, fine lines, loss of dermal elasticity, and hollow under-eye texture"
    ],
    benefits: [
      "300% to 500% higher concentration of pure growth factors than standard PRP",
      "Completely cell-free solution: zero RBC or WBC contamination, negligible pain",
      "Noticeable reduction in hair shedding within 3 to 4 weeks of the initial session",
      "Thickens hair shaft caliber and increases follicular unit hair density",
      "100% autologous and safe: zero risk of allergic reaction or systemic side-effects"
    ],
    procedureSteps: [
      {
        step: "Blood Collection in Specialized Tubes",
        detail: "8–16 ml of patient blood is collected into specialized GFC vacuum tubes containing platelet-activation micro-reagents."
      },
      {
        step: "Controlled Incubation & Centrifugation",
        detail: "30-minute incubation releases growth factors from platelets, followed by high-speed centrifugation to separate the pure GFC serum."
      },
      {
        step: "Scalp Numbing",
        detail: "Application of dermatological cooling or topical anesthetic cream to make the treatment completely comfortable."
      },
      {
        step: "Micro-Injection into Follicles",
        detail: "Targeted delivery of pure golden GFC into thinning scalp areas using ultra-fine 31-gauge microneedles or meso-injectors."
      }
    ],
    recovery: {
      sameDay: "Return to work immediately; mild redness fades within 1 to 2 hours.",
      dayTwo: "Wash hair with regular mild shampoo after 24 hours.",
      monthOne: "Noticeable drop in hair shedding and stabilization of existing follicles.",
      monthThree: "Visible thickening, new baby hair sprouting, and improved scalp coverage."
    },
    faqs: [
      {
        q: "How is GFC different and better than normal PRP?",
        a: "In standard PRP, platelets are injected intact along with red and white blood cells, causing pain, inflammation, and variable results. In GFC, platelets are pre-activated in special tubes to extract ONLY the pure concentrated growth factors into a cell-free serum. It is far less painful, delivers consistent high potency, and requires fewer total sessions."
      },
      {
        q: "How many sessions of GFC are required?",
        a: "A standard clinical protocol consists of 3 to 4 sessions spaced 4 weeks apart. Maintenance sessions once every 6 months preserve optimal follicular density."
      },
      {
        q: "Is GFC painful?",
        a: "Because GFC is cell-free and has a physiological pH, the burning sensation typical of PRP is absent. With topical numbing cream, patients experience only very minor pinpricks."
      }
    ]
  },
  {
    id: "chemical-peeling",
    department: "aesthetic",
    departmentName: "Aesthetics & Trichology",
    title: "Chemical Peeling Glow",
    subtitle: "मेडिकल पीलिंग द्वारा मेलास्मा, पिगमेंटेशन व टैनिंग का खात्मा",
    badge: "Radiant Skin Peeling",
    badgeTheme: "rose",
    thumb: "/assets/thumb-chemical-peel.jpg",
    poster: "/assets/poster-chemical-peel-benefits.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. Rashmi Ray",
    docDegree: "MBBS, MD (Skin, VD & Leprosy), DNB, MNAMS",
    docRole: "Assistant Professor, Dermatologist & Aesthetician",
    docPhoto: "/assets/dr-rashmi-ray.jpg",
    docPhone: "+917091506123",
    icon: "Sun",
    duration: "30 – 45 Minutes",
    anesthesia: "None Needed (Gentle Cooling Post-Peel)",
    hospitalStay: "Outpatient (Zero Hospital Stay)",
    recoveryTime: "1 – 3 Days Gentle Micro-Exfoliation",
    desc: "Clinical application of dermatological alpha & beta hydroxy acids (Glycolic, Salicylic, Lactic, Mandelic) tailored to target stubborn melasma, sun damage, and uneven tone.",
    overview: `Medical Chemical Peeling is a controlled dermatological resurfacing procedure utilizing pharmaceutical-grade organic hydroxy acids to dissolve dead cellular debris, exfoliate hyperpigmented epidermal layers, and stimulate fresh basal cell renewal. Dr. Rashmi Ray custom-selects the peel formulation based on the patient's individual Fitzpatrick skin type and melanin depth.

Peel formulations include Glycolic Acid (for deep sun tan & radiance), Salicylic Acid (for active acne, blackheads & sebum control), Lactic Acid (for dry sensitive skin brightening), Mandelic Acid (for melasma and hyperpigmentation), and Yellow Retinol Peels (for stubborn dark patches and fine lines).`,
    indications: [
      "Stubborn facial melasma (झाइयां), chloasma, and post-pregnancy pigmentation",
      "Sun damage, stubborn facial tanning, and dull, lifeless skin tone",
      "Active acne breakouts, clogged pores, blackheads, and oily congested skin",
      "Post-inflammatory hyperpigmentation (dark marks left after acne or rashes)"
    ],
    benefits: [
      "Visibly fades stubborn melasma and brown discoloration patches",
      "Regulates sebaceous gland oil output and clears recurrent acne lesions",
      "Smooths rough, bumpy skin texture, leaving a silky baby-soft glow",
      "Safe, dermatologically monitored protocols customized for Indian skin",
      "No harsh recovery or downtime: seamless return to daily work"
    ],
    procedureSteps: [
      {
        step: "Skin Priming & Degreasing",
        detail: "Deep cleansing and prep solution applied to eliminate surface lipids and ensure uniform peel penetration."
      },
      {
        step: "Targeted Acid Application",
        detail: "Precise layer-by-layer application of the customized medical peel using specialized fan brushes."
      },
      {
        step: "Timed Neutralization",
        detail: "Close monitoring for erythema endpoints followed by alkaline neutralization and cold compress therapy."
      },
      {
        step: "Post-Peel Hydration & Sun Barrier",
        detail: "Application of calming ceramide balm and broad-spectrum mineral sunscreen."
      }
    ],
    recovery: {
      dayOne: "Instant luminous glow and skin tightness.",
      dayThree: "Subtle, microscopic skin exfoliation; maintain liberal ceramide moisturizing.",
      daySeven: "Reveals smooth, even-toned, luminous fresh epidermal layer."
    },
    faqs: [
      {
        q: "Will my skin visibly peel off in large sheets?",
        a: "No! Modern dermatological lunchtime peels cause only microscopic cellular flaking rather than visible aggressive peeling. You can continue your daily social and work routine without embarrassment."
      },
      {
        q: "What precautions should I take after a chemical peel?",
        a: "The two golden rules are: (1) Apply a broad-spectrum SPF 50+ sunscreen religiously every 3 hours during daytime, and (2) Avoid active retinol or harsh face scrubs for 5 to 7 days."
      }
    ]
  },
  {
    id: "glutathione-therapy",
    department: "aesthetic",
    departmentName: "Aesthetics & Trichology",
    title: "Glutathione Glow Therapy",
    subtitle: "मास्टर एंटीऑक्सीडेंट - फुल बॉडी ब्राइटनिंग व डिटॉक्सिफिकेशन",
    badge: "IV Brightening Infusion",
    badgeTheme: "rose",
    thumb: "/assets/thumb-glutathione-therapy.jpg",
    poster: "/assets/poster-glutathione-therapy.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. Rashmi Ray",
    docDegree: "MBBS, MD (Skin, VD & Leprosy), DNB, MNAMS",
    docRole: "Assistant Professor, Dermatologist & Aesthetician",
    docPhoto: "/assets/dr-rashmi-ray.jpg",
    docPhone: "+917091506123",
    icon: "Zap",
    duration: "30 – 45 Minutes",
    anesthesia: "None Needed",
    hospitalStay: "Outpatient IV Lounge",
    recoveryTime: "Immediate Return to Routine",
    desc: "Scientifically administered Master Antioxidant intravenous & oral regimens combating oxidative damage, suppressing melanin overproduction, and revitalizing cellular radiance.",
    overview: `Glutathione is the body's most potent endogenous 'Master Antioxidant', synthesized in the liver to neutralize harmful reactive oxygen species and free radicals. In clinical dermatology, medical-grade Glutathione is celebrated for its scientifically proven ability to shift melanin synthesis from dark eumelanin to luminous, fair pheomelanin by inhibiting the tyrosinase enzyme.

Under Dr. Rashmi Ray's medical supervision, pure pharmaceutical-grade Glutathione is administered in combination with high-potency Vitamin C boosters, Alpha Lipoic Acid, and cellular minerals. This ensures 100% systemic bioavailability, full-body radiant complexion enhancement, and liver detox benefits without the risks of unmonitored commercial supplements.`,
    indications: [
      "Full-body skin dullness, uneven dark patches, and chronic tanning",
      "High oxidative stress, premature aging signs, and environmental toxin burden",
      "Persistent hyperpigmentation, melasma, and post-inflammatory dark spots",
      "Patients seeking an overall radiant, refreshed bridal or special-event glow"
    ],
    benefits: [
      "Transforms dark eumelanin into luminous pheomelanin across the entire body",
      "100% bioavailable intravenous delivery bypassing gastrointestinal degradation",
      "Powerful cellular detoxification improving liver vitality and skin health",
      "Synergized with Vitamin C for enhanced collagen synthesis and immune defense",
      "Strictly administered under MD Dermatologist oversight ensuring safety"
    ],
    procedureSteps: [
      {
        step: "Baseline Health & Renal Profile",
        detail: "Medical history screening, liver & kidney profile verification to ensure complete suitability."
      },
      {
        step: "Sterile IV Infusion Preparation",
        detail: "Compounding of authentic medical-grade Glutathione with buffered Ascorbic Acid in sterile saline."
      },
      {
        step: "Comfortable Drip Administration",
        detail: "Relaxing 20-30 minute intravenous drip infusion in our climate-controlled clinical lounge."
      },
      {
        step: "Dietary Guidance",
        detail: "Prescription of antioxidant-rich dietary protocols and maintenance skincare."
      }
    ],
    recovery: {
      immediate: "No downtime; patient resumes regular schedule immediately.",
      sessionFour: "Noticeable boost in skin clarity, luminous radiance, and natural glow."
    },
    faqs: [
      {
        q: "Is intravenous Glutathione safe?",
        a: "Yes, when pharmaceutical-grade Glutathione is administered in controlled clinical doses under a board-certified MD Dermatologist. We do not use substandard uncertified vials."
      },
      {
        q: "How many sessions are recommended?",
        a: "An initial loading course of 6 to 10 sessions administered weekly or fortnightly delivers the most visible full-body brightening transformation, followed by monthly maintenance."
      }
    ]
  },
  {
    id: "laser-revision",
    department: "aesthetic",
    departmentName: "Aesthetics & Trichology",
    title: "Laser Skin & Scar Revision",
    subtitle: "आधुनिक लेजर तकनीक द्वारा मुंहासों के गड्ढे व दाग मिटाएं",
    badge: "Precision Laser Therapy",
    badgeTheme: "rose",
    thumb: "/assets/thumb-laser-revision.jpg",
    poster: "/assets/poster-aesthetic-treatments.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. Rashmi Ray",
    docDegree: "MBBS, MD (Skin, VD & Leprosy), DNB, MNAMS",
    docRole: "Assistant Professor, Dermatologist & Aesthetician",
    docPhoto: "/assets/dr-rashmi-ray.jpg",
    docPhone: "+917091506123",
    icon: "Crosshair",
    duration: "45 – 60 Minutes",
    anesthesia: "Topical Numbing Cream (40 mins prior)",
    hospitalStay: "Outpatient Day-Care",
    recoveryTime: "2 – 4 Days Mild Erythema",
    desc: "Cutting-edge laser, MNRF & microneedling protocols targeting post-acne icepick scars, surgical scars, stretch marks, and enlarged pores.",
    overview: `Post-acne scars (icepick, boxcar, and rolling scars) represent deep dermal architectural damage where normal collagen was destroyed during inflammatory breakouts. Creams and superficial treatments cannot remodel deep fibrous scar bands.

Dr. Rashmi Ray utilizes combination scar revision protocols tailored to each scar type: Fractional CO2 Laser Resurfacing, Microneedling Radiofrequency (MNRF), Subcision (to release deep tethered bands), and Platelet Growth Factor infusions. This multi-modality approach breaks down rigid fibrous scar tissue and forces the skin to generate robust new type-I collagen fibers.`,
    indications: [
      "Depressed acne scars (Rolling, Boxcar, and Icepick pits on cheeks and temples)",
      "Traumatic, burn, or post-surgical hypertrophic and atrophic scars",
      "Stretched, enlarged open facial pores and coarse, uneven texture",
      "Striae distensae (stretch marks on abdomen, thighs, or arms)"
    ],
    benefits: [
      "Penetrates deep into the reticular dermis to elevate depressed scar depressions",
      "Triggers long-term neocollagenesis and elastin fiber synthesis over 3 to 6 months",
      "Combination with subcision releases deep tethered anchors beneath the skin",
      "Advanced integrated cooling minimizes discomfort and protects epidermal surface",
      "Personalized treatment parameters matched to Indian skin phototypes"
    ],
    procedureSteps: [
      {
        step: "Scar Mapping & Subcision",
        detail: "Detailed dermoscopic classification of scar types and targeted subcision of tethered rolling scars using Nokor needles."
      },
      {
        step: "Topical Anesthesia",
        detail: "Application of potent lidocaine-prilocaine numbing cream for 40 minutes ensuring comfortable treatment."
      },
      {
        step: "Fractional Laser / MNRF Delivery",
        detail: "Computerized delivery of microthermal treatment zones stimulating dermal collagen coagulation."
      },
      {
        step: "Biological Serum & Cryo-Soothing",
        detail: "Application of soothing growth factors and cryo-cooling to accelerate healing."
      }
    ],
    recovery: {
      dayOne: "Mild redness and warm sensation similar to mild sunburn.",
      dayThree: "Formation of micro-crusts that naturally shed without picking.",
      weekOne: "Noticeably smoother texture and refined pore diameter."
    },
    faqs: [
      {
        q: "Can old acne scars from years ago be cured?",
        a: "Yes! Regardless of how old the scars are, fractional laser and MNRF induce a controlled wound-healing cascade that rebuilds new collagen and permanently lifts depressed scar floors."
      },
      {
        q: "How many sessions are needed?",
        a: "Depending on scar depth and severity, 3 to 5 sessions spaced 4 to 6 weeks apart typically achieve 60% to 85% visible scar improvement."
      }
    ]
  },
  {
    id: "anti-aging",
    department: "aesthetic",
    departmentName: "Aesthetics & Trichology",
    title: "Anti-Aging & Rejuvenation",
    subtitle: "फाइन लाइन्स, झुर्रियों व ढीली त्वचा के लिए एंटी-एजिंग ट्रीटमेंट",
    badge: "Youth Collagen Renewal",
    badgeTheme: "rose",
    thumb: "/assets/thumb-anti-aging.jpg",
    poster: "/assets/poster-aesthetic-treatments.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. Rashmi Ray",
    docDegree: "MBBS, MD (Skin, VD & Leprosy), DNB, MNAMS",
    docRole: "Assistant Professor, Dermatologist & Aesthetician",
    docPhoto: "/assets/dr-rashmi-ray.jpg",
    docPhone: "+917091506123",
    icon: "Clock",
    duration: "45 – 60 Minutes",
    anesthesia: "Topical Anesthetic Cream",
    hospitalStay: "Outpatient Day-Care",
    recoveryTime: "1 – 2 Days Minor Redness",
    desc: "Evidence-based age reversal treatments combining skin boosters, hyaluronic hydration therapy, and collagen peptides to restore youthful volume.",
    overview: `Chronological aging, cumulative UV exposure, and environmental pollution deplete natural dermal hyaluronic acid, collagen, and elastin fibers, causing skin thinning, volume loss, wrinkles, and sagging contours.

At Janki Centre, Dr. Rashmi Ray offers comprehensive non-surgical anti-aging regimens. Treatments incorporate Profhilo bio-remodeling, pure Hyaluronic Acid skin boosters, micro-botulinum wrinkle relaxation, peptide mesotherapy, and dermal tightening to achieve natural, refreshed, age-defying elegance without artificial frozen expressions.`,
    indications: [
      "Fine lines around eyes (crow's feet), forehead wrinkles, and smile lines (nasolabial folds)",
      "Skin laxity and sagging contours along the jawline and neck",
      "Dehydrated, crepy, dull facial and neck skin texture",
      "Age spots, uneven pigmentation, and thinning dermal architecture"
    ],
    benefits: [
      "Deep intradermal hydration restoring radiant plumpness and suppleness",
      "Softens dynamic and static expression wrinkles naturally",
      "Stimulates multi-level collagen & elastin synthesis",
      "Zero invasive surgery, cutting, or prolonged surgical recovery",
      "Customized age-appropriate protocols for individuals aged 30 to 70+"
    ],
    procedureSteps: [
      {
        step: "Facial Anatomy & Vector Assessment",
        detail: "Comprehensive mapping of facial volume loss, muscular dynamics, and skin elasticity vectors."
      },
      {
        step: "Micro-Injection Bio-Remodeling",
        detail: "Targeted delivery of bio-remodeling hyaluronic acid or wrinkle-relaxing units into strategic bio-aesthetic points."
      },
      {
        step: "Post-Procedure Soothing",
        detail: "Gentle massage and peptide mask to ensure seamless product integration."
      }
    ],
    recovery: {
      sameDay: "Return to routine immediately; tiny injection bumps resolve within 12 to 24 hours.",
      weekTwo: "Optimal skin hydration, volume lift, and wrinkle softening."
    },
    faqs: [
      {
        q: "Will anti-aging treatments make my face look unnatural or frozen?",
        a: "Not under Dr. Rashmi Ray's expert care. Our clinical philosophy focuses on subtle, natural restoration—enhancing your authentic facial features rather than overfilling or altering expressions."
      }
    ]
  },
  {
    id: "hair-scalp-care",
    department: "aesthetic",
    departmentName: "Aesthetics & Trichology",
    title: "Hair Fall & Scalp Care",
    subtitle: "हेयर फॉल, डैंड्रफ व एलोपेसिया का संपूर्ण क्लीनिकल समाधान",
    badge: "Clinical Trichology",
    badgeTheme: "rose",
    thumb: "/assets/thumb-hair-scalp-care.jpg",
    poster: "/assets/poster-skin-hair-nail.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. Rashmi Ray",
    docDegree: "MBBS, MD (Skin, VD & Leprosy), DNB, MNAMS",
    docRole: "Assistant Professor, Dermatologist & Aesthetician",
    docPhoto: "/assets/dr-rashmi-ray.jpg",
    docPhone: "+917091506123",
    icon: "Feather",
    duration: "30 – 45 Minutes",
    anesthesia: "None Needed",
    hospitalStay: "Outpatient Clinic Visit",
    recoveryTime: "Immediate Normal Routine",
    desc: "Specialized trichological management of androgenetic alopecia, telogen effluvium, patchy alopecia areata, chronic dandruff, and scalp psoriasis.",
    overview: `Hair loss and chronic scalp disorders can be deeply distressing. Many patients waste months on ineffective commercial shampoos and over-the-counter oils before seeking clinical medical diagnosis.

Dr. Rashmi Ray conducts thorough digital dermoscopy to visualize follicular openings, hair caliber diversity, and micro-vascular patterns. Treatments address internal metabolic deficiencies (iron, vitamin D, thyroid), hormonal DHT miniaturization, autoimmune patchy hair loss (Alopecia Areata), and chronic fungal seborrheic dermatitis.`,
    indications: [
      "Excessive daily hair shedding (more than 100 strands/day) during brushing or showering",
      "Progressive thinning on crown, widening central scalp partition, or receding temples",
      "Circular coin-shaped bald patches (Alopecia Areata)",
      "Persistent greasy dandruff, severe scalp itching, scaling, or scalp psoriasis"
    ],
    benefits: [
      "Digital dermoscopy evaluation identifying the precise root cause before prescribing",
      "Targeted multi-prong medical therapy: anti-androgens, peptides, and mineral stabilizers",
      "Intralesional immunotherapy for rapid recovery of Alopecia Areata patches",
      "Medical scalp detox eradicating Malassezia fungal overgrowth and chronic flakes",
      "Prevents irreversible miniaturization and permanent follicle death"
    ],
    procedureSteps: [
      {
        step: "Digital Trichoscopy Analysis",
        detail: "Magnified digital optical scanning measuring follicle density, hair shaft diameter, and scalp skin inflammation."
      },
      {
        step: "Laboratory Workup",
        detail: "Investigation of serum ferritin, vitamin D3, B12, and thyroid hormone levels."
      },
      {
        step: "In-Clinic Scalp Protocol",
        detail: "Application of therapeutic scalp exfoliation, peptide infusions, or intralesional steroid micro-injections for alopecia patches."
      },
      {
        step: "Customized Home Prescription",
        detail: "Scientifically tailored topical lotions, gentle medical shampoos, and oral nutraceuticals."
      }
    ],
    recovery: {
      weekTwo: "Significant reduction in active dandruff, scaling, and scalp pruritus.",
      monthOne: "Stabilization of acute hair shedding.",
      monthThree: "Noticeable hair caliber thickening and follicular regrowth."
    },
    faqs: [
      {
        q: "Can patchy hair loss (Alopecia Areata) be cured?",
        a: "Yes! Alopecia Areata is an autoimmune condition where immune cells attack hair follicles. With specialized intralesional micro-injections and immune-modulating lotions administered by Dr. Rashmi Ray, over 90% of patches achieve complete hair regrowth."
      }
    ]
  },

  // ==========================================
  // CLINICAL DERMATOLOGY (DR. RASHMI RAY)
  // ==========================================
  {
    id: "acne-treatment",
    department: "dermatology",
    departmentName: "Clinical Dermatology",
    title: "Acne, Pimples & Blemishes",
    subtitle: "गंभीर कील-मुंहासे, सिस्टिक एक्ने व दाग-धब्बों का पक्का इलाज",
    badge: "Acne Clearing Protocol",
    badgeTheme: "rose",
    thumb: "/assets/thumb-acne-treatment.jpg",
    poster: "/assets/poster-skin-hair-nail.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. Rashmi Ray",
    docDegree: "MBBS, MD (Skin, VD & Leprosy), DNB, MNAMS",
    docRole: "Assistant Professor, Dermatologist & Aesthetician",
    docPhoto: "/assets/dr-rashmi-ray.jpg",
    docPhone: "+917091506123",
    icon: "ShieldAlert",
    duration: "30 – 45 Minutes",
    anesthesia: "None Needed",
    hospitalStay: "Outpatient Consultation",
    recoveryTime: "Immediate Normal Routine",
    desc: "Holistic dermatological protocols treating acute adolescent acne, hormonal cystic breakouts, comedones, and resistant pustules while preventing permanent scars.",
    overview: `Acne vulgaris is not merely a superficial cosmetic nuisance; it is a chronic inflammatory disorder of the pilosebaceous units driven by follicular hyperkeratinization, excess sebum, Cutibacterium acnes bacterial colonization, and hormonal fluctuations. Unmonitored use of steroid creams (such as Betnovate, Panderm) often leads to severe steroid-induced rosacea and skin thinning.

As a university Assistant Professor in Dermatology, Dr. Rashmi Ray provides evidence-based medical acne protocols. From comedone extraction and medical salicylic peels to oral retinoid therapies and hormonal balancing for PCOS acne, treatments clear active lesions rapidly while halting permanent scar formation.`,
    indications: [
      "Persistent inflammatory pimples, red pustules, and deep painful cystic acne nodules",
      "Recurrent blackheads, whiteheads, and congested facial pores",
      "Adult female hormonal acne flare-ups along jawline and chin linked to PCOS or stress",
      "Steroid-damaged facial skin with redness, burning, and resistant breakouts"
    ],
    benefits: [
      "MD Dermatologist root-cause evaluation eliminating reliance on harmful steroid creams",
      "Targeted antimicrobial, topical retinoid, and systemic regulation regimens",
      "In-clinic comedone extractions and pore-clearing salicylic peeling",
      "Prevents post-inflammatory dark spots (PIH) and deep pitted scarring",
      "Personalized non-comedogenic skincare and dietary counseling"
    ],
    procedureSteps: [
      {
        step: "Dermatological Acne Grading",
        detail: "Grading from Grade I (comedonal) to Grade IV (severe cystic/nodular) and skin barrier integrity check."
      },
      {
        step: "Hormonal & Lifestyle Screening",
        detail: "Screening for underlying PCOS, insulin resistance, or dietary triggers (whey protein, high glycemic foods)."
      },
      {
        step: "In-Clinic Clearing",
        detail: "Sterile comedone extraction and gentle anti-inflammatory peel application to de-congest pores."
      },
      {
        step: "Targeted Medical Prescription",
        detail: "Customized oral and topical regimens tailored to clear inflammation within 4 to 8 weeks."
      }
    ],
    recovery: {
      weekTwo: "Noticeable reduction in active inflammatory red pustules and oiliness.",
      weekFour: "Smoothing of surface texture and clearance of comedones.",
      weekEight: "Clear, breakout-free skin with fading of residual dark marks."
    },
    faqs: [
      {
        q: "Why shouldn't I use medical store creams like Betnovate or Panderm for pimples?",
        a: "These creams contain strong topical corticosteroids. While they may reduce redness for 2 days, they destroy your skin barrier, cause severe rebound breakout flare-ups, trigger facial hair growth, and thin the skin. Dr. Rashmi Ray provides safe, non-steroid medical treatments."
      },
      {
        q: "Can cystic acne be permanently cured?",
        a: "Yes. With modern weight-adjusted oral isotretinoin courses under dermatological blood monitoring, even severe nodulocystic acne achieves permanent long-term clinical remission."
      }
    ]
  },
  {
    id: "vitiligo-care",
    department: "dermatology",
    departmentName: "Clinical Dermatology",
    title: "Vitiligo & White Patches",
    subtitle: "सफेद दाग (फुलवारी) का आधुनिक मेडिकल व फोटोथेरेपी इलाज",
    badge: "Repigmentation Therapy",
    badgeTheme: "rose",
    thumb: "/assets/thumb-vitiligo-care.jpg",
    poster: "/assets/poster-dr-rashmi-opd.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. Rashmi Ray",
    docDegree: "MBBS, MD (Skin, VD & Leprosy), DNB, MNAMS",
    docRole: "Assistant Professor, Dermatologist & Aesthetician",
    docPhoto: "/assets/dr-rashmi-ray.jpg",
    docPhone: "+917091506123",
    icon: "SunMedium",
    duration: "30 – 45 Minutes",
    anesthesia: "None Needed",
    hospitalStay: "Outpatient Consultation",
    recoveryTime: "Ongoing Gradual Repigmentation",
    desc: "Scientifically proven repigmentation therapy for vitiligo, leukoderma, and hypopigmentation using topical immunomodulators, oral stability protocols, and phototherapy guidance.",
    overview: `Vitiligo (Leukoderma / सफेद दाग) is an autoimmune disorder where the body's immune system mistakenly targets and destroys melanocytes—the pigment-producing cells in the epidermis. In our region, patients often suffer immense emotional distress and social stigma due to misconceptions that vitiligo is contagious or incurable.

Dr. Rashmi Ray provides compassionate, scientifically grounded vitiligo treatment. The primary clinical objective is twofold: (1) Rapidly arrest active disease progression (immune stabilization), and (2) Stimulate dormant melanocyte stem cells in hair follicle reserves to migrate into white patches and restore natural skin pigmentation.`,
    indications: [
      "Depigmented chalky-white macules or patches on hands, feet, face, lips, or body",
      "Rapidly spreading new white patches (active unstable vitiligo)",
      "Segmental or generalized vitiligo vulgaris",
      "Post-burn or post-inflammatory hypopigmented patches seeking repigmentation"
    ],
    benefits: [
      "Stops active progression of expanding white patches with targeted immunomodulation",
      "Stimulates dormant follicular melanocytes to produce natural brown pigment",
      "Empathetic, compassionate care dispelling social myths and dietary fallacies",
      "Combination therapy utilizing non-steroidal calcineurin inhibitors, oral pulse therapy, and phototherapy guidance",
      "Options for stable vitiligo including melanocyte transfer and punch grafting"
    ],
    procedureSteps: [
      {
        step: "Wood's Lamp & Dermoscopic Examination",
        detail: "Optical Wood's lamp evaluation to delineate subclinical patch borders and check disease activity status (Koebner phenomenon)."
      },
      {
        step: "Immune Stabilization Phase",
        detail: "Short-course mini-pulse oral therapy or targeted immunomodulators to halt spreading within 3 to 6 weeks."
      },
      {
        step: "Repigmentation Induction",
        detail: "Application of topical tacrolimus/pimecrolimus, vitamin D3 analogs, and controlled sunlight exposure guidance."
      },
      {
        step: "Maintenance & Monitoring",
        detail: "Regular monthly photographic documentation tracking perifollicular pigment island coalescence."
      }
    ],
    recovery: {
      monthOne: "Arrest of disease spread; white patch borders become sharp and stationary.",
      monthThree: "Appearance of tiny dark brown pigment freckles (perifollicular islands) inside the white patches.",
      monthSix: "Coalescence of pigment islands restoring uniform natural skin color."
    },
    faqs: [
      {
        q: "Is vitiligo contagious or infectious?",
        a: "Absolutely NOT! Vitiligo is 100% non-contagious. It cannot spread through touch, sharing food, swimming, or physical contact. It is purely an internal immune-mediated pigmentation variation."
      },
      {
        q: "Do I need to avoid sour foods, fish, or milk?",
        a: "No! There is zero scientific evidence linking milk, citrus, or fish to vitiligo. Strict dietary deprivation only weakens patient nutrition. Eat a healthy, balanced, antioxidant-rich diet."
      }
    ]
  },
  {
    id: "eczema-psoriasis",
    department: "dermatology",
    departmentName: "Clinical Dermatology",
    title: "Eczema, Psoriasis & Allergies",
    subtitle: "दाद, खाज, खुजली, सोरायसिस व त्वचा की एलर्जी का संपूर्ण निदान",
    badge: "Barrier & Anti-Allergy Care",
    badgeTheme: "rose",
    thumb: "/assets/thumb-eczema-psoriasis.jpg",
    poster: "/assets/poster-dr-rashmi-consultation.jpg",
    posterLabel: "View Clinic Poster",
    doctor: "Dr. Rashmi Ray",
    docDegree: "MBBS, MD (Skin, VD & Leprosy), DNB, MNAMS",
    docRole: "Assistant Professor, Dermatologist & Aesthetician",
    docPhoto: "/assets/dr-rashmi-ray.jpg",
    docPhone: "+917091506123",
    icon: "AlertCircle",
    duration: "30 – 45 Minutes",
    anesthesia: "None Needed",
    hospitalStay: "Outpatient Consultation",
    recoveryTime: "Immediate Itch Relief",
    desc: "Comprehensive diagnostic testing and therapeutic management of chronic atopic dermatitis, plaque psoriasis, fungal infections (दाद/रिंगवर्म), urticaria, and contact dermatitis.",
    overview: `Chronic itching (pruritus), scaling rashes, and recurrent skin allergies severely compromise patient sleep, occupational focus, and quality of life. Common conditions include fungal ringworm (Tinea / दाद), Atopic Eczema, Plaque Psoriasis, and Urticaria (पित्ती). In our region, widespread misuse of over-the-counter mixed steroid creams (containing clobetasol, clotrimazole, neomycin) has spawned an epidemic of resistant, steroid-modified fungal infections (Tinea Incognito).

Dr. Rashmi Ray conducts precise diagnostic evaluation, including bedside KOH skin scrapings under microscope, to differentiate fungal infections from allergic eczema or autoimmune psoriasis. Patients receive targeted, non-steroid barrier repair regimens that extinguish itching rapidly and achieve lasting clinical remission.`,
    indications: [
      "Persistent circular, spreading itchy fungal rash on groin, thighs, or body (Tinea / दाद)",
      "Red, inflamed, weeping, or thickened leathery patches on hands, feet, or joints (Eczema)",
      "Thick silvery-white scaling plaques on elbows, knees, or scalp (Psoriasis)",
      "Sudden itchy hives and allergic welts appearing across the body (Urticaria / पित्ती)"
    ],
    benefits: [
      "Microscopic KOH mount testing differentiating fungal infection from allergic eczema immediately",
      "Halts the vicious itch-scratch cycle with modern non-sedating antihistamines",
      "Restores natural skin lipid epidermal barrier with medical ceramide formulations",
      "Definitive cure for recalcitrant, steroid-damaged fungal infections (Tinea Incognito)",
      "Targeted biologic and systemic options for severe chronic plaque psoriasis"
    ],
    procedureSteps: [
      {
        step: "Direct KOH Microscopic Mount",
        detail: "Painless gentle skin scrape examined under light microscopy to confirm presence of fungal hyphae."
      },
      {
        step: "Steroid Detoxification Protocol",
        detail: "Safe tapering off harmful steroid combination creams and soothing the inflamed barrier."
      },
      {
        step: "Targeted Antifungal or Barrier Therapy",
        detail: "Prescription of appropriate oral and topical antifungals, immunomodulators, or psoriasis keratolytics."
      },
      {
        step: "Hygiene & Relapse Prevention Guide",
        detail: "Guidance on clothing, washing protocols, and family screening to prevent fungal re-infection."
      }
    ],
    recovery: {
      dayTwo: "Dramatic reduction in burning and intense nocturnal itching.",
      weekTwo: "Flaking, redness, and scaling plaques flatten and clear.",
      weekFour: "Complete restoration of healthy, calm, natural skin barrier."
    },
    faqs: [
      {
        q: "Why does my fungal infection (दाद) come back every time I stop applying cream?",
        a: "If you were using combination creams from the chemist (like Fourderm, Panderm, Dermikem), they contain strong steroids that suppress itching temporarily while feeding the fungal infection deeper. Dr. Rashmi Ray uses pure, targeted medical antifungal regimens that eradicate the fungus completely from its roots."
      },
      {
        q: "Can psoriasis be effectively controlled?",
        a: "Yes. While psoriasis is a genetic autoimmune condition, modern dermatological treatments—including topical vitamin D analogs, oral immunosuppressive agents, and targeted biologics—allow patients to achieve 90% to 100% clear skin and live completely normal lives."
      }
    ]
  }
];
