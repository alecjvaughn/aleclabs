import { CreateDemoProjectData, CreateDemoProjectVariables, ListProjectsData, CreateCategoryData, CreateCategoryVariables, ListProfessionalsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateDemoProject(options?: useDataConnectMutationOptions<CreateDemoProjectData, FirebaseError, CreateDemoProjectVariables>): UseDataConnectMutationResult<CreateDemoProjectData, CreateDemoProjectVariables>;
export function useCreateDemoProject(dc: DataConnect, options?: useDataConnectMutationOptions<CreateDemoProjectData, FirebaseError, CreateDemoProjectVariables>): UseDataConnectMutationResult<CreateDemoProjectData, CreateDemoProjectVariables>;

export function useListProjects(options?: useDataConnectQueryOptions<ListProjectsData>): UseDataConnectQueryResult<ListProjectsData, undefined>;
export function useListProjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListProjectsData>): UseDataConnectQueryResult<ListProjectsData, undefined>;

export function useCreateCategory(options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;
export function useCreateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;

export function useListProfessionals(options?: useDataConnectQueryOptions<ListProfessionalsData>): UseDataConnectQueryResult<ListProfessionalsData, undefined>;
export function useListProfessionals(dc: DataConnect, options?: useDataConnectQueryOptions<ListProfessionalsData>): UseDataConnectQueryResult<ListProfessionalsData, undefined>;
