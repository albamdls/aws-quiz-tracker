// src/data/questionBank.js

import analytics from "./categories/analytics";
import applicationIntegration from "./categories/application_integration";
import businessApplications from "./categories/business_applications";
import cloudFinancialManagement from "./categories/cloud_financial_management";
import computeContainers from "./categories/compute_containers";
import customerEnablement from "./categories/customer_enablement";
import database from "./categories/database";
import developerTools from "./categories/developer_tools";
import endUserComputing from "./categories/end_user_computing";
import frontendWeb from "./categories/frontend_web";
import iot from "./categories/iot";
import machineLearning from "./categories/machine_learning";
import managementGovernance from "./categories/management_governance";
import migrationTransfer from "./categories/migration_transfer";
import networking from "./categories/networking";
import securityIdentityCompliance from "./categories/security_identity_compliance";
import serverless from "./categories/serverless";
import storage from "./categories/storage";

export const QUESTION_BANK = [
    ...analytics,
    ...applicationIntegration,
    ...businessApplications,
    ...cloudFinancialManagement,
    ...computeContainers,
    ...customerEnablement,
    ...database,
    ...developerTools,
    ...endUserComputing,
    ...frontendWeb,
    ...iot,
    ...machineLearning,
    ...managementGovernance,
    ...migrationTransfer,
    ...networking,
    ...securityIdentityCompliance,
    ...serverless,
    ...storage,
];

// opcional: export default si prefieres importarlo como default en algún sitio
export default QUESTION_BANK;
