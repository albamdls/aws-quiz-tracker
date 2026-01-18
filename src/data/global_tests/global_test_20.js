export default [
  {
    id: 20,
    title: "Practice Exam 20",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Amazon Rekognition</li>
      <li><input type="checkbox" name="question-0" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-0" value="C">C. Amazon GuardDuty</li>
      <li><input type="checkbox" name="question-0" value="D">D. Amazon CloudWatch</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/guardduty/">https://aws.amazon.com/guardduty/</a></p>

    </details>
  </li>
  <li>A company wants to try a third-party ecommerce solution before deciding to use it long term. <br> Which AWS service or tool will support this effort?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. AWS Marketplace</li>
      <li><input type="checkbox" name="question-1" value="B">B. AWS Partner Network (APN)</li>
      <li><input type="checkbox" name="question-1" value="C">C. AWS Managed Services</li>
      <li><input type="checkbox" name="question-1" value="D">D. AWS Service Catalog</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/about-aws/whats-new/2019/09/aws-marketplace-easier-to-find-solutions-from-aws-console/">https://aws.amazon.com/about-aws/whats-new/2019/09/aws-marketplace-easier-to-find-solutions-from-aws-console/</a></p>

    </details>
  </li>
  <li>Which AWS service is a managed NoSQL database?
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Amazon Redshift</li>
      <li><input type="checkbox" name="question-2" value="B">B. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-2" value="C">C. Amazon Aurora</li>
      <li><input type="checkbox" name="question-2" value="D">D. Amazon RDS for MariaDB</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/dynamodb/">https://aws.amazon.com/dynamodb/</a></p>

    </details>
  </li>
  <li>Which AWS service should be used to create a billing alarm?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-3" value="B">B. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-3" value="C">C. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-3" value="D">D. Amazon QuickSight</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html</a></p>

    </details>
  </li>
  <li>A company is hosting a web application in a Docker container on Amazon EC2. <br> AWS is responsible for which of the following tasks?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Scaling the web application and services developed with Docker</li>
      <li><input type="checkbox" name="question-4" value="B">B. Provisioning or scheduling containers to run on clusters and maintain their availability</li>
      <li><input type="checkbox" name="question-4" value="C">C. Performing hardware maintenance in the AWS facilities that run the AWS Cloud</li>
      <li><input type="checkbox" name="question-4" value="D">D. Managing the guest operating system, including updates and security patches</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/getting-started/tutorials/deploy-docker-containers/">https://aws.amazon.com/getting-started/tutorials/deploy-docker-containers/</a></p>

    </details>
  </li>
  <li>Users are reporting latency when connecting to a website with a global customer base. <br> Which AWS service will improve the customer experience by reducing latency?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-5" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-5" value="C">C. Amazon EC2 Auto Scaling</li>
      <li><input type="checkbox" name="question-5" value="D">D. AWS Transit Gateway</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/">https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/</a></p>

    </details>
  </li>
  <li>Which actions represent best practices for using AWS IAM? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Configure a strong password policy</li>
      <li><input type="checkbox" name="question-6" value="B">B. Share the security credentials among users of AWS accounts who are in the same Region</li>
      <li><input type="checkbox" name="question-6" value="C">C. Use access keys to log in to the AWS Management Console</li>
      <li><input type="checkbox" name="question-6" value="D">D. Rotate access keys on a regular basis</li>
      <li><input type="checkbox" name="question-6" value="E">E. Avoid using IAM roles to delegate permissions</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html</a></p>

    </details>
  </li>
  <li>Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-7" value="B">B. VPC Flow Logs</li>
      <li><input type="checkbox" name="question-7" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-7" value="D">D. AWS CloudTrail</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:
 <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html">https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html</a></p>

    </details>
  </li>
  <li>A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. <br> Which service will support these requirements?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Amazon Inspector</li>
      <li><input type="checkbox" name="question-8" value="B">B. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-8" value="C">C. AWS Global Accelerator</li>
      <li><input type="checkbox" name="question-8" value="D">D. Amazon CloudFront</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Global Accelerator uses the AWS global network to optimize the path from your users to your applications, improving the performance of your traffic by as much as 60%.</li>
        <li>AWS Global Accelerator continually monitors the health of your application endpoints and redirects traffic to healthy endpoints in less than 30 seconds.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/global-accelerator/?blogs-global-accelerator.sort-by=item.additionalFields.createdDate&amp;blogs-global-accelerator.sort-order=desc&amp;aws-global-accelerator-wn.sort-by=item.additionalFields.postDateTime&amp;aws-global-accelerator-wn.sort-order=desc">https://aws.amazon.com/global-accelerator/?blogs-global-accelerator.sort-by=item.additionalFields.createdDate&amp;blogs-global-accelerator.sort-order=desc&amp;aws-global-accelerator-wn.sort-by=item.additionalFields.postDateTime&amp;aws-global-accelerator-wn.sort-order=desc</a></p>

    </details>
  </li>
  <li>According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. Use AWS Config to generate an inventory of AWS resources</li>
      <li><input type="checkbox" name="question-9" value="B">B. Use service limits to prevent users from creating or making changes to AWS resources</li>
      <li><input type="checkbox" name="question-9" value="C">C. Use AWS CloudTrail to record AWS API calls into an auditable log file</li>
      <li><input type="checkbox" name="question-9" value="D">D. Use AWS Certificate Manager to whitelist approved AWS resources and services</li>
      <li><input type="checkbox" name="question-9" value="E">E. Use Amazon GuardDuty to validate configuration changes made to AWS resources</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: Ac</p>

    </details>
  </li>
  <li>Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-10" value="B">B. AWS Config</li>
      <li><input type="checkbox" name="question-10" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-10" value="D">D. AWS IAM</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/mt/monitor-and-notify-on-aws-account-root-user-activity/">https://aws.amazon.com/blogs/mt/monitor-and-notify-on-aws-account-root-user-activity/</a></p>

    </details>
  </li>
  <li>Which design principle should be considered when architecting in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Think of servers as non-disposable resources</li>
      <li><input type="checkbox" name="question-11" value="B">B. Use synchronous integration of services</li>
      <li><input type="checkbox" name="question-11" value="C">C. Design loosely coupled components</li>
      <li><input type="checkbox" name="question-11" value="D">D. Implement the least permissive rules for security groups</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/">https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/</a></p>

    </details>
  </li>
  <li>Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. AWS Snowball</li>
      <li><input type="checkbox" name="question-12" value="B">B. AWS Lambda</li>
      <li><input type="checkbox" name="question-12" value="C">C. AWS ElastiCache</li>
      <li><input type="checkbox" name="question-12" value="D">D. AWS Database Migration Service (AWS DMS)</li>
      <li><input type="checkbox" name="question-12" value="E">E. Amazon API Gateway</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation: <a href="https://aws.amazon.com/snowball/">https://aws.amazon.com/snowball/</a></p>

    </details>
  </li>
  <li>A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. <br> What is the best cloud architecture to address this consistently growing demand?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Run the application on a bigger EC2 instance size.</li>
      <li><input type="checkbox" name="question-13" value="B">B. Switch to an EC2 instance family that better matches batch requirements.</li>
      <li><input type="checkbox" name="question-13" value="C">C. Distribute the application across multiple EC2 instances and run the workload in parallel.</li>
      <li><input type="checkbox" name="question-13" value="D">D. Run the application on a bare metal EC2 instance.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. <br> How can this be achieved using AWS services or features?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.</li>
      <li><input type="checkbox" name="question-14" value="B">B. Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.</li>
      <li><input type="checkbox" name="question-14" value="C">C. Configure AWS Organizations in each of the existing accounts. Then link all accounts together.</li>
      <li><input type="checkbox" name="question-14" value="D">D. Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html</a></p>

    </details>
  </li>
  <li>The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Economy of scale</li>
      <li><input type="checkbox" name="question-15" value="B">B. Elasticity</li>
      <li><input type="checkbox" name="question-15" value="C">C. High availability</li>
      <li><input type="checkbox" name="question-15" value="D">D. Agility</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. <br> Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-16" value="B">B. Amazon EC2 Auto Scaling</li>
      <li><input type="checkbox" name="question-16" value="C">C. Amazon Forecast</li>
      <li><input type="checkbox" name="question-16" value="D">D. AWS Config</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/autoscaling/">https://aws.amazon.com/autoscaling/</a></p>

    </details>
  </li>
  <li>Which AWS service enables users to securely connect to AWS resources over the public internet?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Amazon VPC peering</li>
      <li><input type="checkbox" name="question-17" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-17" value="C">C. AWS VPN</li>
      <li><input type="checkbox" name="question-17" value="D">D. Amazon Pinpoint</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf">https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf</a></p>

    </details>
  </li>
  <li>Which tool is used to forecast AWS spending?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-18" value="B">B. AWS Organizations</li>
      <li><input type="checkbox" name="question-18" value="C">C. Cost Explorer</li>
      <li><input type="checkbox" name="question-18" value="D">D. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html</a></p>

    </details>
  </li>
  <li>A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. <br> Which AWS service will support these requirements?
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Amazon ElastiCache</li>
      <li><input type="checkbox" name="question-19" value="B">B. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-19" value="C">C. Amazon Elastic File System (Amazon EFS)</li>
      <li><input type="checkbox" name="question-19" value="D">D. Amazon Elastic Block Store (Amazon EBS)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon CloudFront employs a global network of edge locations and regional edge caches that cache copies of your content close to your viewers.</li>
        <li>Amazon CloudFront ensures that end-user requests are served by the closest edge location.</li>
        <li>As a result, viewer requests travel a short distance, improving performance for your viewers.</li>
        <li>For files not cached at the edge locations and the regional edge caches, Amazon CloudFront keeps persistent connections with your origin servers so that those files can be fetched from the origin servers as quickly as possible.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/cloudfront/faqs/">https://aws.amazon.com/cloudfront/faqs/</a></p>

    </details>
  </li>
  <li>Which of the following is a component of the AWS Global Infrastructure?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. Amazon Alexa</li>
      <li><input type="checkbox" name="question-20" value="B">B. AWS Regions</li>
      <li><input type="checkbox" name="question-20" value="C">C. Amazon Lightsail</li>
      <li><input type="checkbox" name="question-20" value="D">D. AWS Organizations</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/about-aws/global-infrastructure/">https://aws.amazon.com/about-aws/global-infrastructure/</a></p>

    </details>
  </li>
  <li>Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-21" value="B">B. AWS Config</li>
      <li><input type="checkbox" name="question-21" value="C">C. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-21" value="D">D. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/faqs/">https://aws.amazon.com/ec2/faqs/</a></p>

    </details>
  </li>
  <li>Why is it beneficial to use Elastic Load Balancers with applications?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. They allow for the conversion from Application Load Balancers to Classic Load Balancers.</li>
      <li><input type="checkbox" name="question-22" value="B">B. They are capable of handling constant changes in network traffic patterns.</li>
      <li><input type="checkbox" name="question-22" value="C">C. They automatically adjust capacity.</li>
      <li><input type="checkbox" name="question-22" value="D">D. They are provided at no charge to users.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html">https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html</a></p>

    </details>
  </li>
  <li>Which tasks are the customer’s responsibility in the AWS shared responsibility model? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Infrastructure facilities access management</li>
      <li><input type="checkbox" name="question-23" value="B">B. Cloud infrastructure hardware lifecycle management</li>
      <li><input type="checkbox" name="question-23" value="C">C. Configuration management of user’s applications</li>
      <li><input type="checkbox" name="question-23" value="D">D. Networking infrastructure protection</li>
      <li><input type="checkbox" name="question-23" value="E">E. Security groups configuration</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CE</p>

      <p>Explanation: <a href="https://cloudacademy.com/blog/aws-shared-responsibility-model-security/">https://cloudacademy.com/blog/aws-shared-responsibility-model-security/</a></p>

    </details>
  </li>
  <li>IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. <br> This is an example of which principle of cloud architecture design?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Scalability</li>
      <li><input type="checkbox" name="question-24" value="B">B. Loose coupling</li>
      <li><input type="checkbox" name="question-24" value="C">C. Automation</li>
      <li><input type="checkbox" name="question-24" value="D">D. Automatic scaling</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf">https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf</a></p>

    </details>
  </li>
  <li>Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. AWS WAF</li>
      <li><input type="checkbox" name="question-25" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-25" value="C">C. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-25" value="D">D. AWS Organizations</li>
      <li><input type="checkbox" name="question-25" value="E">E. Network ACLs</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AE</p>

      <p>Explanation:</p>
      <ul>
        <li><a href="https://aws.amazon.com/waf/">https://aws.amazon.com/waf/</a></li>
        <li><a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html</a></li>
      </ul>

    </details>
  </li>
  <li>An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. <br> Which AWS storage service should be used?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. Amazon EBS</li>
      <li><input type="checkbox" name="question-26" value="B">B. Amazon EFS</li>
      <li><input type="checkbox" name="question-26" value="C">C. Amazon S3</li>
      <li><input type="checkbox" name="question-26" value="D">D. AWS Artifact</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/efs/">https://aws.amazon.com/efs/</a></p>

    </details>
  </li>
  <li>A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. <br> Which security measures fall under the responsibility of AWS? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. Running a virus scan on EC2 instances</li>
      <li><input type="checkbox" name="question-27" value="B">B. Protecting against IP spoofing and packet sniffing</li>
      <li><input type="checkbox" name="question-27" value="C">C. Installing the latest security patches on the RDS instance</li>
      <li><input type="checkbox" name="question-27" value="D">D. Encrypting communication between the EC2 instances and the Elastic Load Balancer</li>
      <li><input type="checkbox" name="question-27" value="E">E. Configuring a security group and a network access control list (NACL) for EC2</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

    </details>
  </li>
  <li>What is the benefit of elasticity in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Ensure web traffic is automatically spread across multiple AWS Regions.</li>
      <li><input type="checkbox" name="question-28" value="B">B. Minimize storage costs by automatically archiving log data.</li>
      <li><input type="checkbox" name="question-28" value="C">C. Enable AWS to automatically select the most cost-effective services.</li>
      <li><input type="checkbox" name="question-28" value="D">D. Automatically adjust the required compute capacity to maintain consistent performance.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aimconsulting.com/insights/blog/the-elastic-cloud-opportunity/">https://aimconsulting.com/insights/blog/the-elastic-cloud-opportunity/</a></p>

    </details>
  </li>
  <li>The continual reduction of AWS Cloud pricing is due to:
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. pay-as-you go pricing</li>
      <li><input type="checkbox" name="question-29" value="B">B. the AWS global infrastructure</li>
      <li><input type="checkbox" name="question-29" value="C">C. economies of scale</li>
      <li><input type="checkbox" name="question-29" value="D">D. reserved storage pricing</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. <br> How can this be accomplished?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. Enable S3 Block Public Access from the AWS Management Console.</li>
      <li><input type="checkbox" name="question-30" value="B">B. Hold a team meeting to discuss the importance if only uploading private S3 objects.</li>
      <li><input type="checkbox" name="question-30" value="C">C. Require all S3 objects to be manually approved before uploading.</li>
      <li><input type="checkbox" name="question-30" value="D">D. Create a service to monitor all S3 uploads and remove any public uploads.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html</a></p>

    </details>
  </li>
  <li>A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. <br> Which action can be taken to resolve this?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Open a detailed case related to billing and submit it to AWS Support for help.</li>
      <li><input type="checkbox" name="question-31" value="B">B. Upload data describing the issue to a new object in a private Amazon S3 bucket.</li>
      <li><input type="checkbox" name="question-31" value="C">C. Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.</li>
      <li><input type="checkbox" name="question-31" value="D">D. Proceed with creating a new dashboard in Amazon QuickSight.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: &lt; https://docs.aws.amazon.com/awssupport/latest/user/case-management.html&gt;</p>

    </details>
  </li>
  <li>What does the AWS Simple Monthly Calculator do?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Compares on-premises costs to colocation environments</li>
      <li><input type="checkbox" name="question-32" value="B">B. Estimates monthly billing based on projected usage</li>
      <li><input type="checkbox" name="question-32" value="C">C. Estimates power consumption at existing data centers</li>
      <li><input type="checkbox" name="question-32" value="D">D. Estimates CPU utilization</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/aws/estimate-your-c/">https://aws.amazon.com/blogs/aws/estimate-your-c/</a></p>

    </details>
  </li>
  <li>Who is responsible for patching the guest operating system for Amazon RDS?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. The AWS Product team</li>
      <li><input type="checkbox" name="question-33" value="B">B. The customer Database Administrator</li>
      <li><input type="checkbox" name="question-33" value="C">C. Managed partners</li>
      <li><input type="checkbox" name="question-33" value="D">D. AWS Support</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Amazon EC2</li>
      <li><input type="checkbox" name="question-34" value="B">B. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-34" value="C">C. Amazon S3</li>
      <li><input type="checkbox" name="question-34" value="D">D. Amazon Route 53</li>
      <li><input type="checkbox" name="question-34" value="E">E. Amazon Redshift</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AB</p>

      <p>Explanation: <a href="https://aws.amazon.com/autoscaling/faqs/">https://aws.amazon.com/autoscaling/faqs/</a></p>

    </details>
  </li>
  <li>Which of the following are benefits of AWS Global Accelerator? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Reduced cost to run services on AWS</li>
      <li><input type="checkbox" name="question-35" value="B">B. Improved availability of applications deployed on AWS</li>
      <li><input type="checkbox" name="question-35" value="C">C. Higher durability of data stored on AWS</li>
      <li><input type="checkbox" name="question-35" value="D">D. Decreased latency to reach applications deployed on AWS</li>
      <li><input type="checkbox" name="question-35" value="E">E. Higher security of data stored on AWS</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation: <a href="https://aws.amazon.com/global-accelerator/faqs/">https://aws.amazon.com/global-accelerator/faqs/</a></p>

    </details>
  </li>
  <li>A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. the AWS Support forum</li>
      <li><input type="checkbox" name="question-36" value="B">B. AWS Abuse</li>
      <li><input type="checkbox" name="question-36" value="C">C. an AWS Solutions Architect</li>
      <li><input type="checkbox" name="question-36" value="D">D. AWS Support</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/reactivate-suspended-account/">https://aws.amazon.com/premiumsupport/knowledge-center/reactivate-suspended-account/</a></p>

    </details>
  </li>
  <li>Which AWS Cloud best practice uses the elasticity and agility of cloud computing?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Provision capacity based on past usage and theoretical peaks</li>
      <li><input type="checkbox" name="question-37" value="B">B. Dynamically and predictively scale to meet usage demands</li>
      <li><input type="checkbox" name="question-37" value="C">C. Build the application and infrastructure in a data center that grants physical access</li>
      <li><input type="checkbox" name="question-37" value="D">D. Break apart the application into loosely coupled components</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>In a traditional computing environment, you provision capacity based on an estimate of a theoretical maximum peak.</li>
        <li>This can result in periods where expensive resources are sitting idle or occasions of insufficient capacity.</li>
        <li>With cloud computing, you can access as much or as little capacity as you need and dynamically scale to meet actual demand, while only paying for what you use.</li>
      </ul>

    </details>
  </li>
  <li>Which method helps to optimize costs of users moving to the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Paying only for what is used</li>
      <li><input type="checkbox" name="question-38" value="B">B. Purchasing hardware before it is needed</li>
      <li><input type="checkbox" name="question-38" value="C">C. Manually provisioning cloud resources</li>
      <li><input type="checkbox" name="question-38" value="D">D. Purchasing for the maximum possible load</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://www.cloudmanagementinsider.com/ways-to-optimize-aws-cost/">https://www.cloudmanagementinsider.com/ways-to-optimize-aws-cost/</a></p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, which of the following is a customer responsibility?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Installing security patches for the Xen and KVM hypervisors</li>
      <li><input type="checkbox" name="question-39" value="B">B. Installing operating system patches for Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-39" value="C">C. Installing operating system security patches for Amazon EC2 database instances</li>
      <li><input type="checkbox" name="question-39" value="D">D. Installing operating system security patches for Amazon RDS database instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Terminate all AWS resources automatically if budget thresholds are exceeded.</li>
      <li><input type="checkbox" name="question-40" value="B">B. Break down AWS costs by day, service, and linked AWS account.</li>
      <li><input type="checkbox" name="question-40" value="C">C. Create budgets and receive notifications if current of forecasted usage exceeds the budgets.</li>
      <li><input type="checkbox" name="question-40" value="D">D. Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective.</li>
      <li><input type="checkbox" name="question-40" value="E">E. Move data stored in Amazon S3 to a more cost-effective storage class.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. AWS Support</li>
      <li><input type="checkbox" name="question-41" value="B">B. the customer</li>
      <li><input type="checkbox" name="question-41" value="C">C. AWS Systems Manager</li>
      <li><input type="checkbox" name="question-41" value="D">D. AWS Config</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-42" value="B">B. Amazon Connect</li>
      <li><input type="checkbox" name="question-42" value="C">C. AWS Identity and Access Management (IAM)</li>
      <li><input type="checkbox" name="question-42" value="D">D. AWS Firewall Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/console_controlling-access.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/console_controlling-access.html</a></li>
        <li><a href="https://aws.amazon.com/iam/">https://aws.amazon.com/iam/</a></li>
      </ul>

    </details>
  </li>
  <li>Which AWS service provides on-demand of AWS security and compliance documentation?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. AWS Directory Service</li>
      <li><input type="checkbox" name="question-43" value="B">B. AWS Artifact</li>
      <li><input type="checkbox" name="question-43" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-43" value="D">D. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/artifact/#:~:text=AWS%20Artifact%20is%20your%20go,reports%20and%20select%20online%20agreements">https://aws.amazon.com/artifact/#:~:text=AWS%20Artifact%20is%20your%20go,reports%20and%20select%20online%20agreements</a>.</p>

    </details>
  </li>
  <li>Which AWS service can be used to turn text into life-like speech?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Amazon Polly</li>
      <li><input type="checkbox" name="question-44" value="B">B. Amazon Transcribe</li>
      <li><input type="checkbox" name="question-44" value="C">C. Amazon Rekognition</li>
      <li><input type="checkbox" name="question-44" value="D">D. Amazon Lex</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/polly/#:~:text=Amazon%20Polly%20is%20a%20service,synthesize%20natural%20sounding%20human%20speech">https://aws.amazon.com/polly/#:~:text=Amazon%20Polly%20is%20a%20service,synthesize%20natural%20sounding%20human%20speech</a>.</p>

    </details>
  </li>
  <li>What is one of the core principles to follow when designing a highly available application in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. Design using a serverless architecture</li>
      <li><input type="checkbox" name="question-45" value="B">B. Assume that all components within an application can fail</li>
      <li><input type="checkbox" name="question-45" value="C">C. Design AWS Auto Scaling into every application</li>
      <li><input type="checkbox" name="question-45" value="D">D. Design all components using open-source code</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include:
<br> (The status of Amazon S3 bucket permissions, Whether multi-factor authentication is enabled for the AWS account root user, If any security groups are configured to allow unrestricted access.) <br> Where can all this information be found in one location?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Amazon QuickSight dashboard</li>
      <li><input type="checkbox" name="question-46" value="B">B. AWS CloudTrail trails</li>
      <li><input type="checkbox" name="question-46" value="C">C. AWS Trusted Advisor report</li>
      <li><input type="checkbox" name="question-46" value="D">D. IAM credential report</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:
<a href="https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/">https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/</a> #Security</p>

    </details>
  </li>
  <li>Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Dedicated Hosts</li>
      <li><input type="checkbox" name="question-47" value="B">B. On-Demand Instances</li>
      <li><input type="checkbox" name="question-47" value="C">C. Spot Instances</li>
      <li><input type="checkbox" name="question-47" value="D">D. Reserved Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/dedicated-hosts/pricing/">https://aws.amazon.com/ec2/dedicated-hosts/pricing/</a></p>

    </details>
  </li>
  <li>Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. AWS Regions</li>
      <li><input type="checkbox" name="question-48" value="B">B. Availability Zones</li>
      <li><input type="checkbox" name="question-48" value="C">C. Edge locations</li>
      <li><input type="checkbox" name="question-48" value="D">D. Data centers</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>When your web traffic is geo-dispersed, it’s not always feasible and certainly not cost effective to replicate your entire infrastructure across the globe.</li>
        <li>A CDN provides you the ability to utilize its global network of edge locations to deliver a cached copy of web content such as videos, webpages, images and so on to your customers.</li>
        <li>To reduce response time, the CDN utilizes the nearest edge location to the customer or originating request location in order to reduce the response time.</li>
        <li>Throughput is dramatically increased given that the web assets are delivered from cache.</li>
        <li>For dynamic data, many CDNs can be configured to retrieve data from the origin servers.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/caching/">https://aws.amazon.com/caching/</a></p>

    </details>
  </li>
  <li>Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Security</li>
      <li><input type="checkbox" name="question-49" value="B">B. Operational excellence</li>
      <li><input type="checkbox" name="question-49" value="C">C. Performance efficiency</li>
      <li><input type="checkbox" name="question-49" value="D">D. Cost optimization</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf">https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf</a></p>

    </details>
  </li>
</ol>
      `,
    data: []
  },
];