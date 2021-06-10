---
layout: post
title: A quick guide on building an WhatsAPP Chatbot with DialogFlow
excerpt: >-
  The purpose of this article is to set up an integration deployment to connect
  your existing Dialogflow agent with Twilio chat service platform. If you are a
  developer who uses Dialogflow to create different Dialoglow Agents who
  communicate with WhatsAPP, then you will definitely need this article.
footer_type: footer_1_column
featured_image: assets/img/foto12.png
published: true
---
## Introduction

As many of us know, Dialogflow on June 6  2020 will stop the integration of many platforms that it had automatically, and from now on the implementation of these integrations has shifted to an open source. The purpose of this article is to set up an integration deployment to connect your existing Dialogflow agent with Twilio chat service platform. If you are a developer who uses Dialogflow to create different Dialoglow Agents who communicate with WhatsAPP, then you will definitely need this article.

If you do not have an existing Dialogflow agent, you can set one up by reading the documentation here.

## Initial Setup
Setting up G Cloud CLI
The deployment process for GCP Cloud Run via this article utilizes G Cloud CLI commands. Follow the steps below to set up G Cloud CLI locally for this deployment.

On the G Cloud CLI documentation page, select your OS and follow the instructions for the installation.
Run G Cloud config get-value project to check the GCP Project configured.
Go into the Dialogflow agent’s settings and check the Project ID associated with the agent. The GCP Project configured in the G Cloud CLI should match the agent’s Project ID.
If the project IDs do not match, run G Cloud config set project PROJECT-ID, replacing PROJECT-ID with the Project ID from step 3.
Service Account Setup (GCP)
For the integration to function properly, it is necessary to create a Service Account in your agent’s GCP Project. See this page of the documentation for more details.

Follow the steps below to create a Service Account and set up the integration.

Go into the Dialogflow agent’s settings and click on the Project ID link to open its associated GCP Project.
Click on the navigation menu in the GCP console, hover over “IAM & admin”, and click “Service accounts”.
Click on “+ CREATE SERVICE ACCOUNT”, fill in the details, and give it the “Dialogflow Client API” role.
Click on “+ Create Key” and download the resulting JSON key file.
Save the JSON key file in the twilio platform subdirectory.
If deploying this integration outside of GCP Cloud Run, it may be necessary to set the GOOGLE_APPLICATION_CREDENTIALS environmental variable on the deployment environment to the absolute path of the Service Account JSON key file. See this guide for details.

##  Deploying the Integration
### Setup
Go into the Dialogflow agent’s settings and click on the Project ID link to open its associated GCP Project.
Click on the navigation menu in the GCP console and click “Billing”. Set up and enable billing for the project.
Enable Cloud Build and Cloud Run API for the project here.
Clone this git repository onto your local machine or development environment: git clone https://github.com/GoogleCloudPlatform/dialogflow-integrations.git
Open the root directory of the repository on your local machine or development environment.
Dockerfile and Creating the Build
Open the Dockerfile in the root directory of the repository, and change YOUR_INTEGRATION in the following line to “Twilio”

ENV INTEGRATION=YOUR_INTEGRATION  → ENV INTEGRATION=twilio

If you have not done so already, copy your Service Account JSON key file to the Twilio platform subdirectory.


## Twilio (Text Messaging) Integration
### Setup Prerequisites

Create a Twilio account.
Replace the value of projectId in the server.js file with your Dialogflow agent’s Project ID.
Retrieving Credentials
Log in to the Twilio Dashboard.
Under the “Project Info” section, take the values for Account SID and Auth Token and replace the value for accountSid and authToken in the server.js file respectively.
Deploying the Integration Using Cloud Run
In your local terminal, change the active directory to the twilio root directory.

Run the following command to save the state of your repository into GCP Container Registry. Replace PROJECT-ID with your agent’s GCP Project ID.

G Cloud builds submit –tag gcr.io/PROJECT-ID/dialogflow-twilio

Deploy your integration to live using the following command. Replace PROJECT-ID with your agent’s GCP project Id and YOUR_KEY_FILE with the name (not path) of your Service Account JSON key file.

G Cloud beta run deploy –image gcr.io/PROJECT-ID/dialogflow-twilio –update-env-vars GOOGLE_APPLICATION_CREDENTIALS=YOUR_KEY_FILE –memory 1Gi

When prompted for a target platform, select a platform by entering the corresponding number (for example, 1 for Cloud Run (fully managed)).
When prompted for a region, select a region (for example, us-central1).
When prompted for a service name hit enter to accept the default.
When prompted to allow unauthenticated invocations press y.
Copy the URL given to you, and use it according to the README file in the given integration’s folder.

## Setting up Phone Number
In the “Phone Number” section, go to Active numbers.
Click on the purchased number.
Underneath “Messaging”, take the value for the server URL printed in the console after the completion of the execution of the last command from the above section to the “A message comes in” fill-in box. Set the first drop-down to Web-hook and the HTTP method to HTTP POST.
 

 

### Author: Arlind Kerqeli


