export default [
  {
    id: 2,
    title: "Practice Exam 2",
    questions: 50,
    rawHtml: `
        <ol>
          <li>A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?
            <ul>
              <li><input type="checkbox" name="question-0" value="A">A. AWS Organizations.</li>
              <li><input type="checkbox" name="question-0" value="B">B. AWS Trusted Advisor.</li>
              <li><input type="checkbox" name="question-0" value="C">C. IAM User Groups.</li>
              <li><input type="checkbox" name="question-0" value="D">D. AWS Config.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>Which service provides object-level storage in AWS?
            <ul>
              <li><input type="checkbox" name="question-1" value="A">A. Amazon EBS.</li>
              <li><input type="checkbox" name="question-1" value="B">B. Amazon Instance Store.</li>
              <li><input type="checkbox" name="question-1" value="C">C. Amazon EFS.</li>
              <li><input type="checkbox" name="question-1" value="D">D. Amazon S3.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: D</p>
            </details>
          </li>
          <li>A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?
            <ul>
              <li><input type="checkbox" name="question-2" value="A">A. AWS Elastic Load Balancer.</li>
              <li><input type="checkbox" name="question-2" value="B">B. AWS Budgets.</li>
              <li><input type="checkbox" name="question-2" value="C">C. AWS Auto Scaling.</li>
              <li><input type="checkbox" name="question-2" value="D">D. AWS Cost Explorer.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>Which S3 storage class is best for data with unpredictable access patterns?
            <ul>
              <li><input type="checkbox" name="question-3" value="A">A. Amazon S3 Intelligent-Tiering.</li>
              <li><input type="checkbox" name="question-3" value="B">B. Amazon S3 Glacier Flexible Retrieval.</li>
              <li><input type="checkbox" name="question-3" value="C">C. Amazon S3 Standard.</li>
              <li><input type="checkbox" name="question-3" value="D">D. Amazon S3 Standard-Infrequent Access.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>What is the AWS database service that allows you to upload data structured in key-value format?
            <ul>
              <li><input type="checkbox" name="question-4" value="A">A. Amazon DynamoDB.</li>
              <li><input type="checkbox" name="question-4" value="B">B. Amazon Aurora.</li>
              <li><input type="checkbox" name="question-4" value="C">C. Amazon Redshift.</li>
              <li><input type="checkbox" name="question-4" value="D">D. Amazon RDS.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>Which of the following is NOT correct regarding Amazon EC2 On-demand instances?
            <ul>
              <li><input type="checkbox" name="question-5" value="A">A. You have to pay a start-up fee when launching a new instance for the first time.</li>
              <li><input type="checkbox" name="question-5" value="B">B. The on-demand instances follow the AWS pay-as-you-go pricing model.</li>
              <li><input type="checkbox" name="question-5" value="C">C. With on-demand instances, no longer-term commitments or upfront payments are needed.</li>
              <li><input type="checkbox" name="question-5" value="D">D. When using on-demand Linux instances, you are charged per second based on an hourly rate.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-6" value="A">A. AWS Trusted Advisor.</li>
              <li><input type="checkbox" name="question-6" value="B">B. Amazon Inspector.</li>
              <li><input type="checkbox" name="question-6" value="C">C. Amazon SNS.</li>
              <li><input type="checkbox" name="question-6" value="D">D. Amazon CloudWatch.</li>
              <li><input type="checkbox" name="question-6" value="E">E. Concierge Support Team.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A, B</p>
            </details>
          </li>
          <li>What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?
            <ul>
              <li><input type="checkbox" name="question-7" value="A">A. Encrypted keys.</li>
              <li><input type="checkbox" name="question-7" value="B">B. Email verification.</li>
              <li><input type="checkbox" name="question-7" value="C">C. AWS KMS.</li>
              <li><input type="checkbox" name="question-7" value="D">D. AWS MFA.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: D</p>
            </details>
          </li>
          <li>A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?
            <ul>
              <li><input type="checkbox" name="question-8" value="A">A. AWS Knowledge Center.</li>
              <li><input type="checkbox" name="question-8" value="B">B. AWS Health Dashboard.</li>
              <li><input type="checkbox" name="question-8" value="C">C. Infrastructure Event Management.</li>
              <li><input type="checkbox" name="question-8" value="D">D. AWS Support Concierge Service.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?
            <ul>
              <li><input type="checkbox" name="question-9" value="A">A. Amazon RDS.</li>
              <li><input type="checkbox" name="question-9" value="B">B. Amazon Redshift.</li>
              <li><input type="checkbox" name="question-9" value="C">C. Amazon DynamoDB.</li>
              <li><input type="checkbox" name="question-9" value="D">D. Amazon CloudWatch.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>Which of the below is a best-practice when designing solutions on AWS?
            <ul>
              <li><input type="checkbox" name="question-10" value="A">A. Invest heavily in architecting your environment, as it is not easy to change your design later.</li>
              <li><input type="checkbox" name="question-10" value="B">B. Use AWS reservations to reduce costs when testing your production environment.</li>
              <li><input type="checkbox" name="question-10" value="C">C. Automate wherever possible to make architectural (© ) experimentation easier.</li>
              <li><input type="checkbox" name="question-10" value="D">D. Provision a large compute capacity to handle any spikes in load</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?
            <ul>
              <li><input type="checkbox" name="question-11" value="A">A. Penetration testing is not allowed in AWS.</li>
              <li><input type="checkbox" name="question-11" value="B">B. Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.</li>
              <li><input type="checkbox" name="question-11" value="C">C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.</li>
              <li><input type="checkbox" name="question-11" value="D">D. The AWS customers are only allowed to perform penetration testing on services managed by AWS.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>Which service is used to ensure that messages between software components are not lost if one or more components fail?
            <ul>
              <li><input type="checkbox" name="question-12" value="A">A. Amazon SQS.</li>
              <li><input type="checkbox" name="question-12" value="B">B. Amazon SES.</li>
              <li><input type="checkbox" name="question-12" value="C">C. AWS Direct Connect.</li>
              <li><input type="checkbox" name="question-12" value="D">D. Amazon Connect.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-13" value="A">A. Multi-factor authentication.</li>
              <li><input type="checkbox" name="question-13" value="B">B. Availability Zones.</li>
              <li><input type="checkbox" name="question-13" value="C">C. Elastic Load Balancing.</li>
              <li><input type="checkbox" name="question-13" value="D">D. Penetration testing.</li>
              <li><input type="checkbox" name="question-13" value="E">E. Vertical Scaling.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: B, C</p>
            </details>
          </li>
          <li>What is the AWS service that provides a virtual network dedicated to your AWS account?
            <ul>
              <li><input type="checkbox" name="question-14" value="A">A. AWS VPN.</li>
              <li><input type="checkbox" name="question-14" value="B">B. AWS Subnets.</li>
              <li><input type="checkbox" name="question-14" value="C">C. AWS Dedicated Hosts.</li>
              <li><input type="checkbox" name="question-14" value="D">D. Amazon VPC.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: D</p>
            </details>
          </li>
          <li>According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-15" value="A">A. Managing environmental events of AWS data centers.</li>
              <li><input type="checkbox" name="question-15" value="B">B. Protecting the confidentiality of data in transit in Amazon S3.</li>
              <li><input type="checkbox" name="question-15" value="C">C. Controlling physical access to AWS Regions.</li>
              <li><input type="checkbox" name="question-15" value="D">D. Ensuring that the underlying EC2 host is configured properly.</li>
              <li><input type="checkbox" name="question-15" value="E">E. Patching applications installed on Amazon EC2.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: B, E</p>
            </details>
          </li>
          <li>Which of the following AWS services can be used as a compute resource? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-16" value="A">A. Amazon VPC.</li>
              <li><input type="checkbox" name="question-16" value="B">B. Amazon CloudWatch.</li>
              <li><input type="checkbox" name="question-16" value="C">C. Amazon S3.</li>
              <li><input type="checkbox" name="question-16" value="D">D. Amazon EC2.</li>
              <li><input type="checkbox" name="question-16" value="E">E. AWS Lambda.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: D, E</p>
            </details>
          </li>
          <li>Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?
            <ul>
              <li><input type="checkbox" name="question-17" value="A">A. Amazon EBS.</li>
              <li><input type="checkbox" name="question-17" value="B">B. Amazon SQS.</li>
              <li><input type="checkbox" name="question-17" value="C">C. Amazon S3.</li>
              <li><input type="checkbox" name="question-17" value="D">D. Amazon Instance store.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?
            <ul>
              <li><input type="checkbox" name="question-18" value="A">A. Instance Password.</li>
              <li><input type="checkbox" name="question-18" value="B">B. Key pairs.</li>
              <li><input type="checkbox" name="question-18" value="C">C. Access Keys.</li>
              <li><input type="checkbox" name="question-18" value="D">D. MFA.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>What does Amazon ElastiCache provide?
            <ul>
              <li><input type="checkbox" name="question-19" value="A">A. In-memory caching for read-heavy applications.</li>
              <li><input type="checkbox" name="question-19" value="B">B. An Ehcache compatible in-memory data store.</li>
              <li><input type="checkbox" name="question-19" value="C">C. An online software store that allows Customers to launch pre-configured software with just few clicks.</li>
              <li><input type="checkbox" name="question-19" value="D">D. A domain name system in the cloud.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>What is the AWS service that enables you to manage all of your AWS accounts from a single master account?
            <ul>
              <li><input type="checkbox" name="question-20" value="A">A. AWS WAF.</li>
              <li><input type="checkbox" name="question-20" value="B">B. AWS Trusted Advisor.</li>
              <li><input type="checkbox" name="question-20" value="C">C. AWS Organizations.</li>
              <li><input type="checkbox" name="question-20" value="D">D. Amazon Config.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?
            <ul>
              <li><input type="checkbox" name="question-21" value="A">A. Dedicated Instances.</li>
              <li><input type="checkbox" name="question-21" value="B">B. Dedicated Hosts.</li>
              <li><input type="checkbox" name="question-21" value="C">C. On-demand Instances.</li>
              <li><input type="checkbox" name="question-21" value="D">D. Reserved Instances.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: B</p>
            </details>
          </li>
          <li>Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?
            <ul>
              <li><input type="checkbox" name="question-22" value="A">A. Free support for all enterprise customers.</li>
              <li><input type="checkbox" name="question-22" value="B">B. Automatic data protection.</li>
              <li><input type="checkbox" name="question-22" value="C">C. Reduced Capital Expenditure (CapEx).</li>
              <li><input type="checkbox" name="question-22" value="D">D. AWS holds responsibility for managing customer applications.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-23" value="A">A. Always use Global Services in your architecture rather than Regional Services.</li>
              <li><input type="checkbox" name="question-23" value="B">B. Always choose to pay as you go.</li>
              <li><input type="checkbox" name="question-23" value="C">C. Treat servers as fixed resources.</li>
              <li><input type="checkbox" name="question-23" value="D">D. Automate wherever possible.</li>
              <li><input type="checkbox" name="question-23" value="E">E. Remove single points of failure.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: D, E</p>
            </details>
          </li>
          <li>Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?
            <ul>
              <li><input type="checkbox" name="question-24" value="A">A. AWS Direct Connect.</li>
              <li><input type="checkbox" name="question-24" value="B">B. Amazon CloudFront.</li>
              <li><input type="checkbox" name="question-24" value="C">C. AWS Snowball.</li>
              <li><input type="checkbox" name="question-24" value="D">D. Amazon Route 53.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?
            <ul>
              <li><input type="checkbox" name="question-25" value="A">A. Internet gateways.</li>
              <li><input type="checkbox" name="question-25" value="B">B. Virtual Private Cloud.</li>
              <li><input type="checkbox" name="question-25" value="C">C. Security Groups.</li>
              <li><input type="checkbox" name="question-25" value="D">D. Amazon CloudFront.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: B</p>
            </details>
          </li>
          <li>Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?
            <ul>
              <li><input type="checkbox" name="question-26" value="A">A. Amazon Cognito.</li>
              <li><input type="checkbox" name="question-26" value="B">B. AWS IAM.</li>
              <li><input type="checkbox" name="question-26" value="C">C. Amazon Aurora.</li>
              <li><input type="checkbox" name="question-26" value="D">D. AWS WAF.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: D</p>
            </details>
          </li>
          <li>An organization needs to analyze and process a large number of data sets. Which AWS service should they use?
            <ul>
              <li><input type="checkbox" name="question-27" value="A">A. Amazon EMR.</li>
              <li><input type="checkbox" name="question-27" value="B">B. Amazon MQ.</li>
              <li><input type="checkbox" name="question-27" value="C">C. Amazon SNS.</li>
              <li><input type="checkbox" name="question-27" value="D">D. Amazon SQS.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-28" value="A">A. Monitoring network performance.</li>
              <li><input type="checkbox" name="question-28" value="B">B. Installing software on EC2 instances.</li>
              <li><input type="checkbox" name="question-28" value="C">C. Creating hypervisors.</li>
              <li><input type="checkbox" name="question-28" value="D">D. Configuring Access Control Lists (ACLs).</li>
              <li><input type="checkbox" name="question-28" value="E">E. Hardware maintenance.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C, E</p>
            </details>
          </li>
          <li>What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?
            <ul>
              <li><input type="checkbox" name="question-29" value="A">A. Amazon Redshift.</li>
              <li><input type="checkbox" name="question-29" value="B">B. Amazon DynamoDB.</li>
              <li><input type="checkbox" name="question-29" value="C">C. Amazon EC2.</li>
              <li><input type="checkbox" name="question-29" value="D">D. Amazon RDS.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>What are the default security credentials that are required to access the AWS management console for an IAM user account?
            <ul>
              <li><input type="checkbox" name="question-30" value="A">A. MFA.</li>
              <li><input type="checkbox" name="question-30" value="B">B. Security tokens.</li>
              <li><input type="checkbox" name="question-30" value="C">C. A user name and password.</li>
              <li><input type="checkbox" name="question-30" value="D">D. Access keys.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?
            <ul>
              <li><input type="checkbox" name="question-31" value="A">A. IAM.</li>
              <li><input type="checkbox" name="question-31" value="B">B. An internet gateway.</li>
              <li><input type="checkbox" name="question-31" value="C">C. EBS Snapshot.</li>
              <li><input type="checkbox" name="question-31" value="D">D. AMI.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: D</p>
            </details>
          </li>
          <li>What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-32" value="A">A. Reserved Compute capacity.</li>
              <li><input type="checkbox" name="question-32" value="B">B. Eliminating Single Points of Failure (SPOFs).</li>
              <li><input type="checkbox" name="question-32" value="C">C. Distributed infrastructure.</li>
              <li><input type="checkbox" name="question-32" value="D">D. Virtualized compute resources.</li>
              <li><input type="checkbox" name="question-32" value="E">E. Dedicated hosting.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: B, C</p>
            </details>
          </li>
          <li>Which of the following aspects of security are managed by AWS? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-33" value="A">A. Encryption of EBS volumes.</li>
              <li><input type="checkbox" name="question-33" value="B">B. VPC security.</li>
              <li><input type="checkbox" name="question-33" value="C">C. Access permissions.</li>
              <li><input type="checkbox" name="question-33" value="D">D. Hardware patching.</li>
              <li><input type="checkbox" name="question-33" value="E">E. Securing global physical infrastructure.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: D, E</p>
            </details>
          </li>
          <li>Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?
            <ul>
              <li><input type="checkbox" name="question-34" value="A">A. The ability of a system to recover gracefully from failure.</li>
              <li><input type="checkbox" name="question-34" value="B">B. The efficient use of computing resources to meet requirements.</li>
              <li><input type="checkbox" name="question-34" value="C">C. The ability to monitor systems and improve supporting processes and procedures.</li>
              <li><input type="checkbox" name="question-34" value="D">D. The ability to manage datacenter operations more efficiently.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?
            <ul>
              <li><input type="checkbox" name="question-35" value="A">A. Edge locations are used by CloudFront to cache the most recent responses.</li>
              <li><input type="checkbox" name="question-35" value="B">B. Edge locations are used by CloudFront to improve your end users’ experience when uploading files.</li>
              <li><input type="checkbox" name="question-35" value="C">C. Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.</li>
              <li><input type="checkbox" name="question-35" value="D">D. Edge locations are used by CloudFront to distribute content to global users with low latency.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-36" value="A">A. AWS CloudTrail.</li>
              <li><input type="checkbox" name="question-36" value="B">B. Amazon Comprehend.</li>
              <li><input type="checkbox" name="question-36" value="C">C. AWS Transit Gateway.</li>
              <li><input type="checkbox" name="question-36" value="D">D. AWS X-Ray.</li>
              <li><input type="checkbox" name="question-36" value="E">E. AWS Config.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A, E</p>
            </details>
          </li>
          <li>Which of the following services allows you to run containerized applications on a cluster of EC2 instances?
            <ul>
              <li><input type="checkbox" name="question-37" value="A">A. Amazon ECS.</li>
              <li><input type="checkbox" name="question-37" value="B">B. AWS Data Pipeline.</li>
              <li><input type="checkbox" name="question-37" value="C">C. AWS Cloud9.</li>
              <li><input type="checkbox" name="question-37" value="D">D. AWS Personal Health Dashboard.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>Which of the following services will help businesses ensure compliance in AWS?
            <ul>
              <li><input type="checkbox" name="question-38" value="A">A. CloudFront.</li>
              <li><input type="checkbox" name="question-38" value="B">B. CloudEndure Migration.</li>
              <li><input type="checkbox" name="question-38" value="C">C. CloudWatch.</li>
              <li><input type="checkbox" name="question-38" value="D">D. CloudTrail.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: D</p>
            </details>
          </li>
          <li>Which of the following procedures will help reduce your Amazon S3 costs?
            <ul>
              <li><input type="checkbox" name="question-39" value="A">A. Use the Import/Export feature to move old files automatically to Amazon Glacier.</li>
              <li><input type="checkbox" name="question-39" value="B">B. Use the right combination of storage classes based on different use cases.</li>
              <li><input type="checkbox" name="question-39" value="C">C. Pick the right Availability Zone for your S3 bucket.</li>
              <li><input type="checkbox" name="question-39" value="D">D. Move all the data stored in S3 standard to EBS.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: B</p>
            </details>
          </li>
          <li>What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-40" value="A">A. AWS Direct Connect.</li>
              <li><input type="checkbox" name="question-40" value="B">B. Amazon EC2 Auto Scaling.</li>
              <li><input type="checkbox" name="question-40" value="C">C. Elastic Load Balancer.</li>
              <li><input type="checkbox" name="question-40" value="D">D. CloudFormation.</li>
              <li><input type="checkbox" name="question-40" value="E">E. Network ACLs.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: B, C</p>
            </details>
          </li>
          <li>Which of the following activities may help reduce your AWS monthly costs?
            <ul>
              <li><input type="checkbox" name="question-41" value="A">A. Enabling Amazon EC2 Auto Scaling for all of your workloads.</li>
              <li><input type="checkbox" name="question-41" value="B">B. Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.</li>
              <li><input type="checkbox" name="question-41" value="C">C. Removing all of your Cost Allocation Tags.</li>
              <li><input type="checkbox" name="question-41" value="D">D. Deploying your AWS resources across multiple Availability Zones.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?
            <ul>
              <li><input type="checkbox" name="question-42" value="A">A. S3 Transfer Acceleration.</li>
              <li><input type="checkbox" name="question-42" value="B">B. AWS WAF.</li>
              <li><input type="checkbox" name="question-42" value="C">C. AWS Snowmobile.</li>
              <li><input type="checkbox" name="question-42" value="D">D. AWS Snowball.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?
            <ul>
              <li><input type="checkbox" name="question-43" value="A">A. AWS X-Ray.</li>
              <li><input type="checkbox" name="question-43" value="B">B. Network ACL.</li>
              <li><input type="checkbox" name="question-43" value="C">C. Security Groups.</li>
              <li><input type="checkbox" name="question-43" value="D">D. VPC Flow logs.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-44" value="A">A. AWS KMS.</li>
              <li><input type="checkbox" name="question-44" value="B">B. AWS Global accelerator.</li>
              <li><input type="checkbox" name="question-44" value="C">C. AWS Direct Connect.</li>
              <li><input type="checkbox" name="question-44" value="D">D. AWS Glue.</li>
              <li><input type="checkbox" name="question-44" value="E">E. Amazon CloudFront.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: B, E</p>
            </details>
          </li>
          <li>Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)
            <ul>
              <li><input type="checkbox" name="question-45" value="A">A. Building the relational database schema.</li>
              <li><input type="checkbox" name="question-45" value="B">B. Performing backups.</li>
              <li><input type="checkbox" name="question-45" value="C">C. Managing the database settings.</li>
              <li><input type="checkbox" name="question-45" value="D">D. Patching the database software.</li>
              <li><input type="checkbox" name="question-45" value="E">E. Installing the database software.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A, C</p>
            </details>
          </li>
          <li>A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?
            <ul>
              <li><input type="checkbox" name="question-46" value="A">A. Amazon DynamoDB.</li>
              <li><input type="checkbox" name="question-46" value="B">B. Amazon SNS.</li>
              <li><input type="checkbox" name="question-46" value="C">C. Amazon RDS.</li>
              <li><input type="checkbox" name="question-46" value="D">D. Amazon ElastiCache.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: C</p>
            </details>
          </li>
          <li>A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?
            <ul>
              <li><input type="checkbox" name="question-47" value="A">A. APN Consulting Partners.</li>
              <li><input type="checkbox" name="question-47" value="B">B. AWS TAM.</li>
              <li><input type="checkbox" name="question-47" value="C">C. APN Technology Partners.</li>
              <li><input type="checkbox" name="question-47" value="D">D. AWS Professional Services.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: A</p>
            </details>
          </li>
          <li>What is the AWS serverless service that allows you to run your applications without any administrative burden?
            <ul>
              <li><input type="checkbox" name="question-48" value="A">A. Amazon LightSail.</li>
              <li><input type="checkbox" name="question-48" value="B">B. AWS Lambda.</li>
              <li><input type="checkbox" name="question-48" value="C">C. Amazon RDS instances.</li>
              <li><input type="checkbox" name="question-48" value="D">D. Amazon EC2 instances.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: B</p>
            </details>
          </li>
          <li>Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?
            <ul>
              <li><input type="checkbox" name="question-49" value="A">A. She has properly built an elastic system.</li>
              <li><input type="checkbox" name="question-49" value="B">B. She has properly built a fault tolerant system.</li>
              <li><input type="checkbox" name="question-49" value="C">C. She has properly built an encrypted system.</li>
              <li><input type="checkbox" name="question-49" value="D">D. She has properly built a scalable system.</li>
            </ul>

            <details>
              <summary>Answer</summary>
              <p>Correct answer: B</p>
            </details>
          </li>
        </ol>
        `,
    data: []
  }
]