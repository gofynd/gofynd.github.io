---
layout: post
title:  "ALB LOG PARSER"
date:   2018-02-17 12:00:00
categories: project
description: Parse ALB logs and load in Athena using Serverless Framework
img: alb-log-parser1_logo.png
github_url: "https://github.com/gofynd/alb-logs-parser"


---

<p>
Alb Log Parser is a tool built on serverless framework which parses the ALB logs and load them in Athena. Logs can be fetched by simple SQL query on Athena table.
</p>

<br>

<p>
This tool deploys 3 Lambda functions.</p>

<h3>
Copy ALB Logs
</h3>


<p>
This function triggeres on the put event of S3 bucket where ALb logs are dumped. When ever a new file is pushed in the bucket from ALB, This func copies that file to project bucket which is created at the time of deployment. It then creates the DB and table in Athena.
</p>

<h3>
Repair Disk Athena
</h3>
<p>This function triggeres once in a day at 12:06 am. Athena creates a new partition for every year then every month and day. Eg if date is 17/02/2018, log file path will be 2018/02/17/{filename}. So every day new partition is created. This function is responsible for loading that new partition by executing a query in athena.</p>

<h3>
Fetch Data From Athena
</h3>
<p>This function triggeres after every 5 minutes as ALB push logs every 5 minutess. It executes query to fetch data(by default non 200 http status urls) and post them to logz io.</p>

<p>By Amboj Goyal and Karandeep Singh Johar</p>
