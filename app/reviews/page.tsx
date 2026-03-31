import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Reviews() {
  const reviews = [
    {
      name: "James Arrington",
      role: "Post-Op Recovery Patient",
      text: "The Clinical Sanctuary is aptly named. Dr. Yadav combines technical mastery with a bedside manner that truly listens. I haven't felt this heard by a specialist in years.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDcVlZzTxylzWT6mu-hS5Kw68CQ3k8kzj-WkN1U63zR6S55BV_oahAnUK0sUcIHnhrJ7XSoFr88uj5uPzSQvxJ4haoFcPRuNyRhnMPunU4utWHrdv6_hipb4az9huAUrW9PrCc9jQqzYN3fctE0--uCtGMeERsvQLZqf0cLjwarMAbix9UoqDN9Q7IqMnunas-xEAnW7_sygP0HBcvDs-Wo6q4wL6qJPMg1ABAXWG-Hy3qjyefNTbCcrK0GfEw-eC9_6DKYdpa4g",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Healthcare Administration",
      text: "A seamless experience from start to finish. The facility is state-of-the-art, and the focus on patient comfort is evident in every detail.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9BbWknxW-YFIlnpr-Pit8oZJq2vgscpAqnxwPN-hh5p-2LUu38XY-9d1Fs04jz7J55_YHABnNJggmobYXdV42YX_0zCDVFzLSEK5Mz_APCfPxkCdJSpEgoPNkVdEks3pJ3cb2D0O_qZFIB-xKwSzbPiDJHjsmpuxk9vUYRiruVGhLzhub_69I5e4XbPs7rYjFgRCNwQGDGsqRN5ZzIOEMpfyaI-LuhCEj1FBNN9CHsXwYGToOL__jvz_rnCBhCaLlMoWLk-56Hw",
      rating: 5,
    },
    {
      name: "Mark Sterling",
      role: "Verified Patient",
      text: "Highly recommended for complex diagnostics. Dr. Yadav took the time to explain every variable, putting my anxiety at ease immediately.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBykmjMuZrDUDM6grRp_Afan6Vj8LpOz-xLbcmSWQUXa0iMhXYu1IYfoCl3zw8OntJ6bMyW3PDC6dmpvhX0hTzmg2ej1W-rSFJdTdht_zh9pcNS0HN0CkrwQ2rtCAxmtcW6oakTIR0DQJhHZLLOHN5rXkmibBP23SAhAa5iDaxXReptCIWXjZDa-Uqwj7vz-5ZP92E4ullCGYDTv9gc0K8a8OCb3kvSo-ssrgLSMBN1JZ_NRFuqiefQDLDJVhKnt1BKLrQ1h1cFog",
      rating: 4,
    },
    {
      name: "Sophia Chen",
      role: "Design Lead",
      text: "The only clinic where I actually look forward to my appointments. The environment is calming and the staff is incredibly professional.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDul4na-WN0nx5IZbDs0OV21pWe21UcEy8S_mMzg8KRJP4kqWOy2xwueN1vmoDVjoXD6n0bal4kWk1IHwZ5_k7F_O2hZInRX_vpjiZQ3LSomrWnKQyqJUgTN-cKURNxxMCzXLDfHnih_BGf-vfzSIApCuFBrBkQs5zH3qrdvUowipGI5ZyQ8U9Ukn2CaQ3n6Ic-PQCU84voh6kI0IQZKghJ3JUzCb_gkxhIC4M2JCOn9pYsxe4P8BZ47g0ywgALAoLZaXc9HF1LdA",
      rating: 5,
    },
  ];

  return (
    <main className="bg-surface font-inter text-on-surface antialiased">
      <Navbar />

      <div className="pt-16 pb-20">
        {/* Review Summary Section */}
        <section className="relative bg-gradient-to-br from-[#002B5B] via-[#00478D] to-[#0d9488] pt-24 pb-24 overflow-hidden mb-20 text-white">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none z-0"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse shadow-[0_0_8px_rgba(147,242,242,0.8)]"></span>
                  <span className="text-[10px] font-manrope font-black text-secondary-fixed uppercase tracking-widest">Global Patient Trust</span>
                </div>
                <h1 className="font-manrope text-4xl md:text-6xl font-black text-white uppercase leading-[1.1] tracking-tight">
                  Measured by <span className="text-secondary-fixed italic">Excellence.</span> <br />Defined by Trust.
                </h1>
                <p className="text-blue-100/80 text-base md:text-lg max-w-xl font-medium font-inter leading-relaxed">
                  At the Clinical Sanctuary, every patient journey is a testament to our commitment to innovative care and human-centric medicine.
                </p>
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-black text-secondary-fixed">98%</div>
                    <div className="text-[10px] font-black text-blue-100/50 uppercase tracking-widest leading-none">Positive <br />Outcomes</div>
                  </div>
                  <div className="w-px h-10 bg-white/10"></div>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-black text-white">4.9/5</div>
                    <div className="text-[10px] font-black text-blue-100/50 uppercase tracking-widest leading-none">Google <br />Rating</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/30 to-primary/30 blur-2xl rounded-[1rem] opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="bg-white/10 backdrop-blur-3xl p-10 rounded-[1rem] shadow-3xl shadow-black/30 border border-white/20 relative z-10 overflow-hidden transform group-hover:translate-y-[-10px] transition-transform duration-700">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-secondary-fixed text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <div className="text-7xl font-manrope font-black text-white leading-none">4.9<span className="text-3xl text-blue-100/40">/5</span></div>
                      <div className="text-blue-100/60 tracking-[0.2em] uppercase text-[10px] font-black">150+ Verified Testimonials</div>
                    </div>
                    <Link href="/booking" className="px-10 py-4 bg-secondary-container text-on-secondary-container rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl shadow-black/20">Write a Review</Link>
                  </div>
                </div>
                {/* Floating reviews preview */}
                <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-2xl z-20 hidden lg:block border border-slate-100 transform -rotate-3 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                    <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-secondary w-full"></div>
                    </div>
                  </div>
                  <div className="mt-2 text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Exceeded Expectations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voices of Trust: Testimonial Feed */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-manrope text-3xl font-bold text-primary">Voices of Trust</h2>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-surface-container-low text-on-surface rounded-full text-sm font-semibold cursor-pointer border border-transparent hover:border-secondary transition-all">Latest</span>
              <span className="px-4 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-sm font-semibold cursor-pointer border border-transparent hover:border-secondary transition-all">Highest Rated</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-surface-container-lowest p-4 rounded-xl flex flex-col justify-between hover:bg-surface-bright transition-all group border border-outline-variant/10 shadow-sm">
              <div>
                <div className="flex items-center gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface font-medium leading-relaxed mb-8">
                  &quot;{reviews[0].text}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all object-cover" src={reviews[0].img} alt={reviews[0].name} />
                <div>
                  <div className="font-bold text-primary">{reviews[0].name}</div>
                  <div className="text-xs text-on-surface-variant font-medium">{reviews[0].role}</div>
                </div>
              </div>
            </div>

            {/* Review 2 (Large Highlight) */}
            <div className="md:col-span-2 bg-primary-container/5 p-4 rounded-[1rem] border border-primary/5 flex flex-col md:flex-row gap-8 items-center group shadow-sm">
              <div className="flex-1">
                <span className="material-symbols-outlined text-primary text-5xl mb-6 block opacity-20">format_quote</span>
                <p className="text-xl font-manrope font-semibold text-primary leading-tight mb-8">
                  &quot;Innovation meets empathy here. The automated scheduling was seamless, but it was Dr. Yadav&apos;s personalized treatment plan that changed my life.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIDqlylzU7V9nX8iHPg5itOdwBe-707yIgANBiSSw46SqFFcj0Prtju0CM1wXDHAAcXhq0q05ge7MbqWGGRMGHIsIEEn4ri9hPbAQVQX9nqVR9_iK7i8CVzEfwekhkQPgMfaUl0GwYtzGo8ChtUVQpH5bpF0tLWayT1EiC3UEtVU_1qQZP933rarlyRGmcYioZVgQf6uK4EE715Aig02-njn7NIhO2U-B6HTaSBr3ZYDoOnj78-lTCIesmrA9NYOuv8rw66LBNKg" alt="Dr. Sarah Thompson" />
                  </div>
                  <div>
                    <div className="font-bold text-primary text-lg">Dr. Sarah Thompson</div>
                    <div className="text-sm text-secondary font-semibold">Consultant Physician</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-1/3">
                <div className="aspect-square bg-white rounded-xl p-4 shadow-xl shadow-primary/10 rotate-3 group-hover:rotate-0 transition-transform duration-500 flex flex-col h-full justify-center items-center text-center">
                  <div className="text-4xl font-black text-primary mb-2">10/10</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Technical Precision</div>
                </div>
              </div>
            </div>

            {/* Review 3, 4, 5 */}
            {reviews.slice(1).map((review, idx) => (
              <div key={idx} className="bg-surface-container-lowest p-4 rounded-xl flex flex-col justify-between hover:bg-surface-bright transition-all group border border-outline-variant/10 shadow-sm">
                <div>
                  <div className="flex items-center gap-0.5 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    {review.rating < 5 && <span className="material-symbols-outlined text-outline-variant text-sm">star</span>}
                  </div>
                  <p className="text-on-surface font-medium leading-relaxed mb-8">
                    &quot;{review.text}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all object-cover" src={review.img} alt={review.name} />
                  <div>
                    <div className="font-bold text-primary">{review.name}</div>
                    <div className="text-xs text-on-surface-variant font-medium">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More CTA */}
          <div className="mt-16 text-center">
            <button className="px-12 py-4 rounded-full border border-primary text-primary font-manrope font-bold hover:bg-primary hover:text-white transition-all duration-300">
              Read More Testimonials
            </button>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-7xl mx-auto px-4 mt-20">
          <div className="relative rounded-[1rem] overflow-hidden bg-primary p-8 md:p-16 text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-pattern"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-manrope font-extrabold text-white mb-6 leading-tight">Experience the Sanctuary</h2>
              <p className="text-primary-fixed text-lg mb-10 opacity-90">
                Join over 150+ patients who have found clarity and healing in our specialized care programs. Your journey to wellness begins here.
              </p>
              <Link
                href="/booking"
                className="bg-secondary text-white px-10 py-5 rounded-full text-lg font-manrope font-bold shadow-lg shadow-black/10 hover:scale-105 transition-transform inline-block"
              >
                Book Appointment
              </Link>
            </div>
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
