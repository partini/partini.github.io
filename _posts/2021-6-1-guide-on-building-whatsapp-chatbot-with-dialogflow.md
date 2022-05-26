---
layout: post
title: A quick guide on building a WhatsAPP Chat Bot with DialogFlow
excerpt: >-
  The purpose of this article is to set up an integration deployment to connect
  your existing Dialogflow agent with Twilio chat service platform. If you are a
  developer who uses Dialogflow to create different Dialoglow Agents who
  communicate with WhatsAPP, then you will definitely need this article.
footer_type: footer_1_column
featured_image: assets/posts/whatsapp.webp
published: true
background_position: center
---
##### Introduction

I am Arlind Kerqeli, I have been working as a Software Engineer at Incodeks for more than 3 years now. As many of us know, Dialogflow on June 6  2020, has stopped the integration of many platforms that it had automatically, and from now on the implementation of these integrations has shifted to an open source. The purpose of this article is to set up an integration deployment to connect your existing Dialogflow agent with Twilio chat service platform. If you are a developer who uses Dialogflow to create different Dialogflow Agents who communicate with WhatsAPP, then you will definitely need this article.

If you do not have an existing Dialogflow agent, you can set one up by reading the documentation <a href="https://cloud.google.com/dialogflow/docs/" target="_blank">here</a>

##### Initial Setup
Setting up G Cloud CLI

The deployment process for GCP Cloud Run via this article utilizes G Cloud CLI commands. Follow the steps below to set up G Cloud CLI locally for this deployment.

1. On the G Cloud CLI <a href="https://cloud.google.com/sdk/docs/quickstarts">documentation page </a>, select your OS and follow the instructions for the installation.
2. Run G Cloud config get-value project to check the GCP Project configured.
3. Go into the Dialogflow agent’s settings and check the Project ID associated with the agent. The GCP Project configured in the G Cloud CLI should match the agent’s Project ID.
4. If the project IDs do not match, run G Cloud config set project PROJECT-ID, replacing PROJECT-ID with the Project ID from step 3.


##### Service Account Setup (GCP)
For the integration to function properly, it is necessary to create a Service Account in your agent’s GCP Project. See this page of the documentation for more details.
<br>
Follow the steps below to create a Service Account and set up the integration.
<br>
1. Go into the Dialogflow agent’s settings and click on the Project ID link to open its associated GCP Project.
2. Click on the navigation menu in the GCP console, hover over "IAM & admin", and click "Service accounts".
3. Click on "+ CREATE SERVICE ACCOUNT", fill in the details, and give it the "Dialogflow Client API" role.
4. Click on "+ Create Key" and download the resulting JSON key file.
5. Save the JSON key file in the twilio platform subdirectory.
<br>
<br>
If deploying this integration outside of GCP Cloud Run, it may be necessary to set the GOOGLE_APPLICATION_CREDENTIALS environmental variable on the deployment environment to the absolute path of the Service Account JSON key file. See this guide for details.

#####  Deploying the Integration
###### Setup

1. Go into the Dialogflow agent’s settings and click on the Project ID link to open its associated GCP Project.
2. Click on the navigation menu in the GCP console and click "Billing". Set up and enable billing for the project.
3. Enable Cloud Build and Cloud Run API for the project here.
4. Clone this git repository onto your local machine or development environment: git clone https://github.com/GoogleCloudPlatform/dialogflow-integrations.git
5. Open the root directory of the repository on your local machine or development environment.

##### Dockerfile and Creating the Build

Open the <a href="https://github.com/GoogleCloudPlatform/dialogflow-integrations/blob/03676af04840c21c12e2590393d5542602591bee/Dockerfile#L9" target="_blank">Dockerfile </a> in the root directory of the repository, and change YOUR_INTEGRATION in the following line to “Twilio”
<br>
<br>
   ENV INTEGRATION=YOUR_INTEGRATION  → ENV INTEGRATION=twilio
   <br>
<br>
If you have not done so already, copy your Service Account JSON key file to the Twilio platform subdirectory.


##### Twilio (Text Messaging) Integration
###### Setup Prerequisites

1. Create a <a href="https://www.twilio.com/try-twilio" target="_blank">Twilio account.</a>
2. Replace the value of projectId in the server.js file with your Dialogflow agent’s Project ID.

###### Retrieving Credentials

1. Log in to the <a href="https://www.twilio.com/console">Twilio Dashboard.</a>
<br>
2. Under the "Project Info" section, take the values for Account SID and Auth Token and replace the value for accountSid and authToken in the <a href="https://github.com/GoogleCloudPlatform/dialogflow-integrations/blob/03676af04840c21c12e2590393d5542602591bee/twilio/server.js#L34-L35" target="_blank">server.js</a> file respectively. 
<br>
<img src="/assets/posts/unnamed11.png" style="width: 100%;height: 400px; object-fit:contain">

##### Deploying the Integration Using Cloud Run

In your local terminal, change the active directory to the twilio root directory.

Run the following command to save the state of your repository into <a href="https://console.cloud.google.com/gcr/" target="_blank">GCP Container Registry.</a> Replace PROJECT-ID with your agent’s GCP Project ID.
<br><br>
G Cloud builds submit --tag gcr.io/PROJECT-ID/dialogflow-twilio
<br><br>
Deploy your integration to live using the following command. Replace PROJECT-ID with your agent’s GCP project Id and YOUR_KEY_FILE with the name (not path) of your Service Account JSON key file.
<br><br>
G Cloud beta run deploy --image gcr.io/PROJECT-ID/dialogflow-twilio --update-env-vars GOOGLE_APPLICATION_CREDENTIALS=YOUR_KEY_FILE 
--memory 1Gi

1. hen prompted for a target platform, select a platform by entering the corresponding number (for example, 1 for Cloud Run (fully managed)).
2. When prompted for a region, select a region (for example, us-central1).
3. When prompted for a service name hit enter to accept the default.
4. When prompted to allow unauthenticated invocations press y.
5. Copy the URL given to you, and use it according to the README file in the given integration's folder.



##### Setting up Phone Number
1. In the "Phone Number" section, go to Active numbers.
2. Click on the purchased number.
3. Underneath "Messaging", take the value for the server URL printed in the console after the completion of the execution of the last command from the above section to the "A message comes in" fill-in box. Set the first drop-down to Webhook and the HTTP method to HTTP POST.
<img src="/assets/posts/unnamed12.png" style="width: 100%;height: 250px; object-fit:contain">
<br><br>
If you don't understand anything or need help with this article please contact arlind@incodeks.com.
<br><br>
Thank you for your attention.

 

 
##### Author: Arlind Kerqeli
