import {getWorkExperienceFromDB} from "@/lib/helper/work";
import { workExperience } from "@/lib/firebase/collections";

// Mock the Firebase Firestore and Firebase Utils modules at the top level
jest.mock('firebase/firestore');
jest.mock('@/lib/firebase/firebaseUtils', () => ({
    db: {},
}));

// Import the mocked functions after the mock has been set up
import { getDocs, collection } from 'firebase/firestore';

// Define the mock data
const mockDocs = [
    {
        id: '1',
        data: () => ({
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
        }),
    },
    {
        id: '2',
        data: () => ({
            companyName: 'Microsoft',
            startDate: 'Jan 2023',
            endDate: null,
            location: 'Redmond, WA',
            experience: 'Developed data pipelines for internal analytics.',
            skills: {
                languages: ['Python', 'C#'],
                frameworks: ['.NET'],
                databases: ['SQL Server'],
                tools: ['Azure', 'Power BI'],
            },
            role: 'Data Scientist',
        }),
    },
];

describe('getWorkExperienceFromDB', () => {

    beforeEach(() => {
        // Reset and re-mock the functions before each test
        (getDocs as jest.Mock).mockClear();
        (collection as jest.Mock).mockClear();

        // Set up the default mock implementation for getDocs
        (getDocs as jest.Mock).mockResolvedValue({
            docs: mockDocs,
            empty: mockDocs.length === 0,
        });

        // The collection mock simply returns the Firebase object, which is mocked anyway
        (collection as jest.Mock).mockReturnValue({});
    });

    it('should retrieve and format work experience from Firestore', async () => {

        const workExperienceData = await getWorkExperienceFromDB();

        expect(collection).toHaveBeenCalledWith(expect.any(Object), workExperience);
        expect(getDocs).toHaveBeenCalledWith(expect.any(Object));
        const expectedWorkExperience = mockDocs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }));

        expect(workExperienceData).toEqual(expectedWorkExperience);
    });

    it('should throw an error if Firestore query fails', async () => {
        const mockError = new Error('Firestore error');
        (getDocs as jest.Mock).mockRejectedValue(mockError);
        await expect(getWorkExperienceFromDB()).rejects.toThrow('Firestore error');
    });
});