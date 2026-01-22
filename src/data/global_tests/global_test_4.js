export default [
  {
    id: 4,
    title: "Exam 4",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>A developer needs to set up an SSL security certificate for a client’s eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-0" value="B">B. AWS ACM.</li>
      <li><input type="checkbox" name="question-0" value="C">C. AWS Directory Service.</li>
      <li><input type="checkbox" name="question-0" value="D">D. AWS Identity &amp; Access Management.</li>
      <li><input type="checkbox" name="question-0" value="E">E. AWS Data Pipeline.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, B</p>
    </details>
  </li>
  <li>Which of the following AWS services scale automatically without your intervention? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. Amazon EC2.</li>
      <li><input type="checkbox" name="question-1" value="B">B. Amazon S3.</li>
      <li><input type="checkbox" name="question-1" value="C">C. AWS Lambda.</li>
      <li><input type="checkbox" name="question-1" value="D">D. Amazon EMR.</li>
      <li><input type="checkbox" name="question-1" value="E">E. Amazon EBS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Application management.</li>
      <li><input type="checkbox" name="question-2" value="B">B. Capacity management.</li>
      <li><input type="checkbox" name="question-2" value="C">C. Access control.</li>
      <li><input type="checkbox" name="question-2" value="D">D. Operating system maintenance.</li>
      <li><input type="checkbox" name="question-2" value="E">E. Data management.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>How do ELBs improve the reliability of your application?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. By distributing traffic across multiple S3 buckets.</li>
      <li><input type="checkbox" name="question-3" value="B">B. By replicating data to multiple availability zones.</li>
      <li><input type="checkbox" name="question-3" value="C">C. By creating database Read Replicas.</li>
      <li><input type="checkbox" name="question-3" value="D">D. By ensuring that only healthy targets receive traffic.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. On-demand instances.</li>
      <li><input type="checkbox" name="question-4" value="B">B. Spot instances.</li>
      <li><input type="checkbox" name="question-4" value="C">C. Dedicated instances.</li>
      <li><input type="checkbox" name="question-4" value="D">D. Reserved instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. Snowball.</li>
      <li><input type="checkbox" name="question-5" value="B">B. S3 Transfer Acceleration.</li>
      <li><input type="checkbox" name="question-5" value="C">C. Snowmobile.</li>
      <li><input type="checkbox" name="question-5" value="D">D. Amazon VPC.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Amazon S3 Glacier.</li>
      <li><input type="checkbox" name="question-6" value="B">B. Amazon EFS.</li>
      <li><input type="checkbox" name="question-6" value="C">C. Amazon S3 Standard.</li>
      <li><input type="checkbox" name="question-6" value="D">D. Amazon EBS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which AWS Service is used to manage user permissions?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Security Groups.</li>
      <li><input type="checkbox" name="question-7" value="B">B. Amazon ECS.</li>
      <li><input type="checkbox" name="question-7" value="C">C. AWS IAM.</li>
      <li><input type="checkbox" name="question-7" value="D">D. AWS Support.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which support plan includes AWS Support Concierge Service?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Premium Support.</li>
      <li><input type="checkbox" name="question-8" value="B">B. Business Support.</li>
      <li><input type="checkbox" name="question-8" value="C">C. Enterprise Support.</li>
      <li><input type="checkbox" name="question-8" value="D">D. Standard Support.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. AWS Config.</li>
      <li><input type="checkbox" name="question-9" value="B">B. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-9" value="C">C. AWS CloudTrail.</li>
      <li><input type="checkbox" name="question-9" value="D">D. AWS CloudFormation.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>What are the benefits of using an AWS-managed service? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. Provides complete control over the virtual infrastructure.</li>
      <li><input type="checkbox" name="question-10" value="B">B. Allows customers to deliver new solutions faster.</li>
      <li><input type="checkbox" name="question-10" value="C">C. Lowers operational complexity.</li>
      <li><input type="checkbox" name="question-10" value="D">D. Eliminates the need to encrypt data.</li>
      <li><input type="checkbox" name="question-10" value="E">E. Allows developers to control all patching related activities.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>Which of the following are use cases for Amazon S3? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Hosting static websites.</li>
      <li><input type="checkbox" name="question-11" value="B">B. Hosting websites that require sustained high CPU utilization.</li>
      <li><input type="checkbox" name="question-11" value="C">C. Cost-effective database and log storage.</li>
      <li><input type="checkbox" name="question-11" value="D">D. A media store for the CloudFront service.</li>
      <li><input type="checkbox" name="question-11" value="E">E. Processing data streams at any scale.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>What is the AWS’ recommendation regarding access keys?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Delete all access keys and use passwords instead.</li>
      <li><input type="checkbox" name="question-12" value="B">B. Only share them with trusted people.</li>
      <li><input type="checkbox" name="question-12" value="C">C. Rotate them regularly.</li>
      <li><input type="checkbox" name="question-12" value="D">D. Save them within your application code.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Key Pair.</li>
      <li><input type="checkbox" name="question-13" value="B">B. Access Keys.</li>
      <li><input type="checkbox" name="question-13" value="C">C. SDK.</li>
      <li><input type="checkbox" name="question-13" value="D">D. MFA.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>What is the benefit of using an API to access AWS Services?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. It improves the performance of AWS resources.</li>
      <li><input type="checkbox" name="question-14" value="B">B. It reduces the time needed to provision AWS resources.</li>
      <li><input type="checkbox" name="question-14" value="C">C. It reduces the number of developers necessary.</li>
      <li><input type="checkbox" name="question-14" value="D">D. It allows for programmatic management of AWS resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. AWS Storage Gateway.</li>
      <li><input type="checkbox" name="question-15" value="B">B. Amazon S3.</li>
      <li><input type="checkbox" name="question-15" value="C">C. Amazon EBS.</li>
      <li><input type="checkbox" name="question-15" value="D">D. Amazon Glacier.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>How can AWS customers track and avoid over-spending on underutilized reserved instances?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.</li>
      <li><input type="checkbox" name="question-16" value="B">B. Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.</li>
      <li><input type="checkbox" name="question-16" value="C">C. Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.</li>
      <li><input type="checkbox" name="question-16" value="D">D. Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>What is the AWS service that provides five times the performance of a standard MySQL database?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Amazon Aurora.</li>
      <li><input type="checkbox" name="question-17" value="B">B. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-17" value="C">C. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-17" value="D">D. Amazon Neptune.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>What does AWS Service Catalog provide?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. It enables customers to quickly find descriptions and use cases for AWS services.</li>
      <li><input type="checkbox" name="question-18" value="B">B. It enables customers to explore the different catalogs of AWS services.</li>
      <li><input type="checkbox" name="question-18" value="C">C. It simplifies organizing and governing commonly deployed IT services.</li>
      <li><input type="checkbox" name="question-18" value="D">D. It allows developers to deploy infrastructure on AWS using familiar programming languages.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Protecting credentials.</li>
      <li><input type="checkbox" name="question-19" value="B">B. Logging access activity.</li>
      <li><input type="checkbox" name="question-19" value="C">C. Patching the database software.</li>
      <li><input type="checkbox" name="question-19" value="D">D. Operating system maintenance.</li>
      <li><input type="checkbox" name="question-19" value="E">E. Creating access policies.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>Which of the following AWS Services helps with planning application migration to the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. AWS Snowball Migration Service.</li>
      <li><input type="checkbox" name="question-20" value="B">B. AWS Application Discovery Service.</li>
      <li><input type="checkbox" name="question-20" value="C">C. AWS DMS.</li>
      <li><input type="checkbox" name="question-20" value="D">D. AWS Migration Hub.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Amazon Machine Image.</li>
      <li><input type="checkbox" name="question-21" value="B">B. AWS Cost Explorer.</li>
      <li><input type="checkbox" name="question-21" value="C">C. AWS Cost &amp; Usage Report.</li>
      <li><input type="checkbox" name="question-21" value="D">D. Amazon CloudWatch.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which statement best describes the concept of an AWS region?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. An AWS Region is a geographical location with a collection of Edge locations.</li>
      <li><input type="checkbox" name="question-22" value="B">B. An AWS Region is a virtual network dedicated only to a single AWS customer.</li>
      <li><input type="checkbox" name="question-22" value="C">C. An AWS Region is a geographical location with a collection of Availability Zones.</li>
      <li><input type="checkbox" name="question-22" value="D">D. An AWS Region represents the country where the AWS infrastructure exist.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. SNS logs.</li>
      <li><input type="checkbox" name="question-23" value="B">B. SQS logs.</li>
      <li><input type="checkbox" name="question-23" value="C">C. CloudWatch Logs.</li>
      <li><input type="checkbox" name="question-23" value="D">D. CloudTrail logs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Availability Zones.</li>
      <li><input type="checkbox" name="question-24" value="B">B. Data sovereignty.</li>
      <li><input type="checkbox" name="question-24" value="C">C. The number of reads and writes per second.</li>
      <li><input type="checkbox" name="question-24" value="D">D. The nature of the queries.</li>
      <li><input type="checkbox" name="question-24" value="E">E. Software bugs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Quickly identify resources that belong to a specific project.</li>
      <li><input type="checkbox" name="question-25" value="B">B. Quickly identify software solutions on AWS.</li>
      <li><input type="checkbox" name="question-25" value="C">C. Track API calls in your AWS account.</li>
      <li><input type="checkbox" name="question-25" value="D">D. Quickly identify deleted resources and their metadata.</li>
      <li><input type="checkbox" name="question-25" value="E">E. Track AWS spending across multiple resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>What are AWS shared controls?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.</li>
      <li><input type="checkbox" name="question-26" value="B">B. Controls that a customer inherits from AWS.</li>
      <li><input type="checkbox" name="question-26" value="C">C. Controls that apply to both the infrastructure layer and customer layers.</li>
      <li><input type="checkbox" name="question-26" value="D">D. Controls that the customer and AWS collaborate together upon to secure the infrastructure.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which design principles relate to performance efficiency in AWS? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. Build multi-region architectures to better serve global customers.</li>
      <li><input type="checkbox" name="question-27" value="B">B. Apply security at all layers.</li>
      <li><input type="checkbox" name="question-27" value="C">C. Implement strong Identity and Access controls.</li>
      <li><input type="checkbox" name="question-27" value="D">D. Use serverless architectures.</li>
      <li><input type="checkbox" name="question-27" value="E">E. Enable audit logging.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Protecting sensitive data.</li>
      <li><input type="checkbox" name="question-28" value="B">B. Patching of the underlying infrastructure.</li>
      <li><input type="checkbox" name="question-28" value="C">C. Setup and operation of managed databases.</li>
      <li><input type="checkbox" name="question-28" value="D">D. Maintaining consistent hardware components.</li>
      <li><input type="checkbox" name="question-28" value="E">E. Installing and configuring third-party software.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Free commercial software licenses.</li>
      <li><input type="checkbox" name="question-29" value="B">B. Free technical support.</li>
      <li><input type="checkbox" name="question-29" value="C">C. Elastic resources.</li>
      <li><input type="checkbox" name="question-29" value="D">D. On-site visits for auditing.</li>
      <li><input type="checkbox" name="question-29" value="E">E. Cost Savings.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. Amazon Inspector.</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS Virtual Private Gateway.</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS Batch.</li>
      <li><input type="checkbox" name="question-30" value="D">D. Amazon ECS.</li>
      <li><input type="checkbox" name="question-30" value="E">E. AWS Config.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Amazon EC2 is considered a Serverless Web Service.</li>
      <li><input type="checkbox" name="question-31" value="B">B. Amazon EC2 eliminates the need to invest in hardware upfront.</li>
      <li><input type="checkbox" name="question-31" value="C">C. Amazon EC2 can launch as many or as few virtual servers as needed.</li>
      <li><input type="checkbox" name="question-31" value="D">D. Amazon EC2 offers scalable computing.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>What is the AWS Compute service that executes code only when triggered by events?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. AWS Lambda.</li>
      <li><input type="checkbox" name="question-32" value="B">B. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-32" value="C">C. AWS Transit Gateway.</li>
      <li><input type="checkbox" name="question-32" value="D">D. Amazon EC2.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Amazon EBS Snapshots.</li>
      <li><input type="checkbox" name="question-33" value="B">B. Amazon VPC.</li>
      <li><input type="checkbox" name="question-33" value="C">C. AWS Managed Servers.</li>
      <li><input type="checkbox" name="question-33" value="D">D. Amazon EC2 Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. AWS Secrets Manager.</li>
      <li><input type="checkbox" name="question-34" value="B">B. AWS WAF.</li>
      <li><input type="checkbox" name="question-34" value="C">C. AWS CAF.</li>
      <li><input type="checkbox" name="question-34" value="D">D. Amazon EFS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. AWS Cost Explorer.</li>
      <li><input type="checkbox" name="question-35" value="B">B. AWS TCO Calculator.</li>
      <li><input type="checkbox" name="question-35" value="C">C. AWS Budgets.</li>
      <li><input type="checkbox" name="question-35" value="D">D. AWS Pricing Calculator.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. Using AWS Trusted Advisor to find underutilized resources.</li>
      <li><input type="checkbox" name="question-36" value="B">B. Using AWS CloudTrail to record user activities.</li>
      <li><input type="checkbox" name="question-36" value="C">C. Using AWS CloudFormation to manage infrastructure as code.</li>
      <li><input type="checkbox" name="question-36" value="D">D. Deploying an application in multiple Availability Zones.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. AWS allows them to pay later when their business succeed.</li>
      <li><input type="checkbox" name="question-37" value="B">B. AWS can build complete data centers faster than any other Cloud provider.</li>
      <li><input type="checkbox" name="question-37" value="C">C. Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.</li>
      <li><input type="checkbox" name="question-37" value="D">D. AWS removes the need to invest in operational expenditure.</li>
      <li><input type="checkbox" name="question-37" value="E">E. Using AWS allows companies to replace large capital expenditure with low variable costs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>What are the benefits of using DynamoDB? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Automatically scales to meet required throughput capacity.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Provides resizable instances to match the current demand.</li>
      <li><input type="checkbox" name="question-38" value="C">C. Supports both relational and non-relational data models.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Offers extremely low (single-digit millisecond) latency.</li>
      <li><input type="checkbox" name="question-38" value="E">E. Supports the most popular NoSQL database engines such as CouchDB and MongoDB.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Versioning.</li>
      <li><input type="checkbox" name="question-39" value="B">B. Deduplication.</li>
      <li><input type="checkbox" name="question-39" value="C">C. Permissions.</li>
      <li><input type="checkbox" name="question-39" value="D">D. Decryption.</li>
      <li><input type="checkbox" name="question-39" value="E">E. Conversion.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. AWS Partners.</li>
      <li><input type="checkbox" name="question-40" value="B">B. AWS Artifact.</li>
      <li><input type="checkbox" name="question-40" value="C">C. AWS Professional Services.</li>
      <li><input type="checkbox" name="question-40" value="D">D. Amazon Athena.</li>
      <li><input type="checkbox" name="question-40" value="E">E. Amazon PinPoint.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Deleting unused EBS volumes after terminating an EC2instance.</li>
      <li><input type="checkbox" name="question-41" value="B">B. Deleting unused AutoScaling launch configuration.</li>
      <li><input type="checkbox" name="question-41" value="C">C. Deleting unused Elastic Load Balancers.</li>
      <li><input type="checkbox" name="question-41" value="D">D. Releasing unused Elastic IPs after terminating an EC2instance.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>What is the AWS tool that can help a company visualize their AWS spending in the last few months?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. AWS Cost Explorer.</li>
      <li><input type="checkbox" name="question-42" value="B">B. AWS Pricing Calculator.</li>
      <li><input type="checkbox" name="question-42" value="C">C. AWS Budgets.</li>
      <li><input type="checkbox" name="question-42" value="D">D. AWS Consolidated Billing.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>When running a workload in AWS, the customer is NOT responsible for: (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. Running penetration tests.</li>
      <li><input type="checkbox" name="question-43" value="B">B. Reserving capacity.</li>
      <li><input type="checkbox" name="question-43" value="C">C. Data center operations.</li>
      <li><input type="checkbox" name="question-43" value="D">D. Auditing and regulatory compliance.</li>
      <li><input type="checkbox" name="question-43" value="E">E. Infrastructure security.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Amazon Simple Email Service (Amazon SES).</li>
      <li><input type="checkbox" name="question-44" value="B">B. Amazon Simple Storage Service (Amazon S3).</li>
      <li><input type="checkbox" name="question-44" value="C">C. Amazon Simple Notification Service (Amazon SNS).</li>
      <li><input type="checkbox" name="question-44" value="D">D. Amazon Simple Queue Service (Amazon SQS).</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following allows you to create new RDS instances? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. AWS CodeDeploy.</li>
      <li><input type="checkbox" name="question-45" value="B">B. AWS Quick Starts.</li>
      <li><input type="checkbox" name="question-45" value="C">C. AWS CloudFormation.</li>
      <li><input type="checkbox" name="question-45" value="D">D. AWS DMS.</li>
      <li><input type="checkbox" name="question-45" value="E">E. AWS Management Console.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Low monthly instance maintenance costs.</li>
      <li><input type="checkbox" name="question-46" value="B">B. Low-cost instance tagging.</li>
      <li><input type="checkbox" name="question-46" value="C">C. Per-second instance billing.</li>
      <li><input type="checkbox" name="question-46" value="D">D. Low instance start-up fees.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which AWS Group assists customers in achieving their desired business outcomes?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. AWS Security Team.</li>
      <li><input type="checkbox" name="question-47" value="B">B. AWS Professional Services.</li>
      <li><input type="checkbox" name="question-47" value="C">C. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-47" value="D">D. AWS Concierge Support Team.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS service or feature is used to manage the keys used to encrypt customer data?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. AWS KMS.</li>
      <li><input type="checkbox" name="question-48" value="B">B. AWS Service Control Policies (SCPs).</li>
      <li><input type="checkbox" name="question-48" value="C">C. Multi-Factor Authentication (MFA).</li>
      <li><input type="checkbox" name="question-48" value="D">D. Amazon Macie.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which AWS Service allows customers to download AWS SOC &amp; PCI reports?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. AWS Well-Architected Tool.</li>
      <li><input type="checkbox" name="question-49" value="B">B. AWS Artifact.</li>
      <li><input type="checkbox" name="question-49" value="C">C. AWS Glue.</li>
      <li><input type="checkbox" name="question-49" value="D">D. Amazon Chime.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
</ol>
      `,
    data: []
  },
];