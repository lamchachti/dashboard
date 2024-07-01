import { Project } from './project.module';
export interface Kpi {
    id?:string,
    name?:string,
    value:Project[]// ...Task[]
    value_type?:string,
    erp?:string,
    endpoint:string,
    kpi_description?:string,
    created_on?:Date,
    updated_on?:Date,
}