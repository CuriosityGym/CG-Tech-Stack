var myJSON='{"name": "CuriosityGym", "children":[]}'
var renderingJSON=JSON.parse(myJSON);

function doesApplicationExists(AppName)
{
	lengthOfApplications=renderingJSON["children"].length;
	applicationExists=false;
	for(index=0;index<lengthOfApplications;index++)
	{
		lAppName=renderingJSON["children"][index]["name"]
		//console.log(lAppName);
		if(lAppName==AppName)
		{
			applicationExists=true;
			//console.log("Found");
			return index;
			
		}
	}
	
	return -1;
}

function addApplication(AppName)
{
	applicationIndex=doesApplicationExists(AppName);
	//console.log(AppName + " applicationIndex: "+applicationIndex);
	if(applicationIndex==-1)
	{
		//Find out the last length of Applications
		lengthOfApplications=renderingJSON["children"].length;
		//console.log(lengthOfApplications);
		renderingJSON["children"][lengthOfApplications]={};
		renderingJSON["children"][lengthOfApplications].name=AppName;
		renderingJSON["children"][lengthOfApplications].children=[];
		return lengthOfApplications;
	}
	
		
}

function addComponent(AppName, componentName, circleSize, color="white", toolTipText="")
{
	applicationIndex=doesApplicationExists(AppName);
	//console.log(AppName + " applicationIndex: "+applicationIndex);
	if(applicationIndex==-1)
	{
		applicationIndex=addApplication(AppName);
	}
	
	componentsLength=renderingJSON["children"][applicationIndex]["children"].length;
	renderingJSON["children"][applicationIndex]["children"][componentsLength]={}		
	renderingJSON["children"][applicationIndex]["children"][componentsLength].name=componentName
	renderingJSON["children"][applicationIndex]["children"][componentsLength].size=circleSize
	renderingJSON["children"][applicationIndex]["children"][componentsLength].color=color;
	renderingJSON["children"][applicationIndex]["children"][componentsLength].toolTipText=toolTipText;
	
	
	
	
}




