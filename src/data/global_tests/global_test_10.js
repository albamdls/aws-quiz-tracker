export default [
  {
    id: 10,
    title: "Practice Exam 10",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. AWS Concierge.</li>
      <li><input type="checkbox" name="question-0" value="B">B. AWS CloudFormation.</li>
      <li><input type="checkbox" name="question-0" value="C">C. Amazon Simple Storage Service (Amazon S3).</li>
      <li><input type="checkbox" name="question-0" value="D">D. Amazon EC2 Auto Scaling.</li>
      <li><input type="checkbox" name="question-0" value="E">E. AWS Management Console.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. One-year, No Upfront, Standard RI pricing.</li>
      <li><input type="checkbox" name="question-1" value="B">B. One-year, All Upfront, Convertible RI pricing.</li>
      <li><input type="checkbox" name="question-1" value="C">C. Three-year, All Upfront, Standard RI pricing.</li>
      <li><input type="checkbox" name="question-1" value="D">D. Three-year, No Upfront, Convertible RI pricing.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following are features of Amazon CloudWatch Logs? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Summaries by Amazon Simple Notification Service (Amazon SNS).</li>
      <li><input type="checkbox" name="question-2" value="B">B. Free Amazon Elasticsearch Service analytics.</li>
      <li><input type="checkbox" name="question-2" value="C">C. Provided at no charge.</li>
      <li><input type="checkbox" name="question-2" value="D">D. Real-time monitoring.</li>
      <li><input type="checkbox" name="question-2" value="E">E. Adjustable retention.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  </li>
  <li>Which of the following is an AWS-managed compute service?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. Amazon SWF.</li>
      <li><input type="checkbox" name="question-3" value="B">B. Amazon EC2.</li>
      <li><input type="checkbox" name="question-3" value="C">C. AWS Lambda.</li>
      <li><input type="checkbox" name="question-3" value="D">D. Amazon Aurora.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Amazon Elastic Compute Cloud (Amazon EC2).</li>
      <li><input type="checkbox" name="question-4" value="B">B. AWS Lambda.</li>
      <li><input type="checkbox" name="question-4" value="C">C. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-4" value="D">D. AWS CodeCommit.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following is the customer’s responsibility under the AWS shared responsibility model?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. Patching underlying infrastructure</li>
      <li><input type="checkbox" name="question-5" value="B">B. Physical security</li>
      <li><input type="checkbox" name="question-5" value="C">C. Patching Amazon EC2 instances</li>
      <li><input type="checkbox" name="question-5" value="D">D. Patching network infrastructure</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>According to the AWS shared responsibility model who is responsible for configuration management?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. It is solely the responsibility of the customer.</li>
      <li><input type="checkbox" name="question-6" value="B">B. It is solely the responsibility of AWS.</li>
      <li><input type="checkbox" name="question-6" value="C">C. It is shared between AWS and the customer.</li>
      <li><input type="checkbox" name="question-6" value="D">D. It is not part of the AWS shared responsibility model.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Amazon GuardDuty.</li>
      <li><input type="checkbox" name="question-7" value="B">B. Amazon Macie.</li>
      <li><input type="checkbox" name="question-7" value="C">C. Amazon Inspector.</li>
      <li><input type="checkbox" name="question-7" value="D">D. AWS Shield.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following BEST describe the AWS pricing model? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Fixed-term.</li>
      <li><input type="checkbox" name="question-8" value="B">B. Pay-as-you-go.</li>
      <li><input type="checkbox" name="question-8" value="C">C. Colocation.</li>
      <li><input type="checkbox" name="question-8" value="D">D. Planned.</li>
      <li><input type="checkbox" name="question-8" value="E">E. Variable cost.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. Ensuring that application data is encrypted at rest.</li>
      <li><input type="checkbox" name="question-9" value="B">B. Ensuring that AWS NTP servers are set to the correct time.</li>
      <li><input type="checkbox" name="question-9" value="C">C. Ensuring that users have received security training in the use of AWS services.</li>
      <li><input type="checkbox" name="question-9" value="D">D. Ensuring that access to data centers is restricted.</li>
      <li><input type="checkbox" name="question-9" value="E">E. Ensuring that hardware is disposed of properly.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. Create one global AWS account and move all AWS resources to that account.</li>
      <li><input type="checkbox" name="question-10" value="B">B. Sign up for three years of Reserved Instance pricing up front.</li>
      <li><input type="checkbox" name="question-10" value="C">C. Use the consolidated billing feature from AWS Organizations.</li>
      <li><input type="checkbox" name="question-10" value="D">D. Sign up for the AWS Enterprise support plan to get volume discounts.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. A Partial Upfront Reserved Instances for a 1-year term.</li>
      <li><input type="checkbox" name="question-11" value="B">B. All Upfront Reserved instances for a 1 year form.</li>
      <li><input type="checkbox" name="question-11" value="C">C. All Upfront Reserved Instances for a 3 year term.</li>
      <li><input type="checkbox" name="question-11" value="D">D. No Upfront Reserved Instances for a 3 year term.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which AWS services should be used for read/write of constantly changing data? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Amazon Glacier.</li>
      <li><input type="checkbox" name="question-12" value="B">B. Amazon RDS.</li>
      <li><input type="checkbox" name="question-12" value="C">C. AWS Snowball.</li>
      <li><input type="checkbox" name="question-12" value="D">D. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-12" value="E">E. Amazon EFS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>Which AWS service allows users to identify the changes made to a resource over time?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Amazon Inspector.</li>
      <li><input type="checkbox" name="question-13" value="B">B. AWS Config.</li>
      <li><input type="checkbox" name="question-13" value="C">C. AWS Service Catalog.</li>
      <li><input type="checkbox" name="question-13" value="D">D. AWS IAM.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>According to best practices, how should an application be designed to run in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. Use tightly coupled components.</li>
      <li><input type="checkbox" name="question-14" value="B">B. Use loosely coupled components.</li>
      <li><input type="checkbox" name="question-14" value="C">C. Use infrequently coupled components.</li>
      <li><input type="checkbox" name="question-14" value="D">D. Use frequently coupled components.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which benefits are included with the AWS Business Support plan? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. 24/7 assistance by way of live chat or a telephone call.</li>
      <li><input type="checkbox" name="question-15" value="B">B. Support from a dedicated AWS Technical Account Manager.</li>
      <li><input type="checkbox" name="question-15" value="C">C. An unlimited number of cases and contacts.</li>
      <li><input type="checkbox" name="question-15" value="D">D. 15-minute response time for production system interruption cases.</li>
      <li><input type="checkbox" name="question-15" value="E">E. Annual operational reviews with AWS Solutions Architects.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>Which of the following is an AWS managed Domain Name System (DNS) web service?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-16" value="B">B. Amazon Neptune.</li>
      <li><input type="checkbox" name="question-16" value="C">C. Amazon SageMaker.</li>
      <li><input type="checkbox" name="question-16" value="D">D. Amazon Lightsail.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Dedicated Hosts.</li>
      <li><input type="checkbox" name="question-17" value="B">B. Dedicated Instances.</li>
      <li><input type="checkbox" name="question-17" value="C">C. Spot Instances.</li>
      <li><input type="checkbox" name="question-17" value="D">D. Reserved Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Dedicated RIs.</li>
      <li><input type="checkbox" name="question-18" value="B">B. Scheduled RIs.</li>
      <li><input type="checkbox" name="question-18" value="C">C. Convertible RIs.</li>
      <li><input type="checkbox" name="question-18" value="D">D. Standard RIs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which service is best for storing common database query results, which helps to alleviate database access load?
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Amazon Machine Learning.</li>
      <li><input type="checkbox" name="question-19" value="B">B. Amazon SQS.</li>
      <li><input type="checkbox" name="question-19" value="C">C. Amazon ElastiCache.</li>
      <li><input type="checkbox" name="question-19" value="D">D. Amazon EC2 Instance Store.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>When should a company consider using Amazon EC2 Spot Instances? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. For non-production applications.</li>
      <li><input type="checkbox" name="question-20" value="B">B. For stateful workloads.</li>
      <li><input type="checkbox" name="question-20" value="C">C. For applications that cannot have interruptions.</li>
      <li><input type="checkbox" name="question-20" value="D">D. For fault-tolerant flexible applications.</li>
      <li><input type="checkbox" name="question-20" value="E">E. For sensitive database applications.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>Which AWS tools assist with estimating costs? (Select three)
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Detailed billing report.</li>
      <li><input type="checkbox" name="question-21" value="B">B. Cost allocation tags.</li>
      <li><input type="checkbox" name="question-21" value="C">C. AWS Simple Monthly Calculator.</li>
      <li><input type="checkbox" name="question-21" value="D">D. AWS Total Cost of Ownership (TCO) Calculator.</li>
      <li><input type="checkbox" name="question-21" value="E">E. Cost Estimator.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C, D</p>
    </details>
  </li>
  <li>A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Elastic Load Balancer.</li>
      <li><input type="checkbox" name="question-22" value="B">B. Amazon EC2 Auto Scaling.</li>
      <li><input type="checkbox" name="question-22" value="C">C. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-22" value="D">D. Amazon CloudFront.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Enterprise.</li>
      <li><input type="checkbox" name="question-23" value="B">B. Business.</li>
      <li><input type="checkbox" name="question-23" value="C">C. Developer.</li>
      <li><input type="checkbox" name="question-23" value="D">D. Basic.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Access keys in AWS Identity and Access Management (IM1) are used to:
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Log in to the AWS Management Console.</li>
      <li><input type="checkbox" name="question-24" value="B">B. Make programmatic calls to AWS from AWS APIs.</li>
      <li><input type="checkbox" name="question-24" value="C">C. Log in to Amazon EC2 instances.</li>
      <li><input type="checkbox" name="question-24" value="D">D. Authenticate to AWS CodeCommit repositories.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. AWS Glue.</li>
      <li><input type="checkbox" name="question-25" value="B">B. AWS Data Pipeline.</li>
      <li><input type="checkbox" name="question-25" value="C">C. Amazon CloudSearch.</li>
      <li><input type="checkbox" name="question-25" value="D">D. Amazon Athena.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>How does AWS shorten the time to provision IT resources?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. It supplies an online IT ticketing platform for resource requests.</li>
      <li><input type="checkbox" name="question-26" value="B">B. It supports automatic code validation services.</li>
      <li><input type="checkbox" name="question-26" value="C">C. It provides the ability to programmatically provision existing resources.</li>
      <li><input type="checkbox" name="question-26" value="D">D. It automates the resource request process from a company’s IT vendor list.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which AWS services can be used to gather information about AWS account activity? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-27" value="B">B. AWS Cloud9.</li>
      <li><input type="checkbox" name="question-27" value="C">C. AWS CloudTrail.</li>
      <li><input type="checkbox" name="question-27" value="D">D. AWS CloudHSM.</li>
      <li><input type="checkbox" name="question-27" value="E">E. Amazon CloudWatch.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>Which of the following are characteristics of Amazon S3? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. A global file system.</li>
      <li><input type="checkbox" name="question-28" value="B">B. An object store.</li>
      <li><input type="checkbox" name="question-28" value="C">C. A local file store.</li>
      <li><input type="checkbox" name="question-28" value="D">D. A network file system.</li>
      <li><input type="checkbox" name="question-28" value="E">E. A durable storage system.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. AWS Budgets.</li>
      <li><input type="checkbox" name="question-29" value="B">B. Cost Explorer.</li>
      <li><input type="checkbox" name="question-29" value="C">C. AWS Total Cost of Ownership (TCO) Calculator.</li>
      <li><input type="checkbox" name="question-29" value="D">D. AWS Well-Architected Tool.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following services is in the category of AWS serverless platform?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. Amazon EMR.</li>
      <li><input type="checkbox" name="question-30" value="B">B. Elastic Load Balancing.</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS Lambda.</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS Mobile Hub.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Cost allocation tags.</li>
      <li><input type="checkbox" name="question-31" value="B">B. Consolidated billing.</li>
      <li><input type="checkbox" name="question-31" value="C">C. AWS Budgets.</li>
      <li><input type="checkbox" name="question-31" value="D">D. AWS Marketplace.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. AWS Cost Explorer.</li>
      <li><input type="checkbox" name="question-32" value="B">B. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-32" value="C">C. Consolidated billing.</li>
      <li><input type="checkbox" name="question-32" value="D">D. Detailed billing.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Cloud-native.</li>
      <li><input type="checkbox" name="question-33" value="B">B. Partner network.</li>
      <li><input type="checkbox" name="question-33" value="C">C. Hybrid architecture.</li>
      <li><input type="checkbox" name="question-33" value="D">D. Infrastructure as a service.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>What technology enables compute capacity to adjust as loads change?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Load balancing.</li>
      <li><input type="checkbox" name="question-34" value="B">B. Automatic failover.</li>
      <li><input type="checkbox" name="question-34" value="C">C. Round robin.</li>
      <li><input type="checkbox" name="question-34" value="D">D. Auto Scaling.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which AWS service is a managed NoSQL database?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-35" value="B">B. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-35" value="C">C. Amazon Aurora.</li>
      <li><input type="checkbox" name="question-35" value="D">D. Amazon RDS for ManaDB.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following is a correct relationship between regions, Availability Zones, and edge locations?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. Data centers contain regions.</li>
      <li><input type="checkbox" name="question-36" value="B">B. Regions contain Availability Zones.</li>
      <li><input type="checkbox" name="question-36" value="C">C. Availability Zones contain edge locations.</li>
      <li><input type="checkbox" name="question-36" value="D">D. Edge locations contain regions.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>What approach to transcoding a large number of individual video files adheres to AWS architecture principles?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Using many instances in parallel.</li>
      <li><input type="checkbox" name="question-37" value="B">B. Using a single large instance during off-peak hours.</li>
      <li><input type="checkbox" name="question-37" value="C">C. Using dedicated hardware.</li>
      <li><input type="checkbox" name="question-37" value="D">D. Using a large GPU instance type.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which AWS services can host a Microsoft SQL Server database? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Amazon EC2.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Amazon Relational Database Service (Amazon RDS).</li>
      <li><input type="checkbox" name="question-38" value="C">C. Amazon Aurora.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-38" value="E">E. Amazon S3.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, B</p>
    </details>
  </li>
  <li>Which AWS IAM feature allows developers to access AWS services through the AWS CLI?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. API keys.</li>
      <li><input type="checkbox" name="question-39" value="B">B. Access keys.</li>
      <li><input type="checkbox" name="question-39" value="C">C. User names/Passwords.</li>
      <li><input type="checkbox" name="question-39" value="D">D. SSH keys.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>The user is fully responsible for which action when running workloads on AWS?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Patching the infrastructure components.</li>
      <li><input type="checkbox" name="question-40" value="B">B. Maintaining the underlying infrastructure components.</li>
      <li><input type="checkbox" name="question-40" value="C">C. Maintaining physical and environmental controls.</li>
      <li><input type="checkbox" name="question-40" value="D">D. Implementing controls to route application traffic.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which AWS support plan includes a dedicated Technical Account Manager?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Developer.</li>
      <li><input type="checkbox" name="question-41" value="B">B. Enterprise.</li>
      <li><input type="checkbox" name="question-41" value="C">C. Business.</li>
      <li><input type="checkbox" name="question-41" value="D">D. Basic.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>What time-savings advantage is offered with the use of Amazon Rekognition?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Amazon Rekognition provides automatic watermarking of images.</li>
      <li><input type="checkbox" name="question-42" value="B">B. Amazon Rekognition provides automatic detection of objects appearing in pictures.</li>
      <li><input type="checkbox" name="question-42" value="C">C. Amazon Recognition provides the ability to resize millions of images automatically.</li>
      <li><input type="checkbox" name="question-42" value="D">D. Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. Amazon AutoScaling.</li>
      <li><input type="checkbox" name="question-43" value="B">B. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-43" value="C">C. AWS CloudTrail.</li>
      <li><input type="checkbox" name="question-43" value="D">D. AWS Lambda.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. AWS manages the data stored in Amazon RDS tables.</li>
      <li><input type="checkbox" name="question-44" value="B">B. AWS manages the maintenance of the operating system.</li>
      <li><input type="checkbox" name="question-44" value="C">C. AWS automatically scales up instance types on demand.</li>
      <li><input type="checkbox" name="question-44" value="D">D. AWS manages the database type.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. Implementing elasticity enabling the application to scale up or scale down as demand changes.</li>
      <li><input type="checkbox" name="question-45" value="B">B. Enabling several EC2 instances to run in parallel to achieve better performance.</li>
      <li><input type="checkbox" name="question-45" value="C">C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components.</li>
      <li><input type="checkbox" name="question-45" value="D">D. Doubling EC2 computing resources to increase system fault tolerance.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. AWS Partner Network Technology Partners.</li>
      <li><input type="checkbox" name="question-46" value="B">B. AWS Marketplace.</li>
      <li><input type="checkbox" name="question-46" value="C">C. AWS Partner Network Consulting Partners.</li>
      <li><input type="checkbox" name="question-46" value="D">D. AWS Service Catalog.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Amazon Glacier.</li>
      <li><input type="checkbox" name="question-47" value="B">B. AWS Storage Gateway.</li>
      <li><input type="checkbox" name="question-47" value="C">C. Amazon S3.</li>
      <li><input type="checkbox" name="question-47" value="D">D. Amazon EBS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Implement automation.</li>
      <li><input type="checkbox" name="question-48" value="B">B. Design for agility.</li>
      <li><input type="checkbox" name="question-48" value="C">C. Design for failure.</li>
      <li><input type="checkbox" name="question-48" value="D">D. Implement elasticity.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which service should a customer use to consolidate and centrally manage multiple AWS accounts?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. AWS IAM.</li>
      <li><input type="checkbox" name="question-49" value="B">B. AWS Organizations.</li>
      <li><input type="checkbox" name="question-49" value="C">C. AWS Schema Conversion Tool.</li>
      <li><input type="checkbox" name="question-49" value="D">D. AWS Config.</li>
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