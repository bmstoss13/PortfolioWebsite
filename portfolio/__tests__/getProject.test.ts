import { getAllProjectsFromDB } from "@/lib/helper/projects";
import { projects } from "@/lib/firebase/collections";

jest.mock('firebase/firestore');
jest.mock('@/lib/firebase/firebaseUtils', () => ({
    db: {},
}));

import { getDocs, collection } from "firebase/firestore";

const mockDocs = [
    {
        id: 'project123',
        data: () => ({
            name: 'Personal Portfolio Website',
            skills: {
                languages: ['TypeScript', 'JavaScript'],
                frameworks: ['Next.js', 'React'],
                tools: ['Tailwind CSS', 'Git', 'Vercel']
            },
            date: '2023-11-01',
            description: 'A responsive personal portfolio website to showcase my projects and work experience.',
            type: 'Frontend',
            repository: 'https://github.com/yourusername/portfolio',
            role: 'Lead Developer',
            photoURL: 'https://example.com/images/portfolio.png'
        })
    },
    {
        id: 'project456',
        data: () => ({
            name: 'Real-time Chat Application',
            skills: {
                languages: ['JavaScript'],
                frameworks: ['Express.js', 'Socket.IO'],
                databases: ['MongoDB'],
                tools: ['Node.js', 'Jest']
            },
            description: 'A real-time, multi-user chat application built with web sockets.',
            type: 'Fullstack',
            repository: 'https://github.com/yourusername/chat-app'
        })
    },
    {
        id: 'project789',
        data: () => ({
            name: 'Data Visualization Dashboard',
            skills: {
                languages: ['Python'],
                frameworks: ['Pandas', 'Matplotlib'],
                tools: ['Jupyter']
            },
            date: '2022-05-15',
            description: 'An analytical dashboard to visualize public data on climate change.',
            type: 'Data Science',
            role: 'Data Analyst'
        })
    }
];

describe('getAllProjectsFromDB', () => {
    beforeEach(() => {
        (getDocs as jest.Mock).mockClear();
        (collection as jest.Mock).mockClear();

        (getDocs as jest.Mock).mockResolvedValue({
            docs: mockDocs,
            empty: mockDocs.length === 0,
        });

        (collection as jest.Mock).mockReturnValue({});
    });

    it('should retrieve and format projects from Firestore', async() => {
        const projectData = await getAllProjectsFromDB();

        expect(collection).toHaveBeenCalledWith(expect.any(Object), projects);
        expect(getDocs).toHaveBeenCalledWith(expect.any(Object));
        const expectedProjectData = mockDocs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }));

        expect(projectData).toEqual(expectedProjectData)
    });

    it('should throw an error if Firestore query fails', async () => {
        const mockError = new Error('Firestore error');
        (getDocs as jest.Mock).mockRejectedValue(mockError);
        await expect(getAllProjectsFromDB()).rejects.toThrow('Firestore error');
    })
})