export const upcomingEvents = [
  {
    id: 1,
    title: "Mobile App Hackathon 2026",
    date: "March 15, 2026",
    location: "Tech Park, SRM IST",
    description: "A 24-hour hackathon to build the next generation of mobile applications.",
    image: "/images/hackathon.jpg", 
    registrationLink: "#"
  },
  {
    id: 2,
    title: "5G & Beyond Workshop",
    date: "April 10, 2026",
    location: "Mini Hall 2",
    description: "Hands-on session with industry experts on 5G network architecture.",
    image: "/images/workshop.jpg",
    registrationLink: "#"
  }
];

export const pastEvents = [
  {
    id: 101,
    title: "Intro to Flutter",
    date: "Nov 20, 2025",
    description: "Beginner friendly workshop on cross-platform development."
  },
  {
    id: 102,
    title: "Android Dev Boot",
    date: "Oct 05, 2025",
    description: "Deep dive into Kotlin and Jetpack Compose."
  }
];

// --- TYPE DEFINITIONS ---
export type TeamMember = {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  imagePosition?: string; 
};

export type TeamDomain = {
  domain: string;
  members: TeamMember[];
};

// --- TEAM DATA ---
// Added ': TeamDomain[]' here to ensure type safety
export const teamData: TeamDomain[] = [
  {
    domain: "Creatives",
    members: [
      { 
        name: "Mugesh", 
        role: "Chair", 
        image: "/team/mugesh.jpg", 
        github: "#",
        linkedin: "#",
        imagePosition: "center"
      },
      { 
        name: "Eric", 
        role: "Board Member",
        image: "/team/eric.jpg",
        github: "#",
        linkedin: "#", 
        imagePosition: "bottom"
      },
    ]
  },
  {
    domain: "Technical",
    members: [
      { 
        name: "Tarun Sitaraman", 
        role: "Secretary", 
        image: "/team/tarun.jpg",
        github: "https://github.com/TarunSitaraman",
        linkedin: "https://www.linkedin.com/in/tarun-sitaraman/",
        imagePosition: "center"
      },
      { 
        name: "Sreecharan R", 
        role: "Web Master", 
        image: "/team/sreecharan.jpg",
        github: "#",
        linkedin: "#",
        imagePosition: "center"
      },
    ]
  },
  {
    domain: "Non-Technical",
    members: [
      { 
        name: "Utkarsh Vaibhav", 
        role: "Treasurer", 
        image: "/team/utkarsh.jpg",
        github: "#",
        linkedin: "#",
        imagePosition: "top" 
      },
      { 
        name: "Soham", 
        role: "Membership Chair", 
        image: "/team/soham.jpg",
        github: "#",
        linkedin: "#",
        imagePosition: "center"
      },
    ]
  }
];