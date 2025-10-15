# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createDemoProject, listProjects, createCategory, listProfessionals } from '@dataconnect/generated';


// Operation CreateDemoProject:  For variables, look at type CreateDemoProjectVars in ../index.d.ts
const { data } = await CreateDemoProject(dataConnect, createDemoProjectVars);

// Operation ListProjects: 
const { data } = await ListProjects(dataConnect);

// Operation CreateCategory:  For variables, look at type CreateCategoryVars in ../index.d.ts
const { data } = await CreateCategory(dataConnect, createCategoryVars);

// Operation ListProfessionals: 
const { data } = await ListProfessionals(dataConnect);


```