function shortcut(s1, s2) {
  // your code here
	if(s1.charAt(0)=="" || s2.charAt(0)==""){
		return "";
	}else{
	let c=s1.charAt(0)+s2.charAt(0);
		return c;
	}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
