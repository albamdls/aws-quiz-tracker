export default [
  {
    id: 18,
    title: "Exam 18",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Managing edge locations</li>
      <li><input type="checkbox" name="question-0" value="B">B. Physical security</li>
      <li><input type="checkbox" name="question-0" value="C">C. Firewall configuration</li>
      <li><input type="checkbox" name="question-0" value="D">D. Global infrastructure</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. AWS Senior Support Engineers</li>
      <li><input type="checkbox" name="question-1" value="B">B. AWS Technical Account Managers</li>
      <li><input type="checkbox" name="question-1" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-1" value="D">D. AWS Discussion Forums</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/faqs/">https://aws.amazon.com/premiumsupport/faqs/</a></p>

    </details>
  </li>
  <li>Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Multiple Availability Zones</li>
      <li><input type="checkbox" name="question-2" value="B">B. Performance efficiency</li>
      <li><input type="checkbox" name="question-2" value="C">C. Security</li>
      <li><input type="checkbox" name="question-2" value="D">D. Encryption usage</li>
      <li><input type="checkbox" name="question-2" value="E">E. High availability</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf">https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf</a></p>

    </details>
  </li>
  <li>After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. No upfront payment</li>
      <li><input type="checkbox" name="question-3" value="B">B. Hourly on-demand payment</li>
      <li><input type="checkbox" name="question-3" value="C">C. Partial upfront payment</li>
      <li><input type="checkbox" name="question-3" value="D">D. All upfront payment</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/">https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/</a></p>

    </details>
  </li>
  <li>What is an advantage of deploying an application across multiple Availability Zones?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.</li>
      <li><input type="checkbox" name="question-4" value="B">B. The application will have higher availability because it can withstand a service disruption in one Availability Zone.</li>
      <li><input type="checkbox" name="question-4" value="C">C. There will be better coverage as Availability Zones are geographically distant and can serve a wider area.</li>
      <li><input type="checkbox" name="question-4" value="D">D. There will be decreased application latency that will improve the user experience.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html</a></p>

    </details>
  </li>
  <li>A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. <br> What is the MOST appropriate response?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. Inform the user that AWS pricing allows for on-demand pricing.</li>
      <li><input type="checkbox" name="question-5" value="B">B. Direct the user to the AWS Simple Monthly Calculator for an estimate.</li>
      <li><input type="checkbox" name="question-5" value="C">C. Use Amazon QuickSight to analyze current spending on-premises.</li>
      <li><input type="checkbox" name="question-5" value="D">D. Use Amazon AppStream 2.0 for real-time pricing analytics.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/">https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/</a></p>

    </details>
  </li>
  <li>A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. <br> What combination of actions will enable the company to accomplish this goal? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated.</li>
      <li><input type="checkbox" name="question-6" value="B">B. Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC.</li>
      <li><input type="checkbox" name="question-6" value="C">C. Use Amazon Athena to query data from the on-premises database servers.</li>
      <li><input type="checkbox" name="question-6" value="D">D. Connect the company’s on-premises data center to AWS using AWS Direct Connect.</li>
      <li><input type="checkbox" name="question-6" value="E">E. Leverage Amazon CloudFront to restrict access to static web content provided through the company’s on-premises web servers.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/apn/amazon-vpc-for-on-premises-network-engineers-part-one/">https://aws.amazon.com/blogs/apn/amazon-vpc-for-on-premises-network-engineers-part-one/</a></p>

    </details>
  </li>
  <li>A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses. <br> Which AWS service can help secure the application and block the malicious traffic?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. AWS IAM</li>
      <li><input type="checkbox" name="question-7" value="B">B. Amazon GuardDuty</li>
      <li><input type="checkbox" name="question-7" value="C">C. Amazon Simple Notification Service (Amazon SNS)</li>
      <li><input type="checkbox" name="question-7" value="D">D. AWS WAF</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS WAF is a web application firewall that helps protect web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources.</li>
        <li>You can use AWS WAF to define customizable web security rules that control which traffic accesses your web applications.</li>
        <li>If you use AWS Shield Advanced, you can use AWS WAF at no extra cost for those protected resources and can engage the DRT to create WAF rules.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/answers/networking/aws-ddos-attack-mitigation/">https://aws.amazon.com/answers/networking/aws-ddos-attack-mitigation/</a></p>

    </details>
  </li>
  <li>Treating infrastructure as code in the AWS Cloud allows users to:
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. automate migration of on-premises hardware to AWS data centers.</li>
      <li><input type="checkbox" name="question-8" value="B">B. let a third party automate an audit of the AWS infrastructure.</li>
      <li><input type="checkbox" name="question-8" value="C">C. turn over application code to AWS so it can run on the AWS infrastructure.</li>
      <li><input type="checkbox" name="question-8" value="D">D. automate the infrastructure provisioning process.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://asperbrothers.com/blog/infrastructure-as-code-aws/">https://asperbrothers.com/blog/infrastructure-as-code-aws/</a></p>

    </details>
  </li>
  <li>A company requires a dedicated network connection between its on-premises servers and the AWS Cloud. <br> Which AWS service should be used?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. AWS VPN</li>
      <li><input type="checkbox" name="question-9" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-9" value="C">C. Amazon API Gateway</li>
      <li><input type="checkbox" name="question-9" value="D">D. Amazon Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>You can use AWS Direct Connect to establish a private virtual interface from your on-premise network directly to your Amazon VPC, providing you with a private, high bandwidth network connection between your network and your VPC.</li>
        <li>With multiple virtual interfaces, you can even establish private connectivity to multiple VPCs while maintaining network isolation.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/directconnect/">https://aws.amazon.com/directconnect/</a></p>

    </details>
  </li>
  <li>Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. AWS Glue</li>
      <li><input type="checkbox" name="question-10" value="B">B. AWS Data Pipeline</li>
      <li><input type="checkbox" name="question-10" value="C">C. Amazon CloudSearch</li>
      <li><input type="checkbox" name="question-10" value="D">D. Amazon Athena</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon Athena is defined as “an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.” So, it’s another SQL query engine for large data sets stored in S3.</li>
        <li>This is very similar to other SQL query engines, such as Apache Drill.</li>
        <li>But unlike Apache Drill, Athena is limited to data only from Amazon’s own S3 storage service. However, Athena is able to query a variety of file formats, including, but not limited to CSV, Parquet, JSON, etc.</li>
      </ul>

    </details>
  </li>
  <li>AWS CloudFormation is designed to help the user:
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. model and provision resources.</li>
      <li><input type="checkbox" name="question-11" value="B">B. update application code.</li>
      <li><input type="checkbox" name="question-11" value="C">C. set up data lakes.</li>
      <li><input type="checkbox" name="question-11" value="D">D. create reports for billing.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources in your cloud environment.</li>
        <li>AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts.</li>
        <li>This gives you a single source of truth for your AWS and third party resources.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/cloudformation/">https://aws.amazon.com/cloudformation/</a></p>

    </details>
  </li>
  <li>Which of the following is an AWS database service?
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Amazon Redshift</li>
      <li><input type="checkbox" name="question-12" value="B">B. Amazon Elastic Block Store (Amazon EBS)</li>
      <li><input type="checkbox" name="question-12" value="C">C. Amazon S3 Glacier</li>
      <li><input type="checkbox" name="question-12" value="D">D. AWS Snowball</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://www.sisense.com/glossary/redshift-database/">https://www.sisense.com/glossary/redshift-database/</a></p>

    </details>
  </li>
  <li>A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. <br> What is the SIMPLEST way to do this?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.</li>
      <li><input type="checkbox" name="question-13" value="B">B. Run AWS Trusted Advisor and review the findings.</li>
      <li><input type="checkbox" name="question-13" value="C">C. Open the AWS IAM console and check the inbound rule filters for open access.</li>
      <li><input type="checkbox" name="question-13" value="D">D. In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-security-groups.html">https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-security-groups.html</a></p>

    </details>
  </li>
  <li>What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. AWS automatically distributes the data globally for higher durability.</li>
      <li><input type="checkbox" name="question-14" value="B">B. AWS will take care of operating the application.</li>
      <li><input type="checkbox" name="question-14" value="C">C. AWS makes it easy to architect for high availability.</li>
      <li><input type="checkbox" name="question-14" value="D">D. AWS can easily accommodate application demand changes.</li>
      <li><input type="checkbox" name="question-14" value="E">E. AWS takes care application security patching.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CD</p>

    </details>
  </li>
  <li>A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances. <br> Which AWS service will provide this assessment report?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. EC2 security groups</li>
      <li><input type="checkbox" name="question-15" value="B">B. AWS Config</li>
      <li><input type="checkbox" name="question-15" value="C">C. Amazon Macie</li>
      <li><input type="checkbox" name="question-15" value="D">D. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.</li>
        <li>AmazonInspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices.</li>
        <li>After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity.</li>
        <li>These findings can be reviewed directly or as part of detailed assessment reports which are available via the Amazon Inspector console or API.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/inspector/">https://aws.amazon.com/inspector/</a></p>

    </details>
  </li>
  <li>How can a company isolate the costs of production and non-production workloads on AWS?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. Create Identity and Access Management (IAM) roles for production and non-production workloads.</li>
      <li><input type="checkbox" name="question-16" value="B">B. Use different accounts for production and non-production expenses.</li>
      <li><input type="checkbox" name="question-16" value="C">C. Use Amazon EC2 for non-production workloads and other services for production workloads.</li>
      <li><input type="checkbox" name="question-16" value="D">D. Use Amazon CloudWatch to monitor the use of services.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/">https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/</a></p>

    </details>
  </li>
  <li>Where can users find a catalog of AWS-recognized providers of third-party security solutions?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. AWS Service Catalog</li>
      <li><input type="checkbox" name="question-17" value="B">B. AWS Marketplace</li>
      <li><input type="checkbox" name="question-17" value="C">C. AWS Quick Start</li>
      <li><input type="checkbox" name="question-17" value="D">D. AWS CodeDeploy</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Service Catalog Delivery Partners are APN Consulting Partners who help create catalogs of IT services that are approved by the customer’s organization for use on AWS.</li>
        <li>With AWS Service Catalog, customers and partners can centrally manage commonly deployed IT services to help achieve consistent governance and meet compliance requirements while enabling users to self-provision approved services.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/servicecatalog/partners/">https://aws.amazon.com/servicecatalog/partners/</a></p>

    </details>
  </li>
  <li>A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements. <br> Which AWS service will meet this requirement at the LOWEST cost?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Amazon S3</li>
      <li><input type="checkbox" name="question-18" value="B">B. AWS Snowball</li>
      <li><input type="checkbox" name="question-18" value="C">C. Amazon Redshift</li>
      <li><input type="checkbox" name="question-18" value="D">D. Amazon S3 Glacier</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>S3 Glacier Deep Archive is Amazon S3’s lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year.</li>
        <li>It is designed for customers –particularly those in highly-regulated industries, such as the Financial Services, Healthcare, and Public Sectors – that retain data sets for 7-10 years or longer to meet regulatory compliance requirements.</li>
        <li>S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases, and is a cost-effective and easy-to-manage alternative to magnetic tape systems, whether they are on-premises libraries or off-premises services.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/s3/storage-classes/">https://aws.amazon.com/s3/storage-classes/</a></p>

    </details>
  </li>
  <li>What are the immediate benefits of using the AWS Cloud? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Increased IT staff.</li>
      <li><input type="checkbox" name="question-19" value="B">B. Capital expenses are replaced with variable expenses.</li>
      <li><input type="checkbox" name="question-19" value="C">C. User control of infrastructure.</li>
      <li><input type="checkbox" name="question-19" value="D">D. Increased agility.</li>
      <li><input type="checkbox" name="question-19" value="E">E. AWS holds responsibility for security in the cloud.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CD</p>

    </details>
  </li>
  <li>Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. Amazon GuardDuty</li>
      <li><input type="checkbox" name="question-20" value="B">B. Amazon Macie</li>
      <li><input type="checkbox" name="question-20" value="C">C. Amazon Inspector</li>
      <li><input type="checkbox" name="question-20" value="D">D. AWS Shield</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS.</li>
        <li>Macie recognizes sensitive data such as personally identifiable information (PII) or intellectual property.</li>
        <li>It provides you with dashboards and alerts that give visibility into how this data is being accessed or moved.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html">https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html</a></p>

    </details>
  </li>
  <li>What is the purpose of AWS Storage Gateway?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. It ensures on-premises data storage is 99.999999999% durable.</li>
      <li><input type="checkbox" name="question-21" value="B">B. It transports petabytes of data to and from AWS.</li>
      <li><input type="checkbox" name="question-21" value="C">C. It connects to multiple Amazon EC2 instances.</li>
      <li><input type="checkbox" name="question-21" value="D">D. It connects on-premises data storage to the AWS Cloud.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Moving data to the cloud is not quite as simple as flipping a switch.</li>
        <li>For companies that have managed their own data centers or server rooms for decades, there are a few steps to consider –and it’s not always wise to pull the plug on an internal infrastructure quite so quickly.</li>
        <li>If a startup uses on-premise business servers and then experiences unexpected growth, abandoning those servers doesn’t make sense (even if the long-term plan is to do exactly that).</li>
        <li>AWS Storage Gateway is a way to bridge this gap for companies of any size.</li>
        <li>It’s a hybrid storage option that connects on-premise storage including age-old tape backup systems to the cloud in a way that also provides one console to access all storage configurations.</li>
      </ul>

      <p>Reference: <a href="https://www.techradar.com/news/what-is-aws-storage-gateway">https://www.techradar.com/news/what-is-aws-storage-gateway</a></p>

    </details>
  </li>
  <li>What should users do if they want to install an application in geographically isolated locations?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Install the application using multiple internet gateways.</li>
      <li><input type="checkbox" name="question-22" value="B">B. Deploy the application to an Amazon VPC.</li>
      <li><input type="checkbox" name="question-22" value="C">C. Deploy the application to multiple AWS Regions.</li>
      <li><input type="checkbox" name="question-22" value="D">D. Configure the application using multiple NAT gateways.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html</a></p>

    </details>
  </li>
  <li>A system in the AWS Cloud is designed to withstand the failure of one or more components. <br> What is this an example of?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Elasticity</li>
      <li><input type="checkbox" name="question-23" value="B">B. High Availability</li>
      <li><input type="checkbox" name="question-23" value="C">C. Scalability</li>
      <li><input type="checkbox" name="question-23" value="D">D. Agility</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://wa.aws.amazon.com/wat.question.REL_7.en.html">https://wa.aws.amazon.com/wat.question.REL_7.en.html</a></p>

    </details>
  </li>
  <li>A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system. <br> Which AWS service can fulfill this requirement?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-24" value="B">B. AWS VPN</li>
      <li><input type="checkbox" name="question-24" value="C">C. Amazon Connect</li>
      <li><input type="checkbox" name="question-24" value="D">D. AWS Data Pipeline</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>You can use AWS Direct Connect to establish a private virtual interface from your on-premise network directly to your Amazon VPC, providing you with a private, high bandwidth network connection between your network and your VPC.</li>
        <li>With multiple virtual interfaces, you can even establish private connectivity to multiple VPCs while maintaining network isolation.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/directconnect/">https://aws.amazon.com/directconnect/</a></p>

    </details>
  </li>
  <li>Within the AWS shared responsibility model, who is responsible for security and compliance?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. The customer is responsible.</li>
      <li><input type="checkbox" name="question-25" value="B">B. AWS is responsible.</li>
      <li><input type="checkbox" name="question-25" value="C">C. AWS and the customer share responsibility.</li>
      <li><input type="checkbox" name="question-25" value="D">D. AWS shares responsibility with the relevant governing body.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>Security and Compliance is a shared responsibility between AWS and the customer.</li>
        <li>This shared model can help relieve the customer’s operational burden as AWS operates, manages and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the service operates.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>To use the AWS CLI, users are required to generate:
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. a password policy.</li>
      <li><input type="checkbox" name="question-26" value="B">B. an access/secret key.</li>
      <li><input type="checkbox" name="question-26" value="C">C. a managed policy.</li>
      <li><input type="checkbox" name="question-26" value="D">D. an API key.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which AWS service is used to provide encryption for Amazon EBS?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. AWS Certificate Manager</li>
      <li><input type="checkbox" name="question-27" value="B">B. AWS Systems Manager</li>
      <li><input type="checkbox" name="question-27" value="C">C. AWS KMS</li>
      <li><input type="checkbox" name="question-27" value="D">D. AWS Config</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html">https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html</a></p>

    </details>
  </li>
  <li>How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. By the time it takes for the Lambda function to execute.</li>
      <li><input type="checkbox" name="question-28" value="B">B. By the number of versions of a specific Lambda function.</li>
      <li><input type="checkbox" name="question-28" value="C">C. By the number of requests made for a given Lambda function.</li>
      <li><input type="checkbox" name="question-28" value="D">D. By the programming language that is used for the Lambda function.</li>
      <li><input type="checkbox" name="question-28" value="E">E. By the total number of Lambda functions in an AWS account.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation: <a href="https://aws.amazon.com/lambda/pricing/">https://aws.amazon.com/lambda/pricing/</a></p>

    </details>
  </li>
  <li>Which of the following describes the relationships among AWS Regions, Availability Zones, and edge locations? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. There are more AWS Regions than Availability Zones.</li>
      <li><input type="checkbox" name="question-29" value="B">B. There are more edge locations than AWS Regions.</li>
      <li><input type="checkbox" name="question-29" value="C">C. An edge location is an Availability Zone.</li>
      <li><input type="checkbox" name="question-29" value="D">D. There are more AWS Regions than edge locations.</li>
      <li><input type="checkbox" name="question-29" value="E">E. There are more Availability Zones than AWS Regions.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BE</p>

    </details>
  </li>
  <li>What does AWS Shield Standard provide?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. WAF rules</li>
      <li><input type="checkbox" name="question-30" value="B">B. DDoS protection</li>
      <li><input type="checkbox" name="question-30" value="C">C. Identity and Access Management (IAM) permissions and access to resources</li>
      <li><input type="checkbox" name="question-30" value="D">D. Data encryption</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Shield Standard provides protection for all AWS customers from common, most frequently occurring network and transport layer DDoS attacks that target your web site or application at no additional charge.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/shield/pricing/">https://aws.amazon.com/shield/pricing/</a></p>

    </details>
  </li>
  <li>A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. <br> What expense can be reduced using the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. The cost of writing custom-built Java or Node .js code</li>
      <li><input type="checkbox" name="question-31" value="B">B. Penetration testing for security</li>
      <li><input type="checkbox" name="question-31" value="C">C. hardware required to support new applications</li>
      <li><input type="checkbox" name="question-31" value="D">D. Writing specific test cases for third-party applications.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/pricing/cost-optimization/">https://aws.amazon.com/pricing/cost-optimization/</a></p>

    </details>
  </li>
  <li>What does AWS Marketplace allow users to do? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Sell unused Amazon EC2 Spot Instances.</li>
      <li><input type="checkbox" name="question-32" value="B">B. Sell solutions to other AWS users.</li>
      <li><input type="checkbox" name="question-32" value="C">C. Buy third-party software that runs on AWS.</li>
      <li><input type="checkbox" name="question-32" value="D">D. Purchase AWS security and compliance documents.</li>
      <li><input type="checkbox" name="question-32" value="E">E. Order AWS Snowball.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

      <p>Explanation: <a href="https://aws.amazon.com/marketplace">https://aws.amazon.com/marketplace</a></p>

    </details>
  </li>
  <li>What does it mean if a user deploys a hybrid cloud architecture on AWS?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. All resources run using on-premises infrastructure.</li>
      <li><input type="checkbox" name="question-33" value="B">B. Some resources run on-premises and some run in a colocation center.</li>
      <li><input type="checkbox" name="question-33" value="C">C. All resources run in the AWS Cloud.</li>
      <li><input type="checkbox" name="question-33" value="D">D. Some resources run on-premises and some run in the AWS Cloud.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/hybrid/">https://aws.amazon.com/hybrid/</a></p>

    </details>
  </li>
  <li>Which AWS service allows users to identify the changes made to a resource over time?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Amazon Inspector</li>
      <li><input type="checkbox" name="question-34" value="B">B. AWS Config</li>
      <li><input type="checkbox" name="question-34" value="C">C. AWS Service Catalog</li>
      <li><input type="checkbox" name="question-34" value="D">D. AWS IAM</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/config/latest/developerguide/view-manage-resource.html">https://docs.aws.amazon.com/config/latest/developerguide/view-manage-resource.html</a></p>

    </details>
  </li>
  <li>How can a company reduce its Total Cost of Ownership (TCO) using AWS?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. By minimizing large capital expenditures</li>
      <li><input type="checkbox" name="question-35" value="B">B. By having no responsibility for third-party license costs</li>
      <li><input type="checkbox" name="question-35" value="C">C. By having no operational expenditures</li>
      <li><input type="checkbox" name="question-35" value="D">D. By having AWS manage applications</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS helps you reduce Total Cost of Ownership (TCO) by reducing the need to invest in large capital expenditures and providing a pay-as-you-go model that empowers you to invest in the capacity you need and use it only when the business requires it.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/tco-calculator/">https://aws.amazon.com/tco-calculator/</a></p>

    </details>
  </li>
  <li>Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. Ensuring network connectivity from AWS to the internet</li>
      <li><input type="checkbox" name="question-36" value="B">B. Patching and fixing flaws within the AWS Cloud infrastructure</li>
      <li><input type="checkbox" name="question-36" value="C">C. Ensuring the physical security of cloud data centers</li>
      <li><input type="checkbox" name="question-36" value="D">D. Ensuring Amazon EBS volumes are backed up</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/security/the-aws-shared-responsibility-model-and-gdpr/">https://aws.amazon.com/blogs/security/the-aws-shared-responsibility-model-and-gdpr/</a></p>

    </details>
  </li>
  <li>What are the advantages of the AWS Cloud? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Fixed rate monthly cost</li>
      <li><input type="checkbox" name="question-37" value="B">B. No need to guess capacity requirements</li>
      <li><input type="checkbox" name="question-37" value="C">C. Increased speed to market</li>
      <li><input type="checkbox" name="question-37" value="D">D. Increased upfront capital expenditure</li>
      <li><input type="checkbox" name="question-37" value="E">E. Physical access to cloud data centers</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

      <p>Explanation: <a href="https://data-flair.training/blogs/aws-advantages/">https://data-flair.training/blogs/aws-advantages/</a></p>

    </details>
  </li>
  <li>When comparing the total cost of ownership (TCO) of an on-premises infrastructure to a cloud architecture, what costs should be considered? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. The credit card processing fees for application transactions in the cloud.</li>
      <li><input type="checkbox" name="question-38" value="B">B. The cost of purchasing and installing server hardware in the on-premises data.</li>
      <li><input type="checkbox" name="question-38" value="C">C. The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures.</li>
      <li><input type="checkbox" name="question-38" value="D">D. The costs of third-party penetration testing.</li>
      <li><input type="checkbox" name="question-38" value="E">E. The advertising costs associated with an ongoing enterprise-wide campaign.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

      <p>Explanation: <a href="https://aws.amazon.com/tco-calculator/">https://aws.amazon.com/tco-calculator/</a></p>

    </details>
  </li>
  <li>Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Service control policies (SCPs)</li>
      <li><input type="checkbox" name="question-39" value="B">B. Consolidated billing</li>
      <li><input type="checkbox" name="question-39" value="C">C. All Upfront Reserved Instances</li>
      <li><input type="checkbox" name="question-39" value="D">D. AWS Cost Explorer</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/tco-calculator/">https://aws.amazon.com/tco-calculator/</a></p>

    </details>
  </li>
  <li>What is one of the customer’s responsibilities according to the AWS shared responsibility model?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Virtualization infrastructure</li>
      <li><input type="checkbox" name="question-40" value="B">B. Network infrastructure</li>
      <li><input type="checkbox" name="question-40" value="C">C. Application security</li>
      <li><input type="checkbox" name="question-40" value="D">D. Physical security of hardware</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://cloudacademy.com/blog/aws-shared-responsibility-model-security/">https://cloudacademy.com/blog/aws-shared-responsibility-model-security/</a></p>

    </details>
  </li>
  <li>What helps a company provide a lower latency experience to its users globally?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Using an AWS Region that is central to all users</li>
      <li><input type="checkbox" name="question-41" value="B">B. Using a second Availability Zone in the AWS Region that is using used</li>
      <li><input type="checkbox" name="question-41" value="C">C. Enabling caching in the AWS Region that is being used</li>
      <li><input type="checkbox" name="question-41" value="D">D. Using edge locations to put content closer to all users</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html">https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html</a></p>

    </details>
  </li>
  <li>How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Users do not have to wait for infrastructure provisioning.</li>
      <li><input type="checkbox" name="question-42" value="B">B. The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.</li>
      <li><input type="checkbox" name="question-42" value="C">C. AWS takes over application configuration management on behalf of users.</li>
      <li><input type="checkbox" name="question-42" value="D">D. Users do not need to address security and compliance issues.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/Migration/aws-migration-whitepaper.pdf">https://d1.awsstatic.com/whitepapers/Migration/aws-migration-whitepaper.pdf</a></p>

    </details>
  </li>
  <li>Which AWS service provides a quick and automated way to create and manage AWS accounts?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. AWS QuickSight</li>
      <li><input type="checkbox" name="question-43" value="B">B. Amazon Lightsail</li>
      <li><input type="checkbox" name="question-43" value="C">C. AWS Organizations</li>
      <li><input type="checkbox" name="question-43" value="D">D. Amazon Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/mt/automate-account-creation-and-resource-provisioning-using-aws-service-catalog-aws-organizations-and-aws-lambda/">https://aws.amazon.com/blogs/mt/automate-account-creation-and-resource-provisioning-using-aws-service-catalog-aws-organizations-and-aws-lambda/</a></p>

    </details>
  </li>
  <li>Which Amazon RDS feature can be used to achieve high availability?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Multiple Availability Zones</li>
      <li><input type="checkbox" name="question-44" value="B">B. Amazon Reserved Instances</li>
      <li><input type="checkbox" name="question-44" value="C">C. Provisioned IOPS storage</li>
      <li><input type="checkbox" name="question-44" value="D">D. Enhanced monitoring</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>Amazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments.</li>
        <li>Amazon RDS uses several different technologies to provide failover support.</li>
        <li>Multi-AZ deployments for Oracle, PostgreSQL, MySQL, and MariaDB DB instances use Amazon’s failover technology.</li>
        <li>SQL Server DB instances use SQL Server Database Mirroring (DBM).</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html</a></p>

    </details>
  </li>
  <li>Where should users report that AWS resources are being used for malicious purposes?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. AWS Abuse team</li>
      <li><input type="checkbox" name="question-45" value="B">B. AWS Shield</li>
      <li><input type="checkbox" name="question-45" value="C">C. AWS Support</li>
      <li><input type="checkbox" name="question-45" value="D">D. AWS Developer Forums</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/">https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/</a></p>

    </details>
  </li>
  <li>Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-46" value="B">B. Amazon Simple Notification Service (Amazon SNS)</li>
      <li><input type="checkbox" name="question-46" value="C">C. VPC Flow Logs</li>
      <li><input type="checkbox" name="question-46" value="D">D. AWS CloudHSM</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account.</li>
        <li>With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.</li>
        <li>CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services.</li>
        <li>This event history simplifies security analysis, resource change tracking, and troubleshooting.</li>
        <li>In addition, you can use CloudTrail to detect unusual activity in your AWS accounts.</li>
        <li>These capabilities help simplify operational analysis and troubleshooting.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/cloudtrail/">https://aws.amazon.com/cloudtrail/</a></p>

    </details>
  </li>
  <li>What is an AWS Cloud design best practice?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Tight coupling of components</li>
      <li><input type="checkbox" name="question-47" value="B">B. Single point of failure</li>
      <li><input type="checkbox" name="question-47" value="C">C. High availability</li>
      <li><input type="checkbox" name="question-47" value="D">D. Overprovisioning of resources</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf">https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf</a></p>

    </details>
  </li>
  <li>Why is AWS more economical than traditional data centers for applications with varying compute workloads?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.</li>
      <li><input type="checkbox" name="question-48" value="B">B. Customers retain full administrative access to their Amazon EC2 instances.</li>
      <li><input type="checkbox" name="question-48" value="C">C. Amazon EC2 instances can be launched on-demand when needed.</li>
      <li><input type="checkbox" name="question-48" value="D">D. Customers can permanently run enough instances to handle peak workloads.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>The ability to launch instances on-demand when needed allows customers launch and terminate instances in response to a varying workload.</li>
        <li>This is a more economical practice than purchasing enough on-premises servers to handle the peak load.</li>
      </ul>

    </details>
  </li>
  <li>Which AWS service would simplify migration of a database to AWS?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. AWS Storage Gateway</li>
      <li><input type="checkbox" name="question-49" value="B">B. AWS Database Migration Service (AWS DMS)</li>
      <li><input type="checkbox" name="question-49" value="C">C. Amazon Elastic Compute Cloud (Amazon EC2)</li>
      <li><input type="checkbox" name="question-49" value="D">D. Amazon AppStream 2.0</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/dms/">https://aws.amazon.com/dms/</a></p>

    </details>
  </li>
</ol>
      `,
    data: []
  },
];