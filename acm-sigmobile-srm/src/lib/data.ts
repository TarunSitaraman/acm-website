export const upcomingEvents = [
  
];

export const pastEvents = [
  {
    id: 101,
    title: "IOT Workshop",
    date: "Aug 20, 2025",
    description: "Beginner friendly workshop on the basics of IOT."
  },
  {
    id: 102,
    title: "Hack for Humanity Hackathon",
    date: "Aug 31-Sep 2 2025",
    description: " A 36-hour hackathon focused on building solutions for social good."
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
        role: "Vice Chair",
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