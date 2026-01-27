export default [
  {
    id: 19,
    title: "Exam 19",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-0" value="B">B. AWS OpsWorks</li>
      <li><input type="checkbox" name="question-0" value="C">C. AWS SDK</li>
      <li><input type="checkbox" name="question-0" value="D">D. AWS Marketplace</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/mp/">https://aws.amazon.com/mp/</a></p>

    </details>
  </li>
  <li>Which AWS networking service enables a company to create a virtual network within AWS?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-1" value="B">B. Amazon Route 53</li>
      <li><input type="checkbox" name="question-1" value="C">C. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-1" value="D">D. Amazon Virtual Private Cloud (Amazon VPC.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/vpc/">https://aws.amazon.com/vpc/</a></p>

    </details>
  </li>
  <li>Which of the following is AWS’s responsibility under the AWS shared responsibility model?
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Configuring third-party applications</li>
      <li><input type="checkbox" name="question-2" value="B">B. Maintaining physical hardware</li>
      <li><input type="checkbox" name="question-2" value="C">C. Securing application access and data</li>
      <li><input type="checkbox" name="question-2" value="D">D. Managing custom Amazon Machine Images (AMIs)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. AWS Regions</li>
      <li><input type="checkbox" name="question-3" value="B">B. AWS edge locations</li>
      <li><input type="checkbox" name="question-3" value="C">C. AWS Availability Zones</li>
      <li><input type="checkbox" name="question-3" value="D">D. Amazon Virtual Private Cloud (Amazon VPC.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/cloudfront/">https://aws.amazon.com/cloudfront/</a></p>

    </details>
  </li>
  <li>How would a system administrator add an additional layer of login security to a user’s AWS Management Console?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Use AWS Cloud Directory</li>
      <li><input type="checkbox" name="question-4" value="B">B. Audit AWS Identity and Access Management (IAM) roles</li>
      <li><input type="checkbox" name="question-4" value="C">C. Enable Multi-Factor Authentication</li>
      <li><input type="checkbox" name="question-4" value="D">D. Enable AWS CloudTrail</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/iam/details/mfa/">https://aws.amazon.com/iam/details/mfa/</a></p>

    </details>
  </li>
  <li>Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-5" value="B">B. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-5" value="C">C. AWS X-Ray</li>
      <li><input type="checkbox" name="question-5" value="D">D. AWS Identity and Access Management (AWS IAM)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html</a></p>

    </details>
  </li>
  <li>Which service would you use to send alerts based on Amazon CloudWatch alarms?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Amazon Simple Notification Service (Amazon SNS)</li>
      <li><input type="checkbox" name="question-6" value="B">B. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-6" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-6" value="D">D. Amazon Route 53</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html">http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html</a></p>

    </details>
  </li>
  <li>Where can a customer find information about prohibited actions on AWS infrastructure?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-7" value="B">B. AWS Identity and Access Management (IAM)</li>
      <li><input type="checkbox" name="question-7" value="C">C. AWS Billing Console</li>
      <li><input type="checkbox" name="question-7" value="D">D. AWS Acceptable Use Policy</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/aup/">https://aws.amazon.com/aup/</a></p>

    </details>
  </li>
  <li>Which of the following is an example of how moving to the AWS Cloud reduces upfront cost?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. By replacing large variable costs with lower capital investments</li>
      <li><input type="checkbox" name="question-8" value="B">B. By replacing large capital investments with lower variable costs</li>
      <li><input type="checkbox" name="question-8" value="C">C. By allowing the provisioning of compute and storage at a fixed level to meet peak demand</li>
      <li><input type="checkbox" name="question-8" value="D">D. By replacing the repeated scaling of virtual servers with a simpler fixed-scale model</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS does not require minimum spend commitments or long-term contracts.</li>
        <li>You replace large upfront expenses with low variable payments that only apply to what you use.</li>
        <li>With AWS you are not bound to multi-year agreements or complicated licensing models.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/economics/">https://aws.amazon.com/economics/</a></p>

    </details>
  </li>
  <li>When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact failures? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. AWS Auto Scaling for Amazon EC2 instances</li>
      <li><input type="checkbox" name="question-9" value="B">B. Amazon VPC subnet ACLs to check the health of a service</li>
      <li><input type="checkbox" name="question-9" value="C">C. Distributed resources across multiple Availability Zones</li>
      <li><input type="checkbox" name="question-9" value="D">D. AWS Server Migration Service (AWS SMS) to move Amazon EC2 instances into a different Region</li>
      <li><input type="checkbox" name="question-9" value="E">E. Distributed resources across multiple AWS points of presence</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf">https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf</a></p>

    </details>
  </li>
  <li>Which cloud design principle aligns with AWS Cloud best practices?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. Create fixed dependencies among application components</li>
      <li><input type="checkbox" name="question-10" value="B">B. Aggregate services on a single instance</li>
      <li><input type="checkbox" name="question-10" value="C">C. Deploy applications in a single Availability Zone</li>
      <li><input type="checkbox" name="question-10" value="D">D. Distribute the compute load across multiple resources</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Use load balancing for offloading encryption termination (TLS) to improve performance and to manage and route traffic effectively.</li>
        <li>Distribute traffic across multiple resources or services to allow your workload to take advantage of the elasticity that AWS provides.</li>
      </ul>

      <p>Reference: <a href="https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf">https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf</a></p>

    </details>
  </li>
  <li>Which of the following are recommended practices for managing IAM users? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Require IAM users to change their passwords after a specified period of time</li>
      <li><input type="checkbox" name="question-11" value="B">B. Prevent IAM users from reusing previous passwords</li>
      <li><input type="checkbox" name="question-11" value="C">C. Recommend that the same password be used on AWS and other sites</li>
      <li><input type="checkbox" name="question-11" value="D">D. Require IAM users to store their passwords in raw text</li>
      <li><input type="checkbox" name="question-11" value="E">E. Disable multi-factor authentication (MFA) for IAM users</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AB</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html</a></p>

    </details>
  </li>
  <li>A company is migrating from on-premises data centers to the AWS Cloud and is looking for hands-on help with the project. <br> How can the company get this support? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Ask for a quote from the AWS Marketplace team to perform a migration into the company’s AWS account.</li>
      <li><input type="checkbox" name="question-12" value="B">B. Contact AWS Support and open a case for assistance</li>
      <li><input type="checkbox" name="question-12" value="C">C. Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company’s AWS account</li>
      <li><input type="checkbox" name="question-12" value="D">D. Select a partner from the AWS Partner Network (APN) to assist with the migration</li>
      <li><input type="checkbox" name="question-12" value="E">E. Use Amazon Connect to create a new request for proposal (RFP) for expert assistance in migrating to the AWS Cloud.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CD</p>

      <p>Explanation: <a href="https://aws.amazon.com/solutions/aws-landing-zone/">https://aws.amazon.com/solutions/aws-landing-zone/</a></p>

    </details>
  </li>
  <li>How does the AWS Enterprise Support Concierge team help users?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Supporting application development</li>
      <li><input type="checkbox" name="question-13" value="B">B. Providing architecture guidance</li>
      <li><input type="checkbox" name="question-13" value="C">C. Answering billing and account inquires</li>
      <li><input type="checkbox" name="question-13" value="D">D. Answering questions regarding technical support cases</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/plans/enterprise/">https://aws.amazon.com/premiumsupport/plans/enterprise/</a></p>

    </details>
  </li>
  <li>An application designed to span multiple Availability Zones is described as:
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. being highly available</li>
      <li><input type="checkbox" name="question-14" value="B">B. having global reach</li>
      <li><input type="checkbox" name="question-14" value="C">C. using an economy of scale</li>
      <li><input type="checkbox" name="question-14" value="D">D. having elasticity</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area. <br> According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. AWS Regions</li>
      <li><input type="checkbox" name="question-15" value="B">B. Availability Zones</li>
      <li><input type="checkbox" name="question-15" value="C">C. subnets</li>
      <li><input type="checkbox" name="question-15" value="D">D. placement groups</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:
<a href="https://aws.amazon.com/ec2/faqs/">https://aws.amazon.com/ec2/faqs/</a></p>

    </details>
  </li>
  <li>Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-16" value="B">B. AWS Simple Monthly Calculator</li>
      <li><input type="checkbox" name="question-16" value="C">C. AWS Pricing Calculator</li>
      <li><input type="checkbox" name="question-16" value="D">D. Cost Explorer</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/tco-calculator/">https://aws.amazon.com/tco-calculator/</a></p>

    </details>
  </li>
  <li>A company has multiple AWS accounts within AWS Organizations and wants to apply the Amazon EC2 Reserved Instances benefit to a single account only. <br> Which action should be taken?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Purchase the Reserved Instances from master payer account and turn off Reserved Instance sharing.</li>
      <li><input type="checkbox" name="question-17" value="B">B. Enable billing alerts in the AWS Billing and Cost Management console.</li>
      <li><input type="checkbox" name="question-17" value="C">C. Purchase the Reserved Instances in individual linked accounts and turn off Reserved Instance sharing from the payer level.</li>
      <li><input type="checkbox" name="question-17" value="D">D. Enable Reserved Instance sharing in the AWS Billing and Cost Management console.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/">https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/</a></p>

    </details>
  </li>
  <li>Which situation should be reported to the AWS Abuse team?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. In Availability Zone has a service disruption</li>
      <li><input type="checkbox" name="question-18" value="B">B. An intrusion attempt is made from an AWS IP address</li>
      <li><input type="checkbox" name="question-18" value="C">C. A user has trouble accessing an Amazon S3 bucket from an AWS IP address</li>
      <li><input type="checkbox" name="question-18" value="D">D. A user needs to change payment methods due to a compromise</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/">https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/</a></p>

    </details>
  </li>
  <li>A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base. <br> Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Application Load Balancer</li>
      <li><input type="checkbox" name="question-19" value="B">B. AWS Global Accelerator</li>
      <li><input type="checkbox" name="question-19" value="C">C. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-19" value="D">D. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-19" value="E">E. AWS Lambda</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation: <a href="https://aws.amazon.com/cloudfront/faqs/">https://aws.amazon.com/cloudfront/faqs/</a></p>

    </details>
  </li>
  <li>Which AWS service or resource is serverless?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. AWS Lambda</li>
      <li><input type="checkbox" name="question-20" value="B">B. Amazon EC2 instances</li>
      <li><input type="checkbox" name="question-20" value="C">C. Amazon Lightsail</li>
      <li><input type="checkbox" name="question-20" value="D">D. Amazon ElastiCache</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://blogs.itemis.com/en/serverless-services-on-aws">https://blogs.itemis.com/en/serverless-services-on-aws</a></p>

    </details>
  </li>
  <li>Which of the following are components of Amazon VPC? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Objects</li>
      <li><input type="checkbox" name="question-21" value="B">B. Subnets</li>
      <li><input type="checkbox" name="question-21" value="C">C. Buckets</li>
      <li><input type="checkbox" name="question-21" value="D">D. Internet gateways</li>
      <li><input type="checkbox" name="question-21" value="E">E. Access key</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation: <a href="https://subscription.packtpub.com/book/virtualization_and_cloud/9781788293723/3/ch03lvl1sec26/vpc-components">https://subscription.packtpub.com/book/virtualization_and_cloud/9781788293723/3/ch03lvl1sec26/vpc-components</a></p>

    </details>
  </li>
  <li>AWS Budgets can be used to:
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. prevent a given user from creating a resource</li>
      <li><input type="checkbox" name="question-22" value="B">B. send an alert when the utilization of Reserved Instances drops below a certain percentage</li>
      <li><input type="checkbox" name="question-22" value="C">C. set resource limits in AWS accounts to prevent overspending</li>
      <li><input type="checkbox" name="question-22" value="D">D. split an AWS bill across multiple forms of payment</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html</a></p>

    </details>
  </li>
  <li>Which of the following will enhance the security of access to the AWS Management Console? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. AWS Secrets Manager</li>
      <li><input type="checkbox" name="question-23" value="B">B. AWS Certificate Manager</li>
      <li><input type="checkbox" name="question-23" value="C">C. AWS Multi-Factor Authentication (AWS MFA)</li>
      <li><input type="checkbox" name="question-23" value="D">D. Security groups</li>
      <li><input type="checkbox" name="question-23" value="E">E. Password policies</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CE</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/">https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/</a></p>

    </details>
  </li>
  <li>The AWS Trusted Advisor checks include recommendations regarding which of the following? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Information on Amazon S3 bucket permissions</li>
      <li><input type="checkbox" name="question-24" value="B">B. AWS service outages</li>
      <li><input type="checkbox" name="question-24" value="C">C. Multi-factor authentication enabled on the AWS account root user</li>
      <li><input type="checkbox" name="question-24" value="D">D. Available software patches</li>
      <li><input type="checkbox" name="question-24" value="E">E. Number of users in the account</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/">https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/</a></p>

    </details>
  </li>
  <li>Which functions can users perform using AWS KMS?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Create and manage AWS access keys for the AWS account root user</li>
      <li><input type="checkbox" name="question-25" value="B">B. Create and manage AWS access keys for an AWS account IAM user</li>
      <li><input type="checkbox" name="question-25" value="C">C. Create and manage keys for encryption and decryption of data</li>
      <li><input type="checkbox" name="question-25" value="D">D. Create and manage keys for multi-factor authentication</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/control-access.html">https://docs.aws.amazon.com/kms/latest/developerguide/control-access.html</a></p>

    </details>
  </li>
  <li>How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. It identifies software vulnerabilities in applications running on AWS</li>
      <li><input type="checkbox" name="question-26" value="B">B. It provides a list of cost optimization recommendations based on current AWS usage</li>
      <li><input type="checkbox" name="question-26" value="C">C. It detects potential security vulnerabilities caused by permissions settings on account resources</li>
      <li><input type="checkbox" name="question-26" value="D">D. It automatically corrects potential security issues caused by permissions settings on account resources</li>
      <li><input type="checkbox" name="question-26" value="E">E. It provides proactive alerting whenever an Amazon EC2 instance has been compromised</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

    </details>
  </li>
  <li>Which of the following are advantages of the AWS Cloud? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. AWS manages the maintenance of the cloud infrastructure</li>
      <li><input type="checkbox" name="question-27" value="B">B. AWS manages the security of applications built on AWS</li>
      <li><input type="checkbox" name="question-27" value="C">C. AWS manages capacity planning for physical servers</li>
      <li><input type="checkbox" name="question-27" value="D">D. AWS manages the development of applications on AWS</li>
      <li><input type="checkbox" name="question-27" value="E">E. AWS manages cost planning for virtual servers</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/data-center/controls/">https://aws.amazon.com/compliance/data-center/controls/</a></p>

    </details>
  </li>
  <li>A user deploys an Amazon RDS DB instance in multiple Availability Zones. <br> This strategy involves which pillar of the AWS Well-Architected Framework?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Performance efficiency</li>
      <li><input type="checkbox" name="question-28" value="B">B. Reliability</li>
      <li><input type="checkbox" name="question-28" value="C">C. Cost optimization</li>
      <li><input type="checkbox" name="question-28" value="D">D. Security</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:
<a href="https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/">https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/</a></p>

    </details>
  </li>
  <li>Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. AWS VPN</li>
      <li><input type="checkbox" name="question-29" value="B">B. Amazon Connect</li>
      <li><input type="checkbox" name="question-29" value="C">C. Amazon Cognito</li>
      <li><input type="checkbox" name="question-29" value="D">D. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-29" value="E">E. AWS Managed Services</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation:</p>
      <ul>
        <li><a href="https://aws.amazon.com/directconnect/">https://aws.amazon.com/directconnect/</a></li>
        <li><a href="https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-aws-client-vpn-to-securely-access-aws-and-on-premises-resources/">https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-aws-client-vpn-to-securely-access-aws-and-on-premises-resources/</a></li>
      </ul>

    </details>
  </li>
  <li>Which AWS service is used to pay AWS bills, and monitor usage and budget costs?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. AWS Billing and Cost Management</li>
      <li><input type="checkbox" name="question-30" value="B">B. Consolidated billing</li>
      <li><input type="checkbox" name="question-30" value="C">C. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-30" value="D">D. Amazon QuickSight</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html</a></p>

    </details>
  </li>
  <li>Which element of the AWS global infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, which are housed in separate facilities?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. AWS Regions</li>
      <li><input type="checkbox" name="question-31" value="B">B. Availability Zones</li>
      <li><input type="checkbox" name="question-31" value="C">C. Edge locations</li>
      <li><input type="checkbox" name="question-31" value="D">D. Amazon CloudFront</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:
<a href="https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html">https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html</a></p>

    </details>
  </li>
  <li>Which Amazon VPC feature enables users to capture information about the IP traffic that reaches Amazon EC2 instances?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Security groups</li>
      <li><input type="checkbox" name="question-32" value="B">B. Elastic network interfaces</li>
      <li><input type="checkbox" name="question-32" value="C">C. Network ACLs</li>
      <li><input type="checkbox" name="question-32" value="D">D. VPC Flow Logs</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC.</li>
        <li>Flow log data can be published to Amazon CloudWatch Logs or Amazon S3. After you’ve created a flow log, you can retrieve and view its data in the chosen destination.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html">https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html</a></p>

    </details>
  </li>
  <li>Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Amazon AutoScaling</li>
      <li><input type="checkbox" name="question-33" value="B">B. Amazon Redshift</li>
      <li><input type="checkbox" name="question-33" value="C">C. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-33" value="D">D. AWS Lambda</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/aws/category/auto-scaling/">https://aws.amazon.com/blogs/aws/category/auto-scaling/</a></p>

    </details>
  </li>
  <li>AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-34" value="B">B. AWS Support case</li>
      <li><input type="checkbox" name="question-34" value="C">C. Concierge team</li>
      <li><input type="checkbox" name="question-34" value="D">D. Amazon Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/plans/">https://aws.amazon.com/premiumsupport/plans/</a></p>

    </details>
  </li>
  <li>A company wants to migrate a MySQL database to AWS but does not have the budget for Database Administrators to handle routine tasks including provisioning, patching, and performing backups. <br> Which AWS service will support this use case?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Amazon RDS</li>
      <li><input type="checkbox" name="question-35" value="B">B. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-35" value="C">C. Amazon DocumentDB</li>
      <li><input type="checkbox" name="question-35" value="D">D. Amazon ElastiCache</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon RDS makes it easy to set up, operate, and scale a relational database in the cloud.</li>
        <li>It provides cost-efficient and resizable capacity while automating time-consuming administration tasks, such as hardware provisioning, database setup, patching, and backups.</li>
        <li>It frees you to focus on your applications, so you can give them the fast performance, high availability, security, and compatibility that they need.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/blogs/database/part-1-role-of-the-dba-when-moving-to-amazon-rds-responsibilities/">https://aws.amazon.com/blogs/database/part-1-role-of-the-dba-when-moving-to-amazon-rds-responsibilities/</a></p>

    </details>
  </li>
  <li>A company wants to expand from one AWS Region into a second AWS Region. <br> What does the company need to do to start supporting the new Region?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. Contact an AWS Account Manager to sign a new contract</li>
      <li><input type="checkbox" name="question-36" value="B">B. Move an Availability Zone to the new Region</li>
      <li><input type="checkbox" name="question-36" value="C">C. Begin deploying resources in the second Region</li>
      <li><input type="checkbox" name="question-36" value="D">D. Download the AWS Management Console for the new Region</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:
<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-region.html">https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-region.html</a></p>

    </details>
  </li>
  <li>A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. <br> Which Amazon EC2 instance pricing option will meet these requirements?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Dedicated Hosts</li>
      <li><input type="checkbox" name="question-37" value="B">B. Dedicated Instances</li>
      <li><input type="checkbox" name="question-37" value="C">C. Spot Instances</li>
      <li><input type="checkbox" name="question-37" value="D">D. Reserved Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/dedicated-hosts/">https://aws.amazon.com/ec2/dedicated-hosts/</a></p>

    </details>
  </li>
  <li>Which AWS service will provide a way to generate encryption keys that can be used to encrypt data? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Amazon Macie</li>
      <li><input type="checkbox" name="question-38" value="B">B. AWS Certificate Manager</li>
      <li><input type="checkbox" name="question-38" value="C">C. AWS Key Management Service (AWS KMS)</li>
      <li><input type="checkbox" name="question-38" value="D">D. AWS Secrets Manager</li>
      <li><input type="checkbox" name="question-38" value="E">E. AWS CloudHSM</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CE</p>

      <p>Explanation:</p>
      <ul>
        <li><a href="https://docs.aws.amazon.com/crypto/latest/userguide/awscryp-service-hsm.html">https://docs.aws.amazon.com/crypto/latest/userguide/awscryp-service-hsm.html</a></li>
        <li><a href="https://docs.aws.amazon.com/kms/latest/developerguide/overview.html">https://docs.aws.amazon.com/kms/latest/developerguide/overview.html</a></li>
      </ul>

    </details>
  </li>
  <li>A company is planning to migrate from on-premises to the AWS Cloud. <br> Which AWS tool or service provides detailed reports on estimated cost savings after migration?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. AWS Total Cost of Ownership (TCO) Calculator</li>
      <li><input type="checkbox" name="question-39" value="B">B. Cost Explorer</li>
      <li><input type="checkbox" name="question-39" value="C">C. AWS Budgets</li>
      <li><input type="checkbox" name="question-39" value="D">D. AWS Migration Hub</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:
<a href="https://docs.aws.amazon.com/migrationhub/latest/ug/hub-api.pdf">https://docs.aws.amazon.com/migrationhub/latest/ug/hub-api.pdf</a> (26)</p>

    </details>
  </li>
  <li>What can assist in evaluating an application for migration to the cloud? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-40" value="B">B. AWS Professional Services</li>
      <li><input type="checkbox" name="question-40" value="C">C. AWS Systems Manager</li>
      <li><input type="checkbox" name="question-40" value="D">D. AWS Partner Network (APN)</li>
      <li><input type="checkbox" name="question-40" value="E">E. AWS Secrets Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

    </details>
  </li>
  <li>Which AWS service helps users meet contractual and regulatory compliance requirements for data security by using dedicated hardware appliances within the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. AWS Secrets Manager</li>
      <li><input type="checkbox" name="question-41" value="B">B. AWS CloudHSM</li>
      <li><input type="checkbox" name="question-41" value="C">C. AWS Key Management Service (AWS KMS)</li>
      <li><input type="checkbox" name="question-41" value="D">D. AWS Directory Service</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>The AWS CloudHSM service helps you meet corporate, contractual, and regulatory compliance requirements for data security by using dedicated Hardware Security Module (HSM) instances within the AWS cloud.</li>
        <li>AWS and AWS Marketplace partners offer a variety of solutions for protecting sensitive data within the AWS platform, but for some applications and data subject to contractual or regulatory mandates for managing cryptographic keys, additional protection may be necessary.</li>
        <li>CloudHSM complements existing data protection solutions and allows you to protect your encryption keys within HSMs that are designed and validated to government standards for secure key management.</li>
        <li>CloudHSM allows you to securely generate, store, and manage cryptographic keys used for data encryption in a way that keys are accessible only by you.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/cloudhsm/faqs/">https://aws.amazon.com/cloudhsm/faqs/</a></p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, the customer manages which of the following? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Decommissioning of physical storage devices</li>
      <li><input type="checkbox" name="question-42" value="B">B. Security group and ACL configuration</li>
      <li><input type="checkbox" name="question-42" value="C">C. Patch management of an Amazon RDS instance operating system</li>
      <li><input type="checkbox" name="question-42" value="D">D. Controlling physical access to data centers</li>
      <li><input type="checkbox" name="question-42" value="E">E. Patch management of an Amazon EC2 instance operating system</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BE</p>

      <p>Explanation: <a href="https://www.whizlabs.com/blog/aws-security-shared-responsibility/">https://www.whizlabs.com/blog/aws-security-shared-responsibility/</a></p>

    </details>
  </li>
  <li>Which AWS service is suitable for an event-driven workload?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. Amazon EC2</li>
      <li><input type="checkbox" name="question-43" value="B">B. AWS Elastic Beanstalk</li>
      <li><input type="checkbox" name="question-43" value="C">C. AWS Lambda</li>
      <li><input type="checkbox" name="question-43" value="D">D. Amazon Lumberyard</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>An easy-to-use service for deploying and scaling web applications and web services developed in a number of programming languages.</li>
        <li>You can configure event notifications for your Elastic Beanstalk environment so that notable events can be automatically published to an SNS topic, then pushed to topic subscribers.</li>
        <li>As an example, you may use this event-driven architecture to coordinate your continuous integration pipeline (such as Jenkins CI).</li>
        <li>That way, whenever an environment is created, Elastic Beanstalk publishes this event to an SNS topic, which triggers a subscribing Lambda function, which then kicks off a CI job against your newly created Elastic Beanstalk environment.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/blogs/compute/event-driven-computing-with-amazon-sns-compute-storage-database-and-networking-services/">https://aws.amazon.com/blogs/compute/event-driven-computing-with-amazon-sns-compute-storage-database-and-networking-services/</a></p>

    </details>
  </li>
  <li>What is a value proposition of the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. AWS is responsible for security in the AWS Cloud</li>
      <li><input type="checkbox" name="question-44" value="B">B. No long-term contract is required</li>
      <li><input type="checkbox" name="question-44" value="C">C. Provision new servers in days</li>
      <li><input type="checkbox" name="question-44" value="D">D. AWS manages user applications in the AWS Cloud</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/aws-whitepaper-business-value-of-aws.pdf">https://d1.awsstatic.com/whitepapers/aws-whitepaper-business-value-of-aws.pdf</a></p>

    </details>
  </li>
  <li>What is a characteristic of Amazon S3 cross-region replication?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. Both source and destination S3 buckets must have versioning disabled</li>
      <li><input type="checkbox" name="question-45" value="B">B. The source and destination S3 buckets cannot be in different AWS Regions</li>
      <li><input type="checkbox" name="question-45" value="C">C. S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts</li>
      <li><input type="checkbox" name="question-45" value="D">D. The source S3 bucket owner must have the source and destination AWS Regions disabled for their account</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html</a></p>

    </details>
  </li>
  <li>What is a user responsible for when running an application in the AWS Cloud?   - A. Managing physical hardware
    <ul>
      <li><input type="checkbox" name="question-46" value="B">B. Updating the underlying hypervisor</li>
      <li><input type="checkbox" name="question-46" value="C">C. Providing a list of users approved for data center access</li>
      <li><input type="checkbox" name="question-46" value="D">D. Managing application software updates</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>A company that does business online needs to quickly deliver new functionality in an iterative manner, minimizing the time to market. <br> Which AWS Cloud feature can provide this?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Elasticity</li>
      <li><input type="checkbox" name="question-47" value="B">B. High availability</li>
      <li><input type="checkbox" name="question-47" value="C">C. Agility</li>
      <li><input type="checkbox" name="question-47" value="D">D. Reliability</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/devops/partner-solutions/">https://aws.amazon.com/devops/partner-solutions/</a></p>

    </details>
  </li>
  <li>Which features or services can be used to monitor costs and expenses for an AWS account? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. AWS Cost and Usage report</li>
      <li><input type="checkbox" name="question-48" value="B">B. AWS product pages</li>
      <li><input type="checkbox" name="question-48" value="C">C. AWS Simple Monthly Calculator</li>
      <li><input type="checkbox" name="question-48" value="D">D. Billing alerts and Amazon CloudWatch alarms</li>
      <li><input type="checkbox" name="question-48" value="E">E. AWS Price List API</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html</a></p>

    </details>
  </li>
  <li>Amazon Route 53 enables users to:
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. encrypt data in transit</li>
      <li><input type="checkbox" name="question-49" value="B">B. register DNS domain names</li>
      <li><input type="checkbox" name="question-49" value="C">C. generate and manage SSL certificates</li>
      <li><input type="checkbox" name="question-49" value="D">D. establish a dedicated network connection to AWS</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html</a></p>

    </details>
  </li>
</ol>
      `,
    data: []
  },
];