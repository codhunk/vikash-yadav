import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Reviews", href: "/reviews" },
        { name: "Booking", href: "/booking" },
      ],
    },
    {
      title: "Administrative",
      links: [
        { name: "Admin Portal", href: "/admin/dashboard" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Patient Care", href: "/patient-care" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "camera", color: "from-[#f09433] via-[#e6683c] to-[#bc1888]" },
    { name: "Twitter", icon: "alternate_email", color: "from-[#1DA1F2] to-blue-600" },
    { name: "WhatsApp", icon: "chat", color: "from-[#25D366] to-green-600" },
    { name: "LinkedIn", icon: "contacts", color: "from-[#0077B5] to-blue-800" },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-[#002B5B] via-[#001F3D] to-[#001529] pt-10 pb-8 relative overflow-hidden font-inter text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 opacity-20"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-20">
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-slate-200 flex items-center justify-center shadow-2xl text-primary">
              <span className="material-symbols-outlined text-3xl font-black">medical_information</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-manrope font-black text-white">Dr. Vikash Yadav</span>
              <span className="text-[10px] font-inter font-bold text-secondary-fixed mt-1 tracking-wider">Clinical Sanctuary</span>
            </div>
          </div>
          <p className="text-blue-100/70 font-medium leading-relaxed max-w-sm text-sm">
            Bridging clinical precision with human-centric restorative medicine for over 15 years. Rated 4.9/5 by our dedicated patient community.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href="#"
                className={cn(
                  "w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-500 hover:scale-110 active:scale-95 group/social relative",
                  "hover:bg-gradient-to-br " + social.color
                )}
              >
                <span className="material-symbols-outlined group-hover/social:rotate-12 transition-transform">{social.icon}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-2">
              <h4 className="font-manrope font-black text-secondary-fixed text-xs tracking-widest">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-blue-100/60 font-inter font-bold text-sm hover:text-white hover:pl-2 transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-[10px] font-bold text-blue-100/40 leading-none font-inter group">
          <p className="group-hover:text-white transition-colors">© 2024 The Clinical Sanctuary • Managed by <Link href="https://webduality.in" className="text-green-400 hover:text-secondary-fixed transition-all hover:scale-105 active:scale-95">WebDuality</Link></p>
          <p className="mt-2 text-[8px] opacity-50 uppercase tracking-[0.1em]">Crafted with precision & excellence</p>
        </div>
        <div className="flex gap-8 font-inter text-[10px] font-black text-blue-100/30">
          <Link href="#" className="hover:text-secondary-fixed transition-all hover:scale-105 active:scale-95">Security</Link>
          <Link href="#" className="hover:text-secondary-fixed transition-all hover:scale-105 active:scale-95">Compliance</Link>
          <Link href="#" className="hover:text-secondary-fixed transition-all hover:scale-105 active:scale-95">SLA</Link>
        </div>
      </div>
    </footer>
  );
};

// Internal utility since cn might not be available in all modules
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default Footer;
