export default [
  {
    id: 6,
    title: "Practice Exam 6",
    questions: 50,
    rawHtml: `
            <ol>
  <li>Which of the following is true regarding the AWS availability zones and edge locations?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Edge locations are located in separate Availability Zones worldwide to serve global customers.</li>
      <li><input type="checkbox" name="question-0" value="B">B. An availability zone exists within an edge location to distribute content globally with low latency.</li>
      <li><input type="checkbox" name="question-0" value="C">C. An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.</li>
      <li><input type="checkbox" name="question-0" value="D">D. An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which features are included in the AWS Business Support Plan? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. 24x7 access to customer service.</li>
      <li><input type="checkbox" name="question-1" value="B">B. Access to Cloud Support Engineers via email only during business hours.</li>
      <li><input type="checkbox" name="question-1" value="C">C. Access to the Infrastructure Event Management (IEM) feature for additional fee.</li>
      <li><input type="checkbox" name="question-1" value="D">D. 24x7 access to the TAM feature.</li>
      <li><input type="checkbox" name="question-1" value="E">E. Partial access to the core Trusted Advisor checks.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Amazon GuardDuty.</li>
      <li><input type="checkbox" name="question-2" value="B">B. Amazon Personalize.</li>
      <li><input type="checkbox" name="question-2" value="C">C. Amazon Cognito.</li>
      <li><input type="checkbox" name="question-2" value="D">D. AWS IAM.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. AWS CloudFormation.</li>
      <li><input type="checkbox" name="question-3" value="B">B. AWS Config.</li>
      <li><input type="checkbox" name="question-3" value="C">C. AWS CloudTrail.</li>
      <li><input type="checkbox" name="question-3" value="D">D. AWS Auto Scaling.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Eliminates the need to monitor servers and applications.</li>
      <li><input type="checkbox" name="question-4" value="B">B. Manages all the compliance and auditing tasks.</li>
      <li><input type="checkbox" name="question-4" value="C">C. Provides custom hardware to meet any specification.</li>
      <li><input type="checkbox" name="question-4" value="D">D. Eliminates the need to guess on infrastructure capacity needs.</li>
      <li><input type="checkbox" name="question-4" value="E">E. Enables customers to trade their capital expenses for operational expenses.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  </li>
  <li>A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. AWS Fargate.</li>
      <li><input type="checkbox" name="question-5" value="B">B. Amazon Elastic Compute Cloud.</li>
      <li><input type="checkbox" name="question-5" value="C">C. Amazon RDS.</li>
      <li><input type="checkbox" name="question-5" value="D">D. AWS Database Migration service (DMS).</li>
      <li><input type="checkbox" name="question-5" value="E">E. AWS Lambda.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>Which AWS Service can perform health checks on Amazon EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. AWS CloudFormation.</li>
      <li><input type="checkbox" name="question-6" value="B">B. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-6" value="C">C. Amazon Chime.</li>
      <li><input type="checkbox" name="question-6" value="D">D. Amazon Aurora.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Amazon Comprehend.</li>
      <li><input type="checkbox" name="question-7" value="B">B. AWS IAM.</li>
      <li><input type="checkbox" name="question-7" value="C">C. Amazon Polly.</li>
      <li><input type="checkbox" name="question-7" value="D">D. Amazon Rekognition.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following are examples of AWS-managed databases? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Amazon Neptune.</li>
      <li><input type="checkbox" name="question-8" value="B">B. Amazon CloudSearch.</li>
      <li><input type="checkbox" name="question-8" value="C">C. Microsoft SQL Server on Amazon EC2.</li>
      <li><input type="checkbox" name="question-8" value="D">D. MySQL on Amazon EC2.</li>
      <li><input type="checkbox" name="question-8" value="E">E. Amazon RDS for MySQL.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. EC2 On-Demand Instances.</li>
      <li><input type="checkbox" name="question-9" value="B">B. EC2 Reserved Instances     - No Upfront.</li>
      <li><input type="checkbox" name="question-9" value="C">C. EC2 Spot Instances.</li>
      <li><input type="checkbox" name="question-9" value="D">D. EC2 Reserved Instances     - All Upfront.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. AWS account owner.</li>
      <li><input type="checkbox" name="question-10" value="B">B. AWS technical account manager.</li>
      <li><input type="checkbox" name="question-10" value="C">C. AWS security team.</li>
      <li><input type="checkbox" name="question-10" value="D">D. AWS cloud support engineers.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. AWS File Transfer Acceleration.</li>
      <li><input type="checkbox" name="question-11" value="B">B. AWS Server Migration Service.</li>
      <li><input type="checkbox" name="question-11" value="C">C. AWS Database Migration Service.</li>
      <li><input type="checkbox" name="question-11" value="D">D. AWS Application Discovery Service.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>What are some key benefits of using AWS CloudFormation? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. It helps AWS customers deploy their applications without worrying about the underlying infrastructure.</li>
      <li><input type="checkbox" name="question-12" value="B">B. It applies advanced IAM security features automatically.</li>
      <li><input type="checkbox" name="question-12" value="C">C. It automates the provisioning and updating of your infrastructure in a safe and controlled manner.</li>
      <li><input type="checkbox" name="question-12" value="D">D. It allows you to model your entire infrastructure in just a text file.</li>
      <li><input type="checkbox" name="question-12" value="E">E. It compiles and builds application code in a timely manner.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. On-premises.</li>
      <li><input type="checkbox" name="question-13" value="B">B. Mixed.</li>
      <li><input type="checkbox" name="question-13" value="C">C. Hybrid.</li>
      <li><input type="checkbox" name="question-13" value="D">D. Cloud.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. CloudEndure Disaster Recovery.</li>
      <li><input type="checkbox" name="question-14" value="B">B. CloudEndure Migration.</li>
      <li><input type="checkbox" name="question-14" value="C">C. AWS Backup.</li>
      <li><input type="checkbox" name="question-14" value="D">D. AWS Glue.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. S3 Standard-IA.</li>
      <li><input type="checkbox" name="question-15" value="B">B. S3 Intelligent-Tiering.</li>
      <li><input type="checkbox" name="question-15" value="C">C. S3 Glacier Deep Archive.</li>
      <li><input type="checkbox" name="question-15" value="D">D. S3 Standard.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>You want to create a backup of your data in another geographical location. Where should you create this backup?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. In another Edge location.</li>
      <li><input type="checkbox" name="question-16" value="B">B. In another Region.</li>
      <li><input type="checkbox" name="question-16" value="C">C. In another VPC.</li>
      <li><input type="checkbox" name="question-16" value="D">D. In another Availability Zone.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which statement is true in relation to the security of Amazon EC2?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. You should use instance store volumes to store login data.</li>
      <li><input type="checkbox" name="question-17" value="B">B. You should regularly patch the operating system and applications on your EC2 instances.</li>
      <li><input type="checkbox" name="question-17" value="C">C. You should deploy critical components of your application in the Availability Zone that you trust.</li>
      <li><input type="checkbox" name="question-17" value="D">D. You can track all API calls using Amazon Athena.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>What does AWS Cost Explorer provide to help manage your AWS spend?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Cost comparisons between AWS Cloud environments and on-premises environments.</li>
      <li><input type="checkbox" name="question-18" value="B">B. Accurate estimates of AWS service costs based on your expected usage.</li>
      <li><input type="checkbox" name="question-18" value="C">C. Consolidated billing.</li>
      <li><input type="checkbox" name="question-18" value="D">D. Highly accurate cost forecasts for up to 12 months ahead.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. RDS Single-AZ.</li>
      <li><input type="checkbox" name="question-19" value="B">B. RDS Write Replica.</li>
      <li><input type="checkbox" name="question-19" value="C">C. RDS Snapshots.</li>
      <li><input type="checkbox" name="question-19" value="D">D. RDS Multi-AZ.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. Deleting all EBS volumes attached to the instances.</li>
      <li><input type="checkbox" name="question-20" value="B">B. You cannot minimize charges for on-demand instances.</li>
      <li><input type="checkbox" name="question-20" value="C">C. Terminating the instances.</li>
      <li><input type="checkbox" name="question-20" value="D">D. Stopping the instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following strategies helps protect your AWS root account?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Delete root user access keys if you do not need them.</li>
      <li><input type="checkbox" name="question-21" value="B">B. Apply MFA for the root account and use it for all of your work.</li>
      <li><input type="checkbox" name="question-21" value="C">C. Access the root account only from your personal Mobile Phone.</li>
      <li><input type="checkbox" name="question-21" value="D">D. Only share your AWS account password or access keys with trusted persons.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. The size of volumes provisioned per month.</li>
      <li><input type="checkbox" name="question-22" value="B">B. The compute capacity you consume.</li>
      <li><input type="checkbox" name="question-22" value="C">C. The amount of data you have stored in snapshots.</li>
      <li><input type="checkbox" name="question-22" value="D">D. The compute time you consume.</li>
      <li><input type="checkbox" name="question-22" value="E">E. The number of Snowball storage devices you request.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Attach a separate IAM policy for each individual account.</li>
      <li><input type="checkbox" name="question-23" value="B">B. Apply the Principle of Least Privilege.</li>
      <li><input type="checkbox" name="question-23" value="C">C. For security purposes, you should not grant any permission to the DevOps team.</li>
      <li><input type="checkbox" name="question-23" value="D">D. Create six different IAM passwords.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following has the greatest impact on cost? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Compute charges.</li>
      <li><input type="checkbox" name="question-24" value="B">B. The number of services used.</li>
      <li><input type="checkbox" name="question-24" value="C">C. Data Transfer In charges.</li>
      <li><input type="checkbox" name="question-24" value="D">D. Data Transfer Out charges.</li>
      <li><input type="checkbox" name="question-24" value="E">E. The number of IAM roles provisioned.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>Who from the following will get the largest discount?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. A user who chooses to buy On-demand, Convertible, Partial upfront instances.</li>
      <li><input type="checkbox" name="question-25" value="B">B. A user who chooses to buy Reserved, Convertible, All upfront instances.</li>
      <li><input type="checkbox" name="question-25" value="C">C. A user who chooses to buy Reserved, Standard, No upfront instances.</li>
      <li><input type="checkbox" name="question-25" value="D">D. A user who chooses to buy Reserved, Standard, All upfront instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following is an available option when purchasing Amazon EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. The ability to bid to get the lowest possible prices.</li>
      <li><input type="checkbox" name="question-26" value="B">B. The ability to register EC2 instances to get volume discounts on every hour the instances are running.</li>
      <li><input type="checkbox" name="question-26" value="C">C. The ability to buy Dedicated Instances for up to 90% discount.</li>
      <li><input type="checkbox" name="question-26" value="D">D. The ability to pay upfront to get lower hourly costs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>What does the term “Economies of scale” mean?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. It means that you save more when you consume more.</li>
      <li><input type="checkbox" name="question-27" value="B">B. It means as more time passes using AWS, you pay more for its services.</li>
      <li><input type="checkbox" name="question-27" value="C">C. It means that AWS will continuously lower costs as it grows.</li>
      <li><input type="checkbox" name="question-27" value="D">D. It means that you have the ability to pay as you go.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. AWS Auto Scaling.</li>
      <li><input type="checkbox" name="question-28" value="B">B. Amazon Elastic Compute Cloud.</li>
      <li><input type="checkbox" name="question-28" value="C">C. Amazon Elastic File System.</li>
      <li><input type="checkbox" name="question-28" value="D">D. Amazon ElastiCache.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the below options is true of Amazon VPC?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Amazon VPC allows customers to control user interactions with all other AWS resources.</li>
      <li><input type="checkbox" name="question-29" value="B">B. AWS Customers have complete control over their Amazon VPC virtual networking environment.</li>
      <li><input type="checkbox" name="question-29" value="C">C. AWS is responsible for all the management and configuration details of Amazon VPC.</li>
      <li><input type="checkbox" name="question-29" value="D">D. Amazon VPC helps customers to review their AWS architecture and adopt best practices.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. AWS Cost Explorer.</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS Pricing Calculator.</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS Budgets.</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS TCO Calculator.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. AWS Config.</li>
      <li><input type="checkbox" name="question-31" value="B">B. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-31" value="C">C. Amazon MQ.</li>
      <li><input type="checkbox" name="question-31" value="D">D. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-31" value="E">E. Amazon Cognito.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>Which of the following AWS services uses Puppet to automate how EC2 instances are configured?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. AWS OpsWorks.</li>
      <li><input type="checkbox" name="question-32" value="B">B. AWS CloudFormation.</li>
      <li><input type="checkbox" name="question-32" value="C">C. AWS Quick Starts.</li>
      <li><input type="checkbox" name="question-32" value="D">D. AWS CloudTrail.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Amazon Kinesis.</li>
      <li><input type="checkbox" name="question-33" value="B">B. Amazon QuickSight.</li>
      <li><input type="checkbox" name="question-33" value="C">C. AWS CodeDeploy.</li>
      <li><input type="checkbox" name="question-33" value="D">D. Amazon Athena.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Select the services that are server-based: (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Amazon RDS.</li>
      <li><input type="checkbox" name="question-34" value="B">B. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-34" value="C">C. AWS Lambda.</li>
      <li><input type="checkbox" name="question-34" value="D">D. AWS Fargate.</li>
      <li><input type="checkbox" name="question-34" value="E">E. Amazon EMR.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>What best describes penetration testing?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Testing your application’s response time from different locations.</li>
      <li><input type="checkbox" name="question-35" value="B">B. Testing your network to find security vulnerabilities that an attacker could exploit.</li>
      <li><input type="checkbox" name="question-35" value="C">C. Testing your instances to check for the unhealthy ones.</li>
      <li><input type="checkbox" name="question-35" value="D">D. Testing your software for bugs and errors.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following are use cases for Amazon EMR? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. Enables you to backup extremely large amounts of data at very low costs.</li>
      <li><input type="checkbox" name="question-36" value="B">B. Enables you to move Exabyte-scale data from on-premises datacenters into AWS.</li>
      <li><input type="checkbox" name="question-36" value="C">C. Enables you to analyze and process extremely large amounts of data in a timely manner.</li>
      <li><input type="checkbox" name="question-36" value="D">D. Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.</li>
      <li><input type="checkbox" name="question-36" value="E">E. Enables you to easily run and manage Docker containers.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can’t see a way to contact support via Chat. What should you do?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. There is no chat feature in AWS support.</li>
      <li><input type="checkbox" name="question-37" value="B">B. The chat feature is available for all plans for an additional fee, but you have to request it first.</li>
      <li><input type="checkbox" name="question-37" value="C">C. At a minimum, upgrade to Business support plan.</li>
      <li><input type="checkbox" name="question-37" value="D">D. Upgrade from the Basic Support plan to Developer Support.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn’t have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. AWS Fargate.</li>
      <li><input type="checkbox" name="question-38" value="B">B. AWS Batch.</li>
      <li><input type="checkbox" name="question-38" value="C">C. Amazon Personalize.</li>
      <li><input type="checkbox" name="question-38" value="D">D. AWS Elastic Beanstalk.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which statement best describes the AWS Pay-As-You-Go pricing model?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. With AWS, you replace low upfront expenses with large variable payments.</li>
      <li><input type="checkbox" name="question-39" value="B">B. With AWS, you replace low upfront expenses with large fixed payments.</li>
      <li><input type="checkbox" name="question-39" value="C">C. With AWS, you replace large upfront expenses with low fixed payments.</li>
      <li><input type="checkbox" name="question-39" value="D">D. With AWS, you replace large capital expenses with low variable payments.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Database setup.</li>
      <li><input type="checkbox" name="question-40" value="B">B. Network traffic protection.</li>
      <li><input type="checkbox" name="question-40" value="C">C. Management of the operating system.</li>
      <li><input type="checkbox" name="question-40" value="D">D. Access management.</li>
      <li><input type="checkbox" name="question-40" value="E">E. Management of firewall rules.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>Which of the following strategies help analyze costs in AWS?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Using tags to group resources.</li>
      <li><input type="checkbox" name="question-41" value="B">B. Using AWS CloudFormation to automate the deployment of resources.</li>
      <li><input type="checkbox" name="question-41" value="C">C. Deploying resources of the same type in different regions.</li>
      <li><input type="checkbox" name="question-41" value="D">D. Configuring Amazon Inspector to automatically analyze costs and email reports.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. AWS Direct Connect.</li>
      <li><input type="checkbox" name="question-42" value="B">B. Amazon Comprehend.</li>
      <li><input type="checkbox" name="question-42" value="C">C. AWS Snowmobile.</li>
      <li><input type="checkbox" name="question-42" value="D">D. AWS VPN.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>What is the main benefit of the AWS Storage Gateway service?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. It automates the process of building, maintaining, and running ETL jobs.</li>
      <li><input type="checkbox" name="question-43" value="B">B. It provides physical devices to migrate data from on premises to AWS.</li>
      <li><input type="checkbox" name="question-43" value="C">C. It allows integration of on-premises IT environments with Cloud Storage.</li>
      <li><input type="checkbox" name="question-43" value="D">D. It provides hardware-based key storage for regulatory compliance.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Amazon S3 Glacier Deep Archive.</li>
      <li><input type="checkbox" name="question-44" value="B">B. Amazon S3 Standard-Infrequent Access.</li>
      <li><input type="checkbox" name="question-44" value="C">C. Amazon S3 Glacier.</li>
      <li><input type="checkbox" name="question-44" value="D">D. Instance Store.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. AWS Global Accelerator.</li>
      <li><input type="checkbox" name="question-45" value="B">B. AWS Data Pipeline.</li>
      <li><input type="checkbox" name="question-45" value="C">C. AWS DAX Accelerator.</li>
      <li><input type="checkbox" name="question-45" value="D">D. AWS Transfer Acceleration.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Why are Serverless Architectures more economical than Server-based Architectures?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Serverless Architectures use new powerful computing devices.</li>
      <li><input type="checkbox" name="question-46" value="B">B. With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.</li>
      <li><input type="checkbox" name="question-46" value="C">C. When you reserve serverless capacity, you will get large discounts compared to server reservation.</li>
      <li><input type="checkbox" name="question-46" value="D">D. With Serverless Architectures you have the ability to scale automatically up or down as demand changes.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Point-to-point connectivity between an on-premises data center and AWS.</li>
      <li><input type="checkbox" name="question-47" value="B">B. Detects configuration changes in the AWS environment.</li>
      <li><input type="checkbox" name="question-47" value="C">C. DNS configuration and management.</li>
      <li><input type="checkbox" name="question-47" value="D">D. Manages global application traffic through a variety of routing types.</li>
      <li><input type="checkbox" name="question-47" value="E">E. Provides infrastructure security optimization recommendations.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. AWS Snowmobile.</li>
      <li><input type="checkbox" name="question-48" value="B">B. AWS Import/Export.</li>
      <li><input type="checkbox" name="question-48" value="C">C. AWS DMS.</li>
      <li><input type="checkbox" name="question-48" value="D">D. AWS Snowball.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-49" value="B">B. Amazon Athena.</li>
      <li><input type="checkbox" name="question-49" value="C">C. AWS Cloud9.</li>
      <li><input type="checkbox" name="question-49" value="D">D. Amazon ElastiCache for Redis.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
</ol>
      `,
    data: []
  },
];