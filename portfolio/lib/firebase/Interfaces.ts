export interface WorkData {
    id: string;
    companyName: string;
    startDate: string;
    endDate?: string;
    location: string;
    experience: string | null;
    skills: {
        languages?: string[];
        frameworks?: string[];
        databases?: string[];
        tools?: string[];
    };
    role: string;
}

export interface ProjectData {
    id: string;
    name: string;
    tools: string;
    date: string;
    experience: string[] | null;
}