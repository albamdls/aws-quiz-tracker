export default [
  {
    id: 17,
    title: "Practice Exam 17",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>What time-savings advantage is offered with the use of Amazon Rekognition?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Amazon Rekognition provides automatic watermarking of images.</li>
      <li><input type="checkbox" name="question-0" value="B">B. Amazon Rekognition provides automatic detection of objects appearing in pictures.</li>
      <li><input type="checkbox" name="question-0" value="C">C. Amazon Rekognition provides the ability to resize millions of images automatically.</li>
      <li><input type="checkbox" name="question-0" value="D">D. Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Rekognition Image is an image recognition service that detects objects, scenes, and faces; extracts text; recognizes celebrities; and identifies inappropriate content in images.</li>
        <li>It also allows you to search and compare faces.</li>
        <li>Rekognition Image is based on the same proven, highly scalable, deep learning technology developed by Amazon’s computer vision scientists to analyze billions of images daily for Prime Photos.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/rekognition/faqs/">https://aws.amazon.com/rekognition/faqs/</a></p>

    </details>
  </li>
  <li>When comparing AWS with on-premises Total Cost of Ownership (TCO), what costs are included?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. Data center security</li>
      <li><input type="checkbox" name="question-1" value="B">B. Business analysis</li>
      <li><input type="checkbox" name="question-1" value="C">C. Project management</li>
      <li><input type="checkbox" name="question-1" value="D">D. Operating system administration</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://www.awstcocalculator.com/Output/Load/f85bbf7e131446643911859504">https://www.awstcocalculator.com/Output/Load/f85bbf7e131446643911859504</a></p>

    </details>
  </li>
  <li>According to the AWS shared responsibility model, what is AWS responsible for?
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Configuring Amazon VPC</li>
      <li><input type="checkbox" name="question-2" value="B">B. Managing application code</li>
      <li><input type="checkbox" name="question-2" value="C">C. Maintaining application traffic</li>
      <li><input type="checkbox" name="question-2" value="D">D. Managing the network infrastructure</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://cloudacademy.com/blog/aws-shared-responsibility-model-security/">https://cloudacademy.com/blog/aws-shared-responsibility-model-security/</a></p>

    </details>
  </li>
  <li>Which service should be used to estimate the costs of running a new project on AWS?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. AWS TCO Calculator</li>
      <li><input type="checkbox" name="question-3" value="B">B. AWS Simple Monthly Calculator</li>
      <li><input type="checkbox" name="question-3" value="C">C. AWS Cost Explorer API</li>
      <li><input type="checkbox" name="question-3" value="D">D. AWS Budgets</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>To forecast your costs, use the AWS Cost Explorer.</li>
        <li>Use cost allocation tags to divide your resources into groups, and then estimate the costs for each group.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/">https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/</a></p>

    </details>
  </li>
  <li>Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. AWS Organizations</li>
      <li><input type="checkbox" name="question-4" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-4" value="C">C. AWS Usage Report</li>
      <li><input type="checkbox" name="question-4" value="D">D. Amazon EC2 dashboard</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://www.cloudconformity.com/knowledge-base/aws/EC2/security-group-egress-any.html">https://www.cloudconformity.com/knowledge-base/aws/EC2/security-group-egress-any.html</a></p>

    </details>
  </li>
  <li>Which AWS service can be used to generate alerts based on an estimated monthly bill?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-5" value="B">B. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-5" value="C">C. AWS X-Ray</li>
      <li><input type="checkbox" name="question-5" value="D">D. AWS CloudTrail</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>You can monitor your estimated AWS charges by using Amazon CloudWatch.</li>
        <li>When you enable the monitoring of estimated charges for your AWS account, the estimated charges are calculated and sent several times daily to CloudWatch as metric data.</li>
        <li>Billing metric data is stored in the US East (N. Virginia) Region and represents worldwide charges.</li>
        <li>This data includes the estimated charges for every service in AWS that you use, in addition to the estimated overall total of your AWS charges.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html</a></p>

    </details>
  </li>
  <li>Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Partial Upfront Reserved Instances for a 1-year term</li>
      <li><input type="checkbox" name="question-6" value="B">B. All Upfront Reserved Instances for a 1-year term</li>
      <li><input type="checkbox" name="question-6" value="C">C. All Upfront Reserved Instances for a 3-year term</li>
      <li><input type="checkbox" name="question-6" value="D">D. No Upfront Reserved Instances for a 3-year term</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/pricing/reserved-instances/">https://aws.amazon.com/ec2/pricing/reserved-instances/</a></p>

    </details>
  </li>
  <li>Which of the following is the responsibility of AWS?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Setting up AWS Identity and Access Management (IAM) users and groups</li>
      <li><input type="checkbox" name="question-7" value="B">B. Physically destroying storage media at end of life</li>
      <li><input type="checkbox" name="question-7" value="C">C. Patching guest operating systems</li>
      <li><input type="checkbox" name="question-7" value="D">D. Configuring security settings on Amazon EC2 instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Media storage devices used to store customer data are classified by AWS as Critical and treated accordingly, as high impact, throughout their life-cycles.</li>
        <li>AWS has exacting standards on how to install, service, and eventually destroy the devices when they are no longer useful. - When a storage device has reached the end of its useful life, AWS decommissions media using techniques detailed in NIST 800-88.</li>
        <li>Media that stored customer data is not removed from AWS control until it has been securely decommissioned.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/compliance/data-center/controls/">https://aws.amazon.com/compliance/data-center/controls/</a></p>

    </details>
  </li>
  <li>Which of the following is an advantage of using AWS?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. AWS audits user data.</li>
      <li><input type="checkbox" name="question-8" value="B">B. Data is automatically secure.</li>
      <li><input type="checkbox" name="question-8" value="C">C. There is no guessing on capacity needs.</li>
      <li><input type="checkbox" name="question-8" value="D">D. AWS manages compliance needs.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS allows you to access as much or as little capacity as you need, and scale up or down as required with only a few minutes’ notice</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html">https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html</a></p>

    </details>
  </li>
  <li>Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. AWS Lambda</li>
      <li><input type="checkbox" name="question-9" value="B">B. Amazon DynamoDB Accelerator</li>
      <li><input type="checkbox" name="question-9" value="C">C. Amazon Route 53</li>
      <li><input type="checkbox" name="question-9" value="D">D. Amazon CloudFront</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer- friendly environment.</li>
        <li>CloudFront is integrated with AWS both physical locations that are directly connected to the AWS global infrastructure, as well as other AWS services.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/cloudfront/">https://aws.amazon.com/cloudfront/</a></p>

    </details>
  </li>
  <li>Which services manage and automate application deployments on AWS? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. AWS Elastic Beanstalk</li>
      <li><input type="checkbox" name="question-10" value="B">B. AWS CodeCommit</li>
      <li><input type="checkbox" name="question-10" value="C">C. AWS Data Pipeline</li>
      <li><input type="checkbox" name="question-10" value="D">D. AWS CloudFormation</li>
      <li><input type="checkbox" name="question-10" value="E">E. AWS Config</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation:</p>
      <ul>
        <li>EBS -&gt; automates deploying code and provisioning infrastructure</li>
        <li>CloudFormation -&gt; Use templates to deploy code and infrastructure</li>
      </ul>

    </details>
  </li>
  <li>A user wants guidance on possible savings when migrating from on-premises to AWS. <br> Which tool is suitable for this scenario?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. AWS Budgets</li>
      <li><input type="checkbox" name="question-11" value="B">B. Cost Explorer</li>
      <li><input type="checkbox" name="question-11" value="C">C. AWS Total Cost of Ownership (TCO) Calculator</li>
      <li><input type="checkbox" name="question-11" value="D">D. AWS Well-Architected Tool</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>The TCO Calculator provides directional guidance on possible realized savings when deploying AWS.</li>
        <li>This tool is built on an underlying calculation model, that generates a fair assessment of value that a customer may achieve given the data provided by the user.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/tco-calculator/">https://aws.amazon.com/tco-calculator/</a></p>

    </details>
  </li>
  <li>Which principles are used to architect applications for reliability on the AWS Cloud? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Design for automated failure recovery</li>
      <li><input type="checkbox" name="question-12" value="B">B. Use multiple Availability Zones</li>
      <li><input type="checkbox" name="question-12" value="C">C. Manage changes via documented processes</li>
      <li><input type="checkbox" name="question-12" value="D">D. Test for moderate demand to ensure reliability</li>
      <li><input type="checkbox" name="question-12" value="E">E. Backup recovery to an on-premises environment</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AB</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/">https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/</a></p>

    </details>
  </li>
  <li>What tasks should a customer perform when that customer suspects an AWS account has been compromised? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Rotate passwords and access keys.</li>
      <li><input type="checkbox" name="question-13" value="B">B. Remove MFA tokens.</li>
      <li><input type="checkbox" name="question-13" value="C">C. Move resources to a different AWS Region.</li>
      <li><input type="checkbox" name="question-13" value="D">D. Delete AWS CloudTrail Resources.</li>
      <li><input type="checkbox" name="question-13" value="E">E. Contact AWS Support.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AE</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/">https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/</a></p>

    </details>
  </li>
  <li>What is an example of high availability in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. Consulting AWS technical support at any time day or night</li>
      <li><input type="checkbox" name="question-14" value="B">B. Ensuring an application remains accessible, even if a resource fails</li>
      <li><input type="checkbox" name="question-14" value="C">C. Making any AWS service available for use by paying on demand</li>
      <li><input type="checkbox" name="question-14" value="D">D. Deploying in any part of the world using AWS Regions</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/startups/high-availability-for-mere-mortals/">https://aws.amazon.com/blogs/startups/high-availability-for-mere-mortals/</a></p>

    </details>
  </li>
  <li>Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Amazon Inspector</li>
      <li><input type="checkbox" name="question-15" value="B">B. AWS Web Application Firewall (AWS WAF)</li>
      <li><input type="checkbox" name="question-15" value="C">C. Elastic Load Balancing (ELB)</li>
      <li><input type="checkbox" name="question-15" value="D">D. AWS Shield</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS.</li>
        <li>AWS Shield provides always-on detection and automatic inline mitigation’s that minimize application downtime and latency, so there is no need to engage AWS Support to benefit from DDoS protection.</li>
        <li>There are two tiers of AWS Shield - Standard and Advanced.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/shield/">https://aws.amazon.com/shield/</a></p>

    </details>
  </li>
  <li>A company wants to monitor the CPU usage of its Amazon EC2 resources. <br> Which AWS service should the company use?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-16" value="B">B. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-16" value="C">C. AWS Cost and Usage report</li>
      <li><input type="checkbox" name="question-16" value="D">D. Amazon Simple Notification Service (Amazon SNS)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>With Basic monitoring you get data on your cloudwatch metrics every 5 minutes.</li>
        <li>Enabling detailed monitoring, you will get the data every one minute.</li>
        <li>To check if detailed monitoring is enabled, on your EC2 Console, Select the instance, on the lower plane, Select Monitoring.</li>
      </ul>

      <p>Reference: <a href="https://forums.aws.amazon.com/thread.jspa?threadID=263876">https://forums.aws.amazon.com/thread.jspa?threadID=263876</a></p>

    </details>
  </li>
  <li>What is an AWS Identity and Access Management (IAM) role?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. A user associated with an AWS resource</li>
      <li><input type="checkbox" name="question-17" value="B">B. A group associated with an AWS resource</li>
      <li><input type="checkbox" name="question-17" value="C">C. An entity that defines a set of permissions for use with an AWS resource</li>
      <li><input type="checkbox" name="question-17" value="D">D. An authentication credential associated with a multi-factor authentication (MFA) token</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely.</li>
        <li>Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/iam/">https://aws.amazon.com/iam/</a></p>

    </details>
  </li>
  <li>What are the advantages of Reserved Instances? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. They provide a discount over on-demand pricing.</li>
      <li><input type="checkbox" name="question-18" value="B">B. They provide access to additional instance types.</li>
      <li><input type="checkbox" name="question-18" value="C">C. They provide additional networking capability.</li>
      <li><input type="checkbox" name="question-18" value="D">D. Customers can upgrade instances as new types become available.</li>
      <li><input type="checkbox" name="question-18" value="E">E. Customers can reserve capacity in an Availability Zone.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AE</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-basics/">https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-basics/</a></p>

    </details>
  </li>
  <li>How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. They automatically add more instances across multiple AWS Regions based on global demand of the application.</li>
      <li><input type="checkbox" name="question-19" value="B">B. They automatically add or replace instances across multiple Availability Zones when the application needs it.</li>
      <li><input type="checkbox" name="question-19" value="C">C. They enable the application’s static content to reside closer to end users.</li>
      <li><input type="checkbox" name="question-19" value="D">D. They are able to distribute incoming requests across a tier of web server instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>When the unhealthy Availability Zone returns to a healthy state, Auto Scaling automatically redistributes the application instances evenly across all of the designated Availability Zones.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html">https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html</a></p>

    </details>
  </li>
  <li>How can one AWS account use Reserved Instances from another AWS account?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. By using Amazon EC2 Dedicated Instances</li>
      <li><input type="checkbox" name="question-20" value="B">B. By using AWS Organizations consolidated billing</li>
      <li><input type="checkbox" name="question-20" value="C">C. By using the AWS Cost Explorer tool</li>
      <li><input type="checkbox" name="question-20" value="D">D. By using AWS Budgets</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>The account that originally purchased the Reserved Instance receives the discount first.</li>
        <li>If the purchasing account doesn’t have any instances that match the terms of the Reserved Instance, the discount for the Reserved Instance is assigned to any matching usage on another account in the organization.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/">https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/</a></p>

    </details>
  </li>
  <li>A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. <br> For how much time will the customer be billed?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. 3 hours, 5 minutes</li>
      <li><input type="checkbox" name="question-21" value="B">B. 3 hours, 5 minutes, and 6 seconds</li>
      <li><input type="checkbox" name="question-21" value="C">C. 3 hours, 6 minutes</li>
      <li><input type="checkbox" name="question-21" value="D">D. 4 hours</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-hour-billing/">https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-hour-billing/</a></p>

    </details>
  </li>
  <li>Which of the following AWS services provide compute resources? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. AWS Lambda</li>
      <li><input type="checkbox" name="question-22" value="B">B. Amazon Elastic Container Service (Amazon ECS)</li>
      <li><input type="checkbox" name="question-22" value="C">C. AWS CodeDeploy</li>
      <li><input type="checkbox" name="question-22" value="D">D. Amazon Glacier</li>
      <li><input type="checkbox" name="question-22" value="E">E. AWS Organizations</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AB</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html">https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html</a></p>

    </details>
  </li>
  <li>Which AWS service enables users to deploy infrastructure as code by automating the process of provisioning resources?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Amazon GameLift</li>
      <li><input type="checkbox" name="question-23" value="B">B. AWS CloudFormation</li>
      <li><input type="checkbox" name="question-23" value="C">C. AWS Data Pipeline</li>
      <li><input type="checkbox" name="question-23" value="D">D. AWS Glue</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources in your cloud environment.</li>
        <li>AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts.</li>
        <li>This gives you a single source of truth for your AWS and third party resources.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/cloudformation/">https://aws.amazon.com/cloudformation/</a></p>

    </details>
  </li>
  <li>Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Amazon EBS</li>
      <li><input type="checkbox" name="question-24" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-24" value="C">C. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-24" value="D">D. AWS Storage Gateway</li>
      <li><input type="checkbox" name="question-24" value="E">E. Amazon Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation: <a href="https://aws.amazon.com/hybrid/">https://aws.amazon.com/hybrid/</a></p>

    </details>
  </li>
  <li>Which of the following allows users to provision a dedicated network connection from their internal network to AWS?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. AWS CloudHSM</li>
      <li><input type="checkbox" name="question-25" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-25" value="C">C. AWS VPN</li>
      <li><input type="checkbox" name="question-25" value="D">D. Amazon Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Direct Connect lets you establish a dedicated network connection between your network and one of the AWS Direct Connect locations.</li>
        <li>Using industry standard 802.1q VLANs, this dedicated connection can be partitioned into multiple virtual interfaces.</li>
        <li>This allows you to use the same connection to access public resources such as objects stored in Amazon S3 using public IP address space, and private resources such as Amazon EC2 instances running within an Amazon Virtual Private Cloud (VPC) using private IP space, while maintaining network separation between the public and private environments.</li>
        <li>Virtual interfaces can be reconfigured at any time to meet your changing needs.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/directconnect/">https://aws.amazon.com/directconnect/</a></p>

    </details>
  </li>
  <li>Which services use AWS edge locations? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-26" value="B">B. AWS Shield</li>
      <li><input type="checkbox" name="question-26" value="C">C. Amazon EC2</li>
      <li><input type="checkbox" name="question-26" value="D">D. Amazon RDS</li>
      <li><input type="checkbox" name="question-26" value="E">E. Amazon ElastiCache</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A,B</p>

      <p>Explanation: <a href="https://www.edureka.co/community/600/what-is-an-edge-location-in-aws">https://www.edureka.co/community/600/what-is-an-edge-location-in-aws</a></p>

    </details>
  </li>
  <li>Which service would provide network connectivity in a hybrid architecture that includes the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. Amazon VPC</li>
      <li><input type="checkbox" name="question-27" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-27" value="C">C. AWS Directory Service</li>
      <li><input type="checkbox" name="question-27" value="D">D. Amazon API Gateway</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon Virtual Private Cloud (Amazon VPC) is a logically isolated, private section of the AWS Cloud to launch resources in a virtual data center in the cloud.</li>
        <li>Amazon VPC allows you to leverage multiple Availability Zones (AZ) within a region so that you can build greater fault tolerance within your workloads.</li>
        <li>You have complete control.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/blogs/publicsector/aws-networking-capabilities-gives-you-choices-for-hybrid-cloud-connectivity-but-which-service-works-best-for-your-use-case/">https://aws.amazon.com/blogs/publicsector/aws-networking-capabilities-gives-you-choices-for-hybrid-cloud-connectivity-but-which-service-works-best-for-your-use-case/</a></p>

    </details>
  </li>
  <li>Which tool can be used to compare the costs of running a web application in a traditional hosting environment to running it on AWS?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. AWS Cost Explorer</li>
      <li><input type="checkbox" name="question-28" value="B">B. AWS Budgets</li>
      <li><input type="checkbox" name="question-28" value="C">C. AWS Cost and Usage report</li>
      <li><input type="checkbox" name="question-28" value="D">D. AWS Total Cost of Ownership (TCO) Calculator</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/tco-calculator/">https://aws.amazon.com/tco-calculator/</a></p>

    </details>
  </li>
  <li>What is the value of using third-party software from AWS Marketplace instead of installing third-party software on Amazon EC2? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Users pay for software by the hour or month depending on licensing.</li>
      <li><input type="checkbox" name="question-29" value="B">B. AWS Marketplace enables the user to launch applications with 1-Click.</li>
      <li><input type="checkbox" name="question-29" value="C">C. AWS Marketplace data encryption is managed by a third-party vendor.</li>
      <li><input type="checkbox" name="question-29" value="D">D. AWS Marketplace eliminates the need to upgrade to newer software versions.</li>
      <li><input type="checkbox" name="question-29" value="E">E. Users can deploy third-party software without testing.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AB</p>

      <p>Explanation: <a href="https://aws.amazon.com/partners/aws-marketplace/">https://aws.amazon.com/partners/aws-marketplace/</a></p>

    </details>
  </li>
  <li>Which of the following is a cloud architectural design principle?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. Scale up, not out.</li>
      <li><input type="checkbox" name="question-30" value="B">B. Loosely couple components.</li>
      <li><input type="checkbox" name="question-30" value="C">C. Build monolithic systems.</li>
      <li><input type="checkbox" name="question-30" value="D">D. Use commercial database software.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Loosely coupled architectures reduce interdependencies, so that a change or failure in a component does not cascade to other components.</li>
      </ul>

    </details>
  </li>
  <li>Under the shared responsibility model; which of the following areas are the customer’s responsibility? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Firmware upgrades of network infrastructure</li>
      <li><input type="checkbox" name="question-31" value="B">B. Patching of operating systems</li>
      <li><input type="checkbox" name="question-31" value="C">C. Patching of the underlying hypervisor</li>
      <li><input type="checkbox" name="question-31" value="D">D. Physical security of data centers</li>
      <li><input type="checkbox" name="question-31" value="E">E. Configuration of the security group</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BE</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>Which service enables customers to audit and monitor changes in AWS resources?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-32" value="B">B. Amazon GuardDuty</li>
      <li><input type="checkbox" name="question-32" value="C">C. Amazon Inspector</li>
      <li><input type="checkbox" name="question-32" value="D">D. AWS Config</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

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
  <li>Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-33" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-33" value="C">C. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-33" value="D">D. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>According to the AWS shared responsibility model, who is responsible for configuration management?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. It is solely the responsibility of the customer.</li>
      <li><input type="checkbox" name="question-34" value="B">B. It is solely the responsibility of AWS.</li>
      <li><input type="checkbox" name="question-34" value="C">C. It is shared between AWS and the customer.</li>
      <li><input type="checkbox" name="question-34" value="D">D. It is not part of the AWS shared responsibility model.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>Which AWS service is a content delivery network that securely delivers data, video, and applications to users globally with low latency and high speeds?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. AWS CloudFormation</li>
      <li><input type="checkbox" name="question-35" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-35" value="C">C. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-35" value="D">D. Amazon Pinpoint</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer- friendly environment.</li>
        <li>CloudFront is integrated with AWS both physical locations that are directly connected to the AWS global infrastructure, as well as other AWS services.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/cloudfront/">https://aws.amazon.com/cloudfront/</a></p>

    </details>
  </li>
  <li>Which benefit of the AWS Cloud supports matching the supply of resources with changing workload demands?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. Security</li>
      <li><input type="checkbox" name="question-36" value="B">B. Reliability</li>
      <li><input type="checkbox" name="question-36" value="C">C. Elasticity</li>
      <li><input type="checkbox" name="question-36" value="D">D. High availability</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://wa.aws.amazon.com/wat.map.en.html">https://wa.aws.amazon.com/wat.map.en.html</a></p>

    </details>
  </li>
  <li>A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack. <br> Who should the user contact FIRST about this situation?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. AWS Premium Support</li>
      <li><input type="checkbox" name="question-37" value="B">B. AWS Technical Account Manager</li>
      <li><input type="checkbox" name="question-37" value="C">C. AWS Solutions Architect</li>
      <li><input type="checkbox" name="question-37" value="D">D. AWS Abuse team</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/">https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/</a></p>

    </details>
  </li>
  <li>Which of the following are benefits of hosting infrastructure in the AWS Cloud? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. There are no upfront commitments.</li>
      <li><input type="checkbox" name="question-38" value="B">B. AWS manages all security in the cloud.</li>
      <li><input type="checkbox" name="question-38" value="C">C. Users have the ability to provision resources on demand.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Users have access to free and unlimited storage.</li>
      <li><input type="checkbox" name="question-38" value="E">E. Users have control over the physical infrastructure.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

    </details>
  </li>
  <li>What AWS service would be used to centrally manage AWS access policies across multiple accounts?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. AWS Service Catalog</li>
      <li><input type="checkbox" name="question-39" value="B">B. AWS Config</li>
      <li><input type="checkbox" name="question-39" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-39" value="D">D. AWS Organizations</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Organizations helps you centrally govern your environment as you grow and scale your workloads on AWS.</li>
        <li>Whether you are a growing startup or a large enterprise, Organizations helps you to centrally manage billing; control access, compliance, and security; and share resources across your AWS accounts.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/organizations/">https://aws.amazon.com/organizations/</a></p>

    </details>
  </li>
  <li>What is AWS Trusted Advisor?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. It is an AWS staff member who provides recommendations and best practices on how to use AWS.</li>
      <li><input type="checkbox" name="question-40" value="B">B. It is a network of AWS partners who provide recommendations and best practices on how to use AWS.</li>
      <li><input type="checkbox" name="question-40" value="C">C. It is an online tool with a set of automated checks that provides recommendations on cost optimization, performance, and security.</li>
      <li><input type="checkbox" name="question-40" value="D">D. It is another name for AWS Technical Account Managers who provide recommendations on cost optimization, performance, and security.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Trusted Advisor is an online tool that provides you real time guidance to help you provision your resources following AWS best practices.</li>
        <li>Whether establishing new workflows, developing applications, or as part of ongoing improvement, take advantage of the recommendations provided by Trusted Advisor on a regular basis to help keep your solutions provisioned optimally.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/premiumsupport/technology/trusted-advisor/">https://aws.amazon.com/premiumsupport/technology/trusted-advisor/</a></p>

    </details>
  </li>
  <li>Which AWS service or feature allows a company to visualize, understand, and manage AWS costs and usage over time?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. AWS Budgets</li>
      <li><input type="checkbox" name="question-41" value="B">B. AWS Cost Explorer</li>
      <li><input type="checkbox" name="question-41" value="C">C. AWS Organizations</li>
      <li><input type="checkbox" name="question-41" value="D">D. Consolidated billing</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/aws-cost-management/aws-cost-explorer/">https://aws.amazon.com/aws-cost-management/aws-cost-explorer/</a></p>

    </details>
  </li>
  <li>Which AWS service offers on-demand access to AWS security and compliance reports?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-42" value="B">B. AWS Artifact</li>
      <li><input type="checkbox" name="question-42" value="C">C. AWS Health</li>
      <li><input type="checkbox" name="question-42" value="D">D. Amazon CloudWatch</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Artifact is your go-to, central resource for compliance-related information that matters to you.</li>
        <li>It provides on-demand access to AWS’ security and compliance reports and select online agreements.</li>
        <li>Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls.</li>
        <li>Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA).</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/artifact/">https://aws.amazon.com/artifact/</a></p>

    </details>
  </li>
  <li>What are the benefits of using the AWS Cloud for companies with customers in many countries around the world? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. Companies can deploy applications in multiple AWS Regions to reduce latency.</li>
      <li><input type="checkbox" name="question-43" value="B">B. Amazon Translate automatically translates third-party website interfaces into multiple languages.</li>
      <li><input type="checkbox" name="question-43" value="C">C. Amazon CloudFront has multiple edge locations around the world to reduce latency.</li>
      <li><input type="checkbox" name="question-43" value="D">D. Amazon Comprehend allows users to build applications that can respond to user requests in many languages.</li>
      <li><input type="checkbox" name="question-43" value="E">E. Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world, which reduces latency.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation:</p>
      <ul>
        <li><a href="https://aws.amazon.com/cloudfront/">https://aws.amazon.com/cloudfront/</a></li>
      </ul>

    </details>
  </li>
  <li>Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-44" value="B">B. AWS Elastic Beanstalk</li>
      <li><input type="checkbox" name="question-44" value="C">C. Amazon Route 53</li>
      <li><input type="checkbox" name="question-44" value="D">D. Amazon CloudFront</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring.</li>
        <li>At the same time, you retain full control over the AWS resources powering your application and can access the underlying resources at any time.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/elasticbeanstalk/">https://aws.amazon.com/elasticbeanstalk/</a></p>

    </details>
  </li>
  <li>Which AWS service provides inbound and outbound network ACLs to harden external connectivity to Amazon EC2?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. AWS IAM</li>
      <li><input type="checkbox" name="question-45" value="B">B. Amazon Connect</li>
      <li><input type="checkbox" name="question-45" value="C">C. Amazon VPC</li>
      <li><input type="checkbox" name="question-45" value="D">D. Amazon API Gateway</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html">https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html</a></p>

    </details>
  </li>
  <li>When a company provisions web servers in multiple AWS Regions, what is being increased?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Coupling</li>
      <li><input type="checkbox" name="question-46" value="B">B. Availability</li>
      <li><input type="checkbox" name="question-46" value="C">C. Security</li>
      <li><input type="checkbox" name="question-46" value="D">D. Durability</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html</a></p>

    </details>
  </li>
  <li>The pay-as-you-go pricing model for AWS services:
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. reduces capital expenditures.</li>
      <li><input type="checkbox" name="question-47" value="B">B. requires payment up front for AWS services.</li>
      <li><input type="checkbox" name="question-47" value="C">C. is relevant only for Amazon EC2, Amazon S3, and Amazon RDS.</li>
      <li><input type="checkbox" name="question-47" value="D">D. reduces operational expenditures.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://www.10thmagnitude.com/opex-vs-capex-the-real-cloud-computing-cost-advantage/">https://www.10thmagnitude.com/opex-vs-capex-the-real-cloud-computing-cost-advantage/</a></p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, AWS is responsible for which security-related task?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Lifecycle management of IAM credentials</li>
      <li><input type="checkbox" name="question-48" value="B">B. Physical security of global infrastructure</li>
      <li><input type="checkbox" name="question-48" value="C">C. Encryption of Amazon EBS volumes</li>
      <li><input type="checkbox" name="question-48" value="D">D. Firewall configuration</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://cloudacademy.com/blog/aws-shared-responsibility-model-security/">https://cloudacademy.com/blog/aws-shared-responsibility-model-security/</a></p>

    </details>
  </li>
  <li>Which AWS service enables users to consolidate billing across multiple accounts?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Amazon QuickSight</li>
      <li><input type="checkbox" name="question-49" value="B">B. AWS Organizations</li>
      <li><input type="checkbox" name="question-49" value="C">C. AWS Budgets</li>
      <li><input type="checkbox" name="question-49" value="D">D. Amazon Forecast</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>You can use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts.</li>
        <li>Every organization in AWS Organizations has a master (payer) account that pays the charges of all the member (linked)
accounts.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></p>

    </details>
  </li>
</ol>
      `,
    data: []
  },
];