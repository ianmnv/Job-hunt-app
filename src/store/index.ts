import { createSlice, configureStore } from "@reduxjs/toolkit";

const jobApplicationSlice = createSlice({
  name: "application",
  initialState: [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      country: "USA",
      salaryOffered: 85000,
      salaryWanted: 90000,
      requirements: "3+ years of experience with React and TypeScript",
      applicationDate: "2023-12-01",
      technologies: ["React", "TypeScript", "JavaScript", "CSS"],
      status: "applied",
      link: "https://techsolutions.com/jobs/frontend-developer",
      benefits: ["Health Insurance", "401(k)", "Remote Work"],
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Code Innovators Ltd.",
      country: "Canada",
      salaryOffered: 95000,
      salaryWanted: 100000,
      requirements: "Experience with Node.js and PostgreSQL",
      applicationDate: "2023-12-05",
      technologies: ["Node.js", "PostgreSQL", "Docker"],
      status: "pending",
      link: "https://codeinnovators.com/careers/backend-developer",
      benefits: ["Stock Options", "Relocation Assistance", "Flexible Hours"],
    },
  ],
  reducers: {},
});

const store = configureStore({
  reducer: {
    jobApplication: jobApplicationSlice.reducer,
  },
});

export { store };
