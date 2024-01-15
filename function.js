window.function = function (csv,title,foreground,background,bullet,fontSize,lineHeight,padding,separator)
{

  // Initialise our local variables
  let c = csv.value ?? '';
  let t = title.value ?? '';
  let f = foreground.value ?? '#ffffff';
  let b = background.value ?? '#000000';
  let bu = bullet.value ?? '';
  let fs = fontSize.value ?? '90%';
  let lh = lineHeight.value ?? '140%';
  let p = padding.value ?? '20px';
  let sep = separator.value ?? ',';
  let r = '';
  
  // Check if csv is empty
  if (c == '')
  {
    return(r);
  }

  // Add formatting prefix

  r += '<p style = "' +
       'color:' + f + ';' +
       'background-color:' + b + ';' +
       'text-align:left;' +
       'font-size:' + fs + ';' +
       'font-weight:normal;' +
       'font-variant:normal;' +
       'line-height:' + lh + ';' +
       'border-radius:10px;' +
       'display:inline-block;' +
       'padding-top:' + p + ';' +
       'padding-bottom:' + p + ';' +
       'padding-left:' + p + ';' +
       'padding-right:' + p + ';' +
       'width:100%;' +
       '">';

  // Add title if required

  if (t != '')
  {
    r += '<b>' + t + ':</b><br>';
  }
  
  // Create array of items split by separator
   
  let ac = c.split(sep);
  
  // Iterate array of items

  ac.forEach(addItem);

  // Return the banner
  
  return(r);

  // Iterator callback to add item to r with <br> for all but final item 
  
  function addItem(value,index,array)
  {
    if(bu != '')
    {
      r += bu;
    }  
    r += value;
    if(index != array.length - 1)
    {  
       r += "<br>";
    }
  }
}
