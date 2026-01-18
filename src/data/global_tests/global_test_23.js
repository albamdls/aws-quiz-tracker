export default [
  {
    id: 23,
    title: "Practice Exam 23",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>A user is planning to migrate an application workload to the AWS Cloud. <br> Which control becomes the responsibility of AWS once the migration is complete?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Patching the guest operating system</li>
      <li><input type="checkbox" name="question-0" value="B">B. Maintaining physical and environmental controls</li>
      <li><input type="checkbox" name="question-0" value="C">C. Protecting communications and maintaining zone security</li>
      <li><input type="checkbox" name="question-0" value="D">D. Patching specific applications</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which services can be used to deploy applications on AWS? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. AWS Elastic Beanstalk</li>
      <li><input type="checkbox" name="question-1" value="B">B. AWS Config</li>
      <li><input type="checkbox" name="question-1" value="C">C. AWS OpsWorks</li>
      <li><input type="checkbox" name="question-1" value="D">D. AWS Application Discovery Service</li>
      <li><input type="checkbox" name="question-1" value="E">E. Amazon Kinesis</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation: <a href="https://d0.awsstatic.com/whitepapers/overview-of-deployment-options-on-aws.pdf">https://d0.awsstatic.com/whitepapers/overview-of-deployment-options-on-aws.pdf</a></p>

    </details>
  </li>
  <li>Which AWS service can be used to provide an on-demand, cloud-based contact center?
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-2" value="B">B. Amazon Connect</li>
      <li><input type="checkbox" name="question-2" value="C">C. AWS Support Center</li>
      <li><input type="checkbox" name="question-2" value="D">D. AWS Managed Services</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/connect/customers/">https://aws.amazon.com/connect/customers/</a></p>

    </details>
  </li>
  <li>What tool enables customers without an AWS account to estimate costs for almost all AWS services?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. Cost Explorer</li>
      <li><input type="checkbox" name="question-3" value="B">B. TCO Calculator</li>
      <li><input type="checkbox" name="question-3" value="C">C. AWS Budgets</li>
      <li><input type="checkbox" name="question-3" value="D">D. AWS Pricing Calculator</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://calculator.aws/#/">https://calculator.aws/#/</a></p>

    </details>
  </li>
  <li>Which component must be attached to a VPC to enable inbound Internet access?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. NAT gateway</li>
      <li><input type="checkbox" name="question-4" value="B">B. VPC endpoint</li>
      <li><input type="checkbox" name="question-4" value="C">C. VPN connection</li>
      <li><input type="checkbox" name="question-4" value="D">D. Internet gateway</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf">https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf</a></p>

    </details>
  </li>
  <li>Which pricing model would result in maximum Amazon Elastic Compute Cloud (Amazon EC2) savings for a database server that must be online for one year?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. Spot Instance</li>
      <li><input type="checkbox" name="question-5" value="B">B. On-Demand Instance</li>
      <li><input type="checkbox" name="question-5" value="C">C. Partial Upfront Reserved Instance</li>
      <li><input type="checkbox" name="question-5" value="D">D. No Upfront Reserved Instance</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html</a></p>

    </details>
  </li>
  <li>A company has a MySQL database running on a single Amazon EC2 instance. The company now requires higher availability in the event of an outage. <br> Which set of tasks would meet this requirement?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Add an Application Load Balancer in front of the EC2 instance</li>
      <li><input type="checkbox" name="question-6" value="B">B. Configure EC2 Auto Recovery to move the instance to another Availability Zone</li>
      <li><input type="checkbox" name="question-6" value="C">C. Migrate to Amazon RDS and enable Multi-AZ</li>
      <li><input type="checkbox" name="question-6" value="D">D. Enable termination protection for the EC2 instance to avoid outages</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html</a></p>

    </details>
  </li>
  <li>A company wants to ensure that AWS Management Console users are meeting password complexity requirements. <br> How can the company configure password complexity?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Using an AWS IAM user policy</li>
      <li><input type="checkbox" name="question-7" value="B">B. Using an AWS Organizations service control policy (SCP)</li>
      <li><input type="checkbox" name="question-7" value="C">C. Using an AWS IAM account password policy</li>
      <li><input type="checkbox" name="question-7" value="D">D. Using an AWS Security Hub managed insight</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html</a></p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, which of the following is the customer’s responsibility?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Patching guest OS and applications</li>
      <li><input type="checkbox" name="question-8" value="B">B. Patching and fixing flaws in the infrastructure</li>
      <li><input type="checkbox" name="question-8" value="C">C. Physical and environmental controls</li>
      <li><input type="checkbox" name="question-8" value="D">D. Configuration of AWS infrastructure devices</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>Which of the following tasks is required to deploy a PCI-compliant workload on AWS?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. Use any AWS service and implement PCI controls at the application layer</li>
      <li><input type="checkbox" name="question-9" value="B">B. Use an AWS service that is in-scope for PCI compliance and raise an AWS support ticket to enable PCI compliance at the application layer</li>
      <li><input type="checkbox" name="question-9" value="C">C. Use any AWS service and raise an AWS support ticket to enable PCI compliance on that service</li>
      <li><input type="checkbox" name="question-9" value="D">D. Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-pci-controls.html">https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-pci-controls.html</a></p>

    </details>
  </li>
  <li>A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. <br> Which AWS service should the company use?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. AWS Step Functions</li>
      <li><input type="checkbox" name="question-10" value="B">B. Amazon Simple Notification Service (Amazon SNS)</li>
      <li><input type="checkbox" name="question-10" value="C">C. Amazon Kinesis Data Streams</li>
      <li><input type="checkbox" name="question-10" value="D">D. Amazon Simple Queue Service (Amazon SQS)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/sqs/faqs/">https://aws.amazon.com/sqs/faqs/</a></p>

    </details>
  </li>
  <li>AnyCompany recently purchased Example Corp. Both companies use AWS resources, and AnyCompany wants a single aggregated bill.  <br> Which option allows AnyCompany to receive a single bill?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Example Corp. must submit a request to its AWS solutions architect or AWS technical account manager to link the accounts and consolidate billing.</li>
      <li><input type="checkbox" name="question-11" value="B">B. AnyCompany must create a new support case in the AWS Support Center requesting that both bills be combined.</li>
      <li><input type="checkbox" name="question-11" value="C">C. Send an invitation to join the organization from AnyCompany’s AWS Organizations master account to Example Corp.</li>
      <li><input type="checkbox" name="question-11" value="D">D. Migrate the Example Corp. VPCs, Amazon EC2 instances, and other resources into the AnyCompany AWS account.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/awsaccountbilling-aboutv2.pdf">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/awsaccountbilling-aboutv2.pdf</a></p>

    </details>
  </li>
  <li>Which tool can be used to create alerts when the actual or forecasted cost of AWS services exceeds a certain threshold?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Cost Explorer</li>
      <li><input type="checkbox" name="question-12" value="B">B. AWS Budgets</li>
      <li><input type="checkbox" name="question-12" value="C">C. AWS Cost and Usage Report</li>
      <li><input type="checkbox" name="question-12" value="D">D. AWS CloudTrail</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/">https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/</a></p>

    </details>
  </li>
  <li>A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. <br> Which service should be used to deploy the application?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. AWS CloudFormation</li>
      <li><input type="checkbox" name="question-13" value="B">B. AWS Elastic Beanstalk</li>
      <li><input type="checkbox" name="question-13" value="C">C. Amazon EC2</li>
      <li><input type="checkbox" name="question-13" value="D">D. AWS OpsWorks</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/elasticbeanstalk/">https://aws.amazon.com/elasticbeanstalk/</a></p>

    </details>
  </li>
  <li>Which AWS Trusted Advisor check is available to all AWS users?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. Core checks</li>
      <li><input type="checkbox" name="question-14" value="B">B. All checks</li>
      <li><input type="checkbox" name="question-14" value="C">C. Cost optimization checks</li>
      <li><input type="checkbox" name="question-14" value="D">D. Fault tolerance checks</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://www.amazonaws.cn/en/support/trustedadvisor/faq/#checks">https://www.amazonaws.cn/en/support/trustedadvisor/faq/#checks</a></p>

    </details>
  </li>
  <li>A web developer is concerned that a DDoS attack could target an application. <br> Which AWS services or features can help protect against such an attack? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. AWS Shield</li>
      <li><input type="checkbox" name="question-15" value="B">B. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-15" value="C">C. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-15" value="D">D. AWS Support Center</li>
      <li><input type="checkbox" name="question-15" value="E">E. AWS Service Health Dashboard</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation: <a href="https://aws.amazon.com/shield/">https://aws.amazon.com/shield/</a></p>

    </details>
  </li>
  <li>Which AWS service gives users on-demand, self-service access to AWS compliance control reports?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-16" value="B">B. Amazon GuardDuty</li>
      <li><input type="checkbox" name="question-16" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-16" value="D">D. AWS Artifact</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/artifact">https://aws.amazon.com/artifact</a></p>

    </details>
  </li>
  <li>A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). <br> Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Create an IAM user and provide AWS Management Console access only.</li>
      <li><input type="checkbox" name="question-17" value="B">B. Create an IAM user and provide programmatic access only.</li>
      <li><input type="checkbox" name="question-17" value="C">C. Create an IAM role and provide AWS Management Console access only.</li>
      <li><input type="checkbox" name="question-17" value="D">D. Create an IAM policy with administrator access and attach it to the IAM user.</li>
      <li><input type="checkbox" name="question-17" value="E">E. Create an IAM policy with Amazon RDS access and attach it to the IAM user.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BE</p>

    </details>
  </li>
  <li>A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources. <br> Which AWS service should the company use?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-18" value="B">B. AWS Secrets Manager</li>
      <li><input type="checkbox" name="question-18" value="C">C. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-18" value="D">D. AWS Trusted Advisor</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/config/">https://aws.amazon.com/config/</a></p>

    </details>
  </li>
  <li>What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Preventing a single point of failure</li>
      <li><input type="checkbox" name="question-19" value="B">B. Reducing the operational costs of the application</li>
      <li><input type="checkbox" name="question-19" value="C">C. Allowing the application to serve cross-region users with low latency</li>
      <li><input type="checkbox" name="question-19" value="D">D. Increasing the availability of the application</li>
      <li><input type="checkbox" name="question-19" value="E">E. Increasing the load of the application</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-increase-availability.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-increase-availability.html</a></p>

    </details>
  </li>
  <li>A workload on AWS will run for the foreseeable future by using a consistent number of Amazon EC2 instances. <br> What pricing model will minimize cost while ensuring that compute resources remain available?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. Dedicated Hosts</li>
      <li><input type="checkbox" name="question-20" value="B">B. On-Demand Instances</li>
      <li><input type="checkbox" name="question-20" value="C">C. Spot Instances</li>
      <li><input type="checkbox" name="question-20" value="D">D. Reserved Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html</a></p>

    </details>
  </li>
  <li>Which tool can be used to identify scheduled changes to the AWS infrastructure?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. AWS Personal Health Dashboard</li>
      <li><input type="checkbox" name="question-21" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-21" value="C">C. Billing Dashboard</li>
      <li><input type="checkbox" name="question-21" value="D">D. AWS Config</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/">https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/</a></p>

    </details>
  </li>
  <li>Which of the following is the customer’s responsibility when using Amazon RDS?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Patching the operating system of underlying hardware</li>
      <li><input type="checkbox" name="question-22" value="B">B. Controlling traffic to and from the database through security groups</li>
      <li><input type="checkbox" name="question-22" value="C">C. Running backups that enable point-in-time recovery of a DB instance</li>
      <li><input type="checkbox" name="question-22" value="D">D. Replacing failed DB instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html</a></p>

    </details>
  </li>
  <li>What is the customer’s responsibility when using AWS Lambda?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Operating system configuration</li>
      <li><input type="checkbox" name="question-23" value="B">B. Application management</li>
      <li><input type="checkbox" name="question-23" value="C">C. Platform management</li>
      <li><input type="checkbox" name="question-23" value="D">D. Code encryption</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/lambda/security-overview-of-aws-lambda/">https://aws.amazon.com/lambda/security-overview-of-aws-lambda/</a></p>

    </details>
  </li>
  <li>A company wants to be notified when its AWS Cloud costs or usage exceed defined thresholds. <br> Which AWS service will support these requirements?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. AWS Budgets</li>
      <li><input type="checkbox" name="question-24" value="B">B. Cost Explorer</li>
      <li><input type="checkbox" name="question-24" value="C">C. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-24" value="D">D. Amazon Macie</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/aws-cost-management/aws-budgets/">https://aws.amazon.com/aws-cost-management/aws-budgets/</a></p>

    </details>
  </li>
  <li>Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Amazon Aurora</li>
      <li><input type="checkbox" name="question-25" value="B">B. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-25" value="C">C. Amazon RDS</li>
      <li><input type="checkbox" name="question-25" value="D">D. Amazon Redshift</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/nosql/">https://aws.amazon.com/nosql/</a></p>

    </details>
  </li>
  <li>Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. Reserved Instances</li>
      <li><input type="checkbox" name="question-26" value="B">B. On-Demand Instances</li>
      <li><input type="checkbox" name="question-26" value="C">C. Dedicated Instances</li>
      <li><input type="checkbox" name="question-26" value="D">D. Spot Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/spot/">https://aws.amazon.com/ec2/spot/</a></p>

    </details>
  </li>
  <li>Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. AWS VPN</li>
      <li><input type="checkbox" name="question-27" value="B">B. Amazon Connect</li>
      <li><input type="checkbox" name="question-27" value="C">C. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-27" value="D">D. Internet gateway</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/directconnect/partners/">https://aws.amazon.com/directconnect/partners/</a></p>

    </details>
  </li>
  <li>Which AWS services offer compute capabilities? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Amazon EC2</li>
      <li><input type="checkbox" name="question-28" value="B">B. Amazon S3</li>
      <li><input type="checkbox" name="question-28" value="C">C. Amazon Elastic Block Store (Amazon EBS)</li>
      <li><input type="checkbox" name="question-28" value="D">D. Amazon Cognito</li>
      <li><input type="checkbox" name="question-28" value="E">E. AWS Lambda</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AE</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html">https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html</a></p>

    </details>
  </li>
  <li>Which AWS service can be used to privately store and manage versions of source code?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. AWS CodeBuild</li>
      <li><input type="checkbox" name="question-29" value="B">B. AWS CodeCommit</li>
      <li><input type="checkbox" name="question-29" value="C">C. AWS CodePipeline</li>
      <li><input type="checkbox" name="question-29" value="D">D. AWS CodeStar</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html</a></p>

    </details>
  </li>
  <li>Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. AWS Secrets Manager</li>
      <li><input type="checkbox" name="question-30" value="B">B. Amazon Cognito</li>
      <li><input type="checkbox" name="question-30" value="C">C. Amazon Macie</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS Trusted Advisor</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://www.coalfire.com/the-coalfire-blog/march-2019/aws-trusted-advisor-for-security-compliance">https://www.coalfire.com/the-coalfire-blog/march-2019/aws-trusted-advisor-for-security-compliance</a></p>

    </details>
  </li>
  <li>A company wants to ensure its infrastructure is designed for fault tolerance and business continuity in the event of an environmental disruption. <br> Which AWS infrastructure component should the company replicate across?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Edge locations</li>
      <li><input type="checkbox" name="question-31" value="B">B. Availability Zones</li>
      <li><input type="checkbox" name="question-31" value="C">C. Regions</li>
      <li><input type="checkbox" name="question-31" value="D">D. Amazon Route 53</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://d36cz9buwru1tt.cloudfront.net/AWS_Building_Fault_Tolerant_Applications.pdf">https://d36cz9buwru1tt.cloudfront.net/AWS_Building_Fault_Tolerant_Applications.pdf</a></p>

    </details>
  </li>
  <li>Which AWS service or feature is used to send both text and email messages from distributed applications?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Amazon Simple Notification Service (Amazon SNS)</li>
      <li><input type="checkbox" name="question-32" value="B">B. Amazon Simple Email Service (Amazon SES)</li>
      <li><input type="checkbox" name="question-32" value="C">C. Amazon CloudWatch alerts</li>
      <li><input type="checkbox" name="question-32" value="D">D. Amazon Simple Queue Service (Amazon SQS)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/sns/faqs/">https://aws.amazon.com/sns/faqs/</a></p>

    </details>
  </li>
  <li>Which AWS Cloud design principles can help increase reliability? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Using monolithic architecture</li>
      <li><input type="checkbox" name="question-33" value="B">B. Measuring overall efficiency</li>
      <li><input type="checkbox" name="question-33" value="C">C. Testing recovery procedures</li>
      <li><input type="checkbox" name="question-33" value="D">D. Adopting a consumption model</li>
      <li><input type="checkbox" name="question-33" value="E">E. Automatically recovering from failure</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CE</p>

      <p>Explanation: <a href="https://wa.aws.amazon.com/wat.pillar.reliability.en.html">https://wa.aws.amazon.com/wat.pillar.reliability.en.html</a></p>

    </details>
  </li>
  <li>A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base. <br> Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Application Load Balancer</li>
      <li><input type="checkbox" name="question-34" value="B">B. AWS Global Accelerator</li>
      <li><input type="checkbox" name="question-34" value="C">C. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-34" value="D">D. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-34" value="E">E. AWS Lambda</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation: <a href="https://aws.amazon.com/cloudfront/faqs/">https://aws.amazon.com/cloudfront/faqs/</a></p>

    </details>
  </li>
  <li>A company wants to connect to AWS over a private, low-latency connection from its remote office. <br> What is the recommended method to meet these requirements?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Create a VPN tunnel</li>
      <li><input type="checkbox" name="question-35" value="B">B. Connect across the public internet</li>
      <li><input type="checkbox" name="question-35" value="C">C. Use VPC peering to create a connection.</li>
      <li><input type="checkbox" name="question-35" value="D">D. Use AWS Direct Connect.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/getting-started/projects/connect-data-center-to-aws/">https://aws.amazon.com/getting-started/projects/connect-data-center-to-aws/</a></p>

    </details>
  </li>
  <li>Which AWS service can be used to retrieve compliance reports on demand?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. AWS Secrets Manager</li>
      <li><input type="checkbox" name="question-36" value="B">B. AWS Artifact</li>
      <li><input type="checkbox" name="question-36" value="C">C. AWS Security Hub</li>
      <li><input type="checkbox" name="question-36" value="D">D. AWS Certificate Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/artifact/">https://aws.amazon.com/artifact/</a></p>

    </details>
  </li>
  <li>A company has an AWS-hosted website located behind an Application Load Balancer. The company wants to safeguard the website from SQL injection or cross-site scripting. <br> Which AWS service should the company use?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Amazon GuardDuty</li>
      <li><input type="checkbox" name="question-37" value="B">B. AWS WAF</li>
      <li><input type="checkbox" name="question-37" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-37" value="D">D. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/waf/faq/">https://aws.amazon.com/waf/faq/</a></p>

    </details>
  </li>
  <li>How should a web application be deployed to ensure high availability in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Deploy multiple instances of the application in multiple Availability Zones.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Deploy multiple instances of the application in a single Availability Zone.</li>
      <li><input type="checkbox" name="question-38" value="C">C. Deploy the application to a compute-optimized Amazon EC2 instance in a single Availability Zone.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Deploy the application in one Amazon EC2 instance in an Auto Scaling group.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://www.betsol.com/blog/how-to-make-high-availability-web-applications-on-amazon-web-services/">https://www.betsol.com/blog/how-to-make-high-availability-web-applications-on-amazon-web-services/</a></p>

    </details>
  </li>
  <li>A company is running a self-managed Oracle database directly on Amazon EC2 for its steady-state database. The company wants to reduce compute costs. <br> Which option should the company use to maximize savings over a 3-year term?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. EC2 Dedicated Instances</li>
      <li><input type="checkbox" name="question-39" value="B">B. EC2 Spot Instances</li>
      <li><input type="checkbox" name="question-39" value="C">C. EC2 Reserved Instances</li>
      <li><input type="checkbox" name="question-39" value="D">D. EC2 On-Demand Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/choosing-a-cloud-platform/">https://aws.amazon.com/choosing-a-cloud-platform/</a></p>

    </details>
  </li>
  <li>An external auditor has requested that a company provide a list of all its IAM users, including the status of users’ credentials and access keys. <br> What it the SIMPLEST way to provide this information?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Create an IAM user account for the auditor, granting the auditor administrator permissions.</li>
      <li><input type="checkbox" name="question-40" value="B">B. Take a screenshot of each user’s page in the AWS Management Console, then provide the screenshots to the auditor.</li>
      <li><input type="checkbox" name="question-40" value="C">C. Download the IAM credential report, then provide the report to the auditor.</li>
      <li><input type="checkbox" name="question-40" value="D">D. Download the AWS Trusted Advisor report, then provide the report to the auditor.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html</a></p>

    </details>
  </li>
  <li>What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Volume discounts</li>
      <li><input type="checkbox" name="question-41" value="B">B. A minimal additional fee for use</li>
      <li><input type="checkbox" name="question-41" value="C">C. One bill for multiple accounts</li>
      <li><input type="checkbox" name="question-41" value="D">D. Installment payment options</li>
      <li><input type="checkbox" name="question-41" value="E">E. Custom cost and usage budget creation</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></p>

    </details>
  </li>
  <li>A company is expecting a short-term spike in internet traffic for its application. During the traffic increase, the application cannot be interrupted. The company also needs to minimize cost and maximize flexibility. <br> Which Amazon EC2 instance type should the company use to meet these requirements?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. On-Demand Instances</li>
      <li><input type="checkbox" name="question-42" value="B">B. Spot Instances</li>
      <li><input type="checkbox" name="question-42" value="C">C. Reserved Instances</li>
      <li><input type="checkbox" name="question-42" value="D">D. Dedicated Hosts</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/faqs/">https://aws.amazon.com/ec2/faqs/</a></p>

    </details>
  </li>
  <li>A company wants to track AWS resource configuration changes for compliance reasons. <br> Which AWS feature can be used to meet this requirement?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. AWS Cost and Usage Report</li>
      <li><input type="checkbox" name="question-43" value="B">B. AWS Organizations service control policies (SCPs)</li>
      <li><input type="checkbox" name="question-43" value="C">C. AWS Config rules</li>
      <li><input type="checkbox" name="question-43" value="D">D. VPC Flow Logs</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/config/">https://aws.amazon.com/config/</a></p>

    </details>
  </li>
  <li>A company is building an application that needs to deliver images and videos globally with minimal latency. <br> Which approach can the company use to accomplish this in a cost effective manner?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Deliver the content through Amazon CloudFront.</li>
      <li><input type="checkbox" name="question-44" value="B">B. Store the content on Amazon S3 and enable S3 cross-region replication.</li>
      <li><input type="checkbox" name="question-44" value="C">C. Implement a VPN across multiple AWS Regions.</li>
      <li><input type="checkbox" name="question-44" value="D">D. Deliver the content through AWS PrivateLink.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/industries/how-to-build-a-global-scalable-low-latency-and-secure-machine-learning-medical-imaging-analysis-platform-on-aws/">https://aws.amazon.com/blogs/industries/how-to-build-a-global-scalable-low-latency-and-secure-machine-learning-medical-imaging-analysis-platform-on-aws/</a></p>

    </details>
  </li>
  <li>The AWS IAM best practice for granting least privilege is to:
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. apply an IAM policy to an IAM group and limit the size of the group.</li>
      <li><input type="checkbox" name="question-45" value="B">B. require multi-factor authentication (MFA) for all IAM users.</li>
      <li><input type="checkbox" name="question-45" value="C">C. require each IAM user who has different permissions to have multiple passwords.</li>
      <li><input type="checkbox" name="question-45" value="D">D. apply an IAM policy only to IAM users who require it.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://kirkpatrickprice.com/blog/best-practices-for-privilege-management-in-aws/">https://kirkpatrickprice.com/blog/best-practices-for-privilege-management-in-aws/</a></p>

    </details>
  </li>
  <li>Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Pay-as-you-go pricing</li>
      <li><input type="checkbox" name="question-46" value="B">B. High availability</li>
      <li><input type="checkbox" name="question-46" value="C">C. Global reach</li>
      <li><input type="checkbox" name="question-46" value="D">D. Economies of scale</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://innovationtactics.com/amazon-business-model-amazon-web-services/">https://innovationtactics.com/amazon-business-model-amazon-web-services/</a></p>

    </details>
  </li>
  <li>A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in a various AWS accounts that it wants to interconnect. <br> Which AWS service or feature should the company use to help simplify management and reduce operational costs?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. VPC endpoint</li>
      <li><input type="checkbox" name="question-47" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-47" value="C">C. AWS Transit Gateway</li>
      <li><input type="checkbox" name="question-47" value="D">D. VPC peering</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf">https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf</a></p>

    </details>
  </li>
  <li>How can AWS enable a company to control expenses as an application’s usage changes unpredictably?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. AWS will refund the cost difference if a customer moves to larger servers.</li>
      <li><input type="checkbox" name="question-48" value="B">B. The application can be built to scale up or down automatically as resources are needed</li>
      <li><input type="checkbox" name="question-48" value="C">C. Spot instances will automatically be used if the price is lower than on-demand instances.</li>
      <li><input type="checkbox" name="question-48" value="D">D. Amazon CloudWatch will automatically predict what resources are needed.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which AWS service or feature can be used to prevent SQL injection attacks?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Security groups</li>
      <li><input type="checkbox" name="question-49" value="B">B. Network ACLs</li>
      <li><input type="checkbox" name="question-49" value="C">C. AWS WAF</li>
      <li><input type="checkbox" name="question-49" value="D">D. IAM policy</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:
<a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-web-acl-sql-conditions.html">https://docs.aws.amazon.com/waf/latest/developerguide/classic-web-acl-sql-conditions.html</a></p>

    </details>
  </li>
</ol>
      `,
    data: []
  },
];