export default [
  {
    id: 5,
    title: "Exam 5",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Least Privilege.</li>
      <li><input type="checkbox" name="question-0" value="B">B. Pilot Light.</li>
      <li><input type="checkbox" name="question-0" value="C">C. Fault Tolerance.</li>
      <li><input type="checkbox" name="question-0" value="D">D. Multi-threading.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. All up-front reservation.</li>
      <li><input type="checkbox" name="question-1" value="B">B. All reserved instance payment options provide the same discount level.</li>
      <li><input type="checkbox" name="question-1" value="C">C. Partial up-front reservation.</li>
      <li><input type="checkbox" name="question-1" value="D">D. No up-front reservation.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>What features does AWS offer to help protect your data in the Cloud? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Access control.</li>
      <li><input type="checkbox" name="question-2" value="B">B. Physical MFA devices.</li>
      <li><input type="checkbox" name="question-2" value="C">C. Data encryption.</li>
      <li><input type="checkbox" name="question-2" value="D">D. Unlimited storage.</li>
      <li><input type="checkbox" name="question-2" value="E">E. Load balancing.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. 3 hours for the Linux instance and 5 hours for the CentOS instance.</li>
      <li><input type="checkbox" name="question-3" value="B">B. 2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.</li>
      <li><input type="checkbox" name="question-3" value="C">C. 2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.</li>
      <li><input type="checkbox" name="question-3" value="D">D. 3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>Pricing is per instance-hour consumed for each instance, from the time an instance is launched until it is terminated or stopped.</li>
        <li>Each partial instance-hour consumed will be billed per-second for Linux, Windows, Windows with SQL Enterprise, Windows with SQL Standard, and Windows with SQL Web Instances, and as a full hour for all other instance types.</li>
      </ul>
    </details>
  </li>
  <li>What is the AWS Support feature that allows customers to manage support cases programmatically?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-4" value="B">B. AWS Operations Support.</li>
      <li><input type="checkbox" name="question-4" value="C">C. AWS Support API.</li>
      <li><input type="checkbox" name="question-4" value="D">D. AWS Personal Health Dashboard.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. AWS CLI.</li>
      <li><input type="checkbox" name="question-5" value="B">B. AWS Security Groups.</li>
      <li><input type="checkbox" name="question-5" value="C">C. AWS SDKs.</li>
      <li><input type="checkbox" name="question-5" value="D">D. AWS Network Access Control Lists.</li>
      <li><input type="checkbox" name="question-5" value="E">E. AWS CodeCommit.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. AWS Resource Groups.</li>
      <li><input type="checkbox" name="question-6" value="B">B. IAM Policies.</li>
      <li><input type="checkbox" name="question-6" value="C">C. IAM Roles.</li>
      <li><input type="checkbox" name="question-6" value="D">D. IAM Users.</li>
      <li><input type="checkbox" name="question-6" value="E">E. AWS Organizations.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>Which of the following Amazon RDS features facilitates offloading of database read activity?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Database Snapshots.</li>
      <li><input type="checkbox" name="question-7" value="B">B. Multi-AZ Deployments.</li>
      <li><input type="checkbox" name="question-7" value="C">C. Automated Backups.</li>
      <li><input type="checkbox" name="question-7" value="D">D. Read Replicas.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>How does AWS notify customers about security and privacy events pertaining to AWS services?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Using the AWS ACM service.</li>
      <li><input type="checkbox" name="question-8" value="B">B. Using Security Bulletins.</li>
      <li><input type="checkbox" name="question-8" value="C">C. Using the AWS Management Console.</li>
      <li><input type="checkbox" name="question-8" value="D">D. Using Compliance Resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which IAM entity can best be used to grant temporary access to your AWS resources?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. IAM Users.</li>
      <li><input type="checkbox" name="question-9" value="B">B. Key Pair.</li>
      <li><input type="checkbox" name="question-9" value="C">C. IAM Roles.</li>
      <li><input type="checkbox" name="question-9" value="D">D. IAM Groups.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. AWS Global Accelerator.</li>
      <li><input type="checkbox" name="question-10" value="B">B. AWS Application Load Balancer (ALB).</li>
      <li><input type="checkbox" name="question-10" value="C">C. Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-10" value="D">D. Transit VPC.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Use Software test automation tools.</li>
      <li><input type="checkbox" name="question-11" value="B">B. Use AWS CodeDeploy to build and automate your AWS environment.</li>
      <li><input type="checkbox" name="question-11" value="C">C. Use code to provision and operate your AWS infrastructure.</li>
      <li><input type="checkbox" name="question-11" value="D">D. Migrate all of your applications to a dedicated host.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Restrict any API call made through SDKs or CLI.</li>
      <li><input type="checkbox" name="question-12" value="B">B. Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.</li>
      <li><input type="checkbox" name="question-12" value="C">C. Require Multi-Factor Authentication (MFA) for all IAM User access.</li>
      <li><input type="checkbox" name="question-12" value="D">D. Set up two login passwords.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which AWS Service offers volume discounts based on usage?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Amazon VPC.</li>
      <li><input type="checkbox" name="question-13" value="B">B. Amazon S3.</li>
      <li><input type="checkbox" name="question-13" value="C">C. Amazon Lightsail.</li>
      <li><input type="checkbox" name="question-13" value="D">D. AWS Cost Explorer.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. The AWS Region’s security level.</li>
      <li><input type="checkbox" name="question-14" value="B">B. Data sovereignty.</li>
      <li><input type="checkbox" name="question-14" value="C">C. Cost.</li>
      <li><input type="checkbox" name="question-14" value="D">D. The planned number of VPCs.</li>
      <li><input type="checkbox" name="question-14" value="E">E. Geographic proximity to the company’s location.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Amazon EFS.</li>
      <li><input type="checkbox" name="question-15" value="B">B. Amazon Neptune.</li>
      <li><input type="checkbox" name="question-15" value="C">C. Amazon ElastiCache.</li>
      <li><input type="checkbox" name="question-15" value="D">D. DAX.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>What are the advantages of using Auto Scaling Groups for EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.</li>
      <li><input type="checkbox" name="question-16" value="B">B. Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.</li>
      <li><input type="checkbox" name="question-16" value="C">C. Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.</li>
      <li><input type="checkbox" name="question-16" value="D">D. Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. AWS helps customers invest more in capital expenditures.</li>
      <li><input type="checkbox" name="question-17" value="B">B. AWS automates all infrastructure operations, so customers save more on human resources costs.</li>
      <li><input type="checkbox" name="question-17" value="C">C. AWS continues to lower the cost of cloud computing for its customers.</li>
      <li><input type="checkbox" name="question-17" value="D">D. AWS secures AWS resources at no additional charge.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Building a schema for an application.</li>
      <li><input type="checkbox" name="question-18" value="B">B. Replacing physical hardware.</li>
      <li><input type="checkbox" name="question-18" value="C">C. Creating a new hypervisor.</li>
      <li><input type="checkbox" name="question-18" value="D">D. Patch management of the underlying infrastructure.</li>
      <li><input type="checkbox" name="question-18" value="E">E. File system encryption.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>Which of the following is a type of MFA device that customers can use to protect their AWS resources?
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. AWS CloudHSM.</li>
      <li><input type="checkbox" name="question-19" value="B">B. U2F Security Key.</li>
      <li><input type="checkbox" name="question-19" value="C">C. AWS Access Keys.</li>
      <li><input type="checkbox" name="question-19" value="D">D. AWS Key Pair.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. Amazon SNS.</li>
      <li><input type="checkbox" name="question-20" value="B">B. AWS Elastic Beanstalk.</li>
      <li><input type="checkbox" name="question-20" value="C">C. AWS Systems Manager.</li>
      <li><input type="checkbox" name="question-20" value="D">D. AWS Trusted Advisor.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. The amount of time the instances will be running.</li>
      <li><input type="checkbox" name="question-21" value="B">B. Number of security groups.</li>
      <li><input type="checkbox" name="question-21" value="C">C. Allocated Elastic IP Addresses.</li>
      <li><input type="checkbox" name="question-21" value="D">D. Number of Hosted Zones.</li>
      <li><input type="checkbox" name="question-21" value="E">E. Number of instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. AWS Data Pipeline.</li>
      <li><input type="checkbox" name="question-22" value="B">B. AWS Storage Gateway.</li>
      <li><input type="checkbox" name="question-22" value="C">C. Amazon Aurora.</li>
      <li><input type="checkbox" name="question-22" value="D">D. Amazon EFS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Amazon Simple Storage Service.</li>
      <li><input type="checkbox" name="question-23" value="B">B. Amazon Elastic Block Store.</li>
      <li><input type="checkbox" name="question-23" value="C">C. Amazon Elastic Container Service.</li>
      <li><input type="checkbox" name="question-23" value="D">D. AWS Storage Gateway.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. EBS and S3 are accessible only to the root account owner.</li>
      <li><input type="checkbox" name="question-24" value="B">B. The systems administrator must contact AWS Support first to activate his new IAM account.</li>
      <li><input type="checkbox" name="question-24" value="C">C. There is not enough space in S3 to store the snapshots.</li>
      <li><input type="checkbox" name="question-24" value="D">D. There is a non-explicit deny to all new users.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. AWS CloudTrail.</li>
      <li><input type="checkbox" name="question-25" value="B">B. Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-25" value="C">C. AWS CloudFormation.</li>
      <li><input type="checkbox" name="question-25" value="D">D. Amazon CloudWatch.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the below options is true of Amazon Cloud Directory?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.</li>
      <li><input type="checkbox" name="question-26" value="B">B. Amazon Cloud Directory enables the analysis of video and data streams in real time.</li>
      <li><input type="checkbox" name="question-26" value="C">C. Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.</li>
      <li><input type="checkbox" name="question-26" value="D">D. Amazon Cloud Directory allows for registration and management of domain names.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>A user has opened a “Production System Down” support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. 12 hours.</li>
      <li><input type="checkbox" name="question-27" value="B">B. 15 minutes.</li>
      <li><input type="checkbox" name="question-27" value="C">C. 24 hours.</li>
      <li><input type="checkbox" name="question-27" value="D">D. One hour.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the below options is a best practice for making your application on AWS highly available?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Deploy the application to at least two Availability Zones.</li>
      <li><input type="checkbox" name="question-28" value="B">B. Use Elastic Load Balancing (ELB) across multiple AWS Regions.</li>
      <li><input type="checkbox" name="question-28" value="C">C. Deploy the application code on at least two servers in the same Availability Zone.</li>
      <li><input type="checkbox" name="question-28" value="D">D. Rewrite the application code to handle all incoming requests.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Labor and IT costs.</li>
      <li><input type="checkbox" name="question-29" value="B">B. Cooling and power consumption.</li>
      <li><input type="checkbox" name="question-29" value="C">C. Amazon EBS computing power.</li>
      <li><input type="checkbox" name="question-29" value="D">D. Software architecture.</li>
      <li><input type="checkbox" name="question-29" value="E">E. Software compatibility.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, B</p>
    </details>
  </li>
  <li>Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. AWS Basic Support.</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS Developer Support.</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS Business Support.</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS Enterprise Support.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following AWS offerings are serverless services? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Amazon EC2.</li>
      <li><input type="checkbox" name="question-31" value="B">B. AWS Lambda.</li>
      <li><input type="checkbox" name="question-31" value="C">C. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-31" value="D">D. Amazon EMR.</li>
      <li><input type="checkbox" name="question-31" value="E">E. Amazon RDS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Amazon GuardDuty.</li>
      <li><input type="checkbox" name="question-32" value="B">B. AWS ACM.</li>
      <li><input type="checkbox" name="question-32" value="C">C. Amazon Detective.</li>
      <li><input type="checkbox" name="question-32" value="D">D. AWS WAF.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. AWS Config.</li>
      <li><input type="checkbox" name="question-33" value="B">B. AWS OpsWorks.</li>
      <li><input type="checkbox" name="question-33" value="C">C. AutoScaling.</li>
      <li><input type="checkbox" name="question-33" value="D">D. AWS CloudFormation.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Amazon EBS.</li>
      <li><input type="checkbox" name="question-34" value="B">B. Amazon EFS.</li>
      <li><input type="checkbox" name="question-34" value="C">C. Amazon S3.</li>
      <li><input type="checkbox" name="question-34" value="D">D. Amazon Instance Store.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. AWS WAF.</li>
      <li><input type="checkbox" name="question-35" value="B">B. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-35" value="C">C. AWS Cloud9.</li>
      <li><input type="checkbox" name="question-35" value="D">D. AWS CloudTrail.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. On-demand Instances.</li>
      <li><input type="checkbox" name="question-36" value="B">B. Dedicated Hosts.</li>
      <li><input type="checkbox" name="question-36" value="C">C. Spot Instances.</li>
      <li><input type="checkbox" name="question-36" value="D">D. Reserved Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Create an IAM role and attach a policy with Amazon DynamoDB access permissions.</li>
      <li><input type="checkbox" name="question-37" value="B">B. Create an IAM role and attach a policy with Administrator access permissions.</li>
      <li><input type="checkbox" name="question-37" value="C">C. Create an IAM user and attach a policy with Amazon DynamoDB access permissions.</li>
      <li><input type="checkbox" name="question-37" value="D">D. Create an IAM user and attach a policy with Administrator access permissions.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Generate new IAM access keys every time you delegate permissions.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Store the required AWS credentials directly within the application code.</li>
      <li><input type="checkbox" name="question-38" value="C">C. Use temporary security credentials (IAM roles) instead of long-term access keys.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following will help AWS customers save on costs when migrating their workloads to AWS?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Use servers instead of managed services.</li>
      <li><input type="checkbox" name="question-39" value="B">B. Use existing third-party software licenses on AWS.</li>
      <li><input type="checkbox" name="question-39" value="C">C. Migrate production workloads to AWS edge locations instead of AWS Regions.</li>
      <li><input type="checkbox" name="question-39" value="D">D. Use AWS Outposts to run all workloads in a cost-optimized environment.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Amazon SQS.</li>
      <li><input type="checkbox" name="question-40" value="B">B. Virtual Private Gateway.</li>
      <li><input type="checkbox" name="question-40" value="C">C. AWS Artifact.</li>
      <li><input type="checkbox" name="question-40" value="D">D. Amazon CloudFront.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Amazon Connect.</li>
      <li><input type="checkbox" name="question-41" value="B">B. AWS CLI.</li>
      <li><input type="checkbox" name="question-41" value="C">C. AWS Identity and Access Management (IAM).</li>
      <li><input type="checkbox" name="question-41" value="D">D. Amazon SNS.</li>
      <li><input type="checkbox" name="question-41" value="E">E. Amazon Virtual Private Cloud.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>According to best practices, which of the below options is best suited for processing a large number of binary files?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Vertically scaling EC2 instances.</li>
      <li><input type="checkbox" name="question-42" value="B">B. Running RDS instances in parallel.</li>
      <li><input type="checkbox" name="question-42" value="C">C. Vertically scaling RDS instances.</li>
      <li><input type="checkbox" name="question-42" value="D">D. Running EC2 instances in parallel.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. AWS Cost Explorer.</li>
      <li><input type="checkbox" name="question-43" value="B">B. AWS Pricing Calculator.</li>
      <li><input type="checkbox" name="question-43" value="C">C. AWS Budgets.</li>
      <li><input type="checkbox" name="question-43" value="D">D. AWS Cost &amp; Usage Report.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Stop all running services and open an investigation.</li>
      <li><input type="checkbox" name="question-44" value="B">B. Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.</li>
      <li><input type="checkbox" name="question-44" value="C">C. Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.</li>
      <li><input type="checkbox" name="question-44" value="D">D. Open an investigation and delete any potentially compromised IAM users.</li>
      <li><input type="checkbox" name="question-44" value="E">E. Change your AWS root account password and the passwords of any IAM users.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  </li>
  <li>A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. Elastic coupling.</li>
      <li><input type="checkbox" name="question-45" value="B">B. Loosely coupling.</li>
      <li><input type="checkbox" name="question-45" value="C">C. Scalable coupling.</li>
      <li><input type="checkbox" name="question-45" value="D">D. Tightly coupling.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Amazon Elastic File System.</li>
      <li><input type="checkbox" name="question-46" value="B">B. Amazon Simple Storage Service.</li>
      <li><input type="checkbox" name="question-46" value="C">C. Amazon Elastic Block Store.</li>
      <li><input type="checkbox" name="question-46" value="D">D. AWS Storage Gateway.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Create private connection to your data center.</li>
      <li><input type="checkbox" name="question-47" value="B">B. Achieve global high availability.</li>
      <li><input type="checkbox" name="question-47" value="C">C. Automate the process of provisioning new compute resources.</li>
      <li><input type="checkbox" name="question-47" value="D">D. Make synchronous replication of your data possible.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.</li>
      <li><input type="checkbox" name="question-48" value="B">B. Lambda natively supports a number of programming languages such as Node.js, Python, and Java.</li>
      <li><input type="checkbox" name="question-48" value="C">C. Lambda is AWS’ proprietary programming language for microservices.</li>
      <li><input type="checkbox" name="question-48" value="D">D. Lambda doesn’t support programming languages; it is a serverless compute service.</li>
      <li><input type="checkbox" name="question-48" value="E">E. Lambda can support any programming language using an API.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>What are the capabilities of AWS X-Ray? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Automatically decouples application components.</li>
      <li><input type="checkbox" name="question-49" value="B">B. Facilitates tracking of user requests to identify application issues.</li>
      <li><input type="checkbox" name="question-49" value="C">C. Helps improve application performance.</li>
      <li><input type="checkbox" name="question-49" value="D">D. Deploys applications to Amazon EC2 instances.</li>
      <li><input type="checkbox" name="question-49" value="E">E. Deploys applications to on-premises servers.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
</ol>
      `,
    data: []
  },
];