export type Role = 'candidate' | 'recruiter' | 'admin';
export type ApplicationStatus = 'Applied' | 'Reviewed' | 'Shortlisted' | 'Interview Scheduled' | 'Hired' | 'Rejected';
export interface Company { id:string; name:string; logo:string; type:'MNC'|'Startup'|'Corporate'; size:string; about:string; }
export interface Job { id:string; title:string; company:Company; location:string; workMode:'Remote'|'Hybrid'|'On-site'; employmentType:'Full-time'|'Contract'; experienceMin:number; experienceMax:number; salaryMin:number; salaryMax:number; skills:string[]; category:string; education:string; postedAt:string; deadline:string; description:string; responsibilities:string[]; recruiter:{name:string; title:string; initials:string}; active:boolean; }
export interface User { id:string; name:string; email:string; role:Role; headline:string; location:string; skills:string[]; completion:number; alerts:boolean; }
export interface Application { id:string; jobId:string; candidateId:string; status:ApplicationStatus; appliedAt:string; match:number; note?:string; }
export interface FilterState { keyword:string; location:string; experience:string; salary:string; workModes:string[]; categories:string[]; companyTypes:string[]; freshness:string; education:string; }
export interface Candidate { id:string; name:string; email:string; headline:string; location:string; experience:string; skills:string[]; completion:number; initials:string; }
