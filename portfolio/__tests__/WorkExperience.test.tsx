import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import WorkExperience from "@/components/Work/WorkExperience";
import { WorkData } from "@/lib/firebase/Interfaces";

const mockWorkData: WorkData = {
    id: '1',
    companyName: 'Google',
    startDate: 'Jan 2020',
    endDate: 'Dec 2022',
    location: 'Mountain View, CA',
    experience: 'Engineered backend services for search infrastructure.',
    skills: {
        languages: ['TypeScript', 'Go'],
        frameworks: ['React'],
        databases: ['Firebase', 'MongoDB'],
        tools: ['Git', 'Docker'],
    },
    role: 'Software Engineer',
};

const mockLoadingData: WorkData = {
    id: '2',
    companyName: 'Microsoft',
    startDate: 'Jan 2023',
    endDate: null,
    location: 'Redmond, WA',
    experience: null,
    skills: null, // Empty skills object
    role: 'Data Scientist',   
}

describe('WorkExperience', () => {
    it('should render all details and skills for a complete work experience', () => {
        render(<WorkExperience workData={mockWorkData}/>)

                // Assert core text content is visible
        expect(screen.getByText('Software Engineer')).toBeInTheDocument();
        expect(screen.getByText('@Google')).toBeInTheDocument();
        expect(screen.getByText('Engineered backend services for search infrastructure.')).toBeInTheDocument();

        // Assert skills are rendered with their categories
        expect(screen.getByText('Languages:')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
        expect(screen.getByText('Go')).toBeInTheDocument();
        expect(screen.getByText('Frameworks:')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Databases:')).toBeInTheDocument();
        expect(screen.getByText('Firebase')).toBeInTheDocument();
        expect(screen.getByText('MongoDB')).toBeInTheDocument();
        expect(screen.getByText('Tools:')).toBeInTheDocument();
        expect(screen.getByText('Git')).toBeInTheDocument();
        expect(screen.getByText('Docker')).toBeInTheDocument();
    });

    it("should show a loading message when no skills are provided", () => {
        render(<WorkExperience workData={mockLoadingData}/>)
        // The text content for role and company should still be there
        // expect(screen.getByText('Data Scientist')).toBeInTheDocument();
        
        // Assert the loading message is rendered instead of skills
        expect(screen.getByText('loading experience for this role...')).toBeInTheDocument();
        
        // Ensure the skills section heading is not there if skills are not present
        expect(screen.queryByText('Skills Developed')).toBeNull();
    })

    it('should not render skill categories that have no skills', () => {
        const partialSkillsData = {
            ...mockWorkData,
            skills: {
                languages: ['Python'],
                frameworks: [], // Empty array
                databases: undefined, // Undefined value
                tools: ['VS Code']
            }
        };

        render(<WorkExperience workData={partialSkillsData} />);

        // Assert that the 'Languages' and 'Tools' categories are present
        expect(screen.getByText('Languages:')).toBeInTheDocument();
        expect(screen.getByText('Python')).toBeInTheDocument();
        expect(screen.getByText('Tools:')).toBeInTheDocument();
        expect(screen.getByText('VS Code')).toBeInTheDocument();

        // Assert that the empty 'Frameworks' and 'Databases' categories are NOT rendered
        expect(screen.queryByText('Frameworks:')).toBeNull();
        expect(screen.queryByText('Databases:')).toBeNull();
    });
});

