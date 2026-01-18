export default [
  {
    id: 13,
    title: "Practice Exam 13",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Cost allocation tags</li>
      <li><input type="checkbox" name="question-0" value="B">B. Consolidated billing</li>
      <li><input type="checkbox" name="question-0" value="C">C. AWS Budgets</li>
      <li><input type="checkbox" name="question-0" value="D">D. AWS Marketplace</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html</a></p>

    </details>
  </li>
  <li>Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. Amazon Glacier</li>
      <li><input type="checkbox" name="question-1" value="B">B. AWS Storage Gateway</li>
      <li><input type="checkbox" name="question-1" value="C">C. Amazon S3</li>
      <li><input type="checkbox" name="question-1" value="D">D. Amazon EBS</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/s3/faqs/">https://aws.amazon.com/s3/faqs/</a></p>

    </details>
  </li>
  <li>What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice area ?
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. AWS Enterprise Support</li>
      <li><input type="checkbox" name="question-2" value="B">B. AWS Solutions Architects</li>
      <li><input type="checkbox" name="question-2" value="C">C. AWS Professional Services</li>
      <li><input type="checkbox" name="question-2" value="D">D. AWS Account Managers</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/professional-services/">https://aws.amazon.com/professional-services/</a></p>

    </details>
  </li>
  <li>A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. <br>Which of the following AWS programs can a customer take advantage of to achieve that outcome?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. AWS Partner Network Technology Partners</li>
      <li><input type="checkbox" name="question-3" value="B">B. AWS Marketplace</li>
      <li><input type="checkbox" name="question-3" value="C">C. AWS Partner Network Consulting Partners</li>
      <li><input type="checkbox" name="question-3" value="D">D. AWS Service Catalog</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Implement automation.</li>
      <li><input type="checkbox" name="question-4" value="B">B. Design for agility.</li>
      <li><input type="checkbox" name="question-4" value="C">C. Design for failure.</li>
      <li><input type="checkbox" name="question-4" value="D">D. Implement elasticity.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which AWS services can host a Microsoft SQL Server database? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. Amazon EC2</li>
      <li><input type="checkbox" name="question-5" value="B">B. Amazon Relational Database Service (Amazon RDS)</li>
      <li><input type="checkbox" name="question-5" value="C">C. Amazon Aurora</li>
      <li><input type="checkbox" name="question-5" value="D">D. Amazon Redshift</li>
      <li><input type="checkbox" name="question-5" value="E">E. Amazon S3</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AB</p>

      <p>Explanation: <a href="https://aws.amazon.com/sql/">https://aws.amazon.com/sql/</a></p>

    </details>
  </li>
  <li>Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance ?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. AWS Cost Explorer</li>
      <li><input type="checkbox" name="question-6" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-6" value="C">C. Consolidated billing</li>
      <li><input type="checkbox" name="question-6" value="D">D. Detailed billing</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software license ?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Spot Instances</li>
      <li><input type="checkbox" name="question-7" value="B">B. Reserved Instances</li>
      <li><input type="checkbox" name="question-7" value="C">C. Dedicated Hosts</li>
      <li><input type="checkbox" name="question-7" value="D">D. On-Demand Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/pricing/">https://aws.amazon.com/ec2/pricing/</a></p>

    </details>
  </li>
  <li>Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. High availability</li>
      <li><input type="checkbox" name="question-8" value="B">B. Shared security model</li>
      <li><input type="checkbox" name="question-8" value="C">C. Elasticity</li>
      <li><input type="checkbox" name="question-8" value="D">D. Pay-as-you-go pricing</li>
      <li><input type="checkbox" name="question-8" value="E">E. Reliability</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CD</p>

    </details>
  </li>
  <li>Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-9" value="B">B. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-9" value="C">C. AWS Config</li>
      <li><input type="checkbox" name="question-9" value="D">D. AWS Health</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/cloudtrail/">https://aws.amazon.com/cloudtrail/</a></p>

    </details>
  </li>
  <li>Which of the following are characteristics of Amazon S3? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. A global file system</li>
      <li><input type="checkbox" name="question-10" value="B">B. An object store</li>
      <li><input type="checkbox" name="question-10" value="C">C. A local file store</li>
      <li><input type="checkbox" name="question-10" value="D">D. A network file system</li>
      <li><input type="checkbox" name="question-10" value="E">E. A durable storage system</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BE</p>

    </details>
  </li>
  <li>Which services can be used across hybrid AWS Cloud architectures? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Amazon Route 53</li>
      <li><input type="checkbox" name="question-11" value="B">B. Virtual Private Gateway</li>
      <li><input type="checkbox" name="question-11" value="C">C. Classic Load Balancer</li>
      <li><input type="checkbox" name="question-11" value="D">D. Auto Scaling</li>
      <li><input type="checkbox" name="question-11" value="E">E. Amazon CloudWatch default metrics</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AB</p>

      <p>Explanation:</p>
      <ul>
        <li><a href="https://aws.amazon.com/cloudwatch/">https://aws.amazon.com/cloudwatch/</a></li>
        <li>You can also use CloudWatch in hybrid cloud architectures by using the CloudWatch Agent or API to monitor your on-premises resources</li>
      </ul>

    </details>
  </li>
  <li>What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Project management</li>
      <li><input type="checkbox" name="question-12" value="B">B. Antivirus software licensing</li>
      <li><input type="checkbox" name="question-12" value="C">C. Data center security</li>
      <li><input type="checkbox" name="question-12" value="D">D. Software development</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://media.amazonwebservices.com/AWS_TCO_Web_Applications.pdf">https://media.amazonwebservices.com/AWS_TCO_Web_Applications.pdf</a></p>

    </details>
  </li>
  <li>A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. <br> Which service should the company use?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Amazon Redshift</li>
      <li><input type="checkbox" name="question-13" value="B">B. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-13" value="C">C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store</li>
      <li><input type="checkbox" name="question-13" value="D">D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

    </details>
  </li>
  <li>Which of the following is a correct relationship between regions, Availability Zones, and edge locations?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. Data centers contain regions.</li>
      <li><input type="checkbox" name="question-14" value="B">B. Regions contain Availability Zones.</li>
      <li><input type="checkbox" name="question-14" value="C">C. Availability Zones contain edge locations.</li>
      <li><input type="checkbox" name="question-14" value="D">D. Edge locations contain regions.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/about-aws/global-infrastructure/regions_az/#Region_Maps_and_Edge_Networks">https://aws.amazon.com/about-aws/global-infrastructure/regions_az/#Region_Maps_and_Edge_Networks</a></p>

    </details>
  </li>
  <li>Which AWS tools assist with estimating costs? (Select three.)
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Detailed billing report</li>
      <li><input type="checkbox" name="question-15" value="B">B. Cost allocation tags</li>
      <li><input type="checkbox" name="question-15" value="C">C. AWS Simple Monthly Calculator</li>
      <li><input type="checkbox" name="question-15" value="D">D. AWS Total Cost of Ownership (TCO) Calculator</li>
      <li><input type="checkbox" name="question-15" value="E">E. Cost Eliminator</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BCD</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/">https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/</a></p>

    </details>
  </li>
  <li>Which of the following are advantages of AWS consolidated billing? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. The ability to receive one bill for multiple accounts</li>
      <li><input type="checkbox" name="question-16" value="B">B. Service limits increasing by default in all accounts</li>
      <li><input type="checkbox" name="question-16" value="C">C. A fixed discount on the monthly bill</li>
      <li><input type="checkbox" name="question-16" value="D">D. Potential volume discounts, as usage in all accounts is combined</li>
      <li><input type="checkbox" name="question-16" value="E">E. The automatic extension of the master account’s AWS support plan to all accounts</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></p>

    </details>
  </li>
  <li>Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. One-year, No Upfront, Standard RI pricing</li>
      <li><input type="checkbox" name="question-17" value="B">B. One-year, All Upfront, Convertible RI pricing</li>
      <li><input type="checkbox" name="question-17" value="C">C. Three-year, All Upfront, Standard RI pricing</li>
      <li><input type="checkbox" name="question-17" value="D">D. Three-year, No Upfront, Convertible RI pricing</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/">https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/</a></p>

    </details>
  </li>
  <li>Compared with costs in traditional and virtualized data centers, AWS has:
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. greater variable costs and greater upfront costs.</li>
      <li><input type="checkbox" name="question-18" value="B">B. fixed usage costs and lower upfront costs.</li>
      <li><input type="checkbox" name="question-18" value="C">C. lower variable costs and greater upfront costs.</li>
      <li><input type="checkbox" name="question-18" value="D">D. lower variable costs and lower upfront costs.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/introduction-to-aws-cloud-economics-final.pdf">https://d1.awsstatic.com/whitepapers/introduction-to-aws-cloud-economics-final.pdf</a> (10)</p>

    </details>
  </li>
  <li>A characteristic of edge locations is that they:
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. host Amazon EC2 instances closer to users.</li>
      <li><input type="checkbox" name="question-19" value="B">B. help lower latency and improve performance for users.</li>
      <li><input type="checkbox" name="question-19" value="C">C. cache frequently changing data without reaching the origin server.</li>
      <li><input type="checkbox" name="question-19" value="D">D. refresh data changes daily.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. A public and private key-pair</li>
      <li><input type="checkbox" name="question-20" value="B">B. Amazon Inspector</li>
      <li><input type="checkbox" name="question-20" value="C">C. AWS Identity and Access Management (IAM) policies</li>
      <li><input type="checkbox" name="question-20" value="D">D. Security Groups</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-iam-role/">https://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-iam-role/</a></p>

    </details>
  </li>
  <li>Which of the following security-related actions are available at no cost?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Calling AWS Support</li>
      <li><input type="checkbox" name="question-21" value="B">B. Contacting AWS Professional Services to request a workshop</li>
      <li><input type="checkbox" name="question-21" value="C">C. Accessing forums, blogs, and whitepapers</li>
      <li><input type="checkbox" name="question-21" value="D">D. Attending AWS classes at a local university</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Dedicated RIs</li>
      <li><input type="checkbox" name="question-22" value="B">B. Scheduled RIs</li>
      <li><input type="checkbox" name="question-22" value="C">C. Convertible RIs</li>
      <li><input type="checkbox" name="question-22" value="D">D. Standard RIs</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/pricing/reserved-instances/">https://aws.amazon.com/ec2/pricing/reserved-instances/</a></p>

    </details>
  </li>
  <li>Which AWS feature will reduce the customer’s total cost of ownership (TCO)?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Shared responsibility security model</li>
      <li><input type="checkbox" name="question-23" value="B">B. Single tenancy</li>
      <li><input type="checkbox" name="question-23" value="C">C. Elastic computing</li>
      <li><input type="checkbox" name="question-23" value="D">D. Encryption</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which of the following services will automatically scale with an expected increase in web traffic?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. AWS CodePipeline</li>
      <li><input type="checkbox" name="question-24" value="B">B. Elastic Load Balancing</li>
      <li><input type="checkbox" name="question-24" value="C">C. Amazon EBS</li>
      <li><input type="checkbox" name="question-24" value="D">D. AWS Direct Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/elasticloadbalancing/">https://aws.amazon.com/elasticloadbalancing/</a></p>

    </details>
  </li>
  <li>Where are AWS compliance documents, such as an SOC 1 report, located?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Amazon Inspector</li>
      <li><input type="checkbox" name="question-25" value="B">B. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-25" value="C">C. AWS Artifact</li>
      <li><input type="checkbox" name="question-25" value="D">D. AWS Certificate Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/soc-faqs/">https://aws.amazon.com/compliance/soc-faqs/</a></p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. Patching operating system components for Amazon Relational Database Server (Amazon RDS)</li>
      <li><input type="checkbox" name="question-26" value="B">B. Encrypting data on the client-side</li>
      <li><input type="checkbox" name="question-26" value="C">C. Training the data center staff</li>
      <li><input type="checkbox" name="question-26" value="D">D. Configuring Network Access Control Lists (ACL)</li>
      <li><input type="checkbox" name="question-26" value="E">E. Maintaining environmental controls within a data center</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>Which is a recommended pattern for designing a highly available architecture on AWS?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. Ensure that components have low-latency network connectivity.</li>
      <li><input type="checkbox" name="question-27" value="B">B. Run enough Amazon EC2 instances to operate at peak load.</li>
      <li><input type="checkbox" name="question-27" value="C">C. Ensure that the application is designed to accommodate failure of any single component.</li>
      <li><input type="checkbox" name="question-27" value="D">D. Use a monolithic application that handles all operations.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>According to best practices, how should an application be designed to run in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Use tightly coupled components.</li>
      <li><input type="checkbox" name="question-28" value="B">B. Use loosely coupled components.</li>
      <li><input type="checkbox" name="question-28" value="C">C. Use infrequently coupled components.</li>
      <li><input type="checkbox" name="question-28" value="D">D. Use frequently coupled components.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf">https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf</a></p>

    </details>
  </li>
  <li>AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Implementing Amazon Rekognition</li>
      <li><input type="checkbox" name="question-29" value="B">B. Using AWS Shield-protected resources</li>
      <li><input type="checkbox" name="question-29" value="C">C. Blocking access with Security Groups</li>
      <li><input type="checkbox" name="question-29" value="D">D. Using Multi-Factor Authentication (MFA)</li>
      <li><input type="checkbox" name="question-29" value="E">E. Enforcing password strength and expiration</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: DE</p>

    </details>
  </li>
  <li>Which AWS services should be used for read/write of constantly changing data? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. Amazon Glacier</li>
      <li><input type="checkbox" name="question-30" value="B">B. Amazon RDS</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS Snowball</li>
      <li><input type="checkbox" name="question-30" value="D">D. Amazon Redshift</li>
      <li><input type="checkbox" name="question-30" value="E">E. Amazon EFS</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BE</p>

    </details>
  </li>
  <li>What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. It simplifies relational database administration tasks.</li>
      <li><input type="checkbox" name="question-31" value="B">B. It provides 99.99999999999% reliability and durability.</li>
      <li><input type="checkbox" name="question-31" value="C">C. It automatically scales databases for loads.</li>
      <li><input type="checkbox" name="question-31" value="D">D. It enabled users to dynamically adjust CPU and RAM resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>In the main RDS page though, Lower administrative burden is listed as part of the benefits.</li>
        <li><a href="https://aws.amazon.com/rds/">https://aws.amazon.com/rds/</a></li>
      </ul>

    </details>
  </li>
  <li>A customer needs to run a MySQL database that easily scales.<br>Which AWS service should they use?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Amazon Aurora</li>
      <li><input type="checkbox" name="question-32" value="B">B. Amazon Redshift</li>
      <li><input type="checkbox" name="question-32" value="C">C. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-32" value="D">D. Amazon ElastiCache</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/rds/aurora/serverless/">https://aws.amazon.com/rds/aurora/serverless/</a></p>

    </details>
  </li>
  <li>Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Availability Zone</li>
      <li><input type="checkbox" name="question-33" value="B">B. Edge location</li>
      <li><input type="checkbox" name="question-33" value="C">C. Region</li>
      <li><input type="checkbox" name="question-33" value="D">D. Private networking</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html">https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html</a></p>

    </details>
  </li>
  <li>Which of the following is a shared control between the customer and AWS?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Providing a key for Amazon S3 client-side encryption</li>
      <li><input type="checkbox" name="question-34" value="B">B. Configuration of an Amazon EC2 instance</li>
      <li><input type="checkbox" name="question-34" value="C">C. Environmental controls of physical AWS data centers</li>
      <li><input type="checkbox" name="question-34" value="D">D. Awareness and training</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>How many Availability Zones should compute resources be provisioned across to achieve high availability?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. A minimum of one</li>
      <li><input type="checkbox" name="question-35" value="B">B. A minimum of two</li>
      <li><input type="checkbox" name="question-35" value="C">C. A minimum of three</li>
      <li><input type="checkbox" name="question-35" value="D">D. A minimum of four or more</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. it allows the business to eliminate IT bills.</li>
      <li><input type="checkbox" name="question-36" value="B">B. it allows the business to put a server in each customer’s data center.</li>
      <li><input type="checkbox" name="question-36" value="C">C. it allows the business to focus on business activities.</li>
      <li><input type="checkbox" name="question-36" value="D">D. it allows the business to leave servers unpatched.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Amazon S3</li>
      <li><input type="checkbox" name="question-37" value="B">B. Amazon Glacier</li>
      <li><input type="checkbox" name="question-37" value="C">C. Amazon EBS</li>
      <li><input type="checkbox" name="question-37" value="D">D. Amazon EC2 Instance Store</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>Which AWS IAM feature allows developers to access AWS services through the AWS CLI?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. API keys</li>
      <li><input type="checkbox" name="question-38" value="B">B. Access keys</li>
      <li><input type="checkbox" name="question-38" value="C">C. User names/Passwords</li>
      <li><input type="checkbox" name="question-38" value="D">D. SSH keys</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html</a></p>

    </details>
  </li>
  <li>Which of the following is a fast and reliable NoSQL database service?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Amazon Redshift</li>
      <li><input type="checkbox" name="question-39" value="B">B. Amazon RDS</li>
      <li><input type="checkbox" name="question-39" value="C">C. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-39" value="D">D. Amazon S3</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/dynamodb/">https://aws.amazon.com/dynamodb/</a></p>

    </details>
  </li>
  <li>What is an example of agility in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Access to multiple instance types</li>
      <li><input type="checkbox" name="question-40" value="B">B. Access to managed services</li>
      <li><input type="checkbox" name="question-40" value="C">C. Using Consolidated Billing to produce one bill</li>
      <li><input type="checkbox" name="question-40" value="D">D. Decreased acquisition time for new compute resources</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/enterprise-strategy/risk-is-lack-of-agility/">https://aws.amazon.com/blogs/enterprise-strategy/risk-is-lack-of-agility/</a></p>

    </details>
  </li>
  <li>Which service should a customer use to consolidate and centrally manage multiple AWS accounts?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. AWS IAM</li>
      <li><input type="checkbox" name="question-41" value="B">B. AWS Organizations</li>
      <li><input type="checkbox" name="question-41" value="C">C. AWS Schema Conversion Tool</li>
      <li><input type="checkbox" name="question-41" value="D">D. AWS Config</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/organizations/">https://aws.amazon.com/organizations/</a></p>

    </details>
  </li>
  <li>What approach to transcoding a large number of individual video files adheres to AWS architecture principles?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Using many instances in parallel</li>
      <li><input type="checkbox" name="question-42" value="B">B. Using a single large instance during off-peak hours</li>
      <li><input type="checkbox" name="question-42" value="C">C. Using dedicated hardware</li>
      <li><input type="checkbox" name="question-42" value="D">D. Using a large GPU instance type</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/solutions/case-studies/encoding/">https://aws.amazon.com/solutions/case-studies/encoding/</a></p>

    </details>
  </li>
  <li>For which auditing process does AWS have sole responsibility?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. AWS IAM policies</li>
      <li><input type="checkbox" name="question-43" value="B">B. Physical security</li>
      <li><input type="checkbox" name="question-43" value="C">C. Amazon S3 bucket policies</li>
      <li><input type="checkbox" name="question-43" value="D">D. AWS CloudTrail Logs</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Fault tolerance</li>
      <li><input type="checkbox" name="question-44" value="B">B. Global reach</li>
      <li><input type="checkbox" name="question-44" value="C">C. Pay-as-you-go pricing</li>
      <li><input type="checkbox" name="question-44" value="D">D. High availability</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Global Reach will support an international company using Cloud-Front.</li>
      </ul>

    </details>
  </li>
  <li>Which of the following is the customer’s responsibility under the AWS shared responsibility model?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. Patching underlying infrastructure</li>
      <li><input type="checkbox" name="question-45" value="B">B. Physical security</li>
      <li><input type="checkbox" name="question-45" value="C">C. Patching Amazon EC2 instances</li>
      <li><input type="checkbox" name="question-45" value="D">D. Patching network infrastructure</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>A customer is using multiple AWS accounts with separate billing. <br>How can the customer take advantage of volume discounts with minimal impact to the AWS resources?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Create one global AWS account and move all AWS resources to that account.</li>
      <li><input type="checkbox" name="question-46" value="B">B. Sign up for three years of Reserved Instance pricing up front.</li>
      <li><input type="checkbox" name="question-46" value="C">C. Use the consolidated billing feature from AWS Organizations.</li>
      <li><input type="checkbox" name="question-46" value="D">D. Sign up for the AWS Enterprise support plan to get volume discounts.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/">https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/</a></p>

    </details>
  </li>
  <li>Which of the following are features of Amazon CloudWatch Logs? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Summaries by Amazon Simple Notification Service (Amazon SNS)</li>
      <li><input type="checkbox" name="question-47" value="B">B. Free Amazon Elasticsearch Service analytics</li>
      <li><input type="checkbox" name="question-47" value="C">C. Provided at no charge</li>
      <li><input type="checkbox" name="question-47" value="D">D. Real-time monitoring</li>
      <li><input type="checkbox" name="question-47" value="E">E. Adjustable retention</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: DE</p>

    </details>
  </li>
  <li>Which of the following is an AWS managed Domain Name System (DNS) web service?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Amazon Route 53</li>
      <li><input type="checkbox" name="question-48" value="B">B. Amazon Neptune</li>
      <li><input type="checkbox" name="question-48" value="C">C. Amazon SageMaker</li>
      <li><input type="checkbox" name="question-48" value="D">D. Amazon Lightsail</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/getting-started/tutorials/get-a-domain/">https://aws.amazon.com/getting-started/tutorials/get-a-domain/</a></p>

    </details>
  </li>
  <li>A customer is deploying a new application and needs to choose an AWS Region. <br>Which of the following factors could influence the customer’s decision? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Reduced latency to users</li>
      <li><input type="checkbox" name="question-49" value="B">B. The application’s presentation in the local language</li>
      <li><input type="checkbox" name="question-49" value="C">C. Data sovereignty compliance</li>
      <li><input type="checkbox" name="question-49" value="D">D. Cooling costs in hotter climates</li>
      <li><input type="checkbox" name="question-49" value="E">E. Proximity to the customer’s office for on-site visits</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

    </details>
  </li>
</ol>
      `,
    data: []
  },
];