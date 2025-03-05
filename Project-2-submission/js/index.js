function PageLoad(){ 

    const MsgTxt = "# index: page load" 
    console.log(MsgTxt.toUpperCase()) 
} 
    
   
function TxtClear(){ 
   
    let MsgTxt = "# index: text clear" 
    console.log(MsgTxt.toUpperCase()) 
   
    const TxtSearch = document.getElementById("TxtSearch"); 
    const DivDisplayInfo = document.getElementById("DivDisplayInfo"); 
    
    if (TxtSearch == null | TxtSearch == undefined){ 
    MsgTxt = "TxtSearch not found" 
    console.log(MsgTxt) 
    return false; 
    } 
    
    TxtSearch.value = ""; 
    TxtSearch.focus(); 
   } 
   
    
   function btnSearch(){ 
   
    let MsgTxt = "# index: btnSearch" 
    console.log(MsgTxt.toUpperCase()) 
   
    const TxtSearch = document.getElementById("TxtSearch"); 
    const SearchTxt = TxtSearch.value; 
    const DivDisplayInfo = document.getElementById("DivDisplayInfo");  
   
    if (TxtSearch == null){ 
   
    MsgTxt = "# TxtSearch not found" 
    console.log(MsgTxt) 
    return false; 
   } 
   
   
   if (DivDisplayInfo == null){ 
    MsgTxt = "# DivDisplayInfo not found" 
    console.log(MsgTxt) 
    return false; 
   } 
   
    
   if (TxtSearch.value.trim().length == 0){ 
     MsgTxt = "# Please enter a valid search text" 
     console.log(MsgTxt) 
     DivDisplayInfo.innerText = MsgTxt; 
     return false; 
   } 
   
    
   MsgTxt = "# Searching for: " + TxtSearch.value 
   DivDisplayInfo.innerText = MsgTxt; 
   
    TxtSearch.focus(); 
   
} 
   
  
function btnSearch()
{   
   const TxtSearch = document.getElementById("TxtSearch"); 
   const SearchTxt = TxtSearch.value; 
   
   const GiphyResultDataFile = "./data/giphy2.json"
   const GiphyApiKey = "svkiRPIsPepRcQXtceh4ur5ByjGqY7bq"; 
   //const GiphyApiKey = ""; 
   const GiphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${GiphyApiKey}&q=${SearchTxt}&limit=25&rating=g`; 
    
   let RequestUrl = (GiphyApiKey.trim().length == 0)? GiphyResultDataFile : GiphyUrl; 
   
   console.log("---- RequestUrl ----"); 
   console.log(RequestUrl); 
   console.log(""); 
   
   fetch(RequestUrl) 
   .then(response => { 
   
    if (!response.ok){ 
    throw new Error('Network response was not ok'); 
   } 
   
     return response.json(); 
   }) 
   .then(data => { 
   
   console.log("#### giphy fetch.promise then - post data ###") 
   console.log(data); 
   
    console.log(""); 
    console.log("-------giphy json data as string----"); 
    console.log(JSON.stringify(data)); 
    console.log("");  
   
    let Image = ""; 
   
    if (data == null | data.data.length == 0){ 
    DivDisplayInfo.innerText = "# No results found"; 
    return false; 
   } 
   
   Image = data.data[0].images.original.url; 
   
   console.log("---- First Image ----"); 
   console.log(Image); 
   console.log(""); 
   
   let HTML = "<div>" 
   
   for(i=0;i<data.data.length;i++){ 
    if (i>10) 
    { 
    break; 
    } 
   
    Image = data.data[i].images.original.url; 
    HTML += `<img width='200' height='200' src='${Image}' style='padding:5px'>` 
   } 
   
    HTML += "</div>" 
    console.log("---- HTML String ----"); 
    console.log(HTML); 
    console.log(""); 
   
     DivDisplayInfo.innerHTML = HTML; 
   }) 
   .catch(error => { 
    console.error('## There was a problem with the fetch operation:', error); 
    DivDisplayInfo.innerText = error; 
   });  
   
   console.log("...continue fetching giphy data...demo of non blocking code") 
   DivDisplayInfo.innerText = "...continue fetching giphy data...demo of non blocking code" 
   
   return false;
}