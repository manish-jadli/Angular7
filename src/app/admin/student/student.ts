
export interface IStudent {
  student_id?: string;
  gender: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  date_of_birth: string;
  other_student_details: string;
  IsActive: boolean;
  class_code: string;
  father_name: string;
  mother_name: string;
  admission_on: string;
  school_name: string;
  mobile_no: string;
  address: string;
}

export interface IStudentClass {
  student_id?: any;
  class_id?: string;
  IsActive?: any;
  date_from?: string;
  date_to?: string;
}

export interface IStudentAddress {
  student_id?: any;
  address_id?: string;
  date_from?: string;
  address_details?: string;
  IsActive?: string;
  father_name?: string;
  mother_name?: string;
  admission_on?: string;
  school_name?: string;
  mobile_no?: string;
}
