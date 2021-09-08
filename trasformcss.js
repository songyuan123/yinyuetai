//transform css js
(function(w){
	w.transformCss=function(node,name,value){
		if (!node.transform) {
			node.transform={};
		}
		//写
		if(arguments.length>2){
			node.transform[name]=value;
			var result="";
			for(var item in node.transform){
				switch(item){
					case"rotate":
					case"skew": 
					case"skewX":
					case"skewY":
					case"skewZ":
					console.log(item);
					result+=item+"("+node.transform[item]+"deg)";
					break;
					case"scale":
					case"scaleX":
					case"scaleY":
					case"scaleZ":
					console.log(item);
					result+=item+"("+node.transform[item]+")";
					break;
					case"translate":
					case"translateX":
					case"translateY":
					case"translateZ":
					console.log(item);
					result+=item+"("+node.transform[item]+"px)";
					break;
				}
			}
			node.style.transform=result;
		}

		//读
		if (typeof node.transform[name=="undefined"]) {

		}
	}
})