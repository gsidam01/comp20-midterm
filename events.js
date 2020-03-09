function show_article(which_article)
{
	var articles = document.getElementsByTagName("article");
	for (let i = 0; i< articles.length; i++) {
		articles[i].style.display = "none";
	}
	document.getElementById("opening").style.display = "none";
	document.getElementById(which_article).style.display = "block";
}