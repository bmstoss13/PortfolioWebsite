import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WorkCard from "@/components/Work/WorkCard";
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

describe('WorkCard', () => {
    it('should render correctly with work data', () => {
        render(
            <WorkCard
                workData={mockWorkData}
                onCardClick={()=>{}}
                isSelected={false}
            />
        );

        //does the component render the correct text

        expect(screen.getByText('Software Engineer')).toBeInTheDocument();
        expect(screen.getByText('@Google')).toBeInTheDocument();
        expect(screen.getByText('Mountain View, CA')).toBeInTheDocument();
        expect(screen.getByText('Jan 2020 - Dec 2022')).toBeInTheDocument();
    });

    it('should call onCardClick when the card is clicked', () => {
        const mockOnCardClick = jest.fn();

        render(
            <WorkCard
                workData={mockWorkData}
                onCardClick={mockOnCardClick}
                isSelected={false}
            />
        );

        const cardElement = screen.getByText('Software Engineer').closest('div');
        if(cardElement){
            fireEvent.click(cardElement);
        }
        // Assert that the mock function was called with the correct data
        expect(mockOnCardClick).toHaveBeenCalledTimes(1);
        expect(mockOnCardClick).toHaveBeenCalledWith(mockWorkData);
    });

    it('should apply the selected style when isSelected is true', () => {
        render(
            <WorkCard
                workData={mockWorkData}
                onCardClick={() => {}}
                isSelected={true}
            />
        );

        const cardElement = screen.getByText('Software Engineer').closest('div');
        expect(cardElement).toHaveClass('selectedCard');
    });
})