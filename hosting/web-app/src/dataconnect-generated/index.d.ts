import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateCategoryData {
  category_insert: Category_Key;
}

export interface CreateCategoryVariables {
  name: string;
}

export interface CreateDemoProjectData {
  demo_insert: Demo_Key;
}

export interface CreateDemoProjectVariables {
  demoUrl: string;
  description?: string | null;
  name: string;
  thumbnailUrl?: string | null;
  projectId: UUIDString;
}

export interface Demo_Key {
  id: UUIDString;
  __typename?: 'Demo_Key';
}

export interface ListProfessionalsData {
  professionals: ({
    id: UUIDString;
    name: string;
    bio: string;
    email: string;
    githubUrl?: string | null;
    linkedinUrl?: string | null;
    portfolioUrl?: string | null;
    profilePictureUrl?: string | null;
    phoneNumber?: string | null;
  } & Professional_Key)[];
}

export interface ListProjectsData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
    imageUrl?: string | null;
    projectUrl?: string | null;
    githubRepoUrl?: string | null;
    createdAt: TimestampString;
  } & Project_Key)[];
}

export interface Professional_Key {
  id: UUIDString;
  __typename?: 'Professional_Key';
}

export interface ProjectCategory_Key {
  projectId: UUIDString;
  categoryId: UUIDString;
  __typename?: 'ProjectCategory_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

interface CreateDemoProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDemoProjectVariables): MutationRef<CreateDemoProjectData, CreateDemoProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateDemoProjectVariables): MutationRef<CreateDemoProjectData, CreateDemoProjectVariables>;
  operationName: string;
}
export const createDemoProjectRef: CreateDemoProjectRef;

export function createDemoProject(vars: CreateDemoProjectVariables): MutationPromise<CreateDemoProjectData, CreateDemoProjectVariables>;
export function createDemoProject(dc: DataConnect, vars: CreateDemoProjectVariables): MutationPromise<CreateDemoProjectData, CreateDemoProjectVariables>;

interface ListProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProjectsData, undefined>;
  operationName: string;
}
export const listProjectsRef: ListProjectsRef;

export function listProjects(): QueryPromise<ListProjectsData, undefined>;
export function listProjects(dc: DataConnect): QueryPromise<ListProjectsData, undefined>;

interface CreateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  operationName: string;
}
export const createCategoryRef: CreateCategoryRef;

export function createCategory(vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;
export function createCategory(dc: DataConnect, vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;

interface ListProfessionalsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProfessionalsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProfessionalsData, undefined>;
  operationName: string;
}
export const listProfessionalsRef: ListProfessionalsRef;

export function listProfessionals(): QueryPromise<ListProfessionalsData, undefined>;
export function listProfessionals(dc: DataConnect): QueryPromise<ListProfessionalsData, undefined>;

