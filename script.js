//your JS code here. If required.
function daysofAYear(year) {
	
	if(year%4===0 || year%100===0 & year%400===0 & year%4===0)
	{
		return 366;
	}
	return 365;
}