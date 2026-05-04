import React from "react";
import avatarImg from "../../assets/about/avatarPP.jpg";

const teamMembers = [
  {
    name: "Kartik Bansal",
    role: "Founder & CEO",
    bio: "Blockchain enthusiast with 8+ years in crypto space",
    image: avatarImg,
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Sarah Johnson",
    role: "Head of Art Curation",
    bio: "Former gallery curator turned NFT specialist",
    image: avatarImg,
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Full-stack blockchain developer",
    image: avatarImg,
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Elena Rodriguez",
    role: "Community Manager",
    bio: "Building bridges between artists and collectors",
    image: avatarImg,
    social: { twitter: "#", linkedin: "#" },
  },
];

function TeamSection() {
  return (
    <div className="relative py-20 md:py-28 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-clash font-semibold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="font-poppins text-white/60">
            Passionate individuals building the future of digital art
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-highlight/30 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder - Replace with actual images */}
              <div className="aspect-square bg-gradient-to-br from-grad-start/20 to-grad-end/20 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="text-3xl">👤</span>
                    </div>
                    <p className="text-white/40 text-sm">Add Image</p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-clash font-semibold text-xl text-white group-hover:text-highlight transition-colors">
                  {member.name}
                </h3>
                <p className="font-poppins text-sm text-highlight mt-1">
                  {member.role}
                </p>
                <p className="font-poppins text-sm text-white/50 mt-3">
                  {member.bio}
                </p>

                <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
                  <a
                    href={member.social.twitter}
                    className="text-white/40 hover:text-highlight transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-white/40 hover:text-highlight transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
