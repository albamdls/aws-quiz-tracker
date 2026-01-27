export default [
  {
    id: 22,
    title: "Exam 22",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>A company operating in the AWS Cloud requires separate invoices for specific environments, such as development, testing, and production. <br> How can this be achieved?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Use multiple AWS accounts</li>
      <li><input type="checkbox" name="question-0" value="B">B. Use resource tagging</li>
      <li><input type="checkbox" name="question-0" value="C">C. Use multiple VPCs</li>
      <li><input type="checkbox" name="question-0" value="D">D. Use Cost Explorer</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>Which AWS service can be used in the application deployment process?
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. AWS AppSync</li>
      <li><input type="checkbox" name="question-1" value="B">B. AWS Batch</li>
      <li><input type="checkbox" name="question-1" value="C">C. AWS CodePipeline</li>
      <li><input type="checkbox" name="question-1" value="D">D. AWS DataSync</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>What can be used to reduce the cost of running Amazon EC2 instances? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Spot Instances for stateless and flexible workloads</li>
      <li><input type="checkbox" name="question-2" value="B">B. Memory optimized instances for high-compute workloads</li>
      <li><input type="checkbox" name="question-2" value="C">C. On-Demand Instances for high-cost and sustained workloads</li>
      <li><input type="checkbox" name="question-2" value="D">D. Reserved Instances for sustained workloads</li>
      <li><input type="checkbox" name="question-2" value="E">E. Spend limits set using AWS Budgets</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

    </details>
  </li>
  <li>A company is launching an e-commerce site that will store and process credit card data. The company requires information about AWS compliance reports and AWS agreements. <br> Which AWS service provides on-demand access to these items?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. AWS Certificate Manager</li>
      <li><input type="checkbox" name="question-3" value="B">B. AWS Config</li>
      <li><input type="checkbox" name="question-3" value="C">C. AWS Artifact</li>
      <li><input type="checkbox" name="question-3" value="D">D. AWS CloudTrail</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which AWS service or feature allows the user to manage cross-region application traffic?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. Amazon AppStream 2.0</li>
      <li><input type="checkbox" name="question-4" value="B">B. Amazon VPC</li>
      <li><input type="checkbox" name="question-4" value="C">C. Elastic Load Balancer</li>
      <li><input type="checkbox" name="question-4" value="D">D. Amazon Route 53</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

    </details>
  </li>
  <li>Which AWS service can be used to track unauthorized API calls?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. AWS Config</li>
      <li><input type="checkbox" name="question-5" value="B">B. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-5" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-5" value="D">D. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>A user needs to regularly audit and evaluate the setup of all AWS resources, identify non-compliant accounts, and be notified when a resource changes. <br> Which AWS service can be used to meet these requirements?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-6" value="B">B. AWS Config</li>
      <li><input type="checkbox" name="question-6" value="C">C. AWS Resource Access Manager</li>
      <li><input type="checkbox" name="question-6" value="D">D. AWS Systems Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>A user is planning to launch two additional Amazon EC2 instances to increase availability. <br> Which action should the user take?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. Launch the instances across multiple Availability Zones in a single AWS Region.</li>
      <li><input type="checkbox" name="question-7" value="B">B. Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.</li>
      <li><input type="checkbox" name="question-7" value="C">C. Launch the instances in multiple AWS Regions, but in the same Availability Zone.</li>
      <li><input type="checkbox" name="question-7" value="D">D. Launch the instances as EC2 Spot Instances in the same AWS Region, but in different Availability Zones.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>A company must store critical business data in Amazon S3 with a backup to another AWS Region. <br> How can this be achieved?
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Use an Amazon CloudFront Content Delivery Network (CDN) to cache data globally</li>
      <li><input type="checkbox" name="question-8" value="B">B. Set up Amazon S3 cross-region replication to another AWS Region</li>
      <li><input type="checkbox" name="question-8" value="C">C. Configure the AWS Backup service to back up to the data to another AWS Region</li>
      <li><input type="checkbox" name="question-8" value="D">D. Take Amazon S3 bucket snapshots and copy that data to another AWS Region</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. AWS Budgets</li>
      <li><input type="checkbox" name="question-9" value="B">B. AWS Cost Explorer</li>
      <li><input type="checkbox" name="question-9" value="C">C. AWS Cost Allocation Tags</li>
      <li><input type="checkbox" name="question-9" value="D">D. AWS Organizations</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>What is the recommended method to request penetration testing on AWS resources?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. Open a support case</li>
      <li><input type="checkbox" name="question-10" value="B">B. Fill out the Penetration Testing Request Form</li>
      <li><input type="checkbox" name="question-10" value="C">C. Request a penetration test from your technical account manager</li>
      <li><input type="checkbox" name="question-10" value="D">D. Contact your AWS sales representative</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. <br> Which AWS service can meet these requirements?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Amazon Inspector</li>
      <li><input type="checkbox" name="question-11" value="B">B. Amazon Macie</li>
      <li><input type="checkbox" name="question-11" value="C">C. Amazon GuardDuty</li>
      <li><input type="checkbox" name="question-11" value="D">D. AWS Secrets Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>Which components are required to build a successful site-to-site VPN connection on AWS? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. Internet gateway</li>
      <li><input type="checkbox" name="question-12" value="B">B. NAT gateway</li>
      <li><input type="checkbox" name="question-12" value="C">C. Customer gateway</li>
      <li><input type="checkbox" name="question-12" value="D">D. Transit gateway</li>
      <li><input type="checkbox" name="question-12" value="E">E. Virtual private gateway</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CE</p>

    </details>
  </li>
  <li>Which Amazon EC2 pricing option is best suited for applications with short-term, spiky, or unpredictable workloads that cannot be interrupted?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. Spot Instances</li>
      <li><input type="checkbox" name="question-13" value="B">B. Dedicated Hosts</li>
      <li><input type="checkbox" name="question-13" value="C">C. On-Demand Instances</li>
      <li><input type="checkbox" name="question-13" value="D">D. Reserved Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which AWS cloud architecture principle states that systems should reduce interdependencies?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. Scalability</li>
      <li><input type="checkbox" name="question-14" value="B">B. Services, not servers</li>
      <li><input type="checkbox" name="question-14" value="C">C. Removing single points of failure</li>
      <li><input type="checkbox" name="question-14" value="D">D. Loose coupling</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

    </details>
  </li>
  <li>What is the MOST effective resource for staying up to date on AWS security announcements?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. AWS Personal Health Dashboard</li>
      <li><input type="checkbox" name="question-15" value="B">B. AWS Secrets Manager</li>
      <li><input type="checkbox" name="question-15" value="C">C. AWS Security Bulletins</li>
      <li><input type="checkbox" name="question-15" value="D">D. Amazon Inspector</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which AWS service offers persistent storage for a file system?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. Amazon S3</li>
      <li><input type="checkbox" name="question-16" value="B">B. Amazon EC2 instance store</li>
      <li><input type="checkbox" name="question-16" value="C">C. Amazon Elastic Block Store (Amazon EBS)</li>
      <li><input type="checkbox" name="question-16" value="D">D. Amazon ElastiCache</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which of the following allows AWS users to manage cost allocations for billing?
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Tagging resources</li>
      <li><input type="checkbox" name="question-17" value="B">B. Limiting who can create resources</li>
      <li><input type="checkbox" name="question-17" value="C">C. Adding a secondary payment method</li>
      <li><input type="checkbox" name="question-17" value="D">D. Running all operations on a single AWS account</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Amazon GuardDuty</li>
      <li><input type="checkbox" name="question-18" value="B">B. AWS Security Hub</li>
      <li><input type="checkbox" name="question-18" value="C">C. AWS Artifact</li>
      <li><input type="checkbox" name="question-18" value="D">D. AWS Shield</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which of the following AWS services are serverless? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. AWS Lambda</li>
      <li><input type="checkbox" name="question-19" value="B">B. Amazon Elasticsearch Service</li>
      <li><input type="checkbox" name="question-19" value="C">C. AWS Elastic Beanstalk</li>
      <li><input type="checkbox" name="question-19" value="D">D. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-19" value="E">E. Amazon Redshift</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

    </details>
  </li>
  <li>Which AWS managed services can be used to extend an on-premises data center to the AWS network? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. AWS VPN</li>
      <li><input type="checkbox" name="question-20" value="B">B. NAT gateway</li>
      <li><input type="checkbox" name="question-20" value="C">C. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-20" value="D">D. Amazon Connect</li>
      <li><input type="checkbox" name="question-20" value="E">E. Amazon Route 53</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

    </details>
  </li>
  <li>Which requirement must be met for a member account to be unlinked from an AWS Organizations account?
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. The linked account must be actively compliant with AWS System and Organization Controls (SOC).</li>
      <li><input type="checkbox" name="question-21" value="B">B. The payer and the linked account must both create AWS Support cases to request that the member account be unlinked from the organization.</li>
      <li><input type="checkbox" name="question-21" value="C">C. The member account must meet the requirements of a standalone account.</li>
      <li><input type="checkbox" name="question-21" value="D">D. The payer account must be used to remove the linked account from the organization.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>What AWS benefit refers to a customer’s ability to deploy applications that scale up and down the meet variable demand?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Elasticity</li>
      <li><input type="checkbox" name="question-22" value="B">B. Agility</li>
      <li><input type="checkbox" name="question-22" value="C">C. Security</li>
      <li><input type="checkbox" name="question-22" value="D">D. Scalability</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

    </details>
  </li>
  <li>During a compliance review, one of the auditors requires a copy of the AWS SOC 2 report. <br> Which service should be used to submit this request?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. AWS Personal Health Dashboard</li>
      <li><input type="checkbox" name="question-23" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-23" value="C">C. AWS Artifact</li>
      <li><input type="checkbox" name="question-23" value="D">D. Amazon S3</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>A company wants to set up a highly available workload in AWS with a disaster recovery plan that will allow the company to recover in case of a regional service interruption. <br> Which configuration will meet these requirements?
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. Run on two Availability Zones in one AWS Region, using the additional Availability Zones in the AWS Region for the disaster recovery site.</li>
      <li><input type="checkbox" name="question-24" value="B">B. Run on two Availability Zones in one AWS Region, using another AWS Region for the disaster recovery site.</li>
      <li><input type="checkbox" name="question-24" value="C">C. Run on two Availability Zones in one AWS Region, using a local AWS Region for the disaster recovery site.</li>
      <li><input type="checkbox" name="question-24" value="D">D. Run across two AWS Regions, using a third AWS Region for the disaster recovery site.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/startups/large-scale-disaster-recovery-using-aws-regions/">https://aws.amazon.com/blogs/startups/large-scale-disaster-recovery-using-aws-regions/</a></p>

      <p>Option D increased complexity and cost.</p>

    </details>
  </li>
  <li>A company has a 500 TB image repository that needs to be transported to AWS for processing. <br> Which AWS service can import this data MOST cost-effectively?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. AWS Snowball</li>
      <li><input type="checkbox" name="question-25" value="B">B. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-25" value="C">C. AWS VPN</li>
      <li><input type="checkbox" name="question-25" value="D">D. Amazon S3</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/storage/migrating-hundreds-of-tb-of-data-to-amazon-s3-with-aws-datasync/">https://aws.amazon.com/blogs/storage/migrating-hundreds-of-tb-of-data-to-amazon-s3-with-aws-datasync/</a></p>

    </details>
  </li>
  <li>Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-26" value="B">B. Amazon Athena</li>
      <li><input type="checkbox" name="question-26" value="C">C. Amazon RDS</li>
      <li><input type="checkbox" name="question-26" value="D">D. Amazon EMR</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/rds/postgresql/">https://aws.amazon.com/rds/postgresql/</a></p>

    </details>
  </li>
  <li>Which of the following assist in identifying costs by department? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. Using tags on resources</li>
      <li><input type="checkbox" name="question-27" value="B">B. Using multiple AWS accounts</li>
      <li><input type="checkbox" name="question-27" value="C">C. Using an account manager</li>
      <li><input type="checkbox" name="question-27" value="D">D. Using AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-27" value="E">E. Using Consolidated Billing</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AB</p>

    </details>
  </li>
  <li>A company wants to allow full access to an Amazon S3 bucket for a particular user. <br> Which element in the S3 bucket policy holds the user details that describe who needs access to the S3 bucket?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. Principal</li>
      <li><input type="checkbox" name="question-28" value="B">B. Action</li>
      <li><input type="checkbox" name="question-28" value="C">C. Resource</li>
      <li><input type="checkbox" name="question-28" value="D">D. Statement</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html">https://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html</a></p>

    </details>
  </li>
  <li>Which AWS service allows for effective cost management of multiple AWS accounts?
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. AWS Organizations</li>
      <li><input type="checkbox" name="question-29" value="B">B. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-29" value="C">C. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-29" value="D">D. Amazon Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/aws/aws-organizations-policy-based-management-for-multiple-aws-accounts/">https://aws.amazon.com/blogs/aws/aws-organizations-policy-based-management-for-multiple-aws-accounts/</a></p>

    </details>
  </li>
  <li>A company is piloting a new customer-facing application on Amazon Elastic Compute Cloud (Amazon EC2) for one month. <br> What pricing model is appropriate?
    <ul>
      <li><input type="checkbox" name="question-30" value="A">A. Reserved Instances</li>
      <li><input type="checkbox" name="question-30" value="B">B. Spot Instances</li>
      <li><input type="checkbox" name="question-30" value="C">C. On-Demand Instances</li>
      <li><input type="checkbox" name="question-30" value="D">D. Dedicated Hosts</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/ec2/pricing/">https://aws.amazon.com/ec2/pricing/</a></p>

    </details>
  </li>
  <li>Which AWS tools automatically forecast future AWS costs?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. AWS Support Center</li>
      <li><input type="checkbox" name="question-31" value="B">B. AWS Total Cost of Ownership (TCO) Calculator</li>
      <li><input type="checkbox" name="question-31" value="C">C. AWS Simple Monthly Calculator</li>
      <li><input type="checkbox" name="question-31" value="D">D. Cost Explorer</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html</a></p>

    </details>
  </li>
  <li>Under the AWS shared responsibility model, which of the following is a responsibility of AWS?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Enabling server-side encryption for objects stored in S3</li>
      <li><input type="checkbox" name="question-32" value="B">B. Applying AWS IAM security policies</li>
      <li><input type="checkbox" name="question-32" value="C">C. Patching the operating system on an Amazon EC2 instance</li>
      <li><input type="checkbox" name="question-32" value="D">D. Applying updates to the hypervisor</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/?ref=wellarchitected">https://aws.amazon.com/compliance/shared-responsibility-model/?ref=wellarchitected</a></p>

    </details>
  </li>
  <li>A user is able to set up a master payer account to view consolidated billing reports through:
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. AWS Budgets.</li>
      <li><input type="checkbox" name="question-33" value="B">B. Amazon Macie.</li>
      <li><input type="checkbox" name="question-33" value="C">C. Amazon QuickSight.</li>
      <li><input type="checkbox" name="question-33" value="D">D. AWS Organizations.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></p>

    </details>
  </li>
  <li>Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Performance efficiency</li>
      <li><input type="checkbox" name="question-34" value="B">B. Operational excellence</li>
      <li><input type="checkbox" name="question-34" value="C">C. Reliability</li>
      <li><input type="checkbox" name="question-34" value="D">D. Security</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/">https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/</a></p>

    </details>
  </li>
  <li>Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Vertical scaling</li>
      <li><input type="checkbox" name="question-35" value="B">B. Manual failure recovery</li>
      <li><input type="checkbox" name="question-35" value="C">C. Testing recovery procedures</li>
      <li><input type="checkbox" name="question-35" value="D">D. Changing infrastructure manually</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/">https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/</a></p>

    </details>
  </li>
  <li>What is a characteristic of Convertible Reserved Instances (RIs)?
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. Users can exchange Convertible RIs for other Convertible RIs from a different instance family with an equal or higher value than the Convertible Reserved Instances that you are exchanging.</li>
      <li><input type="checkbox" name="question-36" value="B">B. Users can exchange Convertible RIs for other Convertible RIs in different AWS Regions.</li>
      <li><input type="checkbox" name="question-36" value="C">C. Users can sell and buy Convertible RIs on the AWS Marketplace.</li>
      <li><input type="checkbox" name="question-36" value="D">D. Users can shorten the term of their Convertible RIs by merging them with other Convertible RIs.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-convertible-exchange.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-convertible-exchange.html</a></p>

    </details>
  </li>
  <li>The user is fully responsible for which action when running workloads on AWS?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Patching the infrastructure components</li>
      <li><input type="checkbox" name="question-37" value="B">B. Implementing controls to route application traffic</li>
      <li><input type="checkbox" name="question-37" value="C">C. Maintaining physical and environmental controls</li>
      <li><input type="checkbox" name="question-37" value="D">D. Maintaining the underlying infrastructure components</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>An architecture design includes Amazon EC2, an Elastic Load Balancer, and Amazon RDS. <br> What is the BEST way to get a monthly cost estimation for this architecture?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. Open an AWS Support case, provide the architecture proposal, and ask for a monthly cost estimation.</li>
      <li><input type="checkbox" name="question-38" value="B">B. Collect the published prices of the AWS services and calculate the monthly estimate.</li>
      <li><input type="checkbox" name="question-38" value="C">C. Use the AWS Simple Monthly Calculator to estimate the monthly cost.</li>
      <li><input type="checkbox" name="question-38" value="D">D. Use the AWS Total Cost of Ownership (TCO) Calculator to estimate the monthly cost.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/pricing-calculator/latest/userguide/aws-pc.pdf">https://docs.aws.amazon.com/pricing-calculator/latest/userguide/aws-pc.pdf</a></p>

    </details>
  </li>
  <li>Which are benefits of using Amazon RDS over Amazon EC2 when running relational databases on AWS? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. Automated backups</li>
      <li><input type="checkbox" name="question-39" value="B">B. Schema management</li>
      <li><input type="checkbox" name="question-39" value="C">C. Indexing of tables</li>
      <li><input type="checkbox" name="question-39" value="D">D. Software patching</li>
      <li><input type="checkbox" name="question-39" value="E">E. Extract, transform, and load (ETL) management</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html</a></p>

    </details>
  </li>
  <li>What does the Amazon S3 Intelligent-Tiering storage class offer?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. Payment flexibility by reserving storage capacity</li>
      <li><input type="checkbox" name="question-40" value="B">B. Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume</li>
      <li><input type="checkbox" name="question-40" value="C">C. Automatic cost savings by moving objects between tiers based on access pattern changes</li>
      <li><input type="checkbox" name="question-40" value="D">D. Secure, durable, and lowest cost storage for data archival</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation: <a href="https://aws.amazon.com/about-aws/whats-new/2018/11/s3-intelligent-tiering/">https://aws.amazon.com/about-aws/whats-new/2018/11/s3-intelligent-tiering/</a></p>

    </details>
  </li>
  <li>A company has multiple data sources across the organization and wants to consolidate data into one data warehouse. <br> Which AWS service can be used to meet this requirement?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-41" value="B">B. Amazon Redshift</li>
      <li><input type="checkbox" name="question-41" value="C">C. Amazon Athena</li>
      <li><input type="checkbox" name="question-41" value="D">D. Amazon QuickSight</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/redshift/faqs/">https://aws.amazon.com/redshift/faqs/</a></p>

    </details>
  </li>
  <li>Which AWS service can be used to track resource changes and establish compliance?
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Amazon CloudWatch</li>
      <li><input type="checkbox" name="question-42" value="B">B. AWS Config</li>
      <li><input type="checkbox" name="question-42" value="C">C. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-42" value="D">D. AWS Trusted Advisor</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html</a></p>

    </details>
  </li>
  <li>A user has underutilized on-premises resources. <br> Which AWS Cloud concept can BEST address this issue?
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. High availability</li>
      <li><input type="checkbox" name="question-43" value="B">B. Elasticity</li>
      <li><input type="checkbox" name="question-43" value="C">C. Security</li>
      <li><input type="checkbox" name="question-43" value="D">D. Loose coupling</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://www.gremlin.com/blog/implementing-cost-saving-strategies-on-amazon-ec-2-with-chaos-engineering/">https://www.gremlin.com/blog/implementing-cost-saving-strategies-on-amazon-ec-2-with-chaos-engineering/</a></p>

    </details>
  </li>
  <li>A user has a stateful workload that will run on Amazon EC2 for the next 3 years. <br> What is the MOST cost-effective pricing model for this workload?
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. On-Demand Instances</li>
      <li><input type="checkbox" name="question-44" value="B">B. Reserved Instances</li>
      <li><input type="checkbox" name="question-44" value="C">C. Dedicated Instances</li>
      <li><input type="checkbox" name="question-44" value="D">D. Spot Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

    </details>
  </li>
  <li>A cloud practitioner needs an Amazon EC2 instance to launch and run for 7 hours without interruptions. <br> What is the most suitable and cost-effective option for this task?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. On-Demand Instance</li>
      <li><input type="checkbox" name="question-45" value="B">B. Reserved Instance</li>
      <li><input type="checkbox" name="question-45" value="C">C. Dedicated Host</li>
      <li><input type="checkbox" name="question-45" value="D">D. Spot Instance</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>Which of the following are benefits of using AWS Trusted Advisor? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Providing high-performance container orchestration</li>
      <li><input type="checkbox" name="question-46" value="B">B. Creating and rotating encryption keys</li>
      <li><input type="checkbox" name="question-46" value="C">C. Detecting underutilized resources to save costs</li>
      <li><input type="checkbox" name="question-46" value="D">D. Improving security by proactively monitoring the AWS environment</li>
      <li><input type="checkbox" name="question-46" value="E">E. Implementing enforced tagging across AWS resources</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CD</p>

      <p>Explanation: <a href="https://aws.amazon.com/about-aws/whats-new/2016/06/aws-support-enables-tagging-capabilities-for-trusted-advisor/">https://aws.amazon.com/about-aws/whats-new/2016/06/aws-support-enables-tagging-capabilities-for-trusted-advisor/</a></p>

    </details>
  </li>
  <li>A developer has been hired by a large company and needs AWS credentials. <br> Which are security best practices that should be followed? (Choose TWO)
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Grant the developer access to only the AWS resources needed to perform the job.</li>
      <li><input type="checkbox" name="question-47" value="B">B. Share the AWS account root user credentials with the developer.</li>
      <li><input type="checkbox" name="question-47" value="C">C. Add the developer to the administrator’s group in AWS IAM.</li>
      <li><input type="checkbox" name="question-47" value="D">D. Configure a password policy that ensures the developer’s password cannot be changed.</li>
      <li><input type="checkbox" name="question-47" value="E">E. Ensure the account password policy requires a minimum length.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AE</p>

    </details>
  </li>
  <li>Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. AWS Storage Gateway</li>
      <li><input type="checkbox" name="question-48" value="B">B. Amazon S3 Glacier Deep Archive</li>
      <li><input type="checkbox" name="question-48" value="C">C. Amazon Lightsail</li>
      <li><input type="checkbox" name="question-48" value="D">D. AWS Snowball</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/snowball/latest/ug/transfer-petabytes.html">https://docs.aws.amazon.com/snowball/latest/ug/transfer-petabytes.html</a></p>

    </details>
  </li>
  <li>Which service provides a user the ability to warehouse data in the AWS Cloud?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Amazon EFS</li>
      <li><input type="checkbox" name="question-49" value="B">B. Amazon Redshift</li>
      <li><input type="checkbox" name="question-49" value="C">C. Amazon RDS</li>
      <li><input type="checkbox" name="question-49" value="D">D. Amazon VPC</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://aws.amazon.com/redshift/">https://aws.amazon.com/redshift/</a></p>

    </details>
  </li>
</ol>
      `,
    data: []
  },
];