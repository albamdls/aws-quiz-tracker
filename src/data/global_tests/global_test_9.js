export default [
  {
    id: 9,
    title: "Exam 9",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. AWS Well-Architected Framework documentation.</li>
      <li><input type="checkbox" name="question-0" value="B">B. Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-0" value="C">C. AWS CodeCommit.</li>
      <li><input type="checkbox" name="question-0" value="D">D. AWS Quick Start reference deployments.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. It simplifies relational database administration tasks.</li>
      <li><input type="checkbox" name="question-1" value="B">B. It provides 99.99999999999% reliability and durability.</li>
      <li><input type="checkbox" name="question-1" value="C">C. It automatically scales databases for loads.</li>
      <li><input type="checkbox" name="question-1" value="D">D. It enables users to dynamically adjust CPU and RAM resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following AWS Cloud services can be used to run a customer-managed relational database?
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Amazon EC2.</li>
      <li><input type="checkbox" name="question-2" value="B">B. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-2" value="C">C. Amazon ElastiCache.</li>
      <li><input type="checkbox" name="question-2" value="D">D. Amazon DynamoDB.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. Launch the instances across multiple Availability Zones in a single AWS Region.</li>
      <li><input type="checkbox" name="question-3" value="B">B. Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.</li>
      <li><input type="checkbox" name="question-3" value="C">C. Launch the instances in multiple AWS Regions but in the same Availability Zone.</li>
      <li><input type="checkbox" name="question-3" value="D">D. Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. A public and private key-pair.</li>
      <li><input type="checkbox" name="question-4" value="B">B. Amazon Inspector.</li>
      <li><input type="checkbox" name="question-4" value="C">C. AWS Identity and Access Management (IAM) policies.</li>
      <li><input type="checkbox" name="question-4" value="D">D. Security Groups.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. AWS VPN.</li>
      <li><input type="checkbox" name="question-5" value="B">B. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-5" value="C">C. API Gateway.</li>
      <li><input type="checkbox" name="question-5" value="D">D. Amazon Direct Connect.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>Which AWS service or feature can be used to monitor CPU usage?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. AWS CloudTrail.</li>
      <li><input type="checkbox" name="question-6" value="B">B. VPC Flow Logs.</li>
      <li><input type="checkbox" name="question-6" value="C">C. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-6" value="D">D. AWS Config.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which task is AWS responsible for in the shared responsibility model for security and compliance?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Granting access to individuals and services.</li>
      <li><input type="checkbox" name="question-7" value="B">B. Encrypting data in transit.</li>
      <li><input type="checkbox" name="question-7" value="C">C. Updating Amazon EC2 host firmware.</li>
      <li><input type="checkbox" name="question-7" value="D">D. Updating operating systems.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following security-related actions are available at no cost?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Calling AWS Support.</li>
      <li><input type="checkbox" name="question-8" value="B">B. Contacting AWS Professional Services to request a workshop.</li>
      <li><input type="checkbox" name="question-8" value="C">C. Accessing forums, blogs, and whitepapers.</li>
      <li><input type="checkbox" name="question-8" value="D">D. Attending AWS classes at a local university.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which storage service can be used as a low-cost option for hosting static websites?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. Amazon Glacier.</li>
      <li><input type="checkbox" name="question-9" value="B">B. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-9" value="C">C. Amazon Elastic File System (Amazon EFS).</li>
      <li><input type="checkbox" name="question-9" value="D">D. Amazon Simple Storage Service (Amazon S3).</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>According to the AWS shared responsibility model what is the sole responsibility of AWS?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. Application security.</li>
      <li><input type="checkbox" name="question-10" value="B">B. Edge location management.</li>
      <li><input type="checkbox" name="question-10" value="C">C. Patch management.</li>
      <li><input type="checkbox" name="question-10" value="D">D. Client-side data.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Multiple Availability Zones.</li>
      <li><input type="checkbox" name="question-11" value="B">B. Performance efficiency.</li>
      <li><input type="checkbox" name="question-11" value="C">C. Security.</li>
      <li><input type="checkbox" name="question-11" value="D">D. Encryption usage.</li>
      <li><input type="checkbox" name="question-11" value="E">E. High availability.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-12" value="B">B. Amazon Inspector.</li>
      <li><input type="checkbox" name="question-12" value="C">C. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-12" value="D">D. AWS CloudTrail.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Use manual monitoring.</li>
      <li><input type="checkbox" name="question-13" value="B">B. Use fixed servers.</li>
      <li><input type="checkbox" name="question-13" value="C">C. Implement loose coupling.</li>
      <li><input type="checkbox" name="question-13" value="D">D. Rely on individual components.</li>
      <li><input type="checkbox" name="question-13" value="E">E. Design for scalability.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>When architecting cloud applications, which of the following are a key design principle?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. Use the largest instance possible.</li>
      <li><input type="checkbox" name="question-14" value="B">B. Provision capacity for peak load.</li>
      <li><input type="checkbox" name="question-14" value="C">C. Use the Scrum development process.</li>
      <li><input type="checkbox" name="question-14" value="D">D. Implement elasticity.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.</li>
      <li><input type="checkbox" name="question-15" value="B">B. Enable automate patching for the instances using the Amazon RDS console.</li>
      <li><input type="checkbox" name="question-15" value="C">C. In AWS Config. configure a rule for the instances and the required patch level.</li>
      <li><input type="checkbox" name="question-15" value="D">D. Use AWS Systems Manager to automate database patching according to a schedule.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which mechanism allows developers to access AWS services from application code?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. AWS Software Development Kit.</li>
      <li><input type="checkbox" name="question-16" value="B">B. AWS Management Console.</li>
      <li><input type="checkbox" name="question-16" value="C">C. AWS CodePipeline.</li>
      <li><input type="checkbox" name="question-16" value="D">D. AWS Config.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which AWS feature will reduce the customer’s total cost of ownership (TCO)?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Shared responsibility security model.</li>
      <li><input type="checkbox" name="question-17" value="B">B. Single tenancy.</li>
      <li><input type="checkbox" name="question-17" value="C">C. Elastic computing.</li>
      <li><input type="checkbox" name="question-17" value="D">D. Encryption.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following is a benefit of using the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Permissive security removes the administrative burden.</li>
      <li><input type="checkbox" name="question-18" value="B">B. Ability to focus on revenue-generating activities.</li>
      <li><input type="checkbox" name="question-18" value="C">C. Control over cloud network hardware.</li>
      <li><input type="checkbox" name="question-18" value="D">D. Choice of specific cloud hardware vendors.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following are categories of AWS Trusted Advisor? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Fault Tolerance.</li>
      <li><input type="checkbox" name="question-19" value="B">B. Instance Usage.</li>
      <li><input type="checkbox" name="question-19" value="C">C. Infrastructure.</li>
      <li><input type="checkbox" name="question-19" value="D">D. Performance.</li>
      <li><input type="checkbox" name="question-19" value="E">E. Storage Capacity.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>What is Amazon CloudWatch?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. A code repository with customizable build and team commit features.</li>
      <li><input type="checkbox" name="question-20" value="B">B. A metrics repository with customizable notification thresholds and channels.</li>
      <li><input type="checkbox" name="question-20" value="C">C. A security configuration repository with threat analytics.</li>
      <li><input type="checkbox" name="question-20" value="D">D. A rule repository of a web application firewall with automated vulnerability prevention features.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Patching operating system components for Amazon Relational Database Server (Amazon RDS).</li>
      <li><input type="checkbox" name="question-21" value="B">B. Encrypting data on the client-side.</li>
      <li><input type="checkbox" name="question-21" value="C">C. Training the data center staff.</li>
      <li><input type="checkbox" name="question-21" value="D">D. Configuring Network Access Control Lists (ACL).</li>
      <li><input type="checkbox" name="question-21" value="E">E. Maintaining environmental controls within a data center.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>Under the shared responsibility model, which of the following is a shared control between a customer and AWS?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Physical controls.</li>
      <li><input type="checkbox" name="question-22" value="B">B. Patch management.</li>
      <li><input type="checkbox" name="question-22" value="C">C. Zone security.</li>
      <li><input type="checkbox" name="question-22" value="D">D. Data center auditing.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS service is used to pay AWS bills, and monitor usage and budget costs?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. AWS Billing and Cost Management.</li>
      <li><input type="checkbox" name="question-23" value="B">B. Consolidated billing.</li>
      <li><input type="checkbox" name="question-23" value="C">C. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-23" value="D">D. Amazon QuickSight.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>How do customers benefit from Amazon’s massive economies of scale?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Periodic price reductions as the result of Amazon’s operational efficiencies.</li>
      <li><input type="checkbox" name="question-24" value="B">B. New Amazon EC2 instance types providing the latest hardware.</li>
      <li><input type="checkbox" name="question-24" value="C">C. The ability to scale up and down when needed.</li>
      <li><input type="checkbox" name="question-24" value="D">D. Increased reliability in the underlying hardware of Amazon EC2 instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Service control policies (SCPs).</li>
      <li><input type="checkbox" name="question-25" value="B">B. Consolidated billing.</li>
      <li><input type="checkbox" name="question-25" value="C">C. All Upfront Reserved Instances.</li>
      <li><input type="checkbox" name="question-25" value="D">D. AWS Cost Explorer.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. Amazon EBS.</li>
      <li><input type="checkbox" name="question-26" value="B">B. Amazon Connect.</li>
      <li><input type="checkbox" name="question-26" value="C">C. AWS Storage Gateway.</li>
      <li><input type="checkbox" name="question-26" value="D">D. Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-26" value="E">E. AWS Direct Connect.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  </li>
  <li>Which of the following services will automatically scale with an expected increase in web traffic?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. AWS CodePipeline.</li>
      <li><input type="checkbox" name="question-27" value="B">B. Elastic Load Balancing.</li>
      <li><input type="checkbox" name="question-27" value="C">C. Amazon EBS.</li>
      <li><input type="checkbox" name="question-27" value="D">D. AWS Direct Connect.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which service provides a virtually unlimited amount of online highly durable object storage?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-28" value="B">B. Amazon Elastic File System (Amazon EFS).</li>
      <li><input type="checkbox" name="question-28" value="C">C. Amazon Elastic Container Service (Amazon ECS).</li>
      <li><input type="checkbox" name="question-28" value="D">D. Amazon S3.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which AWS feature should a customer leverage to achieve high availability of an application?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. AWS Direct Connect.</li>
      <li><input type="checkbox" name="question-29" value="B">B. Availability Zones.</li>
      <li><input type="checkbox" name="question-29" value="C">C. Data centers.</li>
      <li><input type="checkbox" name="question-29" value="D">D. Amazon Virtual Private Cloud (Amazon VPC).</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. AWS WAF.</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS Direct Connect.</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS Organizations.</li>
      <li><input type="checkbox" name="question-30" value="E">E. Network ACLs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  </li>
  <li>Which of the following is a cloud architectural design principle?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Scale up not out.</li>
      <li><input type="checkbox" name="question-31" value="B">B. Loosely couple components.</li>
      <li><input type="checkbox" name="question-31" value="C">C. Build monolithic systems.</li>
      <li><input type="checkbox" name="question-31" value="D">D. Use commercial database software.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Amazon CloudWatch.</li>
      <li><input type="checkbox" name="question-32" value="B">B. AWS CloudTrail.</li>
      <li><input type="checkbox" name="question-32" value="C">C. AWS Config.</li>
      <li><input type="checkbox" name="question-32" value="D">D. AWS Health.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Where can AWS compliance and certification reports be downloaded?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. AWS Artifact.</li>
      <li><input type="checkbox" name="question-33" value="B">B. AWS Concierge.</li>
      <li><input type="checkbox" name="question-33" value="C">C. AWS Certificate Manager.</li>
      <li><input type="checkbox" name="question-33" value="D">D. AWS Trusted Advisor.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>The financial benefits of using AWS are: (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Reduced Total Cost of Ownership (TCO).</li>
      <li><input type="checkbox" name="question-34" value="B">B. Increased capital expenditure (capex).</li>
      <li><input type="checkbox" name="question-34" value="C">C. Reduced operational expenditure ( opex ).</li>
      <li><input type="checkbox" name="question-34" value="D">D. Deferred payment plans for startups.</li>
      <li><input type="checkbox" name="question-34" value="E">E. Business credit lines for startups.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>Which AWS service can serve a static website?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Amazon S3.</li>
      <li><input type="checkbox" name="question-35" value="B">B. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-35" value="C">C. Amazon QuickSight.</li>
      <li><input type="checkbox" name="question-35" value="D">D. AWS X-Ray.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. Companies can deploy applications in multiple AWS Regions to reduce latency.</li>
      <li><input type="checkbox" name="question-36" value="B">B. Amazon Translate automatically translates third-party website interfaces into multiple languages.</li>
      <li><input type="checkbox" name="question-36" value="C">C. Amazon CloudFront has multiple edge locations around the world to reduce latency.</li>
      <li><input type="checkbox" name="question-36" value="D">D. Amazon Comprehend allows users to build applications that can respond to user requests in many languages.</li>
      <li><input type="checkbox" name="question-36" value="E">E. Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>Which of the following are main components of the AWS global infrastructure? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Resource groups.</li>
      <li><input type="checkbox" name="question-37" value="B">B. Availability Zones.</li>
      <li><input type="checkbox" name="question-37" value="C">C. Security groups.</li>
      <li><input type="checkbox" name="question-37" value="D">D. Regions.</li>
      <li><input type="checkbox" name="question-37" value="E">E. Amazon Machine Images (AMIS).</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>What is the AWS customer responsible for according to the AWS shared responsibility model?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Physical access controls.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Data encryption.</li>
      <li><input type="checkbox" name="question-38" value="C">C. Secure disposal of storage devices.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Environmental risk management.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>If each department within a company has its own AWS account, what is one way to enable consolidated billing?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Use AWS Budgets on each account to pay only to budget.</li>
      <li><input type="checkbox" name="question-39" value="B">B. Contact AWS Support for a monthly bill.</li>
      <li><input type="checkbox" name="question-39" value="C">C. Create an AWS Organization from the payer account and invite the other accounts to join.</li>
      <li><input type="checkbox" name="question-39" value="D">D. Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Project management.</li>
      <li><input type="checkbox" name="question-40" value="B">B. Antivirus software licensing.</li>
      <li><input type="checkbox" name="question-40" value="C">C. Data center security.</li>
      <li><input type="checkbox" name="question-40" value="D">D. Software development.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. They require the customer to monitor and replace failing instances.</li>
      <li><input type="checkbox" name="question-41" value="B">B. They have better performance than customer-managed services.</li>
      <li><input type="checkbox" name="question-41" value="C">C. They simplify patching and updating underlying OSs.</li>
      <li><input type="checkbox" name="question-41" value="D">D. They do not require the customer to optimize instance type or size selections.</li>
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
  <li>Which services can be used across hybrid AWS Cloud architectures? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-42" value="B">B. Virtual Private Gateway.</li>
      <li><input type="checkbox" name="question-42" value="C">C. Classic Load Balancer.</li>
      <li><input type="checkbox" name="question-42" value="D">D. Auto Scaling.</li>
      <li><input type="checkbox" name="question-42" value="E">E. Amazon CloudWatch default metrics.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, B</p>
    </details>
  </li>
  <li>Which statement best describes Elastic Load Balancing?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. It translates a domain name into an IP address using DNC.</li>
      <li><input type="checkbox" name="question-43" value="B">B. It distributes incoming application traffic across one or more Amazon EC2 instances.</li>
      <li><input type="checkbox" name="question-43" value="C">C. It collects metrics on connected Amazon EC2 instances.</li>
      <li><input type="checkbox" name="question-43" value="D">D. It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following is a fast and reliable NoSQL database service?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-44" value="B">B. Amazon RDS.</li>
      <li><input type="checkbox" name="question-44" value="C">C. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-44" value="D">D. Amazon S3.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which AWS service would you use to obtain compliance reports and certificates?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. AWS Artifact.</li>
      <li><input type="checkbox" name="question-45" value="B">B. AWS Lambda.</li>
      <li><input type="checkbox" name="question-45" value="C">C. Amazon Inspector.</li>
      <li><input type="checkbox" name="question-45" value="D">D. AWS Certificate Manager.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which AWS services are defined as global instead of regional? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-46" value="B">B. Amazon EC2.</li>
      <li><input type="checkbox" name="question-46" value="C">C. Amazon S3.</li>
      <li><input type="checkbox" name="question-46" value="D">D. Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-46" value="E">E. Amazon DynamoDB.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>How would an AWS customer easily apply common access controls to a large set of users?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Apply an IAM policy to an IAM group.</li>
      <li><input type="checkbox" name="question-47" value="B">B. Apply an IAM policy to an IAM role.</li>
      <li><input type="checkbox" name="question-47" value="C">C. Apply the same IAM policy to all IAM users with access to the same workload.</li>
      <li><input type="checkbox" name="question-47" value="D">D. Apply an IAM policy to an Amazon Cognito user pool.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following is an important architectural design principle when designing cloud applications?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Use multiple Availability Zones.</li>
      <li><input type="checkbox" name="question-48" value="B">B. Use tightly coupled components.</li>
      <li><input type="checkbox" name="question-48" value="C">C. Use open source software.</li>
      <li><input type="checkbox" name="question-48" value="D">D. Provision extra capacity.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. AWS Server Migration Service.</li>
      <li><input type="checkbox" name="question-49" value="B">B. AWS Organizations.</li>
      <li><input type="checkbox" name="question-49" value="C">C. AWS Budgets.</li>
      <li><input type="checkbox" name="question-49" value="D">D. AWS Trusted Advisor.</li>
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