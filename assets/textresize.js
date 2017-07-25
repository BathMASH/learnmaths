function setSize(iSize)
{
    if(!document.getElementsByTagName)
        return false;
    var bodyTag = document.getElementsByTagName("body");
    for(var i=0; i < bodyTag.length; i++)
    {
        if(!bodyTag[i].style.fontSize)
        {
            if(!readCookie("UoB-textSize") || iSize == 'reset')
                bodyTag[i].style.fontSize = "80%";
            else
                bodyTag[i].style.fontSize =((parseFloat(readCookie("UoB-textSize"))) + "%");
        }
        else
        {
            if(!readCookie("UoB-textSize") || iSize == 'reset')
                bodyTag[i].style.fontSize = "80%";
            else if(iSize == 'textsmall')
                bodyTag[i].style.fontSize = "70%";
            else if(iSize == 'textnormal')
                bodyTag[i].style.fontSize = "80%";
            else if(iSize == 'textlarge')
                bodyTag[i].style.fontSize = "90%";
            else if(iSize == 'textlargest')
                bodyTag[i].style.fontSize = "100%";
            else if((iSize.charAt(0) == '+' && parseFloat(readCookie("UoB-textSize")) < 100) ||
                    (iSize.charAt(0) == '-' && parseFloat(readCookie("UoB-textSize")) > 60))
                bodyTag[i].style.fontSize = (((parseFloat(iSize)) + (parseFloat(readCookie("UoB-textSize")))) + "%");
        }
        var cookieValue = bodyTag[i].style.fontSize;
        writeCookie("UoB-textSize", cookieValue, 168);
    }
    return false;
}
function resizeT(iID, iDir)
{
    if(!document.getElementById)
        return false;
    if(document.getElementById(iID))
    {
        var incLink = document.getElementById(iID);
        if(iDir == "decrease")
        {
            incLink.onclick = function() { setSize("-10%"); return false; }
        }
        if(iDir == "reset")
        {
            incLink.onclick = function() { setSize("reset"); return false; }
        }
        if(iDir == "increase")
        {
            incLink.onclick = function() { setSize("+10%"); return false; }
        }
        if(iDir == "textsmall")
        {
            incLink.onclick = function() { setSize("textsmall"); return false; }
        }
        if(iDir == "textnormal")
        {
            incLink.onclick = function() { setSize("textnormal"); return false; }
        }
        if(iDir == "textlarge")
        {
            incLink.onclick = function() { setSize("textlarge"); return false; }
        }
        if(iDir == "textlargest")
        {
            incLink.onclick = function() { setSize("textlargest"); return false; }
        }
    }
    return false;
}
function writeCookie(name, value, hours)
{
    var expire = "";
    if(hours != null)
    {
        expire = new Date((new Date()).getTime() + hours * 3600000);
        expire = "; expires=" + expire.toGMTString();
    }
    document.cookie = name + "=" + escape(value) + expire + '; path=/';
}
function readCookie(name)
{
    var cookieValue = "";
    var search = name + "=";
    if(document.cookie && document.cookie.length > 0)
    {
        var offset = document.cookie.indexOf(search);
        if(offset != -1)
        {
            offset += search.length;
            var end = document.cookie.indexOf(";", offset);
            if(end == -1)
                end = document.cookie.length;
            var cookieValue = unescape(document.cookie.substring(offset, end))
        }
    }
    return cookieValue;
}function initMenu()
{
    if(!document.getElementById)
        return false;

    addEventHandler(document.getElementById('leftcol'), 1);

    function addEventHandler(currentElement, depth)
    {
	    if(currentElement && currentElement.tagName && depth == 4 && currentElement.tagName == 'UL')
	    {
	        var topListItems = currentElement.childNodes;
	        for(var j = 0; j < topListItems.length; j++)
	        {
	            var linksOrSubLists = topListItems[j].childNodes;
	            for(var k = 0; k < linksOrSubLists.length; k++)
	            {
	                if(linksOrSubLists[k].tagName && linksOrSubLists[k].tagName == 'A')
	                    if(linksOrSubLists[k].href.replace(/\/index\.?(s?html?|php)?$/, '/') == document.location.href.replace(/\/index\.?(s?html?|php)?$/, '/'))
	                        linksOrSubLists[k].className = 'highlight';
	                if(linksOrSubLists[k].tagName && linksOrSubLists[k].tagName == 'UL')
	                {
	                    var topLinks = linksOrSubLists[k].parentNode.childNodes;
	                    for(var z = 0; z < topLinks.length; z++)
	                        if(topLinks[z].tagName && topLinks[z].tagName == 'A' && linksOrSubLists[k].className != 'static')
	                            topLinks[z].onclick = function() { return showHideMenu(this) }
	                    var subMenuOpen = linksOrSubLists[k].parentNode.className == 'open' ? true : false;
	                    var subListItems = linksOrSubLists[k].childNodes;
	                    for(var l = 0; l < subListItems.length; l++)
	                    {
	                        if(subListItems[l].tagName && subListItems[l].tagName == 'LI')
	                        {
	                            var subLinks = subListItems[l].childNodes;
	                            for(var m = 0; m < subLinks.length; m++)
	                            {
	                                if(subLinks[m].tagName && subLinks[m].tagName == 'A' && subLinks[m].href.replace(/\/index\.?(s?html?|php)?$/, '/') == document.location.href.replace(/\/index\.?(s?html?|php)?$/, '/'))
	                                {
                                        subLinks[m].className = 'highlight';
                                        subMenuOpen = true;
	                                }
	                            }
	                        }
	                    }
	                    if(subMenuOpen && linksOrSubLists[k].className != 'static')
	                        linksOrSubLists[k].parentNode.className = 'submenuopen';
	                    else if(linksOrSubLists[k].className != 'static')
	                        linksOrSubLists[k].parentNode.className = 'submenu';
	                }
	            }
	        }
	    }
	    var i = 0;
	    var currentElementChild = currentElement.childNodes[i];
	    while(currentElementChild)
	    {
	        addEventHandler(currentElementChild, depth + 1);
	        i++;
	        currentElementChild = currentElement.childNodes[i];
	    }
    }
    return false;
}
function showHideMenu(e)
{
    e.parentNode.className = e.parentNode.className == 'submenu' ? 'submenuopen' : 'submenu';
    return false;
}
document.write("<style type='text/css'>\n#leftcol dd ul li ul {display:none}\n#leftcol dd ul li.submenu ul {display:none}\n#leftcol dd ul li.submenu a {background-image:url(http://www.bath.ac.uk/assets/php/rightcolarrow.php?p=36c);background-position:191px 4px;background-repeat:no-repeat}\n#leftcol dd ul li.submenu a:hover {background:#cde url(http://www.bath.ac.uk/assets/php/rightcolarrow.php?p=36c) 191px 4px no-repeat}\n#leftcol dd ul li.submenuopen a {background-image:url(http://www.bath.ac.uk/assets/php/downarrow.php?p=36c);background-position:188px 10px;background-repeat:no-repeat}\n#leftcol dd ul li.submenuopen a:hover {background:#cde url(http://www.bath.ac.uk/assets/php/downarrow.php?p=36c) 188px 10px no-repeat}\n#leftcol dd ul li ul.static {display:block}</style>");
window.onload = function()
{    resizeT("textplus", "increase");
    resizeT("textreset", "reset");
    resizeT("textminus", "decrease");
    resizeT("textsmall", "textsmall");
    resizeT("textnormal", "textnormal");
    resizeT("textlarge", "textlarge");
    resizeT("textlargest", "textlargest");
    setSize("80%");
    initMenu();
}