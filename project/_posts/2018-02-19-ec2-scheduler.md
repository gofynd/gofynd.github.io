---
layout: post
title:  "EC2 SCHEDULER"
date:   2018-02-19 12:00:00
categories: project
description: Powered by AWS Lambda to automatically schedule ec2 instances 
img: ec2_scheduler_logo.png
github_url: "https://github.com/gofynd/ec2-scheduler"


---


<p>ec2-scheduler is a service powered by AWS Lambda. Setup up a tag AutoStartSchedule and AutoStopSchedule with cron values. This gives a flexibility for configuring start and stop times for EC2 Instances as per need. The lambda runs every 30 mins and validate every instance tag values with specified time zone datetime. This lambda has POST api support to start and stop EC2 Instance.</p>

<br>
<p>By Pratik patel and Fahim Sakri</p>

