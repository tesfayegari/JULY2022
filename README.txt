JULY2022 Documentation

Powr Platform (Power Apps and Power Automate)

Html, CSS, JS,Typescript, JSON, React, UI Framework (Bootstrap, Fluent UI/Office Fabric UI), SharePoint REST API, Graph API, SPFx

Html, CSS and javaScript are the three components of a Web

Html: Content (Structure)
CSS: Formatting, Style, Spacing, coloring etc 
JS: Behaviour 

Html: usually file extensions .html 
<html>
	<head>
		
	</head>
</html>


Tags

Headings: h1, h2, .... h6
Paragraph: p 
links: a href property is required
images: img  src property is required 
bulleted list: ul, li 
ordered list: ol li
div: block element
span: inline element
iframe: content from different location 

Form Elements: 
input: text box, checkbox, password, radio button, button, date picker
select, option  - dropdown 
button 

Cascading Style Sheet (CSS)

Synax: 
selector {
	property1: value1;
	property2: value2;
	}

	Selector can be elements example: p, a, h1, h2.....
	p {color: red;}

	Selector can be an id attribute of an element, example for id="myID"
	#myID {color: blue;}

	Selector can be a class attribute of an element, example class="myClass1"
	.myClass1 {color: green;}

	When element is in a parent element you can target like below 
	parent1 parent2 element1 {}
	p span {} -> targetting span in a p element 

	JavaScript/TypeScript Programming language 

	variables 
	  Data Types 
	Operations and Operators (on primitive data types)
	Decission makings (Logical/conditional Operators and statements)
	Repetition (Looping )
	Object Oriented Programming 
	JSON (Java Script Object Notation)
	Events (click event ....)- Event handling Programming


Reference: W3Schools html 


SahrePoint REST API EndPoint (SP online url https://tenantName.sharepoint.com/sites/siteName)
entry point: siteUrl/_api
Sample: 
To get Site Information 
siteUrl/_api/site

Web Information 
siteUrl/_api/web

Get all lists  (including hidden ones)
siteUrl/_api/web/lists

Filtering, sorting, selectign specific fields(properties) in REST API (oData)
example get all non hidden sharepoint lists using oData filter $filter=property operator value 
siteUrl/_api/web/lists?$filter=Hidden eq false

Specific properties only for all non hidden lists oData to get specific propertis $select=prop1,prop2,..

























