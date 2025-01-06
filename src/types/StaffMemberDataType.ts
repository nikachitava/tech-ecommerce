export interface IStaffMemberDataType {
    id?: number;
    image: string;
    name: string;
    role: string;
    socialmedia: {
        instagram: string;
        linkedin: string;
    };
}