export default [
  {
    id: 14,
    title: "Practice Exam 14",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>Which storage service can be used as a low-cost option for hosting static websites?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Amazon Glacier</li>
      <li><input type="checkbox" name="question-0" value="B">B. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-0" value="C">C. Amazon Elastic File System (Amazon EFS)</li>
      <li><input type="checkbox" name="question-0" value="D">D. Amazon Simple Storage Service (Amazon S3)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/getting-started/projects/host-static-website/">https://aws.amazon.com/getting-started/projects/host-static-website/</a></p>

    </details>
  </li>
  <li>Which Amazon EC2 instance pricing model can provide discounts of up to 90%?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. Reserved Instances</li>
      <li><input type="checkbox" name="question-1" value="B">B. On-Demand</li>
      <li><input type="checkbox" name="question-1" value="C">C. Dedicated Hosts</li>
      <li><input type="checkbox" name="question-1" value="D">D. Spot Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/spot/">https://aws.amazon.com/ec2/spot/</a></p>

    </details>
  </li>
  <li>What is the AWS customer responsible for according to the AWS shared responsibility model?
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Physical access controls</li>
      <li><input type="checkbox" name="question-2" value="B">B. Data encryption</li>
      <li><input type="checkbox" name="question-2" value="C">C. Secure disposal of storage devices</li>
      <li><input type="checkbox" name="question-2" value="D">D. Environmental risk management</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which of the following AWS Cloud services can be used to run a customer-managed relational database?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. Amazon EC2</li>
      <li><input type="checkbox" name="question-3" value="B">B. Amazon Route 53</li>
      <li><input type="checkbox" name="question-3" value="C">C. Amazon ElastiCache</li>
      <li><input type="checkbox" name="question-3" value="D">D. Amazon DynamoDB</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>A company is looking for a scalable data warehouse solution. <br> Which of the following AWS solutions would meet the company’s needs?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Amazon Simple Storage Service (Amazon S3)</li>
      <li><input type="checkbox" name="question-4" value="B">B. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-4" value="C">C. Amazon Kinesis</li>
      <li><input type="checkbox" name="question-4" value="D">D. Amazon Redshift</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/redshift/">https://aws.amazon.com/redshift/</a></p>

    </details>
  </li>
  <li>Which statement best describes Elastic Load Balancing?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. It translates a domain name into an IP address using DNS.</li>
      <li><input type="checkbox" name="question-5" value="B">B. It distributes incoming application traffic across one or more Amazon EC2 instances.</li>
      <li><input type="checkbox" name="question-5" value="C">C. It collects metrics on connected Amazon EC2 instances.</li>
      <li><input type="checkbox" name="question-5" value="D">D. It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/elasticloadbalancing/">https://aws.amazon.com/elasticloadbalancing/</a></p>

    </details>
  </li>
  <li>Which of the following are valid ways for a customer to interact with AWS services? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Command line interface</li>
      <li><input type="checkbox" name="question-6" value="B">B. On-premises</li>
      <li><input type="checkbox" name="question-6" value="C">C. Software Development Kits</li>
      <li><input type="checkbox" name="question-6" value="D">D. Software-as-a-service</li>
      <li><input type="checkbox" name="question-6" value="E">E. Hybrid</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

    </details>
  </li>
  <li>The AWS Cloud’s multiple Regions are an example of:
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. agility.</li>
      <li><input type="checkbox" name="question-7" value="B">B. global infrastructure.</li>
      <li><input type="checkbox" name="question-7" value="C">C. elasticity.</li>
      <li><input type="checkbox" name="question-7" value="D">D. pay-as-you-go pricing.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. AWS Storage Gateway</li>
      <li><input type="checkbox" name="question-8" value="B">B. Amazon S3</li>
      <li><input type="checkbox" name="question-8" value="C">C. Amazon Elastic File System (EFS)</li>
      <li><input type="checkbox" name="question-8" value="D">D. Amazon Glacier</li>
      <li><input type="checkbox" name="question-8" value="E">E. Amazon CloudFront</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BE</p>

      <p>Explanation:</p>
      <ul>
        <li><a href="https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/">https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/</a></li>
        <li><a href="https://aws.amazon.com/cloudfront/">https://aws.amazon.com/cloudfront/</a></li>
      </ul>

    </details>
  </li>
  <li>Web servers running on Amazon EC2 access a legacy application running in a corporate data center. <br> What term would describe this model?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. Cloud-native</li>
      <li><input type="checkbox" name="question-9" value="B">B. Partner network</li>
      <li><input type="checkbox" name="question-9" value="C">C. Hybrid architecture</li>
      <li><input type="checkbox" name="question-9" value="D">D. Infrastructure as a service</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/enterprise/hybrid/">https://aws.amazon.com/enterprise/hybrid/</a></p>

    </details>
  </li>
  <li>What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. They require the customer to monitor and replace failing instances.</li>
      <li><input type="checkbox" name="question-10" value="B">B. They have better performance than customer-managed services.</li>
      <li><input type="checkbox" name="question-10" value="C">C. They simplify patching and updating underlying OSs.</li>
      <li><input type="checkbox" name="question-10" value="D">D. They do not require the customer to optimize instance type or size selections.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Managed Services takes care of all of your patching and backup activities to help keep your resources current and secure. When updates or patches are released by OS vendors, AWS Managed Services applies them in a timely and consistent manner to minimize the impact on your business</li>
        <li>Critical security patches are applied immediately, while others are applied based on the patch schedule you request. Backups of Stacks are automated using Amazon Elastic Block Store (EBS) and RDS snapshots, and can be restored in the event of a failure or outage, ensuring business continuity</li>
      </ul>

    </details>
  </li>
  <li>Which service provides a virtually unlimited amount of online highly durable object storage?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Amazon Redshift</li>
      <li><input type="checkbox" name="question-11" value="B">B. Amazon Elastic File System (Amazon EFS)</li>
      <li><input type="checkbox" name="question-11" value="C">C. Amazon Elastic Container Service (Amazon ECS)</li>
      <li><input type="checkbox" name="question-11" value="D">D. Amazon S3</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/what-is-cloud-object-storage/">https://aws.amazon.com/what-is-cloud-object-storage/</a></p>

    </details>
  </li>
  <li>Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. IAM group</li>
      <li><input type="checkbox" name="question-12" value="B">B. IAM user</li>
      <li><input type="checkbox" name="question-12" value="C">C. IAM role</li>
      <li><input type="checkbox" name="question-12" value="D">D. IAM policy</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Access keys are long-term credentials for an IAM user or the AWS account root user.</li>
        <li>You can use access keys to sign programmatic requests to the AWS CLI or API (directly or using the AWS SDK).</li>
        <li>For more information, see Signing AWS API Requests in the Amazon Web Services General Reference.</li>
      </ul>

    </details>
  </li>
  <li>Which of the following security-related services does AWS offer? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Multi-factor authentication physical tokens</li>
      <li><input type="checkbox" name="question-13" value="B">B. AWS Trusted Advisor security checks</li>
      <li><input type="checkbox" name="question-13" value="C">C. Data encryption</li>
      <li><input type="checkbox" name="question-13" value="D">D. Automated penetration testing</li>
      <li><input type="checkbox" name="question-13" value="E">E. Amazon S3 copyrighted content detection</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

      <p>Explanation:</p>
      <ul>
        <li>Penetration testing is not correct, because it can be done by customers on their own resources.</li>
      </ul>

    </details>
  </li>
  <li>Which AWS managed service is used to host databases?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. AWS Batch</li>
      <li><input type="checkbox" name="question-14" value="B">B. AWS Artifact</li>
      <li><input type="checkbox" name="question-14" value="C">C. AWS Data Pipeline</li>
      <li><input type="checkbox" name="question-14" value="D">D. Amazon RDS</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud.</li>
        <li>It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups.</li>
        <li>It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/rds/?c=db&amp;sec=srv">https://aws.amazon.com/rds/?c=db&amp;sec=srv</a></p>

    </details>
  </li>
  <li>Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Amazon S3</li>
      <li><input type="checkbox" name="question-15" value="B">B. Amazon Glacier</li>
      <li><input type="checkbox" name="question-15" value="C">C. Amazon EBS</li>
      <li><input type="checkbox" name="question-15" value="D">D. Amazon EFS</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources.</li>
        <li>It is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth.</li>
        <li>Amazon EFS is designed to provide the throughput, IOPS, and low latency needed for Linux workloads.</li>
        <li>Throughput and IOPS scale as a file system grows and can burst to higher throughput levels for short periods of time to support the unpredictable performance needs of file workloads.</li>
        <li>For the most demanding workloads, Amazon EFS can support performance over 10 GB/sec and up to 500,000 IOPS.</li>
      </ul>

    </details>
  </li>
  <li>When architecting cloud applications, which of the following are a key design principle?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. Use the largest instance possible</li>
      <li><input type="checkbox" name="question-16" value="B">B. Provision capacity for peak load</li>
      <li><input type="checkbox" name="question-16" value="C">C. Use the Scrum development process</li>
      <li><input type="checkbox" name="question-16" value="D">D. Implement elasticity</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>“Provisioning for peaks” is a characteristic of a traditional computing environment, per the AWS Best Practices: “you provision capacity based on an estimate of a theoretical maximum peak.”</li>
        <li><a href="https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf">https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf</a></li>
      </ul>

    </details>
  </li>
  <li>Which AWS service should be used for long-term, low-cost storage of data backups?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Amazon RDS</li>
      <li><input type="checkbox" name="question-17" value="B">B. Amazon Glacier</li>
      <li><input type="checkbox" name="question-17" value="C">C. AWS Snowball</li>
      <li><input type="checkbox" name="question-17" value="D">D. AWS EBS</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon S3 Glacier is a secure, durable, and low-cost storage class of S3 for data archiving and long-term backup. Customers can store large or small amounts of data for as little as $0.004 per gigabyte per month.</li>
        <li>The S3 Glacier storage class is ideal for archives where data is regularly retrieved and some of the data may be needed in minutes.</li>
        <li>Amazon RDS is a relational database service that hosts databases. It helps you create and manage databases.</li>
        <li>Amazon Snowball is a petabyte-scale data transfer service that provides cost efficient data transfer to AWS from tamper proof physical devices. Similarly, Elastic block storage offers persistent block storage volumes for EC2 instances.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/backup-restore/services/">https://aws.amazon.com/backup-restore/services/</a></p>

    </details>
  </li>
  <li>Which task is AWS responsible for in the shared responsibility model for security and compliance?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Granting access to individuals and services</li>
      <li><input type="checkbox" name="question-18" value="B">B. Encrypting data in transit</li>
      <li><input type="checkbox" name="question-18" value="C">C. Updating Amazon EC2 host firmware</li>
      <li><input type="checkbox" name="question-18" value="D">D. Updating operating systems</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Compliance enables customers to establish and operate in an AWS security control environment The shared responsibility model is part of AWS Compliance</li>
        <li>The Security of the cloud is managed by Amazon AWS provider</li>
        <li>The Security in the cloud is responsibility of the customer</li>
        <li>The customer is responsible for their information and data, their secure transmission, integrity, and encryption Also, the customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2</li>
        <li>AWS customers retain control and ownership of their data</li>
        <li>The AWS network provides significant protection against traditional network security issues and the customer can implement further protection</li>
      </ul>

      <p>Reference: <a href="https://www.whizlabs.com/blog/aws-security-shared-responsibility/">https://www.whizlabs.com/blog/aws-security-shared-responsibility/</a></p>

    </details>
  </li>
  <li>Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. AWS Marketplace</li>
      <li><input type="checkbox" name="question-19" value="B">B. Amazon Lumberyard</li>
      <li><input type="checkbox" name="question-19" value="C">C. AWS Artifact</li>
      <li><input type="checkbox" name="question-19" value="D">D. Amazon CloudSearch</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com">https://aws.amazon.com</a></p>

    </details>
  </li>
  <li>Which of the following is a benefit of using the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. Permissive security removes the administrative burden.</li>
      <li><input type="checkbox" name="question-20" value="B">B. Ability to focus on revenue-generating activities.</li>
      <li><input type="checkbox" name="question-20" value="C">C. Control over cloud network hardware.</li>
      <li><input type="checkbox" name="question-20" value="D">D. Choice of specific cloud hardware vendors.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Developer and IT staff productivity accounted for nearly 30% of overall financial benefits.</li>
        <li>The remaining benefits were driven by the flexibility and agility of Amazon cloud infrastructure services, which make it easier to trial new business models, support revenue-generating applications, and provide more reliable services to end users.</li>
      </ul>

      <p>Reference: <a href="https://media.amazonwebservices.com/IDC_Business_Value_of_AWS_Accelerates_Over_time.pdf">https://media.amazonwebservices.com/IDC_Business_Value_of_AWS_Accelerates_Over_time.pdf</a></p>

    </details>
  </li>
  <li>When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Dedicated Hosts</li>
      <li><input type="checkbox" name="question-21" value="B">B. Reserved Instances</li>
      <li><input type="checkbox" name="question-21" value="C">C. On-Demand Instances</li>
      <li><input type="checkbox" name="question-21" value="D">D. No Upfront Reserved Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>Use Dedicated Hosts to launch Amazon EC2 instances on physical servers that are dedicated for your use.</li>
        <li>Dedicated Hosts give you additional visibility and control over how instances are placed on a physical server, and you can reliably use the same physical server over time.</li>
        <li>As a result, Dedicated Hosts enable you to use your existing server-bound software licenses like Windows Server and address corporate compliance and regulatory requirements.</li>
      </ul>

    </details>
  </li>
  <li>Which AWS service provides the ability to manage infrastructure as code?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. AWS CodePipeline</li>
      <li><input type="checkbox" name="question-22" value="B">B. AWS CodeDeploy</li>
      <li><input type="checkbox" name="question-22" value="C">C. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-22" value="D">D. AWS CloudFormation</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment.</li>
        <li>CloudFormation allows you to use a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts.</li>
        <li>This file serves as the single source of truth for your cloud environment.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/cloudformation/">https://aws.amazon.com/cloudformation/</a></p>

    </details>
  </li>
  <li>If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-23" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-23" value="C">C. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-23" value="D">D. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources.</li>
        <li>Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.</li>
        <li>With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines.</li>
        <li>This enables you to simplify compliance auditing, security analysis, change management, and operational troubleshooting.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/config/">https://aws.amazon.com/config/</a></p>

    </details>
  </li>
  <li>What is Amazon CloudWatch?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. A code repository with customizable build and team commit features.</li>
      <li><input type="checkbox" name="question-24" value="B">B. A metrics repository with customizable notification thresholds and channels.</li>
      <li><input type="checkbox" name="question-24" value="C">C. A security configuration repository with threat analytics.</li>
      <li><input type="checkbox" name="question-24" value="D">D. A rule repository of a web application firewall with automated vulnerability prevention features.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon CloudWatch is basically a metrics repository.</li>
        <li>An AWS service – such as Amazon EC2 – puts metrics into the repository, and you retrieve statistics based on those metrics.</li>
        <li>If you put your own custom metrics into the repository, you can retrieve statistics on these metrics as well.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/</a> cloudwatch_architecture.html</p>

    </details>
  </li>
  <li>Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. AWS Server Migration Service</li>
      <li><input type="checkbox" name="question-25" value="B">B. AWS Organizations</li>
      <li><input type="checkbox" name="question-25" value="C">C. AWS Budgets</li>
      <li><input type="checkbox" name="question-25" value="D">D. AWS Trusted Advisor</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts.</li>
        <li>Every organization in AWS Organizations has a master account that pays the charges of all the member accounts.</li>
        <li>Consolidated billing has the following benefits:
          <ul>
            <li>One bill You get one bill for multiple accounts.</li>
            <li>Easy tracking You can track the charges across multiple accounts and download the combined cost and usage data.</li>
            <li>Combined usage You can combine the usage across all accounts in the organization to share the volume pricing discounts and Reserved Instance discounts. This can result in a lower charge for your project, department, or company than with individual standalone accounts. For more information, see Volume Discounts.</li>
            <li>No extra fee Consolidated billing is offered at no additional cost.</li>
          </ul>
        </li>
      </ul>

    </details>
  </li>
  <li>Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. AWS Elastic Beanstalk</li>
      <li><input type="checkbox" name="question-26" value="B">B. AWS OpsWorks</li>
      <li><input type="checkbox" name="question-26" value="C">C. AWS CodeDeploy</li>
      <li><input type="checkbox" name="question-26" value="D">D. AWS Batch</li>
      <li><input type="checkbox" name="question-26" value="E">E. AWS X-Ray</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

      <p>Explanation:</p>
      <ul>
        <li><a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-on-premises.html">https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-on-premises.html</a></li>
        <li><a href="https://aws.amazon.com/blogs/aws/opsworks-on-prem-and-existing-instances/">https://aws.amazon.com/blogs/aws/opsworks-on-prem-and-existing-instances/</a></li>
      </ul>

    </details>
  </li>
  <li>Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. On-Demand Instances</li>
      <li><input type="checkbox" name="question-27" value="B">B. Reserved Instances</li>
      <li><input type="checkbox" name="question-27" value="C">C. Spot Instances</li>
      <li><input type="checkbox" name="question-27" value="D">D. Convertible Reserved Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>In the new model, the Spot prices are more predictable, updated less frequently, and are determined by supply and demand for Amazon EC2 spare capacity, not bid prices.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/blogs/compute/new-amazon-ec2-spot-pricing/">https://aws.amazon.com/blogs/compute/new-amazon-ec2-spot-pricing/</a></p>

    </details>
  </li>
  <li>Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Use manual monitoring.</li>
      <li><input type="checkbox" name="question-28" value="B">B. Use fixed servers.</li>
      <li><input type="checkbox" name="question-28" value="C">C. Implement loose coupling.</li>
      <li><input type="checkbox" name="question-28" value="D">D. Rely on individual components.</li>
      <li><input type="checkbox" name="question-28" value="E">E. Design for scalability.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CE</p>

    </details>
  </li>
  <li>Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Enterprise</li>
      <li><input type="checkbox" name="question-29" value="B">B. Business</li>
      <li><input type="checkbox" name="question-29" value="C">C. Developer</li>
      <li><input type="checkbox" name="question-29" value="D">D. Basic</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/plans/">https://aws.amazon.com/premiumsupport/plans/</a></p>

    </details>
  </li>
  <li>Where can AWS compliance and certification reports be downloaded?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. AWS Artifact</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS Concierge</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS Certificate Manager</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS Trusted Advisor</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Artifact is your go-to, central resource for compliance-related information that matters to you.</li>
        <li>It provides on-demand access to AWS’s security and compliance reports and select online agreements.</li>
        <li>The AWS SOC 2 report is particularly helpful for completing questionnaires because it provides a comprehensive description of the implementation and operating effectiveness of AWS security controls.</li>
        <li>Another useful document is the Executive Briefing within the AWS FedRAMP Partner Package.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/compliance/faq/">https://aws.amazon.com/compliance/faq/</a></p>

    </details>
  </li>
  <li>Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. AWS Service Health Dashboard</li>
      <li><input type="checkbox" name="question-31" value="B">B. AWS X-Ray</li>
      <li><input type="checkbox" name="question-31" value="C">C. AWS Personal Health Dashboard</li>
      <li><input type="checkbox" name="question-31" value="D">D. Amazon CloudWatch</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which of the following is an advantage of consolidated billing on AWS?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Volume pricing qualification</li>
      <li><input type="checkbox" name="question-32" value="B">B. Shared access permissions</li>
      <li><input type="checkbox" name="question-32" value="C">C. Multiple bills per account</li>
      <li><input type="checkbox" name="question-32" value="D">D. Eliminates the need for tagging</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>If you have multiple standalone accounts, your charges might decrease if you add the accounts to an organization.</li>
        <li>AWS combines usage from all accounts in the organization to qualify you for volume pricing discounts.</li>
      </ul>

      <p>Reference: <a href="https://help.nops.io/consolidated-billing">https://help.nops.io/consolidated-billing</a></p>

    </details>
  </li>
  <li>Which of the following steps should be taken by a customer when conducting penetration testing on AWS?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Conduct penetration testing using Amazon Inspector, and then notify AWS support.</li>
      <li><input type="checkbox" name="question-33" value="B">B. Request and wait for approval from the customer’s internal security team, and then conduct testing.</li>
      <li><input type="checkbox" name="question-33" value="C">C. Notify AWS support, and then conduct testing immediately.</li>
      <li><input type="checkbox" name="question-33" value="D">D. Request and wait for approval from AWS support, and then conduct testing.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/security/penetration-testing/">https://aws.amazon.com/security/penetration-testing/</a></p>

    </details>
  </li>
  <li>Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Amazon Elastic Block Store (Amazon EBS)</li>
      <li><input type="checkbox" name="question-34" value="B">B. Amazon Machine Image</li>
      <li><input type="checkbox" name="question-34" value="C">C. Amazon EC2 Systems Manager</li>
      <li><input type="checkbox" name="question-34" value="D">D. Amazon AppStream 2.0</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>To use Amazon EC2, you simply:</li>
        <li>Select a pre-configured, templated Amazon Machine Image (AMI) to get up and running immediately. Or create an AMI containing your applications, libraries, data, and associated configuration settings.</li>
        <li>Configure security and network access on your Amazon EC2 instance.</li>
        <li>Choose which instance type(s) you want, then start, terminate, and monitor as many instances of your AMI as needed, using the web service APIs or the variety of management tools provided.</li>
        <li>Determine whether you want to run in multiple locations, utilize static IP endpoints, or attach persistent block storage to your instances.</li>
        <li>Pay only for the resources that you actually consume, like instance-hours or data transfer.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/ec2/features/">https://aws.amazon.com/ec2/features/</a></p>

    </details>
  </li>
  <li>How would an AWS customer easily apply common access controls to a large set of users?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Apply an IAM policy to an IAM group.</li>
      <li><input type="checkbox" name="question-35" value="B">B. Apply an IAM policy to an IAM role.</li>
      <li><input type="checkbox" name="question-35" value="C">C. Apply the same IAM policy to all IAM users with access to the same workload.</li>
      <li><input type="checkbox" name="question-35" value="D">D. Apply an IAM policy to an Amazon Cognito user pool.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>Instead of defining permissions for individual IAM users, it’s usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.).</li>
        <li>Next, define the relevant permissions for each group. Finally, assign IAM users to those groups. All the users in an IAM group inherit the permissions assigned to the group.</li>
        <li>That way, you can make changes for everyone in a group in just one place. As people move around in your company, you can
simply change what IAM group their IAM user belongs to.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html</a></p>

    </details>
  </li>
  <li>Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. AWS Cost Explorer</li>
      <li><input type="checkbox" name="question-36" value="B">B. AWS Budgets</li>
      <li><input type="checkbox" name="question-36" value="C">C. AWS Cost and Usage report</li>
      <li><input type="checkbox" name="question-36" value="D">D. AWS Billing dashboard</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>The Cost &amp; Usage Report is your one-stop-shop for accessing the most granular data about your AWS costs and usage.</li>
        <li>You can also load your cost and usage information into Amazon Athena, Amazon Redshift, AWS QuickSight, or a tool of your choice.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/aws-cost-management/">https://aws.amazon.com/aws-cost-management/</a></p>

    </details>
  </li>
  <li>Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. AWS Concierge</li>
      <li><input type="checkbox" name="question-37" value="B">B. AWS CloudFormation</li>
      <li><input type="checkbox" name="question-37" value="C">C. Amazon Simple Storage Service (Amazon S3)</li>
      <li><input type="checkbox" name="question-37" value="D">D. Amazon EC2 Auto Scaling</li>
      <li><input type="checkbox" name="question-37" value="E">E. AWS Management Console</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BE</p>

    </details>
  </li>
  <li>Which of the following is an AWS Cloud architecture design principle?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Implement single points of failure.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Implement loose coupling.</li>
      <li><input type="checkbox" name="question-38" value="C">C. Implement monolithic design.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Implement vertical scaling.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Loose coupling between services can also be done through asynchronous integration. It involves one component that generates events and another that consumes them.</li>
        <li>The two components do not integrate through direct point-to-point interaction, but usually through an intermediate durable storage layer.</li>
        <li>This approach decouples the two components and introduces additional resiliency.</li>
        <li>So, for example, if a process that is reading messages from the queue fails, messages can still be added to the queue to be processed when the system recovers.</li>
      </ul>

      <p>Reference: <a href="https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/">https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/</a></p>

    </details>
  </li>
  <li>Which of the following security measures protect access to an AWS account? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Enable AWS CloudTrail.</li>
      <li><input type="checkbox" name="question-39" value="B">B. Grant least privilege access to IAM users.</li>
      <li><input type="checkbox" name="question-39" value="C">C. Create one IAM user and share with many developers and users.</li>
      <li><input type="checkbox" name="question-39" value="D">D. Enable Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-39" value="E">E. Activate multi-factor authentication (MFA) for privileged users.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BE</p>

      <p>Explanation:</p>
      <ul>
        <li>If you decided to create service accounts (that is, accounts used for programmatic access by applications running outside of the AWS environment) and generate access keys for them, you should create a dedicated service account for each use case.</li>
        <li>This will allow you to restrict the associated policy to only the permissions needed for the particular use case, limiting the blast radius if the credentials are compromised.</li>
        <li>For example, if a monitoring tool and a release management tool both require access to your AWS environment, create two separate service accounts with two separate policies that define the minimum set of permissions for each tool.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/">https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/</a></p>

    </details>
  </li>
  <li>Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Amazon Glacier</li>
      <li><input type="checkbox" name="question-40" value="B">B. AWS Snowball</li>
      <li><input type="checkbox" name="question-40" value="C">C. AWS Storage Gateway</li>
      <li><input type="checkbox" name="question-40" value="D">D. Amazon Elastic Block Storage (Amazon EBS)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. Customers use Storage Gateway to simplify storage management and reduce costs for key hybrid cloud storage use cases.</li>
        <li>These include moving tape backups to the cloud, reducing on-premises storage with cloud-backed file shares, providing low latency access to data in AWS for on- premises applications, as well as various migration, archiving,
processing, and disaster recovery use cases.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/storagegateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&amp;whats-new-cards.sort-order=desc">https://aws.amazon.com/storagegateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&amp;whats-new-cards.sort-order=desc</a></p>

    </details>
  </li>
  <li>Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Amazon RDS</li>
      <li><input type="checkbox" name="question-41" value="B">B. Amazon EC2</li>
      <li><input type="checkbox" name="question-41" value="C">C. Amazon ElastiCache</li>
      <li><input type="checkbox" name="question-41" value="D">D. AWS Fargate</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2.</li>
      </ul>

      <p>Reference: <a href="https://www.whizlabs.com/blog/aws-security-shared-responsibility/">https://www.whizlabs.com/blog/aws-security-shared-responsibility/</a></p>

    </details>
  </li>
  <li>Which of the following is an important architectural design principle when designing cloud applications?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Use multiple Availability Zones.</li>
      <li><input type="checkbox" name="question-42" value="B">B. Use tightly coupled components.</li>
      <li><input type="checkbox" name="question-42" value="C">C. Use open source software.</li>
      <li><input type="checkbox" name="question-42" value="D">D. Provision extra capacity.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>Data Center resilience is practiced through Availability Zones across data centers that reduce the impact of failures.</li>
        <li>Fault isolation improvement can be made to traditional horizontal scaling by sharding (a method of grouping instances into groups called shards, instead of sending the traffic from all users to every node like in the traditional IT structure.)</li>
      </ul>

      <p>Reference: <a href="https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/">https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/</a></p>

    </details>
  </li>
  <li>Which AWS support plan includes a dedicated Technical Account Manager?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. Developer</li>
      <li><input type="checkbox" name="question-43" value="B">B. Enterprise</li>
      <li><input type="checkbox" name="question-43" value="C">C. Business</li>
      <li><input type="checkbox" name="question-43" value="D">D. Basic</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>The enterprise support plans supports technical account manager. Developer and business support plans are devoid of this facility.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/premiumsupport/plans/">https://aws.amazon.com/premiumsupport/plans/</a></p>

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

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which service is best for storing common database query results, which helps to alleviate database access load?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. Amazon Machine Learning</li>
      <li><input type="checkbox" name="question-45" value="B">B. Amazon SQS</li>
      <li><input type="checkbox" name="question-45" value="C">C. Amazon ElastiCache</li>
      <li><input type="checkbox" name="question-45" value="D">D. Amazon EC2 Instance Store</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon ElastiCache for Redis is a great choice for implementing a highly available, distributed, and secure in-memory cache to decrease access latency, increase throughput, and ease the load off your relational or NoSQL databases and applications.</li>
        <li>ElastiCache can serve frequently requested items at sub- millisecond response times, and enables you to easily scale for higher loads without growing the costlier backend databases.</li>
        <li>Database query results caching, persistent session caching, and full-page caching are all popular examples of caching with ElastiCache for Redis.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/products/databases/real-time-apps-elasticache-for-redis/">https://aws.amazon.com/products/databases/real-time-apps-elasticache-for-redis/</a></p>

    </details>
  </li>
  <li>Which of the following is a component of the shared responsibility model managed entirely by AWS?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Patching operating system software</li>
      <li><input type="checkbox" name="question-46" value="B">B. Encrypting data</li>
      <li><input type="checkbox" name="question-46" value="C">C. Enforcing multi-factor authentication</li>
      <li><input type="checkbox" name="question-46" value="D">D. Auditing physical data center assets</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Of course, Amazon is responsible for auditing physical data center assets and resources since it is the property of Amazon Inc. Customers have no access to physical sites, hence they are not responsible for maintaining physical data center assets.</li>
      </ul>

    </details>
  </li>
  <li>Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-47" value="B">B. AWS Online Tech Talks</li>
      <li><input type="checkbox" name="question-47" value="C">C. AWS Blog</li>
      <li><input type="checkbox" name="question-47" value="D">D. AWS Forums</li>
      <li><input type="checkbox" name="question-47" value="E">E. AWS Classroom Training</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B, E</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Training and Certification builds your competence, confidence, and credibility through practical cloud skills that help you innovate and build your future.</li>
        <li>Our content is built by experts at AWS and updated regularly so you’re always learning the latest and keeping your cloud skills fresh.</li>
        <li>Amazon offer both digital and classroom training including private on-site training. You can choose to learn online at your own pace or learn from an accredited AWS instructor.</li>
        <li>Whether you’re just starting out, building on existing IT skills, or sharpening your cloud knowledge, AWS Training and Certification can help you be more effective and do more in the cloud.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/training/course-descriptions/">https://aws.amazon.com/training/course-descriptions/</a></p>

    </details>
  </li>
  <li>Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Amazon CloudFront distributions</li>
      <li><input type="checkbox" name="question-48" value="B">B. Amazon Route 53</li>
      <li><input type="checkbox" name="question-48" value="C">C. Security Groups</li>
      <li><input type="checkbox" name="question-48" value="D">D. Subnets</li>
      <li><input type="checkbox" name="question-48" value="E">E. Elastic Load Balancing</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CD</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.</li>
        <li>You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways.</li>
        <li>You can use both IPv4 and IPv6 in your VPC for secure and easy access to resources and applications.</li>
        <li>You can easily customize the network configuration for your Amazon VPC.</li>
        <li>For example, you can create a public-facing subnet for your web servers that has access to the Internet, and place your backend systems such as databases or application servers in a private-facing subnet with no Internet access.</li>
        <li>You can leverage multiple layers of security, including security groups and network access control lists, to help control access to Amazon EC2 instances in each subnet.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/vpc/">https://aws.amazon.com/vpc/</a></p>

    </details>
  </li>
  <li>If each department within a company has its own AWS account, what is one way to enable consolidated billing?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Use AWS Budgets on each account to pay only to budget.</li>
      <li><input type="checkbox" name="question-49" value="B">B. Contact AWS Support for a monthly bill.</li>
      <li><input type="checkbox" name="question-49" value="C">C. Create an AWS Organization from the payer account and invite the other accounts to join.</li>
      <li><input type="checkbox" name="question-49" value="D">D. Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></p>

    </details>
  </li>
</ol>
      `,
    data: []
  },
];