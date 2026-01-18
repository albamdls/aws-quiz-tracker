export default [
  {
    id: 8,
    title: "Practice Exam 8",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>What is the main benefit of attaching security groups to an Amazon RDS instance?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Manages user access and encryption keys.</li>
      <li><input type="checkbox" name="question-0" value="B">B. Controls what IP address ranges can connect to your database instance.</li>
      <li><input type="checkbox" name="question-0" value="C">C. Deploys SSL/TLS certificates for use with your database instance.</li>
      <li><input type="checkbox" name="question-0" value="D">D. Distributes incoming traffic across multiple targets.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. EC2 launch type.</li>
      <li><input type="checkbox" name="question-1" value="B">B. Fargate launch type.</li>
      <li><input type="checkbox" name="question-1" value="C">C. Lightsail launch type.</li>
      <li><input type="checkbox" name="question-1" value="D">D. Lambda launch type.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Try to remove unnecessary AWS accounts.</li>
      <li><input type="checkbox" name="question-2" value="B">B. Add the accounts to an AWS Organization and use Consolidated Billing.</li>
      <li><input type="checkbox" name="question-2" value="C">C. Track the AWS charges that are incurred by the member accounts.</li>
      <li><input type="checkbox" name="question-2" value="D">D. Enable AWS tiered-pricing before provisioning resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. Network ACLs and Traffic Manager.</li>
      <li><input type="checkbox" name="question-3" value="B">B. Network ACLs and Subnets.</li>
      <li><input type="checkbox" name="question-3" value="C">C. Security Groups and Internet Gateways.</li>
      <li><input type="checkbox" name="question-3" value="D">D. Security Groups and Network ACLs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>What does the AWS “Business” support plan provide? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Access to the full set of Trusted Advisor checks.</li>
      <li><input type="checkbox" name="question-4" value="B">B. Support Concierge Service.</li>
      <li><input type="checkbox" name="question-4" value="C">C. Less than 15 minutes response-time support if your business critical system goes down.</li>
      <li><input type="checkbox" name="question-4" value="D">D. AWS Support API.</li>
      <li><input type="checkbox" name="question-4" value="E">E. Proactive Technical Account Management.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. Amazon Simple Storage Service.</li>
      <li><input type="checkbox" name="question-5" value="B">B. AWS Elastic Beanstalk.</li>
      <li><input type="checkbox" name="question-5" value="C">C. AWS CodeCommit.</li>
      <li><input type="checkbox" name="question-5" value="D">D. Amazon Elastic File System.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which statement is true in relation to security in AWS?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. AWS manages everything related to EC2 operating systems.</li>
      <li><input type="checkbox" name="question-6" value="B">B. AWS customers are responsible for patching any database software running on Amazon EC2.</li>
      <li><input type="checkbox" name="question-6" value="C">C. Server side encryption is the responsibility of AWS.</li>
      <li><input type="checkbox" name="question-6" value="D">D. AWS is responsible for the security of your application.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Improves Fault-Tolerance.</li>
      <li><input type="checkbox" name="question-7" value="B">B. Provides your business with a seamless remote accessibility.</li>
      <li><input type="checkbox" name="question-7" value="C">C. Prevents unauthorized users from getting into your network.</li>
      <li><input type="checkbox" name="question-7" value="D">D. Provides automatic data backups.</li>
      <li><input type="checkbox" name="question-7" value="E">E. Can be scaled manually in a shorter period of time.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>Which statement is true regarding AWS pricing? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. With the AWS pay-as-you-go pricing model, you don’t have to pay any upfront fee.</li>
      <li><input type="checkbox" name="question-8" value="B">B. You have no responsibility for third-party software license costs.</li>
      <li><input type="checkbox" name="question-8" value="C">C. You only pay for the individual services that you need with no long-term contracts.</li>
      <li><input type="checkbox" name="question-8" value="D">D. For some services, you have to pay a startup fee in order to get the service running.</li>
      <li><input type="checkbox" name="question-8" value="E">E. There are no reservations on AWS, you only pay for what you use.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. AWS Control Tower.</li>
      <li><input type="checkbox" name="question-9" value="B">B. Amazon Macie.</li>
      <li><input type="checkbox" name="question-9" value="C">C. AWS Systems Manager Patch Manager.</li>
      <li><input type="checkbox" name="question-9" value="D">D. AWS Security Hub.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. Use CloudFront to monitor the CPU usage.</li>
      <li><input type="checkbox" name="question-10" value="B">B. Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.</li>
      <li><input type="checkbox" name="question-10" value="C">C. Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is &gt;= 60%.</li>
      <li><input type="checkbox" name="question-10" value="D">D. Use SNS to monitor the utilization of the server.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Amazon EBS.</li>
      <li><input type="checkbox" name="question-11" value="B">B. Amazon RDS.</li>
      <li><input type="checkbox" name="question-11" value="C">C. You can’t run a database inside an Amazon EC2 instance.</li>
      <li><input type="checkbox" name="question-11" value="D">D. Amazon DynamoDB.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-12" value="B">B. Amazon CloudSearch.</li>
      <li><input type="checkbox" name="question-12" value="C">C. Amazon Elastic MapReduce.</li>
      <li><input type="checkbox" name="question-12" value="D">D. Amazon CloudHSM.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>What factors determine how you are charged when using AWS Lambda? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Storage consumed.</li>
      <li><input type="checkbox" name="question-13" value="B">B. Number of requests to your functions.</li>
      <li><input type="checkbox" name="question-13" value="C">C. Number of volumes.</li>
      <li><input type="checkbox" name="question-13" value="D">D. Placement groups.</li>
      <li><input type="checkbox" name="question-13" value="E">E. Compute time consumed.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.</li>
      <li><input type="checkbox" name="question-14" value="B">B. An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.</li>
      <li><input type="checkbox" name="question-14" value="C">C. IAM users are more cost effective than IAM roles.</li>
      <li><input type="checkbox" name="question-14" value="D">D. A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.</li>
      <li><input type="checkbox" name="question-14" value="E">E. An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, B</p>
    </details>
  </li>
  <li>Which of the following actions may reduce Amazon EBS costs? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Deleting unused buckets.</li>
      <li><input type="checkbox" name="question-15" value="B">B. Using reservations.</li>
      <li><input type="checkbox" name="question-15" value="C">C. Deleting unnecessary snapshots.</li>
      <li><input type="checkbox" name="question-15" value="D">D. Changing the type of the volume.</li>
      <li><input type="checkbox" name="question-15" value="E">E. Distributing requests to multiple volumes.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>What does Amazon GuardDuty do to protect AWS accounts and workloads?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. Notifies AWS customers about abuse events once they are reported.</li>
      <li><input type="checkbox" name="question-16" value="B">B. Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.</li>
      <li><input type="checkbox" name="question-16" value="C">C. Helps AWS customers identify the root cause of potential security issues.</li>
      <li><input type="checkbox" name="question-16" value="D">D. Checks security groups for rules that allow unrestricted access to AWS. resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which database service should you use if your application and data schema require “joins” or complex transactions?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Amazon RDS.</li>
      <li><input type="checkbox" name="question-17" value="B">B. AWS Outposts.</li>
      <li><input type="checkbox" name="question-17" value="C">C. Amazon DocumentDB.</li>
      <li><input type="checkbox" name="question-17" value="D">D. Amazon DynamoDB.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following makes it easier for you to categorize, manage and filter your resources?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-18" value="B">B. AWS Service Catalog.</li>
      <li><input type="checkbox" name="question-18" value="C">C. AWS Directory Service.</li>
      <li><input type="checkbox" name="question-18" value="D">D. AWS Tagging.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>What should you consider when storing data in Amazon Glacier?
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Amazon Glacier only accepts data in a compressed format.</li>
      <li><input type="checkbox" name="question-19" value="B">B. Glacier can only be used to store frequently accessed data and data archives.</li>
      <li><input type="checkbox" name="question-19" value="C">C. Amazon Glacier does not provide immediate retrieval of data.</li>
      <li><input type="checkbox" name="question-19" value="D">D. Attach Glacier to an EC2 Instance to be able to store data.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. Amazon EC2.</li>
      <li><input type="checkbox" name="question-20" value="B">B. AWS Batch.</li>
      <li><input type="checkbox" name="question-20" value="C">C. Lambda@Edge.</li>
      <li><input type="checkbox" name="question-20" value="D">D. AWS Fargate.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>How can you increase your application’s fault-tolerance while it is being hosted in AWS?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Deploy your application across multiple EC2 instances.</li>
      <li><input type="checkbox" name="question-21" value="B">B. Deploy your application across multiple Availability Zones.</li>
      <li><input type="checkbox" name="question-21" value="C">C. Host your application on one powerful EC2 instance type instead of multiple smaller instances.</li>
      <li><input type="checkbox" name="question-21" value="D">D. Deploy the underlying application resources across multiple subnets.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email &amp; phone? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Developer.</li>
      <li><input type="checkbox" name="question-22" value="B">B. Premium.</li>
      <li><input type="checkbox" name="question-22" value="C">C. Enterprise.</li>
      <li><input type="checkbox" name="question-22" value="D">D. Standard.</li>
      <li><input type="checkbox" name="question-22" value="E">E. Business.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. IAM group.</li>
      <li><input type="checkbox" name="question-23" value="B">B. IAM user.</li>
      <li><input type="checkbox" name="question-23" value="C">C. IAM role.</li>
      <li><input type="checkbox" name="question-23" value="D">D. AWS account root user.</li>
      <li><input type="checkbox" name="question-23" value="E">E. TAM.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>Which of the following is a benefit of the “Loose Coupling” architecture principle?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. It eliminates the need for change management.</li>
      <li><input type="checkbox" name="question-24" value="B">B. It allows for Cross-Region Replication.</li>
      <li><input type="checkbox" name="question-24" value="C">C. It helps AWS customers reduce Privileged Access to AWS resources.</li>
      <li><input type="checkbox" name="question-24" value="D">D. It allows individual application components or services to be modified without affecting other components.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Amazon Elastic Block Store.</li>
      <li><input type="checkbox" name="question-25" value="B">B. AWS Storage Gateway.</li>
      <li><input type="checkbox" name="question-25" value="C">C. Amazon Elastic File System.</li>
      <li><input type="checkbox" name="question-25" value="D">D. S3.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. On-premises.</li>
      <li><input type="checkbox" name="question-26" value="B">B. IaaS.</li>
      <li><input type="checkbox" name="question-26" value="C">C. PaaS.</li>
      <li><input type="checkbox" name="question-26" value="D">D. Cloud.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>What are the benefits of the AWS Marketplace service? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. Protects customers by performing periodic security checks on listed products.</li>
      <li><input type="checkbox" name="question-27" value="B">B. Per-second billing.</li>
      <li><input type="checkbox" name="question-27" value="C">C. Provides cheaper options for purchasing Amazon EC2 on-demand instances.</li>
      <li><input type="checkbox" name="question-27" value="D">D. Provides flexible pricing options that suit most customer needs.</li>
      <li><input type="checkbox" name="question-27" value="E">E. Provides software solutions that run on AWS or any other Cloud vendor.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  </li>
  <li>What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Elasticity.</li>
      <li><input type="checkbox" name="question-28" value="B">B. Durability.</li>
      <li><input type="checkbox" name="question-28" value="C">C. Traceability.</li>
      <li><input type="checkbox" name="question-28" value="D">D. Accessibility.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Savings Plans.</li>
      <li><input type="checkbox" name="question-29" value="B">B. Spot Instances.</li>
      <li><input type="checkbox" name="question-29" value="C">C. Reserved Instances.</li>
      <li><input type="checkbox" name="question-29" value="D">D. On-Demand Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. Amazon EFS.</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS Secrets Manager.</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS Systems Manager.</li>
      <li><input type="checkbox" name="question-30" value="D">D. Amazon CloudFront.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following services is used when encrypting EBS volumes?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. AWS WAF.</li>
      <li><input type="checkbox" name="question-31" value="B">B. AWS KMS.</li>
      <li><input type="checkbox" name="question-31" value="C">C. Amazon Macie.</li>
      <li><input type="checkbox" name="question-31" value="D">D. Amazon GuardDuty.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Download all the attached policies in a safe place.</li>
      <li><input type="checkbox" name="question-32" value="B">B. Delete all IAM accounts and recreate them.</li>
      <li><input type="checkbox" name="question-32" value="C">C. Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.</li>
      <li><input type="checkbox" name="question-32" value="D">D. Rotate all access keys.</li>
      <li><input type="checkbox" name="question-32" value="E">E. Change the email address and password of the root user account and enable MFA.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  </li>
  <li>What is the Amazon ElastiCache service used for? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Provide an in-memory data storage service.</li>
      <li><input type="checkbox" name="question-33" value="B">B. Reduce delivery costs using Edge Locations.</li>
      <li><input type="checkbox" name="question-33" value="C">C. Improve web application performance.</li>
      <li><input type="checkbox" name="question-33" value="D">D. Provide a Chef-compatible cache to speed up application response.</li>
      <li><input type="checkbox" name="question-33" value="E">E. Distribute requests to multiple instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Deploy your resources across multiple Availability Zones.</li>
      <li><input type="checkbox" name="question-34" value="B">B. Use Amazon EC2 Auto Scaling.</li>
      <li><input type="checkbox" name="question-34" value="C">C. Deploy your resources in another region.</li>
      <li><input type="checkbox" name="question-34" value="D">D. Use Elastic Load Balancing.</li>
      <li><input type="checkbox" name="question-34" value="E">E. Use Serverless Computing whenever possible.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. They provide free capacity when testing your new applications.</li>
      <li><input type="checkbox" name="question-35" value="B">B. They are cheaper than all other EC2 options.</li>
      <li><input type="checkbox" name="question-35" value="C">C. They remove the need to buy “safety net” capacity to handle periodic traffic spikes.</li>
      <li><input type="checkbox" name="question-35" value="D">D. They only require 1-2 days for setup and configuration.</li>
      <li><input type="checkbox" name="question-35" value="E">E. You can increase or decrease your compute capacity depending on the demands of your application.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. It is a data center designed to be completely isolated from other data centers in the same region.</li>
      <li><input type="checkbox" name="question-36" value="B">B. It is a collection of data centers distributed in multiple countries.</li>
      <li><input type="checkbox" name="question-36" value="C">C. It is a logically isolated network of the AWS Cloud.</li>
      <li><input type="checkbox" name="question-36" value="D">D. It is a distinct location within a region that is insulated from « failures in other Availability Zones.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple […].
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Regions.</li>
      <li><input type="checkbox" name="question-37" value="B">B. Transportation devices.</li>
      <li><input type="checkbox" name="question-37" value="C">C. Support plans.</li>
      <li><input type="checkbox" name="question-37" value="D">D. Edge locations.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company’s responsibility when building a PCI-compliant environment in AWS? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Start the migration process immediately as all AWS services are PCI compliant.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Ensure that AWS services are configured properly to meet all PCI DSS standards.</li>
      <li><input type="checkbox" name="question-38" value="C">C. Restrict any access to cardholder data and create a policy that addresses information security for all personnel.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements.</li>
      <li><input type="checkbox" name="question-38" value="E">E. Ensure that all PCI DSS physical security requirements are met.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>What is the maximum amount of data that can be stored in S3 in a single AWS account?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. 100 PetaBytes.</li>
      <li><input type="checkbox" name="question-39" value="B">B. Virtually unlimited storage.</li>
      <li><input type="checkbox" name="question-39" value="C">C. 5TeraBytes.</li>
      <li><input type="checkbox" name="question-39" value="D">D. 10 Exabytes.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Operational Excellence.</li>
      <li><input type="checkbox" name="question-40" value="B">B. Security.</li>
      <li><input type="checkbox" name="question-40" value="C">C. Performance Efficiency.</li>
      <li><input type="checkbox" name="question-40" value="D">D. Reliability.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-41" value="B">B. Amazon Connect.</li>
      <li><input type="checkbox" name="question-41" value="C">C. Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-41" value="D">D. Amazon EC2.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following steps should be taken by a customer when conducting penetration testing on AWS?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Conduct penetration testing using Amazon Inspector, and then notify AWS support.</li>
      <li><input type="checkbox" name="question-42" value="B">B. Request and wait for approval from the customer’s internal security team, and then conduct testing.</li>
      <li><input type="checkbox" name="question-42" value="C">C. Notify AWS support, and then conduct testing immediately.</li>
      <li><input type="checkbox" name="question-42" value="D">D. Request and wait for approval from AWS support, and then conduct testing.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. AWS Cost Explorer.</li>
      <li><input type="checkbox" name="question-43" value="B">B. AWS Budgets.</li>
      <li><input type="checkbox" name="question-43" value="C">C. AWS Cost and Usage report.</li>
      <li><input type="checkbox" name="question-43" value="D">D. AWS Billing dashboard.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. AWS Regions.</li>
      <li><input type="checkbox" name="question-44" value="B">B. Availability Zones.</li>
      <li><input type="checkbox" name="question-44" value="C">C. Edge locations.</li>
      <li><input type="checkbox" name="question-44" value="D">D. Amazon CloudFront.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>How many Availability Zones should compute resources be provisioned across to achieve high availability?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. A minimum of one.</li>
      <li><input type="checkbox" name="question-45" value="B">B. A minimum of two.</li>
      <li><input type="checkbox" name="question-45" value="C">C. A minimum of three.</li>
      <li><input type="checkbox" name="question-45" value="D">D. A minimum of four or more.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>The AWS Cloud’s multiple Regions are an example of:
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Agility.</li>
      <li><input type="checkbox" name="question-46" value="B">B. Global infrastructure.</li>
      <li><input type="checkbox" name="question-46" value="C">C. Elasticity.</li>
      <li><input type="checkbox" name="question-46" value="D">D. Pay-as-you-go pricing.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS service can be used to manually launch instances based on resource requirements?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Amazon EBS.</li>
      <li><input type="checkbox" name="question-47" value="B">B. Amazon S3.</li>
      <li><input type="checkbox" name="question-47" value="C">C. Amazon EC2.</li>
      <li><input type="checkbox" name="question-47" value="D">D. Amazon ECS.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which is a recommended pattern for designing a highly available architecture on AWS?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Ensure that components have low-latency network connectivity.</li>
      <li><input type="checkbox" name="question-48" value="B">B. Run enough Amazon EC2 instances to operate at peak load.</li>
      <li><input type="checkbox" name="question-48" value="C">C. Ensure that the application is designed to accommodate failure of any single component.</li>
      <li><input type="checkbox" name="question-48" value="D">D. Use a monolithic application that handles all operations.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. High availability.</li>
      <li><input type="checkbox" name="question-49" value="B">B. Shared security model.</li>
      <li><input type="checkbox" name="question-49" value="C">C. Elasticity.</li>
      <li><input type="checkbox" name="question-49" value="D">D. Pay-as-you-go pricing.</li>
      <li><input type="checkbox" name="question-49" value="E">E. Reliability.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
</ol>
      `,
    data: []
  },
];