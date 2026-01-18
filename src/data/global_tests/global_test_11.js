export default [
  {
    id: 11,
    title: "Practice Exam 11",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>How can a company reduce its Total Cost of Ownership (TCO) using AWS?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. By minimizing large capital expenditures.</li>
      <li><input type="checkbox" name="question-0" value="B">B. By having no responsibility for third-party license costs.</li>
      <li><input type="checkbox" name="question-0" value="C">C. By having no operational expenditures.</li>
      <li><input type="checkbox" name="question-0" value="D">D. By having AWS manage applications.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-1" value="B">B. AWS Online Tech Talks.</li>
      <li><input type="checkbox" name="question-1" value="C">C. AWS Blog.</li>
      <li><input type="checkbox" name="question-1" value="D">D. AWS Forums.</li>
      <li><input type="checkbox" name="question-1" value="E">E. AWS Classroom Training.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>Which of the following will enhance the security of access to the AWS Management Console’? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. AWS Secrets Manager.</li>
      <li><input type="checkbox" name="question-2" value="B">B. AWS Certificate Manager.</li>
      <li><input type="checkbox" name="question-2" value="C">C. AWS Multi-Factor Authentication (AWS MFA).</li>
      <li><input type="checkbox" name="question-2" value="D">D. Security groups.</li>
      <li><input type="checkbox" name="question-2" value="E">E. Password policies.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. Amazon CloudFront distributions.</li>
      <li><input type="checkbox" name="question-3" value="B">B. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-3" value="C">C. Security Groups.</li>
      <li><input type="checkbox" name="question-3" value="D">D. Subnets.</li>
      <li><input type="checkbox" name="question-3" value="E">E. Elastic Load Balancing.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>For which auditing process does AWS have sole responsibility?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. AWS IAM policies.</li>
      <li><input type="checkbox" name="question-4" value="B">B. Physical security.</li>
      <li><input type="checkbox" name="question-4" value="C">C. Amazon S3 bucket policies.</li>
      <li><input type="checkbox" name="question-4" value="D">D. AWS CloudTrail Logs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following are advantages of AWS consolidated billing? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. The ability to receive one bill for multiple accounts.</li>
      <li><input type="checkbox" name="question-5" value="B">B. Service limits increasing by default in all accounts.</li>
      <li><input type="checkbox" name="question-5" value="C">C. A fixed discount on the monthly bill.</li>
      <li><input type="checkbox" name="question-5" value="D">D. Potential volume discounts, as usage in all accounts is combined.</li>
      <li><input type="checkbox" name="question-5" value="E">E. The automatic extension of the master account’s AWS support plan to all accounts.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Patching databases software.</li>
      <li><input type="checkbox" name="question-6" value="B">B. Testing application releases.</li>
      <li><input type="checkbox" name="question-6" value="C">C. Backing up databases.</li>
      <li><input type="checkbox" name="question-6" value="D">D. Creating database schema.</li>
      <li><input type="checkbox" name="question-6" value="E">E. Running penetration tests.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Contact an AWS Account Manager to sign a new contract.</li>
      <li><input type="checkbox" name="question-7" value="B">B. Move an Availability Zone to the new Region.</li>
      <li><input type="checkbox" name="question-7" value="C">C. Begin deploying resources in the second Region.</li>
      <li><input type="checkbox" name="question-7" value="D">D. Download the AWS Management Console for the new Region.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Why is it beneficial to use Elastic Load Balancers with applications?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. They allow for the conversion from Application Load.</li>
      <li><input type="checkbox" name="question-8" value="B">B. Balancers to Classic Load Balancers.</li>
      <li><input type="checkbox" name="question-8" value="C">C. They are capable of handling constant changes in network traffic patterns.</li>
      <li><input type="checkbox" name="question-8" value="D">D. They automatically adjust capacity. They are provided at no charge to users.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. Enterprise.</li>
      <li><input type="checkbox" name="question-9" value="B">B. Business.</li>
      <li><input type="checkbox" name="question-9" value="C">C. Developer</li>
      <li><input type="checkbox" name="question-9" value="D">D. Basic</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. Amazon S3.</li>
      <li><input type="checkbox" name="question-10" value="B">B. Amazon Glacier.</li>
      <li><input type="checkbox" name="question-10" value="C">C. Amazon EBS.</li>
      <li><input type="checkbox" name="question-10" value="D">D. Amazon EC2 Instance Store.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. AWS Enterprise Support.</li>
      <li><input type="checkbox" name="question-11" value="B">B. AWS Solutions Architects.</li>
      <li><input type="checkbox" name="question-11" value="C">C. AWS Professional Services.</li>
      <li><input type="checkbox" name="question-11" value="D">D. AWS Account Managers.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption Which AWS Support plan meets these requirements at the LOWEST cost?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Basic.</li>
      <li><input type="checkbox" name="question-12" value="B">B. Developer.</li>
      <li><input type="checkbox" name="question-12" value="C">C. Business.</li>
      <li><input type="checkbox" name="question-12" value="D">D. Enterprise.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. AWS Config.</li>
      <li><input type="checkbox" name="question-13" value="B">B. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-13" value="C">C. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-13" value="D">D. Amazon Inspector.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. It identifies software vulnerabilities in applications running on AWS.</li>
      <li><input type="checkbox" name="question-14" value="B">B. It provides a list of cost optimization recommendations based on current AWS usage.</li>
      <li><input type="checkbox" name="question-14" value="C">C. It detects potential security vulnerabilities caused by permissions settings on account resources.</li>
      <li><input type="checkbox" name="question-14" value="D">D. It automatically corrects potential security issues caused by permissions settings on account resources.</li>
      <li><input type="checkbox" name="question-14" value="E">E. It provides proactive alerting whenever an Amazon EC2 instance has been compromised.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>Which AWS managed service is used to host databases?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. AWS Batch.</li>
      <li><input type="checkbox" name="question-15" value="B">B. AWS Artifact.</li>
      <li><input type="checkbox" name="question-15" value="C">C. AWS Data Pipeline.</li>
      <li><input type="checkbox" name="question-15" value="D">D. Amazon RDS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. IAM group.</li>
      <li><input type="checkbox" name="question-16" value="B">B. IAM user.</li>
      <li><input type="checkbox" name="question-16" value="C">C. IAM role.</li>
      <li><input type="checkbox" name="question-16" value="D">D. IAM policy.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Under the shared responsibility model, which of the following is the customer responsible for?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Ensuring that disk drives are wiped after use.</li>
      <li><input type="checkbox" name="question-17" value="B">B. Ensuring that firmware is updated on hardware devices.</li>
      <li><input type="checkbox" name="question-17" value="C">C. Ensuring that data is encrypted at rest.</li>
      <li><input type="checkbox" name="question-17" value="D">D. Ensuring that network cables are category six or higher.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Amazon S3.</li>
      <li><input type="checkbox" name="question-18" value="B">B. Amazon Glacier.</li>
      <li><input type="checkbox" name="question-18" value="C">C. Amazon EBS.</li>
      <li><input type="checkbox" name="question-18" value="D">D. Amazon EFS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>What credential components are required to gain programmatic access to an AWS account? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. An access key ID.</li>
      <li><input type="checkbox" name="question-19" value="B">B. A primary key.</li>
      <li><input type="checkbox" name="question-19" value="C">C. A secret access key.</li>
      <li><input type="checkbox" name="question-19" value="D">D. A user ID.</li>
      <li><input type="checkbox" name="question-19" value="E">E. A secondary key.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>Which of the following is a shared control between the customer and AWS?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. Providing a key for Amazon S3 client-side encryption.</li>
      <li><input type="checkbox" name="question-20" value="B">B. Configuration of an Amazon EC2 instance.</li>
      <li><input type="checkbox" name="question-20" value="C">C. Environmental controls of physical AWS data centers.</li>
      <li><input type="checkbox" name="question-20" value="D">D. Awareness.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which type of AWS storage is ephemeral and is deleted when an instance is stopped Of terminated?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Amazon EBS.</li>
      <li><input type="checkbox" name="question-21" value="B">B. Amazon EC2 instance store.</li>
      <li><input type="checkbox" name="question-21" value="C">C. Amazon EFS.</li>
      <li><input type="checkbox" name="question-21" value="D">D. Amazon S3.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following is an advantage of consolidated billing on AWS?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Volume pricing qualification.</li>
      <li><input type="checkbox" name="question-22" value="B">B. Shared access permissions.</li>
      <li><input type="checkbox" name="question-22" value="C">C. Multiple bills per account.</li>
      <li><input type="checkbox" name="question-22" value="D">D. Eliminates the need for tagging.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which services are parts of the AWS serverless platform?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Amazon EC2, Amazon S3, Amazon Athena.</li>
      <li><input type="checkbox" name="question-23" value="B">B. Amazon Kinesis, Amazon SQS, Amazon EMR.</li>
      <li><input type="checkbox" name="question-23" value="C">C. AWS Step Functions, Amazon DynamoDB, Amazon SNS.</li>
      <li><input type="checkbox" name="question-23" value="D">D. Amazon Athena, Amazon Cognito, Amazon EC2.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Spot Instances.</li>
      <li><input type="checkbox" name="question-24" value="B">B. Reserved Instances.</li>
      <li><input type="checkbox" name="question-24" value="C">C. Dedicated Hosts.</li>
      <li><input type="checkbox" name="question-24" value="D">D. On-Demand Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following security measures protect access to an AWS account? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Enable AWS CloudTrail.</li>
      <li><input type="checkbox" name="question-25" value="B">B. Grant least privilege access to IAM users.</li>
      <li><input type="checkbox" name="question-25" value="C">C. Create one IAM user and share with many developers and users.</li>
      <li><input type="checkbox" name="question-25" value="D">D. Enable Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-25" value="E">E. Activate multi-factor authentication (MFA) for privileged users.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>Which AWS service provides the ability to manage infrastructure as code?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. AWS CodePipeline.</li>
      <li><input type="checkbox" name="question-26" value="B">B. AWS CodeDeploy.</li>
      <li><input type="checkbox" name="question-26" value="C">C. AWS Direct Connect.</li>
      <li><input type="checkbox" name="question-26" value="D">D. AWS CloudFormation.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>What is an advantage of deploying an application across multiple Availability Zones?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.</li>
      <li><input type="checkbox" name="question-27" value="B">B. The application will have higher availability because it can withstand a service disruption in one Availability Zone.</li>
      <li><input type="checkbox" name="question-27" value="C">C. There will be better coverage as Availability Zones are geographical^ distant and can serve a wider area.</li>
      <li><input type="checkbox" name="question-27" value="D">D. There will be decreased application latency that will improve the user experience.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A customer needs to run a MySQL database that easily scales. Which AWS service should they use?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Amazon Aurora.</li>
      <li><input type="checkbox" name="question-28" value="B">B. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-28" value="C">C. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-28" value="D">D. Amazon ElastiCache.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following is an AWS Cloud architecture design principle?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Implement single points of failure.</li>
      <li><input type="checkbox" name="question-29" value="B">B. Implement loose coupling.</li>
      <li><input type="checkbox" name="question-29" value="C">C. Implement monolithic design.</li>
      <li><input type="checkbox" name="question-29" value="D">D. Implement vertical scaling.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS Support case.</li>
      <li><input type="checkbox" name="question-30" value="C">C. Concierge team.</li>
      <li><input type="checkbox" name="question-30" value="D">D. Amazon Connect.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Moving from variable operational expense ( opex ) to upfront capital expense (capex).</li>
      <li><input type="checkbox" name="question-31" value="B">B. Moving from upfront capital expense (capex) to variable capital expense (capex).</li>
      <li><input type="checkbox" name="question-31" value="C">C. Moving from upfront capital expense (capex) to variable operational expense ( opex ).</li>
      <li><input type="checkbox" name="question-31" value="D">D. Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex ).</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Dedicated Hosts</li>
      <li><input type="checkbox" name="question-32" value="B">B. Reserved Instances</li>
      <li><input type="checkbox" name="question-32" value="C">C. On-Demand Instances</li>
      <li><input type="checkbox" name="question-32" value="D">D. No Upfront Reserved Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which AWS service should be used for long-term, low-cost storage of data backups?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Amazon RDS.</li>
      <li><input type="checkbox" name="question-33" value="B">B. Amazon Glacier.</li>
      <li><input type="checkbox" name="question-33" value="C">C. AWS Snowball.</li>
      <li><input type="checkbox" name="question-33" value="D">D. AWS EBS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which is the MINIMUM AWS Support plan that provides technical support through phone calls?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Enterprise.</li>
      <li><input type="checkbox" name="question-34" value="B">B. Business.</li>
      <li><input type="checkbox" name="question-34" value="C">C. Developer.</li>
      <li><input type="checkbox" name="question-34" value="D">D. Basic.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which Amazon EC2 instance pricing model can provide discounts of up to 90%?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Reserved Instances.</li>
      <li><input type="checkbox" name="question-35" value="B">B. On-Demand.</li>
      <li><input type="checkbox" name="question-35" value="C">C. Dedicated Hosts.</li>
      <li><input type="checkbox" name="question-35" value="D">D. Spot Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. appGateway.</li>
      <li><input type="checkbox" name="question-36" value="B">B. Amazon S3.</li>
      <li><input type="checkbox" name="question-36" value="C">C. Amazon Elastic File System (EFS).</li>
      <li><input type="checkbox" name="question-36" value="D">D. Amazon Glacier.</li>
      <li><input type="checkbox" name="question-36" value="E">E. Amazom CloudFront.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>What can AWS edge locations be used for? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Hosting applications.</li>
      <li><input type="checkbox" name="question-37" value="B">B. Delivering content closer to users.</li>
      <li><input type="checkbox" name="question-37" value="C">C. Running NoSQL database caching services.</li>
      <li><input type="checkbox" name="question-37" value="D">D. Reducing traffic on the server by caching responses.</li>
      <li><input type="checkbox" name="question-37" value="E">E. Sending notification messages to end users.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. AWS Total Cost of Ownership (TCO) Calculator.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Cost Explorer.</li>
      <li><input type="checkbox" name="question-38" value="C">C. AWS Budgets.</li>
      <li><input type="checkbox" name="question-38" value="D">D. AWS Migration Hub.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. AWS Service Health Dashboard.</li>
      <li><input type="checkbox" name="question-39" value="B">B. AWS X-Ray.</li>
      <li><input type="checkbox" name="question-39" value="C">C. AWS Personal Health Dashboard.</li>
      <li><input type="checkbox" name="question-39" value="D">D. Amazon CloudWatch.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. It allows the business to eliminate IT bills.</li>
      <li><input type="checkbox" name="question-40" value="B">B. It allows the business to put a server in each customer’s data center.</li>
      <li><input type="checkbox" name="question-40" value="C">C. It allows the business to focus on business activities.</li>
      <li><input type="checkbox" name="question-40" value="D">D. It allows the business to leave servers unpatched.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. AWS Senior Support Engineers.</li>
      <li><input type="checkbox" name="question-41" value="B">B. AWS Technical Account Managers.</li>
      <li><input type="checkbox" name="question-41" value="C">C. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-41" value="D">D. AWS Discussion Forums.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Deploy applications across multiple Availability Zones within an AWS Region.</li>
      <li><input type="checkbox" name="question-42" value="B">B. Use a hybrid cloud computing deployment model within the geographic area.</li>
      <li><input type="checkbox" name="question-42" value="C">C. Deploy applications across multiple AWS Regions.</li>
      <li><input type="checkbox" name="question-42" value="D">D. Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. Ensuring network connectivity from AWS to the internet.</li>
      <li><input type="checkbox" name="question-43" value="B">B. Patching and fixing flaws within the AWS Cloud infrastructure.</li>
      <li><input type="checkbox" name="question-43" value="C">C. Ensuring the physical security of cloud data centers.</li>
      <li><input type="checkbox" name="question-43" value="D">D. Ensuring Amazon EBS volumes are backed up.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>In which scenario should Amazon EC2 Spot Instances be used?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. A company wants to move its main website to AWS from an on-premises web server.</li>
      <li><input type="checkbox" name="question-44" value="B">B. A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.</li>
      <li><input type="checkbox" name="question-44" value="C">C. A company’s heavily used legacy database is currently running on-premises.</li>
      <li><input type="checkbox" name="question-44" value="D">D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer’s decision? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. Reduced latency to users.</li>
      <li><input type="checkbox" name="question-45" value="B">B. The application’s presentation in the local language.</li>
      <li><input type="checkbox" name="question-45" value="C">C. Data sovereignty compliance.</li>
      <li><input type="checkbox" name="question-45" value="D">D. Cooling costs in hotter climates.</li>
      <li><input type="checkbox" name="question-45" value="E">E. Proximity to the customer’s office for on-site visits.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>Which AWS service provides alerts when an AWS event may impact a company’s AWS resources?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. AWS Personal Health Dashboard.</li>
      <li><input type="checkbox" name="question-46" value="B">B. AWS Service Health Dashboard.</li>
      <li><input type="checkbox" name="question-46" value="C">C. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-46" value="D">D. AWS Infrastructure Event Management.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which disaster recovery scenario offers the lowest probability of down time?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Backup and restore.</li>
      <li><input type="checkbox" name="question-47" value="B">B. Pilot light.</li>
      <li><input type="checkbox" name="question-47" value="C">C. Warm standby.</li>
      <li><input type="checkbox" name="question-47" value="D">D. Multi-site active-active.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which service’s PRIMARY purpose is software version control?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Amazon CodeStar.</li>
      <li><input type="checkbox" name="question-48" value="B">B. AWS Command Line Interface (AWS CLI).</li>
      <li><input type="checkbox" name="question-48" value="C">C. Amazon Cognito.</li>
      <li><input type="checkbox" name="question-48" value="D">D. AWS CodeCommit.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>How can a customer increase security to AWS account logons? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Configure AWS Certificate Manager</li>
      <li><input type="checkbox" name="question-49" value="B">B. Enable Multi-Factor Authentication (MFA)</li>
      <li><input type="checkbox" name="question-49" value="C">C. Use Amazon Cognito to manage access</li>
      <li><input type="checkbox" name="question-49" value="D">D. Configure a strong password policy</li>
      <li><input type="checkbox" name="question-49" value="E">E. Enable AWS Organizations</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
</ol>
      `,
    data: []
  },
];