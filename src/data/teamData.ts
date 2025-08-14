// Team members data
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Lead Frontend Developer",
    bio: "Specializes in React and Next.js with 8+ years of experience building responsive web applications.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Backend Developer",
    bio: "Expert in Node.js and database architecture with experience in building scalable API solutions.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "UI/UX Designer",
    bio: "Creates beautiful, intuitive interfaces with a focus on user experience and accessibility.",
  },
];

export default teamData;
