export default [
  {
    id: 3,
    title: "Practice Exam 3",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
              <li>Where can you store files in AWS? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-0" value="A">A. Amazon EFS.</li>
                  <li><input type="checkbox" name="question-0" value="B">B. Amazon SNS.</li>
                  <li><input type="checkbox" name="question-0" value="C">C. Amazon EBS.</li>
                  <li><input type="checkbox" name="question-0" value="D">D. Amazon ECS.</li>
                  <li><input type="checkbox" name="question-0" value="E">E. Amazon EMR.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A, C</p>
                </details>
              </li>
              <li>Which AWS service can be used to store and reliably deliver messages across distributed systems?
                <ul>
                  <li><input type="checkbox" name="question-1" value="A">A. Amazon Simple Queue Service.</li>
                  <li><input type="checkbox" name="question-1" value="B">B. AWS Storage Gateway.</li>
                  <li><input type="checkbox" name="question-1" value="C">C. Amazon Simple Email Service.</li>
                  <li><input type="checkbox" name="question-1" value="D">D. Amazon Simple Storage Service.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?
                <ul>
                  <li><input type="checkbox" name="question-2" value="A">A. Pay less as AWS grows.</li>
                  <li><input type="checkbox" name="question-2" value="B">B. Pay as you go.</li>
                  <li><input type="checkbox" name="question-2" value="C">C. Pay less by using more.</li>
                  <li><input type="checkbox" name="question-2" value="D">D. Save when you reserve.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?
                <ul>
                  <li><input type="checkbox" name="question-3" value="A">A. Right-size before and after migration.</li>
                  <li><input type="checkbox" name="question-3" value="B">B. Use a Multi-Region Active-Passive architecture.</li>
                  <li><input type="checkbox" name="question-3" value="C">C. Combine On-demand Capacity Reservations with Saving Plans.</li>
                  <li><input type="checkbox" name="question-3" value="D">D. Use a Multi-Region Active-Active architecture.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>What is the primary storage service used by Amazon RDS database instances?
                <ul>
                  <li><input type="checkbox" name="question-4" value="A">A. Amazon Glacier.</li>
                  <li><input type="checkbox" name="question-4" value="B">B. Amazon EBS.</li>
                  <li><input type="checkbox" name="question-4" value="C">C. Amazon EFS.</li>
                  <li><input type="checkbox" name="question-4" value="D">D. Amazon S3.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B</p>
                </details>
              </li>
              <li>A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?
                <ul>
                  <li><input type="checkbox" name="question-5" value="A">A. AWS CodePipeline.</li>
                  <li><input type="checkbox" name="question-5" value="B">B. AWS X-Ray.</li>
                  <li><input type="checkbox" name="question-5" value="C">C. Amazon Inspector.</li>
                  <li><input type="checkbox" name="question-5" value="D">D. AWS CloudTrail.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B</p>
                </details>
              </li>
              <li>Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-6" value="A">A. Amazon Redshift.</li>
                  <li><input type="checkbox" name="question-6" value="B">B. AWS Snowball.</li>
                  <li><input type="checkbox" name="question-6" value="C">C. Amazon Simple Storage Service.</li>
                  <li><input type="checkbox" name="question-6" value="D">D. Amazon EBS.</li>
                  <li><input type="checkbox" name="question-6" value="E">E. Amazon DynamoDB.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: C, E</p>
                </details>
              </li>
              <li>What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-7" value="A">A. AWS Regions.</li>
                  <li><input type="checkbox" name="question-7" value="B">B. Multi-AZ Deployment.</li>
                  <li><input type="checkbox" name="question-7" value="C">C. Automatic patching.</li>
                  <li><input type="checkbox" name="question-7" value="D">D. Read Replicas.</li>
                  <li><input type="checkbox" name="question-7" value="E">E. Edge Locations.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B, D</p>
                </details>
              </li>
              <li>Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?
                <ul>
                  <li><input type="checkbox" name="question-8" value="A">A. Replicate the current resources across multiple Availability Zones within the same region.</li>
                  <li><input type="checkbox" name="question-8" value="B">B. Migrate the application to a hosting provider in Asia.</li>
                  <li><input type="checkbox" name="question-8" value="C">C. Recreate the website content.</li>
                  <li><input type="checkbox" name="question-8" value="D">D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?
                <ul>
                  <li><input type="checkbox" name="question-9" value="A">A. AWS Identity and Access Management.</li>
                  <li><input type="checkbox" name="question-9" value="B">B. Amazon RDS.</li>
                  <li><input type="checkbox" name="question-9" value="C">C. Network Access Control Lists.</li>
                  <li><input type="checkbox" name="question-9" value="D">D. Amazon EMR.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>Using Amazon EC2 falls under which of the following cloud computing models?
                <ul>
                  <li><input type="checkbox" name="question-10" value="A">A. Iaas &amp; SaaS.</li>
                  <li><input type="checkbox" name="question-10" value="B">B. IaaS.</li>
                  <li><input type="checkbox" name="question-10" value="C">C. SaaS.</li>
                  <li><input type="checkbox" name="question-10" value="D">D. PaaS.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B</p>
                </details>
              </li>
              <li>Which of the below is a best-practice when building applications on AWS?
                <ul>
                  <li><input type="checkbox" name="question-11" value="A">A. Strengthen physical security by applying the principle of least privilege.</li>
                  <li><input type="checkbox" name="question-11" value="B">B. Ensure that the application runs on hardware from trusted vendors.</li>
                  <li><input type="checkbox" name="question-11" value="C">C. Use IAM policies to maintain performance.</li>
                  <li><input type="checkbox" name="question-11" value="D">D. Decouple the components of the application so that they run independently.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?
                <ul>
                  <li><input type="checkbox" name="question-12" value="A">A. Amazon EBS.</li>
                  <li><input type="checkbox" name="question-12" value="B">B. Amazon SQS.</li>
                  <li><input type="checkbox" name="question-12" value="C">C. Amazon Instance store.</li>
                  <li><input type="checkbox" name="question-12" value="D">D. Amazon S3.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>Amazon Glacier is an Amazon S3 storage class that is suitable for storing […] &amp; […]. (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-13" value="A">A. Active archives.</li>
                  <li><input type="checkbox" name="question-13" value="B">B. Dynamic websites’ assets.</li>
                  <li><input type="checkbox" name="question-13" value="C">C. Long-term analytic data.</li>
                  <li><input type="checkbox" name="question-13" value="D">D. Active databases.</li>
                  <li><input type="checkbox" name="question-13" value="E">E. Cached data.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A, C</p>
                </details>
              </li>
              <li>What does Amazon Elastic Beanstalk provide?
                <ul>
                  <li><input type="checkbox" name="question-14" value="A">A. A PaaS solution to automate application deployment.</li>
                  <li><input type="checkbox" name="question-14" value="B">B. A compute engine for Amazon ECS.</li>
                  <li><input type="checkbox" name="question-14" value="C">C. A scalable file storage solution for use with AWS and on-premises servers.</li>
                  <li><input type="checkbox" name="question-14" value="D">D. A NoSQL database service.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?
                <ul>
                  <li><input type="checkbox" name="question-15" value="A">A. Amazon Kinesis.</li>
                  <li><input type="checkbox" name="question-15" value="B">B. Security groups.</li>
                  <li><input type="checkbox" name="question-15" value="C">C. Amazon Inspector.</li>
                  <li><input type="checkbox" name="question-15" value="D">D. AWS Network Access Control Lists.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: C</p>
                </details>
              </li>
              <li>Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-16" value="A">A. Patch management controls.</li>
                  <li><input type="checkbox" name="question-16" value="B">B. Database controls.</li>
                  <li><input type="checkbox" name="question-16" value="C">C. Awareness &amp; Training.</li>
                  <li><input type="checkbox" name="question-16" value="D">D. Environmental controls.</li>
                  <li><input type="checkbox" name="question-16" value="E">E. Physical controls.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D, E</p>
                </details>
              </li>
              <li>A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?
                <ul>
                  <li><input type="checkbox" name="question-17" value="A">A. Reserved instances     - No Upfront.</li>
                  <li><input type="checkbox" name="question-17" value="B">B. Reserved instances     - Partial Upfront.</li>
                  <li><input type="checkbox" name="question-17" value="C">C. On-Demand instances.</li>
                  <li><input type="checkbox" name="question-17" value="D">D. Spot Instances.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B</p>
                </details>
              </li>
              <li>Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?
                <ul>
                  <li><input type="checkbox" name="question-18" value="A">A. Elasticity.</li>
                  <li><input type="checkbox" name="question-18" value="B">B. Global reach.</li>
                  <li><input type="checkbox" name="question-18" value="C">C. Data durability.</li>
                  <li><input type="checkbox" name="question-18" value="D">D. High availability.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B</p>
                </details>
              </li>
              <li>Savings Plans are available for which of the following AWS compute services? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-19" value="A">A. AWS Batch.</li>
                  <li><input type="checkbox" name="question-19" value="B">B. AWS Outposts.</li>
                  <li><input type="checkbox" name="question-19" value="C">C. Amazon Lightsail.</li>
                  <li><input type="checkbox" name="question-19" value="D">D. Amazon EC2.</li>
                  <li><input type="checkbox" name="question-19" value="E">E. AWS Lambda.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D, E</p>
                </details>
              </li>
              <li>A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?
                <ul>
                  <li><input type="checkbox" name="question-20" value="A">A. Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.</li>
                  <li><input type="checkbox" name="question-20" value="B">B. Deploy AWS resources across multiple Availability Zones within the same AWS Region.</li>
                  <li><input type="checkbox" name="question-20" value="C">C. Create point-in-time backups in another subnet and recover this data when a disaster occurs.</li>
                  <li><input type="checkbox" name="question-20" value="D">D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>Which statement is correct with regards to AWS service limits? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-21" value="A">A. You can contact AWS support to increase the service limits.</li>
                  <li><input type="checkbox" name="question-21" value="B">B. Each IAM user has the same service limit.</li>
                  <li><input type="checkbox" name="question-21" value="C">C. There are no service limits on AWS.</li>
                  <li><input type="checkbox" name="question-21" value="D">D. You can use the AWS Trusted Advisor to monitor your service limits.</li>
                  <li><input type="checkbox" name="question-21" value="E">E. The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A, D</p>
                </details>
              </li>
              <li>What is the AWS tool that enables you to use scripts to manage all AWS services and resources?
                <ul>
                  <li><input type="checkbox" name="question-22" value="A">A. AWS Console.</li>
                  <li><input type="checkbox" name="question-22" value="B">B. AWS Service Catalog.</li>
                  <li><input type="checkbox" name="question-22" value="C">C. AWS OpsWorks.</li>
                  <li><input type="checkbox" name="question-22" value="D">D. AWS CLI.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-23" value="A">A. AWS Artifact.</li>
                  <li><input type="checkbox" name="question-23" value="B">B. AWS Cloud9.</li>
                  <li><input type="checkbox" name="question-23" value="C">C. AWS Direct Connect.</li>
                  <li><input type="checkbox" name="question-23" value="D">D. AWS CloudTrail.</li>
                  <li><input type="checkbox" name="question-23" value="E">E. AWS VPN.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: C, E</p>
                </details>
              </li>
              <li>A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?
                <ul>
                  <li><input type="checkbox" name="question-24" value="A">A. AWS EC2 Auto Recovery.</li>
                  <li><input type="checkbox" name="question-24" value="B">B. AWS Auto Scaling.</li>
                  <li><input type="checkbox" name="question-24" value="C">C. AWS Network Load Balancer.</li>
                  <li><input type="checkbox" name="question-24" value="D">D. AWS Application Load Balancer.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?
                <ul>
                  <li><input type="checkbox" name="question-25" value="A">A. Amazon Neptune.</li>
                  <li><input type="checkbox" name="question-25" value="B">B. Amazon Aurora.</li>
                  <li><input type="checkbox" name="question-25" value="C">C. Amazon RDS for SQL Server.</li>
                  <li><input type="checkbox" name="question-25" value="D">D. Amazon RDS for PostgreSQL.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B</p>
                </details>
              </li>
              <li>Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-26" value="A">A. AWS CloudHSM.</li>
                  <li><input type="checkbox" name="question-26" value="B">B. Security Groups.</li>
                  <li><input type="checkbox" name="question-26" value="C">C. AWS Batch.</li>
                  <li><input type="checkbox" name="question-26" value="D">D. AWS IAM.</li>
                  <li><input type="checkbox" name="question-26" value="E">E. Network Access Control Lists (Network ACLs).</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B, E</p>
                </details>
              </li>
              <li>What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?
                <ul>
                  <li><input type="checkbox" name="question-27" value="A">A. Amazon Redshift.</li>
                  <li><input type="checkbox" name="question-27" value="B">B. Amazon Kinesis.</li>
                  <li><input type="checkbox" name="question-27" value="C">C. Amazon DynamoDB.</li>
                  <li><input type="checkbox" name="question-27" value="D">D.  Amazon RDS.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?
                <ul>
                  <li><input type="checkbox" name="question-28" value="A">A. Application development.</li>
                  <li><input type="checkbox" name="question-28" value="B">B. Market research.</li>
                  <li><input type="checkbox" name="question-28" value="C">C. Business analysis.</li>
                  <li><input type="checkbox" name="question-28" value="D">D. Physical hardware.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>How are AWS customers billed for Linux-based Amazon EC2 usage?
                <ul>
                  <li><input type="checkbox" name="question-29" value="A">A. EC2 instances will be billed on one second increments, with a minimum of one minute.</li>
                  <li><input type="checkbox" name="question-29" value="B">B. EC2 instances will be billed on one hour increments, with a minimum of one day.</li>
                  <li><input type="checkbox" name="question-29" value="C">C. EC2 instances will be billed on one minute increments, with a minimum of one hour.</li>
                  <li><input type="checkbox" name="question-29" value="D">D. EC2 instances will be billed on one day increments, with a minimum of one month.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>Which of the following will impact the price paid for an EC2 instance? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-30" value="A">A. Instance type.</li>
                  <li><input type="checkbox" name="question-30" value="B">B. The Availability Zone where the instance is provisioned.</li>
                  <li><input type="checkbox" name="question-30" value="C">C. Load balancing.</li>
                  <li><input type="checkbox" name="question-30" value="D">D. Number of buckets.</li>
                  <li><input type="checkbox" name="question-30" value="E">E. Number of private IPs.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A, B</p>
                </details>
              </li>
              <li>A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?
                <ul>
                  <li><input type="checkbox" name="question-31" value="A">A. By creating an AWS Config template from the old instance and launching a new instance from it.</li>
                  <li><input type="checkbox" name="question-31" value="B">B. By creating an EBS Snapshot of the old instance.</li>
                  <li><input type="checkbox" name="question-31" value="C">C. By installing Aurora on EC2 and launching a new instance from it.</li>
                  <li><input type="checkbox" name="question-31" value="D">D. By creating an AMI from the old instance and launching a new instance from it.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?
                <ul>
                  <li><input type="checkbox" name="question-32" value="A">A. IAM Principals.</li>
                  <li><input type="checkbox" name="question-32" value="B">B. AWS Service Control Policies (SCPs).</li>
                  <li><input type="checkbox" name="question-32" value="C">C. IAM policies.</li>
                  <li><input type="checkbox" name="question-32" value="D">D. AWS Fargate.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B</p>
                </details>
              </li>
              <li>Which of the following statements describes the AWS Cloud’s agility?
                <ul>
                  <li><input type="checkbox" name="question-33" value="A">A. AWS allows you to host your applications in multiple regions around the world.</li>
                  <li><input type="checkbox" name="question-33" value="B">B. AWS provides customizable hardware at the lowest possible cost.</li>
                  <li><input type="checkbox" name="question-33" value="C">C. AWS allows you to provision resources in minutes.</li>
                  <li><input type="checkbox" name="question-33" value="D">D. AWS allows you to pay upfront to reduce costs.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: C</p>
                </details>
              </li>
              <li>What are the benefits of using the Amazon Relational Database Service? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-34" value="A">A. Lower administrative burden.</li>
                  <li><input type="checkbox" name="question-34" value="B">B. Complete control over the underlying host.</li>
                  <li><input type="checkbox" name="question-34" value="C">C. Resizable compute capacity.</li>
                  <li><input type="checkbox" name="question-34" value="D">D. Scales automatically to larger or smaller instance types.</li>
                  <li><input type="checkbox" name="question-34" value="E">E. Supports the document and key-value data structure.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A, C</p>
                </details>
              </li>
              <li>What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?
                <ul>
                  <li><input type="checkbox" name="question-35" value="A">A. Internet Gateway.</li>
                  <li><input type="checkbox" name="question-35" value="B">B. AWS IQ.</li>
                  <li><input type="checkbox" name="question-35" value="C">C. AWS Direct Connect.</li>
                  <li><input type="checkbox" name="question-35" value="D">D. AWS Site-to-Site VPN.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?
                <ul>
                  <li><input type="checkbox" name="question-36" value="A">A. Enterprise Support.</li>
                  <li><input type="checkbox" name="question-36" value="B">B. Developer Support.</li>
                  <li><input type="checkbox" name="question-36" value="C">C. Basic Support.</li>
                  <li><input type="checkbox" name="question-36" value="D">D. Business Support.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>Which of the following is used to control network traffic in AWS? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-37" value="A">A. Network Access Control Lists (NACLs).</li>
                  <li><input type="checkbox" name="question-37" value="B">B. Key Pairs.</li>
                  <li><input type="checkbox" name="question-37" value="C">C. Access Keys.</li>
                  <li><input type="checkbox" name="question-37" value="D">D. IAM Policies.</li>
                  <li><input type="checkbox" name="question-37" value="E">E. Security Groups.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A, E</p>
                </details>
              </li>
              <li>A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?
                <ul>
                  <li><input type="checkbox" name="question-38" value="A">A. Reserved instances.</li>
                  <li><input type="checkbox" name="question-38" value="B">B. Spot Instances.</li>
                  <li><input type="checkbox" name="question-38" value="C">C. On-Demand instances.</li>
                  <li><input type="checkbox" name="question-38" value="D">D. Dedicated instances.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B</p>
                </details>
              </li>
              <li>Which AWS Service provides the current status of all AWS Services in all AWS Regions?
                <ul>
                  <li><input type="checkbox" name="question-39" value="A">A. AWS Service Health Dashboard.</li>
                  <li><input type="checkbox" name="question-39" value="B">B. AWS Management Console.</li>
                  <li><input type="checkbox" name="question-39" value="C">C. Amazon CloudWatch.</li>
                  <li><input type="checkbox" name="question-39" value="D">D. AWS Personal Health Dashboard.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>Which AWS service or feature can be used to call AWS Services from different programming languages?
                <ul>
                  <li><input type="checkbox" name="question-40" value="A">A. AWS Software Development Kit.</li>
                  <li><input type="checkbox" name="question-40" value="B">B. AWS Command Line Interface.</li>
                  <li><input type="checkbox" name="question-40" value="C">C. AWS CodeDeploy.</li>
                  <li><input type="checkbox" name="question-40" value="D">D. AWS Management Console.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>Which AWS Service can be used to register a new domain name?
                <ul>
                  <li><input type="checkbox" name="question-41" value="A">A. Amazon Personalize.</li>
                  <li><input type="checkbox" name="question-41" value="B">B. Amazon Route 53.</li>
                  <li><input type="checkbox" name="question-41" value="C">C. AWS KMS.</li>
                  <li><input type="checkbox" name="question-41" value="D">D. AWS Config.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B</p>
                </details>
              </li>
              <li>App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)
                <ul>
                  <li><input type="checkbox" name="question-42" value="A">A. AWS CloudFormation.</li>
                  <li><input type="checkbox" name="question-42" value="B">B. AWS Migration Hub.</li>
                  <li><input type="checkbox" name="question-42" value="C">C. AWS IAM.</li>
                  <li><input type="checkbox" name="question-42" value="D">D. AWS Elastic Beanstalk.</li>
                  <li><input type="checkbox" name="question-42" value="E">E. Amazon Macie.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A, D</p>
                </details>
              </li>
              <li>Which AWS service provides cost-optimization recommendations?
                <ul>
                  <li><input type="checkbox" name="question-43" value="A">A. AWS Trusted Advisor.</li>
                  <li><input type="checkbox" name="question-43" value="B">B. AWS Pricing Calculator.</li>
                  <li><input type="checkbox" name="question-43" value="C">C. Amazon QuickSight.</li>
                  <li><input type="checkbox" name="question-43" value="D">D. AWS X-Ray.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?
                <ul>
                  <li><input type="checkbox" name="question-44" value="A">A. VPC Peering.</li>
                  <li><input type="checkbox" name="question-44" value="B">B. AWS Transit Gateway.</li>
                  <li><input type="checkbox" name="question-44" value="C">C. Amazon Connect.</li>
                  <li><input type="checkbox" name="question-44" value="D">D. Security Groups.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B</p>
                </details>
              </li>
              <li>What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)
                <ul>
                  <li><input type="checkbox" name="question-45" value="A">A. Instances can be shut down by AWS at any time with no notification.</li>
                  <li><input type="checkbox" name="question-45" value="B">B. Reserved instances require at least a one-year pricing commitment.</li>
                  <li><input type="checkbox" name="question-45" value="C">C. There is no additional charge for using dedicated instances.</li>
                  <li><input type="checkbox" name="question-45" value="D">D. Reserved instances provide a significant discount compared to on-demand instances.</li>
                  <li><input type="checkbox" name="question-45" value="E">E. Reserved instances are best suited for periodic workloads.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: B, D</p>
                </details>
              </li>
              <li>Why does every AWS Region contain multiple Availability Zones?
                <ul>
                  <li><input type="checkbox" name="question-46" value="A">A. Multiple Availability Zones allows you to build resilient and highly available architectures.</li>
                  <li><input type="checkbox" name="question-46" value="B">B. Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.</li>
                  <li><input type="checkbox" name="question-46" value="C">C. Multiple Availability Zones allows for data replication and global reach.</li>
                  <li><input type="checkbox" name="question-46" value="D">D. Multiple Availability Zones within a region increases the storage capacity available in that region.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?
                <ul>
                  <li><input type="checkbox" name="question-47" value="A">A. On-Demand Instances.</li>
                  <li><input type="checkbox" name="question-47" value="B">B. Spot Instances.</li>
                  <li><input type="checkbox" name="question-47" value="C">C. Reserved Instances     - All Upfront.</li>
                  <li><input type="checkbox" name="question-47" value="D">D. Reserved Instances     - No Upfront.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: A</p>
                </details>
              </li>
              <li>Which of the following is a benefit of running an application in multiple Availability Zones?
                <ul>
                  <li><input type="checkbox" name="question-48" value="A">A. Allows you to exceed AWS service limits.</li>
                  <li><input type="checkbox" name="question-48" value="B">B. Reduces application response time between servers and global users.</li>
                  <li><input type="checkbox" name="question-48" value="C">C. Increases available compute capacity.</li>
                  <li><input type="checkbox" name="question-48" value="D">D. Increases the availability of your application.</li>
                </ul>

                <details>
                  <summary>Answer</summary>
                  <p>Correct answer: D</p>
                </details>
              </li>
              <li>Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?
                <ul>
                  <li><input type="checkbox" name="question-49" value="A">A. AWS sells the old devices to other hosting providers.</li>
                  <li><input type="checkbox" name="question-49" value="B">B. AWS destroys the old devices in accordance with industry-standard practices.</li>
                  <li><input type="checkbox" name="question-49" value="C">C. AWS sends the old devices for remanufacturing.</li>
                  <li><input type="checkbox" name="question-49" value="D">D. AWS stores the old devices in a secure place.</li>
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