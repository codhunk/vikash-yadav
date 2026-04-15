"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope, Activity, HeartPulse, Beaker, ShieldCheck,
  FlaskConical, Syringe, Thermometer, Droplet,
  ChevronDown, ChevronUp, Layers, Wind, Tablets,
  Microscope, Zap, XCircle, Pill, CircleDot,
  Dna, Scissors, Waves, GitBranch, Heart,
  GlassWater, Mic
} from "lucide-react";
import { cn } from "@/lib/utils";

const expertiseAreas = [
  { title: "Laparoscopic Gall Bladder Surgery", desc: "Precision removal with minimal scarring and rapid recovery protocols." },
  { title: "Laparoscopic Appendix Surgery", desc: "Emergency and elective appendectomy through minimal-access techniques." },
  { title: "Laparoscopic Hernia Surgery", desc: "Expert repair of inguinal, umbilical, and incisional hernias." },
  { title: "Laparoscopic Anti-reflux Surgery", desc: "Advanced solutions for Hiatus Hernia and chronic GERD conditions." },
  { title: "Minimal Invasive Proctology", desc: "Painless surgery for Piles, Fissure, Fistula, and Pilonidal Sinus." },
  { title: "Bariatric Surgery", desc: "Transformative weight-loss procedures for sustainable health outcomes." },
  { title: "Robotic Surgery", desc: "State-of-the-art robotic-assisted precision for complex surgical cases." },
  { title: "Laser Surgery", desc: "Ultra-precise laser treatments for vascular and proctological conditions." },
];

const diseasesData = [
  {
    name: "Gallstone Disease",
    icon: Tablets,
    color: "blue",
    content: "Gallstone disease (cholelithiasis) is commonly associated with risk factors such as female gender, age over 40 years, obesity, rapid weight loss, high-fat diet, pregnancy, diabetes, and a positive family history. Patients typically present with right upper abdominal pain, often after fatty meals, along with nausea, vomiting, and bloating; fever or jaundice may indicate complications. Diagnosis is primarily made by ultrasound abdomen, with liver function tests and advanced imaging like MRCP or CT used in selected cases. Management depends on symptoms- symptomatic patients are best treated with laparoscopic cholecystectomy, and complicated cases may require additional interventions such as ERCP."
  },
  {
    name: "Inguinal Hernia",
    icon: ShieldCheck,
    color: "teal",
    content: "Inguinal hernia is associated with risk factors such as male gender, advancing age, chronic cough, constipation, heavy lifting, obesity, and previous abdominal surgery. Patients usually present with a groin swelling that may increase on straining and reduce on lying down, sometimes accompanied by pain or discomfort; complications may present with irreducibility, obstruction, or strangulation. Diagnosis is primarily clinical, with ultrasound used in doubtful cases. Treatment is surgical, with mesh hernioplasty (open or laparoscopic) being the standard approach."
  },
  {
    name: "Appendicitis",
    icon: Zap,
    color: "red",
    content: "Appendicitis typically presents with pain starting around the umbilicus and later localizing to the right lower abdomen, along with nausea, vomiting, fever, and loss of appetite. Diagnosis is mainly clinical, supported by blood tests (showing leukocytosis) and imaging such as ultrasound or CT scan. Treatment is usually surgical with appendectomy, while selected early cases may be managed conservatively with antibiotics."
  },
  {
    name: "Ventral Hernia",
    icon: Layers,
    color: "indigo",
    content: "Ventral hernia, including incisional hernia, refers to a defect in the anterior abdominal wall through which abdominal contents protrude, often occurring at the site of a previous surgical scar. Patients typically present with a swelling over the abdomen that increases on coughing or straining and may be associated with pain or discomfort; complications include irreducibility, obstruction, or strangulation. Diagnosis is primarily clinical, with ultrasound or CT scan used in selected cases. Treatment is mainly surgical, with mesh repair (open, laparoscopic or robotic) being the standard approach, depending on the size, location, and patient factors."
  },
  {
    name: "Lipoma",
    icon: Dna,
    color: "amber",
    content: "Lipoma is a benign tumor of fatty tissue that commonly presents as a soft, painless, slow-growing swelling beneath the skin. It is usually mobile, well-defined, and most often seen over the trunk, neck, or limbs. Diagnosis is primarily clinical, with ultrasound or FNAC used in doubtful cases. Treatment is surgical, with complete excision being curative."
  },
  {
    name: "Sebaceous Cyst",
    icon: CircleDot,
    color: "emerald",
    content: "Sebaceous cyst (epidermoid cyst) is a benign swelling arising from blocked sebaceous glands or hair follicles, commonly seen on the scalp, face, neck, or back. It presents as a slow-growing, well-defined, firm swelling with a central punctum and may become painful if infected. Diagnosis is mainly clinical. Treatment is surgical, with complete excision of the cyst along with its wall to prevent recurrence."
  },
  {
    name: "Anal Fissure",
    icon: Scissors,
    color: "rose",
    content: "Anal fissure is a linear tear in the anal canal, usually in the posterior midline, commonly caused by trauma from hard stools. Patients present with severe pain during and after defecation, along with bleeding and sometimes constipation due to fear of pain. Diagnosis is mainly clinical. Treatment is primarily conservative with stool softeners, sitz baths, and topical agents, while chronic cases may require surgical intervention such as lateral internal sphincterotomy."
  },
  {
    name: "Hemorrhoids",
    icon: Waves,
    color: "blue",
    content: "Hemorrhoids are swollen vascular cushions in the anal canal that may become symptomatic due to increased pressure. Patients commonly present with painless bleeding during defecation, prolapse, pain (especially in thrombosed external hemorrhoids), itching, and discomfort. Diagnosis is mainly clinical, supported by proctoscopic examination. Treatment depends on severity, ranging from conservative measures like diet modification and medications to procedures such as banding, sclerotherapy, or surgical hemorrhoidectomy."
  },
  {
    name: "Fistula in Ano",
    icon: GitBranch,
    color: "purple",
    content: "Fistula in ano is an abnormal tract connecting the anal canal to the perianal skin, usually following an anorectal abscess. Patients present with persistent or recurrent discharge near the anus, pain, swelling, and irritation of surrounding skin. Diagnosis is primarily clinical, with MRI fistulogram or endoanal ultrasound used in complex cases. Treatment is mainly surgical, including procedures like fistulotomy, seton placement, LIFT, VAAFT, or laser therapy, depending on the type of fistula and patient factors."
  },
  {
    name: "Hiatus Hernia",
    icon: Wind,
    color: "cyan",
    content: "Hiatus hernia is a condition where part of the stomach protrudes through the esophageal hiatus of the diaphragm into the chest. Patients commonly present with symptoms of reflux such as heartburn, regurgitation, chest discomfort, and sometimes difficulty swallowing. Diagnosis is made by upper GI endoscopy or imaging such as barium swallow. Treatment is mainly conservative with lifestyle modification and medications, while severe or refractory cases may require surgical repair such as fundoplication."
  },
  {
    name: "Fibroadenoma",
    icon: Heart,
    color: "pink",
    content: "Fibroadenoma is a benign breast tumor commonly seen in young women, composed of glandular and fibrous tissue. It typically presents as a painless, firm, mobile, well-defined lump in the breast. Diagnosis is based on clinical examination, ultrasound, and FNAC or core biopsy when required. Treatment is surgical, with excision advised in symptomatic, large, or suspicious cases."
  },
  {
    name: "Intestinal Obstruction",
    icon: XCircle,
    color: "slate",
    content: "Intestinal obstruction is a condition where there is blockage in the normal flow of intestinal contents, which may be mechanical or functional. Patients typically present with abdominal pain, distension, vomiting, and inability to pass stools or flatus. Diagnosis is based on clinical examination, supported by X-ray abdomen, ultrasound, or CT scan. Treatment depends on the cause, with initial management including fluid resuscitation, nasogastric decompression, and correction of electrolytes, while many cases require surgical intervention."
  },
  {
    name: "Intestinal Perforation",
    icon: Zap,
    color: "red",
    content: "Intestinal perforation is a life-threatening condition characterized by a full-thickness breach in the intestinal wall, leading to contamination of the peritoneal cavity. Patients typically present with sudden severe abdominal pain, abdominal distension, vomiting, fever, and signs of peritonitis. Diagnosis is based on clinical findings, supported by X-ray showing free air under the diaphragm and CT scan in selected cases. Treatment is urgent surgical intervention along with resuscitation, intravenous antibiotics, and supportive care."
  },
  {
    name: "Liver Abscess",
    icon: Beaker,
    color: "green",
    content: "Liver abscess is a localized collection of pus within the liver, commonly caused by bacterial (pyogenic) or amoebic infection. Patients typically present with fever, right upper abdominal pain, malaise, and sometimes jaundice. Diagnosis is based on ultrasound or CT scan, along with blood tests and serology when required. Treatment includes antibiotics and/or anti-amoebic drugs, with percutaneous drainage indicated in large or non-resolving abscesses."
  },
  {
    name: "Hydrocele",
    icon: GlassWater,
    color: "sky",
    content: "Hydrocele is a collection of fluid within the tunica vaginalis surrounding the testis, leading to scrotal swelling. It typically presents as a painless, gradually enlarging swelling in the scrotum that may transilluminate on examination. Diagnosis is mainly clinical, supported by ultrasound in doubtful cases. Treatment is surgical, with procedures like hydrocelectomy being curative."
  },
  {
    name: "Varicocele",
    icon: Thermometer,
    color: "indigo",
    content: "Varicocele is an abnormal dilatation of the pampiniform venous plexus in the scrotum, more commonly on the left side. It presents as a dragging pain or heaviness in the scrotum and a characteristic “bag of worms” feel on examination, which increases on standing or straining. It may be associated with infertility. Diagnosis is mainly clinical, supported by ultrasound with Doppler. Treatment is surgical, with varicocelectomy indicated in symptomatic or infertile patients."
  },
  {
    name: "Thyroid Swelling",
    icon: Mic,
    color: "orange",
    content: "Thyroid swellings refer to enlargement of the thyroid gland, which may be diffuse or nodular and can be benign or malignant. Patients typically present with a neck swelling that moves with deglutition, and may have symptoms of hyperthyroidism or hypothyroidism, or compressive symptoms like difficulty in swallowing or breathing. Diagnosis is based on clinical examination, thyroid function tests, ultrasound, and FNAC. Treatment depends on the cause, ranging from medical management to surgical removal (thyroidectomy) in indicated cases."
  },
  {
    name: "Pilonidal Sinus",
    icon: Microscope,
    color: "teal",
    content: "Pilonidal sinus is a chronic inflammatory condition occurring in the sacrococcygeal region due to hair penetration into the skin, leading to sinus formation. Patients typically present with pain, swelling, and discharge in the natal cleft, and may have recurrent abscess formation. Diagnosis is mainly clinical. Treatment is surgical, ranging from incision and drainage in acute cases to excision of the sinus with or without flap procedures in chronic or recurrent cases."
  }
];

const publications = [
  {
    title: "Ileal Trichobezoar Presenting as Intestinal Obstruction and Peritonitis",
    journal: "APSP J Case Rep. 2017",
    authors: "Rattan KN, Yadav V, Yadav V, Singh J.",
    cite: "APSP J Case Rep. 2017 Mar 18;8(2):11. doi: 10.21699/ajcr.v8i2.549. PMID: 28401038; PMCID: PMC5371684."
  },
  {
    title: "Epidemiology and Pattern of Spinal Cord Injury",
    journal: "Int J Med Res Prof. 2017",
    authors: "Bansal SK, Yadav V, Singh V, Goyal PK, Singal G, Singh Y.",
    cite: "Int J Med Res Prof. 2017; 3(2):405-09. DOI:10.21276/ijmrp.2017.3.2.084"
  }
];

const DiseaseCard = ({ disease }: { disease: { name: string, content: string, icon: any, color: string } }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 160;
  const shouldCollapse = disease.content.length > maxLength;

  const colorVariants: Record<string, string> = {
    blue: "text-blue-600 bg-blue-50 group-hover:bg-blue-600",
    teal: "text-teal-600 bg-teal-50 group-hover:bg-teal-600",
    red: "text-red-600 bg-red-50 group-hover:bg-red-600",
    indigo: "text-indigo-600 bg-indigo-50 group-hover:bg-indigo-600",
    amber: "text-amber-600 bg-amber-50 group-hover:bg-amber-600",
    emerald: "text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600",
    rose: "text-rose-600 bg-rose-50 group-hover:bg-rose-600",
    purple: "text-purple-600 bg-purple-50 group-hover:bg-purple-600",
    cyan: "text-cyan-600 bg-cyan-50 group-hover:bg-cyan-600",
    pink: "text-pink-600 bg-pink-50 group-hover:bg-pink-600",
    slate: "text-slate-600 bg-slate-50 group-hover:bg-slate-600",
    green: "text-green-600 bg-green-50 group-hover:bg-green-600",
    sky: "text-sky-600 bg-sky-50 group-hover:bg-sky-600",
    orange: "text-orange-600 bg-orange-50 group-hover:bg-orange-600",
  };

  const Icon = disease.icon;

  return (
    <div className="group p-8 rounded-[1rem] bg-gradient-to-br from-white to-slate-50/50 border border-slate-100 hover:border-transparent hover:shadow-[0_20px_50px_rgba(30,58,138,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex items-center gap-5 mb-8 relative z-10">
        <div className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:text-white group-hover:shadow-lg", 
          colorVariants[disease.color] || colorVariants.blue
        )}>
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold font-manrope text-slate-900 group-hover:text-primary transition-colors leading-tight">{disease.name}</h3>
      </div>
      
      <div className="flex-grow relative z-10">
        <p className={cn(
          "text-[13px] font-medium text-slate-500 leading-relaxed transition-all duration-300",
          !isExpanded && shouldCollapse ? "line-clamp-4" : ""
        )}>
          {disease.content}
        </p>
      </div>
      
      {shouldCollapse && (
        <div className="mt-6 relative z-10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] group/btn transition-all"
          >
            <span className="bg-primary/5 px-4 py-2 rounded-lg group-hover/btn:bg-primary group-hover/btn:text-white transition-colors flex items-center gap-2">
              {isExpanded ? (
                <>Less <ChevronUp className="w-3 h-3" /></>
              ) : (
                <>Read Overview <ChevronDown className="w-3 h-3 group-hover/btn:translate-y-0.5 transition-transform" /></>
              )}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default function ExpertisePage() {
  return (
    <main className="bg-slate-50 text-slate-900 antialiased min-h-screen selection:bg-primary/10">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#002B5B] via-[#00478D] to-[#0d9488] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/3 pointer-events-none z-0"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-7/12 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse shadow-[0_0_8px_rgba(147,242,242,0.8)]"></span>
                <span className="text-sm font-black text-teal-100 uppercase tracking-wider">Surgical Mastery</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight">
                Fields of <br /> <span className="text-teal-300 italic">Excellence</span>
              </h1>
              <p className="text-sm md:text-base text-blue-100 font-medium leading-relaxed max-w-xl font-inter opacity-80">
                Merging advanced robotic technologies with 15+ years of clinical insight to deliver minimal-impact, maximum-result surgical care. Specialized in Laparoscopic, Bariatric, and Laser modalities.
              </p>
            </div>
            <div className="lg:w-5/12 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] bg-white/10 rounded-[1rem] overflow-hidden translate-y-6 shadow-2xl relative group border border-white/20">
                <img className="w-full h-full object-cover brightness-110 group-hover:scale-105 transition-all duration-700" src="/surgical-mastery.png" alt="Surgeon hands" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-black text-sm uppercase">Precision</p>
                </div>
              </div>
              <div className="aspect-[4/5] bg-secondary-fixed/20 rounded-[1rem] overflow-hidden shadow-2xl relative group border border-white/20">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" src="/expertise-robotic.png" alt="Robotic Surgery" />
                <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <span className="material-symbols-outlined text-white text-5xl mb-6">robot_2</span>
                  <p className="text-white font-black text-xl uppercase leading-tight">Robotic Mastery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, i) => (
              <div key={i} className="group p-8 rounded-[1rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-8">
                  <span className="material-symbols-outlined font-light">{i % 2 === 0 ? "stethoscope" : "healing"}</span>
                </div>
                <h3 className="text-lg font-black text-primary captilize leading-tight mb-4">{area.title}</h3>
                <p className="text-sm font-bold text-slate-400 captilize leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise (Disease Section) */}
      <section className="py-18 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64 opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Clinical Authority</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-manrope tracking-tight">Our Expertise</h2>
            <p className="text-slate-500 font-medium max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Merging deep clinical knowledge with advanced surgical protocols to provide definitive care for complex conditions.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {diseasesData.map((disease, i) => (
              <DiseaseCard key={i} disease={disease} />
            ))}
          </div>
        </div>
      </section>

      {/* Memberships & Fellowships */}
      <section className="py-18 bg-gradient-to-br from-white via-slate-50 to-clinical-sky/30 rounded-[1rem] mx-6 md:mx-8 shadow-inner shadow-slate-100/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-4">
                <span className="text-secondary font-black uppercase text-sm">Academic Authority</span>
                <h2 className="text-3xl md:text-5xl font-black text-primary uppercase leading-tight">Fellowship <br /> & Global Membership</h2>
                <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
              </div>
              <div className="space-y-8">
                {[
                  { title: "Asia Pacific Hernia Society", role: "Life Member", icon: "public" },
                  { title: "IAGES", role: "Life Member, Indian Association of Gastrointestinal Endo Surgeons", icon: "verified" },
                  { title: "FALS (Robotic)", role: "Fellow in Advanced Laparoscopic Surgery", icon: "workspace_premium" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-primary uppercase tracking-tight">{item.title}</h4>
                      <p className="text-sm font-bold text-slate-400 captilize mt-1">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-white/70 backdrop-blur-md p-4 md:p-12 rounded-[1rem] shadow-3xl shadow-slate-200/50 relative z-10 border border-white">
                <span className="text-[11rem] font-black text-slate-100/30 absolute right-10 top-0 select-none -z-0">MS</span>
                <div className="relative z-10 space-y-8">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-secondary/10 rounded-lg text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-2">Education Track</div>
                    <h4 className="text-2xl md:text-3xl font-black text-primary uppercase leading-tight">MBBS & MS Surgery</h4>
                    <p className="text-sm font-bold text-slate-400 captilize leading-relaxed">Post Graduate Institute of Medical Sciences, Rohtak | Maharaja Agrasen Medical College</p>
                  </div>
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-lg text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Specialized Training</div>
                    <h4 className="text-2xl md:text-3xl font-black text-primary uppercase leading-tight">FNB Minimal Access</h4>
                    <p className="text-sm font-bold text-slate-400 captilize leading-relaxed">Fellowship from Max Super Speciality Hospital, Saket, New Delhi</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-black captilize text-sm">Academic Contributions</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary captilize">Talks & Publications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {publications.map((bib, i) => (
              <div key={i} className="p-6 rounded-[1rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-black text-secondary captilize mb-4 block underline underline-offset-4 decoration-2">{bib.journal}</span>
                  <h3 className="text-xl font-black text-primary captilize mb-4 ">{bib.title}</h3>
                  <p className="text-sm text-slate-400 font-bold captilize mb-6">{bib.authors}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 italic text-sm text-slate-500 font-medium ">
                  {bib.cite}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-primary rounded-[1rem] flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-white font-black text-xl captilize mb-2">Technical Contributions</h4>
              <p className="text-primary-fixed/60 font-bold text-[12px] captilize ">Co-author of chapters on Laparoscopic, Endoscopic & Robotic Surgery in leading medical textbooks.</p>
            </div>
            <button className="relative z-10 mt-6 md:mt-0 px-4 py-4 bg-white text-primary rounded-xl font-black text-[14px] captilize hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-950/20">Download CV</button>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-white/20"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
