export class Student {
    id: number;
    student_code: number;
    first_name: string;
    last_name: string;
    email: string;
    photo: File | null;
    face_encoding: string;
    created_at: Date;
}