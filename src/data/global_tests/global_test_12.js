export default [
  {
    id: 12,
    title: "Exam 12",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Availability Zone</li>
      <li><input type="checkbox" name="question-0" value="B">B. Edge location</li>
      <li><input type="checkbox" name="question-0" value="C">C. Region</li>
      <li><input type="checkbox" name="question-0" value="D">D. Private networking</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. The ability to bid for a lower hourly cost.</li>
      <li><input type="checkbox" name="question-1" value="B">B. Paying a daily rate regardless of time used.</li>
      <li><input type="checkbox" name="question-1" value="C">C. Paying only for time used.</li>
      <li><input type="checkbox" name="question-1" value="D">D. Pre-paying for instances and paying a lower hourly rate.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>What can assist in evaluating an application for migration to the cloud? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. AWS Trusted Advisor.</li>
      <li><input type="checkbox" name="question-2" value="B">B. AWS Professional Services.</li>
      <li><input type="checkbox" name="question-2" value="C">C. AWS Systems Manager.</li>
      <li><input type="checkbox" name="question-2" value="D">D. AWS Partner Network (APN).</li>
      <li><input type="checkbox" name="question-2" value="E">E. AWS Secrets Manager.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>A characteristic of edge locations is that they:
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. Host Amazon EC2 instances closer to users.</li>
      <li><input type="checkbox" name="question-3" value="B">B. Help lower latency and improve performance for users.</li>
      <li><input type="checkbox" name="question-3" value="C">C. Cache frequently changing data without reaching the origin server.</li>
      <li><input type="checkbox" name="question-3" value="D">D. Refresh data changes daily.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Command line interface.</li>
      <li><input type="checkbox" name="question-4" value="B">B. On-premises.</li>
      <li><input type="checkbox" name="question-4" value="C">C. Software Development Kits.</li>
      <li><input type="checkbox" name="question-4" value="D">D. Software-as-a-service.</li>
      <li><input type="checkbox" name="question-4" value="E">E. Hybrid.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  </li>
  <li>What is a value proposition of the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. AWS is responsible for security in the AWS Cloud.</li>
      <li><input type="checkbox" name="question-5" value="B">B. No long-term contract is required.</li>
      <li><input type="checkbox" name="question-5" value="C">C. Provision new servers in days.</li>
      <li><input type="checkbox" name="question-5" value="D">D. AWS manages user applications in the AWS Cloud.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Amazon EC2 Spot Instances.</li>
      <li><input type="checkbox" name="question-6" value="B">B. Amazon EC2 Dedicated Instances.</li>
      <li><input type="checkbox" name="question-6" value="C">C. Amazon EC2 On-Demand Instances.</li>
      <li><input type="checkbox" name="question-6" value="D">D. Amazon EC2 Reserved Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which AWS service is used to track record, and audit configuration changes made to AWS resources?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. AWS Shield.</li>
      <li><input type="checkbox" name="question-7" value="B">B. AWS Config.</li>
      <li><input type="checkbox" name="question-7" value="C">C. AWS IAM.</li>
      <li><input type="checkbox" name="question-7" value="D">D. Amazon Inspector.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Fault tolerance.</li>
      <li><input type="checkbox" name="question-8" value="B">B. Global reach.</li>
      <li><input type="checkbox" name="question-8" value="C">C. Pay-as-you-go pricing.</li>
      <li><input type="checkbox" name="question-8" value="D">D. High availability.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>How can one AWS account use Reserved Instances from another AWS account?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. By using Amazon EC2 Dedicated Instances.</li>
      <li><input type="checkbox" name="question-9" value="B">B. By using AWS Organizations consolidated billing.</li>
      <li><input type="checkbox" name="question-9" value="C">C. By using the AWS Cost Explorer tool.</li>
      <li><input type="checkbox" name="question-9" value="D">D. By using AWS Budgets.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. AWS automatically distributes the data globally for higher durability.</li>
      <li><input type="checkbox" name="question-10" value="B">B. AWS will take care of operating the application.</li>
      <li><input type="checkbox" name="question-10" value="C">C. AWS makes it easy to architect for high availability.</li>
      <li><input type="checkbox" name="question-10" value="D">D. AWS can easily accommodate application demand changes.</li>
      <li><input type="checkbox" name="question-10" value="E">E. AWS takes care of application security patching.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  </li>
  <li>Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Amazon RDS.</li>
      <li><input type="checkbox" name="question-11" value="B">B. Amazon EC2.</li>
      <li><input type="checkbox" name="question-11" value="C">C. Amazon ElastiCache.</li>
      <li><input type="checkbox" name="question-11" value="D">D. AWS Fargate.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Implementing Amazon Rekognition.</li>
      <li><input type="checkbox" name="question-12" value="B">B. Using AWS Shield-protected resources.</li>
      <li><input type="checkbox" name="question-12" value="C">C. Blocking access with Security Groups.</li>
      <li><input type="checkbox" name="question-12" value="D">D. Using Multi-Factor Authentication (MFA).</li>
      <li><input type="checkbox" name="question-12" value="E">E. Enforcing password strength and expiration.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  </li>
  <li>Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Amazon Glacier</li>
      <li><input type="checkbox" name="question-13" value="B">B. AWS Snowball</li>
      <li><input type="checkbox" name="question-13" value="C">C. AWS Storage Gateway</li>
      <li><input type="checkbox" name="question-13" value="D">D. Amazon Elastic Block Storage (Amazon EBS)</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. AWS Marketplace.</li>
      <li><input type="checkbox" name="question-14" value="B">B. Amazon Lumberyard.</li>
      <li><input type="checkbox" name="question-14" value="C">C. AWS Artifact.</li>
      <li><input type="checkbox" name="question-14" value="D">D. Amazon CloudSearch.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following is a component of the AWS Global Infrastructure?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Amazon Alexa.</li>
      <li><input type="checkbox" name="question-15" value="B">B. AWS Regions.</li>
      <li><input type="checkbox" name="question-15" value="C">C. Amazon Lightsail.</li>
      <li><input type="checkbox" name="question-15" value="D">D. AWS Organizations.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. On-Demand Instances.</li>
      <li><input type="checkbox" name="question-16" value="B">B. Reserved Instances.</li>
      <li><input type="checkbox" name="question-16" value="C">C. Spot Instances.</li>
      <li><input type="checkbox" name="question-16" value="D">D. Convertible Reserved Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated</li>
      <li><input type="checkbox" name="question-17" value="B">B. Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC</li>
      <li><input type="checkbox" name="question-17" value="C">C. Use Amazon Athena to query data from the on-premises database servers</li>
      <li><input type="checkbox" name="question-17" value="D">D. Connect the company’s on-premises data center to AWS using AWS Direct Connect</li>
      <li><input type="checkbox" name="question-17" value="E">E. Leverage Amazon CloudFront to restrict access to static web content provided through the company’s on-premises web servers</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.</li>
      <li><input type="checkbox" name="question-18" value="B">B. Run AWS Trusted Advisor and review the findings.</li>
      <li><input type="checkbox" name="question-18" value="C">C. Open the AWS IAM console and check the inbound rule filters for open access.</li>
      <li><input type="checkbox" name="question-18" value="D">D. In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following security-related services does AWS offer? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Multi-factor authentication physical tokens.</li>
      <li><input type="checkbox" name="question-19" value="B">B. AWS Trusted Advisor security checks.</li>
      <li><input type="checkbox" name="question-19" value="C">C. Data encryption.</li>
      <li><input type="checkbox" name="question-19" value="D">D. Automated penetration testing.</li>
      <li><input type="checkbox" name="question-19" value="E">E. Amazon S3 copyrighted content detection.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. AWS WAF.</li>
      <li><input type="checkbox" name="question-20" value="B">B. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-20" value="C">C. Amazon EC2.</li>
      <li><input type="checkbox" name="question-20" value="D">D. Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-20" value="E">E. Amazon Inspector.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Amazon Elastic Block Store (Amazon EBS).</li>
      <li><input type="checkbox" name="question-21" value="B">B. Amazon Machine Image.</li>
      <li><input type="checkbox" name="question-21" value="C">C. Amazon EC2 Systems Manager.</li>
      <li><input type="checkbox" name="question-21" value="D">D. Amazon AppStream 2.0.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Think parallel.</li>
      <li><input type="checkbox" name="question-22" value="B">B. Implement elasticity.</li>
      <li><input type="checkbox" name="question-22" value="C">C. Decouple your components.</li>
      <li><input type="checkbox" name="question-22" value="D">D. Design for failure.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Easy and fast deployment of applications in multiple Regions around the world.</li>
      <li><input type="checkbox" name="question-23" value="B">B. Security of the AWS Cloud.</li>
      <li><input type="checkbox" name="question-23" value="C">C. Elasticity of the AWS Cloud.</li>
      <li><input type="checkbox" name="question-23" value="D">D. Lower variable costs due to massive economies of scale.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>What can users access from AWS Artifact?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. AWS security and compliance documents.</li>
      <li><input type="checkbox" name="question-24" value="B">B. A download of configuration management details for all AWS resources.</li>
      <li><input type="checkbox" name="question-24" value="C">C. Training materials for AWS services.</li>
      <li><input type="checkbox" name="question-24" value="D">D. A security assessment of the applications deployed in the AWS Cloud.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Compared with costs in traditional and virtualized data centers, AWS has:
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Greater variable costs and greater upfront costs.</li>
      <li><input type="checkbox" name="question-25" value="B">B. Fixed usage costs and lower upfront costs.</li>
      <li><input type="checkbox" name="question-25" value="C">C. Lower variable costs and greater upfront costs.</li>
      <li><input type="checkbox" name="question-25" value="D">D. Lower variable costs and lower upfront costs.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which AWS service would a customer use with a static website to achieve tower latency and high transfer speeds?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. AWS Lambda.</li>
      <li><input type="checkbox" name="question-26" value="B">B. Amazon DynamoDB Accelerator.</li>
      <li><input type="checkbox" name="question-26" value="C">C. Amazon Route 53.</li>
      <li><input type="checkbox" name="question-26" value="D">D. Amazon CloudFront.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. They automatically add more instances across multiple AWS Regions based on global demand of the application.</li>
      <li><input type="checkbox" name="question-27" value="B">B. They automatically add or replace instances across multiple Availability Zones when the application needs it.</li>
      <li><input type="checkbox" name="question-27" value="C">C. They enable the application’s stalk: content to reside closer to end users.</li>
      <li><input type="checkbox" name="question-27" value="D">D. They are able to distribute incoming requests across a tier of web server instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  </li>
  <li>Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. A public and private key-pair.</li>
      <li><input type="checkbox" name="question-28" value="B">B. Amazon Inspector.</li>
      <li><input type="checkbox" name="question-28" value="C">C. AWS Identity and Access Management (IAM) policies.</li>
      <li><input type="checkbox" name="question-28" value="D">D. Security Groups.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>How should a customer forecast the future costs for running a new web application?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Amazon Aurora Backtrack.</li>
      <li><input type="checkbox" name="question-29" value="B">B. Amazon CloudWatch Billing Alarms.</li>
      <li><input type="checkbox" name="question-29" value="C">C. AWS Simple Monthly Calculator.</li>
      <li><input type="checkbox" name="question-29" value="D">D. AWS Cost and Usage report.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Where are AWS compliance documents, such as an SOC 1 report, located?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. Amazon Inspector.</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS CloudTrail.</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS Artifact.</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS Certificate Manager.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Which of the following tasks is the responsibility of AWS?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Encrypting client-side data.</li>
      <li><input type="checkbox" name="question-31" value="B">B. Configuring AWS Identity and Access Management (IAM) roles.</li>
      <li><input type="checkbox" name="question-31" value="C">C. Securing the Amazon EC2 hypervisor.</li>
      <li><input type="checkbox" name="question-31" value="D">D. Setting user password policies.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  </li>
  <li>Under the shared responsibility model which of the following areas are the customer’s responsibility? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Firmware upgrades of network infrastructure.</li>
      <li><input type="checkbox" name="question-32" value="B">B. Patching of operating systems.</li>
      <li><input type="checkbox" name="question-32" value="C">C. Patching of the underlying hypervisor.</li>
      <li><input type="checkbox" name="question-32" value="D">D. Physical security of data centers.</li>
      <li><input type="checkbox" name="question-32" value="E">E. Configuration of the security group.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  </li>
  <li>A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Amazon Simple Storage Service (Amazon S3).</li>
      <li><input type="checkbox" name="question-33" value="B">B. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-33" value="C">C. Amazon Kinesis.</li>
      <li><input type="checkbox" name="question-33" value="D">D. Amazon Redshift.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Amazon EBS.</li>
      <li><input type="checkbox" name="question-34" value="B">B. AWS Direct Connect.</li>
      <li><input type="checkbox" name="question-34" value="C">C. Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-34" value="D">D. AWS Storage Gateway.</li>
      <li><input type="checkbox" name="question-34" value="E">E. Amazon Connect.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  </li>
  <li>What are the advantages of the AWS Cloud (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Fixed rate monthly cost.</li>
      <li><input type="checkbox" name="question-35" value="B">B. No need to guess capacity requirements.</li>
      <li><input type="checkbox" name="question-35" value="C">C. Increased speed to market.</li>
      <li><input type="checkbox" name="question-35" value="D">D. Increased upfront capital expenditure.</li>
      <li><input type="checkbox" name="question-35" value="E">E. Physical access to cloud data centers.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. Users do not have to wait for infrastructure provisioning.</li>
      <li><input type="checkbox" name="question-36" value="B">B. The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.</li>
      <li><input type="checkbox" name="question-36" value="C">C. AWS takes over application configuration management on behalf of users.</li>
      <li><input type="checkbox" name="question-36" value="D">D. Users do not need to address security and compliance issues.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  </li>
  <li>Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. AWS Elastic Beanstalk.</li>
      <li><input type="checkbox" name="question-37" value="B">B. AWS OpsWorks.</li>
      <li><input type="checkbox" name="question-37" value="C">C. AWS CodeDeploy.</li>
      <li><input type="checkbox" name="question-37" value="D">D. AWS Batch.</li>
      <li><input type="checkbox" name="question-37" value="E">E. AWS X-Ray.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  </li>
  <li>What is an example of agility in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Access to multiple instance types.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Access to managed services.</li>
      <li><input type="checkbox" name="question-38" value="C">C. Using Consolidated Billing to produce one bill.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Decreased acquisition time for new compute resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Amazon Inspector.</li>
      <li><input type="checkbox" name="question-39" value="B">B. AWS Web Application Firewall (AWS WAF).</li>
      <li><input type="checkbox" name="question-39" value="C">C. Elastic Load Balancing (ELB).</li>
      <li><input type="checkbox" name="question-39" value="D">D. AWS Shield.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
  <li>Which of the following are advantages of AWS consolidated billing? (Choose two)
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. The ability to receive one bill for multiple accounts.</li>
      <li><input type="checkbox" name="question-40" value="B">B. Service limits increasing by default in all accounts.</li>
      <li><input type="checkbox" name="question-40" value="C">C. A fixed discount on the monthly bill.</li>
      <li><input type="checkbox" name="question-40" value="D">D. Potential volume discounts, as usage in all accounts is combined.</li>
      <li><input type="checkbox" name="question-40" value="E">E. The automatic extension of the master account’s AWS support plan to all accounts.</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  </li>
  <li>A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Amazon Redshift.</li>
      <li><input type="checkbox" name="question-41" value="B">B. Amazon DynamoDB.</li>
      <li><input type="checkbox" name="question-41" value="C">C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.</li>
      <li><input type="checkbox" name="question-41" value="D">D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS).</li>
    </ul>

    <details>
      <summary>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  </li>
</ol>
      `,
    data: []
  },
];