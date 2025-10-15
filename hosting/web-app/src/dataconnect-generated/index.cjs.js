const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'hosting',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createDemoProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDemoProject', inputVars);
}
createDemoProjectRef.operationName = 'CreateDemoProject';
exports.createDemoProjectRef = createDemoProjectRef;

exports.createDemoProject = function createDemoProject(dcOrVars, vars) {
  return executeMutation(createDemoProjectRef(dcOrVars, vars));
};

const listProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProjects');
}
listProjectsRef.operationName = 'ListProjects';
exports.listProjectsRef = listProjectsRef;

exports.listProjects = function listProjects(dc) {
  return executeQuery(listProjectsRef(dc));
};

const createCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCategory', inputVars);
}
createCategoryRef.operationName = 'CreateCategory';
exports.createCategoryRef = createCategoryRef;

exports.createCategory = function createCategory(dcOrVars, vars) {
  return executeMutation(createCategoryRef(dcOrVars, vars));
};

const listProfessionalsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProfessionals');
}
listProfessionalsRef.operationName = 'ListProfessionals';
exports.listProfessionalsRef = listProfessionalsRef;

exports.listProfessionals = function listProfessionals(dc) {
  return executeQuery(listProfessionalsRef(dc));
};
