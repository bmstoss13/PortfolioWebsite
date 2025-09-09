export interface WorkData {
    id: string;
    companyName: string;
    startDate: Date;
    endDate: Date | string;
    location: string;
    experience: string[] | null;
}

export interface ProjectData {
    id: string;
    name: string;
    tools: string;
    date: Date;
    experience: string[] | null;
}