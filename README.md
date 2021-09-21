# Belly_Button_Biodiversity

Module 12 - Using Plotly and JS
Completed by Angela Kumar

## Purpose

Build an interactive dashboard using Plotly.js to explore the data on the biodiversity of belly buttons. Then deploy the dashboard to a cloud server.

## Objective

The metadata consists of an array of 153 participants that revealed a handful of microbial bacterial species or operational taxonomic units(OTU) in 70% of the volunteers tested that were similar, and the others were quite rare.  The goal was to create an interactive data visualization for each volunteer and the bacteria in their sample.  A gauge also monitored the frequency one washed the belly button in a week!  

## Resources

Data: samples.json; bar chart starter code; bubble chart starter code; gauge chart starter code;

Software: VSCode, JavaScript, Plotly.js, Bootstrap, CSS, Google Chrome, Gitbash, GitHub, GitHub Pages.

Belly Button Data Set 1
Description: Taxonomic data matrix (sheet 1) and meta-data matrix with participant-reported information and derived environmental factors (sheet 2). 153 participants are represented in this data set (same participants as in Interactive Chart 1), including 60 individuals whose data were included in Hulcr et al 2012.
http://robdunnlab.com/projects/belly-button-biodiversity/

Hulcr J, Latimer AM, Henley JB, Rountree NR, Fierer N, et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. PLoS ONE 7(11): e47712. doi:10.1371/journal.pone.0047712

## Background

Roza has a partially completed dashboard that she needs to finish. She has a completed panel for demographic information and now needs to visualize the bacterial data for each volunteer. Specifically, her volunteers should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, Roza's volunteers will be able to identify whether that species is found in their navel.

## Deliverables

**Deliverable 1: Create a Horizontal Bar Chart**

Using the knowledge of JavaScript, Plotly, and D3.js, create a horizontal bar chart to display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage. The horizontal bar chart will display the sample_values as the values, the otu_ids as the labels, and the otu_labels as the hover text for the bars on the chart.

![940 bar chart screenshot](https://user-images.githubusercontent.com/85860367/134112248-e5ecbd88-b6e2-4489-9b48-bf15635a625f.png)


**Deliverable 2: Create a Bubble Chart**

Using the knowledge of JavaScript, Plotly, and D3.js, create a bubble chart that will display the following when an individual’s ID is selected from the dropdown menu webpage:

The otu_ids as the x-axis values.
The sample_values as the y-axis values.
The sample_values as the marker size.
The otu_ids as the marker colors.
The otu_labels as the hover-text values.

![940 bubble screenshot](https://user-images.githubusercontent.com/85860367/134112495-e77051fa-6089-41df-a3d8-cd847331fde8.png)

**Deliverable 3: Create a Gauge Chart**

Using the knowledge of JavaScript, Plotly, and D3.js, create a gauge chart that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart when an individual ID is selected from the dropdown menu.

<img width="340" alt="Gauge snapshot" src="https://user-images.githubusercontent.com/85860367/134112978-23589f69-34af-45cc-8e2d-9798d17e6013.PNG">

**Deliverable 4: Customize the Dashboard**

Use your knowledge of HTML and Bootstrap to customize the webpage for your dashboard.

* Customize your dashboard with three of the following:
* Add an image to the jumbotron.
* Add background color or a variety of compatible colors to the webpage.
* Use a custom font with contrast for the colors.
* Add more information about the project as a paragraph on the page.
* Add information about what each graph visualizes, either under or next to each graph.
* Make the webpage mobile-responsive.
* Change the layout of the page.
* Add a navigation bar that allows you to select the bar or bubble chart on the page.
* When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard, and the three charts should be working according to their requirements.
* When a sample is selected, the dashboard should display the data in the panel and all three charts according to their requirements.

Before the enhancements:

<img width="834" alt="Dashboard part 1" src="https://user-images.githubusercontent.com/85860367/134113510-4282cf7d-4b9e-4bbd-af8e-eb380b30e4ab.PNG">

<img width="659" alt="Dashboard part 2" src="https://user-images.githubusercontent.com/85860367/134113540-ad714bbb-68c8-4fdf-9fa2-8b9655be3818.PNG">

After the enhancements:

<img width="646" alt="After Dashboard" src="https://user-images.githubusercontent.com/85860367/134114633-44adcbdc-e5c5-42f8-a231-8692a1394099.PNG">

## Summary

This was a fun assignment utilizing what we have learned with JavaScript, Plotly, Bootstrap.  The challenge was to ensure that everything was interactive with all 3 charts. The data, charts were very interesting to look at and to learn about the uniqueness of microbial biodiversity in a person's belly button.  The bacterial biodiversity is so different from person to person that is based on their DNA.  The most common skin bacteria encountered on participants in the Belly Button Biodiversity Project belonged to the groups Staphylococci, Corynebacteria, Actinobacteria, Clostridiales, and Bacilli.  The data had 7 categories to filter through for each participant: ID, Ethnicity, Gender, Age, Location, BBType, Weekly Washing Frequency.  
