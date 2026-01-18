export default [
  {
    id: 16,
    title: "Practice Exam 16",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Cost Explorer</li>
      <li><input type="checkbox" name="question-0" value="B">B. AWS Total Cost of Ownership (TCO) Calculator</li>
      <li><input type="checkbox" name="question-0" value="C">C. AWS Simple Monthly Calculator</li>
      <li><input type="checkbox" name="question-0" value="D">D. AWS Trusted Advisor</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS TCO calculators allow you to estimate the cost savings when using AWS and provide a detailed set of reports that can be used in executive presentations.</li>
        <li>The calculators also give you the option to modify assumptions that best meet your business needs.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/tco-calculator/">https://aws.amazon.com/tco-calculator/</a></p>

    </details>
  </li>
  <li>Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. AWS Cost Explorer between AWS accounts</li>
      <li><input type="checkbox" name="question-1" value="B">B. Linked accounts and consolidated billing</li>
      <li><input type="checkbox" name="question-1" value="C">C. Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report</li>
      <li><input type="checkbox" name="question-1" value="D">D. Amazon EC2 Instance Usage Report between AWS accounts</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>The way that Reserved Instance discounts apply to accounts in an organization’s consolidated billing family depends on whether Reserved Instance sharing is turned on or off for the account.</li>
        <li>By default, Reserved Instance sharing for all accounts in an organization is turned on.</li>
        <li>You can change this setting by Turning Off Reserved Instance Sharing for an account.</li>
        <li>The capacity reservation for a Reserved Instance applies only to the account the Reserved Instance was purchased on, regardless of whether Reserved Instance sharing is turned on or off.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/">https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/</a></p>

    </details>
  </li>
  <li>A company has multiple AWS accounts and wants to simplify and consolidate its billing process. <br>Which AWS service will achieve this?
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. AWS Cost and Usage Reports</li>
      <li><input type="checkbox" name="question-2" value="B">B. AWS Organizations</li>
      <li><input type="checkbox" name="question-2" value="C">C. AWS Cost Explorer</li>
      <li><input type="checkbox" name="question-2" value="D">D. AWS Budgets</li>
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
  <li>A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. <br> Which of the following services will help fulfill this requirement?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-3" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-3" value="C">C. Amazon Route 53 global DNS</li>
      <li><input type="checkbox" name="question-3" value="D">D. Amazon Simple Storage Service (Amazon S3) transfer acceleration</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon CloudFront is a content delivery network (CDN) service that distributes data from multiple locations worldwide, providing low-latency access to end-users.</li>
      </ul>

    </details>
  </li>
  <li>Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. On-premises</li>
      <li><input type="checkbox" name="question-4" value="B">B. Hybrid</li>
      <li><input type="checkbox" name="question-4" value="C">C. Cloud</li>
      <li><input type="checkbox" name="question-4" value="D">D. Platform as a service</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>The cloud allows you to trade capital expenses (such as data centers and physical servers) for variable expenses, and only pay for IT as you consume it.</li>
        <li>Plus, the variable expenses are much lower than what you would pay to do it yourself because of the economies of scale.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/what-is-cloud-computing/">https://aws.amazon.com/what-is-cloud-computing/</a></p>

    </details>
  </li>
  <li>How is asset management on AWS easier than asset management in a physical data center?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. AWS provides a Configuration Management Database that users can maintain.</li>
      <li><input type="checkbox" name="question-5" value="B">B. AWS performs infrastructure discovery scans on the customer’s behalf.</li>
      <li><input type="checkbox" name="question-5" value="C">C. Amazon EC2 automatically generates an asset report and places it in the customer’s specified Amazon S3 bucket.</li>
      <li><input type="checkbox" name="question-5" value="D">D. Users can gather asset metadata reliably with a few API calls.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS assets are centrally managed through an inventory management system that stores and tracks owner, location, status, maintenance, and descriptive information for AWS-owned assets.</li>
        <li>Following procurement, assets are scanned and tracked, and assets undergoing maintenance are checked and monitored for
 ownership, status, and resolution.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/compliance/data-center/controls/">https://aws.amazon.com/compliance/data-center/controls/</a></p>

    </details>
  </li>
  <li>What feature of Amazon RDS helps to create globally redundant databases?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Snapshots</li>
      <li><input type="checkbox" name="question-6" value="B">B. Automatic patching and updating</li>
      <li><input type="checkbox" name="question-6" value="C">C. Cross-Region read replicas</li>
      <li><input type="checkbox" name="question-6" value="D">D. Provisioned IOPS</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.amazonaws.cn/en_us/AmazonRDS/latest/UserGuide/rds-ug.pdf">https://docs.amazonaws.cn/en_us/AmazonRDS/latest/UserGuide/rds-ug.pdf</a></p>

    </details>
  </li>
  <li>Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. restricted access.</li>
      <li><input type="checkbox" name="question-7" value="B">B. as-needed access.</li>
      <li><input type="checkbox" name="question-7" value="C">C. least privilege access.</li>
      <li><input type="checkbox" name="question-7" value="D">D. token access.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>When you create IAM policies, follow the standard security advice of granting least privilege, or granting only the permissions required to perform a task.</li>
        <li>Determine what users (and roles) need to do and then craft policies that allow them to perform only those tasks.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html</a></p>

    </details>
  </li>
  <li>Which methods can be used to identify AWS costs by departments? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Enable multi-factor authentication for the AWS account root user.</li>
      <li><input type="checkbox" name="question-8" value="B">B. Create separate accounts for each department.</li>
      <li><input type="checkbox" name="question-8" value="C">C. Use Reserved Instances whenever possible.</li>
      <li><input type="checkbox" name="question-8" value="D">D. Use tags to associate each instance with a particular department.</li>
      <li><input type="checkbox" name="question-8" value="E">E. Pay bills using purchase orders.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation:</p>
      <ul>
        <li>Tags are key-value pairs that allow you to organize your AWS resources into groups. You can use tags to:</li>
        <li>Visualize information about tagged resources in one place, in conjunction with Resource Groups.</li>
        <li>View billing information using Cost Explorer and the AWS Cost and Usage report.</li>
        <li>Send notifications about spending limits using AWS Budgets.</li>
        <li>Use logical groupings of your resources that make sense for your infrastructure or business.</li>
        <li>For example, you could organize your resources by:
          <ul>
            <li>Project</li>
            <li>Cost center</li>
            <li>Development environment</li>
            <li>Application</li>
            <li>Department</li>
          </ul>
        </li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/tags-billing-cost-center-project/">https://aws.amazon.com/premiumsupport/knowledge-center/tags-billing-cost-center-project/</a></p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, customer responsibilities include which one of the following?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. Securing the hardware, software, facilities, and networks that run all products and services.</li>
      <li><input type="checkbox" name="question-9" value="B">B. Providing certificates, reports, and other documentation directly to AWS customers under NDA.</li>
      <li><input type="checkbox" name="question-9" value="C">C. Configuring the operating system, network, and firewall.</li>
      <li><input type="checkbox" name="question-9" value="D">D. Obtaining industry certifications and independent third-party attestations.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>Which managed AWS service provides real-time guidance on AWS security best practices?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. AWS X-Ray</li>
      <li><input type="checkbox" name="question-10" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-10" value="C">C. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-10" value="D">D. AWS Systems Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS offers premium services such as AWS Trusted Advisor, which provides real-time guidance to help you reduce cost, increase performance, and improve security.</li>
      </ul>

      <p>Reference: <a href="https://www.ibm.com/downloads/cas/2N40X4PQ">https://www.ibm.com/downloads/cas/2N40X4PQ</a></p>

    </details>
  </li>
  <li>Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Resource groups</li>
      <li><input type="checkbox" name="question-11" value="B">B. Lifecycle policies</li>
      <li><input type="checkbox" name="question-11" value="C">C. Application Load Balancer</li>
      <li><input type="checkbox" name="question-11" value="D">D. Amazon EC2 Auto Scaling</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Support for monitoring the health of each service independently, as health checks are defined at the target group level and many CloudWatch metrics are reported at the target group level.</li>
        <li>Attaching a target group to an Auto Scaling group enables you to scale each service dynamically based on demand.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html">https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html</a></p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Visualization management</li>
      <li><input type="checkbox" name="question-12" value="B">B. Hardware management</li>
      <li><input type="checkbox" name="question-12" value="C">C. Encryption management</li>
      <li><input type="checkbox" name="question-12" value="D">D. Facilities management</li>
      <li><input type="checkbox" name="question-12" value="E">E. Firewall management</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CE</p>

      <p>Explanation:</p>
      <ul>
        <li>With the basic Cloud infrastructure secured and maintained by AWS, the responsibility for what goes into the cloud falls on you. This covers both client and server side encryption and network traffic protection, security of the operating system, network, and firewall configuration, followed by application security and identity and access management.</li>
        <li>Firewall configuration remains the responsibility of the end user, which integrates at the platform and application management level. For example, RDS utilizes security groups, which you would be responsible for configuring and implementing.</li>
      </ul>

      <p>Reference: <a href="https://cloudacademy.com/blog/aws-shared-responsibility-model-security/">https://cloudacademy.com/blog/aws-shared-responsibility-model-security/</a></p>

    </details>
  </li>
  <li>Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-13" value="B">B. AWS Snowball</li>
      <li><input type="checkbox" name="question-13" value="C">C. AWS Storage Gateway</li>
      <li><input type="checkbox" name="question-13" value="D">D. AWS Snowball Edge</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>The AWS Storage Gateway service enables hybrid cloud storage between on-premises environments and the AWS Cloud.</li>
        <li>It seamlessly integrates on-premises enterprise applications and workflows with Amazon’s block and object cloud storage services through industry standard storage protocols.</li>
        <li>It provides low-latency performance by caching frequently accessed data on premises, while storing data securely and durably in Amazon cloud storage services.</li>
        <li>It provides an optimized data transfer mechanism and bandwidth management, which tolerates unreliable networks and minimizes the amount of data being transferred.</li>
        <li>It brings the security, manageability, durability, and scalability of AWS to existing enterprise environments through native integration with AWS encryption, identity management, monitoring, and storage services. Typical use cases include backup and archiving, disaster recovery, moving data to S3 for in-cloud workloads, and tiered storage.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/storagegateway/faqs/">https://aws.amazon.com/storagegateway/faqs/</a></p>

    </details>
  </li>
  <li>What is a responsibility of AWS in the shared responsibility model?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. Updating the network ACLs to block traffic to vulnerable ports.</li>
      <li><input type="checkbox" name="question-14" value="B">B. Patching operating systems running on Amazon EC2 instances.</li>
      <li><input type="checkbox" name="question-14" value="C">C. Updating the firmware on the underlying EC2 hosts.</li>
      <li><input type="checkbox" name="question-14" value="D">D. Updating the security group rules to block traffic to the vulnerable ports.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://cloudacademy.com/blog/aws-shared-responsibility-model-security/">https://cloudacademy.com/blog/aws-shared-responsibility-model-security/</a></p>

    </details>
  </li>
  <li>Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Implement loose coupling.</li>
      <li><input type="checkbox" name="question-15" value="B">B. Design for failure.</li>
      <li><input type="checkbox" name="question-15" value="C">C. Automate everything that can be automated.</li>
      <li><input type="checkbox" name="question-15" value="D">D. Use services, not servers.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads.</li>
        <li>When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ).</li>
        <li>Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable.</li>
        <li>In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete.</li>
        <li>Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/rds/details/multi-az/">https://aws.amazon.com/rds/details/multi-az/</a></p>

    </details>
  </li>
  <li>What does it mean to grant least privilege to AWS IAM users?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. It is granting permissions to a single user only.</li>
      <li><input type="checkbox" name="question-16" value="B">B. It is granting permissions using AWS IAM policies only.</li>
      <li><input type="checkbox" name="question-16" value="C">C. It is granting AdministratorAccess policy permissions to trustworthy users.</li>
      <li><input type="checkbox" name="question-16" value="D">D. It is granting only the permissions required to perform a given task.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>When you create IAM policies, follow the standard security advice of granting least privilege, or granting only the permissions required to perform a task.</li>
        <li>Determine what users (and roles) need to do and then craft policies that allow them to perform only those tasks.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege">https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege</a></p>

    </details>
  </li>
  <li>What is a benefit of loose coupling as a principle of cloud architecture design?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. It facilitates low-latency request handling.</li>
      <li><input type="checkbox" name="question-17" value="B">B. It allows applications to have dependent workflows.</li>
      <li><input type="checkbox" name="question-17" value="C">C. It prevents cascading failures between different components.</li>
      <li><input type="checkbox" name="question-17" value="D">D. It allows companies to focus on their physical data center operations.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>IT systems should ideally be designed in a way that reduces inter-dependencies.</li>
        <li>Your components need to be loosely coupled to avoid changes or failure in one of the components from affecting others.</li>
        <li>Your infrastructure also needs to have well defined interfaces that allow the various components to interact with each other only through specific, technology-agnostic interfaces.</li>
        <li>Modifying any underlying operations without affecting other components should be made possible.</li>
      </ul>

      <p>Reference: <a href="https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/">https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/</a></p>

    </details>
  </li>
  <li>A director has been tasked with investigating hybrid cloud architecture. The company currently accesses AWS over the public internet.<br>Which service will facilitate private hybrid connectivity?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Amazon Virtual Private Cloud (Amazon VPC) NAT Gateway</li>
      <li><input type="checkbox" name="question-18" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-18" value="C">C. Amazon Simple Storage Service (Amazon S3) Transfer Acceleration</li>
      <li><input type="checkbox" name="question-18" value="D">D. AWS Web Application Firewall (AWS WAF)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon VPC provides multiple network connectivity options for you to leverage depending on your current network designs and requirements.</li>
        <li>These connectivity options include leveraging either the internet or an AWS Direct Connect connection as the network backbone and terminating the connection into either AWS or user-managed network endpoints.</li>
        <li>Additionally, with AWS, you can choose how network routing is delivered between Amazon VPC and your networks, leveraging either AWS or user-managed network equipment and routes.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/">https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/</a> introduction.html</p>

    </details>
  </li>
  <li>A company’s web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails. <br> Applying which AWS Cloud design principle will address the current design issue?
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Implementing elasticity, enabling the application to scale up or scale down as demand changes.</li>
      <li><input type="checkbox" name="question-19" value="B">B. Enabling several EC2 instances to run in parallel to achieve better performance.</li>
      <li><input type="checkbox" name="question-19" value="C">C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.</li>
      <li><input type="checkbox" name="question-19" value="D">D. Doubling EC2 computing resources to increase system fault tolerance.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>How can a customer increase security to AWS account logons? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. Configure AWS Certificate Manager</li>
      <li><input type="checkbox" name="question-20" value="B">B. Enable Multi-Factor Authentication (MFA)</li>
      <li><input type="checkbox" name="question-20" value="C">C. Use Amazon Cognito to manage access</li>
      <li><input type="checkbox" name="question-20" value="D">D. Configure a strong password policy</li>
      <li><input type="checkbox" name="question-20" value="E">E. Enable AWS Organizations</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation:</p>
      <ul>
        <li>Your root account should always be protected by Multi-Factor Authentication (MFA).</li>
        <li>This additional layer of security helps protect against unauthorized logins to your account by requiring two factors: something you know (a password) and something you have (for example, an MFA device).</li>
        <li>AWS supports virtual and hardware MFA devices and U2F security keys.</li>
        <li>Cognito can be used as an Identity Provider (IdP), where it stores and maintains users and credentials securely for your applications, or it can be integrated with OpenID Connect, SAML, and other popular web identity providers like Amazon.com.</li>
        <li>Using Amazon Cognito, you can generate temporary access credentials for your clients to access AWS services, eliminating the need to store long-term credentials in client applications.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/">https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/</a></p>

    </details>
  </li>
  <li>What AWS service would be used to centrally manage AWS access across multiple accounts?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. AWS Service Catalog</li>
      <li><input type="checkbox" name="question-21" value="B">B. AWS Config</li>
      <li><input type="checkbox" name="question-21" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-21" value="D">D. AWS Organizations</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>To improve control over your AWS environment, you can use AWS Organizations to create groups of accounts, and then attach policies to a group to ensure the correct policies are applied across the accounts without requiring custom scripts and manual processes.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/organizations/">https://aws.amazon.com/organizations/</a></p>

    </details>
  </li>
  <li>Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. AWS Cost and Usage reports</li>
      <li><input type="checkbox" name="question-22" value="B">B. AWS Budgets</li>
      <li><input type="checkbox" name="question-22" value="C">C. AWS Cost Explorer</li>
      <li><input type="checkbox" name="question-22" value="D">D. AWS Trusted Advisor</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html</a></p>

    </details>
  </li>
  <li>What can users access from AWS Artifact?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. AWS security and compliance documents</li>
      <li><input type="checkbox" name="question-23" value="B">B. A download of configuration management details for all AWS resources</li>
      <li><input type="checkbox" name="question-23" value="C">C. Training materials for AWS services</li>
      <li><input type="checkbox" name="question-23" value="D">D. A security assessment of the applications deployed in the AWS Cloud</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>You can use AWS Artifact Reports to download AWS security and compliance documents, such as AWS ISO certifications, Payment Card Industry (PCI), and System and Organization Control (SOC) reports.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/artifact/faq/">https://aws.amazon.com/artifact/faq/</a></p>

    </details>
  </li>
  <li>Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Enterprise</li>
      <li><input type="checkbox" name="question-24" value="B">B. Business</li>
      <li><input type="checkbox" name="question-24" value="C">C. Developer</li>
      <li><input type="checkbox" name="question-24" value="D">D. Basic</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/plans/">https://aws.amazon.com/premiumsupport/plans/</a></p>

    </details>
  </li>
  <li>Which of the following is an AWS Well-Architected Framework design principle related to reliability?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Deployment to a single Availability Zone</li>
      <li><input type="checkbox" name="question-25" value="B">B. Ability to recover from failure</li>
      <li><input type="checkbox" name="question-25" value="C">C. Design for cost optimization</li>
      <li><input type="checkbox" name="question-25" value="D">D. Perform operations as code</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/">https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/</a></p>

    </details>
  </li>
  <li>Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. Amazon EBS</li>
      <li><input type="checkbox" name="question-26" value="B">B. Amazon EC2 instance store</li>
      <li><input type="checkbox" name="question-26" value="C">C. Amazon EFS</li>
      <li><input type="checkbox" name="question-26" value="D">D. Amazon S3</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>When you stop or terminate an instance, every block of storage in the instance store is reset.</li>
        <li>Therefore, your data cannot be accessed through the instance store of another instance.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html</a></p>

    </details>
  </li>
  <li>What is an advantage of using the AWS Cloud over a traditional on-premises solution?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. Users do not have to guess about future capacity needs.</li>
      <li><input type="checkbox" name="question-27" value="B">B. Users can utilize existing hardware contracts for purchases.</li>
      <li><input type="checkbox" name="question-27" value="C">C. Users can fix costs no matter what their traffic is.</li>
      <li><input type="checkbox" name="question-27" value="D">D. Users can avoid audits by using reports from AWS.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://data-flair.training/blogs/aws-advantages/">https://data-flair.training/blogs/aws-advantages/</a></p>

    </details>
  </li>
  <li>Which of the following is an AWS-managed compute service?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Amazon SWF</li>
      <li><input type="checkbox" name="question-28" value="B">B. Amazon EC2</li>
      <li><input type="checkbox" name="question-28" value="C">C. AWS Lambda</li>
      <li><input type="checkbox" name="question-28" value="D">D. Amazon Aurora</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html">https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html</a></p>

    </details>
  </li>
  <li>Which of the following is an important architectural principle when designing cloud applications?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Store data and backups in the same region.</li>
      <li><input type="checkbox" name="question-29" value="B">B. Design tightly coupled system components.</li>
      <li><input type="checkbox" name="question-29" value="C">C. Avoid multi-threading.</li>
      <li><input type="checkbox" name="question-29" value="D">D. Design for failure</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>There are six design principles for operational excellence in the cloud:
          <ul>
            <li>Perform operations as code</li>
            <li>Annotate documentation</li>
            <li>Make frequent, small, reversible changes</li>
            <li>Refine operations procedures frequently</li>
            <li>Anticipate failure</li>
            <li>Learn from all operational failures</li>
          </ul>
        </li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/">https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/</a></p>

    </details>
  </li>
  <li>Which mechanism allows developers to access AWS services from application code?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. AWS Software Development Kit</li>
      <li><input type="checkbox" name="question-30" value="B">B. AWS Management Console</li>
      <li><input type="checkbox" name="question-30" value="C">C. AWS CodePipeline</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS Config</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/tools/">https://aws.amazon.com/tools/</a></p>

    </details>
  </li>
  <li>Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. On-Demand Instances</li>
      <li><input type="checkbox" name="question-31" value="B">B. Reserved Instances</li>
      <li><input type="checkbox" name="question-31" value="C">C. Spot Instances</li>
      <li><input type="checkbox" name="question-31" value="D">D. Dedicated Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>With On-Demand instances, you pay for compute capacity by the hour or the second depending on which instances you run.</li>
        <li>No longer-term commitments or upfront payments are needed.</li>
        <li>You can increase or decrease your compute capacity depending on the demands of your application and only pay the specified per hourly rates for the instance you use.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/ec2/pricing/">https://aws.amazon.com/ec2/pricing/</a></p>

    </details>
  </li>
  <li>Which of the following services is a MySQL-compatible database that automatically grows storage as needed?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Amazon Elastic Compute Cloud (Amazon EC2)</li>
      <li><input type="checkbox" name="question-32" value="B">B. Amazon Relational Database Service (Amazon RDS) for MySQL</li>
      <li><input type="checkbox" name="question-32" value="C">C. Amazon Lightsail</li>
      <li><input type="checkbox" name="question-32" value="D">D. Amazon Aurora</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon Aurora is a relational database service that combines the speed and availability of high-end commercial databases with the simplicity and cost-effectiveness of open source databases.</li>
        <li>The MySQL- compatible edition of Aurora delivers up to 5X the throughput of standard MySQL running on the same hardware, and enables existing MySQL applications and tools to run without requiring modification.</li>
        <li>Amazon Aurora will automatically grow the size of your database volume as your database storage needs grow.</li>
        <li>Your volume will grow in increments of 10 GB up to a maximum of 64 TB. You don’t need to provision excess storage for your database to handle future growth.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/rds/aurora/mysql-features/">https://aws.amazon.com/rds/aurora/mysql-features/</a></p>

    </details>
  </li>
  <li>Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Amazon VPC endpoints</li>
      <li><input type="checkbox" name="question-33" value="B">B. Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink</li>
      <li><input type="checkbox" name="question-33" value="C">C. Amazon VPC peering</li>
      <li><input type="checkbox" name="question-33" value="D">D. AWS Direct Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses.</li>
        <li>Instances in either VPC can communicate with each other as if they are within the same network.</li>
        <li>You can create a VPC peering connection between your own VPCs, or with a VPC in another AWS account.</li>
        <li>The VPCs can be in different regions (also known as an inter-region VPC peering connection).</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html">https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html</a></p>

    </details>
  </li>
  <li>Which service’s PRIMARY purpose is software version control?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Amazon CodeStar</li>
      <li><input type="checkbox" name="question-34" value="B">B. AWS Command Line Interface (AWS CLI)</li>
      <li><input type="checkbox" name="question-34" value="C">C. Amazon Cognito</li>
      <li><input type="checkbox" name="question-34" value="D">D. AWS CodeCommit</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS CodeCommit is a version control service hosted by Amazon Web Services that you can use to privately store and manage assets (such as documents, source code, and binary files) in the cloud.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html</a></p>

    </details>
  </li>
  <li>A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform. <br>Which tool can be used to perform this comparison?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. AWS Simple Monthly Calculator</li>
      <li><input type="checkbox" name="question-35" value="B">B. AWS Total Cost of Ownership (TCO) Calculator</li>
      <li><input type="checkbox" name="question-35" value="C">C. AWS Billing and Cost Management console</li>
      <li><input type="checkbox" name="question-35" value="D">D. Cost Explorer</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>TCO calculator compare the cost of running your applications in an on-premises or colocation environment to AWS.</li>
      </ul>

      <p>Reference: <a href="https://awstcocalculator.com">https://awstcocalculator.com</a></p>

    </details>
  </li>
  <li>Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. AWS Batch</li>
      <li><input type="checkbox" name="question-36" value="B">B. AWS Snowball</li>
      <li><input type="checkbox" name="question-36" value="C">C. AWS Migration Hub</li>
      <li><input type="checkbox" name="question-36" value="D">D. AWS Snowmobile</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Snowmobile is an exabyte-scale data transfer service that can move extremely large amounts of data to AWS in a fast, secure, and cost-effective manner.</li>
        <li>You can transfer up to 100PB per Snowmobile, a 45-foot long ruggedized shipping container, pulled by a semi-trailer truck. - Snowmobile makes it easy to move massive volumes of data to the cloud, including video libraries, image repositories, or even a complete data center migration.</li>
        <li>All data is encrypted with 256-bit encryption and you can manage your encryption keys with AWS Key Management Service (AWS KMS).</li>
        <li>Snowmobile includes GPS tracking, alarm monitoring, 24/7 video surveillance and an optional escort security vehicle while in transit.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/about-aws/whats-new/2016/11/move-exabyte-scale-data-sets-with">https://aws.amazon.com/about-aws/whats-new/2016/11/move-exabyte-scale-data-sets-with</a>- aws-snowmobile/</p>

    </details>
  </li>
  <li>Which of the following BEST describe the AWS pricing model? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Fixed-term</li>
      <li><input type="checkbox" name="question-37" value="B">B. Pay-as-you-go</li>
      <li><input type="checkbox" name="question-37" value="C">C. Colocation</li>
      <li><input type="checkbox" name="question-37" value="D">D. Planned</li>
      <li><input type="checkbox" name="question-37" value="E">E. Variable cost</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BE</p>

      <p>Explanation: <a href="https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf">https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf</a></p>

    </details>
  </li>
  <li>Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Public load balancers with AWS Application Auto Scaling capabilities</li>
      <li><input type="checkbox" name="question-38" value="B">B. F5 Big-IP and Citrix NetScaler load balancers</li>
      <li><input type="checkbox" name="question-38" value="C">C. Classic Load Balancers</li>
      <li><input type="checkbox" name="question-38" value="D">D. Cross-zone load balancers with public and private IPs</li>
      <li><input type="checkbox" name="question-38" value="E">E. Application Load Balancers</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CE</p>

      <p>Explanation:</p>
      <ul>
        <li>Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers.</li>
        <li>Amazon ECS services can use either type of load balancer.</li>
        <li>Application Load Balancers are used to route HTTP/HTTPS (or Layer 7) traffic.</li>
        <li>Network Load Balancers and Classic Load Balancers are used to route TCP (or Layer 4) traffic.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/load-balancer-types.html">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/load-balancer-types.html</a></p>

    </details>
  </li>
  <li>Why should a company choose AWS instead of a traditional data center?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. AWS provides users with full control over the underlying resources.</li>
      <li><input type="checkbox" name="question-39" value="B">B. AWS does not require long-term contracts and provides a pay-as-you-go model.</li>
      <li><input type="checkbox" name="question-39" value="C">C. AWS offers edge locations in every country, supporting global reach.</li>
      <li><input type="checkbox" name="question-39" value="D">D. AWS has no limits on the number of resources that can be created.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS offers you a pay-as-you-go approach for pricing for over 160 cloud services.</li>
        <li>With AWS you pay only for the individual services you need, for as long as you use them, and without requiring long-term contracts or complex licensing.</li>
        <li>AWS pricing is similar to how you pay for utilities like water and electricity.</li>
        <li>You only pay for the services you consume, and once you stop using them, there are no additional costs or termination fees.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/pricing/">https://aws.amazon.com/pricing/</a></p>

    </details>
  </li>
  <li>Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. AWS CloudTrail across multiple Availability Zones</li>
      <li><input type="checkbox" name="question-40" value="B">B. Amazon CloudFront to edge locations</li>
      <li><input type="checkbox" name="question-40" value="C">C. AWS CloudFormation in multiple regions</li>
      <li><input type="checkbox" name="question-40" value="D">D. A virtual private gateway over AWS Direct Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>You can deliver content and decrease end-user latency of your web application using Amazon CloudFront.</li>
        <li>CloudFront speeds up content delivery by leveraging its global network of data centers, known as edge locations, to reduce delivery time by caching your content close to your end users.</li>
        <li>CloudFront fetches your content from an origin, such as an Amazon S3 bucket, an Amazon EC2 instance, an Amazon Elastic Load
Balancing load balancer or your own web server, when it’s not already in an edge location.</li>
        <li>CloudFront can be used to deliver your entire website or application, including dynamic, static, streaming, and interactive content.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/">https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/</a></p>

    </details>
  </li>
  <li>Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-41" value="B">B. AWS Certificate Manager</li>
      <li><input type="checkbox" name="question-41" value="C">C. Amazon Inspector</li>
      <li><input type="checkbox" name="question-41" value="D">D. AWS Artifact</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

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
  <li>Which of the following AWS services can be used to run a self-managed database?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Amazon Route 53</li>
      <li><input type="checkbox" name="question-42" value="B">B. AWS X-Ray</li>
      <li><input type="checkbox" name="question-42" value="C">C. AWS Snowmobile</li>
      <li><input type="checkbox" name="question-42" value="D">D. Amazon Elastic Compute Cloud (Amazon EC2)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://severalnines.com/news/aws-users-prefer-self-managed-databases">https://severalnines.com/news/aws-users-prefer-self-managed-databases</a></p>

    </details>
  </li>
  <li>What exclusive benefit is provided to users with Enterprise Support?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. Access to a Technical Project Manager</li>
      <li><input type="checkbox" name="question-43" value="B">B. Access to a Technical Account Manager</li>
      <li><input type="checkbox" name="question-43" value="C">C. Access to a Cloud Support Engineer</li>
      <li><input type="checkbox" name="question-43" value="D">D. Access to a Solutions Architect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/plans/enterprise/">https://aws.amazon.com/premiumsupport/plans/enterprise/</a></p>

    </details>
  </li>
  <li>How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Deploy applications across multiple Availability Zones within an AWS Region.</li>
      <li><input type="checkbox" name="question-44" value="B">B. Use a hybrid cloud computing deployment model within the geographic area.</li>
      <li><input type="checkbox" name="question-44" value="C">C. Deploy applications across multiple AWS Regions.</li>
      <li><input type="checkbox" name="question-44" value="D">D. Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>An AWS Region is a geographic location where AWS provides multiple, physically separated and isolated Availability Zones which are connected with low latency, high throughput, and highly redundant networking.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/s3/faqs/">https://aws.amazon.com/s3/faqs/</a></p>

    </details>
  </li>
  <li>How does AWS MOST effectively reduce computing costs for a growing start-up company?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. It provides on-demand resources for peak usage.</li>
      <li><input type="checkbox" name="question-45" value="B">B. It automates the provisioning of individual developer environments.</li>
      <li><input type="checkbox" name="question-45" value="C">C. It automates customer relationship management.</li>
      <li><input type="checkbox" name="question-45" value="D">D. It implements a fixed monthly computing budget.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>You can continue to optimize your spend and keep your development costs low by making sure you revisit your architecture often, to adjust to your startup growth.</li>
        <li>Manage your cost further by leveraging different options such as S3 CloudFront for caching &amp; offloading to reduce cost of EC2 computing, as well as Elastic Load Balancing which prepares you for massive scale, high reliability and uninterrupted growth.</li>
        <li>Another way to keep costs down is to use AWS Identity and Access Management solutions (IAM) to manage governance of your cost drivers effectively and by the right teams.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/startups/lean/">https://aws.amazon.com/startups/lean/</a></p>

    </details>
  </li>
  <li>A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future. <br> Which of the following is a characteristic of the AWS Cloud that would meet this specific need?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Elasticity</li>
      <li><input type="checkbox" name="question-46" value="B">B. Reliability</li>
      <li><input type="checkbox" name="question-46" value="C">C. Performance</li>
      <li><input type="checkbox" name="question-46" value="D">D. Agility</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Agile is a time boxed, iterative approach to software delivery that builds software incrementally from the start of the project, instead of trying to deliver it all at once near the end.</li>
      </ul>

      <p>Reference: <a href="http://www.agilenutshell.com">http://www.agilenutshell.com</a></p>

    </details>
  </li>
  <li>Which AWS Support plan provides a full set of AWS Trusted Advisor checks?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Business and Developer Support</li>
      <li><input type="checkbox" name="question-47" value="B">B. Business and Basic Support</li>
      <li><input type="checkbox" name="question-47" value="C">C. Enterprise and Developer Support</li>
      <li><input type="checkbox" name="question-47" value="D">D. Enterprise and Business Support</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/plans/">https://aws.amazon.com/premiumsupport/plans/</a></p>

    </details>
  </li>
  <li>Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. AWS WAF</li>
      <li><input type="checkbox" name="question-48" value="B">B. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-48" value="C">C. Amazon EC2</li>
      <li><input type="checkbox" name="question-48" value="D">D. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-48" value="E">E. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation: <a href="https://aws.amazon.com/shield/">https://aws.amazon.com/shield/</a></p>

    </details>
  </li>
  <li>When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose three.)
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Compute costs</li>
      <li><input type="checkbox" name="question-49" value="B">B. Facilities costs</li>
      <li><input type="checkbox" name="question-49" value="C">C. Storage costs</li>
      <li><input type="checkbox" name="question-49" value="D">D. Data transfer costs</li>
      <li><input type="checkbox" name="question-49" value="E">E. Network infrastructure costs</li>
      <li><input type="checkbox" name="question-49" value="F">F. Hardware lifecycle costs</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: ACD</p>

      <p>Explanation:
<a href="https://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/">https://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/</a></p>

    </details>
  </li>
</ol>
      `,
    data: []
  },
];