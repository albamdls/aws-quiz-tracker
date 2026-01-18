export default [
  {
    id: 7,
    title: "Practice Exam 7",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Delete the encryption keys once your data is encrypted.</li>
      <li><input type="checkbox" name="question-0" value="B">B. With AWS you do not need to worry about encryption.</li>
      <li><input type="checkbox" name="question-0" value="C">C. Enable S3 Encryption.</li>
      <li><input type="checkbox" name="question-0" value="D">D. Encrypt the data prior to uploading it.</li>
      <li><input type="checkbox" name="question-0" value="E">E. Delete all IAM users that have access to S3.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>Which AWS service helps developers compile and test their code?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. AWS CodeDeploy.</li>
      <li><input type="checkbox" name="question-1" value="B">B. AWS CodeCommit.</li>
      <li><input type="checkbox" name="question-1" value="C">C. CloudEndure.</li>
      <li><input type="checkbox" name="question-1" value="D">D. AWS CodeBuild.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Using default encryption for any number of S3 buckets.</li>
      <li><input type="checkbox" name="question-2" value="B">B. The number of EBS volumes attached to your instances.</li>
      <li><input type="checkbox" name="question-2" value="C">C. The storage class used for the objects stored.</li>
      <li><input type="checkbox" name="question-2" value="D">D. Creating and deleting S3 buckets.</li>
      <li><input type="checkbox" name="question-2" value="E">E. The total size in gigabytes of all objects stored.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>What does the Amazon CloudFront service provide? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. Tracks user activity and APl usage.</li>
      <li><input type="checkbox" name="question-3" value="B">B. Increases application availability by caching at the edge.</li>
      <li><input type="checkbox" name="question-3" value="C">C. Enables faster disaster recovery.</li>
      <li><input type="checkbox" name="question-3" value="D">D. Stores archived data at very low costs.</li>
      <li><input type="checkbox" name="question-3" value="E">E. Delivers content to end users with low latency.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Amazon Lightsail.</li>
      <li><input type="checkbox" name="question-4" value="B">B. Amazon Connect.</li>
      <li><input type="checkbox" name="question-4" value="C">C. AWS Direct Connect.</li>
      <li><input type="checkbox" name="question-4" value="D">D. AWS Elastic Beanstalk.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. Using the AWS Cost &amp; Usage Report.</li>
      <li><input type="checkbox" name="question-5" value="B">B. Using the AWS Total Cost of Ownership (TCO) dashboard.</li>
      <li><input type="checkbox" name="question-5" value="C">C. Using the AWS CloudWatch logs dashboard.</li>
      <li><input type="checkbox" name="question-5" value="D">D. Using the Amazon VPC dashboard.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Convertible.</li>
      <li><input type="checkbox" name="question-6" value="B">B. Expedited.</li>
      <li><input type="checkbox" name="question-6" value="C">C. Bulk.</li>
      <li><input type="checkbox" name="question-6" value="D">D. Spot.</li>
      <li><input type="checkbox" name="question-6" value="E">E. Standard.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>Which of the following services gives you access to all AWS auditor-issued reports and certifications?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. AWS Artifact.</li>
      <li><input type="checkbox" name="question-7" value="B">B. AWS Config.</li>
      <li><input type="checkbox" name="question-7" value="C">C. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-7" value="D">D. AWS CloudTrail.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. AWS Resource Groups.</li>
      <li><input type="checkbox" name="question-8" value="B">B. AWS Placement Groups.</li>
      <li><input type="checkbox" name="question-8" value="C">C. AWS Management Console.</li>
      <li><input type="checkbox" name="question-8" value="D">D. AWS Tag Editor.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which AWS service collects metrics from running EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. Amazon Inspector.</li>
      <li><input type="checkbox" name="question-9" value="B">B. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-9" value="C">C. AWS CloudFormation.</li>
      <li><input type="checkbox" name="question-9" value="D">D. AWS CloudTrail.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. Amazon Detective.</li>
      <li><input type="checkbox" name="question-10" value="B">B. AWS X-Ray.</li>
      <li><input type="checkbox" name="question-10" value="C">C. AWS Security Hub.</li>
      <li><input type="checkbox" name="question-10" value="D">D. AWS Shield.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following compute resources are serverless? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Amazon EC2.</li>
      <li><input type="checkbox" name="question-11" value="B">B. AWS Fargate.</li>
      <li><input type="checkbox" name="question-11" value="C">C. AWS Lambda.</li>
      <li><input type="checkbox" name="question-11" value="D">D. Amazon ECS.</li>
      <li><input type="checkbox" name="question-11" value="E">E. Amazon EMR.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Use EC2 Dedicated Hosts.</li>
      <li><input type="checkbox" name="question-12" value="B">B. Use EC2 Reserved Instances.</li>
      <li><input type="checkbox" name="question-12" value="C">C. Use EC2 Spot Instances.</li>
      <li><input type="checkbox" name="question-12" value="D">D. Use EC2 On-demand Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Tagging Enforcement.</li>
      <li><input type="checkbox" name="question-13" value="B">B. Architecture Optimization.</li>
      <li><input type="checkbox" name="question-13" value="C">C. Budgeting Processes.</li>
      <li><input type="checkbox" name="question-13" value="D">D. Resource Controls.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. RedShift.</li>
      <li><input type="checkbox" name="question-14" value="B">B. RDS.</li>
      <li><input type="checkbox" name="question-14" value="C">C. CloudHSM.</li>
      <li><input type="checkbox" name="question-14" value="D">D. DMS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>What can you use to assign permissions directly to an IAM user?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. IAM Identity.</li>
      <li><input type="checkbox" name="question-15" value="B">B. IAM Group.</li>
      <li><input type="checkbox" name="question-15" value="C">C. IAM Role.</li>
      <li><input type="checkbox" name="question-15" value="D">D. IAM Policy.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. AWS allows customers to launch powerful EC2 instances to handle spikes in load.</li>
      <li><input type="checkbox" name="question-16" value="B">B. AWS allows customers to pay upfront to get bigger discounts.</li>
      <li><input type="checkbox" name="question-16" value="C">C. AWS allows customers to launch and terminate EC2 instances based on demand.</li>
      <li><input type="checkbox" name="question-16" value="D">D. AWS allows customers to choose cheaper types of EC2 instances that best fit their needs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. PostgreSQL.</li>
      <li><input type="checkbox" name="question-17" value="B">B. Oracle.</li>
      <li><input type="checkbox" name="question-17" value="C">C. Microsoft SQL Server.</li>
      <li><input type="checkbox" name="question-17" value="D">D. Teradata.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following AWS services would help you migrate on-premise databases to AWS?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. AWS DMS.</li>
      <li><input type="checkbox" name="question-18" value="B">B. Amazon S3 Transfer Acceleration.</li>
      <li><input type="checkbox" name="question-18" value="C">C. AWS Directory Service.</li>
      <li><input type="checkbox" name="question-18" value="D">D. AWS Transit Gateway.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Run WordPress on an Amazon Lightsail instance.</li>
      <li><input type="checkbox" name="question-19" value="B">B. Install WordPress on an Amazon EC2 instance.</li>
      <li><input type="checkbox" name="question-19" value="C">C. Use the Amazon S3 Web hosting feature.</li>
      <li><input type="checkbox" name="question-19" value="D">D. Host the website directly on AWS Cloud Development Kit (AWS CDK).</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. AWS KMS.</li>
      <li><input type="checkbox" name="question-20" value="B">B. AWS Certificate Manager.</li>
      <li><input type="checkbox" name="question-20" value="C">C. AWS CodeDeploy.</li>
      <li><input type="checkbox" name="question-20" value="D">D. AWS CodeCommit.</li>
      <li><input type="checkbox" name="question-20" value="E">E. CloudHSM.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>Which of the following services allows you to install and run custom relational database software?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Amazon EC2.</li>
      <li><input type="checkbox" name="question-21" value="B">B. Amazon Cognito.</li>
      <li><input type="checkbox" name="question-21" value="C">C. Amazon RDS.</li>
      <li><input type="checkbox" name="question-21" value="D">D. Amazon Inspector.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Auto Scaling.</li>
      <li><input type="checkbox" name="question-22" value="B">B. ELB.</li>
      <li><input type="checkbox" name="question-22" value="C">C. Amazon Route53.</li>
      <li><input type="checkbox" name="question-22" value="D">D. Amazon Elastic Container Service.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. AWS IAM.</li>
      <li><input type="checkbox" name="question-23" value="B">B. AWS Outposts.</li>
      <li><input type="checkbox" name="question-23" value="C">C. AWS Federation.</li>
      <li><input type="checkbox" name="question-23" value="D">D. Amazon Redshift.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>What are some key design principles for designing public cloud systems? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Reserved capacity instead of on demand.</li>
      <li><input type="checkbox" name="question-24" value="B">B. Loose coupling over tight coupling.</li>
      <li><input type="checkbox" name="question-24" value="C">C. Servers instead of managed services.</li>
      <li><input type="checkbox" name="question-24" value="D">D. Disposable resources instead of fixed servers.</li>
      <li><input type="checkbox" name="question-24" value="E">E. Multi-AZ deployments instead of multi-region deployments.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. AWS CloudTrail Trails.</li>
      <li><input type="checkbox" name="question-25" value="B">B. IAM Credential Report.</li>
      <li><input type="checkbox" name="question-25" value="C">C. AWS Artifact reports.</li>
      <li><input type="checkbox" name="question-25" value="D">D. AWS Cost and Usage Report.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. AWS Shield.</li>
      <li><input type="checkbox" name="question-26" value="B">B. AWS Certificate Manager.</li>
      <li><input type="checkbox" name="question-26" value="C">C. AWS CloudHSM.</li>
      <li><input type="checkbox" name="question-26" value="D">D. AWS WAF.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. There is no need to architect for these capabilities in AWS, as AWS is redundant by default.</li>
      <li><input type="checkbox" name="question-27" value="B">B. Deploy the application in a single Availability Zone.</li>
      <li><input type="checkbox" name="question-27" value="C">C. Deploy the application in multiple Availability Zones in a single AWS region.</li>
      <li><input type="checkbox" name="question-27" value="D">D. Deploy the application in multiple Availability Zones in multiple AWS regions.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Instance Store.</li>
      <li><input type="checkbox" name="question-28" value="B">B. S3.</li>
      <li><input type="checkbox" name="question-28" value="C">C. DynamoDB.</li>
      <li><input type="checkbox" name="question-28" value="D">D. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-28" value="E">E. AWS VPN.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>Which of the following factors affect Amazon CloudFront cost? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Number of Requests.</li>
      <li><input type="checkbox" name="question-29" value="B">B. Traffic Distribution.</li>
      <li><input type="checkbox" name="question-29" value="C">C. Number of Volumes.</li>
      <li><input type="checkbox" name="question-29" value="D">D. Instance type.</li>
      <li><input type="checkbox" name="question-29" value="E">E. Storage Class.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, B</p>
    </details>
  </li>
  <li>Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. AWS Service Control Policies (SCPs).</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS Artifact.</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS Budgets.</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS Acceptable Use Policy.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following security resources are available to any user for free? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. AWS Bulletins.</li>
      <li><input type="checkbox" name="question-31" value="B">B. AWS TAM.</li>
      <li><input type="checkbox" name="question-31" value="C">C. AWS Support APl.</li>
      <li><input type="checkbox" name="question-31" value="D">D. AWS Security Blog.</li>
      <li><input type="checkbox" name="question-31" value="E">E. AWS Classroom Training.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>How can you protect data stored on Amazon S3 from accidental deletion?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. By enabling S3 Versioning.</li>
      <li><input type="checkbox" name="question-32" value="B">B. By configuring S3 Bucket Policies.</li>
      <li><input type="checkbox" name="question-32" value="C">C. By configuring S3 Lifecycle Policies.</li>
      <li><input type="checkbox" name="question-32" value="D">D. By disabling S3 Cross-Region Replication (CRR).</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Securing regions and edge locations.</li>
      <li><input type="checkbox" name="question-33" value="B">B. Performing auditing tasks.</li>
      <li><input type="checkbox" name="question-33" value="C">C. Monitoring AWS resources usage.</li>
      <li><input type="checkbox" name="question-33" value="D">D. Securing access to AWS resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Business &amp; Enterprise Support.</li>
      <li><input type="checkbox" name="question-34" value="B">B. Basic &amp; Developer Support.</li>
      <li><input type="checkbox" name="question-34" value="C">C. Developer &amp; Enterprise Support.</li>
      <li><input type="checkbox" name="question-34" value="D">D. Developer &amp; Business Support.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following is NOT a benefit of using AWS Lambda?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. AWS Lambda runs code without provisioning or managing servers.</li>
      <li><input type="checkbox" name="question-35" value="B">B. AWS Lambda provides resizable compute capacity in the cloud.</li>
      <li><input type="checkbox" name="question-35" value="C">C. There is no charge when your AWS Lambda code is not running.</li>
      <li><input type="checkbox" name="question-35" value="D">D. AWS Lambda can be called directly from any mobile app.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>How does AWS help customers achieve compliance in the cloud?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. It’s not possible to meet regulatory compliance requirements in the Cloud.</li>
      <li><input type="checkbox" name="question-36" value="B">B. AWS applies the most common Cloud security standards, and is responsible for complying with customers’ applicable laws and regulations.</li>
      <li><input type="checkbox" name="question-36" value="C">C. AWS has many common assurance certifications such as ISO 9001 and HIPAA.</li>
      <li><input type="checkbox" name="question-36" value="D">D. Many AWS services are assessed regularly to comply with local laws and regulations.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Your security team.</li>
      <li><input type="checkbox" name="question-37" value="B">B. Your development team.</li>
      <li><input type="checkbox" name="question-37" value="C">C. AWS.</li>
      <li><input type="checkbox" name="question-37" value="D">D. Your internal DevOps team.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Amazon Elastic Transcoder.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Amazon Pinpoint.</li>
      <li><input type="checkbox" name="question-38" value="C">C. AmazonS3.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Amazon Rekognition.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>What are the benefits of the AWS Organizations service? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Control access to AWS services.</li>
      <li><input type="checkbox" name="question-39" value="B">B. Help organizations design and maintain an accelerated path to successful cloud adoption.</li>
      <li><input type="checkbox" name="question-39" value="C">C. Manage your organization’s payment methods.</li>
      <li><input type="checkbox" name="question-39" value="D">D. Help organization achieve their desired business outcomes with AWS.</li>
      <li><input type="checkbox" name="question-39" value="E">E. Consolidate billing across multiple AWS accounts.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>Which AWS service allows you to build a data warehouse in the cloud?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. AWS Shield.</li>
      <li><input type="checkbox" name="question-40" value="B">B. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-40" value="C">C. Amazon RDS.</li>
      <li><input type="checkbox" name="question-40" value="D">D. Amazon Comprehend.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>What AWS service allows you to buy third-party software solutions and services that run on AWS resources?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. AWS Application Discovery service.</li>
      <li><input type="checkbox" name="question-41" value="B">B. Amazon DevPay.</li>
      <li><input type="checkbox" name="question-41" value="C">C. AWS Marketplace.</li>
      <li><input type="checkbox" name="question-41" value="D">D. Resource Groups.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. AWS CodePipeline.</li>
      <li><input type="checkbox" name="question-42" value="B">B. AWS CodeCommit.</li>
      <li><input type="checkbox" name="question-42" value="C">C. AWS X-Ray.</li>
      <li><input type="checkbox" name="question-42" value="D">D. Amazon Inspector.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. Amazon Cognito.</li>
      <li><input type="checkbox" name="question-43" value="B">B. AWS Systems Manager.</li>
      <li><input type="checkbox" name="question-43" value="C">C. AWS Cloud9.</li>
      <li><input type="checkbox" name="question-43" value="D">D. Amazon Route 53.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which feature enables users to sign into their AWS accounts with their existing corporate credentials?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Federation.</li>
      <li><input type="checkbox" name="question-44" value="B">B. Access keys.</li>
      <li><input type="checkbox" name="question-44" value="C">C. IAM Permissions.</li>
      <li><input type="checkbox" name="question-44" value="D">D. WAF rules.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. Awareness and Training.</li>
      <li><input type="checkbox" name="question-45" value="B">B. Communications controls.</li>
      <li><input type="checkbox" name="question-45" value="C">C. Data center security controls.</li>
      <li><input type="checkbox" name="question-45" value="D">D. Environmental controls.</li>
      <li><input type="checkbox" name="question-45" value="E">E. Resource Configuration Management.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>What can you access by visiting the URL: <a href="http://status.aws.amazon.com">http://status.aws.amazon.com</a>?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. AWS Billing Dashboard.</li>
      <li><input type="checkbox" name="question-46" value="B">B. AWS Cost Dashboard.</li>
      <li><input type="checkbox" name="question-46" value="C">C. AWS Service Health Dashboard.</li>
      <li><input type="checkbox" name="question-46" value="D">D. AWS Security Dashboard.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Store media assets in the region closest to your end users.</li>
      <li><input type="checkbox" name="question-47" value="B">B. Store media assets on an additional EBS volume and increase the capacity of your server.</li>
      <li><input type="checkbox" name="question-47" value="C">C. Replicate media assets to at least two availability zones.</li>
      <li><input type="checkbox" name="question-47" value="D">D. Reduce the size of media assets using the Amazon Elastic Transcoder.</li>
      <li><input type="checkbox" name="question-47" value="E">E. Store media assets in S3 and use CloudFront to distribute these assets.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Use manual monitoring techniques to protect your AWS resources.</li>
      <li><input type="checkbox" name="question-48" value="B">B. Use IAM roles to grant temporary access instead of long-term credentials.</li>
      <li><input type="checkbox" name="question-48" value="C">C. Scale horizontally to protect from failures.</li>
      <li><input type="checkbox" name="question-48" value="D">D. Enable real-time traceability.</li>
      <li><input type="checkbox" name="question-48" value="E">E. Never store sensitive data in the cloud.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Use the AWS Pricing Calculator service to monitor the costs incurred by each department.</li>
      <li><input type="checkbox" name="question-49" value="B">B. Use Amazon Aurora to forecast AWS spending based on usage.</li>
      <li><input type="checkbox" name="question-49" value="C">C. Apply cost allocation tags to segment AWS costs by different e projects and departments.</li>
      <li><input type="checkbox" name="question-49" value="D">D. Configure AWS Price List API to receive billing updates for each department automatically.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
</ol>
      `,
    data: []
  },
];