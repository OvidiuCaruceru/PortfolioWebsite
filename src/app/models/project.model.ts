export interface Project {
    title: string;
    website: string;
    github: string;
    figma: string;
    description: {
        text: string
        hasSpecialStyling: boolean;
        }[];
    isActive: boolean;
    isFinished: boolean;
}