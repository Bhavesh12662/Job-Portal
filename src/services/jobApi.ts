/** Swap this adapter for REST, GraphQL, or Supabase without touching UI consumers. */
import { applications, jobs } from '../data/mockData'; import type { Application, FilterState, Job } from '../types';
const pause=<T,>(value:T)=>new Promise<T>(resolve=>setTimeout(()=>resolve(value),180));
export const jobApi={
  list:async(filters:Partial<FilterState>={})=>pause(jobs.filter(job=>!filters.keyword||`${job.title} ${job.skills.join(' ')}`.toLowerCase().includes(filters.keyword!.toLowerCase()))),
  byId:async(id:string)=>pause(jobs.find(job=>job.id===id)),
  apply:async(jobId:string,candidateId:string):Promise<Application>=>pause({id:crypto.randomUUID(),jobId,candidateId,status:'Applied',appliedAt:new Date().toISOString(),match:82}),
  applications:async(candidateId?:string)=>pause(applications.filter(a=>!candidateId||a.candidateId===candidateId))
};
