---
layout: post
title:  "CELERY AUTOSCALE"
date:   2018-02-18 12:00:00
categories: project
description: Push celery queue metrics on AWS cloudwatch for monitoring and autoscaling
img: celery-autoscale_logo.png
github_url: "https://github.com/gofynd/celery-autoscale"


---


<p>Celery Autoscale is a service powered by AWS Lambda that runs every minute and collect total pending task from broker (Redis or RabbitMQ) put the metric (pendingTask) on Cloudwatch. These celery inspect support redis and rabbitMQ broker.</p>

<br>
<h3>This metric can be used for following purpose:</h3>

<p>  - To trigger scale up and scale down activity for celery worker autoscaling group.</p>
<p>  - To trigger alarm mails if pending task count goes too high.</p>

<p>By Pratik patel and Fahim Sakri</p>

