export class GetProfileDTO {
    id: number;
    userId: number;
    fullName: string;
    birthDate?: string;
    avatarUrl?: string;
    createdAt: Date;
}