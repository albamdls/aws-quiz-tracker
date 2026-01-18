export default [
  {
    id: 21,
    title: "Practice Exam 21",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software. <br> Which AWS service can be used to accomplish this?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Amazon RDS</li>
      <li><input type="checkbox" name="question-0" value="B">B. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-0" value="C">C. Amazon Aurora</li>
      <li><input type="checkbox" name="question-0" value="D">D. Amazon Redshift</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.html">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.html</a></p>

    </details>
  </li>
  <li>A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas.<br> Which of the following meets these requirements?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. AWS Accounts</li>
      <li><input type="checkbox" name="question-1" value="B">B. AWS Regions</li>
      <li><input type="checkbox" name="question-1" value="C">C. Availability Zones</li>
      <li><input type="checkbox" name="question-1" value="D">D. Edge locations</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://www.botmetric.com/blog/having-a-disaster-recovery-plan-is-pivotal-the-dos-and-donts-on-aws-cloud/">https://www.botmetric.com/blog/having-a-disaster-recovery-plan-is-pivotal-the-dos-and-donts-on-aws-cloud/</a></p>

    </details>
  </li>
  <li>Which features and benefits does the AWS Organizations service provide? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Establishing real-time communications between members of an internal team</li>
      <li><input type="checkbox" name="question-2" value="B">B. Facilitating the use of NoSQL databases</li>
      <li><input type="checkbox" name="question-2" value="C">C. Providing automated security checks</li>
      <li><input type="checkbox" name="question-2" value="D">D. Implementing consolidated billing</li>
      <li><input type="checkbox" name="question-2" value="E">E. Enforcing the governance of AWS accounts</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: DE</p>

      <p>Explanation: <a href="https://aws.amazon.com/organizations/">https://aws.amazon.com/organizations/</a></p>

    </details>
  </li>
  <li>Which AWS service is used to automate configuration management using Chef and Puppet?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-3" value="B">B. AWS OpsWorks</li>
      <li><input type="checkbox" name="question-3" value="C">C. AWS CloudFormation</li>
      <li><input type="checkbox" name="question-3" value="D">D. AWS Systems Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/opsworks/">https://aws.amazon.com/opsworks/</a></p>

    </details>
  </li>
  <li>Which tool is best suited for combining the billing of AWS accounts that were previously independent from one another?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Detailed billing report</li>
      <li><input type="checkbox" name="question-4" value="B">B. Consolidated billing</li>
      <li><input type="checkbox" name="question-4" value="C">C. AWS Cost and Usage report</li>
      <li><input type="checkbox" name="question-4" value="D">D. Cost allocation report</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></p>

    </details>
  </li>
  <li>The AWS Total Cost of Ownership (TCO) Calculator is used to:
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. receive reports that break down AWS Cloud compute costs by duration, resource, or tags</li>
      <li><input type="checkbox" name="question-5" value="B">B. estimate savings when comparing the AWS Cloud to an on-premises environment</li>
      <li><input type="checkbox" name="question-5" value="C">C. estimate a monthly bill for the AWS Cloud resources that will be used</li>
      <li><input type="checkbox" name="question-5" value="D">D. enable billing alerts to monitor actual AWS costs compared to estimated costs</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/tco-calculator/">https://aws.amazon.com/tco-calculator/</a></p>

    </details>
  </li>
  <li>Which AWS services can be used to provide network connectivity between an on-premises network and a VPC? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Amazon Route 53</li>
      <li><input type="checkbox" name="question-6" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-6" value="C">C. AWS Data Pipeline</li>
      <li><input type="checkbox" name="question-6" value="D">D. AWS VPN</li>
      <li><input type="checkbox" name="question-6" value="E">E. Amazon Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation: <a href="https://aws.amazon.com/directconnect/faqs/">https://aws.amazon.com/directconnect/faqs/</a></p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, which of the following are customer responsibilities? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Setting up server-side encryption on an Amazon S3 bucket</li>
      <li><input type="checkbox" name="question-7" value="B">B. Amazon RDS instance patching</li>
      <li><input type="checkbox" name="question-7" value="C">C. Network and firewall configurations</li>
      <li><input type="checkbox" name="question-7" value="D">D. Physical security of data center facilities</li>
      <li><input type="checkbox" name="question-7" value="E">E. Compute capacity availability</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>What is the MINIMUM AWS Support plan level that will provide users with access to the AWS Support API?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Developer</li>
      <li><input type="checkbox" name="question-8" value="B">B. Enterprise</li>
      <li><input type="checkbox" name="question-8" value="C">C. Business</li>
      <li><input type="checkbox" name="question-8" value="D">D. Basic</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/plans/">https://aws.amazon.com/premiumsupport/plans/</a></p>

    </details>
  </li>
  <li>A company has deployed several relational databases on Amazon EC2 instances. Every month, the database software vendor releases new security patches that need to be applied to the databases. <br> What is the MOST efficient way to apply the security patches?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. Connect to each database instance on a monthly basis, and download and apply the necessary security patches from the vendor.</li>
      <li><input type="checkbox" name="question-9" value="B">B. Enable automatic patching for the instances using the Amazon RDS console.</li>
      <li><input type="checkbox" name="question-9" value="C">C. In AWS Config, configure a rule for the instances and the required patch level.</li>
      <li><input type="checkbox" name="question-9" value="D">D. Use AWS Systems Manager to automate database patching according to a schedule.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/rds/faqs/">https://aws.amazon.com/rds/faqs/</a></p>

    </details>
  </li>
  <li>A company wants to use Amazon Elastic Compute Cloud (Amazon EC2) to deploy a global commercial application. The deployment solution should be built with the highest redundancy and fault tolerance. <br> Based on this situation, the Amazon EC2 instances should be deployed:
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. in a single Availability Zone in one AWS Region</li>
      <li><input type="checkbox" name="question-10" value="B">B. with multiple Elastic Network Interfaces belonging to different subnets</li>
      <li><input type="checkbox" name="question-10" value="C">C. across multiple Availability Zones in one AWS Region</li>
      <li><input type="checkbox" name="question-10" value="D">D. across multiple Availability Zones in two AWS Regions</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://jayendrapatil.com/aws-high-availability-fault-tolerance-architecture-certification/">https://jayendrapatil.com/aws-high-availability-fault-tolerance-architecture-certification/</a></p>

    </details>
  </li>
  <li>A company has an application with users in both Australia and Brazil. All the company infrastructure is currently provisioned in the Asia Pacific (Sydney) Region in Australia, and Brazilian users are experiencing high latency. <br> What should the company do to reduce latency?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Implement AWS Direct Connect for users in Brazil</li>
      <li><input type="checkbox" name="question-11" value="B">B. Provision resources in the South America (São Paulo) Region in Brazil.</li>
      <li><input type="checkbox" name="question-11" value="C">C. Use AWS Transit Gateway to quickly route users from Brazil to the application</li>
      <li><input type="checkbox" name="question-11" value="D">D. Launch additional Amazon EC2 instances in Sydney to handle the demand</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/transit-gateway/">https://aws.amazon.com/transit-gateway/</a></p>

    </details>
  </li>
  <li>An Amazon EC2 instance runs only when needed yet must remain active for the duration of the process. <br> What is the most appropriate purchasing option?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Dedicated Instances</li>
      <li><input type="checkbox" name="question-12" value="B">B. Spot Instances</li>
      <li><input type="checkbox" name="question-12" value="C">C. On-Demand Instances</li>
      <li><input type="checkbox" name="question-12" value="D">D. Reserved Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which AWS dashboard displays relevant and timely information to help users manage events in progress, and provides proactive notifications to help plan for scheduled activities?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. AWS Service Health Dashboard</li>
      <li><input type="checkbox" name="question-13" value="B">B. AWS Personal Health Dashboard</li>
      <li><input type="checkbox" name="question-13" value="C">C. AWS Trusted Advisor dashboard</li>
      <li><input type="checkbox" name="question-13" value="D">D. Amazon CloudWatch dashboard</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/">https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/</a></p>

    </details>
  </li>
  <li>Which AWS hybrid storage service enables a user’s on-premises applications to seamlessly use AWS Cloud storage?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. AWS Backup</li>
      <li><input type="checkbox" name="question-14" value="B">B. Amazon Connect</li>
      <li><input type="checkbox" name="question-14" value="C">C. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-14" value="D">D. AWS Storage Gateway</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/storagegateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&amp;whats-new-cards.sort-order=desc">https://aws.amazon.com/storagegateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&amp;whats-new-cards.sort-order=desc</a></p>

    </details>
  </li>
  <li>Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Access keys</li>
      <li><input type="checkbox" name="question-15" value="B">B. Virtual private gateways</li>
      <li><input type="checkbox" name="question-15" value="C">C. Security groups</li>
      <li><input type="checkbox" name="question-15" value="D">D. Access Control Lists (ACL)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html</a></p>

    </details>
  </li>
  <li>What is the most efficient way to establish network connectivity from on-premises to multiple VPCs in different AWS Regions?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. Use AWS Direct Connect</li>
      <li><input type="checkbox" name="question-16" value="B">B. Use AWS VPN</li>
      <li><input type="checkbox" name="question-16" value="C">C. Use AWS Client VPN</li>
      <li><input type="checkbox" name="question-16" value="D">D. Use an AWS Transit Gateway</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf">https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf</a></p>

    </details>
  </li>
  <li>Which AWS Support plan provides access to architectural and operational reviews, as well as 24/7 access to Senior Cloud Support Engineers through email, online chat, and phone?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Basic</li>
      <li><input type="checkbox" name="question-17" value="B">B. Business</li>
      <li><input type="checkbox" name="question-17" value="C">C. Developer</li>
      <li><input type="checkbox" name="question-17" value="D">D. Enterprise</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/plans/enterprise/">https://aws.amazon.com/premiumsupport/plans/enterprise/</a></p>

    </details>
  </li>
  <li>Which AWS service or feature helps restrict the AWS services, resources, and individual API actions the users and roles in each member account can access?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Amazon Cognito</li>
      <li><input type="checkbox" name="question-18" value="B">B. AWS Organizations</li>
      <li><input type="checkbox" name="question-18" value="C">C. AWS Shield</li>
      <li><input type="checkbox" name="question-18" value="D">D. AWS Firewall Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html</a></p>

    </details>
  </li>
  <li>What is the best resource for a user to find compliance-related information and reports about AWS?
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. AWS Artifact</li>
      <li><input type="checkbox" name="question-19" value="B">B. AWS Marketplace</li>
      <li><input type="checkbox" name="question-19" value="C">C. Amazon Inspector</li>
      <li><input type="checkbox" name="question-19" value="D">D. AWS Support</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/faq/">https://aws.amazon.com/compliance/faq/</a></p>

    </details>
  </li>
  <li>Which Amazon S3 storage class is optimized to provide access to data with lower resiliency requirements, but rapid access when needed such as duplicate backups?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. Amazon S3 Standard</li>
      <li><input type="checkbox" name="question-20" value="B">B. Amazon S3 Glacier Deep Archive</li>
      <li><input type="checkbox" name="question-20" value="C">C. Amazon S3 One Zone-Infrequent Access</li>
      <li><input type="checkbox" name="question-20" value="D">D. Amazon S3 Glacier</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/s3/storage-classes/">https://aws.amazon.com/s3/storage-classes/</a></p>

    </details>
  </li>
  <li>What is an Availability Zone in AWS?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. One or more physical data centers</li>
      <li><input type="checkbox" name="question-21" value="B">B. A completely isolated geographic location</li>
      <li><input type="checkbox" name="question-21" value="C">C. One or more edge locations based around the world</li>
      <li><input type="checkbox" name="question-21" value="D">D. A data center location with a single source of power and networking</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/about-aws/global-infrastructure/regions_az/">https://aws.amazon.com/about-aws/global-infrastructure/regions_az/</a></p>

    </details>
  </li>
  <li>Which AWS services can be used as infrastructure automation tools? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. AWS CloudFormation</li>
      <li><input type="checkbox" name="question-22" value="B">B. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-22" value="C">C. AWS Batch</li>
      <li><input type="checkbox" name="question-22" value="D">D. AWS OpsWorks</li>
      <li><input type="checkbox" name="question-22" value="E">E. Amazon QuickSight</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation: <a href="https://blog.newrelic.com/engineering/best-cloud-infrastructure-automation-tools/">https://blog.newrelic.com/engineering/best-cloud-infrastructure-automation-tools/</a></p>

    </details>
  </li>
  <li>Which AWS service enables users to create copies of resources across AWS Regions?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Amazon ElastiCache</li>
      <li><input type="checkbox" name="question-23" value="B">B. AWS CloudFormation</li>
      <li><input type="checkbox" name="question-23" value="C">C. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-23" value="D">D. AWS Systems Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html</a></p>

    </details>
  </li>
  <li>A user would like to encrypt data that is received, stored, and managed by AWS CloudTrail. <br> Which AWS service will provide this capability?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. AWS Secrets Manager</li>
      <li><input type="checkbox" name="question-24" value="B">B. AWS Systems Manager</li>
      <li><input type="checkbox" name="question-24" value="C">C. AWS Key Management Service (AWS KMS)</li>
      <li><input type="checkbox" name="question-24" value="D">D. AWS Certificate Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/data-protection.html">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/data-protection.html</a></p>

    </details>
  </li>
  <li>Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Easy and fast deployment of applications in multiple Regions around the world</li>
      <li><input type="checkbox" name="question-25" value="B">B. Security of the AWS Cloud</li>
      <li><input type="checkbox" name="question-25" value="C">C. Elasticity of the AWS Cloud</li>
      <li><input type="checkbox" name="question-25" value="D">D. Lower variable costs due to massive economies of scale</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>What credential components are required to gain programmatic access to an AWS account? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. An access key ID</li>
      <li><input type="checkbox" name="question-26" value="B">B. A primary key</li>
      <li><input type="checkbox" name="question-26" value="C">C. A secret access key</li>
      <li><input type="checkbox" name="question-26" value="D">D. A user ID</li>
      <li><input type="checkbox" name="question-26" value="E">E. A secondary key</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html">https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html</a></p>

    </details>
  </li>
  <li>Which of the following are AWS compute services? (Select two.)
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. Amazon Lightsail</li>
      <li><input type="checkbox" name="question-27" value="B">B. AWS Systems Manager</li>
      <li><input type="checkbox" name="question-27" value="C">C. AWS CloudFormation</li>
      <li><input type="checkbox" name="question-27" value="D">D. AWS Batch</li>
      <li><input type="checkbox" name="question-27" value="E">E. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html">https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html</a></p>

    </details>
  </li>
  <li>How can a company separate costs for network traffic, Amazon EC2, Amazon S3, and other AWS services by department?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Add department-specific tags to each resource</li>
      <li><input type="checkbox" name="question-28" value="B">B. Create a separate VPC for each department</li>
      <li><input type="checkbox" name="question-28" value="C">C. Create a separate AWS account for each department</li>
      <li><input type="checkbox" name="question-28" value="D">D. Use AWS Organizations</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>What is a benefit of consolidated billing for AWS accounts?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Access to AWS Personal Health Dashboard</li>
      <li><input type="checkbox" name="question-29" value="B">B. Combined usage volume discounts</li>
      <li><input type="checkbox" name="question-29" value="C">C. Improved account security</li>
      <li><input type="checkbox" name="question-29" value="D">D. Centralized AWS IAM</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://jayendrapatil.com/aws-consolidated-billing/">https://jayendrapatil.com/aws-consolidated-billing/</a></p>

    </details>
  </li>
  <li>Which AWS service will allow a user to set custom cost and usage limits, and will alert when the thresholds are exceeded?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. AWS Organizations</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS Budgets</li>
      <li><input type="checkbox" name="question-30" value="C">C. Cost Explorer</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS Trusted Advisor</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/">https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/</a></p>

    </details>
  </li>
  <li>Which AWS service provides the ability to detect inadvertent data leaks of personally identifiable information (PII) and user credential data?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Amazon GuardDuty</li>
      <li><input type="checkbox" name="question-31" value="B">B. Amazon Inspector</li>
      <li><input type="checkbox" name="question-31" value="C">C. Amazon Macie</li>
      <li><input type="checkbox" name="question-31" value="D">D. AWS Shield</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/macie/">https://aws.amazon.com/macie/</a></p>

    </details>
  </li>
  <li>Which tool can be used to monitor AWS service limits?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. AWS Total Cost of Ownership (TCO) Calculator</li>
      <li><input type="checkbox" name="question-32" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-32" value="C">C. AWS Personal Health Dashboard</li>
      <li><input type="checkbox" name="question-32" value="D">D. AWS Cost and Usage report</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/mt/monitoring-service-limits-with-trusted-advisor-and-amazon-cloudwatch/">https://aws.amazon.com/blogs/mt/monitoring-service-limits-with-trusted-advisor-and-amazon-cloudwatch/</a></p>

    </details>
  </li>
  <li>A company has distributed its workload on both the AWS Cloud and some on-premises servers. <br> What type of architecture is this?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Virtual private network</li>
      <li><input type="checkbox" name="question-33" value="B">B. Virtual private cloud</li>
      <li><input type="checkbox" name="question-33" value="C">C. Hybrid cloud</li>
      <li><input type="checkbox" name="question-33" value="D">D. Private cloud</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/hybrid/">https://aws.amazon.com/hybrid/</a></p>

    </details>
  </li>
  <li>Which of the following describes a security best practice that can be implemented using AWS IAM?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Disable AWS Management Console access for all users</li>
      <li><input type="checkbox" name="question-34" value="B">B. Generate secret keys for every IAM user</li>
      <li><input type="checkbox" name="question-34" value="C">C. Grant permissions to users who are required to perform a given task only</li>
      <li><input type="checkbox" name="question-34" value="D">D. Store AWS credentials within Amazon EC2 instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://cloudcheckr.com/cloud-security/top-5-iam-best-practices/">https://cloudcheckr.com/cloud-security/top-5-iam-best-practices/</a></p>

    </details>
  </li>
  <li>What can be used to automate and manage secure, well-architected, multi-account AWS environments?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. AWS shared responsibility model</li>
      <li><input type="checkbox" name="question-35" value="B">B. AWS Control Tower</li>
      <li><input type="checkbox" name="question-35" value="C">C. AWS Security Hub</li>
      <li><input type="checkbox" name="question-35" value="D">D. AWS Well-Architected Tool</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Control Tower automates the process of setting up a new baseline multi-account AWS environment that is secure, well-architected, and ready to use.</li>
        <li>Control Tower incorporates the knowledge that AWS Professional Service has gained over the course of thousands of successful customer engagements.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/blogs/aws/aws-control-tower-set-up-govern-a-multi-account-aws-environment/">https://aws.amazon.com/blogs/aws/aws-control-tower-set-up-govern-a-multi-account-aws-environment/</a></p>

    </details>
  </li>
  <li>Which AWS service or feature allows a user to easily scale connectivity among thousands of VPCs?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. VPC peering</li>
      <li><input type="checkbox" name="question-36" value="B">B. AWS Transit Gateway</li>
      <li><input type="checkbox" name="question-36" value="C">C. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-36" value="D">D. AWS Global Accelerator</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/training-and-certification/explore-the-aws-transit-gateway-networking-and-scaling-digital-course/">https://aws.amazon.com/blogs/training-and-certification/explore-the-aws-transit-gateway-networking-and-scaling-digital-course/</a></p>

    </details>
  </li>
  <li>A company needs protection from expanded distributed denial of service (DDoS) attacks on its website and assistance from AWS experts during such events. <br> Which AWS managed service will meet these requirements?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. AWS Shield Advanced</li>
      <li><input type="checkbox" name="question-37" value="B">B. AWS Firewall Manager</li>
      <li><input type="checkbox" name="question-37" value="C">C. AWS WAF</li>
      <li><input type="checkbox" name="question-37" value="D">D. Amazon GuardDuty</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html">https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html</a></p>

    </details>
  </li>
  <li>A company’s application has flexible start and end times. <br> Which Amazon EC2 pricing model will be the MOST cost-effective?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. On-Demand Instances</li>
      <li><input type="checkbox" name="question-38" value="B">B. Spot Instances</li>
      <li><input type="checkbox" name="question-38" value="C">C. Reserved Instances</li>
      <li><input type="checkbox" name="question-38" value="D">D. Dedicated Hosts</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/pricing/">https://aws.amazon.com/ec2/pricing/</a></p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, what are the customer’s responsibilities? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Physical and environmental security</li>
      <li><input type="checkbox" name="question-39" value="B">B. Physical network devices including firewalls</li>
      <li><input type="checkbox" name="question-39" value="C">C. Storage device decommissioning</li>
      <li><input type="checkbox" name="question-39" value="D">D. Security of data in transit</li>
      <li><input type="checkbox" name="question-39" value="E">E. Data integrity authentication</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: DE</p>

    </details>
  </li>
  <li>A cloud practitioner has a data analysis workload that is infrequently executed and can be interrupted without harm. To optimize for cost, which Amazon EC2 purchasing option should be used?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. On-Demand Instances</li>
      <li><input type="checkbox" name="question-40" value="B">B. Reserved Instances</li>
      <li><input type="checkbox" name="question-40" value="C">C. Spot Instances</li>
      <li><input type="checkbox" name="question-40" value="D">D. Dedicated Hosts</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/pricing/">https://aws.amazon.com/ec2/pricing/</a></p>

    </details>
  </li>
  <li>Which AWS container service will help a user install, operate, and scale the cluster management infrastructure?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Amazon Elastic Container Registry (Amazon ECR)</li>
      <li><input type="checkbox" name="question-41" value="B">B. AWS Elastic Beanstalk</li>
      <li><input type="checkbox" name="question-41" value="C">C. Amazon Elastic Container Service (Amazon ECS)</li>
      <li><input type="checkbox" name="question-41" value="D">D. Amazon Elastic Block Store (Amazon EBS)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which of the following allows an application running on an Amazon EC2 instance to securely write data to an Amazon S3 bucket without using long term credentials?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Amazon Cognito</li>
      <li><input type="checkbox" name="question-42" value="B">B. AWS Shield</li>
      <li><input type="checkbox" name="question-42" value="C">C. AWS IAM role</li>
      <li><input type="checkbox" name="question-42" value="D">D. AWS IAM user access key</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>A company with a Developer-level AWS Support plan provisioned an Amazon RDS database and cannot connect to it. <br> Who should the developer contact for this level of support?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. AWS Support using a support case</li>
      <li><input type="checkbox" name="question-43" value="B">B. AWS Professional Services</li>
      <li><input type="checkbox" name="question-43" value="C">C. AWS technical account manager</li>
      <li><input type="checkbox" name="question-43" value="D">D. AWS consulting partners</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>What is the purpose of having an internet gateway within a VPC?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. To create a VPN connection to the VPC</li>
      <li><input type="checkbox" name="question-44" value="B">B. To allow communication between the VPC and the Internet</li>
      <li><input type="checkbox" name="question-44" value="C">C. To impose bandwidth constraints on internet traffic</li>
      <li><input type="checkbox" name="question-44" value="D">D. To load balance traffic from the Internet across Amazon EC2 instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>A company must ensure that its endpoint for a database instance remains the same after a single Availability Zone service interruption. The application needs to resume database operations without the need for manual administrative intervention. <br> How can these requirements be met?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. Use multiple Amazon Route 53 routes to the standby database instance endpoint hosted on AWS Storage Gateway.</li>
      <li><input type="checkbox" name="question-45" value="B">B. Configure Amazon RDS Multi-Availability Zone deployments with automatic failover to the standby.</li>
      <li><input type="checkbox" name="question-45" value="C">C. Add multiple Application Load Balancers and deploy the database instance with AWS Elastic Beanstalk.</li>
      <li><input type="checkbox" name="question-45" value="D">D. Deploy a single Network Load Balancer to distribute incoming traffic across multiple Amazon CloudFront origins.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which AWS managed service can be used to distribute traffic between one or more Amazon EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. NAT gateway</li>
      <li><input type="checkbox" name="question-46" value="B">B. Elastic Load Balancing</li>
      <li><input type="checkbox" name="question-46" value="C">C. Amazon Athena</li>
      <li><input type="checkbox" name="question-46" value="D">D. AWS PrivateLink</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>AWS Trusted Advisor provides recommendations on which of the following? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Cost optimization</li>
      <li><input type="checkbox" name="question-47" value="B">B. Auditing</li>
      <li><input type="checkbox" name="question-47" value="C">C. Serverless architecture</li>
      <li><input type="checkbox" name="question-47" value="D">D. Performance</li>
      <li><input type="checkbox" name="question-47" value="E">E. Scalability</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

    </details>
  </li>
  <li>Which of the following tasks can only be performed after signing in with AWS account root user credentials? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Closing an AWS account</li>
      <li><input type="checkbox" name="question-48" value="B">B. Creating a new IAM policy</li>
      <li><input type="checkbox" name="question-48" value="C">C. Changing AWS Support plans</li>
      <li><input type="checkbox" name="question-48" value="D">D. Attaching a role to an Amazon EC2 instance</li>
      <li><input type="checkbox" name="question-48" value="E">E. Generating access keys for IAM users</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

    </details>
  </li>
  <li>Fault tolerance refers to:
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. the ability of an application to accommodate growth without changing design</li>
      <li><input type="checkbox" name="question-49" value="B">B. how well and how quickly an application’s environment can have lost data restored</li>
      <li><input type="checkbox" name="question-49" value="C">C. how secure your application is</li>
      <li><input type="checkbox" name="question-49" value="D">D. the built-in redundancy of an application’s components</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

    </details>
  </li>
</ol>
      `,
    data: []
  },
];