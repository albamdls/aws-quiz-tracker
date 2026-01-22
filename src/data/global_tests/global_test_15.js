export default [
  {
    id: 15,
    title: "Exam 15",
    questions: 50, // luego se reemplaza por exam.data.length
    rawHtml: `
            <ol>
  <li>How do customers benefit from Amazon’s massive economies of scale?
    <ul>
      <li><input type="checkbox" name="question-0" value="A">A. Periodic price reductions as the result of Amazon’s operational efficiencies</li>
      <li><input type="checkbox" name="question-0" value="B">B. New Amazon EC2 instance types providing the latest hardware</li>
      <li><input type="checkbox" name="question-0" value="C">C. The ability to scale up and down when needed</li>
      <li><input type="checkbox" name="question-0" value="D">D. Increased reliability in the underlying hardware of Amazon EC2 instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

    </details>
  </li>
  <li>Which AWS services can be used to gather information about AWS account activity? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-1" value="A">A. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-1" value="B">B. AWS Cloud9</li>
      <li><input type="checkbox" name="question-1" value="C">C. AWS CloudTrail</li>
      <li><input type="checkbox" name="question-1" value="D">D. AWS CloudHSM</li>
      <li><input type="checkbox" name="question-1" value="E">E. Amazon CloudWatch</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CE</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS offers a solution that uses AWS CloudTrail to log account activity, Amazon Kinesis to compute and stream metrics in real-time, and Amazon DynamoDB to durably store the computed data.</li>
        <li>Metrics are calculated for create, modify, and delete API calls for more than 60 supported AWS services.</li>
        <li>The solution also features a dashboard that visualizes your account activity in real-time.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/solutions/real-time-insights-account-activity/">https://aws.amazon.com/solutions/real-time-insights-account-activity/</a></p>

    </details>
  </li>
  <li>Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-2" value="A">A. Patching databases software</li>
      <li><input type="checkbox" name="question-2" value="B">B. Testing application releases</li>
      <li><input type="checkbox" name="question-2" value="C">C. Backing up databases</li>
      <li><input type="checkbox" name="question-2" value="D">D. Creating database schema</li>
      <li><input type="checkbox" name="question-2" value="E">E. Running penetration tests</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

    </details>
  </li>
  <li>In which scenario should Amazon EC2 Spot Instances be used?
    <ul>
      <li><input type="checkbox" name="question-3" value="A">A. A company wants to move its main website to AWS from an on-premises web server.</li>
      <li><input type="checkbox" name="question-3" value="B">B. A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.</li>
      <li><input type="checkbox" name="question-3" value="C">C. A company’s heavily used legacy database is currently running on-premises.</li>
      <li><input type="checkbox" name="question-3" value="D">D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-leveraging-ec2-spot-instances/spot-instance-interruptions.html">https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-leveraging-ec2-spot-instances/spot-instance-interruptions.html</a></p>

    </details>
  </li>
  <li>Which AWS feature should a customer leverage to achieve high availability of an application?
    <ul>
      <li><input type="checkbox" name="question-4" value="A">A. AWS Direct Connect</li>
      <li><input type="checkbox" name="question-4" value="B">B. Availability Zones</li>
      <li><input type="checkbox" name="question-4" value="C">C. Data centers</li>
      <li><input type="checkbox" name="question-4" value="D">D. Amazon Virtual Private Cloud (Amazon VPC)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>
      <ul>
        <li>This is to achieve High Availability for any web application (in this case SwiftCode) deployed in AWS.</li>
        <li>The following features will be present:</li>
        <li>High availability across multiple instances/multiple availability zones.</li>
        <li>Auto Scaling of instances (scale up and scale down) based on number of requests coming in</li>
        <li>Additional Security to the instances/database that are in production</li>
        <li>No impact to end users during newer version of code deployment</li>
        <li>No Impact during patching the instances</li>
      </ul>

    </details>
  </li>
  <li>Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?
    <ul>
      <li><input type="checkbox" name="question-5" value="A">A. Enterprise</li>
      <li><input type="checkbox" name="question-5" value="B">B. Business</li>
      <li><input type="checkbox" name="question-5" value="C">C. Developer</li>
      <li><input type="checkbox" name="question-5" value="D">D. Basic</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation: <a href="https://aws.amazon.com/premiumsupport/plans/">https://aws.amazon.com/premiumsupport/plans/</a></p>

    </details>
  </li>
  <li>Which AWS service can serve a static website?
    <ul>
      <li><input type="checkbox" name="question-6" value="A">A. Amazon S3</li>
      <li><input type="checkbox" name="question-6" value="B">B. Amazon Route 53</li>
      <li><input type="checkbox" name="question-6" value="C">C. Amazon QuickSight</li>
      <li><input type="checkbox" name="question-6" value="D">D. AWS X-Ray</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>
      <ul>
        <li>You can host a static website on Amazon Simple Storage Service (Amazon S3). On a static website, individual webpages include static content.</li>
        <li>They might also contain client-side scripts. By contrast, a dynamic website relies on server-side processing, including server-side scripts such as PHP, JSP, or ASP.NET. Amazon S3 does not support server-side scripting.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html</a></p>

    </details>
  </li>
  <li>How does AWS shorten the time to provision IT resources?
    <ul>
      <li><input type="checkbox" name="question-7" value="A">A. It supplies an online IT ticketing platform for resource requests.</li>
      <li><input type="checkbox" name="question-7" value="B">B. It supports automatic code validation services.</li>
      <li><input type="checkbox" name="question-7" value="C">C. It provides the ability to programmatically provision existing resources.</li>
      <li><input type="checkbox" name="question-7" value="D">D. It automates the resource request process from a company’s IT vendor list.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>What can AWS edge locations be used for? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-8" value="A">A. Hosting applications</li>
      <li><input type="checkbox" name="question-8" value="B">B. Delivering content closer to users</li>
      <li><input type="checkbox" name="question-8" value="C">C. Running NoSQL database caching services</li>
      <li><input type="checkbox" name="question-8" value="D">D. Reducing traffic on the server by caching responses</li>
      <li><input type="checkbox" name="question-8" value="E">E. Sending notification messages to end users</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation:</p>
      <ul>
        <li>CloudFront delivers your content through a worldwide network of data centers called edge locations.
 When a user requests content that you’re serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html</a></p>

    </details>
  </li>
  <li>Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
    <ul>
      <li><input type="checkbox" name="question-9" value="A">A. A public and private key-pair</li>
      <li><input type="checkbox" name="question-9" value="B">B. Amazon Inspector</li>
      <li><input type="checkbox" name="question-9" value="C">C. AWS Identity and Access Management (IAM) policies</li>
      <li><input type="checkbox" name="question-9" value="D">D. Security Groups</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>To allow users to perform S3 actions on the bucket from the VPC endpoints or IP addresses, you must explicitly grant those user-level permissions.</li>
        <li>You can grant user-level permissions on either an AWS Identity and Access Management (IAM) policy or another statement in the bucket policy.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/premiumsupport/knowledge-center/block-s3-traffic-vpc-ip/">https://aws.amazon.com/premiumsupport/knowledge-center/block-s3-traffic-vpc-ip/</a></p>

    </details>
  </li>
  <li>A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?
    <ul>
      <li><input type="checkbox" name="question-10" value="A">A. Think parallel</li>
      <li><input type="checkbox" name="question-10" value="B">B. Implement elasticity</li>
      <li><input type="checkbox" name="question-10" value="C">C. Decouple your components</li>
      <li><input type="checkbox" name="question-10" value="D">D. Design for failure</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation: <a href="https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf">https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf</a></p>

    </details>
  </li>
  <li>Which of the following tasks is the responsibility of AWS?
    <ul>
      <li><input type="checkbox" name="question-11" value="A">A. Encrypting client-side data</li>
      <li><input type="checkbox" name="question-11" value="B">B. Configuring AWS Identity and Access Management (IAM) roles</li>
      <li><input type="checkbox" name="question-11" value="C">C. Securing the Amazon EC2 hypervisor</li>
      <li><input type="checkbox" name="question-11" value="D">D. Setting user password policies</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>In EC2, the AWS IaaS offering, everything from the hypervisor layer down is AWS’s responsibility.</li>
        <li>A customer’s poorly coded applications, misconfigured operating systems, or insecure firewall settings will not affect the hypervisor, it will only affect the customer’s virtual machines running on that hypervisor.</li>
      </ul>

      <p>Reference: <a href="https://www.mindpointgroup.com/blog/the-aws-shared-responsibility-model-part-1-security-in">https://www.mindpointgroup.com/blog/the-aws-shared-responsibility-model-part-1-security-in</a>- the-cloud/</p>

    </details>
  </li>
  <li>One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:
    <ul>
      <li><input type="checkbox" name="question-12" value="A">A. the ability to bid for a lower hourly cost.</li>
      <li><input type="checkbox" name="question-12" value="B">B. paying a daily rate regardless of time used.</li>
      <li><input type="checkbox" name="question-12" value="C">C. paying only for time used.</li>
      <li><input type="checkbox" name="question-12" value="D">D. pre-paying for instances and paying a lower hourly rate.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>On-Demand Capacity Reservations are priced exactly the same as their equivalent (On-Demand) instance usage.</li>
        <li>If a Capacity Reservation is fully utilized, you only pay for instance usage and nothing towards the Capacity Reservation</li>
        <li>If a Capacity Reservation is partially utilized, you pay for the instance usage and for the unused portion of the Capacity Reservation.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/ec2/pricing/on-demand/">https://aws.amazon.com/ec2/pricing/on-demand/</a></p>

    </details>
  </li>
  <li>An administrator needs to rapidly deploy a popular IT solution and start using it immediately. <br> Where can the administrator find assistance?
    <ul>
      <li><input type="checkbox" name="question-13" value="A">A. AWS Well-Architected Framework documentation</li>
      <li><input type="checkbox" name="question-13" value="B">B. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-13" value="C">C. AWS CodeCommit</li>
      <li><input type="checkbox" name="question-13" value="D">D. AWS Quick Start reference deployments</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>Quick Starts are built by AWS solutions architects and partners to help you deploy popular technologies on AWS, based on AWS best practices for security and high availability.</li>
        <li>These accelerators reduce hundreds of manual procedures into just a few steps, so you can build your production environment quickly and start using it immediately.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/quickstart/?quickstart-all.sort-by=item.additionalFields.updateDate&amp;quickstart-all.sort-order=desc">https://aws.amazon.com/quickstart/?quickstart-all.sort-by=item.additionalFields.updateDate&amp;quickstart-all.sort-order=desc</a></p>

    </details>
  </li>
  <li>Which of the following services is in the category of AWS serverless platform?
    <ul>
      <li><input type="checkbox" name="question-14" value="A">A. Amazon EMR</li>
      <li><input type="checkbox" name="question-14" value="B">B. Elastic Load Balancing</li>
      <li><input type="checkbox" name="question-14" value="C">C. AWS Lambda</li>
      <li><input type="checkbox" name="question-14" value="D">D. AWS Mobile Hub</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS provides a set of fully managed services that you can use to build and run serverless applications.</li>
        <li>Serverless applications don’t require provisioning, maintaining, and administering servers for backend components such as compute, databases, storage, stream processing, message queueing, and more.</li>
        <li>You also no longer need to worry about ensuring application fault tolerance and availability.</li>
        <li>Instead, AWS handles all of these capabilities for you. Serverless platform includes: AWS lambda, Amazon S3, DynamoDB, API gateway, Amazon SNS, AWS step functions, Amazon kinesis and developing tools and services.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/serverless/">https://aws.amazon.com/serverless/</a></p>

    </details>
  </li>
  <li>Which services are parts of the AWS serverless platform?
    <ul>
      <li><input type="checkbox" name="question-15" value="A">A. Amazon EC2, Amazon S3, Amazon Athena</li>
      <li><input type="checkbox" name="question-15" value="B">B. Amazon Kinesis, Amazon SQS, Amazon EMR</li>
      <li><input type="checkbox" name="question-15" value="C">C. AWS Step Functions, Amazon DynamoDB, Amazon SNS</li>
      <li><input type="checkbox" name="question-15" value="D">D. Amazon Athena, Amazon Cognito, Amazon EC2</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS provides a set of fully managed services that you can use to build and run serverless applications.</li>
        <li>Serverless applications don’t require provisioning, maintaining, and administering servers for backend components such as compute, databases, storage, stream processing, message queueing, and more. You also no longer need to worry about ensuring application fault tolerance and availability.</li>
        <li>Instead, AWS handles all of these capabilities for you.</li>
        <li>Serverless platform includes: AWS lambda, Amazon S3, DynamoDB, API gateway, Amazon SNS, AWS step functions, Amazon kinesis and developing tools and services.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/serverless/">https://aws.amazon.com/serverless/</a></p>

    </details>
  </li>
  <li>Under the shared responsibility model, which of the following is a shared control between a customer and AWS?
    <ul>
      <li><input type="checkbox" name="question-16" value="A">A. Physical controls</li>
      <li><input type="checkbox" name="question-16" value="B">B. Patch management</li>
      <li><input type="checkbox" name="question-16" value="C">C. Zone security</li>
      <li><input type="checkbox" name="question-16" value="D">D. Data center auditing</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>

      <ul>
        <li>Shared Controls Controls which apply to both the infrastructure layer and customer layers, but in completely separate contexts or perspectives.</li>
        <li>In a shared control, AWS provides the requirements for the infrastructure and the customer must provide their own control implementation within their use of AWS services.</li>
        <li>Examples include:</li>
        <li>Patch Management AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications.</li>
        <li>Configuration Management AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.</li>
        <li>Awareness &amp; Training AWS trains AWS employees, but a customer must train their own employees.</li>
        <li>Customer Specific Controls which are solely the responsibility of the customer based on the application they are deploying within AWS services.</li>
        <li>Service and Communications Protection or Zone Security which may require a customer to route or zone data within specific security environments.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>What can AWS edge locations be used for? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-17" value="A">A. Hosting applications</li>
      <li><input type="checkbox" name="question-17" value="B">B. Delivering content closer to users</li>
      <li><input type="checkbox" name="question-17" value="C">C. Running NoSQL database caching services</li>
      <li><input type="checkbox" name="question-17" value="D">D. Reducing traffic on the server by caching responses</li>
      <li><input type="checkbox" name="question-17" value="E">E. Sending notification messages to end users</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BD</p>

      <p>Explanation:</p>

      <ul>
        <li>CloudFront delivers your content through a worldwide network of data centers called edge locations.</li>
        <li>When a user requests content that you’re serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html</a></p>

    </details>
  </li>
  <li>What technology enables compute capacity to adjust as loads change?
    <ul>
      <li><input type="checkbox" name="question-18" value="A">A. Load balancing</li>
      <li><input type="checkbox" name="question-18" value="B">B. Automatic failover</li>
      <li><input type="checkbox" name="question-18" value="C">C. Round robin</li>
      <li><input type="checkbox" name="question-18" value="D">D. Auto Scaling</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>
      <ul>
        <li>AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.</li>
        <li>Using AWS Auto Scaling, it’s easy to setup application scaling for multiple resources across multiple services in minutes. - The service provides a simple, powerful user interface that lets you build scaling plans for resources including Amazon EC2 instances and Spot Fleets, Amazon ECS tasks, Amazon DynamoDB tables and indexes, and Amazon Aurora Replicas.</li>
        <li>AWS Auto Scaling makes scaling simple with recommendations that allow you to optimize performance, costs, or balance
between them.</li>
        <li>If you’re already using Amazon EC2 Auto Scaling to dynamically scale your Amazon EC2 instances, you can now combine it with AWS Auto Scaling to scale additional resources for other AWS services.</li>
        <li>With AWS Auto Scaling, your applications always have the right resources at the right time.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/autoscaling/">https://aws.amazon.com/autoscaling/</a></p>

    </details>
  </li>
  <li>Which AWS services are defined as global instead of regional? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-19" value="A">A. Amazon Route 53</li>
      <li><input type="checkbox" name="question-19" value="B">B. Amazon EC2</li>
      <li><input type="checkbox" name="question-19" value="C">C. Amazon S3</li>
      <li><input type="checkbox" name="question-19" value="D">D. Amazon CloudFront</li>
      <li><input type="checkbox" name="question-19" value="E">E. Amazon DynamoDB</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation: <a href="http://jayendrapatil.com/aws-global-vs-regional-vs-az-resources/">http://jayendrapatil.com/aws-global-vs-regional-vs-az-resources/</a></p>

    </details>
  </li>
  <li>Which AWS service would you use to obtain compliance reports and certificates?
    <ul>
      <li><input type="checkbox" name="question-20" value="A">A. AWS Artifact</li>
      <li><input type="checkbox" name="question-20" value="B">B. AWS Lambda</li>
      <li><input type="checkbox" name="question-20" value="C">C. Amazon Inspector</li>
      <li><input type="checkbox" name="question-20" value="D">D. AWS Certificate Manager</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

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
  <li>Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-21" value="A">A. Ensuring that application data is encrypted at rest</li>
      <li><input type="checkbox" name="question-21" value="B">B. Ensuring that AWS NTP servers are set to the correct time</li>
      <li><input type="checkbox" name="question-21" value="C">C. Ensuring that users have received security training in the use of AWS services</li>
      <li><input type="checkbox" name="question-21" value="D">D. Ensuring that access to data centers is restricted</li>
      <li><input type="checkbox" name="question-21" value="E">E. Ensuring that hardware is disposed of properly</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>Which AWS service can be used to manually launch instances based on resource requirements?
    <ul>
      <li><input type="checkbox" name="question-22" value="A">A. Amazon EBS</li>
      <li><input type="checkbox" name="question-22" value="B">B. Amazon S3</li>
      <li><input type="checkbox" name="question-22" value="C">C. Amazon EC2</li>
      <li><input type="checkbox" name="question-22" value="D">D. Amazon ECS</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>A company is migrating an application that is running non-interruptible workloads for a three-year time frame. <br> Which pricing construct would provide the MOST cost-effective solution?
    <ul>
      <li><input type="checkbox" name="question-23" value="A">A. Amazon EC2 Spot Instances</li>
      <li><input type="checkbox" name="question-23" value="B">B. Amazon EC2 Dedicated Instances</li>
      <li><input type="checkbox" name="question-23" value="C">C. Amazon EC2 On-Demand Instances</li>
      <li><input type="checkbox" name="question-23" value="D">D. Amazon EC2 Reserved Instances</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

    </details>
  </li>
  <li>The financial benefits of using AWS are: (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-24" value="A">A. reduced Total Cost of Ownership (TCO).</li>
      <li><input type="checkbox" name="question-24" value="B">B. increased capital expenditure (capex).</li>
      <li><input type="checkbox" name="question-24" value="C">C. reduced operational expenditure (opex).</li>
      <li><input type="checkbox" name="question-24" value="D">D. deferred payment plans for startups.</li>
      <li><input type="checkbox" name="question-24" value="E">E. business credit lines for stratups.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AC</p>

    </details>
  </li>
  <li>Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?
    <ul>
      <li><input type="checkbox" name="question-25" value="A">A. Patching of the guest operating system</li>
      <li><input type="checkbox" name="question-25" value="B">B. Security awareness and training</li>
      <li><input type="checkbox" name="question-25" value="C">C. Physical and environmental controls</li>
      <li><input type="checkbox" name="question-25" value="D">D. Development of an IAM password policy</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)
    <ul>
      <li><input type="checkbox" name="question-26" value="A">A. AWS VPN</li>
      <li><input type="checkbox" name="question-26" value="B">B. Amazon Redshift</li>
      <li><input type="checkbox" name="question-26" value="C">C. API Gateway</li>
      <li><input type="checkbox" name="question-26" value="D">D. Amazon Direct Connect</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A, D</p>

      <p>Explanation:</p>

      <ul>
        <li>AWS Direct Connect enables you to securely connect your AWS environment to your on-premises data center or office location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic connection.</li>
        <li>AWS Direct Connect offers dedicated high speed, low latency connection, which bypasses internet service providers in your
network path.</li>
        <li>An AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with, as well as access to other US regions.</li>
        <li>AWS Direct Connect allows you to logically partition the fiber-optic connections into multiple logical connections called Virtual Local Area Networks (VLAN).</li>
        <li>You can take advantage of these logical connections to improve security, differentiate traffic, and achieve compliance requirements.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/getting-started/projects/connect-data-center-to-aws/">https://aws.amazon.com/getting-started/projects/connect-data-center-to-aws/</a></p>

    </details>
  </li>
  <li>A company wants to reduce the physical compute footprint that developers use to run code. <br> Which service would meet that need by enabling serverless architectures?
    <ul>
      <li><input type="checkbox" name="question-27" value="A">A. Amazon Elastic Compute Cloud (Amazon EC2)</li>
      <li><input type="checkbox" name="question-27" value="B">B. AWS Lambda</li>
      <li><input type="checkbox" name="question-27" value="C">C. Amazon DynamoDB</li>
      <li><input type="checkbox" name="question-27" value="D">D. AWS CodeCommit</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>

      <ul>
        <li>AWS Lambda is an integral part of coding on AWS. It reduces physical compute footprint by utilizing aws cloud services to run code.</li>
      </ul>

    </details>
  </li>
  <li>Which AWS service provides alerts when an AWS event may impact a company’s AWS resources?
    <ul>
      <li><input type="checkbox" name="question-28" value="A">A. AWS Personal Health Dashboard</li>
      <li><input type="checkbox" name="question-28" value="B">B. AWS Service Health Dashboard</li>
      <li><input type="checkbox" name="question-28" value="C">C. AWS Trusted Advisor</li>
      <li><input type="checkbox" name="question-28" value="D">D. AWS Infrastructure Event Management</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>

      <ul>
        <li>AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you.</li>
        <li>While the Service Health Dashboard displays the general status of AWS services, Personal Health Dashboard gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/">https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/</a></p>

    </details>
  </li>
  <li>Which of the following are categories of AWS Trusted Advisor? (Select TWO.)
    <ul>
      <li><input type="checkbox" name="question-29" value="A">A. Fault Tolerance</li>
      <li><input type="checkbox" name="question-29" value="B">B. Instance Usage</li>
      <li><input type="checkbox" name="question-29" value="C">C. Infrastructure</li>
      <li><input type="checkbox" name="question-29" value="D">D. Performance</li>
      <li><input type="checkbox" name="question-29" value="E">E. Storage Capacity</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AD</p>

      <p>Explanation:</p>

      <ul>
        <li>Like your customized cloud expert, AWS Trusted Advisor analyzes your AWS environment and provides best practice recommendations in five categories: cost optimization, performance, security, fault tolerance and service limits.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/premiumsupport/technology/trusted-advisor/">https://aws.amazon.com/premiumsupport/technology/trusted-advisor/</a></p>

    </details>
  </li>
  <li>Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?    - A. Amazon RDS
    <ul>
      <li><input type="checkbox" name="question-30" value="B">B. Amazon EC2</li>
      <li><input type="checkbox" name="question-30" value="C">C. Amazon ElastiCache</li>
      <li><input type="checkbox" name="question-30" value="D">D. AWS Fargate</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>

      <ul>
        <li>The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2.</li>
      </ul>

      <p>Reference: <a href="https://www.whizlabs.com/blog/aws-security-shared-responsibility/">https://www.whizlabs.com/blog/aws-security-shared-responsibility/</a></p>

    </details>
  </li>
  <li>A company will be moving from an on-premises data center to the AWS Cloud. <br> What would be one financial difference after the move?
    <ul>
      <li><input type="checkbox" name="question-31" value="A">A. Moving from variable operational expense (opex) to upfront capital expense (capex).</li>
      <li><input type="checkbox" name="question-31" value="B">B. Moving from upfront capital expense (capex) to variable capital expense (capex).</li>
      <li><input type="checkbox" name="question-31" value="C">C. Moving from upfront capital expense (capex) to variable operational expense (opex).</li>
      <li><input type="checkbox" name="question-31" value="D">D. Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex)</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

    </details>
  </li>
  <li>How should a customer forecast the future costs for running a new web application?
    <ul>
      <li><input type="checkbox" name="question-32" value="A">A. Amazon Aurora Backtrack</li>
      <li><input type="checkbox" name="question-32" value="B">B. Amazon CloudWatch Billing Alarms</li>
      <li><input type="checkbox" name="question-32" value="C">C. AWS Simple Monthly Calculator</li>
      <li><input type="checkbox" name="question-32" value="D">D. AWS Cost and Usage report</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: C</p>

      <p>Explanation:</p>

      <ul>
        <li>You can use Cost explorer which is part of Cost and Usage report to forecast future costs of running an application.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html</a></p>

    </details>
  </li>
  <li>Which is the MINIMUM AWS Support plan that provides technical support through phone calls?
    <ul>
      <li><input type="checkbox" name="question-33" value="A">A. Enterprise</li>
      <li><input type="checkbox" name="question-33" value="B">B. Business</li>
      <li><input type="checkbox" name="question-33" value="C">C. Developer</li>
      <li><input type="checkbox" name="question-33" value="D">D. Basic</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>

      <p><a href="https://aws.amazon.com/premiumsupport/plans/">https://aws.amazon.com/premiumsupport/plans/</a></p>

    </details>
  </li>
  <li>According to the AWS shared responsibility model, what is the sole responsibility of AWS?
    <ul>
      <li><input type="checkbox" name="question-34" value="A">A. Application security</li>
      <li><input type="checkbox" name="question-34" value="B">B. Edge location management</li>
      <li><input type="checkbox" name="question-34" value="C">C. Patch management</li>
      <li><input type="checkbox" name="question-34" value="D">D. Client-side data</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>

      <ul>
        <li>Client-side data, application security is the sole responsibility of the customer.</li>
        <li>Patch management is a shared responsibility. That leaves us with edge location management and since this out of the control of the customer, AWS is the one responsible for it.</li>
      </ul>

      <p>Reference: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>Which AWS IAM feature is used to associate a set of permissions with multiple users?
    <ul>
      <li><input type="checkbox" name="question-35" value="A">A. Multi-factor authentication</li>
      <li><input type="checkbox" name="question-35" value="B">B. Groups</li>
      <li><input type="checkbox" name="question-35" value="C">C. Password policies</li>
      <li><input type="checkbox" name="question-35" value="D">D. Access keys</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>

      <ul>
        <li>An IAM group is a collection of IAM users. You can use groups to specify permissions for a collection of users, which can make those permissions easier to manage for those users.</li>
        <li>For example, you could have a group called Admins and give that group the types of permissions that administrators typically need.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html</a></p>

    </details>
  </li>
  <li>Which of the following are benefits of the AWS Cloud? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-36" value="A">A. Unlimited uptime</li>
      <li><input type="checkbox" name="question-36" value="B">B. Elasticity</li>
      <li><input type="checkbox" name="question-36" value="C">C. Agility</li>
      <li><input type="checkbox" name="question-36" value="D">D. Colocation</li>
      <li><input type="checkbox" name="question-36" value="E">E. Capital expenses</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

      <p>Explanation:</p>

      <ul>
        <li>The most celebrated benefit of AWS cloud is elasticity since you can expand the services when you experience more traffic.</li>
        <li>Agile developments in AWS Cloud through strategies are day by day becoming more established within the enterprises across the world.</li>
        <li>With so much improvement and call for optimization in the cloud, it is necessary that these strategies get established from the ground up within the organizations.</li>
        <li>It is highly important as already enterprises have a lot of bequest, politics and hierarchies which act as barriers in their businesses.</li>
      </ul>

      <p>Reference: <a href="https://www.botmetric.com/blog/evolution-agile-enterprises-aws-cloud/">https://www.botmetric.com/blog/evolution-agile-enterprises-aws-cloud/</a></p>

    </details>
  </li>
  <li>Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?
    <ul>
      <li><input type="checkbox" name="question-37" value="A">A. Amazon Connect</li>
      <li><input type="checkbox" name="question-37" value="B">B. AWS Directory Service</li>
      <li><input type="checkbox" name="question-37" value="C">C. Amazon Pinpoint</li>
      <li><input type="checkbox" name="question-37" value="D">D. Amazon Rekognition</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: B</p>

      <p>Explanation:</p>

      <ul>
        <li>Single sign-on only works when used on a computer that is joined to the AWS Directory Service directory.</li>
        <li>It cannot be used on computers that are not joined to the directory.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_single_sign_on.html">https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_single_sign_on.html</a></p>

    </details>
  </li>
  <li>What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?
    <ul>
      <li><input type="checkbox" name="question-38" value="A">A. AWS Direct Connects</li>
      <li><input type="checkbox" name="question-38" value="B">B. Amazon VPCs</li>
      <li><input type="checkbox" name="question-38" value="C">C. Edge locations</li>
      <li><input type="checkbox" name="question-38" value="D">D. Availability Zones</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>

      <ul>
        <li>Each Region is completely independent. Each Availability Zone is isolated, but the Availability Zones in a Region are connected through low-latency links.</li>
        <li>A Local Zone is an AWS infrastructure deployment that places select services closer to your end users.</li>
        <li>A Local Zone is an extension of a Region that is in a different location from your Region.</li>
        <li>It provides a high-bandwidth backbone to the AWS infrastructure and is ideal for latency-sensitive applications, for example machine learning.</li>
      </ul>

      <p>Reference: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html</a></p>

    </details>
  </li>
  <li>Which of the following benefits does the AWS Compliance program provide to AWS customers? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-39" value="A">A. It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks.</li>
      <li><input type="checkbox" name="question-39" value="B">B. AWS is responsible for the maintenance of common compliance framework documentation.</li>
      <li><input type="checkbox" name="question-39" value="C">C. It assures customers that AWS is maintaining physical security and data protection.</li>
      <li><input type="checkbox" name="question-39" value="D">D. It ensures the use of compliance frameworks that are being used by other cloud providers.</li>
      <li><input type="checkbox" name="question-39" value="E">E. It will adopt new compliance frameworks as they become relevant to customer workloads.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AB</p>

      <p>Explanation: <a href="https://d0.awsstatic.com/whitepapers/compliance/AWS_Risk_and_Compliance_Whitepaper.pdf">https://d0.awsstatic.com/whitepapers/compliance/AWS_Risk_and_Compliance_Whitepaper.pdf</a></p>

    </details>
  </li>
  <li>Which of the following services provides on-demand access to AWS compliance reports?
    <ul>
      <li><input type="checkbox" name="question-40" value="A">A. AWS IAM</li>
      <li><input type="checkbox" name="question-40" value="B">B. AWS Artifact</li>
      <li><input type="checkbox" name="question-40" value="C">C. Amazon GuardDuty</li>
      <li><input type="checkbox" name="question-40" value="D">D. AWS KMS</li>
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
  <li>As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?
    <ul>
      <li><input type="checkbox" name="question-41" value="A">A. Security management of data center</li>
      <li><input type="checkbox" name="question-41" value="B">B. Patch management</li>
      <li><input type="checkbox" name="question-41" value="C">C. Configuration management</li>
      <li><input type="checkbox" name="question-41" value="D">D. User and access management</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation: <a href="https://aws.amazon.com/compliance/shared-responsibility-model/">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>

    </details>
  </li>
  <li>When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-42" value="A">A. Software development</li>
      <li><input type="checkbox" name="question-42" value="B">B. Project management</li>
      <li><input type="checkbox" name="question-42" value="C">C. Storage hardware</li>
      <li><input type="checkbox" name="question-42" value="D">D. Physical servers</li>
      <li><input type="checkbox" name="question-42" value="E">E. Antivirus software license</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: CD</p>

      <p>Explanation: <a href="https://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/">https://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/</a></p>

    </details>
  </li>
  <li>Under the shared responsibility model, which of the following tasks are the responsibility of the customer? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-43" value="A">A. Maintaining the underlying Amazon EC2 hardware.</li>
      <li><input type="checkbox" name="question-43" value="B">B. Managing the VPC network access control lists.</li>
      <li><input type="checkbox" name="question-43" value="C">C. Encrypting data in transit and at rest.</li>
      <li><input type="checkbox" name="question-43" value="D">D. Replacing failed hard disk drives.</li>
      <li><input type="checkbox" name="question-43" value="E">E. Deploying hardware in different Availability Zones.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

      <p>Explanation:</p>

      <ul>
        <li>The hardware related jobs is the prime responsibility of AWS. VPC network access control lists is something a customer has to do himself to secure the applications.</li>
        <li>Encrypting data in transit and at rest is a shared responsibility in which AWS plays a part.</li>
        <li>All hardware related jobs have nothing to do with the customer.</li>
      </ul>

      <p>Reference: <a href="https://dzone.com/articles/aws-shared-responsibility-model-cloud-security">https://dzone.com/articles/aws-shared-responsibility-model-cloud-security</a></p>

    </details>
  </li>
  <li>Which scenarios represent the concept of elasticity on AWS? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-44" value="A">A. Scaling the number of Amazon EC2 instances based on traffic.</li>
      <li><input type="checkbox" name="question-44" value="B">B. Resizing Amazon RDS instances as business needs change.</li>
      <li><input type="checkbox" name="question-44" value="C">C. Automatically directing traffic to less-utilized Amazon EC2 instances.</li>
      <li><input type="checkbox" name="question-44" value="D">D. Using AWS compliance documents to accelerate the compliance process.</li>
      <li><input type="checkbox" name="question-44" value="E">E. Having the ability to create and govern environments using code.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: AB</p>

      <p>Explanation: <a href="https://wa.aws.amazon.com/wat.concept.elasticity.en.html">https://wa.aws.amazon.com/wat.concept.elasticity.en.html</a></p>

    </details>
  </li>
  <li>When is it beneficial for a company to use a Spot Instance?
    <ul>
      <li><input type="checkbox" name="question-45" value="A">A. When there is flexibility in when an application needs to run.</li>
      <li><input type="checkbox" name="question-45" value="B">B. When there are mission-critical workloads.</li>
      <li><input type="checkbox" name="question-45" value="C">C. When dedicated capacity is needed.</li>
      <li><input type="checkbox" name="question-45" value="D">D. When an instance should not be stopped.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>

      <ul>
        <li>The key to understanding spot instances is to look at the way that cloud service providers such as Amazon Web Services (AWS) operate.</li>
        <li>Cloud service providers invest in hardware resources and then release those resources (often on a per-hour basis) to subscribers.</li>
        <li>One of the problems with this business model, however, is that at any given time, there are likely to be compute resources that are not being utilized.</li>
        <li>These resources represent hardware capacity that AWS has paid for but are sitting idle, and not making AWS any money at the moment.</li>
        <li>Rather than allowing these computing resources to go to waste, AWS offers them at a substantially discounted rate, with the understanding that if someone needs those resources for running a normal EC2 instance, that instance will take priority over spot instances that are using the hardware resources at a discounted rate.</li>
        <li>In fact, spot instances will be stopped if the resources are needed elsewhere.</li>
      </ul>

      <p>Reference: <a href="https://awsinsider.net/articles/2017/09/25/aws-spot-instances-primer.aspx">https://awsinsider.net/articles/2017/09/25/aws-spot-instances-primer.aspx</a></p>

    </details>
  </li>
  <li>A company is considering moving its on-premises data center to AWS. What factors should be included in doing a Total Cost of Ownership (TCO) analysis? (Choose two.)
    <ul>
      <li><input type="checkbox" name="question-46" value="A">A. Amazon EC2 instance availability</li>
      <li><input type="checkbox" name="question-46" value="B">B. Power consumption of the data center</li>
      <li><input type="checkbox" name="question-46" value="C">C. Labor costs to replace old servers</li>
      <li><input type="checkbox" name="question-46" value="D">D. Application developer time</li>
      <li><input type="checkbox" name="question-46" value="E">E. Database engine capacity</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: BC</p>

    </details>
  </li>
  <li>How does AWS charge for AWS Lambda?
    <ul>
      <li><input type="checkbox" name="question-47" value="A">A. Users bid on the maximum price they are willing to pay per hour.</li>
      <li><input type="checkbox" name="question-47" value="B">B. Users choose a 1-, 3- or 5-year upfront payment term.</li>
      <li><input type="checkbox" name="question-47" value="C">C. Users pay for the required permanent storage on a file system or in a database.</li>
      <li><input type="checkbox" name="question-47" value="D">D. Users pay based on the number of requests and consumed compute resources.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>

      <ul>
        <li>AWS Lambda is charging its users by the number of requests for their functions and by the duration, which is the time the code needs to execute.</li>
        <li>When code starts running in response to an event, AWS Lambda counts a request.</li>
        <li>It will charge the total number of requests across all of the functions used.</li>
        <li>Duration is calculated by the time when your code started executing until it returns or until it is terminated, rounded up near to 100ms.</li>
        <li>The AWS Lambda pricing depends on the amount of memory that the user used to allocate to the function.</li>
      </ul>

      <p>Reference: <a href="https://dashbird.io/blog/aws-lambda-pricing-model-explained/">https://dashbird.io/blog/aws-lambda-pricing-model-explained/</a></p>

    </details>
  </li>
  <li>What function do security groups serve related Amazon Elastic Compute Cloud (Amazon EC2) instance security?
    <ul>
      <li><input type="checkbox" name="question-48" value="A">A. Act as a virtual firewall for the Amazon EC2 instance.</li>
      <li><input type="checkbox" name="question-48" value="B">B. Secure AWS user accounts with AWS identity and Access Management (IAM) policies.</li>
      <li><input type="checkbox" name="question-48" value="C">C. Provide DDoS protection with AWS Shield.</li>
      <li><input type="checkbox" name="question-48" value="D">D. Use Amazon CloudFront to protect the Amazon EC2 instance.</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: A</p>

      <p>Explanation:</p>

      <ul>
        <li>AWS Security Groups act like a firewall for your Amazon EC2 instances controlling both inbound and outbound traffic.</li>
        <li>When you launch an instance on Amazon EC2, you need to assign it to a particular security group.</li>
        <li>After that, you can set up ports and protocols, which remain open for users and computers over the internet.</li>
        <li>AWS Security Groups are very flexible. You can use the default security group and still customize it according to your liking (although we don’t recommend this practice because groups should be named according to their purpose.) Or you can create a security group that you want for your specific applications.</li>
        <li>To do this, you can write the corresponding code or use the Amazon EC2 console to make the process easier.</li>
      </ul>

      <p>Reference: <a href="https://www.threatstack.com/blog/aws-security-groups-what-they-are-and-how-to-get-the-most-out-of-them">https://www.threatstack.com/blog/aws-security-groups-what-they-are-and-how-to-get-the-most-out-of-them</a></p>

    </details>
  </li>
  <li>Which disaster recovery scenario offers the lowest probability of down time?
    <ul>
      <li><input type="checkbox" name="question-49" value="A">A. Backup and restore</li>
      <li><input type="checkbox" name="question-49" value="B">B. Pilot light</li>
      <li><input type="checkbox" name="question-49" value="C">C. Warm standby</li>
      <li><input type="checkbox" name="question-49" value="D">D. Multi-site active-active</li>
    </ul>

    <details>
      <summary>Answer</summary>

      <p>Correct Answer: D</p>

      <p>Explanation:</p>

      <ul>
        <li>Backup and Restore: a simple, straightforward, cost-effective method that backs up and restores data as needed.</li>
        <li>Keep in mind that because none of your data is on standby, this method, while cheap, can be quite time-consuming.</li>
        <li>Pilot Light: This method keeps critical applications and data at the ready so that it can be quickly retrieved if needed.</li>
        <li>Warm Standby: This method keeps a duplicate version of your business’ core elements running on standby at all times, which makes for a little downtime and an almost seamless transition.</li>
        <li>Multi-Site Solution: Also known as a Hot Standby, this method fully replicates your company’s data/ applications between two or more active locations and splits your traffic/usage between them.</li>
        <li>If a disaster strikes, everything is simply rerouted to the unaffected area, which means you’ll suffer almost zero downtime.</li>
        <li>However, by running two separate environments simultaneously, you will obviously incur much higher costs.</li>
      </ul>

      <p>Reference: <a href="https://cloudranger.com/best-practices-aws-disaster-recovery-planning/">https://cloudranger.com/best-practices-aws-disaster-recovery-planning/</a></p>
    </details>
  </li>
</ol>
      `,
    data: []
  },
];